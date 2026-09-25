'use client';

import { useEffect, useRef } from 'react';

/**
 * The portrait is fixed to the screen, so it stays put while the text scrolls through it.
 * Its frame is measured from the text itself (at the top of the page):
 *   top    – level with the first line (name / email)
 *   left   – through the hyphen of "spatio-temporal"
 *   right  – the right edge of the text column
 *   bottom – the second line of the poem
 * On phones (narrower than 768px) it instead takes the right 55% of the column
 * at the photograph's natural proportions, so it is never squeezed or cut off.
 */
export default function ScrollPortrait({ src }: { src: string }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const q = (s: string) => document.querySelector<HTMLElement>(s);

    const layout = () => {
      const frame = frameRef.current;
      const top = q('[data-photo-top]');
      const hyphen = q('[data-hyphen]');
      const bottom = q('[data-photo-bottom]');
      const content = q('[data-content]');
      if (!frame || !top || !hyphen || !bottom || !content) return;

      const sy = window.scrollY;
      const t = top.getBoundingClientRect().top + sy;
      const c = content.getBoundingClientRect();
      const cs = getComputedStyle(content);
      const r = c.right - parseFloat(cs.paddingRight);
      const contentLeft = c.left + parseFloat(cs.paddingLeft);

      let l: number;
      let height: number;
      if (window.innerWidth < 768) {
        // Phones: the lines wrap, so measuring from the text would squeeze the photo.
        // Instead use a fixed share of the column at the photo's own proportions (no cropping).
        const img = imgRef.current;
        const ratio = img && img.naturalWidth ? img.naturalWidth / img.naturalHeight : 0.84;
        const w = (r - contentLeft) * 0.55;
        l = r - w;
        height = w / ratio;
      } else {
        const h = hyphen.getBoundingClientRect();
        l = (h.left + h.right) / 2;
        height = bottom.getBoundingClientRect().bottom + sy - t;
      }

      Object.assign(frame.style, {
        top: `${t}px`,
        left: `${l}px`,
        width: `${Math.max(0, r - l)}px`,
        height: `${Math.max(0, height)}px`,
        opacity: '1',
      });
      window.dispatchEvent(new Event('portrait-layout'));
    };

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frameId = 0;
    const settle = () => {
      frameId = 0;
      if (reduceMotion || !imgRef.current) return;
      const t = Math.min(Math.max(window.scrollY / window.innerHeight, 0), 1);
      imgRef.current.style.transform = `scale(${1.05 - t * 0.05})`;
    };
    const onScroll = () => {
      if (!frameId) frameId = requestAnimationFrame(settle);
    };

    layout();
    settle();
    imgRef.current?.addEventListener('load', layout);
    document.fonts?.ready.then(layout);
    window.addEventListener('resize', layout);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('resize', layout);
      window.removeEventListener('scroll', onScroll);
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div
      ref={frameRef}
      data-portrait
      aria-hidden="true"
      className="pointer-events-none fixed z-0 overflow-hidden transition-opacity duration-500"
      style={{ opacity: 0 }}
    >
      <img
        ref={imgRef}
        src={src}
        alt=""
        className="h-full w-full object-cover grayscale"
        style={{ objectPosition: '50% 22%', transform: 'scale(1.05)', willChange: 'transform' }}
      />
      {/* light shade so white lettering reads anywhere on the photograph */}
      <div className="absolute inset-0 bg-black/25" />
    </div>
  );
}
