import { ProductsResponse } from "@/types/product";

const API_BASE = "https://dummyjson.com";

export const api = {
  async getProducts(
    limit: number = 12,
    skip: number = 0,
  ): Promise<ProductsResponse> {
    const response = await fetch(
      `${API_BASE}/products?limit=${limit}&skip=${skip}`,
    );
    if (!response.ok) throw new Error("Failed to fetch products");
    return response.json();
  },

  async searchProducts(
    query: string,
    limit: number = 12,
    skip: number = 0,
  ): Promise<ProductsResponse> {
    const response = await fetch(
      `${API_BASE}/products/search?q=${encodeURIComponent(query)}&limit=${limit}&skip=${skip}`,
    );
    if (!response.ok) throw new Error("Failed to search products");
    return response.json();
  },
};
