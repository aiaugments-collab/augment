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

export default function CloudGovernancePage() {
  const { productUrl, docsUrl } = getAppUrls("cloud-governance");
  
  const ctaButtons = [
    {
      text: "Start Free Trial",
      href: productUrl,
      variant: "primary" as const
    },
    {
      text: "View Policies",
      href: docsUrl,
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "policy-automation",
      image: "/cloud-govern.svg",
      title: "Automated Policy Enforcement",
      description: "Implement and enforce governance policies across multi-cloud environments with automated compliance checking, remediation, and continuous monitoring.",
      ctaText: "Explore policy automation",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "multi-cloud-governance",
      image: "/cloud-govern.svg",
      title: "Multi-Cloud Governance Platform",
      description: "Unified governance across AWS, Azure, GCP, and hybrid clouds with centralized policy management and cross-cloud visibility and control.",
      ctaText: "Learn about multi-cloud",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "tag-enforcement",
      image: "/cloud-govern.svg",
      title: "Intelligent Tag Enforcement",
      description: "Automated resource tagging with policy-driven tag enforcement, cost allocation, and compliance tracking across all cloud resources and services.",
      ctaText: "View tagging features",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "policy-as-code",
      image: "/cloud-govern.svg",
      title: "Policy-as-Code Framework",
      description: "Version-controlled governance policies with GitOps workflows, policy testing, and collaborative policy development for scalable governance management.",
      ctaText: "See policy-as-code",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "policy-management",
      title: "Policy Management",
      content: {
        title: "Comprehensive policy automation and enforcement",
        description: "Create, deploy, and manage governance policies across multi-cloud environments with automated compliance checking, real-time monitoring, and intelligent remediation.",
        buttons: [
          { text: "Create Policies", href: productUrl, variant: "primary" as const },
          { text: "Policy templates", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Policy Management Features",
          items: [
            "Policy automation",
            "Compliance checking",
            "Real-time monitoring",
            "Automated remediation",
            "Policy templates",
            "Custom rule engine",
            "Exception handling",
            "Impact analysis"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Policy Management Console",
          description: "Multi-cloud governance and policy automation interface"
        }
      }
    },
    {
      id: "multi-cloud-control",
      title: "Multi-Cloud Control",
      content: {
        title: "Unified governance across multiple cloud providers",
        description: "Centralized control and visibility across AWS, Azure, GCP, and hybrid environments with consistent policy enforcement and cross-cloud governance management.",
        buttons: [
          { text: "Connect Clouds", href: productUrl, variant: "primary" as const },
          { text: "Multi-cloud setup guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Multi-Cloud Control Features",
          items: [
            "AWS integration",
            "Azure connectivity",
            "GCP management",
            "Hybrid cloud support",
            "Cross-cloud policies",
            "Unified dashboards",
            "Resource inventory",
            "Cost optimization"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Multi-Cloud Control Center",
          description: "Unified multi-cloud governance and resource management"
        }
      }
    },
    {
      id: "tag-compliance",
      title: "Tag & Compliance",
      content: {
        title: "Automated tagging and compliance management",
        description: "Intelligent resource tagging with policy-driven enforcement, compliance tracking, and automated cost allocation across all cloud resources and organizational units.",
        buttons: [
          { text: "Setup Tagging", href: productUrl, variant: "primary" as const },
          { text: "Compliance frameworks", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Tag & Compliance Features",
          items: [
            "Automated tagging",
            "Tag enforcement",
            "Compliance tracking",
            "Cost allocation",
            "Resource categorization",
            "Policy validation",
            "Audit reporting",
            "Remediation workflows"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Compliance Management Interface",
          description: "Automated tagging and compliance monitoring console"
        }
      }
    },
    {
      id: "governance-analytics",
      title: "Governance Analytics",
      content: {
        title: "Advanced governance analytics and reporting",
        description: "Comprehensive governance insights with policy effectiveness analysis, compliance trends, and governance maturity assessments for continuous improvement and optimization.",
        buttons: [
          { text: "View Analytics", href: productUrl, variant: "primary" as const },
          { text: "Reporting guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Governance Analytics Features",
          items: [
            "Policy effectiveness",
            "Compliance trends",
            "Risk assessment",
            "Governance maturity",
            "Cost impact analysis",
            "Resource utilization",
            "Performance metrics",
            "Custom reporting"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Governance Analytics Center",
          description: "Advanced governance insights and reporting interface"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Automated policy enforcement across multi-cloud environments",
      description: "Comprehensive policy automation with real-time compliance checking, automated remediation, and continuous monitoring across AWS, Azure, GCP, and hybrid clouds.",
      link: {
        text: "Learn about policy automation",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Unified governance platform for all cloud providers",
      description: "Centralized control and visibility across multiple cloud environments with consistent policy enforcement, cross-cloud governance, and unified management dashboards."
    },
    {
      number: "03",
      title: "Intelligent tag enforcement and compliance tracking", 
      description: "Automated resource tagging with policy-driven enforcement, cost allocation, compliance tracking, and comprehensive audit reporting across all organizational units."
    },
    {
      number: "04",
      title: "Policy-as-code framework with GitOps integration",
      description: "Version-controlled governance policies with collaborative development, policy testing, GitOps workflows, and scalable governance management for enterprise environments."
    }
  ];

  const customerReference = {
    title: "Governance Transformation Success",
    company: "Enterprise achieves 95% compliance automation across multi-cloud infrastructure",
    description: "A global enterprise transformed their cloud governance using CloudGovern, achieving automated compliance across 1000+ cloud accounts while reducing manual governance overhead by 80%.",
    image: "/cloud-govern.svg",
    linkText: "Read the governance transformation story",
    linkHref: docsUrl
  };

  const customerLogos = [
    {
      name: "Steampipe",
      image: "https://logo.clearbit.com/steampipe.io",
      href: docsUrl,
      alt: "Steampipe logo"
    },
    {
      name: "Cloud Custodian",
      image: "https://logo.clearbit.com/cloudcustodian.io",
      href: docsUrl,
      alt: "Cloud Custodian logo"
    },
    {
      name: "Open Policy Agent",
      image: "https://logo.clearbit.com/openpolicyagent.org",
      href: docsUrl, 
      alt: "Open Policy Agent logo"
    },
    {
      name: "Terraform",
      image: "https://logo.clearbit.com/terraform.io",
      href: docsUrl,
      alt: "Terraform logo"
    },
    {
      name: "AWS Config", 
      image: "https://logo.clearbit.com/aws.amazon.com",
      href: docsUrl,
      alt: "AWS Config logo"
    },
    {
      name: "Azure Policy",
      image: "https://logo.clearbit.com/azure.microsoft.com",
      href: docsUrl,
      alt: "Azure Policy logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in CloudGovern",
      content: {
        title: "Latest governance and policy automation features",
        description: "Stay updated with the newest capabilities in multi-cloud governance, policy automation, and compliance management for modern cloud infrastructure governance.",
        image: "/cloud-govern.svg",
        links: [
          { text: "New governance features", href: docsUrl },
          { text: "Policy automation improvements", href: docsUrl },
          { text: "Multi-cloud enhancements", href: docsUrl },
          { text: "Compliance updates", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare governance solutions",
      content: {
        title: "Why choose CloudGovern",
        description: "Compare our cloud governance capabilities with other solutions and see why cloud architects choose us for comprehensive multi-cloud governance and policy automation.",
        image: "/cloud-govern.svg",
        links: [
          { text: "Governance solution comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master CloudGovern",
      content: {
        title: "Learn cloud governance best practices",
        description: "Master multi-cloud governance with comprehensive guides, policy frameworks, and training materials for cloud architects and governance professionals.",
        image: "/cloud-govern.svg",
        links: [
          { text: "Cloud governance deployment guide", href: docsUrl },
          { text: "Policy automation best practices", href: docsUrl },
          { text: "Multi-cloud governance strategies", href: docsUrl },
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
      title: "View policy templates",
      href: docsUrl,
      icon: "tour"
    },
    {
      title: "Contact governance team",
      href: productUrl,
      icon: "contact"
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="sr-only">CloudGovern | Policy Automation & Multi-Cloud Governance Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="AI CloudOptimizer"
          description="AI-powered cloud resource optimizer that continuously analyzes usage patterns, predicts future needs, and automatically optimizes resource allocation for maximum efficiency and cost savings across multi-cloud environments."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Cloud Governance Console",
            description: "Multi-cloud policy automation and governance management"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="CloudGovern" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose CloudGovern?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Cloud governance success stories"
          description="Learn why cloud architects and governance professionals choose CloudGovern for comprehensive multi-cloud governance and automated policy enforcement."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Cloud Governance Guide"
          description="We've compiled governance strategies, policy automation techniques, and compliance best practices for modern multi-cloud environments and enterprise governance frameworks."
          image="/cloud-govern.svg"
          buttonText="Get the governance guide"
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
