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

export default function EdgeSecurityPage() {
  const { productUrl, docsUrl } = getAppUrls("edge-security");
  
  const ctaButtons = [
    {
      text: "Deploy Edge Security",
      href: productUrl,
      variant: "primary" as const
    },
    {
      text: "Configure Threat Prevention",
      href: docsUrl,
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "edge-gateway",
      image: "/edge-shield.svg",
      title: "Lightweight Edge Gateway Platform",
      description: "Advanced lightweight edge gateway with high-performance routing, load balancing, and security features optimized for distributed branch deployments and edge computing.",
      ctaText: "Deploy edge gateways",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "threat-prevention",
      image: "/edge-shield.svg",
      title: "Advanced Threat Prevention Engine",
      description: "Comprehensive threat prevention with real-time malware detection, intrusion prevention, and behavioral analysis for proactive security at the network edge.",
      ctaText: "Prevent edge threats",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "web-filtering",
      image: "/edge-shield.svg",
      title: "Intelligent Web Filtering System",
      description: "Sophisticated web filtering with content categorization, policy enforcement, and bandwidth management for secure and productive internet access at branch locations.",
      ctaText: "Filter web content",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "security-logging",
      image: "/edge-shield.svg",
      title: "Comprehensive Security Logging",
      description: "Enterprise-grade security logging with real-time monitoring, SIEM integration, and forensic analysis capabilities for complete visibility into edge security events.",
      ctaText: "Monitor security events",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "edge-gateway",
      title: "Edge Gateway",
      content: {
        title: "Lightweight edge gateway with advanced security features",
        description: "Advanced lightweight edge gateway with high-performance routing, load balancing, and integrated security features optimized for distributed branch deployments.",
        buttons: [
          { text: "Deploy Edge Gateways", href: productUrl, variant: "primary" as const },
          { text: "Edge gateway deployment guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Edge Gateway Features",
          items: [
            "High-performance routing",
            "Load balancing",
            "VPN connectivity",
            "Network segmentation",
            "QoS management",
            "Bandwidth optimization",
            "Failover protection",
            "Remote management"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Edge Gateway Console",
          description: "Edge security gateway deployment and management"
        }
      }
    },
    {
      id: "threat-prevention",
      title: "Threat Prevention",
      content: {
        title: "Advanced threat prevention with real-time malware detection",
        description: "Comprehensive threat prevention with real-time malware detection, intrusion prevention, and behavioral analysis for proactive security at the network edge.",
        buttons: [
          { text: "Prevent Edge Threats", href: productUrl, variant: "primary" as const },
          { text: "Threat prevention best practices", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Threat Prevention Features",
          items: [
            "Real-time malware detection",
            "Intrusion prevention",
            "Behavioral analysis",
            "Signature-based detection",
            "Anomaly detection",
            "Zero-day protection",
            "Threat intelligence",
            "Automated response"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Threat Prevention Console",
          description: "Edge threat detection and prevention management"
        }
      }
    },
    {
      id: "web-filtering",
      title: "Web Filtering",
      content: {
        title: "Intelligent web filtering with content categorization",
        description: "Sophisticated web filtering with content categorization, policy enforcement, and bandwidth management for secure and productive internet access.",
        buttons: [
          { text: "Filter Web Content", href: productUrl, variant: "primary" as const },
          { text: "Web filtering policies guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Web Filtering Features",
          items: [
            "Content categorization",
            "Policy enforcement",
            "Bandwidth management",
            "URL filtering",
            "Application control",
            "Time-based policies",
            "User authentication",
            "Reporting dashboard"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Web Filtering Interface",
          description: "Web content filtering and policy management"
        }
      }
    },
    {
      id: "security-logging",
      title: "Security Logging",
      content: {
        title: "Comprehensive security logging with SIEM integration",
        description: "Enterprise-grade security logging with real-time monitoring, SIEM integration, and forensic analysis capabilities for complete visibility into edge security events.",
        buttons: [
          { text: "Monitor Security Events", href: productUrl, variant: "primary" as const },
          { text: "Security logging guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Security Logging Features",
          items: [
            "Real-time monitoring",
            "SIEM integration",
            "Forensic analysis",
            "Event correlation",
            "Alert management",
            "Compliance reporting",
            "Log aggregation",
            "Data retention"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Security Logging Center",
          description: "Edge security event monitoring and analysis"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Lightweight edge gateway with advanced security integration",
      description: "Advanced lightweight edge gateway with high-performance routing, load balancing, and integrated security features optimized for distributed branch deployments and edge computing.",
      link: {
        text: "Learn about edge security",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Comprehensive threat prevention with real-time malware detection",
      description: "Advanced threat prevention with real-time malware detection, intrusion prevention, and behavioral analysis for proactive security at the network edge and branch locations."
    },
    {
      number: "03",
      title: "Intelligent web filtering with content categorization and policies", 
      description: "Sophisticated web filtering with content categorization, policy enforcement, and bandwidth management for secure and productive internet access at distributed locations."
    },
    {
      number: "04",
      title: "Enterprise security logging with SIEM integration and forensics",
      description: "Comprehensive security logging with real-time monitoring, SIEM integration, and forensic analysis capabilities for complete visibility into edge security events and compliance."
    }
  ];

  const customerReference = {
    title: "Edge Security Transformation",
    company: "Multi-location enterprise secures 150+ branch offices with 99.9% threat detection and zero security incidents",
    description: "A distributed enterprise transformed their branch security using EdgeShield, achieving comprehensive threat protection while maintaining operational efficiency and user productivity.",
    image: "/edge-shield.svg",
    linkText: "Read the edge security story",
    linkHref: docsUrl
  };

  const customerLogos = [
    {
      name: "pfSense",
      image: "https://logo.clearbit.com/pfsense.org",
      href: docsUrl,
      alt: "pfSense logo"
    },
    {
      name: "OPNsense",
      image: "https://logo.clearbit.com/opnsense.org",
      href: docsUrl,
      alt: "OPNsense logo"
    },
    {
      name: "Fortinet",
      image: "https://logo.clearbit.com/fortinet.com",
      href: docsUrl, 
      alt: "Fortinet logo"
    },
    {
      name: "SonicWall",
      image: "https://logo.clearbit.com/sonicwall.com",
      href: docsUrl,
      alt: "SonicWall logo"
    },
    {
      name: "Palo Alto", 
      image: "https://logo.clearbit.com/paloaltonetworks.com",
      href: docsUrl,
      alt: "Palo Alto logo"
    },
    {
      name: "Sophos",
      image: "https://logo.clearbit.com/sophos.com",
      href: docsUrl,
      alt: "Sophos logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in EdgeShield",
      content: {
        title: "Latest edge security and threat prevention features",
        description: "Stay updated with the newest capabilities in edge security, threat prevention, and web filtering for modern distributed networks and branch office protection.",
        image: "/edge-shield.svg",
        links: [
          { text: "New security features", href: docsUrl },
          { text: "Threat prevention improvements", href: docsUrl },
          { text: "Web filtering enhancements", href: docsUrl },
          { text: "Logging system updates", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare edge security solutions",
      content: {
        title: "Why choose EdgeShield",
        description: "Compare our edge security capabilities with other solutions and see why enterprises choose us for comprehensive branch protection and threat prevention.",
        image: "/edge-shield.svg",
        links: [
          { text: "Edge security comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master EdgeShield",
      content: {
        title: "Learn edge security and threat prevention best practices",
        description: "Master edge security with comprehensive guides, threat prevention strategies, and training materials for network administrators and security professionals.",
        image: "/edge-shield.svg",
        links: [
          { text: "Edge security deployment guide", href: docsUrl },
          { text: "Threat prevention best practices", href: docsUrl },
          { text: "Web filtering optimization strategies", href: docsUrl },
          { text: "Troubleshooting guide", href: docsUrl }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Deploy edge security",
      href: productUrl,
      icon: "demo"
    },
    {
      title: "Configure threat prevention",
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
        <h1 className="sr-only">EdgeShield | Edge Gateway Threat Prevention Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="EdgeShield"
          description="Lightweight edge gateway with threat prevention, web filtering, and logging for branch deployments with comprehensive security. Advanced edge security platform with real-time threat detection and intelligent content filtering for distributed enterprises."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Edge Security Console",
            description: "Edge gateway security and threat prevention management"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="EdgeShield" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose EdgeShield?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Edge security success stories"
          description="Learn why distributed enterprises and security professionals choose EdgeShield for comprehensive edge protection and advanced threat prevention capabilities."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Edge Security Guide"
          description="We've compiled edge security strategies, threat prevention techniques, and web filtering best practices for modern distributed networks and branch office protection."
          image="/edge-shield.svg"
          buttonText="Get the edge security guide"
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
