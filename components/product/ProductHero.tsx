"use client";

import { SmartImage } from "@/components/ui/SmartImage";
import { MockupInterface } from "@/components/ui/MockupInterface";

interface CTAButton {
  text: string;
  href: string;
  variant: 'primary' | 'secondary';
}

interface ProductHeroProps {
  title: string;
  description: string;
  ctaButtons: CTAButton[];
  mediaType: 'video' | 'image' | 'mockup';
  mediaUrl?: string;
  videoThumbnail?: string;
  mediaAlt?: string;
  mockup?: {
    type: 'dashboard' | 'form' | 'list' | 'chat' | 'analytics' | 'calendar' | 'table';
    title: string;
    description: string;
  };
}

export function ProductHero({
  title,
  description,
  ctaButtons,
  mediaType,
  mediaUrl,
  videoThumbnail,
  mediaAlt = "Product demonstration",
  mockup
}: ProductHeroProps) {
  return (
    <section className="relative bg-white border-b border-gray-100">
      {/* Background Pattern - Oracle style */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23000000\" fill-opacity=\"0.4\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1.5\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Hero Content - Two Column Layout */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 py-8 lg:py-12">
          {/* Left Column - Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Title with Oracle accent - Using Oracle's exact sizing (3.6rem = ~36px, scaled down to ~22px) */}
            <h1 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4 leading-tight" style={{ fontFamily: 'var(--oracleserif)' }}>
              <span className="text-[#C74634]">Augment</span> {title}
            </h1>

            {/* Oracle-style accent line - smaller */}
            <div className="w-12 h-0.5 bg-[#C74634] mb-4" />

            {/* Description - Oracle uses 1.8rem, scaled down to ~16px */}
            <div className="text-base lg:text-lg text-gray-700 mb-6 leading-relaxed max-w-2xl" style={{ fontFamily: 'var(--oraclesans)' }}>
              {description}
            </div>

            {/* CTA Buttons - More compact */}
            <div className="flex flex-col sm:flex-row gap-3">
              {ctaButtons.map((button, index) => (
                <a
                  key={index}
                  href={button.href}
                  className={`
                    inline-flex items-center justify-center px-5 py-2.5 font-semibold text-sm
                    transition-all duration-300 hover:scale-105
                    ${button.variant === 'primary' 
                      ? 'bg-[#C74634] text-white hover:bg-[#A63429] shadow-md hover:shadow-lg' 
                      : 'border-2 border-[#C74634] text-[#C74634] hover:bg-[#C74634] hover:text-white'
                    }
                  `}
                  style={{ fontFamily: 'var(--oraclesans)' }}
                >
                  {button.text}
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Media */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative w-full max-w-md">
              {mediaType === 'mockup' && mockup ? (
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <MockupInterface
                    type={mockup.type}
                    title={mockup.title}
                    description={mockup.description}
                    className="w-full h-auto"
                  />
                </div>
              ) : mediaType === 'video' ? (
                <div className="relative group cursor-pointer">
                  <div className="relative rounded-lg overflow-hidden shadow-lg">
                    <SmartImage
                      src={videoThumbnail || mediaUrl || ""}
                      alt={mediaAlt}
                      width={400}
                      height={225}
                      className="w-full h-auto aspect-video"
                      mockupType="dashboard"
                    />
                    
                    {/* Play Button Overlay - more compact */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300">
                      <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                        <svg 
                          className="w-4 h-4 text-[#C74634] ml-0.5" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Video caption - smaller */}
                  <p className="text-xs text-gray-600 mt-2 text-center" style={{ fontFamily: 'var(--oraclesans)' }}>
                    Watch: What is {title}?
                  </p>
                </div>
              ) : (
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <SmartImage
                    src={mediaUrl || ""}
                    alt={mediaAlt}
                    width={400}
                    height={300}
                    className="w-full h-auto"
                    mockupType="dashboard"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent strip - Oracle style - thinner */}
      <div className="h-0.5 bg-gradient-to-r from-[#C74634] via-[#577346] to-[#4a5c6a]" />
    </section>
  );
}
