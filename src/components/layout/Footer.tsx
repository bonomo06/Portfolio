'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, Code } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-dark-200 dark:border-dark-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          {/* Logo */}
          <a
            href="#"
            className="font-display font-bold text-xl gradient-text"
          >
            {'<Dev />'}
          </a>

          {/* Copyright */}
          <p className="text-dark-500 dark:text-dark-400 text-sm text-center">
            © {currentYear} • {t.footer.rights}
          </p>

          {/* Made with */}
          <div className="flex items-center gap-2 text-sm text-dark-500 dark:text-dark-400">
            <span>{t.footer.madeWith}</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.span>
            <span>{t.footer.and}</span>
            <Code className="w-4 h-4 text-primary-500" />
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
