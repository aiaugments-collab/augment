import { ProductHero } from "@/components/product/ProductHero";
import { ProductPromo } from "@/components/product/ProductPromo";
import { ProductExplorer } from "@/components/product/ProductExplorer";
import { ProductWhyChoose } from "@/components/product/ProductWhyChoose";
import { ProductCustomerLogos } from "@/components/product/ProductCustomerLogos";
import { ProductResources } from "@/components/product/ProductResources";
import { ProductCTABanner } from "@/components/product/ProductCTABanner";
import { ProductGetStarted } from "@/components/product/ProductGetStarted";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export default function EnterprisePerformancePage() {
  const ctaButtons = [
    {
      text: "Start Free Trial",
      href: "/book-demo",
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
      id: "performance-analytics",
      image: "/products/enterprise-performance/01.png",
      title: "Webinar: Strategic Performance Management",
      description: "Learn how to implement enterprise performance management systems that drive business growth and operational excellence.",
      ctaText: "Register today",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "kpi-dashboard",
      image: "/products/enterprise-performance/02.png",
      title: "KPI Dashboard Best Practices",
      description: "Discover how to create effective KPI dashboards that provide actionable insights for strategic decision-making.",
      ctaText: "Read guide",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "budgeting-forecasting",
      image: "/products/enterprise-performance/03.png",
      title: "Advanced Budgeting & Forecasting",
      description: "Master strategic planning with advanced budgeting and forecasting techniques for enterprise performance management.",
      ctaText: "Download guide (PDF)",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "performance-success",
      image: "/products/enterprise-performance/04.png",
      title: "Success Story: 40% Performance Improvement",
      description: "See how a Fortune 500 company improved their performance management and strategic planning using our EPM solution.",
      ctaText: "Read success story",
      ctaLink: "/book-demo",
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "strategic-planning",
      title: "Strategic Planning",
      content: {
        title: "Comprehensive strategic planning and execution",
        description: "Transform your strategic planning process with integrated budgeting, forecasting, and performance tracking. Align organizational goals with actionable plans and monitor progress in real-time.",
        buttons: [
          { text: "Try strategic planning", href: "/book-demo", variant: "primary" as const },
          { text: "See planning examples", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Planning Capabilities",
          items: [
            "Strategic goal setting and alignment",
            "Multi-year planning and forecasting",
            "Budget planning and allocation",
            "Scenario modeling and analysis",
            "Resource planning optimization",
            "Risk assessment integration",
            "Performance target setting",
            "Strategic initiative tracking"
          ]
        },
        image: "/products/enterprise-performance/01.png",
        imageAlt: "Strategic planning interface with goal setting and forecasting"
      }
    },
    {
      id: "performance-analytics",
      title: "Performance Analytics",
      content: {
        title: "Real-time performance monitoring and analytics",
        description: "Monitor organizational performance with advanced analytics, KPI dashboards, and automated reporting. Get insights that drive better decision-making and improved business outcomes.",
        buttons: [
          { text: "Explore analytics", href: "/book-demo", variant: "primary" as const },
          { text: "View dashboard examples", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Analytics Features",
          items: [
            "Real-time KPI dashboards",
            "Performance scorecards",
            "Trend analysis and forecasting",
            "Variance analysis reporting",
            "Drill-down capabilities",
            "Automated alert systems",
            "Custom reporting tools",
            "Executive summary views"
          ]
        },
        image: "/products/enterprise-performance/02.png",
        imageAlt: "Performance analytics dashboard with KPIs and metrics"
      }
    },
    {
      id: "budgeting-forecasting",
      title: "Budgeting & Forecasting",
      content: {
        title: "Advanced budgeting and financial forecasting",
        description: "Streamline your budgeting process with collaborative planning tools, rolling forecasts, and scenario analysis. Create accurate financial plans that adapt to changing business conditions.",
        buttons: [
          { text: "Try budgeting tools", href: "/book-demo", variant: "primary" as const },
          { text: "Forecasting guide", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Budgeting Tools",
          items: [
            "Collaborative budget planning",
            "Rolling forecast updates",
            "Scenario and sensitivity analysis",
            "Budget vs. actual tracking",
            "Automated consolidation",
            "Approval workflow management",
            "Multi-currency support",
            "Integration with ERP systems"
          ]
        },
        image: "/products/enterprise-performance/03.png",
        imageAlt: "Budgeting and forecasting interface with financial planning tools"
      }
    },
    {
      id: "reporting-compliance",
      title: "Reporting & Compliance",
      content: {
        title: "Automated reporting and regulatory compliance",
        description: "Generate comprehensive reports and ensure regulatory compliance with automated reporting tools, audit trails, and governance frameworks designed for enterprise requirements.",
        buttons: [
          { text: "Explore reporting", href: "/book-demo", variant: "primary" as const },
          { text: "Compliance guide", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Reporting Features",
          items: [
            "Automated report generation",
            "Regulatory compliance reporting",
            "Audit trail management",
            "Governance framework support",
            "Custom report builder",
            "Scheduled report delivery",
            "Data validation controls",
            "Multi-format export options"
          ]
        },
        image: "/products/enterprise-performance/04.png",
        imageAlt: "Reporting and compliance dashboard with automated workflows"
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Integrated strategic planning and execution",
      description: "Align your organization with comprehensive strategic planning tools that connect goals, budgets, and performance metrics in a unified platform designed for enterprise-scale operations.",
      link: {
        text: "Learn about strategic planning",
        href: "/book-demo"
      }
    },
    {
      number: "02", 
      title: "Real-time performance monitoring and analytics",
      description: "Monitor organizational performance with advanced analytics, customizable dashboards, and automated reporting that provides actionable insights for better decision-making."
    },
    {
      number: "03",
      title: "Advanced budgeting and forecasting capabilities", 
      description: "Streamline financial planning with collaborative budgeting tools, rolling forecasts, and scenario analysis that adapt to changing business conditions and market dynamics."
    },
    {
      number: "04",
      title: "Enterprise-grade compliance and governance",
      description: "Ensure regulatory compliance and maintain governance standards with automated reporting, audit trails, and built-in controls designed for enterprise requirements."
    }
  ];

  const customerReference = {
    title: "Customer Success Story",
    company: "Fortune 500 company achieves 40% performance improvement",
    description: "A leading multinational corporation transformed their performance management process using our EPM solution, resulting in improved strategic alignment and operational efficiency.",
    image: "/products/enterprise-performance/01.png",
    linkText: "Read the performance success story",
    linkHref: "/book-demo"
  };

  const customerLogos = [
    {
      name: "Microsoft",
      image: "https://logo.clearbit.com/microsoft.com",
      href: "/book-demo",
      alt: "Microsoft logo"
    },
    {
      name: "Oracle",
      image: "https://logo.clearbit.com/oracle.com",
      href: "/book-demo",
      alt: "Oracle logo"
    },
    {
      name: "SAP",
      image: "https://logo.clearbit.com/sap.com",
      href: "/book-demo", 
      alt: "SAP logo"
    },
    {
      name: "IBM",
      image: "https://logo.clearbit.com/ibm.com",
      href: "/book-demo",
      alt: "IBM logo"
    },
    {
      name: "Salesforce", 
      image: "https://logo.clearbit.com/salesforce.com",
      href: "/book-demo",
      alt: "Salesforce logo"
    },
    {
      name: "Workday",
      image: "https://logo.clearbit.com/workday.com",
      href: "/book-demo",
      alt: "Workday logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in EPM",
      content: {
        title: "Latest enterprise performance management features",
        description: "Stay updated with the newest capabilities in strategic planning, performance analytics, and budgeting tools designed for enterprise operations.",
        image: "/products/enterprise-performance/02.png",
        links: [
          { text: "Latest planning features", href: "/book-demo" },
          { text: "New analytics capabilities", href: "/book-demo" },
          { text: "Enhanced reporting tools", href: "/book-demo" },
          { text: "Integration improvements", href: "/book-demo" }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare EPM solutions",
      content: {
        title: "See why our EPM solution leads the market",
        description: "Compare our enterprise performance management capabilities with other solutions and see why organizations choose us for strategic planning and performance analytics.",
        image: "/products/enterprise-performance/03.png",
        links: [
          { text: "EPM solution comparison", href: "/book-demo" },
          { text: "Feature comparison guide", href: "/book-demo" },
          { text: "ROI calculator", href: "/book-demo" },
          { text: "Implementation timeline", href: "/book-demo" }
        ]
      }
    },
    {
      id: "learning",
      title: "Master performance management",
      content: {
        title: "Learn advanced EPM techniques",
        description: "Master enterprise performance management with comprehensive guides, best practices, and strategic planning methodologies used by leading organizations.",
        image: "/products/enterprise-performance/04.png",
        links: [
          { text: "EPM implementation guide", href: "/book-demo" },
          { text: "Strategic planning masterclass", href: "/book-demo" },
          { text: "Performance analytics training", href: "/book-demo" },
          { text: "Budgeting best practices", href: "/book-demo" }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Start free trial",
      href: "/book-demo",
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
        <h1 className="sr-only">Enterprise Performance Management | Strategic Planning & Analytics</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="Enterprise Performance Management"
          description="Strategic planning, budgeting, forecasting, and performance analytics to drive business growth and operational excellence. Align organizational goals with actionable plans and monitor progress in real-time with comprehensive EPM capabilities."
          ctaButtons={ctaButtons}
          mediaType="image"
          mediaUrl="/products/enterprise-performance/01.png"
          mediaAlt="Enterprise Performance Management dashboard with strategic planning and analytics"
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="Enterprise Performance Management" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose our Enterprise Performance Management solution?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="EPM success stories"
          description="Learn why leading enterprises use our performance management solution to drive strategic alignment and operational excellence."
          viewMoreText="View more success stories"
          viewMoreHref="/book-demo"
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Enterprise Performance Management Guide"
          description="We've compiled strategic planning best practices, performance management frameworks, and implementation methodologies used by leading enterprises."
          image="/products/enterprise-performance/03.png"
          buttonText="Get the EPM guide"
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
