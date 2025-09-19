"use client";

import { SmartImage } from "@/components/ui/SmartImage";

interface PromoCard {
  id: string;
  image: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  target?: '_blank' | '_self';
}

interface ProductPromoProps {
  cards: PromoCard[];
  className?: string;
}

export function ProductPromo({ cards, className = "" }: ProductPromoProps) {
  return (
    <section className={`relative bg-white py-8 sm:py-12 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cards Grid - Oracle RC59 structure */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="flex flex-col relative"
            >
              {/* Vertical separator line - Oracle style - only on desktop */}
              {index !== 0 && (
                <div className="absolute left-0 top-0 w-0.5 bg-gray-300 opacity-60 hidden lg:block h-full -ml-4" />
              )}

              {/* Card Content */}
              <div className="flex flex-col h-full relative">
         

                {/* Title - Oracle uses strong with font-weight 700 */}
                <div className="mb-3">
                  <h3 
                    className="font-bold text-sm sm:text-base leading-tight text-[#161513]"
                    style={{ fontFamily: 'var(--oraclesans)' }}
                  >
                    <a
                      href={card.ctaLink}
                      target={card.target || '_self'}
                      className="text-inherit hover:text-[#C74634] transition-colors duration-200 no-underline relative z-10"
                    >
                      {card.title}
                    </a>
                  </h3>
                </div>

                {/* Description */}
                <div className="mb-4 sm:mb-6 flex-1">
                  <p 
                    className="text-xs sm:text-sm text-gray-700 leading-relaxed"
                    style={{ fontFamily: 'var(--oraclesans)' }}
                  >
                    {card.description}
                  </p>
                </div>

                {/* CTA Button - Oracle's obttn2 style, aligned to bottom */}
                <div className="mt-auto">
                  <div className="flex">
                    <a
                      href={card.ctaLink}
                      target={card.target || '_self'}
                      className="inline-flex items-center justify-center px-3 sm:px-4 py-2 bg-[#161513] text-white text-xs sm:text-sm font-semibold hover:bg-[#2a2a2a] transition-colors duration-300 rounded-none"
                      style={{ fontFamily: 'var(--oraclesans)' }}
                    >
                      {card.ctaText}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
