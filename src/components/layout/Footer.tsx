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
              <span className="text-2xl font-display font-black tracking-tighter">ITTEFAQ HOMES</span>
            </Link>
            <p className="text-gray-400 font-medium leading-relaxed">
              Pakistan's most trusted real estate consultancy. We don't just sell property, we secure your future with data-backed decisions.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-accent hover:border-accent transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 text-white">Quick Links</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><Link to="/listings" className="hover:text-accent transition-colors">Verified Listings</Link></li>
              <li><Link to="/projects" className="hover:text-accent transition-colors">Top Projects</Link></li>
              <li><Link to="/investment" className="hover:text-accent transition-colors">Investment Plans</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Market Insights</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 text-white">Contact Us</h4>
            <ul className="space-y-6 text-gray-400 font-medium">
              <li className="flex items-start space-x-3">
                <MapPin className="text-accent shrink-0" size={20} />
                <span>Office 12, Main Blvd, Phase 8 Bahria Town, Rawalpindi</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-accent shrink-0" size={20} />
                <span>+92 300 0000000</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-accent shrink-0" size={20} />
                <span>info@ittefaqhomes.com</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 p-8 rounded-[2.5rem] border border-gray-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 blur-2xl" />
            <h4 className="text-lg font-bold mb-4 relative z-10">Need Expert Advice?</h4>
            <p className="text-gray-500 mb-6 relative z-10">Talk to our experts today for a free consultation.</p>
            <button 
              onClick={() => openWhatsApp()}
              className="w-full flex items-center justify-center space-x-2 py-4 rounded-2xl cta-gradient font-black shadow-lg relative z-10 hover:scale-[1.02] transition-transform"
            >
              <MessageCircle size={20} />
              <span>WhatsApp Now</span>
            </button>
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
