<script setup>
import { ref, watch, onMounted, toRefs } from "vue";

const props = defineProps({
  active: {
    type: Boolean,
    required: true,
  },
});

const { active } = toRefs(props);

const contentHeight = ref(null);
const wrapperRef = ref(null);

const updateHeight = () => {
  contentHeight.value = wrapperRef.value.scrollHeight + "px";
};

watch(active, () => {
  updateHeight();
});

onMounted(() => {
  updateHeight();
});
</script>

<template>
  <div ref="wrapperRef" class="expandable" :class="{ active: active }">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.expandable {
  overflow: hidden;
  opacity: 1;
  transition:
    max-height $transition,
    opacity $transition;
  max-height: v-bind(contentHeight);

  &:not(.active) {
    max-height: 0;
  }
}
</style>
