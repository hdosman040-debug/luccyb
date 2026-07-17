import { MapPin, Phone, Mail, MessageCircle, Facebook, Instagram, Twitter } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { hotel, whatsappLink } from "@/data/hotel";
import { SectionHeader } from "./SectionHeader";
import { AnimatedSection } from "./AnimatedSection";

export function ContactSection() {
  const { t } = useLanguage();

  const rows = [
    { Icon: MapPin, label: t.contact.address, value: hotel.address, href: undefined },
    { Icon: Phone, label: t.contact.phone, value: hotel.phoneDisplay, href: `tel:${hotel.phone}` },
    { Icon: Mail, label: t.contact.email, value: hotel.email, href: `mailto:${hotel.email}` },
    {
      Icon: MessageCircle,
      label: t.contact.whatsapp,
      value: hotel.phoneDisplay,
      href: whatsappLink(t.whatsappMsg),
    },
  ];

  return (
    <section id="contact" className="bg-white border-t border-[#E2D6BC]/30 py-28">
      <div className="container-lux">
        <SectionHeader eyebrow={t.nav.contact} title={t.contact.title} subtitle={t.contact.subtitle} />

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Informational Columns */}
          <AnimatedSection className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              {rows.map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-5 group">
                  {/* Fine-line geometric icon frame */}
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-none border border-[#C9A227]/30 bg-[#F3E9D2]/25 text-[#C9A227] transition-all duration-300 group-hover:bg-[#C9A227] group-hover:text-[#0F2A43] group-hover:border-[#C9A227]">
                    <Icon className="h-5 w-5 stroke-[1.25]" />
                  </span>
                  
                  <div>
                    <div className="text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[#0F2A43]/60 mb-1">
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base font-light text-[#0F2A43] transition-colors duration-300 hover:text-[#C9A227]"
                      >
                        {value}
                      </a>
                    ) : (
                      <div className="text-sm sm:text-base font-light text-[#0F2A43]">{value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Sharing Section */}
            <div className="mt-4 border-t border-[#E2D6BC]/20 pt-6">
              <div className="mb-4 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[#0F2A43]/60">
                {t.contact.follow}
              </div>
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
                    className="flex h-11 w-11 items-center justify-center rounded-none border border-[#E2D6BC]/50 bg-white text-[#0F2A43] transition-all duration-300 hover:bg-[#0F2A43] hover:text-[#F3E9D2] hover:border-[#0F2A43]"
                  >
                    <Icon className="h-5 w-5 stroke-[1.25]" />
                  </a>
                ))}
              </div>
            </div>

            {/* Premium WhatsApp Anchor Button */}
            <a
              href={whatsappLink(t.whatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-fit items-center gap-2.5 rounded-none bg-[#C9A227] px-8 py-4 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#0F2A43] transition-all duration-300 hover:bg-[#0F2A43] hover:text-[#F3E9D2] shadow-sm hover:shadow-md"
            >
              <MessageCircle className="h-4.5 w-4.5 stroke-[1.5]" />
              {t.contact.chat}
            </a>
          </AnimatedSection>

          {/* Exhibition Framed Interactive Map */}
          <AnimatedSection delay={120} className="relative">
            {/* Background alignment offset border */}
            <div className="absolute -top-3 -left-2 h-full w-full border border-[#C9A227]/25 z-0" />
            
            <div className="relative z-10 h-full min-h-72 overflow-hidden rounded-none border border-[#E2D6BC]/60 bg-white p-2 shadow-[0_15px_30px_rgba(15,42,67,0.06)]">
              <iframe
                title="Time Hotel location — Dessie, Ethiopia"
                src="https://www.openstreetmap.org/export/embed.html?bbox=39.60%2C11.10%2C39.68%2C11.16&layer=mapnik&marker=11.131%2C39.635"
                className="h-full min-h-72 w-full rounded-none opacity-90 transition-opacity duration-300 hover:opacity-100"
                loading="lazy"
                style={{ border: 0 }}
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
