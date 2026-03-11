import React from 'react';
import './CartItem.css';

export interface CartItemType {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="cart-item-details">
        <h3 className="cart-item-name">{item.name}</h3>
        <div className="cart-item-price">₹{item.price.toFixed(2)}</div>
      </div>
      <div className="cart-item-quantity">
        <button
          className="qty-btn"
          onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
        >
          -
        </button>
        <span className="qty-value">{item.quantity}</span>
        <button
          className="qty-btn"
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
        >
          +
        </button>
      </div>
      <div className="cart-item-total">₹{(item.price * item.quantity).toFixed(2)}</div>
      <button className="cart-item-remove" onClick={() => onRemove(item.id)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="3 6 5 6 21 6"/>
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
        </svg>
      </button>
    </div>
  );
};

export default CartItem;
