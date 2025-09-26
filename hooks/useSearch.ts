import { useInfiniteQuery } from "@tanstack/react-query";
import { api } from "@/services/api";

export const useSearch = (query: string) => {
  return useInfiniteQuery({
    queryKey: ["search", query],
    queryFn: ({ pageParam = 0 }) => api.searchProducts(query, 12, pageParam),
    getNextPageParam: (lastPage) => {
      const nextSkip = lastPage.skip + lastPage.limit;
      return nextSkip < lastPage.total ? nextSkip : undefined;
    },
    initialPageParam: 0,
    enabled: query.length > 0,
  });
};
