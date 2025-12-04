'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionTitle from '@/components/ui/SectionTitle';
import { skills, skillIcons } from '@/data/skills';

export default function Skills() {
  const { t } = useLanguage();

  const categories = [
    { key: 'frontend', skills: skills.frontend, color: 'from-blue-500 to-cyan-500' },
    { key: 'backend', skills: skills.backend, color: 'from-green-500 to-emerald-500' },
    { key: 'database', skills: skills.database, color: 'from-orange-500 to-amber-500' },
    { key: 'devops', skills: skills.devops, color: 'from-purple-500 to-violet-500' },
    { key: 'mobile', skills: skills.mobile, color: 'from-pink-500 to-rose-500' },
    { key: 'data', skills: skills.data, color: 'from-indigo-500 to-blue-500' },
    { key: 'tools', skills: skills.tools, color: 'from-teal-500 to-cyan-500' },
  ];

  return (
    <section id="skills" className="py-24 bg-dark-50 dark:bg-dark-900/50 relative">
      <div className="container mx-auto px-6">
        <SectionTitle title={t.skills.title} subtitle={t.skills.subtitle} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-dark-900 rounded-2xl p-6 border border-dark-200 dark:border-dark-800 shadow-lg shadow-dark-900/5 dark:shadow-none"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                  <span className="text-white text-lg">
                    {category.key === 'frontend' && '🎨'}
                    {category.key === 'backend' && '⚙️'}
                    {category.key === 'database' && '💾'}
                    {category.key === 'devops' && '☁️'}
                    {category.key === 'mobile' && '📱'}
                    {category.key === 'data' && '📊'}
                    {category.key === 'tools' && '🛠️'}
                  </span>
                </div>
                <h3 className="font-semibold text-dark-900 dark:text-white">
                  {t.skills.categories[category.key as keyof typeof t.skills.categories]}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="skill-tag flex items-center gap-1.5 cursor-default"
                  >
                    <span className="text-sm">{skillIcons[skill] || '•'}</span>
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
