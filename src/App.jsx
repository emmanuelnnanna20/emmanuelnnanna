import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, ExternalLink, Linkedin, Mail, Sparkles, Code2, Figma, Terminal, Instagram, FileText, Database, Smartphone, Globe, Box, Layers, Zap, Layout } from 'lucide-react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

const ThreadsIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.332-3.023.88-.73 2.088-1.146 3.398-1.172 1.07-.02 2.074.166 2.992.493-.054-1.19-.318-2.108-.847-2.728-.608-.713-1.553-1.078-2.81-1.085h-.025c-1.017.007-1.972.332-2.69.916l-1.313-1.607c1.063-.866 2.47-1.33 3.978-1.33h.036c3.138.02 5.028 1.88 5.18 5.096.036.104.07.836.036 1.448.899.498 1.67 1.15 2.27 1.928.876 1.135 1.305 2.603 1.198 4.127-.168 2.382-1.282 4.317-3.13 5.442-1.528.93-3.479 1.402-5.796 1.402zm-.523-8.877c-.947.022-1.77.243-2.313.624-.476.334-.724.778-.698 1.249.053.96.964 1.508 2.278 1.437 1.058-.057 1.873-.456 2.426-1.187.478-.632.765-1.46.857-2.476-.78-.253-1.636-.382-2.543-.362z" />
  </svg>
);

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const ScrollProgress = React.forwardRef((props, ref) => {
  const barRef = React.useRef(null);
  const textRef = React.useRef(null);

  React.useImperativeHandle(ref, () => ({
    update: (progress) => {
      if (barRef.current) barRef.current.style.height = `${progress}%`;
      if (textRef.current) textRef.current.textContent = `${Math.round(progress)}%`;
    }
  }));

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-[60] hidden lg:flex flex-col items-center gap-4">
      <div className="w-[2px] h-32 bg-white/5 relative rounded-full overflow-hidden border border-white/5">
        <div
          ref={barRef}
          className="absolute top-0 left-0 w-full bg-emerald-500 shadow-[0_0_10px_#10b981]"
          style={{ height: '0%' }}
        />
      </div>
      <span ref={textRef} className="text-[10px] font-bold text-emerald-500/50 vertical-text tracking-widest uppercase py-2">
        0%
      </span>
    </div>
  );
});

const AnimatedBackground = ({ mousePosition }) => (
  <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
    <div
      className="absolute w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full transition-transform duration-700 ease-out"
      style={{ transform: `translate(${mousePosition.x - 250}px, ${mousePosition.y - 250}px)` }}
    />
  </div>
);

const Navigation = ({ navItems, activeSection, scrollTo, isMenuOpen, setIsMenuOpen }) => {
  return (
    <>
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out px-4 hidden lg:flex justify-center w-full max-w-fit">
        <div className="relative flex items-center gap-2 p-2 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.1)] hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-all duration-500 overflow-hidden max-w-7xl px-3">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-transparent to-emerald-500/10 opacity-50" />
          <div className="flex items-center transition-all duration-500 w-auto opacity-100 px-2">
            <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">EN</span>
            <div className="w-[1px] h-4 bg-white/10 mx-3" />
          </div>
          <div className="flex items-center gap-1 transition-all duration-500 opacity-100 scale-100">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group ${activeSection === item.id ? 'text-emerald-400 bg-emerald-500/10' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
              >
                {item.label}
                {activeSection === item.id && <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-400 rounded-full shadow-[0_0_10px_#10b981]" />}
              </button>
            ))}
            <div className="w-[1px] h-4 bg-white/10 mx-2" />
            <a href="https://drive.google.com/file/d/19yVtCb10O6bC4Ar1dQMqNtqpvWJl08Te/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-emerald-400 transition-colors">
              <FileText className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      <div className="fixed top-8 left-8 z-[70] lg:hidden">
        <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">EN</span>
      </div>

      <div className="fixed top-6 right-6 z-[70] lg:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="w-14 h-14 bg-black/60 backdrop-blur-2xl border border-white/10 rounded-2xl flex items-center justify-center text-emerald-500 shadow-2xl transition-all active:scale-90">
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div className={`fixed inset-0 z-[65] bg-black/98 backdrop-blur-3xl transition-all duration-500 lg:hidden overflow-y-auto ${isMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-10'}`}>
        <div className="min-h-full flex flex-col justify-center items-center p-8 py-16 space-y-4">
          <div className="flex flex-col items-center gap-2 mb-6">
            <span className="text-[10px] font-black tracking-[0.5em] text-emerald-500 uppercase">Architecture</span>
            <div className="w-8 h-[1px] bg-emerald-500/50" />
          </div>
          <div className="flex flex-col items-center gap-4">
            {navItems.map((item, index) => (
              <button key={item.id} onClick={() => { scrollTo(item.id); setIsMenuOpen(false); }} className="flex flex-col items-center group">
                <span className="text-[8px] font-mono text-emerald-500/50 mb-0.5">0{index + 1} //</span>
                <span className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors tracking-widest">{item.label}</span>
              </button>
            ))}
          </div>
          <div className="pt-8 flex flex-col items-center">
            <a href="https://drive.google.com/file/d/19yVtCb10O6bC4Ar1dQMqNtqpvWJl08Te/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-emerald-500 text-black rounded-xl font-bold text-[10px] uppercase tracking-widest shadow-[0_0_30px_rgba(16,185,129,0.3)] transition-transform active:scale-95">See Resume</a>
          </div>
        </div>
      </div>
    </>
  );
};

const ProjectDetailPage = ({ project, setSelectedProject, setCurrentPage }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isImageLoaded, setIsImageLoaded] = React.useState(false);
  if (!project) return null;

  const nextSlide = () => {
    setIsImageLoaded(false);
    setCurrentSlide((prev) => (prev + 1) % project.slides.length);
  };

  const prevSlide = () => {
    setIsImageLoaded(false);
    setCurrentSlide((prev) => (prev - 1 + project.slides.length) % project.slides.length);
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white relative overflow-hidden">

      {/* ═══════════════════════════════════════════════════ */}
      {/* SECTION 1: CINEMATIC HERO — Full-bleed image with overlay */}
      {/* ═══════════════════════════════════════════════════ */}
      <div className="relative w-full h-[70vh] sm:h-[80vh] overflow-hidden">
        {/* Hero Image */}
        <img
          src={project.slides[0]}
          alt={project.name}
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030303]/40 to-transparent" />
        <div className="absolute inset-0 bg-[#030303]/20" />

        {/* Back Button — Top Left */}
        <button
          onClick={() => { setSelectedProject(null); setCurrentPage('home'); window.scrollTo(0, 0); }}
          className="absolute top-8 left-6 sm:left-10 z-30 group flex items-center gap-2.5 px-5 py-3 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full text-gray-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-300"
        >
          <ArrowRight className="w-4 h-4 rotate-180 transition-transform group-hover:-translate-x-1" />
          <span className="text-[10px] font-black uppercase tracking-[0.25em]">Back</span>
        </button>

        {/* Hero Content — Bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-20 px-6 sm:px-10 lg:px-16 pb-12 sm:pb-16">
          <div className="max-w-6xl mx-auto">
            {/* Type Badge */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_12px_#10b981] animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-400">{project.type}</span>
              <div className="w-12 h-[1px] bg-emerald-500/30" />
              <span className="text-[10px] font-mono text-gray-500 uppercase">Live</span>
            </div>

            {/* Project Name */}
            <h1
              className="text-[42px] sm:text-[72px] lg:text-[96px] font-black tracking-tighter leading-[0.85] uppercase text-white select-none"
              style={{ fontFamily: "'Permanent Marker', cursive" }}
            >
              {project.name}
            </h1>

            {/* Tagline */}
            <p className="text-lg sm:text-xl text-gray-300 font-light max-w-2xl mt-4 leading-relaxed">
              {project.tagline}
            </p>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 text-black rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all hover:bg-emerald-400 hover:scale-105 active:scale-95 shadow-[0_15px_40px_rgba(16,185,129,0.25)] whitespace-nowrap"
              >
                Open Project
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              {project.techStack && (
                <div className="hidden sm:flex items-center gap-2">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>


      {/* ═══════════════════════════════════════════════════ */}
      {/* SECTION 2: BENTO GRID OVERVIEW */}
      {/* ═══════════════════════════════════════════════════ */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 -mt-1">
        {/* Ambient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-16 relative z-10">

          {/* Card: About — Spans 2 columns */}
          <div className="md:col-span-2 group relative bg-white/[0.03] backdrop-blur-md border border-white/[0.06] rounded-[2rem] p-8 sm:p-10 overflow-hidden hover:border-emerald-500/20 transition-all duration-500">
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/5 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-emerald-500" />
              </div>
              <h2 className="text-lg font-black uppercase tracking-widest text-emerald-500" style={{ fontFamily: "'Permanent Marker', cursive" }}>About</h2>
            </div>
            <p className="text-gray-400 leading-relaxed text-base sm:text-lg font-light">
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Card: Quick Meta */}
          <div className="group relative bg-white/[0.03] backdrop-blur-md border border-white/[0.06] rounded-[2rem] p-8 overflow-hidden hover:border-emerald-500/20 transition-all duration-500">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="space-y-6">
              <div>
                <span className="text-[9px] font-mono text-gray-600 uppercase tracking-widest">Architecture</span>
                <p className="text-white font-bold text-xl uppercase tracking-wider mt-1">{project.type}</p>
              </div>
              <div className="w-full h-[1px] bg-white/5" />
              <div>
                <span className="text-[9px] font-mono text-gray-600 uppercase tracking-widest">Status</span>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                  <p className="text-emerald-400 font-bold text-xl uppercase tracking-wider">Live</p>
                </div>
              </div>
              <div className="w-full h-[1px] bg-white/5" />
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="group/link flex items-center gap-2 text-emerald-500 font-bold text-xs uppercase tracking-[0.2em] transition-all hover:translate-x-1">
                Launch App <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Card: Performance */}
          <div className="group relative bg-white/[0.03] backdrop-blur-md border border-white/[0.06] rounded-[2rem] p-8 overflow-hidden hover:border-emerald-500/20 transition-all duration-500">
            <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
              <Zap className="w-6 h-6 text-emerald-500" />
            </div>
            <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Permanent Marker', cursive" }}>Performance</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Optimized for speed and fluid interactions, ensuring a seamless user experience across all devices.
            </p>
          </div>

          {/* Card: Experience */}
          <div className="group relative bg-white/[0.03] backdrop-blur-md border border-white/[0.06] rounded-[2rem] p-8 overflow-hidden hover:border-blue-500/20 transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
              <Layout className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Permanent Marker', cursive" }}>Experience</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Crafted UI hierarchy and intuitive flow to minimize cognitive load and maximize utility.
            </p>
          </div>

          {/* Card: Tech Stack */}
          <div className="group relative bg-white/[0.03] backdrop-blur-md border border-white/[0.06] rounded-[2rem] p-8 overflow-hidden hover:border-emerald-500/20 transition-all duration-500">
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-emerald-500" />
              </div>
              <h3 className="text-lg font-black uppercase tracking-widest text-emerald-500" style={{ fontFamily: "'Permanent Marker', cursive" }}>Stack</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack?.map((tech) => (
                <span key={tech} className="px-4 py-2 bg-white/5 rounded-xl text-[10px] font-bold text-gray-300 border border-white/[0.08] hover:border-emerald-500/40 hover:text-emerald-400 transition-all duration-300 uppercase tracking-widest cursor-default">
                  {tech}
                </span>
              )) || ['React', 'Tailwind', 'PostgreSQL'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-white/5 rounded-xl text-[10px] font-bold text-gray-300 border border-white/[0.08] uppercase tracking-widest">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>


      {/* ═══════════════════════════════════════════════════ */}
      {/* SECTION 3: VISUAL GALLERY */}
      {/* ═══════════════════════════════════════════════════ */}
      {project.slides?.length > 1 && (
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 pb-16">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-10 h-[1px] bg-emerald-500/30" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500">Gallery</span>
            <div className="flex-1 h-[1px] bg-white/5" />
            <span className="text-[10px] font-mono text-gray-600">{currentSlide + 1} / {project.slides.length}</span>
          </div>

          <div className="relative group">
            {/* Glow */}
            <div className="absolute -inset-3 bg-emerald-500/10 rounded-[2.5rem] blur-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-700" />

            {/* Image Frame */}
            <div className="relative rounded-[2rem] overflow-hidden border border-white/[0.08] bg-black/50 shadow-2xl">
              <div className="aspect-[16/9] overflow-hidden relative">
                <img
                  src={project.slides[currentSlide]}
                  alt={`${project.name} - Screenshot ${currentSlide + 1}`}
                  className={`w-full h-full object-cover transition-all duration-700 ${isImageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
                  onLoad={() => setIsImageLoaded(true)}
                />
                {/* Subtle vignette */}
                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.3)] pointer-events-none" />
              </div>

              {/* Controls */}
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 sm:px-6 pointer-events-none">
                <button onClick={prevSlide} className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-2xl border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-emerald-500 hover:text-black hover:border-emerald-500 transition-all duration-300 pointer-events-auto shadow-2xl">
                  <ArrowRight className="w-5 h-5 rotate-180" />
                </button>
                <button onClick={nextSlide} className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-2xl border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-emerald-500 hover:text-black hover:border-emerald-500 transition-all duration-300 pointer-events-auto shadow-2xl">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {project.slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setIsImageLoaded(false); setCurrentSlide(i); }}
                  className={`rounded-full transition-all duration-500 ${currentSlide === i ? 'w-8 h-2 bg-emerald-500 shadow-[0_0_12px_#10b981]' : 'w-2 h-2 bg-white/15 hover:bg-white/30'}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}


      {/* ═══════════════════════════════════════════════════ */}
      {/* FOOTER WATERMARK */}
      {/* ═══════════════════════════════════════════════════ */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="py-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[9px] font-black tracking-[0.5em] text-white/10 uppercase">EN_PORTFOLIO_2026</span>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-gray-600 hover:text-emerald-500 transition-colors">
            <span className="text-[9px] font-bold uppercase tracking-[0.3em]">Visit Live</span>
            <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

const AllProjectsPage = ({ allProjects, setCurrentPage, setSelectedProject }) => {
  return (
    <div className="min-h-screen bg-[#030303] text-white relative overflow-hidden">
      {/* Background Grid + Ambient */}
      <div className="absolute inset-0 bg-grid opacity-[0.04] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-emerald-500/8 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-28 pb-24">
        {/* Back Button */}
        <button
          onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }}
          className="group flex items-center gap-2.5 px-5 py-3 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-full text-gray-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-300 mb-16"
        >
          <ArrowRight className="w-4 h-4 rotate-180 transition-transform group-hover:-translate-x-1" />
          <span className="text-[10px] font-black uppercase tracking-[0.25em]">Back</span>
        </button>

        {/* Page Header */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_12px_#10b981] animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-500">Archive</span>
            <div className="w-16 h-[1px] bg-emerald-500/20" />
            <span className="text-[10px] font-mono text-gray-600">{allProjects.length} Projects</span>
          </div>
          <h1
            className="text-[50px] sm:text-[80px] lg:text-[110px] font-black tracking-tighter leading-[0.85] uppercase text-white select-none"
            style={{ fontFamily: "'Permanent Marker', cursive" }}
          >
            All <span className="text-gradient-emerald">Projects</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl font-light mt-6 leading-relaxed">
            A curated collection of shipped products, creative experiments, and engineering solutions.
          </p>
        </div>

        {/* Projects List — Magazine Layout */}
        <div className="space-y-6">
          {allProjects.map((project, i) => (
            <div
              key={i}
              onClick={() => { setSelectedProject(project); setCurrentPage('project'); window.scrollTo(0, 0); }}
              className={`group cursor-pointer relative rounded-[2rem] overflow-hidden border border-white/[0.06] hover:border-emerald-500/30 transition-all duration-700 ${
                i === 0 ? 'h-[500px] sm:h-[600px]' : 'h-[300px] sm:h-[400px]'
              }`}
            >
              {/* Full-bleed Image */}
              <img
                src={project.image}
                alt={project.name}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#030303]/30 to-transparent" />

              {/* Floating Index Number */}
              <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-10">
                <span
                  className="text-[60px] sm:text-[80px] font-black text-white/[0.04] group-hover:text-emerald-500/10 leading-none select-none transition-colors duration-700"
                  style={{ fontFamily: "'Permanent Marker', cursive" }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Type Badge */}
              <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-10">
                <div className="px-4 py-2 bg-black/40 backdrop-blur-2xl border border-white/10 rounded-full flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981]" />
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-300">{project.type}</span>
                </div>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 z-10">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
                  <div className="space-y-3">
                    {/* Tech Pills */}
                    {project.techStack && (
                      <div className="flex flex-wrap gap-2 mb-1">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span key={tech} className="px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-[8px] font-bold text-gray-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                    <h2
                      className={`font-black tracking-tighter uppercase text-white group-hover:text-emerald-400 transition-colors duration-500 leading-[0.9] ${
                        i === 0 ? 'text-4xl sm:text-5xl lg:text-6xl' : 'text-3xl sm:text-4xl'
                      }`}
                      style={{ fontFamily: "'Permanent Marker', cursive" }}
                    >
                      {project.name}
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base font-light max-w-xl line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-3 text-emerald-500 font-bold text-[10px] uppercase tracking-[0.25em] whitespace-nowrap group-hover:translate-x-2 transition-transform duration-500 shrink-0">
                    <span>View Project</span>
                    <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-black transition-all duration-500">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-white/[0.04] rounded-tl-[2rem] pointer-events-none group-hover:border-emerald-500/20 transition-colors duration-700" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-white/[0.04] rounded-br-[2rem] pointer-events-none group-hover:border-emerald-500/20 transition-colors duration-700" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const lenisRef = useRef(null);
  const scrollProgressRef = useRef(null);

  useEffect(() => {
    // Smoooth Scrolling (Lenis)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      // Update scroll progress directly in the animation frame for instant response
      const currentScrollPos = window.pageYOffset || window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (currentScrollPos / totalHeight) * 100 : 0;
      if (scrollProgressRef.current) {
        scrollProgressRef.current.update(progress);
      }
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentPage !== 'home') return;

      // Dynamic sections tracking
      const sections = ['home', 'about', 'work', 'experience', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);

      setPrevScrollPos(currentScrollPos);
    };
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      lenis.destroy();
    };
  }, [currentPage]);

  const scrollTo = (id) => {
    setCurrentPage('home');
    const target = document.getElementById(id);
    if (target && lenisRef.current) {
      lenisRef.current.scrollTo(target, {
        offset: -40,
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };

  const featuredProjects = [
    {
      id: 'levelup',
      name: "Level Up",
      tagline: "A gamified habit tracker that turns your daily routines into epic quests.",
      description: "A gamified habit tracker that turns your daily routines into epic quests.",
      fullDescription: "Level Up is a Solo Leveling inspired habit tracker built with Flutter. Users create daily quests, earn XP, build streaks, and progress through 500 levels. Features include a quest system, XP tracking, streak monitoring, detailed statistics, and a dark premium UI. All data stays local no account required.",
      image: "/Project Banner/LevelUp.png",
      slides: ["/Project Banner/LevelUp.png", "/Project Banner/LevelUp-screens.png"],
      color: "from-purple-500 to-pink-500",
      type: "mobile app",
      link: "https://play.google.com/store/apps/details?id=com.orelith.sololeveling",
      techStack: ["Flutter", "Figma", "Firebase"]
    },
    {
      id: 'learnitin',
      name: "Learnitin AI",
      tagline: "AI-powered learning platform that builds personalized curriculums for any subject instantly.",
      description: "Learnitin — AI-powered learning platform that builds personalized curriculums for any subject instantly.",
      fullDescription: "Learnitin is an AI-powered mobile learning platform that generates complete, personalized curriculums for any subject in seconds. Users learn through structured text lessons, podcast-style audio mode, and built-in quizzes. Built with Flutter, live on Google Play, and monetized through a freemium subscription model with a 14-day free premium trial.",
      image: "/Project Banner/Learnitin.png",
      slides: ["/Project Banner/Learnitin.png"],
      color: "from-emerald-500 to-teal-500",
      type: "mobile app",
      link: "https://www.learnitin.online",
      techStack: ["Flutter", "FastAPI", "Google Gemini", "Google Cloud"]
    },
    {
      id: 'deadlineheat',
      name: "Deadline Heat",
      tagline: "Stay Ahead of Deadlines",
      description: "A heat-based deadline tracker that shows urgency through color before it's too late.",
      fullDescription: "Deadline Heat is an Android app that tracks your deadlines using a visual heat system. Tasks are color-coded red, yellow, and green based on how close they are. With live countdowns, smart reminders, and auto-sorting by urgency, you always know exactly what needs your attention first.",
      image: "/Project Banner/deadline.png",
      slides: ["/Project Banner/deadline.png", "/Project Banner/deadline-screens.png"],
      color: "from-orange-500 to-red-500",
      type: "mobile app",
      link: "https://play.google.com/store/apps/details?id=com.blockrlabs.deaadlineheat",
      techStack: ["Flutter", "Figma"]
    }
  ];

  const allProjects = [
    ...featuredProjects,
    {
      id: 'gritloop',
      name: "Gritloop",
      tagline: "Habits and Discipline",
      description: "GritLoop is a discipline tracker that helps you build habits and break bad ones.",
      fullDescription: "GritLoop is an Android habit tracking app built around two-way accountability track what you're building and what you're quitting. With streaks, heatmaps, multiple evaluation types, and an Anti-Todo system, GritLoop gives users the structure and data to stay consistent and measure real progress over time.",
      image: "/Project Banner/Gritloop.png",
      slides: ["/Project Banner/Gritloop.png", "/Project Banner/gritloop-screens.png"],
      color: "from-green-500 to-emerald-500",
      type: "mobile app",
      link: "https://play.google.com/store/apps/details?id=com.blockrlabs.gritloop",
      techStack: ["Flutter"]
    },
    {
      id: 'lifeplanner',
      name: "Life Planner",
      tagline: "A goal and task management app built for real daily use.",
      description: "Life Planner; a goal and task management app built for real daily use.",
      fullDescription: "Life Planner is an Android productivity app that helps users manage goals, tasks, and daily routines in one place. It features timeline-based task lists, recurring daily tasks, streak tracking, and a clean dashboard built for professionals, students, and anyone serious about staying organized and consistent.",
      image: "/Project Banner/lifeplanner.png",
      slides: ["/Project Banner/lifeplanner.png", "/Project Banner/lifeplanner-screens.png"],
      color: "from-blue-500 to-indigo-500",
      type: "mobile app",
      link: "https://play.google.com/store/apps/details?id=com.orelithdev.blockr",
      techStack: ["Flutter"]
    }
  ];

  const experiences = [
    { role: "Co-Founder and Mobile App Developer", company: "Orelith Development", period: "Sep 2025 - Present", description: "Development agency building websites, apps, and software solutions for businesses worldwide.", color: "from-emerald-500 to-teal-500" },
    { role: "Co-Founder", company: "Blockr Labs", period: "Oct 2025 - Present", description: "Blockr Labs is a 3d visuals and Innovation Studio.", color: "from-purple-500 to-pink-500" },
    { role: "Data Engineer & Analyst", company: "Zidepeople", period: "Apr 2025 - Oct 2025", description: "Designed data pipelines, performed analytics, and delivered insights for strategic business decisions.", color: "from-green-500 to-emerald-500" },
    { role: "Data & Software Engineer", company: "Yqueue", period: "Sep 2024 - Apr 2025", description: "Developed data solutions and software systems to optimize operations and improve efficiency.", color: "from-orange-500 to-red-500" }
  ];

  const skills = [
    { name: "React", icon: <Layers className="w-7 h-7" />, color: "from-emerald-400 to-teal-500" },
    { name: "Next.js", icon: <Code2 className="w-7 h-7" />, color: "from-gray-400 to-gray-600" },
    { name: "Flutter", icon: <Smartphone className="w-7 h-7" />, color: "from-emerald-500 to-emerald-700" },
    { name: "Node.js", icon: <Terminal className="w-7 h-7" />, color: "from-green-400 to-emerald-500" },
    { name: "FastAPI", icon: <Zap className="w-7 h-7" />, color: "from-teal-400 to-cyan-500" },
    { name: "UI/UX", icon: <Figma className="w-7 h-7" />, color: "from-purple-400 to-pink-500" },
    { name: "Database", icon: <Database className="w-7 h-7" />, color: "from-orange-400 to-red-500" },
    { name: "Web Dev", icon: <Globe className="w-7 h-7" />, color: "from-indigo-400 to-purple-500" },
    { name: "Product", icon: <Box className="w-7 h-7" />, color: "from-yellow-400 to-orange-500" }
  ];


  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];


  // MAIN COMPONENTS REMOVED

  if (currentPage === 'projects') {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden" style={{ fontFamily: "'Urbanist', sans-serif" }}>
        <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700;800;900&family=Permanent+Marker&family=Caveat:wght@400;700&display=swap" rel="stylesheet" />
        <AnimatedBackground mousePosition={mousePosition} />
        <ScrollProgress ref={scrollProgressRef} />
        <Navigation navItems={navItems} activeSection={activeSection} scrollTo={scrollTo} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <AllProjectsPage allProjects={allProjects} setCurrentPage={setCurrentPage} setSelectedProject={setSelectedProject} />
      </div>
    );
  }

  if (currentPage === 'project' && selectedProject) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden" style={{ fontFamily: "'Urbanist', sans-serif" }}>
        <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700;800;900&family=Permanent+Marker&family=Caveat:wght@400;700&display=swap" rel="stylesheet" />
        <AnimatedBackground mousePosition={mousePosition} />
        <ScrollProgress ref={scrollProgressRef} />
        <Navigation navItems={navItems} activeSection={activeSection} scrollTo={scrollTo} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <ProjectDetailPage project={selectedProject} setSelectedProject={setSelectedProject} setCurrentPage={setCurrentPage} />
      </div>
    );
  }

  // MAIN HOME PAGE RENDER
  return (
    <div className="min-h-screen bg-[#030303] text-white overflow-hidden bg-grid bg-fixed" style={{ fontFamily: "'Urbanist', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700;800;900&family=Permanent+Marker&family=Caveat:wght@400;700&display=swap" rel="stylesheet" />

      <ScrollProgress ref={scrollProgressRef} />
      <AnimatedBackground mousePosition={mousePosition} />
      <Navigation navItems={navItems} activeSection={activeSection} scrollTo={scrollTo} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* Scrapbook Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-32 overflow-hidden">
        {/* Spotlight Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto w-full flex flex-col items-center justify-center px-4">

          {/* Central PORTFOLIO Art */}
          <div className="relative mb-20 lg:mt-24">
            <h1 className="text-[80px] sm:text-[180px] lg:text-[200px] font-black tracking-tighter text-white opacity-90 select-none text-center leading-[0.8]" style={{ fontFamily: "'Permanent Marker', cursive" }}>
              PORT<br className="lg:hidden" />FOLIO
            </h1>
            
            {/* Sketchy Face Illustrations - Hidden on tiny screens, reshaped on mobile */}
            <div className="absolute -right-6 lg:-right-12 -bottom-10 lg:-bottom-10 w-20 lg:w-32 h-20 lg:h-32 opacity-80 pointer-events-none transform rotate-12 hidden sm:block">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" className="text-gray-500">
                <path d="M30,40 C30,40 40,30 50,30 C60,30 70,40 70,40 S80,50 80,70 S60,90 50,90 S20,80 20,60 S30,40 30,40" />
                <path d="M40,55 Q45,50 50,55" />
                <path d="M40,65 Q45,70 50,65" />
                <circle cx="42" cy="58" r="1.5" fill="currentColor" />
                <circle cx="58" cy="58" r="1.5" fill="currentColor" />
                <path d="M40,25 Q50,20 60,25" />
              </svg>
            </div>
          </div>

          {/* STICKY NOTES NAVIGATION/DATA - Responsive Stacking */}
          <div className="relative w-full max-w-lg lg:max-w-none flex flex-wrap justify-center gap-6 lg:gap-0">
            {/* Note 1: Mobile Architecture */}
            <div className="lg:absolute lg:top-4 lg:left-8 transform -rotate-6 transition-all duration-300 hover:scale-105 group cursor-default z-20">
              <div className="w-40 sm:w-48 bg-yellow-400/10 backdrop-blur-md border border-yellow-400/20 p-4 sm:p-5 shadow-2xl relative">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-600 shadow-inner z-10" />
                <h3 className="text-yellow-400 font-bold text-base sm:text-lg mb-2" style={{ fontFamily: "'Permanent Marker', cursive" }}>Mobile Dev</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-tight" style={{ fontFamily: "'Caveat', cursive" }}>Architecting high-performance Flutter & native-ready mobile ecosystems.</p>
              </div>
            </div>

            {/* Note 4: The Experience */}
            <div className="lg:absolute lg:bottom-56 lg:left-12 transform rotate-12 transition-all duration-300 hover:scale-105 group cursor-default z-20">
              <div className="w-40 sm:w-56 bg-white/5 backdrop-blur-md border border-white/10 p-4 sm:p-6 shadow-2xl relative">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gray-400 shadow-inner z-10" />
                <h3 className="text-white font-bold text-base sm:text-lg mb-2" style={{ fontFamily: "'Permanent Marker', cursive" }}>Experience</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-tight" style={{ fontFamily: "'Caveat', cursive" }}>Co-Founder at Blockr Labs. 10+ real-world products shipped.</p>
              </div>
            </div>

            {/* Note 2: Cloud Systems */}
            <div className="lg:absolute lg:top-8 lg:right-4 transform rotate-6 transition-all duration-300 hover:scale-105 group cursor-default z-20">
              <div className="w-40 sm:w-52 bg-blue-400/10 backdrop-blur-md border border-blue-400/20 p-4 sm:p-6 shadow-2xl relative">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-600 shadow-inner z-10" />
                <h3 className="text-blue-400 font-bold text-base sm:text-lg mb-2" style={{ fontFamily: "'Permanent Marker', cursive" }}>Cloud Logic</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-tight" style={{ fontFamily: "'Caveat', cursive" }}>Building high-availability FastAPI networks & secure Node.js infrastructures.</p>
              </div>
            </div>

            {/* Note 3: Product Founder */}
            <div className="lg:absolute lg:bottom-40 lg:right-10 transform -rotate-3 transition-all duration-300 hover:scale-105 group cursor-default z-20">
              <div className="w-40 sm:w-48 bg-emerald-400/10 backdrop-blur-md border border-emerald-400/20 p-4 sm:p-5 shadow-2xl relative">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-emerald-600 shadow-inner z-10" />
                <h3 className="text-emerald-400 font-bold text-base sm:text-lg mb-2" style={{ fontFamily: "'Permanent Marker', cursive" }}>Founder</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-tight" style={{ fontFamily: "'Caveat', cursive" }}>Engineering startups from concept to scale since 2021.</p>
              </div>
            </div>
          </div>

          {/* Desktop-only hand-drawn elements */}
          <div className="absolute hidden lg:block opacity-30 select-none pointer-events-none">
            <div className="absolute -bottom-10 left-64 w-32 h-32 -rotate-12 translate-x-10">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-500">
                <path d="M10,10 Q50,0 90,40" strokeDasharray="4,4" />
                <path d="M85,30 L90,40 L80,45" />
              </svg>
              <span className="absolute bottom-0 right-0 text-[10px] uppercase font-bold text-emerald-500" style={{ fontFamily: "'Caveat', cursive" }}>About Me</span>
            </div>
            <div className="absolute top-20 right-64 w-32 h-32 rotate-[120deg]">
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-500">
                <path d="M10,10 Q50,0 90,40" strokeDasharray="4,4" />
                <path d="M85,30 L90,40 L80,45" />
              </svg>
              <span className="absolute bottom-0 right-0 text-[10px] uppercase font-bold text-blue-500 -rotate-[120deg]" style={{ fontFamily: "'Caveat', cursive" }}>My Work</span>
            </div>
          </div>

          {/* RESUME BUTTON */}
          <div className="mt-12 lg:mt-16 group relative z-30">
            <div className="absolute -inset-1 bg-emerald-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
            <a
              href="https://drive.google.com/file/d/19yVtCb10O6bC4Ar1dQMqNtqpvWJl08Te/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-8 lg:px-12 py-4 lg:py-5 bg-[#030303] border border-white/10 rounded-2xl flex items-center gap-4 hover:border-emerald-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-2xl"
            >
              <span className="text-white font-black tracking-widest text-sm lg:text-lg" style={{ fontFamily: "'Urbanist', sans-serif" }}>SEE RESUME</span>
              <FileText className="w-5 h-5 lg:w-6 lg:h-6 text-emerald-500" />
            </a>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20 hidden lg:flex">
          <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase" style={{ fontFamily: "'Caveat', cursive" }}>Scroll down to see the magic</span>
          <div className="w-px h-12 bg-gradient-to-b from-emerald-500 to-transparent" />
        </div>

      </section>

      {/* About Section: Minimalist Slate */}
      <section id="about" className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Minimalist Slate Profile */}
            <div className="relative group max-w-md mx-auto lg:mx-0">
              {/* Subtle organic connection: A 'Pinned' identifier */}
              <div className="absolute -top-6 -right-6 z-20 transform rotate-12 transition-transform group-hover:rotate-0 duration-500">
                <div className="bg-emerald-500 text-black px-6 py-2 rounded-lg font-black text-xs uppercase tracking-widest shadow-2xl relative">
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-red-600 shadow-inner" /> {/* Pin */}
                  Founder
                </div>
              </div>

              <div className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-2xl transition-all duration-700 group-hover:border-emerald-500/30">
                <img
                  src="/favicon.png"
                  alt="Emmanuel Nnanna"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 transform group-hover:scale-105"
                />
                {/* Subtle emerald overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>

              {/* Decorative Corner Accents (Minimalist) */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-emerald-500/20 rounded-bl-[40px] pointer-events-none" />
            </div>

            {/* Right: Narrative Bio */}
            <div className="flex flex-col space-y-8 items-center lg:items-start text-center lg:text-left">
              <div className="space-y-4 w-full">
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="w-10 h-[1px] bg-emerald-500/30" />
                  <span className="text-[10px] uppercase font-bold tracking-[0.4em] text-emerald-500">About Me</span>
                </div>
                <h2 className="text-4xl sm:text-6xl font-black text-white leading-tight" style={{ fontFamily: "'Permanent Marker', cursive" }}>
                  Design. <span className="text-gradient-emerald">Code.</span> Experience.
                </h2>
              </div>

              <div className="space-y-6 text-xl text-gray-400 font-light leading-relaxed">
                <p>
                  Hi I’m <span className="text-white font-semibold">Emmanuel Nnanna</span>, a Computer Scientist and passionate app developer who enjoys turning ideas into real, working products.
                </p>
                <p>
                  I’ve built over <span className="text-emerald-400 font-medium">20+ apps</span>, including projects like <span className="text-white font-medium">LevelUp</span> and <span className="text-white font-medium">Learnitin AI</span>, all centered around improving productivity and solving everyday problems through technology.
                </p>
                <p>
                  I’m deeply interested in creating tools that people can actually use apps that simplify tasks, improve focus, and make life more efficient.
                </p>
                <p>
                  Beyond functionality, I care a lot about design. I enjoy crafting clean, visually appealing interfaces and bringing ideas to life in a way that feels both <span className="text-white">simple and intuitive</span>. Building apps isn’t just about code it’s about solving problems and creating experiences that matter.
                </p>
              </div>

              {/* Minimal Stats Grid */}
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5 w-full">
                <div className="flex flex-col items-center lg:items-start">
                  <div className="text-4xl font-black text-white italic">20+</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-emerald-500/50 mt-1">Apps Shipped</div>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <div className="text-4xl font-black text-white italic">4+</div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-emerald-500/50 mt-1">Years Engineering</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Featured Work Section */}
      <section id="work" className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-emerald-500 text-sm font-bold uppercase tracking-[0.2em]">Portfolio</span>
            <h2 className="text-6xl font-black mt-4 mb-8 tracking-tighter" style={{ fontFamily: "'Permanent Marker', cursive" }}>Featured <span className="text-gradient-emerald">Work</span></h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">Showcasing my best products and engineering solutions</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16 px-4 sm:px-0">
            {featuredProjects.map((p, i) => (
              <div 
                key={i} 
                onClick={() => { setSelectedProject(p); setCurrentPage('project'); window.scrollTo(0, 0); }} 
                className="group cursor-pointer relative bg-[#030303] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-emerald-500/40 transition-all duration-700 transform hover:-translate-y-3 shadow-2xl"
              >
                {/* ID Tag (Scrapbook Link) */}
                <div className="absolute top-6 left-6 z-20 transform -rotate-12 transition-transform group-hover:rotate-0 duration-500">
                  <div className="bg-emerald-500 text-black px-4 py-1.5 rounded-lg font-black text-[10px] uppercase tracking-widest shadow-xl relative" style={{ fontFamily: "'Urbanist', sans-serif" }}>
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-red-600 shadow-inner" />
                    ID_0{i+1}
                  </div>
                </div>

                <div className="relative h-72 overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-80" />
                </div>
                
                <div className="p-10 relative">
                  <div className="flex flex-col gap-1 mb-6">
                    <h3 className="text-3xl font-black text-white group-hover:text-emerald-400 transition-colors uppercase tracking-tight">{p.name}</h3>
                  </div>
                  
                  <div className="flex gap-2 mb-6">
                    <span className="px-3 py-1 bg-white/5 rounded-full text-[8px] font-bold text-gray-500 uppercase tracking-widest border border-white/5">{p.type}</span>
                    <span className="px-3 py-1 bg-white/5 rounded-full text-[8px] font-bold text-gray-500 uppercase tracking-widest border border-white/5">System_Active</span>
                  </div>

                  <p className="text-gray-400 mb-10 leading-relaxed line-clamp-2 text-sm font-light">{p.description}</p>
                  
                  <div className="flex items-center gap-3 text-white font-bold text-[10px] uppercase tracking-[0.2em] transform transition-all group-hover:translate-x-2">
                    Open Project <ArrowRight className="w-4 h-4 text-emerald-500" />
                  </div>
                </div>

                {/* Decorative Schematic Corner */}
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r border-b border-emerald-500/10 rounded-br-[2.5rem] pointer-events-none" />
              </div>
            ))}
          </div>
          <div className="text-center">
            <button onClick={() => { setCurrentPage('projects'); window.scrollTo(0, 0); }} className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 active:scale-95">
              Explore All Projects <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-32 px-4 bg-white/[0.01]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-emerald-500 text-sm font-bold uppercase tracking-[0.2em]">Career</span>
            <h2 className="text-6xl font-black mt-4 mb-8 tracking-tighter" style={{ fontFamily: "'Permanent Marker', cursive" }}>Work <span className="text-gradient-emerald">Experience</span></h2>
          </div>
          <div className="space-y-4">
            {experiences.map((exp, i) => (
              <div key={i} className="group relative bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-10 hover:border-emerald-500/50 transition-all duration-500 glow-card overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-2 group-hover:text-emerald-400 transition-colors tracking-tight">{exp.role}</h3>
                    <p className="text-emerald-500 font-bold text-lg uppercase tracking-widest text-sm">{exp.company}</p>
                  </div>
                  <span className="mt-4 md:mt-0 inline-block bg-white/5 border border-white/10 px-6 py-2 rounded-full text-xs font-bold tracking-widest text-gray-400 group-hover:text-white transition-colors">{exp.period}</span>
                </div>
                <p className="text-gray-400 leading-relaxed text-lg max-w-4xl">{exp.description}</p>

                {/* Accent Line */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-500/10 transition-all" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-emerald-500 text-sm font-bold uppercase tracking-[0.2em]">Expertise</span>
            <h2 className="text-6xl font-black mt-4 mb-8 tracking-tighter" style={{ fontFamily: "'Permanent Marker', cursive" }}>Tech <span className="text-gradient-emerald">Stack</span></h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
            {skills.map((s, i) => (
              <div key={i} className="group relative aspect-square bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:border-emerald-500/50 transition-all duration-500 flex flex-col items-center justify-center glow-card">
                <div className="text-gray-400 group-hover:text-emerald-400 group-hover:scale-110 transition-all duration-500 mb-4">{s.icon}</div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors text-center">{s.name}</span>
                <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[3rem] p-16 md:p-24 overflow-hidden glow-emerald">
            <div className="relative z-10">
              <h2 className="text-6xl font-black mb-8 tracking-tighter" style={{ fontFamily: "'Permanent Marker', cursive" }}>Let's Build <span className="text-gradient-emerald">Together</span></h2>
              <p className="text-xl text-gray-400 mb-14 max-w-2xl mx-auto font-light leading-relaxed">Whether you need a full-scale product built, technical consultation, or a creative partner, I'm ready to bring your vision to life.</p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <a
                  href="mailto:emmanuelnnanna.en@gmail.com"
                  className="group bg-emerald-500 text-black px-6 sm:px-12 py-4 sm:py-5 rounded-2xl font-bold hover:bg-emerald-400 transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105 shadow-[0_0_30px_rgba(16,185,129,0.3)]"
                >
                  <Mail className="w-5 h-5" /> 
                  <span className="text-sm sm:text-base whitespace-nowrap">Start a Conversation</span>
                </a>
                <a
                  href="https://wa.me/2349121394690"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white/[0.05] border border-white/10 text-white px-6 sm:px-12 py-4 sm:py-5 rounded-2xl font-bold hover:border-[#25D366]/50 hover:bg-[#25D366]/10 transition-all duration-300 flex items-center justify-center gap-3 transform hover:scale-105 overflow-hidden"
                >
                  {/* WhatsApp glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#25D366]/0 via-[#25D366]/5 to-[#25D366]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <svg className="w-5 h-5 text-[#25D366] relative z-10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span className="text-sm sm:text-base whitespace-nowrap relative z-10 group-hover:text-[#25D366] transition-colors">WhatsApp Me</span>
                </a>
              </div>
            </div>

            {/* Visual Decorative Element */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-20 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-12">
            <div className="flex justify-center gap-4">
              {[
                { icon: <Linkedin size={20} />, link: "https://www.linkedin.com/in/emmanuelnnanna" },
                { icon: <XIcon />, link: "https://x.com/emmanuelxnnanna" },
                { icon: <Instagram size={20} />, link: "https://www.instagram.com/emmanuelnnanna.dev/" },
                { icon: <ThreadsIcon />, link: "https://www.threads.com/@emmanuelnnanna.dev" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-gray-400 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-500 transform hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="text-center space-y-2">
              <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.3em]">© 2026 Emmanuel Nnanna</p>
              <p className="text-gray-600 text-[10px] uppercase tracking-widest font-medium">Engineered for excellence.</p>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes scan {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translateY(100%); opacity: 0; }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-orbit {
          animation: orbit 20s linear infinite;
        }
        @keyframes orbit-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-orbit-reverse {
          animation: orbit-reverse 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;