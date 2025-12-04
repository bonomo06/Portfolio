import type { Metadata } from 'next';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Pedro | Full Stack Developer',
  description: 'Desenvolvedor Full Stack apaixonado por tecnologia, dados e IA. Portfolio profissional com projetos de automação, machine learning e desenvolvimento web.',
  keywords: [
    'desenvolvedor',
    'full stack',
    'react',
    'next.js',
    'typescript',
    'python',
    'machine learning',
    'automação',
    'portfolio',
  ],
  authors: [{ name: 'Pedro' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://seu-portfolio.vercel.app',
    title: 'Pedro | Full Stack Developer',
    description: 'Desenvolvedor Full Stack apaixonado por tecnologia, dados e IA.',
    siteName: 'Pedro Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pedro | Full Stack Developer',
    description: 'Desenvolvedor Full Stack apaixonado por tecnologia, dados e IA.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen">
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
