import { ProductHero } from "@/components/product/ProductHero";
import { ProductPromo } from "@/components/product/ProductPromo";
import { ProductExplorer } from "@/components/product/ProductExplorer";
import { ProductWhyChoose } from "@/components/product/ProductWhyChoose";
import { ProductCustomerLogos } from "@/components/product/ProductCustomerLogos";
import { ProductResources } from "@/components/product/ProductResources";
import { ProductCTABanner } from "@/components/product/ProductCTABanner";
import { ProductGetStarted } from "@/components/product/ProductGetStarted";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export default function AugmentERPPage() {
  const ctaButtons = [
    {
      text: "Get Started Today",
      href: "https://erp.augment.cfd/",
      variant: "primary" as const
    },
    {
      text: "Watch Demo",
      href: "/book-demo",
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "webinar-erp-transformation",
      image: "/products/erp/02.png",
      title: "Webinar: Digital Transformation with Modern ERP",
      description: "Discover how modern ERP solutions can streamline your business operations and drive growth with integrated automation and real-time insights.",
      ctaText: "Register today",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "forrester-erp",
      image: "/products/erp/03.png",
      title: "Augment named a Leader in The Forrester Wave™: Cloud ERP Solutions, Q1 2025",
      description: "Find out why Augment was recognized for excellence in enterprise resource planning and business process automation.",
      ctaText: "Access the Forrester report",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "erp-implementation-guide",
      image: "/products/erp/04.png",
      title: "Complete Guide to ERP Implementation",
      description: "Learn how to successfully implement ERP systems and maximize ROI with best practices for business process optimization.",
      ctaText: "Read the implementation guide (PDF)",
      ctaLink: "/book-demo",
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "accounting",
      title: "Financial Management",
      content: {
        title: "Complete Financial Management",
        description: "Streamline your accounting processes with automated workflows, real-time reporting, and comprehensive financial controls.",
        buttons: [
          {
            text: "Start Free Trial",
            href: "https://erp.augment.cfd/",
            variant: "primary" as const
          },
          {
            text: "View Demo",
            href: "/book-demo",
            variant: "secondary" as const
          }
        ],
        features: {
          title: "Key Features",
          items: [
            "General Ledger & Chart of Accounts",
            "Accounts Payable & Receivable",
            "Financial Reporting & Analytics",
            "Multi-currency Support",
            "Tax Management & Compliance",
            "Budget Planning & Control"
          ]
        },
        image: "/products/erp/accounting.png",
        imageAlt: "ERP Financial Management Dashboard"
      }
    },
    {
      id: "inventory",
      title: "Inventory Management",
      content: {
        title: "Real-time Inventory Control",
        description: "Track inventory levels, manage warehouses, and optimize stock with automated reorder points and comprehensive reporting.",
        buttons: [
          {
            text: "Start Free Trial",
            href: "https://erp.augment.cfd/",
            variant: "primary" as const
          },
          {
            text: "View Demo",
            href: "/book-demo",
            variant: "secondary" as const
          }
        ],
        features: {
          title: "Key Features",
          items: [
            "Stock Management & Tracking",
            "Warehouse Operations",
            "Purchase & Sales Orders",
            "Supplier Management",
            "Inventory Valuation",
            "Barcode & Serial Number Tracking"
          ]
        },
        image: "/products/erp/inventory.png",
        imageAlt: "ERP Inventory Management Interface"
      }
    },
    {
      id: "manufacturing",
      title: "Manufacturing",
      content: {
        title: "End-to-End Manufacturing",
        description: "Optimize production processes with integrated planning, scheduling, and quality control for maximum efficiency.",
        buttons: [
          {
            text: "Start Free Trial",
            href: "https://erp.augment.cfd/",
            variant: "primary" as const
          },
          {
            text: "View Demo",
            href: "/book-demo",
            variant: "secondary" as const
          }
        ],
        features: {
          title: "Key Features",
          items: [
            "Production Planning & Scheduling",
            "Bill of Materials (BOM)",
            "Work Order Management",
            "Quality Control",
            "Capacity Planning",
            "Shop Floor Control"
          ]
        },
        image: "/products/erp/manufacturing.png",
        imageAlt: "ERP Manufacturing Management System"
      }
    },
    {
      id: "crm",
      title: "Customer Management",
      content: {
        title: "Integrated CRM Solution",
        description: "Manage the complete customer lifecycle from lead generation to support with integrated sales and service tools.",
        buttons: [
          {
            text: "Start Free Trial",
            href: "https://erp.augment.cfd/",
            variant: "primary" as const
          },
          {
            text: "View Demo",
            href: "/book-demo",
            variant: "secondary" as const
          }
        ],
        features: {
          title: "Key Features",
          items: [
            "Lead & Opportunity Management",
            "Customer Database",
            "Sales Pipeline Tracking",
            "Quote & Order Management",
            "Customer Support Tickets",
            "Sales Analytics & Reporting"
          ]
        },
        image: "/products/erp/crm.png",
        imageAlt: "ERP Customer Management Dashboard"
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "All-in-One Platform",
      description: "Manage your entire business from a single, integrated platform that eliminates data silos and improves efficiency."
    },
    {
      number: "02",
      title: "Real-time Insights",
      description: "Get instant visibility into your business performance with comprehensive dashboards and automated reporting."
    },
    {
      number: "03",
      title: "Scalable Architecture",
      description: "Grow your business without limits with our cloud-native ERP that scales with your needs."
    },
    {
      number: "04",
      title: "Industry Expertise",
      description: "Built for modern businesses with industry-specific features and best practices built-in."
    },
    {
      number: "05",
      title: "Seamless Integration",
      description: "Connect with your existing tools and systems through our extensive API and integration capabilities."
    },
    {
      number: "06",
      title: "Enterprise Security",
      description: "Bank-grade security with role-based access control, audit trails, and compliance management."
    }
  ];

  const customerLogos = [
    { name: "Microsoft", image: "/customers/microsoft.svg", href: "#", alt: "Microsoft" },
    { name: "Google", image: "/customers/google.svg", href: "#", alt: "Google" },
    { name: "Amazon", image: "/customers/amazon.svg", href: "#", alt: "Amazon" },
    { name: "Uber", image: "/customers/uber.svg", href: "#", alt: "Uber" },
    { name: "MGM Resorts", image: "/customers/mgm.svg", href: "#", alt: "MGM Resorts" },
    { name: "Grant Thornton", image: "/customers/grant-thornton.svg", href: "#", alt: "Grant Thornton" },
    { name: "Australian National University", image: "/customers/anu.svg", href: "#", alt: "Australian National University" },
    { name: "Aon", image: "/customers/aon.svg", href: "#", alt: "Aon" }
  ];

  const resources = [
    {
      title: "ERP Implementation Checklist",
      description: "Complete guide to successful ERP implementation with timeline and best practices.",
      href: "/book-demo",
      type: "Guide"
    },
    {
      title: "ROI Calculator for ERP Systems",
      description: "Calculate the potential return on investment for your ERP implementation.",
      href: "/book-demo",
      type: "Tool"
    },
    {
      title: "Manufacturing Excellence Case Study",
      description: "How a leading manufacturer improved efficiency by 40% with Augment ERP.",
      href: "/book-demo",
      type: "Case Study"
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
          title="Augment ERP"
          description="Complete Enterprise Resource Planning solution. Manage your entire business operations including accounting, inventory, sales, purchasing, manufacturing, and project management in one integrated platform with powerful automation and real-time insights."
          ctaButtons={ctaButtons}
          mediaType="image"
          mediaUrl="/products/erp/01.png"
          mediaAlt="Augment ERP Dashboard Interface"
        />

        <ProductPromo cards={promoCards} />

        <ProductExplorer
          title="Explore ERP capabilities"
          tabs={explorerTabs}
        />

        <ProductWhyChoose
          title="Why choose Augment ERP?"
          items={whyChooseItems}
        />

        <ProductCustomerLogos
          title="Trusted by leading organizations"
          description="Join thousands of businesses worldwide"
          viewMoreText="View all customers"
          viewMoreHref="/customers"
          logos={customerLogos}
        />

        <ProductResources
          title="ERP Resources"
          tabs={[
            {
              id: "guides",
              title: "Implementation Guides",
              content: {
                title: "ERP Implementation Resources",
                description: "Everything you need to succeed with enterprise resource planning",
                links: resources.map(r => ({ text: r.title, href: r.href }))
              }
            }
          ]}
        />

        <ProductCTABanner
          title="Ready to transform your business operations?"
          description="Join thousands of businesses using Augment ERP to streamline operations and drive growth."
          image="/products/erp/03.png"
          buttonText="Get Started Today"
          buttonHref="https://erp.augment.cfd/"
        />

        <ProductGetStarted 
          title="Get Started"
          actions={[
            { title: "Start Free Trial", href: "https://erp.augment.cfd/", icon: "demo" },
            { title: "Book a Demo", href: "/book-demo", icon: "demo" },
            { title: "Contact Sales", href: "/corporate/contact", icon: "contact" }
          ]}
        />
      </main>
    </div>
  );
}
