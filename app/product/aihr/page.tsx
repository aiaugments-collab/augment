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
      text: "Take a product tour",
      href: "/product/aihr/tour",
      variant: "primary" as const
    },
    {
      text: "Chat with AI",
      href: "/product/aihr/demo",
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "webinar-ai-hr",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      title: "Webinar: Building AI-Driven HR Experiences",
      description: "Discover how AI can transform your HR processes and deliver exceptional employee experiences across every touchpoint.",
      ctaText: "Register today",
      ctaLink: "/webinars/ai-hr-experiences",
      target: "_blank" as const
    },
    {
      id: "forrester-hr-ai",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      title: "Augment named a Leader in The Forrester Wave™: AI-Powered HR Solutions, Q1 2025",
      description: "Find out why Augment was recognized for excellence in AI-driven human resources automation.",
      ctaText: "Access the Forrester report",
      ctaLink: "/reports/forrester-ai-hr-wave",
      target: "_blank" as const
    },
    {
      id: "hr-growth-guide",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      title: "Accelerate sustainable HR growth with AI automation",
      description: "Discover how to scale HR operations by implementing intelligent automation for recruitment, onboarding, and employee management.",
      ctaText: "Read the solution brochure (PDF)",
      ctaLink: "/resources/hr-automation-growth-guide.pdf",
      target: "_blank" as const
    },
    {
      id: "chro-guide",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      title: "CHRO's guide to predictable talent growth",
      description: "Learn the top 5 ways to cultivate predictable talent acquisition and retention strategies using AI-powered insights.",
      ctaText: "Access the guide",
      ctaLink: "/guides/chro-talent-growth",
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
          { text: "See product details", href: "/product/aihr/automation", variant: "primary" as const },
          { text: "See automation tour", href: "/product/aihr/automation/tour", variant: "secondary" as const }
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
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
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
          { text: "See product details", href: "/product/aihr/talent", variant: "primary" as const },
          { text: "See recruitment tour", href: "/product/aihr/talent/tour", variant: "secondary" as const }
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
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
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
          { text: "See product details", href: "/product/aihr/engagement", variant: "primary" as const },
          { text: "See engagement tour", href: "/product/aihr/engagement/tour", variant: "secondary" as const }
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
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
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
          { text: "See product details", href: "/product/aihr/performance", variant: "primary" as const },
          { text: "See performance tour", href: "/product/aihr/performance/tour", variant: "secondary" as const }
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
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
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
        href: "/product/aihr/hr-planning"
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
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1226&q=80",
    linkText: "Read the success story",
    linkHref: "/customers/techcorp-success"
  };

  const customerLogos = [
    {
      name: "Atradius",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=80&fit=crop&crop=center",
      href: "/customers/atradius",
      alt: "Atradius logo"
    },
    {
      name: "Banco Nacional",
      image: "https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=200&h=80&fit=crop&crop=center",
      href: "/customers/banco-nacional",
      alt: "Banco Nacional logo"
    },
    {
      name: "Bank of Guam",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&h=80&fit=crop&crop=center",
      href: "/customers/bank-of-guam", 
      alt: "Bank of Guam logo"
    },
    {
      name: "Carmen Steffens",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=80&fit=crop&crop=center",
      href: "/customers/carmen-steffens",
      alt: "Carmen Steffens logo"
    },
    {
      name: "CJ Logistics", 
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=200&h=80&fit=crop&crop=center",
      href: "/customers/cj-logistics",
      alt: "CJ Logistics logo"
    },
    {
      name: "Construction Specialties",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=200&h=80&fit=crop&crop=center",
      href: "/customers/construction-specialties",
      alt: "Construction Specialties logo"
    },
    {
      name: "Hyster Yale",
      image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=200&h=80&fit=crop&crop=center",
      href: "/customers/hyster-yale",
      alt: "Hyster Yale logo"
    },
    {
      name: "Insight Squared",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=80&fit=crop&crop=center",
      href: "/customers/insight-squared", 
      alt: "Insight Squared logo"
    },
    {
      name: "Juniper Networks",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=200&h=80&fit=crop&crop=center",
      href: "/customers/juniper-networks",
      alt: "Juniper Networks logo"
    },
    {
      name: "Panasonic", 
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=200&h=80&fit=crop&crop=center",
      href: "/customers/panasonic",
      alt: "Panasonic logo"
    },
    {
      name: "Siemens Healthineers",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=80&fit=crop&crop=center",
      href: "/customers/siemens-healthineers",
      alt: "Siemens Healthineers logo"
    },
    {
      name: "Talkdesk",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=80&fit=crop&crop=center", 
      href: "/customers/talkdesk",
      alt: "Talkdesk logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in AI HR",
      content: {
        title: "Stay updated with AI HR innovations",
        description: "Catch up on the latest in AI-powered HR solutions, product demos, webinars, and insights from the Augment AI team to see how we're transforming workforce management.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        links: [
          { text: "Latest product updates and features", href: "/resources/updates" },
          { text: "Get AI HR best practices and guides", href: "/resources/guides" },
          { text: "Register for upcoming webinars", href: "/events" },
          { text: "See industry analyst reports", href: "/resources/analysts" }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare Augment AI HR",
      content: {
        title: "See why Augment AI HR is the leader",
        description: "Augment AI HR goes beyond traditional HRIS to deliver personalized employee experiences powered by advanced AI and machine learning capabilities.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        links: [
          { text: "Compare with traditional HR systems", href: "/resources/compare" },
          { text: "Read analyst comparison reports", href: "/resources/analyst-reports" },
          { text: "View competitive advantage guide", href: "/resources/competitive-guide" },
          { text: "See ROI calculator", href: "/resources/roi-calculator" }
        ]
      }
    },
    {
      id: "community",
      title: "Meet the community",
      content: {
        title: "Connect with HR professionals worldwide",
        description: "Join thousands of HR leaders, practitioners, and AI enthusiasts sharing insights, best practices, and success stories in our vibrant community.",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        links: [
          { text: "Join the Augment AI HR Community", href: "/community", target: "_blank" },
          { text: "HR Leaders Forum", href: "/community/leaders" },
          { text: "User Groups and Meetups", href: "/community/meetups" },
          { text: "Share your success story", href: "/community/stories" }
        ]
      }
    },
    {
      id: "learning",
      title: "Build your skills",
      content: {
        title: "Master AI-powered HR management",
        description: "Enhance your HR expertise with comprehensive training programs, certifications, and learning paths designed for modern HR professionals.",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        links: [
          { text: "AI HR Certification Program", href: "/learning/certification" },
          { text: "Online training courses", href: "/learning/courses" },
          { text: "Interactive product tutorials", href: "/learning/tutorials" },
          { text: "Best practices workshops", href: "/learning/workshops" }
        ]
      }
    },
    {
      id: "support",
      title: "Get help and support",
      content: {
        title: "Expert support when you need it",
        description: "Access comprehensive support resources, expert guidance, and dedicated customer success teams to maximize your AI HR investment.",
        image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        links: [
          { text: "Contact customer support", href: "/support/contact" },
          { text: "Browse knowledge base", href: "/support/knowledge-base" },
          { text: "Request implementation help", href: "/support/implementation" },
          { text: "Schedule a consultation", href: "/support/consultation" }
        ]
      }
    },
    {
      id: "content",
      title: "Explore content",
      content: {
        title: "Discover HR insights and resources",
        description: "Explore our extensive library of whitepapers, case studies, blog posts, and research reports to stay ahead in the evolving world of HR.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        links: [
          { text: "Browse HR research library", href: "/resources/research" },
          { text: "Read customer case studies", href: "/resources/case-studies" },
          { text: "Download whitepapers", href: "/resources/whitepapers" },
          { text: "Follow our blog", href: "/blog" }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Request a demo",
      href: "/demo",
      icon: "demo"
    },
    {
      title: "Take a tour",
      href: "/tour",
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
          mediaUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          videoThumbnail="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
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
          viewMoreHref="/customers"
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
          image="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
          buttonText="Get the details"
          buttonHref="/playbook"
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
