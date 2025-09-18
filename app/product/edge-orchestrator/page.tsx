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

export default function EdgeOrchestratorPage() {
  const { productUrl, docsUrl } = getAppUrls("edge-orchestrator");
  
  const ctaButtons = [
    {
      text: "Start Free Trial",
      href: productUrl,
      variant: "primary" as const
    },
    {
      text: "View Documentation",
      href: docsUrl,
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "sd-wan-management",
      image: "/edge-orchestrator.svg",
      title: "Advanced SD-WAN Management",
      description: "Comprehensive SD-WAN orchestration with centralized policy management, dynamic path selection, and intelligent traffic optimization across edge locations.",
      ctaText: "Explore SD-WAN features",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "edge-device-management",
      image: "/edge-orchestrator.svg",
      title: "Centralized Edge Device Management",
      description: "Manage thousands of edge devices from a single console with automated provisioning, configuration management, and remote monitoring capabilities.",
      ctaText: "Learn about device management",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "secure-routing",
      image: "/edge-orchestrator.svg",
      title: "Secure Edge Routing & Connectivity",
      description: "Secure routing across edge locations with encrypted tunnels, zero-trust networking, and advanced security policies for distributed infrastructure.",
      ctaText: "View security features",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "network-optimization",
      image: "/edge-orchestrator.svg",
      title: "Intelligent Network Optimization",
      description: "AI-driven network optimization with real-time performance monitoring, adaptive routing, and automated quality of service management.",
      ctaText: "See optimization features",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "sd-wan-orchestration",
      title: "SD-WAN Orchestration",
      content: {
        title: "Comprehensive SD-WAN orchestration and management",
        description: "Advanced SD-WAN orchestration with centralized policy management, dynamic path selection, and intelligent traffic engineering for optimal edge connectivity.",
        buttons: [
          { text: "Deploy SD-WAN", href: productUrl, variant: "primary" as const },
          { text: "SD-WAN architecture", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "SD-WAN Orchestration Features",
          items: [
            "Centralized policy management",
            "Dynamic path selection",
            "Traffic engineering",
            "Quality of Service (QoS)",
            "Application-aware routing",
            "Bandwidth optimization",
            "Failover mechanisms",
            "Performance analytics"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "SD-WAN Management Dashboard",
          description: "Comprehensive SD-WAN orchestration and policy management"
        }
      }
    },
    {
      id: "edge-management",
      title: "Edge Device Management",
      content: {
        title: "Scalable edge device management and orchestration",
        description: "Manage thousands of edge devices with automated provisioning, configuration management, firmware updates, and comprehensive monitoring capabilities.",
        buttons: [
          { text: "Manage Edge Devices", href: productUrl, variant: "primary" as const },
          { text: "Device management guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Edge Device Management Features",
          items: [
            "Automated device provisioning",
            "Configuration management",
            "Firmware update automation",
            "Remote monitoring",
            "Device health tracking",
            "Bulk operations",
            "Compliance reporting",
            "Lifecycle management"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Edge Device Console",
          description: "Centralized edge device management and monitoring interface"
        }
      }
    },
    {
      id: "secure-connectivity",
      title: "Secure Connectivity",
      content: {
        title: "Zero-trust security and encrypted edge connectivity",
        description: "Implement zero-trust networking with encrypted tunnels, advanced security policies, and comprehensive threat protection across all edge locations.",
        buttons: [
          { text: "Secure Edge Network", href: productUrl, variant: "primary" as const },
          { text: "Security best practices", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Secure Connectivity Features",
          items: [
            "Zero-trust networking",
            "Encrypted tunnel management",
            "Advanced security policies",
            "Threat protection",
            "Identity-based access",
            "Micro-segmentation",
            "Security monitoring",
            "Compliance enforcement"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Security Policy Configuration",
          description: "Zero-trust security and edge connectivity management"
        }
      }
    },
    {
      id: "performance-optimization",
      title: "Performance Optimization",
      content: {
        title: "AI-driven network performance optimization and monitoring",
        description: "Optimize edge network performance with AI-driven analytics, real-time monitoring, and automated optimization for superior user experience.",
        buttons: [
          { text: "Optimize Performance", href: productUrl, variant: "primary" as const },
          { text: "Performance tuning guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Performance Optimization Features",
          items: [
            "AI-driven optimization",
            "Real-time performance monitoring",
            "Adaptive routing algorithms",
            "Latency optimization",
            "Bandwidth management",
            "Application acceleration",
            "Network analytics",
            "Predictive insights"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Performance Analytics Console",
          description: "AI-driven network performance optimization and monitoring"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Comprehensive SD-WAN orchestration and management",
      description: "Advanced SD-WAN orchestration with centralized policy management, dynamic path selection, and intelligent traffic engineering for optimal edge connectivity and performance.",
      link: {
        text: "Learn about SD-WAN orchestration",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Scalable edge device management at enterprise scale",
      description: "Manage thousands of edge devices from a single console with automated provisioning, configuration management, and comprehensive monitoring capabilities."
    },
    {
      number: "03",
      title: "Zero-trust security with encrypted edge connectivity", 
      description: "Implement zero-trust networking principles with encrypted tunnels, advanced security policies, and comprehensive threat protection across distributed edge locations."
    },
    {
      number: "04",
      title: "AI-driven network optimization and performance analytics",
      description: "Optimize edge network performance with AI-driven analytics, real-time monitoring, and automated optimization for superior user experience and efficiency."
    }
  ];

  const customerReference = {
    title: "Edge Network Transformation",
    company: "Retail chain improves edge performance by 80% with SD-WAN orchestration",
    description: "A major retail chain transformed their edge networking using Edge Orchestrator, achieving dramatic performance improvements while reducing complexity across hundreds of store locations.",
    image: "/edge-orchestrator.svg",
    linkText: "Read the edge transformation story",
    linkHref: docsUrl
  };

  const customerLogos = [
    {
      name: "OpenWrt",
      image: "https://logo.clearbit.com/openwrt.org",
      href: docsUrl,
      alt: "OpenWrt logo"
    },
    {
      name: "Silver Peak",
      image: "https://logo.clearbit.com/silver-peak.com",
      href: docsUrl,
      alt: "Silver Peak logo"
    },
    {
      name: "VMware VeloCloud",
      image: "https://logo.clearbit.com/vmware.com",
      href: docsUrl, 
      alt: "VMware VeloCloud logo"
    },
    {
      name: "Cisco Meraki",
      image: "https://logo.clearbit.com/meraki.cisco.com",
      href: docsUrl,
      alt: "Cisco Meraki logo"
    },
    {
      name: "Fortinet", 
      image: "https://logo.clearbit.com/fortinet.com",
      href: docsUrl,
      alt: "Fortinet logo"
    },
    {
      name: "Aruba Networks",
      image: "https://logo.clearbit.com/arubanetworks.com",
      href: docsUrl,
      alt: "Aruba Networks logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in Edge Orchestrator",
      content: {
        title: "Latest SD-WAN and edge networking features",
        description: "Stay updated with the newest capabilities in SD-WAN orchestration, edge device management, and network optimization for modern distributed infrastructure.",
        image: "/edge-orchestrator.svg",
        links: [
          { text: "New SD-WAN features", href: docsUrl },
          { text: "Edge management updates", href: docsUrl },
          { text: "Security enhancements", href: docsUrl },
          { text: "Performance improvements", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare SD-WAN solutions",
      content: {
        title: "Why choose Edge Orchestrator",
        description: "Compare our SD-WAN and edge networking capabilities with other solutions and see why network architects choose us for comprehensive edge orchestration.",
        image: "/edge-orchestrator.svg",
        links: [
          { text: "SD-WAN solution comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master Edge Orchestrator",
      content: {
        title: "Learn SD-WAN and edge networking best practices",
        description: "Master SD-WAN deployment and edge networking with comprehensive guides, best practices, and training materials for network architects and engineers.",
        image: "/edge-orchestrator.svg",
        links: [
          { text: "SD-WAN deployment guide", href: docsUrl },
          { text: "Edge networking best practices", href: docsUrl },
          { text: "Security configuration strategies", href: docsUrl },
          { text: "Troubleshooting guide", href: docsUrl }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Start free trial",
      href: productUrl,
      icon: "demo"
    },
    {
      title: "View documentation",
      href: docsUrl,
      icon: "tour"
    },
    {
      title: "Contact edge team",
      href: productUrl,
      icon: "contact"
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="sr-only">Edge Orchestrator | SD-WAN & Edge Networking Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="Edge Orchestrator"
          description="Comprehensive SD-WAN and edge networking platform for managing edge devices, policies, and secure routing across distributed locations. Advanced orchestration with AI-driven optimization, zero-trust security, and centralized management capabilities."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Edge Network Console",
            description: "SD-WAN orchestration and edge device management interface"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="Edge Orchestrator" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose Edge Orchestrator?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Edge networking success stories"
          description="Learn why network architects and engineers choose Edge Orchestrator for comprehensive SD-WAN orchestration and edge device management capabilities."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The SD-WAN Excellence Guide"
          description="We've compiled SD-WAN deployment strategies, edge networking techniques, and performance optimization best practices for modern distributed infrastructure and edge computing."
          image="/edge-orchestrator.svg"
          buttonText="Get the SD-WAN guide"
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

