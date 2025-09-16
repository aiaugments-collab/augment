import { ProductHero } from "@/components/product/ProductHero";
import { ProductPromo } from "@/components/product/ProductPromo";
import { ProductExplorer } from "@/components/product/ProductExplorer";
import { ProductWhyChoose } from "@/components/product/ProductWhyChoose";
import { ProductCustomerLogos } from "@/components/product/ProductCustomerLogos";
import { ProductResources } from "@/components/product/ProductResources";
import { ProductCTABanner } from "@/components/product/ProductCTABanner";
import { ProductGetStarted } from "@/components/product/ProductGetStarted";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export default function AugmentSuitePage() {
  const ctaButtons = [
    {
      text: "Explore Platform",
      href: "/documentation/augmentdb",
      variant: "primary" as const
    },
    {
      text: "Schedule Demo",
      href: "/book-demo",
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "business-intelligence",
      image: "/products/augmentdb/01.png",
      title: "Advanced Business Intelligence",
      description: "Transform your data into actionable insights with AI-powered analytics, real-time dashboards, and predictive intelligence.",
      ctaText: "Learn BI features",
      ctaLink: "/documentation/augmentdb",
      target: "_blank" as const
    },
    {
      id: "unified-platform",
      image: "/products/augmentdb/02.png",
      title: "Unified Data Platform",
      description: "Connect all your business applications in one platform with seamless data integration and real-time synchronization.",
      ctaText: "Explore integration",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "ai-insights",
      image: "/products/augmentdb/03.png",
      title: "AI-Powered Decision Support",
      description: "Make informed decisions with AI-powered insights, predictive analytics, and intelligent recommendations for business optimization.",
      ctaText: "View AI features",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "real-time-analytics",
      image: "/products/augmentdb/04.png",
      title: "Real-Time Analytics & Reporting",
      description: "Monitor business performance with real-time analytics, custom dashboards, and automated reporting for all stakeholders.",
      ctaText: "See analytics tools",
      ctaLink: "/book-demo",
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "business-intelligence",
      title: "Business Intelligence",
      content: {
        title: "Advanced business intelligence and analytics",
        description: "Transform your business data into actionable insights with AI-powered analytics, interactive dashboards, and comprehensive reporting that drives strategic decision-making.",
        buttons: [
          { text: "Try BI Platform", href: "/documentation/augmentdb", variant: "primary" as const },
          { text: "Dashboard examples", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Business Intelligence Features",
          items: [
            "Interactive data dashboards",
            "AI-powered analytics",
            "Predictive modeling",
            "Real-time data processing",
            "Custom report builder",
            "Data visualization tools",
            "Automated insights",
            "Executive scorecards"
          ]
        },
        mockup: {
          type: "analytics" as const,
          title: "Business Intelligence Dashboard",
          description: "Comprehensive business analytics and performance insights"
        }
      }
    },
    {
      id: "data-integration",
      title: "Data Integration",
      content: {
        title: "Unified data platform and integration",
        description: "Connect all your business applications and data sources in one unified platform with seamless integration, real-time synchronization, and comprehensive data management.",
        buttons: [
          { text: "Explore Integration", href: "/documentation/augmentdb", variant: "primary" as const },
          { text: "Integration guide", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Data Integration Features",
          items: [
            "Multi-source data integration",
            "Real-time data synchronization",
            "ETL/ELT processing",
            "Data quality management",
            "API connectivity",
            "Cloud data integration",
            "Data governance tools",
            "Master data management"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Data Integration Center",
          description: "Unified data platform with real-time integration monitoring"
        }
      }
    },
    {
      id: "ai-insights",
      title: "AI Insights",
      content: {
        title: "AI-powered decision support and insights",
        description: "Leverage artificial intelligence to uncover hidden patterns, predict future trends, and provide intelligent recommendations that drive business optimization and growth.",
        buttons: [
          { text: "Try AI Insights", href: "/documentation/augmentdb", variant: "primary" as const },
          { text: "AI capabilities", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "AI Insights Features",
          items: [
            "Predictive analytics",
            "Anomaly detection",
            "Pattern recognition",
            "Intelligent recommendations",
            "Automated insights",
            "Natural language queries",
            "Machine learning models",
            "AI-driven forecasting"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "AI Insights Assistant",
          description: "Intelligent business insights and AI-powered recommendations"
        }
      }
    },
    {
      id: "reporting-platform",
      title: "Reporting Platform",
      content: {
        title: "Comprehensive reporting and visualization",
        description: "Create stunning reports and visualizations with drag-and-drop report builder, automated report distribution, and interactive dashboards for all stakeholders.",
        buttons: [
          { text: "View Reporting Tools", href: "/documentation/augmentdb", variant: "primary" as const },
          { text: "Report templates", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Reporting Platform Features",
          items: [
            "Drag-and-drop report builder",
            "Interactive visualizations",
            "Automated report delivery",
            "Custom dashboard creation",
            "Mobile-responsive reports",
            "Scheduled reporting",
            "Export to multiple formats",
            "Collaborative reporting"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Report Builder",
          description: "Intuitive report creation and dashboard design interface"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Unified business intelligence and analytics platform",
      description: "Transform your business data into actionable insights with AI-powered analytics, real-time dashboards, and comprehensive reporting that connects all your business applications.",
      link: {
        text: "Learn about data platform",
        href: "/documentation/augmentdb"
      }
    },
    {
      number: "02", 
      title: "AI-powered decision support and insights",
      description: "Leverage artificial intelligence to uncover hidden patterns, predict future trends, and provide intelligent recommendations that drive business optimization and strategic growth."
    },
    {
      number: "03",
      title: "Seamless data integration and management", 
      description: "Connect all your business applications and data sources in one unified platform with real-time synchronization, comprehensive data management, and governance tools."
    },
    {
      number: "04",
      title: "Advanced reporting and visualization capabilities",
      description: "Create stunning reports and interactive dashboards with drag-and-drop builders, automated distribution, and comprehensive visualization tools for all stakeholders."
    }
  ];

  const customerReference = {
    title: "Data Intelligence Success",
    company: "Enterprise achieves 200% faster insights delivery",
    description: "A Fortune 500 company transformed their data analytics using our unified business intelligence platform, achieving dramatically faster insights delivery and improved decision-making.",
    image: "/products/augmentdb/01.png",
    linkText: "Read the data transformation story",
    linkHref: "/book-demo"
  };

  const customerLogos = [
    {
      name: "Tableau",
      image: "https://logo.clearbit.com/tableau.com",
      href: "/book-demo",
      alt: "Tableau logo"
    },
    {
      name: "Microsoft",
      image: "https://logo.clearbit.com/microsoft.com",
      href: "/book-demo",
      alt: "Microsoft logo"
    },
    {
      name: "Snowflake",
      image: "https://logo.clearbit.com/snowflake.com",
      href: "/book-demo", 
      alt: "Snowflake logo"
    },
    {
      name: "Databricks",
      image: "https://logo.clearbit.com/databricks.com",
      href: "/book-demo",
      alt: "Databricks logo"
    },
    {
      name: "Looker", 
      image: "https://logo.clearbit.com/looker.com",
      href: "/book-demo",
      alt: "Looker logo"
    },
    {
      name: "Palantir",
      image: "https://logo.clearbit.com/palantir.com",
      href: "/book-demo",
      alt: "Palantir logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in Augment Suite",
      content: {
        title: "Latest business intelligence features",
        description: "Stay updated with the newest capabilities in AI analytics, data integration, and reporting designed for modern business intelligence operations.",
        image: "/products/augmentdb/02.png",
        links: [
          { text: "New AI analytics features", href: "/book-demo" },
          { text: "Data integration updates", href: "/book-demo" },
          { text: "Reporting enhancements", href: "/book-demo" },
          { text: "Platform improvements", href: "/book-demo" }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare BI solutions",
      content: {
        title: "Why choose our business intelligence platform",
        description: "Compare our comprehensive BI capabilities with other solutions and see why data teams choose us for unified analytics and intelligent insights.",
        image: "/products/augmentdb/03.png",
        links: [
          { text: "BI platform comparison", href: "/book-demo" },
          { text: "Feature comparison matrix", href: "/book-demo" },
          { text: "Implementation roadmap", href: "/book-demo" },
          { text: "Total value analysis", href: "/book-demo" }
        ]
      }
    },
    {
      id: "learning",
      title: "Master business intelligence",
      content: {
        title: "Learn advanced analytics and BI",
        description: "Master business intelligence with comprehensive guides, best practices, and training materials for data professionals and analytics teams.",
        image: "/products/augmentdb/04.png",
        links: [
          { text: "BI implementation guide", href: "/book-demo" },
          { text: "Data visualization best practices", href: "/book-demo" },
          { text: "AI analytics training", href: "/book-demo" },
          { text: "Dashboard design principles", href: "/book-demo" }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Explore platform",
      href: "/documentation/augmentdb",
      icon: "demo"
    },
    {
      title: "Schedule demo",
      href: "/book-demo",
      icon: "tour"
    },
    {
      title: "Contact sales",
      href: "/book-demo",
      icon: "contact"
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="sr-only">Augment Suite | Unified Business Intelligence & Analytics Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="Augment Suite"
          description="Unified business intelligence and analytics platform that connects all your business applications, providing real-time insights, predictive analytics, and AI-powered decision support. Transform your data into actionable intelligence for strategic business growth."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "analytics",
            title: "Business Intelligence Suite",
            description: "Comprehensive business analytics and data intelligence platform"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="Augment Suite" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose our Augment Suite?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Business intelligence success stories"
          description="Learn why data teams and business leaders choose our platform for unified analytics and intelligent business insights."
          viewMoreText="View more success stories"
          viewMoreHref="/book-demo"
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Business Intelligence Excellence Guide"
          description="We've compiled data analytics strategies, BI implementation best practices, and intelligent insights methodologies for modern data-driven organizations."
          image="/products/augmentdb/03.png"
          buttonText="Get the BI guide"
          buttonHref="/book-demo"
        />
        <ProductGetStarted
          title="Get Started"
          actions={getStartedActions}
        />
      </main>
    </div>
  );
}
