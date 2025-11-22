/**
 * CCW Extension Polyfill - Translations
 */

export interface Translations {
  [key: string]: string;
}

export interface TranslationMap {
  [language: string]: Translations;
}

export const translations: TranslationMap = {
  en: {
    "ccwpolyfill.noticeTitle": "Notice",
    "ccwpolyfill.cancelBtn": "Cancel",
    "ccwpolyfill.confirmBtn": "Accept",
    "ccwpolyfill.warning": "Warning",
    "ccwpolyfill.experimentalWarning": "You're using Experimental features",
    "ccwpolyfill.extensionKeeper": "Extension Keeper",
    "ccwpolyfill.screenshotCommentMessage":
      "This page requests your screenshot comment (though this is not CCW and has no effect)",
    "ccwpolyfill.promptTitle": "Prompt",
    "ccwpolyfill.okMeow": "Okay meow...",
    "ccwpolyfill.meowQuestion": "Meow?",
    "ccwpolyfill.meowAlert": "Meow~",
  },
  "zh-cn": {
    "ccwpolyfill.noticeTitle": "通知",
    "ccwpolyfill.cancelBtn": "取消",
    "ccwpolyfill.confirmBtn": "确认",
    "ccwpolyfill.warning": "警告",
    "ccwpolyfill.experimentalWarning": "您正在使用实验性功能",
    "ccwpolyfill.extensionKeeper": "扩展防卸载器",
    "ccwpolyfill.screenshotCommentMessage": "该页面请求您截图评论(虽然这不是CCW并没有什么用)",
    "ccwpolyfill.promptTitle": "提示",
    "ccwpolyfill.okMeow": "好的喵...",
    "ccwpolyfill.meowQuestion": "喵？",
    "ccwpolyfill.meowAlert": "喵~",
  },
};

/**
 * Translate a key to the current language
 * @param key - Translation key
 * @param language - Current language
 * @returns Translated string or original key if not found
 */
export const translate = (key: string, language?: string): string => {
  if (!language) return key;
  
  const langTranslations = translations[language.toLowerCase()];
  if (!langTranslations) return key;
  
  return langTranslations[key] || key;
};

export const t = (key: string): string => {
  let language = Scratch.translate.language;
  
  const langTranslations = translations[language.toLowerCase()];
  if (!langTranslations) return key;
  
  return langTranslations[key] || key;
};