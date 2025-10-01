import { ProductHero } from "@/components/product/ProductHero";
import { ProductPromo } from "@/components/product/ProductPromo";
import { ProductExplorer } from "@/components/product/ProductExplorer";
import { ProductWhyChoose } from "@/components/product/ProductWhyChoose";
import { ProductCustomerLogos } from "@/components/product/ProductCustomerLogos";
import { ProductCTABanner } from "@/components/product/ProductCTABanner";
import { ProductGetStarted } from "@/components/product/ProductGetStarted";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { getAppUrls } from "@/lib/marketplaceData";


export default function AgentForgePage() {
  const { productUrl, docsUrl } = getAppUrls("agentforge");
  
  const ctaButtons = [
    {
      text: "Start Free",
      href: productUrl,
      variant: "primary" as const
    },
    {
      text: "View Docs",
      href: docsUrl,
      variant: "secondary" as const
    }
  ]; 

  const promoCards = [
    {
      id: "ai-agent-platform",
      image: "/agentforge.svg",
      title: "No-Code AI Agent Platform",
      description: "Revolutionary no-code platform for building intelligent AI agents that can think, act, and collaborate across 431+ tools with enterprise-grade security and open source flexibility.",
      ctaText: "Start building agents",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "smart-automation",
      image: "/agentforge.svg",
      title: "Smart Workflow Automation",
      description: "Create sophisticated automation workflows with conditional logic, multi-agent orchestration, and real-time monitoring using visual drag-and-drop builder.",
      ctaText: "Explore automation",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "integration-ecosystem",
      image: "/agentforge.svg",
      title: "431+ Integration Ecosystem",
      description: "Massive integration library with pre-built connectors for SaaS applications, enterprise systems, and cloud platforms with custom integration development capabilities.",
      ctaText: "Browse integrations",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "enterprise-deployment",
      image: "/agentforge.svg",
      title: "Enterprise Self-Hosted Deployment",
      description: "Deploy on your own infrastructure with Docker, Kubernetes, or cloud platforms while maintaining SOC 2 compliance and enterprise security controls.",
      ctaText: "Deploy enterprise",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "ai-agent-platform",
      title: "AI Agent Platform",
      content: {
        title: "No-code AI agent development and automation platform",
        description: "Revolutionary platform for building intelligent AI agents that can think, make decisions, and collaborate across 431+ tools with visual workflow builder and enterprise features.",
        buttons: [
          { text: "Start Building", href: productUrl, variant: "primary" as const },
          { text: "Platform overview", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "AI Agent Platform Features",
          items: [
            "Smart AI agents",
            "No-code builder",
            "431+ integrations",
            "Open source platform",
            "Multi-agent orchestration",
            "Real-time monitoring",
            "Custom development",
            "Enterprise security"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "AgentForge Platform Console",
          description: "AI agent development and automation management interface"
        }
      }
    },
    {
      id: "intelligent-agents",
      title: "Intelligent Agents",
      content: {
        title: "Smart AI agents with autonomous decision-making capabilities",
        description: "Deploy intelligent AI agents that can handle complex tasks, make autonomous decisions, and collaborate seamlessly with humans using advanced learning and adaptation algorithms.",
        buttons: [
          { text: "Build Agent", href: productUrl, variant: "primary" as const },
          { text: "Agent examples", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Intelligent Agent Features",
          items: [
            "Autonomous decision making",
            "Human-agent collaboration",
            "Multi-agent orchestration",
            "Learning and adaptation",
            "Context-aware execution",
            "Approval workflows",
            "Performance monitoring",
            "Custom behavior config"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "AI Agent Management Console",
          description: "Intelligent agent deployment and collaboration management"
        }
      }
    },
    {
      id: "workflow-automation",
      title: "Workflow Automation",
      content: {
        title: "Visual workflow automation with advanced logic and monitoring",
        description: "Create sophisticated automation workflows using drag-and-drop builder with conditional logic, error handling, and real-time monitoring for enterprise-grade reliability.",
        buttons: [
          { text: "Build Workflow", href: productUrl, variant: "primary" as const },
          { text: "Workflow templates", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Workflow Automation Features",
          items: [
            "Visual flow builder",
            "Conditional logic",
            "Error handling",
            "Real-time monitoring",
            "Scheduled workflows",
            "Data transformation",
            "Loop controls",
            "Execution analytics"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Workflow Builder Interface",
          description: "Visual automation workflow design and configuration"
        }
      }
    },
    {
      id: "integration-ecosystem",
      title: "Integration Ecosystem",
      content: {
        title: "Extensive integration library with 431+ pre-built connectors",
        description: "Comprehensive integration ecosystem with pre-built connectors for SaaS applications, enterprise systems, and cloud platforms with custom connector development capabilities.",
        buttons: [
          { text: "Browse Integrations", href: productUrl, variant: "primary" as const },
          { text: "Integration docs", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Integration Ecosystem Features",
          items: [
            "431+ pre-built connectors",
            "SaaS integrations",
            "Enterprise systems",
            "Cloud platforms",
            "Custom connector SDK",
            "Integration marketplace",
            "Version management",
            "Security compliance"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Integration Marketplace",
          description: "Connector library and integration management interface"
        }
      }
    },
    {
      id: "enterprise-deployment",
      title: "Enterprise Deployment",
      content: {
        title: "Enterprise-grade security and self-hosted deployment options",
        description: "Deploy at scale with enterprise security, governance, and management features including SOC 2 compliance and self-hosted infrastructure options.",
        buttons: [
          { text: "Talk to Sales", href: "/book-demo", variant: "primary" as const },
          { text: "Deployment guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Enterprise Deployment Features",
          items: [
            "SOC 2 compliance",
            "Self-hosted deployment",
            "Role-based access control",
            "Custom integrations",
            "Enterprise support",
            "Audit trails",
            "High availability",
            "Advanced monitoring"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Enterprise Configuration Console",
          description: "Enterprise deployment and security management interface"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "No-Code Simplicity",
      description: "Build sophisticated AI agents and automation workflows without writing a single line of code.",
      link: {
        text: "Try the builder",
        href: "https://agentforge.augment.cfd/"
      }
    },
    {
      number: "02",
      title: "Open Source Freedom",
      description: "Fully open source platform gives you complete control and customization capabilities.",
      link: {
        text: "View on GitHub",
        href: "https://github.com/activepieces/activepieces"
      }
    },
    {
      number: "03",
      title: "Enterprise Ready",
      description: "SOC 2 Type II compliant with enterprise-grade security, governance, and scalability features.",
      link: {
        text: "Talk to sales",
        href: "/book-demo"
      }
    }
  ];



  const getStartedActions = [
    {
      title: "Start Free",
      href: productUrl,
      icon: "demo"
    },
    {
      title: "Talk to Sales",
      href: "/book-demo",
      icon: "contact"
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="sr-only">AgentForge | AI Agents & Automation Platform with 431+ Integrations</h1>
        
        {/* Breadcrumbs - automatically generated from /product/agentforge route */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="AgentForge"
          description="No-code AI automation platform with smart agents. Build AI agents that can think and act across 431 tools. Open source, customizable, and secure platform for enterprise automation workflows. Trusted by companies from startups to Fortune 50."
          ctaButtons={ctaButtons}
          mediaType="video"
          mediaUrl="/products/agentforge/01.png"
          videoThumbnail="/products/agentforge/01.png"
          mediaAlt="AgentForge interface showing AI agent builder and automation workflows"
        />

        {/* Product Promotional Cards - Oracle RC59 style */}
        <ProductPromo cards={promoCards} />

        {/* Product Explorer - Oracle RC30 tabbed interface */}
        <ProductExplorer title="Explore AgentForge automation capabilities" tabs={explorerTabs} />

        {/* Why Choose Section - Oracle RC36v3 style */}
        <ProductWhyChoose 
          title="Why choose AgentForge for your automation?" 
          items={whyChooseItems}
        />

        {/* Customer Success Logos - Oracle RC56v0 style */}
        <ProductCustomerLogos
          title="AgentForge customer successes"
          description="Trusted by companies from startups to Fortune 50 for enterprise AI automation."
          viewMoreText="View all customers"
          viewMoreHref="/customers"
          logos={[]}
        />


        {/* CTA Banner - Oracle RC57v0 style */}
        <ProductCTABanner
          title="Ready to build intelligent AI agents?"
          description="Join 100,000+ users from Google, Roblox, ClickUp and more building secure, open source AI automations."
          image="/agentforge.svg"
          buttonText="Start Free"
          buttonHref={productUrl}
        />

        {/* Get Started Section - Oracle RC58v0 style */}
        <ProductGetStarted
          title="Get started with AgentForge"
          actions={getStartedActions}
        />
      </main>
    </div>
  );
}
