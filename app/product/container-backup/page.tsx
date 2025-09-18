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

export default function ContainerBackupPage() {
  const { productUrl, docsUrl } = getAppUrls("container-backup");
  
  const ctaButtons = [
    {
      text: "Deploy Velero",
      href: productUrl,
      variant: "primary" as const
    },
    {
      text: "Backup Guide",
      href: docsUrl,
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "kubernetes-backup",
      image: "/velero-backup.svg",
      title: "Complete Kubernetes Backup Solution",
      description: "Comprehensive backup and restore for Kubernetes cluster resources, configurations, and persistent volumes with automated scheduling and retention policies.",
      ctaText: "Setup Kubernetes backup",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "persistent-volumes",
      image: "/velero-backup.svg",
      title: "Persistent Volume Protection",
      description: "Advanced persistent volume backup with snapshot integration, cross-cloud restore capabilities, and volume data consistency for stateful applications.",
      ctaText: "Learn about volume backup",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "scheduling-policies",
      image: "/velero-backup.svg",
      title: "Automated Scheduling & Retention",
      description: "Flexible backup scheduling with customizable retention policies, automated cleanup, and policy-based backup management for operational efficiency.",
      ctaText: "View scheduling features",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "disaster-recovery",
      image: "/velero-backup.svg",
      title: "Disaster Recovery & Migration",
      description: "Complete disaster recovery capabilities with cross-cluster restore, migration workflows, and infrastructure-as-code backup strategies for business continuity.",
      ctaText: "See disaster recovery",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "cluster-backup",
      title: "Cluster Backup",
      content: {
        title: "Comprehensive Kubernetes cluster backup and restore",
        description: "Complete backup solution for Kubernetes clusters including resources, configurations, RBAC policies, and custom resources with automated scheduling and monitoring.",
        buttons: [
          { text: "Setup Cluster Backup", href: productUrl, variant: "primary" as const },
          { text: "Cluster backup guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Cluster Backup Features",
          items: [
            "Full cluster backup",
            "Resource restoration",
            "RBAC backup",
            "Custom resource support",
            "Namespace filtering",
            "Label selectors",
            "Automated scheduling",
            "Backup validation"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Kubernetes Backup Console",
          description: "Cluster backup and restoration management interface"
        }
      }
    },
    {
      id: "volume-backup",
      title: "Volume Backup",
      content: {
        title: "Advanced persistent volume backup and restoration",
        description: "Sophisticated persistent volume backup with snapshot integration, cross-cloud compatibility, and volume data consistency for stateful application protection.",
        buttons: [
          { text: "Configure Volume Backup", href: productUrl, variant: "primary" as const },
          { text: "Volume backup best practices", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Volume Backup Features",
          items: [
            "Persistent volume snapshots",
            "Cross-cloud restore",
            "Data consistency",
            "Volume resizing",
            "Storage class mapping",
            "Encryption support",
            "Compression options",
            "Performance optimization"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Volume Backup Management",
          description: "Persistent volume backup and snapshot management console"
        }
      }
    },
    {
      id: "backup-scheduling",
      title: "Backup Scheduling",
      content: {
        title: "Automated backup scheduling and retention management",
        description: "Flexible backup scheduling with customizable retention policies, automated cleanup, and policy-based backup management for efficient operational workflows.",
        buttons: [
          { text: "Create Backup Schedule", href: productUrl, variant: "primary" as const },
          { text: "Scheduling configuration", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Backup Scheduling Features",
          items: [
            "Cron-based scheduling",
            "Retention policies",
            "Automated cleanup",
            "Backup windows",
            "Priority scheduling",
            "Resource throttling",
            "Notification alerts",
            "Schedule validation"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Backup Schedule Configuration",
          description: "Automated backup scheduling and retention policy management"
        }
      }
    },
    {
      id: "restore-migration",
      title: "Restore & Migration",
      content: {
        title: "Complete disaster recovery and cluster migration capabilities",
        description: "Advanced restore and migration features with cross-cluster compatibility, selective restoration, and infrastructure migration for comprehensive disaster recovery scenarios.",
        buttons: [
          { text: "Start Restore Process", href: productUrl, variant: "primary" as const },
          { text: "Migration strategies", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Restore & Migration Features",
          items: [
            "Cross-cluster restore",
            "Selective restoration",
            "Namespace mapping",
            "Resource transformation",
            "Migration workflows",
            "Rollback capabilities",
            "Validation checks",
            "Progress monitoring"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Restore & Migration Center",
          description: "Disaster recovery and cluster migration management interface"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Complete Kubernetes cluster and persistent volume backup",
      description: "Comprehensive backup solution covering Kubernetes resources, configurations, RBAC policies, and persistent volumes with automated scheduling and retention management.",
      link: {
        text: "Learn about Kubernetes backup",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Advanced persistent volume protection and restoration",
      description: "Sophisticated persistent volume backup with snapshot integration, cross-cloud restore capabilities, and data consistency guarantees for stateful application protection."
    },
    {
      number: "03",
      title: "Automated scheduling with flexible retention policies", 
      description: "Intelligent backup scheduling with customizable retention policies, automated cleanup, and policy-based management for efficient operational workflows and compliance."
    },
    {
      number: "04",
      title: "Enterprise disaster recovery and migration capabilities",
      description: "Complete disaster recovery with cross-cluster restore, selective restoration, migration workflows, and infrastructure-as-code backup strategies for business continuity."
    }
  ];

  const customerReference = {
    title: "Kubernetes Backup Transformation",
    company: "Cloud-native company achieves 99.9% backup reliability with automated Kubernetes protection",
    description: "A fast-growing cloud-native company implemented comprehensive Kubernetes backup using VeleroBackup, achieving enterprise-grade data protection while reducing backup management overhead by 75%.",
    image: "/velero-backup.svg",
    linkText: "Read the Kubernetes backup story",
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
      name: "VMware Tanzu",
      image: "https://logo.clearbit.com/tanzu.vmware.com",
      href: docsUrl,
      alt: "VMware Tanzu logo"
    },
    {
      name: "Kubernetes",
      image: "https://logo.clearbit.com/kubernetes.io",
      href: docsUrl, 
      alt: "Kubernetes logo"
    },
    {
      name: "Restic",
      image: "https://logo.clearbit.com/restic.net",
      href: docsUrl,
      alt: "Restic logo"
    },
    {
      name: "Minio", 
      image: "https://logo.clearbit.com/min.io",
      href: docsUrl,
      alt: "Minio logo"
    },
    {
      name: "AWS EBS",
      image: "https://logo.clearbit.com/aws.amazon.com",
      href: docsUrl,
      alt: "AWS EBS logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in VeleroBackup",
      content: {
        title: "Latest Kubernetes backup and restore features",
        description: "Stay updated with the newest capabilities in Kubernetes backup, persistent volume protection, and disaster recovery for modern containerized applications.",
        image: "/velero-backup.svg",
        links: [
          { text: "New backup features", href: docsUrl },
          { text: "Volume protection improvements", href: docsUrl },
          { text: "Scheduling enhancements", href: docsUrl },
          { text: "Restore capabilities", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare Kubernetes backup solutions",
      content: {
        title: "Why choose VeleroBackup",
        description: "Compare our Kubernetes backup capabilities with other solutions and see why DevOps teams choose us for comprehensive cluster protection and disaster recovery.",
        image: "/velero-backup.svg",
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
      title: "Master VeleroBackup",
      content: {
        title: "Learn Kubernetes backup best practices",
        description: "Master Kubernetes backup and disaster recovery with comprehensive guides, best practices, and training materials for DevOps engineers and platform teams.",
        image: "/velero-backup.svg",
        links: [
          { text: "Kubernetes backup deployment guide", href: docsUrl },
          { text: "Backup strategy best practices", href: docsUrl },
          { text: "Disaster recovery planning", href: docsUrl },
          { text: "Troubleshooting guide", href: docsUrl }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Deploy Velero",
      href: productUrl,
      icon: "demo"
    },
    {
      title: "Backup guide",
      href: docsUrl,
      icon: "tour"
    },
    {
      title: "Contact platform team",
      href: productUrl,
      icon: "contact"
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="sr-only">VeleroBackup | Kubernetes Backup & Restore Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="VeleroBackup"
          description="Backup and restore Kubernetes cluster resources and persistent volumes with scheduling and retention policies. Enterprise-grade Kubernetes backup solution with automated protection, disaster recovery capabilities, and cross-cluster migration support."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Kubernetes Backup Console",
            description: "Comprehensive cluster backup and disaster recovery management"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="VeleroBackup" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose VeleroBackup?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Kubernetes backup success stories"
          description="Learn why DevOps engineers and platform teams choose VeleroBackup for comprehensive Kubernetes protection and enterprise disaster recovery capabilities."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Kubernetes Backup Guide"
          description="We've compiled Kubernetes backup strategies, disaster recovery planning, and cluster protection best practices for modern containerized applications and cloud-native infrastructure."
          image="/velero-backup.svg"
          buttonText="Get the backup guide"
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
