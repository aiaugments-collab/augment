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

export default function BackupBridgePage() {
  const { productUrl, docsUrl } = getAppUrls("backup-bridge");
  
  const ctaButtons = [
    {
      text: "Start Backup",
      href: productUrl,
      variant: "primary" as const
    },
    {
      text: "View Documentation",
      href: docsUrl,
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "vm-backup",
      image: "/backup-bridge.svg",
      title: "Enterprise VM Backup Solution",
      description: "Comprehensive virtual machine backup with agent-based protection, incremental snapshots, and automated recovery for enterprise virtualization environments.",
      ctaText: "Backup VMs",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "file-backup",
      image: "/backup-bridge.svg",
      title: "Advanced File Backup System",
      description: "Intelligent file backup with deduplication, versioning, and cross-platform support for comprehensive data protection across all file systems.",
      ctaText: "Protect files",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "deduplication",
      image: "/backup-bridge.svg",
      title: "Smart Deduplication Engine",
      description: "Advanced deduplication technology that reduces storage requirements by up to 95% while maintaining fast backup and restore performance.",
      ctaText: "Learn deduplication",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "incremental-snapshots",
      image: "/backup-bridge.svg",
      title: "Incremental Snapshot Technology",
      description: "Efficient incremental backups with point-in-time recovery, automated scheduling, and minimal impact on production systems.",
      ctaText: "View snapshots",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "vm-protection",
      title: "VM Protection",
      content: {
        title: "Comprehensive virtual machine backup and recovery",
        description: "Enterprise-grade VM backup with agent-based protection, application-consistent snapshots, and automated recovery for all major virtualization platforms.",
        buttons: [
          { text: "Protect VMs", href: productUrl, variant: "primary" as const },
          { text: "VM backup guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "VM Protection Features",
          items: [
            "Agent-based backup",
            "Application consistency",
            "Live VM backup",
            "Instant recovery",
            "Cross-platform support",
            "Automated scheduling",
            "Resource optimization",
            "Disaster recovery"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "VM Backup Console",
          description: "Virtual machine backup and recovery management"
        }
      }
    },
    {
      id: "file-protection",
      title: "File Protection",
      content: {
        title: "Advanced file and folder backup system",
        description: "Intelligent file backup with deduplication, versioning, and cross-platform support for comprehensive data protection across Windows, Linux, and macOS systems.",
        buttons: [
          { text: "Backup Files", href: productUrl, variant: "primary" as const },
          { text: "File backup best practices", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "File Protection Features",
          items: [
            "Cross-platform support",
            "Real-time backup",
            "File versioning",
            "Selective restore",
            "Bandwidth throttling",
            "Encryption support",
            "Compression algorithms",
            "Change detection"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "File Backup Management",
          description: "File and folder backup configuration and monitoring"
        }
      }
    },
    {
      id: "storage-optimization",
      title: "Storage Optimization",
      content: {
        title: "Advanced deduplication and storage efficiency",
        description: "Intelligent storage optimization with advanced deduplication, compression, and storage tiering for maximum efficiency and cost reduction.",
        buttons: [
          { text: "Optimize Storage", href: productUrl, variant: "primary" as const },
          { text: "Storage optimization guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Storage Optimization Features",
          items: [
            "Global deduplication",
            "Compression algorithms",
            "Storage tiering",
            "Capacity forecasting",
            "Cost optimization",
            "Performance tuning",
            "Archive management",
            "Retention policies"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Storage Optimization Interface",
          description: "Deduplication and storage efficiency management"
        }
      }
    },
    {
      id: "recovery-management",
      title: "Recovery Management",
      content: {
        title: "Comprehensive backup recovery and restoration",
        description: "Advanced recovery capabilities with point-in-time restore, granular recovery options, and automated disaster recovery for business continuity.",
        buttons: [
          { text: "Restore Data", href: productUrl, variant: "primary" as const },
          { text: "Recovery procedures", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Recovery Management Features",
          items: [
            "Point-in-time recovery",
            "Granular restore",
            "Instant recovery",
            "Cross-platform restore",
            "Automated failover",
            "Recovery testing",
            "Performance monitoring",
            "Recovery verification"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Recovery Management Center",
          description: "Backup recovery and disaster recovery orchestration"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Agent-based VM and file backup with enterprise features",
      description: "Comprehensive backup solution for virtual machines and files with agent-based protection, application consistency, and automated recovery across all platforms.",
      link: {
        text: "Learn about backup capabilities",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Advanced deduplication reducing storage by up to 95%",
      description: "Intelligent deduplication technology with global efficiency, compression algorithms, and storage optimization for maximum cost reduction and performance."
    },
    {
      number: "03",
      title: "Incremental snapshots with point-in-time recovery", 
      description: "Efficient incremental backup technology with application-consistent snapshots, minimal system impact, and granular point-in-time recovery capabilities."
    },
    {
      number: "04",
      title: "Enterprise disaster recovery and business continuity",
      description: "Complete disaster recovery solution with automated failover, recovery testing, and business continuity features for enterprise-grade data protection."
    }
  ];

  const customerReference = {
    title: "Backup Infrastructure Transformation",
    company: "Enterprise reduces backup storage costs by 90% with intelligent deduplication",
    description: "A global enterprise transformed their backup infrastructure using BackupBridge, achieving massive storage cost reductions while improving recovery times and reliability.",
    image: "/backup-bridge.svg",
    linkText: "Read the backup transformation story",
    linkHref: docsUrl
  };

  const customerLogos = [
    {
      name: "Bacula",
      image: "https://logo.clearbit.com/bacula.org",
      href: docsUrl,
      alt: "Bacula logo"
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
      name: "Veritas NetBackup",
      image: "https://logo.clearbit.com/veritas.com",
      href: docsUrl,
      alt: "Veritas NetBackup logo"
    },
    {
      name: "Dell EMC", 
      image: "https://logo.clearbit.com/dellemc.com",
      href: docsUrl,
      alt: "Dell EMC logo"
    },
    {
      name: "IBM Spectrum Protect",
      image: "https://logo.clearbit.com/ibm.com",
      href: docsUrl,
      alt: "IBM Spectrum Protect logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in BackupBridge",
      content: {
        title: "Latest backup and recovery features",
        description: "Stay updated with the newest capabilities in VM backup, file protection, and storage optimization for modern enterprise backup infrastructure.",
        image: "/backup-bridge.svg",
        links: [
          { text: "New backup features", href: docsUrl },
          { text: "Deduplication improvements", href: docsUrl },
          { text: "Recovery enhancements", href: docsUrl },
          { text: "Storage optimization", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare backup solutions",
      content: {
        title: "Why choose BackupBridge",
        description: "Compare our backup capabilities with other solutions and see why IT teams choose us for comprehensive VM and file backup with advanced deduplication.",
        image: "/backup-bridge.svg",
        links: [
          { text: "Backup solution comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master BackupBridge",
      content: {
        title: "Learn backup and recovery best practices",
        description: "Master enterprise backup with comprehensive guides, best practices, and training materials for backup administrators and IT professionals.",
        image: "/backup-bridge.svg",
        links: [
          { text: "Backup deployment guide", href: docsUrl },
          { text: "Recovery planning best practices", href: docsUrl },
          { text: "Storage optimization strategies", href: docsUrl },
          { text: "Troubleshooting guide", href: docsUrl }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Start backup",
      href: productUrl,
      icon: "demo"
    },
    {
      title: "View documentation",
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
        <h1 className="sr-only">BackupBridge | VM & File Backup Orchestration Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="BackupBridge"
          description="Agent-based backup for VMs and files with deduplication and incremental snapshot support. Enterprise backup orchestration platform with advanced storage optimization, cross-platform protection, and comprehensive disaster recovery capabilities."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Backup Orchestration Console",
            description: "VM and file backup management with deduplication"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="BackupBridge" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose BackupBridge?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Backup infrastructure success stories"
          description="Learn why backup administrators and IT professionals choose BackupBridge for comprehensive VM and file backup with enterprise deduplication capabilities."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Enterprise Backup Guide"
          description="We've compiled backup strategies, deduplication techniques, and disaster recovery best practices for modern enterprise backup infrastructure and data protection."
          image="/backup-bridge.svg"
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
