import { useEffect, useState } from 'react';

export default function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 1150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${done ? 'is-done' : ''}`} aria-hidden="true">
      <div className="preloader-grid" />
      <svg className="preloader-bow" viewBox="0 0 100 200" aria-hidden="true">
        <path className="bow-limbs" d="M70 8 C 26 52, 26 148, 70 192" />
        <path className="bow-grip" d="M33 88h8v24h-8z" />
        <line className="bow-string string-top" x1="70" y1="8" x2="70" y2="100" />
        <line className="bow-string string-bottom" x1="70" y1="192" x2="70" y2="100" />
      </svg>
      <svg className="preloader-arrow" viewBox="0 0 340 60" aria-hidden="true">
        <path className="arrow-shaft" d="M10 30H312" />
        <path className="arrow-feathers" d="M70 10L54 50M56 10L40 50M42 10L26 50M28 10L12 50" />
        <path className="arrow-head" d="M314 30 274 13l9 17-9 17z" />
      </svg>
      <div className="preloader-top"><span>Portfolio / 2026</span><span>Lahore, PK</span></div>
      <div className="preloader-center">
        <svg className="preloader-ring" viewBox="0 0 90 90" aria-hidden="true"><circle cx="45" cy="45" r="38" /></svg>
      </div>
      <div className="preloader-bottom"><span>Calibrating trajectory</span></div>
    </div>
  );
}
