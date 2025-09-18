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

export default function ObservabilitySuitePage() {
  const { productUrl, docsUrl } = getAppUrls("observability-suite");
  
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
      id: "full-stack-monitoring",
      image: "/observability-suite.svg",
      title: "Full-Stack Observability",
      description: "Complete visibility across your entire infrastructure with metrics, traces, and logs unified in a single platform for comprehensive monitoring.",
      ctaText: "Explore full-stack monitoring",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "distributed-tracing",
      image: "/observability-suite.svg",
      title: "Advanced Distributed Tracing",
      description: "Track requests across microservices with detailed distributed tracing, performance analysis, and bottleneck identification for complex systems.",
      ctaText: "Learn about tracing",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "intelligent-alerting",
      image: "/observability-suite.svg",
      title: "Intelligent Alerting System",
      description: "Smart alerting with machine learning-based anomaly detection, customizable thresholds, and automated escalation workflows for proactive monitoring.",
      ctaText: "View alerting features",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "cloud-native",
      image: "/observability-suite.svg",
      title: "Cloud-Native Architecture",
      description: "Built for modern cloud environments with Kubernetes integration, auto-discovery, and scalable architecture for enterprise-grade observability.",
      ctaText: "See cloud features",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "metrics-monitoring",
      title: "Metrics & Monitoring",
      content: {
        title: "Comprehensive metrics collection and monitoring",
        description: "Collect, store, and analyze metrics from all your systems with powerful querying, visualization, and alerting capabilities for complete infrastructure visibility.",
        buttons: [
          { text: "Start Monitoring", href: productUrl, variant: "primary" as const },
          { text: "Metrics guides", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Metrics & Monitoring Features",
          items: [
            "Multi-dimensional metrics",
            "Time-series database",
            "Custom dashboards",
            "Real-time visualization",
            "Query language (PromQL)",
            "Service discovery",
            "Data retention policies",
            "High availability setup"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Metrics Monitoring Dashboard",
          description: "Comprehensive metrics collection and visualization interface"
        }
      }
    },
    {
      id: "distributed-tracing",
      title: "Distributed Tracing",
      content: {
        title: "Advanced distributed tracing and performance analysis",
        description: "Track requests across microservices with detailed tracing, performance bottleneck identification, and service dependency mapping for complex distributed systems.",
        buttons: [
          { text: "Setup Tracing", href: productUrl, variant: "primary" as const },
          { text: "Tracing documentation", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Distributed Tracing Features",
          items: [
            "End-to-end request tracing",
            "Service dependency mapping",
            "Performance bottleneck detection",
            "Span analysis",
            "Error tracking",
            "Latency analysis",
            "Custom instrumentation",
            "Sampling strategies"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Distributed Tracing Console",
          description: "Request tracing and performance analysis interface"
        }
      }
    },
    {
      id: "log-aggregation",
      title: "Log Aggregation",
      content: {
        title: "Centralized log aggregation and analysis",
        description: "Collect, parse, and analyze logs from all your applications and infrastructure with powerful search, filtering, and correlation capabilities.",
        buttons: [
          { text: "Aggregate Logs", href: productUrl, variant: "primary" as const },
          { text: "Log management guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Log Aggregation Features",
          items: [
            "Centralized log collection",
            "Structured logging",
            "Log parsing & enrichment",
            "Full-text search",
            "Log correlation",
            "Retention management",
            "Export capabilities",
            "Real-time streaming"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Log Analysis Interface",
          description: "Centralized log aggregation and search capabilities"
        }
      }
    },
    {
      id: "alerting-automation",
      title: "Alerting & Automation",
      content: {
        title: "Intelligent alerting and automated response systems",
        description: "Smart alerting with ML-based anomaly detection, customizable notification channels, and automated response workflows for proactive incident management.",
        buttons: [
          { text: "Configure Alerts", href: productUrl, variant: "primary" as const },
          { text: "Alerting best practices", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Alerting & Automation Features",
          items: [
            "ML-based anomaly detection",
            "Custom alert rules",
            "Multi-channel notifications",
            "Escalation workflows",
            "Alert correlation",
            "Automated remediation",
            "SLA monitoring",
            "Incident management"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Alerting Management Console",
          description: "Intelligent alerting and automated response configuration"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Complete full-stack observability in one platform",
      description: "Unified visibility across metrics, traces, and logs with comprehensive monitoring capabilities designed for modern cloud-native environments and complex distributed systems.",
      link: {
        text: "Learn about full-stack observability",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Advanced distributed tracing and performance insights",
      description: "Track requests across microservices with detailed tracing, performance bottleneck identification, and service dependency mapping for optimal system performance."
    },
    {
      number: "03",
      title: "Intelligent alerting with machine learning capabilities", 
      description: "Smart alerting system with ML-based anomaly detection, customizable thresholds, and automated escalation workflows for proactive incident management."
    },
    {
      number: "04",
      title: "Cloud-native architecture with enterprise scalability",
      description: "Built for modern cloud environments with Kubernetes integration, auto-discovery, and enterprise-grade scalability for comprehensive observability at scale."
    }
  ];

  const customerReference = {
    title: "Observability Transformation",
    company: "Tech company reduces MTTR by 70% with unified observability",
    description: "A leading technology company transformed their monitoring strategy using Observability Suite, achieving dramatic improvements in incident response time while gaining complete visibility across their distributed infrastructure.",
    image: "/observability-suite.svg",
    linkText: "Read the observability transformation story",
    linkHref: docsUrl
  };

  const customerLogos = [
    {
      name: "Prometheus",
      image: "https://logo.clearbit.com/prometheus.io",
      href: docsUrl,
      alt: "Prometheus logo"
    },
    {
      name: "Grafana",
      image: "https://logo.clearbit.com/grafana.com",
      href: docsUrl,
      alt: "Grafana logo"
    },
    {
      name: "Jaeger",
      image: "https://logo.clearbit.com/jaegertracing.io",
      href: docsUrl, 
      alt: "Jaeger logo"
    },
    {
      name: "OpenTelemetry",
      image: "https://logo.clearbit.com/opentelemetry.io",
      href: docsUrl,
      alt: "OpenTelemetry logo"
    },
    {
      name: "Datadog", 
      image: "https://logo.clearbit.com/datadoghq.com",
      href: docsUrl,
      alt: "Datadog logo"
    },
    {
      name: "New Relic",
      image: "https://logo.clearbit.com/newrelic.com",
      href: docsUrl,
      alt: "New Relic logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in Observability Suite",
      content: {
        title: "Latest monitoring and observability features",
        description: "Stay updated with the newest capabilities in full-stack observability, distributed tracing, and intelligent alerting for modern cloud-native environments.",
        image: "/observability-suite.svg",
        links: [
          { text: "New monitoring features", href: docsUrl },
          { text: "Tracing improvements", href: docsUrl },
          { text: "Alerting enhancements", href: docsUrl },
          { text: "Performance updates", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare observability solutions",
      content: {
        title: "Why choose Observability Suite",
        description: "Compare our full-stack observability capabilities with other solutions and see why DevOps teams choose us for comprehensive monitoring and alerting.",
        image: "/observability-suite.svg",
        links: [
          { text: "Observability solution comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master Observability Suite",
      content: {
        title: "Learn observability best practices",
        description: "Master full-stack observability with comprehensive guides, best practices, and training materials for DevOps teams and site reliability engineers.",
        image: "/observability-suite.svg",
        links: [
          { text: "Observability implementation guide", href: docsUrl },
          { text: "Monitoring best practices", href: docsUrl },
          { text: "Alerting strategies", href: docsUrl },
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
        <h1 className="sr-only">Observability Suite | Monitoring, Tracing & Alerting Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="Observability Suite"
          description="Full-stack observability platform with comprehensive metrics, traces, and logs for modern cloud environments. Advanced monitoring, distributed tracing, and intelligent alerting designed for enterprise-scale infrastructure and applications."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Observability Dashboard",
            description: "Full-stack monitoring and observability management interface"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="Observability Suite" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose Observability Suite?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Observability success stories"
          description="Learn why DevOps teams and site reliability engineers choose Observability Suite for comprehensive monitoring and intelligent alerting capabilities."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Observability Guide"
          description="We've compiled monitoring strategies, observability best practices, and alerting techniques for modern cloud-native infrastructure and application performance management."
          image="/observability-suite.svg"
          buttonText="Get the observability guide"
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
