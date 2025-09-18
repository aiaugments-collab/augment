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

export default function GovtNGFWPage() {
  const { productUrl, docsUrl } = getAppUrls("govt-ngfw");
  
  const ctaButtons = [
    {
      text: "Request Demo",
      href: productUrl,
      variant: "primary" as const
    },
    {
      text: "Compliance Guide",
      href: docsUrl,
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "government-hardening",
      image: "/govt-ngfw.svg",
      title: "Government-Grade Security Hardening",
      description: "Specialized firewall with government-approved security configurations, compliance controls, and hardened deployment options for regulated environments.",
      ctaText: "Explore security features",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "compliance-features",
      image: "/govt-ngfw.svg",
      title: "Built-in Compliance & Audit Features",
      description: "Comprehensive audit logging, compliance reporting, and regulatory framework support for FISMA, FedRAMP, and other government security standards.",
      ctaText: "View compliance features",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "regulated-environments",
      image: "/govt-ngfw.svg",
      title: "Optimized for Regulated Environments",
      description: "Purpose-built for government clouds and regulated industries with enhanced security controls, air-gapped deployment options, and strict access controls.",
      ctaText: "Learn about deployments",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "advanced-threat-protection",
      image: "/govt-ngfw.svg",
      title: "Advanced Threat Protection",
      description: "Next-generation threat detection with AI-powered analysis, zero-day protection, and advanced persistent threat (APT) detection for critical infrastructure.",
      ctaText: "See threat protection",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "security-hardening",
      title: "Security Hardening",
      content: {
        title: "Government-grade security hardening and controls",
        description: "Advanced security hardening with government-approved configurations, enhanced access controls, and specialized security features for critical infrastructure protection.",
        buttons: [
          { text: "Deploy Hardened NGFW", href: productUrl, variant: "primary" as const },
          { text: "Security hardening guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Security Hardening Features",
          items: [
            "Government-approved configs",
            "Enhanced access controls",
            "Multi-factor authentication",
            "Privileged access management",
            "Security baseline enforcement",
            "Threat intelligence integration",
            "Zero-trust architecture",
            "Advanced encryption"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Security Hardening Console",
          description: "Government-grade firewall security and compliance management"
        }
      }
    },
    {
      id: "compliance-audit",
      title: "Compliance & Audit",
      content: {
        title: "Comprehensive compliance and audit management",
        description: "Built-in compliance frameworks with automated audit logging, compliance reporting, and regulatory framework support for government and regulated industry requirements.",
        buttons: [
          { text: "Configure Compliance", href: productUrl, variant: "primary" as const },
          { text: "Compliance frameworks", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Compliance & Audit Features",
          items: [
            "FISMA compliance",
            "FedRAMP ready",
            "SOC 2 Type II",
            "NIST framework support",
            "Automated audit logging",
            "Compliance reporting",
            "Evidence collection",
            "Regulatory monitoring"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Compliance Management Interface",
          description: "Government compliance and audit trail management console"
        }
      }
    },
    {
      id: "threat-detection",
      title: "Threat Detection",
      content: {
        title: "Advanced threat detection and incident response",
        description: "AI-powered threat detection with advanced persistent threat (APT) protection, zero-day detection, and automated incident response for critical infrastructure security.",
        buttons: [
          { text: "Enable Threat Detection", href: productUrl, variant: "primary" as const },
          { text: "Threat detection guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Threat Detection Features",
          items: [
            "AI-powered analysis",
            "APT detection",
            "Zero-day protection",
            "Behavioral analytics",
            "Threat intelligence feeds",
            "Automated response",
            "Incident correlation",
            "Forensic capabilities"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Threat Detection Center",
          description: "Advanced threat analysis and incident response interface"
        }
      }
    },
    {
      id: "deployment-management",
      title: "Deployment & Management",
      content: {
        title: "Specialized deployment options for government environments",
        description: "Air-gapped deployment capabilities, government cloud integration, and specialized management features for secure and compliant government infrastructure deployments.",
        buttons: [
          { text: "Plan Deployment", href: productUrl, variant: "primary" as const },
          { text: "Deployment best practices", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Deployment & Management Features",
          items: [
            "Air-gapped deployment",
            "Government cloud support",
            "High availability clustering",
            "Centralized management",
            "Policy orchestration",
            "Remote monitoring",
            "Backup & recovery",
            "Performance optimization"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Deployment Management Center",
          description: "Government environment deployment and infrastructure management"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Government-grade security hardening and compliance",
      description: "Purpose-built for government environments with specialized security configurations, compliance frameworks, and hardened deployment options for critical infrastructure protection.",
      link: {
        text: "Learn about government security",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Built-in regulatory compliance and audit capabilities",
      description: "Comprehensive compliance support for FISMA, FedRAMP, SOC 2, and NIST frameworks with automated audit logging and regulatory reporting for government requirements."
    },
    {
      number: "03",
      title: "Advanced threat protection for critical infrastructure", 
      description: "AI-powered threat detection with advanced persistent threat (APT) protection, zero-day detection, and automated incident response specifically designed for government security needs."
    },
    {
      number: "04",
      title: "Specialized deployment options for regulated environments",
      description: "Air-gapped deployment capabilities, government cloud integration, and specialized management features for secure and compliant government infrastructure operations."
    }
  ];

  const customerReference = {
    title: "Government Security Transformation",
    company: "Federal agency achieves 99.9% threat detection with hardened NGFW deployment",
    description: "A major federal agency enhanced their cybersecurity posture using Govt NGFW, achieving superior threat detection rates while maintaining full compliance with government security standards and regulations.",
    image: "/govt-ngfw.svg",
    linkText: "Read the government security story",
    linkHref: docsUrl
  };

  const customerLogos = [
    {
      name: "OPNsense",
      image: "https://logo.clearbit.com/opnsense.org",
      href: docsUrl,
      alt: "OPNsense logo"
    },
    {
      name: "pfSense",
      image: "https://logo.clearbit.com/pfsense.org",
      href: docsUrl,
      alt: "pfSense logo"
    },
    {
      name: "Fortinet",
      image: "https://logo.clearbit.com/fortinet.com",
      href: docsUrl, 
      alt: "Fortinet logo"
    },
    {
      name: "Palo Alto Networks",
      image: "https://logo.clearbit.com/paloaltonetworks.com",
      href: docsUrl,
      alt: "Palo Alto Networks logo"
    },
    {
      name: "Cisco ASA", 
      image: "https://logo.clearbit.com/cisco.com",
      href: docsUrl,
      alt: "Cisco ASA logo"
    },
    {
      name: "Check Point",
      image: "https://logo.clearbit.com/checkpoint.com",
      href: docsUrl,
      alt: "Check Point logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in Govt NGFW",
      content: {
        title: "Latest government security and compliance features",
        description: "Stay updated with the newest capabilities in government-grade security, compliance frameworks, and threat protection for critical infrastructure and regulated environments.",
        image: "/govt-ngfw.svg",
        links: [
          { text: "New security features", href: docsUrl },
          { text: "Compliance updates", href: docsUrl },
          { text: "Threat protection enhancements", href: docsUrl },
          { text: "Deployment improvements", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare government firewall solutions",
      content: {
        title: "Why choose Govt NGFW",
        description: "Compare our government-grade firewall capabilities with other solutions and see why government IT teams choose us for critical infrastructure protection and compliance.",
        image: "/govt-ngfw.svg",
        links: [
          { text: "Government firewall comparison", href: docsUrl },
          { text: "Compliance comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master Govt NGFW",
      content: {
        title: "Learn government security best practices",
        description: "Master government-grade firewall deployment with comprehensive guides, compliance frameworks, and training materials for government IT and security professionals.",
        image: "/govt-ngfw.svg",
        links: [
          { text: "Government security deployment guide", href: docsUrl },
          { text: "Compliance configuration best practices", href: docsUrl },
          { text: "Threat protection strategies", href: docsUrl },
          { text: "Troubleshooting guide", href: docsUrl }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Request demo",
      href: productUrl,
      icon: "demo"
    },
    {
      title: "Compliance guide",
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
        <h1 className="sr-only">Govt NGFW | Hardened Next-Gen Firewall for Government Clouds</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="Govt NGFW"
          description="Hardened next-generation firewall for government clouds with compliance-focused features, audit capabilities, and specialized security controls. Government-grade security solution optimized for regulated environments with advanced threat protection and compliance management."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Government Security Console",
            description: "Government-grade firewall and compliance management interface"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="Govt NGFW" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose Govt NGFW?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Government security success stories"
          description="Learn why government IT teams and security professionals choose Govt NGFW for critical infrastructure protection and regulatory compliance requirements."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Government Security Guide"
          description="We've compiled government security strategies, compliance frameworks, and threat protection best practices for critical infrastructure and regulated environment deployments."
          image="/govt-ngfw.svg"
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
