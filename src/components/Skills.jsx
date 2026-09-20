import { skillGroups } from '../data';

export default function Skills() {
  return <section className="section skills light" id="skills"><div className="shell"><div className="section-heading reveal"><div><div className="section-kicker"><span>06</span> Technical arsenal</div><h2 className="section-title">Tools of<br /><em>the craft.</em></h2></div><p>A broad, hands-on toolkit—organized by the problems each technology helps me solve.</p></div><div className="skill-groups">{skillGroups.map(([label, skills], i) => <div className="skill-row reveal" key={label}><div className="skill-index">0{i + 1}</div><h3>{label}</h3><div>{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></div>)}</div></div></section>;
}
