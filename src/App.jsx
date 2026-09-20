import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import Hero from './components/Hero';
import SectionDivider from './components/SectionDivider';
import About from './components/About';
import IntroVideo from './components/IntroVideo';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Expertise from './components/Expertise';
import Skills from './components/Skills';
import Security from './components/Security';
import GitHubActivity from './components/GitHubActivity';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObserver.unobserve(entry.target); } }), { threshold: .08, rootMargin: '0px 0px -40px' });
    document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
    const onMove = (event) => { document.documentElement.style.setProperty('--mouse-x', `${event.clientX}px`); document.documentElement.style.setProperty('--mouse-y', `${event.clientY}px`); };
    const onScroll = () => { const max = document.documentElement.scrollHeight - innerHeight; document.documentElement.style.setProperty('--scroll', `${max ? scrollY / max * 100 : 0}%`); };
    window.addEventListener('pointermove', onMove); window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
    return () => { revealObserver.disconnect(); window.removeEventListener('pointermove', onMove); window.removeEventListener('scroll', onScroll); };
  }, []);

  return <><Preloader /><div className="page-progress" /><div className="ambient-pointer" aria-hidden="true" /><div className="grain" aria-hidden="true" /><Navbar /><main><Hero /><SectionDivider /><About /><IntroVideo /><Projects /><Experience /><Expertise /><Skills /><Security /><GitHubActivity /><Education /><Certificates /><Contact /></main><Footer /></>;
}
