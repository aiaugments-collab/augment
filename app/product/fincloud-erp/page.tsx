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

export default function FinCloudERPPage() {
  const { productUrl, docsUrl } = getAppUrls("fincloud-erp");
  
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
      id: "modular-architecture",
      image: "/fincloud-erp.svg",
      title: "Modular Cloud-Native Architecture",
      description: "Built with modern microservices architecture that scales with your business. Deploy only the modules you need and expand as you grow.",
      ctaText: "Explore architecture",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "financial-management",
      image: "/fincloud-erp.svg",
      title: "Comprehensive Financial Management",
      description: "Complete financial suite including general ledger, accounts payable/receivable, budgeting, and advanced financial reporting capabilities.",
      ctaText: "Learn about finance modules",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "procurement-operations",
      image: "/fincloud-erp.svg",
      title: "Integrated Procurement & Operations",
      description: "Streamline procurement processes with supplier management, purchase analytics, and automated workflows integrated with inventory management.",
      ctaText: "View procurement features",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "payroll-hr",
      image: "/fincloud-erp.svg",
      title: "Advanced Payroll & HR Management",
      description: "Complete payroll processing with tax calculations, benefits administration, and HR management tools for comprehensive workforce management.",
      ctaText: "See HR capabilities",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "financial-suite",
      title: "Financial Suite",
      content: {
        title: "Comprehensive financial management and accounting",
        description: "Complete financial management with general ledger, accounts payable/receivable, budgeting, financial reporting, and advanced analytics for total financial control.",
        buttons: [
          { text: "Try Financial Suite", href: productUrl, variant: "primary" as const },
          { text: "Financial modules", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Financial Management Features",
          items: [
            "General ledger management",
            "Accounts payable/receivable",
            "Multi-currency support",
            "Financial reporting",
            "Budget planning & control",
            "Cash flow management",
            "Tax management",
            "Audit trail tracking"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Financial Management Dashboard",
          description: "Comprehensive financial reporting and accounting interface"
        }
      }
    },
    {
      id: "procurement-inventory",
      title: "Procurement & Inventory",
      content: {
        title: "Integrated procurement and inventory management",
        description: "Streamline procurement processes with supplier management, purchase analytics, inventory tracking, and automated workflows for efficient operations.",
        buttons: [
          { text: "Manage Procurement", href: productUrl, variant: "primary" as const },
          { text: "Inventory guides", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Procurement & Inventory Features",
          items: [
            "Supplier management",
            "Purchase order automation",
            "Inventory tracking",
            "Warehouse management",
            "Demand forecasting",
            "Procurement analytics",
            "Vendor performance",
            "Stock optimization"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Procurement Management Console",
          description: "Integrated procurement and inventory management interface"
        }
      }
    },
    {
      id: "payroll-hr",
      title: "Payroll & HR",
      content: {
        title: "Complete payroll processing and HR management",
        description: "Advanced payroll processing with tax calculations, benefits administration, and comprehensive HR management tools for complete workforce management.",
        buttons: [
          { text: "Setup Payroll", href: productUrl, variant: "primary" as const },
          { text: "HR documentation", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Payroll & HR Features",
          items: [
            "Automated payroll processing",
            "Tax calculations & filing",
            "Benefits administration",
            "Employee self-service",
            "Time & attendance",
            "Performance management",
            "Compliance tracking",
            "HR analytics"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "HR Management System",
          description: "Comprehensive payroll and human resources management"
        }
      }
    },
    {
      id: "cloud-deployment",
      title: "Cloud Deployment",
      content: {
        title: "Flexible cloud-native deployment options",
        description: "Deploy on any cloud platform with containerized architecture, auto-scaling capabilities, and enterprise-grade security for maximum flexibility.",
        buttons: [
          { text: "Deploy Now", href: productUrl, variant: "primary" as const },
          { text: "Deployment guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Cloud Deployment Features",
          items: [
            "Multi-cloud support",
            "Containerized deployment",
            "Auto-scaling capabilities",
            "High availability setup",
            "Disaster recovery",
            "Security compliance",
            "Performance monitoring",
            "Backup & restore"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Cloud Deployment Console",
          description: "Cloud-native ERP deployment and management interface"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Modular cloud-native architecture for scalability",
      description: "Built with modern microservices architecture that scales with your business. Deploy only the modules you need and expand seamlessly as your organization grows.",
      link: {
        text: "Learn about architecture",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Comprehensive financial management and reporting",
      description: "Complete financial suite with general ledger, accounts payable/receivable, budgeting, and advanced reporting capabilities for total financial control."
    },
    {
      number: "03",
      title: "Integrated procurement and inventory optimization", 
      description: "Streamline operations with integrated procurement, supplier management, inventory tracking, and automated workflows for maximum efficiency."
    },
    {
      number: "04",
      title: "Advanced payroll and HR management capabilities",
      description: "Complete workforce management with automated payroll processing, tax calculations, benefits administration, and comprehensive HR tools."
    }
  ];

  const customerReference = {
    title: "ERP Transformation Success",
    company: "Manufacturing company reduces operational costs by 40%",
    description: "A mid-size manufacturing company transformed their operations using FinCloud ERP, achieving significant cost reductions while improving efficiency and financial visibility across all departments.",
    image: "/fincloud-erp.svg",
    linkText: "Read the ERP transformation story",
    linkHref: docsUrl
  };

  const customerLogos = [
    {
      name: "ERPNext",
      image: "https://logo.clearbit.com/erpnext.com",
      href: docsUrl,
      alt: "ERPNext logo"
    },
    {
      name: "Frappe",
      image: "https://logo.clearbit.com/frappe.io",
      href: docsUrl,
      alt: "Frappe logo"
    },
    {
      name: "SAP",
      image: "https://logo.clearbit.com/sap.com",
      href: docsUrl, 
      alt: "SAP logo"
    },
    {
      name: "Oracle",
      image: "https://logo.clearbit.com/oracle.com",
      href: docsUrl,
      alt: "Oracle logo"
    },
    {
      name: "Microsoft Dynamics", 
      image: "https://logo.clearbit.com/microsoft.com",
      href: docsUrl,
      alt: "Microsoft Dynamics logo"
    },
    {
      name: "NetSuite",
      image: "https://logo.clearbit.com/netsuite.com",
      href: docsUrl,
      alt: "NetSuite logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in FinCloud ERP",
      content: {
        title: "Latest ERP and financial management features",
        description: "Stay updated with the newest capabilities in cloud-native ERP, financial management, and integrated business operations for modern enterprises.",
        image: "/fincloud-erp.svg",
        links: [
          { text: "New financial modules", href: docsUrl },
          { text: "Procurement updates", href: docsUrl },
          { text: "HR enhancements", href: docsUrl },
          { text: "Cloud improvements", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare ERP solutions",
      content: {
        title: "Why choose FinCloud ERP",
        description: "Compare our modular cloud-native ERP capabilities with other solutions and see why businesses choose us for comprehensive financial and operational management.",
        image: "/fincloud-erp.svg",
        links: [
          { text: "ERP solution comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master FinCloud ERP",
      content: {
        title: "Learn enterprise resource planning best practices",
        description: "Master cloud-native ERP implementation with comprehensive guides, best practices, and training materials for business leaders and IT professionals.",
        image: "/fincloud-erp.svg",
        links: [
          { text: "ERP implementation guide", href: docsUrl },
          { text: "Financial management best practices", href: docsUrl },
          { text: "Operational optimization strategies", href: docsUrl },
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
      title: "Contact sales team",
      href: productUrl,
      icon: "contact"
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="sr-only">FinCloud ERP | Modular Cloud ERP for Finance & Operations</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="FinCloud ERP"
          description="Modular cloud-native ERP platform for finance, procurement, inventory, and payroll management. Customizable and scalable solution that grows with your business, offering comprehensive financial control and operational efficiency."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "ERP Management Console",
            description: "Comprehensive enterprise resource planning and financial management"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="FinCloud ERP" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose FinCloud ERP?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="ERP transformation success stories"
          description="Learn why business leaders and IT professionals choose FinCloud ERP for comprehensive financial management and operational excellence."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Enterprise ERP Guide"
          description="We've compiled ERP implementation strategies, financial management techniques, and operational optimization best practices for modern business transformation."
          image="/fincloud-erp.svg"
          buttonText="Get the ERP guide"
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
