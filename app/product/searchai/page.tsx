import { ProductHero } from "@/components/product/ProductHero";
import { ProductPromo } from "@/components/product/ProductPromo";
import { ProductExplorer } from "@/components/product/ProductExplorer";
import { ProductWhyChoose } from "@/components/product/ProductWhyChoose";
import { ProductCustomerLogos } from "@/components/product/ProductCustomerLogos";
import { ProductResources } from "@/components/product/ProductResources";
import { ProductCTABanner } from "@/components/product/ProductCTABanner";
import { ProductGetStarted } from "@/components/product/ProductGetStarted";
import { Breadcrumb } from "@/components/ui/Breadcrumb";


export default function SearchAIPage() {
  const ctaButtons = [
    {
      text: "Try SearchAI Now",
      href: "https://searchai.augment.cfd/",
      variant: "primary" as const
    },
    {
      text: "Start Deep Research",
      href: "https://searchai.augment.cfd/search",
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "ai-research-guide",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      title: "Webinar: Mastering AI-Powered Research",
      description: "Learn advanced research techniques using AI search engines, natural language queries, and intelligent filtering for comprehensive investigations.",
      ctaText: "Register today",
      ctaLink: "/webinars/ai-research-mastery",
      target: "_blank" as const
    },
    {
      id: "search-vs-perplexity",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      title: "SearchAI vs Traditional Search: The Future of Research",
      description: "Discover how SearchAI's intelligent generative UI and multi-model support delivers superior research results compared to traditional search engines.",
      ctaText: "Read comparison",
      ctaLink: "/reports/searchai-vs-traditional",
      target: "_blank" as const
    },
    {
      id: "research-productivity",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      title: "10x Your Research Productivity with AI Search",
      description: "Complete guide to leveraging AI-powered search for academic research, market analysis, and comprehensive fact-checking workflows.",
      ctaText: "Download guide (PDF)",
      ctaLink: "/resources/research-productivity-guide.pdf",
      target: "_blank" as const
    },
    {
      id: "researcher-success",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      title: "Success Story: Research Team Saves 70% Time",
      description: "See how a university research team dramatically improved their literature review process and data analysis using SearchAI's intelligent search capabilities.",
      ctaText: "Read success story",
      ctaLink: "/customers/university-research-success",
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "intelligent-search",
      title: "Intelligent Search",
      content: {
        title: "Natural language understanding meets deep research",
        description: "Ask questions in plain English and get comprehensive, intelligent responses with interactive UI components. Our AI understands context, nuance, and research intent to deliver exactly what you're looking for.",
        buttons: [
          { text: "Try intelligent search", href: "https://searchai.augment.cfd/", variant: "primary" as const },
          { text: "See search examples", href: "/product/searchai/examples", variant: "secondary" as const }
        ],
        features: {
          title: "Search Capabilities",
          items: [
            "Natural language question understanding",
            "Intelligent response generation",
            "Interactive UI components",
            "Real-time AI model switching",
            "Context-aware results",
            "Multi-source information synthesis",
            "Advanced filtering options",
            "Safe search with time ranges"
          ]
        },
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        imageAlt: "SearchAI intelligent search interface with natural language processing"
      }
    },
    {
      id: "ai-models",
      title: "Multiple AI Models",
      content: {
        title: "Choose the perfect AI model for your research",
        description: "Switch between multiple leading AI models in real-time to get the best results for different types of research. From quick answers to deep reasoning, choose the AI that fits your needs.",
        buttons: [
          { text: "Explore AI models", href: "/product/searchai/models", variant: "primary" as const },
          { text: "Model comparison guide", href: "/product/searchai/model-comparison", variant: "secondary" as const }
        ],
        features: {
          title: "Supported AI Models",
          items: [
            "OpenAI (GPT-4, GPT-3.5)",
            "Google Generative AI",
            "Anthropic Claude",
            "Azure OpenAI",
            "Groq & DeepSeek",
            "xAI (Grok)",
            "Local models via Ollama",
            "Reasoning models with thought processes"
          ]
        },
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        imageAlt: "Multiple AI models interface for research optimization"
      }
    },
    {
      id: "advanced-search",
      title: "Advanced Search",
      content: {
        title: "Deep research with multiple search providers",
        description: "Go beyond surface-level results with advanced search capabilities that tap into multiple search engines, databases, and specialized sources for comprehensive research coverage.",
        buttons: [
          { text: "Try advanced search", href: "/product/searchai/advanced", variant: "primary" as const },
          { text: "Search provider guide", href: "/product/searchai/providers", variant: "secondary" as const }
        ],
        features: {
          title: "Search Providers",
          items: [
            "Tavily AI neural search",
            "SearXNG self-hosted search",
            "Exa semantic search",
            "URL-specific search",
            "Video search capabilities",
            "Academic database access",
            "Real-time web crawling",
            "Custom search depth control"
          ]
        },
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        imageAlt: "Advanced search interface with multiple data sources"
      }
    },
    {
      id: "research-tools",
      title: "Research Tools",
      content: {
        title: "Complete research workflow management",
        description: "Manage your entire research process with persistent chat history, shareable results, secure authentication, and collaborative features designed for serious researchers and teams.",
        buttons: [
          { text: "Explore research tools", href: "/product/searchai/tools", variant: "primary" as const },
          { text: "Team collaboration guide", href: "/product/searchai/collaboration", variant: "secondary" as const }
        ],
        features: {
          title: "Research Features",
          items: [
            "Persistent chat history",
            "Shareable search results",
            "Secure user authentication",
            "Google Social Login",
            "Research session management",
            "Export & citation tools",
            "Team collaboration",
            "Research project organization"
          ]
        },
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        imageAlt: "Research workflow management tools and collaboration features"
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Intelligent search that understands your research intent",
      description: "Unlike traditional search engines, SearchAI uses advanced natural language processing to understand the context and intent behind your questions, delivering precisely targeted results with interactive components that enhance comprehension.",
      link: {
        text: "Learn about our AI search technology",
        href: "/product/searchai/technology"
      }
    },
    {
      number: "02", 
      title: "Multiple AI models for optimal research results",
      description: "Switch between leading AI models in real-time to get the best results for different research scenarios. From quick factual queries to deep analytical reasoning, choose the perfect AI for your specific research needs."
    },
    {
      number: "03",
      title: "Deep research capabilities across multiple sources", 
      description: "Access comprehensive information through multiple search providers, academic databases, and specialized sources. Get beyond surface-level results with advanced filtering, safe search options, and customizable search depth."
    },
    {
      number: "04",
      title: "Complete research workflow management",
      description: "Manage your entire research process with persistent history, shareable results, team collaboration features, and secure authentication. Built for researchers who need professional-grade tools and workflow management."
    }
  ];

  const customerReference = {
    title: "Customer Success Story",
    company: "University Research Lab achieves 70% faster literature reviews",
    description: "A leading university research team transformed their literature review process using SearchAI's intelligent search and multi-model AI capabilities, reducing research time from weeks to days while improving result quality.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1226&q=80",
    linkText: "Read the research success story",
    linkHref: "/customers/university-research-lab"
  };

  const customerLogos = [
    {
      name: "Stanford Research",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=200&h=80&fit=crop&crop=center",
      href: "/customers/stanford-research",
      alt: "Stanford Research logo"
    },
    {
      name: "MIT Innovation Lab",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=80&fit=crop&crop=center",
      href: "/customers/mit-innovation",
      alt: "MIT Innovation Lab logo"
    },
    {
      name: "McKinsey Research",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=80&fit=crop&crop=center",
      href: "/customers/mckinsey-research", 
      alt: "McKinsey Research logo"
    },
    {
      name: "Oxford Analytics",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=80&fit=crop&crop=center",
      href: "/customers/oxford-analytics",
      alt: "Oxford Analytics logo"
    },
    {
      name: "Harvard Business Review", 
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200&h=80&fit=crop&crop=center",
      href: "/customers/harvard-business-review",
      alt: "Harvard Business Review logo"
    },
    {
      name: "Reuters Investigation",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=200&h=80&fit=crop&crop=center",
      href: "/customers/reuters-investigation",
      alt: "Reuters Investigation logo"
    },
    {
      name: "Nature Research",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=200&h=80&fit=crop&crop=center",
      href: "/customers/nature-research",
      alt: "Nature Research logo"
    },
    {
      name: "Goldman Sachs Research",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=200&h=80&fit=crop&crop=center",
      href: "/customers/goldman-sachs-research", 
      alt: "Goldman Sachs Research logo"
    },
    {
      name: "Cambridge Analytics",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=200&h=80&fit=crop&crop=center",
      href: "/customers/cambridge-analytics",
      alt: "Cambridge Analytics logo"
    },
    {
      name: "Deloitte Insights", 
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=80&fit=crop&crop=center",
      href: "/customers/deloitte-insights",
      alt: "Deloitte Insights logo"
    },
    {
      name: "RAND Corporation",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=80&fit=crop&crop=center",
      href: "/customers/rand-corporation",
      alt: "RAND Corporation logo"
    },
    {
      name: "Brookings Institution",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=80&fit=crop&crop=center", 
      href: "/customers/brookings-institution",
      alt: "Brookings Institution logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in SearchAI",
      content: {
        title: "Latest AI search innovations and features",
        description: "Stay updated with the newest capabilities in AI-powered search, from advanced model integrations to enhanced research tools and collaborative features.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        links: [
          { text: "Latest AI model integrations", href: "/resources/model-updates" },
          { text: "New search provider additions", href: "/resources/search-providers" },
          { text: "Research workflow enhancements", href: "/resources/workflow-updates" },
          { text: "UI and experience improvements", href: "/resources/ui-updates" }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare SearchAI",
      content: {
        title: "See why SearchAI leads AI-powered research",
        description: "SearchAI combines the power of multiple AI models with advanced search providers and intelligent UI to deliver superior research capabilities compared to traditional search engines.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        links: [
          { text: "SearchAI vs Google Search", href: "/resources/compare-google" },
          { text: "SearchAI vs Perplexity", href: "/resources/compare-perplexity" },
          { text: "Traditional vs AI search comparison", href: "/resources/traditional-vs-ai-search" },
          { text: "Research efficiency calculator", href: "/resources/efficiency-calculator" }
        ]
      }
    },
    {
      id: "community",
      title: "Join the research community",
      content: {
        title: "Connect with researchers and AI enthusiasts",
        description: "Join a growing community of researchers, academics, analysts, and AI enthusiasts sharing insights, best practices, and discoveries made with SearchAI.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        links: [
          { text: "Join researcher Discord community", href: "https://discord.gg/searchai", target: "_blank" },
          { text: "Research methodology forum", href: "/community/methodology" },
          { text: "Academic user groups", href: "/community/academic" },
          { text: "Share your research findings", href: "/community/findings" }
        ]
      }
    },
    {
      id: "learning",
      title: "Master AI-powered research",
      content: {
        title: "Learn advanced research techniques",
        description: "Master the art of AI-powered research with comprehensive guides, tutorials, and best practices for academic research, market analysis, and investigative work.",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        links: [
          { text: "AI search research masterclass", href: "/learning/research-masterclass" },
          { text: "Advanced query techniques", href: "/learning/query-techniques" },
          { text: "Multi-model research strategies", href: "/learning/multi-model-research" },
          { text: "Research workflow optimization", href: "/learning/workflow-optimization" }
        ]
      }
    },
    {
      id: "support",
      title: "Get research support",
      content: {
        title: "Expert help for your research needs",
        description: "Access comprehensive support resources, expert guidance, and specialized assistance to maximize your research productivity with SearchAI's advanced capabilities.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        links: [
          { text: "Contact research support", href: "/support/research-contact" },
          { text: "Browse documentation", href: "/support/docs" },
          { text: "Research setup assistance", href: "/support/research-setup" },
          { text: "Schedule expert consultation", href: "/support/research-consultation" }
        ]
      }
    },
    {
      id: "content",
      title: "Explore research content",
      content: {
        title: "Discover research insights and methodologies",
        description: "Explore our extensive library of research guides, case studies, methodology papers, and analysis reports to enhance your research capabilities and outcomes.",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        links: [
          { text: "Research methodology library", href: "/resources/methodology" },
          { text: "Customer research case studies", href: "/resources/research-cases" },
          { text: "Download research whitepapers", href: "/resources/research-papers" },
          { text: "Follow our research blog", href: "/blog/research" }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Try SearchAI",
      href: "https://searchai.augment.cfd/",
      icon: "demo"
    },
    {
      title: "Research demo",
      href: "https://searchai.augment.cfd/demo",
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
        <h1 className="sr-only">SearchAI | AI-Powered Search Engine for Deep Research</h1>
        
        {/* Breadcrumbs - automatically generated from /product/searchai route */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="SearchAI"
          description="A powerful AI-powered search engine with intelligent generative UI for deep research. Ask questions in natural language and get comprehensive, interactive responses with multiple AI model support. Perfect for researchers, analysts, and anyone who needs to go beyond surface-level search results."
          ctaButtons={ctaButtons}
          mediaType="video"
          mediaUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          videoThumbnail="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          mediaAlt="SearchAI intelligent search interface with natural language processing and AI models"
        />

        {/* Product Promotional Cards */}
        <ProductPromo cards={promoCards} />

        {/* Product Explorer - tabbed interface */}
        <ProductExplorer title="SearchAI" tabs={explorerTabs} />

        {/* Why Choose Section */}
        <ProductWhyChoose 
          title="Why choose SearchAI for your research needs?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />

        {/* Customer Success Logos */}
        <ProductCustomerLogos
          title="SearchAI research successes"
          description="Learn why leading universities, research institutions, and analytical organizations use SearchAI to enhance their research capabilities and accelerate discovery. Click on a logo to learn more."
          viewMoreText="View more research successes"
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
          title="The SearchAI Research Methodology Guide"
          description="We've compiled advanced AI search techniques, research best practices, and methodology frameworks used by leading researchers. Learn how to maximize your research efficiency and quality."
          image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
          buttonText="Get the research guide"
          buttonHref="/resources/research-methodology-guide"
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