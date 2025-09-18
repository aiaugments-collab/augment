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

export default function WorkflowTemplatesPage() {
  const { productUrl, docsUrl } = getAppUrls("workflow-templates");
  
  const ctaButtons = [
    {
      text: "Browse Templates",
      href: productUrl,
      variant: "primary" as const
    },
    {
      text: "Deploy Infrastructure",
      href: docsUrl,
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "prebuilt-templates",
      image: "/template-hub.svg",
      title: "Curated Infrastructure Templates",
      description: "Comprehensive collection of prebuilt infrastructure templates covering monitoring, logging, backup, and security patterns with best practice configurations and documentation.",
      ctaText: "Browse infrastructure templates",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "monitoring-patterns",
      image: "/template-hub.svg",
      title: "Monitoring & Observability Templates",
      description: "Production-ready monitoring templates with observability stacks, alerting configurations, and dashboard setups for comprehensive infrastructure visibility and performance tracking.",
      ctaText: "Deploy monitoring templates",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "logging-patterns",
      image: "/template-hub.svg",
      title: "Logging & Analytics Patterns",
      description: "Advanced logging templates with centralized log aggregation, analytics pipelines, and retention policies for scalable log management and operational insights.",
      ctaText: "Implement logging patterns",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "security-templates",
      image: "/template-hub.svg",
      title: "Security & Compliance Templates",
      description: "Enterprise security templates with compliance frameworks, policy enforcement, and security monitoring configurations for regulatory compliance and threat protection.",
      ctaText: "Deploy security templates",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "infrastructure-templates",
      title: "Infrastructure Templates",
      content: {
        title: "Curated infrastructure templates with best practice configurations",
        description: "Comprehensive collection of prebuilt infrastructure templates covering monitoring, logging, backup, and security patterns with production-ready configurations.",
        buttons: [
          { text: "Browse Infrastructure Templates", href: productUrl, variant: "primary" as const },
          { text: "Template deployment guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Infrastructure Template Features",
          items: [
            "Best practice configurations",
            "Production-ready setups",
            "Documentation included",
            "Customization options",
            "Version control",
            "Automated deployment",
            "Testing frameworks",
            "Community contributions"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Template Hub Console",
          description: "Infrastructure template browsing and deployment management"
        }
      }
    },
    {
      id: "monitoring-templates",
      title: "Monitoring Templates",
      content: {
        title: "Production-ready monitoring and observability stack templates",
        description: "Comprehensive monitoring templates with observability stacks, alerting configurations, and dashboard setups for infrastructure visibility and performance tracking.",
        buttons: [
          { text: "Deploy Monitoring Templates", href: productUrl, variant: "primary" as const },
          { text: "Monitoring setup best practices", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Monitoring Template Features",
          items: [
            "Observability stacks",
            "Alerting configurations",
            "Dashboard setups",
            "Metrics collection",
            "Performance tracking",
            "Service discovery",
            "Health checks",
            "Scalable architecture"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Monitoring Templates Console",
          description: "Monitoring stack template catalog and deployment"
        }
      }
    },
    {
      id: "logging-templates",
      title: "Logging Templates",
      content: {
        title: "Advanced logging and analytics pipeline templates",
        description: "Sophisticated logging templates with centralized log aggregation, analytics pipelines, and retention policies for scalable log management and operational insights.",
        buttons: [
          { text: "Implement Logging Patterns", href: productUrl, variant: "primary" as const },
          { text: "Logging architecture guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Logging Template Features",
          items: [
            "Centralized aggregation",
            "Analytics pipelines",
            "Retention policies",
            "Search capabilities",
            "Real-time processing",
            "Data parsing",
            "Visualization tools",
            "Archive management"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Logging Templates Interface",
          description: "Log management and analytics template deployment"
        }
      }
    },
    {
      id: "security-templates",
      title: "Security Templates",
      content: {
        title: "Enterprise security and compliance framework templates",
        description: "Comprehensive security templates with compliance frameworks, policy enforcement, and security monitoring configurations for regulatory compliance and threat protection.",
        buttons: [
          { text: "Deploy Security Templates", href: productUrl, variant: "primary" as const },
          { text: "Security compliance guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Security Template Features",
          items: [
            "Compliance frameworks",
            "Policy enforcement",
            "Security monitoring",
            "Threat detection",
            "Access controls",
            "Audit logging",
            "Vulnerability scanning",
            "Incident response"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Security Templates Center",
          description: "Security and compliance template deployment management"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Curated infrastructure templates with best practice configurations",
      description: "Comprehensive collection of prebuilt infrastructure templates covering monitoring, logging, backup, and security patterns with production-ready configurations and comprehensive documentation.",
      link: {
        text: "Learn about infrastructure templates",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Production-ready monitoring and observability stack templates",
      description: "Advanced monitoring templates with observability stacks, alerting configurations, and dashboard setups for comprehensive infrastructure visibility and performance tracking."
    },
    {
      number: "03",
      title: "Advanced logging and analytics pipeline templates", 
      description: "Sophisticated logging templates with centralized log aggregation, analytics pipelines, and retention policies for scalable log management and operational insights across infrastructure."
    },
    {
      number: "04",
      title: "Enterprise security and compliance framework templates",
      description: "Comprehensive security templates with compliance frameworks, policy enforcement, and security monitoring configurations for regulatory compliance and comprehensive threat protection."
    }
  ];

  const customerReference = {
    title: "Infrastructure Acceleration Success",
    company: "DevOps team reduces deployment time by 85% using curated templates while maintaining security and compliance standards",
    description: "A rapidly scaling startup transformed their infrastructure deployment using TemplateHub, achieving dramatic time savings while maintaining enterprise-grade security and operational excellence.",
    image: "/template-hub.svg",
    linkText: "Read the infrastructure acceleration story",
    linkHref: docsUrl
  };

  const customerLogos = [
    {
      name: "Ansible",
      image: "https://logo.clearbit.com/ansible.com",
      href: docsUrl,
      alt: "Ansible logo"
    },
    {
      name: "Terraform",
      image: "https://logo.clearbit.com/terraform.io",
      href: docsUrl,
      alt: "Terraform logo"
    },
    {
      name: "Helm",
      image: "https://logo.clearbit.com/helm.sh",
      href: docsUrl, 
      alt: "Helm logo"
    },
    {
      name: "Kustomize",
      image: "https://logo.clearbit.com/kustomize.io",
      href: docsUrl,
      alt: "Kustomize logo"
    },
    {
      name: "Pulumi", 
      image: "https://logo.clearbit.com/pulumi.com",
      href: docsUrl,
      alt: "Pulumi logo"
    },
    {
      name: "CloudFormation",
      image: "https://logo.clearbit.com/aws.amazon.com",
      href: docsUrl,
      alt: "CloudFormation logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in TemplateHub",
      content: {
        title: "Latest infrastructure template and deployment features",
        description: "Stay updated with the newest template collections, deployment patterns, and infrastructure automation for modern DevOps and infrastructure management.",
        image: "/template-hub.svg",
        links: [
          { text: "New template collections", href: docsUrl },
          { text: "Monitoring template updates", href: docsUrl },
          { text: "Security template enhancements", href: docsUrl },
          { text: "Deployment automation features", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare template solutions",
      content: {
        title: "Why choose TemplateHub",
        description: "Compare our infrastructure template capabilities with other solutions and see why DevOps teams choose us for comprehensive deployment automation and best practice configurations.",
        image: "/template-hub.svg",
        links: [
          { text: "Template platform comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master TemplateHub",
      content: {
        title: "Learn infrastructure templates and deployment best practices",
        description: "Master infrastructure automation with comprehensive guides, template development strategies, and training materials for DevOps engineers and platform professionals.",
        image: "/template-hub.svg",
        links: [
          { text: "Template deployment guide", href: docsUrl },
          { text: "Infrastructure automation best practices", href: docsUrl },
          { text: "Template development strategies", href: docsUrl },
          { text: "Troubleshooting guide", href: docsUrl }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Browse templates",
      href: productUrl,
      icon: "demo"
    },
    {
      title: "Deploy infrastructure",
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
        <h1 className="sr-only">TemplateHub | Prebuilt Templates for Deployments & Infra Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="TemplateHub"
          description="Curated templates for common infra patterns: monitoring, logging, backup, and security with best practice configurations. Comprehensive infrastructure template platform with production-ready deployments and automated setup for modern DevOps workflows."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Template Hub Console",
            description: "Infrastructure template catalog and deployment management"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="TemplateHub" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose TemplateHub?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Infrastructure automation success stories"
          description="Learn why DevOps teams and platform engineers choose TemplateHub for comprehensive infrastructure templates and automated deployment capabilities."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Infrastructure Templates Guide"
          description="We've compiled infrastructure automation strategies, template development techniques, and deployment best practices for modern DevOps workflows and platform engineering."
          image="/template-hub.svg"
          buttonText="Get the infrastructure templates guide"
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
