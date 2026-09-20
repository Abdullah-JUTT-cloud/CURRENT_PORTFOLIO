import { useEffect, useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { certificateGroups } from '../data';

export default function Certificates() {
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    document.body.classList.toggle('modal-open', !!selected);
    const close = (event) => event.key === 'Escape' && setSelected(null);
    window.addEventListener('keydown', close);
    return () => { window.removeEventListener('keydown', close); document.body.classList.remove('modal-open'); };
  }, [selected]);

  return <section className="section certificates" id="certificates"><div className="shell"><div className="section-heading reveal"><div><div className="section-kicker"><span>10</span> Credentials</div><h2 className="section-title">Verified<br /><em>readiness.</em></h2></div><p>Sixteen certificates across offensive security, network defense, cyber awareness, machine learning, LLMs, and professional development.</p></div></div>{certificateGroups.map((group) => <div className="cert-group reveal" key={group.title}><div className="shell cert-head"><div><h3>{group.title}</h3><p>{group.desc}</p></div><span>{String(group.files.length).padStart(2, '0')} CERTIFICATES · HOVER TO PAUSE</span></div><div className="cert-window"><div className={`cert-track ${group.reverse ? 'reverse' : ''}`}>{[...group.files, ...group.files].map((file, i) => <button key={`${file}-${i}`} onClick={() => setSelected(file)} aria-label={`View ${group.title} certificate ${(i % group.files.length) + 1}`}><img src={file} alt={`${group.title} certificate ${(i % group.files.length) + 1}`} loading="lazy" /><span><ZoomIn size={18} /> View credential</span></button>)}</div></div></div>)}{selected && <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setSelected(null)}><button aria-label="Close preview" onClick={() => setSelected(null)}><X /></button><img src={selected} alt="Selected certificate" onClick={(event) => event.stopPropagation()} /></div>}</section>;
}
