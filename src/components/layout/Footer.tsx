import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { WHATSAPP_NUMBER, openWhatsApp } from '../../lib/utils';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-accent flex items-center justify-center rounded-xl">
                <span className="text-white font-display font-bold text-xl italic">IH</span>
              </div>
              <span className="text-xl font-display font-black tracking-tighter">ITTEFAQ HOMES</span>
            </Link>
            <p className="text-gray-400 font-medium leading-relaxed max-w-xs">
              Pakistan's most trusted real estate consultancy. We secure your future with data-backed decisions and verified listings.
            </p>
            <div className="flex space-x-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-8 text-accent">Navigation</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-bold">
              <li><Link to="/listings" className="hover:text-white transition-colors">Search Properties</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Societies & Projects</Link></li>
              <li><Link to="/investment" className="hover:text-white transition-colors">Investment Plans</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-8 text-accent">Contact</h4>
            <ul className="space-y-6 text-gray-400 text-sm font-bold">
              <li className="flex items-start space-x-3">
                <MapPin className="text-accent shrink-0" size={16} />
                <span>Office 12, Main Blvd, Phase 8 Bahria Town, Rawalpindi</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-accent shrink-0" size={16} />
                <span>+92 300 0000000</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-accent shrink-0" size={16} />
                <span>info@ittefaqhomes.com</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 relative overflow-hidden">
            <h4 className="text-lg font-bold mb-4 relative z-10">Subscribe to Deals</h4>
            <p className="text-gray-500 text-sm mb-6 relative z-10 leading-relaxed">Get the best property opportunities directly in your inbox before they hit the market.</p>
            <div className="relative z-10">
              <input type="email" placeholder="Your Email" className="w-full bg-white/10 border border-white/20 px-4 py-3 rounded-xl text-sm mb-3 focus:outline-none focus:ring-1 focus:ring-accent" />
              <button className="w-full py-3 bg-accent text-white font-black rounded-xl text-sm transition-transform hover:scale-[1.02]">
                Subscribe Now
              </button>
            </div>
          </div>

        </div>

        <div className="pt-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm font-bold">
          <p>© 2026 Ittefaq Homes. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
