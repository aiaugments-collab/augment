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

export default function OrchestratorAIPage() {
  const { productUrl, docsUrl } = getAppUrls("orchestrator-ai");
  
  const ctaButtons = [
    {
      text: "Orchestrate AI Workflows",
      href: productUrl,
      variant: "primary" as const
    },
    {
      text: "AI Assistant Hub",
      href: docsUrl,
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "ai-workflow-orchestration",
      image: "/ai-orchestrator.svg",
      title: "AI Workflow Orchestration Platform",
      description: "Comprehensive AI workflow orchestration with model coordination, data pipeline integration, and inference management for production-grade AI services and applications.",
      ctaText: "Orchestrate AI workflows",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "model-coordination",
      image: "/ai-orchestrator.svg",
      title: "Advanced Model Coordination",
      description: "Sophisticated model coordination with ensemble learning, model chaining, and intelligent routing for complex AI workflows and multi-model applications.",
      ctaText: "Coordinate AI models",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "data-pipelines",
      image: "/ai-orchestrator.svg",
      title: "AI Data Pipeline Integration",
      description: "Seamless data pipeline integration with real-time processing, feature engineering, and automated data preparation for AI model training and inference workflows.",
      ctaText: "Integrate data pipelines",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "inference-workflows",
      image: "/ai-orchestrator.svg",
      title: "Production Inference Services",
      description: "Enterprise-grade inference workflows with scalable deployment, performance optimization, and monitoring for production AI services and real-time applications.",
      ctaText: "Deploy inference services",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "workflow-orchestration",
      title: "Workflow Orchestration",
      content: {
        title: "Comprehensive AI workflow orchestration and automation platform",
        description: "Advanced AI workflow orchestration with model coordination, data pipeline integration, and inference management for production-grade AI services and applications.",
        buttons: [
          { text: "Orchestrate AI Workflows", href: productUrl, variant: "primary" as const },
          { text: "AI orchestration guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Workflow Orchestration Features",
          items: [
            "Model coordination",
            "Workflow automation",
            "Pipeline integration",
            "Resource management",
            "Scalability control",
            "Performance monitoring",
            "Error handling",
            "Deployment orchestration"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "AI Orchestration Console",
          description: "AI workflow coordination and automation management"
        }
      }
    },
    {
      id: "model-management",
      title: "Model Management",
      content: {
        title: "Advanced AI model coordination and ensemble learning platform",
        description: "Sophisticated model management with ensemble learning, model chaining, and intelligent routing for complex AI workflows and multi-model applications.",
        buttons: [
          { text: "Coordinate AI Models", href: productUrl, variant: "primary" as const },
          { text: "Model management best practices", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Model Management Features",
          items: [
            "Ensemble learning",
            "Model chaining",
            "Intelligent routing",
            "Version control",
            "A/B testing",
            "Model registry",
            "Performance tracking",
            "Automated deployment"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Model Management Console",
          description: "AI model coordination and ensemble learning interface"
        }
      }
    },
    {
      id: "data-integration",
      title: "Data Integration",
      content: {
        title: "AI data pipeline integration with real-time processing",
        description: "Seamless data pipeline integration with real-time processing, feature engineering, and automated data preparation for AI model training and inference workflows.",
        buttons: [
          { text: "Integrate Data Pipelines", href: productUrl, variant: "primary" as const },
          { text: "Data integration guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Data Integration Features",
          items: [
            "Real-time processing",
            "Feature engineering",
            "Data preparation",
            "Stream processing",
            "Batch processing",
            "Data validation",
            "Quality monitoring",
            "Pipeline automation"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Data Integration Interface",
          description: "AI data pipeline integration and processing management"
        }
      }
    },
    {
      id: "inference-services",
      title: "Inference Services",
      content: {
        title: "Production-grade inference workflows with scalable deployment",
        description: "Enterprise-grade inference workflows with scalable deployment, performance optimization, and monitoring for production AI services and real-time applications.",
        buttons: [
          { text: "Deploy Inference Services", href: productUrl, variant: "primary" as const },
          { text: "Inference optimization guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Inference Services Features",
          items: [
            "Scalable deployment",
            "Performance optimization",
            "Real-time inference",
            "Batch processing",
            "Load balancing",
            "Auto-scaling",
            "Monitoring integration",
            "Cost optimization"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Inference Services Center",
          description: "Production AI inference deployment and management"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Comprehensive AI workflow orchestration with model coordination",
      description: "Advanced AI workflow orchestration platform with model coordination, data pipeline integration, and inference management for production-grade AI services and applications.",
      link: {
        text: "Learn about AI orchestration",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Advanced model coordination with ensemble learning capabilities",
      description: "Sophisticated model management with ensemble learning, model chaining, and intelligent routing for complex AI workflows and multi-model applications."
    },
    {
      number: "03",
      title: "Seamless data pipeline integration with real-time processing", 
      description: "Comprehensive data pipeline integration with real-time processing, feature engineering, and automated data preparation for AI model training and inference workflows."
    },
    {
      number: "04",
      title: "Production-grade inference services with scalable deployment",
      description: "Enterprise-grade inference workflows with scalable deployment, performance optimization, and monitoring for production AI services and real-time applications."
    }
  ];

  const customerReference = {
    title: "AI Transformation Success",
    company: "AI team reduces model deployment time by 75% while scaling to 1M+ daily inferences with orchestrated workflows",
    description: "A leading AI company transformed their model deployment and orchestration using AI Orchestrator, achieving dramatic improvements in deployment speed while scaling to enterprise-grade inference volumes.",
    image: "/ai-orchestrator.svg",
    linkText: "Read the AI transformation story",
    linkHref: docsUrl
  };

  const customerLogos = [
    {
      name: "MLflow",
      image: "https://logo.clearbit.com/mlflow.org",
      href: docsUrl,
      alt: "MLflow logo"
    },
    {
      name: "Kubeflow",
      image: "https://logo.clearbit.com/kubeflow.org",
      href: docsUrl,
      alt: "Kubeflow logo"
    },
    {
      name: "Airflow",
      image: "https://logo.clearbit.com/airflow.apache.org",
      href: docsUrl, 
      alt: "Airflow logo"
    },
    {
      name: "Prefect",
      image: "https://logo.clearbit.com/prefect.io",
      href: docsUrl,
      alt: "Prefect logo"
    },
    {
      name: "Dagster", 
      image: "https://logo.clearbit.com/dagster.io",
      href: docsUrl,
      alt: "Dagster logo"
    },
    {
      name: "Metaflow",
      image: "https://logo.clearbit.com/metaflow.org",
      href: docsUrl,
      alt: "Metaflow logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in AI Orchestrator",
      content: {
        title: "Latest AI workflow orchestration and model management features",
        description: "Stay updated with the newest capabilities in AI workflow orchestration, model coordination, and inference deployment for modern AI operations and MLOps.",
        image: "/ai-orchestrator.svg",
        links: [
          { text: "New AI orchestration features", href: docsUrl },
          { text: "Model management improvements", href: docsUrl },
          { text: "Data pipeline enhancements", href: docsUrl },
          { text: "Inference service updates", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare AI orchestration solutions",
      content: {
        title: "Why choose AI Orchestrator",
        description: "Compare our AI workflow orchestration capabilities with other solutions and see why AI teams choose us for comprehensive model coordination and production inference services.",
        image: "/ai-orchestrator.svg",
        links: [
          { text: "AI orchestration comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master AI Orchestrator",
      content: {
        title: "Learn AI workflow orchestration and MLOps best practices",
        description: "Master AI orchestration with comprehensive guides, model management strategies, and training materials for AI engineers and MLOps professionals.",
        image: "/ai-orchestrator.svg",
        links: [
          { text: "AI orchestration deployment guide", href: docsUrl },
          { text: "Model management best practices", href: docsUrl },
          { text: "Inference optimization strategies", href: docsUrl },
          { text: "Troubleshooting guide", href: docsUrl }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Orchestrate AI workflows",
      href: productUrl,
      icon: "demo"
    },
    {
      title: "AI assistant hub",
      href: docsUrl,
      icon: "tour"
    },
    {
      title: "Contact AI team",
      href: productUrl,
      icon: "contact"
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="sr-only">AI Orchestrator | AI Workflow Orchestration & Assistants Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="AI Orchestrator"
          description="Coordinate AI models, data pipelines, and inference workflows for production-grade AI services with comprehensive orchestration. Advanced AI workflow platform with model coordination and scalable inference capabilities for enterprise AI applications."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "AI Orchestration Console",
            description: "AI workflow coordination and model management platform"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="AI Orchestrator" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose AI Orchestrator?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="AI orchestration success stories"
          description="Learn why AI teams and MLOps professionals choose AI Orchestrator for comprehensive workflow orchestration and advanced model coordination capabilities."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The AI Orchestration Guide"
          description="We've compiled AI workflow orchestration strategies, model management techniques, and inference optimization best practices for modern AI operations and MLOps workflows."
          image="/ai-orchestrator.svg"
          buttonText="Get the AI orchestration guide"
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
