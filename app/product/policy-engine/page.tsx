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

export default function PolicyEnginePage() {
  const { productUrl, docsUrl } = getAppUrls("policy-engine");
  
  const ctaButtons = [
    {
      text: "Deploy Policy Engine",
      href: productUrl,
      variant: "primary" as const
    },
    {
      text: "Write Policies",
      href: docsUrl,
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "policy-as-code",
      image: "/policy-engine.svg",
      title: "Policy-as-Code Platform",
      description: "Comprehensive policy-as-code platform with declarative policy languages, version control integration, and automated policy deployment for scalable governance across infrastructure.",
      ctaText: "Implement policy-as-code",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "policy-testing",
      image: "/policy-engine.svg",
      title: "Advanced Policy Testing Framework",
      description: "Sophisticated policy testing framework with unit tests, integration testing, and simulation environments for reliable policy validation and deployment confidence.",
      ctaText: "Test policies comprehensively",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "enforcement-engine",
      image: "/policy-engine.svg",
      title: "Real-Time Policy Enforcement",
      description: "Powerful enforcement engine with real-time policy evaluation, automated remediation, and compliance monitoring for proactive governance and security control.",
      ctaText: "Enforce policies automatically",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "ci-integration",
      image: "/policy-engine.svg",
      title: "CI/CD Pipeline Integration",
      description: "Seamless CI/CD integration with policy validation gates, automated compliance checks, and deployment pipeline enforcement for shift-left governance practices.",
      ctaText: "Integrate with CI/CD",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "policy-development",
      title: "Policy Development",
      content: {
        title: "Policy-as-code development and version control platform",
        description: "Comprehensive policy-as-code platform with declarative policy languages, version control integration, and collaborative development workflows for scalable governance.",
        buttons: [
          { text: "Develop Policies as Code", href: productUrl, variant: "primary" as const },
          { text: "Policy development guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Policy Development Features",
          items: [
            "Declarative languages",
            "Version control",
            "Collaborative development",
            "Policy libraries",
            "Template system",
            "Code review",
            "Documentation",
            "IDE integration"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Policy Development Console",
          description: "Policy-as-code development and version control management"
        }
      }
    },
    {
      id: "policy-testing",
      title: "Policy Testing",
      content: {
        title: "Comprehensive policy testing and validation framework",
        description: "Advanced policy testing framework with unit tests, integration testing, and simulation environments for reliable policy validation and deployment confidence.",
        buttons: [
          { text: "Test Policies Comprehensively", href: productUrl, variant: "primary" as const },
          { text: "Policy testing best practices", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Policy Testing Features",
          items: [
            "Unit testing",
            "Integration testing",
            "Simulation environments",
            "Test automation",
            "Coverage analysis",
            "Performance testing",
            "Regression testing",
            "Test reporting"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Policy Testing Console",
          description: "Policy validation and testing framework management"
        }
      }
    },
    {
      id: "enforcement-engine",
      title: "Enforcement Engine",
      content: {
        title: "Real-time policy enforcement and compliance monitoring",
        description: "Powerful enforcement engine with real-time policy evaluation, automated remediation, and compliance monitoring for proactive governance and security control.",
        buttons: [
          { text: "Enforce Policies Automatically", href: productUrl, variant: "primary" as const },
          { text: "Enforcement strategies guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Enforcement Engine Features",
          items: [
            "Real-time evaluation",
            "Automated remediation",
            "Compliance monitoring",
            "Violation detection",
            "Alert system",
            "Audit trails",
            "Performance metrics",
            "Scalable architecture"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Policy Enforcement Interface",
          description: "Real-time policy enforcement and compliance management"
        }
      }
    },
    {
      id: "ci-integration",
      title: "CI/CD Integration",
      content: {
        title: "Seamless CI/CD pipeline integration with policy validation",
        description: "Advanced CI/CD integration with policy validation gates, automated compliance checks, and deployment pipeline enforcement for shift-left governance practices.",
        buttons: [
          { text: "Integrate with CI/CD", href: productUrl, variant: "primary" as const },
          { text: "CI/CD integration guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "CI/CD Integration Features",
          items: [
            "Policy validation gates",
            "Automated compliance",
            "Pipeline enforcement",
            "Shift-left governance",
            "Build integration",
            "Deployment controls",
            "Continuous monitoring",
            "DevOps workflows"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "CI/CD Integration Center",
          description: "Policy validation and CI/CD pipeline integration management"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Policy-as-code development with collaborative workflows",
      description: "Comprehensive policy-as-code platform with declarative policy languages, version control integration, and collaborative development workflows for scalable governance across infrastructure.",
      link: {
        text: "Learn about policy-as-code",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Advanced policy testing with simulation environments",
      description: "Sophisticated policy testing framework with unit tests, integration testing, and simulation environments for reliable policy validation and deployment confidence."
    },
    {
      number: "03",
      title: "Real-time policy enforcement with automated remediation", 
      description: "Powerful enforcement engine with real-time policy evaluation, automated remediation, and compliance monitoring for proactive governance and security control across cloud resources."
    },
    {
      number: "04",
      title: "Seamless CI/CD integration with shift-left governance",
      description: "Advanced CI/CD integration with policy validation gates, automated compliance checks, and deployment pipeline enforcement for shift-left governance practices and DevOps workflows."
    }
  ];

  const customerReference = {
    title: "Governance Transformation Success",
    company: "DevOps team achieves 95% policy compliance with automated enforcement and reduces manual reviews by 85%",
    description: "A cloud-native organization transformed their governance practices using PolicyEngine, achieving exceptional compliance rates while dramatically reducing manual overhead and improving developer productivity.",
    image: "/policy-engine.svg",
    linkText: "Read the governance transformation story",
    linkHref: docsUrl
  };

  const customerLogos = [
    {
      name: "Open Policy Agent",
      image: "https://logo.clearbit.com/openpolicyagent.org",
      href: docsUrl,
      alt: "Open Policy Agent logo"
    },
    {
      name: "Styra",
      image: "https://logo.clearbit.com/styra.com",
      href: docsUrl,
      alt: "Styra logo"
    },
    {
      name: "Gatekeeper",
      image: "https://logo.clearbit.com/open-policy-agent.github.io",
      href: docsUrl, 
      alt: "Gatekeeper logo"
    },
    {
      name: "Falco",
      image: "https://logo.clearbit.com/falco.org",
      href: docsUrl,
      alt: "Falco logo"
    },
    {
      name: "Conftest", 
      image: "https://logo.clearbit.com/conftest.dev",
      href: docsUrl,
      alt: "Conftest logo"
    },
    {
      name: "Rego",
      image: "https://logo.clearbit.com/rego.dev",
      href: docsUrl,
      alt: "Rego logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in PolicyEngine",
      content: {
        title: "Latest policy-as-code and governance features",
        description: "Stay updated with the newest capabilities in policy development, testing frameworks, and enforcement automation for modern governance and compliance management.",
        image: "/policy-engine.svg",
        links: [
          { text: "New policy features", href: docsUrl },
          { text: "Testing improvements", href: docsUrl },
          { text: "Enforcement enhancements", href: docsUrl },
          { text: "CI/CD integration updates", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare policy solutions",
      content: {
        title: "Why choose PolicyEngine",
        description: "Compare our policy-as-code capabilities with other solutions and see why DevOps teams choose us for comprehensive governance and automated policy enforcement.",
        image: "/policy-engine.svg",
        links: [
          { text: "Policy platform comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master PolicyEngine",
      content: {
        title: "Learn policy-as-code and governance best practices",
        description: "Master policy-as-code with comprehensive guides, governance strategies, and training materials for DevOps engineers and compliance professionals.",
        image: "/policy-engine.svg",
        links: [
          { text: "Policy-as-code deployment guide", href: docsUrl },
          { text: "Governance best practices", href: docsUrl },
          { text: "Enforcement optimization strategies", href: docsUrl },
          { text: "Troubleshooting guide", href: docsUrl }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Deploy policy engine",
      href: productUrl,
      icon: "demo"
    },
    {
      title: "Write policies",
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
        <h1 className="sr-only">PolicyEngine | Policy-as-Code & Enforcement Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="PolicyEngine"
          description="Write, test, and enforce policies across cloud resources with CI integration and reporting for comprehensive governance. Policy-as-code platform with advanced testing framework and real-time enforcement capabilities for modern infrastructure."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Policy Engine Console",
            description: "Policy-as-code development and enforcement management"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="PolicyEngine" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose PolicyEngine?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Governance success stories"
          description="Learn why DevOps teams and compliance professionals choose PolicyEngine for comprehensive policy-as-code and automated governance capabilities."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Policy-as-Code Guide"
          description="We've compiled policy development strategies, governance best practices, and enforcement optimization techniques for modern infrastructure and compliance workflows."
          image="/policy-engine.svg"
          buttonText="Get the policy-as-code guide"
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
