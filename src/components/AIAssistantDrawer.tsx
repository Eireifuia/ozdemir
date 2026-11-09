"use client"

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { X, Send, CheckCheck } from 'lucide-react';

interface Message {
  from: 'user' | 'ai';
  text: string;
  timestamp: Date;
}

interface AIAssistantDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIAssistantDrawer = ({ isOpen, onClose }: AIAssistantDrawerProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      from: 'ai',
      text: 'Merhaba, ben Arise, Dr. Ömer\'in AI asistanıyım. Diş sağlığınızla ilgili genel sorularınızı yanıtlayabilirim. Size nasıl yardımcı olabilirim?',
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading]);

  const handleSendMessage = async () => {
    const text = inputText.trim();
    if (text === '' || isLoading) return;

    const userMessage: Message = { from: 'user', text, timestamp: new Date() };
    const history = [...messages, userMessage];
    setMessages(history);
    setInputText('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: history.map((m) => ({
            role: m.from === 'user' ? 'user' : 'assistant',
            content: m.text,
          })),
        }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { from: 'ai', text: data.reply ?? 'Şu anda cevap veremiyorum, lütfen tekrar deneyin.', timestamp: new Date() },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          from: 'ai',
          text: 'Bağlantı kurulamadı. Lütfen bizi telefonla arayın: 0553 888 54 44.',
          timestamp: new Date(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div
      className={`fixed z-50 bottom-24 right-4 md:bottom-28 md:right-6 w-[calc(100vw-2rem)] max-w-sm h-[70vh] max-h-[560px] bg-white rounded-2xl shadow-2xl border border-black/5 flex flex-col overflow-hidden origin-bottom-right transition-all duration-300 ease-out ${
        isOpen
          ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
      }`}
    >
      {/* Header */}
      <div className="bg-[#075E54] text-white px-4 py-3 flex justify-between items-center flex-shrink-0">
        <div className="flex items-center gap-3">
          <span className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
            <Image src="/Arise.jpg" alt="Arise" fill style={{ objectFit: 'cover' }} />
          </span>
          <div>
            <h3 className="text-[15px] font-medium leading-tight">Arise</h3>
            <p className="text-xs text-white/70">çevrimiçi</p>
          </div>
        </div>
        <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 transition-colors" aria-label="Kapat">
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div
        className="flex-1 p-3 overflow-y-auto"
        style={{
          backgroundColor: '#E5DDD5',
          backgroundImage:
            'radial-gradient(rgba(0,0,0,0.045) 1px, transparent 1px), radial-gradient(rgba(0,0,0,0.045) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          backgroundPosition: '0 0, 14px 14px',
        }}
      >
        <div className="space-y-1.5">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.from === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`relative max-w-[80%] rounded-lg px-2.5 py-1.5 shadow-sm ${
                  message.from === 'user'
                    ? 'bg-[#DCF8C6] text-[#111b21] rounded-tr-none'
                    : 'bg-white text-[#111b21] rounded-tl-none'
                }`}
              >
                <p className="text-[13.5px] leading-relaxed whitespace-pre-wrap pr-1">{message.text}</p>
                <span className="flex items-center justify-end gap-1 mt-0.5 -mb-0.5">
                  <span className="text-[10.5px] text-[#667781]">{formatTime(message.timestamp)}</span>
                  {message.from === 'user' && <CheckCheck className="w-3.5 h-3.5 text-[#53bdeb]" />}
                </span>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white rounded-lg rounded-tl-none px-3 py-2.5 shadow-sm">
                <span className="flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-ink-soft animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-ink-soft animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-ink-soft animate-bounce" />
                </span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="bg-[#F0F0F0] flex-shrink-0 px-2.5 py-2 flex items-center gap-2">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Mesaj yazın..."
          disabled={isLoading}
          className="flex-1 rounded-full bg-white px-4 py-2 text-sm text-ink focus:outline-none disabled:opacity-60"
        />
        <button
          onClick={handleSendMessage}
          disabled={isLoading || inputText.trim() === ''}
          className="w-9 h-9 flex-shrink-0 rounded-full bg-[#075E54] text-white disabled:opacity-40 hover:bg-[#128C7E] transition-colors flex items-center justify-center"
          aria-label="Gönder"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
      <p className="text-[10px] text-ink-soft text-center bg-[#F0F0F0] pb-2 -mt-1">
        Bu bir yapay zeka asistanıdır, kesin teşhis için muayene gereklidir.
      </p>
    </div>
  );
};

export default AIAssistantDrawer;
