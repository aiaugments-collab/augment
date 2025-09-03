import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'University Recruiting | Careers at Augment AI',
  description: 'Join Augment AI as a new graduate. Explore internship programs, entry-level opportunities, and university partnerships.',
  keywords: 'university recruiting, internships, new graduate jobs, entry level, campus recruiting, student programs',
};

export default function UniversityRecruitingPage() {
  const programs = [
    {
      title: 'Software Engineering Internship',
      duration: '12 weeks',
      season: 'Summer 2024',
      description: 'Work on real AI products and infrastructure alongside our engineering teams.',
      requirements: ['CS/Engineering major', 'Programming experience', 'Junior/Senior standing'],
      locations: ['San Francisco', 'Remote'],
      applications: 'Open'
    },
    {
      title: 'AI Research Internship',
      duration: '12 weeks',
      season: 'Summer 2024',
      description: 'Conduct cutting-edge research in machine learning and AI safety.',
      requirements: ['PhD/MS in ML/AI', 'Research experience', 'Published papers preferred'],
      locations: ['San Francisco'],
      applications: 'Open'
    },
    {
      title: 'Product Management Internship',
      duration: '12 weeks',
      season: 'Summer 2024',
      description: 'Shape product strategy and work with cross-functional teams.',
      requirements: ['Business/Engineering major', 'Product experience', 'Technical aptitude'],
      locations: ['San Francisco', 'Remote'],
      applications: 'Open'
    },
    {
      title: 'New Graduate - Software Engineer',
      duration: 'Full-time',
      season: '2024 Graduates',
      description: 'Join our engineering team as a new graduate with comprehensive onboarding.',
      requirements: ['CS/Engineering degree', 'Strong programming skills', 'Graduation in 2024'],
      locations: ['San Francisco', 'Remote'],
      applications: 'Open'
    }
  ];

  const universities = [
    {
      name: 'Stanford University',
      programs: ['Internships', 'New Grad', 'Research'],
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=300&h=200&fit=crop'
    },
    {
      name: 'MIT',
      programs: ['Internships', 'New Grad', 'Research'],
      image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=300&h=200&fit=crop'
    },
    {
      name: 'UC Berkeley',
      programs: ['Internships', 'New Grad'],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop'
    },
    {
      name: 'Carnegie Mellon',
      programs: ['Internships', 'Research'],
      image: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=300&h=200&fit=crop'
    },
    {
      name: 'University of Washington',
      programs: ['Internships', 'New Grad'],
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=300&h=200&fit=crop'
    },
    {
      name: 'Georgia Tech',
      programs: ['Internships', 'New Grad'],
      image: 'https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=300&h=200&fit=crop'
    }
  ];

  const testimonials = [
    {
      name: 'Alex Chen',
      role: 'Software Engineering Intern → Full-time Engineer',
      university: 'Stanford University',
      quote: 'My internship at Augment AI was transformative. I worked on real products used by millions of developers and got mentorship from world-class engineers.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces'
    },
    {
      name: 'Sarah Martinez',
      role: 'AI Research Intern → Research Scientist',
      university: 'MIT',
      quote: 'The research opportunities at Augment are incredible. I published my first paper and learned from leading AI researchers in the field.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=faces'
    },
    {
      name: 'David Park',
      role: 'New Graduate Software Engineer',
      university: 'UC Berkeley',
      quote: 'Starting my career at Augment has been amazing. The onboarding program and mentorship helped me grow quickly as an engineer.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces'
    }
  ];

  const timeline = [
    { month: 'September', event: 'Campus recruiting begins', description: 'Visit top universities for info sessions' },
    { month: 'October', event: 'Application deadline', description: 'Submit applications for summer programs' },
    { month: 'November', event: 'Interviews', description: 'Technical and behavioral interviews' },
    { month: 'December', event: 'Offers extended', description: 'Internship and new grad offers sent' },
    { month: 'January', event: 'Offer acceptance', description: 'Deadline for accepting offers' },
    { month: 'June', event: 'Programs begin', description: 'Summer internships and new grad start dates' }
  ];

  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'Industry-leading salaries and benefits for interns and new graduates',
      icon: '💰'
    },
    {
      title: 'Mentorship Program',
      description: 'Paired with senior engineers and researchers for guidance and growth',
      icon: '👥'
    },
    {
      title: 'Real Impact',
      description: 'Work on products and research that affect millions of users worldwide',
      icon: '🚀'
    },
    {
      title: 'Learning & Development',
      description: 'Access to courses, conferences, and continuous learning opportunities',
      icon: '📚'
    },
    {
      title: 'Networking',
      description: 'Connect with top talent and build relationships across the industry',
      icon: '🤝'
    },
    {
      title: 'Career Growth',
      description: 'Clear paths for advancement and full-time conversion opportunities',
      icon: '📈'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-teal-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
              University Recruiting
            </h1>
            <p className="text-xl text-gray-300 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Launch your career in AI with internships and new graduate opportunities at Augment. Join the next generation of AI innovators and help democratize artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#programs"
                className="inline-flex items-center px-8 py-4 bg-white text-green-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                View Programs
              </a>
              <a
                href="#apply"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-900 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              University Programs
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Comprehensive programs designed to launch your career in AI and technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-[#161513]" style={{ fontFamily: 'var(--oracleserif)' }}>
                    {program.title}
                  </h3>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    program.applications === 'Open' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {program.applications}
                  </span>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  <span>📅 {program.duration}</span>
                  <span>🗓️ {program.season}</span>
                  <span>📍 {program.locations.join(', ')}</span>
                </div>

                <p className="text-gray-700 mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {program.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-medium text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                    Requirements:
                  </h4>
                  <ul className="space-y-1">
                    {program.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-200"
                  style={{ fontFamily: 'var(--oraclesans)' }}
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Universities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Partner Universities
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              We actively recruit from top universities and maintain strong partnerships with academic institutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {universities.map((university, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                <img
                  src={university.image}
                  alt={university.name}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                    {university.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {university.programs.map((program, programIndex) => (
                      <span
                        key={programIndex}
                        className="px-2 py-1 bg-[#C74634] text-white text-xs rounded"
                        style={{ fontFamily: 'var(--oraclesans)' }}
                      >
                        {program}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Student Success Stories
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Hear from students and new graduates about their experience at Augment AI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-[#161513]" style={{ fontFamily: 'var(--oraclesans)' }}>
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-[#C74634]" style={{ fontFamily: 'var(--oraclesans)' }}>
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                      {testimonial.university}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm italic" style={{ fontFamily: 'var(--oraclesans)' }}>
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Why Choose Augment AI?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Benefits and opportunities that set our university programs apart
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  {benefit.title}
                </h3>
                <p className="text-gray-700 text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruiting Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Recruiting Timeline
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Important dates and milestones for our university recruiting process
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#C74634] hidden lg:block"></div>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 bg-[#C74634] text-white rounded-full flex items-center justify-center font-bold mr-4 text-sm">
                          {item.month.slice(0, 3)}
                        </div>
                        <h3 className="text-lg font-semibold text-[#161513]" style={{ fontFamily: 'var(--oracleserif)' }}>
                          {item.event}
                        </h3>
                      </div>
                      <p className="text-gray-700 text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                        {item.description}
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

      {/* CTA Section */}
      <section id="apply" className="py-16 bg-[#C74634] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
            Ready to Start Your AI Career?
          </h2>
          <p className="text-lg text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
            Join the next generation of AI innovators. Apply for our internship and new graduate programs today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              Apply for Programs
            </a>
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              Join Talent Network
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
