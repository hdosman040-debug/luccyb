export type Room = {
  id: string;
  image: string;
  gallery: string[];
  guests: number;
  price: number;
  amenityKeys: string[];
};

export const rooms: Room[] = [
  {
    id: "deluxe",
    image: "/images/lucy-hotel/rooms/room-deluxe-queen.webp",
    gallery: [
      "/images/lucy-hotel/rooms/room-deluxe-queen.webp",
      "/images/lucy-hotel/rooms/room-executive-suite.webp",
      "/images/lucy-hotel/rooms/room-standard-king.webp"
    ],
    guests: 2,
    price: 3500,
    amenityKeys: ["wifi", "breakfast", "ac", "tv"],
  },
  {
    id: "executive",
    image: "/images/lucy-hotel/rooms/room-executive-suite.webp",
    gallery: [
      "/images/lucy-hotel/rooms/room-executive-suite.webp",
      "/images/lucy-hotel/rooms/room-standard-king.webp",
      "/images/lucy-hotel/rooms/room-deluxe-queen.webp"
    ],
    guests: 2,
    price: 5500,
    amenityKeys: ["wifi", "breakfast", "ac", "tv", "workspace"],
  },
  {
    id: "junior",
    image: "/images/lucy-hotel/rooms/room-standard-king.webp",
    gallery: [
      "/images/lucy-hotel/rooms/room-standard-king.webp",
      "/images/lucy-hotel/rooms/room-deluxe-queen.webp",
      "/images/lucy-hotel/rooms/room-executive-suite.webp"
    ],
    guests: 3,
    price: 7500,
    amenityKeys: ["wifi", "breakfast", "ac", "tv", "lounge", "minibar"],
  },
  {
    id: "family",
    image: "/images/lucy-hotel/rooms/room-deluxe-queen.webp", // Reusing your luxury room layouts elegantly
    gallery: [
      "/images/lucy-hotel/rooms/room-deluxe-queen.webp",
      "/images/lucy-hotel/rooms/room-standard-king.webp"
    ],
    guests: 4,
    price: 9500,
    amenityKeys: ["wifi", "breakfast", "ac", "tv", "lounge", "minibar"],
  },
  {
    id: "presidential",
    image: "/images/lucy-hotel/rooms/room-executive-suite.webp",
    gallery: [
      "/images/lucy-hotel/rooms/room-executive-suite.webp",
      "/images/lucy-hotel/rooms/room-deluxe-queen.webp",
      "/images/lucy-hotel/rooms/room-standard-king.webp"
    ],
    guests: 4,
    price: 16000,
    amenityKeys: ["wifi", "breakfast", "ac", "tv", "lounge", "minibar", "butler", "pool"],
  },
];
