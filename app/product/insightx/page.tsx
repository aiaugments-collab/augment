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

export default function InsightXPage() {
  const { productUrl, docsUrl } = getAppUrls("data-analytics");
  
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
      id: "self-serve-analytics",
      image: "/insightx.svg",
      title: "Self-Service Analytics Platform",
      description: "Empower business teams with self-service analytics capabilities, intuitive dashboards, and drag-and-drop report building for data-driven decision making.",
      ctaText: "Explore self-service analytics",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "advanced-dashboards",
      image: "/insightx.svg",
      title: "Interactive Dashboards & Visualizations",
      description: "Create stunning interactive dashboards with advanced visualizations, real-time data updates, and collaborative sharing capabilities.",
      ctaText: "Learn about dashboards",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "sql-analysis",
      image: "/insightx.svg",
      title: "Advanced SQL Analysis Tools",
      description: "Powerful SQL editor with syntax highlighting, query optimization, and collaborative query development for advanced data analysis.",
      ctaText: "View SQL features",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "business-intelligence",
      image: "/insightx.svg",
      title: "Enterprise Business Intelligence",
      description: "Comprehensive BI platform with automated reporting, scheduled deliveries, and enterprise-grade security for organizational insights.",
      ctaText: "See BI capabilities",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "data-exploration",
      title: "Data Exploration",
      content: {
        title: "Interactive data exploration and discovery platform",
        description: "Explore and analyze data with intuitive tools, interactive visualizations, and powerful filtering capabilities for comprehensive data discovery and insights.",
        buttons: [
          { text: "Explore Data", href: productUrl, variant: "primary" as const },
          { text: "Data exploration guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Data Exploration Features",
          items: [
            "Interactive data discovery",
            "Drag-and-drop interface",
            "Advanced filtering",
            "Data profiling",
            "Statistical analysis",
            "Trend identification",
            "Correlation analysis",
            "Real-time exploration"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Data Exploration Dashboard",
          description: "Interactive data discovery and analysis interface"
        }
      }
    },
    {
      id: "visualization-dashboards",
      title: "Visualization & Dashboards",
      content: {
        title: "Advanced visualization and dashboard creation platform",
        description: "Create stunning interactive dashboards with rich visualizations, real-time data updates, and collaborative sharing for comprehensive business insights.",
        buttons: [
          { text: "Create Dashboards", href: productUrl, variant: "primary" as const },
          { text: "Visualization gallery", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Visualization & Dashboard Features",
          items: [
            "Rich visualization library",
            "Interactive dashboards",
            "Real-time data updates",
            "Custom chart types",
            "Responsive design",
            "Collaborative sharing",
            "Embedding capabilities",
            "Mobile optimization"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Dashboard Builder",
          description: "Advanced dashboard creation and visualization interface"
        }
      }
    },
    {
      id: "sql-analytics",
      title: "SQL Analytics",
      content: {
        title: "Powerful SQL analysis and query development environment",
        description: "Advanced SQL editor with intelligent features, query optimization, and collaborative development capabilities for sophisticated data analysis workflows.",
        buttons: [
          { text: "Write SQL Queries", href: productUrl, variant: "primary" as const },
          { text: "SQL best practices", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "SQL Analytics Features",
          items: [
            "Advanced SQL editor",
            "Syntax highlighting",
            "Query optimization",
            "Autocomplete & suggestions",
            "Query performance analysis",
            "Collaborative development",
            "Version control",
            "Query scheduling"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "SQL Analysis Workbench",
          description: "Advanced SQL query development and analysis environment"
        }
      }
    },
    {
      id: "reporting-intelligence",
      title: "Reporting & Intelligence",
      content: {
        title: "Enterprise reporting and business intelligence platform",
        description: "Comprehensive BI platform with automated reporting, scheduled deliveries, and advanced analytics for enterprise-wide business intelligence and insights.",
        buttons: [
          { text: "Generate Reports", href: productUrl, variant: "primary" as const },
          { text: "BI implementation guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Reporting & Intelligence Features",
          items: [
            "Automated report generation",
            "Scheduled deliveries",
            "Enterprise security",
            "Role-based access",
            "Custom report templates",
            "Data governance",
            "Audit logging",
            "Performance monitoring"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Business Intelligence Center",
          description: "Enterprise reporting and business intelligence management"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Self-service analytics for business team empowerment",
      description: "Empower business teams with intuitive self-service analytics capabilities, drag-and-drop report building, and interactive dashboards for independent data exploration.",
      link: {
        text: "Learn about self-service analytics",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Advanced visualization and interactive dashboard capabilities",
      description: "Create stunning interactive dashboards with rich visualizations, real-time data updates, and collaborative sharing for comprehensive business insights."
    },
    {
      number: "03",
      title: "Powerful SQL analysis and query development tools", 
      description: "Advanced SQL editor with intelligent features, query optimization, and collaborative development capabilities for sophisticated data analysis workflows."
    },
    {
      number: "04",
      title: "Enterprise-grade business intelligence and reporting",
      description: "Comprehensive BI platform with automated reporting, scheduled deliveries, and enterprise security for organization-wide business intelligence initiatives."
    }
  ];

  const customerReference = {
    title: "Analytics Transformation Success",
    company: "Retail company increases data-driven decisions by 300% with self-service BI",
    description: "A major retail organization transformed their analytics capabilities using InsightX, empowering business teams to make data-driven decisions while reducing IT dependency and improving operational efficiency.",
    image: "/insightx.svg",
    linkText: "Read the analytics transformation story",
    linkHref: docsUrl
  };

  const customerLogos = [
    {
      name: "Apache Superset",
      image: "https://logo.clearbit.com/superset.apache.org",
      href: docsUrl,
      alt: "Apache Superset logo"
    },
    {
      name: "Tableau",
      image: "https://logo.clearbit.com/tableau.com",
      href: docsUrl,
      alt: "Tableau logo"
    },
    {
      name: "Power BI",
      image: "https://logo.clearbit.com/powerbi.microsoft.com",
      href: docsUrl, 
      alt: "Power BI logo"
    },
    {
      name: "Looker",
      image: "https://logo.clearbit.com/looker.com",
      href: docsUrl,
      alt: "Looker logo"
    },
    {
      name: "Qlik", 
      image: "https://logo.clearbit.com/qlik.com",
      href: docsUrl,
      alt: "Qlik logo"
    },
    {
      name: "Sisense",
      image: "https://logo.clearbit.com/sisense.com",
      href: docsUrl,
      alt: "Sisense logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in InsightX",
      content: {
        title: "Latest analytics and BI features",
        description: "Stay updated with the newest capabilities in self-service analytics, visualization tools, and business intelligence for modern data-driven organizations.",
        image: "/insightx.svg",
        links: [
          { text: "New analytics features", href: docsUrl },
          { text: "Visualization improvements", href: docsUrl },
          { text: "SQL enhancements", href: docsUrl },
          { text: "BI platform updates", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare BI solutions",
      content: {
        title: "Why choose InsightX",
        description: "Compare our business intelligence and analytics capabilities with other solutions and see why data teams choose us for comprehensive self-service analytics.",
        image: "/insightx.svg",
        links: [
          { text: "BI solution comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master InsightX",
      content: {
        title: "Learn analytics and BI best practices",
        description: "Master business intelligence and analytics with comprehensive guides, best practices, and training materials for data analysts and business intelligence professionals.",
        image: "/insightx.svg",
        links: [
          { text: "Analytics implementation guide", href: docsUrl },
          { text: "Dashboard design best practices", href: docsUrl },
          { text: "SQL optimization strategies", href: docsUrl },
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
      title: "Contact analytics team",
      href: productUrl,
      icon: "contact"
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="sr-only">InsightX | Business Intelligence & Analytics Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="InsightX"
          description="Self-serve analytics, dashboards, and reporting platform for business teams with SQL and visualization tools. Comprehensive business intelligence with interactive dashboards, advanced analytics capabilities, and enterprise-grade reporting for data-driven organizations."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Analytics Dashboard",
            description: "Business intelligence and self-service analytics interface"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="InsightX" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose InsightX?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Analytics transformation success stories"
          description="Learn why data analysts and business intelligence professionals choose InsightX for comprehensive self-service analytics and business intelligence capabilities."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Business Intelligence Guide"
          description="We've compiled analytics strategies, dashboard design principles, and BI implementation best practices for modern data-driven organizations and self-service analytics initiatives."
          image="/insightx.svg"
          buttonText="Get the BI guide"
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
