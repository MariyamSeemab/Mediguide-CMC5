import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Navbar from '../components/Navbar';
import CategoryNavbar from '../components/CategoryNavbar';
import ProductCard from '../components/ProductCard';
import { Product } from '../services/marketplaceService';
import { getProductsByCategory } from '../utils/productData';
import './CategoryPage.css';

const CategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const { t } = useLanguage();
  const [sortBy, setSortBy] = useState('popularity');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [minRating, setMinRating] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (category) {
      const categoryProducts = getProductsByCategory(category);
      setProducts(categoryProducts);
      setFilteredProducts(categoryProducts);
    }
  }, [category]);

  useEffect(() => {
    let filtered = [...products];

    // Apply price filter
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Apply brand filter
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(p => selectedBrands.includes(p.brand || ''));
    }

    // Apply rating filter
    if (minRating > 0) {
      filtered = filtered.filter(p => p.rating >= minRating);
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // popularity - keep original order
        break;
    }

    setFilteredProducts(filtered);
  }, [products, priceRange, selectedBrands, minRating, sortBy]);

  const availableBrands = Array.from(new Set(products.map(p => p.brand).filter(Boolean)));

  const getCategoryTitle = () => {
    const titles: { [key: string]: string } = {
      'mens-care': t('marketplace.categories.mensCare'),
      'womens-care': t('marketplace.categories.womensCare'),
      'baby-care': t('marketplace.categories.babyCare'),
      'general-medicine': t('marketplace.categories.generalMedicine'),
      'personal-care': t('marketplace.categories.personalCare'),
      'health-devices': t('marketplace.categories.healthDevices')
    };
    return titles[category || ''] || 'Products';
  };

  const getCategoryDescription = () => {
    const descriptions: { [key: string]: string } = {
      'mens-care': t('category.mensCare.description'),
      'womens-care': t('category.womensCare.description'),
      'baby-care': t('category.babyCare.description'),
      'general-medicine': t('category.generalMedicine.description'),
      'personal-care': t('category.personalCare.description'),
      'health-devices': t('category.healthDevices.description')
    };
    return descriptions[category || ''] || 'Browse our collection';
  };

  return (
    <div className="category-page">
      <Navbar />
      <CategoryNavbar />

      <div className="category-content">
        <div className="category-header">
          <h1>{getCategoryTitle()}</h1>
          <p>{getCategoryDescription()}</p>
        </div>

        <div className="category-main">
          <button 
            className="filter-toggle-mobile"
            onClick={() => setShowFilters(!showFilters)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="4" y1="21" x2="4" y2="14"/>
              <line x1="4" y1="10" x2="4" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="12"/>
              <line x1="12" y1="8" x2="12" y2="3"/>
              <line x1="20" y1="21" x2="20" y2="16"/>
              <line x1="20" y1="12" x2="20" y2="3"/>
              <line x1="1" y1="14" x2="7" y2="14"/>
              <line x1="9" y1="8" x2="15" y2="8"/>
              <line x1="17" y1="16" x2="23" y2="16"/>
            </svg>
            Filters
          </button>

          <aside className={`filter-sidebar ${showFilters ? 'show' : ''}`}>
            <div className="filter-section">
              <h3>{t('category.filter.sortBy')}</h3>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="popularity">{t('category.filter.popularity')}</option>
                <option value="price-low">{t('category.filter.priceLowToHigh')}</option>
                <option value="price-high">{t('category.filter.priceHighToLow')}</option>
                <option value="rating">{t('category.filter.rating')}</option>
              </select>
            </div>

            <div className="filter-section">
              <h3>{t('category.filter.priceRange')}</h3>
              <div className="price-range-labels">
                <span className="price-min-label">₹{priceRange[0]}</span>
                <span className="price-max-label">₹{priceRange[1]}</span>
              </div>
              <div className="price-slider-container">
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="100"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                  className="price-slider price-slider-min"
                />
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="price-slider price-slider-max"
                />
              </div>
              <div className="price-inputs">
                <input
                  type="number"
                  placeholder={t('category.filter.min')}
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                  min="0"
                  max="5000"
                />
                <span>-</span>
                <input
                  type="number"
                  placeholder={t('category.filter.max')}
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  min="0"
                  max="5000"
                />
              </div>
            </div>

            <div className="filter-section">
              <h3>{t('category.filter.rating')}</h3>
              <div className="rating-filters">
                {[4, 3, 2, 1].map((rating) => (
                  <label key={rating} className="rating-option">
                    <input
                      type="radio"
                      name="rating"
                      checked={minRating === rating}
                      onChange={() => setMinRating(rating)}
                    />
                    <span>{rating}★ {t('category.filter.andAbove')}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h3>{t('category.filter.brand')}</h3>
              <div className="brand-filters">
                {availableBrands.map((brand) => (
                  <label key={brand} className="brand-option">
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedBrands([...selectedBrands, brand]);
                        } else {
                          setSelectedBrands(selectedBrands.filter(b => b !== brand));
                        }
                      }}
                    />
                    <span>{brand}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          <div className="products-section">
            <div className="products-header">
              <p>{filteredProducts.length} {t('category.productsFound')}</p>
            </div>
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            {filteredProducts.length === 0 && (
              <div className="no-products">
                <p>{t('category.noProducts')}</p>
                <button onClick={() => {
                  setPriceRange([0, 5000]);
                  setSelectedBrands([]);
                  setMinRating(0);
                }}>{t('category.clearFilters')}</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
