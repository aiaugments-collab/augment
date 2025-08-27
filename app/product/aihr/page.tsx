import { ProductHero } from "@/components/product/ProductHero";
import { ProductPromo } from "@/components/product/ProductPromo";
import { ProductExplorer } from "@/components/product/ProductExplorer";
import { ProductWhyChoose } from "@/components/product/ProductWhyChoose";
import { ProductCustomerLogos } from "@/components/product/ProductCustomerLogos";
import { ProductResources } from "@/components/product/ProductResources";
import { ProductCTABanner } from "@/components/product/ProductCTABanner";
import { ProductGetStarted } from "@/components/product/ProductGetStarted";
import { Breadcrumb } from "@/components/ui/Breadcrumb";


export default function AIHRPage() {
  const ctaButtons = [
    {
      text: "Get Started",
      href: "https://aihr.augment.cfd/",
      variant: "primary" as const
    },
    {
      text: "Chat with AI Agent",
      href: "https://aihr.augment.cfd/",
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "webinar-ai-hr",
      image: "/products/aihr/02.png",
      title: "Webinar: Building AI-Driven HR Experiences",
      description: "Discover how AI can transform your HR processes and deliver exceptional employee experiences across every touchpoint.",
      ctaText: "Register today",
      ctaLink: "https://aihr.augment.cfd/",
      target: "_blank" as const
    },
    {
      id: "forrester-hr-ai",
      image: "/products/aihr/03.png",
      title: "Augment named a Leader in The Forrester Wave™: AI-Powered HR Solutions, Q1 2025",
      description: "Find out why Augment was recognized for excellence in AI-driven human resources automation.",
      ctaText: "Access the Forrester report",
      ctaLink: "https://aihr.augment.cfd/",
      target: "_blank" as const
    },
    {
      id: "hr-growth-guide",
      image: "/products/aihr/04.png",
      title: "Accelerate sustainable HR growth with AI automation",
      description: "Discover how to scale HR operations by implementing intelligent automation for recruitment, onboarding, and employee management.",
      ctaText: "Read the solution brochure (PDF)",
      ctaLink: "https://aihr.augment.cfd/",
      target: "_blank" as const
    },
    {
      id: "chro-guide",
      image: "/products/aihr/05.png",
      title: "CHRO's guide to predictable talent growth",
      description: "Learn the top 5 ways to cultivate predictable talent acquisition and retention strategies using AI-powered insights.",
      ctaText: "Access the guide",
      ctaLink: "https://aihr.augment.cfd/",
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "hr-automation",
      title: "HR Automation",
      content: {
        title: "Intelligent HR process automation",
        description: "Transform HR operations with intelligent automation that handles routine tasks, improves employee experiences, and frees up HR teams to focus on strategic initiatives. Our AI-driven platform automates recruitment, onboarding, performance management, and employee support.",
        buttons: [
          { text: "See product details", href: "https://aihr.augment.cfd/", variant: "primary" as const },
          { text: "See automation tour", href: "https://aihr.augment.cfd/", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "Automated candidate screening",
            "Smart onboarding workflows", 
            "Performance review automation",
            "Employee self-service portal",
            "Intelligent document processing",
            "Compliance monitoring",
            "Real-time HR analytics",
            "Integration with HRIS systems"
          ]
        },
        image: "/products/aihr/02.png",
        imageAlt: "HR automation dashboard"
      }
    },
    {
      id: "talent-acquisition",
      title: "Talent Acquisition",
      content: {
        title: "AI-powered recruitment and hiring",
        description: "Streamline your hiring process with AI-powered talent acquisition tools that identify the best candidates, reduce time-to-hire, and improve candidate experience through intelligent matching and automated screening.",
        buttons: [
          { text: "See product details", href: "https://aihr.augment.cfd/", variant: "primary" as const },
          { text: "See recruitment tour", href: "https://aihr.augment.cfd/", variant: "secondary" as const }
        ],
        features: {
          title: "Capabilities",
          items: [
            "AI candidate matching",
            "Automated interview scheduling",
            "Skills-based screening",
            "Diversity and inclusion tracking",
            "Candidate experience optimization",
            "Multi-channel job posting",
            "Reference checking automation",
            "Hiring analytics and insights"
          ]
        },
        image: "/products/aihr/03.png",
        imageAlt: "Talent acquisition interface"
      }
    },
    {
      id: "employee-engagement",
      title: "Employee Engagement",
      content: {
        title: "Drive engagement through intelligent insights",
        description: "Boost employee satisfaction and retention with AI-driven engagement tools that provide personalized experiences, predict attrition risks, and deliver actionable insights to improve workplace culture and productivity.",
        buttons: [
          { text: "See product details", href: "https://aihr.augment.cfd/", variant: "primary" as const },
          { text: "See engagement tour", href: "https://aihr.augment.cfd/", variant: "secondary" as const }
        ],
        features: {
          title: "Features",
          items: [
            "Employee sentiment analysis",
            "Predictive attrition modeling",
            "Personalized career pathways",
            "360-degree feedback automation",
            "Wellness program management",
            "Recognition and rewards platform",
            "Team collaboration insights",
            "Cultural fit assessment"
          ]
        },
        image: "/products/aihr/04.png",
        imageAlt: "Employee engagement dashboard"
      }
    },
    {
      id: "performance-management",
      title: "Performance Management",
      content: {
        title: "Continuous performance optimization",
        description: "Enable continuous performance improvement with AI-powered performance management that provides real-time feedback, goal tracking, and development recommendations tailored to each employee's growth trajectory.",
        buttons: [
          { text: "See product details", href: "https://aihr.augment.cfd/", variant: "primary" as const },
          { text: "See performance tour", href: "https://aihr.augment.cfd/", variant: "secondary" as const }
        ],
        features: {
          title: "Key Components",
          items: [
            "Goal setting and tracking",
            "Continuous feedback loops",
            "AI-powered development plans",
            "Competency assessments",
            "Succession planning",
            "Manager coaching insights",
            "Performance calibration tools",
            "Skills gap analysis"
          ]
        },
        image: "/products/aihr/05.png",
        imageAlt: "Performance management interface"
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Build smarter HR strategies using AI insights",
      description: "Unify real-time employee data with performance metrics and predictive analytics to generate optimal workforce plans, manage talent pipelines, align compensation strategies, and create HR initiatives that drive organizational success and employee engagement.",
      link: {
        text: "Explore the benefits of AI-driven HR planning",
        href: "https://aihr.augment.cfd/"
      }
    },
    {
      number: "02", 
      title: "Provide a comprehensive employee profile",
      description: "Connect trusted data from HRIS, performance systems, and learning platforms. Layer on AI-powered insights and behavioral analytics for a complete employee picture that improves retention rates and career development outcomes."
    },
    {
      number: "03",
      title: "Guide managers and improve team performance", 
      description: "Go beyond traditional HR systems with intelligent recommendations that guide managers to the best course of action. With a reimagined user experience, focus on high-impact employee development at the right moments."
    },
    {
      number: "04",
      title: "Use AI tools that help you manage people better",
      description: "Talk to your HR system, automate routine tasks, and accelerate employee development. Manage teams more effectively with intelligent search, AI-powered coaching suggestions, and much more."
    }
  ];

  const customerReference = {
    title: "Customer Success Story",
    company: "TechCorp boosts employee retention by 40% with Augment AI HR",
    description: "The fast-growing technology company transformed their HR operations by implementing AI-powered talent management, reducing time-to-hire by 60% and increasing employee satisfaction scores across all departments.",
    image: "/products/aihr/01.png",
    linkText: "Read the success story",
    linkHref: "https://aihr.augment.cfd/"
  };

  const customerLogos = [
    {
      name: "Microsoft",
      image: "https://logo.clearbit.com/microsoft.com",
      href: "https://aihr.augment.cfd/",
      alt: "Microsoft logo"
    },
    {
      name: "Google",
      image: "https://logo.clearbit.com/google.com",
      href: "https://aihr.augment.cfd/",
      alt: "Google logo"
    },
    {
      name: "Amazon",
      image: "https://logo.clearbit.com/amazon.com",
      href: "https://aihr.augment.cfd/", 
      alt: "Amazon logo"
    },
    {
      name: "Apple",
      image: "https://logo.clearbit.com/apple.com",
      href: "https://aihr.augment.cfd/",
      alt: "Apple logo"
    },
    {
      name: "Netflix", 
      image: "https://logo.clearbit.com/netflix.com",
      href: "https://aihr.augment.cfd/",
      alt: "Netflix logo"
    },
    {
      name: "Adobe",
      image: "https://logo.clearbit.com/adobe.com",
      href: "https://aihr.augment.cfd/",
      alt: "Adobe logo"
    },
    {
      name: "Salesforce",
      image: "https://logo.clearbit.com/salesforce.com",
      href: "https://aihr.augment.cfd/",
      alt: "Salesforce logo"
    },
    {
      name: "Shopify",
      image: "https://logo.clearbit.com/shopify.com",
      href: "https://aihr.augment.cfd/", 
      alt: "Shopify logo"
    },
    {
      name: "Slack",
      image: "https://logo.clearbit.com/slack.com",
      href: "https://aihr.augment.cfd/",
      alt: "Slack logo"
    },
    {
      name: "Zoom", 
      image: "https://logo.clearbit.com/zoom.us",
      href: "https://aihr.augment.cfd/",
      alt: "Zoom logo"
    },
    {
      name: "Atlassian",
      image: "https://logo.clearbit.com/atlassian.com",
      href: "https://aihr.augment.cfd/",
      alt: "Atlassian logo"
    },
    {
      name: "Spotify",
      image: "https://logo.clearbit.com/spotify.com", 
      href: "https://aihr.augment.cfd/",
      alt: "Spotify logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in AI HR",
      content: {
        title: "Stay updated with AI HR innovations",
        description: "Catch up on the latest in AI-powered HR solutions, product demos, webinars, and insights from the Augment AI team to see how we're transforming workforce management.",
        image: "/products/aihr/02.png",
        links: [
          { text: "Latest product updates and features", href: "https://aihr.augment.cfd/" },
          { text: "Get AI HR best practices and guides", href: "https://aihr.augment.cfd/" },
          { text: "Register for upcoming webinars", href: "https://aihr.augment.cfd/" },
          { text: "See industry analyst reports", href: "https://aihr.augment.cfd/" }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare Augment AI HR",
      content: {
        title: "See why Augment AI HR is the leader",
        description: "Augment AI HR goes beyond traditional HRIS to deliver personalized employee experiences powered by advanced AI and machine learning capabilities.",
        image: "/products/aihr/03.png",
        links: [
          { text: "Compare with traditional HR systems", href: "https://aihr.augment.cfd/" },
          { text: "Read analyst comparison reports", href: "https://aihr.augment.cfd/" },
          { text: "View competitive advantage guide", href: "https://aihr.augment.cfd/" },
          { text: "See ROI calculator", href: "https://aihr.augment.cfd/" }
        ]
      }
    },
    {
      id: "community",
      title: "Meet the community",
      content: {
        title: "Connect with HR professionals worldwide",
        description: "Join thousands of HR leaders, practitioners, and AI enthusiasts sharing insights, best practices, and success stories in our vibrant community.",
        image: "/products/aihr/04.png",
        links: [
          { text: "Join the Augment AI HR Community", href: "https://aihr.augment.cfd/", target: "_blank" },
          { text: "HR Leaders Forum", href: "https://aihr.augment.cfd/" },
          { text: "User Groups and Meetups", href: "https://aihr.augment.cfd/" },
          { text: "Share your success story", href: "https://aihr.augment.cfd/" }
        ]
      }
    },
    {
      id: "learning",
      title: "Build your skills",
      content: {
        title: "Master AI-powered HR management",
        description: "Enhance your HR expertise with comprehensive training programs, certifications, and learning paths designed for modern HR professionals.",
        image: "/products/aihr/05.png",
        links: [
          { text: "AI HR Certification Program", href: "https://aihr.augment.cfd/" },
          { text: "Online training courses", href: "https://aihr.augment.cfd/" },
          { text: "Interactive product tutorials", href: "https://aihr.augment.cfd/" },
          { text: "Best practices workshops", href: "https://aihr.augment.cfd/" }
        ]
      }
    },
    {
      id: "support",
      title: "Get help and support",
      content: {
        title: "Expert support when you need it",
        description: "Access comprehensive support resources, expert guidance, and dedicated customer success teams to maximize your AI HR investment.",
        image: "/products/aihr/01.png",
        links: [
          { text: "Contact customer support", href: "https://aihr.augment.cfd/" },
          { text: "Browse knowledge base", href: "https://aihr.augment.cfd/" },
          { text: "Request implementation help", href: "https://aihr.augment.cfd/" },
          { text: "Schedule a consultation", href: "https://aihr.augment.cfd/" }
        ]
      }
    },
    {
      id: "content",
      title: "Explore content",
      content: {
        title: "Discover HR insights and resources",
        description: "Explore our extensive library of whitepapers, case studies, blog posts, and research reports to stay ahead in the evolving world of HR.",
        image: "/products/aihr/02.png",
        links: [
          { text: "Browse HR research library", href: "https://aihr.augment.cfd/" },
          { text: "Read customer case studies", href: "https://aihr.augment.cfd/" },
          { text: "Download whitepapers", href: "https://aihr.augment.cfd/" },
          { text: "Follow our blog", href: "https://aihr.augment.cfd/" }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Request a demo",
      href: "https://aihr.augment.cfd/",
      icon: "demo"
    },
    {
      title: "Take a tour",
      href: "https://aihr.augment.cfd/",
      icon: "tour"
    },
    {
      title: "Contact sales",
      href: "https://aihr.augment.cfd/",
      icon: "contact"
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="sr-only">Augment AI HR Assistant | AI-Powered Human Resources Platform</h1>
        
        {/* Breadcrumbs - automatically generated from /product/aihr route */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="AI HR Assistant"
          description="Transform your HR operations with intelligent automation that understands context, learns from interactions, and executes complex human resource tasks. Our AI-driven platform helps HR teams focus on strategic initiatives while automating routine processes, improving employee experiences, and driving organizational growth."
          ctaButtons={ctaButtons}
          mediaType="video"
          mediaUrl="/products/aihr/01.png"
          videoThumbnail="/products/aihr/01.png"
          mediaAlt="AI HR Assistant dashboard showing automated HR processes and analytics"
        />

        {/* Product Promotional Cards - Oracle RC59 style */}
        <ProductPromo cards={promoCards} />

        {/* Product Explorer - Oracle RC30 tabbed interface */}
        <ProductExplorer title="Augment AI HR" tabs={explorerTabs} />

        {/* Why Choose Section - Oracle RC36v3 style */}
        <ProductWhyChoose 
          title="Why choose Augment AI HR for your workforce?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />

        {/* Customer Success Logos - Oracle RC56v0 style */}
        <ProductCustomerLogos
          title="Augment AI HR customer successes"
          description="Learn why companies across all industries use Augment AI HR to build better teams, improve retention, and drive growth. Click on a logo to learn more."
          viewMoreText="View more customer successes"
          viewMoreHref="https://aihr.augment.cfd/"
          logos={customerLogos}
        />

        {/* Resources Section - Oracle RC30v0 style */}
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />

        {/* CTA Banner - Oracle RC59v1 Playbook style */}
        <ProductCTABanner
          title="The Augment AI Playbook series"
          description="We've compiled the secrets to our AI-powered HR strategy, implementation best practices, and transformation methodology. And we want to share them with you."
          image="/products/aihr/03.png"
          buttonText="Get the details"
          buttonHref="https://aihr.augment.cfd/"
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
