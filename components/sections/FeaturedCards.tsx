import React from 'react';

interface FeaturedCard {
  id: string;
  title: string;
  description: string;
  image?: string;
  ctaText: string;
  ctaLink: string;
  target?: '_blank' | '_self';
  badge?: string;
}

interface FeaturedCardsProps {
  title?: string;
  description?: string;
  cards: FeaturedCard[];
  columns?: 2 | 3;
  backgroundColor?: string;
  className?: string;
}

export const FeaturedCards: React.FC<FeaturedCardsProps> = ({
  title,
  description,
  cards,
  columns = 3,
  backgroundColor = 'bg-white',
  className = ''
}) => {
  const gridCols = columns === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3';

  return (
    <section className={`py-16 ${backgroundColor} ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {(title || description) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                {title}
              </h2>
            )}
            {description && (
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                {description}
              </p>
            )}
          </div>
        )}

        <div className={`grid grid-cols-1 ${gridCols} gap-8`}>
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {card.image && (
                <div className="relative">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-48 object-cover"
                  />
                  {card.badge && (
                    <div className="absolute top-4 left-4 bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {card.badge}
                    </div>
                  )}
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-base font-bold text-[#161513] mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {card.title}
                </h3>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {card.description}
                </p>
                <a
                  href={card.ctaLink}
                  target={card.target || '_self'}
                  className="inline-flex items-center text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
                >
                  {card.ctaText}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
