"use client";

import { useState } from "react";
import Link from "next/link";

export default function CertificationPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    experience: '',
    interests: [] as string[],
    agreeToTerms: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === 'agreeToTerms') {
        setFormData(prev => ({ ...prev, [name]: checked }));
      } else {
        // Handle interest checkboxes
        setFormData(prev => ({
          ...prev,
          interests: checked 
            ? [...prev.interests, value]
            : prev.interests.filter(interest => interest !== value)
        }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <main>
          <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
            <div className="text-center">
              <div className="mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h1 
                  className="text-4xl font-normal text-gray-900 mb-6"
                  style={{ fontFamily: "var(--oracleserif)" }}
                >
                  Registration Successful!
                </h1>
                <div 
                  style={{
                    width: "60px",
                    height: "3px",
                    backgroundColor: "#C74634",
                    margin: "0 auto 24px"
                  }}
                />
              </div>
              
              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Welcome to Augment Certification Program!</h2>
                <p className="text-gray-700 mb-6">
                  Thank you for registering, <strong>{formData.firstName}</strong>! We've sent a confirmation email to <strong>{formData.email}</strong> with your next steps.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">What's Next?</h3>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Check your email for login credentials</li>
                      <li>• Access your personalized learning path</li>
                      <li>• Start with foundational AI concepts</li>
                      <li>• Join our community forum</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Program Benefits</h3>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Industry-recognized certification</li>
                      <li>• Hands-on labs and projects</li>
                      <li>• Expert instructor support</li>
                      <li>• Career advancement opportunities</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-x-4">
                <Link 
                  href="/training"
                  className="inline-block px-8 py-3 text-white font-semibold rounded-md transition-colors duration-300"
                  style={{ 
                    backgroundColor: "#C74634",
                    fontFamily: "var(--oraclesans)"
                  }}
                >
                  Access Training Portal
                </Link>
                <Link 
                  href="/"
                  className="inline-block px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-md hover:border-gray-400 transition-colors duration-300"
                  style={{ fontFamily: "var(--oraclesans)" }}
                >
                  Return Home
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <main>
        <h1 className="sr-only">Augment AI Certification Program Registration</h1>
        
        {/* Header */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
            <h1 
              className="text-4xl lg:text-5xl font-normal text-gray-900 mb-6"
              style={{ fontFamily: "var(--oracleserif)" }}
            >
              Get AI-certified—for free!
            </h1>
            <div 
              style={{
                width: "60px",
                height: "3px",
                backgroundColor: "#C74634",
                marginBottom: "24px"
              }}
            />
            <p className="text-xl text-gray-700 leading-relaxed">
              Join thousands of your peers already seeking a competitive edge by registering for Augment's Certification Program. The program is free until March 31.
            </p>
          </div>
        </div>

        {/* Form Content */}
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Program Information */}
            <div>
              <h2 
                className="text-2xl font-semibold text-gray-900 mb-6"
                style={{ fontFamily: "var(--oracleserif)" }}
              >
                Program Overview
              </h2>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">🎓 Comprehensive Curriculum</h3>
                  <p className="text-blue-800 text-sm">
                    Master AI fundamentals, machine learning, and practical implementation across 12 comprehensive modules.
                  </p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-2">🏆 Industry Recognition</h3>
                  <p className="text-green-800 text-sm">
                    Earn a certificate recognized by leading technology companies and boost your career prospects.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-purple-900 mb-2">🔬 Hands-on Labs</h3>
                  <p className="text-purple-800 text-sm">
                    Practice with real AI tools and build projects using Augment's platform in guided lab environments.
                  </p>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-orange-900 mb-2">👥 Expert Support</h3>
                  <p className="text-orange-800 text-sm">
                    Get guidance from AI practitioners and join a community of learners and professionals.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-red-50 rounded-lg border-l-4 border-red-400">
                <h3 className="font-semibold text-red-900 mb-2">⏰ Limited Time Offer</h3>
                <p className="text-red-800 text-sm">
                  This comprehensive certification program is completely free until March 31, 2024. Regular price: $299.
                </p>
              </div>
            </div>

            {/* Registration Form */}
            <div>
              <h2 
                className="text-2xl font-semibold text-gray-900 mb-6"
                style={{ fontFamily: "var(--oracleserif)" }}
              >
                Register Now
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
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
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-2">
                    Job Title
                  </label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    AI/ML Experience Level *
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select your level</option>
                    <option value="beginner">Beginner (No prior experience)</option>
                    <option value="intermediate">Intermediate (Some experience)</option>
                    <option value="advanced">Advanced (Extensive experience)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Areas of Interest (Select all that apply)
                  </label>
                  <div className="space-y-2">
                    {[
                      'Machine Learning Fundamentals',
                      'Natural Language Processing',
                      'Computer Vision',
                      'AI Ethics and Governance',
                      'Business Applications of AI',
                      'AI Agent Development'
                    ].map((interest) => (
                      <label key={interest} className="flex items-center">
                        <input
                          type="checkbox"
                          name="interests"
                          value={interest}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <span className="ml-2 text-sm text-gray-700">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleInputChange}
                      required
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mt-1"
                    />
                    <span className="ml-2 text-sm text-gray-700">
                      I agree to the <Link href="/legal/privacy" className="text-blue-600 hover:underline">Terms of Service</Link> and <Link href="/legal/privacy/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link> *
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 text-white font-semibold rounded-md transition-colors duration-300"
                  style={{ 
                    backgroundColor: "#C74634",
                    fontFamily: "var(--oraclesans)"
                  }}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = "#A63429"}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = "#C74634"}
                >
                  Register for Free Certification
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
