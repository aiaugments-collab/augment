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

export default function DBConnectPage() {
  const { productUrl, docsUrl } = getAppUrls("db-connect");
  
  const ctaButtons = [
    {
      text: "Connect Data Sources",
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
      id: "database-connectivity",
      image: "/data-connector.svg",
      title: "Universal Database Connectivity",
      description: "Comprehensive database connectivity with native connectors for SQL, NoSQL, and cloud databases with real-time synchronization and change data capture.",
      ctaText: "Connect databases",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "data-warehouse-integration",
      image: "/data-connector.svg",
      title: "Data Warehouse Integration",
      description: "Seamless integration with modern data warehouses including Snowflake, BigQuery, Redshift, and analytical databases with optimized performance.",
      ctaText: "Integrate data warehouses",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "saas-endpoints",
      image: "/data-connector.svg",
      title: "SaaS Endpoint Connectivity",
      description: "Pre-built connectors for popular SaaS platforms with REST API integration, webhook support, and automated data synchronization for analytics workflows.",
      ctaText: "Connect SaaS platforms",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "analytics-replication",
      image: "/data-connector.svg",
      title: "Analytics & Replication Pipelines",
      description: "Advanced data pipelines for analytics and replication with real-time processing, data transformation, and automated synchronization across systems.",
      ctaText: "Build analytics pipelines",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "database-connectors",
      title: "Database Connectors",
      content: {
        title: "Comprehensive database connectivity and synchronization platform",
        description: "Universal database connectivity with native connectors for SQL, NoSQL, and cloud databases with real-time synchronization and automated data replication.",
        buttons: [
          { text: "Connect Databases", href: productUrl, variant: "primary" as const },
          { text: "Database connector guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Database Connectors Features",
          items: [
            "SQL database support",
            "NoSQL connectivity",
            "Cloud database integration",
            "Real-time synchronization",
            "Change data capture",
            "Schema mapping",
            "Connection pooling",
            "Performance optimization"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Database Connectivity Console",
          description: "Universal database connection and synchronization management"
        }
      }
    },
    {
      id: "data-warehouse",
      title: "Data Warehouse",
      content: {
        title: "Modern data warehouse integration and analytics platform",
        description: "Seamless integration with cloud data warehouses and analytical databases with optimized performance, bulk loading, and analytics-ready data pipelines.",
        buttons: [
          { text: "Integrate Data Warehouses", href: productUrl, variant: "primary" as const },
          { text: "Data warehouse best practices", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Data Warehouse Features",
          items: [
            "Snowflake integration",
            "BigQuery connectivity",
            "Redshift support",
            "Azure Synapse",
            "Bulk data loading",
            "Analytics optimization",
            "Schema evolution",
            "Cost optimization"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Data Warehouse Integration Console",
          description: "Cloud data warehouse connectivity and analytics management"
        }
      }
    },
    {
      id: "saas-integration",
      title: "SaaS Integration",
      content: {
        title: "Comprehensive SaaS platform integration and API connectivity",
        description: "Pre-built connectors for popular SaaS platforms with REST API integration, webhook support, and automated data synchronization for business intelligence.",
        buttons: [
          { text: "Connect SaaS Platforms", href: productUrl, variant: "primary" as const },
          { text: "SaaS connector library", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "SaaS Integration Features",
          items: [
            "Pre-built SaaS connectors",
            "REST API integration",
            "Webhook support",
            "OAuth authentication",
            "Rate limiting",
            "Error handling",
            "Data transformation",
            "Custom connectors"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "SaaS Integration Interface",
          description: "SaaS platform connectivity and API integration management"
        }
      }
    },
    {
      id: "analytics-pipelines",
      title: "Analytics Pipelines",
      content: {
        title: "Advanced analytics and data replication pipeline platform",
        description: "Sophisticated data pipelines for analytics and replication with real-time processing, data transformation, and automated workflows for business intelligence.",
        buttons: [
          { text: "Build Analytics Pipelines", href: productUrl, variant: "primary" as const },
          { text: "Pipeline optimization guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Analytics Pipelines Features",
          items: [
            "Real-time processing",
            "Data transformation",
            "Automated workflows",
            "Pipeline orchestration",
            "Data quality checks",
            "Performance monitoring",
            "Error recovery",
            "Scalable architecture"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Analytics Pipeline Center",
          description: "Data analytics and replication pipeline management"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Universal database connectivity with real-time synchronization",
      description: "Comprehensive database connectivity with native connectors for SQL, NoSQL, and cloud databases with real-time synchronization and automated data replication.",
      link: {
        text: "Learn about database connectivity",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Modern data warehouse integration with optimized performance",
      description: "Seamless integration with cloud data warehouses including Snowflake, BigQuery, and Redshift with optimized performance and analytics-ready data pipelines."
    },
    {
      number: "03",
      title: "Pre-built SaaS connectors with automated synchronization", 
      description: "Extensive library of pre-built SaaS connectors with REST API integration, webhook support, and automated data synchronization for business intelligence workflows."
    },
    {
      number: "04",
      title: "Advanced analytics pipelines with real-time processing",
      description: "Sophisticated data pipelines for analytics and replication with real-time processing, data transformation, and automated workflows for comprehensive business intelligence."
    }
  ];

  const customerReference = {
    title: "Data Integration Success",
    company: "Analytics team reduces data pipeline complexity by 75% with unified connectivity",
    description: "A data-driven organization transformed their analytics infrastructure using DataConnector, achieving simplified data integration while improving data quality and real-time insights.",
    image: "/data-connector.svg",
    linkText: "Read the data integration story",
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
      name: "Airbyte",
      image: "https://logo.clearbit.com/airbyte.io",
      href: docsUrl,
      alt: "Airbyte logo"
    },
    {
      name: "Fivetran",
      image: "https://logo.clearbit.com/fivetran.com",
      href: docsUrl, 
      alt: "Fivetran logo"
    },
    {
      name: "Stitch",
      image: "https://logo.clearbit.com/stitchdata.com",
      href: docsUrl,
      alt: "Stitch logo"
    },
    {
      name: "Snowflake", 
      image: "https://logo.clearbit.com/snowflake.com",
      href: docsUrl,
      alt: "Snowflake logo"
    },
    {
      name: "dbt",
      image: "https://logo.clearbit.com/getdbt.com",
      href: docsUrl,
      alt: "dbt logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in DataConnector",
      content: {
        title: "Latest data connectivity and pipeline features",
        description: "Stay updated with the newest capabilities in database connectivity, data warehouse integration, and analytics pipelines for modern data infrastructure.",
        image: "/data-connector.svg",
        links: [
          { text: "New database connectors", href: docsUrl },
          { text: "Data warehouse improvements", href: docsUrl },
          { text: "SaaS integration updates", href: docsUrl },
          { text: "Pipeline enhancements", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare data connectivity solutions",
      content: {
        title: "Why choose DataConnector",
        description: "Compare our data connectivity capabilities with other solutions and see why data engineers choose us for comprehensive database and SaaS integration.",
        image: "/data-connector.svg",
        links: [
          { text: "Data connectivity comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master DataConnector",
      content: {
        title: "Learn data connectivity best practices",
        description: "Master data integration with comprehensive guides, pipeline optimization strategies, and training materials for data engineers and analytics professionals.",
        image: "/data-connector.svg",
        links: [
          { text: "Data connectivity deployment guide", href: docsUrl },
          { text: "Pipeline optimization best practices", href: docsUrl },
          { text: "Analytics integration strategies", href: docsUrl },
          { text: "Troubleshooting guide", href: docsUrl }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Connect data sources",
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
        <h1 className="sr-only">DataConnector | Data Pipelines & Connectors Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="DataConnector"
          description="Connect and sync databases, data warehouses, and SaaS endpoints for analytics and replication with universal connectivity. Comprehensive data integration platform with real-time synchronization and advanced analytics pipelines."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Data Connectivity Console",
            description: "Universal database and SaaS integration management"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="DataConnector" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose DataConnector?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Data integration success stories"
          description="Learn why data engineers and analytics professionals choose DataConnector for comprehensive database connectivity and advanced data pipeline capabilities."
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
          description="We've compiled data connectivity strategies, pipeline optimization techniques, and analytics integration best practices for modern data infrastructure and business intelligence workflows."
          image="/data-connector.svg"
          buttonText="Get the data integration guide"
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
