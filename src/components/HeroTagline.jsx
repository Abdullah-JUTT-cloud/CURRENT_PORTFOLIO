import { useEffect, useState } from 'react';

// Short lines, each under ~30 characters, so the line always sits inside the blue panel
// rather than running off it onto the cream at narrow widths.
const LINES = [
  'Production-grade by default.',
  'Secure from the first commit.',
  'Interfaces that survive load.',
  'Shipped, measured, hardened.',
  'Full-stack, end to end.',
];
const COLORS = ['#d9ff43', '#f3efe5', '#ff593e', '#ffffff'];

const TYPE_MS = 58;
const ERASE_MS = 26;
const HOLD_MS = 1600;
const GAP_MS = 320;

export default function HeroTagline() {
  const [reduced, setReduced] = useState(false);
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [erasing, setErasing] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => setReduced(query.matches);
    apply();
    query.addEventListener('change', apply);
    return () => query.removeEventListener('change', apply);
  }, []);

  useEffect(() => {
    if (reduced) return undefined;
    const line = LINES[index % LINES.length];
    // Pause at the end of a line and again once it is empty, so the loop breathes.
    const delay = !erasing && text === line ? HOLD_MS : erasing && text === '' ? GAP_MS : erasing ? ERASE_MS : TYPE_MS;
    const timer = setTimeout(() => {
      if (!erasing && text === line) setErasing(true);
      else if (erasing && text === '') { setErasing(false); setIndex((i) => i + 1); }
      else setText(line.slice(0, text.length + (erasing ? -1 : 1)));
    }, delay);
    return () => clearTimeout(timer);
  }, [text, erasing, index, reduced]);

  return (
    <p className="hero-tagline" aria-hidden="true" style={{ '--tagline-color': COLORS[index % COLORS.length] }}>
      <span className="hero-tagline-text">{reduced ? LINES[0] : text}</span>
      <i className="hero-tagline-caret" />
    </p>
  );
}
