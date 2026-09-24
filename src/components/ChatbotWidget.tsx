import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import {
  QUICK_QUESTIONS,
  INITIAL_BOT_MESSAGE,
  FALLBACK_ANSWER
} from '../data/chatbotFaq';

export const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'msg-welcome',
      sender: 'bot',
      text: INITIAL_BOT_MESSAGE,
      showActions: true
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatMessagesRef = useRef<HTMLDivElement>(null);
  const quickQuestionsRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Scroll ONLY the internal conversation container - never the window or webpage
  const scrollToChatBottom = () => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTo({
        top: chatMessagesRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (isOpen) {
      scrollToChatBottom();
    }
  }, [messages.length, isOpen, isTyping]);

  // Handle Quick Question Click
  const handleSelectQuestion = (question: string, answer: string) => {
    if (isTyping) return; // Prevent duplicate clicks while responding

    // 1. Add user question once
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: question
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    // 2. Add predefined answer once with short natural delay
    setTimeout(() => {
      setIsTyping(false);
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: answer,
        showActions: true
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 250);
  };

  // Handle Typed Input
  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const query = inputText.trim();
    if (!query || isTyping) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    const qLower = query.toLowerCase();

    // Match typed text to one of the predefined FAQs
    const matchedFaq = QUICK_QUESTIONS.find((item) =>
      item.question.toLowerCase().includes(qLower) ||
      item.keywords.some((k) => qLower.includes(k.toLowerCase()))
    );

    setTimeout(() => {
      setIsTyping(false);
      if (matchedFaq) {
        setMessages((prev) => [
          ...prev,
          {
            id: `bot-${Date.now()}`,
            sender: 'bot',
            text: matchedFaq.answer,
            showActions: true
          }
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            id: `bot-${Date.now()}`,
            sender: 'bot',
            text: FALLBACK_ANSWER,
            showActions: true
          }
        ]);
      }
    }, 250);
  };

  // Horizontal scroll buttons for quick question pills
  const scrollQuickQuestions = (direction: 'left' | 'right') => {
    if (quickQuestionsRef.current) {
      const scrollAmount = direction === 'left' ? -150 : 150;
      quickQuestionsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Reset / Start Over
  const handleReset = () => {
    setMessages([
      {
        id: `msg-welcome-${Date.now()}`,
        sender: 'bot',
        text: INITIAL_BOT_MESSAGE,
        showActions: true
      }
    ]);
    setInputText('');
  };

  return (
    <>
      {/* FLOATING TOGGLE BUTTON - FIXED TO VIEWPORT BOTTOM-RIGHT */}
      <div
        style={{ position: 'fixed', zIndex: 9999 }}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 pointer-events-auto"
      >
        <button
          aria-label={isOpen ? 'Close Soham Assistant' : 'Open Soham Assistant'}
          className="relative group w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-brand-orange hover:bg-brand-orangeHover text-white shadow-xl flex items-center justify-center transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-300 cursor-pointer"
          id="chatbot-toggle-btn"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <i className="fa-solid fa-xmark text-2xl transition-transform duration-200" id="close-chat-icon"></i>
          ) : (
            <i className="fa-solid fa-comment-dots text-2xl transition-transform duration-200" id="chat-icon"></i>
          )}
          {/* Online green pulse dot */}
          <span className="absolute top-0.5 right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></span>
        </button>
      </div>

      {/* CHAT WINDOW - STRICTLY FIXED TO VIEWPORT BOTTOM-RIGHT */}
      <div
        ref={modalRef}
        id="chatbot-modal"
        role="dialog"
        aria-label="Soham Assistant customer support chat"
        style={{
          position: 'fixed',
          zIndex: 9999
        }}
        className={`fixed bottom-[74px] sm:bottom-[86px] right-3 sm:right-6 w-[calc(100vw-24px)] sm:w-[360px] max-w-[380px] h-[min(560px,calc(100dvh-86px))] max-h-[580px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right ${
          isOpen ? 'opacity-100 pointer-events-auto scale-100' : 'opacity-0 pointer-events-none scale-95'
        }`}
      >
        {/* 1. FIXED HEADER */}
        <div className="bg-brand-charcoal text-white px-4 py-3 flex items-center justify-between border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <div className="w-8.5 h-8.5 rounded-full bg-brand-orange flex items-center justify-center text-white font-bold shadow-sm">
                <i className="fa-solid fa-paint-roller text-xs"></i>
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-brand-charcoal rounded-full"></span>
            </div>
            <div>
              <h4 className="text-sm font-bold text-white leading-tight">Soham Assistant</h4>
              <p className="text-[11px] text-slate-300 leading-tight mt-0.5">How can we help you?</p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            {/* Start Over Button */}
            <button
              type="button"
              onClick={handleReset}
              title="Start Over"
              aria-label="Start Over"
              className="text-slate-300 hover:text-white hover:bg-slate-800 p-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1 cursor-pointer"
            >
              <i className="fa-solid fa-rotate-right text-[11px]"></i>
              <span className="hidden xs:inline text-[11px]">Reset</span>
            </button>

            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              title="Close chat"
              aria-label="Close chat"
              className="text-slate-300 hover:text-white hover:bg-slate-800 p-1.5 rounded-lg text-xs transition-colors cursor-pointer"
            >
              <i className="fa-solid fa-xmark text-sm"></i>
            </button>
          </div>
        </div>

        {/* 2. FIXED CALL NOW + WHATSAPP ACTION ROW */}
        <div className="bg-slate-50 border-b border-slate-200 px-3 py-2 flex items-center justify-between gap-2 shrink-0">
          <a
            href="tel:8793600635"
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-2 bg-brand-charcoal hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition-colors shadow-xs"
            id="chat-call-now-btn"
          >
            <i className="fa-solid fa-phone text-brand-orange text-xs"></i>
            <span>📞 Call Now</span>
          </a>
          <a
            href="https://wa.me/918793600635?text=Hello%20Soham%20Painting%20Services%2C%20I%20would%20like%20to%20inquire%20about%20painting%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 py-1.5 px-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-colors shadow-xs"
            id="chat-whatsapp-btn"
          >
            <i className="fa-brands fa-whatsapp text-sm"></i>
            <span>💬 WhatsApp</span>
          </a>
        </div>

        {/* 3. CONVERSATION / MESSAGES AREA (ONLY THIS AREA SCROLLS) */}
        <div
          ref={chatMessagesRef}
          className="flex-1 p-3.5 overflow-y-auto overscroll-contain space-y-3 bg-[#FAFAFB] text-xs min-h-0"
          id="chat-messages"
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'bot' && (
                <div className="w-6 h-6 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  <i className="fa-solid fa-paint-roller text-[10px]"></i>
                </div>
              )}

              <div
                className={`p-3 rounded-2xl border shadow-xs max-w-[85%] leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-brand-orange text-white border-brand-orange rounded-tr-xs'
                    : 'bg-white text-slate-800 border-slate-200 rounded-tl-xs'
                }`}
              >
                <div className="whitespace-pre-line font-normal">{msg.text}</div>

                {/* Direct quick action buttons inside bot response */}
                {msg.sender === 'bot' && msg.showActions && (
                  <div className="mt-2.5 pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
                    <a
                      href="tel:8793600635"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-900 hover:bg-slate-800 text-white font-semibold text-[10.5px] transition-colors"
                    >
                      <i className="fa-solid fa-phone text-brand-orange text-[9px]"></i>
                      Call Now
                    </a>
                    <a
                      href="https://wa.me/918793600635?text=Hello%20Soham%20Painting%20Services%2C%20I%20would%20like%20to%20inquire%20about%20painting%20services."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-[10.5px] transition-colors"
                    >
                      <i className="fa-brands fa-whatsapp text-[11px]"></i>
                      WhatsApp
                    </a>
                  </div>
                )}
              </div>

              {msg.sender === 'user' && (
                <div className="w-6 h-6 rounded-full bg-brand-charcoal text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  <i className="fa-solid fa-user text-[10px]"></i>
                </div>
              )}
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                <i className="fa-solid fa-paint-roller text-[10px]"></i>
              </div>
              <div className="bg-white px-3 py-2 rounded-2xl rounded-tl-xs border border-slate-200 shadow-xs flex items-center gap-1.5 text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-bounce"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-bounce [animation-delay:0.4s]"></span>
              </div>
            </div>
          )}
        </div>

        {/* 4. FIXED BOTTOM CONTROLS */}
        <div className="shrink-0 bg-white border-t border-slate-200 flex flex-col">
          {/* Quick Questions (Horizontal Pill Carousel) */}
          <div className="px-3 pt-2 pb-1.5 bg-slate-50/90 border-b border-slate-200/70">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                <i className="fa-solid fa-bolt text-brand-orange text-[10px]"></i>
                <span>Quick Questions:</span>
              </span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => scrollQuickQuestions('left')}
                  className="w-5 h-5 rounded-full bg-white border border-slate-200 hover:bg-orange-50 text-slate-500 hover:text-brand-orange flex items-center justify-center text-[9px] shadow-2xs cursor-pointer transition-colors"
                  title="Scroll left"
                  aria-label="Scroll left"
                >
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button
                  type="button"
                  onClick={() => scrollQuickQuestions('right')}
                  className="w-5 h-5 rounded-full bg-white border border-slate-200 hover:bg-orange-50 text-slate-500 hover:text-brand-orange flex items-center justify-center text-[9px] shadow-2xs cursor-pointer transition-colors"
                  title="Scroll right"
                  aria-label="Scroll right"
                >
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>

            <div
              ref={quickQuestionsRef}
              className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 scroll-smooth"
            >
              {QUICK_QUESTIONS.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  disabled={isTyping}
                  onClick={() => handleSelectQuestion(item.question, item.answer)}
                  className="shrink-0 text-[11px] py-1.5 px-3 rounded-full bg-white hover:bg-orange-50 active:bg-orange-100 border border-slate-200 hover:border-brand-orange text-slate-700 hover:text-brand-orange font-medium transition-all shadow-2xs whitespace-nowrap cursor-pointer active:scale-95 disabled:opacity-50"
                >
                  {item.question}
                </button>
              ))}
            </div>
          </div>

          {/* Question input */}
          <div className="p-2.5 bg-white">
            <form className="flex items-center gap-2" onSubmit={handleSendMessage}>
              <input
                type="text"
                id="chat-input-field"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask a question or select above..."
                className="flex-1 bg-slate-100 border border-slate-200 rounded-xl px-3 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent text-slate-900 placeholder:text-slate-400"
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isTyping}
                aria-label="Send message"
                className="w-8 h-8 rounded-xl bg-brand-orange hover:bg-brand-orangeHover disabled:opacity-40 disabled:cursor-not-allowed text-white flex items-center justify-center transition-colors shadow-xs shrink-0 cursor-pointer"
              >
                <i className="fa-solid fa-paper-plane text-xs"></i>
              </button>
            </form>

            {/* Start Over / Clear Chat */}
            <div className="mt-1 text-center">
              <button
                type="button"
                onClick={handleReset}
                className="text-[10px] text-slate-400 hover:text-brand-orange underline cursor-pointer"
              >
                Start Over / Clear Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
