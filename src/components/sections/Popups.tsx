import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle, AlertCircle, TrendingUp } from 'lucide-react';
import { cn, openWhatsApp } from '../../lib/utils';

export const ExitIntentPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShow(true);
        window.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
    window.addEventListener('mouseleave', handleMouseLeave);
    return () => window.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  return (
    <Popup 
      isOpen={show} 
      onClose={() => setShow(false)}
      title="Wait — Don't Miss Better Deals"
      body="We have off-market properties not listed publicly. Unlock exclusive deals today."
      ctaText="Unlock Deals"
      onCtaClick={() => openWhatsApp("I'm interested in off-market property deals.")}
      icon={<TrendingUp className="text-accent" size={48} />}
    />
  );
};

export const TimeBasedPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Popup 
      isOpen={show} 
      onClose={() => setShow(false)}
      title="Looking for the Best Investment?"
      body="Our experts can guide you to high-growth areas. Book a free consultation now."
      ctaText="WhatsApp Now"
      onCtaClick={() => openWhatsApp("Hi, I'd like a free investment consultation.")}
      icon={<MessageCircle className="text-success" size={48} />}
    />
  );
};

const Popup = ({ isOpen, onClose, title, body, ctaText, onCtaClick, icon }: any) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-md bg-white rounded-3xl overflow-hidden shadow-2xl p-8 text-center"
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-primary transition-colors">
              <X size={24} />
            </button>
            
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-accent/10 rounded-full">
                {icon}
              </div>
            </div>
            
            <h3 className="text-2xl font-display font-bold mb-3">{title}</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">{body}</p>
            
            <button 
              onClick={() => {
                onCtaClick();
                onClose();
              }}
              className="w-full py-4 rounded-xl cta-gradient font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-95"
            >
              {ctaText}
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
