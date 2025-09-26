import { useState, useEffect } from 'react';
import { Product } from '@/types/product';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('favorites');
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  const addFavorite = (productId: number) => {
    const newFavorites = [...favorites, productId];
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const removeFavorite = (productId: number) => {
    const newFavorites = favorites.filter(id => id !== productId);
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const isFavorite = (productId: number) => favorites.includes(productId);

  const toggleFavorite = (productId: number) => {
    if (isFavorite(productId)) {
      removeFavorite(productId);
    } else {
      addFavorite(productId);
    }
  };

  return {
    favorites,
    favoritesCount: favorites.length,
    isFavorite,
    toggleFavorite,
  };
};
