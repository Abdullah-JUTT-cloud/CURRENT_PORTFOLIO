import { MapPin, MoveUpRight } from 'lucide-react';
import { profileImage } from '../data';

export default function About() {
  return <section className="section about light" id="about"><div className="shell">
    <div className="about-header reveal"><div className="section-kicker"><span>01</span> About the engineer</div><span>PERSONNEL FILE / MA-4812X</span></div>
    <div className="about-statement reveal"><h2>Built for the <em>real world.</em></h2><div className="about-stamp"><img src={profileImage} alt="Muhammad Abdullah profile" /><span><MapPin size={12} /> Lahore, PK</span></div></div>
    <div className="about-detail"><p className="lead-copy reveal">I’m Muhammad Abdullah, a Lahore-based <strong>Software Engineer / Full-Stack Developer</strong> with hands-on experience shipping production-ready applications across the MERN stack and beyond.</p><div className="about-copy reveal"><p>I specialize in JavaScript, Java, Spring Boot, React, Next.js, TypeScript, Node.js, MongoDB, PostgreSQL, and AI/ML—architecting clean, scalable, battle-tested systems. From healthcare SaaS platforms to real-time messaging applications, I build software that creates measurable value.</p><p>Currently pursuing a BSSE at the University of Central Punjab while working as a MERN stack developer and freelance full-stack engineer. I care about continuous learning, clean code, practical security, and open-source collaboration.</p></div><div className="facts reveal"><div><small>Degree</small><b>BSSE · UCP</b></div><div><small>Location</small><b>Lahore, Pakistan</b></div><a href="mailto:abdullahjuttjutt910@gmail.com"><small>Email</small><b>abdullahjuttjutt910@gmail.com</b><MoveUpRight size={16} /></a><a href="https://wa.me/923214194045" target="_blank" rel="noreferrer"><small>Phone / WhatsApp</small><b>+92 321 4194045</b><MoveUpRight size={16} /></a></div></div>
  </div><span className="about-watermark" aria-hidden="true">ENGINEER</span></section>;
}
