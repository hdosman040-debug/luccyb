import React from "react";

const stripImages = [
  {
    id: 1,
    src: "/images/lucy-hotel/rooms/room-executive-suite.jpg",
    title: "Executive Suite",
  },
  {
    id: 2,
    src: "/images/lucy-hotel/rooms/room-deluxe-queen.jpg",
    title: "Deluxe Queen",
  },
  {
    id: 3,
    src: "/images/lucy-hotel/rooms/room-standard-king.jpg",
    title: "Standard King",
  },
  {
    id: 4,
    src: "/images/lucy-hotel/building-day-view.jpg",
    title: "Lucy Hotel Exterior",
  },
];

export function ImageStrip() {
  return (
    <div className="bg-white py-6 border-b border-[#E2D6BC]/30">
      {/* Horizontal Scroll Wrapper */}
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-6 scrollbar-none scroll-smooth">
        {stripImages.map((img) => (
          <div
            key={img.id}
            className="min-w-[280px] sm:min-w-[320px] aspect-[4/3] snap-align-start relative overflow-hidden group border border-[#E2D6BC]/40 shadow-sm"
          >
            {/* Image with hover zoom effect */}
            <img
              src={img.src}
              alt={img.title}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Soft subtle tag */}
            <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-widest text-[#E2D6BC] font-medium">
              {img.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
