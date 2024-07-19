<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  completed: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    class="todo"
    :class="{
      completed: props.completed,
      loading: props.loading,
    }"
  >
    {{ props.title }}
  </div>
</template>

<style lang="scss" scoped>
.todo {
  padding: 1em;
  border-radius: 0.5em;
  background: $color-grey;
  color: $color-white;
  font-size: 0.8em;

  &.completed {
    background: $color-green;
  }

  &.loading {
    animation: loading $animation ease infinite;
  }
}

@keyframes loading {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
}
</style>
