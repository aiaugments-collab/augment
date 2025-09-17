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

export default function FinancialManagementPage() {
  const { productUrl, docsUrl } = getAppUrls("financial-management");
  
  const ctaButtons = [
    {
      text: "Try Financial Module",
      href: productUrl,
      variant: "primary" as const
    },
    {
      text: "Schedule Demo",
      href: docsUrl,
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "general-ledger",
      image: "/products/accounting/01.png",
      title: "Advanced General Ledger Management",
      description: "Master chart of accounts setup, journal entries, and automated posting for complete financial control.",
      ctaText: "Learn general ledger",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "financial-reporting",
      image: "/products/accounting/02.png",
      title: "Comprehensive Financial Reporting",
      description: "Generate P&L statements, balance sheets, cash flow reports, and custom financial analysis with real-time data.",
      ctaText: "View reporting features",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "budgeting-forecasting",
      image: "/products/accounting/03.png",
      title: "Budgeting & Financial Forecasting",
      description: "Create detailed budgets, perform variance analysis, and generate rolling forecasts for strategic planning.",
      ctaText: "Explore budgeting",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "accounts-management",
      image: "/products/accounting/04.png",
      title: "Accounts Payable & Receivable",
      description: "Streamline invoice processing, payment management, and collection workflows with automated reconciliation.",
      ctaText: "See AP/AR features",
      ctaLink: "/book-demo",
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "general-ledger",
      title: "General Ledger",
      content: {
        title: "Complete chart of accounts and journal management",
        description: "Maintain accurate financial records with a flexible chart of accounts, automated journal entries, and real-time posting. Support for multi-company and multi-currency operations.",
        buttons: [
          { text: "Try General Ledger", href: "https://erp.augment.cfd/app/accounting", variant: "primary" as const },
          { text: "Setup guide", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "General Ledger Features",
          items: [
            "Flexible chart of accounts",
            "Automated journal posting",
            "Multi-company support",
            "Multi-currency handling",
            "Period-end closing",
            "Audit trail maintenance",
            "Account reconciliation",
            "Budget vs actual tracking"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "General Ledger",
          description: "Chart of accounts with real-time balances and transaction details"
        }
      }
    },
    {
      id: "accounts-payable",
      title: "Accounts Payable",
      content: {
        title: "Streamlined vendor payment processing",
        description: "Manage supplier invoices, approval workflows, and payment processing with automated matching and reconciliation capabilities for efficient payables management.",
        buttons: [
          { text: "Explore AP Features", href: "https://erp.augment.cfd/app/accounting", variant: "primary" as const },
          { text: "Workflow setup", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Accounts Payable Features",
          items: [
            "Invoice capture & processing",
            "3-way matching automation",
            "Approval workflow management",
            "Payment scheduling",
            "Vendor management",
            "Early payment discounts",
            "1099 tax reporting",
            "Cash flow forecasting"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Invoice Processing",
          description: "Automated invoice capture and approval workflow management"
        }
      }
    },
    {
      id: "accounts-receivable",
      title: "Accounts Receivable",
      content: {
        title: "Efficient customer billing and collections",
        description: "Automate customer invoicing, track payments, and manage collections with integrated credit management and automated dunning processes for optimized cash flow.",
        buttons: [
          { text: "Try AR Features", href: "https://erp.augment.cfd/app/accounting", variant: "primary" as const },
          { text: "Collection strategies", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Accounts Receivable Features",
          items: [
            "Automated customer invoicing",
            "Payment tracking & matching",
            "Credit management",
            "Collection management",
            "Aging analysis",
            "Customer statements",
            "Payment portal integration",
            "DSO analytics"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Receivables Dashboard",
          description: "Customer aging analysis and collection management overview"
        }
      }
    },
    {
      id: "financial-reporting",
      title: "Financial Reporting",
      content: {
        title: "Comprehensive financial analysis and reporting",
        description: "Generate standard financial statements, custom reports, and real-time analytics with drill-down capabilities and automated distribution for stakeholder reporting.",
        buttons: [
          { text: "View Reports", href: "https://erp.augment.cfd/app/accounting", variant: "primary" as const },
          { text: "Custom reporting", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Reporting Features",
          items: [
            "P&L statements",
            "Balance sheet reports",
            "Cash flow statements",
            "Budget variance analysis",
            "Custom report builder",
            "Real-time dashboards",
            "Automated report delivery",
            "Comparative analysis"
          ]
        },
        mockup: {
          type: "analytics" as const,
          title: "Financial Analytics",
          description: "Real-time financial performance metrics and trend analysis"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Complete financial control and visibility",
      description: "Get real-time visibility into your financial position with comprehensive general ledger, accounts payable/receivable, and advanced reporting capabilities.",
      link: {
        text: "Learn about financial features",
        href: "https://erp.augment.cfd/app/accounting"
      }
    },
    {
      number: "02", 
      title: "Automated workflow and compliance",
      description: "Streamline financial processes with automated posting, approval workflows, and built-in compliance features for audit trail and regulatory requirements."
    },
    {
      number: "03",
      title: "Advanced analytics and forecasting", 
      description: "Make informed decisions with real-time financial analytics, budget variance analysis, and predictive forecasting capabilities."
    },
    {
      number: "04",
      title: "Seamless integration and scalability",
      description: "Integrate with other ERP modules and scale your financial operations as your business grows with flexible configuration options."
    }
  ];

  const customerReference = {
    title: "Financial Management Success",
    company: "Retail company reduces month-end close by 75%",
    description: "A major retail chain transformed their financial operations using our comprehensive financial management solution, dramatically reducing closing time and improving accuracy.",
    image: "/products/accounting/01.png",
    linkText: "Read the financial success story",
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
      name: "Intuit",
      image: "https://logo.clearbit.com/intuit.com",
      href: "/book-demo",
      alt: "Intuit logo"
    },
    {
      name: "Sage", 
      image: "https://logo.clearbit.com/sage.com",
      href: "/book-demo",
      alt: "Sage logo"
    },
    {
      name: "NetSuite",
      image: "https://logo.clearbit.com/netsuite.com",
      href: "/book-demo",
      alt: "NetSuite logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in Finance",
      content: {
        title: "Latest financial management features",
        description: "Stay updated with the newest capabilities in financial reporting, automated workflows, and compliance features designed for modern accounting practices.",
        image: "/products/accounting/02.png",
        links: [
          { text: "New reporting features", href: "/book-demo" },
          { text: "Automation improvements", href: "/book-demo" },
          { text: "Compliance updates", href: "/book-demo" },
          { text: "Integration enhancements", href: "/book-demo" }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare accounting solutions",
      content: {
        title: "Why choose our financial management",
        description: "Compare our comprehensive financial management capabilities with other accounting solutions and see why CFOs choose us for financial operations.",
        image: "/products/accounting/03.png",
        links: [
          { text: "Accounting software comparison", href: "/book-demo" },
          { text: "Feature comparison matrix", href: "/book-demo" },
          { text: "Implementation timeline", href: "/book-demo" },
          { text: "Total cost analysis", href: "/book-demo" }
        ]
      }
    },
    {
      id: "learning",
      title: "Master financial management",
      content: {
        title: "Learn advanced accounting practices",
        description: "Master financial management with comprehensive guides, best practices, and training materials for accounting professionals and finance teams.",
        image: "/products/accounting/04.png",
        links: [
          { text: "Financial setup guide", href: "/book-demo" },
          { text: "Month-end closing process", href: "/book-demo" },
          { text: "Reporting best practices", href: "/book-demo" },
          { text: "Compliance training", href: "/book-demo" }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Try financial module",
      href: "https://erp.augment.cfd/app/accounting",
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
        <h1 className="sr-only">Financial Management | Complete Accounting & Financial Control</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="Financial Management"
          description="Comprehensive financial management with general ledger, accounts payable/receivable, budgeting, financial reporting, and advanced analytics for complete financial control. Streamline your accounting processes and gain real-time visibility into your financial position."
          ctaButtons={ctaButtons}
          mediaType="image"
          mediaUrl="/products/accounting/01.png"
          mediaAlt="Financial Management dashboard with comprehensive accounting features"
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="Financial Management" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose our Financial Management solution?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Financial management success stories"
          description="Learn why finance teams and CFOs choose our solution for comprehensive financial management and reporting."
          viewMoreText="View more success stories"
          viewMoreHref="/book-demo"
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Complete Financial Management Guide"
          description="We've compiled accounting best practices, implementation strategies, and proven methodologies for successful financial management deployments."
          image="/products/accounting/03.png"
          buttonText="Get the finance guide"
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
