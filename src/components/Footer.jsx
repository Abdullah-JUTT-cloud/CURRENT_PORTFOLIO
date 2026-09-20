import { ArrowUp } from 'lucide-react';

// Brand icons: GitHub, Instagram and WhatsApp from Simple Icons (CC0); LinkedIn from
// Font Awesome Free (CC BY 4.0) — its mark is unavailable in Simple Icons.
const brandLinks = [
  ['github', 'GitHub', 'https://github.com/Abdullah-JUTT-cloud'],
  ['linkedin', 'LinkedIn', 'https://www.linkedin.com/in/muhammad-abdullah-757aa2287/'],
  ['instagram', 'Instagram', 'https://www.instagram.com/abdullah_jutt.44?igsh=dGVwODBvcnN2N3c0'],
  ['whatsapp', 'WhatsApp', 'https://wa.me/923214194045'],
];

export default function Footer() {
  return <footer className="footer"><div className="shell"><div className="footer-top"><div><span>Software Engineer / Full Stack Developer</span><p>Building scalable solutions with clean code, thoughtful product decisions, and zero tolerance for fragile engineering.</p></div><div className="footer-status"><i /> AVAILABLE FOR FREELANCE & ROLES<br /><span>LAHORE, PAKISTAN</span></div></div><a className="footer-word" href="#home">Muhammad<span>Abdullah</span><ArrowUp /></a><div className="footer-links"><div>{brandLinks.map(([icon, label, url]) => <a href={url} target="_blank" rel="noreferrer" key={icon}><span className={`brand-logo brand-logo--${icon}`} aria-hidden="true" />{label}</a>)}</div><div><span>© {new Date().getFullYear()} Muhammad Abdullah</span><span>No fragile code. No excuses.</span></div></div></div></footer>;
}
