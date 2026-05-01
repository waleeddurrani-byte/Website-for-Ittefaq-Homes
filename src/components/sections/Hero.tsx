import React from 'react';
 import { motion } from 'motion/react';
 import { CheckCircle, ArrowRight, MessageCircle, ShieldCheck, Star } from 'lucide-react';
 import { openWhatsApp } from '../../lib/utils';
 import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#fafafa]">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 translate-x-1/2" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-white border border-gray-100 px-4 py-2 rounded-full shadow-sm mb-8">
              <div className="flex -space-x-1">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-gray-200" />
                ))}
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase tracking-widest leading-none">Joined by 1,200+ Smart Investors</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-primary leading-[1.05] mb-8">
              Find Property That <br />
              <span className="text-accent relative inline-block">
                Actually Pays Off
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1, duration: 0.8 }}
                  className="absolute bottom-1 left-0 h-2 bg-accent/20 -z-10" 
                />
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-xl font-medium">
              Premium plots, houses, and apartments across top societies — 
              verified listings, zero guesswork, expert-backed decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link 
                to="/listings"
                className="px-8 py-4 rounded-xl cta-gradient font-black text-lg flex items-center justify-center space-x-3 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all"
              >
                <span>Browse Properties</span>
                <ArrowRight size={20} />
              </Link>
              
              <button 
                onClick={() => openWhatsApp("Hi, I want to get the latest property deals.")}
                className="px-8 py-4 rounded-xl bg-white border border-gray-200 text-primary font-black text-lg flex items-center justify-center space-x-3 hover:bg-gray-50 transition-all shadow-sm"
              >
                <MessageCircle size={22} className="text-[#25D366]" />
                <span>📲 Get WhatsApp Deals</span>
              </button>
            </div>

            {/* Micro Trust Line */}
            <div className="flex flex-wrap gap-y-4 gap-x-8 pt-4 border-t border-gray-100">
              {[
                { label: "100% Verified Listings", icon: <ShieldCheck size={16} /> },
                { label: "No Hidden Charges", icon: <Star size={16} /> },
                { label: "Fast Response", icon: <CheckCircle size={16} /> }
              ].map((item) => (
                <div key={item.label} className="flex items-center space-x-2 text-gray-500">
                  <span className="text-accent">{item.icon}</span>
                  <span className="text-xs font-black uppercase tracking-widest leading-none">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Media / Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-3xl border-[10px] border-white relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200" 
                alt="Modern Luxury Home" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Card 1 */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-10 top-1/4 z-20 bg-white p-4 rounded-3xl shadow-2xl border border-gray-50 max-w-[170px]"
            >
              <div className="flex items-center space-x-2 mb-2">
                 <div className="w-8 h-8 bg-success/10 text-success rounded-lg flex items-center justify-center font-bold text-sm">
                    15%
                 </div>
                 <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Avg. ROI</span>
              </div>
              <p className="text-xs font-bold text-primary">High-growth sectors identified daily.</p>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -right-6 bottom-1/4 z-20 bg-primary text-white p-4 rounded-3xl shadow-2xl max-w-[190px]"
            >
              <div className="flex items-center space-x-2 mb-2">
                 <div className="w-7 h-7 bg-accent rounded-lg flex items-center justify-center">
                    <CheckCircle size={14} />
                 </div>
                 <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 font-sans">Verified</span>
              </div>
              <p className="text-sm font-display font-bold">500+ Luxury Homes Available.</p>
            </motion.div>

            {/* Pattern Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-[1px] border-accent/20 rounded-full scale-150 -z-0" />
          </motion.div>
        </div>
      </div>

      {/* Floating Search Bar Integration (Visual Only for now) */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 hidden xl:block">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="bg-white/80 backdrop-blur-xl border border-white/40 p-2 rounded-2xl shadow-2xl flex items-center space-x-2"
        >
          <div className="px-6 py-3 border-r border-gray-100 flex flex-col">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Location</span>
            <span className="text-sm font-bold text-primary">Bahria Town, Islamabad</span>
          </div>
          <div className="px-6 py-3 border-r border-gray-100 flex flex-col">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Property Type</span>
            <span className="text-sm font-bold text-primary">Residential Plots</span>
          </div>
          <div className="px-6 py-3 flex flex-col min-w-[150px]">
             <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Budget</span>
             <span className="text-sm font-bold text-primary">50 Lac - 1.5 Cr</span>
          </div>
          <button className="bg-primary text-white w-12 h-12 rounded-xl flex items-center justify-center hover:bg-accent transition-all">
             <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
