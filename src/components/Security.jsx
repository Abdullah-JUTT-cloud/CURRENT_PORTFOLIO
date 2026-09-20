import { useEffect, useRef, useState } from 'react';
import MatrixRain from './MatrixRain';

function Counter({ value, suffix = '' }) {
  const ref = useRef(null); const [count, setCount] = useState(0);
  useEffect(() => { const observer = new IntersectionObserver(([entry]) => { if (!entry.isIntersecting) return; let start; const run = (time) => { start ??= time; const p = Math.min(1, (time - start) / 900); setCount(Math.floor(value * (1 - (1 - p) ** 3))); if (p < 1) requestAnimationFrame(run); }; requestAnimationFrame(run); observer.disconnect(); }, { threshold: .6 }); observer.observe(ref.current); return () => observer.disconnect(); }, [value]);
  return <strong ref={ref}>{count}{suffix}</strong>;
}

export default function Security() {
  return <section className="section security" id="security"><MatrixRain /><div className="shell security-content"><div className="section-heading reveal"><div><div className="section-kicker"><span>07</span> Security</div><h2 className="section-title">Think like<br /><em>an attacker.</em></h2></div><p>Building secure applications requires understanding how attackers think. I apply a developer’s depth to offensive security—from reconnaissance to exploitation chains.</p></div><div className="terminal reveal"><div className="terminal-bar"><span /><span /><span /><b>whoami — abdullah@sec</b></div><div className="terminal-copy"><span>$ whoami --security-profile</span><p>Cybersecurity / Ethical Hacking<br />Location: Lahore, Pakistan<br /><br />Software Engineering student transitioning into cybersecurity and ethical hacking,<br />backed by hands-on production engineering experience. Completed a structured<br />training path covering network security, Linux security, and the full CEH curriculum.</p></div><div className="terminal-stats"><div><Counter value={19} suffix="+" /><span>CEH Curriculum hours</span></div><div><Counter value={23} suffix="+" /><span>Vulnerable lab targets</span></div><div><Counter value={5} /><span>Security domains</span></div></div></div><div className="security-grid">{[
    ['~/security/offensive-security/', ['network-recon.sh', 'privilege-escalation.sh', 'exploitation-chains.sh']],
    ['~/security/tools/', ['nmap', 'burp-suite', 'owasp-zap']],
    ['~/security/web-app/', ['sql-injection.sh', 'xss-prevention.sh', 'auth-session-hardening.sh']],
  ].map(([title, files]) => <article className="security-card reveal" key={title}><h3>{title}</h3>{files.map((file, i) => <p key={file}>{i === files.length - 1 ? '└──' : '├──'} {file}</p>)}</article>)}</div><div className="security-callout reveal"><b># Applied in production:</b> role-based access control, JWT authentication, and input validation shipped on a live healthcare SaaS platform.</div></div></section>;
}
