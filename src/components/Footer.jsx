import React from 'react';
import { SiWhatsapp } from 'react-icons/si';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa6';

const socials = [
  { name: 'GitHub', url: 'https://github.com/Abdullah-JUTT-cloud', Icon: FaGithub },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/muhammad-abdullah-757aa2287/', Icon: FaLinkedinIn },
  { name: 'Instagram', url: 'https://www.instagram.com/abdullah_jutt.44?igsh=dGVwODBvcnN2N3c0', Icon: FaInstagram },
  { name: 'WhatsApp', url: 'https://wa.me/923214194045', Icon: SiWhatsapp },
];

const Footer = () => {
  return (
    <footer className="bg-[#050508] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh] border-t border-gray-900">
      
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1">
          <p className="font-bold text-white uppercase tracking-wider">Software Engineer / Full Stack Developer</p>
          <p>BSSE (Software Engineering) · UCP</p>
          <p>University of Central Punjab</p>
        </div>
        
        <div className="flex flex-col gap-2 md:items-center">
          <p className="font-bold text-white uppercase tracking-wider">8+ Real-World Projects</p>
          <a href="#projects" className="underline hover:text-[#ff2a2a] transition-colors underline-offset-4 decoration-1 font-bold">View Projects</a>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <p className="font-bold text-emerald-400">Available For Freelance & Roles</p>
          <p>Lahore, Pakistan</p>
        </div>
      </div>

      {/* Middle Huge Text */}
      <div className="w-full flex justify-center items-center py-16 md:py-20 overflow-hidden">
        <h2 className="text-[11vw] md:text-[9vw] leading-none font-sans font-black tracking-tighter uppercase select-none text-white/90 w-full text-center">
          ABDULLAH JUTT
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-sans">
            {socials.map(({ name, url, Icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                title={name}
                className="flex items-center gap-2 text-[#d4d4d4] hover:text-[#ff2a2a] transition-colors"
              >
                <Icon size={24} />
                <span className="uppercase text-xs font-bold tracking-widest">{name}</span>
              </a>
            ))}
          </div>
          <p className="text-white/60 font-mono text-[10px]">
            &copy; 2026 Muhammad Abdullah · All rights reserved · Built with ❤️ in Pakistan
          </p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <a href="mailto:abdullahjuttjutt910@gmail.com" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 text-sm font-mono text-[#ff2a2a]">
            abdullahjuttjutt910@gmail.com
          </a>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end text-white/50 text-[10px]">
          <p>Built with React 19 & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
