import { ProductHero } from "@/components/product/ProductHero";
import { ProductPromo } from "@/components/product/ProductPromo";
import { ProductExplorer } from "@/components/product/ProductExplorer";
import { ProductWhyChoose } from "@/components/product/ProductWhyChoose";
import { ProductCustomerLogos } from "@/components/product/ProductCustomerLogos";
import { ProductResources } from "@/components/product/ProductResources";
import { ProductCTABanner } from "@/components/product/ProductCTABanner";
import { ProductGetStarted } from "@/components/product/ProductGetStarted";
import { Breadcrumb } from "@/components/ui/Breadcrumb";


export default function AccountingPage() {
  const ctaButtons = [
    {
      text: "Book a Demo",
      href: "/book-demo",
      variant: "primary" as const
    },
    {
      text: "Contact Sales",
      href: "/corporate/contact/sales",
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "webinar-accounting",
      image: "/products/accounting/02.png",
      title: "Webinar: Modernizing Business Financial Management",
      description: "Discover how our accounting platform can transform your financial processes and improve business decision-making with real-time insights.",
      ctaText: "Register today",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "forrester-accounting",
      image: "/products/accounting/03.png",
      title: "Augment named a Leader in The Forrester Wave™: Accounting Software, Q1 2025",
      description: "Find out why Augment was recognized for excellence in business accounting and financial management solutions.",
      ctaText: "Access the Forrester report",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "accounting-growth-guide",
      image: "/products/accounting/04.png",
      title: "Accelerate business growth with automated accounting",
      description: "Discover how to streamline financial operations by implementing intelligent accounting workflows and reporting automation.",
      ctaText: "Read the solution brochure (PDF)",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "cfo-guide",
      image: "/products/accounting/05.png",
      title: "CFO's guide to financial visibility and control",
      description: "Learn the top 5 ways to improve financial reporting accuracy and gain real-time visibility into business performance.",
      ctaText: "Access the guide",
      ctaLink: "/book-demo",
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "invoicing-billing",
      title: "Invoicing & Billing",
      content: {
        title: "Professional invoicing and billing automation",
        description: "Create, send, and track professional invoices with automated billing workflows that improve cash flow and reduce administrative overhead for your business.",
        buttons: [
          { text: "Book a Demo", href: "/book-demo", variant: "primary" as const },
          { text: "See invoicing demo", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "Professional invoice templates",
            "Automated recurring billing",
            "Payment gateway integration",
            "Late payment reminders",
            "Multi-currency support",
            "Tax calculation automation",
            "Invoice tracking and status",
            "Custom branding options"
          ]
        },
        image: "/products/accounting/02.png",
        imageAlt: "Invoicing dashboard"
      }
    },
    {
      id: "expense-management",
      title: "Expense Management",
      content: {
        title: "Intelligent expense tracking and management",
        description: "Streamline expense management with automated receipt scanning, categorization, and approval workflows that provide complete visibility into business spending.",
        buttons: [
          { text: "Book a Demo", href: "/book-demo", variant: "primary" as const },
          { text: "See expense features", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "Receipt scanning and OCR",
            "Automated expense categorization",
            "Approval workflow management",
            "Mileage tracking",
            "Credit card integration",
            "Expense policy enforcement",
            "Real-time expense reporting",
            "Mobile expense capture"
          ]
        },
        image: "/products/accounting/03.png",
        imageAlt: "Expense management interface"
      }
    },
    {
      id: "financial-reporting",
      title: "Financial Reporting",
      content: {
        title: "Comprehensive financial reporting and analytics",
        description: "Generate accurate financial reports and gain insights into business performance with real-time reporting, customizable dashboards, and automated financial analysis.",
        buttons: [
          { text: "Book a Demo", href: "/book-demo", variant: "primary" as const },
          { text: "See reporting demo", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "Profit & Loss statements",
            "Balance sheet generation",
            "Cash flow reporting",
            "Budget vs. actual analysis",
            "Custom report builder",
            "Real-time financial dashboards",
            "Automated report scheduling",
            "Multi-period comparisons"
          ]
        },
        image: "/products/accounting/04.png",
        imageAlt: "Financial reporting dashboard"
      }
    },
    {
      id: "tax-compliance",
      title: "Tax & Compliance",
      content: {
        title: "Automated tax management and compliance",
        description: "Stay compliant with automated tax calculations, filing assistance, and regulatory reporting that ensures accuracy and reduces the risk of compliance issues.",
        buttons: [
          { text: "Book a Demo", href: "/book-demo", variant: "primary" as const },
          { text: "See tax features", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "Automated tax calculations",
            "Sales tax management",
            "VAT/GST compliance",
            "Tax form generation",
            "Audit trail maintenance",
            "Regulatory reporting",
            "Multi-jurisdiction support",
            "Tax deadline reminders"
          ]
        },
        image: "/products/accounting/05.png",
        imageAlt: "Tax compliance interface"
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Real-Time Financial Data",
      description: "Access up-to-date financial information with real-time synchronization and automated data entry that eliminates manual bookkeeping.",
      link: {
        text: "See real-time features",
        href: "/book-demo"
      }
    },
    {
      number: "02",
      title: "Automated Workflows",
      description: "Streamline accounting processes with intelligent automation for invoicing, expense management, and financial reporting.",
      link: {
        text: "Explore automation",
        href: "/book-demo"
      }
    },
    {
      number: "03",
      title: "Multi-Currency Support",
      description: "Handle international transactions with built-in multi-currency support and automatic exchange rate updates.",
      link: {
        text: "View currency features",
        href: "/book-demo"
      }
    }
  ];

  const resources = [
    {
      title: "Small Business Accounting Guide",
      description: "Complete guide to managing finances for growing businesses",
      type: "Guide",
      href: "/book-demo"
    },
    {
      title: "Financial Reporting Best Practices",
      description: "How to create accurate and insightful financial reports",
      type: "Whitepaper",
      href: "/book-demo"
    },
    {
      title: "Business Growth Success Stories",
      description: "See how companies improved financial efficiency by 60%",
      type: "Case Study",
      href: "/book-demo"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="Accounting Software for Business"
          description="Professional accounting and financial management platform with invoicing, expense tracking, financial reporting, tax management, and business analytics. Complete business accounting and financial management for growing businesses."
          ctaButtons={ctaButtons}
          mediaType="image"
          mediaUrl="/products/accounting/01.png"
          mediaAlt="Accounting Software Dashboard"
        />

        <ProductPromo cards={promoCards} />

        <ProductExplorer
          title="Explore accounting capabilities"
          tabs={explorerTabs}
        />

        <ProductWhyChoose
          title="Why choose our accounting platform?"
          items={whyChooseItems}
        />





        <ProductCTABanner
          title="Ready to transform your business finances?"
          description="Join thousands of businesses using our platform to streamline accounting, improve accuracy, and gain financial insights."
          image="/products/accounting/03.png"
          buttonText="Book a Demo"
          buttonHref="/book-demo"
        />

        <ProductGetStarted 
          title="Get Started"
          actions={[
            { title: "Book a Demo", href: "/book-demo", icon: "demo" },
            { title: "Contact Sales", href: "/corporate/contact", icon: "contact" }
          ]}
        />
      </main>
    </div>
  );
}
