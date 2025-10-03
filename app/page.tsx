
import { HeroSection } from "@/components/landing-page/hero-section";
import { CustomerStories } from "@/components/landing-page/customer-stories";
import { ProductBanner } from "@/components/landing-page/product-banner";
import { CustomerCarousel } from "@/components/landing-page/customer-carousel";
import Chatbot from "@/components/ui/Chatbot";

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
      
      {/* Oracle-style floating chatbot */}
      <Chatbot 
        salesText="Talk to sales"
        chatText="Chat now"
        closeText="Close"
        numberText="Call US Sales"
        phoneNumber="+1.800.633.0738"
        proactiveDelay={5000}
      />
    </div>
  );
}
