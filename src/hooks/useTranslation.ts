import { useLanguage } from '../context/LanguageContext';
import { SUPPORTED_LANGUAGES, Language } from '../i18n/translations';

/**
 * Custom hook `useTranslation`
 * Provides current language, translation dictionary `t`, language changer, and available language options.
 */
export const useTranslation = () => {
  const { language, setLanguage, t } = useLanguage();

  return {
    language,
    setLanguage,
    t,
    languages: SUPPORTED_LANGUAGES,
    isLanguage: (lang: Language) => language === lang,
  };
};
