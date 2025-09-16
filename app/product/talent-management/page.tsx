import { ProductHero } from "@/components/product/ProductHero";
import { ProductPromo } from "@/components/product/ProductPromo";
import { ProductExplorer } from "@/components/product/ProductExplorer";
import { ProductWhyChoose } from "@/components/product/ProductWhyChoose";
import { ProductCustomerLogos } from "@/components/product/ProductCustomerLogos";
import { ProductResources } from "@/components/product/ProductResources";
import { ProductCTABanner } from "@/components/product/ProductCTABanner";
import { ProductGetStarted } from "@/components/product/ProductGetStarted";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export default function TalentManagementPage() {
  const ctaButtons = [
    {
      text: "Start Free Trial",
      href: "/book-demo",
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
      id: "talent-acquisition",
      image: "/products/talent/01.png",
      title: "Advanced Talent Acquisition Strategy",
      description: "Master modern recruitment techniques with AI-powered sourcing, candidate experience optimization, and strategic talent pipeline development.",
      ctaText: "Learn talent acquisition",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "performance-management",
      image: "/products/talent/02.png",
      title: "Modern Performance Management",
      description: "Transform performance reviews with continuous feedback, goal alignment, and data-driven performance insights for employee development.",
      ctaText: "Explore performance tools",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "learning-development",
      image: "/products/talent/03.png",
      title: "Learning & Development Platform",
      description: "Create personalized learning paths, skill development programs, and career advancement opportunities that drive employee growth.",
      ctaText: "View L&D features",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "succession-planning",
      image: "/products/talent/04.png",
      title: "Strategic Succession Planning",
      description: "Build robust talent pipelines with succession planning, leadership development, and strategic workforce planning for business continuity.",
      ctaText: "See succession tools",
      ctaLink: "/book-demo",
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "talent-acquisition",
      title: "Talent Acquisition",
      content: {
        title: "Comprehensive recruitment and talent sourcing",
        description: "Attract and hire top talent with AI-powered sourcing, automated candidate screening, and optimized recruitment workflows that reduce time-to-hire and improve candidate quality.",
        buttons: [
          { text: "Try Talent Acquisition", href: "/book-demo", variant: "primary" as const },
          { text: "Sourcing strategies", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Talent Acquisition Features",
          items: [
            "AI-powered candidate sourcing",
            "Automated resume screening",
            "Candidate experience portal",
            "Interview management system",
            "Talent pipeline development",
            "Employer branding tools",
            "Recruitment analytics",
            "Collaborative hiring workflows"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Candidate Pipeline",
          description: "Comprehensive candidate tracking and recruitment workflow management"
        }
      }
    },
    {
      id: "performance-management",
      title: "Performance Management",
      content: {
        title: "Modern performance evaluation and development",
        description: "Drive employee performance with continuous feedback, goal alignment, and data-driven insights that support career development and organizational success.",
        buttons: [
          { text: "Explore Performance Tools", href: "/book-demo", variant: "primary" as const },
          { text: "Review templates", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Performance Management Features",
          items: [
            "Continuous feedback system",
            "Goal setting and tracking",
            "360-degree feedback",
            "Performance review automation",
            "Competency assessments",
            "Career development planning",
            "Performance analytics",
            "Manager coaching tools"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Performance Review",
          description: "Modern performance evaluation and goal tracking interface"
        }
      }
    },
    {
      id: "learning-development",
      title: "Learning & Development",
      content: {
        title: "Personalized learning and skill development",
        description: "Accelerate employee growth with personalized learning paths, skill assessments, and comprehensive training programs that align with career goals and business objectives.",
        buttons: [
          { text: "Try Learning Platform", href: "/book-demo", variant: "primary" as const },
          { text: "Course catalog", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Learning & Development Features",
          items: [
            "Personalized learning paths",
            "Skill gap analysis",
            "Training content library",
            "Mobile learning platform",
            "Learning progress tracking",
            "Certification management",
            "Social learning features",
            "Learning analytics"
          ]
        },
        mockup: {
          type: "list" as const,
          title: "Learning Dashboard",
          description: "Personalized learning paths and skill development tracking"
        }
      }
    },
    {
      id: "succession-planning",
      title: "Succession Planning",
      content: {
        title: "Strategic workforce planning and development",
        description: "Build resilient organizations with comprehensive succession planning, leadership development, and strategic talent mapping that ensures business continuity and growth.",
        buttons: [
          { text: "View Succession Tools", href: "/book-demo", variant: "primary" as const },
          { text: "Planning framework", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Succession Planning Features",
          items: [
            "Leadership pipeline development",
            "High-potential identification",
            "Succession mapping tools",
            "Leadership assessments",
            "Career progression planning",
            "Talent mobility tracking",
            "Risk assessment analysis",
            "Executive dashboards"
          ]
        },
        mockup: {
          type: "analytics" as const,
          title: "Succession Analytics",
          description: "Strategic talent planning and leadership pipeline insights"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Comprehensive talent acquisition and sourcing",
      description: "Attract and hire top talent with AI-powered recruitment tools, automated candidate screening, and optimized hiring workflows that reduce time-to-hire while improving candidate quality.",
      link: {
        text: "Learn about talent acquisition",
        href: "/book-demo"
      }
    },
    {
      number: "02", 
      title: "Modern performance management and development",
      description: "Drive employee performance with continuous feedback systems, goal alignment tools, and data-driven insights that support career development and organizational success."
    },
    {
      number: "03",
      title: "Personalized learning and skill development", 
      description: "Accelerate employee growth with personalized learning paths, skill assessments, and comprehensive training programs that align with career goals and business objectives."
    },
    {
      number: "04",
      title: "Strategic succession planning and leadership development",
      description: "Build resilient organizations with comprehensive succession planning, leadership development programs, and strategic talent mapping that ensures business continuity."
    }
  ];

  const customerReference = {
    title: "Talent Management Success",
    company: "Global company improves retention by 45%",
    description: "A multinational corporation transformed their talent management approach using our comprehensive platform, significantly improving employee retention and accelerating leadership development.",
    image: "/products/talent/01.png",
    linkText: "Read the talent management success story",
    linkHref: "/book-demo"
  };

  const customerLogos = [
    {
      name: "LinkedIn",
      image: "https://logo.clearbit.com/linkedin.com",
      href: "/book-demo",
      alt: "LinkedIn logo"
    },
    {
      name: "Workday",
      image: "https://logo.clearbit.com/workday.com",
      href: "/book-demo",
      alt: "Workday logo"
    },
    {
      name: "Cornerstone",
      image: "https://logo.clearbit.com/cornerstoneondemand.com",
      href: "/book-demo", 
      alt: "Cornerstone logo"
    },
    {
      name: "SuccessFactors",
      image: "https://logo.clearbit.com/successfactors.com",
      href: "/book-demo",
      alt: "SuccessFactors logo"
    },
    {
      name: "Greenhouse", 
      image: "https://logo.clearbit.com/greenhouse.io",
      href: "/book-demo",
      alt: "Greenhouse logo"
    },
    {
      name: "Lever",
      image: "https://logo.clearbit.com/lever.co",
      href: "/book-demo",
      alt: "Lever logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in Talent Management",
      content: {
        title: "Latest talent management innovations",
        description: "Stay updated with the newest capabilities in talent acquisition, performance management, and succession planning designed for modern workforce development.",
        image: "/products/talent/02.png",
        links: [
          { text: "New recruitment features", href: "/book-demo" },
          { text: "Performance management updates", href: "/book-demo" },
          { text: "Learning platform enhancements", href: "/book-demo" },
          { text: "Succession planning tools", href: "/book-demo" }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare talent solutions",
      content: {
        title: "Why choose our talent management platform",
        description: "Compare our comprehensive talent management capabilities with other solutions and see why HR leaders choose us for talent acquisition and development.",
        image: "/products/talent/03.png",
        links: [
          { text: "Talent platform comparison", href: "/book-demo" },
          { text: "Feature comparison matrix", href: "/book-demo" },
          { text: "Implementation roadmap", href: "/book-demo" },
          { text: "ROI analysis", href: "/book-demo" }
        ]
      }
    },
    {
      id: "learning",
      title: "Master talent management",
      content: {
        title: "Learn strategic talent management",
        description: "Master talent management excellence with comprehensive guides, best practices, and training materials for HR professionals and talent leaders.",
        image: "/products/talent/04.png",
        links: [
          { text: "Talent strategy guide", href: "/book-demo" },
          { text: "Recruitment best practices", href: "/book-demo" },
          { text: "Performance management training", href: "/book-demo" },
          { text: "Succession planning framework", href: "/book-demo" }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Start free trial",
      href: "/book-demo",
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
        <h1 className="sr-only">Talent Management | Complete Talent Acquisition & Development Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="Talent Management"
          description="Comprehensive talent acquisition, performance management, learning and development, succession planning, and career development for optimal workforce management. Build high-performing teams with strategic talent planning and development."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "analytics",
            title: "Talent Analytics Dashboard",
            description: "Strategic talent insights and workforce development metrics"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="Talent Management" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose our Talent Management platform?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Talent management success stories"
          description="Learn why HR leaders and talent professionals choose our platform for strategic talent acquisition and workforce development."
          viewMoreText="View more success stories"
          viewMoreHref="/book-demo"
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Strategic Talent Management Guide"
          description="We've compiled talent acquisition strategies, performance management frameworks, and succession planning methodologies for modern workforce development."
          image="/products/talent/03.png"
          buttonText="Get the talent guide"
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