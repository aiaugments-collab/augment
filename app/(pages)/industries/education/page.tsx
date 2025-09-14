import { Metadata } from 'next';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection,
  Testimonials
} from '../../../../components/sections';

export const metadata: Metadata = {
  title: 'Education AI Solutions | Augment',
  description: 'Transform educational institutions with AI agents and intelligent automation. Personalize learning, automate administration, enhance student success, and optimize institutional operations.',
  keywords: 'education AI, learning personalization, student success AI, educational automation, institutional AI, academic analytics, smart campus solutions',
};

export default function EducationPage() {
  const heroButtons = [
    {
      text: 'Schedule Demo',
      href: '/demo/education/',
      variant: 'primary' as const
    },
    {
      text: 'View Case Studies',
      href: '#customers',
      variant: 'secondary' as const
    }
  ];

  const educationSolutions = [
    {
      id: 'personalized-learning',
      title: 'Personalized learning and adaptive instruction',
      description: 'Customize learning experiences with AI-powered content recommendations, adaptive assessments, and personalized learning paths for every student.',
      ctaText: 'Explore personalized learning',
      ctaLink: '/solutions/personalized-learning/',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'student-success',
      title: 'Student success and retention analytics',
      description: 'Identify at-risk students early with predictive analytics, automated interventions, and comprehensive student success tracking.',
      ctaText: 'Discover student analytics',
      ctaLink: '/solutions/student-success-ai/',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'administrative-automation',
      title: 'Administrative process automation',
      description: 'Streamline admissions, enrollment, scheduling, and student services with intelligent automation and workflow optimization.',
      ctaText: 'Learn about admin automation',
      ctaLink: '/solutions/education-admin-ai/',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'intelligent-tutoring',
      title: 'AI-powered tutoring and support systems',
      description: 'Provide 24/7 student support with intelligent tutoring systems, automated Q&A, and personalized academic assistance.',
      ctaText: 'Explore AI tutoring',
      ctaLink: '/solutions/ai-tutoring/',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'campus-operations',
      title: 'Smart campus operations and management',
      description: 'Optimize campus resources with AI-driven facility management, energy optimization, and predictive maintenance systems.',
      ctaText: 'Discover smart campus',
      ctaLink: '/solutions/smart-campus/',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'research-acceleration',
      title: 'Academic research acceleration',
      description: 'Accelerate research with AI-powered literature analysis, data processing, and collaborative research platforms.',
      ctaText: 'Learn about research AI',
      ctaLink: '/solutions/academic-research-ai/',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  const educationSectors = [
    {
      id: 'higher-education',
      title: 'Higher Education',
      description: 'Comprehensive AI solutions for universities and colleges including student analytics, research acceleration, and campus optimization.',
      ctaText: 'Explore higher ed solutions',
      ctaLink: '/industries/education/higher-education/'
    },
    {
      id: 'k12-schools',
      title: 'K-12 Schools',
      description: 'Personalized learning platforms, student assessment tools, and administrative automation for primary and secondary education.',
      ctaText: 'Discover K-12 AI',
      ctaLink: '/industries/education/k12/'
    },
    {
      id: 'online-learning',
      title: 'Online Learning Platforms',
      description: 'AI-powered course recommendations, adaptive learning systems, and intelligent content delivery for e-learning platforms.',
      ctaText: 'Learn about online education',
      ctaLink: '/industries/education/online-learning/'
    },
    {
      id: 'corporate-training',
      title: 'Corporate Training',
      description: 'Intelligent training programs, skill assessment, and personalized professional development for enterprise learning.',
      ctaText: 'Explore corporate training',
      ctaLink: '/industries/education/corporate-training/'
    },
    {
      id: 'vocational-schools',
      title: 'Vocational & Technical Schools',
      description: 'Specialized AI solutions for trade schools, technical institutes, and vocational training programs.',
      ctaText: 'Discover vocational AI',
      ctaLink: '/industries/education/vocational/'
    },
    {
      id: 'research-institutions',
      title: 'Research Institutions',
      description: 'Advanced AI tools for academic research, data analysis, and collaborative research platforms.',
      ctaText: 'Learn about research AI',
      ctaLink: '/industries/education/research/'
    }
  ];

  const keyBenefits = [
    {
      title: 'Improve Student Outcomes by 40%',
      description: 'Enhance learning effectiveness with personalized instruction, adaptive assessments, and intelligent tutoring systems.',
      href: '/resources/education-outcomes-study/',
      buttonText: 'View study',
      icon: ''
    },
    {
      title: 'Increase Retention Rates by 25%',
      description: 'Identify at-risk students early and implement targeted interventions to improve retention and graduation rates.',
      href: '/solutions/student-success-ai/',
      buttonText: 'Learn more',
      icon: ''
    },
    {
      title: 'Reduce Administrative Time by 50%',
      description: 'Automate routine administrative tasks, allowing educators to focus more time on teaching and student engagement.',
      href: '/solutions/education-admin-ai/',
      buttonText: 'Explore automation',
      icon: '⏰'
    },
    {
      title: 'Lower Operational Costs by 30%',
      description: 'Optimize resource allocation, energy usage, and facility management through intelligent campus operations.',
      href: '/resources/education-roi-calculator/',
      buttonText: 'Calculate savings',
      icon: ''
    }
  ];

  const customerTestimonials = [
    {
      id: 'state-university',
      quote: 'Augment\'s student success analytics helped us identify at-risk students early and improve our retention rate by 28%. The impact on student outcomes has been remarkable.',
      author: 'Dr. Jennifer Martinez',
      title: 'Vice Provost for Student Success',
      company: 'State University System',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=faces'
    },
    {
      id: 'community-college',
      quote: 'The personalized learning platform has transformed how our students engage with course material. We\'ve seen a 35% improvement in course completion rates.',
      author: 'Michael Thompson',
      title: 'Dean of Academic Affairs',
      company: 'Metro Community College',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces'
    },
    {
      id: 'private-school',
      quote: 'Administrative automation has streamlined our operations significantly. We\'ve reduced processing time for admissions and enrollment by 60%.',
      author: 'Sarah Johnson',
      title: 'Director of Operations',
      company: 'Riverside Academy',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        <h1 className="sr-only">Education AI Solutions | Augment</h1>

        <SectionHero
          title="Education"
          subtitle="Enhance learning with intelligent automation"
          description="Transform educational institutions with AI-powered personalized learning, student success analytics, administrative automation, and smart campus operations. Empower educators and students with intelligent technology designed for modern education."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Modern educational environment with students using AI-powered learning technology"
        />

        <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto py-4">
              <a href="#solutions" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Solutions
              </a>
              <a href="#sectors" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Education Sectors
              </a>
              <a href="#benefits" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Key Benefits
              </a>
              <a href="#customers" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Customers
              </a>
              <a href="#getstarted" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Get Started
              </a>
            </div>
          </div>
        </nav>

        <section id="solutions">
          <FeaturedCards
            title="Deliver exceptional educational experiences with AI"
            description="Comprehensive AI solutions designed to enhance learning outcomes and streamline educational operations"
            cards={educationSolutions}
            columns={3}
            backgroundColor="bg-white"
          />
        </section>

        <section id="sectors">
          <InfoColumns
            title="Find solutions by education sector"
            description="Specialized AI solutions tailored for different educational institutions and learning environments"
            columns={educationSectors}
            columnsCount={3}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section id="benefits">
          <CTASection
            title="Measurable impact on educational outcomes"
            description="See the quantifiable benefits of AI automation on student success and institutional efficiency"
            actions={keyBenefits}
            columns={2}
            backgroundColor="bg-white"
          />
        </section>

        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Education Industry Impact
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Transforming educational institutions worldwide with intelligent learning technologies
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  5M+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Students Served
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  40%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Improvement in Outcomes
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  25%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Increase in Retention
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  2000+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Educational Institutions
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="customers">
          <Testimonials
            title="See how educational institutions transform with Augment"
            description="Real results from schools, universities, and training organizations leveraging AI for better outcomes"
            testimonials={customerTestimonials}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Privacy & Security for Education
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Our AI solutions are designed with student privacy and educational compliance at their core
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-bold text-white">FERPA</span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  FERPA Compliance
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Full compliance with student privacy regulations
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-bold text-white">COPPA</span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  COPPA Protection
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Child privacy protection for K-12 environments
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-bold text-white">GDPR</span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  GDPR Compliance
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  European data protection standards
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-bold text-white">SOC2</span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  SOC 2 Type II
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Certified security and availability controls
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="getstarted" className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Ready to transform your educational institution?
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Connect with our education AI experts to discover how intelligent automation can improve student outcomes, streamline operations, and enhance the learning experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/demo/education/"
                className="inline-flex items-center px-6 py-3 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Schedule Education Demo
              </a>
              <a
                href="/resources/education-roi-calculator/"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Calculate Education ROI
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
