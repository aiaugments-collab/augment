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

export default function DataGuardPage() {
  const { productUrl, docsUrl } = getAppUrls("data-guard");
  
  const ctaButtons = [
    {
      text: "Secure Data Now",
      href: productUrl,
      variant: "primary" as const
    },
    {
      text: "Security Guide",
      href: docsUrl,
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "data-encryption",
      image: "/data-guard.svg",
      title: "Advanced Data Encryption Suite",
      description: "Comprehensive data encryption with end-to-end protection, key management, and encryption at rest and in transit for complete data security across all services.",
      ctaText: "Enable encryption",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "access-control",
      image: "/data-guard.svg",
      title: "Granular Access Control Management",
      description: "Fine-grained access control with role-based permissions, attribute-based access control (ABAC), and policy-driven security for comprehensive data protection.",
      ctaText: "Configure access control",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "data-classification",
      image: "/data-guard.svg",
      title: "Intelligent Data Classification",
      description: "Automated data discovery and classification with sensitive data identification, privacy compliance, and data governance for regulatory requirements.",
      ctaText: "Classify data",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "compliance-monitoring",
      image: "/data-guard.svg",
      title: "Compliance & Audit Monitoring",
      description: "Continuous compliance monitoring with audit logging, regulatory reporting, and privacy compliance for GDPR, CCPA, and industry-specific requirements.",
      ctaText: "Monitor compliance",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "data-protection",
      title: "Data Protection",
      content: {
        title: "Comprehensive data protection and encryption services",
        description: "Advanced data protection suite with encryption at rest and in transit, key management, and data loss prevention for complete security across all data services.",
        buttons: [
          { text: "Protect Data", href: productUrl, variant: "primary" as const },
          { text: "Protection policies", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Data Protection Features",
          items: [
            "Encryption at rest",
            "Encryption in transit",
            "Key management",
            "Data loss prevention",
            "Backup encryption",
            "Database protection",
            "File system encryption",
            "Cloud storage security"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Data Protection Console",
          description: "Comprehensive data encryption and protection management"
        }
      }
    },
    {
      id: "access-management",
      title: "Access Management",
      content: {
        title: "Advanced access control and permission management",
        description: "Sophisticated access control with role-based permissions, attribute-based access control, and policy-driven security for granular data access management.",
        buttons: [
          { text: "Manage Access", href: productUrl, variant: "primary" as const },
          { text: "Access policies", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Access Management Features",
          items: [
            "Role-based access control",
            "Attribute-based access control",
            "Policy-driven security",
            "Dynamic permissions",
            "Access reviews",
            "Privilege escalation",
            "Session management",
            "Identity integration"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Access Control Management",
          description: "Granular access control and permission administration"
        }
      }
    },
    {
      id: "data-discovery",
      title: "Data Discovery",
      content: {
        title: "Automated data discovery and classification platform",
        description: "Intelligent data discovery with automated classification, sensitive data identification, and data governance for comprehensive data visibility and control.",
        buttons: [
          { text: "Discover Data", href: productUrl, variant: "primary" as const },
          { text: "Classification schemas", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Data Discovery Features",
          items: [
            "Automated discovery",
            "Data classification",
            "Sensitive data identification",
            "Data lineage tracking",
            "Metadata management",
            "Schema detection",
            "Content analysis",
            "Governance workflows"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Data Discovery Interface",
          description: "Automated data classification and governance management"
        }
      }
    },
    {
      id: "compliance-security",
      title: "Compliance & Security",
      content: {
        title: "Comprehensive compliance monitoring and security analytics",
        description: "Continuous compliance monitoring with regulatory reporting, security analytics, and audit capabilities for GDPR, CCPA, and industry-specific requirements.",
        buttons: [
          { text: "Monitor Compliance", href: productUrl, variant: "primary" as const },
          { text: "Compliance frameworks", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Compliance & Security Features",
          items: [
            "GDPR compliance",
            "CCPA compliance",
            "SOX compliance",
            "HIPAA compliance",
            "Audit logging",
            "Security analytics",
            "Threat detection",
            "Incident response"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Compliance Monitoring Center",
          description: "Regulatory compliance and security monitoring interface"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Advanced data encryption and protection across all services",
      description: "Comprehensive data protection with encryption at rest and in transit, advanced key management, and data loss prevention for complete security across databases, files, and cloud services.",
      link: {
        text: "Learn about data protection",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Granular access control with policy-driven security",
      description: "Sophisticated access control with role-based and attribute-based permissions, dynamic access policies, and fine-grained security controls for comprehensive data access management."
    },
    {
      number: "03",
      title: "Intelligent data discovery and automated classification", 
      description: "Automated data discovery with intelligent classification, sensitive data identification, and data governance workflows for comprehensive data visibility and regulatory compliance."
    },
    {
      number: "04",
      title: "Continuous compliance monitoring and regulatory reporting",
      description: "Real-time compliance monitoring with automated reporting for GDPR, CCPA, SOX, HIPAA, and industry-specific requirements with comprehensive audit and security analytics."
    }
  ];

  const customerReference = {
    title: "Data Security Transformation",
    company: "Financial services firm achieves 100% data encryption with zero performance impact",
    description: "A major financial institution implemented comprehensive data protection using DataGuard, achieving full encryption across all data services while maintaining performance and ensuring regulatory compliance.",
    image: "/data-guard.svg",
    linkText: "Read the data security story",
    linkHref: docsUrl
  };

  const customerLogos = [
    {
      name: "Apache Ranger",
      image: "https://logo.clearbit.com/ranger.apache.org",
      href: docsUrl,
      alt: "Apache Ranger logo"
    },
    {
      name: "HashiCorp Vault",
      image: "https://logo.clearbit.com/vaultproject.io",
      href: docsUrl,
      alt: "HashiCorp Vault logo"
    },
    {
      name: "Okta",
      image: "https://logo.clearbit.com/okta.com",
      href: docsUrl, 
      alt: "Okta logo"
    },
    {
      name: "CyberArk",
      image: "https://logo.clearbit.com/cyberark.com",
      href: docsUrl,
      alt: "CyberArk logo"
    },
    {
      name: "Varonis", 
      image: "https://logo.clearbit.com/varonis.com",
      href: docsUrl,
      alt: "Varonis logo"
    },
    {
      name: "Microsoft Purview",
      image: "https://logo.clearbit.com/microsoft.com",
      href: docsUrl,
      alt: "Microsoft Purview logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in DataGuard",
      content: {
        title: "Latest data protection and security features",
        description: "Stay updated with the newest capabilities in data encryption, access control, and compliance monitoring for modern data protection and privacy requirements.",
        image: "/data-guard.svg",
        links: [
          { text: "New protection features", href: docsUrl },
          { text: "Encryption improvements", href: docsUrl },
          { text: "Access control enhancements", href: docsUrl },
          { text: "Compliance updates", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare data protection solutions",
      content: {
        title: "Why choose DataGuard",
        description: "Compare our data protection capabilities with other solutions and see why security teams choose us for comprehensive data encryption and compliance management.",
        image: "/data-guard.svg",
        links: [
          { text: "Data protection comparison", href: docsUrl },
          { text: "Security comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master DataGuard",
      content: {
        title: "Learn data protection best practices",
        description: "Master data security with comprehensive guides, encryption strategies, and training materials for security professionals and data protection officers.",
        image: "/data-guard.svg",
        links: [
          { text: "Data protection deployment guide", href: docsUrl },
          { text: "Encryption best practices", href: docsUrl },
          { text: "Compliance configuration strategies", href: docsUrl },
          { text: "Troubleshooting guide", href: docsUrl }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Secure data now",
      href: productUrl,
      icon: "demo"
    },
    {
      title: "Security guide",
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
        <h1 className="sr-only">DataGuard | Data Protection & Encryption Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="DataGuard"
          description="Data protection suite for encryption, access control, and data classification across services with comprehensive compliance monitoring. Enterprise data security platform with advanced encryption, granular access control, and automated compliance for regulatory requirements."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Data Security Console",
            description: "Comprehensive data protection and compliance management"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="DataGuard" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose DataGuard?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Data protection success stories"
          description="Learn why security professionals and data protection officers choose DataGuard for comprehensive data encryption and regulatory compliance capabilities."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Data Security Guide"
          description="We've compiled data protection strategies, encryption best practices, and compliance frameworks for modern data security and privacy regulatory requirements."
          image="/data-guard.svg"
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
