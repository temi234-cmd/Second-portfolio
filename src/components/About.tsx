
import React from 'react';
import ProfilePic from '../assets/Images/Beautiful mee.jpeg';
const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* profile image */}
        <div className="lg:col-span-5 xl:col-span-4 relative group max-w-sm mx-auto lg:mx-0">
          <div className="absolute -top-4 -left-4 w-full h-full border border-primary/20 rounded-3xl group-hover:-top-2 group-hover:-left-2 transition-all duration-500"></div>
          <div className="relative glass rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
            <img 
              alt="Oluwagbotemi Olatunji Portrait" 
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" 
             src={ProfilePic}
            />
            <div className="absolute inset-0 bg-primary/5 mix-blend-overlay"></div>
          </div>
        </div>

        {/* Text Content Column */}
        <div className="lg:col-span-7 xl:col-span-8 space-y-10">
          <div>
            <span className="font-mono text-primary text-sm tracking-widest uppercase mb-4 block">Bio</span>
            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
              A VISIONARY <br />
              <span className="text-white/40">FULL-STACK ENGINEER.</span>
            </h2>
            <p className="text-white/60 text-xl leading-relaxed mb-8">
              I am Oluwagbotemi Olatunji, a dedicated software engineer specializing in building modern, scalable web applications. My approach focuses on creating robust backend systems paired with elegant, user-centric frontends.
            </p>
            <p className="text-white/60 text-xl leading-relaxed">
              With a background in system architecture and a passion for clean code, I craft digital experiences that are not only functional but visually stunning. I'm driven by the challenge of turning complex problems into simple, beautiful solutions.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 items-center">
            <a 
  href="/Resume.pdf" 
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white text-background-dark font-black px-10 py-5 rounded-2xl flex items-center gap-3 hover:bg-primary transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
>
  VIEW CV <span className="material-symbols-outlined text-sm font-black">open_in_new</span>
</a>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="size-16 rounded-2xl glass flex items-center justify-center hover:text-primary transition-all border border-white/10 hover:border-primary/40 group">
                <svg className="size-8 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
