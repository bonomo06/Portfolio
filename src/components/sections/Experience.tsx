'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionTitle from '@/components/ui/SectionTitle';
import { Briefcase, Building2, Bot, Code2 } from 'lucide-react';

export default function Experience() {
  const { t } = useLanguage();

  const icons = [Bot, Code2];

  return (
    <section id="experience" className="py-24 bg-dark-50 dark:bg-dark-900/50 relative">
      <div className="container mx-auto px-6">
        <SectionTitle title={t.experience.title} subtitle={t.experience.subtitle} />

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

            {/* Experience Cards */}
            <div className="space-y-8">
              {t.experience.jobs.map((job, index) => {
                const IconComponent = icons[index] || Bot;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="relative flex gap-6 pl-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    {/* Timeline dot */}
                    <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-500/30">
                      <Briefcase className="w-4 h-4 text-white" />
                    </div>

                    {/* Card */}
                    <div className="flex-1 bg-white dark:bg-dark-900 rounded-2xl p-6 border border-dark-200 dark:border-dark-800 shadow-lg shadow-dark-900/5 dark:shadow-none transition-all duration-300 hover:border-primary-500">
                      {/* Current Badge */}
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-xs font-medium mb-4">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
                        {t.experience.current}
                      </span>

                      <h3 className="font-display font-bold text-xl text-dark-900 dark:text-white mb-2">
                        {job.role}
                      </h3>

                      <div className="flex items-center gap-2 text-dark-600 dark:text-dark-300 mb-4">
                        <Building2 className="w-4 h-4 text-primary-500" />
                        <span className="font-semibold">{job.company}</span>
                      </div>

                      <p className="text-dark-600 dark:text-dark-400 leading-relaxed mb-6">
                        {job.description}
                      </p>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2">
                        {job.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-lg bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300 text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Decorative Icon */}
                      <motion.div
                        className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-2xl flex items-center justify-center"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        <IconComponent className="w-8 h-8 text-primary-500" />
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
