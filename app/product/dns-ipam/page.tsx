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

export default function DNSIPAMPage() {
  const { productUrl, docsUrl } = getAppUrls("vni-dns");
  
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
      id: "dns-management",
      image: "/dns-ipam.svg",
      title: "Comprehensive DNS Management",
      description: "Manage DNS zones, records, and configurations with automated zone transfers, DNS security, and real-time monitoring capabilities.",
      ctaText: "Explore DNS features",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "dhcp-services",
      image: "/dns-ipam.svg",
      title: "Advanced DHCP Services",
      description: "Automated DHCP lease management with dynamic allocation, reservation policies, and comprehensive lease tracking for network devices.",
      ctaText: "Learn about DHCP",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "ipam-automation",
      image: "/dns-ipam.svg",
      title: "Intelligent IP Address Management",
      description: "Automated IP address allocation with subnet planning, conflict detection, and integration with network infrastructure systems.",
      ctaText: "View IPAM features",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "audit-automation",
      image: "/dns-ipam.svg",
      title: "Automation & Audit Trails",
      description: "Complete automation workflows with detailed audit trails, change tracking, and compliance reporting for network operations.",
      ctaText: "See automation features",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "dns-services",
      title: "DNS Services",
      content: {
        title: "Comprehensive DNS zone and record management",
        description: "Manage DNS zones, records, and configurations with automated zone transfers, DNS security features, and real-time monitoring for reliable name resolution.",
        buttons: [
          { text: "Manage DNS", href: productUrl, variant: "primary" as const },
          { text: "DNS configuration guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "DNS Services Features",
          items: [
            "DNS zone management",
            "Record management",
            "Zone transfers",
            "DNS security (DNSSEC)",
            "Real-time monitoring",
            "Performance analytics",
            "Failover protection",
            "Load balancing"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "DNS Management Console",
          description: "Comprehensive DNS zone and record management interface"
        }
      }
    },
    {
      id: "dhcp-management",
      title: "DHCP Management",
      content: {
        title: "Advanced DHCP lease and allocation management",
        description: "Automated DHCP lease management with dynamic allocation policies, reservation management, and comprehensive lease tracking for network devices.",
        buttons: [
          { text: "Configure DHCP", href: productUrl, variant: "primary" as const },
          { text: "DHCP best practices", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "DHCP Management Features",
          items: [
            "Dynamic allocation",
            "Lease management",
            "Reservation policies",
            "Scope configuration",
            "Option management",
            "Lease tracking",
            "Conflict resolution",
            "Performance monitoring"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "DHCP Management Interface",
          description: "Advanced DHCP lease and allocation management console"
        }
      }
    },
    {
      id: "ip-address-management",
      title: "IP Address Management",
      content: {
        title: "Intelligent IP address allocation and subnet planning",
        description: "Automated IP address management with subnet planning, conflict detection, usage analytics, and integration with network infrastructure systems.",
        buttons: [
          { text: "Manage IP Addresses", href: productUrl, variant: "primary" as const },
          { text: "IPAM planning guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "IP Address Management Features",
          items: [
            "Subnet planning",
            "IP allocation",
            "Conflict detection",
            "Usage analytics",
            "Address discovery",
            "VLAN integration",
            "Network scanning",
            "Capacity planning"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "IP Address Management Console",
          description: "Intelligent IP allocation and subnet planning interface"
        }
      }
    },
    {
      id: "automation-auditing",
      title: "Automation & Auditing",
      content: {
        title: "Complete automation workflows and comprehensive audit trails",
        description: "Advanced automation with workflow orchestration, detailed audit trails, change tracking, and compliance reporting for network operations and governance.",
        buttons: [
          { text: "Setup Automation", href: productUrl, variant: "primary" as const },
          { text: "Audit configuration", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Automation & Auditing Features",
          items: [
            "Workflow automation",
            "Change tracking",
            "Audit trails",
            "Compliance reporting",
            "Automated provisioning",
            "Policy enforcement",
            "Event logging",
            "Integration APIs"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Automation & Audit Center",
          description: "Network automation workflows and audit trail management"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Comprehensive DNS, DHCP, and IPAM management platform",
      description: "Unified platform managing DNS zones, DHCP leases, and IP address allocations with automated workflows and integrated network services for complete DDI management.",
      link: {
        text: "Learn about DDI integration",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Advanced automation with intelligent workflows",
      description: "Automated provisioning, policy enforcement, and workflow orchestration with intelligent conflict detection and resolution for efficient network operations."
    },
    {
      number: "03",
      title: "Complete audit trails and compliance reporting", 
      description: "Comprehensive change tracking, audit trails, and compliance reporting with detailed logging and governance controls for regulatory requirements and operational visibility."
    },
    {
      number: "04",
      title: "Real-time monitoring and performance analytics",
      description: "Advanced monitoring capabilities with performance analytics, usage tracking, and capacity planning for proactive network management and optimization."
    }
  ];

  const customerReference = {
    title: "Network Management Transformation",
    company: "Enterprise reduces IP conflicts by 95% with automated DDI management",
    description: "A large enterprise transformed their network management using DNS+IPAM, achieving dramatic reductions in IP conflicts while improving operational efficiency and compliance reporting across their global infrastructure.",
    image: "/dns-ipam.svg",
    linkText: "Read the network transformation story",
    linkHref: docsUrl
  };

  const customerLogos = [
    {
      name: "BIND",
      image: "https://logo.clearbit.com/bind9.net",
      href: docsUrl,
      alt: "BIND logo"
    },
    {
      name: "PowerDNS",
      image: "https://logo.clearbit.com/powerdns.com",
      href: docsUrl,
      alt: "PowerDNS logo"
    },
    {
      name: "ISC DHCP",
      image: "https://logo.clearbit.com/isc.org",
      href: docsUrl, 
      alt: "ISC DHCP logo"
    },
    {
      name: "phpIPAM",
      image: "https://logo.clearbit.com/phpipam.net",
      href: docsUrl,
      alt: "phpIPAM logo"
    },
    {
      name: "Infoblox", 
      image: "https://logo.clearbit.com/infoblox.com",
      href: docsUrl,
      alt: "Infoblox logo"
    },
    {
      name: "BlueCat",
      image: "https://logo.clearbit.com/bluecatnetworks.com",
      href: docsUrl,
      alt: "BlueCat logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in DNS+IPAM",
      content: {
        title: "Latest DNS, DHCP, and IPAM features",
        description: "Stay updated with the newest capabilities in DNS management, DHCP services, and IP address management for modern network infrastructure and DDI operations.",
        image: "/dns-ipam.svg",
        links: [
          { text: "New DNS features", href: docsUrl },
          { text: "DHCP improvements", href: docsUrl },
          { text: "IPAM enhancements", href: docsUrl },
          { text: "Automation updates", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare DDI solutions",
      content: {
        title: "Why choose DNS+IPAM",
        description: "Compare our DNS, DHCP, and IPAM capabilities with other solutions and see why network administrators choose us for comprehensive DDI management and automation.",
        image: "/dns-ipam.svg",
        links: [
          { text: "DDI solution comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master DNS+IPAM",
      content: {
        title: "Learn DDI management best practices",
        description: "Master DNS, DHCP, and IPAM management with comprehensive guides, best practices, and training materials for network administrators and infrastructure teams.",
        image: "/dns-ipam.svg",
        links: [
          { text: "DDI implementation guide", href: docsUrl },
          { text: "Network automation best practices", href: docsUrl },
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
      title: "Contact network team",
      href: productUrl,
      icon: "contact"
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="sr-only">DNS+IPAM | DNS, DHCP and IPAM Management Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="DNS+IPAM"
          description="Manage DNS zones, DHCP leases, and IP address allocations with automation and audit trails. Comprehensive DDI (DNS, DHCP, IPAM) management platform with intelligent workflows and real-time monitoring for enterprise network infrastructure."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "DNS+IPAM Management Console",
            description: "Comprehensive DNS, DHCP, and IPAM management interface"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="DNS+IPAM" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose DNS+IPAM?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Network management success stories"
          description="Learn why network administrators and infrastructure teams choose DNS+IPAM for comprehensive DDI management and network automation capabilities."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Network Management Guide"
          description="We've compiled DNS management strategies, DHCP optimization techniques, and IPAM best practices for modern enterprise network infrastructure and DDI operations."
          image="/dns-ipam.svg"
          buttonText="Get the network guide"
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
