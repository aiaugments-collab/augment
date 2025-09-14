import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Leadership Team | About Augment AI',
  description: 'Meet the experienced leadership team driving Augment AI\'s mission to democratize artificial intelligence worldwide.',
  keywords: 'leadership team, executives, CEO, CTO, management, AI leaders, company leadership',
};

export default function LeadershipPage() {
  const executiveTeam = [
    {
      name: 'Sarah Chen',
      role: 'Chief Executive Officer & Co-Founder',
      bio: 'Sarah leads Augment AI\'s vision to democratize artificial intelligence. Previously VP of AI at Google, she has 15+ years of experience in AI research and product development. Sarah holds a PhD in Computer Science from Stanford University and has published over 50 papers in top-tier AI conferences.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=faces',
      linkedin: '#',
      twitter: '#',
      achievements: ['Named to Fortune 40 Under 40', 'MIT Technology Review Innovator', 'IEEE Fellow']
    },
    {
      name: 'Michael Rodriguez',
      role: 'Chief Technology Officer & Co-Founder',
      bio: 'Michael oversees all technical aspects of Augment AI\'s platform and research initiatives. Former Principal Researcher at OpenAI and Microsoft Research, he specializes in large language models and distributed systems. He holds a PhD in Machine Learning from Carnegie Mellon University.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces',
      linkedin: '#',
      twitter: '#',
      achievements: ['ACM Distinguished Scientist', 'NIPS Best Paper Award', '20+ Patents in AI/ML']
    },
    {
      name: 'Emily Johnson',
      role: 'Chief Product Officer',
      bio: 'Emily leads product strategy and development at Augment AI, focusing on creating intuitive AI tools for developers and businesses. Previously Head of Product at Stripe and Senior PM at Facebook, she has extensive experience in scaling developer platforms.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=faces',
      linkedin: '#',
      twitter: '#',
      achievements: ['Product Leader of the Year', 'Harvard Business Review Contributor', 'Women in Tech Award']
    },
    {
      name: 'David Wilson',
      role: 'Chief Operating Officer',
      bio: 'David manages global operations, partnerships, and business development at Augment AI. Former COO at Databricks and VP of Operations at Uber, he brings deep expertise in scaling technology companies internationally.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces',
      linkedin: '#',
      twitter: '#',
      achievements: ['Global Operations Excellence Award', 'McKinsey Alum', 'Wharton MBA']
    }
  ];

  const seniorLeadership = [
    {
      name: 'Dr. Lisa Wang',
      role: 'VP of AI Research',
      department: 'Research & Development',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=faces',
      bio: 'Leading breakthrough research in foundation models and AI safety.'
    },
    {
      name: 'James Thompson',
      role: 'VP of Engineering',
      department: 'Engineering',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=faces',
      bio: 'Overseeing platform architecture and engineering excellence.'
    },
    {
      name: 'Maria Santos',
      role: 'VP of Marketing',
      department: 'Marketing',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=faces',
      bio: 'Driving global brand strategy and developer community growth.'
    },
    {
      name: 'Robert Kim',
      role: 'VP of Sales',
      department: 'Sales',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces',
      bio: 'Leading enterprise sales and strategic partnerships worldwide.'
    },
    {
      name: 'Jennifer Park',
      role: 'VP of People',
      department: 'Human Resources',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=faces',
      bio: 'Building inclusive culture and talent development programs.'
    },
    {
      name: 'Alex Chen',
      role: 'VP of Finance',
      department: 'Finance',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=faces',
      bio: 'Managing financial strategy and investor relations.'
    }
  ];

  const advisors = [
    {
      name: 'Dr. Andrew Ng',
      role: 'Strategic Advisor',
      company: 'Former Stanford AI Lab, Coursera Co-founder',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces'
    },
    {
      name: 'Reid Hoffman',
      role: 'Board Member',
      company: 'Co-founder of LinkedIn, Partner at Greylock',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces'
    },
    {
      name: 'Dr. Fei-Fei Li',
      role: 'AI Ethics Advisor',
      company: 'Stanford HAI, Former Google Cloud AI',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=faces'
    },
    {
      name: 'Marc Benioff',
      role: 'Strategic Advisor',
      company: 'CEO of Salesforce',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
              Leadership Team
            </h1>
            <p className="text-xl text-gray-300 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Meet the experienced leaders, innovators, and visionaries driving Augment AI's mission to democratize artificial intelligence and build the future of AI-powered applications.
            </p>
          </div>
        </div>
      </section>

      {/* Executive Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Executive Team
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Our executive leadership brings decades of experience from leading technology companies
            </p>
          </div>

          <div className="space-y-16">
            {executiveTeam.map((executive, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <img
                    src={executive.image}
                    alt={executive.name}
                    className="w-full max-w-md mx-auto rounded-lg shadow-lg"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <h3 className="text-2xl font-normal text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                    {executive.name}
                  </h3>
                  <p className="text-[#C74634] font-semibold text-lg mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                    {executive.role}
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: 'var(--oraclesans)' }}>
                    {executive.bio}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oracleserif)' }}>
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {executive.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-center text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                          <svg className="w-4 h-4 text-[#C74634] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={executive.linkedin}
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                      style={{ fontFamily: 'var(--oraclesans)' }}
                    >
                      LinkedIn
                    </a>
                    <a
                      href={executive.twitter}
                      className="inline-flex items-center px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-900 transition-colors duration-200"
                      style={{ fontFamily: 'var(--oraclesans)' }}
                    >
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Senior Leadership */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Senior Leadership
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Department leaders driving innovation and excellence across all areas of our business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seniorLeadership.map((leader, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-[#161513] text-center mb-1" style={{ fontFamily: 'var(--oracleserif)' }}>
                  {leader.name}
                </h3>
                <p className="text-[#C74634] font-medium text-sm text-center mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {leader.role}
                </p>
                <p className="text-gray-600 text-xs text-center mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {leader.department}
                </p>
                <p className="text-gray-700 text-sm text-center" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Advisors */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Board of Advisors
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Industry leaders and experts providing strategic guidance and oversight
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advisors.map((advisor, index) => (
              <div key={index} className="text-center">
                <img
                  src={advisor.image}
                  alt={advisor.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-[#161513] mb-1" style={{ fontFamily: 'var(--oracleserif)' }}>
                  {advisor.name}
                </h3>
                <p className="text-[#C74634] font-medium text-sm mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {advisor.role}
                </p>
                <p className="text-gray-700 text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {advisor.company}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Our Leadership Philosophy
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              The principles that guide our leadership approach and decision-making
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C74634] text-white rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl">
                
              </div>
              <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                Vision-Driven
              </h3>
              <p className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                Leading with clear vision and long-term thinking
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C74634] text-white rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl">
                
              </div>
              <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                Collaborative
              </h3>
              <p className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                Fostering teamwork and inclusive decision-making
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C74634] text-white rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl">
                
              </div>
              <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                Innovation-First
              </h3>
              <p className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                Encouraging bold ideas and calculated risks
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C74634] text-white rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl">
                
              </div>
              <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                Global Impact
              </h3>
              <p className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                Thinking globally while acting responsibly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#C74634] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
            Join Our Leadership Journey
          </h2>
          <p className="text-lg text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
            We're always looking for exceptional leaders to join our team and help shape the future of AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              View Leadership Opportunities
            </a>
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              Contact Leadership Team
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
