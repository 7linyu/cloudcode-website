// src/i18n.js
import { createI18n } from 'vue-i18n';

const messages = {
  'zh-CN': {
    language: '简体中文',
    // 添加其他简体中文翻译
  },
  'zh-TW': {
    language: '繁體中文',
    // 添加其他繁体中文翻译
  },
  'en': {
    language: 'English',
    // 添加其他英文翻译
  }
};

const i18n = createI18n({
  locale: 'zh-CN', // 默认语言
  messages,
});

export default i18n;
