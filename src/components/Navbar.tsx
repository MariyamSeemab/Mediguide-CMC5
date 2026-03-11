import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import './Navbar.css';

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { isAuthenticated, user } = useAuth();
  const { getCartCount } = useCart();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/marketplace/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <nav className="marketplace-navbar">
      <div className="navbar-container">
        <div className="navbar-top">
          <div className="navbar-logo" onClick={() => navigate('/')}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="M9 12l2 2 4-4"/>
            </svg>
            <span>MediGuide</span>
          </div>

          <form className="navbar-search" onSubmit={handleSearch}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder={t('marketplace.search') || 'Search medicines...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>

          <div className="navbar-actions">
            <button className="navbar-icon-btn" onClick={() => navigate('/cart')}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              {getCartCount() > 0 && <span className="cart-badge">{getCartCount()}</span>}
            </button>

            <button 
              className="navbar-icon-btn" 
              onClick={() => isAuthenticated ? navigate('/dashboard') : navigate('/')}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
