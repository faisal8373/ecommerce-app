import { Heart } from "lucide-react";

interface FavoritesCounterProps {
  count: number;
}

export const FavoritesCounter = ({ count }: FavoritesCounterProps) => {
  return (
    <div className="ml-2 mb-6 flex items-center space-x-2 z-50">
      <Heart size={20} className="text-red-500" />
      <span className="font-semibold">{count}</span>
    </div>
  );
};
