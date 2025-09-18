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

export default function ERPAgroPage() {
  const { productUrl, docsUrl } = getAppUrls("erp-agro");
  
  const ctaButtons = [
    {
      text: "Start Free Trial",
      href: productUrl,
      variant: "primary" as const
    },
    {
      text: "Agriculture Modules",
      href: docsUrl,
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "farm-management",
      image: "/agro-erp.svg",
      title: "Comprehensive Farm Management System",
      description: "Complete farm operations management with crop planning, livestock tracking, equipment management, and agricultural workflow automation for modern farming.",
      ctaText: "Manage farm operations",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "supply-chain-tracking",
      image: "/agro-erp.svg",
      title: "Agricultural Supply Chain Management",
      description: "End-to-end supply chain visibility with crop-to-market tracking, quality management, and distribution optimization for agricultural products.",
      ctaText: "Track supply chain",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "inventory-management",
      image: "/agro-erp.svg",
      title: "Specialized Agricultural Inventory",
      description: "Agriculture-focused inventory management with seed tracking, fertilizer management, equipment maintenance, and seasonal planning capabilities.",
      ctaText: "Manage agricultural inventory",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "crop-analytics",
      image: "/agro-erp.svg",
      title: "Advanced Crop Analytics & Planning",
      description: "Data-driven crop management with yield analytics, weather integration, soil monitoring, and predictive farming insights for optimized agricultural production.",
      ctaText: "Analyze crop performance",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "farm-operations",
      title: "Farm Operations",
      content: {
        title: "Comprehensive farm operations management platform",
        description: "Complete farm management with crop planning, livestock tracking, equipment management, and agricultural workflow automation for efficient farming operations.",
        buttons: [
          { text: "Manage Farm Operations", href: productUrl, variant: "primary" as const },
          { text: "Farm management guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Farm Operations Features",
          items: [
            "Crop planning",
            "Livestock management",
            "Equipment tracking",
            "Labor management",
            "Field mapping",
            "Irrigation scheduling",
            "Harvest planning",
            "Cost tracking"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Farm Management Console",
          description: "Agricultural operations and crop management interface"
        }
      }
    },
    {
      id: "supply-chain",
      title: "Supply Chain",
      content: {
        title: "Agricultural supply chain and distribution management",
        description: "End-to-end supply chain management with crop-to-market tracking, quality control, distribution optimization, and market integration for agricultural products.",
        buttons: [
          { text: "Optimize Supply Chain", href: productUrl, variant: "primary" as const },
          { text: "Supply chain best practices", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Supply Chain Features",
          items: [
            "Crop-to-market tracking",
            "Quality management",
            "Distribution optimization",
            "Market integration",
            "Logistics planning",
            "Cold chain management",
            "Traceability systems",
            "Compliance tracking"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Agricultural Supply Chain Console",
          description: "Crop tracking and distribution management interface"
        }
      }
    },
    {
      id: "agricultural-inventory",
      title: "Agricultural Inventory",
      content: {
        title: "Specialized inventory management for agricultural operations",
        description: "Agriculture-focused inventory management with seed tracking, fertilizer management, equipment maintenance, and seasonal planning for agricultural resources.",
        buttons: [
          { text: "Manage Agricultural Inventory", href: productUrl, variant: "primary" as const },
          { text: "Inventory optimization guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Agricultural Inventory Features",
          items: [
            "Seed inventory tracking",
            "Fertilizer management",
            "Equipment maintenance",
            "Chemical tracking",
            "Seasonal planning",
            "Supplier management",
            "Cost optimization",
            "Regulatory compliance"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Agricultural Inventory Interface",
          description: "Specialized agricultural resource and inventory management"
        }
      }
    },
    {
      id: "analytics-planning",
      title: "Analytics & Planning",
      content: {
        title: "Advanced agricultural analytics and predictive planning",
        description: "Data-driven agricultural management with yield analytics, weather integration, soil monitoring, and predictive insights for optimized farming decisions.",
        buttons: [
          { text: "Analyze Farm Data", href: productUrl, variant: "primary" as const },
          { text: "Analytics and planning guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Analytics & Planning Features",
          items: [
            "Yield analytics",
            "Weather integration",
            "Soil monitoring",
            "Predictive modeling",
            "Financial planning",
            "Risk assessment",
            "Performance reporting",
            "Decision support"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Agricultural Analytics Center",
          description: "Farm data analysis and predictive planning interface"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Comprehensive farm management built for agriculture",
      description: "Complete farm operations management with crop planning, livestock tracking, equipment management, and agricultural workflows designed specifically for farming operations.",
      link: {
        text: "Learn about farm management",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "End-to-end agricultural supply chain visibility",
      description: "Complete supply chain management with crop-to-market tracking, quality control, distribution optimization, and market integration for agricultural products and distribution."
    },
    {
      number: "03",
      title: "Specialized agricultural inventory and resource management", 
      description: "Agriculture-focused inventory management with seed tracking, fertilizer management, equipment maintenance, and seasonal planning for agricultural resource optimization."
    },
    {
      number: "04",
      title: "Advanced analytics with predictive farming insights",
      description: "Data-driven agricultural management with yield analytics, weather integration, soil monitoring, and predictive modeling for optimized farming decisions and profitability."
    }
  ];

  const customerReference = {
    title: "Agricultural Operations Transformation",
    company: "Large farm operation increases yield by 25% with data-driven agricultural management",
    description: "A large-scale agricultural operation transformed their farm management using AgroERP, achieving significant yield improvements while reducing costs and optimizing resource utilization.",
    image: "/agro-erp.svg",
    linkText: "Read the agricultural transformation story",
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
      name: "FarmLogs",
      image: "https://logo.clearbit.com/farmlogs.com",
      href: docsUrl, 
      alt: "FarmLogs logo"
    },
    {
      name: "AgriDigital",
      image: "https://logo.clearbit.com/agridigital.io",
      href: docsUrl,
      alt: "AgriDigital logo"
    },
    {
      name: "Conservis", 
      image: "https://logo.clearbit.com/conservis.ag",
      href: docsUrl,
      alt: "Conservis logo"
    },
    {
      name: "Granular",
      image: "https://logo.clearbit.com/granular.ag",
      href: docsUrl,
      alt: "Granular logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in AgroERP",
      content: {
        title: "Latest agricultural management features",
        description: "Stay updated with the newest capabilities in farm management, agricultural supply chain, and crop analytics for modern agricultural operations.",
        image: "/agro-erp.svg",
        links: [
          { text: "New farm management features", href: docsUrl },
          { text: "Supply chain improvements", href: docsUrl },
          { text: "Analytics enhancements", href: docsUrl },
          { text: "Inventory optimization", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare agricultural ERP solutions",
      content: {
        title: "Why choose AgroERP",
        description: "Compare our agricultural ERP capabilities with other solutions and see why farm managers choose us for comprehensive agricultural operations management.",
        image: "/agro-erp.svg",
        links: [
          { text: "Agricultural ERP comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master AgroERP",
      content: {
        title: "Learn agricultural management best practices",
        description: "Master agricultural operations with comprehensive guides, farm management strategies, and training materials for agricultural professionals and farm managers.",
        image: "/agro-erp.svg",
        links: [
          { text: "Agricultural ERP deployment guide", href: docsUrl },
          { text: "Farm management best practices", href: docsUrl },
          { text: "Supply chain optimization strategies", href: docsUrl },
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
      title: "Agriculture modules",
      href: docsUrl,
      icon: "tour"
    },
    {
      title: "Contact agriculture team",
      href: productUrl,
      icon: "contact"
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="sr-only">AgroERP | ERP Tailored for Agriculture & Supply Chains</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="AgroERP"
          description="ERP modules for farm management, inventory, and crop-to-market workflows built on open ERP platforms with agricultural specialization. Comprehensive agricultural ERP solution with farm operations, supply chain management, and crop analytics."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Agricultural ERP Console",
            description: "Farm management and agricultural operations interface"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="AgroERP" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose AgroERP?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Agricultural management success stories"
          description="Learn why farm managers and agricultural professionals choose AgroERP for comprehensive farm operations and agricultural supply chain management."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Agricultural Management Guide"
          description="We've compiled farm management strategies, agricultural supply chain optimization, and crop analytics best practices for modern agricultural operations and farming efficiency."
          image="/agro-erp.svg"
          buttonText="Get the agriculture guide"
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
