import { ProductHero } from "@/components/product/ProductHero";
import { ProductPromo } from "@/components/product/ProductPromo";
import { ProductExplorer } from "@/components/product/ProductExplorer";
import { ProductWhyChoose } from "@/components/product/ProductWhyChoose";
import { ProductCustomerLogos } from "@/components/product/ProductCustomerLogos";
import { ProductResources } from "@/components/product/ProductResources";
import { ProductCTABanner } from "@/components/product/ProductCTABanner";
import { ProductGetStarted } from "@/components/product/ProductGetStarted";
import { Breadcrumb } from "@/components/ui/Breadcrumb";


export default function AugmentFlowPage() {
  const ctaButtons = [
    {
      text: "Try Augment Flow Now",
      href: "https://flow.augment.cfd/",
      variant: "primary" as const
    },
    {
      text: "View Agents Directory",
      href: "https://flow.augment.cfd/agents",
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "workflow-automation",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      title: "Webinar: Mastering AI-Powered Workflow Automation",
      description: "Learn how to transform your daily tasks with AI agents that work across 200+ applications, from Gmail to Slack to GitHub.",
      ctaText: "Register now",
      ctaLink: "/webinars/workflow-automation",
      target: "_blank" as const
    },
    {
      id: "background-agents",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      title: "Background Agents: The Future of Smart Scheduling",
      description: "Discover how background agents adapt, learn patterns, and evolve your workflows over time without manual intervention.",
      ctaText: "Learn more",
      ctaLink: "/features/background-agents",
      target: "_blank" as const
    },
    {
      id: "integration-guide",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      title: "200+ App Integrations: Complete Setup Guide",
      description: "Step-by-step guide to connecting your favorite apps and creating seamless workflows with natural language commands.",
      ctaText: "Download guide (PDF)",
      ctaLink: "/resources/integration-setup-guide.pdf",
      target: "_blank" as const
    },
    {
      id: "success-stories",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      title: "Customer Success: 10x Productivity Boost",
      description: "See how companies are achieving dramatic productivity improvements with AI agents that work even when they're away.",
      ctaText: "Read success stories",
      ctaLink: "/customers/success-stories",
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "workflow-automation",
      title: "Workflow Automation",
      content: {
        title: "AI agents that turn words into actions",
        description: "Transform your daily tasks with intelligent automation that connects Gmail, Notion, GitHub, Slack, and 200+ other apps. Simply describe what you want to accomplish, and our AI agents handle the complex workflows across multiple platforms.",
        buttons: [
          { text: "See automation examples", href: "/product/flow/automation", variant: "primary" as const },
          { text: "Try workflow builder", href: "https://flow.augment.cfd/builder", variant: "secondary" as const }
        ],
        features: {
          title: "Key Capabilities",
          items: [
            "Natural language workflow creation",
            "200+ app integrations", 
            "Cross-platform task execution",
            "Real-time status monitoring",
            "Intelligent error handling",
            "Workflow templates library",
            "Custom agent configuration",
            "Multi-step process automation"
          ]
        },
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        imageAlt: "Augment Flow workflow automation dashboard"
      }
    },
    {
      id: "background-agents",
      title: "Background Agents",
      content: {
        title: "Smart scheduling for complex workflows",
        description: "Experience the difference between automation and anticipation. Our background agents don't just follow scripts - they adapt, learn patterns, and evolve your workflows over time, working continuously even when you're away.",
        buttons: [
          { text: "Explore background agents", href: "/product/flow/background-agents", variant: "primary" as const },
          { text: "See agent examples", href: "/product/flow/agents/examples", variant: "secondary" as const }
        ],
        features: {
          title: "Advanced Features",
          items: [
            "Pattern recognition and learning",
            "Predictive task scheduling",
            "Adaptive workflow optimization",
            "Continuous background monitoring",
            "Smart resource allocation",
            "Proactive issue resolution",
            "Intelligent priority management",
            "Self-improving algorithms"
          ]
        },
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        imageAlt: "Background agents working interface"
      }
    },
    {
      id: "app-integrations",
      title: "App Integrations",
      content: {
        title: "200+ apps, one simple command",
        description: "Connect your entire digital workspace with seamless integrations across Gmail, Notion, GitHub, Slack, Twitter, Google Calendar, and hundreds more. Your words become actions across every platform you use daily.",
        buttons: [
          { text: "Browse all integrations", href: "/product/flow/integrations", variant: "primary" as const },
          { text: "Request new integration", href: "/product/flow/integrations/request", variant: "secondary" as const }
        ],
        features: {
          title: "Popular Integrations",
          items: [
            "Gmail & Google Workspace",
            "Slack & Microsoft Teams",
            "Notion & Obsidian",
            "GitHub & GitLab",
            "Twitter & LinkedIn",
            "Salesforce & HubSpot",
            "Zoom & Calendar apps",
            "Zapier & Make.com"
          ]
        },
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        imageAlt: "App integrations dashboard"
      }
    },
    {
      id: "agentic-ai",
      title: "Agentic AI",
      content: {
        title: "Agentic AI for everyone",
        description: "Whether you're a marketer, developer, recruiter, or founder, Augment Flow adapts to your specific needs. Our agentic AI understands context, learns from your preferences, and executes complex multi-step workflows autonomously.",
        buttons: [
          { text: "See role-specific examples", href: "/product/flow/roles", variant: "primary" as const },
          { text: "Try personalized demo", href: "/product/flow/demo", variant: "secondary" as const }
        ],
        features: {
          title: "Role-Based Solutions",
          items: [
            "Marketing campaign automation",
            "Development workflow optimization",
            "Recruitment process streamlining",
            "Founder productivity enhancement",
            "Sales pipeline management",
            "Content creation workflows",
            "Data analysis automation",
            "Customer support optimization"
          ]
        },
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        imageAlt: "Agentic AI interface for different roles"
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "AI agents that work even when you're away",
      description: "Experience true automation with AI agents that continue working in the background, adapting to changing conditions and executing complex workflows across 200+ apps without your constant supervision.",
      link: {
        text: "Learn about background agent technology",
        href: "/product/flow/background-agents"
      }
    },
    {
      number: "02", 
      title: "Natural language to action across every platform",
      description: "Simply describe what you want to accomplish in plain English. Our AI understands context, connects the right apps, and executes multi-step workflows across Gmail, Slack, Notion, GitHub, and hundreds more platforms."
    },
    {
      number: "03",
      title: "Smart workflows that learn and evolve", 
      description: "Go beyond static automation with intelligent workflows that adapt, learn patterns, and optimize themselves over time. Your competitive advantage runs in the background while others manually manage tasks."
    },
    {
      number: "04",
      title: "The invisible layer where chaos becomes clarity",
      description: "Transform scattered tasks across multiple apps into seamless, intelligent workflows. Our agents don't just follow scripts - they understand context, anticipate needs, and evolve your processes continuously."
    }
  ];

  const customerReference = {
    title: "Customer Success Story",
    company: "TechStartup scales 10x with Augment Flow automation",
    description: "A fast-growing startup automated their entire marketing and sales pipeline using Augment Flow, reducing manual work by 80% and scaling from 10 to 100 customers without adding headcount.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1226&q=80",
    linkText: "Read the success story",
    linkHref: "/customers/techstartup-success"
  };

  const customerLogos = [
    {
      name: "Founders Inc",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=80&fit=crop&crop=center",
      href: "/customers/founders-inc",
      alt: "Founders Inc logo"
    },
    {
      name: "Bengaluru Tech Hub",
      image: "https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=200&h=80&fit=crop&crop=center",
      href: "/customers/bengaluru-tech",
      alt: "Bengaluru Tech Hub logo"
    },
    {
      name: "Koramangala Labs",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=80&fit=crop&crop=center",
      href: "/customers/koramangala-labs", 
      alt: "Koramangala Labs logo"
    },
    {
      name: "AI Robotics Co",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=80&fit=crop&crop=center",
      href: "/customers/ai-robotics",
      alt: "AI Robotics Co logo"
    },
    {
      name: "3D Print Solutions", 
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=200&h=80&fit=crop&crop=center",
      href: "/customers/3d-print-solutions",
      alt: "3D Print Solutions logo"
    },
    {
      name: "GPU Computing Inc",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=200&h=80&fit=crop&crop=center",
      href: "/customers/gpu-computing",
      alt: "GPU Computing Inc logo"
    },
    {
      name: "SaaS Growth Co",
      image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=200&h=80&fit=crop&crop=center",
      href: "/customers/saas-growth",
      alt: "SaaS Growth Co logo"
    },
    {
      name: "Influencer Marketing Pro",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=80&fit=crop&crop=center",
      href: "/customers/influencer-marketing", 
      alt: "Influencer Marketing Pro logo"
    },
    {
      name: "College Life AI",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=200&h=80&fit=crop&crop=center",
      href: "/customers/college-life-ai",
      alt: "College Life AI logo"
    },
    {
      name: "AWS Automation", 
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=200&h=80&fit=crop&crop=center",
      href: "/customers/aws-automation",
      alt: "AWS Automation logo"
    },
    {
      name: "Workflow Wizards",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=80&fit=crop&crop=center",
      href: "/customers/workflow-wizards",
      alt: "Workflow Wizards logo"
    },
    {
      name: "Productivity Plus",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=80&fit=crop&crop=center", 
      href: "/customers/productivity-plus",
      alt: "Productivity Plus logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in Augment Flow",
      content: {
        title: "Stay updated with AI workflow innovations",
        description: "Discover the latest features, integrations, and capabilities in Augment Flow. From new app connections to enhanced AI agents, see how we're pushing the boundaries of workflow automation.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        links: [
          { text: "Latest product updates and features", href: "/resources/updates" },
          { text: "New app integrations this month", href: "/resources/integrations" },
          { text: "Join our community Discord", href: "https://discord.gg/augmentflow" },
          { text: "Follow us on X for real-time updates", href: "https://x.com/augmentflowai" }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare Augment Flow",
      content: {
        title: "See why Augment Flow leads workflow automation",
        description: "Augment Flow goes beyond traditional automation tools with true agentic AI that understands context, learns patterns, and works autonomously across 200+ applications.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        links: [
          { text: "Compare with Zapier and Make.com", href: "/resources/compare-automation" },
          { text: "Augment Flow vs traditional workflows", href: "/resources/traditional-vs-ai" },
          { text: "ROI calculator for workflow automation", href: "/resources/roi-calculator" },
          { text: "Migration guide from other platforms", href: "/resources/migration-guide" }
        ]
      }
    },
    {
      id: "community",
      title: "Join the AI community",
      content: {
        title: "Connect with workflow automation experts",
        description: "Join thousands of professionals, developers, and AI enthusiasts sharing workflows, best practices, and success stories in our vibrant community.",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        links: [
          { text: "Join Discord community", href: "https://discord.gg/augmentflow", target: "_blank" },
          { text: "Workflow sharing forum", href: "/community/workflows" },
          { text: "Developer API community", href: "/community/developers" },
          { text: "Share your automation success", href: "/community/success-stories" }
        ]
      }
    },
    {
      id: "learning",
      title: "Master workflow automation",
      content: {
        title: "Learn to build powerful AI workflows",
        description: "Master the art of AI-powered workflow automation with comprehensive tutorials, best practices, and hands-on examples for every skill level.",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        links: [
          { text: "Workflow automation masterclass", href: "/learning/masterclass" },
          { text: "API integration tutorials", href: "/learning/api-tutorials" },
          { text: "Best practices guide", href: "/learning/best-practices" },
          { text: "Advanced agent configuration", href: "/learning/advanced-agents" }
        ]
      }
    },
    {
      id: "support",
      title: "Get help and support",
      content: {
        title: "Expert support for your workflows",
        description: "Access comprehensive documentation, expert guidance, and dedicated support to maximize your workflow automation success with Augment Flow.",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        links: [
          { text: "Contact technical support", href: "/support/contact" },
          { text: "Browse documentation", href: "/support/docs" },
          { text: "Workflow setup assistance", href: "/support/setup" },
          { text: "Schedule expert consultation", href: "/support/consultation" }
        ]
      }
    },
    {
      id: "content",
      title: "Explore workflow content",
      content: {
        title: "Discover automation insights and resources",
        description: "Explore our extensive library of workflow templates, case studies, automation guides, and research to stay ahead in the world of AI-powered productivity.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        links: [
          { text: "Workflow template library", href: "/resources/templates" },
          { text: "Customer automation case studies", href: "/resources/case-studies" },
          { text: "Download automation whitepapers", href: "/resources/whitepapers" },
          { text: "Follow our automation blog", href: "/blog" }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Try Augment Flow",
      href: "https://flow.augment.cfd/",
      icon: "demo"
    },
    {
      title: "Browse agents",
      href: "https://flow.augment.cfd/agents",
      icon: "tour"
    },
    {
      title: "Contact sales",
      href: "/contact",
      icon: "contact"
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="sr-only">Augment Flow | AI-Powered Workflow Automation Platform</h1>
        
        {/* Breadcrumbs - automatically generated from /product/flow route */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="Augment Flow"
          description="AI Agent that works even when you're away. Your words become actions across every platform you use. 200+ apps working towards a future where technology acts, not just responds. Experience the difference between automation and anticipation with intelligent agents that adapt, learn, and evolve your workflows."
          ctaButtons={ctaButtons}
          mediaType="video"
          mediaUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          videoThumbnail="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          mediaAlt="Augment Flow dashboard showing AI agents working across multiple applications"
        />

        {/* Product Promotional Cards */}
        <ProductPromo cards={promoCards} />

        {/* Product Explorer - tabbed interface */}
        <ProductExplorer title="Augment Flow" tabs={explorerTabs} />

        {/* Why Choose Section */}
        <ProductWhyChoose 
          title="Why choose Augment Flow for your workflows?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />

        {/* Customer Success Logos */}
        <ProductCustomerLogos
          title="Augment Flow customer successes"
          description="Learn why companies across all industries use Augment Flow to automate workflows, boost productivity, and scale operations. Click on a logo to learn more."
          viewMoreText="View more customer successes"
          viewMoreHref="/customers"
          logos={customerLogos}
        />

        {/* Resources Section */}
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />

        {/* CTA Banner */}
        <ProductCTABanner
          title="The Augment Flow Automation Playbook"
          description="We've compiled the secrets to our AI-powered workflow automation strategy, implementation best practices, and transformation methodology. And we want to share them with you."
          image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
          buttonText="Get the playbook"
          buttonHref="/playbook/automation"
        />

        {/* Get Started Section */}
        <ProductGetStarted
          title="Get Started"
          actions={getStartedActions}
        />
      </main>
    </div>
  );
}
