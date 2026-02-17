
import React from 'react';
import bubulizer from '../assets/Images/bubulizer.png';
import aquamodam from '../assets/Images/aquamodam.jpeg';
const projects = [
  {
    title: 'Bubulizer',
    description: 'Modern e-commerce platform with advanced filtering, cart management, and secure payment integration.',
    tags: ['HTML', 'CSS', 'JAVASCRIPT', 'FIREBASE'],
    image: bubulizer,
    liveUrl: 'https://bubulizer.vercel.app',
    githubUrl: 'https://github.com/temi234-cmd/bubulizer.git'
  },
  {
    title: 'AquaModam',
    description: 'A responsive ordering platform for a pure water factory, allowing wholesalers and retailers to order sachet and bottled water directly via WhatsApp. The platform focuses on simplicity, speed, and real-world business flow.',
    tags: ['JAVASCRIPT', 'CSS', 'HTML'],
    image: aquamodam,
    liveUrl: 'https://aqua-modam.vercel.app',
    githubUrl: 'https://github.com/temi234-cmd/modam.git'
  }
];

const Projects: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-32">
      <div className="flex items-end justify-between mb-20">
        <div>
          <span className="font-mono text-primary text-sm tracking-widest uppercase mb-4 block">&lt;Projects /&gt;</span>
          <h2 className="text-5xl md:text-6xl font-black">SELECTED WORK</h2>
        </div>
        <div className="h-px bg-white/10 flex-grow mx-12 mb-5 hidden md:block"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, idx) => (
          <div key={idx} className="group glass rounded-[2.5rem] overflow-hidden hover:border-primary/40 hover:shadow-[0_0_50px_rgba(0,242,255,0.15)] transition-all duration-500 flex flex-col h-full">
            <div className="aspect-video w-full bg-surface overflow-hidden relative">
              <img 
                alt={project.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                src={project.image} 
              />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
            
            <div className="p-10 flex flex-col flex-1">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-white/50 group-hover:border-primary/20 group-hover:text-primary transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
              <p className="text-white/50 text-base leading-relaxed mb-10 flex-1">{project.description}</p>
              
              <div className="flex flex-wrap gap-4 mt-auto">
                <a 
                  href={project.liveUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center inline-flex items-center justify-center gap-2 bg-primary text-background-dark px-6 py-4 rounded-2xl font-black text-sm tracking-widest hover:brightness-110 hover:scale-[1.02] transition-all"
                >
                  LIVE PREVIEW <span className="material-symbols-outlined text-lg">rocket_launch</span>
                </a>
                <a 
                  href={project.githubUrl} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center inline-flex items-center justify-center gap-2 border border-white/20 hover:border-primary/50 px-6 py-4 rounded-2xl font-black text-sm tracking-widest transition-all hover:scale-[1.02]"
                >
                  GITHUB <span className="material-symbols-outlined text-lg">terminal</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
