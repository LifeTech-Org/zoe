'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
export function ScrollReveal() {
  const pathname = usePathname();
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const items = [...document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)')];
    items.forEach(item => { if (item.getBoundingClientRect().top < window.innerHeight * .92) item.classList.add('is-visible'); });
    document.documentElement.classList.add('reveal-ready');
    const observer = new IntersectionObserver(entries => { entries.filter(entry => entry.isIntersecting).forEach((entry, index) => { const item = entry.target as HTMLElement; item.style.transitionDelay = `${Math.min(index, 8) * 90}ms`; item.classList.add('is-visible'); observer.unobserve(item); }); }, { rootMargin: '0px 0px -8% 0px', threshold: .12 });
    items.filter(item => !item.classList.contains('is-visible')).forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, [pathname]);
  return null;
}
