import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ExternalLink, Linkedin, Mail, Sparkles, Zap, Layers, Database, Smartphone, Globe, Code2, Figma, Terminal, Box, Instagram, FileText } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'work', 'experience', 'skills', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

   const blockrProducts = [
    { name: "Blockr", tagline: "Productivity & Time-Blocking", description: "Plan your day in time blocks and stay focused with distraction-free productivity.", image: "/bllogo.png", color: "from-purple-500 to-pink-500", link: "#blockr-link" },
    { name: "DeadlineHeat", tagline: "Deadlines That Feel Real", description: "Color-coded countdown timers that create urgency and eliminate procrastination.", image: "/deadlineheat.png", color: "from-orange-500 to-red-500", link: "#deadlineheat-link" },
    { name: "LockNote", tagline: "Secure Password Manager", description: "Keep all your passwords and credentials safe in one encrypted place.", image: "/locknote_logo.png", color: "from-green-500 to-emerald-500", link: "#locknote-link" },
    { name: "FlashSave", tagline: "Smart Clipboard Manager", description: "Automatically detects when you copy text and saves your clipboard history for later.", image: "/flash_save_logo.png", color: "from-indigo-500 to-purple-500", link: "#flashsave-link" }
  ];

  const orelithProjects = [
    { name: "Orelith Dev Agency", description: "A full-service development agency delivering websites, mobile apps, and digital solutions with clean design and scalable technology.", image: "/orelithdev.png", link: "https://www.orelithdev.xyz" },
    { name: "Lock-Note Landing Page", description: "High-converting landing page with modern animations and responsive design.", image: "/locknote.png", link: "https://lock-note-three.vercel.app/" },
    { name: "Ares Real Estate site", description: "A modern real estate website showcasing property listings with a sleek, responsive design and smooth user experience.", image: "/real-estate.png", link: "https://ares-estate.vercel.app/" },
    { name: "Blockr Lab Multi-page Website", description: "A creative workspace where we build simple, powerful tools designed to help people stay organized, productive, and focused.", image: "/blockrlab.png", link: "https://www.blockrlab.xyz" }
  ];

  const experiences = [
    { role: "Founder & Lead Product Engineer", company: "Blockr Labs", period: "Oct 2025 - Present", description: "Building productivity tools that help people focus, build discipline, and take control of their lives.", color: "from-purple-500 to-pink-500" },
    { role: "Co-Founder & Software Engineer", company: "Orelith Dev", period: "Sep 2025 - Present", description: "Development agency building websites, apps, and software solutions for businesses worldwide.", color: "from-blue-500 to-cyan-500" },
    { role: "Data Engineer & Analyst", company: "Zidepeople", period: "Apr 2025 - Oct 2025", description: "Designed data pipelines, performed analytics, and delivered insights for strategic business decisions.", color: "from-green-500 to-emerald-500" },
    { role: "Data & Software Engineer", company: "Yqueue", period: "Sep 2024 - Apr 2025", description: "Developed data solutions and software systems to optimize operations and improve efficiency.", color: "from-orange-500 to-red-500" }
  ];

  const skills = [
    { name: "React", icon: <Layers className="w-7 h-7" />, color: "from-cyan-400 to-blue-500" },
    { name: "Next.js", icon: <Code2 className="w-7 h-7" />, color: "from-gray-400 to-gray-600" },
    { name: "Flutter", icon: <Smartphone className="w-7 h-7" />, color: "from-blue-400 to-cyan-500" },
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

  const ThreadsIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.332-3.023.88-.73 2.088-1.146 3.398-1.172 1.07-.02 2.074.166 2.992.493-.054-1.19-.318-2.108-.847-2.728-.608-.713-1.553-1.078-2.81-1.085h-.025c-1.017.007-1.972.332-2.69.916l-1.313-1.607c1.063-.866 2.47-1.33 3.978-1.33h.036c3.138.02 5.028 1.88 5.18 5.096.036.104.07.836.036 1.448.899.498 1.67 1.15 2.27 1.928.876 1.135 1.305 2.603 1.198 4.127-.168 2.382-1.282 4.317-3.13 5.442-1.528.93-3.479 1.402-5.796 1.402zm-.523-8.877c-.947.022-1.77.243-2.313.624-.476.334-.724.778-.698 1.249.053.96.964 1.508 2.278 1.437 1.058-.057 1.873-.456 2.426-1.187.478-.632.765-1.46.857-2.476-.78-.253-1.636-.382-2.543-.362z"/>
    </svg>
  );

  const XIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden" style={{ fontFamily: "'Urbanist', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb]/5 via-transparent to-purple-500/5" />
        <div className="absolute w-96 h-96 bg-[#2563eb]/10 rounded-full blur-3xl transition-all duration-300 ease-out" style={{ left: mousePosition.x - 192, top: mousePosition.y - 192 }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-5">
            <span className="text-2xl font-bold bg-gradient-to-r from-[#2563eb] to-purple-500 bg-clip-text text-transparent">EN</span>
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button key={item.id} onClick={() => scrollTo(item.id)} className={`transition-all duration-300 relative group ${activeSection === item.id ? 'text-[#2563eb]' : 'text-gray-400 hover:text-white'}`}>
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#2563eb] to-purple-500 transition-opacity duration-300 ${activeSection === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                </button>
              ))}
              <a href="#resume-google-drive-link" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <FileText className="w-4 h-4" /> Resume
              </a>
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-400">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-xl border-t border-white/5 px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="block w-full text-left px-4 py-3 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg">{item.label}</button>
            ))}
            <a href="#resume-google-drive-link" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-3 text-gray-400 hover:text-white">
              <FileText className="w-4 h-4" /> Resume
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2 animate-pulse">
            <Sparkles className="w-4 h-4 text-[#2563eb]" />
            <span className="text-sm text-gray-300">Available for hire</span>
          </div>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent block">Emmanuel</span>
            <span className="bg-gradient-to-r from-[#2563eb] via-purple-500 to-pink-500 bg-clip-text text-transparent block">Nnanna</span>
          </h1>
          <p className="text-2xl sm:text-3xl text-gray-400 mb-4 font-light">Product Engineer & Founder</p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">Building digital products that help people focus, grow, and take control of their lives.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <a href="https://www.blockrlab.xyz" target="_blank" rel="noopener noreferrer" className="group bg-gradient-to-r from-[#2563eb] to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-[#2563eb]/50 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105">
              Blockr Labs <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://www.orelithdev.xyz" target="_blank" rel="noopener noreferrer" className="bg-white/5 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              Orelith Dev <ArrowRight className="w-5 h-5" />
            </a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[{ label: "5+ Products", icon: <Box className="w-6 h-6" /> }, { label: "Full-Stack", icon: <Code2 className="w-6 h-6" /> }, { label: "UI/UX Design", icon: <Figma className="w-6 h-6" /> }, { label: "Mobile Apps", icon: <Smartphone className="w-6 h-6" /> }].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-[#2563eb]/20">
                <div className="flex flex-col items-center gap-2 text-[#2563eb]">
                  {item.icon}
                  <span className="text-sm font-medium text-gray-300">{item.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-[#2563eb] rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#2563eb] to-purple-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <img src="/my_profile.jpg" alt="Emmanuel Nnanna" className="w-full aspect-square object-cover transform group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
          <div>
            <span className="text-[#2563eb] text-sm font-semibold uppercase tracking-wider">About Me</span>
            <h2 className="text-5xl font-black mt-2 mb-6 leading-tight">Turning Struggle Into <span className="bg-gradient-to-r from-[#2563eb] to-purple-500 bg-clip-text text-transparent">Solutions</span></h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>I'm a Product Engineer and multi-product founder from Nigeria, obsessed with building digital tools that help people live better and focus deeper.</p>
              <p>My journey started from personal struggle with distraction and unhealthy habits. That transformation became the foundation for everything I build today.</p>
              <p>I founded <span className="text-[#2563eb] font-semibold">Blockr Labs</span> to create tools that help people build discipline, overcome addiction, and take charge of their lives just like I did.</p>
              <p>I also run <span className="text-purple-400 font-semibold">The Rwired Mind</span>, a community helping people break free from mental loops and patterns that hold them back.</p>
              <p className="text-xl font-semibold text-white pt-4">Mission: Help people regain focus, build discipline, and realize their full potential.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#2563eb] text-sm font-semibold uppercase tracking-wider">Blockr Labs</span>
            <h2 className="text-5xl font-black mt-4 mb-6">Tools for <span className="bg-gradient-to-r from-[#2563eb] to-purple-500 bg-clip-text text-transparent">Focus & Discipline</span></h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-4">Building products that help people take control of their lives</p>
            <a href="https://www.blockrlab.xyz" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#2563eb] font-semibold hover:gap-3 transition-all">
              Visit Blockr Labs <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {blockrProducts.map((p, i) => (
              <div key={i} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-[#2563eb]/50 transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-56 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
                  <p className="text-sm text-[#2563eb] font-semibold mb-3">{p.tagline}</p>
                  <p className="text-gray-400 mb-6 leading-relaxed">{p.description}</p>
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-white font-semibold flex items-center gap-2 group/btn hover:text-[#2563eb] transition-colors">
                    Learn More <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mb-20">
            <span className="text-[#2563eb] text-sm font-semibold uppercase tracking-wider">Orelith Dev</span>
            <h2 className="text-5xl font-black mt-4 mb-6">Client <span className="bg-gradient-to-r from-[#2563eb] to-purple-500 bg-clip-text text-transparent">Projects</span></h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-4">Building websites, apps, and software tools for businesses</p>
            <a href="https://www.orelithdev.xyz" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#2563eb] font-semibold hover:gap-3 transition-all">
              Visit Orelith Dev <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {orelithProjects.map((p, i) => (
              <div key={i} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-[#2563eb]/50 transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3">{p.name}</h3>
                  <p className="text-gray-400 mb-6">{p.description}</p>
                  <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-[#2563eb] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-32 px-4 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#2563eb] text-sm font-semibold uppercase tracking-wider">Career Journey</span>
            <h2 className="text-5xl font-black mt-4 mb-6">Work <span className="bg-gradient-to-r from-[#2563eb] to-purple-500 bg-clip-text text-transparent">Experience</span></h2>
          </div>
          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div key={i} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-[#2563eb]/50 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                    <p className="text-[#2563eb] font-semibold text-lg">{exp.company}</p>
                  </div>
                  <span className="mt-2 md:mt-0 inline-block bg-white/10 px-4 py-2 rounded-full text-sm font-medium text-gray-300">{exp.period}</span>
                </div>
                <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#2563eb] text-sm font-semibold uppercase tracking-wider">Expertise</span>
            <h2 className="text-5xl font-black mt-4 mb-6">Tech <span className="bg-gradient-to-r from-[#2563eb] to-purple-500 bg-clip-text text-transparent">Stack</span></h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
            {skills.map((s, i) => (
              <div key={i} className="group relative aspect-square bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:border-[#2563eb]/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#2563eb]/20 flex flex-col items-center justify-center">
                <div className="text-gray-400 group-hover:scale-110 transition-transform duration-300 mb-2">{s.icon}</div>
                <span className="text-xs font-semibold text-gray-400 group-hover:text-white transition-colors">{s.name}</span>
                <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#2563eb]/20 to-purple-500/20 backdrop-blur-xl border border-white/10 rounded-3xl p-12 md:p-20">
            <h2 className="text-5xl font-black mb-6">Let's Build <span className="bg-gradient-to-r from-[#2563eb] to-purple-500 bg-clip-text text-transparent">Together</span></h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">Whether you need a product built, want to collaborate, or just want to chat I'm all ears.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="mailto:your-email@example.com" className="group bg-gradient-to-r from-[#2563eb] to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-[#2563eb]/50 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105">
                <Mail className="w-5 h-5" /> Email Me
              </a>
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-8">
            <div className="flex justify-center gap-5">
              <a href="https://www.linkedin.com/in/emmanuelnnanna" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-[#2563eb]/50 transition-all duration-300 transform hover:scale-110">
                <Linkedin size={22} />
              </a>
              <a href="https://x.com/officialemnn?t=2b24wm14QW_m8nbe3o3tPg&s=09" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-[#2563eb]/50 transition-all duration-300 transform hover:scale-110">
                <XIcon />
              </a>
              <a href="https://www.instagram.com/officialemnn?igsh=dXQ4cDcxa2VoNHRk" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-[#2563eb]/50 transition-all duration-300 transform hover:scale-110">
                <Instagram size={22} />
              </a>
              <a href="https://www.threads.com/@officialemnn" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-[#2563eb]/50 transition-all duration-300 transform hover:scale-110">
                <ThreadsIcon />
              </a>
            </div>
            <p className="text-gray-500 text-sm">© 2025 Emmanuel Nnanna. Built with purpose and passion.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;