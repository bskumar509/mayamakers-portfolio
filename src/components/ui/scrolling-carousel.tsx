import { forwardRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ScrollingCarouselProps {
  children: ReactNode;
  direction?: 'left' | 'right';
  speed?: 'slow' | 'normal' | 'fast';
  pauseOnHover?: boolean;
  className?: string;
}

const speedClasses = {
  slow: 'animate-scroll-right-to-left [animation-duration:30s]',
  normal: 'animate-scroll-right-to-left [animation-duration:20s]',
  fast: 'animate-scroll-right-to-left [animation-duration:10s]'
};

const speedClassesReverse = {
  slow: 'animate-scroll-left-to-right [animation-duration:30s]',
  normal: 'animate-scroll-left-to-right [animation-duration:25s]',
  fast: 'animate-scroll-left-to-right [animation-duration:15s]'
};

const ScrollingCarousel = forwardRef<HTMLDivElement, ScrollingCarouselProps>(
  ({ children, direction = 'right', speed = 'normal', pauseOnHover = true, className }, ref) => {
    const animationClass = direction === 'right' 
      ? speedClasses[speed] 
      : speedClassesReverse[speed];

    return (
      <div 
        ref={ref}
        className={cn(
          'overflow-hidden relative',
          className
        )}
      >
        <div 
          className={cn(
            'flex whitespace-nowrap',
            animationClass,
            pauseOnHover && 'hover:[animation-play-state:paused]'
          )}
        >
          {/* Duplicate content for seamless loop */}
          <div className="flex animate-none">
            {children}
          </div>
          <div className="flex animate-none" aria-hidden="true">
            {children}
          </div>
        </div>
      </div>
    );
  }
);

ScrollingCarousel.displayName = "ScrollingCarousel";

export { ScrollingCarousel };