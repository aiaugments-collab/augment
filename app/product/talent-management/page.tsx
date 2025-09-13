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
      title: "Webinar: Modern Talent Acquisition",
      description: "Learn how to attract and hire top talent with AI-powered recruitment tools and streamlined hiring processes.",
      ctaText: "Register today",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "performance-management",
      image: "/products/talent/02.png",
      title: "Performance Management Best Practices",
      description: "Discover how to implement effective performance management systems that drive employee engagement and business results.",
      ctaText: "Read guide",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "learning-development",
      image: "/products/talent/03.png",
      title: "Learning & Development Strategy Guide",
      description: "Master employee development with comprehensive learning programs and career progression frameworks.",
      ctaText: "Download guide (PDF)",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "talent-success",
      image: "/products/talent/04.png",
      title: "Success Story: 40% Faster Hiring",
      description: "See how a technology company reduced time-to-hire by 40% while improving candidate quality using our talent management solution.",
      ctaText: "Read success story",
      ctaLink: "/book-demo",
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "talent-acquisition",
      title: "Talent Acquisition",
      content: {
        title: "AI-powered recruitment and hiring",
        description: "Streamline your hiring process with AI-powered candidate matching, automated screening, and collaborative hiring tools that help you find and hire the best talent faster.",
        buttons: [
          { text: "Try talent acquisition", href: "/book-demo", variant: "primary" as const },
          { text: "See hiring examples", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Acquisition Capabilities",
          items: [
            "AI-powered candidate matching",
            "Automated resume screening",
            "Multi-channel job posting",
            "Collaborative hiring workflows",
            "Interview scheduling automation",
            "Candidate experience optimization",
            "Hiring analytics and reporting",
            "Offer management system"
          ]
        },
        image: "/products/talent/01.png",
        imageAlt: "Talent acquisition interface with AI matching and candidate screening"
      }
    },
    {
      id: "performance-management",
      title: "Performance Management",
      content: {
        title: "Comprehensive performance management system",
        description: "Drive employee performance with goal setting, continuous feedback, performance reviews, and development planning tools that align individual goals with business objectives.",
        buttons: [
          { text: "Explore performance management", href: "/book-demo", variant: "primary" as const },
          { text: "View performance tools", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Performance Features",
          items: [
            "Goal setting and tracking",
            "Continuous feedback system",
            "360-degree reviews",
            "Performance calibration",
            "Development planning",
            "Competency management",
            "Performance analytics",
            "Recognition and rewards"
          ]
        },
        image: "/products/talent/02.png",
        imageAlt: "Performance management dashboard with goals and feedback tracking"
      }
    },
    {
      id: "learning-development",
      title: "Learning & Development",
      content: {
        title: "Comprehensive learning and development platform",
        description: "Develop your workforce with personalized learning paths, skill assessments, training programs, and career development tools that drive employee growth and retention.",
        buttons: [
          { text: "Try learning platform", href: "/book-demo", variant: "primary" as const },
          { text: "Development guide", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Learning Features",
          items: [
            "Personalized learning paths",
            "Skill gap analysis",
            "Training program management",
            "Career development planning",
            "Mentoring programs",
            "Certification tracking",
            "Learning analytics",
            "Mobile learning access"
          ]
        },
        image: "/products/talent/03.png",
        imageAlt: "Learning and development interface with personalized training paths"
      }
    },
    {
      id: "succession-planning",
      title: "Succession Planning",
      content: {
        title: "Strategic succession planning and career development",
        description: "Prepare for the future with comprehensive succession planning tools that identify high-potential employees, create development plans, and ensure business continuity.",
        buttons: [
          { text: "Explore succession planning", href: "/book-demo", variant: "primary" as const },
          { text: "Planning guide", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Succession Planning Features",
          items: [
            "High-potential identification",
            "Succession mapping",
            "Leadership development programs",
            "Career pathway planning",
            "Talent pipeline management",
            "Risk assessment tools",
            "Readiness evaluation",
            "Development tracking"
          ]
        },
        image: "/products/talent/04.png",
        imageAlt: "Succession planning dashboard with talent pipeline and development tracking"
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "AI-powered talent acquisition and recruitment",
      description: "Find and hire the best talent faster with AI-powered candidate matching, automated screening, and streamlined hiring processes that improve candidate quality and reduce time-to-hire.",
      link: {
        text: "Learn about talent acquisition",
        href: "/book-demo"
      }
    },
    {
      number: "02", 
      title: "Comprehensive performance management system",
      description: "Drive employee performance with integrated goal setting, continuous feedback, and development planning tools that align individual performance with business objectives."
    },
    {
      number: "03",
      title: "Personalized learning and development platform", 
      description: "Develop your workforce with personalized learning paths, skill assessments, and career development tools that drive employee growth, engagement, and retention."
    },
    {
      number: "04",
      title: "Strategic succession planning and leadership development",
      description: "Prepare for the future with comprehensive succession planning tools that identify high-potential employees and create development plans for business continuity."
    }
  ];

  const customerReference = {
    title: "Customer Success Story",
    company: "Technology company reduces time-to-hire by 40%",
    description: "A leading technology company transformed their talent management process using our solution, significantly reducing hiring time while improving candidate quality and employee retention.",
    image: "/products/talent/01.png",
    linkText: "Read the talent management success story",
    linkHref: "/book-demo"
  };

  const customerLogos = [
    {
      name: "Google",
      image: "https://logo.clearbit.com/google.com",
      href: "/book-demo",
      alt: "Google logo"
    },
    {
      name: "Microsoft",
      image: "https://logo.clearbit.com/microsoft.com",
      href: "/book-demo",
      alt: "Microsoft logo"
    },
    {
      name: "Apple",
      image: "https://logo.clearbit.com/apple.com",
      href: "/book-demo", 
      alt: "Apple logo"
    },
    {
      name: "Amazon",
      image: "https://logo.clearbit.com/amazon.com",
      href: "/book-demo",
      alt: "Amazon logo"
    },
    {
      name: "Meta", 
      image: "https://logo.clearbit.com/meta.com",
      href: "/book-demo",
      alt: "Meta logo"
    },
    {
      name: "Netflix",
      image: "https://logo.clearbit.com/netflix.com",
      href: "/book-demo",
      alt: "Netflix logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in Talent Management",
      content: {
        title: "Latest talent management and HR technology features",
        description: "Stay updated with the newest capabilities in talent acquisition, performance management, and employee development designed for modern workplaces.",
        image: "/products/talent/02.png",
        links: [
          { text: "Latest AI recruitment features", href: "/book-demo" },
          { text: "New performance management tools", href: "/book-demo" },
          { text: "Enhanced learning platforms", href: "/book-demo" },
          { text: "Mobile app improvements", href: "/book-demo" }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare Talent Management solutions",
      content: {
        title: "See why our talent management solution leads the market",
        description: "Compare our comprehensive talent management capabilities with other solutions and see why organizations choose us for recruitment, performance management, and employee development.",
        image: "/products/talent/03.png",
        links: [
          { text: "Talent management comparison", href: "/book-demo" },
          { text: "Feature comparison guide", href: "/book-demo" },
          { text: "ROI calculator", href: "/book-demo" },
          { text: "Implementation roadmap", href: "/book-demo" }
        ]
      }
    },
    {
      id: "learning",
      title: "Master talent management",
      content: {
        title: "Learn advanced talent management techniques",
        description: "Master talent optimization with comprehensive guides, best practices, and HR strategies used by leading technology companies and innovative organizations.",
        image: "/products/talent/04.png",
        links: [
          { text: "Talent management masterclass", href: "/book-demo" },
          { text: "Recruitment optimization guide", href: "/book-demo" },
          { text: "Performance management training", href: "/book-demo" },
          { text: "Leadership development strategies", href: "/book-demo" }
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
        <h1 className="sr-only">Talent Management | Recruitment, Performance & Development Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="Talent Management"
          description="Comprehensive talent acquisition, performance management, learning and development, and succession planning for optimal workforce management. Attract, develop, and retain top talent with integrated talent management capabilities."
          ctaButtons={ctaButtons}
          mediaType="image"
          mediaUrl="/products/talent/01.png"
          mediaAlt="Talent Management dashboard with recruitment and performance tools"
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="Talent Management" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose our Talent Management solution?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Talent management success stories"
          description="Learn why leading technology companies and innovative organizations use our talent management solution to attract, develop, and retain top talent."
          viewMoreText="View more success stories"
          viewMoreHref="/book-demo"
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Talent Management Guide"
          description="We've compiled recruitment strategies, performance management frameworks, and talent development best practices used by leading technology companies and innovative organizations."
          image="/products/talent/03.png"
          buttonText="Get the talent management guide"
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
