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

export default function BackupUtilityPage() {
  const { productUrl, docsUrl } = getAppUrls("backup-utility");
  
  const ctaButtons = [
    {
      text: "Start Backup",
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
      id: "incremental-backup",
      image: "/backup-utility.svg",
      title: "Incremental Backup & Versioning",
      description: "Efficient incremental backup with intelligent versioning, change detection, and optimized storage utilization for personal and small business data protection.",
      ctaText: "Setup incremental backup",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "vm-file-backup",
      image: "/backup-utility.svg",
      title: "VM & File Store Protection",
      description: "Comprehensive backup for individual VMs and file stores with automated scheduling, retention policies, and reliable data protection for small-scale environments.",
      ctaText: "Protect VMs and files",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "lightweight-solution",
      image: "/backup-utility.svg",
      title: "Lightweight Backup Solution",
      description: "Resource-efficient backup tooling with minimal system impact, easy deployment, and simple configuration for personal and small business environments.",
      ctaText: "Deploy lightweight backup",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "automated-scheduling",
      image: "/backup-utility.svg",
      title: "Automated Scheduling & Retention",
      description: "Intelligent backup scheduling with customizable retention policies, automated cleanup, and policy-based backup management for worry-free data protection.",
      ctaText: "Schedule automated backups",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "personal-backup",
      title: "Personal Backup",
      content: {
        title: "Personal and small business backup solution",
        description: "Comprehensive backup solution designed for personal use and small businesses with easy setup, automated protection, and reliable data recovery capabilities.",
        buttons: [
          { text: "Setup Personal Backup", href: productUrl, variant: "primary" as const },
          { text: "Personal backup guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Personal Backup Features",
          items: [
            "Easy setup wizard",
            "Automated protection",
            "File versioning",
            "Quick recovery",
            "Minimal configuration",
            "User-friendly interface",
            "Local & cloud storage",
            "Backup verification"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Personal Backup Console",
          description: "Simple backup management for personal and small business use"
        }
      }
    },
    {
      id: "vm-protection",
      title: "VM Protection",
      content: {
        title: "Virtual machine backup and protection platform",
        description: "Specialized VM backup with snapshot-based protection, consistent backups, and quick recovery for virtualized environments and individual virtual machines.",
        buttons: [
          { text: "Backup Virtual Machines", href: productUrl, variant: "primary" as const },
          { text: "VM backup best practices", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "VM Protection Features",
          items: [
            "VM snapshot backup",
            "Consistent state capture",
            "Quick VM recovery",
            "Incremental changes",
            "Live backup support",
            "Multiple hypervisors",
            "Automated scheduling",
            "Recovery verification"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "VM Backup Management",
          description: "Virtual machine backup and recovery administration"
        }
      }
    },
    {
      id: "file-versioning",
      title: "File Versioning",
      content: {
        title: "Intelligent file versioning and incremental backup system",
        description: "Advanced file versioning with incremental backup, change tracking, and efficient storage utilization for comprehensive file protection and recovery.",
        buttons: [
          { text: "Enable File Versioning", href: productUrl, variant: "primary" as const },
          { text: "Versioning configuration", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "File Versioning Features",
          items: [
            "Incremental backup",
            "Change detection",
            "Version history",
            "Point-in-time recovery",
            "Storage optimization",
            "Deduplication",
            "Compression",
            "Retention policies"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "File Versioning Interface",
          description: "Incremental backup and file version management"
        }
      }
    },
    {
      id: "backup-management",
      title: "Backup Management",
      content: {
        title: "Comprehensive backup scheduling and retention management",
        description: "Intelligent backup management with automated scheduling, flexible retention policies, and comprehensive monitoring for reliable data protection workflows.",
        buttons: [
          { text: "Manage Backup Schedules", href: productUrl, variant: "primary" as const },
          { text: "Backup management guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Backup Management Features",
          items: [
            "Automated scheduling",
            "Flexible retention",
            "Backup monitoring",
            "Alert notifications",
            "Storage management",
            "Performance tracking",
            "Backup verification",
            "Recovery testing"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Backup Management Center",
          description: "Backup scheduling and retention policy management"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Lightweight backup solution for personal and small business use",
      description: "Resource-efficient backup tooling with minimal system impact, easy deployment, and simple configuration designed specifically for personal and small business environments.",
      link: {
        text: "Learn about lightweight backup",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Intelligent incremental backup with efficient versioning",
      description: "Advanced incremental backup with intelligent versioning, change detection, and optimized storage utilization for efficient and cost-effective data protection."
    },
    {
      number: "03",
      title: "Comprehensive VM and file store protection", 
      description: "Specialized backup capabilities for individual VMs and file stores with automated scheduling, retention policies, and reliable data protection for diverse storage needs."
    },
    {
      number: "04",
      title: "Automated scheduling with flexible retention policies",
      description: "Intelligent backup scheduling with customizable retention policies, automated cleanup, and policy-based management for worry-free and efficient data protection."
    }
  ];

  const customerReference = {
    title: "Small Business Backup Success",
    company: "Small business achieves 99.9% data protection with automated backup solution",
    description: "A growing small business implemented comprehensive data protection using BackupUtility, achieving reliable backup automation while reducing complexity and maintaining cost efficiency.",
    image: "/backup-utility.svg",
    linkText: "Read the small business backup story",
    linkHref: docsUrl
  };

  const customerLogos = [
    {
      name: "Restic",
      image: "https://logo.clearbit.com/restic.net",
      href: docsUrl,
      alt: "Restic logo"
    },
    {
      name: "Duplicity",
      image: "https://logo.clearbit.com/duplicity.nongnu.org",
      href: docsUrl,
      alt: "Duplicity logo"
    },
    {
      name: "BorgBackup",
      image: "https://logo.clearbit.com/borgbackup.org",
      href: docsUrl, 
      alt: "BorgBackup logo"
    },
    {
      name: "Rclone",
      image: "https://logo.clearbit.com/rclone.org",
      href: docsUrl,
      alt: "Rclone logo"
    },
    {
      name: "Time Machine", 
      image: "https://logo.clearbit.com/apple.com",
      href: docsUrl,
      alt: "Time Machine logo"
    },
    {
      name: "File History",
      image: "https://logo.clearbit.com/microsoft.com",
      href: docsUrl,
      alt: "File History logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in BackupUtility",
      content: {
        title: "Latest personal and small business backup features",
        description: "Stay updated with the newest capabilities in incremental backup, file versioning, and automated scheduling for personal and small business data protection.",
        image: "/backup-utility.svg",
        links: [
          { text: "New backup features", href: docsUrl },
          { text: "Versioning improvements", href: docsUrl },
          { text: "Scheduling enhancements", href: docsUrl },
          { text: "Storage optimization", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare personal backup solutions",
      content: {
        title: "Why choose BackupUtility",
        description: "Compare our personal backup capabilities with other solutions and see why individuals and small businesses choose us for reliable and efficient data protection.",
        image: "/backup-utility.svg",
        links: [
          { text: "Personal backup comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Setup guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master BackupUtility",
      content: {
        title: "Learn personal backup best practices",
        description: "Master personal data protection with comprehensive guides, backup strategies, and training materials for individuals and small business owners.",
        image: "/backup-utility.svg",
        links: [
          { text: "Personal backup setup guide", href: docsUrl },
          { text: "Backup strategy best practices", href: docsUrl },
          { text: "Recovery planning", href: docsUrl },
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
      title: "Backup guide",
      href: docsUrl,
      icon: "tour"
    },
    {
      title: "Contact support",
      href: productUrl,
      icon: "contact"
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="sr-only">BackupUtility | Incremental Backup & Versioning Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="BackupUtility"
          description="Lightweight backup tooling for individual VMs and file stores with scheduling and retention for personal and small business use. Incremental backup solution with intelligent versioning and automated data protection."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Personal Backup Console",
            description: "Lightweight backup and file versioning management"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="BackupUtility" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose BackupUtility?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Personal backup success stories"
          description="Learn why individuals and small business owners choose BackupUtility for reliable incremental backup and comprehensive data protection."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Personal Backup Guide"
          description="We've compiled backup strategies, data protection techniques, and recovery planning best practices for personal users and small business data protection needs."
          image="/backup-utility.svg"
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
