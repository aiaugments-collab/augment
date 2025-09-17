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

export default function AetherCLIPage() {
  const { productUrl, docsUrl } = getAppUrls("aether-cli");
  
  const ctaButtons = [
    {
      text: "Install CLI",
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
      id: "intelligent-automation",
      image: "/products/aether/01.png",
      title: "Intelligent Command-Line Automation",
      description: "Streamline development workflows with AI-powered command-line automation that understands context and executes complex tasks intelligently.",
      ctaText: "Learn CLI automation",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "ai-native-workflows",
      image: "/products/aether/02.png",
      title: "AI-Native Developer Workflows",
      description: "Built for AI-native developers with intelligent workflows that reduce complexity and accelerate development cycles through smart automation.",
      ctaText: "Explore workflows",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "rapid-prototyping",
      image: "/products/aether/03.png",
      title: "Rapid Prototyping & Development",
      description: "Accelerate prototyping and development with intelligent scaffolding, automated setup, and AI-powered code generation capabilities.",
      ctaText: "View prototyping tools",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "developer-productivity",
      image: "/products/aether/04.png",
      title: "Enhanced Developer Productivity",
      description: "Boost productivity with intelligent command suggestions, automated task execution, and context-aware development assistance.",
      ctaText: "See productivity features",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "intelligent-cli",
      title: "Intelligent CLI",
      content: {
        title: "AI-powered command-line interface",
        description: "Experience next-generation command-line automation with AI intelligence that understands context, suggests optimal commands, and executes complex workflows with minimal input.",
        buttons: [
          { text: "Install Aether CLI", href: productUrl, variant: "primary" as const },
          { text: "Quick start guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Intelligent CLI Features",
          items: [
            "AI-powered command suggestions",
            "Context-aware automation",
            "Natural language processing",
            "Intelligent error handling",
            "Workflow orchestration",
            "Smart command completion",
            "Adaptive learning system",
            "Cross-platform compatibility"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Aether CLI Interface",
          description: "Intelligent command-line with AI-powered automation and suggestions"
        }
      }
    },
    {
      id: "workflow-automation",
      title: "Workflow Automation",
      content: {
        title: "Streamlined development workflow automation",
        description: "Automate complex development workflows with intelligent pipelines that understand your project context and execute tasks efficiently, reducing manual overhead and errors.",
        buttons: [
          { text: "Explore Automation", href: productUrl, variant: "primary" as const },
          { text: "Workflow examples", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Workflow Automation Features",
          items: [
            "Automated pipeline creation",
            "Intelligent task scheduling",
            "Dependency management",
            "Error recovery mechanisms",
            "Parallel execution support",
            "Custom workflow templates",
            "Integration with dev tools",
            "Performance optimization"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Workflow Automation Dashboard",
          description: "Development workflow management and automation interface"
        }
      }
    },
    {
      id: "rapid-prototyping",
      title: "Rapid Prototyping",
      content: {
        title: "AI-accelerated rapid prototyping tools",
        description: "Accelerate prototyping and development with intelligent scaffolding, automated project setup, and AI-powered code generation that gets you from idea to implementation faster.",
        buttons: [
          { text: "Try Prototyping", href: productUrl, variant: "primary" as const },
          { text: "Template library", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Rapid Prototyping Features",
          items: [
            "Intelligent project scaffolding",
            "AI-powered code generation",
            "Template-based setup",
            "Dependency auto-resolution",
            "Best practice enforcement",
            "Quick deployment options",
            "Testing framework integration",
            "Documentation generation"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Project Generator",
          description: "AI-powered project scaffolding and rapid prototyping interface"
        }
      }
    },
    {
      id: "developer-tools",
      title: "Developer Tools",
      content: {
        title: "Comprehensive developer productivity tools",
        description: "Enhance developer productivity with intelligent tools that provide smart suggestions, automated optimizations, and seamless integration with your existing development environment.",
        buttons: [
          { text: "View Developer Tools", href: productUrl, variant: "primary" as const },
          { text: "Integration guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Developer Tools Features",
          items: [
            "Smart code completion",
            "Automated refactoring",
            "Performance profiling",
            "Security scanning",
            "Code quality analysis",
            "Documentation assistance",
            "Testing automation",
            "Deployment optimization"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Developer Tools Suite",
          description: "Comprehensive development tools and productivity enhancements"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "AI-native command-line automation for developers",
      description: "Experience next-generation CLI with AI intelligence that understands context, suggests optimal commands, and executes complex workflows with minimal developer input.",
      link: {
        text: "Learn about AI CLI features",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Streamlined development workflow automation",
      description: "Automate complex development workflows with intelligent pipelines that understand your project context and execute tasks efficiently, reducing manual overhead."
    },
    {
      number: "03",
      title: "Rapid prototyping and development acceleration", 
      description: "Accelerate prototyping with intelligent scaffolding, automated project setup, and AI-powered code generation that gets you from idea to implementation faster."
    },
    {
      number: "04",
      title: "Enhanced developer productivity and efficiency",
      description: "Boost productivity with intelligent command suggestions, automated task execution, and context-aware development assistance that streamlines your workflow."
    }
  ];

  const customerReference = {
    title: "Developer Productivity Success",
    company: "Development team increases productivity by 60%",
    description: "A leading software development team transformed their workflow using Aether CLI, achieving significant productivity gains while reducing development complexity and errors.",
    image: "/products/aether/01.png",
    linkText: "Read the productivity success story",
    linkHref: docsUrl
  };

  const customerLogos = [
    {
      name: "GitHub",
      image: "https://logo.clearbit.com/github.com",
      href: docsUrl,
      alt: "GitHub logo"
    },
    {
      name: "Vercel",
      image: "https://logo.clearbit.com/vercel.com",
      href: docsUrl,
      alt: "Vercel logo"
    },
    {
      name: "Netlify",
      image: "https://logo.clearbit.com/netlify.com",
      href: docsUrl, 
      alt: "Netlify logo"
    },
    {
      name: "Docker",
      image: "https://logo.clearbit.com/docker.com",
      href: docsUrl,
      alt: "Docker logo"
    },
    {
      name: "AWS", 
      image: "https://logo.clearbit.com/aws.amazon.com",
      href: docsUrl,
      alt: "AWS logo"
    },
    {
      name: "Google Cloud",
      image: "https://logo.clearbit.com/cloud.google.com",
      href: docsUrl,
      alt: "Google Cloud logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in Aether CLI",
      content: {
        title: "Latest CLI automation features",
        description: "Stay updated with the newest capabilities in AI-powered command-line automation, workflow orchestration, and developer productivity tools.",
        image: "/products/aether/02.png",
        links: [
          { text: "New CLI automation features", href: docsUrl },
          { text: "Workflow improvements", href: docsUrl },
          { text: "AI enhancements", href: docsUrl },
          { text: "Performance updates", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare CLI tools",
      content: {
        title: "Why choose Aether CLI",
        description: "Compare our AI-native CLI capabilities with other command-line tools and see why developers choose us for intelligent automation and productivity.",
        image: "/products/aether/03.png",
        links: [
          { text: "CLI tool comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Installation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master Aether CLI",
      content: {
        title: "Learn intelligent CLI automation",
        description: "Master AI-native command-line automation with comprehensive guides, best practices, and training materials for developers and DevOps teams.",
        image: "/products/aether/04.png",
        links: [
          { text: "CLI automation guide", href: docsUrl },
          { text: "Workflow best practices", href: docsUrl },
          { text: "Advanced usage patterns", href: docsUrl },
          { text: "Troubleshooting guide", href: docsUrl }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Install CLI",
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
        <h1 className="sr-only">Aether CLI | Intelligent Command-Line Automation for AI-Native Developers</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="Aether CLI"
          description="Intelligent command-line automation powered by AI for next-generation developers. Streamlines automation, reduces complexity, and gives developers the power of intelligent workflows at their fingertips. Transform your development experience with AI-native CLI tools."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "chat",
            title: "AI-Powered CLI Interface",
            description: "Intelligent command-line automation with natural language processing"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="Aether CLI" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose Aether CLI?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Developer productivity success stories"
          description="Learn why developers and DevOps teams choose Aether CLI for intelligent command-line automation and workflow optimization."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The AI-Native Developer Guide"
          description="We've compiled CLI automation strategies, workflow optimization techniques, and AI-native development methodologies for modern developer productivity."
          image="/products/aether/03.png"
          buttonText="Get the developer guide"
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
