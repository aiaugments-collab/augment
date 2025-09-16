import { ProductHero } from "@/components/product/ProductHero";
import { ProductPromo } from "@/components/product/ProductPromo";
import { ProductExplorer } from "@/components/product/ProductExplorer";
import { ProductWhyChoose } from "@/components/product/ProductWhyChoose";
import { ProductCustomerLogos } from "@/components/product/ProductCustomerLogos";
import { ProductResources } from "@/components/product/ProductResources";
import { ProductCTABanner } from "@/components/product/ProductCTABanner";
import { ProductGetStarted } from "@/components/product/ProductGetStarted";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export default function WorkforceManagementPage() {
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
      id: "workforce-planning",
      image: "/products/workforce/01.png",
      title: "Strategic Workforce Planning",
      description: "Master workforce optimization with advanced planning tools, capacity forecasting, and strategic resource allocation for maximum productivity.",
      ctaText: "Learn workforce planning",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "scheduling-optimization",
      image: "/products/workforce/02.png",
      title: "Intelligent Scheduling Solutions",
      description: "Optimize employee schedules with AI-powered scheduling, shift management, and automated workforce allocation for operational excellence.",
      ctaText: "Explore scheduling tools",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "time-attendance",
      image: "/products/workforce/03.png",
      title: "Advanced Time & Attendance",
      description: "Track employee time accurately with biometric integration, mobile check-ins, and automated attendance management systems.",
      ctaText: "View time tracking",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "labor-analytics",
      image: "/products/workforce/04.png",
      title: "Labor Cost Analytics & Insights",
      description: "Control labor costs with comprehensive analytics, budget tracking, and predictive workforce insights for strategic decision-making.",
      ctaText: "See analytics features",
      ctaLink: "/book-demo",
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "workforce-planning",
      title: "Workforce Planning",
      content: {
        title: "Strategic workforce planning and forecasting",
        description: "Optimize your workforce strategy with advanced planning tools, capacity forecasting, and predictive analytics that align staffing levels with business demands and operational requirements.",
        buttons: [
          { text: "Try Workforce Planning", href: "/book-demo", variant: "primary" as const },
          { text: "Planning templates", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Workforce Planning Features",
          items: [
            "Strategic workforce forecasting",
            "Capacity planning tools",
            "Demand-based staffing",
            "Skill gap analysis",
            "Workforce budget planning",
            "Scenario modeling",
            "Resource optimization",
            "Compliance planning"
          ]
        },
        mockup: {
          type: "analytics" as const,
          title: "Workforce Planning Dashboard",
          description: "Strategic workforce forecasting and capacity planning analytics"
        }
      }
    },
    {
      id: "scheduling-management",
      title: "Scheduling Management",
      content: {
        title: "Intelligent scheduling and shift management",
        description: "Create optimal employee schedules with AI-powered scheduling, automated shift assignments, and real-time schedule optimization that balances employee preferences with business needs.",
        buttons: [
          { text: "Explore Scheduling", href: "/book-demo", variant: "primary" as const },
          { text: "Schedule templates", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Scheduling Management Features",
          items: [
            "AI-powered schedule optimization",
            "Automated shift assignments",
            "Employee self-scheduling",
            "Schedule conflict resolution",
            "Mobile schedule access",
            "Shift swapping management",
            "Coverage optimization",
            "Schedule compliance tracking"
          ]
        },
        mockup: {
          type: "calendar" as const,
          title: "Schedule Management",
          description: "Intelligent employee scheduling and shift management interface"
        }
      }
    },
    {
      id: "time-attendance",
      title: "Time & Attendance",
      content: {
        title: "Comprehensive time tracking and attendance management",
        description: "Accurately track employee time with biometric integration, mobile check-ins, and automated attendance processing that ensures compliance and reduces administrative burden.",
        buttons: [
          { text: "Try Time Tracking", href: "/book-demo", variant: "primary" as const },
          { text: "Attendance policies", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Time & Attendance Features",
          items: [
            "Biometric time clocks",
            "Mobile check-in/out",
            "Automated time calculation",
            "Overtime management",
            "Absence tracking",
            "Geofencing capabilities",
            "Break time monitoring",
            "Compliance reporting"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Time Tracking System",
          description: "Employee time entry and attendance management interface"
        }
      }
    },
    {
      id: "labor-analytics",
      title: "Labor Analytics",
      content: {
        title: "Advanced labor cost management and analytics",
        description: "Control labor costs and optimize workforce efficiency with comprehensive analytics, budget tracking, and predictive insights that drive strategic workforce decisions.",
        buttons: [
          { text: "View Labor Analytics", href: "/book-demo", variant: "primary" as const },
          { text: "Cost reports", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Labor Analytics Features",
          items: [
            "Labor cost analysis",
            "Productivity metrics",
            "Budget vs actual tracking",
            "Overtime cost monitoring",
            "Workforce efficiency metrics",
            "Predictive labor analytics",
            "Department cost allocation",
            "Executive labor reports"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Labor Analytics Center",
          description: "Comprehensive labor cost and workforce efficiency insights"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Strategic workforce planning and optimization",
      description: "Optimize your workforce strategy with advanced planning tools, capacity forecasting, and predictive analytics that align staffing levels with business demands and operational requirements.",
      link: {
        text: "Learn about workforce planning",
        href: "/book-demo"
      }
    },
    {
      number: "02", 
      title: "Intelligent scheduling and shift management",
      description: "Create optimal employee schedules with AI-powered scheduling tools that balance employee preferences with business needs while ensuring adequate coverage and compliance."
    },
    {
      number: "03",
      title: "Advanced time tracking and attendance management", 
      description: "Accurately track employee time with biometric integration, mobile capabilities, and automated processing that reduces administrative burden and ensures compliance."
    },
    {
      number: "04",
      title: "Comprehensive labor analytics and cost control",
      description: "Control labor costs and optimize workforce efficiency with advanced analytics, budget tracking, and predictive insights that drive strategic workforce decisions."
    }
  ];

  const customerReference = {
    title: "Workforce Management Success",
    company: "Retail chain reduces labor costs by 25%",
    description: "A major retail chain optimized their workforce management using our advanced scheduling and analytics platform, achieving significant labor cost reductions while improving employee satisfaction.",
    image: "/products/workforce/01.png",
    linkText: "Read the workforce optimization story",
    linkHref: "/book-demo"
  };

  const customerLogos = [
    {
      name: "Walmart",
      image: "https://logo.clearbit.com/walmart.com",
      href: "/book-demo",
      alt: "Walmart logo"
    },
    {
      name: "Target",
      image: "https://logo.clearbit.com/target.com",
      href: "/book-demo",
      alt: "Target logo"
    },
    {
      name: "Kronos",
      image: "https://logo.clearbit.com/kronos.com",
      href: "/book-demo", 
      alt: "Kronos logo"
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
      name: "When I Work",
      image: "https://logo.clearbit.com/wheniwork.com",
      href: "/book-demo",
      alt: "When I Work logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in Workforce Management",
      content: {
        title: "Latest workforce optimization features",
        description: "Stay updated with the newest capabilities in workforce planning, scheduling automation, and labor analytics designed for modern workforce optimization.",
        image: "/products/workforce/02.png",
        links: [
          { text: "New planning features", href: "/book-demo" },
          { text: "Scheduling AI improvements", href: "/book-demo" },
          { text: "Analytics enhancements", href: "/book-demo" },
          { text: "Mobile app updates", href: "/book-demo" }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare workforce solutions",
      content: {
        title: "Why choose our workforce management platform",
        description: "Compare our comprehensive workforce management capabilities with other solutions and see why operations leaders choose us for workforce optimization.",
        image: "/products/workforce/03.png",
        links: [
          { text: "Workforce platform comparison", href: "/book-demo" },
          { text: "Feature comparison matrix", href: "/book-demo" },
          { text: "Implementation guide", href: "/book-demo" },
          { text: "ROI calculator", href: "/book-demo" }
        ]
      }
    },
    {
      id: "learning",
      title: "Master workforce management",
      content: {
        title: "Learn strategic workforce optimization",
        description: "Master workforce management excellence with comprehensive guides, best practices, and training materials for operations leaders and workforce managers.",
        image: "/products/workforce/04.png",
        links: [
          { text: "Workforce strategy guide", href: "/book-demo" },
          { text: "Scheduling best practices", href: "/book-demo" },
          { text: "Labor cost optimization", href: "/book-demo" },
          { text: "Compliance management training", href: "/book-demo" }
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
        <h1 className="sr-only">Workforce Management | Advanced Workforce Planning & Scheduling Solution</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="Workforce Management"
          description="Advanced workforce planning, scheduling, time and attendance tracking, labor cost management, and compliance monitoring for optimal workforce utilization. Optimize staffing levels, control labor costs, and improve operational efficiency."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "calendar",
            title: "Workforce Scheduling Dashboard",
            description: "Intelligent workforce planning and schedule optimization"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="Workforce Management" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose our Workforce Management solution?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Workforce management success stories"
          description="Learn why operations leaders and workforce managers choose our platform for strategic workforce optimization and labor cost management."
          viewMoreText="View more success stories"
          viewMoreHref="/book-demo"
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Workforce Optimization Guide"
          description="We've compiled workforce planning strategies, scheduling best practices, and labor optimization methodologies for modern workforce management."
          image="/products/workforce/03.png"
          buttonText="Get the workforce guide"
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