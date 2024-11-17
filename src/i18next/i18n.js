import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Импортируйте JSON файлы переводов
import enTranslations from "../locales/en/translation.json";
import ruTranslations from "../locales/ru/translation.json";
import kzTranslations from "../locales/kz/translation.json";


i18n
  .use(initReactI18next) // Передает экземпляр i18n в react-i18next
  .init({
    resources: {
      ru: { translation: ruTranslations },
      kz: { translation: kzTranslations },
      en: { translation: enTranslations },
    },
    lng: "ru", // начальный язык
    fallbackLng: "ru", // язык по умолчанию, если перевод отсутствует
  });

export const getLocale = () => i18n.language;

export { i18n };
