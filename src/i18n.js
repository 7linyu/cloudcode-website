import { createI18n } from 'vue-i18n';

const messages = {
  'zh-CN': {
    navbar: {
      title: '云萌工作室',
      lang: '简体中文 / 繁體中文 / English',
    },
  },
  'zh-TW': {
    navbar: {
      title: '雲萌工作室',
      lang: '简體中文 / 繁體中文 / English',
    },
  },
  en: {
    navbar: {
      title: 'Cloud Studio',
      lang: '简体中文 / 繁體中文 / English',
    },
  },
};

const i18n = createI18n({
  locale: 'en', // 默认语言
  fallbackLocale: 'en', // 回退语言
  messages,
});

export default i18n;
