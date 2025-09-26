import { Product } from '@/types/product';

const FAVORITES_KEY = 'favorites';

export const favoritesStore = {
  getFavorites(): number[] {
    if (typeof window === 'undefined') return [];
    const stored = localStorage.getItem(FAVORITES_KEY);
    return stored ? JSON.parse(stored) : [];
  },

  addFavorite(productId: number): void {
    const favorites = this.getFavorites();
    if (!favorites.includes(productId)) {
      const updated = [...favorites, productId];
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
    }
  },

  removeFavorite(productId: number): void {
    const favorites = this.getFavorites();
    const updated = favorites.filter(id => id !== productId);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
  },

  isFavorite(productId: number): boolean {
    const favorites = this.getFavorites();
    return favorites.includes(productId);
  },

  getFavoritesCount(): number {
    return this.getFavorites().length;
  }
};
