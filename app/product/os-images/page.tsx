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

export default function OSImagesPage() {
  const { productUrl, docsUrl } = getAppUrls("os-images");
  
  const ctaButtons = [
    {
      text: "Download Images",
      href: productUrl,
      variant: "primary" as const
    },
    {
      text: "Browse Catalog",
      href: docsUrl,
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "hardened-linux",
      image: "/os-images.svg",
      title: "Hardened Linux Distribution Images",
      description: "Enterprise-grade hardened Linux distributions with security enhancements, kernel hardening, and compliance configurations for production workloads and secure environments.",
      ctaText: "Get hardened Linux images",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "bsd-images",
      image: "/os-images.svg",
      title: "Secure BSD Operating Systems",
      description: "Prebuilt BSD system images with advanced security features, network stack optimizations, and enterprise configurations for high-security computing environments.",
      ctaText: "Download BSD images",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "enterprise-workloads",
      image: "/os-images.svg",
      title: "Enterprise Workload Optimization",
      description: "Specialized OS images optimized for enterprise workloads with performance tuning, resource management, and scalability enhancements for business-critical applications.",
      ctaText: "Optimize enterprise workloads",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "hpc-computing",
      image: "/os-images.svg",
      title: "High-Performance Computing Images",
      description: "HPC-optimized operating system images with parallel computing support, scientific libraries, and performance optimizations for computational workloads and research applications.",
      ctaText: "Deploy HPC environments",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "linux-distributions",
      title: "Linux Distributions",
      content: {
        title: "Hardened Linux distribution images for enterprise environments",
        description: "Comprehensive collection of hardened Linux distributions with security enhancements, kernel hardening, and enterprise-grade configurations for production deployments.",
        buttons: [
          { text: "Get Hardened Linux Images", href: productUrl, variant: "primary" as const },
          { text: "Linux hardening guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Linux Distribution Features",
          items: [
            "Security hardening",
            "Kernel enhancements",
            "Compliance configurations",
            "Performance optimization",
            "Enterprise packages",
            "Security updates",
            "Documentation",
            "Support services"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Linux Distribution Console",
          description: "Hardened Linux image management and deployment"
        }
      }
    },
    {
      id: "bsd-systems",
      title: "BSD Systems",
      content: {
        title: "Secure BSD operating system images with advanced features",
        description: "Prebuilt BSD system images with advanced security features, network optimizations, and enterprise configurations for high-security computing environments.",
        buttons: [
          { text: "Download BSD Images", href: productUrl, variant: "primary" as const },
          { text: "BSD security guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "BSD System Features",
          items: [
            "Advanced security",
            "Network optimization",
            "Jail systems",
            "ZFS filesystem",
            "Packet filtering",
            "System hardening",
            "Performance tuning",
            "Enterprise support"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "BSD Systems Console",
          description: "BSD operating system image catalog and management"
        }
      }
    },
    {
      id: "enterprise-optimization",
      title: "Enterprise Optimization",
      content: {
        title: "Enterprise-optimized OS images for business workloads",
        description: "Specialized operating system images optimized for enterprise workloads with performance tuning, resource management, and scalability enhancements.",
        buttons: [
          { text: "Optimize Enterprise Workloads", href: productUrl, variant: "primary" as const },
          { text: "Enterprise optimization guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Enterprise Optimization Features",
          items: [
            "Performance tuning",
            "Resource management",
            "Scalability enhancements",
            "Load balancing",
            "Memory optimization",
            "Storage optimization",
            "Network tuning",
            "Monitoring integration"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "Enterprise Optimization Interface",
          description: "Enterprise workload optimization and configuration management"
        }
      }
    },
    {
      id: "hpc-computing",
      title: "HPC Computing",
      content: {
        title: "High-performance computing images for scientific workloads",
        description: "HPC-optimized operating system images with parallel computing support, scientific libraries, and performance optimizations for computational research and analysis.",
        buttons: [
          { text: "Deploy HPC Environments", href: productUrl, variant: "primary" as const },
          { text: "HPC optimization guide", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "HPC Computing Features",
          items: [
            "Parallel computing support",
            "Scientific libraries",
            "MPI implementations",
            "GPU acceleration",
            "Cluster management",
            "Job scheduling",
            "Performance profiling",
            "Research tools"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "HPC Computing Center",
          description: "High-performance computing environment management"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Hardened Linux and BSD images with enterprise security",
      description: "Comprehensive collection of hardened operating system images with security enhancements, kernel hardening, and compliance configurations for enterprise and government environments.",
      link: {
        text: "Learn about OS hardening",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Enterprise workload optimization with performance tuning",
      description: "Specialized OS images optimized for enterprise workloads with performance tuning, resource management, and scalability enhancements for business-critical applications."
    },
    {
      number: "03",
      title: "High-performance computing support with scientific libraries", 
      description: "HPC-optimized operating system images with parallel computing support, scientific libraries, and performance optimizations for computational workloads and research applications."
    },
    {
      number: "04",
      title: "Prebuilt configurations with security compliance",
      description: "Ready-to-deploy OS images with prebuilt security configurations, compliance frameworks, and enterprise-grade features for rapid deployment and operational efficiency."
    }
  ];

  const customerReference = {
    title: "Infrastructure Transformation Success",
    company: "Research institution deploys 500+ HPC nodes with 40% performance improvement using optimized OS images",
    description: "A leading research institution transformed their computing infrastructure using OS Images, achieving significant performance gains while maintaining security compliance and operational efficiency.",
    image: "/os-images.svg",
    linkText: "Read the infrastructure story",
    linkHref: docsUrl
  };

  const customerLogos = [
    {
      name: "Rocky Linux",
      image: "https://logo.clearbit.com/rockylinux.org",
      href: docsUrl,
      alt: "Rocky Linux logo"
    },
    {
      name: "FreeBSD",
      image: "https://logo.clearbit.com/freebsd.org",
      href: docsUrl,
      alt: "FreeBSD logo"
    },
    {
      name: "OpenBSD",
      image: "https://logo.clearbit.com/openbsd.org",
      href: docsUrl, 
      alt: "OpenBSD logo"
    },
    {
      name: "CentOS",
      image: "https://logo.clearbit.com/centos.org",
      href: docsUrl,
      alt: "CentOS logo"
    },
    {
      name: "Ubuntu", 
      image: "https://logo.clearbit.com/ubuntu.com",
      href: docsUrl,
      alt: "Ubuntu logo"
    },
    {
      name: "SUSE",
      image: "https://logo.clearbit.com/suse.com",
      href: docsUrl,
      alt: "SUSE logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in OS Images",
      content: {
        title: "Latest hardened OS images and security features",
        description: "Stay updated with the newest operating system images, security enhancements, and performance optimizations for enterprise and high-performance computing environments.",
        image: "/os-images.svg",
        links: [
          { text: "New OS releases", href: docsUrl },
          { text: "Security improvements", href: docsUrl },
          { text: "Performance optimizations", href: docsUrl },
          { text: "HPC enhancements", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare OS distribution solutions",
      content: {
        title: "Why choose OS Images",
        description: "Compare our hardened operating system images with other solutions and see why enterprises choose us for secure, high-performance computing environments.",
        image: "/os-images.svg",
        links: [
          { text: "OS image comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master OS Images",
      content: {
        title: "Learn OS hardening and optimization best practices",
        description: "Master operating system hardening with comprehensive guides, security strategies, and training materials for system administrators and infrastructure professionals.",
        image: "/os-images.svg",
        links: [
          { text: "OS hardening deployment guide", href: docsUrl },
          { text: "Security compliance best practices", href: docsUrl },
          { text: "Performance optimization strategies", href: docsUrl },
          { text: "Troubleshooting guide", href: docsUrl }
        ]
      }
    }
  ];

  const getStartedActions = [
    {
      title: "Download images",
      href: productUrl,
      icon: "demo"
    },
    {
      title: "Browse catalog",
      href: docsUrl,
      icon: "tour"
    },
    {
      title: "Contact infrastructure team",
      href: productUrl,
      icon: "contact"
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="sr-only">OS Images | Hardened Linux & BSD Images Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="OS Images"
          description="Prebuilt hardened OS images for enterprise workloads and high-performance computing with security enhancements. Comprehensive collection of hardened Linux and BSD distributions optimized for production environments and research computing."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "OS Images Console",
            description: "Hardened operating system image catalog and deployment"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="OS Images" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose OS Images?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Infrastructure success stories"
          description="Learn why enterprises and research institutions choose OS Images for hardened operating systems and high-performance computing environments."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The OS Hardening Guide"
          description="We've compiled operating system hardening strategies, security compliance techniques, and performance optimization best practices for enterprise infrastructure and HPC environments."
          image="/os-images.svg"
          buttonText="Get the OS hardening guide"
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
