import { Property, Project, Testimonial } from './types';

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: '5 Marla Residential Plot in Bahria Town',
    type: 'Plot',
    price: 6500000,
    location: 'Phase 8, Bahria Town',
    society: 'Bahria Town',
    area: '5 Marla',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800',
    isHot: true,
    description: 'Prime location plot near hospital and commercial area. Ideal for immediate construction or investment.',
    features: ['Near Park', 'Underground Utilities', 'Gated Community']
  },
  {
    id: '2',
    title: 'Modern 3-Bed Luxury Apartment',
    type: 'Flat',
    price: 18500000,
    location: 'Gulberg Greens, Islamabad',
    society: 'Gulberg Greens',
    area: '1800 Sq Ft',
    beds: 3,
    baths: 3,
    image: 'https://images.unsplash.com/photo-1567496898731-f39b89739d7f?auto=format&fit=crop&q=80&w=800',
    isNew: true,
    description: 'High-end finishes with panoramic view of the Margalla Hills. State of the art amenities included.',
    features: ['24/7 Security', 'Gym', 'Parking', 'Backup Generator']
  },
  {
    id: '3',
    title: '10 Marla Designer House',
    type: 'House',
    price: 45000000,
    location: 'DHA Phase 6, Lahore',
    society: 'DHA',
    area: '10 Marla',
    beds: 5,
    baths: 6,
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=800',
    isUrgent: true,
    description: 'Architecturally designed house with spacious bedrooms and double height ceiling. Close to main boulevard.',
    features: ['Double Kitchen', 'Servant Quarter', 'Lush Green Lawn']
  },
  {
    id: '4',
    title: '1 Kanal Residential Plot in DHA Phase 8',
    type: 'Plot',
    price: 32000000,
    location: 'Phase 8, DHA Islamabad',
    society: 'DHA',
    area: '1 Kanal',
    image: 'https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?auto=format&fit=crop&q=80&w=800',
    isNew: true,
    description: 'Level plot in the most developed block of Phase 8. Ready for possession.',
    features: ['Park Face', 'Main Boulevard', 'Secure Location']
  },
  {
    id: '5',
    title: 'Luxury 4-Bed Penthouse in E-11',
    type: 'Flat',
    price: 28000000,
    location: 'Sector E-11, Islamabad',
    society: 'E-11',
    area: '2500 Sq Ft',
    beds: 4,
    baths: 4,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    isHot: true,
    description: 'Breathtaking views of the city. Ultra-modern interior design with smart home features.',
    features: ['Smart Home', 'Private Terrace', 'Gym Access']
  },
  {
    id: '6',
    title: '5 Marla Designer House in Bahria Orchard',
    type: 'House',
    price: 13500000,
    location: 'Bahria Orchard, Lahore',
    society: 'Bahria Orchard',
    area: '5 Marla',
    beds: 3,
    baths: 4,
    image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&q=80&w=800',
    isUrgent: true,
    description: 'Spanish style architecture with premium woodwork and tile flooring.',
    features: ['Spanish Design', 'Near Mosque', 'Gated Sector']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'b-town',
    name: 'Bahria Town',
    description: 'Asia\'s largest private real estate development.',
    location: 'Rawalpindi / Islamabad',
    image: 'https://images.unsplash.com/photo-1549517045-bc93de075e53?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'dha',
    name: 'DHA',
    description: 'Elite residential community managed by Defence Housing Authority.',
    location: 'Lahore / Karachi / Islamabad',
    image: 'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'csc',
    name: 'Capital Smart City',
    description: 'The first smart city of Pakistan.',
    location: 'Islamabad',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ahmed Malik',
    role: 'Real Estate Investor',
    text: 'Ittefaq Homes helped me find a property that exceeded my ROI expectations. Their verified listings are a game changer.'
  },
  {
    id: '2',
    name: 'Sarah Khan',
    role: 'Homeowner',
    text: 'A very smooth process from start to finish. They handled all the paperwork and even negotiated a better price.'
  }
];
