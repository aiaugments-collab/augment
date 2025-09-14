'use client';
import { Metadata } from 'next';
import { useState } from 'react';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection
} from '../../../components/sections';

export default function UniversityPage() {
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    institution: '',
    program: '',
    level: '',
    interests: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setApplicationForm({
        name: '',
        email: '',
        institution: '',
        program: '',
        level: '',
        interests: ''
      });
    }, 3000);
  };

  const heroButtons = [
    {
      text: 'Explore Programs',
      href: '#programs',
      variant: 'primary' as const
    },
    {
      text: 'Apply Now',
      href: '#apply',
      variant: 'secondary' as const
    }
  ];

  const universityPrograms = [
    {
      id: 'ai-degree',
      title: 'Master of AI & Machine Learning',
      description: 'Comprehensive graduate program covering advanced AI concepts, machine learning algorithms, and real-world applications.',
      ctaText: 'Learn more',
      ctaLink: '/university/masters-ai/',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'data-science-program',
      title: 'Data Science & Analytics Program',
      description: 'Intensive program focusing on data analysis, statistical modeling, and AI-driven insights for business applications.',
      ctaText: 'Explore program',
      ctaLink: '/university/data-science/',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'ai-ethics',
      title: 'AI Ethics & Governance Certificate',
      description: 'Specialized program addressing ethical AI development, bias mitigation, and responsible AI governance frameworks.',
      ctaText: 'Study ethics',
      ctaLink: '/university/ai-ethics/',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'executive-program',
      title: 'Executive AI Leadership Program',
      description: 'Strategic program for executives and senior leaders on AI transformation, digital strategy, and organizational change.',
      ctaText: 'Lead transformation',
      ctaLink: '/university/executive-ai/',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'research-fellowship',
      title: 'AI Research Fellowship',
      description: 'Advanced research program for PhD candidates and researchers working on cutting-edge AI innovations and breakthroughs.',
      ctaText: 'Join research',
      ctaLink: '/university/research-fellowship/',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'industry-collaboration',
      title: 'Industry Collaboration Program',
      description: 'Partnership program connecting students with industry projects, internships, and real-world AI implementation experience.',
      ctaText: 'Get experience',
      ctaLink: '/university/industry-collaboration/',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  const academicResources = [
    {
      id: 'digital-library',
      title: 'Digital AI Library',
      description: 'Comprehensive collection of AI research papers, case studies, and academic resources from leading institutions.',
      ctaText: 'Access library',
      ctaLink: '/university/library/'
    },
    {
      id: 'virtual-labs',
      title: 'Virtual AI Labs',
      description: 'State-of-the-art virtual laboratories with access to advanced AI tools, datasets, and computing resources.',
      ctaText: 'Enter labs',
      ctaLink: '/university/virtual-labs/'
    },
    {
      id: 'faculty-network',
      title: 'Expert Faculty Network',
      description: 'Learn from world-renowned AI researchers, industry experts, and thought leaders in artificial intelligence.',
      ctaText: 'Meet faculty',
      ctaLink: '/university/faculty/'
    },
    {
      id: 'student-community',
      title: 'Global Student Community',
      description: 'Connect with AI students worldwide, collaborate on projects, and participate in academic competitions.',
      ctaText: 'Join community',
      ctaLink: '/university/student-community/'
    },
    {
      id: 'career-services',
      title: 'AI Career Services',
      description: 'Dedicated career support including job placement, internship opportunities, and industry networking events.',
      ctaText: 'Career support',
      ctaLink: '/university/career-services/'
    },
    {
      id: 'research-publications',
      title: 'Research Publications',
      description: 'Publish your research in our peer-reviewed journals and contribute to the advancement of AI knowledge.',
      ctaText: 'Publish research',
      ctaLink: '/university/publications/'
    }
  ];

  const universityBenefits = [
    {
      title: 'World-Class Education',
      description: 'Learn from leading AI researchers and industry experts with cutting-edge curriculum and hands-on experience.',
      href: '/university/education/',
      buttonText: 'Learn more',
      icon: ''
    },
    {
      title: 'Industry Partnerships',
      description: 'Access exclusive internships and job opportunities through our partnerships with leading technology companies.',
      href: '/university/partnerships/',
      buttonText: 'View partners',
      icon: ''
    },
    {
      title: 'Research Opportunities',
      description: 'Participate in groundbreaking AI research projects and contribute to the future of artificial intelligence.',
      href: '/university/research/',
      buttonText: 'Explore research',
      icon: ''
    },
    {
      title: 'Global Recognition',
      description: 'Earn degrees and certificates recognized worldwide by leading academic institutions and employers.',
      href: '/university/accreditation/',
      buttonText: 'View accreditation',
      icon: ''
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        <h1 className="sr-only">Augment University | AI Education & Research</h1>

        <SectionHero
          title="Augment University"
          subtitle="Advance AI education and research"
          description="Join the world's leading AI university offering comprehensive degree programs, research opportunities, and academic excellence. Learn from renowned faculty, collaborate with global students, and contribute to the future of artificial intelligence."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Modern university campus with students and faculty engaged in AI research and learning"
        />

        <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto py-4">
              <a href="#programs" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Academic Programs
              </a>
              <a href="#resources" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Resources
              </a>
              <a href="#benefits" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Why Choose Us
              </a>
              <a href="#apply" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Apply Now
              </a>
            </div>
          </div>
        </nav>

        <section id="programs">
          <FeaturedCards
            title="World-class AI academic programs"
            description="Choose from comprehensive degree programs and specialized certificates designed for the future of AI"
            cards={universityPrograms}
            columns={3}
            backgroundColor="bg-white"
          />
        </section>

        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Augment University Excellence
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Leading the future of AI education with world-class programs and research
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  15K+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Students Enrolled
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  200+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Expert Faculty
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  95%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Job Placement Rate
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  50+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Countries Represented
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="resources">
          <InfoColumns
            title="Academic resources and support"
            description="Access world-class resources, facilities, and support systems designed for AI education excellence"
            columns={academicResources}
            columnsCount={3}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section id="benefits">
          <CTASection
            title="Why choose Augment University?"
            description="Discover the advantages of pursuing your AI education with us"
            actions={universityBenefits}
            columns={2}
            backgroundColor="bg-white"
          />
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Student Success Stories
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Hear from our graduates who are making impact in the AI industry
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=faces" 
                    alt="Sarah Chen" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-[#161513]" style={{ fontFamily: 'var(--oraclesans)' }}>Sarah Chen</h4>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>AI Research Scientist, Google</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  "The research fellowship program at Augment University gave me the foundation to pursue groundbreaking AI research. The faculty mentorship was exceptional."
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=faces" 
                    alt="Michael Rodriguez" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-[#161513]" style={{ fontFamily: 'var(--oraclesans)' }}>Michael Rodriguez</h4>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>AI Product Manager, Microsoft</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  "The Executive AI Leadership Program transformed my understanding of AI strategy. I now lead AI initiatives across our entire product portfolio."
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=faces" 
                    alt="Jennifer Park" 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-[#161513]" style={{ fontFamily: 'var(--oraclesans)' }}>Jennifer Park</h4>
                    <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>Data Science Director, Netflix</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  "The Data Science program provided hands-on experience with real industry problems. The career services team helped me land my dream job."
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="apply" className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Apply to Augment University
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Start your journey in AI education. Submit your application and join thousands of students advancing the future of artificial intelligence.
              </p>
            </div>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <div className="text-green-600 text-4xl mb-4"></div>
                <h3 className="text-xl font-semibold text-green-800 mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Application Submitted Successfully!
                </h3>
                <p className="text-green-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Thank you for your application to Augment University. Our admissions team will review your application and contact you within 5-7 business days with next steps.
                </p>
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg p-8">
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
                        value={applicationForm.name}
                        onChange={(e) => setApplicationForm({...applicationForm, name: e.target.value})}
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
                        value={applicationForm.email}
                        onChange={(e) => setApplicationForm({...applicationForm, email: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Current Institution/Organization
                    </label>
                    <input
                      type="text"
                      id="institution"
                      value={applicationForm.institution}
                      onChange={(e) => setApplicationForm({...applicationForm, institution: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                      placeholder="Enter your current institution or organization"
                    />
                  </div>

                  <div>
                    <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Program of Interest *
                    </label>
                    <select
                      id="program"
                      required
                      value={applicationForm.program}
                      onChange={(e) => setApplicationForm({...applicationForm, program: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                    >
                      <option value="">Select a program</option>
                      <option value="masters-ai">Master of AI & Machine Learning</option>
                      <option value="data-science">Data Science & Analytics Program</option>
                      <option value="ai-ethics">AI Ethics & Governance Certificate</option>
                      <option value="executive-ai">Executive AI Leadership Program</option>
                      <option value="research-fellowship">AI Research Fellowship</option>
                      <option value="industry-collaboration">Industry Collaboration Program</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="level" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Educational Level *
                    </label>
                    <select
                      id="level"
                      required
                      value={applicationForm.level}
                      onChange={(e) => setApplicationForm({...applicationForm, level: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                    >
                      <option value="">Select your educational level</option>
                      <option value="bachelors">Bachelor's Degree</option>
                      <option value="masters">Master's Degree</option>
                      <option value="phd">PhD/Doctorate</option>
                      <option value="professional">Professional Experience</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Research Interests & Goals
                    </label>
                    <textarea
                      id="interests"
                      rows={4}
                      value={applicationForm.interests}
                      onChange={(e) => setApplicationForm({...applicationForm, interests: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                      placeholder="Describe your research interests and career goals in AI..."
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="inline-flex items-center px-8 py-3 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-200"
                      style={{ fontFamily: 'var(--oraclesans)' }}
                    >
                      Submit Application
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
              Shape the future of AI
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Join Augment University and become part of a global community advancing artificial intelligence through education, research, and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/university/programs/"
                className="inline-flex items-center px-6 py-3 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Explore All Programs
              </a>
              <a
                href="/university/virtual-tour/"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Take Virtual Tour
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
