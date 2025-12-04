'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionTitle from '@/components/ui/SectionTitle';
import { User, Target, Lightbulb } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: <User className="w-6 h-6" />,
      title: 'Full Stack',
      description: t.language === 'pt-BR' 
        ? 'Desenvolvimento completo, do backend ao frontend'
        : 'Complete development, from backend to frontend',
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: t.language === 'pt-BR' ? 'Focado em Resultados' : 'Results Focused',
      description: t.language === 'pt-BR'
        ? 'Soluções que geram valor real'
        : 'Solutions that generate real value',
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: t.language === 'pt-BR' ? 'Inovação' : 'Innovation',
      description: t.language === 'pt-BR'
        ? 'IA e automação para otimizar processos'
        : 'AI and automation to optimize processes',
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionTitle title={t.about.title} subtitle={t.about.subtitle} />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="prose prose-lg dark:prose-invert max-w-none">
              {t.about.description.split('\n\n').map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-dark-600 dark:text-dark-300 leading-relaxed mb-4"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white dark:bg-dark-900 border border-dark-200 dark:border-dark-800 shadow-lg shadow-dark-900/5 dark:shadow-none transition-all duration-300 hover:border-primary-500"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-dark-900 dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-dark-500 dark:text-dark-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
