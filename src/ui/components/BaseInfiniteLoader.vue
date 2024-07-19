<script setup>
import { ref, toRef, onMounted } from "vue";

const props = defineProps({
  hasNextPage: {
    type: Boolean,
    required: false,
  },
});

const emit = defineEmits(["fetchData"]);

const observerRef = ref();
const hasNextPage = toRef(props, "hasNextPage")

const observer = new IntersectionObserver(
  (entries) => {
    if (hasNextPage.value) {
      entries[0].isIntersecting && emit("fetchData");
    }
  },
  { threshold: 0 }
);

onMounted(() => {
  observer.observe(observerRef.value);
});
</script>

<template>
  <div class="infinite-loader">
    <slot></slot>
    <div ref="observerRef" class="observer"></div>
  </div>
</template>

<style lang="scss" scoped>
.observer {
  transform: translateY(-100px);
}
</style>
