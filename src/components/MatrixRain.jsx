import { useEffect, useRef } from 'react';

const glyphs = '01{}[]<>/\\$#*+=;:';

export default function MatrixRain() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const context = canvas.getContext('2d');
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ink = '#030a06';
    let frame;
    let running = false;
    let drops = [];
    let speeds = [];
    let fontSize = 15;
    let lineHeight = 20;
    let columnWidth = 18;

    const glyphed = () => glyphs[Math.floor(Math.random() * glyphs.length)];

    const measure = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      if (!width || !height) return false;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      fontSize = 15 * ratio;
      lineHeight = 20 * ratio;
      columnWidth = 18 * ratio;
      context.font = `${fontSize}px 'DM Mono', monospace`;
      context.textBaseline = 'top';
      const columns = Math.ceil(canvas.width / columnWidth);
      // Keep the streaks that already exist, stagger any new ones above the fold.
      drops = Array.from({ length: columns }, (_, i) => drops[i] ?? -Math.random() * 30);
      speeds = Array.from({ length: columns }, (_, i) => speeds[i] ?? .38 + Math.random() * .62);
      return true;
    };

    const step = () => {
      context.fillStyle = 'rgba(3, 10, 6, .1)';
      context.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < drops.length; i += 1) {
        const x = i * columnWidth;
        const y = drops[i] * lineHeight;
        context.fillStyle = 'rgba(74, 255, 120, .5)';
        context.fillText(glyphed(), x, y - lineHeight);
        context.fillStyle = 'rgba(205, 255, 215, .88)';
        context.fillText(glyphed(), x, y);
        drops[i] = y > canvas.height && Math.random() > .972 ? -Math.random() * 24 : drops[i] + speeds[i];
      }
    };

    const draw = () => {
      if (!running) return;
      step();
      frame = requestAnimationFrame(draw);
    };

    const start = () => { if (!running && !still) { running = true; frame = requestAnimationFrame(draw); } };
    const stop = () => { running = false; cancelAnimationFrame(frame); };

    if (!measure()) return undefined;

    if (still) {
      // One settled frame: the texture without the motion.
      for (let i = 0; i < drops.length; i += 1) {
        drops[i] = Math.random() * (canvas.height / lineHeight);
      }
      step();
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()), { rootMargin: '120px' });
    observer.observe(canvas);

    const onResize = () => { const wasRunning = running; stop(); if (measure() && wasRunning) start(); };
    window.addEventListener('resize', onResize);

    return () => {
      stop();
      observer.disconnect();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return <canvas className="matrix-rain" ref={ref} aria-hidden="true" />;
}
