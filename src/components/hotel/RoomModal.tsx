import { useEffect, useState } from "react";
import { Users, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { type Room } from "@/data/rooms";
import { whatsappLink } from "@/data/hotel";
import { amenityIcons } from "./amenityIcons";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export function RoomModal({ room, onClose }: { room: Room | null; onClose: () => void }) {
  const { t } = useLanguage();
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    setActiveImg(0);
  }, [room]);

  if (!room) return null;
  const info = t.rooms.items[room.id as keyof typeof t.rooms.items];

  const bookMsg = `${t.whatsappMsg}\n${t.booking.room}: ${info.name}`;

  return (
    <Dialog open={!!room} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-h-[92vh] max-w-3xl overflow-y-auto rounded-sm p-0">
        <div className="relative">
          <img
            src={room.gallery[activeImg]}
            alt={info.name}
            className="aspect-video w-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute right-3 top-3 rounded-full bg-charcoal/70 p-2 text-white backdrop-blur-sm transition-colors hover:bg-charcoal"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex gap-2 px-6 pt-4">
          {room.gallery.map((src, i) => (
            <button
              key={i}
              onClick={() => setActiveImg(i)}
              className={cn(
                "h-14 w-20 overflow-hidden rounded-sm border-2 transition-all",
                i === activeImg ? "border-gold" : "border-transparent opacity-60 hover:opacity-100",
              )}
            >
              <img src={src} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-3xl font-semibold">{info.name}</h3>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Users className="h-4 w-4 text-gold" />
              {room.guests} {t.rooms.guests}
            </span>
          </div>
          <p className="mt-1 text-gold">
            {room.price.toLocaleString()} {t.rooms.currency} / {t.rooms.night}
          </p>

          <p className="mt-4 leading-relaxed text-muted-foreground">{info.long}</p>

          <h4 className="mt-6 text-sm font-semibold uppercase tracking-wider">
            {t.rooms.amenities}
          </h4>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {room.amenityKeys.map((key) => {
              const Icon = amenityIcons[key];
              return (
                <span key={key} className="flex items-center gap-2 text-sm text-foreground/80">
                  <Icon className="h-4 w-4 text-gold" />
                  {t.amenities[key as keyof typeof t.amenities]}
                </span>
              );
            })}
          </div>

          <a
            href={whatsappLink(bookMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 block w-full rounded-none bg-gold py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-gold-foreground transition-transform hover:scale-[1.02]"
          >
            {t.rooms.bookRoom}
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}
