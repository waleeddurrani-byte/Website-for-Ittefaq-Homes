import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, Clock, Globe } from 'lucide-react';
import { openWhatsApp } from '../lib/utils';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-accent font-black uppercase tracking-[0.25em] text-xs mb-3 block">Get In Touch</span>
          <h1 className="text-3xl md:text-5xl font-display font-black text-primary mb-6">We're Here to Help.</h1>
          <p className="text-lg text-gray-500 font-medium leading-relaxed">
            Whether you have a specific property in mind or just want to explore possibilities, our team is ready to guide you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Details */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-4">
                     <Phone size={24} />
                  </div>
                  <h4 className="text-lg font-black text-primary mb-1">Call Us</h4>
                  <p className="text-gray-500 font-bold mb-3 text-sm">+92 300 0000000</p>
                  <button className="text-accent text-sm font-black hover:underline">Click to Call</button>
               </div>
               <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-[#25D366] mb-4">
                     <MessageCircle size={24} />
                  </div>
                  <h4 className="text-lg font-black text-primary mb-1">WhatsApp</h4>
                  <p className="text-gray-500 font-bold mb-3 text-sm">Instant Response</p>
                  <button onClick={() => openWhatsApp()} className="text-[#25D366] text-sm font-black hover:underline">Start Chat</button>
               </div>
               <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-primary mb-4">
                     <Mail size={24} />
                  </div>
                  <h4 className="text-lg font-black text-primary mb-1">Email</h4>
                  <p className="text-gray-500 font-bold mb-3 text-sm">info@ittefaqhomes.com</p>
                  <button className="text-primary text-sm font-black hover:underline">Send Email</button>
               </div>
               <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-primary mb-4">
                     <Clock size={24} />
                  </div>
                  <h4 className="text-lg font-black text-primary mb-1">Working Hours</h4>
                  <p className="text-gray-400 font-bold mb-0.5 text-xs">Mon - Sat</p>
                  <p className="text-gray-500 font-bold text-sm">10 AM - 8 PM</p>
               </div>
            </div>

            <div className="bg-primary text-white p-10 rounded-3xl relative overflow-hidden shadow-xl">
               <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full -mr-20 -mt-20 blur-3xl" />
               <h3 className="text-2xl font-display font-black mb-6">Main Office</h3>
               <div className="flex items-start space-x-5">
                  <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                     <MapPin size={24} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xl font-bold mb-1">Phase 8, Bahria Town</p>
                    <p className="text-gray-400 text-base font-medium leading-relaxed">Office 12, Main Blvd Commercial Area, <br />Rawalpindi, Pakistan.</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100">
             <h3 className="text-2xl font-display font-black text-primary mb-2">Send a Message</h3>
             <p className="text-gray-400 font-bold mb-8 text-sm">We usually respond within 30 minutes during working hours.</p>
             
             <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                   <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Full Name</label>
                      <input type="text" className="w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent text-sm" placeholder="Your Name" />
                   </div>
                   <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Phone Number</label>
                      <input type="tel" className="w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent text-sm" placeholder="+92 3XX XXXXXXX" />
                   </div>
                </div>
                <div className="space-y-1.5">
                   <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                   <input type="email" className="w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent text-sm" placeholder="email@example.com" />
                </div>
                <div className="space-y-1.5">
                   <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Interested In</label>
                   <select className="w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent text-sm appearance-none cursor-pointer font-bold">
                      <option>Buying Property</option>
                      <option>Investment Advice</option>
                      <option>Selling Property</option>
                      <option>Project Consultation</option>
                   </select>
                </div>
                <div className="space-y-1.5">
                   <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Message</label>
                   <textarea rows={4} className="w-full px-5 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent text-sm resize-none" placeholder="How can we help?"></textarea>
                </div>
                <button type="submit" className="w-full py-4 rounded-xl cta-gradient font-black text-lg shadow-lg hover:scale-[1.01] transition-transform">
                   Send Message
                </button>
             </form>
          </div>

        </div>
      </div>
    </div>
  );
}
