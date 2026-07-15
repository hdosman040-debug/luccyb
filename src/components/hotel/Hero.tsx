import { useLanguage } from "@/context/LanguageContext";
import { whatsappLink } from "@/data/hotel";

export function Hero() {
  const { t } = useLanguage();
  const heroImg = "/images/hero-background.jpg";

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0F2A43]">
      {/* Background Cinematic Image */}
      <img
        src={heroImg}
        alt="Lucy Hotel illuminated exterior at dusk"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover opacity-60 scale-105 transition-transform duration-[10000ms] ease-out"
        style={{ animation: "zoomSlow 20s infinite alternate" }}
      />

      {/* Editorial Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F2A43]/80 via-[#0F2A43]/50 to-[#0a0a0a]" />

      <div className="container-lux relative z-10 flex flex-col items-center text-center text-white">
        {/* Luxury Eyebrow Text */}
        <p
          className="reveal is-visible mb-5 text-[0.75rem] font-medium uppercase tracking-[0.5em] text-[#C9A227]"
          style={{ animationDelay: "200ms" }}
        >
          {t.hero.welcome}
        </p>

        {/* Editorial Heading */}
        <h1
          className="reveal is-visible max-w-5xl text-balance font-serif text-4xl font-normal leading-tight text-[#F3E9D2] sm:text-6xl lg:text-7xl lg:leading-[1.15]"
          style={{ animationDelay: "400ms" }}
        >
          {t.hero.headline}
        </h1>

        {/* Luxury Descriptive Tagline */}
        <p
          className="reveal is-visible mt-6 max-w-2xl text-balance text-sm font-light leading-relaxed tracking-wide text-[#F3E9D2]/80 sm:text-lg"
          style={{ animationDelay: "600ms" }}
        >
          {t.hero.description}
        </p>

        {/* Sharp Editorial CTAs */}
        <div
          className="reveal is-visible mt-10 flex flex-col gap-4 sm:flex-row"
          style={{ animationDelay: "800ms" }}
        >
          <a
            href={whatsappLink(t.whatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm bg-[#C9A227] px-10 py-4 text-[0.75rem] font-bold uppercase tracking-[0.2em] text-[#0F2A43] transition-all duration-300 hover:bg-[#F3E9D2] hover:text-[#0F2A43] shadow-[0_4px_20px_rgba(201,162,39,0.2)]"
          >
            {t.hero.book}
          </a>
          <button
            onClick={() => scrollTo("#rooms")}
            className="rounded-sm border border-[#F3E9D2]/40 px-10 py-4 text-[0.75rem] font-bold uppercase tracking-[0.2em] text-[#F3E9D2] backdrop-blur-sm transition-all duration-300 hover:bg-[#F3E9D2] hover:text-[#0F2A43] hover:border-[#F3E9D2]"
          >
            {t.hero.explore}
          </button>
        </div>
      </div>

      {/* Sleek Minimalist Scroll Down Pointer */}
      <button
        onClick={() => scrollTo("#booking")}
        aria-label="Scroll down"
        className="absolute bottom-12 left-1/2 z-10 -translate-x-1/2 text-[#C9A227]/80 transition-transform duration-300 hover:translate-y-1"
      >
        <span className="flex flex-col items-center gap-2">
          <span className="text-[0.6rem] uppercase tracking-[0.3em] font-medium text-[#E2D6BC]/80">Scroll</span>
          <span className="block h-10 w-[1px] bg-gradient-to-b from-[#C9A227] to-transparent animate-[pulse_2s_infinite]" />
        </span>
      </button>

      {/* Slow zoom background styling */}
      <style>{`
        @keyframes zoomSlow {
          0% { transform: scale(1); }
          100% { transform: scale(1.08); }
        }
      `}</style>
    </section>
  );
}
