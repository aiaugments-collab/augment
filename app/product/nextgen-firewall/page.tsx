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

export default function NextGenFirewallPage() {
  const { productUrl, docsUrl } = getAppUrls("nextgen-firewall");
  
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
      id: "ai-powered-protection",
      image: "/nextgen-firewall.svg",
      title: "AI-Powered Threat Prevention",
      description: "Advanced threat detection and prevention powered by machine learning algorithms that adapt to emerging threats and zero-day attacks in real-time.",
      ctaText: "Explore AI protection",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "deep-packet-inspection",
      image: "/nextgen-firewall.svg",
      title: "Deep Packet Inspection",
      description: "Comprehensive traffic analysis with deep packet inspection capabilities that examine application-layer content for advanced threat detection.",
      ctaText: "Learn about DPI",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "intrusion-prevention",
      image: "/nextgen-firewall.svg",
      title: "Integrated IDS/IPS System",
      description: "Built-in intrusion detection and prevention system with signature-based and behavioral analysis for comprehensive network security.",
      ctaText: "View IDS/IPS features",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "automated-policy-tuning",
      image: "/nextgen-firewall.svg",
      title: "Automated Policy Tuning",
      description: "Intelligent policy management with automated tuning, optimization recommendations, and adaptive security rules based on traffic patterns.",
      ctaText: "See policy automation",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "threat-prevention",
      title: "Threat Prevention",
      content: {
        title: "AI-powered advanced threat prevention and detection",
        description: "Protect against sophisticated threats with machine learning-powered detection, behavioral analysis, and real-time threat intelligence integration.",
        buttons: [
          { text: "Enable Threat Prevention", href: productUrl, variant: "primary" as const },
          { text: "Threat intelligence", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Threat Prevention Features",
          items: [
            "AI-powered threat detection",
            "Zero-day attack prevention",
            "Behavioral analysis engine",
            "Threat intelligence feeds",
            "Malware sandboxing",
            "Advanced persistent threat detection",
            "Real-time threat scoring",
            "Automated response actions"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Threat Prevention Dashboard",
          description: "AI-powered threat detection and prevention monitoring"
        }
      }
    },
    {
      id: "traffic-control",
      title: "Traffic Control",
      content: {
        title: "Intelligent traffic control and deep packet inspection",
        description: "Control network traffic with granular policies, application-aware filtering, and deep packet inspection for comprehensive visibility and control.",
        buttons: [
          { text: "Configure Traffic Control", href: productUrl, variant: "primary" as const },
          { text: "Policy templates", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Traffic Control Features",
          items: [
            "Deep packet inspection",
            "Application-layer filtering",
            "Bandwidth management",
            "Quality of Service (QoS)",
            "Traffic shaping",
            "Protocol analysis",
            "Geo-blocking capabilities",
            "Custom rule engine"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Traffic Control Interface",
          description: "Advanced traffic management and policy configuration"
        }
      }
    },
    {
      id: "ids-ips",
      title: "IDS/IPS System",
      content: {
        title: "Integrated intrusion detection and prevention system",
        description: "Comprehensive network security with signature-based detection, behavioral analysis, and automated prevention of malicious activities.",
        buttons: [
          { text: "Configure IDS/IPS", href: productUrl, variant: "primary" as const },
          { text: "Signature updates", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "IDS/IPS System Features",
          items: [
            "Signature-based detection",
            "Anomaly detection",
            "Protocol validation",
            "Evasion technique detection",
            "Automated blocking",
            "Alert correlation",
            "Forensic analysis",
            "Custom signatures"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "IDS/IPS Configuration",
          description: "Intrusion detection and prevention system setup and monitoring"
        }
      }
    },
    {
      id: "policy-management",
      title: "Policy Management",
      content: {
        title: "Automated policy tuning and intelligent management",
        description: "Streamline security policy management with automated tuning, optimization recommendations, and adaptive rules that evolve with your network.",
        buttons: [
          { text: "Manage Policies", href: productUrl, variant: "primary" as const },
          { text: "Best practices", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Policy Management Features",
          items: [
            "Automated policy tuning",
            "Rule optimization",
            "Policy templates",
            "Change management",
            "Compliance checking",
            "Performance monitoring",
            "Rollback capabilities",
            "Audit logging"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Policy Management Console",
          description: "Intelligent firewall policy management and optimization"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "AI-powered threat prevention with adaptive learning",
      description: "Advanced threat detection powered by machine learning that adapts to emerging threats, zero-day attacks, and sophisticated attack patterns in real-time.",
      link: {
        text: "Learn about AI protection",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Deep packet inspection with application awareness",
      description: "Comprehensive traffic analysis with deep packet inspection that examines application-layer content for advanced threat detection and policy enforcement."
    },
    {
      number: "03",
      title: "Integrated IDS/IPS with behavioral analysis", 
      description: "Built-in intrusion detection and prevention system combining signature-based detection with behavioral analysis for comprehensive network security."
    },
    {
      number: "04",
      title: "Automated policy tuning and optimization",
      description: "Intelligent policy management with automated tuning, optimization recommendations, and adaptive security rules that evolve with your network traffic."
    }
  ];

  const customerReference = {
    title: "Network Security Transformation",
    company: "Enterprise blocks 99.9% of threats with AI-powered firewall",
    description: "A leading financial services company transformed their network security using NextGen Firewall, achieving exceptional threat prevention rates while reducing false positives and improving network performance.",
    image: "/nextgen-firewall.svg",
    linkText: "Read the security transformation story",
    linkHref: docsUrl
  };

  const customerLogos = [
    {
      name: "OPNsense",
      image: "https://logo.clearbit.com/opnsense.org",
      href: docsUrl,
      alt: "OPNsense logo"
    },
    {
      name: "pfSense",
      image: "https://logo.clearbit.com/pfsense.org",
      href: docsUrl,
      alt: "pfSense logo"
    },
    {
      name: "Fortinet",
      image: "https://logo.clearbit.com/fortinet.com",
      href: docsUrl, 
      alt: "Fortinet logo"
    },
    {
      name: "Palo Alto Networks",
      image: "https://logo.clearbit.com/paloaltonetworks.com",
      href: docsUrl,
      alt: "Palo Alto Networks logo"
    },
    {
      name: "Check Point", 
      image: "https://logo.clearbit.com/checkpoint.com",
      href: docsUrl,
      alt: "Check Point logo"
    },
    {
      name: "SonicWall",
      image: "https://logo.clearbit.com/sonicwall.com",
      href: docsUrl,
      alt: "SonicWall logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in NextGen Firewall",
      content: {
        title: "Latest firewall and security features",
        description: "Stay updated with the newest capabilities in AI-powered threat prevention, deep packet inspection, and automated policy management for enterprise security.",
        image: "/nextgen-firewall.svg",
        links: [
          { text: "New AI threat detection", href: docsUrl },
          { text: "IDS/IPS improvements", href: docsUrl },
          { text: "Policy automation updates", href: docsUrl },
          { text: "Performance enhancements", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare firewall solutions",
      content: {
        title: "Why choose NextGen Firewall",
        description: "Compare our AI-powered firewall capabilities with other solutions and see why enterprises choose us for advanced threat prevention and traffic control.",
        image: "/nextgen-firewall.svg",
        links: [
          { text: "Firewall solution comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Deployment guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master NextGen Firewall",
      content: {
        title: "Learn advanced firewall management",
        description: "Master next-generation firewall technologies with comprehensive guides, best practices, and training materials for security professionals and network administrators.",
        image: "/nextgen-firewall.svg",
        links: [
          { text: "Firewall management guide", href: docsUrl },
          { text: "Threat prevention best practices", href: docsUrl },
          { text: "Policy optimization strategies", href: docsUrl },
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
      title: "Contact security team",
      href: productUrl,
      icon: "contact"
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="sr-only">NextGen Firewall | AI-Powered Intrusion Prevention & Traffic Control</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="NextGen Firewall"
          description="Next-generation firewall with AI-powered intrusion prevention, deep packet inspection, and automated policy tuning. Protect your network with advanced threat detection, behavioral analysis, and intelligent traffic control for enterprise security."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Firewall Security Console",
            description: "AI-powered threat prevention and traffic control management"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="NextGen Firewall" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose NextGen Firewall?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Network security success stories"
          description="Learn why security professionals and network administrators choose NextGen Firewall for AI-powered threat prevention and advanced traffic control."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Network Security Guide"
          description="We've compiled firewall strategies, threat prevention techniques, and security best practices for modern enterprise network protection and traffic management."
          image="/nextgen-firewall.svg"
          buttonText="Get the security guide"
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
