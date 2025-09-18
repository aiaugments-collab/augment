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

export default function LogInsightPage() {
  const { productUrl, docsUrl } = getAppUrls("log-insight");
  
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
      id: "centralized-logging",
      image: "/log-insight.svg",
      title: "Centralized Log Collection",
      description: "Collect, index, and analyze logs from across your entire infrastructure with enterprise-grade scalability and real-time processing capabilities.",
      ctaText: "Explore log collection",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "advanced-analytics",
      image: "/log-insight.svg",
      title: "Advanced Log Analytics",
      description: "Gain deep insights from your log data with powerful analytics, pattern recognition, and machine learning-powered anomaly detection.",
      ctaText: "Learn about analytics",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "real-time-alerting",
      image: "/log-insight.svg",
      title: "Real-time Alerting & Monitoring",
      description: "Set up intelligent alerts and monitoring with customizable thresholds, automated notifications, and escalation workflows.",
      ctaText: "View alerting features",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "enterprise-reporting",
      image: "/log-insight.svg",
      title: "Enterprise-Grade Reporting",
      description: "Generate comprehensive reports with customizable dashboards, scheduled exports, and compliance-ready audit trails.",
      ctaText: "See reporting capabilities",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "log-collection",
      title: "Log Collection",
      content: {
        title: "Centralized log collection and indexing at scale",
        description: "Collect logs from any source with intelligent parsing, real-time indexing, and enterprise-grade scalability that grows with your infrastructure.",
        buttons: [
          { text: "Start Collecting Logs", href: productUrl, variant: "primary" as const },
          { text: "Integration guides", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Log Collection Features",
          items: [
            "Multi-source log ingestion",
            "Real-time log parsing",
            "Intelligent indexing",
            "Schema auto-detection",
            "Data enrichment",
            "Compression optimization",
            "Retention policies",
            "High availability"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Log Collection Dashboard",
          description: "Centralized log ingestion and processing monitoring"
        }
      }
    },
    {
      id: "analytics-search",
      title: "Analytics & Search",
      content: {
        title: "Powerful analytics and search capabilities",
        description: "Search through massive log datasets with lightning-fast queries, advanced filtering, and machine learning-powered insights for proactive monitoring.",
        buttons: [
          { text: "Explore Analytics", href: productUrl, variant: "primary" as const },
          { text: "Query examples", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Analytics & Search Features",
          items: [
            "Full-text search",
            "Advanced query language",
            "Pattern recognition",
            "Anomaly detection",
            "Trend analysis",
            "Custom visualizations",
            "Saved searches",
            "Performance optimization"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Log Analytics Interface",
          description: "Advanced search and analytics for log data exploration"
        }
      }
    },
    {
      id: "alerting-monitoring",
      title: "Alerting & Monitoring",
      content: {
        title: "Intelligent alerting and proactive monitoring",
        description: "Set up smart alerts with machine learning-based thresholds, automated escalation, and integration with your existing incident management workflows.",
        buttons: [
          { text: "Configure Alerts", href: productUrl, variant: "primary" as const },
          { text: "Alert templates", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Alerting & Monitoring Features",
          items: [
            "Smart threshold detection",
            "Multi-condition alerts",
            "Escalation workflows",
            "Integration connectors",
            "Alert suppression",
            "Notification channels",
            "SLA monitoring",
            "Incident correlation"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Alert Configuration",
          description: "Intelligent alerting setup and monitoring configuration"
        }
      }
    },
    {
      id: "reporting-compliance",
      title: "Reporting & Compliance",
      content: {
        title: "Comprehensive reporting and compliance management",
        description: "Generate detailed reports with customizable dashboards, automated compliance checks, and audit-ready documentation for regulatory requirements.",
        buttons: [
          { text: "View Reports", href: productUrl, variant: "primary" as const },
          { text: "Compliance guides", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Reporting & Compliance Features",
          items: [
            "Custom dashboards",
            "Scheduled reports",
            "Compliance templates",
            "Audit trails",
            "Data retention",
            "Export capabilities",
            "Role-based access",
            "Regulatory alignment"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Reporting Dashboard",
          description: "Comprehensive reporting and compliance monitoring interface"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Enterprise-scale log collection and processing",
      description: "Handle massive log volumes with intelligent parsing, real-time indexing, and enterprise-grade scalability that adapts to your infrastructure growth.",
      link: {
        text: "Learn about scalability",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Advanced analytics with machine learning insights",
      description: "Gain deep insights from log data with powerful analytics, pattern recognition, and ML-powered anomaly detection for proactive monitoring."
    },
    {
      number: "03",
      title: "Real-time alerting and intelligent monitoring", 
      description: "Set up smart alerts with machine learning-based thresholds, automated escalation, and seamless integration with incident management workflows."
    },
    {
      number: "04",
      title: "Comprehensive reporting and compliance support",
      description: "Generate detailed reports with customizable dashboards, automated compliance checks, and audit-ready documentation for regulatory requirements."
    }
  ];

  const customerReference = {
    title: "Log Management Transformation",
    company: "Enterprise reduces MTTR by 60% with centralized logging",
    description: "A leading technology company transformed their log management operations using LogInsight, achieving significant reduction in mean time to resolution while improving system visibility and compliance posture.",
    image: "/log-insight.svg",
    linkText: "Read the log management success story",
    linkHref: docsUrl
  };

  const customerLogos = [
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
      name: "Logstash",
      image: "https://logo.clearbit.com/elastic.co",
      href: docsUrl, 
      alt: "Logstash logo"
    },
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
      name: "Splunk",
      image: "https://logo.clearbit.com/splunk.com",
      href: docsUrl,
      alt: "Splunk logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in LogInsight",
      content: {
        title: "Latest logging and analytics features",
        description: "Stay updated with the newest capabilities in centralized logging, advanced analytics, and enterprise-grade reporting for modern infrastructure monitoring.",
        image: "/log-insight.svg",
        links: [
          { text: "New analytics features", href: docsUrl },
          { text: "Collection improvements", href: docsUrl },
          { text: "Alerting enhancements", href: docsUrl },
          { text: "Performance updates", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare logging solutions",
      content: {
        title: "Why choose LogInsight",
        description: "Compare our centralized logging capabilities with other solutions and see why enterprises choose us for log analytics and enterprise reporting.",
        image: "/log-insight.svg",
        links: [
          { text: "Logging solution comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Deployment guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master LogInsight",
      content: {
        title: "Learn log management best practices",
        description: "Master centralized logging with comprehensive guides, best practices, and training materials for DevOps teams and system administrators.",
        image: "/log-insight.svg",
        links: [
          { text: "Log management guide", href: docsUrl },
          { text: "Analytics best practices", href: docsUrl },
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
        <h1 className="sr-only">LogInsight | Centralized Logging & Analytics Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="LogInsight"
          description="Centralized logging and analytics platform that collects, indexes, and analyzes logs at enterprise scale. Gain deep insights with advanced analytics, real-time alerting, and comprehensive reporting for modern infrastructure monitoring."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Log Analytics Dashboard",
            description: "Centralized log collection, analysis, and monitoring interface"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="LogInsight" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose LogInsight?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Log management success stories"
          description="Learn why DevOps teams and system administrators choose LogInsight for centralized logging and advanced analytics capabilities."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Log Management Guide"
          description="We've compiled logging strategies, analytics techniques, and monitoring best practices for modern infrastructure and application observability."
          image="/log-insight.svg"
          buttonText="Get the logging guide"
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
