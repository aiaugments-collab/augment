import { ProductHero } from "@/components/product/ProductHero";
import { ProductPromo } from "@/components/product/ProductPromo";
import { ProductExplorer } from "@/components/product/ProductExplorer";
import { ProductWhyChoose } from "@/components/product/ProductWhyChoose";
import { ProductCustomerLogos } from "@/components/product/ProductCustomerLogos";
import { ProductResources } from "@/components/product/ProductResources";
import { ProductCTABanner } from "@/components/product/ProductCTABanner";
import { ProductGetStarted } from "@/components/product/ProductGetStarted";
import { Breadcrumb } from "@/components/ui/Breadcrumb";


export default function CustomerSupportPage() {
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
      id: "webinar-support",
      image: "/products/customer-support/02.png",
      title: "Webinar: Delivering Exceptional Customer Support at Scale",
      description: "Discover how our customer support platform can transform your service delivery and improve customer satisfaction scores.",
      ctaText: "Register today",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "forrester-support",
      image: "/products/customer-support/03.png",
      title: "Augment named a Leader in The Forrester Wave™: Customer Support Platforms, Q1 2025",
      description: "Find out why Augment was recognized for excellence in customer support automation and service delivery.",
      ctaText: "Access the Forrester report",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "support-growth-guide",
      image: "/products/customer-support/04.png",
      title: "Scale customer support with intelligent automation",
      description: "Discover how to improve response times and customer satisfaction by implementing AI-powered support workflows.",
      ctaText: "Read the solution brochure (PDF)",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "cx-guide",
      image: "/products/customer-support/05.png",
      title: "CX leader's guide to support excellence",
      description: "Learn the top 5 ways to deliver outstanding customer experiences and build lasting customer relationships.",
      ctaText: "Access the guide",
      ctaLink: "/book-demo",
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "ticketing-system",
      title: "Ticketing System",
      content: {
        title: "Advanced ticketing and case management",
        description: "Streamline customer support with an intelligent ticketing system that automatically routes, prioritizes, and tracks customer issues from creation to resolution.",
        buttons: [
          { text: "Book a Demo", href: "/book-demo", variant: "primary" as const },
          { text: "See ticketing demo", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "Automated ticket routing",
            "Priority-based escalation",
            "SLA management and tracking",
            "Multi-channel ticket creation",
            "Custom ticket fields",
            "Bulk ticket operations",
            "Ticket collaboration tools",
            "Resolution tracking"
          ]
        },
        image: "/products/customer-support/02.png",
        imageAlt: "Ticketing system interface"
      }
    },
    {
      id: "live-chat",
      title: "Live Chat",
      content: {
        title: "Real-time customer chat support",
        description: "Provide instant support with live chat functionality that includes chatbots, agent handoffs, and real-time customer assistance across your website and mobile apps.",
        buttons: [
          { text: "Book a Demo", href: "/book-demo", variant: "primary" as const },
          { text: "See chat features", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "Real-time messaging",
            "AI-powered chatbots",
            "Agent availability status",
            "Chat routing and queuing",
            "File and screen sharing",
            "Chat transcripts and history",
            "Proactive chat triggers",
            "Mobile chat support"
          ]
        },
        image: "/products/customer-support/03.png",
        imageAlt: "Live chat interface"
      }
    },
    {
      id: "knowledge-base",
      title: "Knowledge Base",
      content: {
        title: "Self-service knowledge management",
        description: "Empower customers with a comprehensive knowledge base that provides instant answers and reduces support ticket volume through intelligent self-service capabilities.",
        buttons: [
          { text: "Book a Demo", href: "/book-demo", variant: "primary" as const },
          { text: "See knowledge base", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "Searchable article database",
            "AI-powered content suggestions",
            "Multi-language support",
            "Article analytics and feedback",
            "Content approval workflows",
            "Video and multimedia support",
            "Category and tag management",
            "Integration with ticketing"
          ]
        },
        image: "/products/customer-support/04.png",
        imageAlt: "Knowledge base interface"
      }
    },
    {
      id: "analytics-insights",
      title: "Analytics & Insights",
      content: {
        title: "Support performance analytics",
        description: "Optimize your support operations with comprehensive analytics that track agent performance, customer satisfaction, and support metrics to drive continuous improvement.",
        buttons: [
          { text: "Book a Demo", href: "/book-demo", variant: "primary" as const },
          { text: "See analytics demo", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "Real-time support dashboards",
            "Agent performance metrics",
            "Customer satisfaction scores",
            "Response time analytics",
            "Ticket volume trends",
            "Resolution rate tracking",
            "Custom report builder",
            "Automated insights"
          ]
        },
        image: "/products/customer-support/05.png",
        imageAlt: "Support analytics dashboard"
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Omnichannel Support",
      description: "Provide consistent support across email, chat, phone, and social media channels from one unified platform.",
      link: {
        text: "See channel integrations",
        href: "/book-demo"
      }
    },
    {
      number: "02",
      title: "AI-Powered Automation",
      description: "Leverage artificial intelligence to automate routine tasks, suggest responses, and route tickets to the right agents.",
      link: {
        text: "Explore AI automation",
        href: "/book-demo"
      }
    },
    {
      number: "03",
      title: "SLA Management",
      description: "Meet service level agreements with automated escalation, priority routing, and real-time SLA tracking and alerts.",
      link: {
        text: "View SLA features",
        href: "/book-demo"
      }
    }
  ];

  const resources = [
    {
      title: "Customer Support Excellence Guide",
      description: "Best practices for delivering world-class customer support",
      type: "Guide",
      href: "/book-demo"
    },
    {
      title: "Support Automation Strategies",
      description: "How to implement automation without losing the human touch",
      type: "Whitepaper",
      href: "/book-demo"
    },
    {
      title: "Support Team Success Stories",
      description: "See how teams improved CSAT scores by 40% with our platform",
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
          title="Customer Support Software"
          description="Advanced customer support platform with ticketing system, live chat, knowledge base, automation, and comprehensive analytics for superior customer service. Complete customer support and helpdesk solution for modern support teams."
          ctaButtons={ctaButtons}
          mediaType="image"
          mediaUrl="/products/customer-support/01.png"
          mediaAlt="Customer Support Platform Dashboard"
        />

        <ProductPromo cards={promoCards} />

        <ProductExplorer
          title="Explore support capabilities"
          tabs={explorerTabs}
        />

        <ProductWhyChoose
          title="Why choose our support platform?"
          items={whyChooseItems}
        />





        <ProductCTABanner
          title="Ready to transform your customer support?"
          description="Join thousands of support teams using our platform to deliver exceptional customer experiences and drive satisfaction."
          image="/products/customer-support/03.png"
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
