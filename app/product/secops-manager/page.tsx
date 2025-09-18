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

export default function SecOpsManagerPage() {
  const { productUrl, docsUrl } = getAppUrls("secops-manager");
  
  const ctaButtons = [
    {
      text: "Manage Security Operations",
      href: productUrl,
      variant: "primary" as const
    },
    {
      text: "View Playbooks",
      href: docsUrl,
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "security-operations",
      image: "/secops.svg",
      title: "Advanced Security Operations Platform",
      description: "Comprehensive security operations platform with automated incident response, threat intelligence integration, and collaborative investigation workflows for efficient security management.",
      ctaText: "Manage security operations",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "incident-response",
      image: "/secops.svg",
      title: "Automated Incident Response",
      description: "Sophisticated incident response automation with runbook execution, alert triage, and escalation workflows for rapid security incident management and resolution.",
      ctaText: "Automate incident response",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "security-playbooks",
      image: "/secops.svg",
      title: "Runbook-Driven Security Playbooks",
      description: "Comprehensive security playbooks with automated workflows, decision trees, and investigation procedures for consistent and effective security operations.",
      ctaText: "Deploy security playbooks",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "incident-timelines",
      image: "/secops.svg",
      title: "Interactive Incident Timelines",
      description: "Detailed incident timeline visualization with event correlation, forensic analysis, and collaborative annotation for thorough security incident investigation and documentation.",
      ctaText: "Analyze incident timelines",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "security-operations",
      title: "Security Operations",
      content: {
        title: "Comprehensive security operations and incident management platform",
        description: "Advanced security operations platform with automated incident response, threat intelligence integration, and collaborative investigation workflows for efficient security management.",
        buttons: [
          { text: "Manage Security Operations", href: productUrl, variant: "primary" as const },
          { text: "Security operations guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Security Operations Features",
          items: [
            "Incident management",
            "Threat intelligence",
            "Collaborative investigation",
            "Security orchestration",
            "Vulnerability management",
            "Risk assessment",
            "Compliance monitoring",
            "Security metrics"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Security Operations Console",
          description: "Comprehensive security incident and operations management"
        }
      }
    },
    {
      id: "incident-response",
      title: "Incident Response",
      content: {
        title: "Automated incident response with intelligent alert triage",
        description: "Sophisticated incident response automation with runbook execution, alert triage, and escalation workflows for rapid security incident management and resolution.",
        buttons: [
          { text: "Automate Incident Response", href: productUrl, variant: "primary" as const },
          { text: "Incident response best practices", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Incident Response Features",
          items: [
            "Alert triage",
            "Runbook execution",
            "Escalation workflows",
            "Response automation",
            "Team coordination",
            "Communication tools",
            "Status tracking",
            "Post-incident review"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Incident Response Console",
          description: "Security incident response and automation management"
        }
      }
    },
    {
      id: "security-playbooks",
      title: "Security Playbooks",
      content: {
        title: "Runbook-driven security playbooks with automated workflows",
        description: "Comprehensive security playbooks with automated workflows, decision trees, and investigation procedures for consistent and effective security operations.",
        buttons: [
          { text: "Deploy Security Playbooks", href: productUrl, variant: "primary" as const },
          { text: "Playbook development guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Security Playbooks Features",
          items: [
            "Automated workflows",
            "Decision trees",
            "Investigation procedures",
            "Response templates",
            "Playbook library",
            "Custom playbooks",
            "Version control",
            "Testing framework"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Security Playbooks Interface",
          description: "Runbook-driven security workflow and playbook management"
        }
      }
    },
    {
      id: "incident-timelines",
      title: "Incident Timelines",
      content: {
        title: "Interactive incident timelines with forensic analysis",
        description: "Detailed incident timeline visualization with event correlation, forensic analysis, and collaborative annotation for thorough security incident investigation.",
        buttons: [
          { text: "Analyze Incident Timelines", href: productUrl, variant: "primary" as const },
          { text: "Forensic analysis guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Incident Timeline Features",
          items: [
            "Event correlation",
            "Forensic analysis",
            "Timeline visualization",
            "Collaborative annotation",
            "Evidence management",
            "Chain of custody",
            "Report generation",
            "Export capabilities"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Incident Timeline Center",
          description: "Security incident timeline and forensic analysis interface"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Comprehensive security operations with automated incident response",
      description: "Advanced security operations platform with automated incident response, threat intelligence integration, and collaborative investigation workflows for efficient security management.",
      link: {
        text: "Learn about security operations",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Automated incident response with intelligent alert triage",
      description: "Sophisticated incident response automation with runbook execution, alert triage, and escalation workflows for rapid security incident management and resolution."
    },
    {
      number: "03",
      title: "Runbook-driven security playbooks with automated workflows", 
      description: "Comprehensive security playbooks with automated workflows, decision trees, and investigation procedures for consistent and effective security operations and incident handling."
    },
    {
      number: "04",
      title: "Interactive incident timelines with forensic analysis capabilities",
      description: "Detailed incident timeline visualization with event correlation, forensic analysis, and collaborative annotation for thorough security incident investigation and documentation."
    }
  ];

  const customerReference = {
    title: "Security Operations Transformation",
    company: "SOC team reduces incident response time by 80% with automated playbooks and intelligent triage",
    description: "A leading financial services company transformed their security operations using SecOps, achieving dramatic improvements in incident response while reducing analyst workload and improving threat detection.",
    image: "/secops.svg",
    linkText: "Read the security operations story",
    linkHref: docsUrl
  };

  const customerLogos = [
    {
      name: "TheHive",
      image: "https://logo.clearbit.com/thehive-project.org",
      href: docsUrl,
      alt: "TheHive logo"
    },
    {
      name: "Phantom",
      image: "https://logo.clearbit.com/phantom.us",
      href: docsUrl,
      alt: "Phantom logo"
    },
    {
      name: "Demisto",
      image: "https://logo.clearbit.com/demisto.com",
      href: docsUrl, 
      alt: "Demisto logo"
    },
    {
      name: "Swimlane",
      image: "https://logo.clearbit.com/swimlane.com",
      href: docsUrl,
      alt: "Swimlane logo"
    },
    {
      name: "Siemplify", 
      image: "https://logo.clearbit.com/siemplify.co",
      href: docsUrl,
      alt: "Siemplify logo"
    },
    {
      name: "Resilient",
      image: "https://logo.clearbit.com/resilientsystems.com",
      href: docsUrl,
      alt: "Resilient logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in SecOps",
      content: {
        title: "Latest security operations and incident response features",
        description: "Stay updated with the newest capabilities in security operations, incident response automation, and forensic analysis for modern cybersecurity operations.",
        image: "/secops.svg",
        links: [
          { text: "New security features", href: docsUrl },
          { text: "Incident response improvements", href: docsUrl },
          { text: "Playbook enhancements", href: docsUrl },
          { text: "Timeline analysis updates", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare security operations solutions",
      content: {
        title: "Why choose SecOps",
        description: "Compare our security operations capabilities with other solutions and see why security teams choose us for comprehensive incident response and security orchestration.",
        image: "/secops.svg",
        links: [
          { text: "Security operations comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master SecOps",
      content: {
        title: "Learn security operations and incident response best practices",
        description: "Master security operations with comprehensive guides, incident response strategies, and training materials for security analysts and SOC professionals.",
        image: "/secops.svg",
        links: [
          { text: "Security operations deployment guide", href: docsUrl },
          { text: "Incident response best practices", href: docsUrl },
          { text: "Playbook development strategies", href: docsUrl },
          { text: "Troubleshooting guide", href: docsUrl }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Manage security operations",
      href: productUrl,
      icon: "demo"
    },
    {
      title: "View playbooks",
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
        <h1 className="sr-only">SecOps | Security Operations & Incident Response Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="SecOps"
          description="Runbook-driven SecOps platform with alert triage, playbooks, and incident timelines for comprehensive security operations. Advanced security operations platform with automated incident response and collaborative investigation workflows."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Security Operations Console",
            description: "Comprehensive security incident and operations management"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="SecOps" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose SecOps?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Security operations success stories"
          description="Learn why security teams and SOC professionals choose SecOps for comprehensive security operations and advanced incident response capabilities."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Security Operations Guide"
          description="We've compiled security operations strategies, incident response techniques, and playbook development best practices for modern cybersecurity operations and SOC management."
          image="/secops.svg"
          buttonText="Get the security operations guide"
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
