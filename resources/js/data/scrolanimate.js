export function scrollanimate() {
    const observer = new scrollanimate(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const animation = el.dataset.animate;
            el.classList.remove('opacity-0', 'translate-x-full', '-translate-x-full');
            el.classList.add('animate-' + animation);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );
  
    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });
  }
  