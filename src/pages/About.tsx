import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Target, Users, Award, CheckCircle } from 'lucide-react';
import { openWhatsApp } from '../lib/utils';

export default function About() {
  const stats = [
    { label: 'Properties Managed', value: '1,500+' },
    { label: 'Happy Clients', value: '4,200+' },
    { label: 'Years Experience', value: '12+' },
    { label: 'Verified Societies', value: '15+' },
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-black uppercase tracking-[0.25em] text-xs mb-3 block">Our Heritage</span>
            <h1 className="text-4xl md:text-6xl font-display font-black text-primary mb-8 leading-tight">
              A Legacy of Trust in <span className="text-accent">Real Estate</span>
            </h1>
            <p className="text-lg text-gray-600 font-medium leading-relaxed mb-6">
              Founded over a decade ago, Ittefaq Homes has grown to become the most reliable name in Pakistan's premium real estate sector. We don't just sell plots and houses; we build partnerships based on transparency and data-backed advice.
            </p>
            <p className="text-lg text-gray-600 font-medium leading-relaxed">
              Our mission is to simplify the complex world of real estate for our clients, ensuring every investment is secure, and every home is a sanctuary.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                alt="Modern Office" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Achievement Badge */}
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-2xl border border-gray-50 flex items-center space-x-4 max-w-xs">
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center text-accent shrink-0">
                <Award size={32} />
              </div>
              <div>
                <p className="text-2xl font-black text-primary">#1 Agency</p>
                <p className="text-xs font-black text-gray-400 uppercase tracking-widest">In Bahria Phase 8</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-20 mb-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center text-white">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl md:text-5xl font-display font-black text-accent mb-2">{stat.value}</div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24">
        <div className="text-center mb-16">
          <span className="text-accent font-black uppercase tracking-[0.25em] text-xs mb-3 block">How We Work</span>
          <h2 className="text-3xl md:text-5xl font-display font-black text-primary">Our Core Values</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { 
              title: "Unmatched Integrity", 
              desc: "We prioritize long-term relationships over short-term gains. Every deal is transparent and ethically managed.", 
              icon: <ShieldCheck size={32} /> 
            },
            { 
              title: "Client-Centricity", 
              desc: "Your goals are our priority. We tailor our search and advice to match your specific financial objectives.", 
              icon: <Target size={32} /> 
            },
            { 
              title: "Market Expertise", 
              desc: "Our team stays ahead of market trends, providing you with real-time data to make informed decisions.", 
              icon: <Users size={32} /> 
            },
          ].map((value) => (
            <div key={value.title} className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-accent mb-6 shadow-sm group-hover:bg-accent group-hover:text-white transition-all">
                {value.icon}
              </div>
              <h3 className="text-xl font-display font-black text-primary mb-4">{value.title}</h3>
              <p className="text-gray-500 font-medium leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-accent rounded-[3.5rem] p-12 md:p-20 relative overflow-hidden text-center text-white">
          <h2 className="text-3xl md:text-5xl font-display font-black mb-6">Want to Join Our Team?</h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">
            We're always looking for dedicated individuals to join the Ittefaq Homes family. If you're passionate about real estate, let's talk.
          </p>
          <button 
            onClick={() => openWhatsApp("I'm interested in joining the Ittefaq Homes team.")}
            className="px-10 py-5 bg-white text-accent rounded-xl font-black text-lg shadow-xl hover:scale-105 transition-transform"
          >
            Contact Recruitment
          </button>
        </div>
      </section>
    </div>
  );
}
