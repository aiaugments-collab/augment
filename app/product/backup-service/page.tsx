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

export default function BackupServicePage() {
  const { productUrl, docsUrl } = getAppUrls("backup-service");
  
  const ctaButtons = [
    {
      text: "Start Backup Service",
      href: productUrl,
      variant: "primary" as const
    },
    {
      text: "Manage Lifecycles",
      href: docsUrl,
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "cloud-native-backup",
      image: "/vault-backup.svg",
      title: "Cloud-Native Backup Platform",
      description: "Advanced cloud-native backup service with automated scheduling, cross-region replication, and intelligent deduplication for optimal storage efficiency and data protection.",
      ctaText: "Deploy backup service",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "lifecycle-policies",
      image: "/vault-backup.svg",
      title: "Intelligent Lifecycle Management",
      description: "Sophisticated lifecycle policies with automated retention management, tiered storage optimization, and compliance-driven data archival for cost-effective backup strategies.",
      ctaText: "Configure lifecycle policies",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "restore-orchestration",
      image: "/vault-backup.svg",
      title: "Advanced Restore Orchestration",
      description: "Comprehensive restore orchestration with point-in-time recovery, granular restoration options, and automated validation for reliable data recovery workflows.",
      ctaText: "Orchestrate restores",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "workload-protection",
      image: "/vault-backup.svg",
      title: "Cloud Workload Protection",
      description: "Complete cloud workload protection with application-aware backups, container-native snapshots, and database consistency for comprehensive data protection strategies.",
      ctaText: "Protect cloud workloads",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "backup-platform",
      title: "Backup Platform",
      content: {
        title: "Cloud-native backup service with automated protection",
        description: "Advanced cloud-native backup platform with automated scheduling, cross-region replication, and intelligent deduplication for comprehensive data protection.",
        buttons: [
          { text: "Deploy Backup Service", href: productUrl, variant: "primary" as const },
          { text: "Backup strategies guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Backup Platform Features",
          items: [
            "Automated scheduling",
            "Cross-region replication",
            "Intelligent deduplication",
            "Encryption at rest",
            "Compression optimization",
            "Bandwidth throttling",
            "Progress monitoring",
            "Error handling"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Backup Management Console",
          description: "Cloud-native backup service and data protection management"
        }
      }
    },
    {
      id: "lifecycle-management",
      title: "Lifecycle Management",
      content: {
        title: "Intelligent lifecycle policies with automated retention",
        description: "Sophisticated lifecycle management with automated retention policies, tiered storage optimization, and compliance-driven data archival for cost-effective backup strategies.",
        buttons: [
          { text: "Configure Lifecycle Policies", href: productUrl, variant: "primary" as const },
          { text: "Lifecycle optimization guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Lifecycle Management Features",
          items: [
            "Automated retention",
            "Tiered storage",
            "Compliance archival",
            "Cost optimization",
            "Policy enforcement",
            "Audit trails",
            "Legal holds",
            "Data governance"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Lifecycle Policy Console",
          description: "Backup retention and lifecycle management interface"
        }
      }
    },
    {
      id: "restore-orchestration",
      title: "Restore Orchestration",
      content: {
        title: "Advanced restore orchestration with point-in-time recovery",
        description: "Comprehensive restore orchestration with point-in-time recovery, granular restoration options, and automated validation for reliable data recovery workflows.",
        buttons: [
          { text: "Orchestrate Restores", href: productUrl, variant: "primary" as const },
          { text: "Restore best practices", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Restore Orchestration Features",
          items: [
            "Point-in-time recovery",
            "Granular restoration",
            "Automated validation",
            "Cross-platform restore",
            "Disaster recovery",
            "Test restores",
            "Recovery verification",
            "RTO optimization"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Restore Orchestration Interface",
          description: "Data recovery and restore workflow management"
        }
      }
    },
    {
      id: "workload-protection",
      title: "Workload Protection",
      content: {
        title: "Complete cloud workload protection with application awareness",
        description: "Comprehensive cloud workload protection with application-aware backups, container-native snapshots, and database consistency for modern application architectures.",
        buttons: [
          { text: "Protect Cloud Workloads", href: productUrl, variant: "primary" as const },
          { text: "Workload protection guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Workload Protection Features",
          items: [
            "Application-aware backups",
            "Container snapshots",
            "Database consistency",
            "Microservices protection",
            "Stateful workloads",
            "Volume snapshots",
            "Cross-cloud backup",
            "Hybrid protection"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Workload Protection Center",
          description: "Cloud workload backup and protection management"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Cloud-native backup service with intelligent automation",
      description: "Advanced cloud-native backup platform with automated scheduling, cross-region replication, and intelligent deduplication for comprehensive data protection and storage efficiency.",
      link: {
        text: "Learn about cloud-native backup",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Intelligent lifecycle policies with cost optimization",
      description: "Sophisticated lifecycle management with automated retention policies, tiered storage optimization, and compliance-driven data archival for cost-effective backup strategies."
    },
    {
      number: "03",
      title: "Advanced restore orchestration with point-in-time recovery", 
      description: "Comprehensive restore orchestration with point-in-time recovery, granular restoration options, and automated validation for reliable data recovery workflows and disaster preparedness."
    },
    {
      number: "04",
      title: "Complete cloud workload protection with application awareness",
      description: "Comprehensive cloud workload protection with application-aware backups, container-native snapshots, and database consistency for modern application architectures and microservices."
    }
  ];

  const customerReference = {
    title: "Data Protection Success",
    company: "Enterprise reduces backup costs by 60% while improving RTO from hours to minutes using cloud-native backup",
    description: "A global enterprise transformed their data protection strategy using VaultBackup, achieving significant cost savings while dramatically improving recovery time objectives and operational efficiency.",
    image: "/vault-backup.svg",
    linkText: "Read the data protection story",
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
      name: "Veeam",
      image: "https://logo.clearbit.com/veeam.com",
      href: docsUrl,
      alt: "Veeam logo"
    },
    {
      name: "Commvault",
      image: "https://logo.clearbit.com/commvault.com",
      href: docsUrl, 
      alt: "Commvault logo"
    },
    {
      name: "Rubrik",
      image: "https://logo.clearbit.com/rubrik.com",
      href: docsUrl,
      alt: "Rubrik logo"
    },
    {
      name: "Cohesity", 
      image: "https://logo.clearbit.com/cohesity.com",
      href: docsUrl,
      alt: "Cohesity logo"
    },
    {
      name: "Druva",
      image: "https://logo.clearbit.com/druva.com",
      href: docsUrl,
      alt: "Druva logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in VaultBackup",
      content: {
        title: "Latest backup service and data protection features",
        description: "Stay updated with the newest capabilities in cloud-native backup, lifecycle management, and restore orchestration for modern data protection strategies.",
        image: "/vault-backup.svg",
        links: [
          { text: "New backup features", href: docsUrl },
          { text: "Lifecycle improvements", href: docsUrl },
          { text: "Restore enhancements", href: docsUrl },
          { text: "Workload protection updates", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare backup solutions",
      content: {
        title: "Why choose VaultBackup",
        description: "Compare our cloud-native backup capabilities with other solutions and see why enterprises choose us for comprehensive data protection and restore orchestration.",
        image: "/vault-backup.svg",
        links: [
          { text: "Backup service comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master VaultBackup",
      content: {
        title: "Learn data protection and backup best practices",
        description: "Master cloud-native backup with comprehensive guides, data protection strategies, and training materials for infrastructure and backup professionals.",
        image: "/vault-backup.svg",
        links: [
          { text: "Backup service deployment guide", href: docsUrl },
          { text: "Data protection best practices", href: docsUrl },
          { text: "Disaster recovery strategies", href: docsUrl },
          { text: "Troubleshooting guide", href: docsUrl }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Start backup service",
      href: productUrl,
      icon: "demo"
    },
    {
      title: "Manage lifecycles",
      href: docsUrl,
      icon: "tour"
    },
    {
      title: "Contact backup team",
      href: productUrl,
      icon: "contact"
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="sr-only">VaultBackup | Cloud-Native Backup Service Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="VaultBackup"
          description="Managed backup service for cloud workloads with lifecycle policies and restore orchestration for comprehensive data protection. Cloud-native backup platform with intelligent automation and advanced restore capabilities for modern infrastructure."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Backup Service Console",
            description: "Cloud-native backup and data protection management"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="VaultBackup" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose VaultBackup?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Data protection success stories"
          description="Learn why enterprises and infrastructure teams choose VaultBackup for cloud-native backup services and comprehensive data protection capabilities."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Data Protection Guide"
          description="We've compiled backup strategies, lifecycle management techniques, and disaster recovery best practices for modern cloud-native infrastructure and data protection workflows."
          image="/vault-backup.svg"
          buttonText="Get the data protection guide"
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
