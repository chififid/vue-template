<script setup>
import { ref } from "vue";
import { useField } from "vee-validate";

import BaseInput from "@/ui/components/BaseInput.vue";
import BaseError from "@/ui/components/BaseError.vue";

const { value, errorMessage } = useField("password", null, {
  validateOnValueUpdate: false,
});

const showPassword = ref(false);
const toggleShowPassword = () => {
  showPassword.value = !showPassword.value;
};
</script>

<template>
  <div class="password">
    <div class="content">
      <base-input
        v-model="value"
        :type="showPassword ? 'text' : 'password'"
        :is-error="!!errorMessage"
        placeholder="password"
      />
      <button class="button" @click="toggleShowPassword">
        {{ showPassword ? "Hide" : "Show" }}
      </button>
    </div>
    <base-error :message="errorMessage" />
  </div>
</template>

<style lang="scss" scoped>
.content {
  display: flex;
}

.button {
  width: 4em;
  text-align: center;
}
</style>
