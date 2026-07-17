export interface HotelConfig {
  name: string;
  tagline: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  whatsapp: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
    googleMapsLink: string;
  };
  social: {
    facebook: string;
    instagram: string;
    telegram: string;
    twitter: string;
  };
  stats: { value: number; suffix: string; key: string }[];
};
