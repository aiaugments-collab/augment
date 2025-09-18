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

export default function DataProtectPage() {
  const { productUrl, docsUrl } = getAppUrls("backup-and-dr");
  
  const ctaButtons = [
    {
      text: "Start Free Trial",
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
      id: "enterprise-backup",
      image: "/data-protect.svg",
      title: "Enterprise Backup Solutions",
      description: "Comprehensive backup solutions for VMs, containers, databases, and object storage with automated scheduling and retention management.",
      ctaText: "Explore backup features",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "disaster-recovery",
      image: "/data-protect.svg",
      title: "Advanced Disaster Recovery",
      description: "Complete disaster recovery orchestration with automated failover, recovery testing, and business continuity planning for critical systems.",
      ctaText: "Learn about disaster recovery",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "snapshot-management",
      image: "/data-protect.svg",
      title: "Intelligent Snapshot Management",
      description: "Automated snapshot creation, management, and lifecycle policies with point-in-time recovery and space-efficient storage optimization.",
      ctaText: "View snapshot features",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "cloud-integration",
      image: "/data-protect.svg",
      title: "Multi-Cloud Integration",
      description: "Seamless integration with major cloud providers for hybrid backup strategies, cloud-native protection, and cross-cloud disaster recovery.",
      ctaText: "See cloud features",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "backup-solutions",
      title: "Backup Solutions",
      content: {
        title: "Comprehensive enterprise backup and data protection",
        description: "Protect all your critical data with comprehensive backup solutions for VMs, containers, databases, and object storage with automated scheduling and management.",
        buttons: [
          { text: "Setup Backup", href: productUrl, variant: "primary" as const },
          { text: "Backup strategies", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Backup Solution Features",
          items: [
            "VM & container backup",
            "Database protection",
            "Object storage backup",
            "Automated scheduling",
            "Incremental backups",
            "Deduplication & compression",
            "Retention policies",
            "Backup verification"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Backup Management Dashboard",
          description: "Comprehensive backup scheduling and monitoring interface"
        }
      }
    },
    {
      id: "disaster-recovery",
      title: "Disaster Recovery",
      content: {
        title: "Enterprise disaster recovery orchestration and planning",
        description: "Ensure business continuity with comprehensive disaster recovery orchestration, automated failover procedures, and recovery testing capabilities.",
        buttons: [
          { text: "Plan Disaster Recovery", href: productUrl, variant: "primary" as const },
          { text: "DR best practices", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Disaster Recovery Features",
          items: [
            "Automated failover",
            "Recovery orchestration",
            "Business continuity planning",
            "Recovery testing",
            "RTO/RPO monitoring",
            "Failback procedures",
            "DR site management",
            "Compliance reporting"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "Disaster Recovery Console",
          description: "DR orchestration and business continuity management"
        }
      }
    },
    {
      id: "snapshot-management",
      title: "Snapshot Management",
      content: {
        title: "Intelligent snapshot creation and lifecycle management",
        description: "Automated snapshot management with intelligent scheduling, lifecycle policies, and point-in-time recovery capabilities for optimal data protection.",
        buttons: [
          { text: "Manage Snapshots", href: productUrl, variant: "primary" as const },
          { text: "Snapshot policies", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Snapshot Management Features",
          items: [
            "Automated snapshot creation",
            "Lifecycle management",
            "Point-in-time recovery",
            "Space optimization",
            "Snapshot scheduling",
            "Retention automation",
            "Recovery verification",
            "Performance monitoring"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Snapshot Policy Configuration",
          description: "Automated snapshot scheduling and lifecycle management"
        }
      }
    },
    {
      id: "recovery-operations",
      title: "Recovery Operations",
      content: {
        title: "Advanced recovery operations and data restoration",
        description: "Streamlined recovery operations with granular restore options, recovery verification, and automated recovery workflows for minimal downtime.",
        buttons: [
          { text: "Perform Recovery", href: productUrl, variant: "primary" as const },
          { text: "Recovery procedures", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Recovery Operations Features",
          items: [
            "Granular recovery options",
            "Automated recovery workflows",
            "Recovery verification",
            "Cross-platform restore",
            "Bare metal recovery",
            "Application-aware recovery",
            "Recovery monitoring",
            "Recovery reporting"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Recovery Operations Center",
          description: "Data recovery and restoration management interface"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Comprehensive enterprise backup and data protection",
      description: "Complete backup solutions for VMs, containers, databases, and object storage with automated scheduling, deduplication, and intelligent retention management.",
      link: {
        text: "Learn about backup solutions",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Advanced disaster recovery orchestration and planning",
      description: "Ensure business continuity with automated failover, recovery orchestration, and comprehensive disaster recovery planning for critical business systems."
    },
    {
      number: "03",
      title: "Intelligent snapshot management and point-in-time recovery", 
      description: "Automated snapshot creation and lifecycle management with space optimization, intelligent scheduling, and granular point-in-time recovery capabilities."
    },
    {
      number: "04",
      title: "Multi-cloud integration and hybrid protection strategies",
      description: "Seamless integration with major cloud providers for hybrid backup strategies, cloud-native protection, and cross-cloud disaster recovery scenarios."
    }
  ];

  const customerReference = {
    title: "Data Protection Transformation",
    company: "Healthcare organization achieves 99.9% data recovery success rate",
    description: "A leading healthcare organization transformed their data protection strategy using DataProtect, achieving exceptional recovery success rates while ensuring compliance and minimizing downtime.",
    image: "/data-protect.svg",
    linkText: "Read the data protection success story",
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
      name: "Zerto",
      image: "https://logo.clearbit.com/zerto.com",
      href: docsUrl,
      alt: "Zerto logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in DataProtect",
      content: {
        title: "Latest backup and disaster recovery features",
        description: "Stay updated with the newest capabilities in enterprise backup, disaster recovery orchestration, and data protection for modern infrastructure environments.",
        image: "/data-protect.svg",
        links: [
          { text: "New backup features", href: docsUrl },
          { text: "DR improvements", href: docsUrl },
          { text: "Snapshot enhancements", href: docsUrl },
          { text: "Cloud integration updates", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare backup solutions",
      content: {
        title: "Why choose DataProtect",
        description: "Compare our enterprise backup and disaster recovery capabilities with other solutions and see why organizations choose us for comprehensive data protection.",
        image: "/data-protect.svg",
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
      title: "Master DataProtect",
      content: {
        title: "Learn data protection best practices",
        description: "Master enterprise data protection with comprehensive guides, best practices, and training materials for backup administrators and disaster recovery professionals.",
        image: "/data-protect.svg",
        links: [
          { text: "Data protection guide", href: docsUrl },
          { text: "Backup strategy best practices", href: docsUrl },
          { text: "DR planning strategies", href: docsUrl },
          { text: "Troubleshooting guide", href: docsUrl }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Start free trial",
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
        <h1 className="sr-only">DataProtect | Backup, Restore & Disaster Recovery Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="DataProtect"
          description="Enterprise backup and disaster recovery solution for VM, container, and object storage with orchestration and snapshots. Comprehensive data protection with automated backup, intelligent recovery, and business continuity planning for critical systems."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Data Protection Console",
            description: "Enterprise backup and disaster recovery management interface"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="DataProtect" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose DataProtect?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Data protection success stories"
          description="Learn why backup administrators and disaster recovery professionals choose DataProtect for comprehensive enterprise data protection and business continuity."
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
          description="We've compiled backup strategies, disaster recovery planning techniques, and data protection best practices for modern enterprise infrastructure and business continuity."
          image="/data-protect.svg"
          buttonText="Get the protection guide"
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
