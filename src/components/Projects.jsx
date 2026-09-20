import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data';

const filters = [['all', 'All work'], ['health', 'Healthcare'], ['web', 'Web platforms'], ['game', 'Games / DSA']];

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const visible = projects.filter((project) => filter === 'all' || project.cat === filter);
  const [activeTitle, setActiveTitle] = useState(projects[0].title);
  const active = visible.find((project) => project.title === activeTitle) || visible[0];
  const chooseFilter = (value) => { setFilter(value); setActiveTitle(projects.find((project) => value === 'all' || project.cat === value).title); };

  return <section className="section projects light" id="projects"><div className="shell">
    <div className="section-heading reveal"><div><div className="section-kicker"><span>03</span> Selected systems</div><h2 className="section-title">Real work.<br /><em>Real impact.</em></h2></div><p>Eight full-stack, frontend, and algorithmic products across healthcare, commerce, finance, property, messaging, and games.</p></div>
    <div className="project-toolbar reveal"><div className="filters">{filters.map(([value, label]) => <button className={filter === value ? 'active' : ''} onClick={() => chooseFilter(value)} key={value}>{label}</button>)}</div><span>{String(visible.length).padStart(2, '0')} PROJECTS</span></div>
    <div className="project-showcase"><div className="project-list">{visible.map((project, i) => <button className={active.title === project.title ? 'active' : ''} onMouseEnter={() => setActiveTitle(project.title)} onFocus={() => setActiveTitle(project.title)} onClick={() => setActiveTitle(project.title)} key={project.title}><span>{String(i + 1).padStart(2, '0')}</span><strong>{project.title}</strong><small>{project.type}</small><ArrowUpRight /></button>)}</div><article className="project-preview" key={active.title}><a href={active.url} target="_blank" rel="noreferrer"><div className="project-preview-image"><img src={active.img} alt={`${active.title} project interface`} /><span>{active.badge}</span><div><ArrowUpRight /></div></div><div className="project-preview-copy"><div><small>{active.type}</small><h3>{active.title.split('.').map((part, i, parts) => <span key={part + i}>{part}{i < parts.length - 1 && <>{'.'}<wbr /></>}</span>)}</h3></div><p>{active.desc}</p><div className="tags">{active.tech.map((tech) => <span key={tech}>{tech}</span>)}</div></div></a></article></div>
  </div></section>;
}
