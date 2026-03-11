import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import './CategoryNavbar.css';

// Import category images
import mensCareImg from '../assets/mens care.jpg';
import womensCareImg from '../assets/women care.jpg';
import babyCareImg from '../assets/baby care.jpg';
import generalMedicineImg from '../assets/general medicine.jpg';
import personalCareImg from '../assets/personal care.jpg';
import healthDevicesImg from '../assets/Health devices.jpg';

interface Category {
  id: string;
  image: string;
  label: string;
  route: string;
}

const CategoryNavbar: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const categories: Category[] = [
    { 
      id: 'mens-care', 
      image: mensCareImg,
      label: t('marketplace.categories.mensCare') || "Men's Care", 
      route: '/marketplace/mens-care' 
    },
    { 
      id: 'womens-care', 
      image: womensCareImg,
      label: t('marketplace.categories.womensCare') || "Women's Care", 
      route: '/marketplace/womens-care' 
    },
    { 
      id: 'baby-care', 
      image: babyCareImg,
      label: t('marketplace.categories.babyCare') || 'Baby Care', 
      route: '/marketplace/baby-care' 
    },
    { 
      id: 'general-medicine', 
      image: generalMedicineImg,
      label: t('marketplace.categories.generalMedicine') || 'General Medicine', 
      route: '/marketplace/general-medicine' 
    },
    { 
      id: 'personal-care', 
      image: personalCareImg,
      label: t('marketplace.categories.personalCare') || 'Personal Care', 
      route: '/marketplace/personal-care' 
    },
    { 
      id: 'health-devices', 
      image: healthDevicesImg,
      label: t('marketplace.categories.healthDevices') || 'Health Devices', 
      route: '/marketplace/health-devices' 
    },
  ];

  return (
    <div className="category-navbar">
      <div className="category-wrapper">
        <h2 className="category-navbar-title">{t('marketplace.categories.title') || 'Shop by Category'}</h2>
        <div className="category-container">
          {categories.map((category) => (
            <div
              key={category.id}
              className="category-card"
              onClick={() => navigate(category.route)}
            >
              <div className="category-icon">
                <img 
                  src={category.image} 
                  alt={category.label}
                  className="category-image"
                />
              </div>
              <div className="category-label">{category.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryNavbar;
