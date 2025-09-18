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

export default function DevOpsConductorPage() {
  const { productUrl, docsUrl } = getAppUrls("devops-conductor");
  
  const ctaButtons = [
    {
      text: "Start Automation",
      href: productUrl,
      variant: "primary" as const
    },
    {
      text: "Pipeline Templates",
      href: docsUrl,
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "cicd-orchestration",
      image: "/devops-conductor.svg",
      title: "Advanced CI/CD Pipeline Orchestration",
      description: "Sophisticated CI/CD orchestration with automated testing, deployment pipelines, and release management for continuous delivery and deployment automation.",
      ctaText: "Build CI/CD pipelines",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "infrastructure-provisioning",
      image: "/devops-conductor.svg",
      title: "Automated Infrastructure Provisioning",
      description: "Infrastructure-as-code automation with template-driven provisioning, environment management, and scalable infrastructure deployment workflows.",
      ctaText: "Provision infrastructure",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "workflow-templates",
      image: "/devops-conductor.svg",
      title: "Reusable Workflow Templates",
      description: "Pre-built workflow templates with customizable automation patterns, best practices, and reusable components for accelerated DevOps implementation.",
      ctaText: "Browse workflow templates",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "deployment-automation",
      image: "/devops-conductor.svg",
      title: "Enterprise Deployment Automation",
      description: "Comprehensive deployment automation with multi-environment management, rollback capabilities, and enterprise-grade deployment orchestration.",
      ctaText: "Automate deployments",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "pipeline-orchestration",
      title: "Pipeline Orchestration",
      content: {
        title: "Advanced CI/CD pipeline orchestration platform",
        description: "Comprehensive CI/CD orchestration with automated testing, deployment pipelines, and release management for enterprise continuous delivery workflows.",
        buttons: [
          { text: "Create CI/CD Pipeline", href: productUrl, variant: "primary" as const },
          { text: "Pipeline best practices", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Pipeline Orchestration Features",
          items: [
            "Automated testing",
            "Deployment pipelines",
            "Release management",
            "Quality gates",
            "Pipeline templates",
            "Parallel execution",
            "Artifact management",
            "Integration testing"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "CI/CD Pipeline Console",
          description: "DevOps pipeline orchestration and automation management"
        }
      }
    },
    {
      id: "infrastructure-automation",
      title: "Infrastructure Automation",
      content: {
        title: "Infrastructure-as-code and provisioning automation",
        description: "Advanced infrastructure automation with template-driven provisioning, environment management, and scalable deployment workflows for modern infrastructure.",
        buttons: [
          { text: "Automate Infrastructure", href: productUrl, variant: "primary" as const },
          { text: "Infrastructure templates", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Infrastructure Automation Features",
          items: [
            "Infrastructure-as-code",
            "Template-driven provisioning",
            "Environment management",
            "Configuration management",
            "Resource optimization",
            "Cost management",
            "Compliance automation",
            "Multi-cloud support"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Infrastructure Automation Console",
          description: "Infrastructure provisioning and configuration management"
        }
      }
    },
    {
      id: "workflow-management",
      title: "Workflow Management",
      content: {
        title: "Reusable workflow templates and automation patterns",
        description: "Comprehensive workflow management with pre-built templates, customizable automation patterns, and reusable components for accelerated DevOps adoption.",
        buttons: [
          { text: "Design Workflows", href: productUrl, variant: "primary" as const },
          { text: "Workflow library", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Workflow Management Features",
          items: [
            "Pre-built templates",
            "Workflow designer",
            "Automation patterns",
            "Reusable components",
            "Custom workflows",
            "Approval processes",
            "Notification systems",
            "Audit logging"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Workflow Design Interface",
          description: "DevOps workflow design and template management"
        }
      }
    },
    {
      id: "deployment-management",
      title: "Deployment Management",
      content: {
        title: "Enterprise deployment automation and orchestration",
        description: "Advanced deployment management with multi-environment orchestration, rollback capabilities, and enterprise-grade deployment automation for reliable releases.",
        buttons: [
          { text: "Manage Deployments", href: productUrl, variant: "primary" as const },
          { text: "Deployment strategies", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Deployment Management Features",
          items: [
            "Multi-environment deployment",
            "Blue-green deployments",
            "Canary releases",
            "Rollback automation",
            "Deployment validation",
            "Performance monitoring",
            "Release coordination",
            "Environment promotion"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Deployment Management Center",
          description: "Enterprise deployment orchestration and release management"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Advanced CI/CD pipeline orchestration with enterprise features",
      description: "Comprehensive CI/CD orchestration with automated testing, deployment pipelines, release management, and enterprise-grade continuous delivery capabilities.",
      link: {
        text: "Learn about CI/CD orchestration",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Infrastructure automation with template-driven provisioning",
      description: "Advanced infrastructure-as-code automation with template-driven provisioning, environment management, and scalable deployment workflows for modern infrastructure."
    },
    {
      number: "03",
      title: "Reusable workflow templates and automation patterns", 
      description: "Comprehensive workflow management with pre-built templates, customizable automation patterns, and reusable components for accelerated DevOps implementation and adoption."
    },
    {
      number: "04",
      title: "Enterprise deployment automation with advanced orchestration",
      description: "Sophisticated deployment management with multi-environment orchestration, rollback capabilities, and enterprise-grade deployment automation for reliable software releases."
    }
  ];

  const customerReference = {
    title: "DevOps Transformation Success",
    company: "Engineering team reduces deployment time by 90% with automated CI/CD orchestration",
    description: "A rapidly growing tech company transformed their development operations using DevConductor, achieving dramatic deployment time reductions while improving reliability and scalability.",
    image: "/devops-conductor.svg",
    linkText: "Read the DevOps transformation story",
    linkHref: docsUrl
  };

  const customerLogos = [
    {
      name: "Ansible AWX",
      image: "https://logo.clearbit.com/ansible.com",
      href: docsUrl,
      alt: "Ansible AWX logo"
    },
    {
      name: "Jenkins",
      image: "https://logo.clearbit.com/jenkins.io",
      href: docsUrl,
      alt: "Jenkins logo"
    },
    {
      name: "GitLab CI/CD",
      image: "https://logo.clearbit.com/gitlab.com",
      href: docsUrl, 
      alt: "GitLab CI/CD logo"
    },
    {
      name: "GitHub Actions",
      image: "https://logo.clearbit.com/github.com",
      href: docsUrl,
      alt: "GitHub Actions logo"
    },
    {
      name: "CircleCI", 
      image: "https://logo.clearbit.com/circleci.com",
      href: docsUrl,
      alt: "CircleCI logo"
    },
    {
      name: "Azure DevOps",
      image: "https://logo.clearbit.com/azure.microsoft.com",
      href: docsUrl,
      alt: "Azure DevOps logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in DevConductor",
      content: {
        title: "Latest DevOps orchestration and automation features",
        description: "Stay updated with the newest capabilities in CI/CD orchestration, infrastructure automation, and deployment management for modern DevOps operations.",
        image: "/devops-conductor.svg",
        links: [
          { text: "New orchestration features", href: docsUrl },
          { text: "CI/CD improvements", href: docsUrl },
          { text: "Infrastructure automation updates", href: docsUrl },
          { text: "Deployment enhancements", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare DevOps solutions",
      content: {
        title: "Why choose DevConductor",
        description: "Compare our DevOps orchestration capabilities with other solutions and see why engineering teams choose us for comprehensive CI/CD and infrastructure automation.",
        image: "/devops-conductor.svg",
        links: [
          { text: "DevOps solution comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master DevConductor",
      content: {
        title: "Learn DevOps orchestration best practices",
        description: "Master DevOps automation with comprehensive guides, CI/CD strategies, and training materials for DevOps engineers and platform teams.",
        image: "/devops-conductor.svg",
        links: [
          { text: "DevOps orchestration deployment guide", href: docsUrl },
          { text: "CI/CD pipeline best practices", href: docsUrl },
          { text: "Infrastructure automation strategies", href: docsUrl },
          { text: "Troubleshooting guide", href: docsUrl }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Start automation",
      href: productUrl,
      icon: "demo"
    },
    {
      title: "Pipeline templates",
      href: docsUrl,
      icon: "tour"
    },
    {
      title: "Contact DevOps team",
      href: productUrl,
      icon: "contact"
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="sr-only">DevConductor | DevOps Orchestration & Pipelines Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="DevConductor"
          description="Automate CI/CD pipelines and infrastructure provisioning with templates and reusable workflows for enterprise DevOps orchestration. Advanced DevOps automation platform with comprehensive deployment management and infrastructure-as-code capabilities."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "DevOps Orchestration Console",
            description: "CI/CD pipeline and infrastructure automation management"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="DevConductor" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose DevConductor?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="DevOps transformation success stories"
          description="Learn why DevOps engineers and platform teams choose DevConductor for comprehensive CI/CD orchestration and infrastructure automation capabilities."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The DevOps Orchestration Guide"
          description="We've compiled CI/CD strategies, infrastructure automation techniques, and deployment orchestration best practices for modern DevOps operations and platform engineering."
          image="/devops-conductor.svg"
          buttonText="Get the DevOps guide"
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
