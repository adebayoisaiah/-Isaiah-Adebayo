import React, { useEffect, useRef, useState } from 'react';

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // ms transition delay
  threshold?: number;
  id?: string;
}

export const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  className = '',
  delay = 0,
  threshold = 0.08,
  id,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If IntersectionObserver is not supported, reveal immediately
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const currentRef = domRef.current;
    if (!currentRef) return;

    // Check if element is already within the viewport on initial mount
    const rect = currentRef.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      if (delay > 0) {
        const timer = setTimeout(() => setIsVisible(true), delay);
        return () => clearTimeout(timer);
      } else {
        setIsVisible(true);
        return;
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px', // Trigger slightly before it deeply enters the viewport
      }
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, [delay, threshold]);

  return (
    <div
      id={id}
      ref={domRef}
      style={delay && isVisible ? { transitionDelay: `${delay}ms` } : undefined}
      className={`fade-in-up-section w-full ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};
