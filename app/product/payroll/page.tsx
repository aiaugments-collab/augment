import { ProductHero } from "@/components/product/ProductHero";
import { ProductPromo } from "@/components/product/ProductPromo";
import { ProductExplorer } from "@/components/product/ProductExplorer";
import { ProductWhyChoose } from "@/components/product/ProductWhyChoose";
import { ProductCustomerLogos } from "@/components/product/ProductCustomerLogos";
import { ProductResources } from "@/components/product/ProductResources";
import { ProductCTABanner } from "@/components/product/ProductCTABanner";
import { ProductGetStarted } from "@/components/product/ProductGetStarted";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export default function PayrollPage() {
  const ctaButtons = [
    {
      text: "Try Payroll Module",
      href: "https://erp.augment.cfd/app/payroll",
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
      id: "automated-payroll",
      image: "/products/payroll/01.png",
      title: "Automated Payroll Processing",
      description: "Streamline payroll operations with automated calculations, tax management, and compliance features for error-free payroll execution.",
      ctaText: "Learn automation features",
      ctaLink: "https://erp.augment.cfd/app/payroll",
      target: "_blank" as const
    },
    {
      id: "tax-compliance",
      image: "/products/payroll/02.png",
      title: "Tax Compliance & Reporting",
      description: "Ensure tax compliance with automated calculations, multi-jurisdiction support, and comprehensive tax reporting capabilities.",
      ctaText: "View tax features",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "benefits-management",
      image: "/products/payroll/03.png",
      title: "Benefits Administration",
      description: "Manage employee benefits, deductions, and contributions with automated enrollment, tracking, and reporting systems.",
      ctaText: "Explore benefits tools",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "employee-portal",
      image: "/products/payroll/04.png",
      title: "Employee Self-Service Portal",
      description: "Empower employees with self-service access to pay stubs, tax documents, and payroll information through secure portals.",
      ctaText: "See employee features",
      ctaLink: "/book-demo",
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "payroll-processing",
      title: "Payroll Processing",
      content: {
        title: "Automated payroll calculations and processing",
        description: "Process payroll efficiently with automated calculations, configurable pay schedules, and error-free payment processing that ensures accurate and timely employee compensation.",
        buttons: [
          { text: "Try Payroll Processing", href: "https://erp.augment.cfd/app/payroll", variant: "primary" as const },
          { text: "Setup guide", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Payroll Processing Features",
          items: [
            "Automated salary calculations",
            "Configurable pay schedules",
            "Overtime and bonus management",
            "Deduction processing",
            "Multi-currency support",
            "Bank integration",
            "Payment method options",
            "Payroll approval workflows"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Payroll Processing System",
          description: "Automated payroll calculation and payment processing interface"
        }
      }
    },
    {
      id: "tax-management",
      title: "Tax Management",
      content: {
        title: "Comprehensive tax compliance and reporting",
        description: "Ensure tax compliance with automated tax calculations, multi-jurisdiction support, and comprehensive reporting that keeps you compliant with changing tax regulations.",
        buttons: [
          { text: "Explore Tax Features", href: "https://erp.augment.cfd/app/payroll", variant: "primary" as const },
          { text: "Compliance guide", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Tax Management Features",
          items: [
            "Automated tax calculations",
            "Multi-jurisdiction support",
            "Tax form generation",
            "Quarterly tax reporting",
            "Year-end tax processing",
            "Tax compliance monitoring",
            "Audit trail maintenance",
            "Tax law updates"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Tax Compliance Center",
          description: "Tax calculation and compliance management dashboard"
        }
      }
    },
    {
      id: "benefits-administration",
      title: "Benefits Administration",
      content: {
        title: "Complete employee benefits management",
        description: "Manage employee benefits efficiently with automated enrollment, contribution tracking, and comprehensive benefits administration that simplifies complex benefit programs.",
        buttons: [
          { text: "Try Benefits Management", href: "https://erp.augment.cfd/app/payroll", variant: "primary" as const },
          { text: "Benefits setup", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Benefits Administration Features",
          items: [
            "Benefits enrollment automation",
            "Contribution calculations",
            "Health insurance management",
            "Retirement plan administration",
            "Flexible spending accounts",
            "Benefits reporting",
            "Compliance tracking",
            "Employee benefits portal"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Benefits Management Dashboard",
          description: "Employee benefits enrollment and administration interface"
        }
      }
    },
    {
      id: "payroll-analytics",
      title: "Payroll Analytics",
      content: {
        title: "Advanced payroll insights and reporting",
        description: "Analyze payroll costs and trends with comprehensive reporting, cost center analysis, and predictive analytics that drive strategic workforce cost management decisions.",
        buttons: [
          { text: "View Payroll Analytics", href: "https://erp.augment.cfd/app/payroll", variant: "primary" as const },
          { text: "Custom reports", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Payroll Analytics Features",
          items: [
            "Payroll cost analysis",
            "Labor cost trends",
            "Department cost allocation",
            "Budget vs actual reporting",
            "Overtime analytics",
            "Benefits cost tracking",
            "Payroll variance analysis",
            "Executive payroll reports"
          ]
        },
        mockup: {
          type: "analytics" as const,
          title: "Payroll Analytics Center",
          description: "Comprehensive payroll cost analysis and reporting insights"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Automated payroll processing and compliance",
      description: "Streamline payroll operations with automated calculations, tax management, and compliance features that ensure accurate, timely, and error-free payroll processing.",
      link: {
        text: "Learn about payroll automation",
        href: "https://erp.augment.cfd/app/payroll"
      }
    },
    {
      number: "02", 
      title: "Comprehensive tax compliance and reporting",
      description: "Ensure tax compliance with automated calculations, multi-jurisdiction support, and comprehensive reporting that keeps you compliant with changing tax regulations."
    },
    {
      number: "03",
      title: "Complete benefits administration and management", 
      description: "Manage employee benefits efficiently with automated enrollment, contribution tracking, and comprehensive benefits administration that simplifies complex benefit programs."
    },
    {
      number: "04",
      title: "Advanced payroll analytics and insights",
      description: "Analyze payroll costs and trends with comprehensive reporting, cost center analysis, and predictive analytics that drive strategic workforce cost management decisions."
    }
  ];

  const customerReference = {
    title: "Payroll Management Success",
    company: "Manufacturing company reduces payroll processing time by 70%",
    description: "A large manufacturing company transformed their payroll operations using our automated payroll solution, dramatically reducing processing time while improving accuracy and compliance.",
    image: "/products/payroll/01.png",
    linkText: "Read the payroll transformation story",
    linkHref: "/book-demo"
  };

  const customerLogos = [
    {
      name: "ADP",
      image: "https://logo.clearbit.com/adp.com",
      href: "https://erp.augment.cfd/app/payroll",
      alt: "ADP logo"
    },
    {
      name: "Paychex",
      image: "https://logo.clearbit.com/paychex.com",
      href: "https://erp.augment.cfd/app/payroll",
      alt: "Paychex logo"
    },
    {
      name: "Workday",
      image: "https://logo.clearbit.com/workday.com",
      href: "https://erp.augment.cfd/app/payroll",
      alt: "Workday logo"
    },
    {
      name: "Gusto",
      image: "https://logo.clearbit.com/gusto.com",
      href: "https://erp.augment.cfd/app/payroll",
      alt: "Gusto logo"
    },
    {
      name: "QuickBooks",
      image: "https://logo.clearbit.com/intuit.com",
      href: "https://erp.augment.cfd/app/payroll",
      alt: "QuickBooks logo"
    },
    {
      name: "BambooHR",
      image: "https://logo.clearbit.com/bamboohr.com",
      href: "https://erp.augment.cfd/app/payroll",
      alt: "BambooHR logo"
    },
    {
      name: "Zenefits",
      image: "https://logo.clearbit.com/zenefits.com",
      href: "https://erp.augment.cfd/app/payroll",
      alt: "Zenefits logo"
    },
    {
      name: "Paylocity",
      image: "https://logo.clearbit.com/paylocity.com",
      href: "https://erp.augment.cfd/app/payroll",
      alt: "Paylocity logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in Payroll",
      content: {
        title: "Latest payroll management features",
        description: "Stay updated with the newest capabilities in payroll automation, tax compliance, and benefits administration designed for modern payroll operations.",
        image: "/products/payroll/02.png",
        links: [
          { text: "New automation features", href: "/book-demo" },
          { text: "Tax compliance updates", href: "/book-demo" },
          { text: "Benefits management enhancements", href: "/book-demo" },
          { text: "Employee portal improvements", href: "/book-demo" }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare payroll solutions",
      content: {
        title: "Why choose our payroll management system",
        description: "Compare our comprehensive payroll capabilities with other solutions and see why HR teams choose us for automated payroll processing and compliance.",
        image: "/products/payroll/03.png",
        links: [
          { text: "Payroll software comparison", href: "/book-demo" },
          { text: "Feature comparison matrix", href: "/book-demo" },
          { text: "Implementation guide", href: "/book-demo" },
          { text: "Cost analysis", href: "/book-demo" }
        ]
      }
    },
    {
      id: "learning",
      title: "Master payroll management",
      content: {
        title: "Learn automated payroll processing",
        description: "Master payroll excellence with comprehensive guides, best practices, and training materials for payroll professionals and HR teams.",
        image: "/products/payroll/04.png",
        links: [
          { text: "Payroll setup guide", href: "/book-demo" },
          { text: "Tax compliance training", href: "/book-demo" },
          { text: "Benefits administration best practices", href: "/book-demo" },
          { text: "Payroll analytics training", href: "/book-demo" }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Try payroll module",
      href: "https://erp.augment.cfd/app/payroll",
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
        <h1 className="sr-only">Payroll | Complete Payroll Processing & Compliance Management</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="Payroll"
          description="Automated payroll processing, tax calculations, benefits administration, and compliance management. Complete payroll solution with employee self-service portal and comprehensive reporting for accurate, compliant payroll operations."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "form",
            title: "Payroll Processing Dashboard",
            description: "Automated payroll calculation and payment processing interface"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="Payroll Management" tabs={explorerTabs} />
        <ProductWhyChoose
          title="Why choose our Payroll solution?"
          items={whyChooseItems}
          customerReference={customerReference}
        />

        <ProductCustomerLogos
          title="Payroll management success stories"
          description="Learn why payroll professionals and HR teams choose our solution for automated processing and compliance management."
          viewMoreText="View more success stories"
          viewMoreHref="/book-demo"
          logos={customerLogos}
        />

        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />

        <ProductCTABanner
          title="The Complete Payroll Management Guide"
          description="We've compiled payroll automation strategies, tax compliance best practices, and benefits administration methodologies for modern payroll operations."
          image="/products/payroll/03.png"
          buttonText="Get the payroll guide"
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
