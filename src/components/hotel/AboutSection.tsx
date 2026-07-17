import { useLanguage } from "@/context/LanguageContext";
import { hotel } from "@/data/hotel";
import { AnimatedSection } from "./AnimatedSection";
import { StatCounter } from "./StatCounter";

export function AboutSection() {
  const { t } = useLanguage();
  const aboutImg = "/hero/hero-background.jpg";

  // Dynamically query our custom stats configuration from hotel.ts
  const yearsStat = hotel.stats.find((s) => s.key === "years");
  const yearsDisplay = yearsStat ? `${yearsStat.value}${yearsStat.suffix}` : "10+";

  return (
    <section id="about" className="bg-[#FAFAFA] border-t border-[#E2D6BC]/30">
      <div className="container-lux py-28">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          
          {/* Overlapping Fine-Art Photo Display */}
          <AnimatedSection className="relative px-4">
            {/* Elegant Background Gold Offset Frame */}
            <div className="absolute -top-4 -left-2 h-full w-full border border-[#C9A227]/25 z-0" />
            
            <img
              src={aboutImg}
              alt="Time Hotel grand exterior view"
              loading="lazy"
              width={1200}
              height={900}
              className="relative z-10 rounded-none object-cover shadow-[0_20px_40px_rgba(15,42,67,0.12)] border border-[#E2D6BC]/40"
            />

            {/* Luxury Heritage Plaque */}
            <div className="absolute -bottom-6 -right-2 z-20 hidden rounded-none bg-[#0F2A43] border border-[#C9A227]/30 px-9 py-7 text-center shadow-lg sm:block">
              <div className="font-serif text-4xl font-light text-[#C9A227] tracking-wider">{yearsDisplay}</div>
              <div className="text-[0.6rem] font-semibold text-[#F3E9D2] uppercase tracking-[0.25em] mt-1.5">
                {t.about.stats.years}
              </div>
            </div>
          </AnimatedSection>

          {/* Copywriting Column */}
          <AnimatedSection delay={120} className="flex flex-col items-start">
            <span className="text-[0.7rem] uppercase tracking-[0.45em] text-[#C9A227] font-semibold mb-3">
              {t.about.subtitle}
            </span>
            <h2 className="font-serif text-3xl font-medium tracking-wide text-[#0F2A43] sm:text-4xl lg:text-5xl leading-tight">
              {t.about.title}
            </h2>
            <span className="gold-line mt-6" />
            
            <p className="mt-8 text-sm sm:text-base font-light leading-relaxed text-[#1E252D]/85">
              {t.about.body1}
            </p>
            <p className="mt-4 text-sm sm:text-base font-light leading-relaxed text-[#1E252D]/80">
              {t.about.body2}
            </p>

            {/* Editorial Blockquote */}
            <div className="mt-8 border-l border-[#C9A227] bg-[#F3E9D2]/20 py-5 pl-6 pr-4 rounded-none">
              <h3 className="font-serif text-md font-semibold text-[#0F2A43] tracking-wider uppercase text-xs">
                {t.about.missionTitle}
              </h3>
              <p className="mt-2 italic font-light text-sm text-[#1E252D]/90 leading-relaxed">
                "{t.about.mission}"
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Premium Statistics Banner Section */}
      <div className="bg-[#0F2A43] border-y border-[#E2D6BC]/15 py-20">
        <div className="container-lux grid grid-cols-2 gap-y-12 gap-x-6 lg:grid-cols-4">
          {hotel.stats.map((s) => (
            <StatCounter
              key={s.key}
              value={s.value}
              suffix={s.suffix}
              label={t.about.stats[s.key as keyof typeof t.about.stats]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
