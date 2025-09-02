import React from 'react';

interface LogoItem {
  id: string;
  name: string;
  logo: string;
  href?: string;
  alt?: string;
}

interface LogoGridProps {
  title?: string;
  description?: string;
  logos: LogoItem[];
  columns?: 4 | 5 | 6;
  backgroundColor?: string;
  viewMoreText?: string;
  viewMoreHref?: string;
  className?: string;
}

export const LogoGrid: React.FC<LogoGridProps> = ({
  title,
  description,
  logos,
  columns = 6,
  backgroundColor = 'bg-white',
  viewMoreText,
  viewMoreHref,
  className = ''
}) => {
  const gridCols = {
    4: 'grid-cols-2 md:grid-cols-4',
    5: 'grid-cols-2 md:grid-cols-5',
    6: 'grid-cols-2 md:grid-cols-6'
  }[columns];

  return (
    <section className={`py-16 ${backgroundColor} ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <div className="text-center flex-1">
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
          {viewMoreText && viewMoreHref && (
            <div className="ml-8">
              <a
                href={viewMoreHref}
                className="text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                {viewMoreText} →
              </a>
            </div>
          )}
        </div>

        <div className={`grid ${gridCols} gap-8`}>
          {logos.map((logo) => {
            const LogoContent = (
              <div className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 h-24">
                <img
                  src={logo.logo}
                  alt={logo.alt || `${logo.name} logo`}
                  className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-200"
                />
              </div>
            );

            return logo.href ? (
              <a
                key={logo.id}
                href={logo.href}
                className="block"
                title={logo.name}
              >
                {LogoContent}
              </a>
            ) : (
              <div key={logo.id} title={logo.name}>
                {LogoContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
