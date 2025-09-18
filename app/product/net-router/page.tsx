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

export default function NetRouterPage() {
  const { productUrl, docsUrl } = getAppUrls("net-router");
  
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
      id: "virtual-routing",
      image: "/net-router.svg",
      title: "Universal Virtual Routing",
      description: "Cloud-native virtual router with advanced routing protocols, dynamic path selection, and multi-cloud connectivity for modern network architectures.",
      ctaText: "Explore virtual routing",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "sdn-controller",
      image: "/net-router.svg",
      title: "Advanced SDN Controller",
      description: "Software-defined networking control plane with centralized management, policy enforcement, and automated network orchestration capabilities.",
      ctaText: "Learn about SDN",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "multi-cloud-networking",
      image: "/net-router.svg",
      title: "Multi-Cloud Network Integration",
      description: "Seamless connectivity across multiple cloud providers with unified routing policies, cross-cloud optimization, and hybrid network management.",
      ctaText: "View multi-cloud features",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "network-automation",
      image: "/net-router.svg",
      title: "Intelligent Network Automation",
      description: "Automated network provisioning, configuration management, and policy enforcement with AI-driven optimization and self-healing capabilities.",
      ctaText: "See automation features",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "virtual-routing",
      title: "Virtual Routing",
      content: {
        title: "Advanced virtual routing and network connectivity",
        description: "Cloud-native virtual router with support for advanced routing protocols, dynamic path selection, and intelligent traffic engineering for optimal network performance.",
        buttons: [
          { text: "Deploy Router", href: productUrl, variant: "primary" as const },
          { text: "Routing protocols", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Virtual Routing Features",
          items: [
            "BGP & OSPF support",
            "Dynamic routing",
            "Load balancing",
            "Failover mechanisms",
            "Traffic engineering",
            "Route optimization",
            "Multi-path routing",
            "Performance monitoring"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Network Routing Dashboard",
          description: "Virtual router configuration and network topology management"
        }
      }
    },
    {
      id: "sdn-control",
      title: "SDN Control Plane",
      content: {
        title: "Software-defined networking control and orchestration",
        description: "Centralized SDN control plane with policy management, network orchestration, and automated configuration for modern software-defined networks.",
        buttons: [
          { text: "Configure SDN", href: productUrl, variant: "primary" as const },
          { text: "SDN architecture guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "SDN Control Features",
          items: [
            "Centralized control plane",
            "Policy management",
            "Network orchestration",
            "Flow control",
            "Service chaining",
            "Network slicing",
            "Automated provisioning",
            "API-driven management"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "SDN Control Console",
          description: "Software-defined networking control and policy management"
        }
      }
    },
    {
      id: "hybrid-connectivity",
      title: "Hybrid Connectivity",
      content: {
        title: "Multi-cloud and hybrid network connectivity solutions",
        description: "Seamless connectivity across on-premises, cloud, and hybrid environments with unified routing policies and cross-platform network management.",
        buttons: [
          { text: "Setup Hybrid Network", href: productUrl, variant: "primary" as const },
          { text: "Hybrid networking guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Hybrid Connectivity Features",
          items: [
            "Multi-cloud routing",
            "Hybrid network integration",
            "Cross-platform connectivity",
            "Unified policy management",
            "Cloud-native deployment",
            "Edge connectivity",
            "WAN optimization",
            "Network segmentation"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Hybrid Network Configuration",
          description: "Multi-cloud and hybrid network connectivity setup"
        }
      }
    },
    {
      id: "network-automation",
      title: "Network Automation",
      content: {
        title: "Intelligent network automation and orchestration",
        description: "Automated network provisioning, configuration management, and policy enforcement with AI-driven optimization and self-healing network capabilities.",
        buttons: [
          { text: "Automate Networks", href: productUrl, variant: "primary" as const },
          { text: "Automation playbooks", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Network Automation Features",
          items: [
            "Automated provisioning",
            "Configuration management",
            "Policy enforcement",
            "Self-healing networks",
            "AI-driven optimization",
            "Workflow orchestration",
            "Change management",
            "Compliance automation"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Network Automation Console",
          description: "Intelligent network automation and orchestration interface"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Universal virtual routing with advanced protocol support",
      description: "Cloud-native virtual router supporting BGP, OSPF, and advanced routing protocols with dynamic path selection and intelligent traffic engineering capabilities.",
      link: {
        text: "Learn about virtual routing",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Comprehensive SDN control plane and orchestration",
      description: "Centralized software-defined networking control with policy management, network orchestration, and automated configuration for modern network architectures."
    },
    {
      number: "03",
      title: "Multi-cloud and hybrid network connectivity", 
      description: "Seamless connectivity across multiple cloud providers and hybrid environments with unified routing policies and cross-platform network management."
    },
    {
      number: "04",
      title: "Intelligent network automation and self-healing capabilities",
      description: "Automated network provisioning, configuration management, and AI-driven optimization with self-healing capabilities for resilient network operations."
    }
  ];

  const customerReference = {
    title: "Network Transformation Success",
    company: "Enterprise reduces network complexity by 60% with unified routing",
    description: "A global enterprise transformed their network infrastructure using NetRouter, achieving significant complexity reduction while improving performance and reliability across multi-cloud environments.",
    image: "/net-router.svg",
    linkText: "Read the network transformation story",
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
      name: "Cisco",
      image: "https://logo.clearbit.com/cisco.com",
      href: docsUrl,
      alt: "Cisco logo"
    },
    {
      name: "Juniper Networks",
      image: "https://logo.clearbit.com/juniper.net",
      href: docsUrl, 
      alt: "Juniper Networks logo"
    },
    {
      name: "Arista Networks",
      image: "https://logo.clearbit.com/arista.com",
      href: docsUrl,
      alt: "Arista Networks logo"
    },
    {
      name: "Cumulus Networks", 
      image: "https://logo.clearbit.com/cumulusnetworks.com",
      href: docsUrl,
      alt: "Cumulus Networks logo"
    },
    {
      name: "Big Switch Networks",
      image: "https://logo.clearbit.com/bigswitch.com",
      href: docsUrl,
      alt: "Big Switch Networks logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in NetRouter",
      content: {
        title: "Latest routing and SDN features",
        description: "Stay updated with the newest capabilities in virtual routing, SDN control, and network automation for modern cloud-native networking environments.",
        image: "/net-router.svg",
        links: [
          { text: "New routing features", href: docsUrl },
          { text: "SDN improvements", href: docsUrl },
          { text: "Automation enhancements", href: docsUrl },
          { text: "Multi-cloud updates", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare routing solutions",
      content: {
        title: "Why choose NetRouter",
        description: "Compare our virtual routing and SDN capabilities with other solutions and see why network engineers choose us for modern network infrastructure and automation.",
        image: "/net-router.svg",
        links: [
          { text: "Routing solution comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master NetRouter",
      content: {
        title: "Learn network routing best practices",
        description: "Master virtual routing and SDN with comprehensive guides, best practices, and training materials for network engineers and infrastructure professionals.",
        image: "/net-router.svg",
        links: [
          { text: "Network routing guide", href: docsUrl },
          { text: "SDN implementation best practices", href: docsUrl },
          { text: "Automation strategies", href: docsUrl },
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
      title: "Contact network team",
      href: productUrl,
      icon: "contact"
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="sr-only">NetRouter | Universal Virtual Router & SDN Controller</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="NetRouter"
          description="Universal virtual router and SDN controller for cloud-native routing and software-defined networking. Advanced multi-cloud connectivity with intelligent automation, hybrid network integration, and comprehensive network orchestration capabilities."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Network Management Console",
            description: "Virtual routing and SDN control plane management interface"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="NetRouter" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose NetRouter?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Network infrastructure success stories"
          description="Learn why network engineers and infrastructure professionals choose NetRouter for advanced virtual routing and software-defined networking capabilities."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Network Engineering Guide"
          description="We've compiled routing strategies, SDN implementation techniques, and network automation best practices for modern cloud-native infrastructure and multi-cloud environments."
          image="/net-router.svg"
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
