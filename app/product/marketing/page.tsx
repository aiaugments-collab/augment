import { ProductHero } from "@/components/product/ProductHero";
import { ProductPromo } from "@/components/product/ProductPromo";
import { ProductExplorer } from "@/components/product/ProductExplorer";
import { ProductWhyChoose } from "@/components/product/ProductWhyChoose";
import { ProductCustomerLogos } from "@/components/product/ProductCustomerLogos";
import { ProductResources } from "@/components/product/ProductResources";
import { ProductCTABanner } from "@/components/product/ProductCTABanner";
import { ProductGetStarted } from "@/components/product/ProductGetStarted";
import { Breadcrumb } from "@/components/ui/Breadcrumb";


export default function MarketingPage() {
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
      id: "webinar-marketing",
      image: "/products/marketing/02.png",
      title: "Webinar: Building High-Converting Marketing Campaigns",
      description: "Discover how our marketing automation platform can transform your campaigns and drive customer engagement across all channels.",
      ctaText: "Register today",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "forrester-marketing",
      image: "/products/marketing/03.png",
      title: "Augment named a Leader in The Forrester Wave™: Marketing Automation, Q1 2025",
      description: "Find out why Augment was recognized for excellence in marketing automation and customer journey orchestration.",
      ctaText: "Access the Forrester report",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "marketing-growth-guide",
      image: "/products/marketing/04.png",
      title: "Accelerate revenue growth with marketing automation",
      description: "Discover how to scale marketing operations by implementing intelligent automation for lead generation and nurturing.",
      ctaText: "Read the solution brochure (PDF)",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "cmo-guide",
      image: "/products/marketing/05.png",
      title: "CMO's guide to predictable lead generation",
      description: "Learn the top 5 ways to build predictable marketing funnels and optimize conversion rates with data-driven insights.",
      ctaText: "Access the guide",
      ctaLink: "/book-demo",
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "email-campaigns",
      title: "Email Campaigns",
      content: {
        title: "Intelligent email marketing automation",
        description: "Create and automate personalized email campaigns that engage customers at every stage of their journey. Our platform delivers the right message to the right person at the perfect time.",
        buttons: [
          { text: "Book a Demo", href: "/book-demo", variant: "primary" as const },
          { text: "See email features", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "Drag-and-drop email builder",
            "Personalization and dynamic content",
            "A/B testing and optimization",
            "Automated drip campaigns",
            "Behavioral trigger emails",
            "Advanced segmentation",
            "Deliverability optimization",
            "Real-time analytics and reporting"
          ]
        },
        image: "/products/marketing/02.png",
        imageAlt: "Email campaign builder"
      }
    },
    {
      id: "lead-nurturing",
      title: "Lead Nurturing",
      content: {
        title: "Automated lead nurturing workflows",
        description: "Transform prospects into customers with intelligent lead nurturing that delivers personalized content based on behavior, interests, and engagement patterns.",
        buttons: [
          { text: "Book a Demo", href: "/book-demo", variant: "primary" as const },
          { text: "See nurturing workflows", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "Visual workflow builder",
            "Behavioral scoring and triggers",
            "Multi-channel nurturing paths",
            "Content recommendation engine",
            "Lead qualification automation",
            "Sales handoff optimization",
            "Engagement tracking",
            "Conversion attribution"
          ]
        },
        image: "/products/marketing/03.png",
        imageAlt: "Lead nurturing workflows"
      }
    },
    {
      id: "social-media",
      title: "Social Media",
      content: {
        title: "Social media management and automation",
        description: "Manage your social media presence across all platforms with automated posting, engagement tracking, and social listening capabilities that amplify your brand reach.",
        buttons: [
          { text: "Book a Demo", href: "/book-demo", variant: "primary" as const },
          { text: "See social features", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "Multi-platform publishing",
            "Content calendar management",
            "Automated posting schedules",
            "Social listening and monitoring",
            "Engagement analytics",
            "Hashtag optimization",
            "Influencer collaboration tools",
            "Social ROI tracking"
          ]
        },
        image: "/products/marketing/04.png",
        imageAlt: "Social media management"
      }
    },
    {
      id: "analytics-attribution",
      title: "Analytics & Attribution",
      content: {
        title: "Marketing performance analytics",
        description: "Measure and optimize your marketing performance with comprehensive analytics that track every touchpoint and attribute revenue to the right campaigns and channels.",
        buttons: [
          { text: "Book a Demo", href: "/book-demo", variant: "primary" as const },
          { text: "See analytics demo", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "Multi-touch attribution modeling",
            "Campaign performance tracking",
            "ROI and ROAS reporting",
            "Customer journey mapping",
            "Conversion funnel analysis",
            "Real-time dashboard insights",
            "Custom report builder",
            "Predictive analytics"
          ]
        },
        image: "/products/marketing/05.png",
        imageAlt: "Marketing analytics dashboard"
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "All-in-One Platform",
      description: "Manage email, social media, content, and analytics in one unified platform that eliminates the need for multiple marketing tools.",
      link: {
        text: "Explore platform features",
        href: "/book-demo"
      }
    },
    {
      number: "02",
      title: "AI-Powered Insights",
      description: "Leverage artificial intelligence to optimize campaigns, predict customer behavior, and automate decision-making processes.",
      link: {
        text: "See AI capabilities",
        href: "/book-demo"
      }
    },
    {
      number: "03",
      title: "Advanced Segmentation",
      description: "Create highly targeted campaigns with sophisticated audience segmentation based on behavior, demographics, and engagement.",
      link: {
        text: "View segmentation tools",
        href: "/book-demo"
      }
    }
  ];

  const resources = [
    {
      title: "Marketing Automation Playbook",
      description: "Complete guide to implementing marketing automation for growth",
      type: "Guide",
      href: "/book-demo"
    },
    {
      title: "Email Marketing Best Practices",
      description: "Proven strategies to improve email engagement and conversions",
      type: "Whitepaper",
      href: "/book-demo"
    },
    {
      title: "Marketing ROI Success Stories",
      description: "See how companies achieved 300%+ ROI with our platform",
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
          title="Marketing Software App"
          description="All-in-one marketing automation platform with email campaigns, social media management, lead nurturing, analytics, and customer journey mapping. Complete marketing automation and campaign management for modern marketers."
          ctaButtons={ctaButtons}
          mediaType="image"
          mediaUrl="/products/marketing/01.png"
          mediaAlt="Marketing Software Dashboard"
        />

        <ProductPromo cards={promoCards} />

        <ProductExplorer
          title="Explore marketing capabilities"
          tabs={explorerTabs}
        />

        <ProductWhyChoose
          title="Why choose our marketing platform?"
          items={whyChooseItems}
        />





        <ProductCTABanner
          title="Ready to transform your marketing?"
          description="Join thousands of marketers using our platform to drive engagement, generate leads, and accelerate growth."
          image="/products/marketing/03.png"
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
