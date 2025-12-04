'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Language } from '@/data/translations';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'pt-BR' ? 'en' : 'pt-BR');
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="relative flex items-center gap-2 px-3 py-2 rounded-xl bg-dark-100 dark:bg-dark-800 border border-dark-200 dark:border-dark-700 transition-all duration-300 hover:border-primary-500"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      aria-label="Toggle language"
    >
      <motion.span
        key={language}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        className="text-sm font-semibold text-dark-700 dark:text-dark-200"
      >
        {language === 'pt-BR' ? '🇧🇷' : '🇺🇸'}
      </motion.span>
      <span className="text-sm font-medium text-dark-600 dark:text-dark-300">
        {language === 'pt-BR' ? 'PT' : 'EN'}
      </span>
    </motion.button>
  );
}
