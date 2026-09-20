export default function SectionDivider() {
  const items = ['React', 'Next.js', 'Node.js', 'Spring Boot', 'TypeScript', 'PostgreSQL', 'Security', 'AI / ML'];
  return <div className="ticker" aria-hidden="true"><div>{[...items, ...items].map((item, i) => <span key={`${item}-${i}`}>{item}<b>↗</b></span>)}</div></div>;
}
