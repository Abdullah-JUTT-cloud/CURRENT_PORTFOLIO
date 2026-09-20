import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { experiences } from '../data';
import ExperienceSideBadges from './ExperienceSideBadges';

export default function Experience() {
  const [active, setActive] = useState(0);
  const item = experiences[active];
  return <section className="section experience" id="experience"><ExperienceSideBadges /><div className="shell">
    <div className="section-heading reveal"><div><div className="section-kicker"><span>04</span> Experience</div><h2 className="section-title">The<br /><em>trajectory.</em></h2></div><p>Professional growth across engineering education, product delivery, client work, and production MERN development.</p></div>
    <div className="experience-console reveal"><div className="experience-tabs">{experiences.map((experience, i) => <button className={active === i ? 'active' : ''} onClick={() => setActive(i)} key={experience.title}><span>{experience.num}</span><div><small>{experience.duration}</small><strong>{experience.title}</strong></div><ArrowUpRight /></button>)}</div><article className="experience-panel" key={item.title}><div className="experience-panel-top"><span>{item.num} / JOURNEY</span><span>{item.duration}</span></div><h3>{item.title}</h3><h4>{item.meta}</h4><p>{item.desc}</p><div className="tags dark-tags">{item.tech.map((tech) => <span key={tech}>{tech}</span>)}</div><div className="achievement-grid">{item.achievements.map((achievement, i) => <div key={achievement}><span>0{i + 1}</span><p>{achievement}</p></div>)}</div></article></div>
  </div></section>;
}
