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

export default function CloudBridgePage() {
  const { productUrl, docsUrl } = getAppUrls("cloud-bridge");
  
  const ctaButtons = [
    {
      text: "Connect Systems",
      href: productUrl,
      variant: "primary" as const
    },
    {
      text: "Integration Connectors",
      href: docsUrl,
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "data-integration",
      image: "/cloud-bridge.svg",
      title: "Comprehensive Data Integration Platform",
      description: "Advanced data integration with seamless connectors for SaaS applications, databases, and cloud services with real-time synchronization and transformation.",
      ctaText: "Integrate data sources",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "workflow-automation",
      image: "/cloud-bridge.svg",
      title: "Intelligent Workflow Automation",
      description: "Sophisticated workflow automation with business process optimization, event-driven triggers, and automated data flows across enterprise systems.",
      ctaText: "Automate workflows",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "saas-connectors",
      image: "/cloud-bridge.svg",
      title: "Pre-Built SaaS Connectors",
      description: "Extensive library of pre-built connectors for popular SaaS applications, CRM systems, ERP platforms, and cloud services with plug-and-play integration.",
      ctaText: "Browse SaaS connectors",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "cloud-automation",
      image: "/cloud-bridge.svg",
      title: "Multi-Cloud Automation Platform",
      description: "Cross-cloud automation with multi-cloud orchestration, resource management, and unified workflow automation across AWS, Azure, GCP, and hybrid environments.",
      ctaText: "Automate multi-cloud",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "integration-platform",
      title: "Integration Platform",
      content: {
        title: "Comprehensive data integration and connectivity platform",
        description: "Advanced integration capabilities with seamless connectors for SaaS applications, databases, and cloud services with real-time data synchronization.",
        buttons: [
          { text: "Integrate Systems", href: productUrl, variant: "primary" as const },
          { text: "Integration patterns", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Integration Platform Features",
          items: [
            "SaaS connectors",
            "Database integration",
            "Cloud service connectivity",
            "Real-time synchronization",
            "Data transformation",
            "API management",
            "Event streaming",
            "Error handling"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Integration Platform Console",
          description: "Data integration and connectivity management interface"
        }
      }
    },
    {
      id: "workflow-orchestration",
      title: "Workflow Orchestration",
      content: {
        title: "Advanced workflow automation and business process optimization",
        description: "Sophisticated workflow orchestration with business process automation, event-driven triggers, and intelligent automation across enterprise systems.",
        buttons: [
          { text: "Automate Workflows", href: productUrl, variant: "primary" as const },
          { text: "Workflow templates", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Workflow Orchestration Features",
          items: [
            "Business process automation",
            "Event-driven triggers",
            "Workflow templates",
            "Conditional logic",
            "Parallel processing",
            "Error recovery",
            "Monitoring & alerting",
            "Performance optimization"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Workflow Orchestration Console",
          description: "Business process automation and workflow management"
        }
      }
    },
    {
      id: "connector-library",
      title: "Connector Library",
      content: {
        title: "Extensive connector ecosystem and integration marketplace",
        description: "Comprehensive connector library with pre-built integrations for popular SaaS applications, enterprise systems, and cloud platforms with plug-and-play setup.",
        buttons: [
          { text: "Browse Connectors", href: productUrl, variant: "primary" as const },
          { text: "Connector development", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Connector Library Features",
          items: [
            "Pre-built connectors",
            "SaaS integrations",
            "Enterprise systems",
            "Cloud platforms",
            "Custom connector SDK",
            "Connector marketplace",
            "Version management",
            "Security compliance"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Connector Marketplace Interface",
          description: "Integration connector library and marketplace management"
        }
      }
    },
    {
      id: "multi-cloud-automation",
      title: "Multi-Cloud Automation",
      content: {
        title: "Cross-cloud automation and orchestration platform",
        description: "Advanced multi-cloud automation with cross-cloud orchestration, resource management, and unified workflow automation across multiple cloud providers.",
        buttons: [
          { text: "Automate Multi-Cloud", href: productUrl, variant: "primary" as const },
          { text: "Multi-cloud strategies", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Multi-Cloud Automation Features",
          items: [
            "Cross-cloud orchestration",
            "Resource management",
            "Unified workflows",
            "Cloud abstraction",
            "Cost optimization",
            "Security automation",
            "Compliance management",
            "Performance monitoring"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Multi-Cloud Automation Center",
          description: "Cross-cloud orchestration and automation management"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Comprehensive data integration with extensive SaaS connectors",
      description: "Advanced integration platform with seamless connectors for SaaS applications, databases, and cloud services with real-time synchronization and data transformation.",
      link: {
        text: "Learn about data integration",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Intelligent workflow automation with business process optimization",
      description: "Sophisticated workflow orchestration with business process automation, event-driven triggers, and intelligent automation across enterprise systems and applications."
    },
    {
      number: "03",
      title: "Extensive connector library with plug-and-play integration", 
      description: "Comprehensive connector ecosystem with pre-built integrations for popular SaaS applications, enterprise systems, and cloud platforms with marketplace support."
    },
    {
      number: "04",
      title: "Multi-cloud automation with cross-cloud orchestration",
      description: "Advanced multi-cloud automation capabilities with cross-cloud orchestration, resource management, and unified workflow automation across multiple cloud providers."
    }
  ];

  const customerReference = {
    title: "Integration Transformation Success",
    company: "Enterprise reduces integration time by 80% with automated data workflows",
    description: "A global enterprise transformed their system integration using CloudBridge, achieving dramatic reductions in integration complexity while improving data flow reliability and automation.",
    image: "/cloud-bridge.svg",
    linkText: "Read the integration transformation story",
    linkHref: docsUrl
  };

  const customerLogos = [
    {
      name: "Apache Airflow",
      image: "https://logo.clearbit.com/airflow.apache.org",
      href: docsUrl,
      alt: "Apache Airflow logo"
    },
    {
      name: "Zapier",
      image: "https://logo.clearbit.com/zapier.com",
      href: docsUrl,
      alt: "Zapier logo"
    },
    {
      name: "MuleSoft",
      image: "https://logo.clearbit.com/mulesoft.com",
      href: docsUrl, 
      alt: "MuleSoft logo"
    },
    {
      name: "Workato",
      image: "https://logo.clearbit.com/workato.com",
      href: docsUrl,
      alt: "Workato logo"
    },
    {
      name: "Microsoft Power Automate", 
      image: "https://logo.clearbit.com/microsoft.com",
      href: docsUrl,
      alt: "Microsoft Power Automate logo"
    },
    {
      name: "Integromat",
      image: "https://logo.clearbit.com/integromat.com",
      href: docsUrl,
      alt: "Integromat logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in CloudBridge",
      content: {
        title: "Latest integration and automation features",
        description: "Stay updated with the newest capabilities in data integration, workflow automation, and multi-cloud orchestration for modern enterprise integration needs.",
        image: "/cloud-bridge.svg",
        links: [
          { text: "New integration features", href: docsUrl },
          { text: "Workflow automation improvements", href: docsUrl },
          { text: "Connector updates", href: docsUrl },
          { text: "Multi-cloud enhancements", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare integration solutions",
      content: {
        title: "Why choose CloudBridge",
        description: "Compare our data integration capabilities with other solutions and see why integration teams choose us for comprehensive workflow automation and connectivity.",
        image: "/cloud-bridge.svg",
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
      title: "Master CloudBridge",
      content: {
        title: "Learn integration and automation best practices",
        description: "Master data integration with comprehensive guides, workflow automation strategies, and training materials for integration architects and developers.",
        image: "/cloud-bridge.svg",
        links: [
          { text: "Integration deployment guide", href: docsUrl },
          { text: "Workflow automation best practices", href: docsUrl },
          { text: "Multi-cloud integration strategies", href: docsUrl },
          { text: "Troubleshooting guide", href: docsUrl }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Connect systems",
      href: productUrl,
      icon: "demo"
    },
    {
      title: "Integration connectors",
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
        <h1 className="sr-only">CloudBridge | Multi-Cloud Automation & Workflows Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="CloudBridge"
          description="Integration connectors for SaaS, databases, and cloud services with workflow automation and multi-cloud orchestration. Comprehensive data integration platform with intelligent automation and extensive connector ecosystem."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Integration Automation Console",
            description: "Multi-cloud integration and workflow automation management"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="CloudBridge" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose CloudBridge?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Integration automation success stories"
          description="Learn why integration architects and developers choose CloudBridge for comprehensive data integration and multi-cloud workflow automation capabilities."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Integration Automation Guide"
          description="We've compiled data integration strategies, workflow automation patterns, and multi-cloud orchestration best practices for modern enterprise integration architectures."
          image="/cloud-bridge.svg"
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
