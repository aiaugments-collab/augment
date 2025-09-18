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

export default function IntegrationAutomationPage() {
  const { productUrl, docsUrl } = getAppUrls("integration-automation");
  
  const ctaButtons = [
    {
      text: "Start Integration",
      href: productUrl,
      variant: "primary" as const
    },
    {
      text: "View Connectors",
      href: docsUrl,
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "etl-pipelines",
      image: "/data-bridge.svg",
      title: "Advanced ETL Pipeline Builder",
      description: "Sophisticated ETL workflows with visual pipeline design, data transformation, and automated orchestration for complex data integration scenarios.",
      ctaText: "Build ETL pipelines",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "streaming-connectors",
      image: "/data-bridge.svg",
      title: "Real-Time Streaming Connectors",
      description: "High-performance streaming data connectors with real-time processing, event-driven architectures, and low-latency data integration.",
      ctaText: "Connect streaming data",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "data-orchestration",
      image: "/data-bridge.svg",
      title: "Intelligent Data Orchestration",
      description: "Automated data workflow orchestration with dependency management, scheduling, and monitoring for enterprise-scale data operations.",
      ctaText: "Orchestrate workflows",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "system-integration",
      image: "/data-bridge.svg",
      title: "Enterprise System Integration",
      description: "Comprehensive system integration with pre-built connectors, API management, and seamless data flow across enterprise applications.",
      ctaText: "Integrate systems",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "etl-processing",
      title: "ETL Processing",
      content: {
        title: "Advanced ETL and data transformation platform",
        description: "Comprehensive ETL capabilities with visual pipeline design, complex data transformations, and automated orchestration for enterprise data integration workflows.",
        buttons: [
          { text: "Create ETL Pipeline", href: productUrl, variant: "primary" as const },
          { text: "ETL templates", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "ETL Processing Features",
          items: [
            "Visual pipeline design",
            "Data transformation",
            "Schema mapping",
            "Data validation",
            "Error handling",
            "Performance optimization",
            "Parallel processing",
            "Monitoring & alerting"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "ETL Pipeline Console",
          description: "Data transformation and ETL workflow management"
        }
      }
    },
    {
      id: "streaming-integration",
      title: "Streaming Integration",
      content: {
        title: "Real-time streaming data integration platform",
        description: "High-performance streaming connectors with real-time processing, event-driven architectures, and low-latency data integration for modern data platforms.",
        buttons: [
          { text: "Setup Streaming", href: productUrl, variant: "primary" as const },
          { text: "Streaming connectors", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Streaming Integration Features",
          items: [
            "Real-time processing",
            "Event-driven architecture",
            "Stream processing",
            "Message queuing",
            "Backpressure handling",
            "Fault tolerance",
            "Scalable throughput",
            "Low-latency ingestion"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Streaming Data Console",
          description: "Real-time data streaming and connector management"
        }
      }
    },
    {
      id: "workflow-orchestration",
      title: "Workflow Orchestration",
      content: {
        title: "Intelligent data workflow orchestration and automation",
        description: "Advanced workflow orchestration with dependency management, automated scheduling, and comprehensive monitoring for complex data operations and workflows.",
        buttons: [
          { text: "Orchestrate Workflows", href: productUrl, variant: "primary" as const },
          { text: "Workflow templates", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Workflow Orchestration Features",
          items: [
            "Dependency management",
            "Automated scheduling",
            "Workflow monitoring",
            "Error recovery",
            "Resource allocation",
            "Performance tuning",
            "Audit logging",
            "Notification systems"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Workflow Orchestration Interface",
          description: "Data workflow automation and dependency management"
        }
      }
    },
    {
      id: "connector-management",
      title: "Connector Management",
      content: {
        title: "Comprehensive connector library and management platform",
        description: "Extensive connector ecosystem with pre-built integrations, custom connector development, and centralized management for enterprise system connectivity.",
        buttons: [
          { text: "Browse Connectors", href: productUrl, variant: "primary" as const },
          { text: "Connector development", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Connector Management Features",
          items: [
            "Pre-built connectors",
            "Custom connector SDK",
            "API management",
            "Connection pooling",
            "Security policies",
            "Version management",
            "Performance monitoring",
            "Certification process"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Connector Management Center",
          description: "Enterprise connector library and integration management"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Advanced ETL pipelines with visual design and automation",
      description: "Sophisticated ETL capabilities with visual pipeline builder, complex data transformations, and automated orchestration for enterprise-scale data integration workflows.",
      link: {
        text: "Learn about ETL capabilities",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Real-time streaming connectors with high performance",
      description: "High-performance streaming data integration with event-driven architectures, low-latency processing, and scalable throughput for modern data platforms."
    },
    {
      number: "03",
      title: "Intelligent workflow orchestration across systems", 
      description: "Advanced workflow orchestration with dependency management, automated scheduling, and comprehensive monitoring for complex data operations and enterprise workflows."
    },
    {
      number: "04",
      title: "Comprehensive connector ecosystem and management",
      description: "Extensive pre-built connector library with custom connector development, API management, and centralized governance for enterprise system connectivity."
    }
  ];

  const customerReference = {
    title: "Data Integration Transformation",
    company: "Data team reduces integration time by 80% with automated ETL pipelines",
    description: "A growing data-driven company transformed their integration processes using DataBridge, achieving dramatic reductions in development time while improving data quality and reliability.",
    image: "/data-bridge.svg",
    linkText: "Read the data integration story",
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
      name: "Apache Kafka",
      image: "https://logo.clearbit.com/kafka.apache.org",
      href: docsUrl,
      alt: "Apache Kafka logo"
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
      name: "Apache NiFi", 
      image: "https://logo.clearbit.com/nifi.apache.org",
      href: docsUrl,
      alt: "Apache NiFi logo"
    },
    {
      name: "Fivetran",
      image: "https://logo.clearbit.com/fivetran.com",
      href: docsUrl,
      alt: "Fivetran logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in DataBridge",
      content: {
        title: "Latest ETL and integration features",
        description: "Stay updated with the newest capabilities in ETL processing, streaming connectors, and workflow orchestration for modern data integration platforms.",
        image: "/data-bridge.svg",
        links: [
          { text: "New ETL features", href: docsUrl },
          { text: "Streaming improvements", href: docsUrl },
          { text: "Connector updates", href: docsUrl },
          { text: "Orchestration enhancements", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare integration solutions",
      content: {
        title: "Why choose DataBridge",
        description: "Compare our data integration capabilities with other solutions and see why data engineers choose us for comprehensive ETL and streaming integration.",
        image: "/data-bridge.svg",
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
      title: "Master DataBridge",
      content: {
        title: "Learn data integration best practices",
        description: "Master data integration with comprehensive guides, ETL patterns, and training materials for data engineers and integration specialists.",
        image: "/data-bridge.svg",
        links: [
          { text: "Data integration deployment guide", href: docsUrl },
          { text: "ETL design best practices", href: docsUrl },
          { text: "Streaming architecture strategies", href: docsUrl },
          { text: "Troubleshooting guide", href: docsUrl }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Start integration",
      href: productUrl,
      icon: "demo"
    },
    {
      title: "View connectors",
      href: docsUrl,
      icon: "tour"
    },
    {
      title: "Contact data team",
      href: productUrl,
      icon: "contact"
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="sr-only">DataBridge | ETL & Data Integration Pipelines Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="DataBridge"
          description="Data integration tool for ETL, streaming connectors, and orchestration across systems with advanced workflow automation. Enterprise data integration platform with visual ETL pipelines, real-time streaming, and comprehensive connector ecosystem."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Data Integration Console",
            description: "ETL pipeline and streaming connector management"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="DataBridge" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose DataBridge?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Data integration success stories"
          description="Learn why data engineers and integration specialists choose DataBridge for comprehensive ETL processing and enterprise data integration capabilities."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Data Integration Guide"
          description="We've compiled ETL strategies, streaming architecture patterns, and data integration best practices for modern data platforms and enterprise integration workflows."
          image="/data-bridge.svg"
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
