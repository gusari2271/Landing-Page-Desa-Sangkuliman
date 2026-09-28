import React, { useState, useEffect, useRef } from 'react';
import { Bot, X, Send, Sparkles, User, MessageSquare, ArrowRight, CornerDownLeft, ExternalLink } from 'lucide-react';
import { chatbotKnowledge, villageInfo } from '../data/villageData';

/**
 * PANDUAN INTEGRASI CHATBOT PIHAK KETIGA (Chatbase / Chatling / Tidio / Dify):
 * 1. Jika ingin menggunakan skrip eksternal (misal Chatbase / Chatling), ubah USE_EXTERNAL_SCRIPT ke `true`
 * 2. Masukkan URL skrip atau embed iframe pada variabel EXTERNAL_SCRIPT_URL di bawah.
 */
const USE_EXTERNAL_SCRIPT = false; // Ubah ke true jika ingin memakai Chatbase/Tidio asli
const EXTERNAL_SCRIPT_URL = ""; // Contoh: "https://www.chatbase.co/embed.min.js"

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Halo! Selamat datang di Desa Wisata Sangkuliman. Saya asisten cerdas desa yang siap menjawab pertanyaan seputar paket wisata, susur sungai, homestay, atau rute perjalanan. Ada yang bisa saya bantu?',
      time: 'Baru saja'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (isOpen && chatBottomRef.current) {
      chatBottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  // Handle Smart Response Simulator
  const handleSendMessage = (textToSend) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    // Add user message
    const userMsg = {
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response logic based on keywords
    setTimeout(() => {
      const lowerQuery = query.toLowerCase();
      let matchedAnswer = chatbotKnowledge.find(item => 
        item.keywords.some(kw => lowerQuery.includes(kw))
      );

      let reply = matchedAnswer 
        ? matchedAnswer.answer 
        : `Terima kasih atas pertanyaannya! Untuk informasi lebih detail mengenai "${query}", Anda dapat menghubungi langsung pengelola Pokdarwis kami via WhatsApp di nomor ${villageInfo.contact.whatsappDisplay} atau mengakses Pusat Link Hub di website ini.`;

      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: reply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setIsTyping(false);
    }, 900);
  };

  const quickQuestions = [
    'Berapa harga paket wisata?',
    'Bagaimana rute ke desa?',
    'Fasilitas homestay apa saja?',
    'Aktivitas susur sungai',
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Chatbot Window Popup */}
      {isOpen && (
        <div className="mb-4 w-[90vw] sm:w-[380px] h-[520px] bg-white rounded-3xl shadow-2xl border border-stone-200 flex flex-col overflow-hidden animate-fadeIn">
          
          {/* Chatbot Header */}
          <div className="bg-forest-950 text-white p-4.5 flex items-center justify-between border-b border-forest-800">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-forest-800 text-gold-400 flex items-center justify-center border border-forest-700">
                  <Bot className="w-5 h-5" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-forest-950"></span>
              </div>
              <div>
                <h4 className="font-serif text-sm font-bold text-white flex items-center gap-1.5">
                  <span>Asisten AI Sangkuliman</span>
                  <span className="px-1.5 py-0.2 text-[9px] bg-gold-500/20 text-gold-300 rounded-full">AI Bot</span>
                </h4>
                <p className="text-[11px] text-stone-300 font-light">Siap membantu 24/7 seputar wisata desa</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-full hover:bg-forest-900 text-stone-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-cream-100/50 text-xs sm:text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-full bg-forest-900 text-gold-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}
                
                <div
                  className={`max-w-[82%] p-3.5 rounded-2xl ${
                    msg.sender === 'user'
                      ? 'bg-forest-900 text-white rounded-br-none shadow-sm'
                      : 'bg-white text-stone-800 rounded-bl-none border border-stone-200/80 shadow-soft'
                  }`}
                >
                  <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                  <span
                    className={`block text-[9px] mt-1 text-right ${
                      msg.sender === 'user' ? 'text-stone-300' : 'text-stone-400'
                    }`}
                  >
                    {msg.time}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-stone-500 text-xs italic pl-9">
                <div className="w-2 h-2 rounded-full bg-forest-700 animate-bounce"></div>
                <div className="w-2 h-2 rounded-full bg-forest-700 animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-2 h-2 rounded-full bg-forest-700 animate-bounce [animation-delay:0.4s]"></div>
                <span>Asisten sedang mengetik...</span>
              </div>
            )}
            <div ref={chatBottomRef}></div>
          </div>

          {/* Quick Suggestion Chips */}
          <div className="px-3.5 py-2 bg-cream-100 border-t border-stone-200/80 overflow-x-auto flex gap-1.5 hide-scrollbar">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(q)}
                className="px-2.5 py-1 rounded-full bg-white hover:bg-forest-900 hover:text-white text-[11px] text-stone-700 whitespace-nowrap border border-stone-300/80 transition-colors shadow-2xs"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Chat Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white border-t border-stone-200 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Tanya paket wisata, homestay, rute..."
              className="flex-1 px-3.5 py-2 rounded-full bg-cream-100 border border-stone-300 text-xs sm:text-sm focus:outline-none focus:border-forest-800 text-stone-800"
            />
            <button
              type="submit"
              aria-label="Kirim Pesan"
              disabled={!inputValue.trim()}
              className="w-9 h-9 rounded-full bg-forest-900 hover:bg-forest-800 disabled:opacity-40 text-gold-400 flex items-center justify-center transition-colors shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}

      {/* Floating Toggle Bubble Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Buka Asisten AI Chatbot"
        className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-forest-900 hover:bg-forest-800 text-white shadow-card-hover border border-forest-700/60 transition-all duration-300 hover:scale-105"
      >
        <div className="relative">
          <div className="w-7 h-7 rounded-full bg-forest-800 text-gold-300 flex items-center justify-center">
            {isOpen ? <X className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
          </div>
          {!isOpen && (
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-gold-400 animate-ping"></span>
          )}
        </div>
        <div className="text-left hidden sm:block">
          <span className="block text-xs font-bold leading-none text-gold-300">Tanya AI Desa</span>
          <span className="block text-[10px] text-stone-300 font-light mt-0.5">Asisten 24/7</span>
        </div>
      </button>

    </div>
  );
}
