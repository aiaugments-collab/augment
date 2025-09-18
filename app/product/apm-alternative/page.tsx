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

export default function APMAlternativePage() {
  const { productUrl, docsUrl } = getAppUrls("apm-alternative");
  
  const ctaButtons = [
    {
      text: "Start Monitoring",
      href: productUrl,
      variant: "primary" as const
    },
    {
      text: "View Traces",
      href: docsUrl,
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "distributed-tracing",
      image: "/appmetrics.svg",
      title: "Advanced Distributed Tracing",
      description: "Comprehensive distributed tracing with request flow visualization, service dependency mapping, and performance bottleneck identification for microservices architectures.",
      ctaText: "Enable distributed tracing",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "apm-insights",
      image: "/appmetrics.svg",
      title: "Application Performance Insights",
      description: "Deep application performance monitoring with code-level visibility, database query analysis, and real-time performance metrics for optimization insights.",
      ctaText: "Monitor application performance",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "low-overhead-monitoring",
      image: "/appmetrics.svg",
      title: "Low-Overhead Performance Monitoring",
      description: "Lightweight monitoring solution with minimal performance impact, efficient data collection, and optimized instrumentation for production environments.",
      ctaText: "Deploy low-overhead monitoring",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "microservices-observability",
      image: "/appmetrics.svg",
      title: "Microservices Observability Platform",
      description: "Purpose-built for microservices with service mesh integration, container-aware monitoring, and cloud-native observability for modern architectures.",
      ctaText: "Monitor microservices",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "application-monitoring",
      title: "Application Monitoring",
      content: {
        title: "Comprehensive application performance monitoring platform",
        description: "Advanced APM capabilities with real-time performance monitoring, code-level visibility, and application health tracking for optimal application performance.",
        buttons: [
          { text: "Monitor Applications", href: productUrl, variant: "primary" as const },
          { text: "APM setup guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Application Monitoring Features",
          items: [
            "Real-time performance metrics",
            "Code-level visibility",
            "Error tracking",
            "Performance baselines",
            "Application topology",
            "Custom dashboards",
            "Alert management",
            "Performance optimization"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Application Performance Console",
          description: "Comprehensive application monitoring and performance analysis"
        }
      }
    },
    {
      id: "tracing-analysis",
      title: "Tracing Analysis",
      content: {
        title: "Advanced distributed tracing and request flow analysis",
        description: "Sophisticated distributed tracing with request flow visualization, service dependency mapping, and performance bottleneck identification for complex microservices.",
        buttons: [
          { text: "Analyze Traces", href: productUrl, variant: "primary" as const },
          { text: "Tracing best practices", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Tracing Analysis Features",
          items: [
            "Distributed tracing",
            "Request flow visualization",
            "Service dependency mapping",
            "Latency analysis",
            "Error correlation",
            "Trace sampling",
            "Performance profiling",
            "Root cause analysis"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Distributed Tracing Console",
          description: "Request flow analysis and service dependency visualization"
        }
      }
    },
    {
      id: "microservices-monitoring",
      title: "Microservices Monitoring",
      content: {
        title: "Specialized microservices and container monitoring platform",
        description: "Purpose-built monitoring for microservices with service mesh integration, container-aware monitoring, and cloud-native observability for modern architectures.",
        buttons: [
          { text: "Monitor Microservices", href: productUrl, variant: "primary" as const },
          { text: "Microservices monitoring guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Microservices Monitoring Features",
          items: [
            "Service mesh integration",
            "Container monitoring",
            "Kubernetes visibility",
            "Service communication",
            "Load balancing metrics",
            "Circuit breaker monitoring",
            "API gateway tracking",
            "Cloud-native observability"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Microservices Monitoring Interface",
          description: "Service mesh and container monitoring management"
        }
      }
    },
    {
      id: "performance-optimization",
      title: "Performance Optimization",
      content: {
        title: "Intelligent performance optimization and insights platform",
        description: "Advanced performance optimization with automated recommendations, resource utilization analysis, and performance tuning insights for application efficiency.",
        buttons: [
          { text: "Optimize Performance", href: productUrl, variant: "primary" as const },
          { text: "Optimization strategies", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Performance Optimization Features",
          items: [
            "Automated recommendations",
            "Resource utilization analysis",
            "Performance tuning",
            "Capacity planning",
            "Bottleneck identification",
            "Optimization suggestions",
            "Performance trends",
            "Efficiency metrics"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Performance Optimization Center",
          description: "Application performance tuning and optimization insights"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Advanced distributed tracing with low-overhead monitoring",
      description: "Comprehensive distributed tracing with request flow visualization and service dependency mapping while maintaining minimal performance impact on production systems.",
      link: {
        text: "Learn about distributed tracing",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Deep application performance insights with code-level visibility",
      description: "Advanced APM capabilities with real-time performance monitoring, code-level visibility, and application health tracking for comprehensive performance optimization."
    },
    {
      number: "03",
      title: "Purpose-built for microservices and cloud-native environments", 
      description: "Specialized monitoring for microservices architectures with service mesh integration, container-aware monitoring, and cloud-native observability features."
    },
    {
      number: "04",
      title: "Intelligent performance optimization with automated insights",
      description: "Advanced performance optimization with automated recommendations, resource utilization analysis, and performance tuning insights for application efficiency."
    }
  ];

  const customerReference = {
    title: "Application Performance Transformation",
    company: "Development team reduces application latency by 70% with intelligent APM insights",
    description: "A fast-growing SaaS company transformed their application performance using AppMetrics, achieving significant latency improvements while gaining deep visibility into their microservices architecture.",
    image: "/appmetrics.svg",
    linkText: "Read the performance transformation story",
    linkHref: docsUrl
  };

  const customerLogos = [
    {
      name: "OpenTelemetry",
      image: "https://logo.clearbit.com/opentelemetry.io",
      href: docsUrl,
      alt: "OpenTelemetry logo"
    },
    {
      name: "Jaeger",
      image: "https://logo.clearbit.com/jaegertracing.io",
      href: docsUrl,
      alt: "Jaeger logo"
    },
    {
      name: "Zipkin",
      image: "https://logo.clearbit.com/zipkin.io",
      href: docsUrl, 
      alt: "Zipkin logo"
    },
    {
      name: "New Relic",
      image: "https://logo.clearbit.com/newrelic.com",
      href: docsUrl,
      alt: "New Relic logo"
    },
    {
      name: "Datadog APM", 
      image: "https://logo.clearbit.com/datadoghq.com",
      href: docsUrl,
      alt: "Datadog APM logo"
    },
    {
      name: "AppDynamics",
      image: "https://logo.clearbit.com/appdynamics.com",
      href: docsUrl,
      alt: "AppDynamics logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in AppMetrics",
      content: {
        title: "Latest APM and monitoring features",
        description: "Stay updated with the newest capabilities in application performance monitoring, distributed tracing, and microservices observability for modern application architectures.",
        image: "/appmetrics.svg",
        links: [
          { text: "New APM features", href: docsUrl },
          { text: "Tracing improvements", href: docsUrl },
          { text: "Monitoring enhancements", href: docsUrl },
          { text: "Performance optimization", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare APM solutions",
      content: {
        title: "Why choose AppMetrics",
        description: "Compare our application performance monitoring capabilities with other solutions and see why development teams choose us for comprehensive APM and observability.",
        image: "/appmetrics.svg",
        links: [
          { text: "APM solution comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master AppMetrics",
      content: {
        title: "Learn APM and observability best practices",
        description: "Master application performance monitoring with comprehensive guides, observability strategies, and training materials for developers and SRE teams.",
        image: "/appmetrics.svg",
        links: [
          { text: "APM deployment guide", href: docsUrl },
          { text: "Distributed tracing best practices", href: docsUrl },
          { text: "Performance optimization strategies", href: docsUrl },
          { text: "Troubleshooting guide", href: docsUrl }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Start monitoring",
      href: productUrl,
      icon: "demo"
    },
    {
      title: "View traces",
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
        <h1 className="sr-only">AppMetrics | Application Performance Monitoring Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="AppMetrics"
          description="Distributed tracing and APM-style insights with low overhead for microservices environments with advanced performance monitoring. Application performance monitoring platform with intelligent observability and cloud-native optimization capabilities."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Application Performance Console",
            description: "Advanced APM and distributed tracing management"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="AppMetrics" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose AppMetrics?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Application performance success stories"
          description="Learn why development teams and SRE professionals choose AppMetrics for comprehensive application performance monitoring and microservices observability."
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
          description="We've compiled APM strategies, distributed tracing techniques, and performance optimization best practices for modern application architectures and microservices environments."
          image="/appmetrics.svg"
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
