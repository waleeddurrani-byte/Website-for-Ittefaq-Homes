export type PropertyType = 'Plot' | 'House' | 'Flat' | 'Commercial';

export interface Property {
  id: string;
  title: string;
  type: PropertyType;
  price: number;
  location: string;
  society: string;
  area: string;
  beds?: number;
  baths?: number;
  image: string;
  isHot?: boolean;
  isNew?: boolean;
  isUrgent?: boolean;
  description: string;
  features: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  location: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
}
