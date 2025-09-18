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

export default function FinOpsCortexPage() {
  const { productUrl, docsUrl } = getAppUrls("finops-cortex");
  
  const ctaButtons = [
    {
      text: "Start Free Trial",
      href: productUrl,
      variant: "primary" as const
    },
    {
      text: "View Documentation",
      href: docsUrl,
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "cloud-cost-analysis",
      image: "/finops-cortex.svg",
      title: "Advanced Cloud Cost Analysis",
      description: "Analyze cloud spending across multiple providers with detailed cost breakdowns, trend analysis, and intelligent recommendations for optimization.",
      ctaText: "Explore cost analysis",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "policy-governance",
      image: "/finops-cortex.svg",
      title: "Automated Policy Governance",
      description: "Enforce cost governance policies with automated controls, budget alerts, and spending limits to prevent cost overruns and ensure compliance.",
      ctaText: "Learn about governance",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "savings-optimization",
      image: "/finops-cortex.svg",
      title: "Intelligent Savings Recommendations",
      description: "Discover cost savings opportunities with AI-powered recommendations for rightsizing, reserved instances, and resource optimization across clouds.",
      ctaText: "View savings features",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "multi-cloud-visibility",
      image: "/finops-cortex.svg",
      title: "Multi-Cloud Cost Visibility",
      description: "Unified cost visibility across AWS, Azure, GCP, and other cloud providers with consolidated reporting and cross-cloud optimization insights.",
      ctaText: "See multi-cloud features",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "cost-analysis",
      title: "Cost Analysis",
      content: {
        title: "Comprehensive cloud cost analysis and reporting",
        description: "Analyze cloud spending with detailed cost breakdowns, trend analysis, and advanced filtering capabilities for complete financial visibility across all cloud resources.",
        buttons: [
          { text: "Analyze Costs", href: productUrl, variant: "primary" as const },
          { text: "Cost analysis guides", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Cost Analysis Features",
          items: [
            "Multi-cloud cost aggregation",
            "Detailed cost breakdowns",
            "Trend analysis & forecasting",
            "Custom cost allocation",
            "Chargeback & showback",
            "Cost anomaly detection",
            "Budget tracking",
            "Executive reporting"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Cost Analysis Dashboard",
          description: "Comprehensive cloud cost analysis and financial reporting"
        }
      }
    },
    {
      id: "policy-enforcement",
      title: "Policy Enforcement",
      content: {
        title: "Automated cost governance and policy enforcement",
        description: "Implement and enforce cost governance policies with automated controls, spending limits, and compliance monitoring to prevent budget overruns.",
        buttons: [
          { text: "Setup Policies", href: productUrl, variant: "primary" as const },
          { text: "Governance documentation", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Policy Enforcement Features",
          items: [
            "Automated policy enforcement",
            "Budget alerts & notifications",
            "Spending limit controls",
            "Resource tagging policies",
            "Approval workflows",
            "Compliance monitoring",
            "Violation tracking",
            "Remediation automation"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Policy Management Interface",
          description: "Cost governance policy configuration and enforcement"
        }
      }
    },
    {
      id: "optimization-recommendations",
      title: "Optimization Recommendations",
      content: {
        title: "AI-powered cost optimization and savings recommendations",
        description: "Discover cost savings opportunities with intelligent recommendations for rightsizing, reserved instances, and resource optimization across all cloud providers.",
        buttons: [
          { text: "View Recommendations", href: productUrl, variant: "primary" as const },
          { text: "Optimization strategies", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Optimization Features",
          items: [
            "AI-powered recommendations",
            "Rightsizing analysis",
            "Reserved instance optimization",
            "Spot instance recommendations",
            "Storage optimization",
            "Network cost reduction",
            "Idle resource detection",
            "ROI calculations"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Optimization Recommendations",
          description: "AI-powered cost savings and optimization recommendations"
        }
      }
    },
    {
      id: "multi-cloud-management",
      title: "Multi-Cloud Management",
      content: {
        title: "Unified multi-cloud cost management and optimization",
        description: "Manage costs across multiple cloud providers with unified dashboards, cross-cloud optimization insights, and consolidated financial reporting.",
        buttons: [
          { text: "Manage Multi-Cloud", href: productUrl, variant: "primary" as const },
          { text: "Multi-cloud best practices", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Multi-Cloud Management Features",
          items: [
            "Cross-cloud cost aggregation",
            "Unified dashboards",
            "Provider comparison analysis",
            "Cross-cloud optimization",
            "Consolidated billing",
            "Multi-cloud budgeting",
            "Provider performance metrics",
            "Migration cost analysis"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Multi-Cloud Cost Console",
          description: "Unified multi-cloud cost management and optimization"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Comprehensive cloud cost analysis and visibility",
      description: "Complete financial visibility across all cloud providers with detailed cost breakdowns, trend analysis, and advanced reporting capabilities for informed decision-making.",
      link: {
        text: "Learn about cost analysis",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Automated policy governance and cost controls",
      description: "Implement automated cost governance with policy enforcement, spending limits, and compliance monitoring to prevent budget overruns and ensure financial discipline."
    },
    {
      number: "03",
      title: "AI-powered optimization and savings recommendations", 
      description: "Discover cost savings opportunities with intelligent recommendations for rightsizing, reserved instances, and resource optimization across all cloud environments."
    },
    {
      number: "04",
      title: "Multi-cloud cost management and optimization",
      description: "Unified cost management across AWS, Azure, GCP, and other providers with consolidated reporting and cross-cloud optimization insights for maximum efficiency."
    }
  ];

  const customerReference = {
    title: "FinOps Transformation Success",
    company: "Enterprise reduces cloud costs by 45% with intelligent optimization",
    description: "A Fortune 500 company transformed their cloud financial management using FinOps Cortex, achieving significant cost reductions while improving governance and optimization across multi-cloud environments.",
    image: "/finops-cortex.svg",
    linkText: "Read the FinOps transformation story",
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
      image: "https://logo.clearbit.com/microsoft.com",
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
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in FinOps Cortex",
      content: {
        title: "Latest FinOps and cost optimization features",
        description: "Stay updated with the newest capabilities in cloud cost management, governance automation, and multi-cloud optimization for enterprise financial operations.",
        image: "/finops-cortex.svg",
        links: [
          { text: "New cost analysis features", href: docsUrl },
          { text: "Policy governance updates", href: docsUrl },
          { text: "Optimization improvements", href: docsUrl },
          { text: "Multi-cloud enhancements", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare FinOps solutions",
      content: {
        title: "Why choose FinOps Cortex",
        description: "Compare our cloud cost management capabilities with other solutions and see why finance teams choose us for comprehensive FinOps and multi-cloud optimization.",
        image: "/finops-cortex.svg",
        links: [
          { text: "FinOps solution comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master FinOps Cortex",
      content: {
        title: "Learn FinOps best practices",
        description: "Master cloud financial operations with comprehensive guides, best practices, and training materials for finance teams and cloud administrators.",
        image: "/finops-cortex.svg",
        links: [
          { text: "FinOps implementation guide", href: docsUrl },
          { text: "Cost optimization best practices", href: docsUrl },
          { text: "Governance strategies", href: docsUrl },
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
      title: "View documentation",
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
        <h1 className="sr-only">FinOps Cortex | Cloud Cost Governance & Optimization Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="FinOps Cortex"
          description="FinOps platform to analyze cloud spend, enforce policies, and recommend savings across clouds. Comprehensive cost governance with automated controls, intelligent optimization, and unified multi-cloud financial management for enterprise operations."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "FinOps Management Console",
            description: "Cloud cost governance and optimization management interface"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="FinOps Cortex" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose FinOps Cortex?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="FinOps transformation success stories"
          description="Learn why finance teams and cloud administrators choose FinOps Cortex for comprehensive cloud cost management and optimization capabilities."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The FinOps Excellence Guide"
          description="We've compiled cloud cost management strategies, optimization techniques, and governance best practices for modern enterprise financial operations and multi-cloud environments."
          image="/finops-cortex.svg"
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
