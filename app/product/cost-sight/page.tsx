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

export default function CostSightPage() {
  const { productUrl, docsUrl } = getAppUrls("cost-sight");
  
  const ctaButtons = [
    {
      text: "Optimize Costs",
      href: productUrl,
      variant: "primary" as const
    },
    {
      text: "Cost Analytics",
      href: docsUrl,
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "multi-cloud-optimization",
      image: "/cost-sight.svg",
      title: "Multi-Cloud Cost Optimization",
      description: "Comprehensive cost optimization across AWS, Azure, GCP, and hybrid clouds with intelligent recommendations and automated cost reduction strategies.",
      ctaText: "Optimize multi-cloud costs",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "cost-analytics",
      image: "/cost-sight.svg",
      title: "Advanced Cost Analytics & Insights",
      description: "Deep cost analytics with trend analysis, budget forecasting, and cost allocation insights for informed financial decision-making and planning.",
      ctaText: "Analyze cost trends",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "budget-management",
      image: "/cost-sight.svg",
      title: "Intelligent Budget Management",
      description: "Smart budget management with automated alerts, spending forecasts, and budget optimization recommendations for proactive cost control.",
      ctaText: "Manage cloud budgets",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "resource-optimization",
      image: "/cost-sight.svg",
      title: "Automated Resource Optimization",
      description: "Intelligent resource optimization with rightsizing recommendations, unused resource identification, and automated cost-saving actions.",
      ctaText: "Optimize cloud resources",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "cost-optimization",
      title: "Cost Optimization",
      content: {
        title: "Comprehensive multi-cloud cost optimization platform",
        description: "Advanced cost optimization with intelligent recommendations, automated cost reduction, and resource rightsizing across all cloud providers and services.",
        buttons: [
          { text: "Optimize Cloud Costs", href: productUrl, variant: "primary" as const },
          { text: "Optimization strategies", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Cost Optimization Features",
          items: [
            "Multi-cloud cost analysis",
            "Intelligent recommendations",
            "Automated cost reduction",
            "Resource rightsizing",
            "Reserved instance optimization",
            "Spot instance management",
            "Storage optimization",
            "Network cost optimization"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Cost Optimization Console",
          description: "Multi-cloud cost management and optimization interface"
        }
      }
    },
    {
      id: "financial-analytics",
      title: "Financial Analytics",
      content: {
        title: "Advanced financial analytics and cost intelligence platform",
        description: "Comprehensive financial analytics with cost trends, budget forecasting, ROI analysis, and financial insights for data-driven cloud financial management.",
        buttons: [
          { text: "Analyze Costs", href: productUrl, variant: "primary" as const },
          { text: "Financial reporting", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Financial Analytics Features",
          items: [
            "Cost trend analysis",
            "Budget forecasting",
            "ROI analysis",
            "Cost allocation",
            "Chargeback reporting",
            "Financial dashboards",
            "Custom reporting",
            "Executive insights"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Financial Analytics Console",
          description: "Cloud cost analytics and financial reporting interface"
        }
      }
    },
    {
      id: "budget-control",
      title: "Budget Control",
      content: {
        title: "Intelligent budget management and spending control platform",
        description: "Smart budget management with automated alerts, spending forecasts, budget optimization, and proactive cost control for effective financial governance.",
        buttons: [
          { text: "Manage Budgets", href: productUrl, variant: "primary" as const },
          { text: "Budget planning guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Budget Control Features",
          items: [
            "Automated budget alerts",
            "Spending forecasts",
            "Budget optimization",
            "Cost controls",
            "Approval workflows",
            "Variance analysis",
            "Budget templates",
            "Multi-dimensional budgets"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Budget Management Interface",
          description: "Cloud budget planning and spending control management"
        }
      }
    },
    {
      id: "resource-management",
      title: "Resource Management",
      content: {
        title: "Automated resource optimization and management platform",
        description: "Intelligent resource management with automated rightsizing, unused resource identification, and cost-saving recommendations for optimal resource utilization.",
        buttons: [
          { text: "Optimize Resources", href: productUrl, variant: "primary" as const },
          { text: "Resource optimization guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Resource Management Features",
          items: [
            "Resource rightsizing",
            "Unused resource detection",
            "Automated optimization",
            "Performance monitoring",
            "Capacity planning",
            "Resource tagging",
            "Lifecycle management",
            "Cost-performance balance"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Resource Optimization Center",
          description: "Automated resource management and cost optimization interface"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Comprehensive multi-cloud cost optimization with automation",
      description: "Advanced cost optimization across AWS, Azure, GCP, and hybrid clouds with intelligent recommendations and automated cost reduction strategies for maximum savings.",
      link: {
        text: "Learn about cost optimization",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Advanced financial analytics with predictive insights",
      description: "Deep financial analytics with cost trends, budget forecasting, ROI analysis, and predictive insights for informed cloud financial decision-making and planning."
    },
    {
      number: "03",
      title: "Intelligent budget management with proactive controls", 
      description: "Smart budget management with automated alerts, spending forecasts, budget optimization, and proactive cost control for effective cloud financial governance."
    },
    {
      number: "04",
      title: "Automated resource optimization with performance monitoring",
      description: "Intelligent resource management with automated rightsizing, unused resource identification, and cost-performance optimization for optimal cloud resource utilization."
    }
  ];

  const customerReference = {
    title: "Cloud Cost Transformation",
    company: "Enterprise reduces cloud costs by 45% with intelligent multi-cloud optimization",
    description: "A large enterprise transformed their cloud cost management using CostSight, achieving significant cost reductions while maintaining performance and improving financial visibility.",
    image: "/cost-sight.svg",
    linkText: "Read the cost optimization story",
    linkHref: docsUrl
  };

  const customerLogos = [
    {
      name: "Cloud Custodian",
      image: "https://logo.clearbit.com/cloudcustodian.io",
      href: docsUrl,
      alt: "Cloud Custodian logo"
    },
    {
      name: "AWS Cost Explorer",
      image: "https://logo.clearbit.com/aws.amazon.com",
      href: docsUrl,
      alt: "AWS Cost Explorer logo"
    },
    {
      name: "Azure Cost Management",
      image: "https://logo.clearbit.com/azure.microsoft.com",
      href: docsUrl, 
      alt: "Azure Cost Management logo"
    },
    {
      name: "Google Cloud Billing",
      image: "https://logo.clearbit.com/cloud.google.com",
      href: docsUrl,
      alt: "Google Cloud Billing logo"
    },
    {
      name: "Cloudability", 
      image: "https://logo.clearbit.com/cloudability.com",
      href: docsUrl,
      alt: "Cloudability logo"
    },
    {
      name: "CloudHealth",
      image: "https://logo.clearbit.com/cloudhealthtech.com",
      href: docsUrl,
      alt: "CloudHealth logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in CostSight",
      content: {
        title: "Latest cost optimization and financial management features",
        description: "Stay updated with the newest capabilities in multi-cloud cost optimization, financial analytics, and budget management for modern cloud financial operations.",
        image: "/cost-sight.svg",
        links: [
          { text: "New optimization features", href: docsUrl },
          { text: "Financial analytics improvements", href: docsUrl },
          { text: "Budget management updates", href: docsUrl },
          { text: "Resource optimization enhancements", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare cost management solutions",
      content: {
        title: "Why choose CostSight",
        description: "Compare our multi-cloud cost optimization capabilities with other solutions and see why FinOps teams choose us for comprehensive cloud financial management.",
        image: "/cost-sight.svg",
        links: [
          { text: "Cost management comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master CostSight",
      content: {
        title: "Learn cloud cost optimization best practices",
        description: "Master cloud financial management with comprehensive guides, cost optimization strategies, and training materials for FinOps professionals and cloud architects.",
        image: "/cost-sight.svg",
        links: [
          { text: "Cost optimization deployment guide", href: docsUrl },
          { text: "FinOps best practices", href: docsUrl },
          { text: "Budget management strategies", href: docsUrl },
          { text: "Troubleshooting guide", href: docsUrl }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Optimize costs",
      href: productUrl,
      icon: "demo"
    },
    {
      title: "Cost analytics",
      href: docsUrl,
      icon: "tour"
    },
    {
      title: "Contact FinOps team",
      href: productUrl,
      icon: "contact"
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="sr-only">CostSight | Multi-Cloud Cost Optimization Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="CostSight"
          description="Multi-cloud cost optimization with intelligent analytics, budget management, and automated resource optimization across AWS, Azure, GCP, and hybrid environments. Advanced FinOps platform with comprehensive financial governance and cost intelligence."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Cost Optimization Console",
            description: "Multi-cloud financial management and cost analytics"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="CostSight" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose CostSight?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Cloud cost optimization success stories"
          description="Learn why FinOps professionals and cloud architects choose CostSight for comprehensive multi-cloud cost optimization and financial management capabilities."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The FinOps Optimization Guide"
          description="We've compiled cloud cost optimization strategies, FinOps best practices, and financial governance techniques for modern multi-cloud environments and cost management."
          image="/cost-sight.svg"
          buttonText="Get the FinOps guide"
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
