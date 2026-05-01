import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import { MapPin, ArrowRight, Building2, Landmark, Waves } from 'lucide-react';
import { openWhatsApp } from '../lib/utils';
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-16">
          <span className="text-accent font-black uppercase tracking-[0.25em] text-xs mb-3 block">Societies & Developments</span>
          <h1 className="text-4xl md:text-6xl font-display font-black text-primary mb-6">
            Elite Investment <span className="text-accent">Projects</span>
          </h1>
          <p className="text-lg text-gray-500 font-medium max-w-2xl">
            We focus on Pakistan's most prestigious and high-growth societies, ensuring long-term value and elite lifestyle standards for our clients.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[3rem] overflow-hidden shadow-xl border border-gray-100 flex flex-col lg:flex-row"
            >
              <div className="lg:w-1/2 aspect-[16/10] lg:aspect-auto">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center text-accent mb-4">
                  <MapPin size={18} className="mr-2" />
                  <span className="text-sm font-black uppercase tracking-widest">{project.location}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-display font-black text-primary mb-6">{project.name}</h3>
                <p className="text-lg text-gray-600 font-medium leading-relaxed mb-8">
                  {project.description} Our portfolio in {project.name} includes the most sought-after residential plots and luxury commercial opportunities. This project represents the pinnacle of modern living with state-of-the-art infrastructure.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-10">
                   <div className="flex items-center space-x-3 text-primary">
                      <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-accent">
                         <Building2 size={20} />
                      </div>
                      <span className="font-bold">Gated Guarded</span>
                   </div>
                   <div className="flex items-center space-x-3 text-primary">
                      <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center text-accent">
                         <Landmark size={20} />
                      </div>
                      <span className="font-bold">Prime Amenities</span>
                   </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    to="/listings"
                    className="px-8 py-4 bg-primary text-white rounded-xl font-black text-center flex items-center justify-center space-x-2 hover:bg-accent hover:shadow-lg transition-all"
                  >
                    <span>View Inventory</span>
                    <ArrowRight size={18} />
                  </Link>
                  <button 
                    onClick={() => openWhatsApp(`I'm interested in the ${project.name} project.`)}
                    className="px-8 py-4 border-2 border-primary text-primary rounded-xl font-black hover:bg-primary hover:text-white transition-all shadow-sm"
                  >
                    Request Brochure
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Commercial Projects Placeholder Text Area */}
        <section className="mt-24 bg-gray-50 p-12 md:p-20 rounded-[4rem] text-center border border-gray-100">
           <div className="max-w-3xl mx-auto">
             <span className="text-accent font-black uppercase tracking-[0.25em] text-xs mb-3 block">Future Outlook</span>
             <h2 className="text-3xl md:text-5xl font-display font-black text-primary mb-8">Upcoming Mega Projects</h2>
             <p className="text-lg text-gray-500 font-medium mb-10 leading-relaxed">
               We are currently expanding our reach into new emerging sectors across the twin cities. Stay tuned for exclusive early-bird commercial deals in upcoming blocks of New Islamabad Airport and motorway-linked societies.
             </p>
             <button 
              onClick={() => openWhatsApp("Add me to the priority list for upcoming projects.")}
              className="px-10 py-5 bg-accent text-white rounded-xl font-black text-lg shadow-xl hover:scale-105 transition-transform"
             >
               Join VIP Preview List
             </button>
           </div>
        </section>
      </div>
    </div>
  );
}
