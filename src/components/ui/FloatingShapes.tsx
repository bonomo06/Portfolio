'use client';

import { useTheme } from '@/contexts/ThemeContext';

export default function FloatingShapes() {
  const { theme } = useTheme();

  return (
    <div className="floating-shapes">
      {/* Primary large shape */}
      <div
        className="floating-shape animate-float bg-primary-400/30 dark:bg-primary-600/20"
        style={{
          width: '600px',
          height: '600px',
          top: '-200px',
          right: '-200px',
        }}
      />
      
      {/* Accent shape */}
      <div
        className="floating-shape animate-float-delayed bg-accent-400/20 dark:bg-accent-600/15"
        style={{
          width: '400px',
          height: '400px',
          bottom: '10%',
          left: '-100px',
        }}
      />
      
      {/* Small decorative shapes */}
      <div
        className="floating-shape animate-pulse-slow bg-primary-300/20 dark:bg-primary-500/10"
        style={{
          width: '200px',
          height: '200px',
          top: '40%',
          right: '10%',
        }}
      />
      
      <div
        className="floating-shape animate-float bg-accent-300/15 dark:bg-accent-500/10"
        style={{
          width: '150px',
          height: '150px',
          top: '60%',
          left: '20%',
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50 dark:to-dark-950/50" />
    </div>
  );
}
