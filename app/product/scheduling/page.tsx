import { ProductHero } from "@/components/product/ProductHero";
import { ProductPromo } from "@/components/product/ProductPromo";
import { ProductExplorer } from "@/components/product/ProductExplorer";
import { ProductWhyChoose } from "@/components/product/ProductWhyChoose";
import { ProductCustomerLogos } from "@/components/product/ProductCustomerLogos";
import { ProductResources } from "@/components/product/ProductResources";
import { ProductCTABanner } from "@/components/product/ProductCTABanner";
import { ProductGetStarted } from "@/components/product/ProductGetStarted";
import { Breadcrumb } from "@/components/ui/Breadcrumb";


export default function SchedulingPage() {
  const ctaButtons = [
    {
      text: "Book a Demo",
      href: "/book-demo",
      variant: "primary" as const
    },
    {
      text: "Contact Sales",
      href: "/corporate/contact",
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "webinar-scheduling",
      image: "/products/scheduling/02.png",
      title: "Webinar: Mastering Modern Scheduling and Calendar Management",
      description: "Discover how our scheduling platform can transform your meeting coordination and improve team productivity across organizations.",
      ctaText: "Register today",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "forrester-scheduling",
      image: "/products/scheduling/03.png",
      title: "Augment named a Leader in The Forrester Wave™: Scheduling Solutions, Q1 2025",
      description: "Find out why Augment was recognized for excellence in meeting coordination and calendar management platforms.",
      ctaText: "Access the Forrester report",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "scheduling-productivity-guide",
      image: "/products/scheduling/04.png",
      title: "Boost productivity with intelligent scheduling automation",
      description: "Discover how to eliminate scheduling conflicts and optimize meeting coordination with AI-powered scheduling workflows.",
      ctaText: "Read the solution brochure (PDF)",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "executive-guide",
      image: "/products/scheduling/05.png",
      title: "Executive's guide to efficient time management",
      description: "Learn the top 5 ways to optimize calendar management and improve meeting efficiency with intelligent scheduling tools.",
      ctaText: "Access the guide",
      ctaLink: "/book-demo",
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "calendar-management",
      title: "Calendar Management",
      content: {
        title: "Intelligent calendar coordination and management",
        description: "Streamline calendar management with AI-powered scheduling that automatically finds optimal meeting times, manages availability, and coordinates across multiple calendars and time zones.",
        buttons: [
          { text: "Book a Demo", href: "/book-demo", variant: "primary" as const },
          { text: "See calendar features", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "Multi-calendar synchronization",
            "Smart availability detection",
            "Time zone coordination",
            "Conflict resolution automation",
            "Calendar sharing and permissions",
            "Recurring event management",
            "Buffer time optimization",
            "Calendar analytics and insights"
          ]
        },
        image: "/products/scheduling/02.png",
        imageAlt: "Calendar management interface"
      }
    },
    {
      id: "meeting-coordination",
      title: "Meeting Coordination",
      content: {
        title: "Seamless meeting scheduling and coordination",
        description: "Coordinate meetings effortlessly with intelligent scheduling that handles participant availability, room booking, and meeting preparation to ensure productive gatherings.",
        buttons: [
          { text: "Book a Demo", href: "/book-demo", variant: "primary" as const },
          { text: "See meeting features", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "Group availability finder",
            "Room and resource booking",
            "Video conference integration",
            "Meeting agenda management",
            "Automated meeting reminders",
            "Participant coordination",
            "Meeting preparation tools",
            "Follow-up task creation"
          ]
        },
        image: "/products/scheduling/03.png",
        imageAlt: "Meeting coordination dashboard"
      }
    },
    {
      id: "availability-management",
      title: "Availability Management",
      content: {
        title: "Advanced availability and preference management",
        description: "Manage personal and team availability with sophisticated preference settings, working hours management, and intelligent scheduling that respects individual and organizational constraints.",
        buttons: [
          { text: "Book a Demo", href: "/book-demo", variant: "primary" as const },
          { text: "See availability tools", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "Flexible working hours setup",
            "Personal scheduling preferences",
            "Team availability overview",
            "Booking page customization",
            "Availability sharing controls",
            "Time blocking and focus time",
            "Holiday and PTO management",
            "Capacity planning tools"
          ]
        },
        image: "/products/scheduling/04.png",
        imageAlt: "Availability management interface"
      }
    },
    {
      id: "analytics-optimization",
      title: "Analytics & Optimization",
      content: {
        title: "Scheduling analytics and productivity insights",
        description: "Optimize your scheduling efficiency with comprehensive analytics that provide insights into meeting patterns, time usage, and productivity metrics for continuous improvement.",
        buttons: [
          { text: "Book a Demo", href: "/book-demo", variant: "primary" as const },
          { text: "See analytics demo", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "Meeting frequency analysis",
            "Time utilization reports",
            "Scheduling efficiency metrics",
            "Productivity trend tracking",
            "Team collaboration insights",
            "Calendar optimization suggestions",
            "Custom analytics dashboards",
            "Performance benchmarking"
          ]
        },
        image: "/products/scheduling/05.png",
        imageAlt: "Scheduling analytics dashboard"
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "AI-Powered Scheduling",
      description: "Leverage artificial intelligence to automatically find optimal meeting times and resolve scheduling conflicts across teams and time zones.",
      link: {
        text: "See AI scheduling",
        href: "/book-demo"
      }
    },
    {
      number: "02",
      title: "Universal Integration",
      description: "Connect with Google Calendar, Outlook, Apple Calendar, and 50+ other calendar and productivity tools for seamless workflow integration.",
      link: {
        text: "View integrations",
        href: "/book-demo"
      }
    },
    {
      number: "03",
      title: "Smart Availability",
      description: "Intelligent availability detection that considers working hours, preferences, travel time, and meeting preparation needs.",
      link: {
        text: "Explore smart features",
        href: "/book-demo"
      }
    }
  ];

  const resources = [
    {
      title: "Scheduling Best Practices Guide",
      description: "Complete guide to optimizing meeting coordination and calendar management",
      type: "Guide",
      href: "/book-demo"
    },
    {
      title: "Productivity Through Better Scheduling",
      description: "Research-backed strategies for improving team productivity",
      type: "Whitepaper",
      href: "/book-demo"
    },
    {
      title: "Team Efficiency Success Stories",
      description: "See how organizations improved productivity by 35% with better scheduling",
      type: "Case Study",
      href: "/book-demo"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="All-purpose Scheduling App"
          description="Advanced scheduling platform like Cal.com with calendar integration, availability management, automated booking, team coordination, and meeting analytics. Complete scheduling and calendar management solution for teams and individuals."
          ctaButtons={ctaButtons}
          mediaType="image"
          mediaUrl="/products/scheduling/01.png"
          mediaAlt="Scheduling App Interface"
        />

        <ProductPromo cards={promoCards} />

        <ProductExplorer
          title="Explore scheduling capabilities"
          tabs={explorerTabs}
        />

        <ProductWhyChoose
          title="Why choose our scheduling platform?"
          items={whyChooseItems}
        />





        <ProductCTABanner
          title="Ready to optimize your scheduling?"
          description="Join thousands of professionals using our platform to coordinate meetings, manage calendars, and boost productivity."
          image="/products/scheduling/03.png"
          buttonText="Book a Demo"
          buttonHref="/book-demo"
        />

        <ProductGetStarted 
          title="Get Started"
          actions={[
            { title: "Book a Demo", href: "/book-demo", icon: "demo" },
            { title: "Contact Sales", href: "/corporate/contact", icon: "contact" }
          ]}
        />
      </main>
    </div>
  );
}
