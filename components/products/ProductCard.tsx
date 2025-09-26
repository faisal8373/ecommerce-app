import { Product } from "@/types/product";
import { Heart } from "lucide-react";

interface ProductCardProps {
  product: Product;
  isFavorite: boolean;
  onToggleFavorite: (productId: number) => void;
}

export const ProductCard = ({
  product,
  isFavorite,
  onToggleFavorite,
}: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={() => onToggleFavorite(product.id)}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
        >
          <Heart
            size={20}
            className={
              isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
            }
          />
        </button>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">
          {product.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-2">
          <span className="text-2xl font-bold text-[#DB4444]">
            ${product.price}
          </span>
          <div className="flex items-center bg-blue-100 px-2 py-1 rounded">
            <span className="text-blue-800 font-semibold">
              {product.rating}
            </span>
            <span className="text-blue-600 ml-1">★</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{product.brand}</span>
          <span>Stock: {product.stock}</span>
        </div>
      </div>
    </div>
  );
};
