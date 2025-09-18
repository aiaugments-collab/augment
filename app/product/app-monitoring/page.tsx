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

export default function AppMonitoringPage() {
  const { productUrl, docsUrl } = getAppUrls("app-monitoring");
  
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
      id: "application-monitoring",
      image: "/app-monitoring.svg",
      title: "Application-Level Monitoring Platform",
      description: "Comprehensive application monitoring with real-time performance tracking, error detection, and service health monitoring for service owners and development teams.",
      ctaText: "Monitor applications",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "error-tracking",
      image: "/app-monitoring.svg",
      title: "Advanced Error Tracking & Analysis",
      description: "Intelligent error tracking with automated error grouping, stack trace analysis, and performance impact assessment for rapid issue resolution.",
      ctaText: "Track application errors",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "performance-traces",
      image: "/app-monitoring.svg",
      title: "Performance Traces & Insights",
      description: "Detailed performance tracing with request flow analysis, bottleneck identification, and optimization recommendations for enhanced application performance.",
      ctaText: "Analyze performance traces",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "service-ownership",
      image: "/app-monitoring.svg",
      title: "Service Owner Dashboard",
      description: "Dedicated service owner interface with customizable dashboards, team-specific alerts, and service health indicators for effective service management.",
      ctaText: "Manage service health",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "app-performance",
      title: "App Performance",
      content: {
        title: "Comprehensive application performance monitoring platform",
        description: "Advanced application monitoring with real-time performance tracking, service health monitoring, and automated alerting for optimal application reliability.",
        buttons: [
          { text: "Monitor Application Performance", href: productUrl, variant: "primary" as const },
          { text: "Performance monitoring guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "App Performance Features",
          items: [
            "Real-time performance tracking",
            "Service health monitoring",
            "Response time analysis",
            "Throughput metrics",
            "Resource utilization",
            "Dependency monitoring",
            "Custom dashboards",
            "Automated alerting"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Application Performance Console",
          description: "Service-level performance monitoring and health management"
        }
      }
    },
    {
      id: "error-management",
      title: "Error Management",
      content: {
        title: "Intelligent error tracking and management platform",
        description: "Advanced error tracking with automated grouping, stack trace analysis, impact assessment, and resolution tracking for efficient error management.",
        buttons: [
          { text: "Track Application Errors", href: productUrl, variant: "primary" as const },
          { text: "Error management best practices", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Error Management Features",
          items: [
            "Automated error grouping",
            "Stack trace analysis",
            "Error rate tracking",
            "Impact assessment",
            "Resolution tracking",
            "Error notifications",
            "Trend analysis",
            "Custom error rules"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Error Management Console",
          description: "Application error tracking and resolution management"
        }
      }
    },
    {
      id: "trace-analysis",
      title: "Trace Analysis",
      content: {
        title: "Detailed performance tracing and analysis platform",
        description: "Comprehensive performance tracing with request flow analysis, bottleneck identification, and optimization insights for enhanced application performance.",
        buttons: [
          { text: "Analyze Performance Traces", href: productUrl, variant: "primary" as const },
          { text: "Trace analysis guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Trace Analysis Features",
          items: [
            "Request flow tracing",
            "Bottleneck identification",
            "Latency analysis",
            "Database query tracking",
            "External service calls",
            "Performance optimization",
            "Trace visualization",
            "Custom instrumentation"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Trace Analysis Interface",
          description: "Performance trace analysis and optimization insights"
        }
      }
    },
    {
      id: "service-ownership",
      title: "Service Ownership",
      content: {
        title: "Service owner dashboard and team management platform",
        description: "Dedicated service ownership interface with team-specific dashboards, customizable alerts, and service health indicators for effective service management.",
        buttons: [
          { text: "Manage Service Health", href: productUrl, variant: "primary" as const },
          { text: "Service ownership guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Service Ownership Features",
          items: [
            "Team-specific dashboards",
            "Service health indicators",
            "Customizable alerts",
            "On-call integration",
            "Service documentation",
            "Performance SLIs/SLOs",
            "Incident management",
            "Service dependencies"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Service Ownership Center",
          description: "Service owner dashboard and team management interface"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Application-level monitoring with service owner focus",
      description: "Comprehensive application monitoring designed for service owners with real-time performance tracking, error detection, and team-specific dashboards for effective service management.",
      link: {
        text: "Learn about application monitoring",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Advanced error tracking with intelligent analysis",
      description: "Sophisticated error tracking with automated grouping, stack trace analysis, and performance impact assessment for rapid issue identification and resolution."
    },
    {
      number: "03",
      title: "Detailed performance traces with optimization insights", 
      description: "Comprehensive performance tracing with request flow analysis, bottleneck identification, and optimization recommendations for enhanced application performance and reliability."
    },
    {
      number: "04",
      title: "Service owner dashboards with team-specific alerting",
      description: "Dedicated service ownership interface with customizable dashboards, team-specific alerts, and service health indicators for effective service management and operations."
    }
  ];

  const customerReference = {
    title: "Application Monitoring Success",
    company: "Development team reduces MTTR by 60% with service-focused monitoring",
    description: "A software development team transformed their application monitoring using AppMonitor, achieving faster issue resolution while improving service reliability and team productivity.",
    image: "/app-monitoring.svg",
    linkText: "Read the application monitoring story",
    linkHref: docsUrl
  };

  const customerLogos = [
    {
      name: "Jaeger",
      image: "https://logo.clearbit.com/jaegertracing.io",
      href: docsUrl,
      alt: "Jaeger logo"
    },
    {
      name: "Sentry",
      image: "https://logo.clearbit.com/sentry.io",
      href: docsUrl,
      alt: "Sentry logo"
    },
    {
      name: "Bugsnag",
      image: "https://logo.clearbit.com/bugsnag.com",
      href: docsUrl, 
      alt: "Bugsnag logo"
    },
    {
      name: "Rollbar",
      image: "https://logo.clearbit.com/rollbar.com",
      href: docsUrl,
      alt: "Rollbar logo"
    },
    {
      name: "Honeybadger", 
      image: "https://logo.clearbit.com/honeybadger.io",
      href: docsUrl,
      alt: "Honeybadger logo"
    },
    {
      name: "PagerDuty",
      image: "https://logo.clearbit.com/pagerduty.com",
      href: docsUrl,
      alt: "PagerDuty logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in AppMonitor",
      content: {
        title: "Latest application monitoring and error tracking features",
        description: "Stay updated with the newest capabilities in application monitoring, error tracking, and performance tracing for modern application development and operations.",
        image: "/app-monitoring.svg",
        links: [
          { text: "New monitoring features", href: docsUrl },
          { text: "Error tracking improvements", href: docsUrl },
          { text: "Trace analysis updates", href: docsUrl },
          { text: "Service ownership enhancements", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare application monitoring solutions",
      content: {
        title: "Why choose AppMonitor",
        description: "Compare our application monitoring capabilities with other solutions and see why development teams choose us for comprehensive service-level monitoring and error tracking.",
        image: "/app-monitoring.svg",
        links: [
          { text: "Application monitoring comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master AppMonitor",
      content: {
        title: "Learn application monitoring best practices",
        description: "Master application monitoring with comprehensive guides, error tracking strategies, and training materials for developers and service owners.",
        image: "/app-monitoring.svg",
        links: [
          { text: "Application monitoring deployment guide", href: docsUrl },
          { text: "Error tracking best practices", href: docsUrl },
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
      title: "Contact development team",
      href: productUrl,
      icon: "contact"
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="sr-only">AppMonitor | App-Level Monitoring & Traces Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="AppMonitor"
          description="Application-level monitoring, errors, and performance traces for service owners with comprehensive error tracking. Service-focused monitoring platform with real-time performance insights and intelligent error management for development teams."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Application Monitoring Console",
            description: "Service-level monitoring and error tracking management"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="AppMonitor" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose AppMonitor?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Application monitoring success stories"
          description="Learn why developers and service owners choose AppMonitor for comprehensive application monitoring and advanced error tracking capabilities."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Application Monitoring Guide"
          description="We've compiled application monitoring strategies, error tracking techniques, and performance optimization best practices for modern application development and service ownership."
          image="/app-monitoring.svg"
          buttonText="Get the monitoring guide"
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
