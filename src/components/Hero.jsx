import { ArrowDown, ArrowUpRight, Code2 } from 'lucide-react';
import { profileImage, resume } from '../data';
import HeroTagline from './HeroTagline';

export default function Hero() {
  return <section className="hero" id="home">
    <div className="hero-ruler"><span>PORTFOLIO / 26</span><span>SOFTWARE ENGINEER</span><span>31.5204° N</span></div>
    <div className="hero-name" aria-label="Muhammad Abdullah"><span>MUHAMMAD</span><span>ABDULLAH</span></div>
    <div className="hero-portrait-wrap reveal">
      <HeroTagline />
      <div className="hero-portrait"><img src={profileImage} alt="Muhammad Abdullah" /></div>
      <div className="portrait-index">MA<br />/01</div>
      <svg className="portrait-arrow" viewBox="0 0 320 70" aria-hidden="true"><path d="M0 35H308M308 35l-28-20m28 20-28 20" /></svg>
    </div>
    <div className="hero-side hero-side-left reveal"><div className="availability"><span /> Available for freelance & roles</div><p>Lahore, Pakistan<br />Working worldwide</p></div>
    <div className="hero-side hero-side-right reveal"><span>FULL-STACK / SECURITY / PRODUCT</span><p>Software Engineer and Full-Stack Developer building production-grade web and mobile products—from polished interfaces to secure, scalable systems.</p><div className="hero-actions"><a className="button button-hot" href="#projects">Explore work <ArrowUpRight size={17} /></a><a className="round-link" href={resume} download aria-label="Download résumé"><ArrowDown /></a><a className="round-link" href="https://github.com/Abdullah-JUTT-cloud" target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 /></a></div></div>
    <a className="hero-scroll" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={16} /></a>
  </section>;
}
