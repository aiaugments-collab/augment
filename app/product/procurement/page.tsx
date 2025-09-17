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

export default function ProcurementPage() {
  const { productUrl, docsUrl } = getAppUrls("procurement");
  
  const ctaButtons = [
    {
      text: "Try Procurement Module",
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
      id: "supplier-management",
      image: "/products/purchasing/01.png",
      title: "Advanced Supplier Management",
      description: "Manage supplier relationships, performance tracking, and vendor qualification with comprehensive supplier portals.",
      ctaText: "Learn supplier features",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "purchase-analytics",
      image: "/products/purchasing/02.png",
      title: "Purchase Analytics & Insights",
      description: "Gain visibility into spending patterns, supplier performance, and cost savings opportunities with advanced procurement analytics.",
      ctaText: "View analytics features",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "rfq-process",
      image: "/products/purchasing/03.png",
      title: "Streamlined RFQ Process",
      description: "Automate request for quotation workflows, compare supplier bids, and make informed sourcing decisions efficiently.",
      ctaText: "Explore RFQ workflow",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "contract-management",
      image: "/products/purchasing/04.png",
      title: "Contract & Agreement Management",
      description: "Manage supplier contracts, track compliance, and automate contract renewals with built-in approval workflows.",
      ctaText: "See contract features",
      ctaLink: "/book-demo",
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "purchase-requisitions",
      title: "Purchase Requisitions",
      content: {
        title: "Streamlined requisition and approval workflows",
        description: "Empower employees to create purchase requests with automated approval routing, budget validation, and seamless conversion to purchase orders for efficient procurement processes.",
        buttons: [
          { text: "Try Requisitions", href: "https://erp.augment.cfd/app/buying", variant: "primary" as const },
          { text: "Workflow setup", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Requisition Features",
          items: [
            "Employee self-service portals",
            "Multi-level approval workflows",
            "Budget validation & control",
            "Automatic PO conversion",
            "Requisition tracking",
            "Mobile requisition app",
            "Catalog-based ordering",
            "Spend analytics integration"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Purchase Requisition",
          description: "Employee purchase request form with approval workflow"
        }
      }
    },
    {
      id: "supplier-management",
      title: "Supplier Management",
      content: {
        title: "Comprehensive vendor relationship management",
        description: "Maintain detailed supplier profiles, track performance metrics, manage qualifications, and collaborate through supplier portals for strategic partnership development.",
        buttons: [
          { text: "Explore Suppliers", href: "https://erp.augment.cfd/app/buying", variant: "primary" as const },
          { text: "Portal features", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Supplier Management Features",
          items: [
            "Supplier registration portal",
            "Performance scorecards",
            "Qualification management",
            "Risk assessment tools",
            "Contract management",
            "Supplier collaboration",
            "Vendor onboarding",
            "Compliance tracking"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Supplier Dashboard",
          description: "Comprehensive supplier performance and relationship overview"
        }
      }
    },
    {
      id: "rfq-sourcing",
      title: "RFQ & Sourcing",
      content: {
        title: "Strategic sourcing and competitive bidding",
        description: "Create comprehensive RFQs, manage supplier responses, compare bids side-by-side, and make data-driven sourcing decisions with advanced evaluation tools.",
        buttons: [
          { text: "Try RFQ Process", href: "https://erp.augment.cfd/app/buying", variant: "primary" as const },
          { text: "Sourcing strategies", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "RFQ & Sourcing Features",
          items: [
            "RFQ creation & distribution",
            "Supplier response management",
            "Bid comparison tools",
            "Technical evaluation",
            "Cost analysis matrices",
            "Award notifications",
            "Negotiation tracking",
            "Sourcing analytics"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "RFQ Comparison",
          description: "Side-by-side supplier bid comparison and evaluation"
        }
      }
    },
    {
      id: "purchase-analytics",
      title: "Purchase Analytics",
      content: {
        title: "Advanced procurement intelligence and reporting",
        description: "Gain insights into spending patterns, supplier performance, cost savings opportunities, and procurement KPIs with comprehensive analytics and customizable dashboards.",
        buttons: [
          { text: "View Analytics", href: "https://erp.augment.cfd/app/buying", variant: "primary" as const },
          { text: "Custom reports", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Analytics Features",
          items: [
            "Spend analysis by category",
            "Supplier performance metrics",
            "Cost savings tracking",
            "Contract compliance monitoring",
            "Procurement KPI dashboards",
            "Budget vs actual analysis",
            "Market price intelligence",
            "ROI measurement"
          ]
        },
        mockup: {
          type: "analytics" as const,
          title: "Procurement Analytics",
          description: "Comprehensive procurement performance metrics and insights"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Complete procurement lifecycle management",
      description: "Manage the entire procurement process from requisition to payment with integrated workflows, supplier management, and comprehensive analytics.",
      link: {
        text: "Learn about procurement features",
        href: "https://erp.augment.cfd/app/buying"
      }
    },
    {
      number: "02", 
      title: "Strategic supplier relationship management",
      description: "Build strong supplier partnerships with performance tracking, qualification management, and collaborative portals for mutual growth and success."
    },
    {
      number: "03",
      title: "Advanced sourcing and cost optimization", 
      description: "Optimize procurement costs with competitive bidding, market intelligence, and data-driven sourcing decisions that deliver measurable savings."
    },
    {
      number: "04",
      title: "Intelligent automation and compliance",
      description: "Automate routine procurement tasks, ensure policy compliance, and maintain audit trails while reducing manual effort and processing time."
    }
  ];

  const customerReference = {
    title: "Procurement Success Story",
    company: "Manufacturing company achieves 30% cost savings",
    description: "A global manufacturing company transformed their procurement operations using our comprehensive purchasing solution, achieving significant cost reductions and improved supplier relationships.",
    image: "/products/purchasing/01.png",
    linkText: "Read the procurement success story",
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
      name: "Coupa",
      image: "https://logo.clearbit.com/coupa.com",
      href: "/book-demo",
      alt: "Coupa logo"
    },
    {
      name: "Ariba", 
      image: "https://logo.clearbit.com/ariba.com",
      href: "/book-demo",
      alt: "Ariba logo"
    },
    {
      name: "Jaggaer",
      image: "https://logo.clearbit.com/jaggaer.com",
      href: "/book-demo",
      alt: "Jaggaer logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in Procurement",
      content: {
        title: "Latest procurement management features",
        description: "Stay updated with the newest capabilities in supplier management, sourcing automation, and procurement analytics designed for modern purchasing operations.",
        image: "/products/purchasing/02.png",
        links: [
          { text: "New sourcing features", href: "/book-demo" },
          { text: "Supplier portal updates", href: "/book-demo" },
          { text: "Analytics enhancements", href: "/book-demo" },
          { text: "Mobile app improvements", href: "/book-demo" }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare procurement solutions",
      content: {
        title: "Why choose our procurement platform",
        description: "Compare our comprehensive procurement management capabilities with other purchasing solutions and see why procurement teams choose us for sourcing excellence.",
        image: "/products/purchasing/03.png",
        links: [
          { text: "Procurement software comparison", href: "/book-demo" },
          { text: "Feature comparison matrix", href: "/book-demo" },
          { text: "Implementation timeline", href: "/book-demo" },
          { text: "ROI calculator", href: "/book-demo" }
        ]
      }
    },
    {
      id: "learning",
      title: "Master procurement practices",
      content: {
        title: "Learn strategic procurement management",
        description: "Master procurement excellence with comprehensive guides, best practices, and training materials for purchasing professionals and procurement teams.",
        image: "/products/purchasing/04.png",
        links: [
          { text: "Procurement setup guide", href: "/book-demo" },
          { text: "Supplier management best practices", href: "/book-demo" },
          { text: "Strategic sourcing training", href: "/book-demo" },
          { text: "Cost optimization strategies", href: "/book-demo" }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Try procurement module",
      href: "https://erp.augment.cfd/app/buying",
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
        <h1 className="sr-only">Procurement | Complete Supplier Management & Sourcing Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="Procurement"
          description="Streamlined procurement process with supplier management, purchase analytics, RFQ process, and automated purchase workflows. Complete purchasing control and vendor management for strategic sourcing and cost optimization."
          ctaButtons={ctaButtons}
          mediaType="image"
          mediaUrl="/products/purchasing/01.png"
          mediaAlt="Procurement dashboard with supplier management and sourcing features"
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="Procurement Management" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose our Procurement solution?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Procurement success stories"
          description="Learn why procurement teams and CPOs choose our solution for strategic sourcing and supplier relationship management."
          viewMoreText="View more success stories"
          viewMoreHref="/book-demo"
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Strategic Procurement Guide"
          description="We've compiled procurement best practices, sourcing strategies, and proven methodologies for successful procurement transformation."
          image="/products/purchasing/03.png"
          buttonText="Get the procurement guide"
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
