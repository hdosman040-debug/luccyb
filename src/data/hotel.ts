import { HotelConfig } from '../types/hotel';

export const hotel: HotelConfig = {
  name: "Time Hotel",
  tagline: "Boutique Luxury & Heritage in Dessie",
  phone: "+251914313458",
  phoneDisplay: "+251 91 431 3458",
  email: "hdosman040@gmail.com",
  whatsapp: "251914313458",
  address: "Dessie, Ethiopia",
  coordinates: {
    lat: 11.144065,
    lng: 39.635530,
    googleMapsLink: "https://www.google.com/maps/place/11%C2%B008'38.6%22N+39%C2%B038'07.9%22E/@11.144065,39.635530,17z"
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    telegram: "https://t.me",
    twitter: "https://twitter.com",
  },
  stats: [
    { value: 10, suffix: "+", key: "years" },
    { value: 85, suffix: "", key: "rooms" },
    { value: 15000, suffix: "+", key: "guests" },
    { value: 60, suffix: "+", key: "staff" },
  ],
};

export function whatsappLink(message: string) {
  return `https://wa.me/${hotel.whatsapp}?text=${encodeURIComponent(message)}`;
}
