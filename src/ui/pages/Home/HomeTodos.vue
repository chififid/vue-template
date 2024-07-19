<script setup>
import { getTodosRequest } from "@/connectors/todos";
import { useInfiniteLoader } from "@/queries/infiniteLoader";

import HomeTodo from "@/ui/pages/Home/HomeTodo.vue";
import BaseInfiniteLoader from "@/ui/components/BaseInfiniteLoader.vue";

const { data, isFetching, hasNextPage, fetchNextPage } = useInfiniteLoader(
  getTodosRequest,
  10
);
</script>

<template>
  <base-infinite-loader
    class="todos"
    :has-next-page="hasNextPage"
    @fetch-data="fetchNextPage()"
  >
    <template v-for="{ todos } in data?.pages">
      <home-todo
        v-for="todo in todos"
        :key="todo.id"
        :title="todo.title"
        :completed="todo.completed"
      />
    </template>
    <home-todo v-if="isFetching" title="Loading" :loading="true" />
  </base-infinite-loader>
</template>

<style lang="scss" scoped>
.todos {
  display: flex;
  flex-direction: column;
  gap: 1em;
}
</style>
