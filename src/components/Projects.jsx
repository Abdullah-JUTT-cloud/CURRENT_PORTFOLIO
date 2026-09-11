import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import SectionDivider from '../components/SectionDivider';

import p1 from '../assets/about/p1.png';
import p2 from '../assets/about/p2.png';
import p3 from '../assets/about/p3.png';
import p4 from '../assets/about/p4.png';
import p5 from '../assets/about/p5.png';
import p6 from '../assets/about/p6.png';
import p7 from '../assets/about/p7.png';
import wellsmerry from '../assets/about/wellsmerry.png';
import wellsmerry2 from '../assets/about/wellsmerry2.png';

const projectsData = [
  {
    id: 1,
    title: 'MedAlerto',
    category: 'health',
    categoryLabel: 'Healthcare SaaS Platform',
    description: 'Full-stack healthcare SaaS platform connecting patients and providers through appointment workflows, patient records, and real-time scheduling. Patients and practitioners each get a dedicated side of the platform, so booking visits and managing records happen in one streamlined system instead of scattered across channels.',
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB'],
    images: [p1],
    liveUrl: 'https://medalerto.me/',
    badge: 'Featured',
    icon: '🏥'
  },
  {
    id: 2,
    title: 'Wells Merry Hair Oil',
    category: 'web',
    categoryLabel: 'Ecommerce Services Website',
    description: 'Modern e-commerce website for a hair oil brand, with organic/natural product storytelling, a shop page, and a hair quiz flow that guides customers to the right product. The quiz-driven discovery and polished product pages are built to convert browsing visitors into buyers, all wrapped in a fast, conversion-focused responsive UI.',
    technologies: ['React', 'Next.js', 'Tailwind CSS'],
    images: [wellsmerry, wellsmerry2],
    liveUrl: 'https://well-s-merry.vercel.app/',
    badge: 'Live Site',
    icon: '🛍️'
  },
  {
    id: 3,
    title: 'Banking System',
    category: 'web',
    categoryLabel: 'Full Stack Finance',
    description: 'Enterprise-level banking platform with secure authentication, account management, transactions, and admin dashboards backed by a robust database layer. JWT-secured sessions keep customer and admin flows separate, while the transactional data model is designed to handle real banking workloads reliably.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    images: [p3],
    liveUrl: 'https://enterpriselevelbankingsystem.vercel.app/login',
    badge: 'Full Stack',
    icon: '🏦'
  },
  {
    id: 4,
    title: 'HOMEIGO',
    category: 'web',
    categoryLabel: 'Real Estate Platform',
    description: 'Full-stack real estate marketplace with property listings, advanced filtering, and dedicated accounts for buyers, sellers, and agents. Users can browse and filter the property catalog while agents and sellers manage their own listings, all coordinated through a relational database layer that keeps property data consistent.',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    images: [p2],
    liveUrl: 'https://homeigo-fullstack-project-1.onrender.com/listings',
    badge: 'Full Stack',
    icon: '🏠'
  },
  {
    id: 5,
    title: 'Lazarev.agency',
    category: 'web',
    categoryLabel: 'Agency Website',
    description: 'Award-style agency website with bold typography, scroll-driven animations, and a high-performance landing experience. GSAP and Framer Motion choreograph the scroll-driven motion, while the Tailwind-built UI keeps the page fast, crisp, and consistent across devices.',
    technologies: ['React', 'GSAP', 'Framer Motion', 'Tailwind CSS'],
    images: [p4],
    liveUrl: 'https://beamish-cajeta-b009d1.netlify.app/',
    badge: 'Frontend UI',
    icon: '🚀'
  },
  {
    id: 6,
    title: 'Chatify',
    category: 'web',
    categoryLabel: 'Real-Time Messaging',
    description: 'Real-time messaging application with instant chat, presence indicators, and persistent conversation history. Socket.IO pushes messages and presence updates live so conversations feel instant, while Express and MongoDB keep the full history stored and available across reloads and reconnects.',
    technologies: ['Socket.IO', 'Node.js', 'Express', 'MongoDB'],
    images: [p5],
    liveUrl: 'https://chatify-v8u2.onrender.com/login',
    badge: 'Real-Time',
    icon: '💬'
  },
  {
    id: 7,
    title: 'Sudoku Game',
    category: 'game',
    categoryLabel: 'Puzzle Game',
    description: 'DSA project pairing a backtracking solver with a stack-based data structure to solve Sudoku puzzles step by step. The React front end turns the algorithm into a playable puzzle experience, so visitors can test their own solving against the built-in solver.',
    technologies: ['React', 'JavaScript', 'Algorithms'],
    images: [p6],
    liveUrl: 'https://sudukoreact.vercel.app/',
    badge: 'Game',
    icon: '🧩'
  },
  {
    id: 8,
    title: 'Chess Game',
    category: 'game',
    categoryLabel: 'Strategy Game',
    description: 'Java-based strategy game with full move validation, undo/redo, and move history tracking. Object-oriented design keeps pieces, rules, and game state cleanly separated, making the engine straightforward to reason about and extend.',
    technologies: ['Java', 'OOP', 'Algorithms'],
    images: [p7],
    liveUrl: 'https://github.com/Abdullah-JUTT-cloud/Chess_java',
    badge: 'Game',
    icon: '♟️'
  }
];

const ProjectImage = ({ images, title }) => {
  const [index, setIndex] = useState(0);
  const count = images.length;

  return (
    <div className="relative w-full h-full">
      <AnimatePresence mode="wait" initial={false}>
        <motion.img
          key={index}
          src={images[index]}
          alt={`${title} screenshot ${index + 1}`}
          className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        />
      </AnimatePresence>

      {/* Carousel dots for multi-image cards */}
      {count > 1 && (
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Show screenshot ${i + 1} of ${title}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-5 bg-[#ff2a2a]' : 'w-1.5 bg-white/40 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === filter);

  const filterTabs = [
    { key: 'all', label: 'All' },
    { key: 'health', label: 'Healthcare' },
    { key: 'web', label: 'Web Dev' },
    { key: 'game', label: 'Games' }
  ];

  return (
    <section id="projects" className="bg-[#15171C] py-24 px-6 md:px-12 w-full text-white relative overflow-x-clip font-sans pb-20">

      {/* Smooth wave transition into Experience (red) */}
      <SectionDivider aboveColor="#15171C" belowColor="#ff2a2a" />

      <div className="max-w-[90vw] mx-auto relative z-10">

        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-[#ff2a2a]/10 border border-[#ff2a2a]/30 text-[#ff2a2a] text-xs font-bold tracking-widest uppercase mb-4">
              Featured Work
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              Real-World Projects
            </h2>
            <p className="text-gray-400 text-sm md:text-base mt-2 max-w-lg">
              Full-stack applications built with React, Next.js, Node.js, MongoDB, and PostgreSQL.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 bg-gray-900/80 p-1.5 rounded-full border border-gray-800 self-start md:self-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-300 ${
                  filter === tab.key ? 'bg-[#ff2a2a] text-white shadow-lg' : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-gray-900/50 border border-gray-800/80 rounded-3xl overflow-hidden hover:border-[#ff2a2a]/50 hover:shadow-[0_10px_30px_rgba(255,42,42,0.1)] transition-all duration-500 group flex flex-col"
              >
                {/* Screenshot */}
                <div className="relative w-full aspect-[16/9] overflow-hidden border-b border-gray-800/60">
                  <ProjectImage images={project.images} title={project.title} />

                  {/* Category Icon Badge */}
                  <div className="absolute top-3 left-3 w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-lg lg:text-xl z-10 group-hover:scale-110 transition-transform">
                    {project.icon}
                  </div>

                  {/* Status Badge */}
                  <span className="absolute top-3 right-3 px-3 py-1 text-[10px] lg:text-[11px] font-extrabold rounded-full bg-[#ff2a2a]/15 border border-[#ff2a2a]/40 text-[#ff2a2a] backdrop-blur-md z-10">
                    {project.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8 flex flex-col flex-1">
                  {/* Category Label */}
                  <span className="text-[11px] lg:text-xs font-bold text-[#ff2a2a] uppercase tracking-wider block mb-1.5">
                    {project.categoryLabel}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl lg:text-2xl font-black text-white group-hover:text-[#ff2a2a] transition-colors mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs lg:text-sm text-gray-400 leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 lg:gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 lg:px-3 lg:py-1.5 text-[10px] lg:text-[11px] font-semibold rounded-full bg-white/5 border border-white/10 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Live Demo Button */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 lg:py-3 px-3 rounded-full bg-[#ff2a2a] text-white font-bold text-xs lg:text-sm flex items-center justify-center gap-2 hover:bg-red-600 transition-colors shadow-md"
                  >
                    Live Demo
                    <FaExternalLinkAlt className="text-[0.7em] opacity-80 group-hover:opacity-100" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;