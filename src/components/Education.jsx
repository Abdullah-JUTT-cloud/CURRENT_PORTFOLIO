import { motion } from 'framer-motion';
import SectionDivider from './SectionDivider';

const Education = () => {
  const cgpa = 3.73;
  const maxGpa = 4.0;
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - cgpa / maxGpa);

  const checklist = [
    'Focusing on Software Engineering, advanced systems design, database management systems, and algorithms.',
    'Maintaining a strong academic performance with a 3.73 CGPA.',
    'Gaining practical development experience through lab projects and curriculum coursework.'
  ];

  const coursework = [
    'Software Engineering',
    'Data Structures & Algorithms',
    'Object Oriented Programming',
    'Database Systems',
    'System Design'
  ];

  return (
    <section id="education" className="bg-[#ff2a2a] pt-20 pb-36 px-6 md:px-12 w-full relative overflow-hidden font-sans">

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-left"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-black text-white text-xs font-black tracking-widest uppercase mb-4">
            07 // Education
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-black tracking-tight leading-[1.05]">
            Academic
            <span className="block">Credentials</span>
          </h2>
          <p className="text-red-100 text-sm md:text-base max-w-xl font-medium mt-3">
            Educational foundation and key milestones in Software Engineering
          </p>
        </motion.div>

        {/* Two-Column Layout (40/60) */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-6 items-stretch">

          {/* Left Column: CGPA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900 border border-white/20 rounded-3xl p-8 shadow-[0_20px_40px_rgba(0,0,0,0.35)] flex flex-col items-center justify-center text-center h-full hover:border-[#ff2a2a]/60 transition-colors duration-500"
          >
            {/* Circular Progress Ring */}
            <div className="relative w-44 h-44 md:w-52 md:h-52 mb-6">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 180 180">
                <circle
                  cx="90"
                  cy="90"
                  r={radius}
                  fill="none"
                  stroke="rgba(255,255,255,0.15)"
                  strokeWidth="12"
                />
                <motion.circle
                  cx="90"
                  cy="90"
                  r={radius}
                  fill="none"
                  stroke="#ff2a2a"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  initial={{ strokeDashoffset: circumference }}
                  whileInView={{ strokeDashoffset: dashOffset }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  style={{ filter: 'drop-shadow(0 0 8px rgba(255,42,42,0.45))' }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl md:text-5xl font-black text-white leading-none">{cgpa.toFixed(2)}</span>
                <span className="text-[10px] font-bold tracking-widest text-gray-300 mt-1.5">OUT OF 4.0</span>
              </div>
            </div>

            <span className="text-xs font-extrabold tracking-widest text-[#ff2a2a] uppercase mb-2">
              CGPA Award
            </span>
            <p className="text-sm text-gray-300 leading-relaxed max-w-[240px]">
              Excellent academic standing in Software Engineering
            </p>
          </motion.div>

          {/* Right Column: Degree Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gray-900 border border-white/20 rounded-3xl p-8 shadow-[0_20px_40px_rgba(0,0,0,0.35)] h-full hover:border-[#ff2a2a]/60 transition-colors duration-500"
          >
            {/* Header */}
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-[#ff2a2a]/10 border border-[#ff2a2a]/30 flex items-center justify-center text-2xl shrink-0">
                🎓
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-black text-white">BSSE (Software Engineering)</h3>
                <p className="text-sm md:text-base font-bold text-[#ff2a2a] mt-0.5">University of Central Punjab</p>
              </div>
            </div>

            {/* Pill Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3.5 py-1.5 text-xs font-bold rounded-full bg-[#ff2a2a]/10 border border-[#ff2a2a]/30 text-[#ff2a2a]">
                📅 Graduation Date: March-04-2027
              </span>
              <span className="px-3.5 py-1.5 text-xs font-bold rounded-full bg-[#ff2a2a]/10 border border-[#ff2a2a]/30 text-[#ff2a2a]">
                🏅 GPA: 3.73
              </span>
            </div>

            {/* Checklist */}
            <ul className="flex flex-col gap-3 mb-6">
              {checklist.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.15 + idx * 0.1 }}
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

            {/* Divider + Key Coursework */}
            <div className="border-t border-white/10 pt-6">
              <span className="text-xs font-extrabold uppercase tracking-widest text-gray-300 block mb-3">
                📖 Key Coursework
              </span>
              <div className="flex flex-wrap gap-2">
                {coursework.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 text-xs font-bold rounded-full bg-[#ff2a2a]/10 border border-[#ff2a2a]/30 text-red-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Smooth wave transition into Certificates (black) */}
      <SectionDivider aboveColor="#ff2a2a" belowColor="#0a0a0a" />

      {/* Decorative sparkle accent */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-20 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default Education;