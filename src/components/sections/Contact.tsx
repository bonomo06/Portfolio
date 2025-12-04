'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import SectionTitle from '@/components/ui/SectionTitle';
import { Mail, Github, Linkedin, ArrowUpRight, Send } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();

  const contacts = [
    {
      name: t.contact.email,
      icon: <Mail className="w-6 h-6" />,
      href: 'mailto:pedrodev1407@gmail.com',
      color: 'from-red-500 to-orange-500',
      hoverColor: 'hover:border-red-500',
    },
    {
      name: t.contact.github,
      icon: <Github className="w-6 h-6" />,
      href: 'https://github.com/bonomo06',
      color: 'from-gray-700 to-gray-900',
      hoverColor: 'hover:border-gray-500',
    },
    {
      name: t.contact.linkedin,
      icon: <Linkedin className="w-6 h-6" />,
      href: 'https://www.linkedin.com/in/pedrobonomo',
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:border-blue-500',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-dark-50 dark:bg-dark-900/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 dark:bg-accent-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle title={t.contact.title} subtitle={t.contact.subtitle} />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-dark-600 dark:text-dark-300 max-w-xl mx-auto mb-12"
        >
          {t.contact.description}
        </motion.p>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.name}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group flex flex-col items-center gap-4 p-8 bg-white dark:bg-dark-900 rounded-2xl border border-dark-200 dark:border-dark-800 shadow-lg shadow-dark-900/5 dark:shadow-none transition-all duration-300 ${contact.hoverColor}`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${contact.color} flex items-center justify-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                {contact.icon}
              </div>

              {/* Name */}
              <span className="font-semibold text-dark-900 dark:text-white flex items-center gap-2">
                {contact.name}
                <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </span>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-primary-500/10 to-accent-500/10 dark:from-primary-500/20 dark:to-accent-500/20 border border-primary-500/30">
            <Send className="w-5 h-5 text-primary-500" />
            <span className="text-dark-700 dark:text-dark-200 font-medium">
              {t.language === 'pt-BR' 
                ? 'Respondo em até 24 horas!' 
                : 'I reply within 24 hours!'}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
