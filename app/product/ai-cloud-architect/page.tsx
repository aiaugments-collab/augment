import { ProductHero } from "@/components/product/ProductHero";
import { ProductPromo } from "@/components/product/ProductPromo";
import { ProductExplorer } from "@/components/product/ProductExplorer";
import { ProductWhyChoose } from "@/components/product/ProductWhyChoose";
import { ProductCustomerLogos } from "@/components/product/ProductCustomerLogos";
import { ProductResources } from "@/components/product/ProductResources";
import { ProductCTABanner } from "@/components/product/ProductCTABanner";
import { ProductGetStarted } from "@/components/product/ProductGetStarted";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { getAppUrls } from "@/lib/marketplaceData";

export default function AICloudArchitectPage() {
  const { productUrl, docsUrl } = getAppUrls("ai-cloud-architect");
  
  const ctaButtons = [
    {
      text: "Optimize Architecture",
      href: productUrl,
      variant: "primary" as const
    },
    {
      text: "Architecture Guide",
      href: docsUrl,
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "multi-cloud-optimization",
      image: "/ai-cloud-architect.svg",
      title: "Multi-Cloud Architecture Optimization",
      description: "AI-powered cloud architecture advisor that analyzes infrastructure across AWS, Azure, GCP, and hybrid environments to provide intelligent optimization recommendations.",
      ctaText: "Optimize cloud architecture",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "cost-performance-analysis",
      image: "/ai-cloud-architect.svg",
      title: "Cost & Performance Analysis",
      description: "Machine learning algorithms analyze cost patterns and performance metrics to recommend optimal resource allocation and cost reduction strategies.",
      ctaText: "Analyze costs",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "architecture-recommendations",
      image: "/ai-cloud-architect.svg",
      title: "Intelligent Architecture Recommendations",
      description: "AI-driven architectural guidance with best practice recommendations, scalability assessments, and intelligent design pattern suggestions for optimal cloud infrastructure.",
      ctaText: "Get recommendations",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "security-compliance",
      image: "/ai-cloud-architect.svg",
      title: "Security & Compliance Optimization",
      description: "Automated security assessment and compliance monitoring with AI-powered recommendations for secure cloud architecture and regulatory adherence.",
      ctaText: "Secure architecture",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "architecture-analysis",
      title: "Architecture Analysis",
      content: {
        title: "AI-powered cloud architecture analysis and optimization",
        description: "Advanced machine learning algorithms analyze your cloud infrastructure design, identify optimization opportunities, and provide intelligent recommendations for improved performance and cost efficiency.",
        buttons: [
          { text: "Analyze Architecture", href: productUrl, variant: "primary" as const },
          { text: "Architecture patterns", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Architecture Analysis Features",
          items: [
            "Multi-cloud assessment",
            "Performance bottleneck detection",
            "Scalability analysis",
            "Resource optimization",
            "Architecture pattern recognition",
            "Dependency mapping",
            "Service mesh optimization",
            "Microservices design guidance"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Cloud Architecture Analyzer",
          description: "AI-powered infrastructure analysis and optimization platform"
        }
      }
    },
    {
      id: "cost-optimization",
      title: "Cost Optimization",
      content: {
        title: "Intelligent cloud cost optimization and resource management",
        description: "AI-driven cost analysis with predictive modeling, resource rightsizing recommendations, and automated cost optimization strategies for maximum cloud efficiency.",
        buttons: [
          { text: "Optimize Costs", href: productUrl, variant: "primary" as const },
          { text: "Cost optimization guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Cost Optimization Features",
          items: [
            "Cost prediction modeling",
            "Resource rightsizing",
            "Reserved instance optimization",
            "Spot instance recommendations",
            "Waste elimination",
            "Budget forecasting",
            "Cost allocation analysis",
            "ROI optimization"
          ]
        },
        mockup: {
          type: "analytics" as const,
          title: "Cost Optimization Center",
          description: "AI-driven cloud cost analysis and optimization recommendations"
        }
      }
    },
    {
      id: "performance-optimization",
      title: "Performance Optimization",
      content: {
        title: "AI-powered performance optimization for cloud infrastructure",
        description: "Machine learning algorithms analyze performance patterns, identify bottlenecks, and provide intelligent recommendations for improved application performance and user experience.",
        buttons: [
          { text: "Optimize Performance", href: productUrl, variant: "primary" as const },
          { text: "Performance guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Performance Optimization Features",
          items: [
            "Performance bottleneck analysis",
            "Latency optimization",
            "Throughput improvement",
            "Auto-scaling recommendations",
            "Load balancing optimization",
            "CDN configuration",
            "Database performance tuning",
            "Application acceleration"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Performance Optimization Console",
          description: "AI-powered performance analysis and optimization recommendations"
        }
      }
    },
    {
      id: "security-compliance",
      title: "Security & Compliance",
      content: {
        title: "Automated security and compliance optimization platform",
        description: "AI-powered security assessment with compliance monitoring, vulnerability detection, and intelligent recommendations for secure cloud architecture and regulatory adherence.",
        buttons: [
          { text: "Secure Architecture", href: productUrl, variant: "primary" as const },
          { text: "Security best practices", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Security & Compliance Features",
          items: [
            "Security posture assessment",
            "Compliance framework analysis",
            "Vulnerability scanning",
            "Access control optimization",
            "Encryption recommendations",
            "Network security analysis",
            "Identity management optimization",
            "Audit trail generation"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "AI Security Advisor",
          description: "Intelligent security and compliance optimization guidance"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Multi-cloud architecture optimization with AI intelligence",
      description: "Advanced AI algorithms analyze infrastructure across AWS, Azure, GCP, and hybrid environments to provide intelligent optimization recommendations for performance and cost efficiency.",
      link: {
        text: "Learn about AI architecture optimization",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Intelligent cost optimization with predictive modeling",
      description: "Machine learning-driven cost analysis with predictive modeling, resource rightsizing, and automated optimization strategies for maximum cloud cost efficiency and ROI."
    },
    {
      number: "03",
      title: "Performance optimization with intelligent bottleneck detection", 
      description: "AI-powered performance analysis that identifies bottlenecks, optimizes resource allocation, and provides data-driven recommendations for improved application performance."
    },
    {
      number: "04",
      title: "Automated security and compliance optimization",
      description: "Intelligent security assessment with compliance monitoring, vulnerability detection, and AI-powered recommendations for secure cloud architecture and regulatory adherence."
    }
  ];

  const customerReference = {
    title: "Cloud Architecture Transformation",
    company: "Enterprise reduces cloud costs by 60% while improving performance with AI optimization",
    description: "A global enterprise transformed their multi-cloud architecture using AI CloudArchitect, achieving significant cost savings while improving performance and security posture.",
    image: "/ai-cloud-architect.svg",
    linkText: "Read the cloud transformation story",
    linkHref: docsUrl
  };

  const customerLogos = [
    {
      name: "Amazon Web Services",
      image: "https://logo.clearbit.com/aws.amazon.com",
      href: docsUrl,
      alt: "AWS logo"
    },
    {
      name: "Microsoft Azure",
      image: "https://logo.clearbit.com/azure.microsoft.com",
      href: docsUrl,
      alt: "Azure logo"
    },
    {
      name: "Google Cloud",
      image: "https://logo.clearbit.com/cloud.google.com",
      href: docsUrl, 
      alt: "Google Cloud logo"
    },
    {
      name: "Terraform",
      image: "https://logo.clearbit.com/terraform.io",
      href: docsUrl,
      alt: "Terraform logo"
    },
    {
      name: "Kubernetes", 
      image: "https://logo.clearbit.com/kubernetes.io",
      href: docsUrl,
      alt: "Kubernetes logo"
    },
    {
      name: "Docker",
      image: "https://logo.clearbit.com/docker.com",
      href: docsUrl,
      alt: "Docker logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in AI CloudArchitect",
      content: {
        title: "Latest AI-powered cloud architecture features",
        description: "Stay updated with the newest capabilities in AI-driven cloud optimization, cost management, and performance improvement for modern cloud infrastructure.",
        image: "/ai-cloud-architect.svg",
        links: [
          { text: "New optimization features", href: docsUrl },
          { text: "Multi-cloud enhancements", href: docsUrl },
          { text: "Cost optimization updates", href: docsUrl },
          { text: "Performance improvements", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare cloud optimization solutions",
      content: {
        title: "Why choose AI CloudArchitect",
        description: "Compare our AI-powered cloud optimization capabilities with other solutions and see why enterprise architects choose us for intelligent infrastructure management.",
        image: "/ai-cloud-architect.svg",
        links: [
          { text: "Cloud optimization comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master AI CloudArchitect",
      content: {
        title: "Learn AI-powered cloud architecture best practices",
        description: "Master intelligent cloud optimization with comprehensive guides, architecture patterns, and training materials for cloud architects and engineers.",
        image: "/ai-cloud-architect.svg",
        links: [
          { text: "AI cloud architecture guide", href: docsUrl },
          { text: "Multi-cloud optimization strategies", href: docsUrl },
          { text: "Cost optimization best practices", href: docsUrl },
          { text: "Performance tuning techniques", href: docsUrl }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Optimize architecture",
      href: productUrl,
      icon: "demo"
    },
    {
      title: "Architecture guide",
      href: docsUrl,
      icon: "tour"
    },
    {
      title: "Contact architects",
      href: productUrl,
      icon: "contact"
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="sr-only">AI CloudArchitect | Intelligent Multi-Cloud Architecture Optimization</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="AI CloudArchitect"
          description="AI-powered cloud architecture advisor that analyzes your infrastructure and provides intelligent recommendations for optimization, cost reduction, and performance improvements across AWS, Azure, GCP, and hybrid environments with advanced machine learning insights."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "AI Cloud Architecture Platform",
            description: "Intelligent multi-cloud optimization and architecture guidance"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="AI CloudArchitect" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose AI CloudArchitect?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Cloud transformation success stories"
          description="Learn why cloud architects and engineers choose AI CloudArchitect for intelligent infrastructure optimization, cost management, and performance improvement."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The AI Cloud Architecture Excellence Guide"
          description="We've compiled intelligent cloud optimization strategies, multi-cloud best practices, and cost management methodologies for modern cloud infrastructure."
          image="/ai-cloud-architect.svg"
          buttonText="Get the architecture guide"
          buttonHref={docsUrl}
        />
        <ProductGetStarted
          title="Get Started"
          actions={getStartedActions}
        />
      </main>
    </div>
  );
}
