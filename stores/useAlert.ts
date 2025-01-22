import { defineStore } from "pinia";

export const useAlertStore = defineStore("alert", () => {
  const alert = ref(false)
  const alertMessage = ref<string>()
  const alertType = ref<'success' | 'error'>()

  const showAlert = (type: 'success' | 'error', message: string) => {
    alertType.value = type;
    alertMessage.value = message;
    alert.value = true;
  };

  const showSuccess = (message: string) => {
    showAlert('success', message);
  };

  const showError = (message: string) => {
    showAlert('error', message);
  };

  return {
    showSuccess,
    showError,
    alert,
    alertMessage,
    alertType
  };
});