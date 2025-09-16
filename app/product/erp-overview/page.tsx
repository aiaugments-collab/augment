import { ProductHero } from "@/components/product/ProductHero";
import { ProductPromo } from "@/components/product/ProductPromo";
import { ProductExplorer } from "@/components/product/ProductExplorer";
import { ProductWhyChoose } from "@/components/product/ProductWhyChoose";
import { ProductCustomerLogos } from "@/components/product/ProductCustomerLogos";
import { ProductResources } from "@/components/product/ProductResources";
import { ProductCTABanner } from "@/components/product/ProductCTABanner";
import { ProductGetStarted } from "@/components/product/ProductGetStarted";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export default function ERPOverviewPage() {
  const ctaButtons = [
    {
      text: "Explore Applications",
      href: "https://erp.augment.cfd/",
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
      id: "erp-modules",
      image: "/products/erp/01.png",
      title: "Complete ERP Suite Overview",
      description: "Discover all Enterprise Resource Planning modules available in our comprehensive business management platform.",
      ctaText: "View all modules",
      ctaLink: "https://erp.augment.cfd/",
      target: "_blank" as const
    },
    {
      id: "implementation-guide",
      image: "/products/erp/02.png",
      title: "ERP Implementation Roadmap",
      description: "Learn best practices for implementing enterprise resource planning systems across your organization.",
      ctaText: "Download guide",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "integration-capabilities",
      image: "/products/erp/03.png",
      title: "Integration Capabilities",
      description: "Understand how our ERP platform integrates with existing systems and third-party applications.",
      ctaText: "View integrations",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "success-story",
      image: "/products/erp/04.png",
      title: "ERP Success Story: 60% Efficiency Gain",
      description: "See how a manufacturing company streamlined operations and improved efficiency with our ERP solution.",
      ctaText: "Read case study",
      ctaLink: "/book-demo",
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "financial-management",
      title: "Financial Management",
      content: {
        title: "Complete financial control and accounting",
        description: "Manage all aspects of your financial operations with integrated general ledger, accounts payable/receivable, budgeting, and comprehensive financial reporting capabilities.",
        buttons: [
          { text: "Try Financial Management", href: "/product/financial-management", variant: "primary" as const },
          { text: "View financial features", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Financial Capabilities",
          items: [
            "General ledger management",
            "Accounts payable/receivable",
            "Financial reporting & analytics",
            "Budgeting & forecasting",
            "Multi-currency support",
            "Cost center management",
            "Automated reconciliation",
            "Audit trail compliance"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Financial Dashboard",
          description: "Real-time financial overview with key metrics and reporting"
        }
      }
    },
    {
      id: "supply-chain",
      title: "Supply Chain & Manufacturing",
      content: {
        title: "End-to-end supply chain management",
        description: "Optimize your supply chain operations with integrated procurement, inventory management, manufacturing, and supplier collaboration tools designed for modern enterprises.",
        buttons: [
          { text: "Explore Supply Chain", href: "/product/procurement", variant: "primary" as const },
          { text: "Manufacturing module", href: "/product/manufacturing", variant: "secondary" as const }
        ],
        features: {
          title: "Supply Chain Features",
          items: [
            "Procurement management",
            "Inventory optimization",
            "Manufacturing planning",
            "Supplier management",
            "Quality control",
            "Warehouse management",
            "Demand forecasting",
            "Production scheduling"
          ]
        },
        mockup: {
          type: "analytics" as const,
          title: "Supply Chain Analytics",
          description: "Comprehensive supply chain performance metrics and insights"
        }
      }
    },
    {
      id: "human-capital",
      title: "Human Capital Management",
      content: {
        title: "Comprehensive workforce management",
        description: "Streamline HR operations with integrated talent management, payroll processing, time tracking, and employee self-service capabilities powered by AI automation.",
        buttons: [
          { text: "Try HR Management", href: "/product/hr", variant: "primary" as const },
          { text: "Payroll features", href: "/product/payroll", variant: "secondary" as const }
        ],
        features: {
          title: "HR Capabilities",
          items: [
            "Employee management",
            "Payroll processing",
            "Time & attendance",
            "Performance management",
            "Recruitment & onboarding",
            "Benefits administration",
            "Learning management",
            "AI-powered HR assistant"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Employee Management",
          description: "Streamlined employee data management and HR workflows"
        }
      }
    },
    {
      id: "customer-experience",
      title: "Customer Experience",
      content: {
        title: "Complete customer lifecycle management",
        description: "Deliver exceptional customer experiences with integrated sales, marketing, and customer service tools that provide 360-degree customer visibility and engagement.",
        buttons: [
          { text: "Explore CX Tools", href: "/product/sales", variant: "primary" as const },
          { text: "Customer service", href: "/product/customer-support", variant: "secondary" as const }
        ],
        features: {
          title: "Customer Experience Features",
          items: [
            "Sales pipeline management",
            "Marketing automation",
            "Customer service & support",
            "Lead management",
            "Order management",
            "Customer portal",
            "Service ticketing",
            "Customer analytics"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Customer Management",
          description: "Comprehensive customer data and interaction tracking"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Unified enterprise platform",
      description: "Get all your business applications in one integrated platform. From finance to HR, supply chain to customer management - everything works together seamlessly.",
      link: {
        text: "Explore all applications",
        href: "https://erp.augment.cfd/"
      }
    },
    {
      number: "02", 
      title: "Modern cloud-native architecture",
      description: "Built for the cloud with modern technologies, ensuring scalability, security, and accessibility from anywhere. No more legacy system limitations."
    },
    {
      number: "03",
      title: "AI-powered automation", 
      description: "Leverage artificial intelligence to automate routine tasks, gain insights, and improve decision-making across all business processes."
    },
    {
      number: "04",
      title: "Rapid implementation and ROI",
      description: "Get up and running quickly with pre-configured modules and best practices. Start seeing value from day one with our proven implementation methodology."
    }
  ];

  const customerReference = {
    title: "ERP Success Story",
    company: "Manufacturing company achieves 60% efficiency improvement",
    description: "A leading manufacturing company transformed their operations using our comprehensive ERP platform, resulting in streamlined processes and significant cost savings.",
    image: "/products/erp/01.png",
    linkText: "Read the complete success story",
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
      title: "What's new in ERP",
      content: {
        title: "Latest enterprise platform updates",
        description: "Stay updated with the newest features and capabilities across all ERP modules, from financial management to supply chain optimization.",
        image: "/products/erp/02.png",
        links: [
          { text: "Latest platform updates", href: "/book-demo" },
          { text: "New module features", href: "/book-demo" },
          { text: "Integration improvements", href: "/book-demo" },
          { text: "Mobile app enhancements", href: "/book-demo" }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare ERP solutions",
      content: {
        title: "Why choose our ERP platform",
        description: "Compare our comprehensive enterprise platform with other ERP solutions and see why businesses choose us for digital transformation.",
        image: "/products/erp/03.png",
        links: [
          { text: "ERP platform comparison", href: "/book-demo" },
          { text: "Feature comparison matrix", href: "/book-demo" },
          { text: "Total cost of ownership", href: "/book-demo" },
          { text: "Implementation comparison", href: "/book-demo" }
        ]
      }
    },
    {
      id: "learning",
      title: "Master ERP best practices",
      content: {
        title: "Learn enterprise platform management",
        description: "Master ERP implementation and management with comprehensive guides, training materials, and best practices from industry experts.",
        image: "/products/erp/04.png",
        links: [
          { text: "ERP implementation guide", href: "/book-demo" },
          { text: "Module configuration training", href: "/book-demo" },
          { text: "User adoption strategies", href: "/book-demo" },
          { text: "Change management guide", href: "/book-demo" }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Explore platform",
      href: "https://erp.augment.cfd/",
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
        <h1 className="sr-only">ERP Applications Overview | Complete Enterprise Resource Planning Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="Applications Overview"
          description="Complete overview of all Enterprise Resource Planning applications and modules available in our comprehensive business management platform. From finance to HR, supply chain to customer management - everything you need to run your business efficiently."
          ctaButtons={ctaButtons}
          mediaType="image"
          mediaUrl="/products/erp/01.png"
          mediaAlt="ERP Applications Overview dashboard showing all available modules"
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="ERP Applications" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose our comprehensive ERP platform?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="ERP success stories"
          description="Learn why leading enterprises choose our comprehensive platform for digital transformation and operational excellence."
          viewMoreText="View more success stories"
          viewMoreHref="/book-demo"
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Complete ERP Implementation Guide"
          description="We've compiled best practices, implementation strategies, and proven methodologies for successful ERP deployments across industries."
          image="/products/erp/03.png"
          buttonText="Get the ERP guide"
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
