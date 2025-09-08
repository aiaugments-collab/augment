'use client';
import { Metadata } from 'next';
import { useState } from 'react';

export default function JobSearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', count: 47 },
    { id: 'engineering', name: 'Engineering', count: 18 },
    { id: 'product', name: 'Product', count: 8 },
    { id: 'research', name: 'Research', count: 6 },
    { id: 'sales', name: 'Sales', count: 5 },
    { id: 'marketing', name: 'Marketing', count: 4 },
    { id: 'operations', name: 'Operations', count: 3 },
    { id: 'people', name: 'People & Culture', count: 3 }
  ];

  const locations = [
    { id: 'all', name: 'All Locations' },
    { id: 'san-francisco', name: 'San Francisco, CA' },
    { id: 'remote', name: 'Remote' },
    { id: 'london', name: 'London, UK' },
    { id: 'tokyo', name: 'Tokyo, Japan' },
    { id: 'singapore', name: 'Singapore' }
  ];

  const levels = [
    { id: 'all', name: 'All Levels' },
    { id: 'entry', name: 'Entry Level' },
    { id: 'mid', name: 'Mid Level' },
    { id: 'senior', name: 'Senior Level' },
    { id: 'staff', name: 'Staff Level' },
    { id: 'principal', name: 'Principal Level' },
    { id: 'executive', name: 'Executive Level' }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Research Scientist',
      department: 'Research',
      location: 'San Francisco, CA',
      level: 'Senior Level',
      type: 'Full-time',
      description: 'Lead breakthrough research in foundation models and AI safety, working with our world-class research team.',
      requirements: ['PhD in ML/AI or related field', '5+ years research experience', 'Published papers in top venues'],
      posted: '2 days ago'
    },
    {
      id: 2,
      title: 'Staff Software Engineer - Platform',
      department: 'Engineering',
      location: 'Remote',
      level: 'Staff Level',
      type: 'Full-time',
      description: 'Build and scale the core platform infrastructure serving millions of AI requests daily.',
      requirements: ['8+ years software engineering', 'Distributed systems expertise', 'Go/Python proficiency'],
      posted: '3 days ago'
    },
    {
      id: 3,
      title: 'Product Manager - Developer Experience',
      department: 'Product',
      location: 'San Francisco, CA',
      level: 'Mid Level',
      type: 'Full-time',
      description: 'Shape the developer experience for our AI platform, working closely with engineering and design.',
      requirements: ['5+ years product management', 'Developer tools experience', 'Technical background'],
      posted: '5 days ago'
    },
    {
      id: 4,
      title: 'Enterprise Sales Director',
      department: 'Sales',
      location: 'London, UK',
      level: 'Senior Level',
      type: 'Full-time',
      description: 'Drive enterprise sales across EMEA, building relationships with Fortune 500 companies.',
      requirements: ['10+ years enterprise sales', 'SaaS/API experience', 'Proven track record'],
      posted: '1 week ago'
    },
    {
      id: 5,
      title: 'Machine Learning Engineer',
      department: 'Engineering',
      location: 'Remote',
      level: 'Mid Level',
      type: 'Full-time',
      description: 'Develop and deploy ML models at scale, working on cutting-edge AI applications.',
      requirements: ['3+ years ML engineering', 'PyTorch/TensorFlow', 'Production ML experience'],
      posted: '1 week ago'
    },
    {
      id: 6,
      title: 'Head of Marketing',
      department: 'Marketing',
      location: 'San Francisco, CA',
      level: 'Executive Level',
      type: 'Full-time',
      description: 'Lead global marketing strategy and execution for our rapidly growing AI platform.',
      requirements: ['15+ years marketing leadership', 'B2B SaaS experience', 'Team management'],
      posted: '2 weeks ago'
    }
  ];

  const benefits = [
    {
      category: 'Health & Wellness',
      items: ['Comprehensive medical, dental, vision', 'Mental health support', 'Wellness stipend', 'Gym membership']
    },
    {
      category: 'Financial',
      items: ['Competitive salary', 'Equity participation', '401(k) matching', 'Flexible spending accounts']
    },
    {
      category: 'Time Off',
      items: ['Unlimited PTO', 'Parental leave', 'Sabbatical program', 'Company holidays']
    },
    {
      category: 'Growth',
      items: ['Learning & development budget', 'Conference attendance', 'Internal mobility', 'Mentorship programs']
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Help us democratize AI and build the future of intelligent applications. Explore 47 open positions across engineering, research, product, and more.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search jobs by title, keyword, or skill..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-600 rounded-lg bg-gray-800/50 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                style={{ fontFamily: 'var(--oraclesans)' }}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Department Filter */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Department
                </h3>
                <div className="space-y-2">
                  {departments.map((dept) => (
                    <button
                      key={dept.id}
                      onClick={() => setSelectedDepartment(dept.id)}
                      className={`w-full text-left flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                        selectedDepartment === dept.id
                          ? 'bg-[#C74634] text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      style={{ fontFamily: 'var(--oraclesans)' }}
                    >
                      <span className="text-sm">{dept.name}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        selectedDepartment === dept.id ? 'bg-white/20' : 'bg-gray-200'
                      }`}>
                        {dept.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Location Filter */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Location
                </h3>
                <div className="space-y-2">
                  {locations.map((location) => (
                    <button
                      key={location.id}
                      onClick={() => setSelectedLocation(location.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm ${
                        selectedLocation === location.id
                          ? 'bg-[#C74634] text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      style={{ fontFamily: 'var(--oraclesans)' }}
                    >
                      {location.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Level Filter */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Experience Level
                </h3>
                <div className="space-y-2">
                  {levels.map((level) => (
                    <button
                      key={level.id}
                      onClick={() => setSelectedLevel(level.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm ${
                        selectedLevel === level.id
                          ? 'bg-[#C74634] text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      style={{ fontFamily: 'var(--oraclesans)' }}
                    >
                      {level.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-normal text-[#161513]" style={{ fontFamily: 'var(--oracleserif)' }}>
                Open Positions ({jobOpenings.length})
              </h2>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent">
                <option>Sort by: Most Recent</option>
                <option>Sort by: Department</option>
                <option>Sort by: Location</option>
              </select>
            </div>

            <div className="space-y-6">
              {jobOpenings.map((job) => (
                <div key={job.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                        {job.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          {job.department}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        job.level === 'Entry Level' ? 'bg-green-100 text-green-800' :
                        job.level === 'Mid Level' ? 'bg-blue-100 text-blue-800' :
                        job.level === 'Senior Level' ? 'bg-purple-100 text-purple-800' :
                        job.level === 'Staff Level' ? 'bg-orange-100 text-orange-800' :
                        job.level === 'Principal Level' ? 'bg-red-100 text-red-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {job.level}
                      </span>
                      <p className="text-sm text-gray-500 mt-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Posted {job.posted}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                    {job.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-medium text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                      Key Requirements:
                    </h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                          <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-3">
                      <a
                        href="#"
                        className="inline-flex items-center px-4 py-2 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-200"
                        style={{ fontFamily: 'var(--oraclesans)' }}
                      >
                        Apply Now
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        style={{ fontFamily: 'var(--oraclesans)' }}
                      >
                        Learn More
                      </a>
                    </div>
                    <button className="text-gray-400 hover:text-[#C74634] transition-colors duration-200">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="px-8 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-200">
                Load More Jobs
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Why Work at Augment AI?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Comprehensive benefits and perks designed to support your career growth and well-being
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((category, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                      <svg className="w-4 h-4 text-[#C74634] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#C74634] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
            Ready to Shape the Future of AI?
          </h2>
          <p className="text-lg text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
            Join our mission to democratize artificial intelligence and build the next generation of AI-powered applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              Browse All Jobs
            </a>
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              Join Talent Community
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
