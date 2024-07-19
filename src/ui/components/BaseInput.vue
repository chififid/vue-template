<script setup>
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  isError: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue"]);

const inputAttrs = computed(() => ({
  type: props.type,
  value: props.modelValue,
  placeholder: props.placeholder,
  class: { error: props.isError },
  onInput: (e) => emit("update:modelValue", e.target.value),
}));
</script>

<template>
  <input class="input" v-bind="inputAttrs" />
</template>

<style lang="scss" scoped>
.input {
  flex: 1;
  width: 100%;
  padding: 0.5em;
  border: 1px solid $color-grey;
  border-radius: 4px;
  transition:
    box-shadow $transition,
    border-color $transition;

  &:focus {
    box-shadow: 0 0 8px rgba($color-grey, 0.25);
  }

  &.error {
    border-color: $color-red;

    &:focus {
      box-shadow: 0 0 8px rgba($color-red, 0.25);
    }
  }
}
</style>
