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

export default function NeuroFlowOrchestratorPage() {
  const { productUrl, docsUrl } = getAppUrls("neuroflow-orchestrator");
  
  const ctaButtons = [
    {
      text: "Start Free",
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
      id: "ai-workflows",
      image: "/products/neuroflow/01.png",
      title: "AI-Native Workflow Automation",
      description: "Orchestrate complex enterprise workflows with AI intelligence that adapts, learns, and optimizes automatically for maximum efficiency.",
      ctaText: "Learn AI orchestration",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "enterprise-scale",
      image: "/products/neuroflow/02.png",
      title: "Enterprise-Scale Operations",
      description: "Handle massive workloads with intelligent scaling, fault tolerance, and enterprise-grade security for mission-critical operations.",
      ctaText: "Explore enterprise features",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "api-integration",
      image: "/products/neuroflow/03.png",
      title: "Seamless API Integration",
      description: "Connect traditional APIs with next-gen AI capabilities through intelligent middleware that bridges legacy systems with modern AI.",
      ctaText: "View integrations",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "intelligent-automation",
      image: "/products/neuroflow/04.png",
      title: "Intelligent Process Automation",
      description: "Transform manual processes with AI-powered automation that understands context, makes decisions, and continuously improves.",
      ctaText: "See automation examples",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "workflow-orchestration",
      title: "Workflow Orchestration",
      content: {
        title: "AI-native enterprise workflow orchestration",
        description: "Orchestrate complex enterprise workflows with AI intelligence that combines traditional APIs with next-generation AI capabilities, ensuring tasks are executed with adaptability and scale.",
        buttons: [
          { text: "Try Orchestrator", href: productUrl, variant: "primary" as const },
          { text: "Workflow examples", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Workflow Orchestration Features",
          items: [
            "AI-powered workflow design",
            "Intelligent task routing",
            "Adaptive execution engine",
            "Real-time workflow monitoring",
            "Error handling and recovery",
            "Conditional logic processing",
            "Parallel execution support",
            "Workflow version control"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Workflow Orchestration Dashboard",
          description: "AI-native workflow design and monitoring interface"
        }
      }
    },
    {
      id: "ai-automation",
      title: "AI Automation",
      content: {
        title: "Intelligent automation with AI decision-making",
        description: "Transform manual processes with AI-powered automation that understands context, makes intelligent decisions, and continuously learns to optimize performance and outcomes.",
        buttons: [
          { text: "Explore AI Features", href: productUrl, variant: "primary" as const },
          { text: "AI capabilities", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "AI Automation Features",
          items: [
            "Context-aware decision making",
            "Machine learning optimization",
            "Natural language processing",
            "Predictive task scheduling",
            "Intelligent error resolution",
            "Adaptive process improvement",
            "AI-driven resource allocation",
            "Continuous learning algorithms"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "AI Automation Assistant",
          description: "Intelligent automation with natural language interaction"
        }
      }
    },
    {
      id: "enterprise-integration",
      title: "Enterprise Integration",
      content: {
        title: "Seamless enterprise system integration",
        description: "Connect traditional APIs with next-gen AI through intelligent middleware that bridges legacy systems with modern AI capabilities, ensuring seamless data flow and operations.",
        buttons: [
          { text: "Try Integration", href: productUrl, variant: "primary" as const },
          { text: "Integration guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Enterprise Integration Features",
          items: [
            "Legacy system connectivity",
            "API gateway management",
            "Data transformation engine",
            "Real-time synchronization",
            "Security and compliance",
            "Protocol translation",
            "Message queue integration",
            "Enterprise service bus"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Integration Management",
          description: "Enterprise system integration and API management interface"
        }
      }
    },
    {
      id: "monitoring-analytics",
      title: "Monitoring & Analytics",
      content: {
        title: "Advanced workflow monitoring and analytics",
        description: "Monitor and analyze workflow performance with real-time insights, predictive analytics, and comprehensive reporting that drives continuous optimization and improvement.",
        buttons: [
          { text: "View Analytics", href: productUrl, variant: "primary" as const },
          { text: "Monitoring setup", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Monitoring & Analytics Features",
          items: [
            "Real-time workflow monitoring",
            "Performance analytics",
            "Predictive insights",
            "Custom dashboards",
            "Alert and notification system",
            "Resource utilization tracking",
            "SLA monitoring",
            "Audit trail and logging"
          ]
        },
        mockup: {
          type: "analytics" as const,
          title: "Workflow Analytics Center",
          description: "Comprehensive workflow performance monitoring and insights"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "AI-native workflow orchestration for enterprise scale",
      description: "Orchestrate complex enterprise workflows with AI intelligence that combines traditional APIs with next-generation capabilities, ensuring tasks are executed with adaptability and scale.",
      link: {
        text: "Learn about AI orchestration",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Intelligent automation with continuous learning",
      description: "Transform manual processes with AI-powered automation that understands context, makes intelligent decisions, and continuously learns to optimize performance and outcomes."
    },
    {
      number: "03",
      title: "Seamless integration with legacy and modern systems", 
      description: "Connect traditional APIs with next-gen AI through intelligent middleware that bridges legacy systems with modern AI capabilities, ensuring seamless operations."
    },
    {
      number: "04",
      title: "Enterprise-grade monitoring and analytics",
      description: "Monitor and analyze workflow performance with real-time insights, predictive analytics, and comprehensive reporting that drives continuous optimization."
    }
  ];

  const customerReference = {
    title: "AI Orchestration Success",
    company: "Enterprise reduces workflow complexity by 80%",
    description: "A Fortune 500 company transformed their enterprise operations using NeuroFlow Orchestrator, dramatically reducing workflow complexity while improving efficiency and scalability.",
    image: "/products/neuroflow/01.png",
    linkText: "Read the orchestration success story",
    linkHref: docsUrl
  };

  const customerLogos = [
    {
      name: "Zapier",
      image: "https://logo.clearbit.com/zapier.com",
      href: docsUrl,
      alt: "Zapier logo"
    },
    {
      name: "Microsoft",
      image: "https://logo.clearbit.com/microsoft.com",
      href: docsUrl,
      alt: "Microsoft logo"
    },
    {
      name: "Salesforce",
      image: "https://logo.clearbit.com/salesforce.com",
      href: docsUrl, 
      alt: "Salesforce logo"
    },
    {
      name: "ServiceNow",
      image: "https://logo.clearbit.com/servicenow.com",
      href: docsUrl,
      alt: "ServiceNow logo"
    },
    {
      name: "Workato", 
      image: "https://logo.clearbit.com/workato.com",
      href: docsUrl,
      alt: "Workato logo"
    },
    {
      name: "MuleSoft",
      image: "https://logo.clearbit.com/mulesoft.com",
      href: docsUrl,
      alt: "MuleSoft logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in NeuroFlow",
      content: {
        title: "Latest AI orchestration features",
        description: "Stay updated with the newest capabilities in AI-native workflow orchestration, intelligent automation, and enterprise integration designed for modern operations.",
        image: "/products/neuroflow/02.png",
        links: [
          { text: "New AI orchestration features", href: docsUrl },
          { text: "Workflow automation updates", href: docsUrl },
          { text: "Integration enhancements", href: docsUrl },
          { text: "Performance improvements", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare orchestration solutions",
      content: {
        title: "Why choose NeuroFlow Orchestrator",
        description: "Compare our AI-native orchestration capabilities with other solutions and see why enterprises choose us for intelligent workflow automation.",
        image: "/products/neuroflow/03.png",
        links: [
          { text: "Orchestration platform comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "ROI analysis", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master AI orchestration",
      content: {
        title: "Learn intelligent workflow automation",
        description: "Master AI-native orchestration with comprehensive guides, best practices, and training materials for developers and enterprise architects.",
        image: "/products/neuroflow/04.png",
        links: [
          { text: "AI orchestration guide", href: docsUrl },
          { text: "Workflow design patterns", href: docsUrl },
          { text: "Integration best practices", href: docsUrl },
          { text: "Performance optimization", href: docsUrl }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Start free",
      href: productUrl,
      icon: "demo"
    },
    {
      title: "View documentation",
      href: docsUrl,
      icon: "tour"
    },
    {
      title: "Contact support",
      href: productUrl,
      icon: "contact"
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="sr-only">NeuroFlow Orchestrator | AI-Native Enterprise Workflow Orchestration</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="NeuroFlow Orchestrator"
          description="AI-native orchestration for enterprise workflows that combines traditional APIs with next-gen AI. Acts as a central brain for operations, ensuring tasks are executed with intelligence, adaptability, and scale. Transform complex workflows into intelligent, self-optimizing systems."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "AI Workflow Orchestration",
            description: "Intelligent enterprise workflow design and monitoring platform"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="NeuroFlow Orchestrator" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose NeuroFlow Orchestrator?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="AI orchestration success stories"
          description="Learn why enterprise architects and developers choose NeuroFlow for intelligent workflow orchestration and automation."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The AI Orchestration Excellence Guide"
          description="We've compiled workflow automation strategies, AI orchestration patterns, and enterprise integration methodologies for modern intelligent operations."
          image="/products/neuroflow/03.png"
          buttonText="Get the orchestration guide"
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
