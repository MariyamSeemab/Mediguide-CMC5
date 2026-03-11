import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../services/marketplaceService';
import { useLanguage } from '../contexts/LanguageContext';
import { getProductTranslation } from '../translations/productContent';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  const { t, currentLanguage } = useLanguage();

  // Get translated content from productContent.ts
  const translation = getProductTranslation(product.id, currentLanguage);
  const shortDesc = translation?.description || product.description;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    // TODO: Implement cart functionality
    alert(`${t('category.addedToCart')}: ${product.name}`);
  };

  // CRITICAL: Only render product data, NO filter data
  return (
    <div 
      className="product-card" 
      onClick={() => navigate(`/product/${product.id}`)} 
      data-product-id={product.id} 
      data-no-overlay="true"
    >
      <div className="product-image" data-no-overlay="true">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{shortDesc}</p>
        <div className="product-rating">
          <div className="stars">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={i < Math.floor(product.rating) ? 'star filled' : 'star'}>
                ★
              </span>
            ))}
          </div>
          <span className="rating-value">{product.rating.toFixed(1)}</span>
        </div>
        <div className="product-footer">
          <div className="product-price">₹{product.price.toFixed(2)}</div>
          <div className="product-actions">
            <button className="btn-add-cart" onClick={handleAddToCart}>
              {t('category.addToCart')}
            </button>
            <button className="btn-view-details" onClick={() => navigate(`/product/${product.id}`)}>
              {t('category.viewDetails')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
