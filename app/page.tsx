"use client";

import { useState, useMemo } from "react";
import { useProducts } from "@/hooks/useProducts";
import { useSearch } from "@/hooks/useSearch";
import { useFavorites } from "@/hooks/useFavorites";
import { ProductGrid } from "@/components/products/ProductGrid";
import { SearchBar } from "@/components/products/ProductSearch";
import { LoadMoreButton } from "@/components/ui/LoadMoreButton";
import { FavoritesCounter } from "@/components/products/FavoritesCounter";
import Link from "next/link";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const { favoritesCount, isFavorite, toggleFavorite } = useFavorites();

  const productsQuery = useProducts();
  const searchQueryResult = useSearch(searchQuery);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = searchQuery ? searchQueryResult : productsQuery;

  const allProducts = useMemo(() => {
    return data?.pages.flatMap((page) => page.products) || [];
  }, [data]);

  const handleLoadMore = () => {
    fetchNextPage();
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl">Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-red-600">Error loading products</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex items-center justify-center bg-[#000000] h-16 mb-4">
        <p className="text-white text-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <Link className="text-white font-bold underline px-2" href={"/"}>
          Shop now
        </Link>
      </div>

      <div className="container mx-auto px-4 py-4 border-b border-b-gray-300 ">
        <div className="flex flex-row justify-between">
          <h1 className="text-4xl font-bold text-center mb-2">
            GeeksForce EShop
          </h1>
          <div className="flex flex-row items-center">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search by product name"
            />
            <FavoritesCounter count={favoritesCount} />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-row flex-wrap text-base font-semibold mx-[40%] items-center gap-2 w-full mb-12">
          <span className="w-5 h-10 bg-[#DB4444] rounded"></span>
          <p className="text-[#DB4444]">Our products</p>

          <p className="w-full  text-4xl font-semibold">Explore our products</p>
        </div>
        <ProductGrid
          products={allProducts}
          isFavorite={isFavorite}
          onToggleFavorite={toggleFavorite}
        />

        <LoadMoreButton
          onClick={handleLoadMore}
          isLoading={isFetchingNextPage}
          hasMore={!!hasNextPage}
        />
      </div>
    </div>
  );
}
