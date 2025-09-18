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

export default function CacheLayerPage() {
  const { productUrl, docsUrl } = getAppUrls("cache-layer");
  
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
      id: "http-caching",
      image: "/cache-layer.svg",
      title: "High-Performance HTTP Caching",
      description: "Accelerate web applications with intelligent HTTP caching, edge optimization, and advanced cache policies for superior performance and user experience.",
      ctaText: "Explore HTTP caching",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "object-caching",
      image: "/cache-layer.svg",
      title: "Distributed Object Caching",
      description: "Scalable object caching with distributed architecture, automatic failover, and intelligent cache management for high-availability applications.",
      ctaText: "Learn about object caching",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "edge-rules",
      image: "/cache-layer.svg",
      title: "Intelligent Edge Rules Engine",
      description: "Configure sophisticated caching behaviors with edge rules, conditional caching, and dynamic content optimization for maximum efficiency.",
      ctaText: "View edge features",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "cache-invalidation",
      image: "/cache-layer.svg",
      title: "Advanced Cache Invalidation",
      description: "Precise cache invalidation with API-driven controls, tag-based purging, and real-time cache management for dynamic content updates.",
      ctaText: "See invalidation features",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "http-acceleration",
      title: "HTTP Acceleration",
      content: {
        title: "High-performance HTTP caching and acceleration",
        description: "Accelerate web applications with intelligent HTTP caching, compression, and optimization techniques for exceptional performance and reduced origin load.",
        buttons: [
          { text: "Accelerate Applications", href: productUrl, variant: "primary" as const },
          { text: "HTTP optimization guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "HTTP Acceleration Features",
          items: [
            "Intelligent HTTP caching",
            "Compression & minification",
            "Content optimization",
            "SSL termination",
            "HTTP/2 & HTTP/3 support",
            "Connection pooling",
            "Load balancing",
            "Performance monitoring"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Cache Performance Dashboard",
          description: "HTTP caching and application acceleration monitoring"
        }
      }
    },
    {
      id: "distributed-caching",
      title: "Distributed Caching",
      content: {
        title: "Scalable distributed caching architecture",
        description: "High-performance distributed caching with automatic scaling, failover capabilities, and intelligent cache distribution for enterprise applications.",
        buttons: [
          { text: "Deploy Distributed Cache", href: productUrl, variant: "primary" as const },
          { text: "Architecture guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Distributed Caching Features",
          items: [
            "Distributed architecture",
            "Automatic scaling",
            "Failover & redundancy",
            "Consistent hashing",
            "Memory optimization",
            "Cluster management",
            "Health monitoring",
            "Performance tuning"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Cache Cluster Console",
          description: "Distributed caching cluster management and monitoring"
        }
      }
    },
    {
      id: "edge-optimization",
      title: "Edge Optimization",
      content: {
        title: "Advanced edge caching and content optimization",
        description: "Optimize content delivery with edge caching rules, dynamic optimization, and intelligent content transformation for global performance.",
        buttons: [
          { text: "Optimize Edge Delivery", href: productUrl, variant: "primary" as const },
          { text: "Edge configuration guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Edge Optimization Features",
          items: [
            "Edge caching rules",
            "Dynamic optimization",
            "Content transformation",
            "Geographic distribution",
            "CDN integration",
            "Mobile optimization",
            "Image processing",
            "Bandwidth optimization"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Edge Rules Configuration",
          description: "Advanced edge caching and optimization rule management"
        }
      }
    },
    {
      id: "cache-management",
      title: "Cache Management",
      content: {
        title: "Comprehensive cache management and invalidation",
        description: "Advanced cache management with API-driven invalidation, tag-based purging, and real-time monitoring for optimal cache performance and control.",
        buttons: [
          { text: "Manage Cache", href: productUrl, variant: "primary" as const },
          { text: "Management best practices", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Cache Management Features",
          items: [
            "API-driven invalidation",
            "Tag-based purging",
            "Real-time monitoring",
            "Cache analytics",
            "TTL management",
            "Conditional caching",
            "Cache warming",
            "Policy enforcement"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Cache Management Center",
          description: "Comprehensive cache monitoring and invalidation interface"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "High-performance HTTP and object caching solutions",
      description: "Accelerate applications with intelligent caching, distributed architecture, and advanced optimization techniques for superior performance and user experience.",
      link: {
        text: "Learn about caching performance",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Distributed architecture with automatic scaling",
      description: "Scalable distributed caching with automatic scaling, failover capabilities, and intelligent cache distribution for enterprise-grade reliability and performance."
    },
    {
      number: "03",
      title: "Advanced edge rules and content optimization", 
      description: "Configure sophisticated caching behaviors with edge rules, dynamic optimization, and content transformation for maximum efficiency and global performance."
    },
    {
      number: "04",
      title: "Comprehensive cache management and API control",
      description: "Advanced cache management with API-driven invalidation, tag-based purging, and real-time monitoring for optimal cache performance and precise control."
    }
  ];

  const customerReference = {
    title: "Performance Transformation Success",
    company: "E-commerce platform improves page load speed by 85% with intelligent caching",
    description: "A leading e-commerce platform transformed their performance using CacheLayer, achieving dramatic improvements in page load speeds while reducing server load and infrastructure costs.",
    image: "/cache-layer.svg",
    linkText: "Read the performance transformation story",
    linkHref: docsUrl
  };

  const customerLogos = [
    {
      name: "Varnish",
      image: "https://logo.clearbit.com/varnish-cache.org",
      href: docsUrl,
      alt: "Varnish logo"
    },
    {
      name: "Redis",
      image: "https://logo.clearbit.com/redis.io",
      href: docsUrl,
      alt: "Redis logo"
    },
    {
      name: "Memcached",
      image: "https://logo.clearbit.com/memcached.org",
      href: docsUrl, 
      alt: "Memcached logo"
    },
    {
      name: "Cloudflare",
      image: "https://logo.clearbit.com/cloudflare.com",
      href: docsUrl,
      alt: "Cloudflare logo"
    },
    {
      name: "Fastly", 
      image: "https://logo.clearbit.com/fastly.com",
      href: docsUrl,
      alt: "Fastly logo"
    },
    {
      name: "AWS CloudFront",
      image: "https://logo.clearbit.com/aws.amazon.com",
      href: docsUrl,
      alt: "AWS CloudFront logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in CacheLayer",
      content: {
        title: "Latest caching and performance features",
        description: "Stay updated with the newest capabilities in HTTP caching, object caching, and edge optimization for modern high-performance applications.",
        image: "/cache-layer.svg",
        links: [
          { text: "New caching features", href: docsUrl },
          { text: "Performance improvements", href: docsUrl },
          { text: "Edge optimization updates", href: docsUrl },
          { text: "Management enhancements", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare caching solutions",
      content: {
        title: "Why choose CacheLayer",
        description: "Compare our caching and performance capabilities with other solutions and see why performance engineers choose us for comprehensive caching and acceleration.",
        image: "/cache-layer.svg",
        links: [
          { text: "Caching solution comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master CacheLayer",
      content: {
        title: "Learn caching optimization best practices",
        description: "Master application caching with comprehensive guides, best practices, and training materials for performance engineers and web developers.",
        image: "/cache-layer.svg",
        links: [
          { text: "Caching strategy guide", href: docsUrl },
          { text: "Performance optimization best practices", href: docsUrl },
          { text: "Edge configuration strategies", href: docsUrl },
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
      title: "Contact performance team",
      href: productUrl,
      icon: "contact"
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="sr-only">CacheLayer | High-Performance HTTP & Object Caching Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="CacheLayer"
          description="High-performance HTTP and object caching platform to accelerate applications with distributed caching, edge rules, and cache invalidation APIs. Advanced caching solutions with intelligent optimization and enterprise-grade performance capabilities."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Cache Management Console",
            description: "High-performance caching and acceleration management"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="CacheLayer" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose CacheLayer?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Performance optimization success stories"
          description="Learn why performance engineers and web developers choose CacheLayer for high-performance caching and application acceleration capabilities."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Performance Optimization Guide"
          description="We've compiled caching strategies, performance optimization techniques, and acceleration best practices for modern high-performance web applications and content delivery."
          image="/cache-layer.svg"
          buttonText="Get the performance guide"
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
