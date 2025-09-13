import { ProductHero } from "@/components/product/ProductHero";
import { ProductPromo } from "@/components/product/ProductPromo";
import { ProductExplorer } from "@/components/product/ProductExplorer";
import { ProductWhyChoose } from "@/components/product/ProductWhyChoose";
import { ProductCustomerLogos } from "@/components/product/ProductCustomerLogos";
import { ProductResources } from "@/components/product/ProductResources";
import { ProductCTABanner } from "@/components/product/ProductCTABanner";
import { ProductGetStarted } from "@/components/product/ProductGetStarted";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export default function PLMPage() {
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
      id: "product-design",
      image: "/products/plm/01.png",
      title: "Webinar: Modern Product Design Collaboration",
      description: "Learn how to implement collaborative product design workflows that accelerate innovation and reduce time-to-market.",
      ctaText: "Register today",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "change-management",
      image: "/products/plm/02.png",
      title: "Change Management Best Practices",
      description: "Discover how to manage product changes effectively with automated workflows and comprehensive change tracking.",
      ctaText: "Read guide",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "lifecycle-optimization",
      image: "/products/plm/03.png",
      title: "Product Lifecycle Optimization Guide",
      description: "Master product lifecycle management with strategies for design, development, manufacturing, and retirement phases.",
      ctaText: "Download guide (PDF)",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "plm-success",
      image: "/products/plm/04.png",
      title: "Success Story: 50% Faster Time-to-Market",
      description: "See how a manufacturing company reduced product development time by 50% using our comprehensive PLM solution.",
      ctaText: "Read success story",
      ctaLink: "/book-demo",
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "product-design",
      title: "Product Design",
      content: {
        title: "Collaborative product design and development",
        description: "Streamline product design with collaborative tools, version control, and integrated CAD management. Enable teams to work together seamlessly from concept to production.",
        buttons: [
          { text: "Try design tools", href: "/book-demo", variant: "primary" as const },
          { text: "See design examples", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Design Capabilities",
          items: [
            "Collaborative design workspace",
            "CAD file management",
            "Version control and history",
            "Design review workflows",
            "3D visualization tools",
            "Design validation checks",
            "Multi-CAD support",
            "Design reuse libraries"
          ]
        },
        image: "/products/plm/01.png",
        imageAlt: "Product design interface with CAD management and collaboration"
      }
    },
    {
      id: "change-management",
      title: "Change Management",
      content: {
        title: "Comprehensive product change management",
        description: "Manage product changes with automated workflows, impact analysis, and approval processes. Ensure all stakeholders are informed and changes are properly documented.",
        buttons: [
          { text: "Explore change management", href: "/book-demo", variant: "primary" as const },
          { text: "View workflow examples", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Change Management Features",
          items: [
            "Automated change workflows",
            "Impact analysis tools",
            "Approval process management",
            "Change notification system",
            "Change history tracking",
            "Rollback capabilities",
            "Stakeholder collaboration",
            "Change cost analysis"
          ]
        },
        image: "/products/plm/02.png",
        imageAlt: "Change management dashboard with workflow automation"
      }
    },
    {
      id: "data-management",
      title: "Product Data Management",
      content: {
        title: "Centralized product data and documentation",
        description: "Manage all product data in a centralized repository with secure access controls, automated synchronization, and comprehensive search capabilities.",
        buttons: [
          { text: "Try data management", href: "/book-demo", variant: "primary" as const },
          { text: "Data structure guide", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Data Management Features",
          items: [
            "Centralized data repository",
            "Secure access controls",
            "Automated data sync",
            "Advanced search capabilities",
            "Document management",
            "Metadata management",
            "Data validation rules",
            "Integration APIs"
          ]
        },
        image: "/products/plm/03.png",
        imageAlt: "Product data management interface with centralized repository"
      }
    },
    {
      id: "lifecycle-analytics",
      title: "Lifecycle Analytics",
      content: {
        title: "Product lifecycle insights and analytics",
        description: "Gain insights into product performance throughout the lifecycle with advanced analytics, reporting, and predictive capabilities for better decision-making.",
        buttons: [
          { text: "Explore analytics", href: "/book-demo", variant: "primary" as const },
          { text: "Analytics guide", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Analytics Features",
          items: [
            "Lifecycle performance metrics",
            "Predictive analytics",
            "Custom reporting tools",
            "Real-time dashboards",
            "Trend analysis",
            "Cost analysis reporting",
            "Quality metrics tracking",
            "ROI analysis tools"
          ]
        },
        image: "/products/plm/04.png",
        imageAlt: "Lifecycle analytics dashboard with performance metrics"
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Complete product lifecycle management from concept to retirement",
      description: "Manage every aspect of your product lifecycle with integrated tools for design, development, manufacturing, and retirement phases in a unified platform.",
      link: {
        text: "Learn about product lifecycle management",
        href: "/book-demo"
      }
    },
    {
      number: "02", 
      title: "Collaborative design and development workflows",
      description: "Enable seamless collaboration between design teams, engineers, and stakeholders with integrated workflows, version control, and real-time communication tools."
    },
    {
      number: "03",
      title: "Advanced change management and control", 
      description: "Manage product changes effectively with automated workflows, impact analysis, and comprehensive approval processes that ensure quality and compliance."
    },
    {
      number: "04",
      title: "Centralized product data and analytics",
      description: "Maintain all product data in a secure, centralized repository with advanced analytics and reporting capabilities that provide insights for better decision-making."
    }
  ];

  const customerReference = {
    title: "Customer Success Story",
    company: "Manufacturing company reduces time-to-market by 50%",
    description: "A leading manufacturing company transformed their product development process using our PLM solution, significantly reducing development time while improving product quality.",
    image: "/products/plm/01.png",
    linkText: "Read the PLM success story",
    linkHref: "/book-demo"
  };

  const customerLogos = [
    {
      name: "Boeing",
      image: "https://logo.clearbit.com/boeing.com",
      href: "/book-demo",
      alt: "Boeing logo"
    },
    {
      name: "General Electric",
      image: "https://logo.clearbit.com/ge.com",
      href: "/book-demo",
      alt: "General Electric logo"
    },
    {
      name: "Siemens",
      image: "https://logo.clearbit.com/siemens.com",
      href: "/book-demo", 
      alt: "Siemens logo"
    },
    {
      name: "Caterpillar",
      image: "https://logo.clearbit.com/caterpillar.com",
      href: "/book-demo",
      alt: "Caterpillar logo"
    },
    {
      name: "Ford", 
      image: "https://logo.clearbit.com/ford.com",
      href: "/book-demo",
      alt: "Ford logo"
    },
    {
      name: "3M",
      image: "https://logo.clearbit.com/3m.com",
      href: "/book-demo",
      alt: "3M logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in PLM",
      content: {
        title: "Latest product lifecycle management features",
        description: "Stay updated with the newest capabilities in product design, change management, and lifecycle analytics designed for modern manufacturing.",
        image: "/products/plm/02.png",
        links: [
          { text: "Latest design collaboration features", href: "/book-demo" },
          { text: "New change management capabilities", href: "/book-demo" },
          { text: "Enhanced analytics tools", href: "/book-demo" },
          { text: "Integration improvements", href: "/book-demo" }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare PLM solutions",
      content: {
        title: "See why our PLM solution leads the market",
        description: "Compare our product lifecycle management capabilities with other solutions and see why manufacturers choose us for product development and lifecycle management.",
        image: "/products/plm/03.png",
        links: [
          { text: "PLM solution comparison", href: "/book-demo" },
          { text: "Feature comparison guide", href: "/book-demo" },
          { text: "ROI calculator", href: "/book-demo" },
          { text: "Implementation timeline", href: "/book-demo" }
        ]
      }
    },
    {
      id: "learning",
      title: "Master PLM",
      content: {
        title: "Learn advanced PLM techniques",
        description: "Master product lifecycle management with comprehensive guides, best practices, and development methodologies used by leading manufacturers.",
        image: "/products/plm/04.png",
        links: [
          { text: "PLM implementation guide", href: "/book-demo" },
          { text: "Product design masterclass", href: "/book-demo" },
          { text: "Change management training", href: "/book-demo" },
          { text: "Lifecycle optimization strategies", href: "/book-demo" }
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
        <h1 className="sr-only">Product Lifecycle Management | PLM Design & Development Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="Product Lifecycle Management"
          description="Complete product lifecycle management from concept to retirement, including design collaboration, change management, and product data management. Streamline product development and accelerate time-to-market with comprehensive PLM capabilities."
          ctaButtons={ctaButtons}
          mediaType="image"
          mediaUrl="/products/plm/01.png"
          mediaAlt="Product Lifecycle Management dashboard with design collaboration and change management"
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="Product Lifecycle Management" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose our Product Lifecycle Management solution?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="PLM success stories"
          description="Learn why leading manufacturers use our PLM solution to accelerate product development and improve time-to-market."
          viewMoreText="View more success stories"
          viewMoreHref="/book-demo"
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Product Lifecycle Management Guide"
          description="We've compiled product development best practices, change management frameworks, and PLM implementation methodologies used by leading manufacturers."
          image="/products/plm/03.png"
          buttonText="Get the PLM guide"
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
