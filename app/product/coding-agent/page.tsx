import { ProductHero } from "@/components/product/ProductHero";
import { ProductPromo } from "@/components/product/ProductPromo";
import { ProductExplorer } from "@/components/product/ProductExplorer";
import { ProductWhyChoose } from "@/components/product/ProductWhyChoose";
import { ProductCustomerLogos } from "@/components/product/ProductCustomerLogos";
import { ProductResources } from "@/components/product/ProductResources";
import { ProductCTABanner } from "@/components/product/ProductCTABanner";
import { ProductGetStarted } from "@/components/product/ProductGetStarted";
import { Breadcrumb } from "@/components/ui/Breadcrumb";


export default function CodingAgentPage() {
  const ctaButtons = [
    {
      text: "Book Demo",
      href: "/book-demo",
      variant: "primary" as const
    },
    {
      text: "See How It Works",
      href: "/book-demo",
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "webinar-ai-coding",
      image: "/products/coding-agent/02.png",
      title: "Webinar: Building AI-Powered Development Workflows",
      description: "Discover how AI can transform your development process and deliver exceptional coding experiences across every project.",
      ctaText: "Register today",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "forrester-coding-ai",
      image: "/products/coding-agent/03.png",
      title: "Augment named a Leader in The Forrester Wave™: AI-Powered Development Tools, Q1 2025",
      description: "Find out why Augment was recognized for excellence in AI-driven code editing and development automation.",
      ctaText: "Access the Forrester report",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "dev-productivity-guide",
      image: "/products/coding-agent/04.png",
      title: "Accelerate development productivity with AI coding",
      description: "Discover how to scale development operations by implementing intelligent code assistance, automated testing, and smart refactoring.",
      ctaText: "Read the solution brochure (PDF)",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "cto-guide",
      image: "/products/coding-agent/05.png",
      title: "CTO's guide to predictable development velocity",
      description: "Learn the top 5 ways to cultivate predictable development cycles and code quality using AI-powered development tools.",
      ctaText: "Access the guide",
      ctaLink: "/book-demo",
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "intelligent-coding",
      title: "Intelligent Coding",
      content: {
        title: "AI-powered code completion and generation",
        description: "Transform your coding experience with intelligent code completion, generation, and refactoring that understands your codebase context. Our AI-driven editor provides real-time suggestions, automated documentation, and smart error detection.",
        buttons: [
          { text: "Book Demo", href: "/book-demo", variant: "primary" as const },
          { text: "See How It Works", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "Context-aware code completion",
            "Intelligent code generation", 
            "Automated refactoring suggestions",
            "Smart error detection and fixes",
            "Multi-language support",
            "Code documentation generation",
            "Real-time collaboration",
            "Git integration and conflict resolution"
          ]
        },
        image: "/products/coding-agent/02.png",
        imageAlt: "Coding Agent intelligent coding interface"
      }
    },
    {
      id: "codebase-understanding",
      title: "Codebase Understanding",
      content: {
        title: "Deep codebase analysis and navigation",
        description: "Navigate and understand complex codebases with AI-powered analysis that maps relationships, identifies patterns, and provides intelligent insights for better code architecture and maintenance.",
        buttons: [
          { text: "Book Demo", href: "/book-demo", variant: "primary" as const },
          { text: "See How It Works", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Capabilities",
          items: [
            "Semantic code search",
            "Dependency mapping",
            "Code relationship visualization",
            "Architecture analysis",
            "Technical debt detection",
            "Performance bottleneck identification",
            "Security vulnerability scanning",
            "Code quality metrics"
          ]
        },
        image: "/products/coding-agent/03.png",
        imageAlt: "Codebase understanding interface"
      }
    },
    {
      id: "automated-testing",
      title: "Automated Testing",
      content: {
        title: "AI-driven test generation and execution",
        description: "Boost code quality and confidence with AI-generated tests that cover edge cases, provide comprehensive coverage, and automatically adapt to code changes for continuous quality assurance.",
        buttons: [
          { text: "Book Demo", href: "/book-demo", variant: "primary" as const },
          { text: "See How It Works", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Features",
          items: [
            "Automated unit test generation",
            "Integration test creation",
            "Edge case identification",
            "Test coverage analysis",
            "Regression test automation",
            "Performance test generation",
            "Mock data creation",
            "Test maintenance automation"
          ]
        },
        image: "/products/coding-agent/04.png",
        imageAlt: "Automated testing dashboard"
      }
    },
    {
      id: "deployment-automation",
      title: "Deployment Automation",
      content: {
        title: "Intelligent CI/CD and deployment workflows",
        description: "Streamline your deployment process with AI-powered CI/CD pipelines that optimize build times, predict deployment risks, and automate rollback strategies for reliable software delivery.",
        buttons: [
          { text: "Book Demo", href: "/book-demo", variant: "primary" as const },
          { text: "See How It Works", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Key Components",
          items: [
            "Smart build optimization",
            "Automated deployment pipelines",
            "Risk assessment and prediction",
            "Rollback automation",
            "Environment management",
            "Performance monitoring",
            "Security scanning integration",
            "Release planning assistance"
          ]
        },
        image: "/products/coding-agent/05.png",
        imageAlt: "Deployment automation interface"
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Build better software using AI insights",
      description: "Unify real-time code analysis with performance metrics and predictive insights to generate optimal development strategies, manage technical debt, align architecture decisions, and create development practices that drive software quality and team productivity.",
      link: {
        text: "Explore the benefits of AI-driven development",
        href: "/book-demo"
      }
    },
    {
      number: "02", 
      title: "Provide a comprehensive codebase overview",
      description: "Connect trusted data from version control, CI/CD systems, and monitoring platforms. Layer on AI-powered insights and code analytics for a complete project picture that improves code quality and development velocity."
    },
    {
      number: "03",
      title: "Guide developers and improve team performance", 
      description: "Go beyond traditional IDEs with intelligent recommendations that guide developers to the best coding practices. With a reimagined development experience, focus on high-impact feature development at the right moments."
    },
    {
      number: "04",
      title: "Use AI tools that help you code better",
      description: "Talk to your codebase, automate routine tasks, and accelerate feature development. Code more effectively with intelligent search, AI-powered refactoring suggestions, and much more."
    }
  ];

  const customerReference = {
    title: "Customer Success Story",
    company: "DevCorp increases development velocity by 50% with Augment Coding Agent",
    description: "The fast-growing software company transformed their development workflow by implementing AI-powered code assistance, reducing bug rates by 40% and increasing feature delivery speed across all development teams.",
    image: "/products/coding-agent/01.png",
    linkText: "Read the success story",
    linkHref: "/book-demo"
  };

  const customerLogos = [
    {
      name: "GitHub",
      image: "https://logo.clearbit.com/github.com",
      href: "/book-demo",
      alt: "GitHub logo"
    },
    {
      name: "GitLab",
      image: "https://logo.clearbit.com/gitlab.com",
      href: "/book-demo",
      alt: "GitLab logo"
    },
    {
      name: "JetBrains",
      image: "https://logo.clearbit.com/jetbrains.com",
      href: "/book-demo", 
      alt: "JetBrains logo"
    },
    {
      name: "Visual Studio Code",
      image: "https://logo.clearbit.com/code.visualstudio.com",
      href: "/book-demo",
      alt: "VS Code logo"
    },
    {
      name: "Docker", 
      image: "https://logo.clearbit.com/docker.com",
      href: "/book-demo",
      alt: "Docker logo"
    },
    {
      name: "Kubernetes",
      image: "https://logo.clearbit.com/kubernetes.io",
      href: "/book-demo",
      alt: "Kubernetes logo"
    },
    {
      name: "AWS",
      image: "https://logo.clearbit.com/aws.amazon.com",
      href: "/book-demo",
      alt: "AWS logo"
    },
    {
      name: "Vercel",
      image: "https://logo.clearbit.com/vercel.com",
      href: "/book-demo", 
      alt: "Vercel logo"
    },
    {
      name: "Netlify",
      image: "https://logo.clearbit.com/netlify.com",
      href: "/book-demo",
      alt: "Netlify logo"
    },
    {
      name: "CircleCI", 
      image: "https://logo.clearbit.com/circleci.com",
      href: "/book-demo",
      alt: "CircleCI logo"
    },
    {
      name: "Jenkins",
      image: "https://logo.clearbit.com/jenkins.io",
      href: "/book-demo",
      alt: "Jenkins logo"
    },
    {
      name: "Terraform",
      image: "https://logo.clearbit.com/terraform.io", 
      href: "/book-demo",
      alt: "Terraform logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in AI Coding",
      content: {
        title: "Stay updated with AI coding innovations",
        description: "Catch up on the latest in AI-powered development tools, product demos, webinars, and insights from the Augment AI team to see how we're transforming software development.",
        image: "/products/coding-agent/02.png",
        links: [
          { text: "Latest product updates and features", href: "/book-demo" },
          { text: "Get AI coding best practices and guides", href: "/book-demo" },
          { text: "Register for upcoming webinars", href: "/book-demo" },
          { text: "See industry analyst reports", href: "/book-demo" }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare Augment Coding Agent",
      content: {
        title: "See why Augment Coding Agent is the leader",
        description: "Augment Coding Agent goes beyond traditional IDEs to deliver personalized development experiences powered by advanced AI and machine learning capabilities.",
        image: "/products/coding-agent/03.png",
        links: [
          { text: "Compare with traditional IDEs", href: "/book-demo" },
          { text: "Read analyst comparison reports", href: "/book-demo" },
          { text: "View competitive advantage guide", href: "/book-demo" },
          { text: "See ROI calculator", href: "/book-demo" }
        ]
      }
    },
    {
      id: "community",
      title: "Meet the community",
      content: {
        title: "Connect with developers worldwide",
        description: "Join thousands of developers, engineers, and AI enthusiasts sharing insights, best practices, and success stories in our vibrant community.",
        image: "/products/coding-agent/04.png",
        links: [
          { text: "Join the Augment Coding Agent Community", href: "/book-demo", target: "_blank" },
          { text: "Developer Forum", href: "/book-demo" },
          { text: "User Groups and Meetups", href: "/book-demo" },
          { text: "Share your success story", href: "/book-demo" }
        ]
      }
    },
    {
      id: "learning",
      title: "Build your skills",
      content: {
        title: "Master AI-powered development",
        description: "Enhance your development expertise with comprehensive training programs, certifications, and learning paths designed for modern software engineers.",
        image: "/products/coding-agent/05.png",
        links: [
          { text: "AI Development Certification Program", href: "/book-demo" },
          { text: "Online training courses", href: "/book-demo" },
          { text: "Interactive product tutorials", href: "/book-demo" },
          { text: "Best practices workshops", href: "/book-demo" }
        ]
      }
    },
    {
      id: "support",
      title: "Get help and support",
      content: {
        title: "Expert support when you need it",
        description: "Access comprehensive support resources, expert guidance, and dedicated customer success teams to maximize your AI development investment.",
        image: "/products/coding-agent/01.png",
        links: [
          { text: "Contact customer support", href: "/book-demo" },
          { text: "Browse knowledge base", href: "/book-demo" },
          { text: "Request implementation help", href: "/book-demo" },
          { text: "Schedule a consultation", href: "/book-demo" }
        ]
      }
    },
    {
      id: "content",
      title: "Explore content",
      content: {
        title: "Discover development insights and resources",
        description: "Explore our extensive library of whitepapers, case studies, blog posts, and research reports to stay ahead in the evolving world of AI-powered development.",
        image: "/products/coding-agent/02.png",
        links: [
          { text: "Browse development research library", href: "/book-demo" },
          { text: "Read customer case studies", href: "/book-demo" },
          { text: "Download whitepapers", href: "/book-demo" },
          { text: "Follow our blog", href: "/book-demo" }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Request a demo",
      href: "/book-demo",
      icon: "demo"
    },
    {
      title: "Take a tour",
      href: "/book-demo",
      icon: "tour"
    },
    {
      title: "Contact sales",
      href: "/book-demo",
      icon: "contact"
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="sr-only">Augment Coding Agent | AI-Powered Code Editor and Development Platform</h1>
        
        {/* Breadcrumbs - automatically generated from /product/coding-agent route */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="Coding Agent"
          description="AI-powered code editor that understands your codebase, provides intelligent suggestions, and automates development tasks. Experience seamless coding with advanced AI capabilities that boost productivity and code quality. Transform your development workflow with intelligent code completion, automated testing, and smart refactoring."
          ctaButtons={ctaButtons}
          mediaType="video"
          mediaUrl="/products/coding-agent/01.png"
          videoThumbnail="/products/coding-agent/01.png"
          mediaAlt="Coding Agent interface showing AI-powered code completion and intelligent suggestions"
        />

        {/* Product Promotional Cards - Oracle RC59 style */}
        <ProductPromo cards={promoCards} />

        {/* Product Explorer - Oracle RC30 tabbed interface */}
        <ProductExplorer title="Augment Coding Agent" tabs={explorerTabs} />

        {/* Why Choose Section - Oracle RC36v3 style */}
        <ProductWhyChoose 
          title="Why choose Augment Coding Agent for your development?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />

        {/* Customer Success Logos - Oracle RC56v0 style */}
        <ProductCustomerLogos
          title="Augment Coding Agent customer successes"
          description="Learn why development teams across all industries use Augment Coding Agent to build better software, improve code quality, and accelerate delivery. Click on a logo to learn more."
          viewMoreText="View more customer successes"
          viewMoreHref="/book-demo"
          logos={customerLogos}
        />

        {/* Resources Section - Oracle RC30v0 style */}
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />

        {/* CTA Banner - Oracle RC59v1 Playbook style */}
        <ProductCTABanner
          title="The Augment AI Development Playbook series"
          description="We've compiled the secrets to our AI-powered development strategy, implementation best practices, and transformation methodology. And we want to share them with you."
          image="/products/coding-agent/03.png"
          buttonText="Get the details"
          buttonHref="/book-demo"
        />

        {/* Get Started Section - Oracle RC27v0 style */}
        <ProductGetStarted
          title="Get Started"
          actions={getStartedActions}
        />
      </main>
    </div>
  );
}
