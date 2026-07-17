import { useState } from "react";
import { Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { rooms, type Room } from "@/data/rooms";
import { SectionHeader } from "./SectionHeader";
import { AnimatedSection } from "./AnimatedSection";
import { RoomModal } from "./RoomModal";
import { amenityIcons } from "./amenityIcons";

export function RoomsSection() {
  const { t } = useLanguage();
  const [active, setActive] = useState<Room | null>(null);

  return (
    <section id="rooms" className="bg-[#FAFAFA] border-t border-[#E2D6BC]/30 py-16 sm:py-24 md:py-28">
      <div className="container-lux">
        <SectionHeader
          eyebrow={t.hero.welcome}
          title={t.rooms.title}
          subtitle={t.rooms.subtitle}
        />

        <div className="mt-10 sm:mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-8">
          {rooms.map((room, i) => {
            const info = t.rooms.items[room.id as keyof typeof t.rooms.items];
            const featured = room.id === "presidential";
            return (
              <AnimatedSection
                key={room.id}
                delay={i * 80}
                className={featured ? "sm:col-span-2 lg:col-span-1" : ""}
              >
                <article className="group flex h-full flex-col overflow-hidden rounded-none border border-[#E2D6BC]/50 bg-white shadow-[0_4px_25px_rgba(15,42,67,0.02)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(15,42,67,0.08)]">
                  {/* Aspect Ratio Image Container */}
                  <div className="relative overflow-hidden bg-[#0F2A43]">
                    <img
                      src={room.image}
                      alt={info.name}
                      loading="lazy"
                      width={1200}
                      height={900}
                      className="aspect-[4/3] w-full object-cover opacity-90 transition-transform duration-[1500ms] cubic-bezier(0.22, 1, 0.36, 1) group-hover:scale-105 group-hover:opacity-100"
                    />
                    {/* Editorial Pricing Sticker with wrap defense */}
                    <span className="absolute right-0 bottom-0 bg-[#0F2A43] border-t border-l border-[#C9A227]/30 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#F3E9D2] whitespace-nowrap sm:px-5 sm:py-2.5 sm:text-[0.68rem] sm:tracking-[0.2em]">
                      {room.price.toLocaleString()} {t.rooms.currency} / {t.rooms.night}
                    </span>
                  </div>

                  {/* Room Details Content Card */}
                  <div className="flex flex-1 flex-col p-5 sm:p-8">
                    {/* Dynamic Header Row - stacked on mobile, row on desktop */}
                    <div className="flex flex-col gap-1.5 border-b border-[#E2D6BC]/20 pb-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                      <h3 className="font-serif text-xl font-medium tracking-wide text-[#0F2A43] sm:text-2xl">
                        {info.name}
                      </h3>
                      <span className="flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#C9A227] uppercase whitespace-nowrap">
                        <Users className="h-3.5 w-3.5" />
                        {room.guests} {t.booking.guestsLabel}
                      </span>
                    </div>

                    <p className="mt-4 flex-1 text-xs font-light leading-relaxed text-[#1E252D]/85 sm:text-sm">
                      {info.desc}
                    </p>

                    {/* Luxury Tag Style Amenity Badges */}
                    <div className="mt-6 flex flex-wrap gap-1.5 sm:gap-2">
                      {room.amenityKeys.slice(0, 4).map((key) => {
                        const Icon = amenityIcons[key];
                        return (
                          <span
                            key={key}
                            className="flex items-center gap-1.5 rounded-none bg-[#F3E9D2]/30 border border-[#E2D6BC]/40 px-2.5 py-1 text-[0.62rem] font-medium tracking-normal text-[#0F2A43]/90 uppercase sm:px-3 sm:py-1.5 sm:text-[0.65rem] sm:tracking-[0.1em]"
                          >
                            <Icon className="h-3.5 w-3.5 text-[#C9A227] shrink-0" />
                            {t.amenities[key as keyof typeof t.amenities]}
                          </span>
                        );
                      })}
                    </div>

                    {/* Elegant Editorial Details Action Button */}
                    <button
                      onClick={() => setActive(room)}
                      className="mt-6 w-full rounded-none border border-[#0F2A43] bg-transparent py-3 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#0F2A43] transition-all duration-300 hover:bg-[#0F2A43] hover:text-[#F3E9D2] hover:border-[#0F2A43] shadow-sm hover:shadow sm:mt-8 sm:py-3.5 sm:text-[0.7rem] sm:tracking-[0.25em]"
                    >
                      {t.rooms.viewDetails}
                    </button>
                  </div>
                </article>
              </AnimatedSection>
            );
          })}
        </div>
      </div>

      <RoomModal room={active} onClose={() => setActive(null)} />
    </section>
  );
}
