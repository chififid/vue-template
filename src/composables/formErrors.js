import { ref } from "vue";

export function useFormErrors(callback) {
  const globalErrorMessage = ref(null);

  const submit = async (values, actions) => {
    const result = await callback(values);
    if (result?.error) {
      globalErrorMessage.value = result.error.global;
      actions.setErrors(result.error.fields);
    }
  }

  return { globalErrorMessage, submit }
}