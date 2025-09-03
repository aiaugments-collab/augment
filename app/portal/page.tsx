'use client';
import { Metadata } from 'next';
import { useState } from 'react';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection
} from '../../components/sections';

export default function SupportPortalPage() {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggedIn(true);
    // Simulate login
  };

  const heroButtons = [
    {
      text: 'Login to Portal',
      href: '#login',
      variant: 'primary' as const
    },
    {
      text: 'Create Account',
      href: '#signup',
      variant: 'secondary' as const
    }
  ];

  const portalFeatures = [
    {
      id: 'ticket-management',
      title: 'Support Ticket Management',
      description: 'Create, track, and manage support tickets with real-time status updates and communication history.',
      ctaText: 'Manage tickets',
      ctaLink: '/portal/tickets/',
      image: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'account-management',
      title: 'Account & Billing Management',
      description: 'View account details, manage billing information, download invoices, and update subscription settings.',
      ctaText: 'Manage account',
      ctaLink: '/portal/account/',
      image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'resource-center',
      title: 'Resource Center',
      description: 'Access exclusive resources, documentation, training materials, and product updates for customers.',
      ctaText: 'Browse resources',
      ctaLink: '/portal/resources/',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'system-status',
      title: 'System Status & Monitoring',
      description: 'Real-time system status, maintenance schedules, and personalized service health monitoring.',
      ctaText: 'Check status',
      ctaLink: '/portal/status/',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'api-management',
      title: 'API Keys & Usage Analytics',
      description: 'Manage API keys, monitor usage statistics, and access detailed analytics for your integrations.',
      ctaText: 'Manage APIs',
      ctaLink: '/portal/api/',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'training-center',
      title: 'Training & Certification',
      description: 'Access personalized training programs, track certification progress, and schedule training sessions.',
      ctaText: 'Start training',
      ctaLink: '/portal/training/',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  const portalServices = [
    {
      id: 'priority-support',
      title: 'Priority Support Access',
      description: 'Fast-track support with dedicated queues, priority handling, and direct access to senior support staff.',
      ctaText: 'Get priority support',
      ctaLink: '/portal/priority-support/'
    },
    {
      id: 'custom-integrations',
      title: 'Custom Integration Support',
      description: 'Specialized assistance for custom integrations, API implementations, and technical architecture guidance.',
      ctaText: 'Integration help',
      ctaLink: '/portal/integrations/'
    },
    {
      id: 'dedicated-manager',
      title: 'Dedicated Account Manager',
      description: 'Enterprise customers get access to dedicated account managers for personalized support and strategic guidance.',
      ctaText: 'Contact manager',
      ctaLink: '/portal/account-manager/'
    },
    {
      id: 'beta-programs',
      title: 'Beta Programs & Early Access',
      description: 'Participate in beta testing programs and get early access to new features and product updates.',
      ctaText: 'Join beta programs',
      ctaLink: '/portal/beta/'
    },
    {
      id: 'usage-analytics',
      title: 'Advanced Usage Analytics',
      description: 'Detailed analytics and reporting on your AI usage, performance metrics, and optimization recommendations.',
      ctaText: 'View analytics',
      ctaLink: '/portal/analytics/'
    },
    {
      id: 'compliance-reports',
      title: 'Compliance & Security Reports',
      description: 'Access compliance documentation, security reports, and audit trails for enterprise governance requirements.',
      ctaText: 'Download reports',
      ctaLink: '/portal/compliance/'
    }
  ];

  const portalBenefits = [
    {
      title: 'Centralized Support',
      description: 'All your support needs in one place with unified ticket management and communication history.',
      href: '/portal/support/',
      buttonText: 'Access support',
      icon: '🎯'
    },
    {
      title: 'Self-Service Tools',
      description: 'Manage your account, billing, and services independently with comprehensive self-service options.',
      href: '/portal/self-service/',
      buttonText: 'Self-service tools',
      icon: '⚙️'
    },
    {
      title: 'Exclusive Resources',
      description: 'Access customer-only resources, advanced documentation, and premium training materials.',
      href: '/portal/exclusive/',
      buttonText: 'Exclusive content',
      icon: '🔐'
    },
    {
      title: 'Personalized Experience',
      description: 'Customized dashboard, personalized recommendations, and tailored content based on your usage.',
      href: '/portal/personalization/',
      buttonText: 'Personalize portal',
      icon: '👤'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        <h1 className="sr-only">Support Portal | Augment AI Customer Portal</h1>

        <SectionHero
          title="Customer Support Portal"
          subtitle="Your gateway to comprehensive support"
          description="Access your personalized support portal for ticket management, account administration, exclusive resources, and premium support services. Everything you need to succeed with Augment AI in one secure location."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Customer accessing comprehensive support portal with personalized dashboard and tools"
        />

        <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto py-4">
              <a href="#features" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Portal Features
              </a>
              <a href="#services" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Premium Services
              </a>
              <a href="#benefits" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Portal Benefits
              </a>
              <a href="#login" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Access Portal
              </a>
            </div>
          </div>
        </nav>

        <section id="features">
          <FeaturedCards
            title="Comprehensive portal features"
            description="Access all the tools and resources you need to manage your Augment AI experience"
            cards={portalFeatures}
            columns={3}
            backgroundColor="bg-white"
          />
        </section>

        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Customer Portal Usage
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Empowering customers with self-service tools and comprehensive support resources
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  15K+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Active Portal Users
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  50K+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Monthly Logins
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  80%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Self-Service Resolution
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  4.9/5
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  User Satisfaction
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services">
          <InfoColumns
            title="Premium portal services"
            description="Exclusive services and features available through the customer support portal"
            columns={portalServices}
            columnsCount={3}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section id="benefits">
          <CTASection
            title="Why use the support portal?"
            description="Discover the benefits of accessing support through our comprehensive customer portal"
            actions={portalBenefits}
            columns={2}
            backgroundColor="bg-white"
          />
        </section>

        <section id="login" className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Access Your Support Portal
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Login to your customer support portal to access personalized support, manage your account, and utilize premium services.
              </p>
            </div>
            
            {isLoggedIn ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <div className="text-green-600 text-4xl mb-4">✓</div>
                <h3 className="text-xl font-semibold text-green-800 mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Welcome to Your Portal!
                </h3>
                <p className="text-green-700 mb-6" style={{ fontFamily: 'var(--oraclesans)' }}>
                  You have successfully logged into your customer support portal. Access all your personalized features and services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/portal/dashboard/"
                    className="inline-flex items-center px-6 py-3 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-200"
                    style={{ fontFamily: 'var(--oraclesans)' }}
                  >
                    Go to Dashboard
                  </a>
                  <a
                    href="/portal/tickets/"
                    className="inline-flex items-center px-6 py-3 border-2 border-[#C74634] text-[#C74634] font-semibold rounded-lg hover:bg-[#C74634] hover:text-white transition-colors duration-200"
                    style={{ fontFamily: 'var(--oraclesans)' }}
                  >
                    View Support Tickets
                  </a>
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-8">
                {/* Login Form */}
                <div className="bg-white rounded-lg shadow-sm p-8">
                  <h3 className="text-xl font-semibold text-[#161513] mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
                    Login to Portal
                  </h3>
                  <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={loginForm.email}
                        onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div>
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        required
                        value={loginForm.password}
                        onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                        placeholder="Enter your password"
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="flex items-center">
                        <input type="checkbox" className="rounded border-gray-300 text-[#C74634] focus:ring-[#C74634]" />
                        <span className="ml-2 text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                          Remember me
                        </span>
                      </label>
                      <a href="/portal/forgot-password/" className="text-sm text-[#C74634] hover:text-[#A63429]" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Forgot password?
                      </a>
                    </div>
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-200"
                      style={{ fontFamily: 'var(--oraclesans)' }}
                    >
                      Login to Portal
                    </button>
                  </form>
                </div>

                {/* Sign Up Info */}
                <div className="bg-gray-100 rounded-lg p-8">
                  <h3 className="text-xl font-semibold text-[#161513] mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
                    New Customer?
                  </h3>
                  <p className="text-base text-gray-700 mb-6" style={{ fontFamily: 'var(--oraclesans)' }}>
                    Create your customer portal account to access exclusive support features, manage your services, and get personalized assistance.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                      <span className="text-[#C74634] mr-2">✓</span>
                      24/7 support ticket management
                    </li>
                    <li className="flex items-center text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                      <span className="text-[#C74634] mr-2">✓</span>
                      Account and billing management
                    </li>
                    <li className="flex items-center text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                      <span className="text-[#C74634] mr-2">✓</span>
                      Exclusive resources and documentation
                    </li>
                    <li className="flex items-center text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                      <span className="text-[#C74634] mr-2">✓</span>
                      API management and analytics
                    </li>
                  </ul>
                  <a
                    href="/portal/signup/"
                    className="w-full inline-flex items-center justify-center px-6 py-3 border-2 border-[#C74634] text-[#C74634] font-semibold rounded-lg hover:bg-[#C74634] hover:text-white transition-colors duration-200"
                    style={{ fontFamily: 'var(--oraclesans)' }}
                  >
                    Create Portal Account
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Need immediate assistance?
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              If you're unable to access the portal or need urgent support, contact our team directly for immediate assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/support/live-chat/"
                className="inline-flex items-center px-6 py-3 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Start Live Chat
              </a>
              <a
                href="/support/"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Contact Support
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
