import React, { createContext, useState } from 'react';

export const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToCart = (book) => setCartItems((s) => [...s, book]);
  const toggleWishlist = (book) => {
    setWishlistItems((s) => (s.some(i => i.id === book.id) ? s.filter(i => i.id !== book.id) : [...s, book]));
  };

  console.log('StoreProvider rendering with context value:', { searchTerm, cartItems: cartItems.length, wishlistItems: wishlistItems.length });

  return (
    <StoreContext.Provider value={{ searchTerm, setSearchTerm, cartItems, addToCart, wishlistItems, toggleWishlist }}>
      {children}
    </StoreContext.Provider>
  );
}

export default StoreContext;
