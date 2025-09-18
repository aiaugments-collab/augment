import { ProductHero } from "@/components/product/ProductHero";
import { ProductPromo } from "@/components/product/ProductPromo";
import { ProductExplorer } from "@/components/product/ProductExplorer";
import { ProductWhyChoose } from "@/components/product/ProductWhyChoose";
import { ProductCustomerLogos } from "@/components/product/ProductCustomerLogos";
import { ProductResources } from "@/components/product/ProductResources";
import { ProductCTABanner } from "@/components/product/ProductCTABanner";
import { ProductGetStarted } from "@/components/product/ProductGetStarted";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { getAppUrls } from "@/lib/marketplaceData";

export default function AISecurityAuditorPage() {
  const { productUrl, docsUrl } = getAppUrls("ai-security-auditor");
  
  const ctaButtons = [
    {
      text: "Start Security Audit",
      href: productUrl,
      variant: "primary" as const
    },
    {
      text: "Security Documentation",
      href: docsUrl,
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "ai-threat-detection",
      image: "/ai-security-auditor.svg",
      title: "AI-Powered Threat Detection",
      description: "Advanced AI algorithms detect vulnerabilities, misconfigurations, and security threats across infrastructure, applications, and cloud environments with intelligent risk assessment.",
      ctaText: "Detect threats",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "risk-scoring",
      image: "/ai-security-auditor.svg",
      title: "Intelligent Risk Scoring",
      description: "Machine learning-driven risk assessment provides prioritized security recommendations with contextual threat analysis and business impact evaluation.",
      ctaText: "Assess security risks",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "compliance-monitoring",
      image: "/ai-security-auditor.svg",
      title: "AI Compliance Monitoring",
      description: "Automated compliance checking with AI-powered policy analysis, regulatory framework assessment, and continuous compliance monitoring for enterprise security.",
      ctaText: "Monitor compliance",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "remediation-guidance",
      image: "/ai-security-auditor.svg",
      title: "Intelligent Remediation Guidance",
      description: "AI-driven remediation recommendations with step-by-step guidance, impact analysis, and automated security improvement strategies for efficient security operations.",
      ctaText: "Get remediation guidance",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "vulnerability-detection",
      title: "Vulnerability Detection",
      content: {
        title: "AI-powered vulnerability detection and analysis",
        description: "Advanced machine learning algorithms scan infrastructure, applications, and cloud environments to detect security vulnerabilities with intelligent prioritization and contextual risk assessment.",
        buttons: [
          { text: "Scan for Vulnerabilities", href: productUrl, variant: "primary" as const },
          { text: "Vulnerability guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "AI Vulnerability Detection Features",
          items: [
            "AI-powered scanning",
            "Threat intelligence integration",
            "Zero-day vulnerability prediction",
            "Attack surface analysis",
            "Exploit probability assessment",
            "Contextual risk scoring",
            "False positive reduction",
            "Continuous monitoring"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "AI Security Scanner",
          description: "Intelligent vulnerability detection and threat analysis platform"
        }
      }
    },
    {
      id: "threat-analysis",
      title: "Threat Analysis",
      content: {
        title: "Intelligent threat analysis and attack vector prediction",
        description: "AI-powered threat analysis that identifies potential attack vectors, analyzes threat patterns, and provides predictive insights for proactive security defense strategies.",
        buttons: [
          { text: "Analyze Threats", href: productUrl, variant: "primary" as const },
          { text: "Threat analysis guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "AI Threat Analysis Features",
          items: [
            "Attack vector prediction",
            "Threat pattern recognition",
            "Behavioral analysis",
            "Anomaly detection",
            "Threat intelligence correlation",
            "Risk scenario modeling",
            "Impact assessment",
            "Defense strategy recommendations"
          ]
        },
        mockup: {
          type: "analytics" as const,
          title: "Threat Intelligence Center",
          description: "AI-driven threat analysis and attack vector prediction"
        }
      }
    },
    {
      id: "compliance-assessment",
      title: "Compliance Assessment",
      content: {
        title: "AI-powered compliance monitoring and regulatory assessment",
        description: "Intelligent compliance checking with automated policy analysis, regulatory framework assessment, and continuous monitoring for enterprise security and governance requirements.",
        buttons: [
          { text: "Check Compliance", href: productUrl, variant: "primary" as const },
          { text: "Compliance frameworks", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "AI Compliance Features",
          items: [
            "Regulatory framework analysis",
            "Policy compliance checking",
            "Audit trail generation",
            "Control effectiveness assessment",
            "Gap analysis automation",
            "Compliance scoring",
            "Remediation tracking",
            "Continuous monitoring"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Compliance Management Console",
          description: "AI-powered compliance monitoring and regulatory assessment"
        }
      }
    },
    {
      id: "security-recommendations",
      title: "Security Recommendations",
      content: {
        title: "Intelligent security recommendations and remediation guidance",
        description: "AI-driven security recommendations with prioritized remediation guidance, impact analysis, and automated security improvement strategies for comprehensive security management.",
        buttons: [
          { text: "Get Recommendations", href: productUrl, variant: "primary" as const },
          { text: "Security best practices", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "AI Recommendation Features",
          items: [
            "Prioritized remediation",
            "Impact analysis",
            "Security architecture advice",
            "Configuration optimization",
            "Policy recommendations",
            "Control implementation guidance",
            "Risk mitigation strategies",
            "Security roadmap planning"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "AI Security Advisor",
          description: "Intelligent security recommendations and remediation guidance"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "AI-powered comprehensive security analysis across all environments",
      description: "Advanced AI algorithms detect vulnerabilities, misconfigurations, and security threats across infrastructure, applications, and cloud environments with intelligent risk assessment and prioritization.",
      link: {
        text: "Learn about AI security analysis",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Intelligent threat prediction with machine learning insights",
      description: "AI-powered threat analysis that identifies potential attack vectors, predicts security risks, and provides proactive defense strategies based on behavioral analysis and threat intelligence."
    },
    {
      number: "03",
      title: "Automated compliance monitoring with regulatory intelligence", 
      description: "AI-driven compliance checking with automated policy analysis, regulatory framework assessment, and continuous monitoring for enterprise security and governance requirements."
    },
    {
      number: "04",
      title: "Contextual remediation guidance with impact analysis",
      description: "Intelligent security recommendations with prioritized remediation guidance, business impact assessment, and automated security improvement strategies for efficient security operations."
    }
  ];

  const customerReference = {
    title: "Security Posture Transformation",
    company: "Enterprise reduces security vulnerabilities by 85% with AI-powered auditing",
    description: "A Fortune 500 company transformed their security posture using AI SecurityAuditor, dramatically reducing vulnerabilities while improving compliance and threat detection capabilities.",
    image: "/ai-security-auditor.svg",
    linkText: "Read the security transformation story",
    linkHref: docsUrl
  };

  const customerLogos = [
    {
      name: "CrowdStrike",
      image: "https://logo.clearbit.com/crowdstrike.com",
      href: docsUrl,
      alt: "CrowdStrike logo"
    },
    {
      name: "Palo Alto Networks",
      image: "https://logo.clearbit.com/paloaltonetworks.com",
      href: docsUrl,
      alt: "Palo Alto Networks logo"
    },
    {
      name: "Splunk",
      image: "https://logo.clearbit.com/splunk.com",
      href: docsUrl, 
      alt: "Splunk logo"
    },
    {
      name: "Qualys",
      image: "https://logo.clearbit.com/qualys.com",
      href: docsUrl,
      alt: "Qualys logo"
    },
    {
      name: "Rapid7", 
      image: "https://logo.clearbit.com/rapid7.com",
      href: docsUrl,
      alt: "Rapid7 logo"
    },
    {
      name: "Tenable",
      image: "https://logo.clearbit.com/tenable.com",
      href: docsUrl,
      alt: "Tenable logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in AI SecurityAuditor",
      content: {
        title: "Latest AI-powered security analysis features",
        description: "Stay updated with the newest capabilities in AI-driven security auditing, threat detection, and compliance monitoring for modern cybersecurity operations.",
        image: "/ai-security-auditor.svg",
        links: [
          { text: "New AI threat detection features", href: docsUrl },
          { text: "Enhanced vulnerability analysis", href: docsUrl },
          { text: "Compliance monitoring updates", href: docsUrl },
          { text: "Risk assessment improvements", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare security auditing solutions",
      content: {
        title: "Why choose AI SecurityAuditor",
        description: "Compare our AI-powered security auditing capabilities with other solutions and see why security teams choose us for intelligent threat detection and compliance monitoring.",
        image: "/ai-security-auditor.svg",
        links: [
          { text: "Security auditing comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master AI SecurityAuditor",
      content: {
        title: "Learn AI-powered security auditing best practices",
        description: "Master intelligent security analysis with comprehensive guides, threat detection strategies, and training materials for security professionals and analysts.",
        image: "/ai-security-auditor.svg",
        links: [
          { text: "AI security auditing guide", href: docsUrl },
          { text: "Threat detection best practices", href: docsUrl },
          { text: "Compliance monitoring strategies", href: docsUrl },
          { text: "Risk assessment methodologies", href: docsUrl }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Start security audit",
      href: productUrl,
      icon: "demo"
    },
    {
      title: "Security documentation",
      href: docsUrl,
      icon: "tour"
    },
    {
      title: "Contact security team",
      href: productUrl,
      icon: "contact"
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="sr-only">AI SecurityAuditor | AI-Powered Comprehensive Security Analysis</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="AI SecurityAuditor"
          description="Intelligent security auditing tool that uses AI to detect vulnerabilities, misconfigurations, and security threats across infrastructure, applications, and cloud environments. Provides risk scoring and remediation guidance with advanced machine learning insights."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "AI Security Analysis Platform",
            description: "Intelligent security auditing with AI-powered threat detection and risk assessment"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="AI SecurityAuditor" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose AI SecurityAuditor?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Security transformation success stories"
          description="Learn why security professionals and analysts choose AI SecurityAuditor for intelligent threat detection, compliance monitoring, and security risk management."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The AI Security Excellence Guide"
          description="We've compiled intelligent security auditing strategies, threat detection methodologies, and compliance best practices for modern cybersecurity operations."
          image="/ai-security-auditor.svg"
          buttonText="Get the security guide"
          buttonHref={docsUrl}
        />
        <ProductGetStarted
          title="Get Started"
          actions={getStartedActions}
        />
      </main>
    </div>
  );
}
