import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';
import Navbar from '../components/Navbar';
import CartItem from '../components/CartItem';
import './Cart.css';

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { items, updateQuantity, removeFromCart, getCartTotal } = useCart();

  const subtotal = getCartTotal();
  const shipping = subtotal > 500 ? 0 : 50;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;

  return (
    <div className="cart-page">
      <Navbar />

      <div className="cart-container">
        <h1>{t('cart.title') || 'Shopping Cart'}</h1>

        {items.length === 0 ? (
          <div className="empty-cart">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="9" cy="21" r="1"/>
              <circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            <h2>{t('cart.empty') || 'Your cart is empty'}</h2>
            <p>{t('cart.emptyDesc') || 'Add some products to get started'}</p>
            <button onClick={() => navigate('/marketplace')}>
              {t('cart.continueShopping') || 'Continue Shopping'}
            </button>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items-section">
              {items.map(item => (
                <CartItem
                  key={item.id}
                  item={item}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeFromCart}
                />
              ))}
            </div>

            <div className="cart-summary">
              <h2>{t('cart.orderSummary') || 'Order Summary'}</h2>
              
              <div className="summary-row">
                <span>{t('cart.subtotal') || 'Subtotal'}</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              
              <div className="summary-row">
                <span>{t('cart.shipping') || 'Shipping'}</span>
                <span>{shipping === 0 ? 'FREE' : `₹${shipping.toFixed(2)}`}</span>
              </div>
              
              <div className="summary-row">
                <span>{t('cart.tax') || 'Tax (5%)'}</span>
                <span>₹{tax.toFixed(2)}</span>
              </div>
              
              <div className="summary-divider"></div>
              
              <div className="summary-row total">
                <span>{t('cart.total') || 'Total'}</span>
                <span>₹{total.toFixed(2)}</span>
              </div>

              {shipping > 0 && (
                <div className="free-shipping-note">
                  Add ₹{(500 - subtotal).toFixed(2)} more for FREE shipping
                </div>
              )}

              <button className="btn-checkout" onClick={() => navigate('/checkout')}>
                {t('cart.proceedToCheckout') || 'Proceed to Checkout'}
              </button>

              <button className="btn-continue" onClick={() => navigate('/marketplace')}>
                {t('cart.continueShopping') || 'Continue Shopping'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
