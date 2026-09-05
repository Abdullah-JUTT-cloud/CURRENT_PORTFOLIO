import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SiFiverr, SiUpwork, SiFreelancer } from 'react-icons/si';

/* Contra logo not in simple-icons — inline SVG of the official mark */
const ContraLogo = ({ size = 28, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="white" {...props}>
    <path d="M18.5 4C15.5 4 13 6 12 8c-1-2-3.5-4-6.5-4C3 4 1 6 1 8.5S3 13 5.5 13c3 0 5.5-2 6.5-4 1 2 3.5 4 6.5 4C21 13 23 11 23 8.5S21 4 18.5 4Z" />
  </svg>
);

const platforms = [
  {
    name: 'Fiverr',
    subtext: 'Fixed-scope gigs',
    cta: 'Place Your Order',
    url: 'https://www.fiverr.com/s/42ePl8y',
    tileClass: 'bg-[#1dbf73] border-white/20',
    LogoIcon: SiFiverr,
  },
  {
    name: 'Upwork',
    subtext: 'Hourly & contract work',
    cta: 'Hire Me',
    url: 'https://www.upwork.com/freelancers/~01960cac3b684eba9d',
    tileClass: 'bg-[#14a800] border-white/20',
    LogoIcon: SiUpwork,
  },
  {
    name: 'Contra',
    subtext: 'Commission-free projects',
    cta: 'Start a Project',
    url: 'https://contra.com/muhammad_abdullah_m5bn5vlv',
    tileClass: 'bg-[#6C2BD9] border-white/20',
    LogoIcon: ContraLogo,
  },
  {
    name: 'Freelancer',
    subtext: 'Project bidding',
    cta: 'Post Your Project',
    url: 'https://www.freelancer.com/u/abdullahjutt44',
    tileClass: 'bg-[#29B2FE] border-white/10',
    LogoIcon: SiFreelancer,
  }
];

const Contact = () => {
  const ref = useRef(null);
  
  // React Form State tracking
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
    permission: false
  });

  const [formStatus, setFormStatus] = useState(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax translation for the big text
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  // Handle input changes dynamically
  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle form submission logic
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.permission) {
      setFormStatus({ type: 'error', message: 'Please check the permission checkbox before sending.' });
      return;
    }

    console.log("Form Data Submitted:", formData);
    setFormStatus({ type: 'success', message: `Thank you ${formData.firstName}! Your message has been sent successfully.` });
    
    // Reset Form
    setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '', permission: false });
  };

  return (
    <section ref={ref} id="contact" className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-20">
      
      {/* Huge Background Parallax Text */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
      >
        <h1 
          className="text-[25vw] leading-[0.75] font-black text-white uppercase tracking-tighter select-none scale-y-[1.6] origin-top opacity-20"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>

      {/* Form Card Overlay */}
      <div className="relative z-10 w-full flex justify-end items-end">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#ff2a2a] w-full md:w-[90%] lg:w-[80%] p-8 md:p-16 text-white flex flex-col justify-between"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-white/20 pb-6">
            <div>
              <div className="text-xs font-bold tracking-[0.2em] uppercase opacity-90 mb-1">
                Got Ideas? I've got the skills. Let's team up.
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white">Have a project or idea in mind?</h2>
              <p className="text-xs text-white/80 mt-1 font-medium">Contact me & place your order.</p>
            </div>

            {/* Quick Badges */}
            <div className="flex flex-wrap gap-2 text-xs font-bold">
              <a href="mailto:abdullahjuttjutt910@gmail.com" className="px-3.5 py-1.5 rounded-full bg-black/30 border border-white/20 hover:bg-white hover:text-black transition-colors">
                ✉️ Email: abdullahjuttjutt910@gmail.com
              </a>
              <a href="https://wa.me/923214194045" target="_blank" rel="noopener noreferrer" className="px-3.5 py-1.5 rounded-full bg-black/30 border border-white/20 hover:bg-white hover:text-black transition-colors">
                💬 WhatsApp: +92 321 4194045
              </a>
              <a href="https://www.linkedin.com/in/muhammad-abdullah-757aa2287/" target="_blank" rel="noopener noreferrer" className="px-3.5 py-1.5 rounded-full bg-black/30 border border-white/20 hover:bg-white hover:text-black transition-colors">
                🔗 LinkedIn
              </a>
              <a href="https://www.instagram.com/abdullah_jutt.44?igsh=dGVwODBvcnN2N3c0" target="_blank" rel="noopener noreferrer" className="px-3.5 py-1.5 rounded-full bg-black/30 border border-white/20 hover:bg-white hover:text-black transition-colors">
                📸 Instagram
              </a>
              <a href="https://www.fiverr.com/s/42ePl8y" target="_blank" rel="noopener noreferrer" className="px-3.5 py-1.5 rounded-full bg-black/30 border border-white/20 hover:bg-white hover:text-black transition-colors">
                🟢 Fiverr
              </a>
              <a href="https://www.upwork.com/freelancers/~01960cac3b684eba9d" target="_blank" rel="noopener noreferrer" className="px-3.5 py-1.5 rounded-full bg-black/30 border border-white/20 hover:bg-white hover:text-black transition-colors">
                🔵 Upwork
              </a>
              <a href="https://contra.com/muhammad_abdullah_m5bn5vlv" target="_blank" rel="noopener noreferrer" className="px-3.5 py-1.5 rounded-full bg-black/30 border border-white/20 hover:bg-white hover:text-black transition-colors">
                ⚫ Contra
              </a>
              <a href="https://www.freelancer.com/u/abdullahjutt44" target="_blank" rel="noopener noreferrer" className="px-3.5 py-1.5 rounded-full bg-black/30 border border-white/20 hover:bg-white hover:text-black transition-colors">
                🟠 Freelancer
              </a>
            </div>
          </div>

          {/* Freelance Platform Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-12">
            {platforms.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gray-900 border border-white/20 rounded-3xl p-6 flex flex-col hover:border-[#ff2a2a]/60 hover:shadow-[0_20px_45px_rgba(0,0,0,0.45)] hover:-translate-y-1 transition-all duration-500"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shadow-lg ${p.tileClass}`}>
                    {(() => { const Logo = p.LogoIcon; return <Logo size={28} className="text-white" />; })()}
                  </div>
                  <svg className="w-4 h-4 text-white/40 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </div>
                <h3 className="text-lg font-black text-white group-hover:text-[#ff2a2a] transition-colors">{p.name}</h3>
                <p className="text-xs text-gray-400 font-medium mt-1">{p.subtext}</p>
                <div className="border-t border-white/10 my-4"></div>
                <span className="text-[11px] font-extrabold tracking-widest uppercase text-[#ff2a2a] group-hover:tracking-[0.18em] transition-all inline-flex items-center gap-1.5">
                  {p.cta}
                  <span className="text-sm leading-none">→</span>
                </span>
              </a>
            ))}
          </div>

          {/* Toast / Alert Status Message */}
          {formStatus && (
            <div className={`mb-8 p-4 rounded-xl text-sm font-bold flex items-center justify-between ${
              formStatus.type === 'success' ? 'bg-black text-emerald-400 border border-emerald-500/50' : 'bg-black text-amber-300 border border-amber-500/50'
            }`}>
              <span>{formStatus.message}</span>
              <button onClick={() => setFormStatus(null)} className="text-white text-xs underline">Dismiss</button>
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-10 w-full">
            <div className="flex flex-col md:flex-row gap-10 md:gap-16 w-full">
              
              {/* Left Column */}
              <div className="flex-1 flex flex-col gap-8">
                <div className="relative">
                  <input 
                    type="text" 
                    id="firstName" 
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name *" 
                    required
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/80 font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    id="lastName" 
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name *" 
                    required
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/80 font-medium rounded-none"
                  />
                </div>
                <div className="relative">
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email *" 
                    required
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/80 font-medium rounded-none"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1 flex flex-col gap-8">
                <div className="relative">
                  <input 
                    type="text" 
                    id="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject *" 
                    required
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/80 font-medium rounded-none"
                  />
                </div>
                <div className="relative h-full flex flex-col">
                  <textarea 
                    id="message" 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message / project details *" 
                    required
                    className="w-full h-full min-h-[120px] bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white/80 font-medium resize-none rounded-none"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row gap-8 mt-4 items-start md:items-center justify-between">
              {/* Checkbox */}
              <div className="flex items-start gap-3 text-sm font-medium text-white/90">
                <input 
                  type="checkbox" 
                  id="permission" 
                  checked={formData.permission}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 rounded border-white/40 bg-transparent text-black focus:ring-white cursor-pointer" 
                  style={{ accentColor: "white" }}
                />
                <label htmlFor="permission" className="cursor-pointer max-w-sm leading-snug">
                  I give permission to Muhammad Abdullah to contact me regarding this inquiry.
                </label>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="px-10 py-3.5 rounded-full bg-white text-black font-black flex items-center justify-center gap-3 hover:bg-gray-950 hover:text-white transition-all duration-300 group shadow-2xl self-start md:self-auto"
              >
                Send Message
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </form>

        </motion.div>

      </div>
    </section>
  );
};

export default Contact;