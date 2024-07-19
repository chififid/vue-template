import { useInfiniteQuery } from "@tanstack/vue-query";

export function useInfiniteLoader(callback, limit) {
  return useInfiniteQuery({
    queryKey: ["todos"],
    queryFn: async ({ pageParam = 0 }) => {
      const params = { limit: limit, skip: pageParam * limit };

      const result = await callback(params);
      console.log(result);

      let index = null;
      if (result.data.length) {
        index = pageParam + 1;
      }

      return { todos: result.data, index: index };
    },
    getNextPageParam: (lastPage) => lastPage.index,
  });
}
