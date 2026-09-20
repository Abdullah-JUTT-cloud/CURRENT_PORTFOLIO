import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [['about', 'About'], ['projects', 'Work'], ['experience', 'Journey'], ['expertise', 'Expertise'], ['security', 'Security']];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-locked', open);
    return () => document.body.classList.remove('menu-locked');
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-menu-open' : ''}`}>
      <nav className="shell nav-inner" aria-label="Primary navigation">
        <a className="brand magnetic" href="#home" onClick={() => setOpen(false)}>
          <span className="brand-orbit"><svg viewBox="0 0 24 24" aria-hidden="true" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3.2"/><path d="M20 12.7c-.9-2.1-2-4.3-3-6.6 1.4 1 2.7 2.3 3.8 3.9 1.1-1.6 2.4-3.1 3.8-3.9-1 2.3-2.1 4.5-3 6.6Z"/></svg></span>
          <span>M. Abdullah</span>
        </a>
        <div className={`nav-links ${open ? 'is-open' : ''}`}>
          <span className="nav-menu-label">Index / 2026</span>
          {links.map(([id, label], index) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}><sup>0{index + 1}</sup>{label}</a>)}
          <a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>Take aim <ArrowUpRight size={16} /></a>
        </div>
        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
      </nav>
    </header>
  );
}
