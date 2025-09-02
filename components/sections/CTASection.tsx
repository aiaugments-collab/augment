import React from 'react';

interface CTAAction {
  title: string;
  description?: string;
  href: string;
  icon?: string;
  buttonText?: string;
}

interface CTASectionProps {
  title?: string;
  description?: string;
  actions: CTAAction[];
  columns?: 1 | 2 | 3;
  backgroundColor?: string;
  pattern?: string;
  className?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  actions,
  columns = 2,
  backgroundColor = 'bg-gray-50',
  pattern,
  className = ''
}) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3'
  }[columns];

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
          {actions.map((action, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-8">
                <div className="flex items-start space-x-4">
                  {action.icon && (
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center">
                        <span className="text-xl text-gray-900">{action.icon}</span>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex-1">
                    <h3 className="text-base lg:text-lg font-bold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      {action.title}
                    </h3>
                    {action.description && (
                      <p className="text-sm lg:text-base text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: 'var(--oraclesans)' }}>
                        {action.description}
                      </p>
                    )}
                    
                    <a
                      href={action.href}
                      className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200"
                    >
                      {action.buttonText || 'Learn More'}
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
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
};
