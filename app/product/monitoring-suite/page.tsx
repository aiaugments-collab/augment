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

export default function MonitoringSuitePage() {
  const { productUrl, docsUrl } = getAppUrls("monitoring-suite");
  
  const ctaButtons = [
    {
      text: "Deploy Monitoring",
      href: productUrl,
      variant: "primary" as const
    },
    {
      text: "View Dashboards",
      href: docsUrl,
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "full-observability",
      image: "/monitor360.svg",
      title: "Complete Observability Stack",
      description: "Comprehensive observability platform with metrics, logs, traces, and events in a unified interface for complete system visibility and performance monitoring.",
      ctaText: "Deploy full observability",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "advanced-dashboards",
      image: "/monitor360.svg",
      title: "Advanced Dashboard Platform",
      description: "Rich dashboard platform with interactive visualizations, custom widgets, and templated dashboards for rapid deployment and comprehensive monitoring insights.",
      ctaText: "Create custom dashboards",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "intelligent-alerting",
      image: "/monitor360.svg",
      title: "Intelligent Alerting System",
      description: "Sophisticated alerting system with machine learning-powered anomaly detection, smart routing, and escalation policies for proactive incident management.",
      ctaText: "Configure intelligent alerts",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "quick-onboarding",
      image: "/monitor360.svg",
      title: "Templated Quick Onboarding",
      description: "Rapid deployment with pre-configured templates, automated discovery, and guided setup for quick onboarding and immediate monitoring capabilities.",
      ctaText: "Quick start monitoring",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "observability-stack",
      title: "Observability Stack",
      content: {
        title: "Comprehensive observability platform with unified monitoring",
        description: "Complete observability stack with metrics, logs, traces, and events in a unified interface for comprehensive system visibility and performance monitoring.",
        buttons: [
          { text: "Deploy Full Observability", href: productUrl, variant: "primary" as const },
          { text: "Observability best practices", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Observability Stack Features",
          items: [
            "Metrics collection",
            "Log aggregation", 
            "Distributed tracing",
            "Event monitoring",
            "Unified interface",
            "Real-time analytics",
            "Historical analysis",
            "Performance insights"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Observability Console",
          description: "Complete system observability and performance monitoring"
        }
      }
    },
    {
      id: "dashboard-platform",
      title: "Dashboard Platform",
      content: {
        title: "Advanced dashboard platform with interactive visualizations",
        description: "Rich dashboard platform with interactive visualizations, custom widgets, and templated dashboards for comprehensive monitoring insights and data analysis.",
        buttons: [
          { text: "Create Custom Dashboards", href: productUrl, variant: "primary" as const },
          { text: "Dashboard design guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Dashboard Platform Features",
          items: [
            "Interactive visualizations",
            "Custom widgets",
            "Templated dashboards",
            "Drag-and-drop editor",
            "Real-time updates",
            "Export capabilities",
            "Sharing features",
            "Mobile responsive"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Dashboard Creation Console",
          description: "Interactive dashboard design and visualization platform"
        }
      }
    },
    {
      id: "alerting-system",
      title: "Alerting System",
      content: {
        title: "Intelligent alerting with anomaly detection and smart routing",
        description: "Sophisticated alerting system with machine learning-powered anomaly detection, smart routing, and escalation policies for proactive incident management.",
        buttons: [
          { text: "Configure Intelligent Alerts", href: productUrl, variant: "primary" as const },
          { text: "Alerting strategies guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Alerting System Features",
          items: [
            "Anomaly detection",
            "Smart routing",
            "Escalation policies",
            "Multi-channel notifications",
            "Alert correlation",
            "Incident management",
            "SLA monitoring",
            "Alert fatigue reduction"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Alerting Configuration Interface",
          description: "Intelligent alert management and incident response system"
        }
      }
    },
    {
      id: "quick-onboarding",
      title: "Quick Onboarding",
      content: {
        title: "Templated quick onboarding with automated setup",
        description: "Rapid deployment with pre-configured templates, automated discovery, and guided setup for quick onboarding and immediate monitoring capabilities.",
        buttons: [
          { text: "Quick Start Monitoring", href: productUrl, variant: "primary" as const },
          { text: "Onboarding templates guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Quick Onboarding Features",
          items: [
            "Pre-configured templates",
            "Automated discovery",
            "Guided setup",
            "One-click deployment",
            "Configuration wizards",
            "Best practice defaults",
            "Integration assistance",
            "Training resources"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Quick Onboarding Center",
          description: "Rapid monitoring deployment and configuration assistance"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Complete observability stack with unified interface",
      description: "Comprehensive observability platform with metrics, logs, traces, and events in a unified interface for complete system visibility and advanced performance monitoring.",
      link: {
        text: "Learn about full observability",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Advanced dashboards with interactive visualizations",
      description: "Rich dashboard platform with interactive visualizations, custom widgets, and templated dashboards for comprehensive monitoring insights and rapid deployment capabilities."
    },
    {
      number: "03",
      title: "Intelligent alerting with machine learning anomaly detection", 
      description: "Sophisticated alerting system with ML-powered anomaly detection, smart routing, and escalation policies for proactive incident management and reduced alert fatigue."
    },
    {
      number: "04",
      title: "Templated quick onboarding with automated discovery",
      description: "Rapid deployment with pre-configured templates, automated discovery, and guided setup for quick onboarding and immediate monitoring capabilities across infrastructure."
    }
  ];

  const customerReference = {
    title: "Observability Transformation Success",
    company: "DevOps team reduces MTTR by 70% with comprehensive observability and intelligent alerting",
    description: "A high-growth technology company transformed their monitoring capabilities using Monitor360, achieving dramatic improvements in incident response while reducing operational overhead.",
    image: "/monitor360.svg",
    linkText: "Read the observability story",
    linkHref: docsUrl
  };

  const customerLogos = [
    {
      name: "Grafana",
      image: "https://logo.clearbit.com/grafana.com",
      href: docsUrl,
      alt: "Grafana logo"
    },
    {
      name: "Prometheus",
      image: "https://logo.clearbit.com/prometheus.io",
      href: docsUrl,
      alt: "Prometheus logo"
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
    },
    {
      name: "Elastic", 
      image: "https://logo.clearbit.com/elastic.co",
      href: docsUrl,
      alt: "Elastic logo"
    },
    {
      name: "Splunk",
      image: "https://logo.clearbit.com/splunk.com",
      href: docsUrl,
      alt: "Splunk logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in Monitor360",
      content: {
        title: "Latest observability and monitoring platform features",
        description: "Stay updated with the newest capabilities in observability, dashboard creation, and intelligent alerting for modern monitoring and incident management.",
        image: "/monitor360.svg",
        links: [
          { text: "New observability features", href: docsUrl },
          { text: "Dashboard improvements", href: docsUrl },
          { text: "Alerting enhancements", href: docsUrl },
          { text: "Template updates", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare monitoring solutions",
      content: {
        title: "Why choose Monitor360",
        description: "Compare our observability capabilities with other solutions and see why DevOps teams choose us for comprehensive monitoring and intelligent alerting.",
        image: "/monitor360.svg",
        links: [
          { text: "Monitoring platform comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master Monitor360",
      content: {
        title: "Learn observability and monitoring best practices",
        description: "Master observability with comprehensive guides, monitoring strategies, and training materials for DevOps engineers and site reliability professionals.",
        image: "/monitor360.svg",
        links: [
          { text: "Observability deployment guide", href: docsUrl },
          { text: "Dashboard design best practices", href: docsUrl },
          { text: "Alerting optimization strategies", href: docsUrl },
          { text: "Troubleshooting guide", href: docsUrl }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Deploy monitoring",
      href: productUrl,
      icon: "demo"
    },
    {
      title: "View dashboards",
      href: docsUrl,
      icon: "tour"
    },
    {
      title: "Contact DevOps team",
      href: productUrl,
      icon: "contact"
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="sr-only">Monitor360 | Full Observability & Dashboards Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="Monitor360"
          description="Turnkey observability stack with dashboards, alerting, and templated dashboards for quick onboarding with complete monitoring. Comprehensive observability platform with intelligent alerting and advanced visualization capabilities for modern infrastructure."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Observability Console",
            description: "Complete monitoring and alerting management platform"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="Monitor360" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose Monitor360?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Observability success stories"
          description="Learn why DevOps teams and site reliability engineers choose Monitor360 for comprehensive observability and intelligent monitoring capabilities."
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
          description="We've compiled observability strategies, monitoring best practices, and alerting optimization techniques for modern infrastructure and incident management workflows."
          image="/monitor360.svg"
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
