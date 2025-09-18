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

export default function SecureTransactionPage() {
  const { productUrl, docsUrl } = getAppUrls("secure-transaction");
  
  const ctaButtons = [
    {
      text: "Process Payments",
      href: productUrl,
      variant: "primary" as const
    },
    {
      text: "Gateway Integration",
      href: docsUrl,
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "payment-routing",
      image: "/payroute.svg",
      title: "Intelligent Payment Routing Platform",
      description: "Advanced payment routing with intelligent gateway selection, failover mechanisms, and optimization algorithms for secure and reliable transaction processing.",
      ctaText: "Route payments intelligently",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "secure-transactions",
      image: "/payroute.svg",
      title: "Secure Transaction Processing",
      description: "Enterprise-grade secure transaction flows with encryption, fraud detection, and compliance features for PCI DSS and financial security standards.",
      ctaText: "Secure payment processing",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "gateway-abstraction",
      image: "/payroute.svg",
      title: "Payment Gateway Abstraction",
      description: "Unified payment gateway abstraction layer with multi-provider support, standardized APIs, and seamless integration for payment processing flexibility.",
      ctaText: "Abstract payment gateways",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "transaction-orchestration",
      image: "/payroute.svg",
      title: "Transaction Orchestration Engine",
      description: "Sophisticated transaction orchestration with workflow automation, retry logic, and compensation patterns for complex payment processing scenarios.",
      ctaText: "Orchestrate transactions",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "payment-processing",
      title: "Payment Processing",
      content: {
        title: "Advanced payment routing and transaction processing platform",
        description: "Comprehensive payment processing with intelligent routing, secure transaction flows, and enterprise-grade reliability for financial service providers.",
        buttons: [
          { text: "Process Payments", href: productUrl, variant: "primary" as const },
          { text: "Payment processing guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Payment Processing Features",
          items: [
            "Intelligent routing",
            "Secure transaction flows",
            "Multi-currency support",
            "Real-time processing",
            "Fraud detection",
            "Risk assessment",
            "Compliance monitoring",
            "Transaction analytics"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Payment Processing Console",
          description: "Secure payment routing and transaction management"
        }
      }
    },
    {
      id: "gateway-integration",
      title: "Gateway Integration",
      content: {
        title: "Unified payment gateway integration and abstraction platform",
        description: "Seamless integration with multiple payment gateways through standardized APIs, gateway abstraction, and unified payment processing workflows.",
        buttons: [
          { text: "Integrate Payment Gateways", href: productUrl, variant: "primary" as const },
          { text: "Gateway integration guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Gateway Integration Features",
          items: [
            "Multi-gateway support",
            "Standardized APIs",
            "Gateway abstraction",
            "Failover mechanisms",
            "Load balancing",
            "Performance monitoring",
            "Configuration management",
            "Testing frameworks"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Gateway Integration Console",
          description: "Payment gateway management and abstraction interface"
        }
      }
    },
    {
      id: "security-compliance",
      title: "Security & Compliance",
      content: {
        title: "Enterprise security and compliance management platform",
        description: "Comprehensive security and compliance features with PCI DSS compliance, encryption, fraud detection, and regulatory compliance for financial transactions.",
        buttons: [
          { text: "Ensure Payment Security", href: productUrl, variant: "primary" as const },
          { text: "Security compliance guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Security & Compliance Features",
          items: [
            "PCI DSS compliance",
            "End-to-end encryption",
            "Fraud detection",
            "Risk scoring",
            "Regulatory compliance",
            "Audit logging",
            "Security monitoring",
            "Threat prevention"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Security Compliance Interface",
          description: "Payment security and regulatory compliance management"
        }
      }
    },
    {
      id: "transaction-orchestration",
      title: "Transaction Orchestration",
      content: {
        title: "Advanced transaction workflow orchestration platform",
        description: "Sophisticated transaction orchestration with workflow automation, retry mechanisms, and compensation patterns for complex payment processing scenarios.",
        buttons: [
          { text: "Orchestrate Transactions", href: productUrl, variant: "primary" as const },
          { text: "Orchestration patterns guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Transaction Orchestration Features",
          items: [
            "Workflow automation",
            "Retry mechanisms",
            "Compensation patterns",
            "State management",
            "Error handling",
            "Transaction monitoring",
            "Performance optimization",
            "Scalable architecture"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Transaction Orchestration Center",
          description: "Payment workflow orchestration and automation management"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Intelligent payment routing with gateway abstraction",
      description: "Advanced payment routing platform with intelligent gateway selection, failover mechanisms, and unified abstraction layer for secure and reliable transaction processing.",
      link: {
        text: "Learn about payment routing",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Enterprise-grade security with PCI DSS compliance",
      description: "Comprehensive security and compliance features with PCI DSS compliance, end-to-end encryption, fraud detection, and regulatory compliance for financial transactions."
    },
    {
      number: "03",
      title: "Multi-gateway support with standardized APIs", 
      description: "Seamless integration with multiple payment gateways through standardized APIs, gateway abstraction, and unified payment processing workflows for flexibility and reliability."
    },
    {
      number: "04",
      title: "Advanced transaction orchestration with automation",
      description: "Sophisticated transaction orchestration with workflow automation, retry mechanisms, and compensation patterns for complex payment processing scenarios and business logic."
    }
  ];

  const customerReference = {
    title: "Payment Processing Transformation",
    company: "FinTech startup processes $10M+ monthly with 99.9% reliability using intelligent routing",
    description: "A rapidly growing FinTech company transformed their payment processing using PayRoute, achieving exceptional reliability while reducing transaction costs and improving customer experience.",
    image: "/payroute.svg",
    linkText: "Read the payment processing story",
    linkHref: docsUrl
  };

  const customerLogos = [
    {
      name: "Apache Camel",
      image: "https://logo.clearbit.com/camel.apache.org",
      href: docsUrl,
      alt: "Apache Camel logo"
    },
    {
      name: "Stripe",
      image: "https://logo.clearbit.com/stripe.com",
      href: docsUrl,
      alt: "Stripe logo"
    },
    {
      name: "PayPal",
      image: "https://logo.clearbit.com/paypal.com",
      href: docsUrl, 
      alt: "PayPal logo"
    },
    {
      name: "Square",
      image: "https://logo.clearbit.com/squareup.com",
      href: docsUrl,
      alt: "Square logo"
    },
    {
      name: "Adyen", 
      image: "https://logo.clearbit.com/adyen.com",
      href: docsUrl,
      alt: "Adyen logo"
    },
    {
      name: "Braintree",
      image: "https://logo.clearbit.com/braintreepayments.com",
      href: docsUrl,
      alt: "Braintree logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in PayRoute",
      content: {
        title: "Latest payment routing and security features",
        description: "Stay updated with the newest capabilities in payment routing, gateway integration, and transaction security for modern financial services and FinTech applications.",
        image: "/payroute.svg",
        links: [
          { text: "New routing features", href: docsUrl },
          { text: "Security improvements", href: docsUrl },
          { text: "Gateway integration updates", href: docsUrl },
          { text: "Orchestration enhancements", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare payment processing solutions",
      content: {
        title: "Why choose PayRoute",
        description: "Compare our payment routing capabilities with other solutions and see why FinTech companies choose us for secure transaction processing and gateway abstraction.",
        image: "/payroute.svg",
        links: [
          { text: "Payment processing comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master PayRoute",
      content: {
        title: "Learn payment processing best practices",
        description: "Master payment routing with comprehensive guides, security strategies, and training materials for FinTech developers and payment professionals.",
        image: "/payroute.svg",
        links: [
          { text: "Payment routing deployment guide", href: docsUrl },
          { text: "Security compliance best practices", href: docsUrl },
          { text: "Gateway integration strategies", href: docsUrl },
          { text: "Troubleshooting guide", href: docsUrl }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Process payments",
      href: productUrl,
      icon: "demo"
    },
    {
      title: "Gateway integration",
      href: docsUrl,
      icon: "tour"
    },
    {
      title: "Contact FinTech team",
      href: productUrl,
      icon: "contact"
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="sr-only">PayRoute | Payment Routing & Secure Transactions Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="PayRoute"
          description="Payment routing orchestration platform designed for secure transaction flows and gateway abstraction with intelligent routing. Enterprise payment processing platform with multi-gateway support and advanced security compliance."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Payment Routing Console",
            description: "Secure transaction processing and gateway management"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="PayRoute" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose PayRoute?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Payment processing success stories"
          description="Learn why FinTech companies and payment professionals choose PayRoute for secure transaction processing and intelligent payment gateway management."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Payment Processing Guide"
          description="We've compiled payment routing strategies, security compliance techniques, and gateway integration best practices for modern FinTech applications and financial services."
          image="/payroute.svg"
          buttonText="Get the payment guide"
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
