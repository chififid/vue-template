<script setup>
import { useAuthStore } from "@/stores/auth";

import BaseButton from "@/ui/components/BaseButton.vue";
import HomeTodos from "@/ui/pages/Home/HomeTodos.vue";

const authStore = useAuthStore();
</script>

<template>
  <div class="home">
    <section class="header">
      <h1 class="title">Todo</h1>
      <base-button @click="authStore.logout()">logout</base-button>
    </section>
    <section class="todos">
      <home-todos />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.home {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2em;
}

.title {
  font-size: 2em;
}

.todos {
  height: 100%;
  overflow-y: scroll;
  padding: 0 0.7em;
}
</style>
