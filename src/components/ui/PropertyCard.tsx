import React from 'react';
import { Property } from '../../types';
import { MapPin, Maximize2, Bed, Bath, ArrowRight, MessageCircle } from 'lucide-react';
import { cn, openWhatsApp } from '../../lib/utils';
import { Link } from 'react-router-dom';

interface PropertyCardProps {
  property: Property;
  key?: string;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="group bg-white rounded-[2rem] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden text-white">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-20">
          {property.isHot && (
            <span className="bg-red-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">🔥 Hot Deal</span>
          )}
          {property.isNew && (
            <span className="bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">✨ New</span>
          )}
          {property.isUrgent && (
            <span className="bg-orange-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">⚡ Urgent</span>
          )}
        </div>

        <div className="absolute bottom-4 right-4 z-20">
          <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-xl font-bold text-primary text-xs shadow-lg">
            {property.type}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <div className="flex items-center text-accent mb-1.5">
            <MapPin size={14} className="mr-1" />
            <span className="text-xs font-bold">{property.location}</span>
          </div>
          <h3 className="text-lg font-display font-bold text-primary leading-tight group-hover:text-accent transition-colors line-clamp-2">
            {property.title}
          </h3>
        </div>

        <div className="flex items-center gap-4 mb-6 py-3 border-y border-gray-50 text-gray-500">
          <div className="flex items-center space-x-1.5">
            <Maximize2 size={16} />
            <span className="font-semibold text-xs">{property.area}</span>
          </div>
          {property.beds && (
            <div className="flex items-center space-x-1.5">
              <Bed size={16} />
              <span className="font-semibold text-xs">{property.beds} Bed</span>
            </div>
          )}
          {property.baths && (
            <div className="flex items-center space-x-1.5">
              <Bath size={16} />
              <span className="font-semibold text-xs">{property.baths} Bath</span>
            </div>
          )}
        </div>

        <div className="mt-auto">
          <div className="flex items-baseline mb-5">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest mr-2">Price</span>
            <span className="text-xl font-black text-primary">PKR {(property.price / 100000).toLocaleString()} Lac</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Link 
              to={`/property/${property.id}`}
              className="px-4 py-2.5 bg-gray-50 text-primary rounded-xl font-bold text-sm flex items-center justify-center space-x-2 hover:bg-primary hover:text-white transition-all"
            >
              <span>Details</span>
              <ArrowRight size={14} />
            </Link>
            <button 
              onClick={() => openWhatsApp(`Hi, I'm interested in: ${property.title} (${property.location})`)}
              className="px-4 py-2.5 bg-success text-white rounded-xl font-bold text-sm flex items-center justify-center space-x-2 hover:bg-success/90 transition-all shadow-md"
            >
              <MessageCircle size={14} />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
