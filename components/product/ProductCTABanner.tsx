import React from 'react';
import { SmartImage } from "@/components/ui/SmartImage";

interface ProductCTABannerProps {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonHref: string;
  className?: string;
}

export function ProductCTABanner({ 
  title, 
  description, 
  image, 
  buttonText, 
  buttonHref, 
  className = "" 
}: ProductCTABannerProps) {
  return (
    <section className={`py-8 ${className}`} style={{ backgroundColor: '#b8dde6' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Content Layout - Oracle RC59v1 style */}
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 items-center max-w-4xl mx-auto">
          
          {/* Left: Image */}
          <div className="order-2 lg:order-1">
            <a href={buttonHref}>
              <SmartImage
                src={image}
                alt={title}
                width={200}
                height={150}
                className="w-full h-auto hover:opacity-90 transition-opacity duration-300"
                style={{ maxWidth: '200px', margin: '0 auto', display: 'block' }}
                mockupType="workflow"
              />
            </a>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <h3 
              className="text-base lg:text-lg font-bold text-[#161513] mb-2 leading-tight"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              {title}
            </h3>
            
            <p 
              className="text-[#161513] text-sm leading-relaxed mb-3"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              {description}
            </p>

            <div>
              <a
                href={buttonHref}
                className="inline-flex items-center px-3 py-1.5 bg-[#161513] text-white font-semibold text-sm hover:bg-[#2a2a2a] transition-colors duration-300"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                {buttonText}
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
