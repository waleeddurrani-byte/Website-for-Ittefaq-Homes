import React, { useState } from 'react';
import { Search, MapPin, Building2, Wallet, Filter } from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion } from 'motion/react';

export default function QuickSearch() {
  const [activeType, setActiveType] = useState('Plots');

  const types = ['Plots', 'Homes', 'Flats', 'Commercial'];

  return (
    <section id="search" className="relative -mt-20 z-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-[2rem] shadow-2xl p-6 md:p-10">
          <div className="mb-8 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-primary">Start Your Search in Seconds</h2>
            <p className="text-gray-500 mt-2">Find exactly what you're looking for with our smart filters.</p>
          </div>

          <div className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={cn(
                  "px-6 py-2.5 rounded-full font-bold transition-all",
                  activeType === type 
                    ? "bg-accent text-white shadow-lg" 
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                )}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">City / Area</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="text" 
                  placeholder="Where to look?"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Budget Range</label>
              <div className="relative">
                <Wallet className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <select className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all appearance-none cursor-pointer">
                  <option>Any Budget</option>
                  <option>Below 50 Lac</option>
                  <option>50 Lac - 1 Crore</option>
                  <option>1 Crore - 5 Crore</option>
                  <option>Above 5 Crore</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-sm font-bold text-gray-700 ml-1">Project</label>
              <div className="relative">
                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <select className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all appearance-none cursor-pointer">
                  <option>All Projects</option>
                  <option>Bahria Town</option>
                  <option>DHA</option>
                  <option>Capital Smart City</option>
                </select>
              </div>
            </div>

            <div className="flex items-end">
              <button className="w-full py-4 rounded-2xl cta-gradient font-bold text-lg flex items-center justify-center space-x-2 shadow-xl hover:scale-[1.02] transition-transform active:scale-95">
                <Search size={22} />
                <span>Find My Property</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
