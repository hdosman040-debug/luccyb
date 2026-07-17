import { useLanguage } from "@/context/LanguageContext";
import { whatsappLink } from "@/data/hotel";

export function Hero() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0F2A43] pt-20">
      {/* Background Cinematic Image - Optimized for Instant LCP Delivery */}
      <img
        src="/hero/hero-background.jpg"
        alt="Hotel exterior at dusk"
        width={1920}
        height={1088}
        loading="eager"
        fetchPriority="high"
        decoding="sync"
        className="absolute inset-0 h-full w-full object-cover opacity-60 scale-105 transform-gpu"
        style={{ animation: "zoomSlow 20s infinite alternate" }}
      />

      {/* Editorial Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F2A43]/80 via-[#0F2A43]/50 to-[#0a0a0a]" />

      <div className="container-lux relative z-10 flex flex-col items-center px-4 text-center text-white sm:px-6">
        {/* Luxury Eyebrow Text - Slightly larger and bolder */}
        <p
          className="reveal is-visible mb-5 text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-[#C9A227] sm:text-[0.85rem] sm:tracking-[0.4em]"
          style={{ animationDelay: "200ms" }}
        >
          {t.hero.welcome}
        </p>

        {/* Editorial Heading - Maximize impact on mobile (text-3xl -> text-4xl) and desktop */}
        <h1
          className="reveal is-visible max-w-5xl text-balance font-serif text-4xl font-medium leading-relaxed text-[#F3E9D2] sm:text-5xl sm:leading-snug md:text-6xl lg:text-7xl lg:leading-[1.25]"
          style={{ animationDelay: "400ms" }}
        >
          {t.hero.headline}
        </h1>

        {/* Luxury Descriptive Tagline - Increased visibility scale */}
        <p
          className="reveal is-visible mt-6 max-w-2xl text-balance text-sm font-light leading-relaxed tracking-normal text-[#F3E9D2]/90 sm:text-base md:text-lg"
          style={{ animationDelay: "600ms" }}
        >
          {t.hero.description}
        </p>

        {/* Sharp Editorial CTAs */}
        <div
          className="reveal is-visible mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:gap-4"
          style={{ animationDelay: "800ms" }}
        >
          <a
            href={whatsappLink(t.whatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-13 items-center justify-center rounded-none bg-[#C9A227] px-10 py-4 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[#0F2A43] transition-all duration-300 hover:bg-[#F3E9D2] hover:text-[#0F2A43] shadow-[0_4px_25px_rgba(201,162,39,0.2)] sm:tracking-[0.2em]"
          >
            {t.hero.book}
          </a>
          <button
            onClick={() => scrollTo("#rooms")}
            className="flex h-13 items-center justify-center rounded-none border border-[#F3E9D2]/40 px-10 py-4 text-[0.75rem] font-bold uppercase tracking-[0.12em] text-[#F3E9D2] backdrop-blur-sm transition-all duration-300 hover:bg-[#F3E9D2] hover:text-[#0F2A43] hover:border-[#F3E9D2] sm:tracking-[0.2em]"
          >
            {t.hero.explore}
          </button>
        </div>
      </div>

      {/* Sleek Minimalist Scroll Down Pointer */}
      <button
        onClick={() => scrollTo("#booking")}
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-[#C9A227]/80 transition-transform duration-300 hover:translate-y-1 sm:bottom-12"
      >
        <span className="flex flex-col items-center gap-2">
          <span className="text-[0.55rem] uppercase tracking-[0.2em] font-medium text-[#E2D6BC]/80">Scroll</span>
          <span className="block h-8 w-[1px] bg-gradient-to-b from-[#C9A227] to-transparent animate-[pulse_2s_infinite] sm:h-10" />
        </span>
      </button>

      <style>{`
        @keyframes zoomSlow {
          0% { transform: scale(1.05); }
          100% { transform: scale(1.12); }
        }
      `}</style>
    </section>
  );
}
