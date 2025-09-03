import { ProductHero } from "@/components/product/ProductHero";
import { ProductPromo } from "@/components/product/ProductPromo";
import { ProductExplorer } from "@/components/product/ProductExplorer";
import { ProductWhyChoose } from "@/components/product/ProductWhyChoose";
import { ProductCustomerLogos } from "@/components/product/ProductCustomerLogos";
import { ProductResources } from "@/components/product/ProductResources";
import { ProductCTABanner } from "@/components/product/ProductCTABanner";
import { ProductGetStarted } from "@/components/product/ProductGetStarted";
import { Breadcrumb } from "@/components/ui/Breadcrumb";


export default function BuildAIPage() {
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
      id: "webinar-natural-language",
      image: "/products/buildai/02.png",
      title: "Webinar: Building Apps with Natural Language",
      description: "Discover how to transform your ideas into fully functional applications using simple conversational commands.",
      ctaText: "Register today",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "forrester-app-builder",
      image: "/products/buildai/03.png",
      title: "Augment named a Leader in The Forrester Wave™: AI-Powered App Development, Q1 2025",
      description: "Find out why Augment was recognized for excellence in natural language application development.",
      ctaText: "Access the Forrester report",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "app-development-guide",
      image: "/products/buildai/04.png",
      title: "Accelerate app development with natural language AI",
      description: "Discover how to scale application development by describing your requirements in plain English and letting AI handle the implementation.",
      ctaText: "Read the solution brochure (PDF)",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "founder-guide",
      image: "/products/buildai/05.png",
      title: "Founder's guide to rapid prototyping",
      description: "Learn the top 5 ways to validate and build your app ideas quickly using natural language development tools.",
      ctaText: "Access the guide",
      ctaLink: "/book-demo",
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "natural-language-development",
      title: "Natural Language Development",
      content: {
        title: "Describe your app, watch it come to life",
        description: "Transform your application ideas into reality using natural language descriptions. Simply tell our AI what you want to build, and it creates fully functional web applications with modern UI components, responsive design, and clean architecture.",
        buttons: [
          { text: "Book Demo", href: "/book-demo", variant: "primary" as const },
          { text: "See Examples", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "Natural language to code conversion",
            "Intelligent UI component generation", 
            "Responsive design automation",
            "Database schema creation",
            "API endpoint generation",
            "Authentication system setup",
            "Real-time preview and editing",
            "Export to popular frameworks"
          ]
        },
        image: "/products/buildai/02.png",
        imageAlt: "BuildAI natural language development interface"
      }
    },
    {
      id: "full-stack-generation",
      title: "Full-Stack Generation",
      content: {
        title: "Complete applications from simple descriptions",
        description: "Generate entire full-stack applications including frontend, backend, database, and deployment configurations. Our AI understands complex application requirements and creates production-ready code with best practices.",
        buttons: [
          { text: "Book Demo", href: "/book-demo", variant: "primary" as const },
          { text: "See Architecture", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Capabilities",
          items: [
            "Frontend framework generation",
            "Backend API development",
            "Database design and setup",
            "User authentication systems",
            "Payment integration",
            "Admin dashboards",
            "Mobile-responsive design",
            "Cloud deployment ready"
          ]
        },
        image: "/products/buildai/03.png",
        imageAlt: "Full-stack application generation interface"
      }
    },
    {
      id: "intelligent-customization",
      title: "Intelligent Customization",
      content: {
        title: "Refine and customize with conversational commands",
        description: "Modify your applications using natural language commands. Request changes, add features, or adjust styling by simply describing what you want, and watch your app evolve in real-time.",
        buttons: [
          { text: "Book Demo", href: "/book-demo", variant: "primary" as const },
          { text: "See Customization", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Features",
          items: [
            "Conversational app editing",
            "Real-time visual updates",
            "Smart feature additions",
            "Style and theme adjustments",
            "Component library integration",
            "Performance optimization",
            "Accessibility improvements",
            "Cross-browser compatibility"
          ]
        },
        image: "/products/buildai/04.png",
        imageAlt: "Intelligent customization dashboard"
      }
    },
    {
      id: "deployment-management",
      title: "Deployment & Management",
      content: {
        title: "Deploy and manage with ease",
        description: "Deploy your applications to popular cloud platforms with one-click deployment. Manage updates, monitor performance, and scale your applications using simple natural language commands.",
        buttons: [
          { text: "Book Demo", href: "/book-demo", variant: "primary" as const },
          { text: "See Deployment", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Key Components",
          items: [
            "One-click cloud deployment",
            "Automatic scaling configuration",
            "Performance monitoring",
            "Version control integration",
            "Backup and recovery",
            "SSL certificate management",
            "Domain configuration",
            "Analytics and insights"
          ]
        },
        image: "/products/buildai/05.png",
        imageAlt: "Deployment management interface"
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Build applications faster than ever before",
      description: "Transform weeks of development into hours by describing your application requirements in natural language. Our AI understands complex business logic, user flows, and technical requirements to generate production-ready applications.",
      link: {
        text: "Explore the benefits of natural language development",
        href: "/book-demo"
      }
    },
    {
      number: "02", 
      title: "No coding experience required",
      description: "Create sophisticated web applications without writing a single line of code. Our AI handles all the technical complexity while you focus on your business requirements and user experience."
    },
    {
      number: "03",
      title: "Production-ready applications", 
      description: "Generate applications with modern architecture, security best practices, and scalable infrastructure. Every app comes with clean code, proper documentation, and deployment-ready configuration."
    },
    {
      number: "04",
      title: "Iterate and improve continuously",
      description: "Refine your applications using conversational commands. Add features, modify designs, and optimize performance by simply describing what you want to change."
    }
  ];

  const customerReference = {
    title: "Customer Success Story",
    company: "StartupCorp launches MVP in 2 days with BuildAI",
    description: "The innovative startup transformed their business idea into a fully functional web application in just 2 days, securing seed funding and launching to market 10x faster than traditional development.",
    image: "/products/buildai/01.png",
    linkText: "Read the success story",
    linkHref: "/book-demo"
  };

  const customerLogos = [
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
      name: "Supabase",
      image: "https://logo.clearbit.com/supabase.com",
      href: "/book-demo", 
      alt: "Supabase logo"
    },
    {
      name: "Stripe",
      image: "https://logo.clearbit.com/stripe.com",
      href: "/book-demo",
      alt: "Stripe logo"
    },
    {
      name: "Tailwind CSS", 
      image: "https://logo.clearbit.com/tailwindcss.com",
      href: "/book-demo",
      alt: "Tailwind CSS logo"
    },
    {
      name: "Next.js",
      image: "https://logo.clearbit.com/nextjs.org",
      href: "/book-demo",
      alt: "Next.js logo"
    },
    {
      name: "React",
      image: "https://logo.clearbit.com/reactjs.org",
      href: "/book-demo",
      alt: "React logo"
    },
    {
      name: "TypeScript",
      image: "https://logo.clearbit.com/typescriptlang.org",
      href: "/book-demo", 
      alt: "TypeScript logo"
    },
    {
      name: "Node.js",
      image: "https://logo.clearbit.com/nodejs.org",
      href: "/book-demo",
      alt: "Node.js logo"
    },
    {
      name: "MongoDB", 
      image: "https://logo.clearbit.com/mongodb.com",
      href: "/book-demo",
      alt: "MongoDB logo"
    },
    {
      name: "PostgreSQL",
      image: "https://logo.clearbit.com/postgresql.org",
      href: "/book-demo",
      alt: "PostgreSQL logo"
    },
    {
      name: "AWS",
      image: "https://logo.clearbit.com/aws.amazon.com", 
      href: "/book-demo",
      alt: "AWS logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in BuildAI",
      content: {
        title: "Stay updated with natural language development",
        description: "Catch up on the latest in AI-powered application development, product demos, webinars, and insights from the Augment AI team to see how we're transforming app creation.",
        image: "/products/buildai/02.png",
        links: [
          { text: "Latest product updates and features", href: "/book-demo" },
          { text: "Get natural language development guides", href: "/book-demo" },
          { text: "Register for upcoming webinars", href: "/book-demo" },
          { text: "See industry analyst reports", href: "/book-demo" }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare BuildAI",
      content: {
        title: "See why BuildAI is the leader",
        description: "BuildAI goes beyond traditional no-code platforms to deliver truly intelligent application development powered by advanced natural language processing and AI.",
        image: "/products/buildai/03.png",
        links: [
          { text: "Compare with no-code platforms", href: "/book-demo" },
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
        title: "Connect with builders worldwide",
        description: "Join thousands of entrepreneurs, developers, and innovators sharing insights, best practices, and success stories in our vibrant community.",
        image: "/products/buildai/04.png",
        links: [
          { text: "Join the BuildAI Community", href: "/book-demo", target: "_blank" },
          { text: "Builder Forum", href: "/book-demo" },
          { text: "User Groups and Meetups", href: "/book-demo" },
          { text: "Share your success story", href: "/book-demo" }
        ]
      }
    },
    {
      id: "learning",
      title: "Build your skills",
      content: {
        title: "Master natural language development",
        description: "Enhance your app building expertise with comprehensive training programs, tutorials, and learning paths designed for modern entrepreneurs and creators.",
        image: "/products/buildai/05.png",
        links: [
          { text: "Natural Language Development Course", href: "/book-demo" },
          { text: "Online training tutorials", href: "/book-demo" },
          { text: "Interactive product walkthroughs", href: "/book-demo" },
          { text: "Best practices workshops", href: "/book-demo" }
        ]
      }
    },
    {
      id: "support",
      title: "Get help and support",
      content: {
        title: "Expert support when you need it",
        description: "Access comprehensive support resources, expert guidance, and dedicated customer success teams to maximize your BuildAI experience.",
        image: "/products/buildai/01.png",
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
        title: "Discover app development insights",
        description: "Explore our extensive library of whitepapers, case studies, blog posts, and research reports to stay ahead in the evolving world of AI-powered development.",
        image: "/products/buildai/02.png",
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
        <h1 className="sr-only">BuildAI | Natural Language to Full-Stack Application Platform</h1>
        
        {/* Breadcrumbs - automatically generated from /product/buildai route */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="BuildAI"
          description="Transform your ideas into fully functional applications using natural language. Simply describe what you want to build, and our AI creates beautiful, responsive web applications with modern UI components, database integration, and deployment-ready code. No coding experience required."
          ctaButtons={ctaButtons}
          mediaType="video"
          mediaUrl="/products/buildai/01.png"
          videoThumbnail="/products/buildai/01.png"
          mediaAlt="BuildAI interface showing natural language to application conversion"
        />

        {/* Product Promotional Cards - Oracle RC59 style */}
        <ProductPromo cards={promoCards} />

        {/* Product Explorer - Oracle RC30 tabbed interface */}
        <ProductExplorer title="BuildAI Platform" tabs={explorerTabs} />

        {/* Why Choose Section - Oracle RC36v3 style */}
        <ProductWhyChoose 
          title="Why choose BuildAI for your application development?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />

        {/* Customer Success Logos - Oracle RC56v0 style */}
        <ProductCustomerLogos
          title="BuildAI technology partners"
          description="Learn about the modern technologies and platforms that power BuildAI applications. Our AI generates code using industry-leading frameworks and tools."
          viewMoreText="View more integrations"
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
          title="The BuildAI Development Playbook series"
          description="We've compiled the secrets to our natural language development strategy, implementation best practices, and transformation methodology. And we want to share them with you."
          image="/products/buildai/03.png"
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
