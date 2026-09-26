const asset = (file) => new URL(`./assets/about/${file}`, import.meta.url).href;

export const profileImage = asset('image.png');
export const videoPoster = asset('gig-poster.jpg');
export const introVideo = new URL('./assets/hero-video/gig.mp4', import.meta.url).href;
export const resume = new URL('./assets/Muhammad_Abdullah.pdf', import.meta.url).href;

export const projects = [
  { title: 'MedAlerto', cat: 'health', type: 'Healthcare SaaS Platform', desc: 'Full-stack healthcare SaaS connecting patients and providers through appointment workflows, patient records, real-time scheduling, and dedicated role-based experiences.', tech: ['React', 'Next.js', 'Node.js', 'MongoDB'], img: asset('p1.png'), url: 'https://medalerto.me/', badge: 'Featured' },
  { title: 'Wells Merry Hair Oil', cat: 'web', type: 'E-commerce Services Website', desc: 'A conversion-focused hair oil commerce experience with organic product storytelling, a shop flow, and a guided hair quiz for product discovery.', tech: ['React', 'Next.js', 'Tailwind CSS'], img: asset('wellsmerry.png'), url: 'https://well-s-merry.vercel.app/', badge: 'Live Site' },
  { title: 'WAVECRATE', cat: 'web', type: 'Mobile App / Android', desc: 'A private, single-user Android music app I built for myself after getting tired of Spotify ads and my monthly subscription. Wavecrate connects to a personal Google Drive folder as a cloud music library — I can browse everything in the folder, selectively download tracks for offline listening, and build playlists that mix downloaded and cloud-only songs (tapping a cloud-only song auto-downloads then plays it). Built with a native Kotlin + Jetpack Compose stack for full control over background audio playback, complete with lock-screen media controls via a MediaSessionService.', tech: ['Kotlin', 'Jetpack Compose', 'Room', 'Media3 (ExoPlayer)', 'Google Drive API'], img: asset('Music.jpeg'), url: 'https://github.com/Abdullah-JUTT-cloud/Wavecrate', badge: 'Personal Project' },
  { title: 'Banking System', cat: 'web', type: 'Full-Stack Finance', desc: 'Enterprise-level banking platform with secure authentication, account management, transactions, admin dashboards, and separated JWT-secured flows.', tech: ['Node.js', 'Express', 'MongoDB', 'JWT'], img: asset('p3.png'), url: 'https://enterpriselevelbankingsystem.vercel.app/login', badge: 'Full Stack' },
  { title: 'HOMEIGO', cat: 'web', type: 'Real Estate Platform', desc: 'Full-stack real estate marketplace with property listings, advanced filtering, and dedicated accounts for buyers, sellers, and agents.', tech: ['React', 'Node.js', 'Express', 'PostgreSQL'], img: asset('p2.png'), url: 'https://homeigo-fullstack-project-1.onrender.com/listings', badge: 'Full Stack' },
  { title: 'Lazarev.agency', cat: 'web', type: 'Agency Website', desc: 'Award-style agency website with bold typography, scroll-driven animation, and a crisp, high-performance landing experience.', tech: ['React', 'GSAP', 'Framer Motion', 'Tailwind'], img: asset('p4.png'), url: 'https://beamish-cajeta-b009d1.netlify.app/', badge: 'Frontend UI' },
  { title: 'Chatify', cat: 'web', type: 'Real-Time Messaging', desc: 'Real-time messaging with live chat, presence indicators, persistent history, and resilient reconnect behavior powered by Socket.IO.', tech: ['Socket.IO', 'Node.js', 'Express', 'MongoDB'], img: asset('p5.png'), url: 'https://chatify-v8u2.onrender.com/login', badge: 'Real-Time' },
  { title: 'Sudoku Solver', cat: 'game', type: 'Puzzle Game / DSA', desc: 'A playable React puzzle experience powered by a backtracking solver and stack-based data structures for step-by-step solutions.', tech: ['React', 'JavaScript', 'Algorithms'], img: asset('p6.png'), url: 'https://sudukoreact.vercel.app/', badge: 'Game' },
  { title: 'Chess Engine', cat: 'game', type: 'Strategy Game / OOP', desc: 'Java strategy game with complete move validation, undo/redo, move history, and clean object-oriented separation of rules and state.', tech: ['Java', 'OOP', 'Algorithms'], img: asset('p7.png'), url: 'https://github.com/Abdullah-JUTT-cloud/Chess_java', badge: 'Game' },
];

export const experiences = [
  { num: '01', title: 'MERN Stack Developer', meta: 'Devverx · Pakistan · On-site', duration: '1 Year', desc: 'Built and maintained full-stack web applications with a focus on scalable architecture, API development, responsive UI, and client delivery.', tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'], achievements: ['Built and deployed production-level MERN applications', 'Designed RESTful APIs and backend logic', 'Improved UI performance and responsiveness', 'Collaborated on real-world client projects'] },
  { num: '02', title: 'Software Engineering Student', meta: 'University of Central Punjab · Pakistan', duration: 'Present', desc: 'Studying core software engineering concepts while translating systems, algorithms, and database theory into practical applications.', tech: ['C++', 'Java', 'Data Structures', 'Algorithms', 'SQL'], achievements: ['Built algorithmic projects including backtracking systems', 'Developed strong OOP and database design skills', 'Applied theoretical concepts in full-stack applications'] },
  { num: '03', title: 'Full Stack Engineer', meta: 'Freelance / Independent Projects · Remote', duration: '2023—Present', desc: 'Building end-to-end products across multiple domains with emphasis on performance, scalability, security, and real-world usability.', tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Spring Boot'], achievements: ['Built the HOMEIGO real estate platform', 'Developed real-time applications and APIs', 'Implemented authentication and scalable backend systems', 'Worked across MERN and Spring Boot ecosystems'] },
];

export const skillGroups = [
  ['Engineering fundamentals', ['DSA · Advanced', 'OOP · Advanced', 'Systems Design · Intermediate', 'Database Design · Advanced']],
  ['Languages', ['C++ · Intermediate', 'Java · Intermediate', 'JavaScript · Advanced', 'TypeScript · Advanced', 'SQL · Advanced']],
  ['Frontend', ['React · Advanced', 'Next.js · Advanced', 'Tailwind CSS · Advanced', 'Framer Motion · Intermediate', 'GSAP · Intermediate', 'LocomotiveJS · Intermediate', 'React Native · Intermediate']],
  ['Backend & data', ['Spring Boot · Intermediate', 'Node.js · Advanced', 'Express · Advanced', 'MongoDB · Advanced', 'PostgreSQL · Intermediate', 'Redis · Intermediate']],
  ['Tools & platforms', ['Git · Advanced', 'GitHub · Advanced', 'Linux · Advanced']],
];

export const certificateGroups = [
  { title: 'Security & Ethical Hacking', desc: 'Penetration testing, network defense, and offensive security', files: ['H1.jpg', 'H2.jpg', 'H3.jpg', 'H4.jpg', 'C1.jpg', 'C2.jpg', 'C3.jpg', 'C4.jpg', 'C5.jpg'].map(asset), reverse: false },
  { title: 'AI & Additional Credentials', desc: 'Machine learning, LLMs, and professional achievements', files: ['A1.jpg', 'A2.jpg', 'A3.jpg', 'A4.jpg', 'E1.jpg', 'E2.jpg', 'E3.jpg'].map(asset), reverse: true },
];

export const platforms = [
  ['Fiverr', 'Fixed-scope gigs', 'Place your order', 'https://www.fiverr.com/s/42ePl8y'],
  ['Upwork', 'Hourly & contract work', 'Hire me', 'https://www.upwork.com/freelancers/~01960cac3b684eba9d'],
  ['Contra', 'Commission-free projects', 'Start a project', 'https://contra.com/muhammad_abdullah_m5bn5vlv'],
  ['Freelancer', 'Project bidding', 'Post your project', 'https://www.freelancer.com/u/abdullahjutt44'],
];
