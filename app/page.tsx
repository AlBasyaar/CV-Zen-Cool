import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { Ticker } from "./components/Ticker";
import { PricingSection } from "./components/PricingSection";
import { GallerySection } from "./components/GallerySection";
import { TestimonialSection } from "./components/TestimonialSection";
import { FAQSection } from "./components/FAQSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-clip flex flex-col">
      <Navbar />
      <HeroSection />
      <Ticker />
      <PricingSection />
      <GallerySection />
      <TestimonialSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
