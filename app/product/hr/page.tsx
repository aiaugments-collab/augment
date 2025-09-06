import { ProductHero } from "@/components/product/ProductHero";
import { ProductPromo } from "@/components/product/ProductPromo";
import { ProductExplorer } from "@/components/product/ProductExplorer";
import { ProductWhyChoose } from "@/components/product/ProductWhyChoose";
import { ProductCustomerLogos } from "@/components/product/ProductCustomerLogos";
import { ProductResources } from "@/components/product/ProductResources";
import { ProductCTABanner } from "@/components/product/ProductCTABanner";
import { ProductGetStarted } from "@/components/product/ProductGetStarted";
import { Breadcrumb } from "@/components/ui/Breadcrumb";


export default function AugmentHRPage() {
  const ctaButtons = [
    {
      text: "Get Started Today",
      href: "https://hr.augment.cfd/",
      variant: "primary" as const
    },
    {
      text: "Watch Demo",
      href: "/book-demo",
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "webinar-ai-hr",
      image: "/products/hr/02.png",
      title: "Webinar: The Future of HR is AI-Powered",
      description: "Discover how AI-powered HR automation can cut administrative workload by 80% while delivering exceptional employee experiences.",
      ctaText: "Register today",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "forrester-hr",
      image: "/products/hr/03.png",
      title: "Augment named a Leader in The Forrester Wave™: AI-Powered HRMS, Q1 2025",
      description: "Find out why Augment was recognized for excellence in AI-driven human resource management and employee automation.",
      ctaText: "Access the Forrester report",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "hr-efficiency-guide",
      image: "/products/hr/04.png",
      title: "Transform HR Operations with AI Automation",
      description: "Learn how to eliminate manual HR processes and improve employee satisfaction with intelligent automation and 24/7 AI support.",
      ctaText: "Read the solution brochure (PDF)",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "implementation-guide",
      image: "/products/hr/05.png",
      title: "Complete guide to AI-powered HRMS implementation",
      description: "Step-by-step implementation guide for transforming your HR operations with AI-first automation and intelligent workflows.",
      ctaText: "Access the guide",
      ctaLink: "/book-demo",
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "ai-resume-screening",
      title: "AI Resume Screening",
      content: {
        title: "Intelligent hiring made simple",
        description: "Transform your recruitment process with AI-powered resume screening that analyzes candidates in seconds, ranking them based on job requirements while eliminating bias from your hiring process.",
        buttons: [
          { text: "Try AI Screening", href: "https://hr.augment.cfd/", variant: "primary" as const },
          { text: "See screening demo", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "90% faster screening time",
            "Bias-free candidate evaluation",
            "Smart skill matching algorithms",
            "Automated ranking system",
            "Multi-language resume support",
            "Custom scoring criteria",
            "Integration with job boards",
            "Candidate communication automation"
          ]
        },
        image: "/products/hr/02.png",
        imageAlt: "AI Resume Screening Interface"
      }
    },
    {
      id: "leave-management",
      title: "AI Leave Management",
      content: {
        title: "Effortless time-off planning",
        description: "Experience seamless leave management with intelligent approval workflows that consider team capacity, project deadlines, and company policies for optimal workforce planning.",
        buttons: [
          { text: "Try Leave Management", href: "https://hr.augment.cfd/", variant: "primary" as const },
          { text: "See workflow features", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "One-click leave requests",
            "Smart approval routing",
            "Team capacity planning",
            "Conflict prevention algorithms",
            "Policy automation",
            "Balance tracking",
            "Calendar integration",
            "Automated notifications"
          ]
        },
        image: "/products/hr/03.png",
        imageAlt: "AI Leave Management Dashboard"
      }
    },
    {
      id: "document-chat",
      title: "Document Knowledge Chat",
      content: {
        title: "Instant answers, always available",
        description: "Meet your 24/7 HR companion that instantly answers questions about policies, benefits, and procedures using your company documents with natural language processing.",
        buttons: [
          { text: "Try Document Chat", href: "https://hr.augment.cfd/", variant: "primary" as const },
          { text: "See AI assistant", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "Instant policy answers",
            "Document-based responses",
            "24/7 availability",
            "Natural conversations",
            "Multi-document search",
            "Context-aware responses",
            "Employee self-service",
            "Knowledge base integration"
          ]
        },
        image: "/products/hr/04.png",
        imageAlt: "Document Knowledge Chat Interface"
      }
    },
    {
      id: "payroll-automation",
      title: "Automated Payroll",
      content: {
        title: "Error-free payroll processing",
        description: "Automate your entire payroll process with AI-powered calculations, tax compliance, and instant payslip generation that ensures accuracy and regulatory compliance.",
        buttons: [
          { text: "Try Payroll System", href: "https://hr.augment.cfd/", variant: "primary" as const },
          { text: "See payroll features", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "Automated calculations",
            "Tax compliance management",
            "Digital payslips generation",
            "Salary management system",
            "Benefits integration",
            "Overtime calculations",
            "Deduction management",
            "Regulatory reporting"
          ]
        },
        image: "/products/hr/05.png",
        imageAlt: "Automated Payroll Dashboard"
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "80% Workload Reduction",
      description: "Cut administrative workload by 80% with intelligent automation that handles routine HR tasks while you focus on strategic initiatives.",
      link: {
        text: "See automation features",
        href: "https://hr.augment.cfd/"
      }
    },
    {
      number: "02",
      title: "AI-First Approach",
      description: "Built from the ground up with AI at its core, delivering intelligent insights and automated decision-making for modern HR operations.",
      link: {
        text: "Explore AI capabilities",
        href: "https://hr.augment.cfd/"
      }
    },
    {
      number: "03",
      title: "24/7 Employee Support",
      description: "Provide round-the-clock support to your employees with AI-powered assistance that never sleeps and always has the right answers.",
      link: {
        text: "Try AI assistant",
        href: "https://hr.augment.cfd/"
      }
    }
  ];

  const resources = [
    {
      title: "AI-Powered HRMS Implementation Guide",
      description: "Complete guide to implementing AI-first HR automation in your organization",
      type: "Guide",
      href: "/book-demo"
    },
    {
      title: "The Future of HR: AI Automation Trends",
      description: "Industry insights on how AI is transforming human resource management",
      type: "Whitepaper",
      href: "/book-demo"
    },
    {
      title: "Customer Success: 80% Efficiency Gains",
      description: "See how companies achieved dramatic efficiency improvements with Augment HR",
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
          title="AI-First HRMS Platform"
          description="Replace traditional HR systems with intelligent automation. Cut administrative workload by 80% while delivering exceptional employee experiences with AI resume screening, document knowledge chat, AI-based leave management, and automated payroll processing."
          ctaButtons={ctaButtons}
          mediaType="image"
          mediaUrl="/products/hr/01.png"
          mediaAlt="Augment HR Platform Interface"
        />

        <ProductPromo cards={promoCards} />

        <ProductExplorer
          title="Explore AI-powered HR capabilities"
          tabs={explorerTabs}
        />

        <ProductWhyChoose
          title="Why choose Augment HR?"
          items={whyChooseItems}
        />

        <ProductCTABanner
          title="Ready to transform your HR operations?"
          description="Join the revolution in HR management. Experience the power of AI-driven automation and seamless employee experiences."
          image="/products/hr/03.png"
          buttonText="Get Started Today"
          buttonHref="https://hr.augment.cfd/"
        />

        <ProductGetStarted 
          title="Get Started"
          actions={[
            { title: "Start For Free", href: "https://hr.augment.cfd/", icon: "demo" },
            { title: "Schedule Demo", href: "/book-demo", icon: "contact" }
          ]}
        />
      </main>
    </div>
  );
}
