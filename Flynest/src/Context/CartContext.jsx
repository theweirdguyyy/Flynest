import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const localData = localStorage.getItem('cart');
      return localData ? JSON.parse(localData) : [];
    } catch (error) {
      console.error("Failed to parse cart from localStorage", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item) => {
    setCartItems(prevItems => {
      const isItemInCart = prevItems.find(cartItem => cartItem.id === item.id);
      if (isItemInCart) {
        // If item exists, increase its quantity
        return prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
            : cartItem
        );
      }
      // If item doesn't exist, add it to the cart with quantity 1
      return [...prevItems, { ...item, type: 'Tour', quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(prevItems =>
      prevItems
        .map(item =>
          item.id === id
            ? { ...item, quantity: (item.quantity || 1) - 1 }
            : item
        )
        .filter(item => item.quantity > 0) // Remove item if quantity is 0
    );
  };

  const cartCount = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
  const subtotal = cartItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cartCount,
    subtotal,
    tax,
    total,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};