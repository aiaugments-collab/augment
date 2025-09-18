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

export default function ContainerWorkspacesPage() {
  const { productUrl, docsUrl } = getAppUrls("container-workspaces");
  
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
      id: "lightweight-containers",
      image: "/container-workspaces.svg",
      title: "Lightweight Container Environments",
      description: "Fast-launching containerized workspaces with minimal resource overhead, optimized for development and testing workflows.",
      ctaText: "Explore containers",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "development-focused",
      image: "/container-workspaces.svg",
      title: "Development-Focused Features",
      description: "Pre-configured development environments with IDE integration, debugging tools, and seamless code synchronization.",
      ctaText: "Learn about dev features",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "isolated-environments",
      image: "/container-workspaces.svg",
      title: "Isolated User Environments",
      description: "Complete isolation between users with dedicated containers, custom configurations, and secure workspace boundaries.",
      ctaText: "View isolation features",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "self-hosted-control",
      image: "/container-workspaces.svg",
      title: "Self-Hosted Infrastructure Control",
      description: "Deploy on your own infrastructure with full control over security, compliance, and data governance requirements.",
      ctaText: "See deployment options",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "container-management",
      title: "Container Management",
      content: {
        title: "Lightweight containerized development environments",
        description: "Create and manage isolated containerized workspaces optimized for development and testing with fast provisioning and minimal resource overhead.",
        buttons: [
          { text: "Launch Container", href: productUrl, variant: "primary" as const },
          { text: "Container setup guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Container Management Features",
          items: [
            "Fast container provisioning",
            "Resource optimization",
            "Custom image support",
            "Container templates",
            "Lifecycle management",
            "Auto-scaling containers",
            "Health monitoring",
            "Container orchestration"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Container Management Console",
          description: "Lightweight containerized workspace management interface"
        }
      }
    },
    {
      id: "development-tools",
      title: "Development Tools",
      content: {
        title: "Integrated development environment and tooling",
        description: "Pre-configured development environments with IDE integration, debugging tools, version control, and seamless code synchronization for productive development workflows.",
        buttons: [
          { text: "Setup Dev Environment", href: productUrl, variant: "primary" as const },
          { text: "Development guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Development Tools Features",
          items: [
            "IDE integration",
            "Debugging tools",
            "Version control",
            "Code synchronization",
            "Terminal access",
            "Package management",
            "Build tools",
            "Testing frameworks"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Development Environment Setup",
          description: "Integrated development tools and environment configuration"
        }
      }
    },
    {
      id: "user-isolation",
      title: "User Isolation",
      content: {
        title: "Secure isolated environments for each user",
        description: "Complete user isolation with dedicated containers, custom configurations, and secure workspace boundaries for multi-tenant development environments.",
        buttons: [
          { text: "Configure Isolation", href: productUrl, variant: "primary" as const },
          { text: "Security best practices", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "User Isolation Features",
          items: [
            "Dedicated containers",
            "Resource quotas",
            "Network isolation",
            "File system separation",
            "Custom configurations",
            "Access controls",
            "Audit logging",
            "Security policies"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "User Isolation Management",
          description: "Secure multi-tenant workspace isolation and configuration"
        }
      }
    },
    {
      id: "infrastructure-deployment",
      title: "Infrastructure & Deployment",
      content: {
        title: "Self-hosted deployment and infrastructure management",
        description: "Deploy on your own infrastructure with full control over security, compliance, and data governance while maintaining scalability and performance.",
        buttons: [
          { text: "Deploy Infrastructure", href: productUrl, variant: "primary" as const },
          { text: "Deployment guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Infrastructure & Deployment Features",
          items: [
            "Self-hosted deployment",
            "Infrastructure automation",
            "Compliance controls",
            "Security hardening",
            "Monitoring integration",
            "Backup & recovery",
            "Performance optimization",
            "Scaling capabilities"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Infrastructure Management Center",
          description: "Self-hosted container workspace infrastructure deployment"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Lightweight containerized development environments",
      description: "Fast-launching containerized workspaces with minimal resource overhead, optimized for development and testing workflows with efficient container management.",
      link: {
        text: "Learn about container efficiency",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Development-focused features and IDE integration",
      description: "Pre-configured development environments with IDE integration, debugging tools, version control, and seamless code synchronization for productive development workflows."
    },
    {
      number: "03",
      title: "Complete user isolation with secure boundaries", 
      description: "Dedicated containers for each user with custom configurations, resource quotas, and secure workspace boundaries for safe multi-tenant development environments."
    },
    {
      number: "04",
      title: "Self-hosted infrastructure with full control",
      description: "Deploy on your own infrastructure with complete control over security, compliance, data governance, and performance while maintaining scalability and reliability."
    }
  ];

  const customerReference = {
    title: "Development Productivity Success",
    company: "Software company accelerates development cycles by 40% with containerized workspaces",
    description: "A growing software development company transformed their development workflow using ContainerWorkspaces, enabling faster onboarding, consistent environments, and improved developer productivity across distributed teams.",
    image: "/container-workspaces.svg",
    linkText: "Read the development transformation story",
    linkHref: docsUrl
  };

  const customerLogos = [
    {
      name: "Docker",
      image: "https://logo.clearbit.com/docker.com",
      href: docsUrl,
      alt: "Docker logo"
    },
    {
      name: "Kubernetes",
      image: "https://logo.clearbit.com/kubernetes.io",
      href: docsUrl,
      alt: "Kubernetes logo"
    },
    {
      name: "VS Code",
      image: "https://logo.clearbit.com/code.visualstudio.com",
      href: docsUrl, 
      alt: "VS Code logo"
    },
    {
      name: "GitLab",
      image: "https://logo.clearbit.com/gitlab.com",
      href: docsUrl,
      alt: "GitLab logo"
    },
    {
      name: "GitHub Codespaces", 
      image: "https://logo.clearbit.com/github.com",
      href: docsUrl,
      alt: "GitHub Codespaces logo"
    },
    {
      name: "Eclipse Theia",
      image: "https://logo.clearbit.com/theia-ide.org",
      href: docsUrl,
      alt: "Eclipse Theia logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in ContainerWorkspaces",
      content: {
        title: "Latest containerized workspace features",
        description: "Stay updated with the newest capabilities in containerized development environments, isolation features, and infrastructure management for modern development teams.",
        image: "/container-workspaces.svg",
        links: [
          { text: "New container features", href: docsUrl },
          { text: "Development tool improvements", href: docsUrl },
          { text: "Isolation enhancements", href: docsUrl },
          { text: "Infrastructure updates", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare workspace solutions",
      content: {
        title: "Why choose ContainerWorkspaces",
        description: "Compare our containerized workspace capabilities with other solutions and see why development teams choose us for lightweight, secure, and self-hosted development environments.",
        image: "/container-workspaces.svg",
        links: [
          { text: "Workspace solution comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master ContainerWorkspaces",
      content: {
        title: "Learn containerized development best practices",
        description: "Master containerized development workflows with comprehensive guides, best practices, and training materials for development teams and DevOps engineers.",
        image: "/container-workspaces.svg",
        links: [
          { text: "Container development guide", href: docsUrl },
          { text: "Workspace setup best practices", href: docsUrl },
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
      title: "Contact dev team",
      href: productUrl,
      icon: "contact"
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="sr-only">ContainerWorkspaces | Lightweight Containerized Dev Workspaces Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="ContainerWorkspaces"
          description="Self-hosted container workspaces for development and testing with isolated environments per user. Lightweight containerized development environments with IDE integration, debugging tools, and secure workspace boundaries for distributed development teams."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Container Workspace Console",
            description: "Lightweight containerized development environment management"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="ContainerWorkspaces" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose ContainerWorkspaces?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Development workspace success stories"
          description="Learn why development teams and DevOps engineers choose ContainerWorkspaces for lightweight, secure, and self-hosted containerized development environments."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Container Development Guide"
          description="We've compiled containerized development strategies, workspace optimization techniques, and security best practices for modern distributed development teams and self-hosted infrastructure."
          image="/container-workspaces.svg"
          buttonText="Get the container dev guide"
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
