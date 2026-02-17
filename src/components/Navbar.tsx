
import React from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const navItems = [
    { label: 'Work', id: 'work' },
    { label: 'About', id: 'about' },
    { label: 'Stack', id: 'stack' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-6 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between glass rounded-2xl px-6 py-4 border border-white/5">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollTo('hero')}>
          <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-background-dark font-black text-2xl transition-transform group-hover:scale-105">
            O
          </div>
          <span className="font-bold tracking-tighter text-xl hidden sm:block">OLUWAGBOTEMI OLATUNJI</span>
        </div>

        <div className="hidden lg:flex items-center gap-10 font-mono text-xs uppercase tracking-widest">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`transition-colors hover:text-primary ${
                activeSection === item.id ? 'text-primary' : 'text-white/60'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button 
          onClick={() => scrollTo('contact')}
          className="bg-primary text-background-dark px-6 py-3 rounded-xl font-black text-sm hover:brightness-110 hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] transition-all flex items-center gap-2 group"
        >
          HIRE ME <span className="material-symbols-outlined text-sm group-hover:animate-bounce">bolt</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
