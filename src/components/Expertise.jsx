import { Blocks, Braces, DatabaseZap, Workflow } from 'lucide-react';

const items = [
  [Braces, 'Software Engineering', 'Strong foundations in DSA, OOP, systems design, and database design—writing maintainable code with C++, Java, JavaScript, and TypeScript.'],
  [Blocks, 'Frontend Development', 'Responsive, high-performance interfaces with React, Next.js, TypeScript, Tailwind CSS, Framer Motion, GSAP, and React Native.'],
  [DatabaseZap, 'Backend & Databases', 'RESTful APIs and scalable backends with Spring Boot, Node.js, Express, MongoDB, PostgreSQL, Redis, and SQL.'],
  [Workflow, 'End-to-End Delivery', 'Complete products from schema to polished UI—MERN platforms, real-time apps, and SaaS solutions engineered for production.'],
];

export default function Expertise() {
  return <section className="section expertise" id="expertise"><div className="shell"><div className="section-heading reveal"><div><div className="section-kicker"><span>05</span> Expertise</div><h2 className="section-title">Four points.<br /><em>One target.</em></h2></div><p>Combining software engineering fundamentals, modern frontend tooling, robust backend systems, and complete product ownership.</p></div><div className="expertise-grid">{items.map(([Icon, title, copy], i) => <article className="expertise-card reveal" key={title}><div className="expertise-top"><span>0{i + 1}</span><Icon /></div><h3>{title}</h3><p>{copy}</p><div className="corner-mark">↗</div></article>)}</div></div></section>;
}
