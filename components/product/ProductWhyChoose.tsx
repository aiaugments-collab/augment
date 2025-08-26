import React from 'react';

interface WhyChooseItem {
  number: string;
  title: string;
  description: string;
  link?: {
    text: string;
    href: string;
  };
}

interface CustomerReference {
  title: string;
  company: string;
  description: string;
  image: string;
  linkText: string;
  linkHref: string;
}

interface ProductWhyChooseProps {
  title: string;
  items: WhyChooseItem[];
  customerReference?: CustomerReference;
  className?: string;
}

export function ProductWhyChoose({ 
  title, 
  items, 
  customerReference, 
  className = "" 
}: ProductWhyChooseProps) {
  return (
    <section className={`py-16 bg-[#f8f8f8] ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Main Section Title */}
        <div className="mb-10">
          <h2 
            className="text-2xl lg:text-3xl font-bold text-[#161513] max-w-4xl leading-tight"
            style={{ fontFamily: 'var(--oracleserif)' }}
          >
            {title}
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-x-14 gap-y-14 mb-20">
          {items.map((item, index) => (
            <div key={index} className="relative pl-16">
              {/* Large Number - Oracle style */}
              <div 
                className="absolute left-0 top-[-0.2rem] text-5xl lg:text-6xl font-bold text-[#7a736e] leading-none"
                style={{ 
                  fontFamily: 'var(--oracleserif)',
                  minWidth: '60px',
                  textAlign: 'left'
                }}
              >
                {item.number}
              </div>
              
              {/* Content */}
              <div>
                <h3 
                  className="text-base lg:text-lg font-bold text-[#161513] mb-3 leading-tight"
                  style={{ fontFamily: 'var(--oraclesans)' }}
                >
                  {item.title}
                </h3>
                
                <p 
                  className="text-gray-700 text-sm lg:text-base leading-relaxed mb-3"
                  style={{ fontFamily: 'var(--oraclesans)' }}
                >
                  {item.description}
                </p>

                {item.link && (
                  <div className="mt-3">
                    <a
                      href={item.link.href}
                      className="text-[#0073e6] hover:text-[#005bb5] font-normal underline decoration-1 underline-offset-2 transition-colors duration-200 text-sm lg:text-base"
                      style={{ fontFamily: 'var(--oraclesans)' }}
                    >
                      {item.link.text}
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Customer Reference Section - Oracle RC10 style */}
        {customerReference && (
          <div className="bg-[#f8f8f8] p-0">
            <div className="grid lg:grid-cols-2 gap-0 items-stretch">
              
              {/* Left: Image */}
              <div className="relative">
                <img
                  src={customerReference.image}
                  alt={`${customerReference.company} customer success story`}
                  className="w-full h-full min-h-[400px] object-cover"
                />
              </div>

              {/* Right: Content */}
              <div className="bg-[#f8f8f8] p-6 lg:p-10 flex flex-col justify-center">
                <div className="mb-3">
                  <h3 
                    className="text-base lg:text-lg font-normal text-[#161513] mb-2 tracking-wider"
                    style={{ 
                      fontFamily: 'var(--oraclesans)',
                      borderBottom: '2px solid #f0cc71',
                      display: 'inline-block',
                      paddingBottom: '3px'
                    }}
                  >
                    {customerReference.title}
                  </h3>
                </div>
                
                <h4 
                  className="text-xl lg:text-2xl font-normal text-[#161513] mb-5 leading-tight"
                  style={{ fontFamily: 'var(--oracleserif)' }}
                >
                  {customerReference.company}
                </h4>
                
                <p 
                  className="text-gray-700 text-sm lg:text-base leading-relaxed mb-6"
                  style={{ fontFamily: 'var(--oraclesans)' }}
                >
                  {customerReference.description}
                </p>

                <div>
                  <a
                    href={customerReference.linkHref}
                    className="inline-flex items-center px-5 py-2.5 bg-[#161513] text-white font-semibold hover:bg-[#2a2a2a] transition-colors duration-300 text-sm lg:text-base"
                    style={{ fontFamily: 'var(--oraclesans)' }}
                  >
                    {customerReference.linkText}
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
