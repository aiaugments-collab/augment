import { Metadata } from 'next';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection
} from '../../../../components/sections';

export const metadata: Metadata = {
  title: 'Security Practices | Augment Corporate Security',
  description: 'Learn about Augment\'s comprehensive security practices, compliance standards, and commitment to protecting customer data and privacy.',
  keywords: 'security practices, data protection, cybersecurity, compliance, SOC 2, GDPR, HIPAA, enterprise security',
};

export default function SecurityPracticesPage() {
  // Hero Section Data
  const heroButtons = [
    {
      text: 'Security Overview',
      href: '/corporate/security-practices/overview/',
      variant: 'primary' as const
    },
    {
      text: 'Compliance Center',
      href: '/corporate/security-practices/compliance/',
      variant: 'secondary' as const
    }
  ];

  // Security Pillars Data
  const securityPillars = [
    {
      id: 'data-protection',
      title: 'Data Protection & Privacy',
      description: 'End-to-end encryption, zero-trust architecture, and comprehensive data governance to protect sensitive information.',
      ctaText: 'Learn about data protection',
      ctaLink: '/corporate/security-practices/data-protection/',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'infrastructure-security',
      title: 'Infrastructure Security',
      description: 'Multi-layered security controls, continuous monitoring, and automated threat detection across all systems.',
      ctaText: 'Explore infrastructure',
      ctaLink: '/corporate/security-practices/infrastructure/',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'access-controls',
      title: 'Identity & Access Management',
      description: 'Multi-factor authentication, role-based access controls, and privileged access management systems.',
      ctaText: 'View access controls',
      ctaLink: '/corporate/security-practices/access-management/',
      image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'incident-response',
      title: 'Incident Response & Recovery',
      description: '24/7 security operations center, automated incident response, and comprehensive disaster recovery plans.',
      ctaText: 'See incident response',
      ctaLink: '/corporate/security-practices/incident-response/',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  // Compliance Standards Data
  const complianceStandards = [
    {
      id: 'soc2-type2',
      title: 'SOC 2 Type II',
      description: 'Independently audited and certified for security, availability, processing integrity, confidentiality, and privacy.',
      ctaText: 'View SOC 2 report',
      ctaLink: '/corporate/security-practices/soc2/'
    },
    {
      id: 'iso-27001',
      title: 'ISO 27001',
      description: 'International standard for information security management systems, ensuring systematic security approach.',
      ctaText: 'ISO 27001 details',
      ctaLink: '/corporate/security-practices/iso27001/'
    },
    {
      id: 'gdpr-compliance',
      title: 'GDPR Compliance',
      description: 'Full compliance with European General Data Protection Regulation for data privacy and protection.',
      ctaText: 'GDPR compliance',
      ctaLink: '/corporate/security-practices/gdpr/'
    },
    {
      id: 'hipaa-compliance',
      title: 'HIPAA Compliance',
      description: 'Healthcare data protection compliance for processing protected health information (PHI).',
      ctaText: 'HIPAA details',
      ctaLink: '/corporate/security-practices/hipaa/'
    },
    {
      id: 'pci-dss',
      title: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard compliance for secure payment processing.',
      ctaText: 'PCI DSS info',
      ctaLink: '/corporate/security-practices/pci-dss/'
    },
    {
      id: 'fedramp',
      title: 'FedRAMP Ready',
      description: 'Federal Risk and Authorization Management Program readiness for government cloud services.',
      ctaText: 'FedRAMP status',
      ctaLink: '/corporate/security-practices/fedramp/'
    }
  ];

  // Security Features Data
  const securityFeatures = [
    {
      id: 'encryption',
      title: 'Advanced Encryption',
      description: 'AES-256 encryption at rest and TLS 1.3 in transit, with customer-managed encryption keys available.',
      ctaText: 'Encryption details',
      ctaLink: '/corporate/security-practices/encryption/',
      image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'network-security',
      title: 'Network Security',
      description: 'Web application firewalls, DDoS protection, and network segmentation with continuous monitoring.',
      ctaText: 'Network protection',
      ctaLink: '/corporate/security-practices/network-security/',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'vulnerability-management',
      title: 'Vulnerability Management',
      description: 'Continuous vulnerability scanning, penetration testing, and automated security patching.',
      ctaText: 'Vulnerability program',
      ctaLink: '/corporate/security-practices/vulnerability-management/',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  // Security Resources Data
  const securityResources = [
    {
      title: 'Security Documentation',
      description: 'Comprehensive security documentation, policies, and best practices for customers.',
      href: '/corporate/security-practices/documentation/',
      buttonText: 'View documentation',
      icon: '📚'
    },
    {
      title: 'Security Assessments',
      description: 'Request security assessments, penetration test reports, and compliance documentation.',
      href: '/corporate/security-practices/assessments/',
      buttonText: 'Request assessment',
      icon: '🔍'
    },
    {
      title: 'Security Training',
      description: 'Security awareness training and best practices for using Augment\'s platform securely.',
      href: '/corporate/security-practices/training/',
      buttonText: 'Access training',
      icon: '🎓'
    },
    {
      title: 'Report Security Issues',
      description: 'Responsible disclosure program for reporting security vulnerabilities and issues.',
      href: '/corporate/security-practices/report-issue/',
      buttonText: 'Report issue',
      icon: '🚨'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        {/* SEO and Accessibility */}
        <h1 className="sr-only">Security Practices | Augment Corporate Security</h1>

        {/* Hero Section */}
        <SectionHero
          title="Security Practices"
          subtitle="Enterprise-grade security you can trust"
          description="Security is at the core of everything we do. Discover our comprehensive approach to protecting your data, ensuring compliance, and maintaining the highest security standards across our AI automation platform."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Cybersecurity and data protection"
        />

        {/* Security Stats */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Security by the Numbers
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Our commitment to security excellence measured in real metrics
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  99.99%
                </div>
                <div className="text-base text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Security Uptime
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  24/7
                </div>
                <div className="text-base text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Security Monitoring
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  6+
                </div>
                <div className="text-base text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Compliance Standards
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Zero
                </div>
                <div className="text-base text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Data Breaches
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Pillars */}
        <FeaturedCards
          title="Security Pillars"
          description="Four foundational pillars that ensure comprehensive protection"
          cards={securityPillars}
          columns={2}
          backgroundColor="bg-white"
        />

        {/* Compliance Standards */}
        <InfoColumns
          title="Compliance & Certifications"
          description="Meeting the highest industry standards for security and compliance"
          columns={complianceStandards}
          columnsCount={3}
          backgroundColor="bg-gray-50"
        />

        {/* Security Features */}
        <FeaturedCards
          title="Advanced Security Features"
          description="Cutting-edge security technologies protecting your data and operations"
          cards={securityFeatures}
          columns={3}
          backgroundColor="bg-white"
        />

        {/* Security Architecture */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl lg:text-3xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Zero-Trust Security Architecture
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#C74634] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Never Trust, Always Verify
                      </h3>
                      <p className="text-gray-300 text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Every user, device, and application is verified before accessing any resources.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#C74634] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Least Privilege Access
                      </h3>
                      <p className="text-gray-300 text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Users and systems receive only the minimum access required for their function.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#C74634] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Continuous Monitoring
                      </h3>
                      <p className="text-gray-300 text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Real-time monitoring and analysis of all network traffic and user behavior.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-6" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Security Layers
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>Application Security</span>
                    <span className="text-green-400 font-semibold">✓ Active</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>Network Security</span>
                    <span className="text-green-400 font-semibold">✓ Active</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>Data Encryption</span>
                    <span className="text-green-400 font-semibold">✓ Active</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>Identity Management</span>
                    <span className="text-green-400 font-semibold">✓ Active</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>Physical Security</span>
                    <span className="text-green-400 font-semibold">✓ Active</span>
                  </div>
                </div>
                <a
                  href="/corporate/security-practices/architecture/"
                  className="inline-block mt-6 text-[#C74634] hover:text-[#A63429] font-medium transition-colors duration-200"
                  style={{ fontFamily: 'var(--oraclesans)' }}
                >
                  View detailed architecture →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Security Resources */}
        <CTASection
          title="Security Resources"
          description="Access comprehensive security information and support resources"
          actions={securityResources}
          columns={2}
          backgroundColor="bg-gray-50"
        />

        {/* Security Contact */}
        <section className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Security Questions or Concerns?
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Our security team is here to help. Contact us for security assessments, compliance documentation, or to report security issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/corporate/security-practices/contact/"
                className="inline-flex items-center px-8 py-4 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Contact Security Team
              </a>
              <a
                href="mailto:security@augment.com"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200 text-lg"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                security@augment.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
