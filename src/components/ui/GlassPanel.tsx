import type { HTMLAttributes, ReactNode } from 'react';

interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  featured?: boolean;
}

export function GlassPanel({ children, className = '', featured = false, ...props }: GlassPanelProps) {
  return (
    <div
      className={`glass-panel${featured ? ' glass-panel--featured' : ''} ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}
