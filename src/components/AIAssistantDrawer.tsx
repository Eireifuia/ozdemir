"use client"

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { X, Send, CheckCheck, Trash2 } from 'lucide-react';

interface Message {
  from: 'user' | 'ai';
  text: string;
  timestamp: Date;
}

interface AIAssistantDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const STORAGE_KEY = 'arise-sohbet-v1';
const STORAGE_TTL_MS = 30 * 24 * 60 * 60 * 1000;
const MAX_STORED = 40;

const greeting = (): Message => ({
  from: 'ai',
  text: 'Merhaba, ben Arise. Dr. Ömer Özdemir\'in yapay zeka asistanıyım. Çocuklarda diş sağlığıyla ilgili genel sorularınızı yanıtlayabilirim. Kişisel sağlık bilgilerinizi bu sohbette paylaşmayınız.',
  timestamp: new Date(),
});

const AIAssistantDrawer = ({ isOpen, onClose }: AIAssistantDrawerProps) => {
  const [messages, setMessages] = useState<Message[]>(() => [greeting()]);
  const [restored, setRestored] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Sohbet yalnızca bu cihazda saklanır. Sayfa yenilense ya da site yeniden açılsa da kaldığı yerden devam eder.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as { savedAt: number; messages: { from: Message['from']; text: string; timestamp: string }[] };
        if (Date.now() - saved.savedAt < STORAGE_TTL_MS && Array.isArray(saved.messages) && saved.messages.length > 0) {
          setMessages(saved.messages.map((m) => ({ ...m, timestamp: new Date(m.timestamp) })));
        } else {
          window.localStorage.removeItem(STORAGE_KEY);
        }
      }
    } catch {
      // Depolama kapalıysa sohbet yalnızca açık oturumda tutulur
    }
    setRestored(true);
  }, []);

  useEffect(() => {
    if (!restored) return;
    try {
      const toSave = messages.slice(-MAX_STORED).map((m) => ({ ...m, timestamp: m.timestamp.toISOString() }));
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ savedAt: Date.now(), messages: toSave }));
    } catch {
      // yoksay
    }
  }, [messages, restored]);

  const clearChat = () => {
    setMessages([greeting()]);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // yoksay
    }
  };

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
        { from: 'ai', text: data.reply ?? 'Şu anda yanıt verilememektedir. Lütfen biraz sonra yeniden deneyiniz.', timestamp: new Date() },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          from: 'ai',
          text: 'Bağlantı kurulamadı. Lütfen 0553 888 54 44 numaralı telefondan kliniğe ulaşınız.',
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
            <Image src="/arise-logo.svg" alt="Arise" fill style={{ objectFit: 'cover' }} />
          </span>
          <div>
            <h3 className="text-[15px] font-medium leading-tight">Arise</h3>
            <p className="text-xs text-white/70">çevrimiçi</p>
          </div>
        </div>
        <div className="flex items-center">
          <button
            onClick={clearChat}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Sohbeti temizle"
            title="Sohbeti temizle"
          >
            <Trash2 className="w-4.5 h-4.5" />
          </button>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-white/10 transition-colors" aria-label="Kapat">
            <X className="w-5 h-5" />
          </button>
        </div>
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
          placeholder="Mesajınızı yazınız"
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
        Bu bir yapay zeka asistanıdır, kesin teşhis için muayene gereklidir. Sohbet yalnızca bu cihazda saklanır.
      </p>
    </div>
  );
};

export default AIAssistantDrawer;
