import { ProductHero } from "@/components/product/ProductHero";
import { ProductPromo } from "@/components/product/ProductPromo";
import { ProductExplorer } from "@/components/product/ProductExplorer";
import { ProductWhyChoose } from "@/components/product/ProductWhyChoose";
import { ProductCustomerLogos } from "@/components/product/ProductCustomerLogos";
import { ProductResources } from "@/components/product/ProductResources";
import { ProductCTABanner } from "@/components/product/ProductCTABanner";
import { ProductGetStarted } from "@/components/product/ProductGetStarted";
import { Breadcrumb } from "@/components/ui/Breadcrumb";


export default function CRMPage() {
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
      id: "webinar-crm",
      image: "/products/crm/02.png",
      title: "Webinar: Building Customer-Centric Experiences",
      description: "Discover how our CRM platform can transform your customer relationships and drive sales growth across every touchpoint.",
      ctaText: "Register today",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "forrester-crm",
      image: "/products/crm/03.png",
      title: "Augment named a Leader in The Forrester Wave™: CRM Solutions, Q1 2025",
      description: "Find out why Augment was recognized for excellence in customer relationship management and sales automation.",
      ctaText: "Access the Forrester report",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "crm-growth-guide",
      image: "/products/crm/04.png",
      title: "Accelerate sustainable sales growth with CRM automation",
      description: "Discover how to scale sales operations by implementing intelligent CRM workflows for lead management and customer retention.",
      ctaText: "Read the solution brochure (PDF)",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "sales-guide",
      image: "/products/crm/05.png",
      title: "Sales leader's guide to predictable revenue growth",
      description: "Learn the top 5 ways to cultivate predictable sales pipeline and revenue growth using CRM-powered insights.",
      ctaText: "Access the guide",
      ctaLink: "/book-demo",
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "lead-management",
      title: "Lead Management",
      content: {
        title: "Intelligent lead capture and nurturing",
        description: "Transform your lead management with intelligent automation that captures, scores, and nurtures leads through personalized workflows. Our CRM platform helps you convert more prospects into customers with data-driven insights and automated follow-ups.",
        buttons: [
          { text: "Book a Demo", href: "/book-demo", variant: "primary" as const },
          { text: "See features tour", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "Automated lead capture from multiple channels",
            "Intelligent lead scoring and qualification",
            "Personalized nurturing campaigns",
            "Real-time lead tracking and analytics",
            "Integration with marketing automation",
            "Custom lead routing workflows",
            "Lead conversion optimization",
            "Advanced reporting and forecasting"
          ]
        },
        image: "/products/crm/02.png",
        imageAlt: "Lead management dashboard"
      }
    },
    {
      id: "sales-pipeline",
      title: "Sales Pipeline",
      content: {
        title: "Visual sales pipeline management",
        description: "Streamline your sales process with visual pipeline management that tracks deals from prospect to close. Get real-time visibility into your sales funnel, identify bottlenecks, and optimize conversion rates with intelligent insights.",
        buttons: [
          { text: "Book a Demo", href: "/book-demo", variant: "primary" as const },
          { text: "See pipeline demo", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "Visual drag-and-drop pipeline",
            "Customizable sales stages",
            "Deal probability tracking",
            "Automated stage progression",
            "Sales forecasting and analytics",
            "Team performance dashboards",
            "Activity timeline tracking",
            "Revenue reporting and insights"
          ]
        },
        image: "/products/crm/03.png",
        imageAlt: "Sales pipeline visualization"
      }
    },
    {
      id: "customer-management",
      title: "Customer Management",
      content: {
        title: "360-degree customer view",
        description: "Manage customer relationships with a complete 360-degree view of every interaction, purchase history, and communication. Build stronger relationships with personalized experiences and proactive customer success management.",
        buttons: [
          { text: "Book a Demo", href: "/book-demo", variant: "primary" as const },
          { text: "See customer profiles", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "Unified customer profiles",
            "Interaction history tracking",
            "Purchase and payment history",
            "Customer segmentation tools",
            "Automated customer communications",
            "Support ticket integration",
            "Customer satisfaction tracking",
            "Loyalty program management"
          ]
        },
        image: "/products/crm/04.png",
        imageAlt: "Customer management interface"
      }
    },
    {
      id: "analytics-reporting",
      title: "Analytics & Reporting",
      content: {
        title: "Data-driven sales insights",
        description: "Make informed decisions with comprehensive analytics and reporting that provide deep insights into sales performance, customer behavior, and revenue trends. Track KPIs and optimize your sales strategy with real-time data.",
        buttons: [
          { text: "Book a Demo", href: "/book-demo", variant: "primary" as const },
          { text: "See analytics demo", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "Real-time sales dashboards",
            "Custom report builder",
            "Revenue forecasting",
            "Performance tracking",
            "Customer behavior analytics",
            "Sales team productivity metrics",
            "ROI and conversion analysis",
            "Automated report scheduling"
          ]
        },
        image: "/products/crm/05.png",
        imageAlt: "Analytics dashboard"
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Intelligent Automation",
      description: "Automate repetitive tasks and focus on building relationships with AI-powered workflows that handle lead routing, follow-ups, and data entry.",
      link: {
        text: "Explore CRM automation features",
        href: "/book-demo"
      }
    },
    {
      number: "02", 
      title: "360° Customer View",
      description: "Get complete visibility into every customer interaction, purchase history, and communication across all channels in one unified platform.",
      link: {
        text: "See customer management demo",
        href: "/book-demo"
      }
    },
    {
      number: "03",
      title: "Advanced Analytics",
      description: "Make data-driven decisions with comprehensive reporting, sales forecasting, and performance analytics that drive revenue growth.",
      link: {
        text: "View analytics capabilities",
        href: "/book-demo"
      }
    }
  ];

  const resources = [
    {
      title: "CRM Implementation Guide",
      description: "Step-by-step guide to implementing CRM for maximum ROI",
      type: "Guide",
      href: "/book-demo"
    },
    {
      title: "Sales Automation Best Practices",
      description: "Learn how to automate your sales process effectively",
      type: "Whitepaper",
      href: "/book-demo"
    },
    {
      title: "Customer Success Stories",
      description: "See how companies transformed their sales with our CRM",
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
          title="CRM Software"
          description="Comprehensive customer relationship management platform to manage leads, contacts, sales pipeline, and customer interactions with advanced analytics and automation. Complete CRM solution for managing customer relationships with intelligent automation and real-time insights."
          ctaButtons={ctaButtons}
          mediaType="image"
          mediaUrl="/products/crm/01.png"
          mediaAlt="CRM Software Dashboard"
        />

        <ProductPromo cards={promoCards} />

        <ProductExplorer
          title="Explore CRM capabilities"
          tabs={explorerTabs}
        />

        <ProductWhyChoose
          title="Why choose our CRM?"
          items={whyChooseItems}
        />





        <ProductCTABanner
          title="Ready to transform your customer relationships?"
          description="Join thousands of businesses using our CRM to drive sales growth and improve customer satisfaction."
          image="/products/crm/03.png"
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
