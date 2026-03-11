// Marketplace Service - Handles all marketplace-related API calls and business logic

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  brand?: string;
  inStock?: boolean;
  prescriptionRequired?: boolean;
  benefits: string[];
  usage: string;
  warnings: string[];
  // Future integration fields
  aiRecommendationScore?: number;
  doctorRecommended?: boolean;
  relatedToMedicalHistory?: boolean;
}

export interface Order {
  id: string;
  userId: string;
  items: Array<{
    productId: string;
    quantity: number;
    price: number;
  }>;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: Date;
  deliveryAddress: {
    fullName: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
  };
  // Future integration fields
  trackingNumber?: string;
  estimatedDelivery?: Date;
  prescriptionId?: string;
}

class MarketplaceService {
  // Product Management
  async getProducts(category?: string): Promise<Product[]> {
    // TODO: Replace with actual API call
    return this.getMockProducts(category);
  }

  async getProductById(id: string): Promise<Product | null> {
    // TODO: Replace with actual API call
    const products = await this.getProducts();
    return products.find(p => p.id === id) || null;
  }

  async searchProducts(query: string): Promise<Product[]> {
    // TODO: Replace with actual API call
    const products = await this.getProducts();
    return products.filter(p => 
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase())
    );
  }

  // AI Integration - Future Implementation
  async getAIRecommendations(userId: string, context?: {
    symptoms?: string[];
    chatHistory?: string[];
    currentProducts?: string[];
  }): Promise<Product[]> {
    // TODO: Integrate with AI Assistant API
    // This will analyze user's symptoms, chat history, and suggest relevant products
    console.log('AI Recommendations requested for user:', userId, context);
    return [];
  }

  // Doctor Integration - Future Implementation
  async getDoctorRecommendedProducts(userId: string, doctorId?: string): Promise<Product[]> {
    // TODO: Integrate with Doctor Dashboard API
    // Fetch products recommended by doctor based on consultation
    console.log('Doctor recommendations requested for user:', userId, 'from doctor:', doctorId);
    return [];
  }

  async applyPrescriptionToCart(prescriptionId: string): Promise<Product[]> {
    // TODO: Fetch prescription details and return products
    console.log('Applying prescription to cart:', prescriptionId);
    return [];
  }

  // Medical History Integration - Future Implementation
  async getProductsBasedOnMedicalHistory(userId: string): Promise<Product[]> {
    // TODO: Integrate with Patient Medical History
    // Suggest products based on chronic conditions, allergies, past purchases
    console.log('Fetching products based on medical history for user:', userId);
    return [];
  }

  // Order Management
  async createOrder(orderData: Omit<Order, 'id' | 'createdAt' | 'status'>): Promise<Order> {
    // TODO: Replace with actual API call
    const order: Order = {
      ...orderData,
      id: `ORD-${Date.now()}`,
      status: 'pending',
      createdAt: new Date(),
    };
    console.log('Order created:', order);
    return order;
  }

  async getOrderById(orderId: string): Promise<Order | null> {
    // TODO: Replace with actual API call
    console.log('Fetching order:', orderId);
    return null;
  }

  async getUserOrders(userId: string): Promise<Order[]> {
    // TODO: Replace with actual API call
    console.log('Fetching orders for user:', userId);
    return [];
  }

  // Order Tracking - Future Implementation
  async trackOrder(orderId: string): Promise<{
    status: string;
    location: string;
    estimatedDelivery: Date;
    history: Array<{
      status: string;
      timestamp: Date;
      location: string;
    }>;
  } | null> {
    // TODO: Integrate with logistics API
    console.log('Tracking order:', orderId);
    return null;
  }

  // Mock Data - Remove when API is ready
  private getMockProducts(category?: string): Product[] {
    const allProducts: Product[] = [
      {
        id: '1',
        name: 'Paracetamol 500mg',
        description: 'Effective pain relief and fever reducer',
        price: 45.00,
        rating: 4.5,
        reviews: 234,
        image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23e3f2fd" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%231977cc" font-size="60" font-family="system-ui"%3E💊%3C/text%3E%3C/svg%3E',
        category: 'general-medicine',
        brand: 'MediCare',
        inStock: true,
        prescriptionRequired: false,
        benefits: ['Reduces fever', 'Relieves pain', 'Safe for most people'],
        usage: 'Take 1-2 tablets every 4-6 hours',
        warnings: ['Do not exceed recommended dose', 'Consult doctor if symptoms persist']
      },
      {
        id: '2',
        name: 'Vitamin D3 Tablets',
        description: 'Supports bone health and immunity',
        price: 299.00,
        rating: 4.8,
        reviews: 456,
        image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23fff3e0" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23ff9800" font-size="60" font-family="system-ui"%3E💊%3C/text%3E%3C/svg%3E',
        category: 'general-medicine',
        brand: 'HealthPlus',
        inStock: true,
        prescriptionRequired: false,
        benefits: ['Strengthens bones', 'Boosts immunity', 'Supports overall health'],
        usage: 'Take 1 tablet daily with food',
        warnings: ['Keep out of reach of children', 'Store in cool, dry place']
      },
      // Add more mock products as needed
    ];

    if (category) {
      return allProducts.filter(p => p.category === category);
    }
    return allProducts;
  }
}

export const marketplaceService = new MarketplaceService();
