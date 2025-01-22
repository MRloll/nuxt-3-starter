import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const theme = {
  options: { customProperties: true },
  defaultTheme: "light",
  themes: {
    light: {
      colors: {
        background: "#F2F3F7",
        "color-text": "#474747",
        "background-200": "#E8E8EF",
        "theme-white": "#fff",
      },
    },
    dark: {
      colors: {
        background: "#030F07",
        "theme-text": "#A0A7A1",
        "background-200": "#07180C",
        "theme-white": "#07180C",
      },
    },
  },
  treeShake: true,
  ssr: true,
  rtl: true,
};
export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    // ... your configuration
    ssr: true,
    theme,
    components,
    directives,
  });
  app.vueApp.use(vuetify);
});
