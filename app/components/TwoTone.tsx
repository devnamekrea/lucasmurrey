'use client';

import { useEffect, useRef, type ReactNode } from 'react';

/**
 * Renders the page text twice: the normal dark text, and an identical light copy laid
 * exactly on top of it that is only visible inside the portrait's frame. As the text
 * scrolls through the fixed photograph, the letters inside it turn light and readable.
 */
export default function TwoTone({ children }: { children: ReactNode }) {
  const lightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const light = lightRef.current;
      const photo = document.querySelector<HTMLElement>('[data-portrait]');
      if (!light || !photo) return;
      const p = photo.getBoundingClientRect();
      const o = light.getBoundingClientRect();
      const x1 = p.left - o.left;
      const x2 = p.right - o.left;
      const y1 = p.top - o.top;
      const y2 = p.bottom - o.top;
      light.style.clipPath = `polygon(${x1}px ${y1}px, ${x2}px ${y1}px, ${x2}px ${y2}px, ${x1}px ${y2}px)`;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('portrait-layout', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      window.removeEventListener('portrait-layout', schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="relative z-10">
      <style>{`.two-tone-light, .two-tone-light * { color: #fff !important; text-decoration-color: rgba(255,255,255,.6) !important; }`}</style>
      <div>{children}</div>
      <div
        ref={lightRef}
        aria-hidden="true"
        className="two-tone-light pointer-events-none absolute inset-0 select-none"
        style={{
          clipPath: 'polygon(0 0, 0 0, 0 0)',
          textShadow: '0 0 10px rgba(0,0,0,.55), 0 1px 2px rgba(0,0,0,.5)',
        }}
      >
        {children}
      </div>
    </div>
  );
}
