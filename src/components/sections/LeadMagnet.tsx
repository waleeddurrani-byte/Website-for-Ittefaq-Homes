import React from 'react';
import { Download, MessageCircle, Send } from 'lucide-react';
import { openWhatsApp } from '../../lib/utils';
import { motion } from 'motion/react';

export default function LeadMagnet() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Guide will be sent to your email and phone via WhatsApp!");
  };

  return (
    <section className="py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* WhatsApp Deal Block */}
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            className="flex-1 w-full"
          >
            <div className="bg-success rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl" />
              
              <div className="relative z-10">
                <span className="bg-white/20 px-6 py-2 rounded-full text-sm font-black uppercase tracking-widest mb-6 inline-block">High Attention Offer</span>
                <h2 className="text-4xl md:text-5xl font-display font-black mb-6 leading-tight">
                  Get Exclusive Property Deals Before Anyone Else
                </h2>
                <p className="text-xl text-white/80 mb-10 leading-relaxed max-w-xl">
                  Join 1,000+ smart buyers receiving off-market deals, price drops, and investment opportunities directly on WhatsApp.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => openWhatsApp("Hi, I want to join waitlist for off-market deals.")}
                    className="px-10 py-5 bg-white text-success rounded-2xl font-black text-xl flex items-center justify-center space-x-3 shadow-xl hover:scale-105 transition-transform"
                  >
                    <MessageCircle size={24} />
                    <span>👉 Get Deals on WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Guide Download Form */}
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            className="flex-1 w-full lg:max-w-md"
          >
            <div className="bg-white rounded-[3rem] p-10 md:p-12 shadow-2xl border border-gray-100">
              <div className="text-center mb-10">
                <div className="w-20 h-20 bg-accent/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Download className="text-accent" size={40} />
                </div>
                <h3 className="text-3xl font-display font-black text-primary mb-3">
                  “2026 Property Investment Guide – پاکستان”
                </h3>
                <p className="text-gray-500 font-bold">Everything you need to know to secure your future.</p>
              </div>

              <div className="space-y-4 mb-10">
                {[
                  "Best areas to invest right now",
                  "Expected ROI by project",
                  "Mistakes that cost buyers millions"
                ].map((point) => (
                  <div key={point} className="flex items-center space-x-3 text-primary/80 font-medium">
                    <div className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center text-[10px] font-black">✓</div>
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Full Name"
                  required
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
                <input 
                  type="tel" 
                  placeholder="Phone (WhatsApp)"
                  required
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent/50"
                  pattern="[0-9]{10,12}"
                />
                <input 
                  type="email" 
                  placeholder="Email Address"
                  required
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
                <button 
                  type="submit"
                  className="w-full py-5 rounded-2xl cta-gradient font-black text-xl shadow-xl hover:scale-105 transition-transform flex items-center justify-center space-x-3"
                >
                  <Send size={20} />
                  <span>Download Now</span>
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
