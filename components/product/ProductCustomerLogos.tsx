"use client";

import React, { useState } from 'react';

interface CustomerLogo {
  name: string;
  image: string;
  href: string;
  alt: string;
}

interface ProductCustomerLogosProps {
  title: string;
  description: string;
  viewMoreText: string;
  viewMoreHref: string;
  logos: CustomerLogo[];
  className?: string;
}

export function ProductCustomerLogos({ 
  title, 
  description, 
  viewMoreText, 
  viewMoreHref, 
  logos, 
  className = "" 
}: ProductCustomerLogosProps) {
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  const handleImageError = (index: number) => {
    setImageErrors(prev => new Set(prev).add(index));
  };
  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header - Oracle rw-ctitle style */}
        <header className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-8">
          <h2 
            className="text-2xl lg:text-3xl font-bold text-[#161513] mb-4 lg:mb-0"
            style={{ fontFamily: 'var(--oracleserif)' }}
          >
            {title}
          </h2>
          <div>
            <a
              href={viewMoreHref}
              className="text-[#0073e6] hover:text-[#005bb5] font-normal underline decoration-1 underline-offset-2 transition-colors duration-200 text-base"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              {viewMoreText}
            </a>
          </div>
        </header>

        {/* Description */}
        <p 
          className="text-gray-700 text-base lg:text-lg leading-relaxed mb-12 max-w-4xl"
          style={{ fontFamily: 'var(--oraclesans)' }}
        >
          {description}
        </p>

        {/* Customer Logos Grid - Oracle RC56w2 style */}
        <div className="flex flex-wrap justify-stretch items-center">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="w-1/2 md:w-1/3 lg:w-1/4 p-4 lg:p-8"
            >
              <a
                href={logo.href}
                className="block relative group transition-opacity duration-300 hover:opacity-80"
              >
                <div className="flex items-center justify-center h-16 lg:h-18">
                  {imageErrors.has(index) ? (
                    <div 
                      className="flex items-center justify-center bg-gray-100 rounded text-gray-500 text-sm font-medium"
                      style={{
                        height: '4.5rem',
                        width: '6rem',
                        maxWidth: '100%'
                      }}
                    >
                      {logo.name}
                    </div>
                  ) : (
                    <img
                      src={logo.image}
                      alt={logo.alt}
                      className="max-h-full max-w-full object-contain transition-all duration-300 hover:opacity-80"
                      style={{
                        height: '4.5rem',
                        width: 'auto',
                        maxWidth: '100%'
                      }}
                      onError={() => handleImageError(index)}
                    />
                  )}
                </div>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
