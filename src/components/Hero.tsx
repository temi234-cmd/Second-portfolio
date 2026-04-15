import React, { useEffect } from 'react';

const Hero: React.FC = () => {
  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="max-w-7xl mx-auto min-h-screen flex flex-col justify-center items-start pt-28 md:pt-20 px-4 md:px-0">
      <div className="reveal reveal-left inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-[10px] font-mono uppercase tracking-[0.2em] mb-8 md:mb-10">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        Available for New Projects
      </div>

      <h1 className="reveal reveal-right text-4xl sm:text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter leading-[0.9] mb-6 md:mb-8 select-none">
        OLUWAGBOTEMI <br />
        <span
          className="text-transparent"
          style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}
        >
          OLATUNJI
        </span>
      </h1>

      <div className="reveal reveal-left space-y-4 md:space-y-6 max-w-2xl w-full">
        <p className="text-base sm:text-xl md:text-2xl font-mono text-primary/90 terminal-cursor">
          &gt; Full-Stack Engineer // System Architect
        </p>
        <p className="text-white/50 text-base md:text-lg lg:text-xl leading-relaxed">
          Engineering high-performance distributed systems and immersive digital
          experiences. I build things that scale and look beautiful while doing it.
        </p>
      </div>

      <div className="reveal reveal-right mt-10 md:mt-14 flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 items-start sm:items-center w-full">
        <button
          onClick={() =>
            document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
          }
          className="group relative overflow-hidden border border-white/20 hover:border-primary/50 px-8 py-4 md:px-10 md:py-5 rounded-2xl transition-all font-bold text-base md:text-lg w-full sm:w-auto text-center"
        >
          <span className="relative z-10">Explore My Work</span>
          <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </button>

        <div className="flex items-center gap-4 md:gap-6 px-4 md:px-8 py-3 font-mono text-xs text-white/30 border-l border-white/10">
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