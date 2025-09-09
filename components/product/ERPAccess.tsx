"use client";

interface ERPAccessProps {
  title?: string;
  description?: string;
  userHasAccess?: boolean;
}

export function ERPAccess({ 
  title = "Access Your ERP System", 
  description = "Your complete business management solution is ready to use",
  userHasAccess = true 
}: ERPAccessProps) {
  return (
    <section className="py-16" style={{ background: 'linear-gradient(135deg, #C74634 0%, #A63429 100%)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div style={{ color: '#ffffff' }}>
            <h2 className="text-3xl lg:text-4xl font-normal mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              {title}
            </h2>
            <div className="w-16 h-0.5 bg-white bg-opacity-50 mb-6" />
            <p className="text-lg mb-8" style={{ fontFamily: 'var(--oraclesans)', color: '#ffffff', opacity: 0.9 }}>
              {description}
            </p>

            {userHasAccess ? (
              <div className="space-y-6">
                {/* Access Status */}
                <div className="flex items-center p-4 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                  <span className="font-semibold" style={{ fontFamily: 'var(--oraclesans)', color: '#000000' }}>
                    Active Subscription - Full Access
                  </span>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold mb-1" style={{ fontFamily: 'var(--oracleserif)', color: '#000000' }}>12+</div>
                    <div className="text-sm" style={{ fontFamily: 'var(--oraclesans)', color: '#000000', opacity: 0.8 }}>Applications</div>
                  </div>
                  <div className="text-center p-4 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold mb-1" style={{ fontFamily: 'var(--oracleserif)', color: '#000000' }}>99.9%</div>
                    <div className="text-sm" style={{ fontFamily: 'var(--oraclesans)', color: '#000000', opacity: 0.8 }}>Uptime</div>
                  </div>
                  <div className="text-center p-4 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold mb-1" style={{ fontFamily: 'var(--oracleserif)', color: '#000000' }}>24/7</div>
                    <div className="text-sm" style={{ fontFamily: 'var(--oraclesans)', color: '#000000', opacity: 0.8 }}>Support</div>
                  </div>
                </div>

                {/* Main CTA */}
                <a
                  href="https://erp.augment.cfd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-8 py-4 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl group"
                  style={{ fontFamily: 'var(--oraclesans)' }}
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Launch ERP System
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://erp.augment.cfd/app/dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-3 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all duration-300 backdrop-blur-sm"
                    style={{ fontFamily: 'var(--oraclesans)', color: '#000000' }}
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z" />
                    </svg>
                    Dashboard
                  </a>
                  <a
                    href="https://erp.augment.cfd/app/accounting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center px-4 py-3 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all duration-300 backdrop-blur-sm"
                    style={{ fontFamily: 'var(--oraclesans)', color: '#000000' }}
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                    Accounting
                  </a>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* No Access Message */}
                <div className="flex items-center p-4 bg-white bg-opacity-10 rounded-lg backdrop-blur-sm">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></div>
                  <span className="font-semibold" style={{ fontFamily: 'var(--oraclesans)', color: '#ffffff' }}>
                    Subscription Required for Access
                  </span>
                </div>

                {/* CTA for Non-subscribers */}
                <div className="space-y-4">
                  <a
                    href="/book-demo"
                    className="inline-flex items-center justify-center w-full px-8 py-4 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                    style={{ fontFamily: 'var(--oraclesans)' }}
                  >
                    Start Free Trial
                  </a>
                  <a
                    href="/corporate/contact"
                    className="inline-flex items-center justify-center w-full px-8 py-3 border-2 border-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-all duration-300"
                    style={{ fontFamily: 'var(--oraclesans)', color: '#ffffff' }}
                  >
                    Contact Sales
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl bg-white bg-opacity-10 backdrop-blur-sm">
              <img
                src="/products/erp/01.png"
                alt="ERP System Dashboard"
                className="w-full h-auto rounded-lg"
              />
              
              {/* Overlay for non-subscribers */}
              {!userHasAccess && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center backdrop-blur-sm rounded-lg">
                  <div className="text-center text-white">
                    <svg className="w-16 h-16 mx-auto mb-4 text-white text-opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <p className="text-lg font-semibold" style={{ fontFamily: 'var(--oracleserif)' }}>
                      Subscribe to Access
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Floating Feature Cards */}
            <div className="absolute -top-4 -right-4 bg-white rounded-lg p-4 shadow-lg">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900" style={{ fontFamily: 'var(--oracleserif)' }}>
                    Real-time Data
                  </div>
                  <div className="text-xs text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                    Always up to date
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg p-4 shadow-lg">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900" style={{ fontFamily: 'var(--oracleserif)' }}>
                    Secure & Reliable
                  </div>
                  <div className="text-xs text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                    Enterprise-grade security
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
