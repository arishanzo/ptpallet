import { useEffect, useRef } from 'react';

export default function ScrollReveal({
  children,
  direction,           // 'up', 'down', 'left', 'right'
  fade = false,        // true to use fade-in
  zoom = false,        // true to use zoom-in
  delay = 0,           // in ms
  className = '',
}) {
  const ref = useRef();

  // Tentukan animasi berdasarkan prop
  const getAnimationName = () => {
    if (fade) return 'fade-in';
    if (zoom) return 'zoom-in';
    if (direction === 'up') return 'slide-in-up';
    if (direction === 'down') return 'slide-in-down';
    if (direction === 'left') return 'slide-in-left';
    if (direction === 'right') return 'slide-in-right';
    return 'fade-in'; // default fallback
  };

  const animation = getAnimationName();

  useEffect(() => {
    const el = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && el) {
          // Reset transform default-nya
          el.classList.remove(
            'opacity-0',
            'translate-y-1/2',
            '-translate-y-1/2',
            'translate-x-full',
            '-translate-x-full',
            'scale-90'
          );

          // Tambahkan animasi & delay
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
