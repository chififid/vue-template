<script setup>
import TheHeader from "@/ui/components/TheHeader.vue";
</script>

<template>
  <div class="page">
    <the-header />
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  background: $color-black;
  height: 100vh;
  padding: 1.5em;
}

.content {
  max-width: 400px;
  width: 100%;
  padding: 40px;
  margin: 0 auto;
  height: 100%;
}
</style>
