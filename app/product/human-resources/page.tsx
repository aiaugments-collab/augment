import { ProductHero } from "@/components/product/ProductHero";
import { ProductPromo } from "@/components/product/ProductPromo";
import { ProductExplorer } from "@/components/product/ProductExplorer";
import { ProductWhyChoose } from "@/components/product/ProductWhyChoose";
import { ProductCustomerLogos } from "@/components/product/ProductCustomerLogos";
import { ProductResources } from "@/components/product/ProductResources";
import { ProductCTABanner } from "@/components/product/ProductCTABanner";
import { ProductGetStarted } from "@/components/product/ProductGetStarted";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export default function HumanResourcesPage() {
  const ctaButtons = [
    {
      text: "Try HR Platform",
      href: "https://hr.augment.cfd/",
      variant: "primary" as const
    },
    {
      text: "Schedule Demo",
      href: "/book-demo",
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "ai-hr-automation",
      image: "/products/hr/01.png",
      title: "AI-Powered HR Automation",
      description: "Discover how AI transforms traditional HR processes with intelligent automation, smart workflows, and 24/7 employee support.",
      ctaText: "Learn AI HR features",
      ctaLink: "https://hr.augment.cfd/",
      target: "_blank" as const
    },
    {
      id: "employee-experience",
      image: "/products/hr/02.png",
      title: "Modern Employee Experience",
      description: "Create exceptional employee experiences with self-service portals, mobile apps, and intelligent HR assistance.",
      ctaText: "Explore employee portal",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "hr-analytics",
      image: "/products/hr/03.png",
      title: "Advanced HR Analytics & Insights",
      description: "Make data-driven HR decisions with comprehensive analytics, workforce insights, and predictive HR intelligence.",
      ctaText: "View HR analytics",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "hr-success",
      image: "/products/hr/04.png",
      title: "Success Story: 80% Administrative Reduction",
      description: "See how a technology company reduced HR administrative workload by 80% using our AI-powered HRMS platform.",
      ctaText: "Read success story",
      ctaLink: "/book-demo",
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "employee-management",
      title: "Employee Management",
      content: {
        title: "Comprehensive employee lifecycle management",
        description: "Manage the complete employee journey from onboarding to offboarding with AI-powered automation, smart workflows, and intuitive self-service capabilities.",
        buttons: [
          { text: "Try Employee Management", href: "https://hr.augment.cfd/", variant: "primary" as const },
          { text: "Onboarding workflows", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Employee Management Features",
          items: [
            "AI-powered employee onboarding",
            "Digital employee records",
            "Smart document management",
            "Employee self-service portal",
            "Mobile HR app access",
            "Automated workflow approvals",
            "Performance tracking",
            "Employee directory & org charts"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Employee Profile Management",
          description: "Comprehensive employee data management and workflow automation"
        }
      }
    },
    {
      id: "ai-recruitment",
      title: "AI Recruitment",
      content: {
        title: "AI-powered talent acquisition and recruitment",
        description: "Transform your hiring process with AI resume screening, automated candidate matching, and intelligent recruitment workflows that identify the best talent faster.",
        buttons: [
          { text: "Explore AI Recruitment", href: "https://hr.augment.cfd/", variant: "primary" as const },
          { text: "AI screening demo", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "AI Recruitment Features",
          items: [
            "AI-powered resume screening",
            "Intelligent candidate matching",
            "Automated interview scheduling",
            "Skills assessment integration",
            "Candidate experience portal",
            "Recruitment analytics",
            "Job posting automation",
            "Offer management system"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "AI Recruitment Dashboard",
          description: "Intelligent candidate pipeline and recruitment analytics"
        }
      }
    },
    {
      id: "hr-automation",
      title: "HR Automation",
      content: {
        title: "Intelligent HR process automation",
        description: "Automate routine HR tasks with AI-powered workflows, smart approvals, and intelligent document processing that reduces administrative burden by up to 80%.",
        buttons: [
          { text: "Try HR Automation", href: "https://hr.augment.cfd/", variant: "primary" as const },
          { text: "Workflow examples", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "HR Automation Features",
          items: [
            "AI document processing",
            "Smart approval workflows",
            "Automated leave management",
            "Policy compliance automation",
            "Employee request routing",
            "Performance review automation",
            "Benefits enrollment automation",
            "24/7 AI HR assistant"
          ]
        },
        mockup: {
          type: "list" as const,
          title: "HR Task Automation",
          description: "Automated HR workflows and intelligent task management"
        }
      }
    },
    {
      id: "hr-analytics",
      title: "HR Analytics",
      content: {
        title: "Advanced workforce analytics and insights",
        description: "Make data-driven HR decisions with comprehensive workforce analytics, predictive insights, and real-time HR metrics that drive strategic human capital management.",
        buttons: [
          { text: "View HR Analytics", href: "https://hr.augment.cfd/", variant: "primary" as const },
          { text: "Custom reports", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "HR Analytics Features",
          items: [
            "Workforce analytics dashboards",
            "Employee engagement metrics",
            "Turnover prediction analytics",
            "Compensation analysis",
            "Performance metrics tracking",
            "Diversity & inclusion reporting",
            "Predictive HR insights",
            "Executive HR reports"
          ]
        },
        mockup: {
          type: "analytics" as const,
          title: "HR Analytics Center",
          description: "Comprehensive workforce insights and predictive analytics"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "AI-first HRMS platform with intelligent automation",
      description: "Experience the future of HR with AI-powered automation that handles routine tasks, intelligent document processing, and smart workflow management that reduces administrative workload by 80%.",
      link: {
        text: "Learn about AI HR features",
        href: "https://hr.augment.cfd/"
      }
    },
    {
      number: "02", 
      title: "Modern employee experience and engagement",
      description: "Deliver exceptional employee experiences with intuitive self-service portals, mobile access, and 24/7 AI-powered support that keeps employees engaged and productive."
    },
    {
      number: "03",
      title: "Advanced recruitment and talent management", 
      description: "Transform your hiring process with AI resume screening, intelligent candidate matching, and automated recruitment workflows that identify top talent faster."
    },
    {
      number: "04",
      title: "Comprehensive HR analytics and insights",
      description: "Make strategic HR decisions with advanced workforce analytics, predictive insights, and real-time metrics that drive human capital optimization and business growth."
    }
  ];

  const customerReference = {
    title: "HR Transformation Success",
    company: "Technology company reduces HR workload by 80%",
    description: "A leading technology company transformed their HR operations using our AI-powered HRMS platform, dramatically reducing administrative tasks while improving employee satisfaction.",
    image: "/products/hr/01.png",
    linkText: "Read the HR transformation story",
    linkHref: "/book-demo"
  };

  const customerLogos = [
    {
      name: "Microsoft",
      image: "https://logo.clearbit.com/microsoft.com",
      href: "/book-demo",
      alt: "Microsoft logo"
    },
    {
      name: "Google",
      image: "https://logo.clearbit.com/google.com",
      href: "/book-demo",
      alt: "Google logo"
    },
    {
      name: "Workday",
      image: "https://logo.clearbit.com/workday.com",
      href: "/book-demo", 
      alt: "Workday logo"
    },
    {
      name: "ADP",
      image: "https://logo.clearbit.com/adp.com",
      href: "/book-demo",
      alt: "ADP logo"
    },
    {
      name: "BambooHR", 
      image: "https://logo.clearbit.com/bamboohr.com",
      href: "/book-demo",
      alt: "BambooHR logo"
    },
    {
      name: "Greenhouse",
      image: "https://logo.clearbit.com/greenhouse.io",
      href: "/book-demo",
      alt: "Greenhouse logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in HR",
      content: {
        title: "Latest AI-powered HR features",
        description: "Stay updated with the newest capabilities in AI automation, employee experience, and workforce analytics designed for modern HR operations.",
        image: "/products/hr/02.png",
        links: [
          { text: "New AI automation features", href: "/book-demo" },
          { text: "Employee experience updates", href: "/book-demo" },
          { text: "Analytics enhancements", href: "/book-demo" },
          { text: "Mobile app improvements", href: "/book-demo" }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare HR solutions",
      content: {
        title: "Why choose our AI-powered HRMS platform",
        description: "Compare our comprehensive HR management capabilities with other solutions and see why HR teams choose us for intelligent automation and employee experience.",
        image: "/products/hr/03.png",
        links: [
          { text: "HRMS platform comparison", href: "/book-demo" },
          { text: "AI features comparison", href: "/book-demo" },
          { text: "Implementation guide", href: "/book-demo" },
          { text: "ROI calculator", href: "/book-demo" }
        ]
      }
    },
    {
      id: "learning",
      title: "Master modern HR practices",
      content: {
        title: "Learn AI-powered HR management",
        description: "Master modern HR practices with comprehensive guides, best practices, and training materials for HR professionals and people operations teams.",
        image: "/products/hr/04.png",
        links: [
          { text: "AI HR implementation guide", href: "/book-demo" },
          { text: "Employee experience best practices", href: "/book-demo" },
          { text: "HR automation strategies", href: "/book-demo" },
          { text: "Workforce analytics training", href: "/book-demo" }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Try HR platform",
      href: "https://hr.augment.cfd/",
      icon: "demo"
    },
    {
      title: "Schedule demo",
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
        <h1 className="sr-only">Human Resources | AI-Powered Cloud HRMS Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="Human Resources"
          description="AI-powered cloud HRMS platform that replaces traditional HR systems with intelligent automation. Features AI resume screening, automated payroll processing, smart leave management, and 24/7 AI-powered employee support. Cut administrative workload by 80% while delivering exceptional employee experiences."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "AI-Powered HR Dashboard",
            description: "Intelligent HR management with automation and employee insights"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="Human Resources Management" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose our AI-powered HRMS platform?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="HR transformation success stories"
          description="Learn why HR teams and people operations leaders choose our AI-powered platform for intelligent automation and exceptional employee experiences."
          viewMoreText="View more success stories"
          viewMoreHref="/book-demo"
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The AI-Powered HR Transformation Guide"
          description="We've compiled HR automation strategies, employee experience best practices, and AI implementation methodologies for modern people operations."
          image="/products/hr/03.png"
          buttonText="Get the HR guide"
          buttonHref="/book-demo"
        />
        <ProductGetStarted
          title="Get Started"
          actions={getStartedActions}
        />
      </main>
    </div>
  );
}
