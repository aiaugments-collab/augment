
import { HeroSection } from "@/components/landing-page/hero-section";
import { CustomerStories } from "@/components/landing-page/customer-stories";
import { ProductBanner } from "@/components/landing-page/product-banner";
import { CustomerCarousel } from "@/components/landing-page/customer-carousel";

export default function Home() {
  return (
    <div>
      <main>
        <h1 className="sr-only">Augment | AI Products Platform</h1>
        <HeroSection />
        
        <CustomerStories />

        <ProductBanner />

        <CustomerCarousel />
      </main>
    </div>
  );
}
