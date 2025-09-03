import { ProductHero } from "@/components/product/ProductHero";
import { ProductPromo } from "@/components/product/ProductPromo";
import { ProductExplorer } from "@/components/product/ProductExplorer";
import { ProductWhyChoose } from "@/components/product/ProductWhyChoose";
import { ProductCustomerLogos } from "@/components/product/ProductCustomerLogos";
import { ProductResources } from "@/components/product/ProductResources";
import { ProductCTABanner } from "@/components/product/ProductCTABanner";
import { ProductGetStarted } from "@/components/product/ProductGetStarted";
import { Breadcrumb } from "@/components/ui/Breadcrumb";


export default function BookingPage() {
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
      id: "webinar-booking",
      image: "/products/booking/02.png",
      title: "Webinar: Streamlining Appointment Management",
      description: "Discover how our booking platform can transform your appointment scheduling and improve customer experience.",
      ctaText: "Register today",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "forrester-booking",
      image: "/products/booking/03.png",
      title: "Augment named a Leader in The Forrester Wave™: Booking Solutions, Q1 2025",
      description: "Find out why Augment was recognized for excellence in appointment scheduling and booking management.",
      ctaText: "Access the Forrester report",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "booking-growth-guide",
      image: "/products/booking/04.png",
      title: "Accelerate business growth with automated booking",
      description: "Discover how to scale your service business by implementing intelligent booking workflows and customer management.",
      ctaText: "Read the solution brochure (PDF)",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "service-guide",
      image: "/products/booking/05.png",
      title: "Service provider's guide to efficient scheduling",
      description: "Learn the top 5 ways to optimize appointment scheduling and reduce no-shows with automated booking systems.",
      ctaText: "Access the guide",
      ctaLink: "/book-demo",
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "appointment-scheduling",
      title: "Appointment Scheduling",
      content: {
        title: "Smart appointment scheduling system",
        description: "Transform your appointment booking with intelligent scheduling that handles availability management, automated confirmations, and customer preferences. Our platform reduces no-shows and maximizes your booking efficiency.",
        buttons: [
          { text: "Book a Demo", href: "/book-demo", variant: "primary" as const },
          { text: "See scheduling demo", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "Real-time availability management",
            "Automated booking confirmations",
            "Calendar integration (Google, Outlook)",
            "Customer self-service portal",
            "Recurring appointment setup",
            "Buffer time management",
            "Multi-location scheduling",
            "Mobile-responsive booking widget"
          ]
        },
        image: "/products/booking/02.png",
        imageAlt: "Appointment scheduling interface"
      }
    },
    {
      id: "customer-management",
      title: "Customer Management",
      content: {
        title: "Comprehensive customer profiles",
        description: "Manage customer relationships with detailed profiles that track appointment history, preferences, and communication. Build stronger relationships with personalized service and proactive customer care.",
        buttons: [
          { text: "Book a Demo", href: "/book-demo", variant: "primary" as const },
          { text: "See customer features", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "Detailed customer profiles",
            "Appointment history tracking",
            "Customer preferences management",
            "Automated reminder system",
            "Customer feedback collection",
            "Loyalty program integration",
            "Communication history log",
            "Custom field management"
          ]
        },
        image: "/products/booking/03.png",
        imageAlt: "Customer management dashboard"
      }
    },
    {
      id: "payment-processing",
      title: "Payment Processing",
      content: {
        title: "Integrated payment solutions",
        description: "Streamline your payment process with integrated payment processing that handles deposits, full payments, and recurring billing. Reduce payment friction and improve cash flow with automated payment collection.",
        buttons: [
          { text: "Book a Demo", href: "/book-demo", variant: "primary" as const },
          { text: "See payment features", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "Secure payment processing",
            "Deposit and full payment options",
            "Recurring payment automation",
            "Multiple payment methods",
            "Refund management",
            "Payment reporting and analytics",
            "PCI compliance",
            "Invoice generation"
          ]
        },
        image: "/products/booking/04.png",
        imageAlt: "Payment processing interface"
      }
    },
    {
      id: "analytics-insights",
      title: "Analytics & Insights",
      content: {
        title: "Business performance analytics",
        description: "Make data-driven decisions with comprehensive analytics that provide insights into booking patterns, customer behavior, and business performance. Optimize your operations with real-time reporting and forecasting.",
        buttons: [
          { text: "Book a Demo", href: "/book-demo", variant: "primary" as const },
          { text: "See analytics demo", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "Real-time booking analytics",
            "Revenue tracking and forecasting",
            "Customer behavior insights",
            "No-show rate analysis",
            "Peak time identification",
            "Staff utilization reports",
            "Custom dashboard creation",
            "Automated report generation"
          ]
        },
        image: "/products/booking/05.png",
        imageAlt: "Analytics dashboard"
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "24/7 Online Booking",
      description: "Allow customers to book appointments anytime with our always-available online booking system that works across all devices.",
      link: {
        text: "See booking features",
        href: "/book-demo"
      }
    },
    {
      number: "02",
      title: "Automated Reminders",
      description: "Reduce no-shows with automated SMS and email reminders that keep customers informed about their upcoming appointments.",
      link: {
        text: "View reminder system",
        href: "/book-demo"
      }
    },
    {
      number: "03",
      title: "Calendar Integration",
      description: "Seamlessly sync with Google Calendar, Outlook, and other calendar systems to maintain unified scheduling across platforms.",
      link: {
        text: "Explore integrations",
        href: "/book-demo"
      }
    }
  ];

  const resources = [
    {
      title: "Booking System Setup Guide",
      description: "Complete guide to setting up your booking system for success",
      type: "Guide",
      href: "/book-demo"
    },
    {
      title: "Reducing No-Shows Best Practices",
      description: "Proven strategies to minimize appointment no-shows",
      type: "Whitepaper",
      href: "/book-demo"
    },
    {
      title: "Service Business Success Stories",
      description: "See how businesses improved efficiency with our booking platform",
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
          title="Booking App"
          description="Professional appointment and booking management system with calendar integration, automated reminders, payment processing, and customer management. Complete booking and appointment management solution for service providers."
          ctaButtons={ctaButtons}
          mediaType="image"
          mediaUrl="/products/booking/01.png"
          mediaAlt="Booking App Interface"
        />

        <ProductPromo cards={promoCards} />

        <ProductExplorer
          title="Explore booking capabilities"
          tabs={explorerTabs}
        />

        <ProductWhyChoose
          title="Why choose our booking platform?"
          items={whyChooseItems}
        />





        <ProductCTABanner
          title="Ready to streamline your booking process?"
          description="Join thousands of service providers using our platform to manage appointments and grow their business."
          image="/products/booking/03.png"
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
