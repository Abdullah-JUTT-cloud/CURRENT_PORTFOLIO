import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import H1 from '../assets/about/H1.jpg';
import H2 from '../assets/about/H2.jpg';
import H3 from '../assets/about/H3.jpg';
import H4 from '../assets/about/H4.jpg';
import C1 from '../assets/about/C1.jpg';
import C2 from '../assets/about/C2.jpg';
import C3 from '../assets/about/C3.jpg';
import C4 from '../assets/about/C4.jpg';
import C5 from '../assets/about/C5.jpg';
import A1 from '../assets/about/A1.jpg';
import A2 from '../assets/about/A2.jpg';
import A3 from '../assets/about/A3.jpg';
import A4 from '../assets/about/A4.jpg';
import E1 from '../assets/about/E1.jpg';
import E2 from '../assets/about/E2.jpg';
import E3 from '../assets/about/E3.jpg';

const categories = [
  {
    id: 'security',
    icon: '🛡️',
    title: 'Security & Ethical Hacking',
    desc: 'Penetration testing, network defense & offensive security',
    count: '09',
    images: [H1, H2, H3, H4, C1, C2, C3, C4, C5],
    animateClass: 'animate-marquee'
  },
  {
    id: 'ai',
    icon: '🤖',
    title: 'AI & Additional Credentials',
    desc: 'Machine learning, LLMs & other professional achievements',
    count: '07',
    images: [A1, A2, A3, A4, E1, E2, E3],
    animateClass: 'animate-marquee-slow'
  }
];

const Certificates = () => {
  const [selected, setSelected] = useState(null);

  // Close on Escape + lock background scroll while modal is open
  useEffect(() => {
    if (!selected) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelected(null);
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selected]);

  return (
    <section id="certificates" className="bg-[#0a0a0a] py-24 px-6 md:px-12 w-full relative overflow-hidden font-sans pb-20">
      {/* Section Header */}
      <div className="max-w-[90vw] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-left"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-[#ff2a2a]/10 border border-[#ff2a2a]/30 text-[#ff2a2a] text-xs font-bold tracking-widest uppercase mb-4">
            08 // Licenses & Certificates
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-[1.05]">
            Verified
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a2a] to-red-500">
              Credentials
            </span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl font-normal mt-3">
            Professional certifications across offensive security, cyber defense, and applied artificial intelligence.
          </p>

          {/* Stat Pills */}
          <div className="flex flex-wrap gap-2 mt-6">
            <span className="px-4 py-1.5 rounded-full bg-[#ff2a2a]/10 border border-[#ff2a2a]/30 text-[#ff2a2a] text-xs font-bold">
              🏅 16 Certificates
            </span>
            <span className="px-4 py-1.5 rounded-full bg-[#ff2a2a]/10 border border-[#ff2a2a]/30 text-[#ff2a2a] text-xs font-bold">
              2 Categories
            </span>
          </div>
        </motion.div>
      </div>

      {/* Category Sliders — full-bleed on the black background, no box */}
      <div className="flex flex-col gap-16 md:gap-20 relative z-10 mt-16 md:mt-20">
        {categories.map((cat, catIdx) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: catIdx * 0.1 }}
          >
            {/* Category Header */}
            <div className="max-w-[90vw] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#ff2a2a]/10 border border-[#ff2a2a]/30 flex items-center justify-center text-2xl shrink-0">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-black text-white">{cat.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed mt-1">{cat.desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 self-start md:self-auto">
                  <span className="px-3.5 py-1.5 text-xs font-bold rounded-full bg-[#ff2a2a]/10 border border-[#ff2a2a]/30 text-[#ff2a2a]">
                    {cat.count} Certificates
                  </span>
                  <span className="px-3 py-1 text-[10px] font-bold rounded-full bg-white/5 border border-white/10 text-gray-400">
                    Hover to pause
                  </span>
                </div>
              </div>

            {/* Auto-Scrolling Slider (seamless loop, pause on hover, edge fade) — edge to edge */}
            <div className="group relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)] w-full">
              <div className={`flex w-max ${cat.animateClass} group-hover:[animation-play-state:paused] motion-reduce:[animation-play-state:paused]`}>
                {[...cat.images, ...cat.images].map((img, idx) => {
                  const certNumber = (idx % cat.images.length) + 1;
                  const altText = `${cat.title} certificate ${certNumber}`;
                  // Slot widths scaled ~27% from 300/380/440. The 92vw cap on the base size
                  // keeps the card on screen on narrow phones now that the slot is wider
                  // than a 360px viewport; it never binds at md and up.
                  return (
                    <div key={idx} className="w-[380px] max-w-[92vw] md:w-[480px] lg:w-[560px] shrink-0 px-3">
                      <div
                        onClick={() => setSelected({ image: img, title: altText, category: cat.title })}
                        role="button"
                        aria-label={`View ${altText}`}
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setSelected({ image: img, title: altText, category: cat.title });
                          }
                        }}
                        className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-gray-700/60 bg-gray-800 shadow-[0_8px_24px_rgba(0,0,0,0.35)] group/card transition-all duration-300 hover:-translate-y-1 hover:border-[#ff2a2a]/50 cursor-pointer"
                      >
                        <img
                          src={img}
                          alt={altText}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                        {/* VIEW Overlay */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                          <span className="px-4 py-1.5 rounded-full bg-[#ff2a2a] text-white text-xs font-bold tracking-widest shadow-lg">
                            VIEW
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelected(null)}
          >
            {/* Category Label */}
            <span className="absolute top-5 left-5 md:top-8 md:left-8 px-4 py-1.5 rounded-full bg-[#ff2a2a]/10 border border-[#ff2a2a]/30 text-[#ff2a2a] text-xs font-extrabold tracking-widest uppercase z-10">
              {selected.category}
            </span>

            {/* Close Button */}
            <button
              onClick={() => setSelected(null)}
              aria-label="Close certificate preview"
              className="absolute top-5 right-5 md:top-8 md:right-8 w-11 h-11 rounded-full bg-black/60 border border-white/25 text-white flex items-center justify-center hover:bg-[#ff2a2a] hover:border-[#ff2a2a] transition-all duration-300 z-10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Certificate Image */}
            <motion.img
              src={selected.image}
              alt={selected.title}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-[92vw] max-h-[85vh] w-auto h-auto rounded-2xl border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.6)] object-contain select-none"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;