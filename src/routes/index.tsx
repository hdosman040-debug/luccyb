import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { Navbar } from "@/components/hotel/Navbar";
import { Hero } from "@/components/hotel/Hero";
import { BookingWidget } from "@/components/hotel/BookingWidget";
import { ImageStrip } from "@/components/hotel/ImageStrip";
import { RoomsSection } from "@/components/hotel/RoomsSection";
import { ServicesSection } from "@/components/hotel/ServicesSection";
import { AboutSection } from "@/components/hotel/AboutSection";
import { GallerySection } from "@/components/hotel/GallerySection";
import { Testimonials } from "@/components/hotel/Testimonials";
import { ContactSection } from "@/components/hotel/ContactSection";
import { Footer } from "@/components/hotel/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Hotel",
          name: "Time Hotel",
          description:
            "Luxury 5-star boutique hotel in Dessie, Ethiopia offering elegant rooms, fine dining, and exceptional hospitality.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Dessie",
            addressCountry: "ET",
          },
          telephone: "+251914313458",
          email: "hdosman040@gmail.com",
          starRating: { "@type": "Rating", ratingValue: "5" },
          priceRange: "$$$",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="overflow-x-hidden bg-background text-foreground transition-colors duration-500">
          <Navbar />
          <main>
            <Hero />
            <BookingWidget />
            <ImageStrip />
            <RoomsSection />
            <ServicesSection />
            <AboutSection />
            <GallerySection />
            <Testimonials />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
