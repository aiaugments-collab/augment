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

export default function AIWorkflowBuilderPage() {
  const { productUrl, docsUrl } = getAppUrls("ai-workflow-builder");
  
  const ctaButtons = [
    {
      text: "Build Workflows",
      href: productUrl,
      variant: "primary" as const
    },
    {
      text: "Workflow Documentation",
      href: docsUrl,
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "natural-language-automation",
      image: "/ai-workflow-builder.svg",
      title: "Natural Language to Automation",
      description: "AI-powered workflow automation tool that converts natural language descriptions into executable automation workflows with intelligent API connections and service integrations.",
      ctaText: "Create workflows",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "intelligent-api-connections",
      image: "/ai-workflow-builder.svg",
      title: "Intelligent API Connections",
      description: "AI automatically connects APIs, services, and tools to create complex automation pipelines based on your natural language workflow descriptions and requirements.",
      ctaText: "Connect APIs",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "adaptive-workflows",
      image: "/ai-workflow-builder.svg",
      title: "Adaptive Workflow Execution",
      description: "Machine learning algorithms adapt workflow execution based on performance data, error patterns, and optimization opportunities for maximum efficiency and reliability.",
      ctaText: "Optimize workflows",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "nlp-processing",
      image: "/ai-workflow-builder.svg",
      title: "Advanced NLP Processing",
      description: "Sophisticated natural language processing understands complex workflow requirements, business logic, and conditional operations from simple text descriptions.",
      ctaText: "Process language",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "natural-language-workflows",
      title: "Natural Language Workflows",
      content: {
        title: "AI-powered natural language to workflow automation",
        description: "Advanced natural language processing converts simple text descriptions into complex executable automation workflows with intelligent API connections and service integrations.",
        buttons: [
          { text: "Create Workflow", href: productUrl, variant: "primary" as const },
          { text: "NLP workflow guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Natural Language Features",
          items: [
            "Text-to-workflow conversion",
            "Business logic understanding",
            "Conditional operation parsing",
            "Intent recognition",
            "Context awareness",
            "Multi-step process generation",
            "Error handling automation",
            "Workflow validation"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "AI Workflow Assistant",
          description: "Natural language workflow creation and automation platform"
        }
      }
    },
    {
      id: "intelligent-integrations",
      title: "Intelligent Integrations",
      content: {
        title: "AI-driven API and service integration automation",
        description: "Machine learning algorithms automatically discover, connect, and integrate APIs, services, and tools to create complex automation pipelines based on workflow requirements.",
        buttons: [
          { text: "Connect Services", href: productUrl, variant: "primary" as const },
          { text: "Integration guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Integration Features",
          items: [
            "Automatic API discovery",
            "Service mapping",
            "Data transformation",
            "Authentication handling",
            "Rate limiting management",
            "Error retry logic",
            "Webhook configuration",
            "Real-time synchronization"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Integration Management Console",
          description: "AI-powered service integration and API connection platform"
        }
      }
    },
    {
      id: "workflow-optimization",
      title: "Workflow Optimization",
      content: {
        title: "Machine learning-powered workflow optimization platform",
        description: "AI algorithms analyze workflow performance, identify bottlenecks, and automatically optimize execution paths for improved efficiency, reliability, and cost-effectiveness.",
        buttons: [
          { text: "Optimize Workflows", href: productUrl, variant: "primary" as const },
          { text: "Optimization guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Optimization Features",
          items: [
            "Performance analysis",
            "Bottleneck detection",
            "Execution path optimization",
            "Resource allocation",
            "Cost optimization",
            "Parallel processing",
            "Caching strategies",
            "Predictive scaling"
          ]
        },
        mockup: {
          type: "analytics" as const,
          title: "Workflow Analytics Center",
          description: "AI-driven workflow performance analysis and optimization"
        }
      }
    },
    {
      id: "automation-management",
      title: "Automation Management",
      content: {
        title: "Comprehensive automation workflow management platform",
        description: "Advanced workflow management with monitoring, debugging, version control, and intelligent maintenance for enterprise-scale automation operations and governance.",
        buttons: [
          { text: "Manage Automation", href: productUrl, variant: "primary" as const },
          { text: "Management guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Management Features",
          items: [
            "Workflow monitoring",
            "Real-time debugging",
            "Version control",
            "Rollback capabilities",
            "Access control",
            "Audit logging",
            "Performance metrics",
            "Alert management"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Automation Management Console",
          description: "Comprehensive workflow monitoring and management platform"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Natural language to intelligent automation workflows",
      description: "Advanced natural language processing converts simple text descriptions into complex executable automation workflows with intelligent API connections and service integrations using AI technology.",
      link: {
        text: "Learn about natural language automation",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Intelligent API connections with automated service mapping",
      description: "AI algorithms automatically discover, connect, and integrate APIs, services, and tools to create complex automation pipelines with intelligent data transformation and error handling."
    },
    {
      number: "03",
      title: "Adaptive workflow optimization with machine learning", 
      description: "Machine learning algorithms analyze workflow performance, identify bottlenecks, and automatically optimize execution paths for improved efficiency, reliability, and cost-effectiveness."
    },
    {
      number: "04",
      title: "Enterprise-scale automation management and governance",
      description: "Comprehensive workflow management with monitoring, debugging, version control, and intelligent maintenance for enterprise-scale automation operations and compliance requirements."
    }
  ];

  const customerReference = {
    title: "Automation Transformation Success",
    company: "Operations team reduces manual work by 90% with AI-powered workflow automation",
    description: "A leading technology company transformed their operations using AI WorkflowBuilder, eliminating manual processes and achieving unprecedented automation efficiency.",
    image: "/ai-workflow-builder.svg",
    linkText: "Read the automation transformation story",
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
      name: "Microsoft Power Automate",
      image: "https://logo.clearbit.com/microsoft.com",
      href: docsUrl,
      alt: "Microsoft logo"
    },
    {
      name: "Integromat",
      image: "https://logo.clearbit.com/integromat.com",
      href: docsUrl, 
      alt: "Integromat logo"
    },
    {
      name: "IFTTT",
      image: "https://logo.clearbit.com/ifttt.com",
      href: docsUrl,
      alt: "IFTTT logo"
    },
    {
      name: "Workato", 
      image: "https://logo.clearbit.com/workato.com",
      href: docsUrl,
      alt: "Workato logo"
    },
    {
      name: "UiPath",
      image: "https://logo.clearbit.com/uipath.com",
      href: docsUrl,
      alt: "UiPath logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in AI WorkflowBuilder",
      content: {
        title: "Latest AI-powered workflow automation features",
        description: "Stay updated with the newest capabilities in natural language processing, intelligent integrations, and workflow optimization for modern automation operations.",
        image: "/ai-workflow-builder.svg",
        links: [
          { text: "New NLP features", href: docsUrl },
          { text: "Integration enhancements", href: docsUrl },
          { text: "Optimization improvements", href: docsUrl },
          { text: "Management tool updates", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare workflow automation solutions",
      content: {
        title: "Why choose AI WorkflowBuilder",
        description: "Compare our AI-powered workflow automation capabilities with other solutions and see why operations teams choose us for intelligent automation and natural language processing.",
        image: "/ai-workflow-builder.svg",
        links: [
          { text: "Workflow automation comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master AI WorkflowBuilder",
      content: {
        title: "Learn AI-powered workflow automation best practices",
        description: "Master intelligent automation with comprehensive guides, workflow design patterns, and training materials for operations professionals and automation engineers.",
        image: "/ai-workflow-builder.svg",
        links: [
          { text: "AI workflow automation guide", href: docsUrl },
          { text: "Natural language processing tips", href: docsUrl },
          { text: "Integration best practices", href: docsUrl },
          { text: "Optimization strategies", href: docsUrl }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Build workflows",
      href: productUrl,
      icon: "demo"
    },
    {
      title: "Workflow documentation",
      href: docsUrl,
      icon: "tour"
    },
    {
      title: "Contact automation team",
      href: productUrl,
      icon: "contact"
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="sr-only">AI WorkflowBuilder | Natural Language to Intelligent Automation Workflows</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="AI WorkflowBuilder"
          description="AI-powered workflow automation tool that converts natural language descriptions into executable automation workflows. Intelligently connects APIs, services, and tools to create complex automation pipelines from simple text descriptions with advanced NLP and machine learning."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "chat",
            title: "AI Workflow Automation Platform",
            description: "Natural language to intelligent automation workflow creation"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="AI WorkflowBuilder" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose AI WorkflowBuilder?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Automation transformation success stories"
          description="Learn why operations professionals and automation engineers choose AI WorkflowBuilder for intelligent workflow creation, natural language processing, and automation management."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The AI Workflow Automation Excellence Guide"
          description="We've compiled intelligent automation strategies, natural language processing techniques, and workflow optimization best practices for modern operations teams."
          image="/ai-workflow-builder.svg"
          buttonText="Get the automation guide"
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
