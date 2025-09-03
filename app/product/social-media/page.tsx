import { ProductHero } from "@/components/product/ProductHero";
import { ProductPromo } from "@/components/product/ProductPromo";
import { ProductExplorer } from "@/components/product/ProductExplorer";
import { ProductWhyChoose } from "@/components/product/ProductWhyChoose";
import { ProductCustomerLogos } from "@/components/product/ProductCustomerLogos";
import { ProductResources } from "@/components/product/ProductResources";
import { ProductCTABanner } from "@/components/product/ProductCTABanner";
import { ProductGetStarted } from "@/components/product/ProductGetStarted";
import { Breadcrumb } from "@/components/ui/Breadcrumb";


export default function SocialMediaPage() {
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
      id: "webinar-social",
      image: "/products/social-media/02.png",
      title: "Webinar: Mastering Social Media Management at Scale",
      description: "Discover how our social media platform can transform your content strategy and amplify your brand presence across all channels.",
      ctaText: "Register today",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "forrester-social",
      image: "/products/social-media/03.png",
      title: "Augment named a Leader in The Forrester Wave™: Social Media Management, Q1 2025",
      description: "Find out why Augment was recognized for excellence in social media management and content optimization.",
      ctaText: "Access the Forrester report",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "social-growth-guide",
      image: "/products/social-media/04.png",
      title: "Accelerate brand growth with social media automation",
      description: "Discover how to scale social media operations by implementing intelligent content scheduling and engagement automation.",
      ctaText: "Read the solution brochure (PDF)",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "brand-guide",
      image: "/products/social-media/05.png",
      title: "Brand manager's guide to social media ROI",
      description: "Learn the top 5 ways to measure and optimize social media performance for maximum brand impact and engagement.",
      ctaText: "Access the guide",
      ctaLink: "/book-demo",
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "content-management",
      title: "Content Management",
      content: {
        title: "Unified content creation and management",
        description: "Create, organize, and manage all your social media content from one central hub. Our platform streamlines content workflows and ensures consistent brand messaging across all channels.",
        buttons: [
          { text: "Book a Demo", href: "/book-demo", variant: "primary" as const },
          { text: "See content features", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "Visual content calendar",
            "Drag-and-drop content builder",
            "Brand asset library",
            "Content approval workflows",
            "Bulk content upload",
            "Template management",
            "Content versioning",
            "Multi-format optimization"
          ]
        },
        image: "/products/social-media/02.png",
        imageAlt: "Content management interface"
      }
    },
    {
      id: "scheduling-publishing",
      title: "Scheduling & Publishing",
      content: {
        title: "Automated scheduling and publishing",
        description: "Schedule and publish content across all social media platforms with optimal timing recommendations and automated posting that maximizes engagement and reach.",
        buttons: [
          { text: "Book a Demo", href: "/book-demo", variant: "primary" as const },
          { text: "See scheduling demo", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "Multi-platform publishing",
            "Optimal timing suggestions",
            "Bulk scheduling tools",
            "Auto-posting with queues",
            "Time zone optimization",
            "Content recycling",
            "Emergency post management",
            "Publishing analytics"
          ]
        },
        image: "/products/social-media/03.png",
        imageAlt: "Scheduling dashboard"
      }
    },
    {
      id: "engagement-monitoring",
      title: "Engagement & Monitoring",
      content: {
        title: "Real-time engagement and monitoring",
        description: "Monitor brand mentions, engage with your audience, and track conversations across all social platforms with real-time alerts and automated response capabilities.",
        buttons: [
          { text: "Book a Demo", href: "/book-demo", variant: "primary" as const },
          { text: "See monitoring features", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "Real-time social listening",
            "Brand mention tracking",
            "Sentiment analysis",
            "Automated response rules",
            "Engagement management",
            "Crisis detection alerts",
            "Competitor monitoring",
            "Influencer identification"
          ]
        },
        image: "/products/social-media/04.png",
        imageAlt: "Engagement monitoring dashboard"
      }
    },
    {
      id: "analytics-reporting",
      title: "Analytics & Reporting",
      content: {
        title: "Comprehensive social media analytics",
        description: "Measure and optimize your social media performance with detailed analytics that track engagement, reach, conversions, and ROI across all platforms and campaigns.",
        buttons: [
          { text: "Book a Demo", href: "/book-demo", variant: "primary" as const },
          { text: "See analytics demo", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "Cross-platform analytics",
            "Engagement rate tracking",
            "Audience growth metrics",
            "Content performance analysis",
            "ROI and conversion tracking",
            "Competitor benchmarking",
            "Custom report builder",
            "Automated reporting"
          ]
        },
        image: "/products/social-media/05.png",
        imageAlt: "Social media analytics"
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Multi-Platform Management",
      description: "Manage all your social media accounts from one unified dashboard that supports all major social platforms and networks.",
      link: {
        text: "See platform integrations",
        href: "/book-demo"
      }
    },
    {
      number: "02",
      title: "AI-Powered Optimization",
      description: "Leverage artificial intelligence to optimize posting times, content recommendations, and audience targeting for maximum engagement.",
      link: {
        text: "Explore AI features",
        href: "/book-demo"
      }
    },
    {
      number: "03",
      title: "Team Collaboration",
      description: "Enable seamless team collaboration with role-based permissions, approval workflows, and real-time collaboration tools.",
      link: {
        text: "View collaboration tools",
        href: "/book-demo"
      }
    }
  ];

  const resources = [
    {
      title: "Social Media Strategy Guide",
      description: "Complete guide to building an effective social media strategy",
      type: "Guide",
      href: "/book-demo"
    },
    {
      title: "Content Creation Best Practices",
      description: "Proven strategies for creating engaging social media content",
      type: "Whitepaper",
      href: "/book-demo"
    },
    {
      title: "Brand Success Stories",
      description: "See how brands increased engagement by 400% with our platform",
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
          title="All-in-one Social Media Platform"
          description="Comprehensive social media management platform for content creation, scheduling, engagement tracking, analytics, and multi-platform publishing. Complete social media management and analytics platform for brands and agencies."
          ctaButtons={ctaButtons}
          mediaType="image"
          mediaUrl="/products/social-media/01.png"
          mediaAlt="Social Media Platform Dashboard"
        />

        <ProductPromo cards={promoCards} />

        <ProductExplorer
          title="Explore social media capabilities"
          tabs={explorerTabs}
        />

        <ProductWhyChoose
          title="Why choose our social media platform?"
          items={whyChooseItems}
        />





        <ProductCTABanner
          title="Ready to amplify your social media presence?"
          description="Join thousands of brands using our platform to create engaging content, grow their audience, and drive results."
          image="/products/social-media/03.png"
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
