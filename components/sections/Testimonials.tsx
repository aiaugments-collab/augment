import React from 'react';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title?: string;
  company: string;
  companyLogo?: string;
  avatar?: string;
}

interface TestimonialsProps {
  title?: string;
  description?: string;
  testimonials: Testimonial[];
  columns?: 2 | 3 | 4;
  backgroundColor?: string;
  className?: string;
}

export const Testimonials: React.FC<TestimonialsProps> = ({
  title,
  description,
  testimonials,
  columns = 4,
  backgroundColor = 'bg-gray-50',
  className = ''
}) => {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4'
  }[columns];

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
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-md p-6 border-l-4 border-gray-900"
            >
              {testimonial.companyLogo && (
                <div className="mb-4">
                  <img
                    src={testimonial.companyLogo}
                    alt={`${testimonial.company} logo`}
                    className="h-12 w-auto"
                  />
                </div>
              )}

              <blockquote className="mb-6">
                <p className="text-base text-[#161513] italic leading-relaxed" style={{ fontFamily: 'var(--oraclesans)' }}>
                  "{testimonial.quote}"
                </p>
              </blockquote>

              <div className="flex items-center">
                {testimonial.avatar && (
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                )}
                <div>
                  <div className="font-semibold text-[#161513] text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                    {testimonial.author}
                  </div>
                  {testimonial.title && (
                    <div className="text-xs text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                      {testimonial.title}
                    </div>
                  )}
                  <div className="text-xs text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                    {testimonial.company}
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
