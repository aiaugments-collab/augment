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

export default function AICodeReviewerPage() {
  const { productUrl, docsUrl } = getAppUrls("ai-code-reviewer");
  
  const ctaButtons = [
    {
      text: "Start Code Review",
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
      id: "ai-code-analysis",
      image: "/ai-code-reviewer.svg",
      title: "AI-Powered Code Analysis",
      description: "Advanced code review with machine learning that analyzes code quality, detects security vulnerabilities, and suggests optimizations using intelligent pattern recognition.",
      ctaText: "Analyze code quality",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "security-scanning",
      image: "/ai-code-reviewer.svg",
      title: "Intelligent Security Scanning",
      description: "AI-driven security vulnerability detection with contextual risk assessment, exploit prediction, and automated security recommendations for secure code development.",
      ctaText: "Scan for vulnerabilities",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "performance-optimization",
      image: "/ai-code-reviewer.svg",
      title: "Performance Bottleneck Detection",
      description: "Machine learning-powered performance analysis that identifies bottlenecks, suggests optimizations, and provides intelligent recommendations for code efficiency.",
      ctaText: "Optimize performance",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "contextual-recommendations",
      image: "/ai-code-reviewer.svg",
      title: "Contextual Code Recommendations",
      description: "AI that understands code patterns and provides contextual recommendations for best practices, maintainability improvements, and architectural enhancements.",
      ctaText: "Get recommendations",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "code-quality-analysis",
      title: "Code Quality Analysis",
      content: {
        title: "AI-powered code quality assessment and improvement",
        description: "Advanced machine learning algorithms analyze your codebase for quality issues, maintainability concerns, and best practice violations with intelligent recommendations for improvement.",
        buttons: [
          { text: "Analyze Code Quality", href: productUrl, variant: "primary" as const },
          { text: "Quality metrics guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Code Quality Features",
          items: [
            "AI-driven quality scoring",
            "Maintainability analysis",
            "Technical debt detection",
            "Code complexity assessment",
            "Best practice recommendations",
            "Refactoring suggestions",
            "Architecture analysis",
            "Documentation quality check"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Code Quality Dashboard",
          description: "AI-powered code analysis and quality assessment interface"
        }
      }
    },
    {
      id: "security-analysis",
      title: "Security Analysis",
      content: {
        title: "Intelligent security vulnerability detection and prevention",
        description: "AI-powered security analysis that identifies vulnerabilities, predicts potential attack vectors, and provides contextual security recommendations for secure software development.",
        buttons: [
          { text: "Scan Security", href: productUrl, variant: "primary" as const },
          { text: "Security guidelines", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Security Analysis Features",
          items: [
            "AI vulnerability detection",
            "Attack vector prediction",
            "Security risk scoring",
            "Exploit possibility analysis",
            "Secure coding recommendations",
            "Dependency vulnerability scanning",
            "Security pattern recognition",
            "Threat model generation"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Security Analysis Console",
          description: "AI-driven security vulnerability assessment and threat prediction"
        }
      }
    },
    {
      id: "performance-optimization",
      title: "Performance Optimization",
      content: {
        title: "Machine learning-powered performance analysis platform",
        description: "AI algorithms analyze code performance patterns, identify bottlenecks, and suggest optimizations with intelligent recommendations for improved application efficiency and scalability.",
        buttons: [
          { text: "Optimize Performance", href: productUrl, variant: "primary" as const },
          { text: "Performance guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Performance Optimization Features",
          items: [
            "Bottleneck detection",
            "Performance pattern analysis",
            "Optimization recommendations",
            "Memory usage analysis",
            "CPU utilization insights",
            "Scalability assessment",
            "Algorithm efficiency scoring",
            "Resource optimization"
          ]
        },
        mockup: {
          type: "analytics" as const,
          title: "Performance Analytics Center",
          description: "AI-powered performance monitoring and optimization recommendations"
        }
      }
    },
    {
      id: "intelligent-recommendations",
      title: "AI Recommendations",
      content: {
        title: "Contextual AI recommendations for code improvement",
        description: "Advanced AI that understands code context and provides intelligent suggestions for architectural improvements, best practices, and maintainability enhancements.",
        buttons: [
          { text: "Get Recommendations", href: productUrl, variant: "primary" as const },
          { text: "Best practices guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "AI Recommendation Features",
          items: [
            "Contextual suggestions",
            "Pattern recognition",
            "Architecture recommendations",
            "Code style improvements",
            "Naming conventions",
            "Design pattern suggestions",
            "Dependency optimization",
            "Code organization advice"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "AI Code Assistant",
          description: "Intelligent code recommendations and improvement suggestions"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "AI-powered code analysis with machine learning insights",
      description: "Advanced machine learning algorithms analyze code patterns, detect quality issues, and provide intelligent recommendations for improvement with contextual understanding of your codebase.",
      link: {
        text: "Learn about AI code analysis",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Intelligent security vulnerability detection and prediction",
      description: "AI-driven security analysis that not only detects vulnerabilities but predicts potential attack vectors and provides contextual security recommendations for proactive protection."
    },
    {
      number: "03",
      title: "Performance optimization with intelligent bottleneck detection", 
      description: "Machine learning-powered performance analysis identifies bottlenecks, suggests optimizations, and provides data-driven recommendations for improved application efficiency."
    },
    {
      number: "04",
      title: "Contextual recommendations for architectural improvements",
      description: "Advanced AI understands code context and provides intelligent suggestions for best practices, maintainability, and architectural enhancements tailored to your specific codebase."
    }
  ];

  const customerReference = {
    title: "Development Productivity Transformation",
    company: "Engineering team improves code quality by 90% with AI-powered analysis",
    description: "A leading software company transformed their development process using AI CodeReviewer, dramatically improving code quality, reducing security vulnerabilities, and accelerating development cycles.",
    image: "/ai-code-reviewer.svg",
    linkText: "Read the development transformation story",
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
      name: "GitLab",
      image: "https://logo.clearbit.com/gitlab.com",
      href: docsUrl,
      alt: "GitLab logo"
    },
    {
      name: "Bitbucket",
      image: "https://logo.clearbit.com/bitbucket.org",
      href: docsUrl, 
      alt: "Bitbucket logo"
    },
    {
      name: "SonarQube",
      image: "https://logo.clearbit.com/sonarqube.org",
      href: docsUrl,
      alt: "SonarQube logo"
    },
    {
      name: "CodeClimate", 
      image: "https://logo.clearbit.com/codeclimate.com",
      href: docsUrl,
      alt: "CodeClimate logo"
    },
    {
      name: "Synk",
      image: "https://logo.clearbit.com/snyk.io",
      href: docsUrl,
      alt: "Snyk logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in AI CodeReviewer",
      content: {
        title: "Latest AI-powered code analysis features",
        description: "Stay updated with the newest capabilities in AI-driven code quality assessment, security analysis, and intelligent recommendations for modern software development.",
        image: "/ai-code-reviewer.svg",
        links: [
          { text: "New AI analysis features", href: docsUrl },
          { text: "Security detection improvements", href: docsUrl },
          { text: "Performance optimization updates", href: docsUrl },
          { text: "Recommendation engine enhancements", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare code analysis solutions",
      content: {
        title: "Why choose AI CodeReviewer",
        description: "Compare our AI-powered code analysis capabilities with other solutions and see why development teams choose us for intelligent code quality and security assessment.",
        image: "/ai-code-reviewer.svg",
        links: [
          { text: "Code analysis comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master AI CodeReviewer",
      content: {
        title: "Learn AI-powered code analysis best practices",
        description: "Master intelligent code review with comprehensive guides, development best practices, and training materials for developers and engineering teams.",
        image: "/ai-code-reviewer.svg",
        links: [
          { text: "AI code analysis guide", href: docsUrl },
          { text: "Security scanning best practices", href: docsUrl },
          { text: "Performance optimization strategies", href: docsUrl },
          { text: "Code quality improvement techniques", href: docsUrl }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Start analyzing",
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
        <h1 className="sr-only">AI CodeReviewer | AI-Powered Code Analysis and Security Scanning</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="AI CodeReviewer"
          description="AI-powered code review tool that analyzes code quality, security vulnerabilities, performance bottlenecks, and suggests optimizations. Uses advanced machine learning to understand code patterns and provide contextual recommendations for better software development."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "AI Code Analysis Platform",
            description: "Intelligent code review and quality assessment with AI insights"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="AI CodeReviewer" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose AI CodeReviewer?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Code quality transformation stories"
          description="Learn why developers and engineering teams choose AI CodeReviewer for intelligent code analysis, security scanning, and quality improvement."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The AI Code Quality Excellence Guide"
          description="We've compiled intelligent code analysis strategies, security best practices, and quality improvement methodologies for modern software development teams."
          image="/ai-code-reviewer.svg"
          buttonText="Get the code quality guide"
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
