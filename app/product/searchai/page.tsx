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
      text: "Try AI-Powered Search Engine Now",
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
      image: "/products/searchai/02.png",
      title: "Webinar: Mastering AI-Powered Research",
      description: "Learn advanced research techniques using AI search engines, natural language queries, and intelligent filtering for comprehensive investigations.",
      ctaText: "Register today",
      ctaLink: "https://searchai.augment.cfd/",
      target: "_blank" as const
    },
    {
      id: "search-vs-perplexity",
      image: "/products/searchai/03.png",
      title: "AI-Powered Search Engine vs Traditional Search: The Future of Research",
      description: "Discover how AI-Powered Search Engine's intelligent generative UI and multi-model support delivers superior research results compared to traditional search engines.",
      ctaText: "Read comparison",
      ctaLink: "https://searchai.augment.cfd/",
      target: "_blank" as const
    },
    {
      id: "research-productivity",
      image: "/products/searchai/04.png",
      title: "10x Your Research Productivity with AI Search",
      description: "Complete guide to leveraging AI-powered search for academic research, market analysis, and comprehensive fact-checking workflows.",
      ctaText: "Download guide (PDF)",
      ctaLink: "https://searchai.augment.cfd/",
      target: "_blank" as const
    },
    {
      id: "researcher-success",
      image: "/products/searchai/05.png",
      title: "Success Story: Research Team Saves 70% Time",
      description: "See how a university research team dramatically improved their literature review process and data analysis using AI-Powered Search Engine's intelligent search capabilities.",
      ctaText: "Read success story",
      ctaLink: "https://searchai.augment.cfd/",
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
          { text: "See search examples", href: "https://searchai.augment.cfd/", variant: "secondary" as const }
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
        image: "/products/searchai/02.png",
        imageAlt: "AI-Powered Search Engine intelligent search interface with natural language processing"
      }
    },
    {
      id: "ai-models",
      title: "Multiple AI Models",
      content: {
        title: "Choose the perfect AI model for your research",
        description: "Switch between multiple leading AI models in real-time to get the best results for different types of research. From quick answers to deep reasoning, choose the AI that fits your needs.",
        buttons: [
          { text: "Explore AI models", href: "https://searchai.augment.cfd/", variant: "primary" as const },
          { text: "Model comparison guide", href: "https://searchai.augment.cfd/", variant: "secondary" as const }
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
        image: "/products/searchai/03.png",
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
          { text: "Try advanced search", href: "https://searchai.augment.cfd/", variant: "primary" as const },
          { text: "Search provider guide", href: "https://searchai.augment.cfd/", variant: "secondary" as const }
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
        image: "/products/searchai/04.png",
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
          { text: "Explore research tools", href: "https://searchai.augment.cfd/", variant: "primary" as const },
          { text: "Team collaboration guide", href: "https://searchai.augment.cfd/", variant: "secondary" as const }
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
        image: "/products/searchai/05.png",
        imageAlt: "Research workflow management tools and collaboration features"
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Intelligent search that understands your research intent",
      description: "Unlike traditional search engines, AI-Powered Search Engine uses advanced natural language processing to understand the context and intent behind your questions, delivering precisely targeted results with interactive components that enhance comprehension.",
      link: {
        text: "Learn about our AI search technology",
        href: "https://searchai.augment.cfd/"
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
    description: "A leading university research team transformed their literature review process using AI-Powered Search Engine's intelligent search and multi-model AI capabilities, reducing research time from weeks to days while improving result quality.",
    image: "/products/searchai/01.png",
    linkText: "Read the research success story",
    linkHref: "https://searchai.augment.cfd/"
  };

  const customerLogos = [
    {
      name: "OpenAI",
      image: "https://logo.clearbit.com/openai.com",
      href: "https://searchai.augment.cfd/",
      alt: "OpenAI logo"
    },
    {
      name: "Anthropic",
      image: "https://logo.clearbit.com/anthropic.com",
      href: "https://searchai.augment.cfd/",
      alt: "Anthropic logo"
    },
    {
      name: "Perplexity",
      image: "https://logo.clearbit.com/perplexity.ai",
      href: "https://searchai.augment.cfd/", 
      alt: "Perplexity logo"
    },
    {
      name: "Hugging Face",
      image: "https://logo.clearbit.com/huggingface.co",
      href: "https://searchai.augment.cfd/",
      alt: "Hugging Face logo"
    },
    {
      name: "Cohere", 
      image: "https://logo.clearbit.com/cohere.ai",
      href: "https://searchai.augment.cfd/",
      alt: "Cohere logo"
    },
    {
      name: "Pinecone",
      image: "https://logo.clearbit.com/pinecone.io",
      href: "https://searchai.augment.cfd/",
      alt: "Pinecone logo"
    },
    {
      name: "Weaviate",
      image: "https://logo.clearbit.com/weaviate.io",
      href: "https://searchai.augment.cfd/",
      alt: "Weaviate logo"
    },
    {
      name: "Langchain",
      image: "https://logo.clearbit.com/langchain.com",
      href: "https://searchai.augment.cfd/", 
      alt: "Langchain logo"
    },
    {
      name: "Replicate",
      image: "https://logo.clearbit.com/replicate.com",
      href: "https://searchai.augment.cfd/",
      alt: "Replicate logo"
    },
    {
      name: "Together AI", 
      image: "https://logo.clearbit.com/together.ai",
      href: "https://searchai.augment.cfd/",
      alt: "Together AI logo"
    },
    {
      name: "Groq",
      image: "https://logo.clearbit.com/groq.com",
      href: "https://searchai.augment.cfd/",
      alt: "Groq logo"
    },
    {
      name: "Mistral AI",
      image: "https://logo.clearbit.com/mistral.ai", 
      href: "https://searchai.augment.cfd/",
      alt: "Mistral AI logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in AI-Powered Search Engine",
      content: {
        title: "Latest AI search innovations and features",
        description: "Stay updated with the newest capabilities in AI-powered search, from advanced model integrations to enhanced research tools and collaborative features.",
        image: "/products/searchai/02.png",
        links: [
          { text: "Latest AI model integrations", href: "https://searchai.augment.cfd/" },
          { text: "New search provider additions", href: "https://searchai.augment.cfd/" },
          { text: "Research workflow enhancements", href: "https://searchai.augment.cfd/" },
          { text: "UI and experience improvements", href: "https://searchai.augment.cfd/" }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare AI-Powered Search Engine",
      content: {
        title: "See why AI-Powered Search Engine leads AI-powered research",
        description: "AI-Powered Search Engine combines the power of multiple AI models with advanced search providers and intelligent UI to deliver superior research capabilities compared to traditional search engines.",
        image: "/products/searchai/03.png",
        links: [
          { text: "AI-Powered Search Engine vs Google Search", href: "https://searchai.augment.cfd/" },
          { text: "AI-Powered Search Engine vs Perplexity", href: "https://searchai.augment.cfd/" },
          { text: "Traditional vs AI search comparison", href: "https://searchai.augment.cfd/" },
          { text: "Research efficiency calculator", href: "https://searchai.augment.cfd/" }
        ]
      }
    },
    {
      id: "community",
      title: "Join the research community",
      content: {
        title: "Connect with researchers and AI enthusiasts",
        description: "Join a growing community of researchers, academics, analysts, and AI enthusiasts sharing insights, best practices, and discoveries made with AI-Powered Search Engine.",
        image: "/products/searchai/04.png",
        links: [
          { text: "Join researcher Discord community", href: "https://searchai.augment.cfd/", target: "_blank" },
          { text: "Research methodology forum", href: "https://searchai.augment.cfd/" },
          { text: "Academic user groups", href: "https://searchai.augment.cfd/" },
          { text: "Share your research findings", href: "https://searchai.augment.cfd/" }
        ]
      }
    },
    {
      id: "learning",
      title: "Master AI-powered research",
      content: {
        title: "Learn advanced research techniques",
        description: "Master the art of AI-powered research with comprehensive guides, tutorials, and best practices for academic research, market analysis, and investigative work.",
        image: "/products/searchai/05.png",
        links: [
          { text: "AI search research masterclass", href: "https://searchai.augment.cfd/" },
          { text: "Advanced query techniques", href: "https://searchai.augment.cfd/" },
          { text: "Multi-model research strategies", href: "https://searchai.augment.cfd/" },
          { text: "Research workflow optimization", href: "https://searchai.augment.cfd/" }
        ]
      }
    },
    {
      id: "support",
      title: "Get research support",
      content: {
        title: "Expert help for your research needs",
        description: "Access comprehensive support resources, expert guidance, and specialized assistance to maximize your research productivity with AI-Powered Search Engine's advanced capabilities.",
        image: "/products/searchai/01.png",
        links: [
          { text: "Contact research support", href: "https://searchai.augment.cfd/" },
          { text: "Browse documentation", href: "https://searchai.augment.cfd/" },
          { text: "Research setup assistance", href: "https://searchai.augment.cfd/" },
          { text: "Schedule expert consultation", href: "https://searchai.augment.cfd/" }
        ]
      }
    },
    {
      id: "content",
      title: "Explore research content",
      content: {
        title: "Discover research insights and methodologies",
        description: "Explore our extensive library of research guides, case studies, methodology papers, and analysis reports to enhance your research capabilities and outcomes.",
        image: "/products/searchai/02.png",
        links: [
          { text: "Research methodology library", href: "https://searchai.augment.cfd/" },
          { text: "Customer research case studies", href: "https://searchai.augment.cfd/" },
          { text: "Download research whitepapers", href: "https://searchai.augment.cfd/" },
          { text: "Follow our research blog", href: "https://searchai.augment.cfd/" }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Try AI-Powered Search Engine",
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
      href: "https://searchai.augment.cfd/",
      icon: "contact"
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="sr-only">AI-Powered Search Engine | AI-Powered Search Engine for Deep Research</h1>
        
        {/* Breadcrumbs - automatically generated from /product/searchai route */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="AI-Powered Search Engine"
          description="A powerful AI-powered search engine with intelligent generative UI for deep research. Ask questions in natural language and get comprehensive, interactive responses with multiple AI model support. Perfect for researchers, analysts, and anyone who needs to go beyond surface-level search results."
          ctaButtons={ctaButtons}
          mediaType="video"
          mediaUrl="/products/searchai/01.png"
          videoThumbnail="/products/searchai/01.png"
          mediaAlt="AI-Powered Search Engine intelligent search interface with natural language processing and AI models"
        />

        {/* Product Promotional Cards */}
        <ProductPromo cards={promoCards} />

        {/* Product Explorer - tabbed interface */}
        <ProductExplorer title="AI-Powered Search Engine" tabs={explorerTabs} />

        {/* Why Choose Section */}
        <ProductWhyChoose 
          title="Why choose AI-Powered Search Engine for your research needs?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />

        {/* Customer Success Logos */}
        <ProductCustomerLogos
          title="AI-Powered Search Engine research successes"
          description="Learn why leading universities, research institutions, and analytical organizations use AI-Powered Search Engine to enhance their research capabilities and accelerate discovery. Click on a logo to learn more."
          viewMoreText="View more research successes"
          viewMoreHref="https://searchai.augment.cfd/"
          logos={customerLogos}
        />

        {/* Resources Section */}
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />

        {/* CTA Banner */}
        <ProductCTABanner
          title="The AI-Powered Search Engine Research Methodology Guide"
          description="We've compiled advanced AI search techniques, research best practices, and methodology frameworks used by leading researchers. Learn how to maximize your research efficiency and quality."
          image="/products/searchai/03.png"
          buttonText="Get the research guide"
          buttonHref="https://searchai.augment.cfd/"
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