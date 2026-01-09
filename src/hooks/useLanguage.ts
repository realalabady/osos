import { useTranslation } from "react-i18next";
import { useCallback, useEffect } from "react";

export const useLanguage = () => {
  const { i18n, t } = useTranslation();

  const currentLanguage = i18n.language;
  const isRTL = currentLanguage === "ar";
  const direction = isRTL ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage, direction]);

  const toggleLanguage = useCallback(() => {
    const newLang = currentLanguage === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  }, [currentLanguage, i18n]);

  const setLanguage = useCallback(
    (lang: "ar" | "en") => {
      i18n.changeLanguage(lang);
      localStorage.setItem("language", lang);
    },
    [i18n]
  );

  return {
    t,
    currentLanguage,
    isRTL,
    direction,
    toggleLanguage,
    setLanguage,
  };
};
