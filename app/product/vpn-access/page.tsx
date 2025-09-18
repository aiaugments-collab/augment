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

export default function VPNAccessPage() {
  const { productUrl, docsUrl } = getAppUrls("vpn-access");
  
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
      id: "secure-remote-access",
      image: "/vpn-access.svg",
      title: "Secure Remote Access",
      description: "Enable secure remote access for distributed teams with enterprise-grade encryption, multi-platform support, and seamless user experience.",
      ctaText: "Explore remote access",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "site-to-site-connectivity",
      image: "/vpn-access.svg",
      title: "Site-to-Site Connectivity",
      description: "Connect multiple office locations and data centers with encrypted site-to-site VPN tunnels for secure inter-office communication.",
      ctaText: "Learn about site-to-site",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "modern-protocols",
      image: "/vpn-access.svg",
      title: "Modern VPN Protocols",
      description: "Built on WireGuard and other modern protocols for superior performance, security, and reliability compared to legacy VPN solutions.",
      ctaText: "View protocol features",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "zero-trust-security",
      image: "/vpn-access.svg",
      title: "Zero Trust Architecture",
      description: "Implement zero trust security principles with device verification, user authentication, and granular access controls for enhanced protection.",
      ctaText: "See security features",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "remote-access",
      title: "Remote Access",
      content: {
        title: "Secure remote access for distributed teams",
        description: "Enable secure remote work with enterprise-grade VPN access, multi-device support, and seamless connectivity for distributed teams and remote workers.",
        buttons: [
          { text: "Setup Remote Access", href: productUrl, variant: "primary" as const },
          { text: "Remote access guides", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Remote Access Features",
          items: [
            "Multi-platform clients",
            "Auto-connect capabilities",
            "Split tunneling",
            "Kill switch protection",
            "DNS leak protection",
            "Bandwidth optimization",
            "Connection monitoring",
            "User management"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "VPN Management Dashboard",
          description: "Remote access VPN configuration and monitoring interface"
        }
      }
    },
    {
      id: "site-to-site",
      title: "Site-to-Site VPN",
      content: {
        title: "Encrypted site-to-site connectivity solutions",
        description: "Connect multiple office locations, data centers, and cloud environments with secure site-to-site VPN tunnels for seamless inter-office communication.",
        buttons: [
          { text: "Configure Site-to-Site", href: productUrl, variant: "primary" as const },
          { text: "Network topology guides", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Site-to-Site VPN Features",
          items: [
            "IPsec & WireGuard protocols",
            "Multi-site connectivity",
            "Redundant tunnels",
            "Dynamic routing",
            "Load balancing",
            "Failover mechanisms",
            "Network segmentation",
            "Performance monitoring"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Network Topology Console",
          description: "Site-to-site VPN configuration and network management"
        }
      }
    },
    {
      id: "security-protocols",
      title: "Security & Protocols",
      content: {
        title: "Modern security protocols and encryption",
        description: "Built on cutting-edge protocols like WireGuard with enterprise-grade encryption, perfect forward secrecy, and advanced security features for maximum protection.",
        buttons: [
          { text: "Review Security", href: productUrl, variant: "primary" as const },
          { text: "Security documentation", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Security & Protocol Features",
          items: [
            "WireGuard protocol support",
            "ChaCha20 encryption",
            "Perfect Forward Secrecy",
            "Certificate-based auth",
            "Multi-factor authentication",
            "Device certificates",
            "Audit logging",
            "Compliance reporting"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Security Configuration",
          description: "VPN security protocols and encryption management"
        }
      }
    },
    {
      id: "management-monitoring",
      title: "Management & Monitoring",
      content: {
        title: "Comprehensive VPN management and monitoring",
        description: "Centralized management with real-time monitoring, user analytics, connection tracking, and comprehensive reporting for enterprise VPN operations.",
        buttons: [
          { text: "Monitor VPN", href: productUrl, variant: "primary" as const },
          { text: "Management best practices", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Management & Monitoring Features",
          items: [
            "Centralized management",
            "Real-time monitoring",
            "User analytics",
            "Connection tracking",
            "Bandwidth monitoring",
            "Performance metrics",
            "Alert notifications",
            "Compliance reporting"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "VPN Operations Center",
          description: "Comprehensive VPN management and monitoring interface"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Modern VPN solution with superior performance",
      description: "Built on WireGuard and modern protocols for exceptional performance, security, and reliability that outperforms legacy VPN solutions in speed and efficiency.",
      link: {
        text: "Learn about modern protocols",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Comprehensive remote and site-to-site connectivity",
      description: "Support both remote access for distributed teams and site-to-site connectivity for multi-location organizations with unified management and monitoring."
    },
    {
      number: "03",
      title: "Enterprise-grade security with zero trust principles", 
      description: "Implement zero trust architecture with device verification, multi-factor authentication, and granular access controls for maximum security protection."
    },
    {
      number: "04",
      title: "Scalable architecture for growing organizations",
      description: "Cloud-native architecture that scales seamlessly from small teams to enterprise deployments with centralized management and monitoring capabilities."
    }
  ];

  const customerReference = {
    title: "Remote Work Transformation",
    company: "Global company enables secure remote work for 5,000+ employees",
    description: "A multinational corporation transformed their remote work capabilities using VPN Access, enabling secure connectivity for thousands of distributed employees while maintaining enterprise security standards.",
    image: "/vpn-access.svg",
    linkText: "Read the remote work transformation story",
    linkHref: docsUrl
  };

  const customerLogos = [
    {
      name: "WireGuard",
      image: "https://logo.clearbit.com/wireguard.com",
      href: docsUrl,
      alt: "WireGuard logo"
    },
    {
      name: "OpenVPN",
      image: "https://logo.clearbit.com/openvpn.net",
      href: docsUrl,
      alt: "OpenVPN logo"
    },
    {
      name: "NordLayer",
      image: "https://logo.clearbit.com/nordlayer.com",
      href: docsUrl, 
      alt: "NordLayer logo"
    },
    {
      name: "Tailscale",
      image: "https://logo.clearbit.com/tailscale.com",
      href: docsUrl,
      alt: "Tailscale logo"
    },
    {
      name: "Cisco AnyConnect", 
      image: "https://logo.clearbit.com/cisco.com",
      href: docsUrl,
      alt: "Cisco AnyConnect logo"
    },
    {
      name: "Palo Alto GlobalProtect",
      image: "https://logo.clearbit.com/paloaltonetworks.com",
      href: docsUrl,
      alt: "Palo Alto GlobalProtect logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in VPN Access",
      content: {
        title: "Latest VPN and connectivity features",
        description: "Stay updated with the newest capabilities in secure remote access, site-to-site connectivity, and modern VPN protocols for enterprise networking.",
        image: "/vpn-access.svg",
        links: [
          { text: "New protocol features", href: docsUrl },
          { text: "Security enhancements", href: docsUrl },
          { text: "Performance improvements", href: docsUrl },
          { text: "Management updates", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare VPN solutions",
      content: {
        title: "Why choose VPN Access",
        description: "Compare our modern VPN capabilities with other solutions and see why organizations choose us for secure remote access and site-to-site connectivity.",
        image: "/vpn-access.svg",
        links: [
          { text: "VPN solution comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master VPN Access",
      content: {
        title: "Learn VPN deployment best practices",
        description: "Master secure VPN deployment with comprehensive guides, best practices, and training materials for network administrators and security professionals.",
        image: "/vpn-access.svg",
        links: [
          { text: "VPN deployment guide", href: docsUrl },
          { text: "Security configuration best practices", href: docsUrl },
          { text: "Network optimization strategies", href: docsUrl },
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
        <h1 className="sr-only">VPN Access | Secure Site-to-Site & Remote VPN Solution</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="VPN Access"
          description="Modern VPN solution for secure remote access and encrypted site-to-site connectivity. Built on WireGuard and advanced protocols for superior performance, enterprise security, and seamless connectivity for distributed teams and multi-location organizations."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "VPN Management Console",
            description: "Secure remote access and site-to-site VPN management"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="VPN Access" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose VPN Access?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="VPN deployment success stories"
          description="Learn why network administrators and security professionals choose VPN Access for secure remote connectivity and enterprise networking solutions."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Enterprise VPN Guide"
          description="We've compiled VPN deployment strategies, security best practices, and connectivity optimization techniques for modern enterprise networking and remote work enablement."
          image="/vpn-access.svg"
          buttonText="Get the VPN guide"
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
