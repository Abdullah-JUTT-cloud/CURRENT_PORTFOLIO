import { useEffect, useRef } from 'react';

/* Matrix rain backdrop for the Security section.
   Classic cmatrix algorithm: one glyph per column per tick, previous frames fade
   toward near-black, producing the falling trails. Perf-guarded:
   - requestAnimationFrame loop capped at ~30fps (the effect reads better slow anyway)
   - devicePixelRatio capped at 1 (glowy noise needs no Retina sharpness)
   - IntersectionObserver pauses the loop whenever the section leaves the viewport
   - visibilitychange pauses it when the tab is hidden
   - prefers-reduced-motion renders a single static sprinkle instead of animating
   Glyphs are alphanumeric/symbols: no CJK font is bundled with the site, so
   katakana would render as tofu boxes. Swap GLYPHS to re-enable it. */
const GLYPHS = '01<>#$%&*+=/\\|ABCDEFXZ0123456789';
const MONO = "'JetBrains Mono', 'Fira Code', ui-monospace, SFMono-Regular, Menlo, monospace";
const FRAME_MS = 1000 / 30;
const FADE = 'rgba(5, 8, 5, 0.14)'; // trail fade — converges to the card background tone

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let rafId = 0;
    let running = false;
    let inView = false;
    let width = 0;
    let height = 0;
    let fontSize = 14;
    let lastTime = 0;
    let columns = [];

    const randomGlyph = () => GLYPHS[(Math.random() * GLYPHS.length) | 0];

    const resize = () => {
      const rect = (canvas.parentElement || canvas).getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1);
      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.font = `${fontSize}px ${MONO}`;
      ctx.textBaseline = 'top';

      fontSize = width < 640 ? 12 : 14;
      ctx.font = `${fontSize}px ${MONO}`;
      const colWidth = fontSize + 2;
      const count = Math.ceil(width / colWidth);
      columns = Array.from({ length: count }, (_, i) => ({
        x: i * colWidth,
        y: Math.floor(Math.random() * -40), // start above the top edge
        speed: 1 + ((Math.random() * 3) | 0), // frames to wait between advances
        tick: (Math.random() * 3) | 0,
      }));

      ctx.fillStyle = '#050805';
      ctx.fillRect(0, 0, width, height);
    };

    const draw = (time) => {
      rafId = requestAnimationFrame(draw);
      if (time - lastTime < FRAME_MS) return;
      lastTime = time;

      // Fade the previous frame — old glyphs dim toward black, forming trails
      ctx.fillStyle = FADE;
      ctx.fillRect(0, 0, width, height);

      for (const col of columns) {
        col.tick += 1;
        if (col.tick < col.speed) continue;
        col.tick = 0;

        ctx.fillStyle = 'rgba(150, 255, 150, 0.9)'; // bright head glyph
        ctx.fillText(randomGlyph(), col.x, col.y * fontSize);

        col.y += 1;
        if (col.y * fontSize > height + Math.random() * 240) {
          col.y = Math.floor(Math.random() * -30);
          col.speed = 1 + ((Math.random() * 3) | 0);
        }
      }
    };

    const start = () => {
      if (running || !inView || document.hidden || reducedMotion) return;
      running = true;
      lastTime = performance.now();
      rafId = requestAnimationFrame(draw);
    };

    const stop = () => {
      running = false;
      cancelAnimationFrame(rafId);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        if (inView) start();
        else stop();
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };
    document.addEventListener('visibilitychange', onVisibility);

    let resizeTimer = 0;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(resize, 150); // debounce resize storms
    };
    window.addEventListener('resize', onResize);

    resize();

    if (reducedMotion) {
      // Static sprinkle — same vibe, zero ongoing cost
      for (let i = 0; i < 140; i += 1) {
        ctx.fillStyle = `rgba(0, 255, 65, ${0.05 + Math.random() * 0.08})`;
        ctx.fillText(randomGlyph(), Math.random() * width, Math.random() * height);
      }
    } else {
      start();
    }

    return () => {
      stop();
      io.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('resize', onResize);
      window.clearTimeout(resizeTimer);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-50"
    />
  );
};

export default MatrixRain;
