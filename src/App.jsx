import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, ExternalLink, Linkedin, Mail, Sparkles, Code2, Figma, Terminal, Instagram, FileText, Database, Smartphone, Globe, Box, Layers, Zap } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const galleryRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (currentPage !== 'home') return;
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
    };
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [currentPage]);

  // Infinite scroll logic
  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery || isDragging) return;

    let animationFrameId;
    let scrollSpeed = 1;

    const animate = () => {
      if (gallery && !isDragging) {
        gallery.scrollLeft += scrollSpeed;
        const maxScroll = gallery.scrollWidth / 3;
        if (gallery.scrollLeft >= maxScroll) {
          gallery.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isDragging]);

  const scrollTo = (id) => {
    setCurrentPage('home');
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    setIsMenuOpen(false);
  };

  const featuredProjects = [
    { 
      id: 'blockr',
      name: "Blockr", 
      tagline: "Time-Blocking & Productivity", 
      description: "Structure your day with time blocks, track progress, and stay accountable with visual dashboards and goal tracking.", 
      fullDescription: "Blockr is a comprehensive time-blocking and task-scheduling app designed to help you structure your day effectively. Set tasks, assign them to specific time blocks, create goal lists with timelines, and monitor your daily activity with intuitive visual dashboards. Built with Flutter for smooth cross-platform performance.",
      image: "/bllogo.png", 
      color: "from-purple-500 to-pink-500",
      type: "mobile",
      link: "https://play.google.com/store/apps/details?id=com.orelithdev.blockr"
    },
    { 
      id: 'locknote',
      name: "Lock-Note", 
      tagline: "Secure Password Vault", 
      description: "Save passwords, login credentials, and generate strong passwords in a simple, secure vault.", 
      fullDescription: "Lock-Note is your personal password manager and secure vault. Store all your passwords, login credentials, and sensitive information in one encrypted place. Features include strong password generation, secure storage, and easy retrieval—all with a clean, minimal interface.",
      image: "/locknote_logo.png", 
      color: "from-green-500 to-emerald-500",
      type: "mobile",
      link: "https://play.google.com/store/apps/details?id=com.orelithdev.locknoteapp"
    },
    { 
      id: 'yqueue',
      name: "Y-Queue", 
      tagline: "Food Delivery & Kitchen SaaS", 
      description: "Next-gen platform for virtual kitchens combining delivery with tools for inventory, payments, and growth.", 
      fullDescription: "Y-Queue is a comprehensive platform for virtual kitchens and restaurants. It combines a seamless delivery experience with powerful backend tools for inventory management, payment processing, and business growth analytics. Over 25,000 meals delivered and 55+ restaurants onboarded since 2023.",
      image: "/yqueue.png", 
      color: "from-orange-500 to-yellow-500",
      type: "web",
      link: "https://www.y-queue.com"
    }
  ];

  const allProjects = [
    ...featuredProjects,
    { 
      id: 'deadlineheat',
      name: "DeadlineHeat", 
      tagline: "Visual Countdown Timers", 
      description: "Color-changing countdown timers that create visual urgency as deadlines approach.", 
      fullDescription: "DeadlineHeat transforms how you perceive deadlines. Watch your countdown timer change colors as time runs out—creating visual urgency that keeps you aware, focused, and intentional about your time. Perfect for students, professionals, and anyone who wants to make deadlines feel real.",
      image: "/deadlineheat.png", 
      color: "from-orange-500 to-red-500",
      type: "mobile",
      link: "https://play.google.com/store/apps/details?id=com.blockrlabs.deaadlineheat"
    },
    { 
      id: 'blockrlab',
      name: "Blockr Lab Website", 
      tagline: "Product Studio Site", 
      description: "Multi-page website showcasing Blockr Labs' suite of productivity tools.", 
      fullDescription: "The official website for Blockr Labs—a creative workspace where we build simple, powerful tools designed to help people stay organized, productive, and focused.",
      image: "/blockrlab.png", 
      color: "from-purple-500 to-pink-500",
      type: "website",
      link: "https://www.blockrlab.xyz"
    },
    { 
      id: 'orelithdev',
      name: "Orelith Dev Website", 
      tagline: "Development Agency Site", 
      description: "Full-service development agency delivering websites, mobile apps, and digital solutions.", 
      fullDescription: "The official website for Orelith Development showcasing our services, portfolio, and expertise in building digital products for businesses worldwide.",
      image: "/orelithdev.png", 
      color: "from-blue-500 to-cyan-500",
      type: "web",
      link: "https://www.orelithdev.xyz"
    },
    { 
      id: 'mindnest',
      name: "MindNest", 
      tagline: "AI Study and community learning platform", 
      description: "Mindnest powers the full learning lifecycle, using AI to help students, educators, and institutions close performance gaps and unlock world-class education at scale", 
      fullDescription: "Students often struggle with traditional study tools that lack personalization and motivation, leading to reduced engagement and ineffective learning. MindnestAI leverages AI to deliver personalized study recommendations, spaced repetition, and motivational prompts. Users have reported enhanced focus and improved retention, transforming study routines into tailored and productive experiences.",
      image: "/mindnest.png", 
      color: "from-purple-500 to-green-500",
      type: "mobile app, web app",
      link: "https://www.usemindnest.xyz"
    },
    {
      id: 'locknote-landing',
      name: "Lock-Note Landing Page", 
      tagline: "Product Landing Page", 
      description: "High-converting landing page with modern animations and responsive design.", 
      fullDescription: "A beautifully designed landing page for Lock-Note featuring modern animations, responsive design, and conversion-optimized layout.",
      image: "/locknote.png", 
      color: "from-green-500 to-teal-500",
      type: "web",
      link: "https://lock-note-three.vercel.app/"
    },
    {
      id: 'Vote Secure',
      name: "Vote Secure", 
      tagline: "Secure Online Voting & Polling System", 
      description: "A full-stack fraud-proof voting platform with anonymous and secured modes, real-time results, and zero running cost.", 
      fullDescription: "VoteSecure is a production-grade online voting and polling platform I built to eliminate electoral fraud while keeping things simple, fast, and completely free to run.",
      image: "/votesecure.png", 
      color: "from-cyan-500 to-blue-500",
      type: "web app",
      link: "https://voting-system-frontend-three.vercel.app/"
    },
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

  const galleryImages = [
    '/1st_image.jpg',
    '/2nd_image.jpg',
    '/3rd_image.jpg',
    '/4th_image.jpg',
    '/5th_image.jpg',
    '/6th_image.jpeg',
    '/7th_image.jpeg',
  ];

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - galleryRef.current.offsetLeft);
    setScrollLeft(galleryRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - galleryRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    galleryRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - galleryRef.current.offsetLeft);
    setScrollLeft(galleryRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - galleryRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    galleryRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

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

  // COMPONENT DEFINITIONS - MOVED BEFORE RENDER LOGIC
  const AnimatedBackground = () => (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2563eb]/5 via-transparent to-[#2563eb]/5" />
      <div className="absolute w-96 h-96 bg-[#2563eb]/10 rounded-full blur-3xl transition-all duration-300 ease-out" style={{ left: mousePosition.x - 192, top: mousePosition.y - 192 }} />
    </div>
  );

  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          <span className="text-2xl font-bold text-[#2563eb]">EN</span>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className={`transition-all duration-300 relative group ${activeSection === item.id ? 'text-[#2563eb]' : 'text-gray-400 hover:text-white'}`}>
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#2563eb] transition-opacity duration-300 ${activeSection === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
              </button>
            ))}
            <a href="#resume-link" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
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
        </div>
      )}
    </nav>
  );

  const ProjectDetailPage = ({ project }) => {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <button onClick={() => { setSelectedProject(null); setCurrentPage('home'); window.scrollTo(0, 0); }} className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
            <ArrowRight className="w-5 h-5 rotate-180" /> Back to Home
          </button>
          
          <div className="relative mb-12 rounded-3xl overflow-hidden border border-white/10 bg-white/5">
            <img src={project.image} alt={project.name} className="w-full h-auto object-contain" />
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-5xl font-black mb-3">{project.name}</h1>
              <p className="text-xl text-[#2563eb] font-semibold mb-6">{project.tagline}</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">About This Project</h2>
              <p className="text-gray-400 leading-relaxed text-lg">{project.fullDescription}</p>
            </div>

            <div className="flex gap-4">
              {project.type === 'mobile' ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#2563eb] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-[#2563eb]/50 transition-all duration-300 flex items-center justify-center gap-2">
                  View App <ExternalLink className="w-5 h-5" />
                </a>
              ) : (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#2563eb] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-[#2563eb]/50 transition-all duration-300 flex items-center justify-center gap-2">
                  Visit Website <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const AllProjectsPage = () => {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <button onClick={() => { setCurrentPage('home'); window.scrollTo(0, 0); }} className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
            <ArrowRight className="w-5 h-5 rotate-180" /> Back to Home
          </button>

          <div className="text-center mb-20">
            <h1 className="text-5xl font-black mb-6">All <span className="text-[#2563eb]">Projects</span></h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">A complete showcase of my work from mobile apps to web platforms</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, i) => (
              <div key={i} onClick={() => { setSelectedProject(project); setCurrentPage('project'); window.scrollTo(0, 0); }} className="group cursor-pointer relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-[#2563eb]/50 transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-56 overflow-hidden">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                  <p className="text-sm text-[#2563eb] font-semibold mb-3">{project.tagline}</p>
                  <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex items-center gap-2 text-white font-semibold group-hover:text-[#2563eb] transition-colors">
                    {project.type === 'mobile' ? 'View App' : 'Visit Website'} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // CONDITIONAL RENDERING - NOW AFTER ALL COMPONENT DEFINITIONS
  if (currentPage === 'projects') {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden" style={{ fontFamily: "'Urbanist', sans-serif" }}>
        <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <AnimatedBackground />
        <Navigation />
        <AllProjectsPage />
      </div>
    );
  }

  if (currentPage === 'project' && selectedProject) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden" style={{ fontFamily: "'Urbanist', sans-serif" }}>
        <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <AnimatedBackground />
        <Navigation />
        <ProjectDetailPage project={selectedProject} />
      </div>
    );
  }

  // MAIN HOME PAGE RENDER
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden" style={{ fontFamily: "'Urbanist', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      
      <AnimatedBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2 animate-pulse">
            <Sparkles className="w-4 h-4 text-[#2563eb]" />
            <span className="text-sm text-gray-300">Available for hire</span>
          </div>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="block text-white">Emmanuel</span>
            <span className="block text-[#2563eb]">Nnanna</span>
          </h1>
          <p className="text-2xl sm:text-3xl text-gray-400 mb-4 font-light">Flutter Developer & Product Engineer</p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">Building digital products and experiences that solve real problems through simplicity, clarity, and thoughtful engineering.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <a href="https://www.blockrlab.xyz" target="_blank" rel="noopener noreferrer" className="group bg-[#2563eb] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-[#2563eb]/50 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105">
              Blockr Labs <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://www.orelithdev.xyz" target="_blank" rel="noopener noreferrer" className="bg-white/5 backdrop-blur-sm border border-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              Orelith Dev <ArrowRight className="w-5 h-5" />
            </a>
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
            <div className="absolute -inset-4 bg-[#2563eb] rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <img src="/my_profile.jpg" alt="Emmanuel Nnanna" className="w-full aspect-square object-cover transform group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
          <div>
            <span className="text-[#2563eb] text-sm font-semibold uppercase tracking-wider">About Me</span>
            <h2 className="text-5xl font-black mt-2 mb-6 leading-tight">Building <span className="text-[#2563eb]">Simple, Useful</span> Technology</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>I'm Emmanuel Nnanna, a product engineer and founder building digital tools that help people stay organized, focused, and in control of their goals. I've led and completed 10+ real-world software projects from mobile apps to full web platforms with a focus on simple interfaces, practical workflows, and products people actually use.</p>
              <p>I currently run <span className="text-[#2563eb] font-semibold">Blockr Labs</span>, where I create independent productivity products like Blockr, Lock-Note, Flash Save, and Deadline Heat. I also founded <span className="text-[#2563eb] font-semibold">Orelith Development</span>, a software agency that builds custom websites and applications for businesses and founders.</p>
              <p>I specialize in Flutter mobile development, web app development, product engineering, and building systems & productivity tools. I love turning concepts into real, functional products that people actually want to use.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="overflow-x-scroll scrollbar-hide" 
          ref={galleryRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ 
            cursor: isDragging ? 'grabbing' : 'grab',
            scrollBehavior: 'auto' 
          }}
        >
          <div className="flex space-x-6 py-8">
            {[...galleryImages, ...galleryImages, ...galleryImages].map((img, i) => (
              <div key={i} className="flex-shrink-0 w-80 h-64 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                <img 
                  src={img} 
                  alt={`Gallery ${i + 1}`} 
                  className="w-full h-full object-cover object-center bg-black/20 pointer-events-none" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#2563eb] text-sm font-semibold uppercase tracking-wider">Featured Projects</span>
            <h2 className="text-5xl font-black mt-4 mb-6">Featured <span className="text-[#2563eb]">Work</span></h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Showcasing my best products and solutions</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((p, i) => (
              <div key={i} onClick={() => { setSelectedProject(p); setCurrentPage('project'); window.scrollTo(0, 0); }} className="group cursor-pointer relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-[#2563eb]/50 transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-56 overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{p.name}</h3>
                  <p className="text-sm text-[#2563eb] font-semibold mb-3">{p.tagline}</p>
                  <p className="text-gray-400 mb-6 leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button onClick={() => { setCurrentPage('projects'); window.scrollTo(0, 0); }} className="inline-flex items-center gap-2 bg-[#2563eb] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-[#2563eb]/50 transition-all duration-300 transform hover:scale-105">
              View All Projects <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-32 px-4 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-[#2563eb] text-sm font-semibold uppercase tracking-wider">Career Journey</span>
            <h2 className="text-5xl font-black mt-4 mb-6">Work <span className="text-[#2563eb]">Experience</span></h2>
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
            <h2 className="text-5xl font-black mt-4 mb-6">Tech <span className="text-[#2563eb]">Stack</span></h2>
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
          <div className="bg-gradient-to-br from-[#2563eb]/20 to-[#2563eb]/10 backdrop-blur-xl border border-white/10 rounded-3xl p-12 md:p-20">
            <h2 className="text-5xl font-black mb-6">Let's Build <span className="text-[#2563eb]">Together</span></h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">Whether you need a product built, want to collaborate, or just want to chat I'm all ears.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="mailto:your-email@example.com" className="group bg-[#2563eb] text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:shadow-[#2563eb]/50 transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105">
                <Mail className="w-5 h-5" /> Email Me
              </a>
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
              <a href="https://x.com/officialemnn" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-[#2563eb]/50 transition-all duration-300 transform hover:scale-110">
                <XIcon />
              </a>
              <a href="https://www.instagram.com/officialemnn" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:border-[#2563eb]/50 transition-all duration-300 transform hover:scale-110">
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
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;