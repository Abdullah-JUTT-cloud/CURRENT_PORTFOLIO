import { useState } from 'react';
import { ArrowUpRight, Send } from 'lucide-react';
import { platforms } from '../data';

const FIELD_LABELS = { firstName: 'First name', lastName: 'Last name', email: 'Email', subject: 'Subject', message: 'Project brief', permission: 'Permission' };

function validate(form) {
  const errors = {};
  for (const el of form.elements) {
    if (!el.name || !FIELD_LABELS[el.name]) continue;
    if (!el.checkValidity()) {
      if (el.type === 'checkbox') errors[el.name] = 'Please check this box to continue.';
      else if (el.type === 'email') errors[el.name] = 'Enter a valid email address.';
      else errors[el.name] = `${FIELD_LABELS[el.name]} is required.`;
    }
  }
  return errors;
}

export default function Contact() {
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState({});

  const clearError = (name) => { if (errors[name]) setErrors((prev) => { const next = { ...prev }; delete next[name]; return next; }); };

  const submit = async (event) => {
    event.preventDefault(); const form = event.currentTarget;
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setSending(true); setStatus('');
    try {
      const response = await fetch('https://formspree.io/f/xjykkblw', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(Object.fromEntries(new FormData(form))) });
      if (!response.ok) throw new Error();
      setStatus('Message sent. I\u2019ll get back to you soon.'); form.reset(); setErrors({});
    } catch { setStatus('Could not send. Please email me directly at abdullahjuttjutt910@gmail.com.'); }
    finally { setSending(false); }
  };

  const field = (id, tag = 'input', extra = {}) => {
    const err = errors[id];
    const cls = `field${extra.full ? ' full' : ''}`;
    const inputCls = err ? 'field-error-input' : '';
    return <div className={cls}><label htmlFor={id}>{FIELD_LABELS[id]} *</label>{tag === 'textarea'
      ? <textarea id={id} name={id} required className={inputCls} onChange={() => clearError(id)} {...extra} />
      : <input id={id} name={id} required className={inputCls} onChange={() => clearError(id)} {...extra} />}{err && <span className="field-error">{err}</span>}</div>;
  };

  return <section className="section contact light" id="contact"><div className="shell"><div className="section-heading reveal"><div><div className="section-kicker"><span>11</span> Contact</div><h2 className="section-title">Ready. <em>Aim.</em><br />Build.</h2></div><p>Have a product, platform, or ambitious idea? Tell me what you are building and where you need engineering firepower.</p></div><div className="platform-grid">{platforms.map(([name, meta, action, url], i) => <a className="platform-card reveal" href={url} target="_blank" rel="noreferrer" key={name}><span>0{i + 1}</span><h3>{name}</h3><p>{meta}</p><b>{action} <ArrowUpRight size={15} /></b></a>)}</div><div className="contact-layout"><aside className="contact-aside reveal"><div><div className="section-kicker">Direct channels</div><a href="mailto:abdullahjuttjutt910@gmail.com"><small>Email</small><span>abdullahjuttjutt910@gmail.com</span></a><a href="https://wa.me/923214194045" target="_blank" rel="noreferrer"><small>WhatsApp</small><span>+92 321 4194045</span></a><a href="https://www.linkedin.com/in/muhammad-abdullah-757aa2287/" target="_blank" rel="noreferrer"><small>LinkedIn</small><span>Muhammad Abdullah &#8599;</span></a></div><p>Response time<br /><b>Usually within 24 hours.</b></p></aside><form className="contact-form reveal" onSubmit={submit} noValidate>{field('firstName', 'input', { placeholder: 'Muhammad' })}{field('lastName', 'input', { placeholder: 'Abdullah' })}{field('email', 'input', { type: 'email', placeholder: 'you@company.com' })}{field('subject', 'input', { placeholder: 'A brilliant product' })}{field('message', 'textarea', { placeholder: 'Tell me what we\u2019re building\u2026', full: true })}<label className="permission"><input type="checkbox" required name="permission" onChange={() => clearError('permission')} /><span>I give permission to be contacted about this inquiry.</span>{errors.permission && <span className="field-error">{errors.permission}</span>}</label><p className="form-status" aria-live="polite">{status}</p><button className="submit-button" disabled={sending}>{sending ? 'Sending\u2026' : <>Send the brief <Send size={17} /></>}</button></form></div></div></section>;
}
