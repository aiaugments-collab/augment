import { Metadata } from 'next';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection,
  Testimonials
} from '../../../../components/sections';

export const metadata: Metadata = {
  title: 'Healthcare AI Solutions | Augment',
  description: 'Transform healthcare operations with AI agents and cloud applications. Streamline medical records, automate administrative tasks, support clinical decisions, and improve patient outcomes.',
  keywords: 'healthcare AI, medical automation, clinical decision support, patient care AI, healthcare analytics, medical records automation, hospital AI solutions',
};

export default function HealthcarePage() {
  // Hero Section Data
  const heroButtons = [
    {
      text: 'Schedule Demo',
      href: '/demo/healthcare/',
      variant: 'primary' as const
    },
    {
      text: 'View Case Studies',
      href: '#customers',
      variant: 'secondary' as const
    }
  ];

  // Healthcare Solutions
  const healthcareSolutions = [
    {
      id: 'clinical-decision-support',
      title: 'AI-powered clinical decision support systems',
      description: 'Enhance diagnostic accuracy and treatment planning with intelligent clinical decision support, drug interaction alerts, and evidence-based recommendations.',
      ctaText: 'Explore clinical AI',
      ctaLink: '/solutions/clinical-decision-support/',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'medical-records',
      title: 'Intelligent medical records management',
      description: 'Streamline electronic health records with automated data entry, intelligent coding, and seamless integration across healthcare systems.',
      ctaText: 'Discover EHR automation',
      ctaLink: '/solutions/medical-records-ai/',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'patient-monitoring',
      title: 'Advanced patient monitoring and alerts',
      description: 'Monitor patient vitals in real-time with predictive analytics, early warning systems, and automated alert generation for critical conditions.',
      ctaText: 'Learn about monitoring AI',
      ctaLink: '/solutions/patient-monitoring/',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'administrative-automation',
      title: 'Healthcare administrative automation',
      description: 'Reduce administrative burden with automated appointment scheduling, insurance verification, billing processes, and compliance reporting.',
      ctaText: 'Explore admin automation',
      ctaLink: '/solutions/healthcare-admin/',
      image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'medical-imaging',
      title: 'AI-enhanced medical imaging analysis',
      description: 'Accelerate radiology workflows with AI-powered image analysis, automated reporting, and enhanced diagnostic accuracy for medical imaging.',
      ctaText: 'Discover imaging AI',
      ctaLink: '/solutions/medical-imaging-ai/',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'drug-discovery',
      title: 'Accelerated drug discovery and development',
      description: 'Speed up pharmaceutical research with AI-driven compound analysis, clinical trial optimization, and predictive drug interaction modeling.',
      ctaText: 'Explore pharma AI',
      ctaLink: '/solutions/drug-discovery-ai/',
      image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  // Healthcare Sectors
  const healthcareSectors = [
    {
      id: 'hospitals',
      title: 'Hospitals & Health Systems',
      description: 'Comprehensive AI solutions for large healthcare organizations, including patient flow optimization, resource management, and clinical workflow automation.',
      ctaText: 'Explore hospital solutions',
      ctaLink: '/industries/healthcare/hospitals/'
    },
    {
      id: 'clinics',
      title: 'Clinics & Practices',
      description: 'Streamline small to medium healthcare practices with automated scheduling, patient management, and clinical documentation systems.',
      ctaText: 'Discover clinic AI',
      ctaLink: '/industries/healthcare/clinics/'
    },
    {
      id: 'pharmaceuticals',
      title: 'Pharmaceutical Companies',
      description: 'Accelerate drug development with AI-powered research, clinical trial management, and regulatory compliance automation.',
      ctaText: 'Learn about pharma AI',
      ctaLink: '/industries/healthcare/pharmaceuticals/'
    },
    {
      id: 'medical-devices',
      title: 'Medical Device Companies',
      description: 'Enhance medical devices with embedded AI capabilities, predictive maintenance, and intelligent data analytics.',
      ctaText: 'Explore device AI',
      ctaLink: '/industries/healthcare/medical-devices/'
    },
    {
      id: 'telehealth',
      title: 'Telehealth & Digital Health',
      description: 'Power virtual care platforms with AI-driven triage, remote monitoring, and intelligent patient engagement systems.',
      ctaText: 'Discover telehealth AI',
      ctaLink: '/industries/healthcare/telehealth/'
    },
    {
      id: 'research',
      title: 'Medical Research Institutions',
      description: 'Accelerate medical research with AI-powered data analysis, clinical trial management, and research collaboration platforms.',
      ctaText: 'Learn about research AI',
      ctaLink: '/industries/healthcare/research/'
    }
  ];

  // Key Benefits
  const keyBenefits = [
    {
      title: 'Improve Patient Outcomes by 35%',
      description: 'Enhance diagnostic accuracy and treatment effectiveness with AI-powered clinical decision support and predictive analytics.',
      href: '/resources/healthcare-outcomes-study/',
      buttonText: 'View study',
      icon: '❤️'
    },
    {
      title: 'Reduce Administrative Time by 60%',
      description: 'Automate routine administrative tasks, documentation, and compliance processes to focus more time on patient care.',
      href: '/solutions/healthcare-admin/',
      buttonText: 'Learn more',
      icon: '⏰'
    },
    {
      title: 'Increase Diagnostic Accuracy by 25%',
      description: 'Support clinical decisions with AI-powered analysis, evidence-based recommendations, and real-time medical insights.',
      href: '/solutions/clinical-decision-support/',
      buttonText: 'Explore clinical AI',
      icon: '🎯'
    },
    {
      title: 'Lower Operational Costs by 40%',
      description: 'Optimize resource allocation, reduce waste, and improve operational efficiency through intelligent automation and analytics.',
      href: '/resources/healthcare-roi-calculator/',
      buttonText: 'Calculate savings',
      icon: '💰'
    }
  ];

  // Customer Testimonials
  const customerTestimonials = [
    {
      id: 'regional-hospital',
      quote: 'Augment\'s AI solutions have transformed our patient care delivery. We\'ve reduced diagnostic errors by 30% and improved patient satisfaction scores significantly.',
      author: 'Dr. Maria Rodriguez',
      title: 'Chief Medical Officer',
      company: 'Regional Medical Center',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=faces'
    },
    {
      id: 'clinic-network',
      quote: 'The administrative automation has been a game-changer for our practice. We\'ve reduced paperwork by 70% and can now focus more time on our patients.',
      author: 'Dr. James Chen',
      title: 'Practice Administrator',
      company: 'Community Health Network',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=faces'
    },
    {
      id: 'pharma-company',
      quote: 'Augment\'s drug discovery AI has accelerated our research timeline by 18 months. The predictive modeling capabilities are exceptional for identifying promising compounds.',
      author: 'Dr. Sarah Kim',
      title: 'VP of Research & Development',
      company: 'BioTech Innovations',
      image: 'https://images.unsplash.com/photo-1594824388853-e4d2d3c8e2d0?w=150&h=150&fit=crop&crop=faces'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        {/* SEO and Accessibility */}
        <h1 className="sr-only">Healthcare AI Solutions | Augment</h1>

        {/* Hero Section */}
        <SectionHero
          title="Healthcare"
          subtitle="Revolutionize patient care with AI"
          description="Transform healthcare operations with intelligent automation that streamlines medical records, supports clinical decisions, automates administrative tasks, and improves patient outcomes across hospitals, clinics, and healthcare organizations."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Modern healthcare facility with AI technology and medical professionals"
        />

        {/* Navigation Menu for Page Sections */}
        <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto py-4">
              <a href="#solutions" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Solutions
              </a>
              <a href="#sectors" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Healthcare Sectors
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

        {/* Healthcare Solutions */}
        <section id="solutions">
          <FeaturedCards
            title="Transform healthcare delivery with intelligent automation"
            description="AI-powered solutions designed to improve patient care, streamline operations, and support clinical decision-making"
            cards={healthcareSolutions}
            columns={3}
            backgroundColor="bg-white"
          />
        </section>

        {/* Healthcare Sectors */}
        <section id="sectors">
          <InfoColumns
            title="Find solutions by healthcare sector"
            description="Specialized AI solutions tailored for different areas of healthcare delivery and medical research"
            columns={healthcareSectors}
            columnsCount={3}
            backgroundColor="bg-gray-50"
          />
        </section>

        {/* Key Benefits */}
        <section id="benefits">
          <CTASection
            title="Measurable impact on patient care and operations"
            description="See the quantifiable benefits of AI automation on healthcare outcomes and operational efficiency"
            actions={keyBenefits}
            columns={2}
            backgroundColor="bg-white"
          />
        </section>

        {/* Healthcare Statistics */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Healthcare Industry Impact
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Improving patient outcomes and operational efficiency across healthcare organizations
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  2M+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Patients Served
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  35%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Improvement in Outcomes
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  60%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Reduction in Admin Time
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  800+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Healthcare Organizations
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section id="customers">
          <Testimonials
            title="See how healthcare organizations transform with Augment"
            description="Real results from hospitals, clinics, and healthcare systems leveraging AI to improve patient care"
            testimonials={customerTestimonials}
            backgroundColor="bg-gray-50"
          />
        </section>

        {/* Healthcare Compliance Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Built for Healthcare Compliance & Security
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Our AI solutions are designed with healthcare regulations and patient privacy protection at their core
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-bold text-white">HIPAA</span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  HIPAA Compliance
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Full HIPAA compliance with encrypted data and audit trails
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-bold text-white">HL7</span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  HL7 FHIR Integration
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Seamless integration with existing healthcare systems
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-bold text-white">FDA</span>
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  FDA Guidelines
                </h3>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  AI/ML solutions following FDA regulatory guidelines
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
                  Certified security controls and data protection
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Get Started Section */}
        <section id="getstarted" className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Ready to transform your healthcare organization?
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Connect with our healthcare AI experts to discover how intelligent automation can improve patient outcomes, streamline operations, and enhance clinical decision-making in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/demo/healthcare/"
                className="inline-flex items-center px-6 py-3 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Schedule Healthcare Demo
              </a>
              <a
                href="/resources/healthcare-roi-calculator/"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Calculate Healthcare ROI
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
