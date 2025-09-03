import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Company Overview | About Augment AI',
  description: 'Learn about Augment AI - our mission, vision, values, and commitment to advancing artificial intelligence for everyone.',
  keywords: 'about augment, company overview, AI company, mission, vision, values, artificial intelligence',
};

export default function CompanyOverviewPage() {
  const companyStats = [
    { number: '2019', label: 'Founded' },
    { number: '500+', label: 'Employees' },
    { number: '50M+', label: 'Users Worldwide' },
    { number: '99.9%', label: 'Platform Uptime' }
  ];

  const coreValues = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI, constantly exploring new frontiers and breakthrough technologies.',
      icon: '🚀'
    },
    {
      title: 'Ethical AI',
      description: 'We believe AI should be safe, transparent, and beneficial for all humanity. Ethics guide every decision we make.',
      icon: '🛡️'
    },
    {
      title: 'Customer Success',
      description: 'Our customers\' success is our success. We\'re committed to providing exceptional experiences and outcomes.',
      icon: '🎯'
    },
    {
      title: 'Inclusive Excellence',
      description: 'We foster a diverse, inclusive environment where everyone can contribute their best work and unique perspectives.',
      icon: '🤝'
    },
    {
      title: 'Continuous Learning',
      description: 'We embrace curiosity and continuous improvement, always seeking to learn, grow, and adapt.',
      icon: '📚'
    },
    {
      title: 'Global Impact',
      description: 'We strive to make a positive impact on the world through responsible AI development and deployment.',
      icon: '🌍'
    }
  ];

  const milestones = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'Augment AI was founded with a vision to democratize artificial intelligence and make it accessible to everyone.'
    },
    {
      year: '2020',
      title: 'First AI Model Launch',
      description: 'Released our first commercial AI model, serving thousands of developers and businesses worldwide.'
    },
    {
      year: '2021',
      title: 'Series A Funding',
      description: 'Raised $50M in Series A funding to accelerate product development and global expansion.'
    },
    {
      year: '2022',
      title: 'Platform Launch',
      description: 'Launched the Augment AI platform, providing comprehensive AI tools and services to enterprises.'
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Expanded operations to Europe and Asia, serving customers in over 50 countries worldwide.'
    },
    {
      year: '2024',
      title: 'AI Innovation Hub',
      description: 'Opened our AI Innovation Hub, advancing research in responsible AI and next-generation technologies.'
    }
  ];

  const leadership = [
    {
      name: 'Sarah Chen',
      role: 'Chief Executive Officer',
      bio: 'Former VP of AI at Google, leading Augment\'s vision for democratizing artificial intelligence.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=faces'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Chief Technology Officer',
      bio: 'AI researcher with 15+ years experience, previously at OpenAI and Microsoft Research.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=faces'
    },
    {
      name: 'Emily Johnson',
      role: 'Chief Product Officer',
      bio: 'Product leader focused on building AI tools that empower developers and businesses worldwide.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=faces'
    },
    {
      name: 'David Wilson',
      role: 'Chief Operating Officer',
      bio: 'Operations executive with expertise in scaling technology companies and global expansion.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
              About Augment AI
            </h1>
            <p className="text-xl text-gray-300 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              We're on a mission to democratize artificial intelligence and make it accessible, safe, and beneficial for everyone. Founded in 2019, we're building the future of AI-powered applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#mission"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Our Mission
              </a>
              <a
                href="#leadership"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Meet Our Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
                Our Mission & Vision
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oracleserif)' }}>
                    Mission
                  </h3>
                  <p className="text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                    To democratize artificial intelligence by providing powerful, accessible, and ethical AI tools that empower developers, businesses, and organizations to build the future.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oracleserif)' }}>
                    Vision
                  </h3>
                  <p className="text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                    A world where artificial intelligence enhances human potential, drives innovation, and creates positive impact for all of humanity through responsible development and deployment.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Team collaboration at Augment AI"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Our Core Values
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              The principles that guide everything we do at Augment AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oracleserif)' }}>
                  {value.title}
                </h3>
                <p className="text-gray-700 text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Our Journey
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Key milestones in our mission to democratize artificial intelligence
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#C74634] hidden lg:block"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 bg-[#C74634] text-white rounded-full flex items-center justify-center font-bold mr-4">
                          {milestone.year}
                        </div>
                        <h3 className="text-lg font-semibold text-[#161513]" style={{ fontFamily: 'var(--oracleserif)' }}>
                          {milestone.title}
                        </h3>
                      </div>
                      <p className="text-gray-700 text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="hidden lg:block lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="leadership" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Leadership Team
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Meet the experienced leaders driving Augment AI's mission and vision
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-[#161513] mb-1" style={{ fontFamily: 'var(--oracleserif)' }}>
                  {leader.name}
                </h3>
                <p className="text-[#C74634] font-medium text-sm mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {leader.role}
                </p>
                <p className="text-gray-700 text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-200"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              View Full Leadership Team
            </a>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
                Global Presence
              </h2>
              <p className="text-lg text-gray-700 mb-6" style={{ fontFamily: 'var(--oraclesans)' }}>
                With offices and team members around the world, we're building AI solutions that serve a global community of developers and businesses.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                    Headquarters
                  </h4>
                  <p className="text-gray-700 text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                    San Francisco, CA
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                    Global Offices
                  </h4>
                  <p className="text-gray-700 text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                    London, Tokyo, Singapore
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                    Countries Served
                  </h4>
                  <p className="text-gray-700 text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                    50+ Countries
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                    Languages Supported
                  </h4>
                  <p className="text-gray-700 text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                    25+ Languages
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop"
                alt="Global network visualization"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#C74634] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
            Join Our Mission
          </h2>
          <p className="text-lg text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
            Be part of the team that's democratizing AI and building the future of intelligent applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              View Open Positions
            </a>
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
