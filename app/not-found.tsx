import { Metadata } from 'next';
import Link from 'next/link';
import NotFoundSuggestions from '@/components/NotFoundSuggestions';

export const metadata: Metadata = {
  title: 'Page Not Found | Augment AI',
  description: 'The page you\'re looking for doesn\'t exist. Explore our AI platform and discover what Augment can do for you.',
  keywords: 'page not found, 404, augment ai, ai platform, artificial intelligence',
};

export default function NotFoundPage() {

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/product' },
    { label: 'Developers', href: '/developers' },
    { label: 'Industries', href: '/industries' },
    { label: 'Customers', href: '/customers' },
    { label: 'Company', href: '/company' },
    { label: 'Support', href: '/support' },
    { label: 'Contact', href: '/corporate/contact' }
  ];

  const popularSearches = [
    'AI agents',
    'Machine learning APIs',
    'Developer documentation',
    'Pricing',
    'Getting started',
    'Integration guides',
    'Customer support',
    'Enterprise solutions'
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-8xl lg:text-9xl font-bold text-white/20 mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              404
            </div>
            <h1 className="text-4xl lg:text-6xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
              Page Not Found
            </h1>
            <p className="text-xl text-gray-300 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              The page you're looking for doesn't exist, but don't worry! We have plenty of other amazing content to explore. Let us help you find what you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center px-8 py-4 bg-white text-indigo-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Go Home
              </Link>
              <Link
                href="/product"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-900 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              What were you looking for?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Try searching for what you need or browse our popular content below
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search our site..."
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                style={{ fontFamily: 'var(--oraclesans)' }}
              />
              <button className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <span className="px-4 py-2 bg-[#C74634] text-white text-sm font-medium rounded-md hover:bg-[#A63429] transition-colors">
                  Search
                </span>
              </button>
            </div>

            {/* Popular Searches */}
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                Popular searches:
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {popularSearches.map((search, index) => (
                  <button
                    key={index}
                    className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full border border-gray-200 hover:border-[#C74634] hover:text-[#C74634] transition-colors"
                    style={{ fontFamily: 'var(--oraclesans)' }}
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Suggested Pages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              You Might Be Interested In
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Popular pages and resources that might help you find what you're looking for
            </p>
          </div>

          <NotFoundSuggestions />
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Quick Navigation
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Jump to any section of our site
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-center p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md hover:border-[#C74634] hover:text-[#C74634] transition-all duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                <div className="font-medium text-sm">
                  {link.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C74634] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">
                
              </div>
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Still can't find what you're looking for?
              </h2>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Our support team is here to help you navigate our platform and find the information you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/support"
                  className="inline-flex items-center px-8 py-4 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-200"
                  style={{ fontFamily: 'var(--oraclesans)' }}
                >
                  Contact Support
                </Link>
                <Link
                  href="/developers/docs"
                  className="inline-flex items-center px-8 py-4 border-2 border-[#C74634] text-[#C74634] font-semibold rounded-lg hover:bg-[#C74634] hover:text-white transition-colors duration-200"
                  style={{ fontFamily: 'var(--oraclesans)' }}
                >
                  View Documentation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-[#C74634] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
            Discover the Power of AI
          </h2>
          <p className="text-lg text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
            While you're here, why not explore what Augment AI can do for your business?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/product"
              className="inline-flex items-center px-8 py-4 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              Explore Our Platform
            </Link>
            <Link
              href="/ai-agent/free"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              Try Free Tier
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
