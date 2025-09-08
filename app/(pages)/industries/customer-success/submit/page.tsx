"use client";

import { useState } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export default function SubmitSuccessStoryPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    title: '',
    industry: '',
    storyTitle: '',
    challenge: '',
    solution: '',
    results: '',
    metrics: '',
    testimonial: ''
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
            Thank You for Sharing Your Story!
          </h1>
          <p className="text-lg text-gray-600 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
            We've received your success story submission. Our team will review it and may contact you to feature your story in our case studies and marketing materials.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/" className="px-6 py-3 bg-[#4A90E2] text-white rounded-lg hover:bg-[#357ABD] transition-colors font-medium">
              Return Home
            </Link>
            <Link href="/industries/customer-success" className="px-6 py-3 border-2 border-[#4A90E2] text-[#4A90E2] rounded-lg hover:bg-[#4A90E2] hover:text-white transition-colors font-medium">
              View Success Stories
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <h1 className="sr-only">Share Your Success Story | Augment AI</h1>
      
      <section className="bg-[#312a2a] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
            Share Your Success Story
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
            Help inspire other organizations by sharing your transformation journey and results with Augment AI.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                  />
                </div>
              </div>

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
                  />
                </div>
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                    Job Title *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
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
                    <option value="">Select Industry</option>
                    <option value="financial-services">Financial Services</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="manufacturing">Manufacturing</option>
                    <option value="retail">Retail</option>
                    <option value="technology">Technology</option>
                    <option value="government">Government</option>
                    <option value="education">Education</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="storyTitle" className="block text-sm font-medium text-gray-700 mb-2">
                    Story Title *
                  </label>
                  <input
                    type="text"
                    id="storyTitle"
                    name="storyTitle"
                    required
                    value={formData.storyTitle}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                    placeholder="e.g., 50% Efficiency Improvement with AI Automation"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="challenge" className="block text-sm font-medium text-gray-700 mb-2">
                  What challenges were you facing? *
                </label>
                <textarea
                  id="challenge"
                  name="challenge"
                  required
                  rows={4}
                  value={formData.challenge}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                  placeholder="Describe the business challenges that led you to seek an AI solution..."
                />
              </div>

              <div>
                <label htmlFor="solution" className="block text-sm font-medium text-gray-700 mb-2">
                  How did Augment AI help solve these challenges? *
                </label>
                <textarea
                  id="solution"
                  name="solution"
                  required
                  rows={4}
                  value={formData.solution}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                  placeholder="Describe the Augment AI solution and implementation process..."
                />
              </div>

              <div>
                <label htmlFor="results" className="block text-sm font-medium text-gray-700 mb-2">
                  What results did you achieve? *
                </label>
                <textarea
                  id="results"
                  name="results"
                  required
                  rows={4}
                  value={formData.results}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                  placeholder="Describe the business outcomes and impact..."
                />
              </div>

              <div>
                <label htmlFor="metrics" className="block text-sm font-medium text-gray-700 mb-2">
                  Key Metrics & Numbers
                </label>
                <textarea
                  id="metrics"
                  name="metrics"
                  rows={3}
                  value={formData.metrics}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                  placeholder="e.g., 50% cost reduction, 75% faster processing, $2M annual savings..."
                />
              </div>

              <div>
                <label htmlFor="testimonial" className="block text-sm font-medium text-gray-700 mb-2">
                  Testimonial Quote
                </label>
                <textarea
                  id="testimonial"
                  name="testimonial"
                  rows={3}
                  value={formData.testimonial}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
                  placeholder="A quote that summarizes your experience with Augment AI..."
                />
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full bg-[#4A90E2] text-white py-4 px-8 rounded-lg hover:bg-[#357ABD] transition-colors font-semibold text-lg"
                >
                  Submit Success Story
                </button>
                <p className="text-sm text-gray-500 mt-3 text-center">
                  By submitting this form, you agree to allow Augment to use your story in marketing materials.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
