"use client"

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { X, Send } from 'lucide-react';

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

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

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
    <div className={`fixed inset-0 z-50 flex justify-end pointer-events-none ${isOpen ? 'visible' : 'invisible'}`}>
      <div
        className={`absolute inset-0 bg-ink/30 transition-opacity duration-300 pointer-events-auto ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      <div
        className={`relative w-full max-w-md h-full bg-cream shadow-xl flex flex-col transform transition-all duration-300 ease-in-out pointer-events-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="bg-ink text-cream p-4 flex justify-between items-center flex-shrink-0">
          <div className="flex items-center gap-3">
            <span className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
              <Image src="/Arise.jpg" alt="Arise" fill style={{ objectFit: 'cover' }} />
            </span>
            <div>
              <h3 className="font-serif text-lg leading-tight">Arise</h3>
              <p className="text-xs text-cream/60">Ömer Özdemir&apos;in AI Asistanı</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-cream/10 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-xs lg:max-w-sm rounded-2xl p-3 ${
                    message.from === 'user'
                      ? 'bg-ink text-cream rounded-tr-sm'
                      : 'bg-white border border-ink/5 text-ink rounded-tl-sm'
                  }`}
                >
                  {message.from === 'ai' && (
                    <span className="block text-xs font-medium text-mint mb-1">Arise</span>
                  )}
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                  <p className={`text-[10px] mt-1 text-right ${message.from === 'user' ? 'text-cream/50' : 'text-ink-soft'}`}>
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-ink/5 rounded-2xl rounded-tl-sm p-3">
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
        <div className="border-t border-ink/10 p-4 bg-cream flex-shrink-0">
          <div className="flex rounded-xl border border-ink/10 overflow-hidden bg-white">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Bir mesaj yazın..."
              disabled={isLoading}
              className="flex-1 px-4 py-2.5 text-sm text-ink focus:outline-none disabled:opacity-60"
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading || inputText.trim() === ''}
              className="px-4 bg-ink text-cream disabled:opacity-40 hover:bg-mint transition-colors"
              aria-label="Gönder"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-ink-soft mt-2 text-center">
            Bu bir yapay zeka asistanıdır, kesin teşhis için muayene gereklidir.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIAssistantDrawer;
