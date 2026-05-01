import React from 'react';
import { MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../../lib/utils';

export default function WhatsAppButton() {
  return (
    <button
      onClick={() => openWhatsApp()}
      className="fixed bottom-8 right-8 z-[80] group flex items-center space-x-3"
    >
      <div className="overflow-hidden max-w-0 group-hover:max-w-xs transition-all duration-500 ease-in-out">
        <span className="bg-white text-success font-bold px-4 py-2 rounded-full shadow-xl border border-gray-100 whitespace-nowrap block">
          Chat with Property Expert
        </span>
      </div>
      <div className="w-16 h-16 bg-[#25D366] text-white flex items-center justify-center rounded-full shadow-2xl animate-float hover:scale-110 transition-transform">
        <MessageCircle size={32} fill="currentColor" />
      </div>
    </button>
  );
}
