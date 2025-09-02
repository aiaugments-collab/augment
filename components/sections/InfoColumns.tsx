import React from 'react';

interface InfoColumn {
  id: string;
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  icon?: string;
  image?: string;
}

interface InfoColumnsProps {
  title?: string;
  description?: string;
  columns: InfoColumn[];
  columnsCount?: 2 | 3 | 4;
  backgroundColor?: string;
  pattern?: string;
  className?: string;
}

export const InfoColumns: React.FC<InfoColumnsProps> = ({
  title,
  description,
  columns,
  columnsCount = 3,
  backgroundColor = 'bg-gray-50',
  pattern,
  className = ''
}) => {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4'
  }[columnsCount];

  const sectionStyle = pattern 
    ? { backgroundImage: `url(${pattern})`, backgroundSize: 'cover', backgroundRepeat: 'repeat' }
    : {};

  return (
    <section 
      className={`py-16 ${backgroundColor} ${className}`}
      style={sectionStyle}
    >
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
          {columns.map((column) => (
            <div key={column.id} className="text-center">
              {column.image && (
                <div className="mb-6">
                  <img
                    src={column.image}
                    alt={column.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              )}
              
              {column.icon && (
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-2xl text-white">{column.icon}</span>
                  </div>
                </div>
              )}
              
              <h3 className="text-base lg:text-lg font-bold text-[#161513] mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                {column.title}
              </h3>
              
              <p className="text-sm lg:text-base text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: 'var(--oraclesans)' }}>
                {column.description}
              </p>
              
              {column.ctaText && column.ctaLink && (
                <a
                  href={column.ctaLink}
                  className="inline-flex items-center text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
                >
                  {column.ctaText}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
