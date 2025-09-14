import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Diversity & Inclusion | Augment AI',
  description: 'Learn about Augment AI\'s commitment to diversity, equity, and inclusion in the workplace and AI development.',
  keywords: 'diversity, inclusion, equity, workplace diversity, inclusive AI, equal opportunity, belonging',
};

export default function DiversityInclusionPage() {
  const diversityStats = [
    { metric: 'Women in Tech Roles', value: '45%', target: '50% by 2025' },
    { metric: 'Underrepresented Groups', value: '38%', target: '40% by 2025' },
    { metric: 'Leadership Diversity', value: '42%', target: '45% by 2025' },
    { metric: 'Pay Equity', value: '100%', target: 'Maintained annually' }
  ];

  const initiatives = [
    {
      title: 'Inclusive Hiring Practices',
      description: 'Structured processes to eliminate bias and ensure fair evaluation of all candidates',
      icon: '',
      programs: [
        'Blind resume screening',
        'Diverse interview panels',
        'Inclusive job descriptions',
        'Partnership with diverse talent networks'
      ]
    },
    {
      title: 'Employee Resource Groups',
      description: 'Employee-led communities fostering belonging and professional development',
      icon: '',
      programs: [
        'Women in AI Network',
        'Black & Latinx Professionals',
        'LGBTQ+ Alliance',
        'Veterans Network'
      ]
    },
    {
      title: 'Inclusive AI Development',
      description: 'Building AI systems that work fairly for all demographics and communities',
      icon: '️',
      programs: [
        'Bias testing frameworks',
        'Diverse training datasets',
        'Fairness metrics monitoring',
        'Inclusive design principles'
      ]
    },
    {
      title: 'Education & Outreach',
      description: 'Programs to increase diversity in AI and technology fields',
      icon: '',
      programs: [
        'Coding bootcamp scholarships',
        'University partnerships',
        'K-12 STEM programs',
        'Mentorship initiatives'
      ]
    }
  ];

  const leadership = [
    {
      name: 'Dr. Maya Patel',
      role: 'Chief Diversity Officer',
      bio: 'Leading our diversity, equity, and inclusion strategy with 15+ years of experience in organizational development.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=faces'
    },
    {
      name: 'Jennifer Park',
      role: 'VP of People & Culture',
      bio: 'Building inclusive culture and talent development programs that support all employees.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces'
    },
    {
      name: 'Marcus Johnson',
      role: 'Director of Inclusive AI',
      bio: 'Ensuring our AI systems are developed and deployed with fairness and inclusion at the forefront.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces'
    }
  ];

  const partnerships = [
    {
      name: 'Code2040',
      description: 'Activating, connecting, and mobilizing the largest racial equity community in tech',
      focus: 'Racial Equity in Tech'
    },
    {
      name: 'Girls Who Code',
      description: 'Closing the gender gap in technology and changing the image of what a programmer looks like',
      focus: 'Women in Technology'
    },
    {
      name: 'Out in Tech',
      description: 'Uniting the LGBTQ+ tech community and creating opportunities for career and personal growth',
      focus: 'LGBTQ+ Inclusion'
    },
    {
      name: 'VetsInTech',
      description: 'Providing veterans with the opportunity to find meaningful careers in the tech industry',
      focus: 'Veteran Support'
    },
    {
      name: 'National Society of Black Engineers',
      description: 'Increasing the number of culturally responsible Black engineers',
      focus: 'Black Engineers'
    },
    {
      name: 'Society of Hispanic Professional Engineers',
      description: 'Empowering the Hispanic community to realize their fullest potential',
      focus: 'Hispanic Professionals'
    }
  ];

  const programs = [
    {
      title: 'Augment Scholars Program',
      description: 'Full scholarships and internships for underrepresented students in AI and computer science',
      impact: '$2M+ awarded to 200+ students',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop'
    },
    {
      title: 'AI for All Initiative',
      description: 'Free AI education and training programs for underserved communities',
      impact: '50K+ students trained globally',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop'
    },
    {
      title: 'Inclusive Innovation Labs',
      description: 'Research labs focused on developing AI solutions for underrepresented communities',
      impact: '15 research projects launched',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop'
    },
    {
      title: 'Mentorship Network',
      description: 'Connecting diverse talent with senior leaders for career development and guidance',
      impact: '500+ mentoring relationships',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop'
    }
  ];

  const awards = [
    {
      title: 'Best Places to Work for LGBTQ+ Equality',
      organization: 'Human Rights Campaign',
      year: '2023',
      score: '100/100'
    },
    {
      title: 'Top Company for Women Technologists',
      organization: 'AnitaB.org',
      year: '2023',
      score: 'Gold Level'
    },
    {
      title: 'Best Companies for Diversity',
      organization: 'Forbes',
      year: '2023',
      score: 'Top 50'
    },
    {
      title: 'Corporate Equality Index',
      organization: 'Human Rights Campaign',
      year: '2023',
      score: '100/100'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-pink-800 to-red-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
              Diversity & Inclusion
            </h1>
            <p className="text-xl text-gray-300 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Building a diverse, equitable, and inclusive workplace where everyone can thrive. We believe that diverse perspectives drive innovation and create better AI for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#initiatives"
                className="inline-flex items-center px-8 py-4 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Our Initiatives
              </a>
              <a
                href="#careers"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Join Our Team
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Diversity Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Our Progress & Goals
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Transparent reporting on our diversity metrics and ambitious goals for the future
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {diversityStats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  {stat.metric}
                </div>
                <div className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Goal: {stat.target}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section id="initiatives" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Key Initiatives
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Comprehensive programs driving diversity, equity, and inclusion across all aspects of our business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg border border-gray-200">
                <div className="text-4xl mb-4">{initiative.icon}</div>
                <h3 className="text-xl font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oracleserif)' }}>
                  {initiative.title}
                </h3>
                <p className="text-gray-700 mb-6" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {initiative.description}
                </p>
                <div>
                  <h4 className="font-medium text-[#161513] mb-3" style={{ fontFamily: 'var(--oracleserif)' }}>
                    Programs:
                  </h4>
                  <ul className="space-y-2">
                    {initiative.programs.map((program, programIndex) => (
                      <li key={programIndex} className="flex items-center text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                        <svg className="w-4 h-4 text-[#C74634] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {program}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Diversity Leadership
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Meet the leaders driving our diversity, equity, and inclusion initiatives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* Programs & Impact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Programs & Impact
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Flagship programs creating meaningful change and measurable impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oracleserif)' }}>
                    {program.title}
                  </h3>
                  <p className="text-gray-700 mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                    {program.description}
                  </p>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-800 font-medium" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Impact: {program.impact}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Community Partnerships
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Collaborating with leading organizations to advance diversity and inclusion in tech
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerships.map((partnership, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  {partnership.name}
                </h3>
                <p className="text-gray-700 text-sm mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {partnership.description}
                </p>
                <span className="px-3 py-1 bg-[#C74634] text-white text-xs font-medium rounded-full">
                  {partnership.focus}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Awards & Recognition
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              External recognition for our commitment to diversity, equity, and inclusion
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#C74634] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  {award.title}
                </h3>
                <p className="text-sm text-gray-600 mb-1" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {award.organization}
                </p>
                <p className="text-sm text-gray-600 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {award.year}
                </p>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                  {award.score}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Resource Groups */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Employee Resource Groups
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Employee-led communities fostering belonging, professional development, and cultural awareness
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C74634] text-white rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl">
                ‍
              </div>
              <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                Women in AI Network
              </h3>
              <p className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                Supporting women in AI and technology careers
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C74634] text-white rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl">
                
              </div>
              <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                Black & Latinx Professionals
              </h3>
              <p className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                Advancing Black and Latinx representation in tech
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C74634] text-white rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl">
                ️‍
              </div>
              <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                LGBTQ+ Alliance
              </h3>
              <p className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                Creating inclusive spaces for LGBTQ+ employees
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C74634] text-white rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl">
                ️
              </div>
              <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                Veterans Network
              </h3>
              <p className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                Supporting military veterans in tech careers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="careers" className="py-16 bg-[#C74634] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
            Join Our Diverse Team
          </h2>
          <p className="text-lg text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
            Be part of a company that values diversity, promotes inclusion, and creates opportunities for everyone to thrive.
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
              Learn About Our Culture
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
