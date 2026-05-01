import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn, openWhatsApp } from '../../lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Listings', path: '/listings' },
    { name: 'Projects', path: '/projects' },
    { name: 'Investment', path: '/investment' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3 border-b border-gray-100" : "bg-white/50 backdrop-blur-sm py-5 shadow-sm"
    )}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-accent flex items-center justify-center rounded-xl shadow-lg">
            <span className="text-white font-display font-bold text-xl italic">IH</span>
          </div>
          <span className={cn(
            "text-xl md:text-2xl font-display font-black tracking-tighter text-primary"
          )}>ITTEFAQ HOMES</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "font-bold text-sm transition-colors hover:text-accent",
                location.pathname === item.path ? "text-accent" : "text-primary"
              )}
            >
              {item.name}
            </Link>
          ))}
          <button 
            onClick={() => openWhatsApp()}
            className="flex items-center space-x-2 px-6 py-2.5 rounded-full cta-gradient font-bold shadow-lg hover:scale-105 transition-transform"
          >
            <MessageCircle size={18} />
            <span>📲 WhatsApp Now</span>
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-primary"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl p-6 flex flex-col space-y-4"
          >
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold text-primary hover:text-accent"
              >
                {item.name}
              </Link>
            ))}
            <button 
              onClick={() => {
                openWhatsApp();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center space-x-2 px-6 py-4 rounded-xl cta-gradient font-bold shadow-lg"
            >
              <MessageCircle size={20} />
              <span>WhatsApp Now</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
