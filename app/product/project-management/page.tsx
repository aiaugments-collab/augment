import { ProductHero } from "@/components/product/ProductHero";
import { ProductPromo } from "@/components/product/ProductPromo";
import { ProductExplorer } from "@/components/product/ProductExplorer";
import { ProductWhyChoose } from "@/components/product/ProductWhyChoose";
import { ProductCustomerLogos } from "@/components/product/ProductCustomerLogos";
import { ProductResources } from "@/components/product/ProductResources";
import { ProductCTABanner } from "@/components/product/ProductCTABanner";
import { ProductGetStarted } from "@/components/product/ProductGetStarted";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export default function ProjectManagementPage() {
  const ctaButtons = [
    {
      text: "Try Projects Module",
      href: "https://erp.augment.cfd/app/projects",
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
      id: "project-planning",
      image: "/products/projects/01.png",
      title: "Advanced Project Planning & Scheduling",
      description: "Create detailed project plans with Gantt charts, resource allocation, and milestone tracking for successful project delivery.",
      ctaText: "Learn project planning",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "resource-management",
      image: "/products/projects/02.png",
      title: "Resource Allocation & Management",
      description: "Optimize resource utilization with capacity planning, skill-based assignments, and real-time availability tracking.",
      ctaText: "View resource features",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "time-tracking",
      image: "/products/projects/03.png",
      title: "Time Tracking & Expense Management",
      description: "Track project time, manage expenses, and monitor budgets with integrated timesheets and cost management tools.",
      ctaText: "Explore time tracking",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "collaboration",
      image: "/products/projects/04.png",
      title: "Team Collaboration & Communication",
      description: "Enhance team productivity with integrated collaboration tools, document sharing, and real-time project communication.",
      ctaText: "See collaboration tools",
      ctaLink: "/book-demo",
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "project-planning",
      title: "Project Planning",
      content: {
        title: "Comprehensive project planning and scheduling",
        description: "Create detailed project plans with interactive Gantt charts, dependency management, and critical path analysis. Plan projects from conception to completion with precision.",
        buttons: [
          { text: "Try Project Planning", href: "https://erp.augment.cfd/app/projects", variant: "primary" as const },
          { text: "Planning templates", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Planning Features",
          items: [
            "Interactive Gantt charts",
            "Task dependency management",
            "Critical path analysis",
            "Milestone tracking",
            "Project templates",
            "Baseline comparison",
            "Schedule optimization",
            "Risk assessment integration"
          ]
        },
        mockup: {
          type: "calendar" as const,
          title: "Project Timeline",
          description: "Interactive project planning with Gantt chart visualization"
        }
      }
    },
    {
      id: "resource-allocation",
      title: "Resource Management",
      content: {
        title: "Intelligent resource allocation and optimization",
        description: "Optimize team productivity with smart resource allocation, capacity planning, and skill-based assignments. Balance workloads and maximize resource utilization across projects.",
        buttons: [
          { text: "Explore Resources", href: "https://erp.augment.cfd/app/projects", variant: "primary" as const },
          { text: "Capacity planning", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Resource Management Features",
          items: [
            "Resource capacity planning",
            "Skill-based assignments",
            "Workload balancing",
            "Availability tracking",
            "Resource forecasting",
            "Team performance metrics",
            "Cost per resource analysis",
            "Resource conflict resolution"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Resource Dashboard",
          description: "Real-time resource allocation and capacity overview"
        }
      }
    },
    {
      id: "task-management",
      title: "Task Management",
      content: {
        title: "Advanced task tracking and collaboration",
        description: "Manage tasks efficiently with Kanban boards, automated workflows, and real-time progress tracking. Enable team collaboration with integrated communication tools.",
        buttons: [
          { text: "Try Task Management", href: "https://erp.augment.cfd/app/projects", variant: "primary" as const },
          { text: "Workflow automation", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Task Management Features",
          items: [
            "Kanban board views",
            "Automated task workflows",
            "Progress tracking",
            "Priority management",
            "Task dependencies",
            "Team collaboration",
            "File sharing integration",
            "Real-time notifications"
          ]
        },
        mockup: {
          type: "list" as const,
          title: "Task Board",
          description: "Kanban-style task management with team collaboration"
        }
      }
    },
    {
      id: "project-analytics",
      title: "Project Analytics",
      content: {
        title: "Comprehensive project performance insights",
        description: "Monitor project health with real-time dashboards, performance metrics, and predictive analytics. Make data-driven decisions to ensure project success.",
        buttons: [
          { text: "View Analytics", href: "https://erp.augment.cfd/app/projects", variant: "primary" as const },
          { text: "Custom reports", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Analytics Features",
          items: [
            "Real-time project dashboards",
            "Performance KPI tracking",
            "Budget vs actual analysis",
            "Resource utilization metrics",
            "Timeline variance reporting",
            "Predictive project analytics",
            "Portfolio overview",
            "Executive summary reports"
          ]
        },
        mockup: {
          type: "analytics" as const,
          title: "Project Analytics",
          description: "Comprehensive project performance metrics and insights"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Complete project lifecycle management",
      description: "Manage projects from initiation to closure with comprehensive planning, execution, monitoring, and control capabilities in one integrated platform.",
      link: {
        text: "Learn about project features",
        href: "https://erp.augment.cfd/app/projects"
      }
    },
    {
      number: "02", 
      title: "Intelligent resource optimization",
      description: "Maximize team productivity with AI-powered resource allocation, capacity planning, and workload balancing that adapts to changing project needs."
    },
    {
      number: "03",
      title: "Advanced collaboration and communication", 
      description: "Enable seamless team collaboration with integrated communication tools, document sharing, and real-time project updates that keep everyone aligned."
    },
    {
      number: "04",
      title: "Data-driven project insights",
      description: "Make informed decisions with comprehensive project analytics, performance metrics, and predictive insights that ensure project success and continuous improvement."
    }
  ];

  const customerReference = {
    title: "Project Management Success",
    company: "IT company improves delivery time by 40%",
    description: "A leading IT services company transformed their project delivery using our comprehensive project management solution, dramatically improving on-time delivery and client satisfaction.",
    image: "/products/projects/01.png",
    linkText: "Read the project management success story",
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
      name: "Atlassian",
      image: "https://logo.clearbit.com/atlassian.com",
      href: "/book-demo",
      alt: "Atlassian logo"
    },
    {
      name: "Monday.com",
      image: "https://logo.clearbit.com/monday.com",
      href: "/book-demo", 
      alt: "Monday.com logo"
    },
    {
      name: "Asana",
      image: "https://logo.clearbit.com/asana.com",
      href: "/book-demo",
      alt: "Asana logo"
    },
    {
      name: "Smartsheet", 
      image: "https://logo.clearbit.com/smartsheet.com",
      href: "/book-demo",
      alt: "Smartsheet logo"
    },
    {
      name: "Wrike",
      image: "https://logo.clearbit.com/wrike.com",
      href: "/book-demo",
      alt: "Wrike logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in Projects",
      content: {
        title: "Latest project management features",
        description: "Stay updated with the newest capabilities in project planning, resource management, and team collaboration designed for modern project delivery.",
        image: "/products/projects/02.png",
        links: [
          { text: "New planning features", href: "/book-demo" },
          { text: "Resource optimization tools", href: "/book-demo" },
          { text: "Collaboration enhancements", href: "/book-demo" },
          { text: "Mobile app updates", href: "/book-demo" }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare project solutions",
      content: {
        title: "Why choose our project management platform",
        description: "Compare our comprehensive project management capabilities with other solutions and see why project managers choose us for successful delivery.",
        image: "/products/projects/03.png",
        links: [
          { text: "Project software comparison", href: "/book-demo" },
          { text: "Feature comparison matrix", href: "/book-demo" },
          { text: "Implementation guide", href: "/book-demo" },
          { text: "ROI calculator", href: "/book-demo" }
        ]
      }
    },
    {
      id: "learning",
      title: "Master project management",
      content: {
        title: "Learn advanced project management practices",
        description: "Master project excellence with comprehensive guides, best practices, and training materials for project managers and delivery teams.",
        image: "/products/projects/04.png",
        links: [
          { text: "Project setup guide", href: "/book-demo" },
          { text: "Agile project methodology", href: "/book-demo" },
          { text: "Resource management training", href: "/book-demo" },
          { text: "Team collaboration best practices", href: "/book-demo" }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Try projects module",
      href: "https://erp.augment.cfd/app/projects",
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
        <h1 className="sr-only">Project Management | Enterprise Project Tracking & Team Collaboration</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="Project Management"
          description="Enterprise project management with resource allocation, project planning, time tracking, milestone management, and team collaboration tools for successful project delivery. Optimize team productivity and ensure on-time project completion."
          ctaButtons={ctaButtons}
          mediaType="image"
          mediaUrl="/products/projects/01.png"
          mediaAlt="Project Management dashboard with planning and collaboration features"
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="Project Management" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose our Project Management solution?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Project management success stories"
          description="Learn why project managers and delivery teams choose our solution for successful project execution and team collaboration."
          viewMoreText="View more success stories"
          viewMoreHref="/book-demo"
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Project Management Excellence Guide"
          description="We've compiled project management best practices, delivery methodologies, and proven strategies for successful project execution."
          image="/products/projects/03.png"
          buttonText="Get the project guide"
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
