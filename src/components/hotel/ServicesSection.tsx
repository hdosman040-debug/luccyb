import {
  Wifi,
  Car,
  UtensilsCrossed,
  Baby,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeader } from "./SectionHeader";
import { AnimatedSection } from "./AnimatedSection";

const items: { key: keyof ReturnType<typeof useLanguage>["t"]["services"]["items"]; Icon: LucideIcon }[] = [
  { key: "wifi", Icon: Wifi },
  { key: "parking", Icon: Car },
  { key: "restaurant", Icon: UtensilsCrossed },
  { key: "kidFriendly", Icon: Baby },
];

export function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="bg-white border-t border-[#E2D6BC]/30 py-28">
      <div className="container-lux">
        <SectionHeader
          eyebrow={t.nav.services}
          title={t.services.title}
          subtitle={t.services.subtitle}
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {items.map(({ key, Icon }, i) => {
            const info = t.services.items[key];
            return (
              <AnimatedSection key={key} delay={i * 70}>
                <div className="group flex h-full flex-col items-center bg-[#FAFAFA] border border-[#E2D6BC]/40 p-10 text-center transition-all duration-500 hover:bg-white hover:border-[#C9A227]/50 hover:shadow-[0_20px_40px_rgba(15,42,67,0.05)]">
                  {/* Hallmark Styled Icon Container */}
                  <span className="flex h-16 w-16 items-center justify-center rounded-none border border-[#C9A227]/30 bg-[#F3E9D2]/25 text-[#C9A227] transition-all duration-500 ease-out group-hover:scale-105 group-hover:bg-[#C9A227] group-hover:text-white group-hover:border-[#C9A227] shadow-sm">
                    <Icon className="h-6 w-6 stroke-[1.25]" />
                  </span>

                  {/* Service Details */}
                  <h3 className="mt-8 font-serif text-xl font-medium tracking-wide text-[#0F2A43]">
                    {info.title}
                  </h3>

                  {/* Delicate Divider */}
                  <span className="my-4 h-px w-8 bg-[#E2D6BC]/60 transition-all duration-500 group-hover:w-16 group-hover:bg-[#C9A227]" />

                  <p className="text-sm font-light leading-relaxed text-[#1E252D]/80">
                    {info.desc}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
