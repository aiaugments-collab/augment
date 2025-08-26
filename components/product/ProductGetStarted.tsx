import React from 'react';

interface CTAAction {
  title: string;
  href: string;
  icon: string;
  target?: string;
}

interface ProductGetStartedProps {
  title: string;
  actions: CTAAction[];
  className?: string;
}

export function ProductGetStarted({ title, actions, className = "" }: ProductGetStartedProps) {
  const getIconElement = (iconType: string) => {
    switch(iconType) {
      case 'demo':
        return (
          <svg className="w-6 h-6 text-white mb-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
          </svg>
        );
      case 'tour':
        return (
          <svg className="w-6 h-6 text-white mb-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        );
      case 'contact':
        return (
          <svg className="w-6 h-6 text-white mb-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6 text-white mb-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18z"/>
          </svg>
        );
    }
  };

  return (
    <section 
      className={`py-8 ${className}`}
      style={{ 
        backgroundColor: '#6b4c93',
        backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Cpath d=\"m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-6">
          <h2 
            className="text-lg lg:text-xl font-bold text-white"
            style={{ fontFamily: 'var(--oracleserif)' }}
          >
            {title}
          </h2>
        </div>

        {/* CTA Actions Grid */}
        <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
          {actions.map((action, index) => (
            <div key={index} className="text-center">
              <a
                href={action.href}
                target={action.target || '_self'}
                className="group block p-3 rounded-lg transition-all duration-300 hover:bg-white hover:bg-opacity-10"
              >
                {/* Icon */}
                <div className="flex justify-center">
                  {getIconElement(action.icon)}
                </div>
                
                {/* Title */}
                <h3 
                  className="text-sm lg:text-base font-semibold text-white group-hover:text-[#f0cc71] transition-colors duration-300"
                  style={{ fontFamily: 'var(--oraclesans)' }}
                >
                  {action.title}
                </h3>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
