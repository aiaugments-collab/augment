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
      id: "marketing-automation",
      image: "/products/marketing/01.png",
      title: "Advanced Marketing Automation",
      description: "Automate your marketing campaigns with intelligent workflows, lead nurturing, and personalized customer journeys for maximum engagement.",
      ctaText: "Learn automation features",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "email-campaigns",
      image: "/products/marketing/02.png",
      title: "Email Campaign Management",
      description: "Create, send, and track email campaigns with advanced segmentation, A/B testing, and comprehensive performance analytics.",
      ctaText: "Explore email tools",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "social-media",
      image: "/products/marketing/03.png",
      title: "Social Media Management",
      description: "Manage social media campaigns across platforms with content scheduling, engagement tracking, and social analytics.",
      ctaText: "View social features",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "lead-management",
      image: "/products/marketing/04.png",
      title: "Lead Generation & Nurturing",
      description: "Capture, qualify, and nurture leads with automated scoring, progressive profiling, and intelligent lead routing.",
      ctaText: "See lead tools",
      ctaLink: "/book-demo",
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "marketing-automation",
      title: "Marketing Automation",
      content: {
        title: "Intelligent marketing workflow automation",
        description: "Automate your marketing processes with intelligent workflows, trigger-based campaigns, and personalized customer journeys that drive engagement and conversion.",
        buttons: [
          { text: "Try Marketing Automation", href: "/book-demo", variant: "primary" as const },
          { text: "Workflow templates", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Marketing Automation Features",
          items: [
            "Intelligent workflow builder",
            "Trigger-based campaigns",
            "Lead scoring automation",
            "Behavioral targeting",
            "Customer journey mapping",
            "Dynamic content personalization",
            "Multi-channel orchestration",
            "Campaign performance tracking"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Marketing Automation Hub",
          description: "Intelligent marketing workflow and campaign management dashboard"
        }
      }
    },
    {
      id: "email-marketing",
      title: "Email Marketing",
      content: {
        title: "Advanced email campaign management",
        description: "Create and deliver personalized email campaigns with advanced segmentation, A/B testing, and comprehensive analytics that drive higher engagement and ROI.",
        buttons: [
          { text: "Explore Email Tools", href: "/book-demo", variant: "primary" as const },
          { text: "Email templates", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Email Marketing Features",
          items: [
            "Drag-and-drop email builder",
            "Advanced audience segmentation",
            "A/B testing capabilities",
            "Personalization engine",
            "Automated drip campaigns",
            "Deliverability optimization",
            "Email performance analytics",
            "Mobile-responsive templates"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Email Campaign Builder",
          description: "Intuitive email design and campaign management interface"
        }
      }
    },
    {
      id: "lead-management",
      title: "Lead Management",
      content: {
        title: "Comprehensive lead generation and nurturing",
        description: "Capture, qualify, and nurture leads with intelligent scoring, progressive profiling, and automated lead routing that accelerates sales pipeline conversion.",
        buttons: [
          { text: "Try Lead Management", href: "/book-demo", variant: "primary" as const },
          { text: "Lead scoring guide", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Lead Management Features",
          items: [
            "Lead capture forms",
            "Progressive profiling",
            "Intelligent lead scoring",
            "Automated lead routing",
            "Lead nurturing campaigns",
            "Conversion tracking",
            "Lead quality analytics",
            "Sales handoff automation"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Lead Management System",
          description: "Comprehensive lead tracking and nurturing pipeline"
        }
      }
    },
    {
      id: "marketing-analytics",
      title: "Marketing Analytics",
      content: {
        title: "Advanced marketing performance insights",
        description: "Measure and optimize marketing performance with comprehensive analytics, attribution modeling, and ROI tracking that drive data-driven marketing decisions.",
        buttons: [
          { text: "View Marketing Analytics", href: "/book-demo", variant: "primary" as const },
          { text: "Custom reports", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Marketing Analytics Features",
          items: [
            "Campaign performance tracking",
            "Multi-touch attribution",
            "Customer journey analytics",
            "ROI measurement",
            "Conversion funnel analysis",
            "Channel performance insights",
            "Real-time marketing dashboards",
            "Predictive marketing analytics"
          ]
        },
        mockup: {
          type: "analytics" as const,
          title: "Marketing Analytics Center",
          description: "Comprehensive marketing performance metrics and insights"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Intelligent marketing automation and workflows",
      description: "Automate your marketing processes with intelligent workflows, trigger-based campaigns, and personalized customer journeys that drive engagement and maximize conversion rates.",
      link: {
        text: "Learn about marketing automation",
        href: "/book-demo"
      }
    },
    {
      number: "02", 
      title: "Advanced email marketing and campaign management",
      description: "Create and deliver personalized email campaigns with advanced segmentation, A/B testing, and comprehensive analytics that drive higher engagement and ROI."
    },
    {
      number: "03",
      title: "Comprehensive lead generation and nurturing", 
      description: "Capture, qualify, and nurture leads with intelligent scoring, progressive profiling, and automated lead routing that accelerates sales pipeline conversion."
    },
    {
      number: "04",
      title: "Advanced marketing analytics and performance insights",
      description: "Measure and optimize marketing performance with comprehensive analytics, attribution modeling, and ROI tracking that drive data-driven marketing decisions."
    }
  ];

  const customerReference = {
    title: "Marketing Automation Success",
    company: "SaaS company increases lead conversion by 300%",
    description: "A growing SaaS company transformed their marketing operations using our comprehensive automation platform, tripling lead conversion rates while reducing manual effort.",
    image: "/products/marketing/01.png",
    linkText: "Read the marketing transformation story",
    linkHref: "/book-demo"
  };

  const customerLogos = [
    {
      name: "HubSpot",
      image: "https://logo.clearbit.com/hubspot.com",
      href: "/book-demo",
      alt: "HubSpot logo"
    },
    {
      name: "Salesforce",
      image: "https://logo.clearbit.com/salesforce.com",
      href: "/book-demo",
      alt: "Salesforce logo"
    },
    {
      name: "Marketo",
      image: "https://logo.clearbit.com/marketo.com",
      href: "/book-demo", 
      alt: "Marketo logo"
    },
    {
      name: "Mailchimp",
      image: "https://logo.clearbit.com/mailchimp.com",
      href: "/book-demo",
      alt: "Mailchimp logo"
    },
    {
      name: "Pardot", 
      image: "https://logo.clearbit.com/pardot.com",
      href: "/book-demo",
      alt: "Pardot logo"
    },
    {
      name: "ActiveCampaign",
      image: "https://logo.clearbit.com/activecampaign.com",
      href: "/book-demo",
      alt: "ActiveCampaign logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in Marketing",
      content: {
        title: "Latest marketing automation features",
        description: "Stay updated with the newest capabilities in marketing automation, email campaigns, and analytics designed for modern marketing operations.",
        image: "/products/marketing/02.png",
        links: [
          { text: "New automation features", href: "/book-demo" },
          { text: "Email campaign updates", href: "/book-demo" },
          { text: "Analytics enhancements", href: "/book-demo" },
          { text: "Integration improvements", href: "/book-demo" }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare marketing solutions",
      content: {
        title: "Why choose our marketing automation platform",
        description: "Compare our comprehensive marketing capabilities with other solutions and see why marketing teams choose us for automation and campaign management.",
        image: "/products/marketing/03.png",
        links: [
          { text: "Marketing platform comparison", href: "/book-demo" },
          { text: "Feature comparison matrix", href: "/book-demo" },
          { text: "Implementation roadmap", href: "/book-demo" },
          { text: "ROI calculator", href: "/book-demo" }
        ]
      }
    },
    {
      id: "learning",
      title: "Master marketing automation",
      content: {
        title: "Learn advanced marketing strategies",
        description: "Master marketing excellence with comprehensive guides, best practices, and training materials for marketing professionals and growth teams.",
        image: "/products/marketing/04.png",
        links: [
          { text: "Marketing automation guide", href: "/book-demo" },
          { text: "Email marketing best practices", href: "/book-demo" },
          { text: "Lead generation strategies", href: "/book-demo" },
          { text: "Analytics and optimization", href: "/book-demo" }
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
        <h1 className="sr-only">Marketing | Complete Marketing Automation & Campaign Management</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="Marketing"
          description="All-in-one marketing automation platform with email campaigns, social media management, lead nurturing, analytics, and customer journey mapping for exceptional customer experiences. Drive growth with intelligent marketing workflows and data-driven insights."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Marketing Automation Dashboard",
            description: "Comprehensive marketing campaign and performance management"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="Marketing Automation" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose our Marketing platform?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Marketing automation success stories"
          description="Learn why marketing teams and growth professionals choose our platform for campaign automation and performance optimization."
          viewMoreText="View more success stories"
          viewMoreHref="/book-demo"
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Marketing Automation Excellence Guide"
          description="We've compiled marketing automation strategies, campaign optimization techniques, and growth methodologies for modern marketing teams."
          image="/products/marketing/03.png"
          buttonText="Get the marketing guide"
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