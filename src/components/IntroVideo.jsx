import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

import gigPoster from '../assets/about/gig-poster.jpg';
import SectionDivider from './SectionDivider';

const videoSrc = 'https://pub-0cf5afc10a704df49c59828b509aaa42.r2.dev/portfolio/gig.mp4';

const introCards = [
  {
    number: '01',
    title: 'Who I Am',
    text: 'Software Engineer & Full Stack Developer building production-grade systems.'
  },
  {
    number: '02',
    title: 'What I Do',
    text: 'End-to-end web & mobile applications — architecture, APIs, and polished interfaces.'
  },
  {
    number: '03',
    title: 'What I Bring You',
    text: 'Clear communication, clean scalable code, and delivery you can rely on.'
  }
];

const formatTime = (secs) => {
  if (!Number.isFinite(secs) || secs < 0) secs = 0;
  const m = Math.floor(secs / 60);
  const s = Math.floor(secs % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
};

const IntroVideo = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(68); // "1:08" fallback until metadata loads
  const [showControls, setShowControls] = useState(false);

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const restart = () => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = 0;
    setCurrentTime(0);
    video.play();
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const seekTo = (e) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = e.target.value;
    setCurrentTime(video.currentTime);
  };

  const toggleFullscreen = () => {
    const el = containerRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    }
  };

  return (    <section
      id="intro-video"
      className="bg-[#05050a] py-24 px-6 md:px-12 w-full text-white relative overflow-x-clip font-sans pb-20">
      <div className="max-w-[90vw] mx-auto relative z-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="inline-block px-4 py-1 rounded-full bg-[#ff2a2a]/10 border border-[#ff2a2a]/30 text-[#ff2a2a] text-xs font-bold tracking-widest uppercase mb-4">
            02 // INTRODUCTION
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">
            Meet Me
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ff2a2a] to-red-500">
              In 60 Seconds
            </span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base mt-4 max-w-lg leading-relaxed">
            Rather than reading about me — hear it directly. Who I am, what I build, and exactly how I can help you ship your next product.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8 lg:gap-12 items-start">

          {/* Video Player */}
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-gray-900/50 border border-gray-800/80 rounded-3xl p-3 md:p-5 hover:border-[#ff2a2a]/50 hover:shadow-[0_20px_50px_rgba(255,42,42,0.12)] transition-all duration-500"
          >
            <div
              className="relative w-full aspect-video lg:aspect-auto lg:min-h-[58vh] rounded-2xl overflow-hidden bg-black group"
              onMouseEnter={() => setShowControls(true)}
              onMouseLeave={() => setShowControls(false)}
            >
              <video
                ref={videoRef}
                src={videoSrc}
                poster={gigPoster}
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
                onLoadedMetadata={(e) => setDuration(e.target.duration)}
                onEnded={() => setIsPlaying(false)}
              />

              {/* Top Badges */}
              <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-[10px] font-extrabold tracking-widest text-white z-20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a2a] animate-pulse"></span>
                Personal Intro
              </div>
              <div className="absolute top-3 right-3 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-[10px] font-bold font-mono text-white/90 tabular-nums z-20">
                {formatTime(duration)}
              </div>

              {/* Centered Play Overlay */}
              {!isPlaying && (
                <button
                  onClick={togglePlay}
                  className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-5 bg-black/30 backdrop-blur-[2px] cursor-pointer group/play"
                  aria-label="Play intro video"
                >
                  <span className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#ff2a2a] shadow-[0_0_40px_rgba(255,42,42,0.5)] group-hover/play:scale-110 transition-transform duration-300">
                    <span className="absolute inset-0 rounded-full bg-[#ff2a2a]/40 animate-ping opacity-60"></span>
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-white/90 drop-shadow-lg">
                    Press play — sound on 🔊
                  </span>
                </button>
              )}

              {/* Custom Controls Bar */}
              <div
                className={`absolute bottom-0 left-0 right-0 z-20 px-4 pb-3 pt-10 bg-gradient-to-t from-black/85 via-black/40 to-transparent transition-opacity duration-300 ${
                  showControls || isPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}
              >
                <div className="flex items-center gap-3">
                  {/* Play / Pause */}
                  <button
                    onClick={togglePlay}
                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                    className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#ff2a2a] hover:border-[#ff2a2a] transition-all duration-300 shrink-0"
                  >
                    {isPlaying ? (
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7 5h4v14H7zM13 5h4v14h-4z" />
                      </svg>
                    ) : (
                      <svg className="w-3.5 h-3.5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </button>

                  {/* Restart */}
                  <button
                    onClick={restart}
                    aria-label="Restart video"
                    className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#ff2a2a] hover:border-[#ff2a2a] transition-all duration-300 shrink-0"
                  >
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 4v16M19 6l-9 6 9 6V6z" />
                    </svg>
                  </button>

                  {/* Mute / Unmute */}
                  <button
                    onClick={toggleMute}
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                    className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#ff2a2a] hover:border-[#ff2a2a] transition-all duration-300 shrink-0"
                  >
                    {isMuted ? (
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l-2.25 2.25M19.5 12l2.25-2.25m-10.5-6L4.5 9H1.5v6h3l4.5 3.75V5.25z" />
                      </svg>
                    ) : (
                      <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                      </svg>
                    )}
                  </button>

                  {/* Progress Bar + Time */}
                  <div className="flex-1 flex items-center gap-3 min-w-0">
                    <div className="relative w-full h-1.5 bg-white/15 rounded-full cursor-pointer group/bar shrink">
                      <div
                        className="absolute left-0 top-0 h-full bg-[#ff2a2a] rounded-full shadow-[0_0_8px_rgba(255,42,42,0.6)]"
                        style={{ width: `${progressPercent}%` }}
                      />
                      <input
                        type="range"
                        min="0"
                        max={duration}
                        step="0.1"
                        value={currentTime}
                        onChange={seekTo}
                        aria-label="Seek video"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                    </div>
                    <span className="text-[11px] font-mono text-white/80 whitespace-nowrap tabular-nums">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>
                  </div>

                  {/* Fullscreen */}
                  <button
                    onClick={toggleFullscreen}
                    aria-label="Toggle fullscreen"
                    className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#ff2a2a] hover:border-[#ff2a2a] transition-all duration-300 shrink-0"
                  >
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Caption */}
            <div className="flex items-center justify-between mt-3 px-1">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-gray-500">
                Personal Intro Reel
              </span>
              <span className="text-[11px] font-bold text-[#ff2a2a]">
                Press play — sound on 🔊
              </span>
            </div>
          </motion.div>

          {/* Info Cards */}
          <div className="flex flex-col gap-5 lg:gap-6">
            {introCards.map((card, idx) => (
              <motion.div
                key={card.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="bg-gray-900/50 border border-gray-800/80 rounded-3xl p-6 lg:p-8 flex items-start gap-5 lg:gap-6 hover:border-[#ff2a2a]/50 hover:shadow-[0_10px_30px_rgba(255,42,42,0.1)] transition-all duration-500 group"
              >
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-gray-800 border border-gray-700/80 flex items-center justify-center text-[#ff2a2a] font-black text-lg lg:text-xl shrink-0 group-hover:scale-110 group-hover:bg-[#ff2a2a] group-hover:text-white transition-all duration-300">
                  {card.number}
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg lg:text-xl font-black text-white group-hover:text-[#ff2a2a] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm lg:text-base text-gray-400 leading-relaxed mt-1.5">
                    {card.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
      {/* Smooth wave transition into Projects (black) */}
      <SectionDivider aboveColor="#05050a" belowColor="#15171C" />
    </section>
  );
};

export default IntroVideo;