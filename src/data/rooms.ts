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
    image: "/images/lucy-hotel/rooms/room-deluxe-queen.jpg",
    gallery: [
      "/images/lucy-hotel/rooms/room-deluxe-queen.jpg",
      "/images/lucy-hotel/rooms/room-executive-suite.jpg",
      "/images/lucy-hotel/rooms/room-standard-king.jpg"
    ],
    guests: 2,
    price: 3500,
    amenityKeys: ["wifi", "breakfast", "ac", "tv"],
  },
  {
    id: "executive",
    image: "/images/lucy-hotel/rooms/room-executive-suite.jpg",
    gallery: [
      "/images/lucy-hotel/rooms/room-executive-suite.jpg",
      "/images/lucy-hotel/rooms/room-standard-king.jpg",
      "/images/lucy-hotel/rooms/room-deluxe-queen.jpg"
    ],
    guests: 2,
    price: 5500,
    amenityKeys: ["wifi", "breakfast", "ac", "tv", "workspace"],
  },
  {
    id: "junior",
    image: "/images/lucy-hotel/rooms/room-standard-king.jpg",
    gallery: [
      "/images/lucy-hotel/rooms/room-standard-king.jpg",
      "/images/lucy-hotel/rooms/room-deluxe-queen.jpg",
      "/images/lucy-hotel/rooms/room-executive-suite.jpg"
    ],
    guests: 3,
    price: 7500,
    amenityKeys: ["wifi", "breakfast", "ac", "tv", "lounge", "minibar"],
  },
  {
    id: "family",
    image: "/images/lucy-hotel/rooms/room-deluxe-queen.jpg", // Reusing your luxury room layouts elegantly
    gallery: [
      "/images/lucy-hotel/rooms/room-deluxe-queen.jpg",
      "/images/lucy-hotel/rooms/room-standard-king.jpg"
    ],
    guests: 4,
    price: 9500,
    amenityKeys: ["wifi", "breakfast", "ac", "tv", "lounge", "minibar"],
  },
  {
    id: "presidential",
    image: "/images/lucy-hotel/rooms/room-executive-suite.jpg",
    gallery: [
      "/images/lucy-hotel/rooms/room-executive-suite.jpg",
      "/images/lucy-hotel/rooms/room-deluxe-queen.jpg",
      "/images/lucy-hotel/rooms/room-standard-king.jpg"
    ],
    guests: 4,
    price: 16000,
    amenityKeys: ["wifi", "breakfast", "ac", "tv", "lounge", "minibar", "butler", "pool"],
  },
];
