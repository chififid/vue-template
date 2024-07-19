<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.button {
  padding: 0.5em;
  border: 1px solid $color-grey;
  border-radius: 4px;
  transition: box-shadow $transition;
  text-align: center;

  &:hover {
    opacity: 1;
    box-shadow: 0 0 8px rgba($color-grey, 0.25);
  }
}
</style>
