import { useEffect, useRef } from 'react';

export default function ScrollReveal({
  children,
  animation = 'slide-in-up',
  delay = 0,
  className = '',
}) {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && el) {
          el.classList.remove(
            'opacity-0',
            'translate-y-1/2',
            '-translate-y-1/2',
            'translate-x-full',
            '-translate-x-full',
            'scale-90'
          );

          el.classList.add(`animate-${animation}`);
          if (delay > 0) el.style.animationDelay = `${delay}ms`;

          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, [animation, delay]);

  return (
    <div
      ref={ref}
      className={`opacity-0 transition-all duration-700 ${className}`}
    >
      {children}
    </div>
  );
}
