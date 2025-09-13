import { ProductHero } from "@/components/product/ProductHero";
import { ProductPromo } from "@/components/product/ProductPromo";
import { ProductExplorer } from "@/components/product/ProductExplorer";
import { ProductWhyChoose } from "@/components/product/ProductWhyChoose";
import { ProductCustomerLogos } from "@/components/product/ProductCustomerLogos";
import { ProductResources } from "@/components/product/ProductResources";
import { ProductCTABanner } from "@/components/product/ProductCTABanner";
import { ProductGetStarted } from "@/components/product/ProductGetStarted";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export default function SupplyChainPlanningPage() {
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
      id: "demand-forecasting",
      image: "/products/supply-chain/01.png",
      title: "Webinar: Advanced Demand Forecasting",
      description: "Learn how to implement AI-powered demand forecasting that improves accuracy and reduces inventory costs.",
      ctaText: "Register today",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "supply-optimization",
      image: "/products/supply-chain/02.png",
      title: "Supply Chain Optimization Best Practices",
      description: "Discover how to optimize your supply chain with advanced planning tools and supplier collaboration strategies.",
      ctaText: "Read guide",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "inventory-planning",
      image: "/products/supply-chain/03.png",
      title: "Strategic Inventory Planning Guide",
      description: "Master inventory optimization with advanced planning techniques that balance service levels with carrying costs.",
      ctaText: "Download guide (PDF)",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "supply-chain-success",
      image: "/products/supply-chain/04.png",
      title: "Success Story: 25% Inventory Reduction",
      description: "See how a global manufacturer reduced inventory by 25% while improving service levels using our supply chain planning solution.",
      ctaText: "Read success story",
      ctaLink: "/book-demo",
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "demand-planning",
      title: "Demand Planning",
      content: {
        title: "AI-powered demand forecasting and planning",
        description: "Predict customer demand accurately with machine learning algorithms, statistical models, and market intelligence for better inventory and production planning.",
        buttons: [
          { text: "Try demand planning", href: "/book-demo", variant: "primary" as const },
          { text: "See forecasting examples", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Demand Planning Capabilities",
          items: [
            "AI-powered forecasting algorithms",
            "Statistical demand models",
            "Market intelligence integration",
            "Seasonal pattern recognition",
            "Promotional impact analysis",
            "Collaborative demand planning",
            "Forecast accuracy tracking",
            "Exception-based management"
          ]
        },
        image: "/products/supply-chain/01.png",
        imageAlt: "Demand planning interface with AI forecasting and analytics"
      }
    },
    {
      id: "supply-planning",
      title: "Supply Planning",
      content: {
        title: "Comprehensive supply planning and optimization",
        description: "Optimize supply plans with advanced algorithms that consider capacity constraints, lead times, and costs to ensure optimal inventory levels and service.",
        buttons: [
          { text: "Explore supply planning", href: "/book-demo", variant: "primary" as const },
          { text: "View planning examples", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Supply Planning Features",
          items: [
            "Multi-echelon inventory optimization",
            "Capacity constraint planning",
            "Lead time variability modeling",
            "Safety stock optimization",
            "Replenishment planning",
            "Supplier collaboration tools",
            "What-if scenario analysis",
            "Supply risk assessment"
          ]
        },
        image: "/products/supply-chain/02.png",
        imageAlt: "Supply planning dashboard with optimization and constraint management"
      }
    },
    {
      id: "inventory-optimization",
      title: "Inventory Optimization",
      content: {
        title: "Advanced inventory optimization and control",
        description: "Optimize inventory levels across your network with advanced algorithms that balance service levels, carrying costs, and operational constraints.",
        buttons: [
          { text: "Try inventory optimization", href: "/book-demo", variant: "primary" as const },
          { text: "Optimization guide", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Inventory Optimization Features",
          items: [
            "Multi-objective optimization",
            "Service level targeting",
            "Carrying cost minimization",
            "ABC/XYZ classification",
            "Slow-moving inventory analysis",
            "Obsolescence risk management",
            "Network inventory balancing",
            "ROI-based prioritization"
          ]
        },
        image: "/products/supply-chain/03.png",
        imageAlt: "Inventory optimization interface with service level and cost balancing"
      }
    },
    {
      id: "supplier-collaboration",
      title: "Supplier Collaboration",
      content: {
        title: "Integrated supplier collaboration platform",
        description: "Collaborate with suppliers seamlessly through integrated portals, shared forecasts, and automated communication for improved supply chain visibility and performance.",
        buttons: [
          { text: "Explore collaboration", href: "/book-demo", variant: "primary" as const },
          { text: "Collaboration guide", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Collaboration Features",
          items: [
            "Supplier portal access",
            "Shared forecast visibility",
            "Collaborative planning tools",
            "Automated communications",
            "Performance scorecards",
            "Exception notifications",
            "Document sharing",
            "Integration APIs"
          ]
        },
        image: "/products/supply-chain/04.png",
        imageAlt: "Supplier collaboration portal with shared planning and communication"
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "AI-powered demand forecasting and planning",
      description: "Predict customer demand accurately with advanced machine learning algorithms and statistical models that adapt to changing market conditions and seasonal patterns.",
      link: {
        text: "Learn about demand forecasting",
        href: "/book-demo"
      }
    },
    {
      number: "02", 
      title: "Advanced supply planning and optimization",
      description: "Optimize supply plans with sophisticated algorithms that consider capacity constraints, lead times, and costs to ensure optimal inventory levels and service."
    },
    {
      number: "03",
      title: "Comprehensive inventory optimization", 
      description: "Balance service levels with carrying costs using advanced optimization techniques that consider demand variability, lead times, and business constraints."
    },
    {
      number: "04",
      title: "Integrated supplier collaboration",
      description: "Collaborate seamlessly with suppliers through integrated portals, shared forecasts, and automated communication for improved supply chain visibility and performance."
    }
  ];

  const customerReference = {
    title: "Customer Success Story",
    company: "Global manufacturer reduces inventory by 25% while improving service",
    description: "A leading global manufacturer transformed their supply chain planning using our solution, significantly reducing inventory costs while improving customer service levels.",
    image: "/products/supply-chain/01.png",
    linkText: "Read the supply chain planning success story",
    linkHref: "/book-demo"
  };

  const customerLogos = [
    {
      name: "Procter & Gamble",
      image: "https://logo.clearbit.com/pg.com",
      href: "/book-demo",
      alt: "Procter & Gamble logo"
    },
    {
      name: "Unilever",
      image: "https://logo.clearbit.com/unilever.com",
      href: "/book-demo",
      alt: "Unilever logo"
    },
    {
      name: "Nestle",
      image: "https://logo.clearbit.com/nestle.com",
      href: "/book-demo", 
      alt: "Nestle logo"
    },
    {
      name: "Johnson & Johnson",
      image: "https://logo.clearbit.com/jnj.com",
      href: "/book-demo",
      alt: "Johnson & Johnson logo"
    },
    {
      name: "Coca-Cola", 
      image: "https://logo.clearbit.com/coca-cola.com",
      href: "/book-demo",
      alt: "Coca-Cola logo"
    },
    {
      name: "PepsiCo",
      image: "https://logo.clearbit.com/pepsico.com",
      href: "/book-demo",
      alt: "PepsiCo logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in Supply Chain Planning",
      content: {
        title: "Latest supply chain planning and optimization features",
        description: "Stay updated with the newest capabilities in demand forecasting, supply planning, and inventory optimization designed for modern supply chains.",
        image: "/products/supply-chain/02.png",
        links: [
          { text: "Latest AI forecasting features", href: "/book-demo" },
          { text: "New optimization algorithms", href: "/book-demo" },
          { text: "Enhanced collaboration tools", href: "/book-demo" },
          { text: "Integration improvements", href: "/book-demo" }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare Supply Chain Planning solutions",
      content: {
        title: "See why our supply chain planning solution leads the market",
        description: "Compare our comprehensive supply chain planning capabilities with other solutions and see why manufacturers choose us for demand forecasting and inventory optimization.",
        image: "/products/supply-chain/03.png",
        links: [
          { text: "Supply chain planning comparison", href: "/book-demo" },
          { text: "Feature comparison guide", href: "/book-demo" },
          { text: "ROI calculator", href: "/book-demo" },
          { text: "Implementation timeline", href: "/book-demo" }
        ]
      }
    },
    {
      id: "learning",
      title: "Master supply chain planning",
      content: {
        title: "Learn advanced supply chain planning techniques",
        description: "Master supply chain optimization with comprehensive guides, best practices, and planning methodologies used by leading manufacturers and distributors.",
        image: "/products/supply-chain/04.png",
        links: [
          { text: "Supply chain planning masterclass", href: "/book-demo" },
          { text: "Demand forecasting training", href: "/book-demo" },
          { text: "Inventory optimization guide", href: "/book-demo" },
          { text: "Supplier collaboration strategies", href: "/book-demo" }
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
        <h1 className="sr-only">Supply Chain Planning | Demand Forecasting & Inventory Optimization</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="Supply Chain Planning"
          description="Advanced supply chain planning with AI-powered demand forecasting, supply planning, inventory optimization, and supplier collaboration for efficient operations. Reduce inventory costs while improving service levels with comprehensive planning capabilities."
          ctaButtons={ctaButtons}
          mediaType="image"
          mediaUrl="/products/supply-chain/01.png"
          mediaAlt="Supply Chain Planning dashboard with demand forecasting and optimization"
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="Supply Chain Planning" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose our Supply Chain Planning solution?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Supply chain planning success stories"
          description="Learn why leading manufacturers and distributors use our supply chain planning solution to optimize inventory and improve service levels."
          viewMoreText="View more success stories"
          viewMoreHref="/book-demo"
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Supply Chain Planning Guide"
          description="We've compiled demand forecasting techniques, inventory optimization strategies, and supply chain best practices used by leading manufacturers and distributors."
          image="/products/supply-chain/03.png"
          buttonText="Get the supply chain planning guide"
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
