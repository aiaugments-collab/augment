'use client';
import { Metadata } from 'next';
import { useState } from 'react';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection
} from '../../components/sections';

export default function SupportPage() {
  const [supportForm, setSupportForm] = useState({
    name: '',
    email: '',
    company: '',
    category: '',
    priority: '',
    subject: '',
    description: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setSupportForm({
        name: '',
        email: '',
        company: '',
        category: '',
        priority: '',
        subject: '',
        description: ''
      });
    }, 3000);
  };

  const heroButtons = [
    {
      text: 'Contact Support',
      href: '#contact',
      variant: 'primary' as const
    },
    {
      text: 'Browse Help Center',
      href: '/knowledge/',
      variant: 'secondary' as const
    }
  ];

  const supportOptions = [
    {
      id: 'technical-support',
      title: '24/7 Technical Support',
      description: 'Get immediate help with technical issues, implementation questions, and troubleshooting from our expert support team.',
      ctaText: 'Get technical help',
      ctaLink: '#contact',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'live-chat',
      title: 'Live Chat Support',
      description: 'Connect instantly with support agents through our live chat system for quick answers and real-time assistance.',
      ctaText: 'Start live chat',
      ctaLink: '/support/live-chat/',
      image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'phone-support',
      title: 'Phone Support',
      description: 'Speak directly with our support specialists for complex issues and personalized assistance.',
      ctaText: 'Call support',
      ctaLink: '/support/phone/',
      image: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'enterprise-support',
      title: 'Enterprise Support',
      description: 'Dedicated support for enterprise customers with priority handling, dedicated account managers, and SLA guarantees.',
      ctaText: 'Enterprise support',
      ctaLink: '/support/enterprise/',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'training-support',
      title: 'Training & Onboarding',
      description: 'Comprehensive training programs and onboarding support to help you get the most from Augment AI products.',
      ctaText: 'Get training',
      ctaLink: '/training/',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'community-support',
      title: 'Community Support',
      description: 'Connect with other users, share experiences, and get help from the community in our forums and groups.',
      ctaText: 'Join community',
      ctaLink: '/forums/',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  const supportResources = [
    {
      id: 'knowledge-base',
      title: 'Knowledge Base',
      description: 'Comprehensive articles, guides, and FAQs covering common questions and solutions.',
      ctaText: 'Browse articles',
      ctaLink: '/knowledge/'
    },
    {
      id: 'video-tutorials',
      title: 'Video Tutorials',
      description: 'Step-by-step video guides for product features, integrations, and troubleshooting.',
      ctaText: 'Watch videos',
      ctaLink: '/support/videos/'
    },
    {
      id: 'api-documentation',
      title: 'API Documentation',
      description: 'Complete technical documentation for developers integrating with Augment AI APIs.',
      ctaText: 'View API docs',
      ctaLink: '/documentation/api/'
    },
    {
      id: 'system-status',
      title: 'System Status',
      description: 'Real-time status updates and maintenance schedules for all Augment AI services.',
      ctaText: 'Check status',
      ctaLink: '/support/status/'
    },
    {
      id: 'release-notes',
      title: 'Release Notes',
      description: 'Latest product updates, new features, and important announcements.',
      ctaText: 'View updates',
      ctaLink: '/support/releases/'
    },
    {
      id: 'best-practices',
      title: 'Best Practices',
      description: 'Implementation guides and best practices from successful customer deployments.',
      ctaText: 'Learn best practices',
      ctaLink: '/support/best-practices/'
    }
  ];

  const supportPlans = [
    {
      title: 'Standard Support',
      description: 'Email support with 24-hour response time for all customers. Access to knowledge base and community forums.',
      href: '/support/standard/',
      buttonText: 'Learn more',
      icon: '📧'
    },
    {
      title: 'Premium Support',
      description: 'Priority support with 4-hour response time, live chat, and phone support during business hours.',
      href: '/support/premium/',
      buttonText: 'Upgrade now',
      icon: '⚡'
    },
    {
      title: 'Enterprise Support',
      description: 'Dedicated support team, 1-hour response time, 24/7 phone support, and dedicated account manager.',
      href: '/support/enterprise/',
      buttonText: 'Contact sales',
      icon: '🏢'
    },
    {
      title: 'Developer Support',
      description: 'Technical support for developers with code reviews, architecture guidance, and implementation assistance.',
      href: '/support/developer/',
      buttonText: 'Get dev support',
      icon: '👨‍💻'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        <h1 className="sr-only">Support | Augment AI Help Center</h1>

        <SectionHero
          title="Support & Help Center"
          subtitle="We're here to help you succeed"
          description="Get the support you need to maximize your success with Augment AI. From technical assistance to training resources, our comprehensive support system ensures you have everything needed to achieve your goals."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Support team helping customers with AI implementation and technical questions"
        />

        <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto py-4">
              <a href="#support-options" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Support Options
              </a>
              <a href="#resources" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Self-Help Resources
              </a>
              <a href="#plans" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Support Plans
              </a>
              <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Contact Us
              </a>
            </div>
          </div>
        </nav>

        <section id="support-options">
          <FeaturedCards
            title="Comprehensive support when you need it"
            description="Choose from multiple support channels designed to help you succeed with Augment AI"
            cards={supportOptions}
            columns={3}
            backgroundColor="bg-white"
          />
        </section>

        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Support Excellence
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Delivering world-class support to ensure customer success
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  &lt;1h
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Average Response Time
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  99.5%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Customer Satisfaction
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  24/7
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Support Availability
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  95%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  First Contact Resolution
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="resources">
          <InfoColumns
            title="Self-help resources and documentation"
            description="Find answers quickly with our comprehensive self-help resources and documentation"
            columns={supportResources}
            columnsCount={3}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section id="plans">
          <CTASection
            title="Choose the right support plan for you"
            description="Select from our range of support plans designed for different needs and requirements"
            actions={supportPlans}
            columns={2}
            backgroundColor="bg-white"
          />
        </section>

        <section id="contact" className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Contact Support
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Need help? Submit a support request and our team will get back to you quickly with solutions.
              </p>
            </div>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <div className="text-green-600 text-4xl mb-4">✓</div>
                <h3 className="text-xl font-semibold text-green-800 mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Support Request Submitted!
                </h3>
                <p className="text-green-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Thank you for contacting support. We've received your request and will respond within our SLA timeframe. You'll receive updates via email.
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={supportForm.name}
                        onChange={(e) => setSupportForm({...supportForm, name: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={supportForm.email}
                        onChange={(e) => setSupportForm({...supportForm, email: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={supportForm.company}
                        onChange={(e) => setSupportForm({...supportForm, company: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                        placeholder="Enter company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Issue Category *
                      </label>
                      <select
                        id="category"
                        required
                        value={supportForm.category}
                        onChange={(e) => setSupportForm({...supportForm, category: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                      >
                        <option value="">Select category</option>
                        <option value="technical">Technical Issue</option>
                        <option value="billing">Billing & Account</option>
                        <option value="product">Product Question</option>
                        <option value="integration">Integration Help</option>
                        <option value="training">Training & Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Priority Level *
                      </label>
                      <select
                        id="priority"
                        required
                        value={supportForm.priority}
                        onChange={(e) => setSupportForm({...supportForm, priority: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                      >
                        <option value="">Select priority</option>
                        <option value="low">Low - General question</option>
                        <option value="medium">Medium - Non-urgent issue</option>
                        <option value="high">High - Business impact</option>
                        <option value="critical">Critical - System down</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={supportForm.subject}
                      onChange={(e) => setSupportForm({...supportForm, subject: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                      placeholder="Brief description of your issue"
                    />
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Detailed Description *
                    </label>
                    <textarea
                      id="description"
                      rows={6}
                      required
                      value={supportForm.description}
                      onChange={(e) => setSupportForm({...supportForm, description: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                      placeholder="Please provide detailed information about your issue, including steps to reproduce, error messages, and any relevant context..."
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="inline-flex items-center px-8 py-3 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-200"
                      style={{ fontFamily: 'var(--oraclesans)' }}
                    >
                      Submit Support Request
                    </button>
                  </div>
                </form>
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
              For urgent issues or enterprise customers, contact our support team directly for immediate assistance.
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
                href="tel:+1-800-AUGMENT"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Call: 1-800-AUGMENT
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
