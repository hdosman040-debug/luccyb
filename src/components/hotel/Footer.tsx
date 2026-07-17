import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { hotel } from "@/data/hotel";

const linkIds = ["home", "rooms", "services", "gallery", "about", "contact"] as const;

export function Footer() {
  const { t } = useLanguage();
  
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0F2A43] text-[#F3E9D2]/80 border-t border-[#C9A227]/35">
      <div className="container-lux grid grid-cols-1 gap-12 py-20 sm:grid-cols-2 lg:grid-cols-4">
        
        {/* Brand Showcase Block */}
        <div className="flex flex-col items-start">
          <div className="font-serif text-2xl font-medium tracking-[0.18em] uppercase text-[#F3E9D2] leading-none">
            TIME <span className="text-[#C9A227] font-light">HOTEL</span>
          </div>
          <span className="text-[0.55rem] uppercase tracking-[0.4em] text-[#F3E9D2]/50 mt-1.5 font-medium">
            Dessie · Ethiopia
          </span>
          <p className="mt-6 max-w-xs text-xs font-light leading-relaxed text-[#F3E9D2]/75">
            {t.footer.tagline}
          </p>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="mb-6 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#C9A227]">
            {t.footer.quickLinks}
          </h4>
          <ul className="space-y-3.5 text-xs font-medium uppercase tracking-[0.15em]">
            {linkIds.map((id) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(`#${id}`)}
                  className="transition-colors duration-300 hover:text-[#C9A227] text-left"
                >
                  {t.nav[id]}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact/Concierge Information */}
        <div>
          <h4 className="mb-6 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#C9A227]">
            {t.footer.contact}
          </h4>
          <ul className="space-y-4 text-xs font-light leading-relaxed">
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-[#C9A227] shrink-0 stroke-[1.25]" />
              <span className="text-[#F3E9D2]/85">{hotel.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-[#C9A227] shrink-0 stroke-[1.25]" />
              <a href={`tel:${hotel.phone}`} className="hover:text-[#C9A227] transition-colors duration-300 text-[#F3E9D2]/85">
                {hotel.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-[#C9A227] shrink-0 stroke-[1.25]" />
              <a href={`mailto:${hotel.email}`} className="hover:text-[#C9A227] transition-colors duration-300 text-[#F3E9D2]/85">
                {hotel.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Brand Socials Block */}
        <div>
          <h4 className="mb-6 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#C9A227]">
            {t.contact.follow}
          </h4>
          <div className="flex gap-3">
            {[
              { Icon: Facebook, href: hotel.social.facebook },
              { Icon: Instagram, href: hotel.social.instagram },
              { Icon: Twitter, href: hotel.social.twitter },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-none border border-[#E2D6BC]/20 bg-transparent text-[#F3E9D2] transition-all duration-300 hover:bg-[#C9A227] hover:text-[#0F2A43] hover:border-[#C9A227]"
              >
                <Icon className="h-4.5 w-4.5 stroke-[1.25]" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Corporate Copy Block */}
      <div className="border-t border-[#E2D6BC]/10 bg-[#091F32] py-8 text-center text-[0.65rem] font-medium uppercase tracking-[0.18em] text-[#F3E9D2]/40">
        © {new Date().getFullYear()} {hotel.name}. {t.footer.rights}
      </div>
    </footer>
  );
}
