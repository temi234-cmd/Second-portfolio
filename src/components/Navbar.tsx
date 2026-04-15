import React, { useState } from 'react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: 'Work', id: 'work' },
    { label: 'About', id: 'about' },
    { label: 'Stack', id: 'stack' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 px-4 py-4 md:px-6 md:py-6 lg:px-12">
      <div className="max-w-7xl mx-auto glass rounded-2xl border border-white/5">
        {/* Main bar */}
        <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
          {/* Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollTo('hero')}
          >
            <div className="size-9 md:size-10 bg-primary rounded-xl flex items-center justify-center text-background-dark font-black text-xl md:text-2xl transition-transform group-hover:scale-105">
              O
            </div>
            <span className="font-bold tracking-tighter text-sm sm:text-base md:text-xl hidden sm:block">
              OLUWAGBOTEMI OLATUNJI
            </span>
          </div>

          {/* Desktop nav links */}
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

          {/* Right side: Hire Me + hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo('contact')}
              className="bg-primary text-background-dark px-4 py-2 md:px-6 md:py-3 rounded-xl font-black text-xs md:text-sm hover:brightness-110 hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] transition-all flex items-center gap-2 group"
            >
              HIRE ME{' '}
              <span className="material-symbols-outlined text-sm group-hover:animate-bounce">
                bolt
              </span>
            </button>

            {/* Hamburger — visible on mobile/tablet only */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="lg:hidden flex flex-col justify-center items-center gap-[5px] w-9 h-9 rounded-lg border border-white/10 hover:border-primary/40 transition-all"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-[2px] w-5 bg-white transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
              />
              <span
                className={`block h-[2px] w-5 bg-white transition-all duration-300 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-[2px] w-5 bg-white transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-white/5 px-4 py-4 flex flex-col gap-4 font-mono text-xs uppercase tracking-widest">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-left py-2 transition-colors hover:text-primary ${
                  activeSection === item.id ? 'text-primary' : 'text-white/60'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;