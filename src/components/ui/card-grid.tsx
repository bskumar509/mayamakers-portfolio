import { forwardRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardGridProps {
  children: ReactNode;
  columns?: 1 | 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
  staggerDelay?: number;
}

const columnClasses = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
};

const gapClasses = {
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8'
};

const CardGrid = forwardRef<HTMLDivElement, CardGridProps>(
  ({ children, columns = 3, gap = 'md', className, staggerDelay = 100 }, ref) => {
    return (
      <div 
        ref={ref}
        className={cn(
          'grid',
          columnClasses[columns],
          gapClasses[gap],
          className
        )}
        style={{
          '--stagger-delay': `${staggerDelay}ms`
        } as React.CSSProperties}
      >
        {children}
      </div>
    );
  }
);

CardGrid.displayName = "CardGrid";

export { CardGrid };