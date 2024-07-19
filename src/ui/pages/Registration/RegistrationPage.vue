<script setup>
import { useForm } from "vee-validate";
import { object } from "yup";
import { usernameSchema, passwordSchema, emailSchema } from "@/helpers/schemas";
import { useAuthStore } from "@/stores/auth";
import { useFormErrors } from "@/composables/formErrors.js";

import BaseField from "@/ui/components/BaseField.vue";
import BasePassword from "@/ui/components/BasePassword.vue";
import BaseButton from "@/ui/components/BaseButton.vue";
import BaseError from "@/ui/components/BaseError.vue";
import LayoutAuth from "@/ui/layouts/LayoutAuth.vue";

const { handleSubmit } = useForm({
  validationSchema: object({
    username: usernameSchema,
    email: emailSchema,
    password: passwordSchema,
  }),
});

const authStore = useAuthStore();
const { globalErrorMessage, submit } = useFormErrors((values) =>
  authStore.signUp(values)
);
const onSubmit = handleSubmit(submit);
</script>

<template>
  <layout-auth>
    <template #fields>
      <base-field name="username" />
      <base-field name="email" @keyup.enter="onSubmit" />
      <base-password @keyup.enter="onSubmit" />
    </template>
    <template #submit>
      <base-button @click="onSubmit">Submit</base-button>
      <base-error :message="globalErrorMessage" />
    </template>
  </layout-auth>
</template>
