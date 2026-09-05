import { motion } from 'framer-motion';
import SectionDivider from '../components/SectionDivider';
import {
  SiCplusplus, SiOpenjdk, SiJavascript, SiTypescript,
  SiReact, SiNextdotjs, SiTailwindcss, SiFramer,
  SiGreensock, SiSpringboot, SiNodedotjs, SiExpress,
  SiMongodb, SiPostgresql, SiRedis,
} from 'react-icons/si';
import {
  TbBrain, TbPackage, TbLayoutDashboard, TbDatabase, TbSql,
} from 'react-icons/tb';

/* Inline fallback SVGs for brands not in simple-icons */
const LocomotiveIcon = ({ size = 24, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M3 15.5V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v5.5a1.5 1.5 0 0 1-1.5 1.5H4.5A1.5 1.5 0 0 1 3 15.5ZM5 5v8.5a.5.5 0 0 0 .5.5h3V5H5Zm6 0v9h4.5a.5.5 0 0 0 .5-.5V10h-2.5a2 2 0 0 1-2-2V5ZM7 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
  </svg>
);

const ReactNativeIcon = ({ size = 24, ...props }) => (
  <SiReact size={size} {...props} />
);

const Skills = () => {
  const skillsList = [
    { name: 'DSA', level: 'Advanced', icon: TbBrain },
    { name: 'OOP', level: 'Advanced', icon: TbPackage },
    { name: 'Systems Design', level: 'Intermediate', icon: TbLayoutDashboard },
    { name: 'Database Design', level: 'Advanced', icon: TbDatabase },
    { name: 'C++', level: 'Intermediate', icon: SiCplusplus },
    { name: 'Java', level: 'Intermediate', icon: SiOpenjdk },
    { name: 'JavaScript', level: 'Advanced', icon: SiJavascript },
    { name: 'TypeScript', level: 'Advanced', icon: SiTypescript },
    { name: 'React', level: 'Advanced', icon: SiReact },
    { name: 'Next.js', level: 'Advanced', icon: SiNextdotjs },
    { name: 'Tailwind CSS', level: 'Advanced', icon: SiTailwindcss },
    { name: 'Framer Motion', level: 'Intermediate', icon: SiFramer },
    { name: 'GSAP', level: 'Intermediate', icon: SiGreensock },
    { name: 'LocomotiveJS', level: 'Intermediate', icon: LocomotiveIcon },
    { name: 'React Native', level: 'Intermediate', icon: ReactNativeIcon },
    { name: 'Spring Boot', level: 'Intermediate', icon: SiSpringboot },
    { name: 'Node.js', level: 'Advanced', icon: SiNodedotjs },
    { name: 'Express', level: 'Advanced', icon: SiExpress },
    { name: 'MongoDB', level: 'Advanced', icon: SiMongodb },
    { name: 'PostgreSQL', level: 'Intermediate', icon: SiPostgresql },
    { name: 'Redis', level: 'Intermediate', icon: SiRedis },
    { name: 'SQL', level: 'Advanced', icon: TbSql },
  ];

  const coreProficiency = [
    { name: 'Node.js & Express', percent: 88 },
    { name: 'MongoDB & PostgreSQL', percent: 85 },
    { name: 'Spring Boot & Java', percent: 80 },
    { name: 'TypeScript & JavaScript', percent: 90 },
    { name: 'React & Next.js', percent: 85 },
  ];

  return (
    <section id="skills" className="relative w-full bg-white py-20 px-6 md:px-12 overflow-hidden font-sans pb-20">
      {/* Background Grid Pattern */}
      {/* Smooth wave transition into Education (red) */}
      <SectionDivider aboveColor="#ffffff" belowColor="#0a0a0a" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block border border-gray-200 rounded-full px-4 py-1 text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 bg-gray-50">
            Skills & Technologies
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-2">
            Technologies I Work With Regularly
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-xl">
            Hands-on experience across full-stack development with a MERN and Spring Boot focus, backend-first, database design, and modern web tooling.
          </p>
        </div>

        {/* Progress Bars Row */}
        <div className="mb-16 bg-gray-50/80 border border-gray-200/80 rounded-3xl p-6 md:p-8 shadow-sm">
          <h3 className="text-lg font-black text-gray-900 mb-6 flex items-center gap-2">
            <span>⚡</span> Core Proficiency
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreProficiency.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-xs font-bold text-gray-800">
                  <span>{item.name}</span>
                  <span className="text-[#ff2a2a]">{item.percent}%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-gray-900 to-[#ff2a2a] rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 16 Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {skillsList.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-200 rounded-2xl p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md hover:border-[#ff2a2a]/40 transition-all duration-300 group cursor-default"
            >
              {(() => { const Icon = skill.icon; return <Icon size={28} className="text-gray-700" />; })()}
              <h4 className="text-xs font-bold text-gray-900 mb-0.5">{skill.name}</h4>
              <span className="text-[10px] text-gray-400 font-medium">{skill.level}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

 