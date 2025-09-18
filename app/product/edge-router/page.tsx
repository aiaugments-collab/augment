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

export default function EdgeRouterPage() {
  const { productUrl, docsUrl } = getAppUrls("edge-router");
  
  const ctaButtons = [
    {
      text: "Deploy Edge Router",
      href: productUrl,
      variant: "primary" as const
    },
    {
      text: "Zero-Trust Guide",
      href: docsUrl,
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "zero-trust-networking",
      image: "/edge-router.svg",
      title: "Zero-Trust Network Access Platform",
      description: "Advanced zero-trust networking with secure connectivity, identity verification, and policy-based access control for distributed edge and branch office environments.",
      ctaText: "Enable zero-trust access",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "lightweight-routing",
      image: "/edge-router.svg",
      title: "Lightweight Edge Routing Solution",
      description: "Optimized edge router with minimal resource footprint, high-performance routing, and secure connectivity for branch offices and remote locations.",
      ctaText: "Deploy lightweight router",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "central-management",
      image: "/edge-router.svg",
      title: "Centralized Management & Control",
      description: "Unified management platform with centralized configuration, policy deployment, and monitoring for distributed edge router deployments across locations.",
      ctaText: "Centralize management",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "secure-connectivity",
      image: "/edge-router.svg",
      title: "Secure Branch Office Connectivity",
      description: "Enterprise-grade secure connectivity with encrypted tunnels, VPN integration, and secure access service edge (SASE) capabilities for remote offices.",
      ctaText: "Secure branch connectivity",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "zero-trust-access",
      title: "Zero-Trust Access",
      content: {
        title: "Advanced zero-trust network access and security platform",
        description: "Comprehensive zero-trust networking with secure connectivity, identity verification, and policy-based access control for modern distributed architectures.",
        buttons: [
          { text: "Enable Zero-Trust", href: productUrl, variant: "primary" as const },
          { text: "Zero-trust architecture", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Zero-Trust Access Features",
          items: [
            "Identity verification",
            "Policy-based access",
            "Continuous authentication",
            "Encrypted connectivity",
            "Least privilege access",
            "Device trust verification",
            "Application segmentation",
            "Risk-based policies"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Zero-Trust Access Console",
          description: "Zero-trust network access and security management"
        }
      }
    },
    {
      id: "edge-routing",
      title: "Edge Routing",
      content: {
        title: "Lightweight edge routing and connectivity platform",
        description: "Optimized edge routing with minimal resource requirements, high-performance packet processing, and secure connectivity for branch offices and edge locations.",
        buttons: [
          { text: "Deploy Edge Router", href: productUrl, variant: "primary" as const },
          { text: "Edge routing guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Edge Routing Features",
          items: [
            "Lightweight deployment",
            "High-performance routing",
            "Minimal resource usage",
            "Quality of Service",
            "Traffic optimization",
            "Failover capabilities",
            "Network monitoring",
            "Performance analytics"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Edge Routing Console",
          description: "Edge router deployment and performance management"
        }
      }
    },
    {
      id: "centralized-management",
      title: "Centralized Management",
      content: {
        title: "Unified management platform for distributed edge deployments",
        description: "Comprehensive management platform with centralized configuration, policy deployment, monitoring, and control for distributed edge router networks.",
        buttons: [
          { text: "Manage Edge Network", href: productUrl, variant: "primary" as const },
          { text: "Management best practices", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Centralized Management Features",
          items: [
            "Centralized configuration",
            "Policy deployment",
            "Remote monitoring",
            "Firmware management",
            "Bulk operations",
            "Health monitoring",
            "Alert management",
            "Reporting dashboards"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Centralized Management Interface",
          description: "Distributed edge router management and control platform"
        }
      }
    },
    {
      id: "branch-connectivity",
      title: "Branch Connectivity",
      content: {
        title: "Secure branch office and remote location connectivity",
        description: "Enterprise-grade branch office connectivity with encrypted tunnels, VPN integration, and secure access service edge capabilities for remote locations.",
        buttons: [
          { text: "Connect Branch Offices", href: productUrl, variant: "primary" as const },
          { text: "Branch connectivity guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Branch Connectivity Features",
          items: [
            "Encrypted tunnels",
            "VPN integration",
            "SASE capabilities",
            "Bandwidth optimization",
            "Application acceleration",
            "Cloud connectivity",
            "Backup connectivity",
            "Network redundancy"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Branch Connectivity Center",
          description: "Secure branch office and remote connectivity management"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Advanced zero-trust network access with policy-based security",
      description: "Comprehensive zero-trust networking with secure connectivity, identity verification, and policy-based access control for modern distributed edge architectures.",
      link: {
        text: "Learn about zero-trust networking",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Lightweight edge routing with minimal resource requirements",
      description: "Optimized edge router with minimal resource footprint, high-performance routing, and secure connectivity designed specifically for branch offices and edge locations."
    },
    {
      number: "03",
      title: "Centralized management for distributed edge deployments", 
      description: "Unified management platform with centralized configuration, policy deployment, and monitoring for efficient management of distributed edge router networks."
    },
    {
      number: "04",
      title: "Enterprise-grade secure branch office connectivity",
      description: "Advanced branch office connectivity with encrypted tunnels, VPN integration, and secure access service edge capabilities for secure remote office networking."
    }
  ];

  const customerReference = {
    title: "Edge Network Transformation",
    company: "Distributed enterprise secures 200+ branch offices with zero-trust edge routing",
    description: "A large distributed enterprise transformed their branch office connectivity using EdgeRouterNF, achieving enhanced security while reducing complexity and operational overhead.",
    image: "/edge-router.svg",
    linkText: "Read the edge networking story",
    linkHref: docsUrl
  };

  const customerLogos = [
    {
      name: "OpenZiti",
      image: "https://logo.clearbit.com/openziti.org",
      href: docsUrl,
      alt: "OpenZiti logo"
    },
    {
      name: "Zscaler",
      image: "https://logo.clearbit.com/zscaler.com",
      href: docsUrl,
      alt: "Zscaler logo"
    },
    {
      name: "Prisma Access",
      image: "https://logo.clearbit.com/paloaltonetworks.com",
      href: docsUrl, 
      alt: "Prisma Access logo"
    },
    {
      name: "Cato Networks",
      image: "https://logo.clearbit.com/catonetworks.com",
      href: docsUrl,
      alt: "Cato Networks logo"
    },
    {
      name: "VeloCloud", 
      image: "https://logo.clearbit.com/velocloud.com",
      href: docsUrl,
      alt: "VeloCloud logo"
    },
    {
      name: "Silver Peak",
      image: "https://logo.clearbit.com/silver-peak.com",
      href: docsUrl,
      alt: "Silver Peak logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in EdgeRouterNF",
      content: {
        title: "Latest zero-trust and edge networking features",
        description: "Stay updated with the newest capabilities in zero-trust networking, edge routing, and branch office connectivity for modern distributed enterprise networks.",
        image: "/edge-router.svg",
        links: [
          { text: "New zero-trust features", href: docsUrl },
          { text: "Edge routing improvements", href: docsUrl },
          { text: "Management enhancements", href: docsUrl },
          { text: "Connectivity updates", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare edge networking solutions",
      content: {
        title: "Why choose EdgeRouterNF",
        description: "Compare our zero-trust edge routing capabilities with other solutions and see why network architects choose us for secure branch office connectivity.",
        image: "/edge-router.svg",
        links: [
          { text: "Edge networking comparison", href: docsUrl },
          { text: "Zero-trust comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master EdgeRouterNF",
      content: {
        title: "Learn zero-trust and edge networking best practices",
        description: "Master zero-trust networking with comprehensive guides, edge routing strategies, and training materials for network architects and security professionals.",
        image: "/edge-router.svg",
        links: [
          { text: "Zero-trust deployment guide", href: docsUrl },
          { text: "Edge routing best practices", href: docsUrl },
          { text: "Branch connectivity strategies", href: docsUrl },
          { text: "Troubleshooting guide", href: docsUrl }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Deploy edge router",
      href: productUrl,
      icon: "demo"
    },
    {
      title: "Zero-trust guide",
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
        <h1 className="sr-only">EdgeRouterNF | Zero-Trust Network Access Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="EdgeRouterNF"
          description="Lightweight, secure router for edge and branch offices with central management and zero-trust network access. Advanced edge networking platform with secure connectivity and distributed management capabilities."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Edge Network Console",
            description: "Zero-trust edge routing and branch office connectivity"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="EdgeRouterNF" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose EdgeRouterNF?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Edge networking success stories"
          description="Learn why network architects and security professionals choose EdgeRouterNF for zero-trust networking and secure branch office connectivity."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Zero-Trust Networking Guide"
          description="We've compiled zero-trust architecture strategies, edge networking techniques, and secure connectivity best practices for modern distributed enterprise networks."
          image="/edge-router.svg"
          buttonText="Get the zero-trust guide"
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
