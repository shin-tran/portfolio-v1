import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

// Danh sách ngôn ngữ được hỗ trợ
const supportedLanguages = ["en", "vi"];

// Hàm lấy ngôn ngữ từ localStorage hoặc hệ thống
const getInitialLanguage = () => {
  // 1. Ưu tiên ngôn ngữ từ localStorage
  const savedLanguage = localStorage.getItem("language");
  if (savedLanguage && supportedLanguages.includes(savedLanguage)) {
    return savedLanguage;
  }
  // 2. Nếu không có, dùng ngôn ngữ hệ thống
  const systemLanguage = navigator.language || navigator.languages?.[0];
  const systemLang = systemLanguage?.split("-")[0]; // Lấy phần đầu (vd: "vi-VN" -> "vi")
  if (systemLang && supportedLanguages.includes(systemLang)) {
    return systemLang;
  }
  // 3. Mặc định là English nếu ngôn ngữ hệ thống không được hỗ trợ
  return "en";
};

const initialLanguage = getInitialLanguage();

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: "en",
    lng: initialLanguage, // Sử dụng ngôn ngữ đã được xác định
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    detection: {
      // Tắt auto-detection để dùng logic tùy chỉnh
      order: [],
      caches: [], // Không cache vào localStorage tự động
    },
  });

// Utility function để thay đổi ngôn ngữ và lưu vào localStorage
export const changeLanguageAndSave = (language: string) => {
  if (supportedLanguages.includes(language)) {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  }
};

export default i18n;
