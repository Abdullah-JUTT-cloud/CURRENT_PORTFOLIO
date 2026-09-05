import { motion } from 'framer-motion';
import { TbShield, TbTerminal2, TbWorld, TbTarget } from 'react-icons/tb';
import SectionDivider from './SectionDivider';

const stats = [
  { value: '19h+', label: 'CEH Curriculum' },
  { value: '19+', label: 'Vulnerable Lab Targets' },
  { value: '5', label: 'Security Domains' },
];

const skillCards = [
  {
    Icon: TbTarget,
    title: 'Offensive Security',
    subtitle: 'Recon → Enumeration → Exploitation',
    items: ['Network reconnaissance & scanning', 'Privilege escalation techniques', 'Full exploitation chains'],
  },
  {
    Icon: TbTerminal2,
    title: 'Security Tools',
    subtitle: 'Industry-standard tooling',
    items: ['Nmap & network analysis', 'Burp Suite & web proxying', 'OWASP ZAP & vulnerability scanning'],
  },
  {
    Icon: TbWorld,
    title: 'Web App Security',
    subtitle: 'OWASP Top 10 focus',
    items: ['SQL Injection & XSS prevention', 'SSRF & XXE attack vectors', 'Authentication & session attacks'],
  },
];

const Security = () => {
  return (
    <section
      id="security"
      className="bg-[#0a0a0a] pt-20 pb-24 px-6 md:px-12 w-full relative overflow-x-clip font-sans"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-[#ff2a2a]/10 border border-[#ff2a2a]/30 text-[#ff2a2a] text-xs font-bold tracking-widest uppercase mb-4">
            05 // Security
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">
            Offensive
            <span className="block text-[#ff2a2a]">Security</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base mt-4 max-w-2xl leading-relaxed">
            Building secure applications requires understanding how attackers think. I apply a developer&apos;s depth of knowledge to offensive security — from network reconnaissance to full exploitation chains.
          </p>
        </motion.div>

        {/* Two-Column: Info Card + Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-5 mb-10">
          {/* Left: Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900 border border-white/10 rounded-3xl p-7 hover:border-[#ff2a2a]/40 transition-all duration-500"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#ff2a2a]/10 border border-[#ff2a2a]/30 flex items-center justify-center shrink-0">
                <TbShield className="text-[#ff2a2a] text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white">Cybersecurity / Ethical Hacking</h3>
                <p className="text-xs font-bold text-[#ff2a2a] tracking-wider uppercase mt-0.5">Lahore, Pakistan</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Software Engineering student transitioning into cybersecurity and ethical hacking, backed by hands-on production engineering experience. Completed a structured training path covering network security, Linux security, and the full CEH curriculum.
            </p>
          </motion.div>

          {/* Right: Stat Blocks */}
          <div className="flex flex-col gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-gray-900 border border-white/10 rounded-2xl px-6 py-4 flex items-center gap-5 hover:border-[#ff2a2a]/40 transition-all duration-400"
              >
                <span className="text-2xl md:text-3xl font-black text-[#ff2a2a] leading-none whitespace-nowrap">
                  {stat.value}
                </span>
                <span className="text-sm font-bold text-gray-300">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skill Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {skillCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-gray-900 border border-white/10 rounded-3xl p-6 hover:border-[#ff2a2a]/40 hover:shadow-[0_8px_25px_rgba(255,42,42,0.08)] transition-all duration-500 group"
            >
              <div className="w-11 h-11 rounded-xl bg-[#ff2a2a]/10 border border-[#ff2a2a]/30 flex items-center justify-center mb-4 group-hover:bg-[#ff2a2a]/20 transition-colors">
                <card.Icon className="text-[#ff2a2a] text-lg" />
              </div>
              <h4 className="text-base font-black text-white mb-1">{card.title}</h4>
              <p className="text-[11px] font-bold text-[#ff2a2a] tracking-wider uppercase mb-3">{card.subtitle}</p>
              <ul className="flex flex-col gap-2">
                {card.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="flex-shrink-0 w-4 h-4 mt-0.5 rounded-full bg-[#ff2a2a]/15 border border-[#ff2a2a]/40 text-[#ff2a2a] flex items-center justify-center">
                      <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-xs text-gray-400 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Production Highlight Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="inline-flex items-center gap-3 bg-gray-900 border border-white/10 rounded-full px-5 py-3"
        >
          <span className="text-base">🔒</span>
          <span className="text-xs font-bold text-gray-300">
            Applied in production: role-based access control, JWT auth, and input validation shipped on a live healthcare SaaS platform.
          </span>
        </motion.div>
      </div>

      {/* Wave transition into Education (red) */}
      <SectionDivider aboveColor="#0a0a0a" belowColor="#ff2a2a" />
    </section>
  );
};

export default Security;
