<script setup>
import { useField } from "vee-validate";

import BaseInput from "@/ui/components/BaseInput.vue";
import BaseError from "@/ui/components/BaseError.vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});

const { value, errorMessage } = useField(props.name, null, {
  validateOnValueUpdate: false,
});
</script>

<template>
  <div class="field">
    <base-input
      v-model="value"
      :placeholder="props.name"
      :is-error="!!errorMessage"
      type="text"
    />
    <base-error :message="errorMessage" />
  </div>
</template>
