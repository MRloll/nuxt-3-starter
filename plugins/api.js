export default defineNuxtPlugin((nuxtApp) => {
  const { showError } = useAlertStore();
  const token = useCookie("token");
  const api = $fetch.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    onRequest({ request, options, error }) {
      options.headers.set("Content-Type", "application/json");
      options.headers.set("Accept-Encoding", "gzip, compress, br");
      if (token.value) {
        options.headers.set("Authorization", `Bearer ${token.value}`);
      }
    },
    async onResponseError({ response }) {
      if (response.status === 401) {
        await nuxtApp.runWithContext(() => navigateTo("/login"));
      }
      showError(response._data.message);
    },
  });

  // Expose to useNuxtApp().$api
  return {
    provide: {
      api,
    },
  };
});
