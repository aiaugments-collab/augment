import { ProductHero } from "@/components/product/ProductHero";
import { ProductPromo } from "@/components/product/ProductPromo";
import { ProductExplorer } from "@/components/product/ProductExplorer";
import { ProductWhyChoose } from "@/components/product/ProductWhyChoose";
import { ProductCustomerLogos } from "@/components/product/ProductCustomerLogos";
import { ProductResources } from "@/components/product/ProductResources";
import { ProductCTABanner } from "@/components/product/ProductCTABanner";
import { ProductGetStarted } from "@/components/product/ProductGetStarted";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export default function RiskManagementPage() {
  const ctaButtons = [
    {
      text: "Start Free Trial",
      href: "/book-demo",
      variant: "primary" as const
    },
    {
      text: "Schedule Demo",
      href: "/book-demo",
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "risk-assessment",
      image: "/products/risk-management/01.png",
      title: "Webinar: Enterprise Risk Assessment",
      description: "Learn how to implement comprehensive risk assessment frameworks that protect your organization and ensure business continuity.",
      ctaText: "Register today",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "compliance-automation",
      image: "/products/risk-management/02.png",
      title: "Compliance Automation Best Practices",
      description: "Discover how to automate compliance monitoring and reporting to reduce manual effort while ensuring regulatory adherence.",
      ctaText: "Read guide",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "audit-management",
      image: "/products/risk-management/03.png",
      title: "Advanced Audit Trail Management",
      description: "Master audit trail management with comprehensive tracking, documentation, and reporting for regulatory compliance.",
      ctaText: "Download guide (PDF)",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "risk-success",
      image: "/products/risk-management/04.png",
      title: "Success Story: 60% Risk Reduction",
      description: "See how a financial services company reduced operational risk by 60% using our comprehensive risk management solution.",
      ctaText: "Read success story",
      ctaLink: "/book-demo",
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "risk-assessment",
      title: "Risk Assessment",
      content: {
        title: "Comprehensive risk identification and assessment",
        description: "Identify, assess, and monitor risks across your organization with advanced risk assessment tools, automated scoring, and real-time monitoring capabilities.",
        buttons: [
          { text: "Try risk assessment", href: "/book-demo", variant: "primary" as const },
          { text: "See assessment examples", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Assessment Capabilities",
          items: [
            "Automated risk identification",
            "Risk scoring and prioritization",
            "Impact and probability analysis",
            "Risk heat map visualization",
            "Scenario-based risk modeling",
            "Continuous risk monitoring",
            "Risk appetite alignment",
            "Stakeholder risk reporting"
          ]
        },
        mockup: {
          type: "analytics" as const,
          title: "Risk Assessment Dashboard",
          description: "Risk scoring, heat maps, and real-time monitoring interface"
        }
      }
    },
    {
      id: "compliance-monitoring",
      title: "Compliance Monitoring",
      content: {
        title: "Automated compliance monitoring and reporting",
        description: "Ensure regulatory compliance with automated monitoring, real-time alerts, and comprehensive reporting tools designed for complex regulatory environments.",
        buttons: [
          { text: "Explore compliance tools", href: "/book-demo", variant: "primary" as const },
          { text: "View compliance reports", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Compliance Features",
          items: [
            "Real-time compliance monitoring",
            "Automated regulatory reporting",
            "Policy management system",
            "Compliance dashboard views",
            "Violation alert system",
            "Regulatory change tracking",
            "Compliance training management",
            "Third-party risk assessment"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Compliance Monitoring Center",
          description: "Real-time compliance status and regulatory tracking dashboard"
        }
      }
    },
    {
      id: "audit-trails",
      title: "Audit Trails",
      content: {
        title: "Comprehensive audit trail management",
        description: "Maintain detailed audit trails with automated logging, secure storage, and comprehensive reporting capabilities that meet regulatory requirements and support investigations.",
        buttons: [
          { text: "Try audit management", href: "/book-demo", variant: "primary" as const },
          { text: "Audit trail guide", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Audit Trail Features",
          items: [
            "Automated activity logging",
            "Secure audit data storage",
            "Comprehensive audit reports",
            "User activity tracking",
            "Data access monitoring",
            "Change history tracking",
            "Forensic investigation tools",
            "Regulatory audit support"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Audit Trail Management",
          description: "Comprehensive activity logging and audit trail tracking"
        }
      }
    },
    {
      id: "governance-framework",
      title: "Governance Framework",
      content: {
        title: "Enterprise governance and control framework",
        description: "Implement robust governance frameworks with policy management, control testing, and governance reporting designed for enterprise-scale risk management.",
        buttons: [
          { text: "Explore governance", href: "/book-demo", variant: "primary" as const },
          { text: "Framework guide", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Governance Features",
          items: [
            "Policy management system",
            "Control framework design",
            "Governance committee support",
            "Risk committee reporting",
            "Board-level dashboards",
            "Governance metrics tracking",
            "Control effectiveness testing",
            "Governance training programs"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Governance Framework",
          description: "Policy management and governance control framework interface"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Comprehensive risk identification and assessment",
      description: "Identify and assess risks across your entire organization with advanced analytics, automated scoring, and real-time monitoring that provides complete visibility into your risk landscape.",
      link: {
        text: "Learn about risk assessment",
        href: "/book-demo"
      }
    },
    {
      number: "02", 
      title: "Automated compliance monitoring and reporting",
      description: "Ensure regulatory compliance with automated monitoring systems, real-time alerts, and comprehensive reporting tools that adapt to changing regulatory requirements."
    },
    {
      number: "03",
      title: "Enterprise-grade audit trail management", 
      description: "Maintain detailed audit trails with secure logging, comprehensive reporting, and forensic investigation capabilities that meet the most stringent regulatory requirements."
    },
    {
      number: "04",
      title: "Integrated governance and control framework",
      description: "Implement robust governance frameworks with policy management, control testing, and board-level reporting that ensures effective risk oversight and management."
    }
  ];

  const customerReference = {
    title: "Customer Success Story",
    company: "Financial services firm reduces operational risk by 60%",
    description: "A leading financial services company transformed their risk management process using our comprehensive solution, significantly reducing operational risk while improving regulatory compliance.",
    image: "/products/risk-management/01.png",
    linkText: "Read the risk management success story",
    linkHref: "/book-demo"
  };

  const customerLogos = [
    {
      name: "JPMorgan Chase",
      image: "https://logo.clearbit.com/jpmorganchase.com",
      href: "/book-demo",
      alt: "JPMorgan Chase logo"
    },
    {
      name: "Goldman Sachs",
      image: "https://logo.clearbit.com/goldmansachs.com",
      href: "/book-demo",
      alt: "Goldman Sachs logo"
    },
    {
      name: "Morgan Stanley",
      image: "https://logo.clearbit.com/morganstanley.com",
      href: "/book-demo", 
      alt: "Morgan Stanley logo"
    },
    {
      name: "Bank of America",
      image: "https://logo.clearbit.com/bankofamerica.com",
      href: "/book-demo",
      alt: "Bank of America logo"
    },
    {
      name: "Wells Fargo", 
      image: "https://logo.clearbit.com/wellsfargo.com",
      href: "/book-demo",
      alt: "Wells Fargo logo"
    },
    {
      name: "Citigroup",
      image: "https://logo.clearbit.com/citigroup.com",
      href: "/book-demo",
      alt: "Citigroup logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in Risk Management",
      content: {
        title: "Latest risk management and compliance features",
        description: "Stay updated with the newest capabilities in risk assessment, compliance monitoring, and governance frameworks designed for enterprise operations.",
        image: "/products/risk-management/02.png",
        links: [
          { text: "Latest risk assessment features", href: "/book-demo" },
          { text: "New compliance capabilities", href: "/book-demo" },
          { text: "Enhanced audit trail tools", href: "/book-demo" },
          { text: "Governance framework updates", href: "/book-demo" }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare Risk Management solutions",
      content: {
        title: "See why our risk management solution leads the market",
        description: "Compare our comprehensive risk management capabilities with other solutions and see why organizations choose us for enterprise risk and compliance management.",
        image: "/products/risk-management/03.png",
        links: [
          { text: "Risk management comparison", href: "/book-demo" },
          { text: "Feature comparison guide", href: "/book-demo" },
          { text: "ROI calculator", href: "/book-demo" },
          { text: "Implementation roadmap", href: "/book-demo" }
        ]
      }
    },
    {
      id: "learning",
      title: "Master risk management",
      content: {
        title: "Learn advanced risk management techniques",
        description: "Master enterprise risk management with comprehensive guides, best practices, and compliance frameworks used by leading financial institutions and enterprises.",
        image: "/products/risk-management/04.png",
        links: [
          { text: "Risk management masterclass", href: "/book-demo" },
          { text: "Compliance automation guide", href: "/book-demo" },
          { text: "Audit trail best practices", href: "/book-demo" },
          { text: "Governance framework design", href: "/book-demo" }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Start free trial",
      href: "/book-demo",
      icon: "demo"
    },
    {
      title: "Schedule demo",
      href: "/book-demo",
      icon: "tour"
    },
    {
      title: "Contact sales",
      href: "/book-demo",
      icon: "contact"
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="sr-only">Risk Management and Compliance | Enterprise Risk Assessment & Governance</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="Risk Management and Compliance"
          description="Enterprise risk assessment, compliance monitoring, audit trails, and regulatory reporting to ensure business continuity and regulatory adherence. Comprehensive risk management solution designed for complex regulatory environments."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Risk Management Center",
            description: "Comprehensive risk assessment and compliance monitoring dashboard"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="Risk Management and Compliance" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose our Risk Management and Compliance solution?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Risk management success stories"
          description="Learn why leading financial institutions and enterprises use our risk management solution to protect their operations and ensure regulatory compliance."
          viewMoreText="View more success stories"
          viewMoreHref="/book-demo"
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Enterprise Risk Management Guide"
          description="We've compiled risk assessment methodologies, compliance frameworks, and governance best practices used by leading financial institutions and enterprises."
          image="/products/risk-management/03.png"
          buttonText="Get the risk management guide"
          buttonHref="/book-demo"
        />
        <ProductGetStarted
          title="Get Started"
          actions={getStartedActions}
        />
      </main>
    </div>
  );
}
