import { useInfiniteQuery } from '@tanstack/react-query';
import { api } from '@/services/api';

export const useProducts = () => {
  return useInfiniteQuery({
    queryKey: ['products'],
    queryFn: ({ pageParam = 0 }) => api.getProducts(12, pageParam),
    getNextPageParam: (lastPage) => {
      const nextSkip = lastPage.skip + lastPage.limit;
      return nextSkip < lastPage.total ? nextSkip : undefined;
    },
    initialPageParam: 0,
  });
};
