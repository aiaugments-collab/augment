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

export default function NetCoPilotPage() {
  const { productUrl, docsUrl } = getAppUrls("netcopilot");
  
  const ctaButtons = [
    {
      text: "Start Monitoring",
      href: productUrl,
      variant: "primary" as const
    },
    {
      text: "View Topology",
      href: docsUrl,
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "network-topology",
      image: "/netcopilot.svg",
      title: "Intelligent Network Topology Mapping",
      description: "Automated network discovery and visualization with real-time topology mapping, dependency analysis, and interactive network diagrams for comprehensive visibility.",
      ctaText: "Map network topology",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "performance-analytics",
      image: "/netcopilot.svg",
      title: "Advanced Performance Analytics",
      description: "Deep network performance analysis with traffic flow monitoring, bandwidth utilization, and performance bottleneck identification for optimization insights.",
      ctaText: "Analyze performance",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "incident-detection",
      image: "/netcopilot.svg",
      title: "Automated Incident Detection",
      description: "Intelligent anomaly detection with automated incident identification, root cause analysis, and predictive alerting for proactive network management.",
      ctaText: "Setup incident detection",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "cloud-networks",
      image: "/netcopilot.svg",
      title: "Cloud Network Insights",
      description: "Specialized cloud network monitoring with multi-cloud visibility, service mesh insights, and container network analysis for modern architectures.",
      ctaText: "Monitor cloud networks",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "network-discovery",
      title: "Network Discovery",
      content: {
        title: "Automated network discovery and topology visualization",
        description: "Comprehensive network discovery with automated topology mapping, device identification, and real-time visualization for complete network visibility and understanding.",
        buttons: [
          { text: "Discover Network", href: productUrl, variant: "primary" as const },
          { text: "Discovery configuration", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Network Discovery Features",
          items: [
            "Automated discovery",
            "Real-time topology",
            "Device identification",
            "Dependency mapping",
            "Interactive visualization",
            "Layer 2/3 mapping",
            "Service discovery",
            "Asset inventory"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Network Discovery Console",
          description: "Network topology mapping and visualization interface"
        }
      }
    },
    {
      id: "performance-monitoring",
      title: "Performance Monitoring",
      content: {
        title: "Comprehensive network performance monitoring and analytics",
        description: "Advanced performance monitoring with traffic flow analysis, bandwidth utilization tracking, and performance bottleneck identification for network optimization.",
        buttons: [
          { text: "Monitor Performance", href: productUrl, variant: "primary" as const },
          { text: "Performance metrics", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Performance Monitoring Features",
          items: [
            "Traffic flow analysis",
            "Bandwidth monitoring",
            "Latency tracking",
            "Throughput analysis",
            "Quality of Service",
            "Performance baselines",
            "Trend analysis",
            "Capacity planning"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Performance Analytics Dashboard",
          description: "Network performance monitoring and analysis interface"
        }
      }
    },
    {
      id: "incident-management",
      title: "Incident Management",
      content: {
        title: "Intelligent incident detection and automated response",
        description: "Advanced incident management with automated detection, root cause analysis, and intelligent alerting for proactive network issue resolution and management.",
        buttons: [
          { text: "Manage Incidents", href: productUrl, variant: "primary" as const },
          { text: "Incident response guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Incident Management Features",
          items: [
            "Automated detection",
            "Anomaly identification",
            "Root cause analysis",
            "Predictive alerting",
            "Incident correlation",
            "Response automation",
            "Escalation workflows",
            "Recovery tracking"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Incident Management Interface",
          description: "Network incident detection and response management"
        }
      }
    },
    {
      id: "cloud-visibility",
      title: "Cloud Visibility",
      content: {
        title: "Advanced cloud network monitoring and insights",
        description: "Specialized cloud network visibility with multi-cloud monitoring, service mesh insights, and container network analysis for modern cloud-native environments.",
        buttons: [
          { text: "Monitor Cloud Networks", href: productUrl, variant: "primary" as const },
          { text: "Cloud networking guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Cloud Visibility Features",
          items: [
            "Multi-cloud monitoring",
            "Service mesh insights",
            "Container networking",
            "Kubernetes visibility",
            "Microservices tracking",
            "API monitoring",
            "Cloud cost correlation",
            "Security posture"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Cloud Network Insights Center",
          description: "Multi-cloud network monitoring and analysis interface"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Intelligent network topology mapping with real-time visualization",
      description: "Automated network discovery with real-time topology mapping, dependency analysis, and interactive visualization for comprehensive network visibility and understanding.",
      link: {
        text: "Learn about network mapping",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Advanced performance analytics with optimization insights",
      description: "Deep network performance analysis with traffic flow monitoring, bandwidth utilization tracking, and performance bottleneck identification for data-driven optimization."
    },
    {
      number: "03",
      title: "Automated incident detection with predictive analytics", 
      description: "Intelligent incident management with automated detection, root cause analysis, and predictive alerting for proactive network issue resolution and prevention."
    },
    {
      number: "04",
      title: "Specialized cloud network insights for modern architectures",
      description: "Advanced cloud network monitoring with multi-cloud visibility, service mesh insights, and container network analysis for cloud-native environments."
    }
  ];

  const customerReference = {
    title: "Network Visibility Transformation",
    company: "Network operations team reduces incident resolution time by 60% with intelligent monitoring",
    description: "A large enterprise transformed their network operations using NetCoPilot, achieving faster incident resolution while gaining unprecedented visibility into their complex network infrastructure.",
    image: "/netcopilot.svg",
    linkText: "Read the network visibility story",
    linkHref: docsUrl
  };

  const customerLogos = [
    {
      name: "Calico",
      image: "https://logo.clearbit.com/projectcalico.org",
      href: docsUrl,
      alt: "Calico logo"
    },
    {
      name: "SolarWinds",
      image: "https://logo.clearbit.com/solarwinds.com",
      href: docsUrl,
      alt: "SolarWinds logo"
    },
    {
      name: "Nagios",
      image: "https://logo.clearbit.com/nagios.org",
      href: docsUrl, 
      alt: "Nagios logo"
    },
    {
      name: "PRTG",
      image: "https://logo.clearbit.com/paessler.com",
      href: docsUrl,
      alt: "PRTG logo"
    },
    {
      name: "ThousandEyes", 
      image: "https://logo.clearbit.com/thousandeyes.com",
      href: docsUrl,
      alt: "ThousandEyes logo"
    },
    {
      name: "Datadog Network",
      image: "https://logo.clearbit.com/datadoghq.com",
      href: docsUrl,
      alt: "Datadog Network logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in NetCoPilot",
      content: {
        title: "Latest network insights and monitoring features",
        description: "Stay updated with the newest capabilities in network topology mapping, performance analytics, and incident detection for modern network operations.",
        image: "/netcopilot.svg",
        links: [
          { text: "New monitoring features", href: docsUrl },
          { text: "Topology improvements", href: docsUrl },
          { text: "Analytics enhancements", href: docsUrl },
          { text: "Cloud visibility updates", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare network monitoring solutions",
      content: {
        title: "Why choose NetCoPilot",
        description: "Compare our network monitoring capabilities with other solutions and see why network operations teams choose us for comprehensive visibility and analytics.",
        image: "/netcopilot.svg",
        links: [
          { text: "Network monitoring comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master NetCoPilot",
      content: {
        title: "Learn network monitoring best practices",
        description: "Master network operations with comprehensive guides, monitoring strategies, and training materials for network engineers and operations teams.",
        image: "/netcopilot.svg",
        links: [
          { text: "Network monitoring deployment guide", href: docsUrl },
          { text: "Topology mapping best practices", href: docsUrl },
          { text: "Incident response strategies", href: docsUrl },
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
      title: "View topology",
      href: docsUrl,
      icon: "tour"
    },
    {
      title: "Contact network team",
      href: productUrl,
      icon: "contact"
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="sr-only">NetCoPilot | Network Insights & Topology Visualization Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="NetCoPilot"
          description="Network topology mapping, performance analytics, and automated incident detection for cloud networks with intelligent insights. Advanced network monitoring platform with real-time visualization and predictive analytics for modern network operations."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Network Operations Console",
            description: "Network topology mapping and performance analytics"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="NetCoPilot" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose NetCoPilot?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Network operations success stories"
          description="Learn why network engineers and operations teams choose NetCoPilot for comprehensive network visibility and intelligent monitoring capabilities."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Network Operations Guide"
          description="We've compiled network monitoring strategies, topology mapping techniques, and incident response best practices for modern network operations and cloud environments."
          image="/netcopilot.svg"
          buttonText="Get the operations guide"
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
