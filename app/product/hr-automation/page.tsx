import { ProductHero } from "@/components/product/ProductHero";
import { ProductPromo } from "@/components/product/ProductPromo";
import { ProductExplorer } from "@/components/product/ProductExplorer";
import { ProductWhyChoose } from "@/components/product/ProductWhyChoose";
import { ProductCustomerLogos } from "@/components/product/ProductCustomerLogos";
import { ProductResources } from "@/components/product/ProductResources";
import { ProductCTABanner } from "@/components/product/ProductCTABanner";
import { ProductGetStarted } from "@/components/product/ProductGetStarted";
import { Breadcrumb } from "@/components/ui/Breadcrumb";


export default function HRAutomationPage() {
  const ctaButtons = [
    {
      text: "Book a Demo",
      href: "/book-demo",
      variant: "primary" as const
    },
    {
      text: "Contact Sales",
      href: "/corporate/contact/sales",
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "webinar-hr-automation",
      image: "/products/hr-automation/02.png",
      title: "Webinar: Transforming HR with Intelligent Automation",
      description: "Discover how our HR automation platform can transform your human resources processes and improve employee experiences across the organization.",
      ctaText: "Register today",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "forrester-hr-automation",
      image: "/products/hr-automation/03.png",
      title: "Augment named a Leader in The Forrester Wave™: HR Automation Platforms, Q1 2025",
      description: "Find out why Augment was recognized for excellence in human resources automation and workforce management solutions.",
      ctaText: "Access the Forrester report",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "hr-efficiency-guide",
      image: "/products/hr-automation/04.png",
      title: "Accelerate HR efficiency with process automation",
      description: "Discover how to streamline HR operations by implementing intelligent automation for recruitment, onboarding, and employee management.",
      ctaText: "Read the solution brochure (PDF)",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "chro-guide",
      image: "/products/hr-automation/05.png",
      title: "CHRO's guide to workforce transformation",
      description: "Learn the top 5 ways to modernize HR processes and create exceptional employee experiences with automation technology.",
      ctaText: "Access the guide",
      ctaLink: "/book-demo",
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "employee-management",
      title: "Employee Management",
      content: {
        title: "Comprehensive employee lifecycle management",
        description: "Manage the complete employee journey from hiring to retirement with automated workflows that handle onboarding, performance management, and employee development programs.",
        buttons: [
          { text: "Book a Demo", href: "/book-demo", variant: "primary" as const },
          { text: "See employee features", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "Employee profile management",
            "Automated onboarding workflows",
            "Performance review automation",
            "Goal setting and tracking",
            "Skills and competency mapping",
            "Career development planning",
            "Employee self-service portal",
            "Document management system"
          ]
        },
        image: "/products/hr-automation/02.png",
        imageAlt: "Employee management dashboard"
      }
    },
    {
      id: "recruitment-automation",
      title: "Recruitment Automation",
      content: {
        title: "Intelligent recruitment and talent acquisition",
        description: "Streamline your hiring process with AI-powered recruitment automation that handles job posting, candidate screening, interview scheduling, and offer management.",
        buttons: [
          { text: "Book a Demo", href: "/book-demo", variant: "primary" as const },
          { text: "See recruitment features", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "Automated job posting distribution",
            "AI-powered candidate screening",
            "Resume parsing and matching",
            "Interview scheduling automation",
            "Candidate communication workflows",
            "Hiring pipeline management",
            "Offer letter generation",
            "Background check integration"
          ]
        },
        image: "/products/hr-automation/03.png",
        imageAlt: "Recruitment automation interface"
      }
    },
    {
      id: "payroll-benefits",
      title: "Payroll & Benefits",
      content: {
        title: "Automated payroll and benefits administration",
        description: "Simplify payroll processing and benefits management with automated calculations, compliance tracking, and employee self-service capabilities that reduce administrative overhead.",
        buttons: [
          { text: "Book a Demo", href: "/book-demo", variant: "primary" as const },
          { text: "See payroll features", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "Automated payroll processing",
            "Tax calculation and filing",
            "Benefits enrollment automation",
            "Time and attendance integration",
            "Expense reimbursement workflows",
            "Compliance reporting",
            "Direct deposit management",
            "Year-end tax document generation"
          ]
        },
        image: "/products/hr-automation/04.png",
        imageAlt: "Payroll and benefits dashboard"
      }
    },
    {
      id: "analytics-insights",
      title: "Analytics & Insights",
      content: {
        title: "HR analytics and workforce intelligence",
        description: "Make data-driven HR decisions with comprehensive analytics that provide insights into employee performance, retention, engagement, and organizational effectiveness.",
        buttons: [
          { text: "Book a Demo", href: "/book-demo", variant: "primary" as const },
          { text: "See analytics demo", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "Employee performance analytics",
            "Turnover and retention analysis",
            "Engagement survey automation",
            "Workforce planning insights",
            "Diversity and inclusion metrics",
            "Compensation analysis",
            "Predictive HR analytics",
            "Custom dashboard creation"
          ]
        },
        image: "/products/hr-automation/05.png",
        imageAlt: "HR analytics dashboard"
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "End-to-End Automation",
      description: "Automate the complete HR lifecycle from recruitment to retirement with intelligent workflows that reduce manual tasks and improve efficiency.",
      link: {
        text: "See HR automation",
        href: "/book-demo"
      }
    },
    {
      number: "02",
      title: "Employee Self-Service",
      description: "Empower employees with self-service capabilities for time-off requests, benefits enrollment, and personal information updates.",
      link: {
        text: "View self-service portal",
        href: "/book-demo"
      }
    },
    {
      number: "03",
      title: "Compliance Management",
      description: "Stay compliant with automated tracking of labor laws, tax regulations, and industry-specific requirements across multiple jurisdictions.",
      link: {
        text: "Explore compliance tools",
        href: "/book-demo"
      }
    }
  ];

  const resources = [
    {
      title: "HR Automation Implementation Guide",
      description: "Complete guide to implementing HR automation for maximum impact",
      type: "Guide",
      href: "/book-demo"
    },
    {
      title: "Modern HR Best Practices",
      description: "Proven strategies for transforming HR operations with technology",
      type: "Whitepaper",
      href: "/book-demo"
    },
    {
      title: "HR Transformation Success Stories",
      description: "See how organizations improved HR efficiency by 70% with automation",
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
          title="HR Process Automation"
          description="Comprehensive HR automation platform for employee management, payroll processing, performance tracking, recruitment, and workforce analytics. Complete HR automation and employee management for modern organizations."
          ctaButtons={ctaButtons}
          mediaType="image"
          mediaUrl="/products/hr-automation/01.png"
          mediaAlt="HR Automation Platform Dashboard"
        />

        <ProductPromo cards={promoCards} />

        <ProductExplorer
          title="Explore HR automation capabilities"
          tabs={explorerTabs}
        />

        <ProductWhyChoose
          title="Why choose our HR automation platform?"
          items={whyChooseItems}
        />





        <ProductCTABanner
          title="Ready to transform your HR operations?"
          description="Join thousands of HR teams using our platform to automate processes, improve efficiency, and create better employee experiences."
          image="/products/hr-automation/03.png"
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
