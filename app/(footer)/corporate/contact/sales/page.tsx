"use client";

import { useState } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export default function ContactSalesPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    phone: '',
    country: '',
    companySize: '',
    industry: '',
    useCase: '',
    message: '',
    budget: '',
    timeline: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="max-w-2xl mx-auto text-center bg-white p-12 rounded-xl shadow-lg">
          <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
            Thank You for Your Interest!
          </h1>
          <p className="text-lg text-gray-600 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
            We've received your inquiry and our sales team will contact you within 24 hours to discuss how Augment can help transform your business operations.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="text-lg font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
              What happens next?
            </h3>
            <div className="space-y-3 text-left">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#4A90E2] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</div>
                <div>
                  <p className="font-medium text-[#161513]">Initial Contact</p>
                  <p className="text-sm text-gray-600">Our sales representative will reach out to understand your specific needs</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#4A90E2] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</div>
                <div>
                  <p className="font-medium text-[#161513]">Custom Demo</p>
                  <p className="text-sm text-gray-600">We'll schedule a personalized demo tailored to your use case</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-[#4A90E2] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</div>
                <div>
                  <p className="font-medium text-[#161513]">Proposal & Next Steps</p>
                  <p className="text-sm text-gray-600">Receive a customized proposal and implementation plan</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 justify-center">
            <Link
              href="/"
              className="px-6 py-3 bg-[#4A90E2] text-white rounded-lg hover:bg-[#357ABD] transition-colors font-medium"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              Return Home
            </Link>
            <Link
              href="/product"
              className="px-6 py-3 border-2 border-[#4A90E2] text-[#4A90E2] rounded-lg hover:bg-[#4A90E2] hover:text-white transition-colors font-medium"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              Explore Products
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* SEO */}
      <h1 className="sr-only">Contact Sales | Augment AI Platform</h1>
      
      {/* Hero Section */}
      <section className="bg-[#312a2a] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
            Contact Sales
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
            Ready to transform your business with AI automation? Our sales team is here to help you find the perfect solution for your organization.
          </p>
          <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-300">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Response within 24 hours
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Free consultation
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Custom demo
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
            <div className="mb-8">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Tell us about your needs
              </h2>
              <p className="text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                Fill out the form below and our sales team will get back to you with a customized solution.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                    placeholder="Enter your business email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              {/* Company Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                    placeholder="Enter your company name"
                  />
                </div>
                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-2">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    required
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                    placeholder="Enter your job title"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Size *
                  </label>
                  <select
                    id="companySize"
                    name="companySize"
                    required
                    value={formData.companySize}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                  >
                    <option value="">Select company size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-1000">201-1,000 employees</option>
                    <option value="1001-5000">1,001-5,000 employees</option>
                    <option value="5000+">5,000+ employees</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                    Industry *
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    required
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                  >
                    <option value="">Select your industry</option>
                    <option value="technology">Technology</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="finance">Financial Services</option>
                    <option value="retail">Retail & E-commerce</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="education">Education</option>
                    <option value="government">Government</option>
                    <option value="consulting">Consulting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Project Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="useCase" className="block text-sm font-medium text-gray-700 mb-2">
                    Primary Use Case *
                  </label>
                  <select
                    id="useCase"
                    name="useCase"
                    required
                    value={formData.useCase}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                  >
                    <option value="">Select primary use case</option>
                    <option value="hr-automation">HR & Employee Management</option>
                    <option value="workflow-automation">Workflow Automation</option>
                    <option value="customer-support">Customer Support</option>
                    <option value="data-analytics">Data Analytics & Insights</option>
                    <option value="document-processing">Document Processing</option>
                    <option value="crm-sales">CRM & Sales Automation</option>
                    <option value="finance-accounting">Finance & Accounting</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                    Implementation Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                  >
                    <option value="">Select timeline</option>
                    <option value="immediate">Immediate (within 1 month)</option>
                    <option value="short-term">Short-term (1-3 months)</option>
                    <option value="medium-term">Medium-term (3-6 months)</option>
                    <option value="long-term">Long-term (6+ months)</option>
                    <option value="exploring">Just exploring options</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                  Estimated Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                >
                  <option value="">Select budget range</option>
                  <option value="under-10k">Under $10,000</option>
                  <option value="10k-50k">$10,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k-500k">$100,000 - $500,000</option>
                  <option value="500k+">$500,000+</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us more about your needs
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                  placeholder="Describe your current challenges, goals, and what you're looking to achieve with AI automation..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-[#4A90E2] text-white py-4 px-8 rounded-lg hover:bg-[#357ABD] transition-colors font-semibold text-lg"
                  style={{ fontFamily: 'var(--oraclesans)' }}
                >
                  Contact Sales Team
                </button>
                <p className="text-sm text-gray-500 mt-3 text-center">
                  By submitting this form, you agree to our{' '}
                  <Link href="/corporate/privacy" className="text-[#4A90E2] hover:underline">
                    Privacy Policy
                  </Link>{' '}
                  and{' '}
                  <Link href="/corporate/terms" className="text-[#4A90E2] hover:underline">
                    Terms of Service
                  </Link>
                  .
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Other Ways to Reach Us
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Prefer to speak directly? Our sales team is available through multiple channels.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#4A90E2] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                Call Sales
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Speak directly with our sales team
              </p>
              <a 
                href="tel:+18005555678" 
                className="text-[#4A90E2] font-semibold hover:underline text-lg"
              >
                +1 (800) 555-5678
              </a>
              <p className="text-xs text-gray-500 mt-2">
                Mon-Fri, 8AM-6PM (Local Time)
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#4A90E2] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                Email Sales
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Send us your inquiry via email
              </p>
              <a 
                href="mailto:sales@augment.com" 
                className="text-[#4A90E2] font-semibold hover:underline"
              >
                sales@augment.com
              </a>
              <p className="text-xs text-gray-500 mt-2">
                Response within 24 hours
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#4A90E2] rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                Schedule Demo
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                Book a personalized product demo
              </p>
              <Link 
                href="/book-demo" 
                className="inline-block px-4 py-2 bg-[#4A90E2] text-white rounded-lg hover:bg-[#357ABD] transition-colors font-medium"
              >
                Book Now
              </Link>
              <p className="text-xs text-gray-500 mt-2">
                30-minute sessions available
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
