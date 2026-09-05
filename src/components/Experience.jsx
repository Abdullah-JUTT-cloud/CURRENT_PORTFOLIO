import SectionDivider from './SectionDivider';
import { useState } from 'react';
import ExperienceSideBadges from './ExperienceSideBadges';
import { AnimatePresence, motion } from 'framer-motion';

const experienceData = [
  {
    id: 1,
    number: '01',
    title: 'MERN Stack Developer',
    meta: 'Devverx · Pakistan · On-site',
    duration: '1 Year',
    description: 'Worked on building and maintaining full-stack web applications using the MERN stack, focusing on scalable architecture, API development, and responsive UI.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    achievements: [
      'Built and deployed production-level MERN applications',
      'Designed RESTful APIs and handled backend logic',
      'Improved UI performance and responsiveness',
      'Collaborated on real-world client projects'
    ]
  },
  {
    id: 2,
    number: '02',
    title: 'Software Engineering Student',
    meta: 'University · Pakistan · On-site',
    duration: 'Present',
    description: 'Studying core software engineering concepts including system design, algorithms, and database systems while applying them in real-world projects.',
    tech: ['C++', 'Java', 'Data Structures', 'Algorithms', 'SQL'],
    achievements: [
      'Built algorithmic projects including backtracking systems',
      'Developed strong OOP and database design skills',
      'Applied theoretical concepts in full-stack applications'
    ]
  },
  {
    id: 3,
    number: '03',
    title: 'Full Stack Engineer',
    meta: 'Freelance / Projects · Remote',
    duration: '2023 - Present',
    description: 'Building full-stack applications with focus on performance, scalability, and real-world usability across multiple domains.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Spring Boot'],
    achievements: [
      'Built real estate platform (HOMEIGO)',
      'Developed real-time applications and APIs',
      'Implemented authentication and scalable backend systems',
      'Worked across MERN and Spring Boot ecosystems'
    ]
  }
];

const Experience = () => {
  const [openId, setOpenId] = useState(1); // Entry 01 expanded by default

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="bg-[#ff2a2a] pt-20 pb-36 px-6 md:px-12 w-full relative overflow-x-clip font-sans">

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-black text-white text-xs font-black tracking-widest uppercase mb-4">
            06 // Experience
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black tracking-tight leading-[1.05]">
            My
            <span className="block">Journey</span>
          </h2>
          <p className="text-black/70 text-sm md:text-base mt-4 max-w-xl leading-relaxed font-medium">
            Professional journey through innovative companies and cutting-edge projects
          </p>
        </motion.div>

        {/* Timeline Accordion */}
        <div className="flex flex-col gap-4 lg:gap-5">
          {experienceData.map((entry, idx) => {
            const isOpen = openId === entry.id;
            return (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`bg-gray-900 border rounded-3xl overflow-hidden transition-all duration-500 ${
                  isOpen
                    ? 'border-[#ff2a2a]/50 shadow-[0_10px_30px_rgba(255,42,42,0.1)]'
                    : 'border-gray-800/80 hover:border-[#ff2a2a]/40 hover:shadow-[0_10px_30px_rgba(255,42,42,0.08)]'
                }`}
              >
                {/* Header Row (click to toggle) */}
                <button
                  onClick={() => toggle(entry.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center gap-4 lg:gap-6 p-6 lg:p-8 text-left cursor-pointer group"
                >
                  {/* Numbered Circle */}
                  <span
                    className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center font-black text-lg lg:text-xl shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#ff2a2a] text-white shadow-[0_0_20px_rgba(255,42,42,0.45)]'
                        : 'bg-[#ff2a2a]/10 border border-[#ff2a2a]/40 text-[#ff2a2a] group-hover:bg-[#ff2a2a]/20'
                    }`}
                  >
                    {entry.number}
                  </span>

                  {/* Title + Meta */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-2xl font-black text-white group-hover:text-[#ff2a2a] transition-colors">
                      {entry.title}
                    </h3>
                    <p className="text-[10px] lg:text-[11px] font-extrabold tracking-widest uppercase text-gray-400 mt-1">
                      {entry.meta}
                    </p>
                  </div>

                  {/* Duration + Expand Icon */}
                  <div className="flex items-center gap-3 lg:gap-4 shrink-0">
                    <span className="hidden sm:inline-block px-3.5 py-1.5 text-[11px] font-bold rounded-full bg-[#ff2a2a]/10 border border-[#ff2a2a]/30 text-[#ff2a2a]">
                      {entry.duration}
                    </span>
                    <span
                      className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 ${
                        isOpen
                          ? 'bg-[#ff2a2a] border-[#ff2a2a] text-white rotate-45'
                          : 'bg-white/5 border-white/15 text-white group-hover:border-[#ff2a2a]/60 group-hover:text-[#ff2a2a]'
                      }`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </div>
                </button>

                {/* Duration pill on mobile (below header) */}
                <div className="px-6 sm:hidden -mt-2 pb-4">
                  <span className="inline-block px-3.5 py-1.5 text-[11px] font-bold rounded-full bg-[#ff2a2a]/10 border border-[#ff2a2a]/30 text-[#ff2a2a]">
                    {entry.duration}
                  </span>
                </div>

                {/* Expandable Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 lg:px-8 pb-8 lg:pb-10 pt-1">
                        <div className="border-t border-white/10 pt-6">
                          {/* Description */}
                          <p className="text-sm lg:text-base text-gray-300 leading-relaxed mb-6 max-w-3xl">
                            {entry.description}
                          </p>

                          {/* Tech Stack Pills */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {entry.tech.map((tech, i) => (
                              <span
                                key={i}
                                className="px-3 py-1.5 text-xs font-bold rounded-full bg-[#ff2a2a]/10 border border-[#ff2a2a]/30 text-red-200"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Achievements */}
                          <span className="text-xs font-extrabold uppercase tracking-widest text-gray-300 block mb-3">
                            ⚡ Key Achievements
                          </span>
                          <ul className="flex flex-col gap-3">
                            {entry.achievements.map((item, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.35, delay: 0.1 + i * 0.06 }}
                                className="flex items-start gap-3"
                              >
                                <span className="flex-shrink-0 w-5 h-5 mt-0.5 rounded-full bg-[#ff2a2a]/15 border border-[#ff2a2a]/40 text-[#ff2a2a] flex items-center justify-center">
                                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                  </svg>
                                </span>
                                <span className="text-sm text-gray-300 leading-relaxed">{item}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Decorative hanging badges in side margins */}
      <ExperienceSideBadges />

      {/* Smooth wave transition into Expertise (white) */}
      <SectionDivider aboveColor="#ff2a2a" belowColor="#ffffff" />

      {/* Decorative sparkle accent */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-20 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default Experience;