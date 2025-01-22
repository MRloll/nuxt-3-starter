import ar from "./locales/ar";
import en from "./locales/en";
export default defineI18nConfig(() => ({
  legacy: false,
  locale: "ar",
  messages: {
    ar,
    en,
  },
}));
