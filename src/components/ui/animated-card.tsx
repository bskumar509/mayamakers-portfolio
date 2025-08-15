import { forwardRef, useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import * as React from 'react';

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: 'left' | 'right' | 'up' | 'none';
  delay?: number;
  triggerOnce?: boolean;
  threshold?: number;
}

const AnimatedCard = forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ 
    className, 
    direction = 'up', 
    delay = 0, 
    triggerOnce = true, 
    threshold = 0.1,
    children,
    ...props 
  }, ref) => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && (!triggerOnce || !hasTriggered)) {
            setTimeout(() => {
              setIsVisible(true);
              setHasTriggered(true);
            }, delay);
          } else if (!entry.isIntersecting && !triggerOnce) {
            setIsVisible(false);
          }
        },
        { threshold }
      );

      const currentRef = cardRef.current;
      if (currentRef) {
        observer.observe(currentRef);
      }

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }, [delay, triggerOnce, threshold, hasTriggered]);

    const getAnimationClass = () => {
      if (!isVisible) return 'opacity-0 translate-y-4';
      
      switch (direction) {
        case 'left':
          return 'animate-slide-in-left';
        case 'right':
          return 'animate-slide-in-right';
        case 'up':
          return 'animate-fade-in-up';
        case 'none':
          return 'animate-scale-in';
        default:
          return 'animate-fade-in-up';
      }
    };

    return (
      <Card
        ref={ref || cardRef}
        className={cn(
          'transform transition-all duration-600 ease-out',
          getAnimationClass(),
          'hover:scale-105 hover:shadow-glow',
          className
        )}
        {...props}
      >
        {children}
      </Card>
    );
  }
);

AnimatedCard.displayName = "AnimatedCard";

export { AnimatedCard };