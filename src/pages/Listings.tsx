import React, { useState } from 'react';
import { PROPERTIES } from '../constants';
import PropertyCard from '../components/ui/PropertyCard';
import { Filter, Search, ChevronDown, MapPin, Building, DollarSign } from 'lucide-react';
import { PropertyType } from '../types';

export default function Listings() {
  const [filterType, setFilterType] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProperties = PROPERTIES.filter(p => {
    const matchesType = filterType === 'All' || p.type === filterType;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Header content */}
        <div className="mb-12">
          <span className="text-accent font-black uppercase tracking-[0.25em] text-xs mb-3 block">Verified Inventory</span>
          <h1 className="text-3xl md:text-4xl font-display font-black text-primary mb-5">Browse Verified Properties</h1>
          <p className="text-lg text-gray-500 font-medium max-w-2xl">Every listing is manually verified by our experts to ensure you get the best market value without any risk.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Sidebar Filters */}
          <aside className="lg:w-80 shrink-0 space-y-8">
            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100">
              <h3 className="text-xl font-display font-bold mb-8 flex items-center gap-2">
                <Filter size={20} className="text-accent" />
                <span>Filters</span>
              </h3>

              <div className="space-y-8">
                {/* Search */}
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Search</label>
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      type="text" 
                      placeholder="Title or Location"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/50"
                    />
                  </div>
                </div>

                {/* Property Type */}
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Property Type</label>
                  <div className="grid grid-cols-1 gap-2">
                    {['All', 'Plot', 'House', 'Flat', 'Commercial'].map((type) => (
                      <button
                        key={type}
                        onClick={() => setFilterType(type)}
                        className={`flex items-center justify-between px-5 py-3 rounded-xl font-bold transition-all ${
                          filterType === type ? 'bg-accent text-white shadow-lg' : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <span>{type}</span>
                        {filterType === type && <div className="w-2 h-2 bg-white rounded-full" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range placeholder */}
                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-widest text-gray-400">Price Range</label>
                  <div className="flex items-center gap-3">
                    <input type="text" placeholder="Min" className="w-1/2 px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm" />
                    <span className="text-gray-300">-</span>
                    <input type="text" placeholder="Max" className="w-1/2 px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl text-sm" />
                  </div>
                </div>

                <button 
                  onClick={() => { setFilterType('All'); setSearchQuery(''); }}
                  className="w-full py-4 text-accent font-black hover:bg-accent/5 rounded-xl transition-all"
                >
                  Clear All Filters
                </button>
              </div>
            </div>

            {/* Help Block */}
            <div className="bg-primary p-8 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-accent/20 rounded-full -mr-12 -mt-12 blur-2xl" />
               <h4 className="text-xl font-bold mb-4 relative z-10">Can't find what you're looking for?</h4>
               <p className="text-gray-400 text-sm mb-6 relative z-10 leading-relaxed">We have off-market units that are not listed publicly. Contact us for custom requirements.</p>
               <button className="w-full py-4 bg-accent text-white font-black rounded-2xl hover:scale-[1.02] transition-transform">Get Expert Help</button>
            </div>
          </aside>

          {/* Listings Grid */}
          <main className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
              <span className="text-gray-500 font-bold">Showing <span className="text-primary">{filteredProperties.length}</span> Results</span>
              <div className="flex items-center space-x-4">
                <span className="text-sm font-bold text-gray-400">Sort by:</span>
                <select className="bg-transparent font-black px-4 py-2 focus:outline-none cursor-pointer">
                  <option>Latest Arrivals</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>High ROI</option>
                </select>
              </div>
            </div>

            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredProperties.map((prop) => (
                  <PropertyCard key={prop.id} property={prop} />
                ))}
              </div>
            ) : (
              <div className="text-center py-32 bg-white rounded-[3rem] border-2 border-dashed border-gray-100">
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search size={40} className="text-gray-300" />
                </div>
                <h3 className="text-2xl font-bold mb-2">No matching properties found</h3>
                <p className="text-gray-500 font-medium">Try adjusting your filters or search keywords.</p>
              </div>
            )}
          </main>

        </div>
      </div>
    </div>
  );
}
