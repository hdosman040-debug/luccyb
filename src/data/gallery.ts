export type GalleryCategory = "rooms" | "restaurant" | "exterior";

export type GalleryItem = {
  src: string;
  category: GalleryCategory;
};

export const galleryItems: GalleryItem[] = [
  { src: "/exterior-building/building-exterior.jpg", category: "exterior" },
  { src: "/rooms/room-standard-king.jpg", category: "rooms" },
  { src: "/rooms/room-deluxe-queen.jpg", category: "rooms" },
  { src: "/rooms/room-executive-suite.jpg", category: "rooms" },
  { src: "/restaurant/food-injera-habesha.jpg", category: "restaurant" },
  { src: "/restaurant/hotel-fried-chicken-cutlet-salad.jpg", category: "restaurant" },
  { src: "/restaurant/hotel-sizzling-beef-tibs-skillet.jpg", category: "restaurant" },
  { src: "/restaurant/hotel-club-sandwich-fries.jpg", category: "restaurant" },
  { src: "/restaurant/food-tibs-rice-combo.jpg", category: "restaurant" },
  { src: "/restaurant/food-grilled-meat-rice.jpg", category: "restaurant" },
];

export const galleryCategories: GalleryCategory[] = ["rooms", "restaurant", "exterior"];
