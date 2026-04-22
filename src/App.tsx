import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Palette, 
  Terminal, 
  Cpu, 
  ChevronRight,
  ArrowRight,
  MessageSquare,
  Phone,
  Briefcase,
  GraduationCap
} from 'lucide-react';
import { useState, useRef, FormEvent } from 'react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 50);
    });
  }

  return (
    <nav 
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm tracking-tight uppercase font-medium">
        <a href="#hero" className="font-bold text-xl tracking-tighter normal-case">AT.</a>
        <div className="hidden md:flex gap-8">
          <a href="#about" className="hover:opacity-60 transition-opacity">About</a>
          <a href="#experience" className="hover:opacity-60 transition-opacity">Experience</a>
          <a href="#skills" className="hover:opacity-60 transition-opacity">Expertise</a>
          <a href="#contact" className="hover:opacity-60 transition-opacity">Contact</a>
        </div>
        <a 
          href="#contact" 
          className="bg-black text-white px-5 py-2 rounded-full hover:bg-neutral-800 transition-colors"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <section 
      id="hero" 
      ref={targetRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background with parallax effect */}
      <motion.div 
        style={{ opacity, scale, y }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1920&h=1080" 
          alt="Engineering Background"
          className="w-full h-full object-cover opacity-10"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <span className="inline-block px-3 py-1 bg-neutral-100 text-neutral-500 text-[10px] uppercase tracking-[0.2em] font-bold rounded-full mb-8">
            Available for new opportunities
          </span>
          <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-bold font-display tracking-[-0.04em] leading-[0.9] mb-12">
            ANTENEH <br />
            <span className="text-neutral-400 italic">TSEGAYE</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-12 md:items-end">
            <p className="text-xl text-neutral-500 max-w-md leading-relaxed font-medium">
              Electrical & Computer Engineer based in Addis Ababa. 
              Tech-enthusiast dedicated to researching technological 
              solutions to ease day-to-day life activities.
            </p>
            <motion.div 
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 cursor-pointer group"
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="w-16 h-16 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                <ArrowRight className="w-6 h-6" />
              </div>
              <span className="uppercase text-sm font-bold tracking-widest">Selected Experience</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-neutral-200"></div>
        <span className="text-[10px] uppercase tracking-widest text-neutral-400">Scroll</span>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-24">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold font-display tracking-tight uppercase">About Me</h2>
            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed font-medium">
              <p>
                I'm a Tech-Enthusiast, hard-working, energetic, and sociable person with good 
                knowledge and experience in web technologies, MySQL, and PHP. 
              </p>
              <p>
                I am passionate about studying and researching technological solutions 
                to ease our day-to-day life activities. My background in Electrical and 
                Computer Engineering provides me with a strong foundation in complex 
                problem-solving and systems design.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-4 bg-neutral-50 px-6 py-4 rounded-2xl border border-neutral-100 flex-1 min-w-[200px]">
                <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center">
                   <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                   <h4 className="text-sm font-bold uppercase tracking-tight">Aksum University</h4>
                   <p className="text-xs text-neutral-400 font-bold">Electrical & Computer Engineering</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl transition-transform duration-700">
             <img 
                src="/profile.jpg" 
                alt="Anteneh Tsegaye" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 bg-neutral-900/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Experience = () => {
  const jobs = [
    {
      company: "Kana Television",
      role: "Broadcast Media Scheduler",
      period: "12/2023 – Current",
      location: "Addis Ababa, Ethiopia",
      details: [
        "Allocate time slots for shows, movies, and commercials.",
        "Review viewer data to optimize programming for target demographics.",
        "Ensure all content meets regulatory standards and guidelines.",
        "Coordinate with producers, advertisers, and other departments.",
        "Make real-time changes to the schedule based on ratings or unexpected events.",
        "Analyze performance metrics and prepare reports on viewership effectiveness."
      ]
    },
    {
      company: "ISON Xperience",
      role: "Customer Service Representative",
      period: "09/2022 – 12/2023",
      location: "Addis Ababa, Ethiopia",
      details: [
        "Acting as the main interface between Safaricom and its customers.",
        "Answering customer calls, listening to concerns and solving problems.",
        "Accepting customer feedback on products and services.",
        "Providing network suggestions and company service appreciation reports."
      ]
    }
  ];

  return (
    <section id="experience" className="py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-6xl font-bold font-display tracking-tight mb-20 uppercase">Experience</h2>
        
        <div className="space-y-12">
          {jobs.map((job, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-neutral-100 group hover:shadow-xl transition-shadow duration-500"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                   <h3 className="text-3xl font-bold tracking-tight mb-1">{job.role}</h3>
                   <div className="flex items-center gap-3 text-neutral-400 font-bold uppercase text-[10px] tracking-widest">
                      <span className="text-black">{job.company}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                   </div>
                </div>
                <div className="px-5 py-2 bg-neutral-50 rounded-full border border-neutral-100 text-sm font-bold text-neutral-500 whitespace-nowrap">
                   {job.period}
                </div>
              </div>
              <ul className="grid md:grid-cols-2 gap-x-12 gap-y-4">
                {job.details.map((detail, j) => (
                  <li key={j} className="flex gap-4 text-neutral-600 leading-relaxed font-medium text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2 flex-shrink-0"></div>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const domains = [
    {
      title: "Web Development",
      icon: <Code2 className="w-8 h-8" />,
      items: ["HTML & CSS", "JavaScript", "PHP", "Web Programming"]
    },
    {
      title: "Data Management",
      icon: <Terminal className="w-8 h-8" />,
      items: ["MySQL", "Relational Databases", "Data Analysis", "Reporting"]
    },
    {
      title: "Languages",
      icon: <Palette className="w-8 h-8" />,
      items: ["Amharic (Native)", "English (Professional)", "Technical Writing"]
    },
    {
      title: "Engineering",
      icon: <Cpu className="w-8 h-8" />,
      items: ["Problem Solving", "Systems Design", "Technical Research", "Critical Thinking"]
    }
  ];

  return (
    <section id="skills" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-6xl font-bold font-display tracking-tight mb-24 max-w-xl pr-12 border-r-4 border-black inline-block uppercase">
          Skills
        </h2>
        
        <div className="grid md:grid-cols-4 gap-12">
          {domains.map((domain, i) => (
            <div key={i} className="space-y-6 group">
              <div className="w-16 h-16 rounded-3xl bg-neutral-50 border border-neutral-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                {domain.icon}
              </div>
              <h3 className="text-xl font-bold uppercase tracking-tight">{domain.title}</h3>
              <ul className="space-y-3">
                {domain.items.map((item, j) => (
                  <li key={j} className="flex items-center gap-3 text-neutral-500 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-200"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 bg-neutral-900 text-white rounded-t-[4rem]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-24">
          <div>
            <h2 className="text-7xl font-bold font-display italic tracking-tight mb-8 uppercase">Let's Connect</h2>
            <p className="text-xl text-neutral-400 mb-12 max-w-md font-medium leading-relaxed">
              Open for collaboration, researching new projects, or sharing technological insights.
            </p>
            
            <div className="space-y-8 text-neutral-200">
              <a href="mailto:antenehtsegaye19@gmail.com" className="flex items-center gap-5 group">
                 <div className="w-14 h-14 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <Mail className="w-6 h-6" />
                 </div>
                 <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-neutral-500 mb-1">Email Me</p>
                    <p className="text-lg font-bold border-b border-transparent group-hover:border-white transition-all">antenehtsegaye19@gmail.com</p>
                 </div>
              </a>

              <a href="tel:+251960296606" className="flex items-center gap-5 group">
                 <div className="w-14 h-14 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <Phone className="w-6 h-6" />
                 </div>
                 <div>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-neutral-500 mb-1">Call Me</p>
                    <p className="text-lg font-bold border-b border-transparent group-hover:border-white transition-all">+251 960296606</p>
                 </div>
              </a>
              
              <div className="flex gap-4 pt-8">
                 <a 
                   href="https://www.linkedin.com/in/anteneh-tsegaye-ab9275287" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="p-4 rounded-2xl bg-neutral-800 hover:bg-neutral-700 transition-colors"
                 >
                    <Linkedin />
                 </a>
                 <a href="#" className="p-4 rounded-2xl bg-neutral-800 hover:bg-neutral-700 transition-colors">
                    <Github />
                 </a>
              </div>
            </div>
          </div>

          <div className="p-10 bg-neutral-800/50 rounded-3xl border border-neutral-700 backdrop-blur-xl">
             {formState === 'success' ? (
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 className="h-full flex flex-col items-center justify-center text-center space-y-4 py-20"
               >
                 <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center text-green-500 mb-4">
                    <Mail className="w-10 h-10" />
                 </div>
                 <h3 className="text-2xl font-bold">Message Sent!</h3>
                 <p className="text-neutral-400">Thanks for reaching out. I'll get back to you soon.</p>
                 <button 
                  onClick={() => setFormState('idle')}
                  className="text-white hover:underline uppercase text-xs tracking-widest font-bold"
                 >
                   Send another
                 </button>
               </motion.div>
             ) : (
               <form onSubmit={handleSubmit} className="space-y-6">
                 <div className="space-y-2">
                   <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-500">Your Full Name</label>
                   <input 
                    required
                    type="text" 
                    placeholder="Enter your name" 
                    className="w-full bg-neutral-700/50 border border-neutral-600 rounded-xl px-4 py-3 outline-none focus:border-white transition-all"
                   />
                 </div>
                 <div className="space-y-2">
                   <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-500">Email Address</label>
                   <input 
                    required
                    type="email" 
                    placeholder="name@example.com"
                    className="w-full bg-neutral-700/50 border border-neutral-600 rounded-xl px-4 py-3 outline-none focus:border-white transition-all"
                   />
                 </div>
                 <div className="space-y-2">
                   <label className="text-[10px] uppercase tracking-widest font-bold text-neutral-500">Message / Inquiry</label>
                   <textarea 
                    required
                    rows={4}
                    placeholder="How can I help you today?"
                    className="w-full bg-neutral-700/50 border border-neutral-600 rounded-xl px-4 py-3 outline-none focus:border-white transition-all resize-none"
                   />
                 </div>
                 <button 
                  disabled={formState === 'submitting'}
                  type="submit" 
                  className="w-full bg-white text-black font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-neutral-200 transition-all flex items-center justify-center gap-2"
                 >
                   {formState === 'submitting' ? 'Sending...' : (
                     <>
                        Send Message
                        <ArrowRight className="w-5 h-5" />
                     </>
                   )}
                 </button>
               </form>
             )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-neutral-900 border-t border-neutral-800 text-neutral-500">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-sm">© 2026 Anteneh Tsegaye. All rights reserved.</p>
        <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold">
           <a href="#hero" className="hover:text-white transition-colors">Home</a>
           <a href="#about" className="hover:text-white transition-colors">About</a>
           <a href="#experience" className="hover:text-white transition-colors">Experience</a>
           <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <main className="font-sans text-neutral-900 selection:bg-black selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
