'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionTitle from '@/components/ui/SectionTitle';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  const { t, language } = useLanguage();

  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionTitle title={t.education.title} subtitle={t.education.subtitle} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 to-accent-500" />

            {/* Education Card */}
            <motion.div
              whileHover={{ x: 10 }}
              className="relative flex gap-6 pl-4"
            >
              {/* Timeline dot */}
              <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-500/30">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>

              {/* Card */}
              <div className="flex-1 bg-white dark:bg-dark-900 rounded-2xl p-6 border border-dark-200 dark:border-dark-800 shadow-lg shadow-dark-900/5 dark:shadow-none transition-all duration-300 hover:border-primary-500">
                {/* Status Badge */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  {t.education.status}
                </span>

                <h3 className="font-display font-bold text-xl text-dark-900 dark:text-white mb-2">
                  {t.education.degree}
                </h3>

                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-2 text-dark-600 dark:text-dark-300">
                    <MapPin className="w-4 h-4 text-primary-500" />
                    <span>{t.education.institution}</span>
                  </div>
                  <div className="flex items-center gap-2 text-dark-600 dark:text-dark-300">
                    <Calendar className="w-4 h-4 text-primary-500" />
                    <span>{t.education.period}</span>
                  </div>
                </div>

                {/* Decorative Progress Bar */}
                <div className="mt-4">
                  <div className="flex justify-between text-xs text-dark-500 dark:text-dark-400 mb-2">
                    <span>{language === 'pt-BR' ? 'Progresso do curso' : 'Course progress'}</span>
                    <span>66%</span>
                  </div>
                  <div className="h-2 bg-dark-100 dark:bg-dark-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '66%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
