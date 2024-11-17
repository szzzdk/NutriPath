import { i18n as I18nInstance } from 'i18next';

declare module '../i18next/i18n' {
  const i18n: I18nInstance;
  const lang: string;
  export { i18n, lang };
}