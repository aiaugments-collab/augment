'use client';
import { Metadata } from 'next';
import { useState } from 'react';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection
} from '../../../components/sections';

export default function ContactPage() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', contactForm);
  };

  const heroButtons = [
    {
      text: 'Contact Sales',
      href: '/corporate/contact/sales',
      variant: 'primary' as const
    },
    {
      text: 'Get Support',
      href: '/support',
      variant: 'secondary' as const
    }
  ];

  const contactOptions = [
    {
      id: 'sales',
      title: 'Sales Inquiries',
      description: 'Speak with our sales team about pricing, demos, and enterprise solutions.',
      ctaText: 'Contact Sales',
      ctaLink: '/corporate/contact/sales',
      image: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'support',
      title: 'Technical Support',
      description: 'Get help with technical issues, integration questions, and troubleshooting.',
      ctaText: 'Get Support',
      ctaLink: '/support',
      image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'partnerships',
      title: 'Partnerships',
      description: 'Explore partnership opportunities and collaboration with our team.',
      ctaText: 'Learn More',
      ctaLink: '/partners',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  const officeLocations = [
    {
      title: 'San Francisco HQ',
      description: 'Our main headquarters and engineering hub',
      icon: '🏢'
    },
    {
      title: 'New York Office',
      description: 'Sales and business development center',
      icon: '🌆'
    },
    {
      title: 'London Office',
      description: 'European operations and customer success',
      icon: '🇬🇧'
    },
    {
      title: 'Remote Teams',
      description: 'Global distributed workforce',
      icon: '🌍'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SectionHero
        title="Contact Us"
        subtitle="Get in touch with our team"
        description="Reach out for sales inquiries, technical support, partnerships, or general questions about Augment AI."
        ctaButtons={heroButtons}
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&crop=faces"
      />
 
      {/* Contact Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How Can We Help?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the best way to reach us based on your needs. Our team is here to help with any questions or inquiries.
            </p>
          </div>
          <FeaturedCards cards={contactOptions} />
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Send Us a Message
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={contactForm.name}
                  onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={contactForm.email}
                  onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  value={contactForm.company}
                  onChange={(e) => setContactForm({...contactForm, company: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                  Inquiry Type
                </label>
                <select
                  id="inquiryType"
                  value={contactForm.inquiryType}
                  onChange={(e) => setContactForm({...contactForm, inquiryType: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                >
                  <option value="general">General Inquiry</option>
                  <option value="sales">Sales</option>
                  <option value="support">Technical Support</option>
                  <option value="partnerships">Partnerships</option>
                  <option value="press">Press & Media</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                required
                value={contactForm.subject}
                onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={contactForm.message}
                onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                placeholder="Please provide details about your inquiry..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Locations
            </h2>
            <p className="text-lg text-gray-600">
              We have offices around the world to better serve our global customer base.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {officeLocations.map((location, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">{location.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {location.title}
                </h3>
                <p className="text-gray-600">
                  {location.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quick Contact Information
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Sales</h3>
              <p className="text-gray-600 mb-2">sales@augment.com</p>
              <p className="text-gray-600">+1 (800) 555-SALES</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Support</h3>
              <p className="text-gray-600 mb-2">support@augment.com</p>
              <p className="text-gray-600">24/7 Online Support</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">General</h3>
              <p className="text-gray-600 mb-2">info@augment.com</p>
              <p className="text-gray-600">Business Hours: 9-5 PST</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Get Started?"
        description="Join thousands of businesses already using Augment AI to transform their operations."
        actions={[
          {
            title: 'Start Free Trial',
            href: '/trial',
            buttonText: 'Start Free Trial'
          },
          {
            title: 'Schedule Demo',
            href: '/book-demo',
            buttonText: 'Schedule Demo'
          }
        ]}
      />
    </div>
  );
}
