import React from 'react';
import Hero from '../components/sections/Hero';
import QuickSearch from '../components/sections/QuickSearch';
import LeadMagnet from '../components/sections/LeadMagnet';
import PropertyCard from '../components/ui/PropertyCard';
import { PROPERTIES, PROJECTS, TESTIMONIALS } from '../constants';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, TrendingUp, Users, ShieldCheck, Zap, MessageCircle, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { openWhatsApp } from '../lib/utils';

export default function Home() {
  return (
    <div className="space-y-0">
      <Hero />
      <QuickSearch />

      {/* Featured Properties */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-accent font-black uppercase tracking-[0.25em] text-xs mb-3 block text-center md:text-left">Exclusive Listings</span>
              <h2 className="text-3xl md:text-4xl font-display font-black text-primary">Featured Properties</h2>
            </div>
            <Link to="/listings" className="group flex items-center space-x-3 text-lg font-bold hover:text-accent transition-all">
              <span>View All</span>
              <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all">
                <ArrowRight size={20} />
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PROPERTIES.map((prop, idx) => (
              <motion.div
                key={prop.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <PropertyCard property={prop} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Categories */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <span className="text-accent font-black uppercase tracking-[0.25em] text-xs mb-3 block">Our Inventory</span>
          <h2 className="text-3xl md:text-4xl font-display font-black text-primary">Explore by Category</h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Plots", icon: <MapPin size={32} />, desc: "Secure land in high-growth societies" },
            { title: "Homes", icon: <Zap size={32} />, desc: "Ready-to-move luxury & budget houses" },
            { title: "Flats", icon: <Users size={32} />, desc: "Modern apartments in prime locations" },
            { title: "Commercial", icon: <TrendingUp size={32} />, desc: "Shops & offices with strong ROI" }
          ].map((cat, idx) => (
            <motion.div
              key={cat.title}
              whileHover={{ y: -10 }}
              className="bg-gray-50 p-10 rounded-[2.5rem] text-center border border-gray-100 hover:border-accent/50 hover:bg-white hover:shadow-2xl transition-all group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-accent group-hover:text-white transition-all">
                {cat.icon}
              </div>
              <h3 className="text-2xl font-display font-black mb-4">{cat.title}</h3>
              <p className="text-gray-500 font-bold mb-8">{cat.desc}</p>
              <Link to="/listings" className="text-accent font-black flex items-center justify-center space-x-2">
                <span>View Listings</span>
                <ArrowRight size={18} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <LeadMagnet />

      {/* Why Us Section */}
      <section className="py-24 px-4 bg-primary text-white relative overflow-hidden">
        <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-accent/5 to-transparent pointer-none" />
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-accent font-black uppercase tracking-[0.25em] text-xs mb-3 block">Expert Advice</span>
              <h2 className="text-3xl md:text-4xl font-display font-black mb-8">Why Trust Ittefaq Homes</h2>
              
              <div className="space-y-8">
                {[
                  { title: "Verified Listings Only", desc: "No fake properties. Every listing is checked.", icon: <ShieldCheck /> },
                  { title: "Real Market Insight", desc: "We don't guess — we guide based on data.", icon: <TrendingUp /> },
                  { title: "Transparent Deals", desc: "What you see is what you pay. No hidden costs.", icon: <Users /> },
                  { title: "Fast Execution", desc: "From visit to paperwork handled professionally.", icon: <Zap /> }
                ].map((item) => (
                  <div key={item.title} className="flex gap-5">
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-accent shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-display font-bold mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-10 bg-accent/10 blur-[100px] rounded-full" />
              <div className="relative grid grid-cols-2 gap-6">
                {[
                  { val: "500+", label: "Deals Closed" },
                  { val: "1,200+", label: "Happy Clients" },
                  { val: "PKR 2B+", label: "Managed" },
                  { val: "15+", label: "Top Projects" }
                ].map((stat) => (
                  <div key={stat.label} className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] text-center">
                    <div className="text-4xl md:text-5xl font-display font-black text-accent mb-2">{stat.val}</div>
                    <div className="text-gray-400 font-bold uppercase tracking-widest text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-accent font-black uppercase tracking-[0.25em] text-xs mb-3 block">Elite Societies</span>
            <h2 className="text-3xl md:text-4xl font-display font-black text-primary">Top Investment Projects</h2>
          </div>
          <button className="px-6 py-3 rounded-xl border-2 border-primary font-bold text-sm hover:bg-primary hover:text-white transition-all">
            All Projects
          </button>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {PROJECTS.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -10 }}
              className="group relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <img src={project.image} alt={project.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-10">
                <span className="text-accent font-bold uppercase tracking-widest text-[10px] mb-2 block">{project.location}</span>
                <h3 className="text-2xl font-display font-black text-white mb-3">{project.name}</h3>
                <p className="text-gray-300 text-sm font-medium mb-6 line-clamp-2">{project.description}</p>
                <div className="flex items-center space-x-2 text-white text-sm font-black group/link">
                  <span>Explore</span>
                  <div className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center group-hover/link:bg-accent group-hover/link:border-accent transition-all">
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <span className="text-accent font-black uppercase tracking-[0.25em] text-xs mb-3 block">Social Proof</span>
          <h2 className="text-3xl md:text-4xl font-display font-black text-primary">Trusted by Buyers</h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {TESTIMONIALS.map((testi) => (
            <div key={testi.id} className="bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="flex text-accent mb-8">
                  {[1, 2, 3, 4, 5].map((s) => <Zap key={s} size={20} fill="currentColor" />)}
                </div>
                <p className="text-2xl font-bold italic text-primary/80 leading-relaxed">"{testi.text}"</p>
              </div>
              <div className="mt-10 flex items-center space-x-6">
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center font-black text-accent text-2xl">
                  {testi.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xl font-black text-primary">{testi.name}</h4>
                  <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">{testi.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-accent relative overflow-hidden">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-white/10 -skew-x-12 translate-x-1/2" />
         <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-6">Don't Miss the Next Opportunity</h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">Good deals don't stay long. Talk to an expert now and secure your investment before the price goes up.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => openWhatsApp()} 
              className="w-full sm:w-auto px-10 py-5 bg-white text-accent rounded-xl font-black text-lg shadow-xl hover:scale-105 transition-transform flex items-center justify-center space-x-3"
            >
              <MessageCircle size={24} />
              <span>WhatsApp Now</span>
            </button>
            <button className="w-full sm:w-auto px-10 py-5 border-2 border-white text-white rounded-xl font-black text-lg hover:bg-white hover:text-accent transition-all">
              Request Callback
            </button>
          </div>
         </div>
      </section>

    </div>
  );
}
