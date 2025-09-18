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

export default function AICostOptimizerPage() {
  const { productUrl, docsUrl } = getAppUrls("ai-cost-optimizer");
  
  const ctaButtons = [
    {
      text: "Optimize Costs",
      href: productUrl,
      variant: "primary" as const
    },
    {
      text: "Cost Analysis Guide",
      href: docsUrl,
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "intelligent-cost-analysis",
      image: "/ai-cost-optimizer.svg",
      title: "Intelligent Cloud Cost Analysis",
      description: "AI-driven cost optimization tool that analyzes cloud spending patterns, identifies waste, and provides actionable recommendations for cost reduction with predictive modeling.",
      ctaText: "Analyze costs",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "predictive-modeling",
      image: "/ai-cost-optimizer.svg",
      title: "Predictive Cost Modeling",
      description: "Advanced machine learning algorithms predict future cloud spending, identify cost trends, and provide intelligent forecasting for budget planning and optimization.",
      ctaText: "Predict costs",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "automated-optimization",
      image: "/ai-cost-optimizer.svg",
      title: "Automated Cost Optimization",
      description: "AI-powered automation suggestions for cost reduction including resource rightsizing, reserved instance optimization, and intelligent workload scheduling.",
      ctaText: "Automate optimization",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "roi-analysis",
      image: "/ai-cost-optimizer.svg",
      title: "ROI & Impact Analysis",
      description: "Comprehensive ROI analysis with cost-benefit assessment, optimization impact prediction, and intelligent recommendations for maximum financial efficiency.",
      ctaText: "Analyze ROI",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "cost-analysis",
      title: "Cost Analysis",
      content: {
        title: "AI-powered cloud cost analysis and spending optimization",
        description: "Advanced machine learning algorithms analyze cloud spending patterns across multiple providers, identify cost optimization opportunities, and provide intelligent recommendations for maximum savings.",
        buttons: [
          { text: "Analyze Spending", href: productUrl, variant: "primary" as const },
          { text: "Cost analysis guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Cost Analysis Features",
          items: [
            "Multi-cloud cost tracking",
            "Spending pattern analysis",
            "Waste identification",
            "Cost allocation optimization",
            "Budget variance analysis",
            "Chargeback automation",
            "Cost trend analysis",
            "Anomaly detection"
          ]
        },
        mockup: {
          type: "analytics" as const,
          title: "Cost Analysis Dashboard",
          description: "AI-powered cloud cost analysis and spending optimization platform"
        }
      }
    },
    {
      id: "predictive-forecasting",
      title: "Predictive Forecasting",
      content: {
        title: "Intelligent cost forecasting with machine learning predictions",
        description: "AI-driven cost prediction models analyze historical spending data and usage patterns to provide accurate cost forecasts, budget planning, and optimization recommendations.",
        buttons: [
          { text: "Forecast Costs", href: productUrl, variant: "primary" as const },
          { text: "Forecasting guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Predictive Forecasting Features",
          items: [
            "Cost prediction modeling",
            "Usage forecasting",
            "Budget planning automation",
            "Seasonal analysis",
            "Growth projection",
            "Risk assessment",
            "Scenario modeling",
            "Financial planning integration"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Cost Forecasting Center",
          description: "AI-driven cost prediction and budget planning platform"
        }
      }
    },
    {
      id: "optimization-recommendations",
      title: "Optimization Recommendations",
      content: {
        title: "Intelligent cost optimization recommendations and automation",
        description: "AI-powered optimization engine provides actionable recommendations for cost reduction including resource rightsizing, reserved instance optimization, and intelligent workload management.",
        buttons: [
          { text: "Get Recommendations", href: productUrl, variant: "primary" as const },
          { text: "Optimization strategies", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Optimization Features",
          items: [
            "Resource rightsizing",
            "Reserved instance optimization",
            "Spot instance recommendations",
            "Storage optimization",
            "Network cost reduction",
            "Workload scheduling",
            "Auto-scaling optimization",
            "License optimization"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Optimization Recommendations",
          description: "AI-powered cost optimization suggestions and automation guidance"
        }
      }
    },
    {
      id: "roi-tracking",
      title: "ROI Tracking",
      content: {
        title: "Comprehensive ROI analysis and cost savings tracking platform",
        description: "Advanced ROI tracking with cost-benefit analysis, optimization impact measurement, and intelligent reporting for financial optimization and business value demonstration.",
        buttons: [
          { text: "Track ROI", href: productUrl, variant: "primary" as const },
          { text: "ROI analysis guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "ROI Tracking Features",
          items: [
            "Cost savings measurement",
            "ROI calculation automation",
            "Impact assessment",
            "Business value analysis",
            "Executive reporting",
            "Optimization tracking",
            "Performance metrics",
            "Financial dashboards"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "AI Cost Advisor",
          description: "Intelligent ROI analysis and cost optimization guidance"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "AI-driven cost analysis with intelligent spending optimization",
      description: "Advanced machine learning algorithms analyze cloud spending patterns, identify waste, and provide actionable recommendations for cost reduction with predictive cost modeling and optimization strategies.",
      link: {
        text: "Learn about AI cost optimization",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Predictive cost modeling with machine learning forecasting",
      description: "AI-powered cost prediction models analyze historical data and usage patterns to provide accurate forecasts, budget planning, and proactive cost management recommendations."
    },
    {
      number: "03",
      title: "Automated optimization suggestions with intelligent recommendations", 
      description: "AI-driven optimization engine provides actionable recommendations for resource rightsizing, reserved instance optimization, and intelligent workload management for maximum cost efficiency."
    },
    {
      number: "04",
      title: "Comprehensive ROI tracking with impact analysis",
      description: "Advanced ROI analysis with cost-benefit assessment, optimization impact measurement, and intelligent reporting for financial optimization and business value demonstration."
    }
  ];

  const customerReference = {
    title: "Cost Optimization Success",
    company: "Enterprise saves $2M annually with AI-powered cost optimization",
    description: "A Fortune 500 company achieved significant cost savings using AI CostOptimizer, reducing cloud spending by 45% while maintaining performance and scalability.",
    image: "/ai-cost-optimizer.svg",
    linkText: "Read the cost optimization success story",
    linkHref: docsUrl
  };

  const customerLogos = [
    {
      name: "Amazon Web Services",
      image: "https://logo.clearbit.com/aws.amazon.com",
      href: docsUrl,
      alt: "AWS logo"
    },
    {
      name: "Microsoft Azure",
      image: "https://logo.clearbit.com/azure.microsoft.com",
      href: docsUrl,
      alt: "Azure logo"
    },
    {
      name: "Google Cloud",
      image: "https://logo.clearbit.com/cloud.google.com",
      href: docsUrl, 
      alt: "Google Cloud logo"
    },
    {
      name: "CloudHealth",
      image: "https://logo.clearbit.com/cloudhealthtech.com",
      href: docsUrl,
      alt: "CloudHealth logo"
    },
    {
      name: "Cloudability", 
      image: "https://logo.clearbit.com/cloudability.com",
      href: docsUrl,
      alt: "Cloudability logo"
    },
    {
      name: "ParkMyCloud",
      image: "https://logo.clearbit.com/parkmycloud.com",
      href: docsUrl,
      alt: "ParkMyCloud logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in AI CostOptimizer",
      content: {
        title: "Latest AI-powered cost optimization features",
        description: "Stay updated with the newest capabilities in AI-driven cost analysis, predictive modeling, and optimization automation for modern cloud financial management.",
        image: "/ai-cost-optimizer.svg",
        links: [
          { text: "New cost analysis features", href: docsUrl },
          { text: "Predictive modeling enhancements", href: docsUrl },
          { text: "Optimization automation updates", href: docsUrl },
          { text: "ROI tracking improvements", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare cost optimization solutions",
      content: {
        title: "Why choose AI CostOptimizer",
        description: "Compare our AI-powered cost optimization capabilities with other solutions and see why finance teams choose us for intelligent cloud cost management and optimization.",
        image: "/ai-cost-optimizer.svg",
        links: [
          { text: "Cost optimization comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master AI CostOptimizer",
      content: {
        title: "Learn AI-powered cost optimization best practices",
        description: "Master intelligent cost management with comprehensive guides, optimization strategies, and training materials for finance professionals and cloud architects.",
        image: "/ai-cost-optimizer.svg",
        links: [
          { text: "AI cost optimization guide", href: docsUrl },
          { text: "Predictive modeling strategies", href: docsUrl },
          { text: "Optimization automation techniques", href: docsUrl },
          { text: "ROI maximization methods", href: docsUrl }
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
      title: "Cost analysis guide",
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
        <h1 className="sr-only">AI CostOptimizer | Intelligent Cloud Cost Analysis and Optimization</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="AI CostOptimizer"
          description="AI-driven cost optimization tool that analyzes cloud spending patterns, identifies waste, and provides actionable recommendations for cost reduction. Includes predictive cost modeling and automated optimization suggestions with advanced machine learning insights."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "analytics",
            title: "AI Cost Optimization Platform",
            description: "Intelligent cloud cost analysis and optimization with predictive modeling"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="AI CostOptimizer" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose AI CostOptimizer?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Cost optimization success stories"
          description="Learn why finance professionals and cloud architects choose AI CostOptimizer for intelligent cost management, predictive modeling, and optimization automation."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The AI Cost Optimization Excellence Guide"
          description="We've compiled intelligent cost management strategies, predictive modeling techniques, and optimization best practices for modern cloud financial operations."
          image="/ai-cost-optimizer.svg"
          buttonText="Get the cost optimization guide"
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
