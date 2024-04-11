// CartContext.js
import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext({
  cartItems: [],
  addToCart: (item) => {},
  removeFromCart: (id) => {},
  updateCartItem: (id, quantity) => {}
});

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const updateCartItem = (id, quantity) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: quantity } : item));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateCartItem }}>
      {children}
    </CartContext.Provider>
  );
};