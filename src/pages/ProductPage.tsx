import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';
import Navbar from '../components/Navbar';
import { getProductById } from '../utils/productData';
import { Product } from '../services/marketplaceService';
import { getProductTranslation } from '../translations/productContent';
import './ProductPage.css';

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t, currentLanguage } = useLanguage();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedTab, setSelectedTab] = useState('description');
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      const foundProduct = getProductById(id);
      if (foundProduct) {
        setProduct(foundProduct);
      }
    }
  }, [id]);

  if (!product) {
    return (
      <div className="product-page">
        <Navbar />
        <div className="product-container">
          <p>{t('product.notFound')}</p>
          <button onClick={() => navigate('/marketplace')}>{t('product.backToMarketplace')}</button>
        </div>
      </div>
    );
  }

  // Get translated product content
  const translatedContent = getProductTranslation(product.id, currentLanguage);
  const productDescription = translatedContent?.description || product.description;
  const productBenefits = translatedContent?.benefits || product.benefits;
  const productUsage = translatedContent?.usage || product.usage;
  const productWarnings = translatedContent?.warnings || product.warnings;

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      image: product.image,
      category: product.category,
      prescriptionRequired: product.prescriptionRequired
    });
    alert(`${t('product.addedToCart')}: ${quantity} ${product.name}`);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/checkout');
  };

  // Generate reviews matching the product's review count
  const generateReviews = (count: number) => {
    const reviewTemplates = [
      { author: 'Priya S.', rating: 5, comment: 'Excellent product! Works as expected.', date: '2 days ago' },
      { author: 'Rajesh K.', rating: 4, comment: 'Good quality at affordable price.', date: '1 week ago' },
      { author: 'Ananya M.', rating: 5, comment: 'Highly recommended. Fast delivery too!', date: '2 weeks ago' },
      { author: 'Amit P.', rating: 5, comment: 'Very effective medicine. Helped me quickly.', date: '3 weeks ago' },
      { author: 'Sneha R.', rating: 4, comment: 'Good product, works well.', date: '1 month ago' },
      { author: 'Vikram S.', rating: 5, comment: 'Trusted brand, always reliable.', date: '1 month ago' },
      { author: 'Kavita M.', rating: 4, comment: 'Value for money. Satisfied with purchase.', date: '2 months ago' },
      { author: 'Arjun K.', rating: 5, comment: 'Best quality product. Highly effective.', date: '2 months ago' }
    ];
    
    const reviews = [];
    for (let i = 0; i < Math.min(count, 100); i++) {
      const template = reviewTemplates[i % reviewTemplates.length];
      reviews.push({
        id: i + 1,
        ...template,
        author: `${template.author.split(' ')[0]} ${String.fromCharCode(65 + (i % 26))}.`
      });
    }
    return reviews;
  };

  const reviews = generateReviews(product.reviews);

  return (
    <div className="product-page">
      <Navbar />

      <div className="product-container">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          {t('product.back')}
        </button>

        <div className="product-main">
          <div className="product-image-section">
            <img src={product.image} alt={product.name} />
          </div>

          <div className="product-details-section">
            <h1>{product.name}</h1>
            
            <div className="product-rating-section">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.floor(product.rating) ? 'star filled' : 'star'}>
                    ★
                  </span>
                ))}
              </div>
              <span className="rating-text">{product.rating} ({product.reviews} reviews)</span>
            </div>

            <div className="product-price-section">
              <div className="price">₹{product.price.toFixed(2)}</div>
              <div className="price-note">{t('product.inclusiveTax')}</div>
            </div>

            <div className="product-quantity-section">
              <label>{t('product.quantity')}:</label>
              <div className="quantity-selector">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>

            <div className="product-actions">
              <button className="btn-add-to-cart" onClick={handleAddToCart}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="21" r="1"/>
                  <circle cx="20" cy="21" r="1"/>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
                </svg>
                {t('product.addToCart')}
              </button>
              <button className="btn-buy-now" onClick={handleBuyNow}>
                {t('product.buyNow')}
              </button>
            </div>

            <div className="product-features">
              <div className="feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <span>{t('product.authentic')}</span>
              </div>
              <div className="feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                </svg>
                <span>{t('product.fastDelivery')}</span>
              </div>
              <div className="feature">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 6h18M3 12h18M3 18h18"/>
                </svg>
                <span>{t('product.easyReturns')}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="product-info-tabs">
          <div className="tabs-header">
            <button
              className={selectedTab === 'description' ? 'active' : ''}
              onClick={() => setSelectedTab('description')}
            >
              {t('product.description')}
            </button>
            <button
              className={selectedTab === 'benefits' ? 'active' : ''}
              onClick={() => setSelectedTab('benefits')}
            >
              {t('product.benefits')}
            </button>
            <button
              className={selectedTab === 'usage' ? 'active' : ''}
              onClick={() => setSelectedTab('usage')}
            >
              {t('product.usage')}
            </button>
            <button
              className={selectedTab === 'warnings' ? 'active' : ''}
              onClick={() => setSelectedTab('warnings')}
            >
              {t('product.warnings')}
            </button>
            <button
              className={selectedTab === 'reviews' ? 'active' : ''}
              onClick={() => setSelectedTab('reviews')}
            >
              {t('product.reviews')} ({product.reviews})
            </button>
          </div>

          <div className="tabs-content">
            {selectedTab === 'description' && (
              <div className="tab-panel">
                <p>{productDescription}</p>
              </div>
            )}

            {selectedTab === 'benefits' && (
              <div className="tab-panel">
                <ul>
                  {productBenefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}

            {selectedTab === 'usage' && (
              <div className="tab-panel">
                <p>{productUsage}</p>
              </div>
            )}

            {selectedTab === 'warnings' && (
              <div className="tab-panel">
                <ul className="warnings-list">
                  {productWarnings.map((warning, index) => (
                    <li key={index}>{warning}</li>
                  ))}
                </ul>
              </div>
            )}

            {selectedTab === 'reviews' && (
              <div className="tab-panel">
                <div className="reviews-list">
                  {reviews.map((review) => (
                    <div key={review.id} className="review-card">
                      <div className="review-header">
                        <div className="review-author">{review.author}</div>
                        <div className="review-date">{review.date}</div>
                      </div>
                      <div className="review-rating">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={i < review.rating ? 'star filled' : 'star'}>
                            ★
                          </span>
                        ))}
                      </div>
                      <p className="review-comment">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
