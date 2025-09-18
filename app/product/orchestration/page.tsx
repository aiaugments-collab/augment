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

export default function OrchestrationPage() {
  const { productUrl, docsUrl } = getAppUrls("orchestration");
  
  const ctaButtons = [
    {
      text: "Start Automation",
      href: productUrl,
      variant: "primary" as const
    },
    {
      text: "View Runbooks",
      href: docsUrl,
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "infrastructure-automation",
      image: "/orchestrate.svg",
      title: "Infrastructure Automation Platform",
      description: "Comprehensive infrastructure automation with job orchestration, provisioning workflows, and scheduled automation for scalable infrastructure management.",
      ctaText: "Automate infrastructure",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "cicd-pipelines",
      image: "/orchestrate.svg",
      title: "Advanced CI/CD Pipeline Management",
      description: "Sophisticated CI/CD orchestration with pipeline automation, deployment workflows, and integrated testing for continuous delivery and deployment.",
      ctaText: "Build CI/CD pipelines",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "runbook-automation",
      image: "/orchestrate.svg",
      title: "Intelligent Runbook Automation",
      description: "Automated runbook execution with incident response workflows, operational procedures, and intelligent automation for proactive infrastructure management.",
      ctaText: "Create runbooks",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "workflow-orchestration",
      image: "/orchestrate.svg",
      title: "Enterprise Workflow Orchestration",
      description: "Complex workflow orchestration with dependency management, conditional execution, and enterprise-scale automation for sophisticated operational workflows.",
      ctaText: "Design workflows",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "job-orchestration",
      title: "Job Orchestration",
      content: {
        title: "Advanced job orchestration and workflow automation",
        description: "Comprehensive job orchestration platform with dependency management, conditional execution, and enterprise-scale automation for complex operational workflows.",
        buttons: [
          { text: "Create Jobs", href: productUrl, variant: "primary" as const },
          { text: "Job templates", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Job Orchestration Features",
          items: [
            "Workflow automation",
            "Dependency management",
            "Conditional execution",
            "Parallel processing",
            "Job scheduling",
            "Resource allocation",
            "Error handling",
            "Performance monitoring"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Job Orchestration Console",
          description: "Enterprise workflow automation and job management interface"
        }
      }
    },
    {
      id: "infrastructure-provisioning",
      title: "Infrastructure Provisioning",
      content: {
        title: "Automated infrastructure provisioning and management",
        description: "Complete infrastructure provisioning automation with declarative configuration, resource management, and scalable deployment workflows for modern infrastructure.",
        buttons: [
          { text: "Provision Infrastructure", href: productUrl, variant: "primary" as const },
          { text: "Provisioning guides", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Infrastructure Provisioning Features",
          items: [
            "Declarative configuration",
            "Resource provisioning",
            "Infrastructure scaling",
            "Environment management",
            "Configuration drift detection",
            "Rollback capabilities",
            "Multi-cloud support",
            "Cost optimization"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Infrastructure Management Console",
          description: "Automated infrastructure provisioning and lifecycle management"
        }
      }
    },
    {
      id: "deployment-automation",
      title: "Deployment Automation",
      content: {
        title: "Comprehensive deployment automation and release management",
        description: "Advanced deployment automation with release orchestration, environment promotion, and deployment strategies for reliable and scalable application delivery.",
        buttons: [
          { text: "Setup Deployments", href: productUrl, variant: "primary" as const },
          { text: "Deployment strategies", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Deployment Automation Features",
          items: [
            "Release orchestration",
            "Environment promotion",
            "Blue-green deployments",
            "Canary releases",
            "Rollback automation",
            "Deployment validation",
            "Integration testing",
            "Performance monitoring"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Deployment Pipeline Interface",
          description: "Advanced deployment automation and release management console"
        }
      }
    },
    {
      id: "scheduled-workflows",
      title: "Scheduled Workflows",
      content: {
        title: "Intelligent scheduling and workflow management",
        description: "Sophisticated workflow scheduling with cron-based automation, event-driven triggers, and intelligent scheduling for operational efficiency and reliability.",
        buttons: [
          { text: "Schedule Workflows", href: productUrl, variant: "primary" as const },
          { text: "Scheduling best practices", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Scheduled Workflows Features",
          items: [
            "Cron-based scheduling",
            "Event-driven triggers",
            "Workflow calendars",
            "Resource-aware scheduling",
            "Priority management",
            "Conflict resolution",
            "Notification systems",
            "Audit logging"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Workflow Scheduling Center",
          description: "Intelligent workflow scheduling and automation management"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Comprehensive infrastructure automation and orchestration",
      description: "Advanced job orchestration with workflow automation, dependency management, and enterprise-scale automation for complex operational workflows and infrastructure management.",
      link: {
        text: "Learn about automation capabilities",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Advanced CI/CD pipeline management and deployment",
      description: "Sophisticated CI/CD orchestration with pipeline automation, deployment workflows, integrated testing, and release management for continuous delivery and deployment."
    },
    {
      number: "03",
      title: "Intelligent runbook automation and incident response", 
      description: "Automated runbook execution with incident response workflows, operational procedures, and intelligent automation for proactive infrastructure management and reliability."
    },
    {
      number: "04",
      title: "Enterprise workflow orchestration with smart scheduling",
      description: "Complex workflow orchestration with intelligent scheduling, event-driven triggers, and enterprise-scale automation for sophisticated operational workflows and reliability."
    }
  ];

  const customerReference = {
    title: "Automation Transformation Success",
    company: "DevOps team reduces deployment time by 85% with automated orchestration",
    description: "A leading technology company transformed their deployment processes using Orchestrate, achieving dramatic reductions in deployment time while improving reliability and reducing manual operational overhead.",
    image: "/orchestrate.svg",
    linkText: "Read the automation transformation story",
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
      name: "GitLab CI",
      image: "https://logo.clearbit.com/gitlab.com",
      href: docsUrl, 
      alt: "GitLab CI logo"
    },
    {
      name: "GitHub Actions",
      image: "https://logo.clearbit.com/github.com",
      href: docsUrl,
      alt: "GitHub Actions logo"
    },
    {
      name: "Terraform", 
      image: "https://logo.clearbit.com/terraform.io",
      href: docsUrl,
      alt: "Terraform logo"
    },
    {
      name: "Rundeck",
      image: "https://logo.clearbit.com/rundeck.com",
      href: docsUrl,
      alt: "Rundeck logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in Orchestrate",
      content: {
        title: "Latest automation and orchestration features",
        description: "Stay updated with the newest capabilities in job orchestration, CI/CD automation, and workflow management for modern DevOps and infrastructure automation.",
        image: "/orchestrate.svg",
        links: [
          { text: "New orchestration features", href: docsUrl },
          { text: "CI/CD improvements", href: docsUrl },
          { text: "Workflow enhancements", href: docsUrl },
          { text: "Automation updates", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare automation solutions",
      content: {
        title: "Why choose Orchestrate",
        description: "Compare our automation and orchestration capabilities with other solutions and see why DevOps teams choose us for comprehensive workflow automation and CI/CD management.",
        image: "/orchestrate.svg",
        links: [
          { text: "Automation solution comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master Orchestrate",
      content: {
        title: "Learn automation and orchestration best practices",
        description: "Master workflow automation with comprehensive guides, best practices, and training materials for DevOps engineers and automation specialists.",
        image: "/orchestrate.svg",
        links: [
          { text: "Automation deployment guide", href: docsUrl },
          { text: "Workflow orchestration best practices", href: docsUrl },
          { text: "CI/CD optimization strategies", href: docsUrl },
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
      title: "View runbooks",
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
        <h1 className="sr-only">Orchestrate | Automation, CI/CD & Runbooks Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="Orchestrate"
          description="Job orchestration for infrastructure automation, provisioning, and scheduled workflows with advanced CI/CD capabilities. Enterprise automation platform with intelligent workflow orchestration, deployment management, and runbook automation for scalable operations."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Automation Orchestration Console",
            description: "Enterprise workflow automation and CI/CD management"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="Orchestrate" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose Orchestrate?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Automation transformation success stories"
          description="Learn why DevOps engineers and automation specialists choose Orchestrate for comprehensive workflow orchestration and enterprise automation capabilities."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The DevOps Automation Guide"
          description="We've compiled automation strategies, orchestration techniques, and CI/CD best practices for modern DevOps workflows and enterprise infrastructure automation."
          image="/orchestrate.svg"
          buttonText="Get the automation guide"
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
