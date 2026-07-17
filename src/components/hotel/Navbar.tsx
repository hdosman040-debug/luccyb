import { useState } from "react";
import { Menu } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { hotel, whatsappLink } from "@/data/hotel";
import { LanguageToggle } from "./LanguageToggle";
import { ThemeToggle } from "./ThemeToggle";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";

const links = [
  { id: "home", href: "#home" },
  { id: "rooms", href: "#rooms" },
  { id: "services", href: "#services" },
  { id: "gallery", href: "#gallery" },
  { id: "about", href: "#about" },
  { id: "contact", href: "#contact" },
] as const;

export function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#0F2A43] py-3.5 shadow-lg border-b border-[#E2D6BC]/10 backdrop-blur-md">
      <nav className="container-lux flex items-center justify-between px-4 sm:px-6">
        
        {/* Editorial Boutique Logo - Solid White & Gold Contrast */}
        <button
          onClick={() => handleNav("#home")}
          className="flex flex-col items-start leading-none transition-opacity duration-300 hover:opacity-80 text-left max-w-[60%] sm:max-w-none"
        >
          <span className="font-serif text-xl font-medium tracking-[0.12em] uppercase text-white truncate sm:text-2xl sm:tracking-[0.18em]">
            {hotel.name.split(" ")[0]} <span className="text-[#C9A227] font-light">{hotel.name.split(" ")[1] || "HOTEL"}</span>
          </span>
          <span className="text-[0.5rem] uppercase tracking-[0.25em] text-[#F3E9D2]/70 mt-1 sm:mt-1.5 sm:text-[0.55rem] sm:tracking-[0.4em] font-medium truncate w-full">
            {hotel.address.split(",")[0]} · {hotel.address.split(",")[1] || "Ethiopia"}
          </span>
        </button>

        {/* Minimalist Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex xl:gap-9">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => handleNav(l.href)}
              className="group relative text-[0.68rem] font-bold uppercase tracking-[0.15em] text-white/90 hover:text-[#C9A227] transition-colors duration-300"
            >
              {t.nav[l.id]}
              <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-[#C9A227] transition-all duration-500 ease-out group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* Controls & CTA Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle className="text-white/90 hover:text-[#C9A227] transition-colors duration-300" />
          <LanguageToggle className="text-white/90 hover:text-[#C9A227] transition-colors duration-300" />

          {/* Geometric Premium CTA */}
          <a
            href={whatsappLink(t.whatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-none bg-[#C9A227] px-6 py-2.5 text-[0.68rem] font-bold uppercase tracking-[0.15em] text-[#0F2A43] transition-all duration-300 hover:bg-[#F3E9D2] hover:text-[#0F2A43] border border-[#C9A227] sm:inline-block shadow-sm"
          >
            {t.nav.bookNow}
          </a>

          {/* Mobile Menu Toggle Trigger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="lg:hidden text-white hover:text-[#C9A227] transition-colors duration-300 p-2 ml-1"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5 sm:h-6 sm:w-6 stroke-[1.5]" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-[#0F2A43] border-l border-[#E2D6BC]/10 p-6 sm:p-8 flex flex-col justify-between z-50 text-white">
              <div>
                <SheetTitle className="font-serif text-xl tracking-[0.12em] text-white uppercase border-b border-[#E2D6BC]/10 pb-4 text-left sm:text-2xl">
                  {hotel.name.split(" ")[0]} <span className="text-[#C9A227] font-light">{hotel.name.split(" ")[1] || "HOTEL"}</span>
                </SheetTitle>
                
                <div className="mt-8 flex flex-col gap-2">
                  {links.map((l) => (
                    <button
                      key={l.id}
                      onClick={() => handleNav(l.href)}
                      className="text-left py-2.5 text-[0.78rem] uppercase tracking-[0.1em] font-medium text-white/80 transition-colors duration-300 hover:text-[#C9A227] active:text-[#C9A227] block w-full"
                    >
                      {t.nav[l.id]}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 border-t border-[#E2D6BC]/10 pt-5">
                <a
                  href={whatsappLink(t.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-none bg-[#C9A227] py-3.5 text-center text-[0.7rem] font-bold uppercase tracking-[0.15em] text-[#0F2A43] transition-all duration-300 hover:bg-[#F3E9D2] hover:text-[#0F2A43] block w-full"
                >
                  {t.nav.bookNow}
                </a>
                <p className="text-center text-[0.62rem] tracking-[0.1em] uppercase text-[#F3E9D2]/60 mt-2 font-medium">
                  Tel: {hotel.phoneDisplay || "091 431 3458"}
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
