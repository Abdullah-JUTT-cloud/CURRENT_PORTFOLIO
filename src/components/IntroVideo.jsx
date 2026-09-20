import { useRef, useState } from 'react';
import { Maximize, Pause, Play, Volume2, VolumeX } from 'lucide-react';
import { introVideo, videoPoster } from '../data';

const formatTime = (seconds = 0) => `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`;

export default function IntroVideo() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(68);
  const toggle = () => videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause();

  return (
    <section className="section intro-video" id="intro-video">
      <div className="shell">
        <div className="section-heading reveal"><div><div className="section-kicker"><span>02</span> Introduction</div><h2 className="section-title">Meet me in<br /><em>60 seconds.</em></h2></div><p>Rather than reading about me—hear it directly. Who I am, what I build, and exactly how I can help you ship your next product.</p></div>
        <div className="video-layout">
          <div className="video-player reveal">
            <video ref={videoRef} src={introVideo} poster={videoPoster} playsInline preload="metadata" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)} onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)} />
            <div className="video-label">● Personal intro · 1:08</div>
            <button className={`video-play ${playing ? 'is-playing' : ''}`} onClick={toggle} aria-label={playing ? 'Pause video' : 'Play video'}>{playing ? <Pause /> : <Play fill="currentColor" />}</button>
            <div className="video-controls">
              <button onClick={toggle} aria-label={playing ? 'Pause' : 'Play'}>{playing ? <Pause size={16} /> : <Play size={16} />}</button>
              <button onClick={() => { videoRef.current.muted = !muted; setMuted(!muted); }} aria-label="Mute or unmute">{muted ? <VolumeX size={16} /> : <Volume2 size={16} />}</button>
              <input type="range" min="0" max={duration} value={time} step="0.1" onChange={(e) => { videoRef.current.currentTime = e.target.value; setTime(+e.target.value); }} style={{ '--progress': `${(time / duration) * 100}%` }} aria-label="Seek video" />
              <span>{formatTime(time)} / {formatTime(duration)}</span>
              <button onClick={() => videoRef.current.closest('.video-player').requestFullscreen()} aria-label="Fullscreen"><Maximize size={16} /></button>
            </div>
          </div>
          <div className="intro-notes">
            {[
              ['01 / IDENTITY', 'Who I am', 'Software Engineer & Full Stack Developer building production-grade systems.'],
              ['02 / CRAFT', 'What I do', 'End-to-end web and mobile applications—architecture, APIs, and polished interfaces.'],
              ['03 / VALUE', 'What I bring', 'Clear communication, clean scalable code, and delivery you can rely on.'],
            ].map((item) => <article className="intro-note reveal" key={item[0]}><small>{item[0]}</small><h3>{item[1]}</h3><p>{item[2]}</p><span>↗</span></article>)}
          </div>
        </div>
      </div>
    </section>
  );
}
