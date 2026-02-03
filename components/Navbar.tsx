
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#00ff9f] flex items-center justify-center rounded-sm">
            <span className="text-[#0a0a0a] font-black text-xl">M</span>
          </div>
          <span className="font-display font-bold text-xl tracking-tight uppercase">META Education</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#about" className="hover:text-white transition-colors">О курсе</a>
          <a href="#program" className="hover:text-white transition-colors">Программа</a>
          <a href="#bonus" className="hover:text-white transition-colors">Бонусы</a>
          <a href="#contact" className="bg-white text-black px-6 py-2 rounded-sm hover:bg-[#00ff9f] transition-all font-bold uppercase tracking-tighter text-xs">Записаться</a>
        </div>

        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
