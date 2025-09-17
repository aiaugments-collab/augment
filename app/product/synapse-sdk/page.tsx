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

export default function SynapseSDKPage() {
  const { productUrl, docsUrl } = getAppUrls("synapse-sdk");
  
  const ctaButtons = [
    {
      text: "Get SDK",
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
      id: "ai-integration",
      image: "/products/synapse/01.png",
      title: "Seamless AI Integration",
      description: "Embed adaptive AI automation directly into your applications with flexible APIs and modular components that unlock intelligent capabilities.",
      ctaText: "Learn AI integration",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "modular-components",
      image: "/products/synapse/02.png",
      title: "Modular AI Components",
      description: "Build intelligent features with pre-built modular components that provide AI-driven automation, decision-making, and adaptive behavior.",
      ctaText: "Explore components",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "flexible-apis",
      image: "/products/synapse/03.png",
      title: "Flexible Developer APIs",
      description: "Integrate AI capabilities with flexible, well-documented APIs that provide powerful automation features while maintaining simplicity and ease of use.",
      ctaText: "View API docs",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "product-innovation",
      image: "/products/synapse/04.png",
      title: "Accelerated Product Innovation",
      description: "Accelerate product innovation with AI-driven automation that enables rapid feature development and intelligent user experiences.",
      ctaText: "See innovation examples",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "ai-integration",
      title: "AI Integration",
      content: {
        title: "Seamless AI automation integration",
        description: "Embed adaptive AI automation directly into your applications with flexible APIs and modular components that unlock AI-driven automation and intelligent decision-making capabilities.",
        buttons: [
          { text: "Get Synapse SDK", href: productUrl, variant: "primary" as const },
          { text: "Integration examples", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "AI Integration Features",
          items: [
            "Plug-and-play AI components",
            "Adaptive automation engine",
            "Intelligent decision making",
            "Context-aware processing",
            "Real-time AI inference",
            "Custom model integration",
            "Scalable AI architecture",
            "Cross-platform compatibility"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "AI Integration Builder",
          description: "Seamless AI component integration and configuration interface"
        }
      }
    },
    {
      id: "modular-components",
      title: "Modular Components",
      content: {
        title: "Pre-built AI automation components",
        description: "Build intelligent features with pre-built modular components that provide AI-driven automation, adaptive behavior, and intelligent processing capabilities for rapid development.",
        buttons: [
          { text: "Explore Components", href: productUrl, variant: "primary" as const },
          { text: "Component library", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Modular Components Features",
          items: [
            "Pre-built AI modules",
            "Customizable components",
            "Drag-and-drop integration",
            "Component marketplace",
            "Version management",
            "Dependency resolution",
            "Performance optimization",
            "Testing frameworks"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Component Library",
          description: "Modular AI components and integration management dashboard"
        }
      }
    },
    {
      id: "developer-apis",
      title: "Developer APIs",
      content: {
        title: "Flexible and powerful developer APIs",
        description: "Integrate AI capabilities with flexible, well-documented APIs that provide powerful automation features while maintaining simplicity, ease of use, and developer productivity.",
        buttons: [
          { text: "Try APIs", href: productUrl, variant: "primary" as const },
          { text: "API documentation", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Developer APIs Features",
          items: [
            "RESTful API design",
            "GraphQL support",
            "WebSocket integration",
            "Authentication & security",
            "Rate limiting & throttling",
            "Comprehensive documentation",
            "SDK code generation",
            "API versioning"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "API Management Console",
          description: "Developer API documentation and testing interface"
        }
      }
    },
    {
      id: "product-acceleration",
      title: "Product Acceleration",
      content: {
        title: "Accelerated AI-driven product innovation",
        description: "Accelerate product innovation with AI-driven automation that enables rapid feature development, intelligent user experiences, and competitive advantage through smart technology.",
        buttons: [
          { text: "View Innovation Tools", href: productUrl, variant: "primary" as const },
          { text: "Success stories", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Product Acceleration Features",
          items: [
            "Rapid prototyping tools",
            "AI-powered feature generation",
            "Intelligent user interfaces",
            "Automated testing suites",
            "Performance monitoring",
            "A/B testing integration",
            "Analytics and insights",
            "Deployment automation"
          ]
        },
        mockup: {
          type: "analytics" as const,
          title: "Product Innovation Dashboard",
          description: "AI-driven product development and innovation tracking interface"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Seamless AI automation integration for developers",
      description: "Embed adaptive AI automation directly into your applications with flexible APIs and modular components that unlock AI-driven automation and intelligent capabilities.",
      link: {
        text: "Learn about AI integration",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Pre-built modular components for rapid development",
      description: "Build intelligent features with pre-built modular components that provide AI-driven automation, adaptive behavior, and intelligent processing for accelerated development."
    },
    {
      number: "03",
      title: "Flexible and powerful developer APIs", 
      description: "Integrate AI capabilities with flexible, well-documented APIs that provide powerful automation features while maintaining simplicity and developer productivity."
    },
    {
      number: "04",
      title: "Accelerated product innovation and competitive advantage",
      description: "Accelerate product innovation with AI-driven automation that enables rapid feature development, intelligent user experiences, and market differentiation."
    }
  ];

  const customerReference = {
    title: "AI Integration Success",
    company: "Startup accelerates feature development by 400%",
    description: "A fast-growing startup transformed their product development using Synapse SDK, dramatically accelerating AI feature development while maintaining code quality and scalability.",
    image: "/products/synapse/01.png",
    linkText: "Read the integration success story",
    linkHref: docsUrl
  };

  const customerLogos = [
    {
      name: "OpenAI",
      image: "https://logo.clearbit.com/openai.com",
      href: docsUrl,
      alt: "OpenAI logo"
    },
    {
      name: "Anthropic",
      image: "https://logo.clearbit.com/anthropic.com",
      href: docsUrl,
      alt: "Anthropic logo"
    },
    {
      name: "Hugging Face",
      image: "https://logo.clearbit.com/huggingface.co",
      href: docsUrl, 
      alt: "Hugging Face logo"
    },
    {
      name: "Replicate",
      image: "https://logo.clearbit.com/replicate.com",
      href: docsUrl,
      alt: "Replicate logo"
    },
    {
      name: "Cohere", 
      image: "https://logo.clearbit.com/cohere.ai",
      href: docsUrl,
      alt: "Cohere logo"
    },
    {
      name: "Stability AI",
      image: "https://logo.clearbit.com/stability.ai",
      href: docsUrl,
      alt: "Stability AI logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in Synapse SDK",
      content: {
        title: "Latest AI integration features",
        description: "Stay updated with the newest capabilities in AI automation integration, modular components, and developer APIs designed for modern AI-driven applications.",
        image: "/products/synapse/02.png",
        links: [
          { text: "New AI integration features", href: docsUrl },
          { text: "Component library updates", href: docsUrl },
          { text: "API enhancements", href: docsUrl },
          { text: "Performance improvements", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare AI SDKs",
      content: {
        title: "Why choose Synapse SDK",
        description: "Compare our AI integration capabilities with other SDKs and see why developers choose us for embedding intelligent automation into their applications.",
        image: "/products/synapse/03.png",
        links: [
          { text: "AI SDK comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Integration guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master AI integration",
      content: {
        title: "Learn intelligent application development",
        description: "Master AI integration with comprehensive guides, best practices, and training materials for developers building intelligent, AI-powered applications.",
        image: "/products/synapse/04.png",
        links: [
          { text: "AI integration guide", href: docsUrl },
          { text: "Component development", href: docsUrl },
          { text: "API best practices", href: docsUrl },
          { text: "Performance optimization", href: docsUrl }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Get SDK",
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
        <h1 className="sr-only">Synapse SDK | AI Integration SDK for Embedding Adaptive Automation</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="Synapse SDK"
          description="SDK for embedding adaptive AI automation directly into your applications. Empowers developers to build intelligent features with flexible APIs and modular components that unlock AI-driven automation and accelerate product innovation with intelligent capabilities."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "form",
            title: "AI SDK Integration",
            description: "Seamless AI automation embedding and component integration"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="Synapse SDK" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose Synapse SDK?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="AI integration success stories"
          description="Learn why developers and product teams choose Synapse SDK for embedding intelligent automation and accelerating AI-driven innovation."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The AI Integration Developer Guide"
          description="We've compiled AI integration strategies, component development patterns, and intelligent application methodologies for modern AI-driven product development."
          image="/products/synapse/03.png"
          buttonText="Get the integration guide"
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
