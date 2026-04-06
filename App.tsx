/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Linkedin, 
  Mail, 
  MapPin, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  Award, 
  Briefcase, 
  Code, 
  GraduationCap, 
  Download,
  Trophy,
  Zap,
  Menu,
  X,
  Github,
  ArrowUpRight
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { AnimatedBackground } from './components/AnimatedBackground';
import { RESUME_DATA } from './constants';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Splash = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    const timer = setTimeout(onComplete, 2200);
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Background Grid Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Pulsing Glow Effect */}
      <motion.div 
        className="absolute w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px]"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="text-5xl md:text-8xl font-black tracking-tighter text-white text-center uppercase leading-none">
            DIVYANSHU<span className="text-emerald-500">.</span><br />
            <span className="text-white/10">SHARMA</span>
          </div>
          
          {/* Scanning Line Effect */}
          <motion.div 
            className="absolute inset-x-0 h-[2px] bg-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.5)]"
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        <motion.div 
          className="mt-12 flex flex-col items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex flex-col items-center gap-3">
            <div className="h-[1px] w-64 bg-white/5 relative overflow-hidden">
              <motion.div 
                className="absolute inset-y-0 left-0 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
            <div className="flex justify-between w-64 text-[8px] font-mono text-white/30 uppercase tracking-widest">
              <span>System_Load</span>
              <span className="text-emerald-500">{progress}%</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <motion.p 
              className="text-[9px] font-mono tracking-[0.5em] text-emerald-500/80 uppercase"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Establishing Secure Connection
            </motion.p>
            
            <motion.p 
              className="text-sm font-light tracking-wide text-white/60 max-w-[320px] text-center leading-relaxed italic"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              "Where logic meets creativity to build the future."
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-8 left-8 font-mono text-[9px] text-white/20 hidden md:flex flex-col gap-1">
        <div>CORE_INIT: OK</div>
        <div>MEM_ALLOC: 2048MB</div>
        <div>THREAD_POOL: ACTIVE</div>
      </div>
      <div className="absolute bottom-8 right-8 font-mono text-[9px] text-white/20 hidden md:flex flex-col items-end gap-1">
        <div>LATENCY: 4ms</div>
        <div>ENCRYPTION: AES-256</div>
        <div>STATUS: OPTIMAL</div>
      </div>
      
      <div className="absolute bottom-8 left-8 font-mono text-[9px] text-white/20 hidden md:block">
        © 2024 DIVYANSHU_SHARMA // PORTFOLIO_v3.0
      </div>
    </motion.div>
  );
};

const SectionHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-16">
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      viewport={{ once: true }}
      className="h-px bg-white/10 mb-8"
    />
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none">
        {title}
      </h2>
      {subtitle && (
        <p className="text-emerald-500 font-mono text-sm uppercase tracking-widest mb-2">
          {subtitle}
        </p>
      )}
    </div>
  </div>
);

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'experience', 'projects', 'skills', 'education'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -200 && rect.top <= 400;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500/30 font-sans">
      <AnimatePresence>
        {loading && <Splash onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <AnimatedBackground />
          
          {/* Minimal Navigation */}
          <nav className="fixed top-0 left-0 w-full z-40 bg-black/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={() => scrollTo('hero')}
                className="text-xl font-black tracking-tighter cursor-pointer"
              >
                DIVYANSHU<span className="text-emerald-500">.</span>
              </motion.div>

              <div className="hidden md:flex items-center gap-12">
                {['Experience', 'Projects', 'Skills', 'Education'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollTo(item.toLowerCase())}
                    className={cn(
                      "text-[11px] font-bold uppercase tracking-[0.2em] transition-colors hover:text-emerald-400",
                      activeSection === item.toLowerCase() ? "text-emerald-400" : "text-white/40"
                    )}
                  >
                    {item}
                  </button>
                ))}
                <a 
                  href={`mailto:${RESUME_DATA.basics.email}`}
                  className="text-[11px] font-bold uppercase tracking-[0.2em] px-6 py-3 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all"
                >
                  Contact
                </a>
              </div>

              <button className="md:hidden p-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed inset-0 z-50 bg-black flex flex-col justify-center px-12 md:hidden"
              >
                <button className="absolute top-8 right-8 p-4" onClick={() => setIsMenuOpen(false)}>
                  <X className="w-8 h-8" />
                </button>
                <div className="flex flex-col gap-8">
                  {['Experience', 'Projects', 'Skills', 'Education'].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollTo(item.toLowerCase())}
                      className="text-5xl font-black text-left uppercase tracking-tighter"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <main className="max-w-[1400px] mx-auto px-6 md:px-12 pt-48 pb-32">
            {/* Updot-Inspired Hero */}
            <section id="hero" className="min-h-[70vh] flex flex-col justify-center mb-48">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-12 bg-emerald-500" />
                  <span className="text-emerald-500 font-mono text-xs uppercase tracking-[0.3em]">
                    BACKEND ENGINEER & AI EXPLORER
                  </span>
                </div>
                
                <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter leading-[0.85] uppercase mb-12">
                  Building <br />
                  <span className="text-white/20">Scalable</span> <br />
                  Systems<span className="text-emerald-500">.</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
                  <div className="md:col-span-7">
                    <p className="text-2xl md:text-3xl text-white/60 leading-tight tracking-tight">
                      {RESUME_DATA.basics.summary}
                    </p>
                  </div>
                  <div className="md:col-span-5 flex flex-col gap-6">
                    <div className="flex gap-4">
                      <a 
                        href="https://drive.google.com/file/d/1Sj3_VbEfOPHFdSBzUBOM8BY9bXRGS9mh/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-8 py-5 bg-emerald-500 text-black font-black uppercase text-xs tracking-widest hover:bg-white transition-all text-center flex items-center justify-center gap-3 group"
                      >
                        <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        Download Resume
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Experience Section - Reverted to Standard Layout */}
            <section id="experience" className="mb-48 scroll-mt-32">
              <SectionHeader title="Experience" subtitle="Professional Journey" />
              <div className="space-y-12">
                {RESUME_DATA.experience.map((exp, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative pl-8 border-l border-white/10 hover:border-emerald-500 transition-colors group"
                  >
                    <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                        <p className="text-emerald-500 font-medium">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-mono text-white/40">{exp.dates}</span>
                        {exp.client && (
                          <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest mt-1">Client: {exp.client}</p>
                        )}
                      </div>
                    </div>
                    <ul className="space-y-3 mb-6">
                      {exp.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="text-white/60 leading-relaxed flex gap-3">
                          <span className="text-emerald-500 mt-1.5">•</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    {exp.stack && (
                      <div className="flex flex-wrap gap-2">
                        {exp.stack.map(tech => (
                          <span key={tech} className="text-[9px] font-bold uppercase tracking-widest text-emerald-400/80 bg-emerald-500/5 border border-emerald-500/20 px-2 py-1 rounded-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Projects - Standard Card Grid */}
            <section id="projects" className="mb-48 scroll-mt-32">
              <SectionHeader title="Projects" subtitle="Personal Ventures" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {RESUME_DATA.projects.map((project, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-emerald-500/50 transition-all group"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500">
                        <Code className="w-6 h-6" />
                      </div>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-emerald-500 transition-colors">
                        <ArrowUpRight className="w-6 h-6" />
                      </a>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-white/50 mb-6 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map(tech => (
                        <span key={tech} className="text-[10px] font-bold uppercase tracking-widest text-emerald-500/70 bg-emerald-500/5 px-3 py-1 rounded-full border border-emerald-500/10">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Skills & Certs - Standard Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-48">
              <section id="skills" className="scroll-mt-32">
                <SectionHeader title="Skills" subtitle="Technical Stack" />
                <div className="space-y-8">
                  {Object.entries(RESUME_DATA.skills).map(([category, skills]) => (
                    <div key={category}>
                      <h4 className="text-xs font-bold text-emerald-500 uppercase tracking-[0.2em] mb-4">{category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.map(skill => (
                          <span key={skill} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white/70 hover:text-white hover:border-emerald-500/30 transition-all">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="certifications" className="scroll-mt-32">
                <SectionHeader title="Certifications" subtitle="Verified" />
                <div className="space-y-4">
                  {RESUME_DATA.certifications.map((cert, idx) => (
                    <motion.a 
                      key={idx}
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/30 transition-all group"
                    >
                      <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                        <Award className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-white group-hover:text-emerald-400 transition-colors">{cert.name}</p>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-emerald-400 transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </section>
            </div>

            {/* Education Section - Standard */}
            <section id="education" className="mb-48 scroll-mt-32">
              <SectionHeader title="Education" subtitle="Academic Background" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {RESUME_DATA.education.map((edu, idx) => (
                  <div key={idx} className="p-8 rounded-2xl bg-white/[0.03] border border-white/10">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                        <p className="text-emerald-500 text-sm">{edu.degree}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Footer - High Impact */}
            <footer className="pt-32 border-t border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mb-32">
                <div>
                  <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none mb-12">
                    Let's <br />
                    <span className="text-emerald-500">Connect.</span>
                  </h2>
                  <div className="flex flex-col gap-6">
                    <a href={`mailto:${RESUME_DATA.basics.email}`} className="flex items-center gap-4 text-2xl font-bold hover:text-emerald-500 transition-colors group">
                      <div className="p-3 rounded-xl bg-white/5 group-hover:bg-emerald-500/10 transition-colors">
                        <Mail className="w-6 h-6" />
                      </div>
                      {RESUME_DATA.basics.email}
                    </a>
                    <a href={RESUME_DATA.basics.links[0].url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-2xl font-bold hover:text-emerald-500 transition-colors group">
                      <div className="p-3 rounded-xl bg-white/5 group-hover:bg-emerald-500/10 transition-colors">
                        <Linkedin className="w-6 h-6" />
                      </div>
                      LinkedIn Profile
                    </a>
                    <a href="https://github.com/divyanshu29" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-2xl font-bold hover:text-emerald-500 transition-colors group">
                      <div className="p-3 rounded-xl bg-white/5 group-hover:bg-emerald-500/10 transition-colors">
                        <Github className="w-6 h-6" />
                      </div>
                      GitHub Profile
                    </a>
                  </div>
                </div>
                <div className="flex flex-col justify-end">
                  <p className="text-2xl italic text-white/40 leading-tight font-serif mb-8">
                    "The best way to predict the future is to build it with AI. I am constantly learning, building, and evolving in the world of LLMs to create systems that don't just process data, but understand it."
                  </p>
                  <div className="text-[10px] font-mono tracking-[0.3em] text-white/20 uppercase">
                    Divyanshu Sharma © 2026 / All Rights Reserved
                  </div>
                </div>
              </div>
            </footer>
          </main>
        </>
      )}
    </div>
  );
}
