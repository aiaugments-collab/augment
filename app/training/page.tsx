'use client';
import { Metadata } from 'next';
import { useState } from 'react';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection
} from '../../components/sections';

export default function TrainingPage() {
  const [enrollmentForm, setEnrollmentForm] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    course: '',
    experience: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(false);
      setEnrollmentForm({
        name: '',
        email: '',
        company: '',
        role: '',
        course: '',
        experience: ''
      });
    }, 3000);
  };

  const heroButtons = [
    {
      text: 'Browse Courses',
      href: '#courses',
      variant: 'primary' as const
    },
    {
      text: 'View Certifications',
      href: '#certifications',
      variant: 'secondary' as const
    }
  ];

  const trainingPrograms = [
    {
      id: 'ai-fundamentals',
      title: 'AI Fundamentals Certification',
      description: 'Master the basics of artificial intelligence, machine learning, and AI implementation strategies for business applications.',
      ctaText: 'Start learning',
      ctaLink: '/training/ai-fundamentals/',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'developer-certification',
      title: 'Augment Developer Certification',
      description: 'Comprehensive technical training for developers building AI applications with Augment platform and APIs.',
      ctaText: 'Get certified',
      ctaLink: '/training/developer-certification/',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'business-leader',
      title: 'AI for Business Leaders',
      description: 'Strategic AI training for executives and business leaders focused on AI adoption, ROI, and organizational transformation.',
      ctaText: 'Lead with AI',
      ctaLink: '/training/business-leaders/',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'industry-specialist',
      title: 'Industry Specialist Programs',
      description: 'Specialized training programs for healthcare, finance, manufacturing, and other industry-specific AI applications.',
      ctaText: 'Explore specializations',
      ctaLink: '/training/industry-specialist/',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'data-science',
      title: 'AI Data Science Bootcamp',
      description: 'Intensive hands-on training in data science, machine learning model development, and AI system deployment.',
      ctaText: 'Join bootcamp',
      ctaLink: '/training/data-science-bootcamp/',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'ethics-governance',
      title: 'AI Ethics & Governance',
      description: 'Learn responsible AI development, ethical considerations, bias mitigation, and AI governance frameworks.',
      ctaText: 'Learn ethics',
      ctaLink: '/training/ai-ethics/',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  const learningPaths = [
    {
      id: 'beginner-path',
      title: 'Beginner Learning Path',
      description: 'Start your AI journey with foundational concepts, basic implementations, and hands-on projects.',
      ctaText: 'Start beginner path',
      ctaLink: '/training/paths/beginner/'
    },
    {
      id: 'developer-path',
      title: 'Developer Learning Path',
      description: 'Advanced technical training for developers building production-ready AI applications and systems.',
      ctaText: 'Follow developer path',
      ctaLink: '/training/paths/developer/'
    },
    {
      id: 'architect-path',
      title: 'AI Architect Path',
      description: 'Enterprise-level training for designing and implementing large-scale AI architectures and solutions.',
      ctaText: 'Become an architect',
      ctaLink: '/training/paths/architect/'
    },
    {
      id: 'consultant-path',
      title: 'AI Consultant Path',
      description: 'Business-focused training for consultants helping organizations adopt and implement AI strategies.',
      ctaText: 'Train as consultant',
      ctaLink: '/training/paths/consultant/'
    },
    {
      id: 'researcher-path',
      title: 'AI Researcher Path',
      description: 'Advanced research methodologies, cutting-edge AI techniques, and contribution to AI innovation.',
      ctaText: 'Join research path',
      ctaLink: '/training/paths/researcher/'
    },
    {
      id: 'manager-path',
      title: 'AI Manager Path',
      description: 'Leadership training for managing AI teams, projects, and organizational AI transformation initiatives.',
      ctaText: 'Lead AI teams',
      ctaLink: '/training/paths/manager/'
    }
  ];

  const trainingBenefits = [
    {
      title: 'Industry-Recognized Certifications',
      description: 'Earn certifications that are recognized by leading organizations and validate your AI expertise.',
      href: '/training/certifications/',
      buttonText: 'View certifications',
      icon: '🏆'
    },
    {
      title: 'Hands-On Learning Experience',
      description: 'Learn through practical projects, real-world case studies, and interactive coding exercises.',
      href: '/training/hands-on/',
      buttonText: 'Try hands-on labs',
      icon: '💻'
    },
    {
      title: 'Expert Instructor Network',
      description: 'Learn from industry experts, AI researchers, and practitioners with real-world experience.',
      href: '/training/instructors/',
      buttonText: 'Meet instructors',
      icon: '👨‍🏫'
    },
    {
      title: 'Flexible Learning Options',
      description: 'Choose from self-paced online courses, live virtual sessions, or in-person workshops.',
      href: '/training/formats/',
      buttonText: 'Explore formats',
      icon: '📚'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        <h1 className="sr-only">Training & Certification | Augment AI</h1>

        <SectionHero
          title="Training & Certification"
          subtitle="Master AI with expert-led training programs"
          description="Advance your AI skills with comprehensive training programs and industry-recognized certifications. From fundamentals to advanced specializations, learn from experts and gain practical experience with real-world projects."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Professional training session with AI experts and students learning together"
        />

        <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto py-4">
              <a href="#courses" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Training Programs
              </a>
              <a href="#paths" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Learning Paths
              </a>
              <a href="#benefits" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Benefits
              </a>
              <a href="#enroll" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Enroll Now
              </a>
            </div>
          </div>
        </nav>

        <section id="courses">
          <FeaturedCards
            title="Comprehensive AI training programs"
            description="Choose from a wide range of training programs designed for different skill levels and career goals"
            cards={trainingPrograms}
            columns={3}
            backgroundColor="bg-white"
          />
        </section>

        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Training Program Success
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Proven results from our comprehensive AI training and certification programs
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  25K+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Students Trained
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  95%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Completion Rate
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  4.8/5
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Average Rating
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  85%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Career Advancement
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="paths">
          <InfoColumns
            title="Structured learning paths for every career goal"
            description="Follow curated learning paths designed to take you from beginner to expert in your chosen AI specialization"
            columns={learningPaths}
            columnsCount={3}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section id="benefits">
          <CTASection
            title="Why choose Augment AI training?"
            description="Discover the advantages of learning with industry-leading AI training programs"
            actions={trainingBenefits}
            columns={2}
            backgroundColor="bg-white"
          />
        </section>

        <section id="enroll" className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Enroll in AI Training
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Start your AI learning journey today. Fill out the form below and we'll help you choose the right program for your goals.
              </p>
            </div>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <div className="text-green-600 text-4xl mb-4">✓</div>
                <h3 className="text-xl font-semibold text-green-800 mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Enrollment Request Submitted!
                </h3>
                <p className="text-green-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Thank you for your interest in our AI training programs. Our team will contact you within 24 hours to discuss your learning goals and recommend the best program for you.
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-8">
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
                        value={enrollmentForm.name}
                        onChange={(e) => setEnrollmentForm({...enrollmentForm, name: e.target.value})}
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
                        value={enrollmentForm.email}
                        onChange={(e) => setEnrollmentForm({...enrollmentForm, email: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={enrollmentForm.company}
                        onChange={(e) => setEnrollmentForm({...enrollmentForm, company: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                        placeholder="Enter your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Current Role *
                      </label>
                      <select
                        id="role"
                        required
                        value={enrollmentForm.role}
                        onChange={(e) => setEnrollmentForm({...enrollmentForm, role: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                      >
                        <option value="">Select your role</option>
                        <option value="developer">Developer/Engineer</option>
                        <option value="data-scientist">Data Scientist</option>
                        <option value="business-analyst">Business Analyst</option>
                        <option value="manager">Manager/Director</option>
                        <option value="executive">Executive/C-Level</option>
                        <option value="consultant">Consultant</option>
                        <option value="researcher">Researcher</option>
                        <option value="student">Student</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Interested Training Program *
                    </label>
                    <select
                      id="course"
                      required
                      value={enrollmentForm.course}
                      onChange={(e) => setEnrollmentForm({...enrollmentForm, course: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                    >
                      <option value="">Select a training program</option>
                      <option value="ai-fundamentals">AI Fundamentals Certification</option>
                      <option value="developer-certification">Augment Developer Certification</option>
                      <option value="business-leaders">AI for Business Leaders</option>
                      <option value="industry-specialist">Industry Specialist Programs</option>
                      <option value="data-science-bootcamp">AI Data Science Bootcamp</option>
                      <option value="ai-ethics">AI Ethics & Governance</option>
                      <option value="custom">Custom Training Program</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      AI Experience Level *
                    </label>
                    <select
                      id="experience"
                      required
                      value={enrollmentForm.experience}
                      onChange={(e) => setEnrollmentForm({...enrollmentForm, experience: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                    >
                      <option value="">Select your experience level</option>
                      <option value="beginner">Beginner (No prior AI experience)</option>
                      <option value="intermediate">Intermediate (Some AI knowledge)</option>
                      <option value="advanced">Advanced (Extensive AI experience)</option>
                      <option value="expert">Expert (AI professional/researcher)</option>
                    </select>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="inline-flex items-center px-8 py-3 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-200"
                      style={{ fontFamily: 'var(--oraclesans)' }}
                    >
                      Submit Enrollment Request
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
              Ready to advance your AI career?
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Join thousands of professionals who have advanced their careers with Augment AI training and certification programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/training/catalog/"
                className="inline-flex items-center px-6 py-3 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Browse Course Catalog
              </a>
              <a
                href="/training/corporate/"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Corporate Training
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
