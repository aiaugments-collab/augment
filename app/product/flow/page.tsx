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
      image: "/products/flow/02.png",
      title: "Webinar: Mastering AI-Powered Workflow Automation",
      description: "Learn how to transform your daily tasks with AI agents that work across 200+ applications, from Gmail to Slack to GitHub.",
      ctaText: "Register now",
      ctaLink: "https://flow.augment.cfd/",
      target: "_blank" as const
    },
    {
      id: "background-agents",
      image: "/products/flow/03.png",
      title: "Background Agents: The Future of Smart Scheduling",
      description: "Discover how background agents adapt, learn patterns, and evolve your workflows over time without manual intervention.",
      ctaText: "Learn more",
      ctaLink: "https://flow.augment.cfd/",
      target: "_blank" as const
    },
    {
      id: "integration-guide",
      image: "/products/flow/04.png",
      title: "200+ App Integrations: Complete Setup Guide",
      description: "Step-by-step guide to connecting your favorite apps and creating seamless workflows with natural language commands.",
      ctaText: "Download guide (PDF)",
      ctaLink: "https://flow.augment.cfd/",
      target: "_blank" as const
    },
    {
      id: "success-stories",
      image: "/products/flow/05.png",
      title: "Customer Success: 10x Productivity Boost",
      description: "See how companies are achieving dramatic productivity improvements with AI agents that work even when they're away.",
      ctaText: "Read success stories",
      ctaLink: "https://flow.augment.cfd/",
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
          { text: "See automation examples", href: "https://flow.augment.cfd/", variant: "primary" as const },
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
        image: "/products/flow/02.png",
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
          { text: "Explore background agents", href: "https://flow.augment.cfd/", variant: "primary" as const },
          { text: "See agent examples", href: "https://flow.augment.cfd/agents", variant: "secondary" as const }
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
        image: "/products/flow/03.png",
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
          { text: "Browse all integrations", href: "https://flow.augment.cfd/", variant: "primary" as const },
          { text: "Request new integration", href: "https://flow.augment.cfd/", variant: "secondary" as const }
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
        image: "/products/flow/04.png",
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
          { text: "See role-specific examples", href: "https://flow.augment.cfd/", variant: "primary" as const },
          { text: "Try personalized demo", href: "https://flow.augment.cfd/", variant: "secondary" as const }
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
        image: "/products/flow/05.png",
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
        href: "https://flow.augment.cfd/"
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
    image: "/products/flow/01.png",
    linkText: "Read the success story",
    linkHref: "https://flow.augment.cfd/"
  };

  const customerLogos = [
    {
      name: "GitHub",
      image: "https://logo.clearbit.com/github.com",
      href: "https://flow.augment.cfd/",
      alt: "GitHub logo"
    },
    {
      name: "Notion",
      image: "https://logo.clearbit.com/notion.so",
      href: "https://flow.augment.cfd/",
      alt: "Notion logo"
    },
    {
      name: "Slack",
      image: "https://logo.clearbit.com/slack.com",
      href: "https://flow.augment.cfd/", 
      alt: "Slack logo"
    },
    {
      name: "Discord",
      image: "https://logo.clearbit.com/discord.com",
      href: "https://flow.augment.cfd/",
      alt: "Discord logo"
    },
    {
      name: "Figma", 
      image: "https://logo.clearbit.com/figma.com",
      href: "https://flow.augment.cfd/",
      alt: "Figma logo"
    },
    {
      name: "Linear",
      image: "https://logo.clearbit.com/linear.app",
      href: "https://flow.augment.cfd/",
      alt: "Linear logo"
    },
    {
      name: "Vercel",
      image: "https://logo.clearbit.com/vercel.com",
      href: "https://flow.augment.cfd/",
      alt: "Vercel logo"
    },
    {
      name: "Stripe",
      image: "https://logo.clearbit.com/stripe.com",
      href: "https://flow.augment.cfd/", 
      alt: "Stripe logo"
    },
    {
      name: "Zapier",
      image: "https://logo.clearbit.com/zapier.com",
      href: "https://flow.augment.cfd/",
      alt: "Zapier logo"
    },
    {
      name: "Monday", 
      image: "https://logo.clearbit.com/monday.com",
      href: "https://flow.augment.cfd/",
      alt: "Monday logo"
    },
    {
      name: "Airtable",
      image: "https://logo.clearbit.com/airtable.com",
      href: "https://flow.augment.cfd/",
      alt: "Airtable logo"
    },
    {
      name: "Typeform",
      image: "https://logo.clearbit.com/typeform.com", 
      href: "https://flow.augment.cfd/",
      alt: "Typeform logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in Augment Flow",
      content: {
        title: "Stay updated with AI workflow innovations",
        description: "Discover the latest features, integrations, and capabilities in Augment Flow. From new app connections to enhanced AI agents, see how we're pushing the boundaries of workflow automation.",
        image: "/products/flow/02.png",
        links: [
          { text: "Latest product updates and features", href: "https://flow.augment.cfd/" },
          { text: "New app integrations this month", href: "https://flow.augment.cfd/" },
          { text: "Join our community Discord", href: "https://flow.augment.cfd/" },
          { text: "Follow us on X for real-time updates", href: "https://flow.augment.cfd/" }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare Augment Flow",
      content: {
        title: "See why Augment Flow leads workflow automation",
        description: "Augment Flow goes beyond traditional automation tools with true agentic AI that understands context, learns patterns, and works autonomously across 200+ applications.",
        image: "/products/flow/03.png",
        links: [
          { text: "Compare with Zapier and Make.com", href: "https://flow.augment.cfd/" },
          { text: "Augment Flow vs traditional workflows", href: "https://flow.augment.cfd/" },
          { text: "ROI calculator for workflow automation", href: "https://flow.augment.cfd/" },
          { text: "Migration guide from other platforms", href: "https://flow.augment.cfd/" }
        ]
      }
    },
    {
      id: "community",
      title: "Join the AI community",
      content: {
        title: "Connect with workflow automation experts",
        description: "Join thousands of professionals, developers, and AI enthusiasts sharing workflows, best practices, and success stories in our vibrant community.",
        image: "/products/flow/04.png",
        links: [
          { text: "Join Discord community", href: "https://flow.augment.cfd/", target: "_blank" },
          { text: "Workflow sharing forum", href: "https://flow.augment.cfd/" },
          { text: "Developer API community", href: "https://flow.augment.cfd/" },
          { text: "Share your automation success", href: "https://flow.augment.cfd/" }
        ]
      }
    },
    {
      id: "learning",
      title: "Master workflow automation",
      content: {
        title: "Learn to build powerful AI workflows",
        description: "Master the art of AI-powered workflow automation with comprehensive tutorials, best practices, and hands-on examples for every skill level.",
        image: "/products/flow/05.png",
        links: [
          { text: "Workflow automation masterclass", href: "https://flow.augment.cfd/" },
          { text: "API integration tutorials", href: "https://flow.augment.cfd/" },
          { text: "Best practices guide", href: "https://flow.augment.cfd/" },
          { text: "Advanced agent configuration", href: "https://flow.augment.cfd/" }
        ]
      }
    },
    {
      id: "support",
      title: "Get help and support",
      content: {
        title: "Expert support for your workflows",
        description: "Access comprehensive documentation, expert guidance, and dedicated support to maximize your workflow automation success with Augment Flow.",
        image: "/products/flow/01.png",
        links: [
          { text: "Contact technical support", href: "https://flow.augment.cfd/" },
          { text: "Browse documentation", href: "https://flow.augment.cfd/" },
          { text: "Workflow setup assistance", href: "https://flow.augment.cfd/" },
          { text: "Schedule expert consultation", href: "https://flow.augment.cfd/" }
        ]
      }
    },
    {
      id: "content",
      title: "Explore workflow content",
      content: {
        title: "Discover automation insights and resources",
        description: "Explore our extensive library of workflow templates, case studies, automation guides, and research to stay ahead in the world of AI-powered productivity.",
        image: "/products/flow/02.png",
        links: [
          { text: "Workflow template library", href: "https://flow.augment.cfd/" },
          { text: "Customer automation case studies", href: "https://flow.augment.cfd/" },
          { text: "Download automation whitepapers", href: "https://flow.augment.cfd/" },
          { text: "Follow our automation blog", href: "https://flow.augment.cfd/" }
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
      href: "https://flow.augment.cfd/",
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
          title="Text-Controlled Automation Apps"
          description="AI Agent that works even when you're away. Your words become actions across every platform you use. 200+ apps working towards a future where technology acts, not just responds. Experience the difference between automation and anticipation with intelligent agents that adapt, learn, and evolve your workflows."
          ctaButtons={ctaButtons}
          mediaType="video"
          mediaUrl="/products/flow/01.png"
          videoThumbnail="/products/flow/01.png"
          mediaAlt="Augment Flow dashboard showing AI agents working across multiple applications"
        />

        {/* Product Promotional Cards */}
        <ProductPromo cards={promoCards} />

        {/* Product Explorer - tabbed interface */}
        <ProductExplorer title="Text-Controlled Automation Apps" tabs={explorerTabs} />

        {/* Why Choose Section */}
        <ProductWhyChoose 
          title="Why choose Text-Controlled Automation Apps for your workflows?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />

        {/* Customer Success Logos */}
        <ProductCustomerLogos
          title="Augment Flow customer successes"
          description="Learn why companies across all industries use Augment Flow to automate workflows, boost productivity, and scale operations. Click on a logo to learn more."
          viewMoreText="View more customer successes"
          viewMoreHref="https://flow.augment.cfd/"
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
          image="/products/flow/03.png"
          buttonText="Get the playbook"
          buttonHref="https://flow.augment.cfd/"
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
