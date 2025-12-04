'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionTitle from '@/components/ui/SectionTitle';
import Card from '@/components/ui/Card';
import { ExternalLink, Github, Folder } from 'lucide-react';

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionTitle title={t.projects.title} subtitle={t.projects.subtitle} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.projects.items.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="h-full flex flex-col bg-white dark:bg-dark-900 rounded-2xl border border-dark-200 dark:border-dark-800 shadow-lg shadow-dark-900/5 dark:shadow-none overflow-hidden group transition-all duration-300 hover:border-primary-500 hover:-translate-y-2">
                {/* Header with gradient */}
                <div className="relative h-32 flex-shrink-0 bg-gradient-to-br from-primary-500/10 via-accent-500/10 to-primary-600/10 dark:from-primary-500/20 dark:via-accent-500/20 dark:to-primary-600/20 p-6 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-16 h-16 rounded-2xl bg-white dark:bg-dark-800 shadow-lg flex items-center justify-center"
                  >
                    <Folder className="w-8 h-8 text-primary-500" />
                  </motion.div>
                  
                  {/* Decorative dots */}
                  <div className="absolute top-4 right-4 flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-red-400" />
                    <span className="w-2 h-2 rounded-full bg-yellow-400" />
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-display font-bold text-lg text-dark-900 dark:text-white mb-3 h-14 line-clamp-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-dark-600 dark:text-dark-400 text-sm leading-relaxed mb-4 h-16 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6 min-h-[68px]">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300 text-xs font-medium h-fit"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-4 border-t border-dark-100 dark:border-dark-800 mt-auto">
                    {'link' in project && project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {t.projects.viewProject}
                      </a>
                    ) : null}
                    
                    {/* GitHub link */}
                    {'github' in project && project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors ml-auto"
                      >
                        <Github className="w-4 h-4" />
                        {t.projects.viewCode}
                      </a>
                    ) : (
                      <span className="flex items-center gap-2 text-sm text-dark-400 dark:text-dark-500 ml-auto">
                        <Github className="w-4 h-4" />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
