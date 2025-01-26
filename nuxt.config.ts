// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr: true,
  //...
  build: {
    transpile: ["vuetify"],
  },
  css: ["~/assets/scss/main.scss"],
  modules: [
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    //...
  ],
  i18n: {
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
    locales: ["ar", "en"], // used in URL path prefix
    defaultLocale: "ar", // default locale of your project for Nuxt pages and routings
    strategy: "prefix_except_default",
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  nitro: {
    compressPublicAssets: true,
  },
});
