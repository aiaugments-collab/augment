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

export default function ProxyCachePage() {
  const { productUrl, docsUrl } = getAppUrls("proxy-cache");
  
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
      id: "enterprise-proxy",
      image: "/proxy-cache.svg",
      title: "Enterprise HTTP Proxy",
      description: "High-performance HTTP proxy solution with advanced caching, content filtering, and bandwidth management for enterprise environments.",
      ctaText: "Explore proxy features",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "intelligent-caching",
      image: "/proxy-cache.svg",
      title: "Intelligent Caching Engine",
      description: "Advanced caching capabilities with intelligent content analysis, cache optimization, and performance acceleration for improved user experience.",
      ctaText: "Learn about caching",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "access-control",
      image: "/proxy-cache.svg",
      title: "Advanced Access Control",
      description: "Comprehensive access control with user authentication, content filtering, bandwidth management, and detailed logging for security and compliance.",
      ctaText: "View access control",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "high-throughput",
      image: "/proxy-cache.svg",
      title: "High-Throughput Performance",
      description: "Optimized for high-throughput environments with connection pooling, load balancing, and performance monitoring for enterprise-scale deployments.",
      ctaText: "See performance features",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "proxy-services",
      title: "Proxy Services",
      content: {
        title: "Enterprise HTTP proxy and content filtering",
        description: "High-performance HTTP proxy with content filtering, access control, and bandwidth management for secure and efficient web access in enterprise environments.",
        buttons: [
          { text: "Deploy Proxy", href: productUrl, variant: "primary" as const },
          { text: "Proxy configuration guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Proxy Services Features",
          items: [
            "HTTP/HTTPS proxy",
            "Content filtering",
            "Access control lists",
            "Bandwidth management",
            "User authentication",
            "SSL inspection",
            "Protocol support",
            "Connection pooling"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Proxy Management Dashboard",
          description: "Enterprise HTTP proxy configuration and monitoring"
        }
      }
    },
    {
      id: "caching-optimization",
      title: "Caching & Optimization",
      content: {
        title: "Advanced caching and performance optimization",
        description: "Intelligent caching engine with content optimization, cache policies, and performance acceleration for improved web access and reduced bandwidth usage.",
        buttons: [
          { text: "Optimize Caching", href: productUrl, variant: "primary" as const },
          { text: "Caching strategies", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Caching & Optimization Features",
          items: [
            "Intelligent content caching",
            "Cache policy management",
            "Content compression",
            "Bandwidth optimization",
            "Cache hierarchies",
            "TTL management",
            "Cache statistics",
            "Performance monitoring"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Cache Performance Console",
          description: "Caching optimization and performance monitoring interface"
        }
      }
    },
    {
      id: "security-compliance",
      title: "Security & Compliance",
      content: {
        title: "Comprehensive security and compliance management",
        description: "Advanced security features with access control, content filtering, audit logging, and compliance reporting for enterprise security requirements.",
        buttons: [
          { text: "Configure Security", href: productUrl, variant: "primary" as const },
          { text: "Security best practices", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Security & Compliance Features",
          items: [
            "Access control policies",
            "Content filtering rules",
            "Audit logging",
            "Compliance reporting",
            "User activity monitoring",
            "Threat detection",
            "SSL/TLS management",
            "Security analytics"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Security Policy Configuration",
          description: "Enterprise security and compliance management interface"
        }
      }
    },
    {
      id: "monitoring-analytics",
      title: "Monitoring & Analytics",
      content: {
        title: "Comprehensive monitoring and analytics platform",
        description: "Detailed monitoring and analytics with performance metrics, usage statistics, and comprehensive reporting for operational visibility and optimization.",
        buttons: [
          { text: "View Analytics", href: productUrl, variant: "primary" as const },
          { text: "Monitoring setup guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Monitoring & Analytics Features",
          items: [
            "Real-time performance metrics",
            "Usage analytics",
            "Traffic analysis",
            "User behavior tracking",
            "Bandwidth monitoring",
            "Error reporting",
            "Custom dashboards",
            "Alert notifications"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Analytics and Monitoring Center",
          description: "Comprehensive proxy monitoring and analytics interface"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Enterprise-grade HTTP proxy with advanced capabilities",
      description: "High-performance HTTP proxy solution with content filtering, access control, and bandwidth management optimized for enterprise environments and security requirements.",
      link: {
        text: "Learn about proxy capabilities",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Intelligent caching engine for performance optimization",
      description: "Advanced caching capabilities with intelligent content analysis, cache optimization, and performance acceleration for improved user experience and reduced bandwidth usage."
    },
    {
      number: "03",
      title: "Comprehensive security and access control features", 
      description: "Advanced security with access control policies, content filtering, audit logging, and compliance reporting for enterprise security and regulatory requirements."
    },
    {
      number: "04",
      title: "High-throughput performance for enterprise scale",
      description: "Optimized for high-throughput environments with connection pooling, load balancing, and performance monitoring for enterprise-scale deployments and operations."
    }
  ];

  const customerReference = {
    title: "Proxy Infrastructure Transformation",
    company: "Enterprise improves web performance by 60% with intelligent proxy caching",
    description: "A global enterprise transformed their web infrastructure using ProxyCache, achieving significant performance improvements while enhancing security and reducing bandwidth costs across all locations.",
    image: "/proxy-cache.svg",
    linkText: "Read the proxy transformation story",
    linkHref: docsUrl
  };

  const customerLogos = [
    {
      name: "Squid",
      image: "https://logo.clearbit.com/squid-cache.org",
      href: docsUrl,
      alt: "Squid logo"
    },
    {
      name: "HAProxy",
      image: "https://logo.clearbit.com/haproxy.org",
      href: docsUrl,
      alt: "HAProxy logo"
    },
    {
      name: "NGINX",
      image: "https://logo.clearbit.com/nginx.com",
      href: docsUrl, 
      alt: "NGINX logo"
    },
    {
      name: "Apache",
      image: "https://logo.clearbit.com/apache.org",
      href: docsUrl,
      alt: "Apache logo"
    },
    {
      name: "BlueCoat", 
      image: "https://logo.clearbit.com/broadcom.com",
      href: docsUrl,
      alt: "BlueCoat logo"
    },
    {
      name: "Zscaler",
      image: "https://logo.clearbit.com/zscaler.com",
      href: docsUrl,
      alt: "Zscaler logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in ProxyCache",
      content: {
        title: "Latest proxy and caching features",
        description: "Stay updated with the newest capabilities in enterprise HTTP proxy, intelligent caching, and security features for modern network infrastructure.",
        image: "/proxy-cache.svg",
        links: [
          { text: "New proxy features", href: docsUrl },
          { text: "Caching improvements", href: docsUrl },
          { text: "Security enhancements", href: docsUrl },
          { text: "Performance updates", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare proxy solutions",
      content: {
        title: "Why choose ProxyCache",
        description: "Compare our enterprise proxy capabilities with other solutions and see why network administrators choose us for comprehensive caching and security.",
        image: "/proxy-cache.svg",
        links: [
          { text: "Proxy solution comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master ProxyCache",
      content: {
        title: "Learn proxy deployment best practices",
        description: "Master enterprise proxy deployment with comprehensive guides, best practices, and training materials for network administrators and infrastructure engineers.",
        image: "/proxy-cache.svg",
        links: [
          { text: "Proxy deployment guide", href: docsUrl },
          { text: "Caching optimization best practices", href: docsUrl },
          { text: "Security configuration strategies", href: docsUrl },
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
      title: "Contact infrastructure team",
      href: productUrl,
      icon: "contact"
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="sr-only">ProxyCache | Enterprise HTTP Proxy and Caching Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="ProxyCache"
          description="Enterprise HTTP proxy and caching solution based on Squid for high-throughput environments. Advanced caching, access control, and logging capabilities with intelligent content filtering and performance optimization for enterprise networks."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Proxy Management Console",
            description: "Enterprise HTTP proxy and caching management interface"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="ProxyCache" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose ProxyCache?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Proxy infrastructure success stories"
          description="Learn why network administrators and infrastructure engineers choose ProxyCache for enterprise HTTP proxy and intelligent caching capabilities."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Enterprise Proxy Guide"
          description="We've compiled proxy deployment strategies, caching optimization techniques, and security best practices for modern enterprise network infrastructure and web access management."
          image="/proxy-cache.svg"
          buttonText="Get the proxy guide"
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
