"use client";

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
    <section className={`relative bg-white py-12 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Cards Grid - Oracle RC59 structure */}
        <div className="flex flex-wrap lg:flex-nowrap gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="flex-1 min-w-0 mb-8 lg:mb-0 flex flex-col relative"
            >
              {/* Vertical separator line - Oracle style */}
              {index !== 0 && (
                <div className="absolute left-0 top-0 w-0.5 bg-gray-300 opacity-60 hidden lg:block h-full -ml-4" />
              )}

              {/* Card Content */}
              <div className="flex flex-col h-full relative">
                {/* Image - Oracle uses 204px width, scaled down to ~140px with fixed aspect ratio */}
                <div className="mb-4">
                  <img
                    src={card.image}
                    alt=""
                    className="w-36 h-24 rounded block object-cover"
                    style={{ fontFamily: 'var(--oraclesans)' }}
                  />
                </div>

                {/* Title - Oracle uses strong with font-weight 700 */}
                <div className="mb-3">
                  <h3 
                    className="font-bold text-base leading-tight text-[#161513]"
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
                <div className="mb-6 flex-1">
                  <p 
                    className="text-sm text-gray-700 leading-relaxed"
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
                      className="inline-flex items-center justify-center px-4 py-2 bg-[#161513] text-white text-sm font-semibold hover:bg-[#2a2a2a] transition-colors duration-300 rounded-none"
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
