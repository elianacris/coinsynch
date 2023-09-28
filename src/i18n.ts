import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationBrazilian from "./locales/pt-BR.json";
import translationEnglish from "./locales/en.json";

const resources = {
  en: {
    translation: translationEnglish,
  },
  "pt-BR": {
    translation: translationBrazilian,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: JSON.parse(
    localStorage.getItem("language") ||
      JSON.stringify({ code: "pt-BR", name: "PT" })
  ).code,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
