'use client';

import React, { useState, useRef, useEffect } from 'react';
import { X, MessageCircle, Send, Minimize2 } from 'lucide-react';
import { generateGeminiResponse, type ChatContext } from '@/lib/gemini-api';

interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatbotProps {
  salesText?: string;
  chatText?: string;
  closeText?: string;
  numberText?: string;
  phoneNumber?: string;
  proactiveDelay?: number;
}

interface MessageContentProps {
  text: string;
  isUser: boolean;
}

// Component to render message text with clickable links
function MessageContent({ text, isUser }: MessageContentProps) {
  // Regular expression to match URLs
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  
  // Split text by URLs and create elements
  const parts = text.split(urlRegex);
  
  return (
    <>
      {parts.map((part, index) => {
        if (urlRegex.test(part)) {
          return (
            <a
              key={index}
              href={part}
              target="_blank"
              rel="noopener noreferrer"
              className={`underline hover:no-underline ${
                isUser ? 'text-white' : 'text-[#C74634] hover:text-[#A63429]'
              }`}
            >
              {part}
            </a>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}

export default function Chatbot({
  salesText = "Talk to sales",
  chatText = "Chat now", 
  closeText = "Close",
  numberText = "Call US Sales",
  phoneNumber = "+1.800.633.0738",
  proactiveDelay = 5000
}: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showProactive, setShowProactive] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: "Hi! I'm here to help you with questions about Augment's AI platform. How can I assist you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Proactive chat trigger
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowProactive(true);
      }
    }, proactiveDelay);

    return () => clearTimeout(timer);
  }, [proactiveDelay, isOpen]);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: text.trim(),
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    try {
      // Prepare conversation context for Gemini API
      const conversationHistory = messages.map(msg => ({
        role: msg.isUser ? 'user' as const : 'assistant' as const,
        content: msg.text
      }));

      const context: ChatContext = {
        userMessage: text.trim(),
        conversationHistory
      };

      // Get response from Gemini API
      const response = await generateGeminiResponse(context);
      
      const botMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error getting bot response:', error);
      
      // Fallback response
      const fallbackMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: "I'm sorry, I'm having trouble responding right now. Please try again or contact our support team at +1.800.633.0738.",
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, fallbackMessage]);
    } finally {
      setIsTyping(false);
    }
  };


  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(inputValue);
    }
  };

  const openChat = () => {
    setIsOpen(true);
    setIsExpanded(true);
    setShowProactive(false);
  };

  const closeChat = () => {
    setIsOpen(false);
    setIsExpanded(false);
  };

  const minimizeChat = () => {
    setIsExpanded(false);
  };

  return (
    <>
      {/* Proactive Chat Bubble */}
      {showProactive && !isOpen && (
        <div 
          className="fixed bottom-24 right-6 z-50 bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-xs cursor-pointer transition-all duration-300 hover:shadow-xl"
          onClick={openChat}
          style={{ fontFamily: 'var(--oraclesans)' }}
        >
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-[#C74634] rounded-full flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-800 font-medium">Need help?</p>
              <p className="text-xs text-gray-600 mt-1">Chat with us for quick answers about our AI platform.</p>
            </div>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowProactive(false);
              }}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Chat Widget */}
      <div 
        className={`fixed z-50 transition-all duration-300 ${
          isExpanded 
            ? 'inset-0 sm:bottom-6 sm:right-6 sm:inset-auto' 
            : 'bottom-6 right-6'
        }`}
        style={{ fontFamily: 'var(--oraclesans)' }}
      >
        {/* Expanded Chat Window */}
        {isExpanded && (
          <div className="bg-white shadow-2xl border border-gray-200 w-full h-full sm:w-96 sm:h-[calc(100vh-120px)] sm:max-h-[600px] sm:rounded-lg sm:mb-4 flex flex-col">
            {/* Header */}
            <div className="bg-[#312a2a] text-white p-4 sm:rounded-t-lg flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#C74634] rounded-full flex items-center justify-center">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Augment Support</h3>
                  <p className="text-xs text-gray-300">We're here to help</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={minimizeChat}
                  className="text-gray-300 hover:text-white transition-colors"
                  title="Minimize"
                >
                  <Minimize2 className="w-4 h-4" />
                </button>
                <button
                  onClick={closeChat}
                  className="text-gray-300 hover:text-white transition-colors"
                  title={closeText}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                      message.isUser
                        ? 'bg-[#C74634] text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <MessageContent text={message.text} isUser={message.isUser} />
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 px-3 py-2 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 sm:p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C74634] focus:border-transparent text-sm"
                />
                <button
                  onClick={() => handleSendMessage(inputValue)}
                  disabled={!inputValue.trim()}
                  className="bg-[#C74634] text-white px-3 py-2 rounded-lg hover:bg-[#A63429] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              
              {/* Quick Actions */}
              <div className="mt-2 sm:mt-3 flex flex-wrap gap-2">
                <a
                  href="https://augment.cfd/corporate/contact/sales"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm bg-[#C74634] hover:bg-[#A63429] text-white px-3 py-2 rounded transition-colors"
                >
                  Contact Sales
                </a>
                <button
                  onClick={() => handleSendMessage("I'd like to schedule a demo")}
                  className="text-xs sm:text-sm bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded transition-colors"
                >
                  Schedule Demo
                </button>
                <button
                  onClick={() => handleSendMessage("What are your pricing options?")}
                  className="text-xs sm:text-sm bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded transition-colors"
                >
                  Pricing Info
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Chat Button */}
        {!isExpanded && (
          <button
            onClick={openChat}
            className="bg-[#C74634] hover:bg-[#A63429] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
            title={chatText}
          >
            <MessageCircle className="w-6 h-6" />
          </button>
        )}

        {/* Minimized Chat Indicator */}
        {isOpen && !isExpanded && (
          <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        )}
      </div>
    </>
  );
}
