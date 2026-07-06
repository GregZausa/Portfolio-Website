import { useEffect, useRef, useState } from 'react';
import { useScrollY, prefersReducedMotion } from './useScrollY';

export const usePageParallax = (speed = 0.15) => {
  const scrollY = useScrollY();
  if (prefersReducedMotion()) return { transform: 'none' };
  return { transform: `translate3d(0, ${scrollY * speed}px, 0)` };
};

export const useElementParallax = (speed = 0.12) => {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const handle = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2 - window.innerHeight / 2;
      setOffset(center * speed);
    };
    window.addEventListener('scroll', handle, { passive: true });
    window.addEventListener('resize', handle);
    handle();
    return () => {
      window.removeEventListener('scroll', handle);
      window.removeEventListener('resize', handle);
    };
  }, [speed]);

  return [ref, offset];
};