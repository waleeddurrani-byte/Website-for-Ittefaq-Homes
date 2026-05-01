import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROPERTIES } from '../constants';
import { 
  MapPin, Maximize2, Bed, Bath, ArrowLeft, 
  MessageCircle, Phone, CheckCircle, ShieldCheck,
  TrendingDown, Building2, Landmark
} from 'lucide-react';
import { openWhatsApp } from '../lib/utils';
import { motion } from 'motion/react';

export default function PropertyDetail() {
  const { id } = useParams();
  const property = PROPERTIES.find(p => p.id === id);

  if (!property) return <div className="pt-40 text-center">Property not found</div>;

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Back button and breadcrumbs */}
        <Link to="/listings" className="flex items-center space-x-2 text-gray-400 font-bold hover:text-accent transition-colors mb-10 text-sm">
          <ArrowLeft size={16} />
          <span>Back to All Listings</span>
        </Link>

        {/* Above the fold header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative rounded-[2.5rem] overflow-hidden shadow-xl h-[400px] lg:h-[550px]"
          >
            <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="flex flex-wrap gap-2 mb-6">
               {property.isHot && <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shrink-0">🔥 Hot Deal</span>}
               <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shrink-0">Verified Listing</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-display font-black text-primary mb-4 leading-tight">
              {property.title}
            </h1>
            <div className="flex items-center text-gray-500 mb-8 pb-8 border-b border-gray-50">
               <MapPin size={20} className="text-accent mr-2" />
               <span className="text-lg font-bold">{property.location}</span>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
               <div className="bg-gray-50 p-4 rounded-2xl flex flex-col items-center text-center">
                  <Maximize2 className="text-accent mb-2" size={24} />
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Area</span>
                  <span className="text-base font-black">{property.area}</span>
               </div>
               {property.beds && (
                 <div className="bg-gray-50 p-4 rounded-2xl flex flex-col items-center text-center">
                    <Bed className="text-accent mb-2" size={24} />
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Beds</span>
                    <span className="text-base font-black">{property.beds}</span>
                 </div>
               )}
               {property.baths && (
                 <div className="bg-gray-50 p-4 rounded-2xl flex flex-col items-center text-center">
                    <Bath className="text-accent mb-2" size={24} />
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Baths</span>
                    <span className="text-base font-black">{property.baths}</span>
                 </div>
               )}
            </div>

            <div className="flex items-center justify-between mb-8">
               <div>
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-1">Asking Price</span>
                  <span className="text-3xl md:text-4xl font-black text-primary">PKR {(property.price / 100000).toLocaleString()} Lac</span>
               </div>
               <div className="bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider">High ROI Potential</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
               <button 
                onClick={() => openWhatsApp(`Hi! I'm interested in ${property.title}. Plz share details.`)}
                className="flex-1 py-4 rounded-xl cta-gradient font-black text-lg flex items-center justify-center space-x-3 shadow-lg hover:scale-[1.02] transition-transform"
               >
                 <MessageCircle size={22} />
                 <span>WhatsApp Details</span>
               </button>
               <button className="flex-1 py-4 border-2 border-primary text-primary rounded-xl font-black text-lg shadow-sm hover:bg-primary hover:text-white transition-all">
                 Book a Visit
               </button>
            </div>

            {/* Urgency Block */}
            <div className="p-5 bg-orange-50 border border-orange-100 rounded-2xl flex items-center space-x-4">
               <div className="w-10 h-10 bg-orange-500 text-white rounded-xl flex items-center justify-center shrink-0">
                  <TrendingDown size={20} />
               </div>
               <p className="text-orange-900 text-sm font-bold">Limited availability in this sector. High investor interest detected.</p>
            </div>
          </motion.div>
        </div>

        {/* Detailed Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
           <div className="lg:col-span-2 space-y-12">
              
              {/* Description */}
              <section>
                 <h2 className="text-2xl font-display font-black text-primary mb-6 flex items-center">
                    <span className="w-2 h-8 bg-accent mr-4 rounded-full" />
                    Property Overview
                 </h2>
                 <p className="text-lg text-gray-600 font-medium leading-relaxed mb-6">{property.description}</p>
                 <p className="text-lg text-gray-600 font-medium leading-relaxed">Located in a prime sector, this property offers unparalleled convenience and lifestyle. Secure your future in one of the most sought-after communities with this high-potential listing.</p>
              </section>

              {/* Features */}
              <section className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100">
                 <h2 className="text-2xl font-display font-black text-primary mb-8">Features & Amenities</h2>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {property.features.map(f => (
                      <div key={f} className="flex items-center space-x-3 text-base font-bold text-primary">
                         <div className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center text-success shrink-0">
                            <CheckCircle size={18} fill="currentColor" className="text-white" />
                            <ShieldCheck size={18} className="absolute text-success" />
                         </div>
                         <span>{f}</span>
                      </div>
                    ))}
                    <div className="flex items-center space-x-3 text-base font-bold text-primary">
                      <div className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center text-accent shrink-0">
                        <Landmark size={18} />
                      </div>
                      <span>Near Mosque & Parks</span>
                    </div>
                    <div className="flex items-center space-x-3 text-base font-bold text-primary">
                      <div className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center text-accent shrink-0">
                        <Building2 size={18} />
                      </div>
                      <span>Secure Gated Entry</span>
                    </div>
                 </div>
              </section>

              {/* Investment Potential */}
              <section>
                 <h2 className="text-2xl font-display font-black text-primary mb-6">Market Insight</h2>
                 <div className="bg-primary text-white p-10 rounded-[2.5rem] relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                       <div className="space-y-4">
                          <h4 className="text-lg font-bold flex items-center gap-2">
                             <TrendingDown className="text-accent" size={20} />
                             Expected Annual ROI
                          </h4>
                          <div className="text-4xl font-display font-black text-accent">15-20%</div>
                          <p className="text-gray-400 text-sm font-medium">Based on current infrastructure expansion in {property.society}.</p>
                       </div>
                       <div className="space-y-4">
                          <h4 className="text-lg font-bold flex items-center gap-2">
                             <ShieldCheck className="text-accent" size={20} />
                             Market Liquidity
                          </h4>
                          <div className="text-4xl font-display font-black text-accent">High</div>
                          <p className="text-gray-400 text-sm font-medium">Consistent transaction volume in this specific block.</p>
                       </div>
                    </div>
                 </div>
              </section>

           </div>

           {/* Sidebar contact form */}
           <aside className="space-y-6">
              <div className="sticky top-32 bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-50">
                 <h3 className="text-xl font-display font-black mb-6">Expert Assistance</h3>
                 <form className="space-y-4 mb-6">
                    <input type="text" placeholder="Full Name" className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent text-sm" />
                    <input type="tel" placeholder="WhatsApp Number" className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent text-sm" />
                    <textarea placeholder="Tell us what you're looking for..." rows={3} className="w-full px-5 py-3.5 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent text-sm resize-none"></textarea>
                    <button className="w-full py-4 rounded-xl cta-gradient font-black text-lg shadow-lg hover:scale-[1.01] transition-transform">Get a Callback</button>
                 </form>
                 
                 <div className="space-y-3 pt-6 border-t border-gray-100">
                    <button 
                      onClick={() => openWhatsApp()}
                      className="w-full py-3.5 bg-success text-white rounded-xl font-black text-sm flex items-center justify-center space-x-2 shadow-sm"
                    >
                       <MessageCircle size={18} />
                       <span>Instant WhatsApp Chat</span>
                    </button>
                    <button className="w-full py-3.5 bg-primary text-white rounded-xl font-black text-sm flex items-center justify-center space-x-2 shadow-sm">
                       <Phone size={18} />
                       <span>Direct Phone Call</span>
                    </button>
                 </div>
              </div>
           </aside>
        </div>

      </div>
    </div>
  );
}
