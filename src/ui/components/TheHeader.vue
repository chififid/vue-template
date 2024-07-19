<script setup>
import { routes } from "@/router";
</script>

<template>
  <header class="header">
    <div class="title">Chififid</div>
    <nav class="nav">
      <router-link
        v-for="link in routes"
        :key="link.name"
        :to="link.path"
        class="link"
      >
        {{ link.name }}
      </router-link>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav {
  display: flex;
  gap: 1rem;
}

.link.router-link-active {
  font-weight: bold;
  color: $color-blue;
}
</style>
