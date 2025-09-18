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

export default function MonitorQuickstartPage() {
  const { productUrl, docsUrl } = getAppUrls("monitoring-quickstart");
  
  const ctaButtons = [
    {
      text: "Deploy Stack",
      href: productUrl,
      variant: "primary" as const
    },
    {
      text: "View Templates",
      href: docsUrl,
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "one-click-deployment",
      image: "/monitor-quickstart.svg",
      title: "One-Click Monitoring Stack",
      description: "Deploy complete observability stacks with Prometheus, Grafana, and alerting in minutes with pre-configured templates and best practices.",
      ctaText: "Deploy monitoring stack",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "prebuilt-templates",
      image: "/monitor-quickstart.svg",
      title: "Pre-built Monitoring Templates",
      description: "Curated collection of monitoring templates for different architectures, applications, and infrastructure with battle-tested configurations.",
      ctaText: "Browse templates",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "log-ingestion",
      image: "/monitor-quickstart.svg",
      title: "Automated Log Ingestion",
      description: "Seamless log collection and aggregation with automatic parsing, indexing, and correlation for comprehensive observability insights.",
      ctaText: "Setup log ingestion",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "quick-observability",
      image: "/monitor-quickstart.svg",
      title: "Instant Observability Setup",
      description: "Get from zero to full observability in minutes with automated dashboards, alerts, and monitoring for your infrastructure and applications.",
      ctaText: "Quick setup guide",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "prometheus-stack",
      title: "Prometheus Stack",
      content: {
        title: "Complete Prometheus monitoring deployment",
        description: "Deploy Prometheus with Grafana, AlertManager, and Node Exporter in a single command with pre-configured dashboards and alerting rules for comprehensive monitoring.",
        buttons: [
          { text: "Deploy Prometheus", href: productUrl, variant: "primary" as const },
          { text: "Prometheus templates", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Prometheus Stack Features",
          items: [
            "Prometheus server",
            "Grafana dashboards",
            "AlertManager",
            "Node Exporter",
            "Service discovery",
            "Recording rules",
            "Alert routing",
            "High availability"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Prometheus Monitoring Dashboard",
          description: "Complete Prometheus stack deployment and management interface"
        }
      }
    },
    {
      id: "grafana-dashboards",
      title: "Grafana Dashboards",
      content: {
        title: "Pre-built Grafana dashboards and visualizations",
        description: "Comprehensive collection of Grafana dashboards for infrastructure, applications, and services with customizable templates and real-time monitoring capabilities.",
        buttons: [
          { text: "Browse Dashboards", href: productUrl, variant: "primary" as const },
          { text: "Dashboard library", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Grafana Dashboard Features",
          items: [
            "Infrastructure monitoring",
            "Application metrics",
            "Database dashboards",
            "Network monitoring",
            "Custom panels",
            "Alert integration",
            "Template variables",
            "Export/import"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Dashboard Management Console",
          description: "Grafana dashboard deployment and customization interface"
        }
      }
    },
    {
      id: "log-aggregation",
      title: "Log Aggregation",
      content: {
        title: "Centralized log collection and analysis platform",
        description: "Automated log ingestion from multiple sources with parsing, indexing, and correlation capabilities for comprehensive log management and analysis.",
        buttons: [
          { text: "Setup Log Collection", href: productUrl, variant: "primary" as const },
          { text: "Log configuration guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Log Aggregation Features",
          items: [
            "Multi-source ingestion",
            "Automatic parsing",
            "Log indexing",
            "Search & filtering",
            "Log correlation",
            "Retention policies",
            "Log forwarding",
            "Performance optimization"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Log Management Interface",
          description: "Centralized log collection and analysis configuration"
        }
      }
    },
    {
      id: "alerting-setup",
      title: "Alerting & Notification",
      content: {
        title: "Comprehensive alerting and notification system",
        description: "Intelligent alerting with threshold-based and anomaly detection rules, notification routing, and escalation policies for proactive monitoring and incident response.",
        buttons: [
          { text: "Configure Alerts", href: productUrl, variant: "primary" as const },
          { text: "Alerting best practices", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Alerting & Notification Features",
          items: [
            "Threshold alerts",
            "Anomaly detection",
            "Alert routing",
            "Escalation policies",
            "Notification channels",
            "Alert correlation",
            "Silence management",
            "Performance tuning"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Alerting Management Center",
          description: "Intelligent alerting and notification configuration interface"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "One-click deployment of complete monitoring stacks",
      description: "Deploy Prometheus, Grafana, and log ingestion with pre-configured templates and best practices in minutes, eliminating complex setup and configuration overhead.",
      link: {
        text: "Deploy monitoring stack now",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Pre-built templates for every architecture",
      description: "Curated collection of monitoring templates for microservices, Kubernetes, traditional infrastructure, and cloud-native applications with battle-tested configurations."
    },
    {
      number: "03",
      title: "Automated log ingestion and correlation", 
      description: "Seamless log collection from multiple sources with automatic parsing, indexing, and correlation for comprehensive observability without manual configuration."
    },
    {
      number: "04",
      title: "Instant observability with intelligent alerting",
      description: "Get complete observability setup instantly with automated dashboards, intelligent alerting rules, and notification routing for proactive monitoring and incident response."
    }
  ];

  const customerReference = {
    title: "Monitoring Implementation Success",
    company: "Startup achieves full observability in 30 minutes with template deployment",
    description: "A growing startup implemented comprehensive monitoring across their microservices architecture using Monitor Quickstart, reducing setup time from weeks to minutes while achieving enterprise-grade observability.",
    image: "/monitor-quickstart.svg",
    linkText: "Read the monitoring transformation story",
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
      name: "AlertManager",
      image: "https://logo.clearbit.com/prometheus.io",
      href: docsUrl, 
      alt: "AlertManager logo"
    },
    {
      name: "Elasticsearch",
      image: "https://logo.clearbit.com/elastic.co",
      href: docsUrl,
      alt: "Elasticsearch logo"
    },
    {
      name: "Kibana", 
      image: "https://logo.clearbit.com/elastic.co",
      href: docsUrl,
      alt: "Kibana logo"
    },
    {
      name: "Fluentd",
      image: "https://logo.clearbit.com/fluentd.org",
      href: docsUrl,
      alt: "Fluentd logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in Monitor Quickstart",
      content: {
        title: "Latest monitoring template features",
        description: "Stay updated with the newest monitoring templates, stack deployments, and observability features for modern infrastructure and application monitoring.",
        image: "/monitor-quickstart.svg",
        links: [
          { text: "New monitoring templates", href: docsUrl },
          { text: "Stack deployment improvements", href: docsUrl },
          { text: "Dashboard enhancements", href: docsUrl },
          { text: "Alerting updates", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare monitoring solutions",
      content: {
        title: "Why choose Monitor Quickstart",
        description: "Compare our monitoring stack templates with other solutions and see why DevOps teams choose us for rapid observability deployment and configuration management.",
        image: "/monitor-quickstart.svg",
        links: [
          { text: "Monitoring solution comparison", href: docsUrl },
          { text: "Template comparison matrix", href: docsUrl },
          { text: "Deployment guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master Monitor Quickstart",
      content: {
        title: "Learn monitoring deployment best practices",
        description: "Master observability deployment with comprehensive guides, best practices, and training materials for DevOps engineers and site reliability teams.",
        image: "/monitor-quickstart.svg",
        links: [
          { text: "Monitoring deployment guide", href: docsUrl },
          { text: "Template customization best practices", href: docsUrl },
          { text: "Alerting configuration strategies", href: docsUrl },
          { text: "Troubleshooting guide", href: docsUrl }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Deploy monitoring stack",
      href: productUrl,
      icon: "demo"
    },
    {
      title: "Browse templates",
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
        <h1 className="sr-only">Monitor Quickstart | Prebuilt Monitoring Stack Templates Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="Monitor Quickstart"
          description="One-click deployment templates for Prometheus, Grafana, and log ingestion for quick observability setup. Pre-built monitoring stack templates with automated deployment, dashboards, and alerting for instant infrastructure and application monitoring."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Monitoring Stack Console",
            description: "Pre-built monitoring template deployment and management"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="Monitor Quickstart" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose Monitor Quickstart?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Monitoring deployment success stories"
          description="Learn why DevOps engineers and SRE teams choose Monitor Quickstart for rapid observability deployment and comprehensive monitoring stack management."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Observability Deployment Guide"
          description="We've compiled monitoring deployment strategies, template optimization techniques, and observability best practices for modern infrastructure and application monitoring setups."
          image="/monitor-quickstart.svg"
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
