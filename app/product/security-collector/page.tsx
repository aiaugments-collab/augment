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

export default function SecurityCollectorPage() {
  const { productUrl, docsUrl } = getAppUrls("security-collector");
  
  const ctaButtons = [
    {
      text: "Start AI Threat Hunting",
      href: productUrl,
      variant: "primary" as const
    },
    {
      text: "AI Threat Intelligence",
      href: docsUrl,
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "security-log-collection",
      image: "/guard-collector.svg",
      title: "Centralized Security Log Collection",
      description: "Comprehensive security log collection from firewalls, intrusion detection systems, endpoint protection, and network devices with real-time aggregation.",
      ctaText: "Collect security logs",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "event-normalization",
      image: "/guard-collector.svg",
      title: "Intelligent Event Normalization",
      description: "Advanced event normalization with automated parsing, field mapping, and standardized formats for consistent security event processing and analysis.",
      ctaText: "Normalize security events",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "siem-forwarding",
      image: "/guard-collector.svg",
      title: "SIEM & Analytics Integration",
      description: "Seamless integration with SIEM platforms and analytics layers with real-time forwarding, correlation support, and enriched security context.",
      ctaText: "Integrate with SIEM",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "threat-enrichment",
      image: "/guard-collector.svg",
      title: "Security Event Enrichment",
      description: "Enhanced security intelligence with threat intelligence feeds, geolocation data, and contextual enrichment for improved threat detection and response.",
      ctaText: "Enrich security events",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "log-collection",
      title: "Log Collection",
      content: {
        title: "Comprehensive security log collection and aggregation",
        description: "Advanced security log collection from diverse security devices with real-time aggregation, filtering, and centralized management for comprehensive security visibility.",
        buttons: [
          { text: "Setup Log Collection", href: productUrl, variant: "primary" as const },
          { text: "Collection configuration", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Log Collection Features",
          items: [
            "Multi-device support",
            "Real-time collection",
            "Secure transport",
            "Log filtering",
            "Compression & encryption",
            "Rate limiting",
            "Buffer management",
            "Failover mechanisms"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Security Log Collection Console",
          description: "Centralized security log aggregation and management"
        }
      }
    },
    {
      id: "event-processing",
      title: "Event Processing",
      content: {
        title: "Advanced security event normalization and processing",
        description: "Sophisticated event processing with automated parsing, field mapping, normalization, and standardized formats for consistent security event analysis.",
        buttons: [
          { text: "Process Security Events", href: productUrl, variant: "primary" as const },
          { text: "Processing rules", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Event Processing Features",
          items: [
            "Automated parsing",
            "Field mapping",
            "Event normalization",
            "Schema validation",
            "Data enrichment",
            "Custom rules",
            "Pattern matching",
            "Performance optimization"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Event Processing Console",
          description: "Security event normalization and processing management"
        }
      }
    },
    {
      id: "siem-integration",
      title: "SIEM Integration",
      content: {
        title: "Seamless SIEM and analytics platform integration",
        description: "Advanced SIEM integration with real-time forwarding, correlation support, and enriched security context for enhanced threat detection and incident response.",
        buttons: [
          { text: "Integrate SIEM", href: productUrl, variant: "primary" as const },
          { text: "SIEM connectors", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "SIEM Integration Features",
          items: [
            "Real-time forwarding",
            "SIEM connectors",
            "Correlation support",
            "Alert management",
            "Dashboard integration",
            "API connectivity",
            "Data enrichment",
            "Performance monitoring"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "SIEM Integration Interface",
          description: "Security platform integration and forwarding management"
        }
      }
    },
    {
      id: "threat-intelligence",
      title: "Threat Intelligence",
      content: {
        title: "Security intelligence and threat enrichment platform",
        description: "Advanced threat intelligence integration with enriched security context, threat feeds, and intelligence correlation for enhanced security analysis and response.",
        buttons: [
          { text: "Enable Threat Intelligence", href: productUrl, variant: "primary" as const },
          { text: "Intelligence feeds", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Threat Intelligence Features",
          items: [
            "Threat feed integration",
            "Intelligence correlation",
            "Geolocation enrichment",
            "IOC matching",
            "Risk scoring",
            "Contextual analysis",
            "Threat hunting",
            "Intelligence sharing"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Threat Intelligence Center",
          description: "Security intelligence and threat enrichment management"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Comprehensive security log collection from diverse devices",
      description: "Advanced security log collection from firewalls, IDS/IPS, endpoint protection, and network devices with real-time aggregation and centralized management.",
      link: {
        text: "Learn about log collection",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Intelligent event normalization with automated processing",
      description: "Sophisticated event processing with automated parsing, field mapping, normalization, and standardized formats for consistent security event analysis and correlation."
    },
    {
      number: "03",
      title: "Seamless SIEM integration with real-time forwarding", 
      description: "Advanced SIEM platform integration with real-time forwarding, correlation support, and enriched security context for enhanced threat detection and incident response."
    },
    {
      number: "04",
      title: "Enhanced threat intelligence with contextual enrichment",
      description: "Advanced threat intelligence integration with enriched security context, threat feeds, and intelligence correlation for improved security analysis and threat hunting."
    }
  ];

  const customerReference = {
    title: "Security Operations Transformation",
    company: "SOC team improves threat detection by 65% with centralized security log collection",
    description: "A large enterprise transformed their security operations using GuardCollector, achieving enhanced threat detection while reducing SIEM processing overhead and improving response times.",
    image: "/guard-collector.svg",
    linkText: "Read the security operations story",
    linkHref: docsUrl
  };

  const customerLogos = [
    {
      name: "Wazuh",
      image: "https://logo.clearbit.com/wazuh.com",
      href: docsUrl,
      alt: "Wazuh logo"
    },
    {
      name: "Elastic Security",
      image: "https://logo.clearbit.com/elastic.co",
      href: docsUrl,
      alt: "Elastic Security logo"
    },
    {
      name: "Splunk",
      image: "https://logo.clearbit.com/splunk.com",
      href: docsUrl, 
      alt: "Splunk logo"
    },
    {
      name: "IBM QRadar",
      image: "https://logo.clearbit.com/ibm.com",
      href: docsUrl,
      alt: "IBM QRadar logo"
    },
    {
      name: "Logstash", 
      image: "https://logo.clearbit.com/elastic.co",
      href: docsUrl,
      alt: "Logstash logo"
    },
    {
      name: "Fluentd",
      image: "https://logo.clearbit.com/fluentd.org",
      href: docsUrl,
      alt: "Fluentd logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in GuardCollector",
      content: {
        title: "Latest security log collection and SIEM integration features",
        description: "Stay updated with the newest capabilities in security log collection, event normalization, and SIEM integration for modern security operations centers.",
        image: "/guard-collector.svg",
        links: [
          { text: "New collection features", href: docsUrl },
          { text: "Event processing improvements", href: docsUrl },
          { text: "SIEM integration updates", href: docsUrl },
          { text: "Threat intelligence enhancements", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare security collection solutions",
      content: {
        title: "Why choose GuardCollector",
        description: "Compare our security log collection capabilities with other solutions and see why SOC teams choose us for comprehensive security event aggregation and SIEM integration.",
        image: "/guard-collector.svg",
        links: [
          { text: "Security collection comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master GuardCollector",
      content: {
        title: "Learn security log collection best practices",
        description: "Master security log management with comprehensive guides, SIEM integration strategies, and training materials for security analysts and SOC engineers.",
        image: "/guard-collector.svg",
        links: [
          { text: "Security collection deployment guide", href: docsUrl },
          { text: "SIEM integration best practices", href: docsUrl },
          { text: "Event normalization strategies", href: docsUrl },
          { text: "Troubleshooting guide", href: docsUrl }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Collect security logs",
      href: productUrl,
      icon: "demo"
    },
    {
      title: "SIEM integration",
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
        <h1 className="sr-only">GuardCollector | Security Event & Log Aggregation Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="AI ThreatHunter"
          description="AI-powered threat hunting tool that proactively searches for security threats, analyzes attack patterns, and provides intelligent response recommendations. Uses behavioral analysis and threat intelligence to identify advanced persistent threats."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Security Collection Console",
            description: "Centralized security log and event aggregation management"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="GuardCollector" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose GuardCollector?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Security operations success stories"
          description="Learn why security analysts and SOC engineers choose GuardCollector for comprehensive security log collection and SIEM integration capabilities."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Security Operations Guide"
          description="We've compiled security log collection strategies, SIEM integration techniques, and event normalization best practices for modern security operations centers and threat detection."
          image="/guard-collector.svg"
          buttonText="Get the security operations guide"
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
