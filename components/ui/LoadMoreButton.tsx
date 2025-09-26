interface LoadMoreButtonProps {
  onClick: () => void;
  isLoading: boolean;
  hasMore: boolean;
}

export const LoadMoreButton = ({
  onClick,
  isLoading,
  hasMore,
}: LoadMoreButtonProps) => {
  if (!hasMore) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No more products to load</p>
      </div>
    );
  }

  return (
    <div className="text-center py-8">
      <button
        onClick={onClick}
        disabled={isLoading}
        className="bg-[#DB4444] text-white px-8 py-3 rounded-lg hover:bg-[#DB4444] hover:cursor-pointer  disabled:cursor-not-allowed transition-colors"
      >
        {isLoading ? "Loading..." : "Load More"}
      </button>
    </div>
  );
};
