import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Adjusted import path for the video
import heroVideo from '../assets/hero-video/herovideo.mp4';
// Imported so Vite bundles + fingerprints the PDF — a bare "/assets/..." href 404s in production
// (the file never gets emitted) and Vercel's SPA rewrite then serves index.html instead.
import resumePdf from '../assets/Muhammad_Abdullah.pdf';

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  // Default to true to allow browser safe autoplay constraints
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  // Switches audio states cleanly without freezing or pausing the video frame timeline
  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuteState = !videoRef.current.muted;
      videoRef.current.muted = nextMuteState;
      setIsMuted(nextMuteState);
      
      // Safety check: ensure the video remains playing if it dropped frame execution state
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Video - configured to safely launch instantly with autoplay */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay factor for optimized readability without completely muddying up the red tones */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent z-10 pointer-events-none" />

      {/* Content Container - UPDATED: Changed items-center to items-start and added responsive top padding (pt-28 / md:pt-[12%]) to lift content below the navbar */}
      <div className="absolute inset-0 z-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-start text-left w-full h-full pt-28 md:pt-[12%]">
        
        {/* Left Side: Text and Buttons - Shifted higher up */}
        <div className="flex flex-col items-start text-left max-w-lg lg:max-w-xl w-full">
          
          {/* Main Heading */}
          <div data-aos="fade-up" data-aos-delay="50" className="mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs md:text-sm font-bold tracking-widest text-emerald-400 uppercase">Available for work</span>
          </div>

          <h1 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-[1.05]"
          >
            Hi, I’m <br /> 
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#ff2a2a] drop-shadow-[0_2px_10px_rgba(0,0,0,0.15)]">
              Muhammad Abdullah
            </span>
          </h1>

          {/* Subheading */}
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white/90 text-lg md:text-xl font-medium mb-8 max-w-md lg:max-w-lg leading-relaxed drop-shadow-sm"
          >
            Architecting end-to-end applications with zero tolerance for inefficiency — only clean, scalable, and battle-tested systems. Delivering solutions built to scale and dominate in production.
          </p>

          {/* Quick Stats Bar */}
          <div data-aos="fade-up" data-aos-delay="300" className="flex items-center gap-6 mb-10 py-3 border-y border-white/10 w-full max-w-md">
            <div>
              <div className="text-2xl font-black text-white">8+</div>
              <div className="text-[10px] uppercase font-bold text-white/60 tracking-wider">Projects</div>
            </div>
            <div className="w-[1px] h-8 bg-white/10"></div>
            <div>
              <div className="text-2xl font-black text-white">3+ Yrs</div>
              <div className="text-[10px] uppercase font-bold text-white/60 tracking-wider">Coding</div>
            </div>
            <div className="w-[1px] h-8 bg-white/10"></div>
            <div>
              <div className="text-2xl font-black text-white">20+</div>
              <div className="text-[10px] uppercase font-bold text-white/60 tracking-wider">Technologies</div>
            </div>
          </div>

          {/* Buttons */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-wrap items-start gap-3 w-full mt-1"
          >
            {/* Download Resume Button */}
            <a 
              href={resumePdf} 
              download="Muhammad_Abdullah_Resume.pdf"
              type="application/pdf"
              className="px-6 py-2.5 md:px-7 md:py-3 text-xs md:text-sm rounded-full bg-[#ff2a2a] text-white font-bold hover:bg-red-600 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg inline-flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Download Resume
              <svg className="w-3.5 h-3.5 text-white/90 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>

            {/* View Projects Button */}
            <a 
              href="#projects" 
              className="px-6 py-2.5 md:px-7 md:py-3 text-xs md:text-sm rounded-full bg-white/10 border border-white/20 text-white font-bold hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-md transform hover:-translate-y-0.5 inline-block text-center"
            >
              Projects
            </a>
            
            {/* GitHub Button */}
            <a 
              href="https://github.com/Abdullah-JUTT-cloud" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2.5 md:px-7 md:py-3 text-xs md:text-sm rounded-full bg-black/40 border border-white/20 text-white/80 font-bold hover:bg-white/20 transition-all duration-300 backdrop-blur-md transform hover:-translate-y-0.5 inline-block text-center"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        {/* Right Side: Mute/Unmute Dynamic Audio Controller - Aligned to items-start for clean tracking */}
        <div 
          data-aos="zoom-in"
          data-aos-delay="600"
          className="mt-12 md:mt-2 flex flex-col items-center justify-center gap-2 cursor-pointer group self-start md:self-auto"
          onClick={toggleMute}
        >
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/20 bg-black/20 backdrop-blur-md flex justify-center items-center group-hover:scale-105 group-hover:bg-white group-hover:border-white transition-all duration-300 shadow-xl">
            {isMuted ? (
              // Speaker Muted Icon
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-black transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l-2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6L4.5 9H1.5v6h3l4.5 3.75V5.25z" />
              </svg>
            ) : (
              // Speaker Audio Active Waves Icon
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-black transition-colors" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28-.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
              </svg>
            )}
          </div>
          <span className="text-white text-[9px] md:text-[11px] font-extrabold tracking-widest uppercase opacity-60 group-hover:opacity-100 transition-opacity mt-1">
            {isMuted ? "Unmute Reel" : "Mute Sound"}
          </span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg 
            className="w-5 h-5 text-white opacity-70" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2.5" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;