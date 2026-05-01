import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, ShieldCheck, PieChart, Zap, ArrowRight, MessageCircle, CheckCircle, Landmark, Building2 } from 'lucide-react';
import { openWhatsApp } from '../lib/utils';

export default function Investment() {
  const strategies = [
    {
      title: "Short Term Flip",
      roi: "10-25% in 6 months",
      desc: "Buy under-market plots in developing phases and exit as soon as development charges or possession is announced.",
      icon: <Zap className="text-accent" size={32} />
    },
    {
      title: "Rental Income",
      roi: "5-8% Annually + Apprec.",
      desc: "Invest in 5 & 10 Marla houses in DHA or Bahria Town to enjoy consistent monthly cash flow along with long-term value gain.",
      icon: <Landmark className="text-accent" size={32} />
    },
    {
      title: "Commercial Shops",
      roi: "15% Rental Yield",
      desc: "Prime commercial locations in high-traffic commercial zones. The most stable form of real estate investment in Pakistan.",
      icon: <Building2 className="text-accent" size={32} />
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header content */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent font-black uppercase tracking-[0.25em] text-xs mb-3 block"
          >
            Wealth Growth Plan
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-primary mb-6"
          >
            Invest Smart. <br /> Earn Better Returns.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg text-gray-500 font-medium leading-relaxed"
          >
            We identify high-growth areas before they peak — helping you enter early and exit profitably. Our data-backed approach ensures your capital is protected and growing.
          </motion.p>
        </div>

        {/* Strategies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {strategies.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                {React.cloneElement(s.icon as React.ReactElement, { size: 28 })}
              </div>
              <h3 className="text-xl font-display font-black mb-2">{s.title}</h3>
              <div className="text-lg font-black text-success mb-4">{s.roi}</div>
              <p className="text-gray-500 font-bold mb-8 text-sm leading-relaxed">{s.desc}</p>
              <button 
                onClick={() => openWhatsApp(`I'm interested in the ${s.title} strategy.`)}
                className="text-accent font-black text-sm flex items-center space-x-2 group"
              >
                <span>Get This Plan</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* ROI Graph Placeholder info */}
        <section className="bg-primary text-white rounded-[3rem] p-10 md:p-20 relative overflow-hidden mb-24">
           <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/10 -skew-x-12 translate-x-1/2" />
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
              <div>
                 <h2 className="text-2xl md:text-3xl font-display font-black mb-8 leading-tight">Why Property is the Best Hedge Against Inflation</h2>
                 <ul className="space-y-6">
                    {[
                      { t: "Tangible Asset", d: "Unlike stocks, real estate is a physical asset you can see and control." },
                      { t: "Rental Growth", d: "Rent typically increases with inflation, protecting your purchasing power." },
                      { t: "Development Gains", d: "Societies like DHA see 100%+ gains as development progresses." }
                    ].map(item => (
                      <li key={item.t} className="flex gap-5">
                         <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center shrink-0">
                            <CheckCircle size={18} className="text-white" />
                         </div>
                         <div>
                            <h4 className="text-xl font-bold mb-1">{item.t}</h4>
                            <p className="text-gray-400 text-sm font-medium">{item.d}</p>
                         </div>
                      </li>
                    ))}
                 </ul>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] aspect-square flex flex-col items-center justify-center text-center">
                 <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                    <TrendingUp size={48} className="text-accent" />
                 </div>
                 <h3 className="text-2xl font-display font-black mb-3">Market Performance</h3>
                 <p className="text-gray-400 font-bold mb-6 italic text-sm">Property has consistently outperformed local savings accounts in PK.</p>
                 <div className="text-5xl font-black text-accent">+240%</div>
                 <div className="text-[10px] font-black uppercase tracking-widest text-gray-500 mt-2">Avg. Growth (Last 5 Years)</div>
              </div>
           </div>
        </section>

        {/* Final Investment CTA */}
        <div className="text-center max-w-2xl mx-auto">
           <h2 className="text-2xl md:text-3xl font-display font-black text-primary mb-8">Ready for a Customized Investment Plan?</h2>
           <button 
            onClick={() => openWhatsApp("Hi, I'd like a custom property investment plan.")}
            className="w-full sm:w-auto px-10 py-5 bg-accent text-white rounded-xl font-black text-lg shadow-xl hover:scale-105 transition-transform flex items-center justify-center space-x-3 mx-auto"
           >
              <MessageCircle size={24} />
              <span>Request Consultation</span>
           </button>
        </div>

      </div>
    </div>
  );
}
