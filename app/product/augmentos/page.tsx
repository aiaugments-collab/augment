import { ProductHero } from "@/components/product/ProductHero";
import { ProductPromo } from "@/components/product/ProductPromo";
import { ProductExplorer } from "@/components/product/ProductExplorer";
import { ProductWhyChoose } from "@/components/product/ProductWhyChoose";
import { ProductCustomerLogos } from "@/components/product/ProductCustomerLogos";
import { ProductCTABanner } from "@/components/product/ProductCTABanner";
import { ProductGetStarted } from "@/components/product/ProductGetStarted";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { getAppUrls } from "@/lib/marketplaceData";


export default function AugmentOSPage() {
  const { productUrl, docsUrl } = getAppUrls("augmentos");
  
  const ctaButtons = [
    {
      text: "Join Waitlist",
      href: productUrl,
      variant: "primary" as const
    },
    {
      text: "Watch Demo",
      href: productUrl,
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "ai-browser-automation",
      image: "/augmentos.svg",
      title: "Enterprise AI Browser Platform",
      description: "Revolutionary AI-powered browser that transforms workflows with intelligent automation, natural language commands, and enterprise-grade privacy protection.",
      ctaText: "Join waitlist",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "natural-language-automation",
      image: "/augmentos.svg",
      title: "Natural Language Task Automation",
      description: "Simply describe your task in plain language and AugmentOS handles all the clicking, typing, and navigating automatically with intelligent workflow execution.",
      ctaText: "See automation demo",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "privacy-first-browsing",
      image: "/augmentos.svg",
      title: "Privacy-First Enterprise Browsing",
      description: "True alternative to Chrome with local AI processing, zero tracking, and enterprise-grade security controls for maximum data protection and compliance.",
      ctaText: "Learn about privacy",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "multi-ai-integration",
      image: "/augmentos.svg",
      title: "Multi-AI Model Integration",
      description: "Integrated support for ChatGPT, Claude, Gemini, and local models with MCP server integration for Gmail, Calendar, Docs, Sheets, and Notion.",
      ctaText: "Explore AI features",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "ai-browser-platform",
      title: "AI Browser Platform",
      content: {
        title: "Enterprise AI browser with intelligent automation capabilities",
        description: "Revolutionary AI-powered browser platform that transforms workflows with natural language automation, privacy-first architecture, and enterprise-grade security controls.",
        buttons: [
          { text: "Join Waitlist", href: productUrl, variant: "primary" as const },
          { text: "Browser features", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "AI Browser Platform Features",
          items: [
            "Natural language automation",
            "Privacy-first architecture",
            "Multi-AI model support",
            "Enterprise security controls",
            "Chrome extension compatibility",
            "Local AI processing",
            "Team management",
            "Zero tracking protection"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "AugmentOS Browser Console",
          description: "Enterprise AI browser automation and management interface"
        }
      }
    },
    {
      id: "natural-language-automation",
      title: "Natural Language Automation",
      content: {
        title: "Intelligent workflow automation with natural language commands",
        description: "Transform repetitive web tasks into automated workflows using simple natural language commands with intelligent agent builder and cross-website orchestration.",
        buttons: [
          { text: "Try Automation", href: productUrl, variant: "primary" as const },
          { text: "Automation examples", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Natural Language Automation Features",
          items: [
            "Natural language commands",
            "Automated data extraction",
            "Form filling automation",
            "Multi-step processes",
            "Research compilation",
            "Cross-website workflows",
            "Scheduled execution",
            "Error handling"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Automation Workflow Console",
          description: "Natural language automation and workflow management"
        }
      }
    },
    {
      id: "privacy-security",
      title: "Privacy & Security",
      content: {
        title: "Enterprise-grade privacy protection and security controls",
        description: "Privacy-first architecture with local AI processing, zero tracking, and enterprise-grade security controls for maximum data protection and regulatory compliance.",
        buttons: [
          { text: "Contact Sales", href: "/book-demo", variant: "primary" as const },
          { text: "Security overview", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Privacy & Security Features",
          items: [
            "Local AI processing",
            "Zero tracking protection",
            "Enterprise security controls",
            "SOC 2 compliance",
            "Role-based access control",
            "Audit logging",
            "Data encryption",
            "Custom deployment"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Security Management Console",
          description: "Enterprise privacy and security configuration interface"
        }
      }
    },
    {
      id: "multi-ai-integration",
      title: "Multi-AI Integration",
      content: {
        title: "Integrated AI models and productivity tool connections",
        description: "Seamless integration with multiple AI models including ChatGPT, Claude, Gemini, and local models with pre-installed MCP servers for productivity applications.",
        buttons: [
          { text: "Explore AI Features", href: productUrl, variant: "primary" as const },
          { text: "Integration guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Multi-AI Integration Features",
          items: [
            "ChatGPT integration",
            "Claude AI support",
            "Google Gemini access",
            "Local model support",
            "MCP server integration",
            "Gmail connectivity",
            "Calendar integration",
            "Productivity app connections"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "AI Integration Hub",
          description: "Multi-AI model and productivity tool integration management"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Privacy-First Design",
      description: "Unlike Chrome or Safari, AugmentOS prioritizes your privacy with local AI processing and zero tracking.",
      link: {
        text: "Learn about privacy",
        href: "https://augmentos.augment.cfd/"
      }
    },
    {
      number: "02",
      title: "Natural Language Automation",
      description: "Automate complex workflows by simply describing what you want to do - no technical skills required.",
      link: {
        text: "Try automation",
        href: "https://augmentos.augment.cfd/"
      }
    },
    {
      number: "03",
      title: "Enterprise Ready",
      description: "Built for enterprise deployment with team management, security controls, and compliance features.",
      link: {
        text: "Contact sales",
        href: "/book-demo"
      }
    }
  ];



  const getStartedActions = [
    {
      title: "Join Waitlist",
      href: productUrl,
      icon: "demo"
    },
    {
      title: "Schedule Demo",
      href: "/book-demo",
      icon: "contact"
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="sr-only">AugmentOS | Enterprise AI Browser with Intelligent Automation</h1>
        
        {/* Breadcrumbs - automatically generated from /product/augmentos route */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="AugmentOS"
          description="Enterprise-grade AI-powered browser that transforms your workflow with intelligent automation. Just describe your task in plain language — AugmentOS handles all the clicking, typing, and navigating for you. A privacy-first alternative to Chrome, built for the AI era."
          ctaButtons={ctaButtons}
          mediaType="video"
          mediaUrl="/products/augmentos/01.png"
          videoThumbnail="/products/augmentos/01.png"
          mediaAlt="AugmentOS interface showing AI-powered browser automation and natural language task execution"
        />

        {/* Product Promotional Cards - Oracle RC59 style */}
        <ProductPromo cards={promoCards} />

        {/* Product Explorer - Oracle RC30 tabbed interface */}
        <ProductExplorer title="Explore AugmentOS enterprise capabilities" tabs={explorerTabs} />

        {/* Why Choose Section - Oracle RC36v3 style */}
        <ProductWhyChoose 
          title="Why choose AugmentOS for your enterprise?" 
          items={whyChooseItems}
        />

        {/* Customer Success Logos - Oracle RC56v0 style */}
        <ProductCustomerLogos
          title="AugmentOS customer successes"
          description="Leading enterprises trust AugmentOS to automate their workflows while maintaining privacy and security."
          viewMoreText="View all customers"
          viewMoreHref="/customers"
          logos={[]}
        />


        {/* CTA Banner - Oracle RC57v0 style */}
        <ProductCTABanner
          title="Ready to transform your workflow with AI?"
          description="Join thousands of enterprises already using AugmentOS to automate repetitive tasks and boost productivity."
          image="/augmentos.svg"
          buttonText="Join Waitlist"
          buttonHref={productUrl}
        />

        {/* Get Started Section - Oracle RC58v0 style */}
        <ProductGetStarted
          title="Get started with AugmentOS"
          actions={getStartedActions}
        />
      </main>
    </div>
  );
}
