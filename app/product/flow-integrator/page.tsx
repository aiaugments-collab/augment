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

export default function FlowIntegratorPage() {
  const { productUrl, docsUrl } = getAppUrls("integration-flow");
  
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
      id: "enterprise-integration",
      image: "/flow-integrator.svg",
      title: "Enterprise System Integration",
      description: "Connect disparate systems and applications with powerful integration capabilities, pre-built connectors, and seamless data transformation pipelines.",
      ctaText: "Explore integrations",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "message-routing",
      image: "/flow-integrator.svg",
      title: "Intelligent Message Routing",
      description: "Advanced message routing with content-based routing, transformation capabilities, and enterprise messaging patterns for reliable data flow.",
      ctaText: "Learn about routing",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "workflow-automation",
      image: "/flow-integrator.svg",
      title: "Business Process Automation",
      description: "Automate complex business processes with visual workflow design, conditional logic, and seamless integration with enterprise applications.",
      ctaText: "View automation features",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "data-transformation",
      image: "/flow-integrator.svg",
      title: "Advanced Data Transformation",
      description: "Transform data between systems with powerful mapping tools, format conversion, and real-time data processing capabilities.",
      ctaText: "See transformation features",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "system-integration",
      title: "System Integration",
      content: {
        title: "Comprehensive enterprise system integration platform",
        description: "Connect and integrate enterprise systems with powerful connectors, APIs, and integration patterns for seamless data flow and business process automation.",
        buttons: [
          { text: "Connect Systems", href: productUrl, variant: "primary" as const },
          { text: "Integration patterns", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "System Integration Features",
          items: [
            "Pre-built connectors",
            "API integration",
            "Database connectivity",
            "Cloud service integration",
            "Legacy system support",
            "Real-time synchronization",
            "Batch processing",
            "Error handling & retry"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Integration Management Dashboard",
          description: "Enterprise system integration and connector management"
        }
      }
    },
    {
      id: "message-routing",
      title: "Message Routing",
      content: {
        title: "Advanced message routing and transformation capabilities",
        description: "Intelligent message routing with content-based routing, transformation pipelines, and enterprise messaging patterns for reliable and scalable data flow.",
        buttons: [
          { text: "Setup Message Routing", href: productUrl, variant: "primary" as const },
          { text: "Routing patterns", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Message Routing Features",
          items: [
            "Content-based routing",
            "Message transformation",
            "Protocol translation",
            "Publish-subscribe patterns",
            "Message queuing",
            "Dead letter handling",
            "Load balancing",
            "Message tracing"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Message Routing Console",
          description: "Intelligent message routing and transformation management"
        }
      }
    },
    {
      id: "workflow-design",
      title: "Workflow Design",
      content: {
        title: "Visual workflow design and business process automation",
        description: "Design and automate complex business processes with visual workflow tools, conditional logic, and seamless integration with enterprise systems.",
        buttons: [
          { text: "Design Workflows", href: productUrl, variant: "primary" as const },
          { text: "Workflow templates", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Workflow Design Features",
          items: [
            "Visual workflow designer",
            "Conditional logic",
            "Parallel processing",
            "Error handling workflows",
            "Human task integration",
            "Approval processes",
            "Workflow monitoring",
            "Process analytics"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Workflow Design Studio",
          description: "Visual business process workflow design and automation"
        }
      }
    },
    {
      id: "data-transformation",
      title: "Data Transformation",
      content: {
        title: "Powerful data transformation and mapping capabilities",
        description: "Transform and map data between systems with advanced transformation tools, format conversion, and real-time processing for seamless data integration.",
        buttons: [
          { text: "Transform Data", href: productUrl, variant: "primary" as const },
          { text: "Transformation guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Data Transformation Features",
          items: [
            "Visual data mapping",
            "Format conversion",
            "Data validation",
            "Enrichment functions",
            "Custom transformations",
            "Real-time processing",
            "Batch transformation",
            "Data quality checks"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Data Transformation Studio",
          description: "Advanced data mapping and transformation interface"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Comprehensive enterprise system integration platform",
      description: "Connect and integrate enterprise systems with powerful connectors, APIs, and integration patterns for seamless data flow and automated business processes.",
      link: {
        text: "Learn about system integration",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Advanced message routing and transformation capabilities",
      description: "Intelligent message routing with content-based routing, transformation pipelines, and enterprise messaging patterns for reliable and scalable data flow."
    },
    {
      number: "03",
      title: "Visual workflow design and business process automation", 
      description: "Design and automate complex business processes with visual workflow tools, conditional logic, and seamless integration with enterprise applications."
    },
    {
      number: "04",
      title: "Powerful data transformation and mapping tools",
      description: "Transform and map data between systems with advanced tools, format conversion, and real-time processing capabilities for seamless data integration."
    }
  ];

  const customerReference = {
    title: "Integration Transformation Success",
    company: "Manufacturing company reduces integration time by 90% with automated workflows",
    description: "A global manufacturing company transformed their system integration using FlowIntegrator, achieving dramatic reductions in integration time while improving data accuracy and process automation.",
    image: "/flow-integrator.svg",
    linkText: "Read the integration transformation story",
    linkHref: docsUrl
  };

  const customerLogos = [
    {
      name: "Apache Camel",
      image: "https://logo.clearbit.com/camel.apache.org",
      href: docsUrl,
      alt: "Apache Camel logo"
    },
    {
      name: "MuleSoft",
      image: "https://logo.clearbit.com/mulesoft.com",
      href: docsUrl,
      alt: "MuleSoft logo"
    },
    {
      name: "Talend",
      image: "https://logo.clearbit.com/talend.com",
      href: docsUrl, 
      alt: "Talend logo"
    },
    {
      name: "Informatica",
      image: "https://logo.clearbit.com/informatica.com",
      href: docsUrl,
      alt: "Informatica logo"
    },
    {
      name: "IBM Integration Bus", 
      image: "https://logo.clearbit.com/ibm.com",
      href: docsUrl,
      alt: "IBM Integration Bus logo"
    },
    {
      name: "Microsoft BizTalk",
      image: "https://logo.clearbit.com/microsoft.com",
      href: docsUrl,
      alt: "Microsoft BizTalk logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in FlowIntegrator",
      content: {
        title: "Latest integration and automation features",
        description: "Stay updated with the newest capabilities in enterprise integration, message routing, and business process automation for modern data-driven organizations.",
        image: "/flow-integrator.svg",
        links: [
          { text: "New integration features", href: docsUrl },
          { text: "Routing improvements", href: docsUrl },
          { text: "Workflow enhancements", href: docsUrl },
          { text: "Transformation updates", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare integration solutions",
      content: {
        title: "Why choose FlowIntegrator",
        description: "Compare our enterprise integration capabilities with other solutions and see why integration architects choose us for comprehensive system connectivity and automation.",
        image: "/flow-integrator.svg",
        links: [
          { text: "Integration solution comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master FlowIntegrator",
      content: {
        title: "Learn integration best practices",
        description: "Master enterprise integration with comprehensive guides, best practices, and training materials for integration architects and middleware developers.",
        image: "/flow-integrator.svg",
        links: [
          { text: "Integration patterns guide", href: docsUrl },
          { text: "Message routing best practices", href: docsUrl },
          { text: "Workflow automation strategies", href: docsUrl },
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
      title: "Contact integration team",
      href: productUrl,
      icon: "contact"
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="sr-only">FlowIntegrator | Enterprise Integration & Message Routing Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="FlowIntegrator"
          description="Enterprise integration and message routing platform that connects systems and automates business processes. Advanced connectors, routing capabilities, and transformation pipelines for seamless data flow and workflow automation across enterprise applications."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Integration Management Console",
            description: "Enterprise system integration and workflow automation"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="FlowIntegrator" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose FlowIntegrator?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Integration transformation success stories"
          description="Learn why integration architects and middleware developers choose FlowIntegrator for comprehensive enterprise system connectivity and automation."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Enterprise Integration Guide"
          description="We've compiled integration patterns, message routing strategies, and automation best practices for modern enterprise system connectivity and business process optimization."
          image="/flow-integrator.svg"
          buttonText="Get the integration guide"
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