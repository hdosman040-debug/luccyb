import { useMemo, useState } from "react";
import { X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { galleryItems, galleryCategories, type GalleryCategory } from "@/data/gallery";
import { SectionHeader } from "./SectionHeader";
import { AnimatedSection } from "./AnimatedSection";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type Filter = GalleryCategory | "all";

export function GallerySection() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<Filter>("all");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      filter === "all"
        ? galleryItems
        : galleryItems.filter((g) => g.category === filter),
    [filter],
  );

  const chips: Filter[] = ["all", ...galleryCategories];

  return (
    <section id="gallery" className="bg-[#FAFAFA] border-t border-[#E2D6BC]/30 py-16 sm:py-24 md:py-28">
      <div className="container-lux">
        <SectionHeader eyebrow={t.nav.gallery} title={t.gallery.title} subtitle={t.gallery.subtitle} />

        {/* Minimalist Exhibition Categories Swipeable Menu for Mobile Layouts */}
        <div className="mt-8 flex w-full items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start sm:mt-12 sm:justify-center sm:gap-3 sm:pb-0">
          {chips.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={cn(
                "rounded-none border px-5 py-2 text-[0.68rem] font-bold uppercase tracking-[0.12em] transition-all duration-300 shrink-0 sm:px-6 sm:py-2.5 sm:text-[0.7rem] sm:tracking-[0.2em]",
                filter === c
                  ? "bg-[#0F2A43] text-[#F3E9D2] border-[#0F2A43] shadow-md"
                  : "border-[#E2D6BC]/60 bg-white text-[#0F2A43]/70 hover:border-[#C9A227] hover:text-[#0F2A43]",
              )}
            >
              {c === "all" ? t.gallery.all : t.gallery.categories[c]}
            </button>
          ))}
        </div>

        {/* Gallery Exhibition Grid with CLS Defense */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-16 md:grid-cols-3 lg:grid-cols-4 md:gap-4">
          {filtered.map((item, i) => (
            <AnimatedSection
              key={`${item.src}-${i}`}
              delay={(i % 4) * 50}
              className={cn(
                "w-full h-full min-h-[140px] sm:min-h-[200px]",
                i % 5 === 0 && "md:col-span-2 md:row-span-2"
              )}
            >
              <button
                onClick={() => setLightbox(item.src)}
                className="group relative block h-full w-full overflow-hidden rounded-none border border-[#E2D6BC]/40 bg-[#0F2A43] shadow-[0_4px_20px_rgba(15,42,67,0.02)] focus:outline-none"
              >
                <img
                  src={item.src}
                  alt={t.gallery.categories[item.category]}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover aspect-[4/3] opacity-95 transform-gpu transition-all duration-[1200ms] cubic-bezier(0.25, 1, 0.5, 1) group-hover:scale-103 group-hover:opacity-100"
                />
                
                {/* Luxury Hover Vignette Information Overlay */}
                <span className="absolute inset-0 flex items-end bg-gradient-to-t from-[#0F2A43]/95 via-[#0F2A43]/30 to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:p-6">
                  <span className="text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-[#F3E9D2] border-b border-[#C9A227]/40 pb-1 sm:text-[0.68rem] sm:tracking-[0.25em] sm:pb-1.5">
                    {t.gallery.categories[item.category]}
                  </span>
                </span>
              </button>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* High-End Lightbox Overlay */}
      <Dialog open={!!lightbox} onOpenChange={(o) => !o && setLightbox(null)}>
        <DialogContent className="max-w-4xl border-0 bg-transparent p-0 shadow-none">
          {lightbox && (
            <div className="relative mx-auto border border-[#E2D6BC]/30 bg-[#0F2A43]/95 backdrop-blur-md p-1 shadow-2xl w-[95vw] sm:w-full">
              <img 
                src={lightbox} 
                alt="Enlarged boutique hotel view" 
                decoding="async"
                className="w-full h-auto object-contain max-h-[80vh] sm:max-h-[85vh]" 
              />
              
              {/* Sleek Close Trigger */}
              <button
                onClick={() => setLightbox(null)}
                className="absolute right-3 top-3 rounded-none bg-[#0F2A43] border border-[#E2D6BC]/30 p-2 text-white hover:bg-[#C9A227] hover:text-[#0F2A43] transition-colors focus:outline-none sm:right-4 sm:top-4 sm:p-2.5"
                aria-label="Close image lightbox"
              >
                <X className="h-4 w-4 sm:h-4.5 sm:sm:w-4.5" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
