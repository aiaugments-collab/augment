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

export default function CloudRouterPage() {
  const { productUrl, docsUrl } = getAppUrls("cloud-router");
  
  const ctaButtons = [
    {
      text: "Deploy Router",
      href: productUrl,
      variant: "primary" as const
    },
    {
      text: "Routing Guide",
      href: docsUrl,
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "high-performance-routing",
      image: "/cloud-router.svg",
      title: "High-Performance Cloud Routing",
      description: "Optimized virtual router for cloud environments with advanced packet processing, low-latency routing, and high-throughput performance for enterprise networks.",
      ctaText: "Deploy high-performance router",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "multi-region-peering",
      image: "/cloud-router.svg",
      title: "Multi-Region Network Peering",
      description: "Seamless multi-region connectivity with intelligent peering, traffic optimization, and automated failover for global network architectures.",
      ctaText: "Setup multi-region peering",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "bgp-automation",
      image: "/cloud-router.svg",
      title: "Automated BGP Management",
      description: "Intelligent BGP automation with route optimization, policy management, and dynamic routing configuration for scalable network operations.",
      ctaText: "Configure BGP automation",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "cloud-optimization",
      image: "/cloud-router.svg",
      title: "Cloud-Native Optimization",
      description: "Purpose-built for cloud environments with elastic scaling, API-driven configuration, and native cloud service integration for modern architectures.",
      ctaText: "Optimize for cloud",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "virtual-routing",
      title: "Virtual Routing",
      content: {
        title: "High-performance virtual routing platform",
        description: "Advanced virtual routing with optimized packet processing, intelligent traffic engineering, and high-throughput performance for enterprise cloud networks.",
        buttons: [
          { text: "Deploy Virtual Router", href: productUrl, variant: "primary" as const },
          { text: "Routing configuration", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Virtual Routing Features",
          items: [
            "High-performance packet processing",
            "Advanced routing protocols",
            "Traffic engineering",
            "Quality of Service",
            "Load balancing",
            "Failover automation",
            "Performance monitoring",
            "Route optimization"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Virtual Router Console",
          description: "High-performance cloud routing and traffic management"
        }
      }
    },
    {
      id: "network-peering",
      title: "Network Peering",
      content: {
        title: "Intelligent multi-region network peering platform",
        description: "Advanced network peering with multi-region connectivity, intelligent route selection, and automated peering management for global network architectures.",
        buttons: [
          { text: "Setup Network Peering", href: productUrl, variant: "primary" as const },
          { text: "Peering best practices", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Network Peering Features",
          items: [
            "Multi-region connectivity",
            "Intelligent route selection",
            "Automated peering",
            "Traffic optimization",
            "Bandwidth management",
            "Latency optimization",
            "Peering analytics",
            "Cost optimization"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Network Peering Management",
          description: "Multi-region peering and connectivity optimization"
        }
      }
    },
    {
      id: "bgp-management",
      title: "BGP Management",
      content: {
        title: "Advanced BGP automation and policy management",
        description: "Comprehensive BGP management with automated configuration, policy enforcement, and route optimization for scalable and reliable network operations.",
        buttons: [
          { text: "Configure BGP", href: productUrl, variant: "primary" as const },
          { text: "BGP automation guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "BGP Management Features",
          items: [
            "Automated BGP configuration",
            "Policy management",
            "Route filtering",
            "Prefix optimization",
            "Neighbor management",
            "Path selection",
            "Route monitoring",
            "Compliance checking"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "BGP Configuration Interface",
          description: "Automated BGP management and policy configuration"
        }
      }
    },
    {
      id: "cloud-integration",
      title: "Cloud Integration",
      content: {
        title: "Native cloud service integration and orchestration",
        description: "Seamless cloud integration with native service connectivity, API-driven configuration, and elastic scaling for modern cloud-native network architectures.",
        buttons: [
          { text: "Integrate Cloud Services", href: productUrl, variant: "primary" as const },
          { text: "Cloud integration guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Cloud Integration Features",
          items: [
            "Native cloud connectivity",
            "API-driven configuration",
            "Elastic scaling",
            "Auto-provisioning",
            "Service mesh integration",
            "Container networking",
            "Kubernetes support",
            "Multi-cloud support"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Cloud Integration Center",
          description: "Native cloud service integration and network orchestration"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "High-performance virtual routing optimized for cloud",
      description: "Advanced virtual routing platform with optimized packet processing, intelligent traffic engineering, and high-throughput performance designed specifically for cloud environments.",
      link: {
        text: "Learn about cloud routing performance",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Intelligent multi-region peering with automation",
      description: "Seamless multi-region connectivity with automated peering management, intelligent route selection, and traffic optimization for global network architectures."
    },
    {
      number: "03",
      title: "Advanced BGP automation and policy management", 
      description: "Comprehensive BGP automation with intelligent configuration, policy enforcement, and route optimization for scalable and reliable network operations."
    },
    {
      number: "04",
      title: "Cloud-native integration with elastic scaling",
      description: "Purpose-built for cloud environments with native service integration, API-driven configuration, and elastic scaling for modern cloud-native architectures."
    }
  ];

  const customerReference = {
    title: "Network Performance Transformation",
    company: "Global enterprise achieves 50% latency reduction with optimized cloud routing",
    description: "A multinational corporation transformed their global network performance using CloudRouter, achieving significant latency improvements while reducing operational complexity and costs.",
    image: "/cloud-router.svg",
    linkText: "Read the network performance story",
    linkHref: docsUrl
  };

  const customerLogos = [
    {
      name: "VyOS",
      image: "https://logo.clearbit.com/vyos.io",
      href: docsUrl,
      alt: "VyOS logo"
    },
    {
      name: "Cisco IOS XR",
      image: "https://logo.clearbit.com/cisco.com",
      href: docsUrl,
      alt: "Cisco IOS XR logo"
    },
    {
      name: "Juniper Junos",
      image: "https://logo.clearbit.com/juniper.net",
      href: docsUrl, 
      alt: "Juniper Junos logo"
    },
    {
      name: "Arista EOS",
      image: "https://logo.clearbit.com/arista.com",
      href: docsUrl,
      alt: "Arista EOS logo"
    },
    {
      name: "BIRD", 
      image: "https://logo.clearbit.com/bird.network.cz",
      href: docsUrl,
      alt: "BIRD logo"
    },
    {
      name: "FRR",
      image: "https://logo.clearbit.com/frrouting.org",
      href: docsUrl,
      alt: "FRR logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in CloudRouter",
      content: {
        title: "Latest cloud routing and networking features",
        description: "Stay updated with the newest capabilities in cloud routing, BGP automation, and network peering for modern cloud-native network infrastructures.",
        image: "/cloud-router.svg",
        links: [
          { text: "New routing features", href: docsUrl },
          { text: "Performance improvements", href: docsUrl },
          { text: "BGP automation updates", href: docsUrl },
          { text: "Cloud integration enhancements", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare cloud routing solutions",
      content: {
        title: "Why choose CloudRouter",
        description: "Compare our cloud routing capabilities with other solutions and see why network engineers choose us for high-performance routing and cloud optimization.",
        image: "/cloud-router.svg",
        links: [
          { text: "Cloud routing comparison", href: docsUrl },
          { text: "Performance comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master CloudRouter",
      content: {
        title: "Learn cloud routing best practices",
        description: "Master cloud networking with comprehensive guides, routing strategies, and training materials for network engineers and cloud architects.",
        image: "/cloud-router.svg",
        links: [
          { text: "Cloud routing deployment guide", href: docsUrl },
          { text: "BGP automation best practices", href: docsUrl },
          { text: "Network optimization strategies", href: docsUrl },
          { text: "Troubleshooting guide", href: docsUrl }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Deploy router",
      href: productUrl,
      icon: "demo"
    },
    {
      title: "Routing guide",
      href: docsUrl,
      icon: "tour"
    },
    {
      title: "Contact network team",
      href: productUrl,
      icon: "contact"
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="sr-only">CloudRouter | High-Performance Cloud Routing Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="CloudRouter"
          description="Virtual router optimized for cloud performance, multi-region peering, and BGP automation with intelligent traffic engineering. High-performance cloud routing platform with advanced packet processing and native cloud service integration."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Cloud Routing Console",
            description: "High-performance virtual routing and network management"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="CloudRouter" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose CloudRouter?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Cloud routing success stories"
          description="Learn why network engineers and cloud architects choose CloudRouter for high-performance routing and cloud-native network optimization."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Cloud Networking Guide"
          description="We've compiled cloud routing strategies, BGP automation techniques, and network optimization best practices for modern cloud-native network infrastructures."
          image="/cloud-router.svg"
          buttonText="Get the networking guide"
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
