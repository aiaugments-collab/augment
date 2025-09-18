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

export default function SecureNetManagerPage() {
  const { productUrl, docsUrl } = getAppUrls("secure-net-manager");
  
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
      id: "centralized-security",
      image: "/secure-net-manager.svg",
      title: "Centralized Security Management",
      description: "Unify security policies across your entire infrastructure with centralized management, automated deployments, and real-time compliance monitoring.",
      ctaText: "Explore security management",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "policy-automation",
      image: "/secure-net-manager.svg",
      title: "Automated Policy Deployment",
      description: "Deploy and manage security policies at scale with intelligent automation that ensures consistent protection across cloud environments.",
      ctaText: "Learn about automation",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "compliance-monitoring",
      image: "/secure-net-manager.svg",
      title: "Real-time Compliance Monitoring",
      description: "Monitor compliance status in real-time with automated reporting, audit trails, and proactive alerting for policy violations.",
      ctaText: "View compliance features",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "multi-cloud-security",
      image: "/secure-net-manager.svg",
      title: "Multi-Cloud Security Orchestration",
      description: "Orchestrate security across multiple cloud providers with unified policies, centralized visibility, and consistent enforcement.",
      ctaText: "See multi-cloud capabilities",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "security-policies",
      title: "Security Policies",
      content: {
        title: "Centralized policy management and enforcement",
        description: "Create, deploy, and manage security policies across your entire infrastructure with intelligent automation and real-time monitoring for consistent protection.",
        buttons: [
          { text: "Try Policy Manager", href: productUrl, variant: "primary" as const },
          { text: "Policy templates", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Policy Management Features",
          items: [
            "Centralized policy creation",
            "Automated deployment workflows",
            "Real-time compliance monitoring",
            "Policy version control",
            "Multi-cloud orchestration",
            "Audit trail logging",
            "Violation alerting",
            "Template library"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Security Policy Dashboard",
          description: "Centralized security policy management and compliance monitoring"
        }
      }
    },
    {
      id: "compliance-monitoring",
      title: "Compliance Monitoring",
      content: {
        title: "Real-time compliance tracking and reporting",
        description: "Monitor compliance status across all environments with automated reporting, detailed audit trails, and proactive alerting for immediate issue resolution.",
        buttons: [
          { text: "View Compliance Dashboard", href: productUrl, variant: "primary" as const },
          { text: "Compliance guides", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Compliance Monitoring Features",
          items: [
            "Real-time compliance tracking",
            "Automated audit reports",
            "Violation detection",
            "Remediation workflows",
            "Compliance scoring",
            "Historical trending",
            "Custom reporting",
            "Integration APIs"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Compliance Monitoring Dashboard",
          description: "Real-time compliance status and audit reporting interface"
        }
      }
    },
    {
      id: "automation-engine",
      title: "Automation Engine",
      content: {
        title: "Intelligent security automation workflows",
        description: "Automate security operations with intelligent workflows that respond to threats, deploy policies, and maintain compliance without manual intervention.",
        buttons: [
          { text: "Configure Automation", href: productUrl, variant: "primary" as const },
          { text: "Automation playbooks", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Automation Engine Features",
          items: [
            "Workflow orchestration",
            "Event-driven automation",
            "Custom playbooks",
            "Integration connectors",
            "Scheduled operations",
            "Error handling",
            "Performance monitoring",
            "Scalable execution"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Automation Workflow Builder",
          description: "Visual workflow builder for security automation and orchestration"
        }
      }
    },
    {
      id: "multi-cloud",
      title: "Multi-Cloud Security",
      content: {
        title: "Unified security across cloud environments",
        description: "Manage security consistently across multiple cloud providers with unified policies, centralized visibility, and coordinated incident response.",
        buttons: [
          { text: "Explore Multi-Cloud", href: productUrl, variant: "primary" as const },
          { text: "Integration docs", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Multi-Cloud Security Features",
          items: [
            "Cross-cloud visibility",
            "Unified policy enforcement",
            "Cloud-native integrations",
            "Centralized logging",
            "Coordinated response",
            "Cost optimization",
            "Performance analytics",
            "Vendor-agnostic approach"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Multi-Cloud Security Console",
          description: "Unified security management across multiple cloud environments"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Centralized security policy management at scale",
      description: "Manage security policies across your entire infrastructure from a single console with automated deployment, version control, and real-time compliance monitoring.",
      link: {
        text: "Learn about policy management",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Intelligent automation reduces manual overhead",
      description: "Automate security operations with intelligent workflows that respond to threats, deploy policies, and maintain compliance without manual intervention."
    },
    {
      number: "03",
      title: "Real-time compliance monitoring and reporting", 
      description: "Monitor compliance status in real-time with automated reporting, detailed audit trails, and proactive alerting for immediate issue resolution."
    },
    {
      number: "04",
      title: "Multi-cloud security orchestration and visibility",
      description: "Orchestrate security across multiple cloud providers with unified policies, centralized visibility, and consistent enforcement mechanisms."
    }
  ];

  const customerReference = {
    title: "Enterprise Security Transformation",
    company: "Fortune 500 company reduces security incidents by 75%",
    description: "A leading enterprise transformed their security operations using SecureNet Manager, achieving significant reduction in security incidents while improving compliance posture across multi-cloud environments.",
    image: "/secure-net-manager.svg",
    linkText: "Read the security transformation story",
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
      name: "Red Hat",
      image: "https://logo.clearbit.com/redhat.com",
      href: docsUrl,
      alt: "Red Hat logo"
    },
    {
      name: "HashiCorp",
      image: "https://logo.clearbit.com/hashicorp.com",
      href: docsUrl, 
      alt: "HashiCorp logo"
    },
    {
      name: "Terraform",
      image: "https://logo.clearbit.com/terraform.io",
      href: docsUrl,
      alt: "Terraform logo"
    },
    {
      name: "Kubernetes", 
      image: "https://logo.clearbit.com/kubernetes.io",
      href: docsUrl,
      alt: "Kubernetes logo"
    },
    {
      name: "Docker",
      image: "https://logo.clearbit.com/docker.com",
      href: docsUrl,
      alt: "Docker logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in SecureNet Manager",
      content: {
        title: "Latest security automation features",
        description: "Stay updated with the newest capabilities in centralized security management, policy automation, and compliance monitoring for enterprise environments.",
        image: "/secure-net-manager.svg",
        links: [
          { text: "New automation features", href: docsUrl },
          { text: "Policy management updates", href: docsUrl },
          { text: "Compliance enhancements", href: docsUrl },
          { text: "Multi-cloud improvements", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare security solutions",
      content: {
        title: "Why choose SecureNet Manager",
        description: "Compare our centralized security management capabilities with other solutions and see why enterprises choose us for policy automation and compliance monitoring.",
        image: "/secure-net-manager.svg",
        links: [
          { text: "Security solution comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Deployment guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master SecureNet Manager",
      content: {
        title: "Learn security automation best practices",
        description: "Master centralized security management with comprehensive guides, best practices, and training materials for security teams and DevSecOps professionals.",
        image: "/secure-net-manager.svg",
        links: [
          { text: "Security automation guide", href: docsUrl },
          { text: "Policy management best practices", href: docsUrl },
          { text: "Compliance monitoring patterns", href: docsUrl },
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
      title: "Contact security team",
      href: productUrl,
      icon: "contact"
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="sr-only">SecureNet Manager | Centralized Security Automation & Policy Manager</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="SecureNet Manager"
          description="Centralized security automation and policy management platform that unifies security operations across cloud environments. Automate deployments, monitor compliance, and orchestrate security policies at scale with intelligent workflows and real-time visibility."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Security Management Console",
            description: "Centralized security policy management and compliance monitoring"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="SecureNet Manager" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose SecureNet Manager?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Enterprise security success stories"
          description="Learn why security teams and DevSecOps professionals choose SecureNet Manager for centralized security automation and policy management."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Enterprise Security Guide"
          description="We've compiled security automation strategies, policy management techniques, and compliance best practices for modern enterprise security operations."
          image="/secure-net-manager.svg"
          buttonText="Get the security guide"
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
