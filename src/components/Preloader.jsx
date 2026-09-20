import { useEffect, useState } from 'react';

export default function Preloader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const frame = (now) => {
      const progress = Math.min(1, (now - start) / 900);
      setCount(Math.round(progress * 100));
      if (progress < 1) requestAnimationFrame(frame);
      else setDone(true);
    };
    requestAnimationFrame(frame);
  }, []);

  return (
    <div className={`preloader ${done ? 'is-done' : ''}`} aria-hidden="true">
      <div className="preloader-grid" />
      <div className="preloader-top"><span>Portfolio / 2026</span><span>Lahore, PK</span></div>
      <div className="preloader-center">
        <svg viewBox="0 0 600 90" aria-hidden="true"><path d="M20 45H540" /><path className="arrow-head" d="M540 45l-30-17m30 17-30 17" /><circle cx="300" cy="45" r="38" /></svg>
        <strong>{String(count).padStart(3, '0')}</strong>
      </div>
      <div className="preloader-bottom"><span>Calibrating trajectory</span><span>{count}%</span></div>
    </div>
  );
}
