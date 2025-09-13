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
      title: "Webinar: Strategic Workforce Planning",
      description: "Learn how to implement strategic workforce planning that optimizes labor costs while ensuring adequate staffing levels.",
      ctaText: "Register today",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "scheduling-optimization",
      image: "/products/workforce/02.png",
      title: "Scheduling Optimization Best Practices",
      description: "Discover how to optimize employee scheduling with automated tools that balance business needs and employee preferences.",
      ctaText: "Read guide",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "labor-analytics",
      image: "/products/workforce/03.png",
      title: "Advanced Labor Analytics Guide",
      description: "Master labor analytics with comprehensive reporting and forecasting tools for workforce optimization and cost management.",
      ctaText: "Download guide (PDF)",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "workforce-success",
      image: "/products/workforce/04.png",
      title: "Success Story: 30% Labor Cost Reduction",
      description: "See how a retail chain reduced labor costs by 30% while improving employee satisfaction using our workforce management solution.",
      ctaText: "Read success story",
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
        description: "Plan your workforce strategically with demand forecasting, capacity planning, and skill gap analysis. Optimize staffing levels while controlling labor costs.",
        buttons: [
          { text: "Try workforce planning", href: "/book-demo", variant: "primary" as const },
          { text: "See planning examples", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Planning Capabilities",
          items: [
            "Demand forecasting algorithms",
            "Capacity planning tools",
            "Skill gap analysis",
            "Workforce budgeting",
            "Scenario planning",
            "Succession planning",
            "Headcount optimization",
            "Labor cost modeling"
          ]
        },
        image: "/products/workforce/01.png",
        imageAlt: "Workforce planning interface with forecasting and capacity analysis"
      }
    },
    {
      id: "scheduling",
      title: "Employee Scheduling",
      content: {
        title: "Intelligent employee scheduling and optimization",
        description: "Create optimal schedules with automated tools that consider employee availability, skills, labor laws, and business requirements for maximum efficiency.",
        buttons: [
          { text: "Explore scheduling", href: "/book-demo", variant: "primary" as const },
          { text: "View schedule examples", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Scheduling Features",
          items: [
            "Automated schedule generation",
            "Shift optimization algorithms",
            "Employee availability tracking",
            "Skills-based scheduling",
            "Labor law compliance",
            "Schedule conflict resolution",
            "Mobile schedule access",
            "Shift swap management"
          ]
        },
        image: "/products/workforce/02.png",
        imageAlt: "Employee scheduling dashboard with automated optimization"
      }
    },
    {
      id: "time-attendance",
      title: "Time & Attendance",
      content: {
        title: "Comprehensive time and attendance tracking",
        description: "Track employee time and attendance with multiple clock-in methods, automated calculations, and compliance monitoring for accurate payroll processing.",
        buttons: [
          { text: "Try time tracking", href: "/book-demo", variant: "primary" as const },
          { text: "Attendance guide", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Time Tracking Features",
          items: [
            "Multiple clock-in methods",
            "Biometric time clocks",
            "Mobile time tracking",
            "Automated break tracking",
            "Overtime calculations",
            "Absence management",
            "Compliance monitoring",
            "Real-time reporting"
          ]
        },
        image: "/products/workforce/03.png",
        imageAlt: "Time and attendance tracking interface with multiple clock-in options"
      }
    },
    {
      id: "labor-analytics",
      title: "Labor Analytics",
      content: {
        title: "Advanced labor analytics and reporting",
        description: "Gain insights into workforce performance with comprehensive analytics, predictive modeling, and customizable reports for data-driven workforce decisions.",
        buttons: [
          { text: "Explore analytics", href: "/book-demo", variant: "primary" as const },
          { text: "Analytics guide", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Analytics Features",
          items: [
            "Labor cost analysis",
            "Productivity metrics",
            "Predictive analytics",
            "Custom reporting tools",
            "Real-time dashboards",
            "Trend analysis",
            "Benchmarking reports",
            "ROI calculations"
          ]
        },
        image: "/products/workforce/04.png",
        imageAlt: "Labor analytics dashboard with performance metrics and reporting"
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Strategic workforce planning and optimization",
      description: "Plan your workforce strategically with advanced forecasting, capacity planning, and optimization tools that balance business needs with labor costs and employee satisfaction.",
      link: {
        text: "Learn about workforce planning",
        href: "/book-demo"
      }
    },
    {
      number: "02", 
      title: "Intelligent scheduling and time management",
      description: "Create optimal schedules with automated tools that consider employee skills, availability, and preferences while ensuring compliance with labor laws and regulations."
    },
    {
      number: "03",
      title: "Comprehensive time and attendance tracking", 
      description: "Track employee time accurately with multiple clock-in methods, automated calculations, and real-time monitoring that ensures accurate payroll and compliance."
    },
    {
      number: "04",
      title: "Advanced labor analytics and insights",
      description: "Make data-driven workforce decisions with comprehensive analytics, predictive modeling, and customizable reports that provide insights into workforce performance and costs."
    }
  ];

  const customerReference = {
    title: "Customer Success Story",
    company: "Retail chain reduces labor costs by 30% while improving satisfaction",
    description: "A major retail chain transformed their workforce management using our solution, significantly reducing labor costs while improving employee satisfaction and retention.",
    image: "/products/workforce/01.png",
    linkText: "Read the workforce management success story",
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
      name: "Home Depot",
      image: "https://logo.clearbit.com/homedepot.com",
      href: "/book-demo", 
      alt: "Home Depot logo"
    },
    {
      name: "Starbucks",
      image: "https://logo.clearbit.com/starbucks.com",
      href: "/book-demo",
      alt: "Starbucks logo"
    },
    {
      name: "McDonald's", 
      image: "https://logo.clearbit.com/mcdonalds.com",
      href: "/book-demo",
      alt: "McDonald's logo"
    },
    {
      name: "Costco",
      image: "https://logo.clearbit.com/costco.com",
      href: "/book-demo",
      alt: "Costco logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in Workforce Management",
      content: {
        title: "Latest workforce management and scheduling features",
        description: "Stay updated with the newest capabilities in workforce planning, employee scheduling, and labor analytics designed for modern workplaces.",
        image: "/products/workforce/02.png",
        links: [
          { text: "Latest planning features", href: "/book-demo" },
          { text: "New scheduling capabilities", href: "/book-demo" },
          { text: "Enhanced analytics tools", href: "/book-demo" },
          { text: "Mobile app improvements", href: "/book-demo" }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare Workforce Management solutions",
      content: {
        title: "See why our workforce management solution leads the market",
        description: "Compare our comprehensive workforce management capabilities with other solutions and see why organizations choose us for employee scheduling and labor optimization.",
        image: "/products/workforce/03.png",
        links: [
          { text: "Workforce management comparison", href: "/book-demo" },
          { text: "Feature comparison guide", href: "/book-demo" },
          { text: "ROI calculator", href: "/book-demo" },
          { text: "Implementation roadmap", href: "/book-demo" }
        ]
      }
    },
    {
      id: "learning",
      title: "Master workforce management",
      content: {
        title: "Learn advanced workforce management techniques",
        description: "Master workforce optimization with comprehensive guides, best practices, and scheduling strategies used by leading retailers and service organizations.",
        image: "/products/workforce/04.png",
        links: [
          { text: "Workforce management masterclass", href: "/book-demo" },
          { text: "Scheduling optimization guide", href: "/book-demo" },
          { text: "Labor analytics training", href: "/book-demo" },
          { text: "Compliance best practices", href: "/book-demo" }
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
        <h1 className="sr-only">Workforce Management | Employee Scheduling & Labor Optimization</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="Workforce Management"
          description="Advanced workforce planning, employee scheduling, time and attendance tracking, and labor analytics for optimal workforce utilization. Reduce labor costs while improving employee satisfaction with comprehensive workforce management capabilities."
          ctaButtons={ctaButtons}
          mediaType="image"
          mediaUrl="/products/workforce/01.png"
          mediaAlt="Workforce Management dashboard with planning and scheduling tools"
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
          description="Learn why leading retailers and service organizations use our workforce management solution to optimize labor costs and improve employee satisfaction."
          viewMoreText="View more success stories"
          viewMoreHref="/book-demo"
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Workforce Management Guide"
          description="We've compiled workforce optimization strategies, scheduling best practices, and labor management techniques used by leading retailers and service organizations."
          image="/products/workforce/03.png"
          buttonText="Get the workforce management guide"
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
