// Complete Product Database for MediGuide Marketplace
import { Product } from '../services/marketplaceService';
import { 
  mensCareProducts,
  womensCareProducts,
  babyCareProductsExpanded,
  personalCareProducts,
  generalMedicineProducts,
  healthDevicesProducts
} from '../data/products';

export const ALL_PRODUCTS: Product[] = [
  // MEN'S CARE - 40 products
  ...mensCareProducts,
  
  // WOMEN'S CARE - 35 products
  ...womensCareProducts,
  
  // BABY CARE - 35 products
  ...babyCareProductsExpanded,
  
  // PERSONAL CARE - 35 products
  ...personalCareProducts,
  
  // GENERAL MEDICINE - 35 products
  ...generalMedicineProducts,
  
  // HEALTH DEVICES - 35 products
  ...healthDevicesProducts,
];

export const getProductsByCategory = (category: string): Product[] => {
  return ALL_PRODUCTS.filter(p => p.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return ALL_PRODUCTS.find(p => p.id === id);
};

export const searchProducts = (query: string): Product[] => {
  const lowerQuery = query.toLowerCase();
  return ALL_PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(lowerQuery) ||
    p.description.toLowerCase().includes(lowerQuery) ||
    p.brand?.toLowerCase().includes(lowerQuery)
  );
};
