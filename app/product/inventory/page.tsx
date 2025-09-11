import { ProductHero } from "@/components/product/ProductHero";
import { ProductPromo } from "@/components/product/ProductPromo";
import { ProductExplorer } from "@/components/product/ProductExplorer";
import { ProductWhyChoose } from "@/components/product/ProductWhyChoose";
import { ProductCustomerLogos } from "@/components/product/ProductCustomerLogos";
import { ProductResources } from "@/components/product/ProductResources";
import { ProductCTABanner } from "@/components/product/ProductCTABanner";
import { ProductGetStarted } from "@/components/product/ProductGetStarted";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export default function InventoryPage() {
  const ctaButtons = [
    {
      text: "Access Inventory Module",
      href: "https://erp.augment.cfd/app/stock",
      variant: "primary" as const
    },
    {
      text: "View ERP Dashboard",
      href: "https://erp.augment.cfd/app/dashboard",
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "webinar-inventory",
      image: "/products/inventory/02.png",
      title: "Webinar: Modern Inventory Management Best Practices",
      description: "Discover how to optimize stock levels, reduce carrying costs, and prevent stockouts with smart inventory management strategies.",
      ctaText: "Register today",
      ctaLink: "https://erp.augment.cfd/app/stock",
      target: "_self" as const
    },
    {
      id: "forrester-inventory",
      image: "/products/inventory/03.png",
      title: "Augment named a Leader in The Forrester Wave™: Inventory Management, Q3 2025",
      description: "Find out why Augment was recognized for excellence in inventory optimization and warehouse management.",
      ctaText: "Access the Forrester report",
      ctaLink: "https://erp.augment.cfd/app/stock",
      target: "_self" as const
    },
    {
      id: "inventory-guide",
      image: "/products/inventory/04.png",
      title: "Complete guide to inventory optimization",
      description: "Learn how to reduce inventory costs by 30% while maintaining optimal stock levels and customer satisfaction.",
      ctaText: "Read the solution guide (PDF)",
      ctaLink: "https://erp.augment.cfd/app/stock",
      target: "_self" as const
    },
    {
      id: "warehouse-automation",
      image: "/products/inventory/05.png",
      title: "Warehouse automation success stories",
      description: "See how companies improved efficiency by 40% with automated inventory management and smart reordering.",
      ctaText: "View case studies",
      ctaLink: "https://erp.augment.cfd/app/stock",
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "stock-tracking",
      title: "Stock Tracking",
      content: {
        title: "Real-time inventory visibility",
        description: "Monitor stock levels across all locations with real-time updates, automated alerts, and comprehensive tracking for complete inventory control.",
        buttons: [
          { text: "Access Inventory Module", href: "https://erp.augment.cfd/app/stock", variant: "primary" as const },
          { text: "See tracking demo", href: "https://erp.augment.cfd/app/dashboard", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "Real-time stock updates",
            "Multi-location tracking",
            "Low stock alerts",
            "Stock movement history",
            "Batch and serial tracking",
            "Inventory aging reports",
            "ABC analysis",
            "Cycle counting support"
          ]
        },
        image: "/products/inventory/02.png",
        imageAlt: "Stock tracking interface"
      }
    },
    {
      id: "warehouse-management",
      title: "Warehouse Management",
      content: {
        title: "Optimize warehouse operations",
        description: "Streamline warehouse processes with barcode scanning, pick and pack optimization, and automated workflows for maximum efficiency.",
        buttons: [
          { text: "Access Inventory Module", href: "https://erp.augment.cfd/app/stock", variant: "primary" as const },
          { text: "See warehouse features", href: "https://erp.augment.cfd/app/dashboard", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "Barcode scanning",
            "Pick and pack optimization",
            "Receiving workflows",
            "Put-away strategies",
            "Zone and bin management",
            "Cross-docking support",
            "Labor management",
            "Shipping integration"
          ]
        },
        image: "/products/inventory/03.png",
        imageAlt: "Warehouse management interface"
      }
    },
    {
      id: "inventory-valuation",
      title: "Inventory Valuation",
      content: {
        title: "Accurate inventory costing",
        description: "Maintain accurate inventory valuations with multiple costing methods, automated cost calculations, and detailed financial reporting.",
        buttons: [
          { text: "Access Inventory Module", href: "https://erp.augment.cfd/app/stock", variant: "primary" as const },
          { text: "See valuation methods", href: "https://erp.augment.cfd/app/dashboard", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "FIFO, LIFO, Average costing",
            "Standard cost management",
            "Cost layer tracking",
            "Variance analysis",
            "Landed cost allocation",
            "Currency conversion",
            "Inventory write-offs",
            "Financial reporting"
          ]
        },
        image: "/products/inventory/04.png",
        imageAlt: "Inventory valuation dashboard"
      }
    },
    {
      id: "replenishment",
      title: "Automated Replenishment",
      content: {
        title: "Smart reordering automation",
        description: "Prevent stockouts and overstock with intelligent replenishment that automatically generates purchase orders based on demand forecasting.",
        buttons: [
          { text: "Access Inventory Module", href: "https://erp.augment.cfd/app/stock", variant: "primary" as const },
          { text: "See automation features", href: "https://erp.augment.cfd/app/dashboard", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "Demand forecasting",
            "Automatic reorder points",
            "Seasonal adjustments",
            "Lead time optimization",
            "Safety stock calculation",
            "Economic order quantity",
            "Supplier performance",
            "Purchase order automation"
          ]
        },
        image: "/products/inventory/05.png",
        imageAlt: "Replenishment automation interface"
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Real-time Stock Tracking",
      description: "Monitor inventory levels across multiple locations with real-time updates and automated alerts for low stock."
    },
    {
      number: "02",
      title: "Barcode Integration",
      description: "Streamline operations with barcode scanning for receiving, picking, and cycle counting processes."
    },
    {
      number: "03",
      title: "Automated Reordering",
      description: "Set minimum stock levels and automatically generate purchase orders when inventory drops below thresholds."
    },
    {
      number: "04",
      title: "Multi-location Management",
      description: "Manage inventory across multiple warehouses, stores, and locations with centralized control."
    },
    {
      number: "05",
      title: "Inventory Valuation",
      description: "Track inventory value using FIFO, LIFO, or moving average methods with detailed cost analysis."
    },
    {
      number: "06",
      title: "Reporting & Analytics",
      description: "Generate detailed reports on stock movements, aging analysis, and inventory turnover rates."
    }
  ];

  const customerLogos = [
    {
      name: "Amazon",
      image: "https://logo.clearbit.com/amazon.com",
      href: "https://erp.augment.cfd/app/stock",
      alt: "Amazon logo"
    },
    {
      name: "Walmart",
      image: "https://logo.clearbit.com/walmart.com",
      href: "https://erp.augment.cfd/app/stock",
      alt: "Walmart logo"
    },
    {
      name: "FedEx",
      image: "https://logo.clearbit.com/fedex.com",
      href: "https://erp.augment.cfd/app/stock",
      alt: "FedEx logo"
    },
    {
      name: "UPS",
      image: "https://logo.clearbit.com/ups.com",
      href: "https://erp.augment.cfd/app/stock",
      alt: "UPS logo"
    },
    {
      name: "Target",
      image: "https://logo.clearbit.com/target.com",
      href: "https://erp.augment.cfd/app/stock",
      alt: "Target logo"
    },
    {
      name: "Home Depot",
      image: "https://logo.clearbit.com/homedepot.com",
      href: "https://erp.augment.cfd/app/stock",
      alt: "Home Depot logo"
    },
    {
      name: "Costco",
      image: "https://logo.clearbit.com/costco.com",
      href: "https://erp.augment.cfd/app/stock",
      alt: "Costco logo"
    },
    {
      name: "Best Buy",
      image: "https://logo.clearbit.com/bestbuy.com",
      href: "https://erp.augment.cfd/app/stock",
      alt: "Best Buy logo"
    }
  ];

  const resourceTabs = [
    {
      id: "guides",
      title: "Guides",
      content: {
        title: "Inventory Management Best Practices",
        description: "Complete guide to optimizing inventory levels and reducing costs with proven strategies and methodologies.",
        image: "/products/inventory/04.png",
        links: [
          { text: "Download Complete Guide (PDF)", href: "https://erp.augment.cfd/app/stock" },
          { text: "Interactive Tutorial", href: "https://erp.augment.cfd/app/stock" }
        ]
      }
    },
    {
      id: "whitepapers",
      title: "Whitepapers",
      content: {
        title: "Warehouse Automation Strategies",
        description: "How to implement smart warehouse management and automation to improve efficiency and reduce operational costs.",
        image: "/products/inventory/05.png",
        links: [
          { text: "Read Whitepaper (PDF)", href: "https://erp.augment.cfd/app/stock" },
          { text: "Implementation Checklist", href: "https://erp.augment.cfd/app/stock" }
        ]
      }
    },
    {
      id: "case-studies",
      title: "Case Studies",
      content: {
        title: "Inventory Success Stories",
        description: "See how companies reduced inventory costs by 30% with our system and achieved optimal stock management.",
        image: "/products/inventory/03.png",
        links: [
          { text: "View Customer Success Stories", href: "https://erp.augment.cfd/app/stock" },
          { text: "ROI Calculator", href: "https://erp.augment.cfd/app/stock" }
        ]
      }
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
          title="Inventory Management System"
          description="Real-time stock tracking, warehouse management, and automated reorder points. Complete inventory control with barcode support, multi-location tracking, and inventory valuation for efficient operations."
          ctaButtons={ctaButtons}
          mediaType="image"
          mediaUrl="/products/inventory/01.png"
          mediaAlt="Inventory Management Dashboard"
        />

        <ProductPromo cards={promoCards} />

        <ProductExplorer
          title="Explore inventory capabilities"
          tabs={explorerTabs}
        />

        <ProductWhyChoose
          title="Why choose our Inventory Management?"
          items={whyChooseItems}
        />

        <ProductCustomerLogos
          title="Trusted by leading retailers and distributors"
          description="Join thousands of businesses managing their inventory efficiently"
          viewMoreText="View all customers"
          viewMoreHref="/customers"
          logos={customerLogos}
        />

        <ProductResources
          title="Inventory Management Resources"
          tabs={resourceTabs}
        />

        <ProductCTABanner
          title="Ready to optimize your inventory management?"
          description="Join thousands of businesses using our ERP inventory module to reduce costs, prevent stockouts, and improve operational efficiency."
          image="/products/inventory/02.png"
          buttonText="Access Inventory Module"
          buttonHref="https://erp.augment.cfd/app/stock"
        />

        <ProductGetStarted 
          title="Get Started"
          actions={[
            { title: "Access Inventory Module", href: "https://erp.augment.cfd/app/stock", icon: "demo" },
            { title: "View ERP Dashboard", href: "https://erp.augment.cfd/app/dashboard", icon: "contact" }
          ]}
        />
      </main>
    </div>
  );
}
