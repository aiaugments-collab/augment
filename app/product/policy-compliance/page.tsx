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

export default function PolicyCompliancePage() {
  const { productUrl, docsUrl } = getAppUrls("policy-compliance");
  
  const ctaButtons = [
    {
      text: "Start Compliance Check",
      href: productUrl,
      variant: "primary" as const
    },
    {
      text: "Security Policies",
      href: docsUrl,
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "security-posture",
      image: "/policy-guard.svg",
      title: "Cloud Security Posture Management",
      description: "Comprehensive cloud security posture assessment with automated compliance checking, misconfiguration detection, and continuous security monitoring.",
      ctaText: "Assess security posture",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "policy-enforcement",
      image: "/policy-guard.svg",
      title: "Automated Policy Enforcement",
      description: "Intelligent policy enforcement with real-time monitoring, automated remediation, and policy-as-code integration for consistent security governance.",
      ctaText: "Enforce security policies",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "compliance-reporting",
      image: "/policy-guard.svg",
      title: "Comprehensive Compliance Reporting",
      description: "Automated compliance reporting with regulatory framework support, audit trail generation, and executive dashboards for governance visibility.",
      ctaText: "Generate compliance reports",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "misconfiguration-detection",
      image: "/policy-guard.svg",
      title: "Advanced Misconfiguration Detection",
      description: "Intelligent misconfiguration detection with risk assessment, prioritized remediation, and continuous monitoring across cloud accounts and services.",
      ctaText: "Detect misconfigurations",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "security-assessment",
      title: "Security Assessment",
      content: {
        title: "Comprehensive cloud security posture assessment",
        description: "Advanced security assessment with automated compliance checking, risk evaluation, and security posture monitoring across all cloud accounts and services.",
        buttons: [
          { text: "Assess Security Posture", href: productUrl, variant: "primary" as const },
          { text: "Assessment frameworks", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Security Assessment Features",
          items: [
            "Automated compliance checking",
            "Risk assessment",
            "Security benchmarks",
            "Vulnerability scanning",
            "Configuration analysis",
            "Threat modeling",
            "Security scoring",
            "Continuous monitoring"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Security Assessment Console",
          description: "Cloud security posture and compliance monitoring"
        }
      }
    },
    {
      id: "policy-management",
      title: "Policy Management",
      content: {
        title: "Advanced policy enforcement and governance platform",
        description: "Sophisticated policy management with automated enforcement, real-time monitoring, and policy-as-code integration for consistent security governance.",
        buttons: [
          { text: "Manage Policies", href: productUrl, variant: "primary" as const },
          { text: "Policy templates", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Policy Management Features",
          items: [
            "Policy-as-code",
            "Automated enforcement",
            "Real-time monitoring",
            "Policy templates",
            "Custom rules",
            "Exception handling",
            "Approval workflows",
            "Policy versioning"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Policy Management Console",
          description: "Security policy enforcement and governance management"
        }
      }
    },
    {
      id: "compliance-monitoring",
      title: "Compliance Monitoring",
      content: {
        title: "Continuous compliance monitoring and reporting platform",
        description: "Comprehensive compliance monitoring with regulatory framework support, automated reporting, and audit trail generation for governance and regulatory requirements.",
        buttons: [
          { text: "Monitor Compliance", href: productUrl, variant: "primary" as const },
          { text: "Compliance frameworks", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Compliance Monitoring Features",
          items: [
            "Regulatory frameworks",
            "Automated reporting",
            "Audit trail generation",
            "Compliance dashboards",
            "Evidence collection",
            "Remediation tracking",
            "Executive reporting",
            "Certification support"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Compliance Monitoring Interface",
          description: "Regulatory compliance tracking and reporting management"
        }
      }
    },
    {
      id: "remediation-workflows",
      title: "Remediation Workflows",
      content: {
        title: "Intelligent remediation and incident response platform",
        description: "Advanced remediation workflows with automated response, prioritized issue resolution, and intelligent recommendations for efficient security operations.",
        buttons: [
          { text: "Setup Remediation", href: productUrl, variant: "primary" as const },
          { text: "Remediation playbooks", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Remediation Workflows Features",
          items: [
            "Automated remediation",
            "Workflow orchestration",
            "Priority scoring",
            "Response playbooks",
            "Incident tracking",
            "Escalation management",
            "Notification systems",
            "Performance metrics"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Remediation Workflow Center",
          description: "Security incident response and remediation management"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Comprehensive cloud security posture management",
      description: "Advanced security posture assessment with automated compliance checking, misconfiguration detection, and continuous monitoring across all cloud accounts and services.",
      link: {
        text: "Learn about security posture",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Intelligent policy enforcement with automation",
      description: "Sophisticated policy management with automated enforcement, real-time monitoring, and policy-as-code integration for consistent security governance and compliance."
    },
    {
      number: "03",
      title: "Automated compliance reporting for regulatory frameworks", 
      description: "Comprehensive compliance monitoring with support for major regulatory frameworks, automated reporting, and audit trail generation for governance requirements."
    },
    {
      number: "04",
      title: "Advanced remediation workflows with intelligent prioritization",
      description: "Intelligent remediation capabilities with automated response, prioritized issue resolution, and workflow orchestration for efficient security operations and incident response."
    }
  ];

  const customerReference = {
    title: "Security Compliance Transformation",
    company: "Financial services firm achieves 99% compliance automation with intelligent policy management",
    description: "A major financial institution transformed their security compliance using PolicyGuard, achieving automated compliance across their cloud infrastructure while reducing manual oversight by 90%.",
    image: "/policy-guard.svg",
    linkText: "Read the compliance transformation story",
    linkHref: docsUrl
  };

  const customerLogos = [
    {
      name: "Falco",
      image: "https://logo.clearbit.com/falco.org",
      href: docsUrl,
      alt: "Falco logo"
    },
    {
      name: "Open Policy Agent",
      image: "https://logo.clearbit.com/openpolicyagent.org",
      href: docsUrl,
      alt: "Open Policy Agent logo"
    },
    {
      name: "AWS Config",
      image: "https://logo.clearbit.com/aws.amazon.com",
      href: docsUrl, 
      alt: "AWS Config logo"
    },
    {
      name: "Azure Security Center",
      image: "https://logo.clearbit.com/azure.microsoft.com",
      href: docsUrl,
      alt: "Azure Security Center logo"
    },
    {
      name: "Google Security Command Center", 
      image: "https://logo.clearbit.com/cloud.google.com",
      href: docsUrl,
      alt: "Google Security Command Center logo"
    },
    {
      name: "Prisma Cloud",
      image: "https://logo.clearbit.com/paloaltonetworks.com",
      href: docsUrl,
      alt: "Prisma Cloud logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in PolicyGuard",
      content: {
        title: "Latest security posture and compliance features",
        description: "Stay updated with the newest capabilities in cloud security posture management, policy enforcement, and compliance monitoring for modern security operations.",
        image: "/policy-guard.svg",
        links: [
          { text: "New security features", href: docsUrl },
          { text: "Policy enforcement improvements", href: docsUrl },
          { text: "Compliance updates", href: docsUrl },
          { text: "Remediation enhancements", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare security compliance solutions",
      content: {
        title: "Why choose PolicyGuard",
        description: "Compare our cloud security posture capabilities with other solutions and see why security teams choose us for comprehensive compliance and policy management.",
        image: "/policy-guard.svg",
        links: [
          { text: "Security compliance comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master PolicyGuard",
      content: {
        title: "Learn security compliance best practices",
        description: "Master cloud security posture management with comprehensive guides, compliance frameworks, and training materials for security professionals and compliance officers.",
        image: "/policy-guard.svg",
        links: [
          { text: "Security compliance deployment guide", href: docsUrl },
          { text: "Policy enforcement best practices", href: docsUrl },
          { text: "Compliance automation strategies", href: docsUrl },
          { text: "Troubleshooting guide", href: docsUrl }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Start compliance check",
      href: productUrl,
      icon: "demo"
    },
    {
      title: "Security policies",
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
        <h1 className="sr-only">PolicyGuard | Cloud Security Posture & Policies Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="PolicyGuard"
          description="Detect misconfigurations, enforce policies, and generate compliance reports across cloud accounts with intelligent security posture management. Cloud security platform with automated policy enforcement and comprehensive compliance monitoring."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Security Compliance Console",
            description: "Cloud security posture and policy enforcement management"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="PolicyGuard" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose PolicyGuard?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Security compliance success stories"
          description="Learn why security professionals and compliance officers choose PolicyGuard for comprehensive cloud security posture and automated compliance management."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Security Compliance Guide"
          description="We've compiled cloud security strategies, policy enforcement techniques, and compliance automation best practices for modern security operations and regulatory requirements."
          image="/policy-guard.svg"
          buttonText="Get the compliance guide"
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
