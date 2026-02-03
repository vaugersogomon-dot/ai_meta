
import React, { useState } from 'react';
import { ModuleBlock } from '../types';

interface Props {
  module: ModuleBlock;
}

const ModuleCard: React.FC<Props> = ({ module }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isLive = module.id <= 2;

  return (
    <div className={`reveal group transition-all duration-500 rounded-2xl overflow-hidden border ${
      isOpen 
        ? 'border-[#00ff9f]/40 bg-[#00ff9f]/5' 
        : isLive 
          ? 'border-white/10 bg-white/[0.03] hover:border-[#00ff9f]/30' 
          : 'border-white/5 bg-white/[0.01] opacity-60 grayscale'
    }`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 md:p-8 flex justify-between items-center"
      >
        <div className="flex gap-6 items-center">
          <span className={`text-3xl font-mono font-bold ${isLive ? 'text-[#00ff9f]/40' : 'text-white/10'}`}>0{module.id}</span>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h3 className={`text-lg md:text-xl font-bold tracking-tight transition-colors ${isOpen ? 'text-[#00ff9f]' : 'text-white'}`}>
                {module.title}
              </h3>
              {isLive ? (
                <span className="px-2 py-0.5 bg-[#00ff9f]/10 text-[#00ff9f] text-[8px] font-mono border border-[#00ff9f]/30 rounded uppercase tracking-tighter">Живая встреча</span>
              ) : (
                <span className="px-2 py-0.5 bg-white/5 text-white/40 text-[8px] font-mono border border-white/10 rounded uppercase tracking-tighter">Доп. урок (позже)</span>
              )}
            </div>
            <div className="flex gap-4">
               <span className="text-[9px] font-mono uppercase tracking-widest text-white/20">Sync_Type: {isLive ? 'Realtime' : 'On_Demand'}</span>
            </div>
          </div>
        </div>
        <div className={`transition-transform duration-500 ${isOpen ? 'rotate-180 text-[#00ff9f]' : 'text-white/20'}`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </button>

      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1200px] opacity-100 pb-8' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 md:px-8 space-y-8">
          {!isLive && (
            <div className="bg-cyan-500/10 border border-cyan-500/20 p-4 rounded-lg">
              <p className="text-cyan-500 text-xs font-mono">Этот урок откроется автоматически после завершения основных живых встреч Модуля 1.</p>
            </div>
          )}
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#00ff9f] font-bold">// Теория {isLive && '(Live)'}</h4>
              <ul className="space-y-3">
                {module.theory.map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                    <span className="text-[#00ff9f] opacity-50">[_]</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#00ff9f] font-bold">// Практика</h4>
              <ul className="space-y-3">
                {module.practice.map((item, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-400 text-sm leading-relaxed">
                    <span className="text-[#00ff9f] opacity-50">></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-white/5">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 mb-4 font-bold">Final Task</h4>
            {module.homework.map((hw, idx) => (
              <div key={idx} className="bg-white/[0.03] p-5 rounded-xl border border-white/5 hover:border-[#00ff9f]/10 transition-colors">
                <p className="font-bold text-sm mb-2 text-white/80">{hw.title}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{hw.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;
