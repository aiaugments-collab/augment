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

export default function AppSecurityScanPage() {
  const { productUrl, docsUrl } = getAppUrls("app-security-scan");
  
  const ctaButtons = [
    {
      text: "Start Scanning",
      href: productUrl,
      variant: "primary" as const
    },
    {
      text: "Scan Reports",
      href: docsUrl,
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "vulnerability-scanning",
      image: "/vuln-scan.svg",
      title: "Comprehensive Vulnerability Scanning",
      description: "Advanced vulnerability scanning for networks, applications, and containers with automated discovery, prioritized remediation, and continuous monitoring.",
      ctaText: "Scan for vulnerabilities",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "network-scanning",
      image: "/vuln-scan.svg",
      title: "Network Security Assessment",
      description: "Deep network scanning with port analysis, service discovery, and security configuration assessment for comprehensive network security posture.",
      ctaText: "Assess network security",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "container-security",
      image: "/vuln-scan.svg",
      title: "Container & Application Security",
      description: "Specialized container and application security scanning with dependency analysis, configuration assessment, and runtime vulnerability detection.",
      ctaText: "Secure containers",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "remediation-guidance",
      image: "/vuln-scan.svg",
      title: "Prioritized Remediation Guidance",
      description: "Intelligent vulnerability prioritization with contextual risk assessment, remediation guidance, and actionable security recommendations.",
      ctaText: "Get remediation guidance",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "vulnerability-assessment",
      title: "Vulnerability Assessment",
      content: {
        title: "Comprehensive vulnerability scanning and assessment",
        description: "Advanced vulnerability scanning with automated discovery, risk assessment, and prioritized remediation for networks, applications, and infrastructure components.",
        buttons: [
          { text: "Start Vulnerability Scan", href: productUrl, variant: "primary" as const },
          { text: "Scanning policies", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Vulnerability Assessment Features",
          items: [
            "Automated scanning",
            "Risk prioritization",
            "CVE database integration",
            "False positive reduction",
            "Compliance scanning",
            "Trend analysis",
            "Custom policies",
            "Scheduled scans"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Vulnerability Assessment Console",
          description: "Comprehensive vulnerability scanning and risk management"
        }
      }
    },
    {
      id: "network-security",
      title: "Network Security",
      content: {
        title: "Advanced network security scanning and analysis",
        description: "Deep network security assessment with port scanning, service discovery, configuration analysis, and security posture evaluation for comprehensive network protection.",
        buttons: [
          { text: "Scan Network", href: productUrl, variant: "primary" as const },
          { text: "Network security guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Network Security Features",
          items: [
            "Port scanning",
            "Service discovery",
            "Configuration assessment",
            "Network mapping",
            "Protocol analysis",
            "Firewall testing",
            "Wireless security",
            "Network segmentation"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Network Security Scanner",
          description: "Network vulnerability and security configuration analysis"
        }
      }
    },
    {
      id: "application-scanning",
      title: "Application Scanning",
      content: {
        title: "Application and container security scanning platform",
        description: "Specialized application security scanning with dependency analysis, container scanning, configuration assessment, and runtime vulnerability detection for modern applications.",
        buttons: [
          { text: "Scan Applications", href: productUrl, variant: "primary" as const },
          { text: "Application security guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Application Scanning Features",
          items: [
            "Container scanning",
            "Dependency analysis",
            "Configuration assessment",
            "Runtime detection",
            "Code analysis",
            "License compliance",
            "Supply chain security",
            "CI/CD integration"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Application Security Scanner",
          description: "Container and application vulnerability assessment interface"
        }
      }
    },
    {
      id: "reporting-analytics",
      title: "Reporting & Analytics",
      content: {
        title: "Comprehensive security reporting and analytics platform",
        description: "Advanced security analytics with vulnerability trends, risk assessment reports, compliance reporting, and actionable security insights for informed decision making.",
        buttons: [
          { text: "View Reports", href: productUrl, variant: "primary" as const },
          { text: "Analytics guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Reporting & Analytics Features",
          items: [
            "Executive dashboards",
            "Trend analysis",
            "Risk metrics",
            "Compliance reports",
            "Custom reporting",
            "Export capabilities",
            "API integration",
            "Automated alerts"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Security Analytics Center",
          description: "Vulnerability reporting and security analytics interface"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Comprehensive vulnerability scanning across all assets",
      description: "Advanced vulnerability scanning for networks, applications, and containers with automated discovery, risk assessment, and continuous monitoring for complete security coverage.",
      link: {
        text: "Learn about vulnerability scanning",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Intelligent prioritization with contextual risk assessment",
      description: "Smart vulnerability prioritization with contextual risk analysis, business impact assessment, and actionable remediation guidance for efficient security operations."
    },
    {
      number: "03",
      title: "Specialized container and application security scanning", 
      description: "Dedicated container and application security capabilities with dependency analysis, configuration assessment, and runtime vulnerability detection for modern applications."
    },
    {
      number: "04",
      title: "Comprehensive reporting with compliance integration",
      description: "Advanced security analytics with compliance reporting, trend analysis, and executive dashboards for informed security decision making and regulatory requirements."
    }
  ];

  const customerReference = {
    title: "Security Posture Transformation",
    company: "Security team reduces vulnerability remediation time by 75% with automated scanning",
    description: "A cybersecurity-focused organization transformed their vulnerability management using VulnScan, achieving faster remediation times while improving overall security posture and compliance.",
    image: "/vuln-scan.svg",
    linkText: "Read the security transformation story",
    linkHref: docsUrl
  };

  const customerLogos = [
    {
      name: "OpenVAS",
      image: "https://logo.clearbit.com/openvas.org",
      href: docsUrl,
      alt: "OpenVAS logo"
    },
    {
      name: "Greenbone",
      image: "https://logo.clearbit.com/greenbone.net",
      href: docsUrl,
      alt: "Greenbone logo"
    },
    {
      name: "Nessus",
      image: "https://logo.clearbit.com/tenable.com",
      href: docsUrl, 
      alt: "Nessus logo"
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
      name: "Snyk",
      image: "https://logo.clearbit.com/snyk.io",
      href: docsUrl,
      alt: "Snyk logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in VulnScan",
      content: {
        title: "Latest vulnerability scanning and security features",
        description: "Stay updated with the newest capabilities in vulnerability assessment, network security scanning, and application security for modern cybersecurity operations.",
        image: "/vuln-scan.svg",
        links: [
          { text: "New scanning features", href: docsUrl },
          { text: "Security improvements", href: docsUrl },
          { text: "Container scanning updates", href: docsUrl },
          { text: "Reporting enhancements", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare security scanning solutions",
      content: {
        title: "Why choose VulnScan",
        description: "Compare our vulnerability scanning capabilities with other solutions and see why security teams choose us for comprehensive vulnerability assessment and management.",
        image: "/vuln-scan.svg",
        links: [
          { text: "Security scanning comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master VulnScan",
      content: {
        title: "Learn vulnerability management best practices",
        description: "Master vulnerability scanning with comprehensive guides, security assessment strategies, and training materials for security professionals and analysts.",
        image: "/vuln-scan.svg",
        links: [
          { text: "Vulnerability scanning deployment guide", href: docsUrl },
          { text: "Security assessment best practices", href: docsUrl },
          { text: "Remediation prioritization strategies", href: docsUrl },
          { text: "Troubleshooting guide", href: docsUrl }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Start scanning",
      href: productUrl,
      icon: "demo"
    },
    {
      title: "Scan reports",
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
        <h1 className="sr-only">VulnScan | Vulnerability Scanning & Reporting Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="VulnScan"
          description="Automated vulnerability scanning for networks, containers, and applications with prioritized remediation guidance. Comprehensive security assessment platform with intelligent risk prioritization, compliance reporting, and continuous monitoring."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Vulnerability Management Console",
            description: "Comprehensive security scanning and vulnerability assessment"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="VulnScan" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose VulnScan?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Security assessment success stories"
          description="Learn why security professionals and analysts choose VulnScan for comprehensive vulnerability management and security assessment capabilities."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Vulnerability Management Guide"
          description="We've compiled vulnerability assessment strategies, security scanning techniques, and remediation best practices for modern cybersecurity operations and risk management."
          image="/vuln-scan.svg"
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
