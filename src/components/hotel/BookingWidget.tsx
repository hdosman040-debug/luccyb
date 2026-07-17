import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { rooms } from "@/data/rooms";
import { whatsappLink } from "@/data/hotel";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export function BookingWidget({ defaultRoom }: { defaultRoom?: string }) {
  const { t } = useLanguage();
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState("2");
  const [room, setRoom] = useState(defaultRoom ?? "");

  const reserve = () => {
    const roomName = room ? t.rooms.items[room as keyof typeof t.rooms.items].name : "";
    const parts = [
      t.whatsappMsg,
      checkIn && `${t.booking.checkin}: ${format(checkIn, "PPP")}`,
      checkOut && `${t.booking.checkout}: ${format(checkOut, "PPP")}`,
      `${t.booking.guests}: ${guests}`,
      roomName && `${t.booking.room}: ${roomName}`,
    ].filter(Boolean);
    window.open(whatsappLink(parts.join("\n")), "_blank");
  };

  const dateBtn = (value: Date | undefined, placeholder: string) => (
    <Button
      variant="outline"
      className={cn(
        "h-12 w-full justify-start rounded-none border-white/10 bg-[#161616] text-left font-light transition-all duration-300 hover:border-[#C9A227]/40 hover:bg-[#202020] focus-visible:ring-1 focus-visible:ring-[#C9A227]",
        !value && "text-gray-500",
      )}
    >
      <CalendarIcon className="mr-2 h-4 w-4 text-[#C9A227] shrink-0" />
      <span className="truncate text-sm tracking-wide text-gray-200">
        {value ? format(value, "PP") : placeholder}
      </span>
    </Button>
  );

  return (
    <section id="booking" className="relative z-20 bg-[#0a0a0a] px-4 py-6 border-b border-white/5 sm:py-10">
      <div className="container-lux">
        <div className="rounded-none border border-[#C9A227]/20 bg-[#0d0d0d] p-5 shadow-xl sm:p-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5 md:gap-5">
            
            <Field label={t.booking.checkin}>
              <Popover>
                <PopoverTrigger asChild>{dateBtn(checkIn, t.booking.checkin)}</PopoverTrigger>
                <PopoverContent 
                  className="w-[calc(100vw-3rem)] max-w-sm p-0 border-[#C9A227]/20 bg-[#0d0d0d] z-50 md:w-auto" 
                  align="start"
                  sideOffset={4}
                >
                  <Calendar
                    mode="single"
                    selected={checkIn}
                    onSelect={setCheckIn}
                    disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
                    initialFocus
                    className="p-3 bg-[#0d0d0d] text-white"
                  />
                </PopoverContent>
              </Popover>
            </Field>

            <Field label={t.booking.checkout}>
              <Popover>
                <PopoverTrigger asChild>{dateBtn(checkOut, t.booking.checkout)}</PopoverTrigger>
                <PopoverContent 
                  className="w-[calc(100vw-3rem)] max-w-sm p-0 border-[#C9A227]/20 bg-[#0d0d0d] z-50 md:w-auto" 
                  align="start"
                  sideOffset={4}
                >
                  <Calendar
                    mode="single"
                    selected={checkOut}
                    onSelect={setCheckOut}
                    disabled={(d) => d <= (checkIn ?? new Date())}
                    initialFocus
                    className="p-3 bg-[#0d0d0d] text-white"
                  />
                </PopoverContent>
              </Popover>
            </Field>

            <Field label={t.booking.guests}>
              <Select value={guests} onValueChange={setGuests}>
                <SelectTrigger className="h-12 rounded-none border-white/10 bg-[#161616] text-sm tracking-wide text-gray-200 focus:ring-1 focus:ring-[#C9A227] transition-colors hover:border-[#C9A227]/40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="border-[#C9A227]/20 bg-[#0d0d0d] text-white z-50">
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <SelectItem key={n} value={String(n)} className="text-sm text-gray-200 focus:bg-[#C9A227]/20 focus:text-white">
                      {n} {n === 1 ? t.booking.guest : t.booking.guestsLabel}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <Field label={t.booking.room}>
              <Select value={room} onValueChange={setRoom}>
                <SelectTrigger className="h-12 rounded-none border-white/10 bg-[#161616] text-sm tracking-wide text-gray-200 focus:ring-1 focus:ring-[#C9A227] transition-colors hover:border-[#C9A227]/40">
                  <SelectValue placeholder={t.booking.selectRoom} />
                </SelectTrigger>
                <SelectContent className="border-[#C9A227]/20 bg-[#0d0d0d] text-white z-50">
                  {rooms.map((r) => (
                    <SelectItem key={r.id} value={r.id} className="text-sm text-gray-200 focus:bg-[#C9A227]/20 focus:text-white">
                      {t.rooms.items[r.id as keyof typeof t.rooms.items].name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <div className="flex items-end pt-2 md:pt-0">
              <button
                onClick={reserve}
                className="h-12 w-full rounded-none bg-[#C9A227] text-[0.72rem] font-bold uppercase tracking-[0.2em] text-black transition-all duration-300 hover:bg-white hover:text-black shadow-md"
              >
                {t.booking.reserve}
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[0.62rem] font-semibold uppercase tracking-[0.15em] text-[#C9A227]/90 sm:text-[0.65rem]">
        {label}
      </label>
      {children}
    </div>
  );
}
