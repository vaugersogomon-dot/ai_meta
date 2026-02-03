
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import ModuleCard from './components/ModuleCard';
import { MODULES } from './constants';

const App: React.FC = () => {
  const [heroState, setHeroState] = useState(0); 
  const [isPriceVisible, setIsPriceVisible] = useState(false);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    
    const interval = setInterval(() => {
      setHeroState((prev) => (prev + 1) % 3);
    }, 6000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  const heroImages = [
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2071&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1449156001437-3a1661acda22?q=80&w=2070&auto=format&fit=crop'
  ];

  return (
    <div className="min-h-screen matrix-bg bg-[#050505] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 bg-black">
          {heroImages.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
                heroState === index ? 'opacity-40' : 'opacity-0'
              }`}
            >
              <img 
                src={src} 
                alt={`Arch ${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/80"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl">
            <div className="reveal mb-10 flex flex-wrap gap-4">
               <span className="px-4 py-1.5 bg-[#00ff9f]/10 border border-[#00ff9f]/30 text-[#00ff9f] font-mono text-[10px] uppercase tracking-widest rounded-full backdrop-blur-md">
                 Модуль 1: Эволюция текстового ИИ
               </span>
               <div className="flex items-center gap-2 px-4 py-1.5 bg-red-500/10 border border-red-500/40 rounded-full backdrop-blur-md">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
                  <span className="font-mono text-[10px] uppercase text-red-500 font-bold">Осталось 3 места</span>
               </div>
            </div>
            
            <h1 className="reveal font-display tracking-tightest leading-[0.85] mb-12">
               <span className="text-white block text-6xl md:text-8xl lg:text-[9rem] font-black uppercase">Искусственный</span>
               <span className="text-white block text-6xl md:text-8xl lg:text-[9rem] font-black uppercase mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">интеллект</span>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff9f] to-cyan-400 text-2xl md:text-5xl font-bold block py-2">
                  Как использовать текстовый ИИ на максимум
               </span>
            </h1>

            <div className="reveal mb-16 space-y-8 pl-10 border-l border-[#00ff9f]/30">
              <p className="max-w-2xl text-gray-400 text-lg md:text-xl font-light leading-relaxed">
                Живой интенсив для архитекторов от META Education. Делегируйте рутину нейросетям и вернитесь к чистому творчеству.
              </p>
              <div className="flex items-baseline gap-8">
                <div 
                  onClick={() => setIsPriceVisible(true)}
                  className="relative group cursor-pointer"
                >
                  <span className={`text-6xl font-black text-white glow-text transition-all duration-700 ${!isPriceVisible ? 'blur-xl select-none' : 'blur-0'}`}>
                    1 490 ₽
                  </span>
                  {!isPriceVisible && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">Показать цену</span>
                    </div>
                  )}
                </div>
                <span className="text-2xl text-white/20 line-through font-light italic">9 900 ₽</span>
              </div>
            </div>

            <div className="reveal flex flex-wrap gap-6">
              <button className="bg-[#00ff9f] text-black px-12 py-5 rounded-sm font-black text-lg hover:bg-white hover:scale-105 transition-all shadow-[0_0_40px_rgba(0,255,159,0.3)] uppercase tracking-widest">
                Забронировать
              </button>
              <button className="glass-panel text-white px-12 py-5 rounded-sm font-black text-lg hover:bg-white/10 transition-all uppercase tracking-widest">
                Программа
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="py-32 relative z-10">
        <div className="container mx-auto px-6">
          <div className="reveal mb-24 flex flex-col md:flex-row justify-between items-end gap-10">
             <div>
                <h2 className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#00ff9f] mb-4">_COURSE_STRUCTURE_</h2>
                <h3 className="font-display text-5xl md:text-7xl font-black tracking-tighter text-white uppercase">Программа курса</h3>
             </div>
             <div className="glass-panel p-6 rounded-xl text-[10px] font-mono text-white/40 uppercase tracking-widest">
                Updated: Feb_2025 // Status: Enrollment_Open
             </div>
          </div>

          <div className="grid gap-4 max-w-4xl mx-auto">
            {MODULES.map((module) => (
              <ModuleCard key={module.id} module={module} />
            ))}
          </div>
        </div>
      </section>

      {/* Author Section */}
      <section className="py-40 border-t border-white/5 bg-black relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl glass-panel p-12 md:p-20 rounded-3xl border border-[#00ff9f]/10">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.5em] text-[#00ff9f] mb-6">THE_VISIONARY</h4>
            <h2 className="font-display text-5xl md:text-7xl font-black text-white uppercase mb-8 leading-none">
              Ваге<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff9f] to-cyan-500">Согомонян</span>
            </h2>
            <p className="text-xl text-gray-400 font-light leading-relaxed mb-10 border-l-2 border-[#00ff9f] pl-10">
              Архитектор, основатель META Education. Трансформирует подход к проектированию, превращая нейросети из игрушек в профессиональный инструмент ГАПа.
            </p>
            <div className="flex gap-12 pt-10 border-t border-white/5 font-mono">
              <div><span className="block text-3xl font-bold text-white">500+</span><span className="text-[9px] text-white/30 uppercase tracking-widest">Students</span></div>
              <div><span className="block text-3xl font-bold text-white">META</span><span className="text-[9px] text-white/30 uppercase tracking-widest">Education</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-[#050505]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10 text-[10px] font-mono uppercase tracking-[0.4em] text-white/20">
          <div className="flex items-center gap-4 text-white">
            <div className="w-8 h-8 bg-white/10 flex items-center justify-center">M</div>
            <span>META EDUCATION 2025</span>
          </div>
          <div className="flex gap-10">
            <a href="#" className="hover:text-[#00ff9f]">Telegram</a>
            <a href="#" className="hover:text-[#00ff9f]">Behance</a>
            <a href="#" className="hover:text-[#00ff9f]">Instagram</a>
          </div>
          <p>© ALL RIGHTS RESERVED // TERMINAL_01</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
