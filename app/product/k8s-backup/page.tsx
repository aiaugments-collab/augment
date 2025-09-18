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

export default function K8sBackupPage() {
  const { productUrl, docsUrl } = getAppUrls("k8s-backup");
  
  const ctaButtons = [
    {
      text: "Protect Kubernetes",
      href: productUrl,
      variant: "primary" as const
    },
    {
      text: "Schedule Snapshots",
      href: docsUrl,
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "kubernetes-protection",
      image: "/kube-safe.svg",
      title: "Complete Kubernetes Protection",
      description: "Comprehensive Kubernetes workload protection with automated backup scheduling, persistent volume snapshots, and namespace-level recovery for cloud-native applications.",
      ctaText: "Protect Kubernetes workloads",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "scheduled-snapshots",
      image: "/kube-safe.svg",
      title: "Automated Snapshot Scheduling",
      description: "Intelligent snapshot scheduling with policy-based automation, retention management, and cross-cluster replication for reliable Kubernetes data protection.",
      ctaText: "Schedule automated snapshots",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "backup-orchestration",
      image: "/kube-safe.svg",
      title: "Advanced Backup Orchestration",
      description: "Sophisticated backup orchestration with application-consistent snapshots, resource dependencies, and coordinated backup workflows for complex Kubernetes environments.",
      ctaText: "Orchestrate Kubernetes backups",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "cluster-restore",
      image: "/kube-safe.svg",
      title: "Cluster-Level Restore Operations",
      description: "Enterprise-grade cluster restore with granular recovery options, cross-cluster migration, and disaster recovery automation for Kubernetes infrastructure resilience.",
      ctaText: "Restore Kubernetes clusters",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "kubernetes-protection",
      title: "Kubernetes Protection",
      content: {
        title: "Complete Kubernetes workload protection and backup platform",
        description: "Comprehensive Kubernetes protection with automated backup scheduling, persistent volume snapshots, and namespace-level recovery for cloud-native applications.",
        buttons: [
          { text: "Protect Kubernetes Workloads", href: productUrl, variant: "primary" as const },
          { text: "Kubernetes protection guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Kubernetes Protection Features",
          items: [
            "Workload protection",
            "Persistent volume backup",
            "Namespace recovery",
            "Resource dependencies",
            "Application consistency",
            "RBAC integration",
            "Helm chart backup",
            "Custom resources"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Kubernetes Protection Console",
          description: "Kubernetes workload backup and protection management"
        }
      }
    },
    {
      id: "snapshot-scheduling",
      title: "Snapshot Scheduling",
      content: {
        title: "Automated snapshot scheduling with policy-based management",
        description: "Intelligent snapshot scheduling with policy-based automation, retention management, and cross-cluster replication for reliable Kubernetes data protection.",
        buttons: [
          { text: "Schedule Automated Snapshots", href: productUrl, variant: "primary" as const },
          { text: "Snapshot scheduling best practices", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Snapshot Scheduling Features",
          items: [
            "Policy-based automation",
            "Retention management",
            "Cross-cluster replication",
            "Incremental snapshots",
            "Compression optimization",
            "Bandwidth management",
            "Schedule optimization",
            "Conflict resolution"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Snapshot Scheduling Console",
          description: "Kubernetes snapshot automation and policy management"
        }
      }
    },
    {
      id: "backup-orchestration",
      title: "Backup Orchestration",
      content: {
        title: "Advanced backup orchestration with application consistency",
        description: "Sophisticated backup orchestration with application-consistent snapshots, resource dependencies, and coordinated backup workflows for complex Kubernetes environments.",
        buttons: [
          { text: "Orchestrate Kubernetes Backups", href: productUrl, variant: "primary" as const },
          { text: "Backup orchestration guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Backup Orchestration Features",
          items: [
            "Application consistency",
            "Resource dependencies",
            "Coordinated workflows",
            "Pre/post hooks",
            "Validation checks",
            "Error handling",
            "Progress monitoring",
            "Parallel processing"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Backup Orchestration Interface",
          description: "Kubernetes backup workflow coordination and management"
        }
      }
    },
    {
      id: "cluster-restore",
      title: "Cluster Restore",
      content: {
        title: "Enterprise cluster restore with disaster recovery automation",
        description: "Enterprise-grade cluster restore with granular recovery options, cross-cluster migration, and disaster recovery automation for Kubernetes infrastructure resilience.",
        buttons: [
          { text: "Restore Kubernetes Clusters", href: productUrl, variant: "primary" as const },
          { text: "Disaster recovery guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Cluster Restore Features",
          items: [
            "Granular recovery",
            "Cross-cluster migration",
            "Disaster recovery",
            "Point-in-time restore",
            "Selective restoration",
            "Resource mapping",
            "Validation testing",
            "Rollback capabilities"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Cluster Restore Center",
          description: "Kubernetes cluster recovery and migration management"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Complete Kubernetes workload protection with automated scheduling",
      description: "Comprehensive Kubernetes protection with automated backup scheduling, persistent volume snapshots, and namespace-level recovery for cloud-native applications and microservices.",
      link: {
        text: "Learn about Kubernetes protection",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Intelligent snapshot scheduling with policy-based automation",
      description: "Advanced snapshot scheduling with policy-based automation, retention management, and cross-cluster replication for reliable Kubernetes data protection and compliance."
    },
    {
      number: "03",
      title: "Sophisticated backup orchestration with application consistency", 
      description: "Advanced backup orchestration with application-consistent snapshots, resource dependencies, and coordinated backup workflows for complex Kubernetes environments and stateful applications."
    },
    {
      number: "04",
      title: "Enterprise cluster restore with disaster recovery automation",
      description: "Enterprise-grade cluster restore with granular recovery options, cross-cluster migration, and disaster recovery automation for Kubernetes infrastructure resilience and business continuity."
    }
  ];

  const customerReference = {
    title: "Kubernetes Protection Success",
    company: "DevOps team protects 200+ microservices with zero data loss and 99.9% backup success rate",
    description: "A cloud-native organization transformed their Kubernetes data protection using KubeSafe, achieving comprehensive workload protection while maintaining operational efficiency and zero data loss.",
    image: "/kube-safe.svg",
    linkText: "Read the Kubernetes protection story",
    linkHref: docsUrl
  };

  const customerLogos = [
    {
      name: "Velero",
      image: "https://logo.clearbit.com/velero.io",
      href: docsUrl,
      alt: "Velero logo"
    },
    {
      name: "Kasten",
      image: "https://logo.clearbit.com/kasten.io",
      href: docsUrl,
      alt: "Kasten logo"
    },
    {
      name: "Portworx",
      image: "https://logo.clearbit.com/portworx.com",
      href: docsUrl, 
      alt: "Portworx logo"
    },
    {
      name: "Longhorn",
      image: "https://logo.clearbit.com/longhorn.io",
      href: docsUrl,
      alt: "Longhorn logo"
    },
    {
      name: "OpenEBS", 
      image: "https://logo.clearbit.com/openebs.io",
      href: docsUrl,
      alt: "OpenEBS logo"
    },
    {
      name: "Rook",
      image: "https://logo.clearbit.com/rook.io",
      href: docsUrl,
      alt: "Rook logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in KubeSafe",
      content: {
        title: "Latest Kubernetes backup and protection features",
        description: "Stay updated with the newest capabilities in Kubernetes protection, snapshot scheduling, and cluster restore for modern container orchestration and cloud-native operations.",
        image: "/kube-safe.svg",
        links: [
          { text: "New protection features", href: docsUrl },
          { text: "Snapshot improvements", href: docsUrl },
          { text: "Backup orchestration updates", href: docsUrl },
          { text: "Restore enhancements", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare Kubernetes backup solutions",
      content: {
        title: "Why choose KubeSafe",
        description: "Compare our Kubernetes protection capabilities with other solutions and see why DevOps teams choose us for comprehensive workload backup and cluster-level recovery.",
        image: "/kube-safe.svg",
        links: [
          { text: "Kubernetes backup comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master KubeSafe",
      content: {
        title: "Learn Kubernetes backup and disaster recovery best practices",
        description: "Master Kubernetes protection with comprehensive guides, backup strategies, and training materials for DevOps engineers and platform professionals.",
        image: "/kube-safe.svg",
        links: [
          { text: "Kubernetes backup deployment guide", href: docsUrl },
          { text: "Data protection best practices", href: docsUrl },
          { text: "Disaster recovery strategies", href: docsUrl },
          { text: "Troubleshooting guide", href: docsUrl }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Protect Kubernetes",
      href: productUrl,
      icon: "demo"
    },
    {
      title: "Schedule snapshots",
      href: docsUrl,
      icon: "tour"
    },
    {
      title: "Contact DevOps team",
      href: productUrl,
      icon: "contact"
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="sr-only">KubeSafe | Kubernetes Snapshot & Backup Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="KubeSafe"
          description="Protect Kubernetes workloads with scheduled snapshots, backups, and cluster-level restore operations for comprehensive data protection. Cloud-native backup platform with automated scheduling and enterprise-grade recovery capabilities for Kubernetes environments."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Kubernetes Protection Console",
            description: "Kubernetes workload backup and cluster protection management"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="KubeSafe" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose KubeSafe?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Kubernetes protection success stories"
          description="Learn why DevOps teams and platform engineers choose KubeSafe for comprehensive Kubernetes backup and advanced cluster protection capabilities."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Kubernetes Protection Guide"
          description="We've compiled Kubernetes backup strategies, snapshot optimization techniques, and disaster recovery best practices for modern container orchestration and cloud-native infrastructure."
          image="/kube-safe.svg"
          buttonText="Get the Kubernetes protection guide"
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
