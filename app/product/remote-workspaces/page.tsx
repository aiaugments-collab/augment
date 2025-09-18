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

export default function RemoteWorkspacesPage() {
  const { productUrl, docsUrl } = getAppUrls("remote-workspaces");
  
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
      id: "browser-based-desktop",
      image: "/remote-workspaces.svg",
      title: "Browser-Based Remote Desktop",
      description: "Access full desktop environments through any web browser with high-performance streaming, secure connections, and seamless user experience.",
      ctaText: "Explore remote desktops",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "containerized-workspaces",
      image: "/remote-workspaces.svg",
      title: "Containerized Workspace Environments",
      description: "Isolated containerized workspaces with pre-configured applications, development tools, and custom environments for teams and contractors.",
      ctaText: "Learn about workspaces",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "secure-access",
      image: "/remote-workspaces.svg",
      title: "Enterprise Security & Access Control",
      description: "Advanced security with multi-factor authentication, role-based access, session monitoring, and comprehensive audit logging for enterprise compliance.",
      ctaText: "View security features",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "scalable-infrastructure",
      image: "/remote-workspaces.svg",
      title: "Scalable Cloud Infrastructure",
      description: "Auto-scaling cloud infrastructure with resource optimization, cost management, and performance monitoring for efficient remote workspace deployments.",
      ctaText: "See infrastructure features",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "remote-desktop",
      title: "Remote Desktop",
      content: {
        title: "Browser-based remote desktop access and streaming",
        description: "Access full desktop environments through any web browser with high-performance streaming, multi-monitor support, and seamless user experience for remote work.",
        buttons: [
          { text: "Launch Remote Desktop", href: productUrl, variant: "primary" as const },
          { text: "Desktop setup guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Remote Desktop Features",
          items: [
            "Browser-based access",
            "High-performance streaming",
            "Multi-monitor support",
            "File transfer capabilities",
            "Audio/video streaming",
            "Clipboard synchronization",
            "Printing support",
            "Mobile device compatibility"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Remote Desktop Console",
          description: "Browser-based remote desktop access and management"
        }
      }
    },
    {
      id: "workspace-management",
      title: "Workspace Management",
      content: {
        title: "Containerized workspace creation and management",
        description: "Create and manage isolated containerized workspaces with pre-configured applications, development environments, and custom tools for teams and projects.",
        buttons: [
          { text: "Create Workspace", href: productUrl, variant: "primary" as const },
          { text: "Workspace templates", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Workspace Management Features",
          items: [
            "Containerized environments",
            "Pre-configured templates",
            "Custom application stacks",
            "Development tools",
            "Persistent storage",
            "Resource allocation",
            "Snapshot management",
            "Environment cloning"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Workspace Management Interface",
          description: "Containerized workspace creation and administration"
        }
      }
    },
    {
      id: "user-security",
      title: "User Security",
      content: {
        title: "Advanced security and access control management",
        description: "Comprehensive security with multi-factor authentication, role-based access control, session monitoring, and audit logging for enterprise security requirements.",
        buttons: [
          { text: "Configure Security", href: productUrl, variant: "primary" as const },
          { text: "Security best practices", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "User Security Features",
          items: [
            "Multi-factor authentication",
            "Role-based access control",
            "Session management",
            "Activity monitoring",
            "Audit logging",
            "Compliance reporting",
            "Identity integration",
            "Security policies"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Security Management Console",
          description: "User access control and security policy management"
        }
      }
    },
    {
      id: "infrastructure-scaling",
      title: "Infrastructure & Scaling",
      content: {
        title: "Scalable cloud infrastructure and resource management",
        description: "Auto-scaling cloud infrastructure with intelligent resource allocation, cost optimization, and performance monitoring for efficient remote workspace operations.",
        buttons: [
          { text: "Scale Infrastructure", href: productUrl, variant: "primary" as const },
          { text: "Scaling strategies", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Infrastructure & Scaling Features",
          items: [
            "Auto-scaling capabilities",
            "Resource optimization",
            "Cost management",
            "Performance monitoring",
            "Load balancing",
            "Geographic distribution",
            "Backup & recovery",
            "Infrastructure automation"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Infrastructure Management Center",
          description: "Cloud infrastructure scaling and resource optimization"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Browser-based remote desktop with enterprise performance",
      description: "Access full desktop environments through any web browser with high-performance streaming, multi-monitor support, and seamless user experience for distributed teams.",
      link: {
        text: "Learn about remote desktop access",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Containerized workspaces with pre-configured environments",
      description: "Isolated containerized workspaces with pre-configured applications, development tools, and custom environments for teams, contractors, and project-specific needs."
    },
    {
      number: "03",
      title: "Enterprise security with comprehensive access control", 
      description: "Advanced security features with multi-factor authentication, role-based access, session monitoring, and audit logging for enterprise compliance and security requirements."
    },
    {
      number: "04",
      title: "Scalable cloud infrastructure with intelligent optimization",
      description: "Auto-scaling cloud infrastructure with resource optimization, cost management, and performance monitoring for efficient and cost-effective remote workspace deployments."
    }
  ];

  const customerReference = {
    title: "Remote Work Transformation",
    company: "Global company enables secure remote work for 10,000+ employees",
    description: "A multinational corporation transformed their remote work capabilities using RemoteWorkspace, enabling secure access to enterprise applications for thousands of distributed employees while maintaining security and compliance.",
    image: "/remote-workspaces.svg",
    linkText: "Read the remote work transformation story",
    linkHref: docsUrl
  };

  const customerLogos = [
    {
      name: "Kasm Workspaces",
      image: "https://logo.clearbit.com/kasmweb.com",
      href: docsUrl,
      alt: "Kasm Workspaces logo"
    },
    {
      name: "Citrix",
      image: "https://logo.clearbit.com/citrix.com",
      href: docsUrl,
      alt: "Citrix logo"
    },
    {
      name: "VMware Horizon",
      image: "https://logo.clearbit.com/vmware.com",
      href: docsUrl, 
      alt: "VMware Horizon logo"
    },
    {
      name: "Microsoft RDS",
      image: "https://logo.clearbit.com/microsoft.com",
      href: docsUrl,
      alt: "Microsoft RDS logo"
    },
    {
      name: "Amazon WorkSpaces", 
      image: "https://logo.clearbit.com/aws.amazon.com",
      href: docsUrl,
      alt: "Amazon WorkSpaces logo"
    },
    {
      name: "Google Cloud Workstations",
      image: "https://logo.clearbit.com/cloud.google.com",
      href: docsUrl,
      alt: "Google Cloud Workstations logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in RemoteWorkspace",
      content: {
        title: "Latest remote workspace and VDI features",
        description: "Stay updated with the newest capabilities in browser-based remote desktop, containerized workspaces, and enterprise security for modern remote work environments.",
        image: "/remote-workspaces.svg",
        links: [
          { text: "New workspace features", href: docsUrl },
          { text: "Security improvements", href: docsUrl },
          { text: "Performance enhancements", href: docsUrl },
          { text: "Infrastructure updates", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare VDI solutions",
      content: {
        title: "Why choose RemoteWorkspace",
        description: "Compare our remote workspace capabilities with other solutions and see why IT administrators choose us for comprehensive remote desktop and workspace management.",
        image: "/remote-workspaces.svg",
        links: [
          { text: "VDI solution comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master RemoteWorkspace",
      content: {
        title: "Learn remote workspace deployment best practices",
        description: "Master remote workspace deployment with comprehensive guides, best practices, and training materials for IT administrators and remote work enablement teams.",
        image: "/remote-workspaces.svg",
        links: [
          { text: "Remote workspace deployment guide", href: docsUrl },
          { text: "Security configuration best practices", href: docsUrl },
          { text: "Performance optimization strategies", href: docsUrl },
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
      title: "Contact workspace team",
      href: productUrl,
      icon: "contact"
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="sr-only">RemoteWorkspace | Containerized Remote Desktop & Workspaces Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="RemoteWorkspace"
          description="Containerized remote desktop and workspaces platform providing secure browser-based workspaces and remote desktops for teams and contractors. Enterprise-grade security with scalable cloud infrastructure for distributed work environments."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Remote Workspace Console",
            description: "Containerized remote desktop and workspace management"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="RemoteWorkspace" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose RemoteWorkspace?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Remote workspace success stories"
          description="Learn why IT administrators and remote work teams choose RemoteWorkspace for comprehensive remote desktop and containerized workspace capabilities."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Remote Work Excellence Guide"
          description="We've compiled remote workspace strategies, VDI deployment techniques, and security best practices for modern distributed work environments and enterprise remote access."
          image="/remote-workspaces.svg"
          buttonText="Get the remote work guide"
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
