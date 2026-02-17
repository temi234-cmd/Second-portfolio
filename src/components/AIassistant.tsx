import React, { useState, useRef, useEffect } from 'react';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);

    try {
      const response = await fetch(
       '/hf-api/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
           model: 'meta-llama/Llama-3.1-8B-Instruct',
            messages: [
              {
                role: 'system',
                content: `You are a virtual assistant for Oluwagbotemi Olatunji, a brilliant female full-stack engineer and systems architect based in Nigeria.
Her stack: HTML, CSS, JavaScript, TypeScript, React, MongoDB, Express, Node.js.
Key projects: E-commerce App , Pure water ordering website.
Tone: Professional, helpful, tech-savvy. Refer to her as she/her.
Keep answers short and concise.`
              },
              { role: 'user', content: userMessage }
            ],
            max_tokens: 200,
            temperature: 0.7,
          })
        }
      );

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      const text = data.choices[0]?.message?.content?.trim() || "I couldn't generate a response. Please try again.";
      setMessages(prev => [...prev, { role: 'assistant', content: text }]);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Error communicating with DevTemi AI. Please check connection." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-[60]">
      {isOpen ? (
        <div className="glass w-[350px] h-[500px] rounded-3xl flex flex-col overflow-hidden shadow-2xl border border-primary/20 animate-in fade-in zoom-in duration-300">
          <div className="bg-primary/10 p-5 flex items-center justify-between border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="size-3 bg-primary rounded-full animate-pulse shadow-[0_0_10px_#00f2ff]"></div>
              <span className="font-mono text-xs font-bold tracking-widest text-primary uppercase">DevTemi Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white transition-colors">
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 font-mono text-xs">
            {messages.length === 0 && (
              <div className="text-white/30 text-center py-10">
                &gt; Initialize communication...<br/>
                Ask about Oluwagbotemi's skills or projects.
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl ${
                  m.role === 'user' ? 'bg-primary/20 border border-primary/30 text-primary' : 'bg-white/5 border border-white/10 text-white/70'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 p-3 rounded-2xl text-primary animate-pulse">
                  &gt; Computing...
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white/5 border-t border-white/5 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="System prompt..."
              className="flex-1 bg-transparent border-none focus:ring-0 text-xs font-mono placeholder:text-white/20"
            />
            <button
              onClick={handleSend}
              className="size-8 rounded-lg bg-primary text-background-dark flex items-center justify-center hover:brightness-110 transition-all"
            >
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="size-16 rounded-3xl bg-primary text-background-dark shadow-[0_0_30px_rgba(0,242,255,0.4)] flex items-center justify-center hover:scale-105 transition-all group"
        >
          <span className="material-symbols-outlined text-3xl group-hover:rotate-12 transition-transform">bolt</span>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;