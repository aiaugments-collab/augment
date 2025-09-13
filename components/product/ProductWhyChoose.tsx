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
              
              {/* Left: Desktop Mockup with Chat Bubbles */}
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden min-h-[400px] flex items-center justify-center">
                {/* Desktop Frame */}
                <div className="bg-gray-800 rounded-lg p-2 shadow-2xl max-w-md w-full mx-4">
                  {/* Desktop Header */}
                  <div className="bg-gray-700 rounded-t-md px-3 py-2 flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 text-center">
                      <div className="bg-gray-600 rounded px-3 py-1 text-xs text-gray-300">
                        augment.cfd
                      </div>
                    </div>
                  </div>
                  
                  {/* Chat Interface */}
                  <div className="bg-white rounded-b-md p-4 h-80 overflow-hidden">
                    {/* Chat Header */}
                    <div className="border-b pb-3 mb-4">
                      <h3 className="font-semibold text-gray-800 text-sm">Customer Success Chat</h3>
                      <p className="text-xs text-gray-500">with Augment AI Assistant</p>
                    </div>
                    
                    {/* Chat Messages */}
                    <div className="space-y-3">
                      {/* AI Message */}
                      <div className="flex items-start space-x-2">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                        </div>
                        <div className="bg-gray-100 rounded-lg px-3 py-2 max-w-[200px]">
                          <p className="text-xs text-gray-800">
                            How can I help you optimize your business operations today?
                          </p>
                        </div>
                      </div>
                      
                      {/* User Message */}
                      <div className="flex items-start space-x-2 justify-end">
                        <div className="bg-blue-500 rounded-lg px-3 py-2 max-w-[200px]">
                          <p className="text-xs text-white">
                            We need to reduce our inventory costs while improving service levels
                          </p>
                        </div>
                        <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                          </svg>
                        </div>
                      </div>
                      
                      {/* AI Response */}
                      <div className="flex items-start space-x-2">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                        </div>
                        <div className="bg-gray-100 rounded-lg px-3 py-2 max-w-[200px]">
                          <p className="text-xs text-gray-800">
                            Our Supply Chain Planning solution can help! It uses AI forecasting to reduce inventory by up to 25% while improving service levels.
                          </p>
                        </div>
                      </div>
                      
                      {/* User Follow-up */}
                      <div className="flex items-start space-x-2 justify-end">
                        <div className="bg-blue-500 rounded-lg px-3 py-2 max-w-[200px]">
                          <p className="text-xs text-white">
                            That sounds perfect! Can you show me a demo?
                          </p>
                        </div>
                        <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                          </svg>
                        </div>
                      </div>
                      
                      {/* Typing Indicator */}
                      <div className="flex items-start space-x-2">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                        </div>
                        <div className="bg-gray-100 rounded-lg px-3 py-2">
                          <div className="flex space-x-1">
                            <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                            <div className="w-1 h-1 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
