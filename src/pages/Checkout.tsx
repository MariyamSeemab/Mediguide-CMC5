import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';
import Navbar from '../components/Navbar';
import './Checkout.css';

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { items, getCartTotal } = useCart();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'cod'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Order placed successfully!');
    navigate('/');
  };

  const subtotal = getCartTotal();
  const shipping = subtotal > 500 ? 0 : 50;
  const tax = subtotal * 0.05;
  const total = subtotal + shipping + tax;

  return (
    <div className="checkout-page">
      <Navbar />

      <div className="checkout-container">
        <h1>{t('checkout.title') || 'Checkout'}</h1>

        <div className="checkout-content">
          <form className="checkout-form" onSubmit={handleSubmit}>
            <div className="form-section">
              <h2>{t('checkout.deliveryAddress') || 'Delivery Address'}</h2>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">{t('checkout.fullName') || 'Full Name'} *</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">{t('checkout.email') || 'Email'} *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">{t('checkout.phone') || 'Phone Number'} *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group full-width">
                  <label htmlFor="address">{t('checkout.address') || 'Address'} *</label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    rows={3}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">{t('checkout.city') || 'City'} *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="state">{t('checkout.state') || 'State'} *</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="pincode">{t('checkout.pincode') || 'Pincode'} *</label>
                  <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-section">
              <h2>{t('checkout.paymentMethod') || 'Payment Method'}</h2>
              
              <div className="payment-options">
                <label className="payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={handleChange}
                  />
                  <div className="payment-option-content">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                    </svg>
                    <div>
                      <div className="payment-title">{t('checkout.cod') || 'Cash on Delivery'}</div>
                      <div className="payment-desc">{t('checkout.codDesc') || 'Pay when you receive'}</div>
                    </div>
                  </div>
                </label>

                <label className="payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={handleChange}
                  />
                  <div className="payment-option-content">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                      <line x1="1" y1="10" x2="23" y2="10"/>
                    </svg>
                    <div>
                      <div className="payment-title">{t('checkout.card') || 'Credit/Debit Card'}</div>
                      <div className="payment-desc">{t('checkout.cardDesc') || 'Secure payment'}</div>
                    </div>
                  </div>
                </label>

                <label className="payment-option">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={formData.paymentMethod === 'upi'}
                    onChange={handleChange}
                  />
                  <div className="payment-option-content">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7 10 12 15 17 10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                    <div>
                      <div className="payment-title">{t('checkout.upi') || 'UPI Payment'}</div>
                      <div className="payment-desc">{t('checkout.upiDesc') || 'Pay via UPI apps'}</div>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            <button type="submit" className="btn-place-order">
              {t('checkout.placeOrder') || 'Place Order'}
            </button>
          </form>

          <div className="order-summary-sidebar">
            <h2>{t('checkout.orderSummary') || 'Order Summary'}</h2>
            
            <div className="order-items">
              {items.map(item => (
                <div key={item.id} className="order-item">
                  <div className="order-item-details">
                    <div className="order-item-name">{item.name}</div>
                    <div className="order-item-qty">Qty: {item.quantity}</div>
                  </div>
                  <div className="order-item-price">₹{(item.price * item.quantity).toFixed(2)}</div>
                </div>
              ))}
            </div>

            <div className="order-summary-divider"></div>

            <div className="order-summary-row">
              <span>{t('checkout.subtotal') || 'Subtotal'}</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>

            <div className="order-summary-row">
              <span>{t('checkout.shipping') || 'Shipping'}</span>
              <span className={shipping === 0 ? 'free-badge' : ''}>
                {shipping === 0 ? 'FREE' : `₹${shipping.toFixed(2)}`}
              </span>
            </div>

            <div className="order-summary-row">
              <span>{t('checkout.tax') || 'Tax (5%)'}</span>
              <span>₹{tax.toFixed(2)}</span>
            </div>

            <div className="order-summary-divider"></div>

            <div className="order-summary-row total">
              <span>{t('checkout.total') || 'Total'}</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
