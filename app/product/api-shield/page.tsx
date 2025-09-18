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

export default function APIShieldPage() {
  const { productUrl, docsUrl } = getAppUrls("api-shield");
  
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
      id: "web-application-firewall",
      image: "/api-shield.svg",
      title: "Advanced Web Application Firewall",
      description: "Protect web applications and APIs from OWASP Top 10 vulnerabilities, SQL injection, XSS attacks, and other common web threats with intelligent filtering.",
      ctaText: "Explore WAF protection",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "api-security",
      image: "/api-shield.svg",
      title: "Comprehensive API Protection",
      description: "Secure REST and GraphQL APIs with schema validation, rate limiting, authentication enforcement, and advanced threat detection capabilities.",
      ctaText: "Learn about API security",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "bot-protection",
      image: "/api-shield.svg",
      title: "Intelligent Bot Protection",
      description: "Detect and block malicious bots, scrapers, and automated attacks while allowing legitimate traffic with machine learning-powered bot detection.",
      ctaText: "View bot protection",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "rate-limiting",
      image: "/api-shield.svg",
      title: "Advanced Rate Limiting",
      description: "Implement sophisticated rate limiting with custom rules, burst protection, and adaptive thresholds to prevent abuse and ensure service availability.",
      ctaText: "See rate limiting features",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "waf-protection",
      title: "WAF Protection",
      content: {
        title: "Advanced web application firewall protection",
        description: "Protect web applications from sophisticated attacks with intelligent filtering, OWASP Top 10 coverage, and real-time threat detection capabilities.",
        buttons: [
          { text: "Enable WAF Protection", href: productUrl, variant: "primary" as const },
          { text: "Security rules", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "WAF Protection Features",
          items: [
            "OWASP Top 10 protection",
            "SQL injection prevention",
            "Cross-site scripting (XSS) blocking",
            "Custom security rules",
            "Geo-blocking capabilities",
            "IP reputation filtering",
            "Virtual patching",
            "Real-time threat intelligence"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "WAF Security Dashboard",
          description: "Web application firewall monitoring and threat detection"
        }
      }
    },
    {
      id: "api-security",
      title: "API Security",
      content: {
        title: "Comprehensive API security and protection",
        description: "Secure REST and GraphQL APIs with schema validation, authentication enforcement, and advanced threat detection tailored for modern API architectures.",
        buttons: [
          { text: "Secure APIs", href: productUrl, variant: "primary" as const },
          { text: "API security guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "API Security Features",
          items: [
            "Schema validation",
            "Authentication enforcement",
            "Authorization controls",
            "Input sanitization",
            "Response filtering",
            "API discovery",
            "Threat modeling",
            "Compliance reporting"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "API Security Console",
          description: "API protection monitoring and security configuration"
        }
      }
    },
    {
      id: "bot-detection",
      title: "Bot Detection",
      content: {
        title: "Intelligent bot detection and automated attack prevention",
        description: "Detect and block malicious bots, scrapers, and automated attacks with machine learning-powered analysis while preserving legitimate user experience.",
        buttons: [
          { text: "Configure Bot Protection", href: productUrl, variant: "primary" as const },
          { text: "Bot detection rules", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Bot Detection Features",
          items: [
            "Machine learning detection",
            "Behavioral analysis",
            "Device fingerprinting",
            "Challenge mechanisms",
            "Whitelist management",
            "Traffic analysis",
            "Real-time blocking",
            "False positive reduction"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Bot Protection Configuration",
          description: "Intelligent bot detection setup and management interface"
        }
      }
    },
    {
      id: "rate-limiting",
      title: "Rate Limiting",
      content: {
        title: "Advanced rate limiting and traffic management",
        description: "Implement sophisticated rate limiting with custom rules, burst protection, and adaptive thresholds to prevent abuse while maintaining service performance.",
        buttons: [
          { text: "Setup Rate Limiting", href: productUrl, variant: "primary" as const },
          { text: "Rate limit strategies", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Rate Limiting Features",
          items: [
            "Custom rate limit rules",
            "Burst protection",
            "Adaptive thresholds",
            "Per-user limits",
            "API endpoint controls",
            "Geographic restrictions",
            "Time-based policies",
            "Quota management"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Rate Limiting Console",
          description: "Advanced traffic management and rate limiting configuration"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Advanced WAF protection against modern web threats",
      description: "Comprehensive web application firewall protection covering OWASP Top 10 vulnerabilities, zero-day threats, and sophisticated attack patterns with intelligent filtering.",
      link: {
        text: "Learn about WAF protection",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Comprehensive API security for modern architectures",
      description: "Secure REST and GraphQL APIs with schema validation, authentication enforcement, and advanced threat detection tailored for cloud-native applications."
    },
    {
      number: "03",
      title: "Intelligent bot protection with machine learning", 
      description: "Detect and block malicious bots and automated attacks with ML-powered analysis while preserving legitimate user experience and reducing false positives."
    },
    {
      number: "04",
      title: "Advanced rate limiting and traffic management",
      description: "Implement sophisticated rate limiting with custom rules, burst protection, and adaptive thresholds to prevent abuse while maintaining optimal service performance."
    }
  ];

  const customerReference = {
    title: "API Security Transformation",
    company: "SaaS platform blocks 99.8% of API attacks with intelligent protection",
    description: "A leading SaaS platform transformed their API security using API Shield, achieving exceptional protection rates against automated attacks while maintaining seamless user experience and API performance.",
    image: "/api-shield.svg",
    linkText: "Read the API security success story",
    linkHref: docsUrl
  };

  const customerLogos = [
    {
      name: "ModSecurity",
      image: "https://logo.clearbit.com/modsecurity.org",
      href: docsUrl,
      alt: "ModSecurity logo"
    },
    {
      name: "Cloudflare",
      image: "https://logo.clearbit.com/cloudflare.com",
      href: docsUrl,
      alt: "Cloudflare logo"
    },
    {
      name: "AWS WAF",
      image: "https://logo.clearbit.com/aws.amazon.com",
      href: docsUrl, 
      alt: "AWS WAF logo"
    },
    {
      name: "Akamai",
      image: "https://logo.clearbit.com/akamai.com",
      href: docsUrl,
      alt: "Akamai logo"
    },
    {
      name: "Imperva", 
      image: "https://logo.clearbit.com/imperva.com",
      href: docsUrl,
      alt: "Imperva logo"
    },
    {
      name: "F5 Networks",
      image: "https://logo.clearbit.com/f5.com",
      href: docsUrl,
      alt: "F5 Networks logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in API Shield",
      content: {
        title: "Latest WAF and API protection features",
        description: "Stay updated with the newest capabilities in web application firewall protection, API security, and bot detection for modern application security.",
        image: "/api-shield.svg",
        links: [
          { text: "New WAF rules", href: docsUrl },
          { text: "API security updates", href: docsUrl },
          { text: "Bot detection improvements", href: docsUrl },
          { text: "Rate limiting enhancements", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare WAF solutions",
      content: {
        title: "Why choose API Shield",
        description: "Compare our web application firewall and API protection capabilities with other solutions and see why developers choose us for comprehensive application security.",
        image: "/api-shield.svg",
        links: [
          { text: "WAF solution comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Deployment guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master API Shield",
      content: {
        title: "Learn application security best practices",
        description: "Master web application and API security with comprehensive guides, best practices, and training materials for developers and security professionals.",
        image: "/api-shield.svg",
        links: [
          { text: "Application security guide", href: docsUrl },
          { text: "API protection best practices", href: docsUrl },
          { text: "WAF configuration strategies", href: docsUrl },
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
        <h1 className="sr-only">API Shield | WAF & API Protection Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="API Shield"
          description="Advanced web application firewall and API protection platform that secures applications from OWASP Top 10 vulnerabilities, bot attacks, and automated threats. Comprehensive protection with intelligent filtering, rate limiting, and real-time threat detection."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "API Security Dashboard",
            description: "Web application firewall and API protection monitoring"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="API Shield" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose API Shield?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Application security success stories"
          description="Learn why developers and security teams choose API Shield for comprehensive web application and API protection capabilities."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Application Security Guide"
          description="We've compiled web application security strategies, API protection techniques, and threat prevention best practices for modern application development and deployment."
          image="/api-shield.svg"
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
