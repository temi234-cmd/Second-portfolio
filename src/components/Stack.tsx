
import React from 'react';

const skills = [
  { name: 'HTML5', icon: 'html', desc: 'Semantic Structure & SEO' },
  { name: 'CSS3', icon: 'css', desc: 'Modern Layouts & Animations' },
  { name: 'JavaScript', icon: 'javascript', desc: 'Dynamic Logic & ES6+' },
  { name: 'TypeScript', icon: 'code', desc: 'Type-Safe Development' },
  { name: 'React', icon: 'layers', desc: 'Component-Based UI' },
  { name: 'Node.js', icon: 'terminal', desc: 'Server-Side Runtime' },
  { name: 'Express', icon: 'api', desc: 'Minimalist Web Framework' },
  { name: 'MongoDB', icon: 'database', desc: 'NoSQL Scalable Storage' }
];

const Stack: React.FC = () => {
  return (
    <div className="bg-surface/30 border-y border-white/5 py-32 px-6 -mx-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="font-mono text-primary text-sm tracking-widest uppercase mb-4 block">03. The Toolbox</span>
          <h2 className="text-5xl font-black">TECHNICAL STACK</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <div key={idx} className="glass p-8 rounded-2xl flex flex-col items-center gap-4 group hover:bg-primary/5 hover:border-primary/20 transition-all duration-300">
              <div className="size-16 rounded-full bg-white/5 flex items-center justify-center group-hover:text-primary transition-all group-hover:scale-110">
                <span className="material-symbols-outlined text-4xl">{skill.icon}</span>
              </div>
              <div className="text-center">
                <span className="font-bold text-lg block mb-1">{skill.name}</span>
                <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest leading-tight block">
                  {skill.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stack;
