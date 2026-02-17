
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto min-h-screen flex flex-col justify-center items-start pt-20">
      <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-[10px] font-mono uppercase tracking-[0.2em] mb-10">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        Available for New Projects
      </div>

      <h1 className="text-5xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-[0.85] mb-8 select-none">
        OLUWAGBOTEMI <br />
        <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>OLATUNJI</span>
      </h1>

      <div className="space-y-6 max-w-2xl">
        <p className="text-xl md:text-2xl font-mono text-primary/90 terminal-cursor">
          &gt; Full-Stack Engineer // System Architect
        </p>
        <p className="text-white/50 text-lg md:text-xl leading-relaxed">
          Engineering high-performance distributed systems and immersive digital experiences. I build things that scale and look beautiful while doing it.
        </p>
      </div>

      <div className="mt-14 flex flex-wrap gap-6 items-center">
        <button 
          onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
          className="group relative overflow-hidden border border-white/20 hover:border-primary/50 px-10 py-5 rounded-2xl transition-all font-bold text-lg"
        >
          <span className="relative z-10">Explore My Work</span>
          <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </button>

        <div className="flex items-center gap-6 px-8 py-3 font-mono text-xs text-white/30 border-l border-white/10">
          <div>
            <span className="text-primary">LOC:</span> LAG // NG
          </div>
          <div>
            <span className="text-primary">TZ:</span> GMT+1
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
