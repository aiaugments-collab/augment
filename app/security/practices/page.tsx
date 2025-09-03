import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Security Practices | Augment AI',
  description: 'Learn about Augment AI\'s comprehensive security practices, data protection measures, and compliance standards.',
  keywords: 'security practices, data protection, cybersecurity, compliance, SOC 2, GDPR, privacy, encryption',
};

export default function SecurityPracticesPage() {
  const securityPillars = [
    {
      title: 'Data Protection',
      description: 'Comprehensive measures to protect customer and user data at rest and in transit',
      icon: '🛡️',
      practices: [
        'End-to-end encryption',
        'Zero-trust architecture',
        'Data minimization principles',
        'Regular security audits'
      ]
    },
    {
      title: 'Infrastructure Security',
      description: 'Robust security controls across our cloud infrastructure and data centers',
      icon: '🏗️',
      practices: [
        'Multi-cloud security',
        'Network segmentation',
        'Intrusion detection systems',
        'Automated threat response'
      ]
    },
    {
      title: 'Access Control',
      description: 'Strict identity and access management to ensure only authorized access',
      icon: '🔐',
      practices: [
        'Multi-factor authentication',
        'Role-based access control',
        'Privileged access management',
        'Regular access reviews'
      ]
    },
    {
      title: 'Compliance & Governance',
      description: 'Adherence to industry standards and regulatory requirements',
      icon: '📋',
      practices: [
        'SOC 2 Type II certified',
        'GDPR compliant',
        'ISO 27001 aligned',
        'Regular compliance audits'
      ]
    }
  ];

  const certifications = [
    {
      name: 'SOC 2 Type II',
      description: 'System and Organization Controls for security, availability, and confidentiality',
      status: 'Certified',
      validUntil: '2024',
      logo: '🏆'
    },
    {
      name: 'ISO 27001',
      description: 'International standard for information security management systems',
      status: 'Aligned',
      validUntil: '2024',
      logo: '🌐'
    },
    {
      name: 'GDPR Compliance',
      description: 'General Data Protection Regulation compliance for EU data protection',
      status: 'Compliant',
      validUntil: 'Ongoing',
      logo: '🇪🇺'
    },
    {
      name: 'CCPA Compliance',
      description: 'California Consumer Privacy Act compliance for data privacy rights',
      status: 'Compliant',
      validUntil: 'Ongoing',
      logo: '🏛️'
    }
  ];

  const securityFeatures = [
    {
      title: 'Advanced Encryption',
      description: 'AES-256 encryption for data at rest and TLS 1.3 for data in transit',
      technical: 'Industry-standard encryption protocols protecting all sensitive data'
    },
    {
      title: 'Zero Trust Architecture',
      description: 'Never trust, always verify approach to network security',
      technical: 'Continuous verification of all users and devices accessing our systems'
    },
    {
      title: 'AI-Powered Threat Detection',
      description: 'Machine learning algorithms for real-time threat identification',
      technical: 'Behavioral analysis and anomaly detection for proactive security'
    },
    {
      title: 'Secure Development Lifecycle',
      description: 'Security integrated throughout the software development process',
      technical: 'Code reviews, vulnerability scanning, and security testing at every stage'
    },
    {
      title: 'Data Loss Prevention',
      description: 'Comprehensive DLP solutions to prevent unauthorized data access',
      technical: 'Content inspection, policy enforcement, and incident response'
    },
    {
      title: 'Incident Response',
      description: '24/7 security operations center with rapid incident response',
      technical: 'Automated detection, containment, and recovery procedures'
    }
  ];

  const dataHandling = [
    {
      stage: 'Collection',
      description: 'Minimal data collection with explicit user consent',
      controls: ['Purpose limitation', 'Consent management', 'Data mapping']
    },
    {
      stage: 'Processing',
      description: 'Secure processing with privacy-preserving techniques',
      controls: ['Encryption in use', 'Differential privacy', 'Federated learning']
    },
    {
      stage: 'Storage',
      description: 'Encrypted storage with access controls and monitoring',
      controls: ['AES-256 encryption', 'Access logging', 'Data classification']
    },
    {
      stage: 'Transmission',
      description: 'Secure transmission protocols for all data transfers',
      controls: ['TLS 1.3', 'Certificate pinning', 'Perfect forward secrecy']
    },
    {
      stage: 'Retention',
      description: 'Data retention policies with automated deletion',
      controls: ['Retention schedules', 'Automated purging', 'Legal hold management']
    },
    {
      stage: 'Disposal',
      description: 'Secure data disposal and destruction procedures',
      controls: ['Cryptographic erasure', 'Physical destruction', 'Disposal verification']
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Kim',
      role: 'Chief Security Officer',
      bio: 'Leading cybersecurity expert with 20+ years experience in enterprise security and risk management.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=faces'
    },
    {
      name: 'Michael Chen',
      role: 'VP of Information Security',
      bio: 'Former NSA cybersecurity specialist focused on AI security and threat intelligence.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=faces'
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Director of Privacy',
      bio: 'Privacy law expert ensuring compliance with global data protection regulations.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=faces'
    }
  ];

  const reports = [
    {
      title: 'Security Whitepaper',
      description: 'Comprehensive overview of our security architecture and practices',
      type: 'Technical Document',
      pages: '45 pages'
    },
    {
      title: 'SOC 2 Type II Report',
      description: 'Independent audit report on our security controls and procedures',
      type: 'Audit Report',
      pages: 'Available to customers'
    },
    {
      title: 'Privacy Impact Assessment',
      description: 'Assessment of privacy risks and mitigation strategies',
      type: 'Privacy Report',
      pages: '28 pages'
    },
    {
      title: 'Incident Response Plan',
      description: 'Public summary of our incident response procedures',
      type: 'Response Plan',
      pages: '12 pages'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
              Security Practices
            </h1>
            <p className="text-xl text-gray-300 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Comprehensive security measures protecting your data and our AI platform. We maintain the highest standards of cybersecurity, privacy, and compliance to ensure trust and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#security"
                className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Security Overview
              </a>
              <a
                href="#compliance"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Compliance & Certifications
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Security Pillars */}
      <section id="security" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Security Framework
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Our security approach is built on four foundational pillars ensuring comprehensive protection
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {securityPillars.map((pillar, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <div className="text-4xl mb-4">{pillar.icon}</div>
                <h3 className="text-xl font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oracleserif)' }}>
                  {pillar.title}
                </h3>
                <p className="text-gray-700 mb-6" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {pillar.description}
                </p>
                <div>
                  <h4 className="font-medium text-[#161513] mb-3" style={{ fontFamily: 'var(--oracleserif)' }}>
                    Key Practices:
                  </h4>
                  <ul className="space-y-2">
                    {pillar.practices.map((practice, practiceIndex) => (
                      <li key={practiceIndex} className="flex items-center text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {practice}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Advanced Security Features
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Cutting-edge security technologies and practices protecting our platform and your data
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oracleserif)' }}>
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-sm mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {feature.description}
                </p>
                <p className="text-xs text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {feature.technical}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Handling Lifecycle */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Data Handling Lifecycle
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Secure data handling practices throughout the entire data lifecycle
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataHandling.map((stage, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-[#C74634] text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-semibold text-[#161513]" style={{ fontFamily: 'var(--oracleserif)' }}>
                    {stage.stage}
                  </h3>
                </div>
                <p className="text-gray-700 text-sm mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {stage.description}
                </p>
                <div>
                  <h4 className="font-medium text-[#161513] mb-2 text-sm" style={{ fontFamily: 'var(--oracleserif)' }}>
                    Controls:
                  </h4>
                  <ul className="space-y-1">
                    {stage.controls.map((control, controlIndex) => (
                      <li key={controlIndex} className="text-xs text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                        • {control}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      <section id="compliance" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Certifications & Compliance
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Industry-leading certifications and compliance with global data protection regulations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{cert.logo}</div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  {cert.name}
                </h3>
                <p className="text-sm text-gray-700 mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {cert.description}
                </p>
                <div className="space-y-1">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    cert.status === 'Certified' ? 'bg-green-100 text-green-800' :
                    cert.status === 'Compliant' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {cert.status}
                  </span>
                  <p className="text-xs text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                    Valid until: {cert.validUntil}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Security Leadership
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Meet the experienced security professionals protecting our platform and your data
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-[#161513] mb-1" style={{ fontFamily: 'var(--oracleserif)' }}>
                  {member.name}
                </h3>
                <p className="text-[#C74634] font-medium text-sm mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {member.role}
                </p>
                <p className="text-gray-700 text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Reports */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Security Documentation
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Access detailed security documentation and reports
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reports.map((report, index) => (
              <a key={index} href="#" className="group bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg hover:border-[#C74634] transition-all duration-200">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#C74634] group-hover:text-white transition-colors">
                  📄
                </div>
                <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  {report.title}
                </h3>
                <p className="text-gray-700 text-sm mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {report.description}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span>{report.type}</span>
                  <span>{report.pages}</span>
                </div>
                <div className="flex items-center text-[#C74634] text-sm font-medium mt-3">
                  Download
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Security Team */}
      <section className="py-16 bg-[#C74634] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
            Security Questions or Concerns?
          </h2>
          <p className="text-lg text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
            Our security team is here to help. Contact us for security inquiries, vulnerability reports, or compliance questions.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                Security Team
              </h3>
              <p className="text-red-100" style={{ fontFamily: 'var(--oraclesans)' }}>
                security@augment.ai<br/>
                +1 (555) 123-SECURE
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                Vulnerability Reports
              </h3>
              <p className="text-red-100" style={{ fontFamily: 'var(--oraclesans)' }}>
                security-reports@augment.ai<br/>
                PGP Key Available
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              Contact Security Team
            </a>
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              Report Vulnerability
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
