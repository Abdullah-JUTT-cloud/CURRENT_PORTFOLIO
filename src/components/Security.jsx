import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import SectionDivider from './SectionDivider';
import MatrixRain from './MatrixRain';
import { TbShield, TbNetwork, TbTool, TbWorld } from 'react-icons/tb';

/* ──────────────────────────────────────────────────────────────
   Constants & data
   ────────────────────────────────────────────────────────────── */
const MONO = "'JetBrains Mono', 'Fira Code', 'ui-monospace', 'SFMono-Regular', 'Menlo', monospace";

const stats = [
  { value: 19, label: 'CEH Curriculum', suffix: 'h+' },
  { value: 23, label: 'Vulnerable Lab Targets', suffix: '+' },
  { value: 5, label: 'Security Domains', suffix: '' },
];

const skillCards = [
  {
    title: '~/security/offensive-security/',
    icon: TbNetwork,
    items: ['network-recon.sh', 'privilege-escalation.sh', 'exploitation-chains.sh'],
  },
  {
    title: '~/security/tools/',
    icon: TbTool,
    items: ['nmap', 'burp-suite', 'owasp-zap'],
  },
  {
    title: '~/security/web-app/',
    icon: TbWorld,
    items: ['sql-injection.sh', 'xss-prevention.sh', 'auth-session-hardening.sh'],
  },
];

/* ──────────────────────────────────────────────────────────────
   Shared CSS strings
   ────────────────────────────────────────────────────────────── */
const terminalCardBase =
  'relative bg-[#050805] border border-[#00FF41]/25 rounded-2xl ' +
  'shadow-[0_0_20px_rgba(0,255,65,0.06),inset_0_0_40px_rgba(0,255,65,0.03)] ' +
  'before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:content-[""] ' +
  'before:bg-[repeating-linear-gradient(0deg,rgba(0,255,65,0.035)_0px,rgba(0,255,65,0.035)_1px,transparent_1px,transparent_3px)]';

const glowPulse = `
  @keyframes glow-pulse {
    0%, 100% { box-shadow: 0 0 20px rgba(0,255,65,0.06), inset 0 0 40px rgba(0,255,65,0.03), 0 0 40px rgba(0,255,65,0.08); }
    50% { box-shadow: 0 0 30px rgba(0,255,65,0.12), inset 0 0 50px rgba(0,255,65,0.06), 0 0 60px rgba(0,255,65,0.15); }
  }
`;

const scanlineOverlay = `
  @keyframes scanline-drift {
    0% { background-position: 0 0; }
    100% { background-position: 0 6px; }
  }
`;

const crtFlicker = `
  @keyframes crt-flicker {
    0% { opacity: 0; filter: brightness(2) contrast(0.5); }
    5% { opacity: 1; filter: brightness(1.1) contrast(1); }
    15% { opacity: 0.95; filter: brightness(1) contrast(1); }
    25% { opacity: 1; filter: brightness(1.05) contrast(1.1); }
    100% { opacity: 1; filter: brightness(1) contrast(1); }
  }
`;

const typingCursor = `
  @keyframes blink-cursor {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }
`;

/* Inject keyframes once */
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = glowPulse + scanlineOverlay + crtFlicker + typingCursor;
  document.head.appendChild(style);
}

/* ──────────────────────────────────────────────────────────────
   Helper: count-up number animation
   ────────────────────────────────────────────────────────────── */
const CountUp = ({ target, suffix = '', duration = 1000, delay = 0, className = '' }) => {
  const reducedMotion = useReducedMotion();
  const [count, setCount] = useState(reducedMotion ? target : 0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (reducedMotion) return;
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = performance.now() + delay;
    const animate = (now) => {
      if (now < startTime) {
        requestAnimationFrame(animate);
        return;
      }
      const progress = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(target);
    };
    requestAnimationFrame(animate);
  }, [target, duration, delay, reducedMotion]);

  return <span className={className}>{count}{suffix}</span>;
};

/* ──────────────────────────────────────────────────────────────
   Helper: typing text effect
   ────────────────────────────────────────────────────────────── */
const TypedText = ({ text, speed = 18, delay = 0, className = '', onComplete }) => {
  const reducedMotion = useReducedMotion();
  const [displayed, setDisplayed] = useState(reducedMotion ? text : '');
  const [finished, setFinished] = useState(reducedMotion);
  const indexRef = useRef(0);

  useEffect(() => {
    if (reducedMotion) return;
    if (finished) return;

    const startTime = performance.now() + delay;
    const animate = (now) => {
      if (now < startTime) {
        requestAnimationFrame(animate);
        return;
      }
      const charsToShow = Math.floor((now - startTime) / speed);
      if (charsToShow > indexRef.current) {
        indexRef.current = Math.min(charsToShow, text.length);
        setDisplayed(text.slice(0, indexRef.current));
      }
      if (indexRef.current < text.length) {
        requestAnimationFrame(animate);
      } else {
        setFinished(true);
        onComplete?.();
      }
    };
    requestAnimationFrame(animate);
  }, [text, speed, delay, reducedMotion, finished, onComplete]);

  return (
    <span className={className}>
      {displayed}
      {!finished && !reducedMotion && <span className="animate-[blink-cursor_530ms_steps(2)_infinite]">▊</span>}
    </span>
  );
};

/* ──────────────────────────────────────────────────────────────
   Terminal Card Component
   ────────────────────────────────────────────────────────────── */
const TerminalCard = () => {
  const reducedMotion = useReducedMotion();
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [phase, setPhase] = useState(reducedMotion ? 3 : 0);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -100px 0px' }
    );
    if (cardRef.current) io.observe(cardRef.current);
    return () => io.disconnect();
  }, []);

  // Phase sequence
  useEffect(() => {
    if (!visible || reducedMotion) return;
    const timer1 = setTimeout(() => setPhase(1), 300); // start whoami typing
    const timer2 = setTimeout(() => setPhase(2), 2200); // start cat typing
    const timer3 = setTimeout(() => setPhase(3), 3000); // done
    return () => { clearTimeout(timer1); clearTimeout(timer2); clearTimeout(timer3); };
  }, [visible, reducedMotion]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20, filter: 'brightness(0.5)' }}
      animate={{ opacity: 1, y: 0, filter: 'brightness(1)' }}
      transition={{ duration: reducedMotion ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`${terminalCardBase} p-8 animate-[glow-pulse_4s_ease-in-out_infinite]`}
      style={{ fontFamily: MONO }}
    >
      {/* CRT scanline overlay */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden"
        style={{
          opacity: reducedMotion ? 0 : 0.06,
          background: 'repeating-linear-gradient(0deg, rgba(0,255,65,0.15) 0px, rgba(0,255,65,0.15) 1px, transparent 1px, transparent 3px)',
          animation: reducedMotion ? 'none' : 'scanline-drift 8s linear infinite',
        }}
        aria-hidden="true"
      />

      {/* CRT boot flicker overlay (plays once on mount) */}
      {!reducedMotion && phase === 0 && (
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none bg-[#050805]"
          style={{ animation: 'crt-flicker 0.8s ease-out forwards', zIndex: 10 }}
          aria-hidden="true"
        />
      )}

      {/* Title bar */}
      <div className="flex items-center gap-2 mb-6 relative z-10">
        <span className="w-2.5 h-2.5 rounded-full bg-[#00FF41]/70 hover:scale-110 transition-transform" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#00FF41]/35 hover:scale-110 transition-transform" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#00FF41]/15 hover:scale-110 transition-transform" />
        <span className="ml-2 text-[10px] text-[#00FF41]/60 tracking-widest uppercase">whoami — abdullah@sec</span>
        <span className="ml-auto flex items-center gap-1.5 text-[10px] text-[#00FF41]/80">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00FF41] animate-pulse" />
          <span className="tracking-wider">LIVE</span>
        </span>
      </div>

      <div className="space-y-5 text-base leading-relaxed relative z-10">
        {/* Command: whoami --security-profile */}
        <div className="flex items-baseline gap-2">
          <span className="text-[#00FF41]/70">$</span>
          <TypedText
            text="whoami --security-profile"
            speed={15}
            delay={phase >= 1 ? 0 : 999999}
            className="text-[#00FF41] font-bold text-sm"
            onComplete={() => phase === 1 && setPhase(2)}
          />
        </div>

        {/* Bio output */}
        <motion.div
          initial={false}
          animate={{ opacity: phase >= 2 ? 1 : 0, y: phase >= 2 ? 0 : 10 }}
          transition={{ duration: 0.4, delay: phase >= 2 ? 0.1 : 0, ease: [0.16, 1, 0.3, 1] }}
          className="text-gray-200 whitespace-pre-wrap leading-relaxed pl-4"
        >
          <TbShield className='inline-block mr-1 text-[#00FF41]/80' size={14} />Cybersecurity / Ethical Hacking
          <br />Location: Lahore, Pakistan
          <br /><br />
          Software Engineering student transitioning into cybersecurity and ethical hacking,
          <br />backed by hands‑on production engineering experience. Completed a structured
          <br />training path covering network security, Linux security, and the full CEH curriculum.
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={false}
          animate={{ opacity: phase >= 2 ? 1 : 0, scaleX: phase >= 2 ? 1 : 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="border-t border-[#00FF41]/10 my-1 transform-origin-left"
        />

        {/* Command: cat stats.log */}
        <motion.div
          initial={false}
          animate={{ opacity: phase >= 3 ? 1 : 0, y: phase >= 3 ? 0 : 10 }}
          transition={{ duration: 0.3, delay: phase >= 3 ? 0.3 : 0, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex items-baseline gap-2">
            <span className="text-[#00FF41]/70">$</span>
            <TypedText
              text="cat stats.log"
              speed={15}
              delay={phase >= 3 ? 0 : 999999}
              className="text-[#00FF41] font-bold text-sm"
            />
          </div>
        </motion.div>

        {/* Stats with count-up and progress bars */}
        <motion.div
          initial={false}
          animate={{ opacity: phase >= 3 ? 1 : 0, y: phase >= 3 ? 0 : 15 }}
          transition={{ duration: 0.4, delay: phase >= 3 ? 0.5 : 0, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-sm space-y-3 pt-2"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 + i * 0.12 }}
              className="group relative"
            >
              <div className="flex items-baseline gap-3">
                <span className="text-gray-300 flex-1">{s.label}</span>
                <CountUp
                  target={s.value}
                  suffix={s.suffix}
                  duration={1000}
                  delay={600 + i * 120}
                  className="text-[#00FF41] font-medium whitespace-nowrap ml-auto"
                />
              </div>
              {/* Progress bar underline */}
              <div className="absolute bottom-0 left-0 h-0.5 w-full bg-[#00FF41]/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: 0.6 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full bg-gradient-to-r from-[#00FF41]/40 via-[#00FF41] to-[#00FF41]/40 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Persistent blinking cursor at bottom */}
        <motion.div
          initial={false}
          animate={{ opacity: phase >= 3 ? 1 : 0 }}
          transition={{ delay: 1.2 }}
          className="pt-3"
        >
          <span className="animate-[blink-cursor_530ms_steps(2)_infinite] text-white">▊</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

/* ──────────────────────────────────────────────────────────────
   Directory Tree Card Component
   ────────────────────────────────────────────────────────────── */
const DirectoryTreeCard = ({ card, index }) => {
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [lineStates, setLineStates] = useState(card.items.map(() => false));

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !visible) {
          setVisible(true);
          if (!reducedMotion) {
            card.items.forEach((_, i) => {
              setTimeout(() => setLineStates(prev => {
                const next = [...prev];
                next[i] = true;
                return next;
              }), 200 + i * 80);
            });
          } else {
            setLineStates(card.items.map(() => true));
          }
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    const el = document.getElementById(`dir-card-${index}`);
    if (el) io.observe(el);
    return () => io.disconnect();
  }, [index, card.items, reducedMotion, visible]);

  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      id={`dir-card-${index}`}
      ref={el => el}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: reducedMotion ? 0 : 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`${terminalCardBase} p-5 overflow-x-auto transition-all duration-300 ${
        hovered ? 'border-[#00FF41]/50 shadow-[0_0_30px_rgba(0,255,65,0.15),inset_0_0_50px_rgba(0,255,65,0.05)] -translate-y-1' : ''
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ fontFamily: MONO }}
    >
      {/* CRT scanline overlay */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden"
        style={{
          opacity: reducedMotion ? 0 : 0.04,
          background: 'repeating-linear-gradient(0deg, rgba(0,255,65,0.1) 0px, rgba(0,255,65,0.1) 1px, transparent 1px, transparent 3px)',
          animation: reducedMotion ? 'none' : 'scanline-drift 10s linear infinite',
        }}
        aria-hidden="true"
      />

      <pre className="text-[#00FF41] text-xs leading-relaxed whitespace-pre-wrap whitespace-nowrap relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <card.icon className="text-[#00FF41]/80" size={13} />
          <span className="tracking-wide">{card.title}</span>
          <span className="text-[#00FF41]/60 ml-1 text-[10px]">[-]</span>
          <span className="ml-2 animate-[blink-cursor_1200ms_steps(2)_infinite] text-[#00FF41]/40">▊</span>
        </div>
        {card.items.map((itm, i) => (
          <motion.div
            key={itm}
            initial={false}
            animate={{ opacity: lineStates[i] ? 1 : 0, x: lineStates[i] ? 0 : -10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="pl-6 flex items-center gap-2"
          >
            <span className="text-[#00FF41]/70">{i === card.items.length - 1 ? '└──' : '├──'}</span>
            <span className="text-gray-200">{itm}</span>
          </motion.div>
        ))}
      </pre>
    </motion.div>
  );
};

/* ──────────────────────────────────────────────────────────────
   Bottom Callout Strip
   ────────────────────────────────────────────────────────────── */
const ProductionCallout = () => {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: reducedMotion ? 0 : 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex items-center gap-3 p-4 bg-[#050805] border border-[#00FF41]/20 rounded-xl"
      style={{ fontFamily: MONO }}
    >
      <span className="text-[#00FF41]/80 flex-shrink-0">#</span>
      <p className="text-[#00FF41]/70 text-xs leading-relaxed max-w-4xl">
        Applied in production: role‑based access control, JWT auth, and input validation shipped on a live healthcare SaaS platform.
      </p>
      <div className="absolute inset-0 border-t border-[#00FF41]/10" aria-hidden="true" />
    </motion.div>
  );
};

/* ──────────────────────────────────────────────────────────────
   Section Tag with typing effect
   ────────────────────────────────────────────────────────────── */
const SectionTag = () => {
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    const el = document.getElementById('security-tag');
    if (el) io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <motion.div
      id="security-tag"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: reducedMotion ? 0 : 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="inline-block px-4 py-1.5 rounded-full bg-[#00FF41]/10 border border-[#00FF41]/30 text-[#00FF41] text-xs font-bold tracking-widest uppercase mb-4"
      style={{ fontFamily: MONO, letterSpacing: '0.18em' }}
    >
      <TypedText text="05 // SECURITY" speed={40} delay={visible && !reducedMotion ? 200 : 0} />
    </motion.div>
  );
};

/* ──────────────────────────────────────────────────────────────
   Main Security Section
   ────────────────────────────────────────────────────────────── */
const Security = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="security"
      className="bg-[#0a0a0a] pt-16 pb-16 px-6 md:px-12 w-full relative overflow-x-clip"
      style={{ fontFamily: MONO }}
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{
          background: 'linear-gradient(90deg, transparent, #00FF41, transparent)',
          opacity: 0.6,
        }}
        aria-hidden="true"
      />

      {/* Matrix rain background */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <MatrixRain />
        <div className="absolute inset-0 bg-[#0a0a0a]/70" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: reducedMotion ? 0 : 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <SectionTag />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">
            Offensive
            <span className="block text-[#00FF41] drop-shadow-[0_0_18px_rgba(0,255,65,0.35)]">Security</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base mt-3 max-w-2xl leading-relaxed">
            Building secure applications requires understanding how attackers think. I apply a developer's depth of knowledge to offensive security – from network reconnaissance to full exploitation chains.
          </p>
        </motion.div>

        {/* Terminal card — the centerpiece */}
        <TerminalCard />

        {/* Directory tree cards */}
        <motion.div
          initial={false}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8"
        >
          {skillCards.map((card, idx) => (
            <DirectoryTreeCard key={idx} card={card} index={idx} />
          ))}
        </motion.div>

        {/* Production callout */}
        <ProductionCallout />
      </div>

      {/* Wave transition */}
      <SectionDivider aboveColor="#0a0a0a" belowColor="#05050a" />
    </section>
  );
};

export default Security;