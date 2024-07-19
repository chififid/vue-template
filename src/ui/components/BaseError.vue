<script setup>
import BaseExpandable from "@/ui/components/BaseExpandable.vue";

const props = defineProps({
  message: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <base-expandable :active="!!props.message" class="error">
    <div class="container">{{ props.message }}</div>
  </base-expandable>
</template>

<style lang="scss" scoped>
.error {
  color: $color-red;
  font-size: 0.7em;
  text-align: center;
}

.container {
  margin-top: 0.5em;
  min-height: calc(0.7em + 0.5em);
}
</style>
