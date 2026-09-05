import stackImage from "../assets/about/image.png";
import SectionDivider from "./SectionDivider";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-x-clip font-sans"
    >
      {/* Background watermark — fills full section width and height */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden">
        <span className="text-[45vw] font-black leading-none tracking-tight text-[#3F3F3F] opacity-[0.15] select-none whitespace-nowrap">
          CEH
        </span>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-16 items-start relative z-10">
        {/* Left Side: ID Badge */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          <div
            data-aos="drop-bounce"
            className="relative flex justify-center w-full"
          >
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>

            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-4 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-2 hover:rotate-0 transition-transform duration-500 text-white">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>

              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border border-white/10 mb-4">
                <img
                  src={stackImage}
                  alt="Muhammad Abdullah"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Badge Details */}
              <div className="text-center">
                <h4 className="text-lg font-black text-white uppercase tracking-wider">
                  Muhammad Abdullah
                </h4>
                <p className="text-xs font-bold text-[#ff2a2a] uppercase tracking-widest mt-0.5">
                  Full Stack Engineer
                </p>
                <div className="mt-3 pt-3 border-t border-white/10 flex justify-between text-[11px] text-gray-400 font-mono">
                  <span>ID: MA-4812X</span>
                  <span className="text-emerald-400 font-bold">● ACTIVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Detailed Bio & Info List */}
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          className="flex-1 text-white mt-10 md:mt-0 relative z-20"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-black text-white text-s font-black tracking-widest uppercase mb-8">
            About Me
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
            Hi, I'm Muhammad Abdullah
          </h2>

          <p className="text-[#000] font-black text-xl mb-3 uppercase tracking-wide">
            Software Engineer / Full Stack Developer | Building Scalable
            Solutions
          </p>

          <p className="text-s  md:text-base font-medium mb-4 leading-relaxed text-red-100 max-w-4xl">
            Software Engineer / Full Stack Developer based in Lahore, Pakistan,
            with hands-on experience shipping production-ready full-stack
            applications across the MERN stack and beyond.
          </p>

          <p className="text-sm md:text-base font-medium mb-4 leading-relaxed text-red-100 max-w-3xl">
            I specialize in{" "}
            <strong className="text-black font-black">
              React, Next.js, TypeScript, Node.js, MongoDB, and PostgreSQL
            </strong>{" "}
            — architecting clean, scalable, and battle-tested systems with zero
            tolerance for inefficiency. From healthcare SaaS platforms to
            real-time messaging apps, I love creating impactful software.
          </p>

          <p className="text-sm md:text-base font-medium mb-8 leading-relaxed text-red-100 max-w-3xl">
            Passionate about continuous learning, clean code, and open-source
            collaboration. Currently pursuing a BSSE at the University of
            Central Punjab while working as a MERN stack developer and freelance
            full-stack engineer.
          </p>

          {/* Grid Info List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex flex-col">
              <span className="text-xs text-white/60 font-bold uppercase tracking-wider">
                Degree
              </span>
              <span className="text-sm font-bold text-white">
                BSSE (Software Engineering) · UCP
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-white/60 font-bold uppercase tracking-wider">
                Location
              </span>
              <span className="text-sm font-bold text-white">
                Lahore, Pakistan
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-white/60 font-bold uppercase tracking-wider">
                Email
              </span>
              <a
                href="mailto:abdullahjuttjutt910@gmail.com"
                className="text-sm font-bold text-white hover:underline"
              >
                abdullahjuttjutt910@gmail.com
              </a>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-white/60 font-bold uppercase tracking-wider">
                Phone / WhatsApp
              </span>
              <a
                href="https://wa.me/923214194045"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-white hover:underline"
              >
                +92 321 4194045
              </a>
            </div>
          </div>

          {/* GitHub CTA Banner */}
          <a
            href="https://github.com/Abdullah-JUTT-cloud"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-black text-white p-5 rounded-2xl border border-white/20 hover:bg-gray-950 transition-all duration-300 group shadow-xl"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl">
                🐙
              </div>
              <div>
                <div className="text-xs text-gray-400 font-medium">
                  Explore 8+ Real-World Repositories
                </div>
                <div className="text-base font-black text-white group-hover:text-[#ff2a2a] transition-colors">
                  github.com/Abdullah-JUTT-cloud ↗
                </div>
              </div>
            </div>
            <div className="hidden sm:flex px-4 py-2 rounded-full bg-white/10 text-xs font-bold text-white group-hover:bg-[#ff2a2a]">
              Follow
            </div>
          </a>
        </div>
      </div>

      {/* Smooth wave transition into IntroVideo (black) */}
      <SectionDivider aboveColor="#ff2a2a" belowColor="#05050a" />

      {/* Decorative sparkle accent */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-20 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
        </svg>
      </div>
    </section>
  );
};

export default About;
