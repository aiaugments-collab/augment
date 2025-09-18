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

export default function AppDeliveryPage() {
  const { productUrl, docsUrl } = getAppUrls("app-delivery");
  
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
      id: "load-balancing",
      image: "/app-delivery.svg",
      title: "High-Performance Load Balancing",
      description: "Distribute traffic across multiple servers with intelligent load balancing algorithms, health monitoring, and automatic failover for maximum availability.",
      ctaText: "Explore load balancing",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "ssl-termination",
      image: "/app-delivery.svg",
      title: "Advanced SSL Termination",
      description: "Offload SSL processing with high-performance termination, certificate management, and support for modern encryption standards and protocols.",
      ctaText: "Learn about SSL termination",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "traffic-shaping",
      image: "/app-delivery.svg",
      title: "Intelligent Traffic Shaping",
      description: "Optimize application performance with intelligent traffic shaping, bandwidth management, and quality of service controls for critical applications.",
      ctaText: "View traffic shaping",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "application-acceleration",
      image: "/app-delivery.svg",
      title: "Application Acceleration",
      description: "Accelerate application delivery with caching, compression, and optimization techniques that reduce latency and improve user experience.",
      ctaText: "See acceleration features",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "load-balancing",
      title: "Load Balancing",
      content: {
        title: "High-performance application delivery controller",
        description: "Distribute traffic intelligently across multiple servers with advanced algorithms, health monitoring, and automatic failover for maximum application availability.",
        buttons: [
          { text: "Configure Load Balancer", href: productUrl, variant: "primary" as const },
          { text: "Balancing algorithms", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Load Balancing Features",
          items: [
            "Multiple balancing algorithms",
            "Health check monitoring",
            "Automatic failover",
            "Session persistence",
            "Weighted distribution",
            "Geographic routing",
            "Real-time metrics",
            "High availability"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Load Balancer Dashboard",
          description: "Application delivery and traffic distribution monitoring"
        }
      }
    },
    {
      id: "ssl-termination",
      title: "SSL Termination",
      content: {
        title: "Advanced SSL termination and certificate management",
        description: "Offload SSL processing with high-performance termination, automated certificate management, and support for modern encryption standards.",
        buttons: [
          { text: "Setup SSL Termination", href: productUrl, variant: "primary" as const },
          { text: "Certificate management", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "SSL Termination Features",
          items: [
            "High-performance SSL offloading",
            "Certificate auto-renewal",
            "Modern cipher support",
            "Perfect Forward Secrecy",
            "SNI support",
            "OCSP stapling",
            "SSL/TLS optimization",
            "Security compliance"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "SSL Management Console",
          description: "SSL certificate and encryption management interface"
        }
      }
    },
    {
      id: "traffic-optimization",
      title: "Traffic Optimization",
      content: {
        title: "Intelligent traffic shaping and optimization",
        description: "Optimize application performance with intelligent traffic shaping, bandwidth management, and quality of service controls for critical business applications.",
        buttons: [
          { text: "Optimize Traffic", href: productUrl, variant: "primary" as const },
          { text: "QoS policies", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Traffic Optimization Features",
          items: [
            "Intelligent traffic shaping",
            "Bandwidth management",
            "Quality of Service (QoS)",
            "Priority queuing",
            "Rate limiting",
            "Compression algorithms",
            "Caching strategies",
            "Performance monitoring"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Traffic Optimization Setup",
          description: "Traffic shaping and performance optimization configuration"
        }
      }
    },
    {
      id: "application-delivery",
      title: "Application Delivery",
      content: {
        title: "Comprehensive application delivery optimization",
        description: "Accelerate application delivery with advanced caching, compression, and optimization techniques that reduce latency and improve user experience globally.",
        buttons: [
          { text: "Accelerate Applications", href: productUrl, variant: "primary" as const },
          { text: "Optimization guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Application Delivery Features",
          items: [
            "Content caching",
            "Dynamic compression",
            "Image optimization",
            "Minification",
            "Connection pooling",
            "Keep-alive optimization",
            "Global load balancing",
            "Edge delivery"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Application Delivery Console",
          description: "Application performance and delivery optimization management"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "High-performance load balancing with intelligent algorithms",
      description: "Distribute traffic efficiently across multiple servers with advanced algorithms, health monitoring, and automatic failover for maximum application availability.",
      link: {
        text: "Learn about load balancing",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Advanced SSL termination and certificate management",
      description: "Offload SSL processing with high-performance termination, automated certificate management, and support for modern encryption standards and protocols."
    },
    {
      number: "03",
      title: "Intelligent traffic shaping and optimization", 
      description: "Optimize application performance with intelligent traffic shaping, bandwidth management, and quality of service controls for critical business applications."
    },
    {
      number: "04",
      title: "Comprehensive application acceleration and delivery",
      description: "Accelerate application delivery with advanced caching, compression, and optimization techniques that reduce latency and improve global user experience."
    }
  ];

  const customerReference = {
    title: "Application Performance Transformation",
    company: "E-commerce platform improves response time by 70% with intelligent delivery",
    description: "A leading e-commerce platform transformed their application delivery using AppDelivery, achieving significant performance improvements while reducing infrastructure costs and improving customer satisfaction.",
    image: "/app-delivery.svg",
    linkText: "Read the performance transformation story",
    linkHref: docsUrl
  };

  const customerLogos = [
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
      name: "F5 Networks",
      image: "https://logo.clearbit.com/f5.com",
      href: docsUrl, 
      alt: "F5 Networks logo"
    },
    {
      name: "Citrix",
      image: "https://logo.clearbit.com/citrix.com",
      href: docsUrl,
      alt: "Citrix logo"
    },
    {
      name: "Cloudflare", 
      image: "https://logo.clearbit.com/cloudflare.com",
      href: docsUrl,
      alt: "Cloudflare logo"
    },
    {
      name: "AWS ELB",
      image: "https://logo.clearbit.com/aws.amazon.com",
      href: docsUrl,
      alt: "AWS ELB logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in AppDelivery",
      content: {
        title: "Latest application delivery features",
        description: "Stay updated with the newest capabilities in load balancing, SSL termination, and application acceleration for modern high-performance applications.",
        image: "/app-delivery.svg",
        links: [
          { text: "New load balancing features", href: docsUrl },
          { text: "SSL termination updates", href: docsUrl },
          { text: "Traffic optimization improvements", href: docsUrl },
          { text: "Performance enhancements", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare ADC solutions",
      content: {
        title: "Why choose AppDelivery",
        description: "Compare our application delivery controller capabilities with other solutions and see why enterprises choose us for load balancing and application acceleration.",
        image: "/app-delivery.svg",
        links: [
          { text: "ADC solution comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Deployment guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master AppDelivery",
      content: {
        title: "Learn application delivery best practices",
        description: "Master application delivery optimization with comprehensive guides, best practices, and training materials for DevOps teams and infrastructure engineers.",
        image: "/app-delivery.svg",
        links: [
          { text: "Application delivery guide", href: docsUrl },
          { text: "Load balancing best practices", href: docsUrl },
          { text: "Performance optimization strategies", href: docsUrl },
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
      title: "Contact support",
      href: productUrl,
      icon: "contact"
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="sr-only">AppDelivery | Load Balancing & Application Delivery Controller</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="AppDelivery"
          description="High-performance application delivery controller for load balancing, SSL termination, and traffic shaping. Optimize application performance with intelligent traffic management, advanced caching, and comprehensive delivery acceleration for enterprise applications."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Application Delivery Console",
            description: "Load balancing and application performance optimization"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="AppDelivery" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose AppDelivery?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Application delivery success stories"
          description="Learn why DevOps teams and infrastructure engineers choose AppDelivery for high-performance load balancing and application acceleration."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Application Performance Guide"
          description="We've compiled application delivery strategies, load balancing techniques, and performance optimization best practices for modern high-availability applications."
          image="/app-delivery.svg"
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
