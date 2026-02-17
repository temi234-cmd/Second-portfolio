
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-40 text-center">
      <span className="font-mono text-primary text-sm tracking-[0.3em] uppercase mb-6 block">&lt;Contact /&gt;</span>
      <h2 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter">LET'S BUILD <br /> THE FUTURE.</h2>
      <p className="text-white/50 text-xl md:text-2xl mb-16 max-w-2xl mx-auto font-light leading-relaxed">
        Currently open to select freelance opportunities and full-stack engineering roles.
      </p>
      
      <a 
        href="mailto:ogtm1011@gmail.com" 
        className="inline-block glass px-16 py-8 rounded-3xl text-2xl md:text-3xl font-black hover:bg-primary hover:text-background-dark transition-all duration-500 border border-white/10 group overflow-hidden relative shadow-2xl"
      >
        <span className="relative z-10">hello@gbotemi.dev</span>
        <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
      </a>

      <div className="mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10 opacity-30">
        <span className="font-mono text-[10px] tracking-[0.4em] uppercase">© 2024 GBOTEMI_DIGITAL</span>
        <div className="flex flex-wrap justify-center gap-10 font-mono text-[10px] tracking-[0.4em] uppercase">
          <a className="hover:text-primary transition-colors" href="https://github.com/temi234-cmd">GITHUB</a>
          <a className="hover:text-primary transition-colors" href="https://wa.me/2349163208899">WHATSAPP</a>
          <a className="hover:text-primary transition-colors" href="https://x.com/temi_2x">TWITTER(X)</a>
          <a className="hover:text-primary transition-colors" href="https://www.instagram.com/gbotemi._?igsh=MWptZzMwc2VkZzNxbg==">INSTAGRAM</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
