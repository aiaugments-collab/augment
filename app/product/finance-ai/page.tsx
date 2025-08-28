import { ProductHero } from "@/components/product/ProductHero";
import { ProductPromo } from "@/components/product/ProductPromo";
import { ProductExplorer } from "@/components/product/ProductExplorer";
import { ProductWhyChoose } from "@/components/product/ProductWhyChoose";
import { ProductCustomerLogos } from "@/components/product/ProductCustomerLogos";
import { ProductResources } from "@/components/product/ProductResources";
import { ProductCTABanner } from "@/components/product/ProductCTABanner";
import { ProductGetStarted } from "@/components/product/ProductGetStarted";
import { Breadcrumb } from "@/components/ui/Breadcrumb";


export default function FinanceAIPage() {
  const ctaButtons = [
    {
      text: "Start Free Trial",
      href: "https://financeai.augment.cfd/",
      variant: "primary" as const
    },
    {
      text: "Schedule Demo",
      href: "https://financeai.augment.cfd/",
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "receipt-scanning-demo",
      image: "/products/finance-ai/02.png",
      title: "Webinar: Mastering AI-Powered Receipt Scanning",
      description: "Learn how to automate your expense tracking with our advanced AI receipt scanner that achieves 99.2% accuracy in just 3 seconds.",
      ctaText: "Watch the demo",
      ctaLink: "https://financeai.augment.cfd/",
      target: "_blank" as const
    },
    {
      id: "personal-finance-guide",
      image: "/products/finance-ai/03.png",
      title: "The Complete Guide to AI-Powered Personal Finance",
      description: "Discover how AI can transform your financial management with intelligent insights, automated budgeting, and smart investment tracking.",
      ctaText: "Download guide",
      ctaLink: "https://financeai.augment.cfd/",
      target: "_blank" as const
    },
    {
      id: "budget-optimization",
      image: "/products/finance-ai/04.png",
      title: "Smart Budget Optimization with AI Insights",
      description: "Learn how our AI analyzes your spending patterns to provide personalized recommendations for better budget management and savings.",
      ctaText: "Read case study (PDF)",
      ctaLink: "https://financeai.augment.cfd/",
      target: "_blank" as const
    },
    {
      id: "financial-success-story",
      image: "/products/finance-ai/05.png",
      title: "Success Story: 40% Savings Increase with FinanceAI",
      description: "See how users transformed their financial habits using AI-powered insights, achieving significant savings and better investment decisions.",
      ctaText: "Read success stories",
      ctaLink: "https://financeai.augment.cfd/",
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "receipt-scanning",
      title: "AI Receipt Scanning",
      content: {
        title: "99.2% accuracy in 3 seconds with AI-powered scanning",
        description: "Transform your expense tracking with our advanced AI receipt scanner. Simply take a photo and our intelligent system instantly extracts transaction data, categorizes expenses, and updates your budget in real-time.",
        buttons: [
          { text: "Try receipt scanner", href: "https://financeai.augment.cfd/", variant: "primary" as const },
          { text: "See scanning demo", href: "https://financeai.augment.cfd/", variant: "secondary" as const }
        ],
        features: {
          title: "Scanning Features",
          items: [
            "99.2% accuracy rate",
            "3-second processing time",
            "Automatic categorization",
            "Multi-language support",
            "Receipt data extraction",
            "Tax deduction tracking",
            "Expense report generation",
            "Cloud backup & sync"
          ]
        },
        image: "/products/finance-ai/02.png",
        imageAlt: "AI receipt scanning interface showing instant data extraction"
      }
    },
    {
      id: "financial-insights",
      title: "Smart Insights",
      content: {
        title: "AI-powered financial intelligence that adapts to you",
        description: "Get personalized financial insights based on your spending patterns, income trends, and financial goals. Our AI analyzes your data to provide actionable recommendations for better money management.",
        buttons: [
          { text: "Explore AI insights", href: "https://financeai.augment.cfd/", variant: "primary" as const },
          { text: "View insights demo", href: "https://financeai.augment.cfd/", variant: "secondary" as const }
        ],
        features: {
          title: "AI Insights",
          items: [
            "Spending pattern analysis",
            "Budget optimization tips",
            "Investment recommendations",
            "Savings opportunities",
            "Bill tracking & alerts",
            "Financial goal tracking",
            "Custom spending categories",
            "Predictive cash flow"
          ]
        },
        image: "/products/finance-ai/03.png",
        imageAlt: "Financial insights dashboard with AI-powered recommendations"
      }
    },
    {
      id: "budget-management",
      title: "Smart Budgeting",
      content: {
        title: "Intelligent budget management with real-time alerts",
        description: "Create and manage budgets that adapt to your lifestyle with AI-powered recommendations. Get real-time alerts, spending insights, and optimization suggestions to stay on track with your financial goals.",
        buttons: [
          { text: "Create smart budget", href: "https://financeai.augment.cfd/", variant: "primary" as const },
          { text: "Budget planning guide", href: "https://financeai.augment.cfd/", variant: "secondary" as const }
        ],
        features: {
          title: "Budget Features",
          items: [
            "AI-powered budget creation",
            "Real-time spending alerts",
            "Category-based tracking",
            "Goal-oriented budgeting",
            "Automated adjustments",
            "Variance analysis",
            "Monthly/weekly reports",
            "Emergency fund tracking"
          ]
        },
        image: "/products/finance-ai/04.png",
        imageAlt: "Smart budgeting interface with AI recommendations"
      }
    },
    {
      id: "analytics-reports",
      title: "Financial Analytics",
      content: {
        title: "Comprehensive financial analytics and reporting",
        description: "Track your financial health with detailed analytics, beautiful visualizations, and comprehensive reports. Monitor trends, identify opportunities, and make data-driven financial decisions.",
        buttons: [
          { text: "View analytics dashboard", href: "https://financeai.augment.cfd/", variant: "primary" as const },
          { text: "Report templates", href: "https://financeai.augment.cfd/", variant: "secondary" as const }
        ],
        features: {
          title: "Analytics Features",
          items: [
            "Real-time financial dashboards",
            "Custom report generation",
            "Trend analysis & forecasting",
            "Investment performance tracking",
            "Tax preparation reports",
            "Net worth calculations",
            "Cash flow projections",
            "Data export capabilities"
          ]
        },
        image: "/products/finance-ai/05.png",
        imageAlt: "Financial analytics dashboard with charts and trends"
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "AI-powered automation that saves you hours every week",
      description: "Experience the future of personal finance with our advanced AI that automatically scans receipts, categorizes expenses, and provides intelligent insights. Transform hours of manual work into seconds of automated precision.",
      link: {
        text: "Learn about our AI technology",
        href: "https://financeai.augment.cfd/"
      }
    },
    {
      number: "02",
      title: "99.2% accuracy with lightning-fast 3-second processing",
      description: "Our cutting-edge AI receipt scanner achieves industry-leading accuracy while processing your receipts in just 3 seconds. Say goodbye to manual data entry and hello to automated financial tracking."
    },
    {
      number: "03",
      title: "Personalized insights that grow smarter over time",
      description: "Get customized financial recommendations based on your unique spending patterns and goals. Our AI learns from your behavior to provide increasingly accurate insights and optimization suggestions."
    },
    {
      number: "04",
      title: "Complete financial picture with intelligent categorization",
      description: "Connect all your financial data sources and let our AI automatically categorize transactions, track budgets, and provide real-time alerts. Everything you need for smart money management in one place."
    }
  ];

  const customerReference = {
    title: "Customer Success Story",
    company: "TechStartup saves $50K annually with FinanceAI automation",
    description: "A fast-growing startup automated their expense management using FinanceAI's AI-powered receipt scanning and budget optimization, reducing administrative costs by 75% and improving financial visibility across all departments.",
    image: "/products/finance-ai/01.png",
    linkText: "Read the success story",
    linkHref: "https://financeai.augment.cfd/"
  };

  const customerLogos = [
    {
      name: "Stripe",
      image: "https://logo.clearbit.com/stripe.com",
      href: "https://financeai.augment.cfd/",
      alt: "Stripe logo"
    },
    {
      name: "PayPal",
      image: "https://logo.clearbit.com/paypal.com",
      href: "https://financeai.augment.cfd/",
      alt: "PayPal logo"
    },
    {
      name: "Square",
      image: "https://logo.clearbit.com/squareup.com",
      href: "https://financeai.augment.cfd/",
      alt: "Square logo"
    },
    {
      name: "Plaid",
      image: "https://logo.clearbit.com/plaid.com",
      href: "https://financeai.augment.cfd/",
      alt: "Plaid logo"
    },
    {
      name: "Mint",
      image: "https://logo.clearbit.com/mint.com",
      href: "https://financeai.augment.cfd/",
      alt: "Mint logo"
    },
    {
      name: "QuickBooks",
      image: "https://logo.clearbit.com/quickbooks.intuit.com",
      href: "https://financeai.augment.cfd/",
      alt: "QuickBooks logo"
    },
    {
      name: "Xero",
      image: "https://logo.clearbit.com/xero.com",
      href: "https://financeai.augment.cfd/",
      alt: "Xero logo"
    },
    {
      name: "Robinhood",
      image: "https://logo.clearbit.com/robinhood.com",
      href: "https://financeai.augment.cfd/",
      alt: "Robinhood logo"
    },
    {
      name: "Personal Capital",
      image: "https://logo.clearbit.com/personalcapital.com",
      href: "https://financeai.augment.cfd/",
      alt: "Personal Capital logo"
    },
    {
      name: "YNAB",
      image: "https://logo.clearbit.com/youneedabudget.com",
      href: "https://financeai.augment.cfd/",
      alt: "YNAB logo"
    },
    {
      name: "Expensify",
      image: "https://logo.clearbit.com/expensify.com",
      href: "https://financeai.augment.cfd/",
      alt: "Expensify logo"
    },
    {
      name: "Tiller",
      image: "https://logo.clearbit.com/tillerhq.com",
      href: "https://financeai.augment.cfd/",
      alt: "Tiller logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in FinanceAI",
      content: {
        title: "Latest AI-powered finance features and updates",
        description: "Stay updated with the newest capabilities in AI-powered personal finance management, from enhanced receipt scanning to advanced budget optimization features.",
        image: "/products/finance-ai/02.png",
        links: [
          { text: "Latest AI model improvements", href: "https://financeai.augment.cfd/" },
          { text: "New budget optimization features", href: "https://financeai.augment.cfd/" },
          { text: "Enhanced financial insights", href: "https://financeai.augment.cfd/" },
          { text: "Mobile app updates", href: "https://financeai.augment.cfd/" }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare FinanceAI",
      content: {
        title: "See why FinanceAI leads in AI-powered finance management",
        description: "FinanceAI combines advanced AI receipt scanning, intelligent budget management, and personalized insights to deliver superior financial management compared to traditional apps.",
        image: "/products/finance-ai/03.png",
        links: [
          { text: "FinanceAI vs Mint comparison", href: "https://financeai.augment.cfd/" },
          { text: "FinanceAI vs YNAB features", href: "https://financeai.augment.cfd/" },
          { text: "Traditional vs AI finance apps", href: "https://financeai.augment.cfd/" },
          { text: "ROI calculator for automation", href: "https://financeai.augment.cfd/" }
        ]
      }
    },
    {
      id: "community",
      title: "Join the finance community",
      content: {
        title: "Connect with personal finance enthusiasts",
        description: "Join thousands of users sharing budgeting tips, AI-powered insights, and success stories in our vibrant community of smart money managers.",
        image: "/products/finance-ai/04.png",
        links: [
          { text: "Join Discord community", href: "https://financeai.augment.cfd/", target: "_blank" },
          { text: "Personal finance forum", href: "https://financeai.augment.cfd/" },
          { text: "Budget optimization groups", href: "https://financeai.augment.cfd/" },
          { text: "Share your success story", href: "https://financeai.augment.cfd/" }
        ]
      }
    },
    {
      id: "learning",
      title: "Master personal finance",
      content: {
        title: "Learn AI-powered money management",
        description: "Master the art of personal finance with our comprehensive guides, tutorials, and best practices for budgeting, saving, and investing with AI assistance.",
        image: "/products/finance-ai/05.png",
        links: [
          { text: "Personal finance masterclass", href: "https://financeai.augment.cfd/" },
          { text: "AI budgeting tutorials", href: "https://financeai.augment.cfd/" },
          { text: "Investment tracking guide", href: "https://financeai.augment.cfd/" },
          { text: "Tax optimization strategies", href: "https://financeai.augment.cfd/" }
        ]
      }
    },
    {
      id: "support",
      title: "Get finance support",
      content: {
        title: "Expert help for your financial management",
        description: "Access comprehensive support resources, expert guidance, and financial coaching to maximize your success with FinanceAI's powerful features.",
        image: "/products/finance-ai/01.png",
        links: [
          { text: "Contact financial support", href: "https://financeai.augment.cfd/" },
          { text: "Browse help documentation", href: "https://financeai.augment.cfd/" },
          { text: "Setup assistance", href: "https://financeai.augment.cfd/" },
          { text: "Schedule financial consultation", href: "https://financeai.augment.cfd/" }
        ]
      }
    },
    {
      id: "content",
      title: "Explore finance content",
      content: {
        title: "Discover financial insights and resources",
        description: "Explore our extensive library of financial guides, budgeting templates, investment strategies, and success stories to enhance your financial knowledge and outcomes.",
        image: "/products/finance-ai/02.png",
        links: [
          { text: "Financial planning library", href: "https://financeai.augment.cfd/" },
          { text: "Customer success case studies", href: "https://financeai.augment.cfd/" },
          { text: "Download budgeting templates", href: "https://financeai.augment.cfd/" },
          { text: "Follow our finance blog", href: "https://financeai.augment.cfd/" }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Start free trial",
      href: "https://financeai.augment.cfd/",
      icon: "demo"
    },
    {
      title: "Schedule demo",
      href: "https://financeai.augment.cfd/",
      icon: "tour"
    },
    {
      title: "Contact sales",
      href: "https://financeai.augment.cfd/",
      icon: "contact"
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="sr-only">FinanceAI | AI-Powered Personal Finance Management Platform</h1>
        
        {/* Breadcrumbs - automatically generated from /product/finance-ai route */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="FinanceAI"
          description="Transform your financial life with AI-powered insights, automated receipt scanning, and intelligent budget management. Your personal finance assistant that never sleeps. Experience 99.2% accuracy in receipt processing and get personalized recommendations based on your spending patterns."
          ctaButtons={ctaButtons}
          mediaType="video"
          mediaUrl="/products/finance-ai/01.png"
          videoThumbnail="/products/finance-ai/01.png"
          mediaAlt="FinanceAI dashboard showing AI-powered receipt scanning and budget management"
        />

        {/* Product Promotional Cards */}
        <ProductPromo cards={promoCards} />

        {/* Product Explorer - tabbed interface */}
        <ProductExplorer title="FinanceAI" tabs={explorerTabs} />

        {/* Why Choose Section */}
        <ProductWhyChoose 
          title="Why choose FinanceAI for your financial management?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />

        {/* Customer Success Logos */}
        <ProductCustomerLogos
          title="FinanceAI customer successes"
          description="Learn why leading fintech companies and millions of users trust FinanceAI to automate their financial management and achieve their money goals. Click on a logo to learn more."
          viewMoreText="View more customer successes"
          viewMoreHref="https://financeai.augment.cfd/"
          logos={customerLogos}
        />

        {/* Resources Section */}
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />

        {/* CTA Banner */}
        <ProductCTABanner
          title="The FinanceAI Personal Finance Playbook"
          description="We've compiled the secrets to our AI-powered financial management strategy, budgeting best practices, and wealth-building methodology. Learn how to achieve financial freedom with AI assistance."
          image="/products/finance-ai/03.png"
          buttonText="Get the finance guide"
          buttonHref="https://financeai.augment.cfd/"
        />

        {/* Get Started Section */}
        <ProductGetStarted
          title="Get Started"
          actions={getStartedActions}
        />
      </main>
    </div>
  );
}
