import { ProductHero } from "@/components/product/ProductHero";
import { ProductWhyChoose } from "@/components/product/ProductWhyChoose";
import { ProductCustomerLogos } from "@/components/product/ProductCustomerLogos";
import { ProductCTABanner } from "@/components/product/ProductCTABanner";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export default function AssetsPage() {
  const ctaButtons = [
    {
      text: "Access Assets Module",
      href: "https://erp.augment.cfd/app/assets",
      variant: "primary" as const
    },
    {
      text: "View ERP Dashboard",
      href: "https://erp.augment.cfd/app/dashboard",
      variant: "secondary" as const
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Asset Tracking",
      description: "Track all company assets with detailed records, locations, and ownership information for complete visibility."
    },
    {
      number: "02",
      title: "Maintenance Scheduling",
      description: "Schedule preventive maintenance, track service history, and manage maintenance costs for optimal asset performance."
    },
    {
      number: "03",
      title: "Depreciation Management",
      description: "Automatically calculate depreciation using various methods with compliance to accounting standards and tax regulations."
    },
    {
      number: "04",
      title: "Lifecycle Monitoring",
      description: "Monitor asset lifecycle from acquisition to disposal with detailed cost tracking and performance analysis."
    },
    {
      number: "05",
      title: "Compliance Tracking",
      description: "Ensure regulatory compliance with automated tracking of certifications, inspections, and regulatory requirements."
    },
    {
      number: "06",
      title: "Asset Analytics",
      description: "Analyze asset performance, utilization rates, and ROI with comprehensive reporting and analytics."
    }
  ];

  const customerLogos = [
    {
      name: "Caterpillar",
      image: "https://logo.clearbit.com/caterpillar.com",
      href: "https://erp.augment.cfd/app/assets",
      alt: "Caterpillar logo"
    },
    {
      name: "John Deere",
      image: "https://logo.clearbit.com/deere.com",
      href: "https://erp.augment.cfd/app/assets",
      alt: "John Deere logo"
    },
    {
      name: "Komatsu",
      image: "https://logo.clearbit.com/komatsu.com",
      href: "https://erp.augment.cfd/app/assets",
      alt: "Komatsu logo"
    },
    {
      name: "Volvo",
      image: "https://logo.clearbit.com/volvo.com",
      href: "https://erp.augment.cfd/app/assets",
      alt: "Volvo logo"
    },
    {
      name: "Schneider Electric",
      image: "https://logo.clearbit.com/schneider-electric.com",
      href: "https://erp.augment.cfd/app/assets",
      alt: "Schneider Electric logo"
    },
    {
      name: "ABB",
      image: "https://logo.clearbit.com/abb.com",
      href: "https://erp.augment.cfd/app/assets",
      alt: "ABB logo"
    },
    {
      name: "Emerson",
      image: "https://logo.clearbit.com/emerson.com",
      href: "https://erp.augment.cfd/app/assets",
      alt: "Emerson logo"
    },
    {
      name: "Rockwell Automation",
      image: "https://logo.clearbit.com/rockwellautomation.com",
      href: "https://erp.augment.cfd/app/assets",
      alt: "Rockwell Automation logo"
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
          title="Asset Management System"
          description="Comprehensive asset tracking, maintenance scheduling, depreciation management, and asset lifecycle monitoring. Complete control over company assets and equipment with compliance tracking and analytics."
          ctaButtons={ctaButtons}
          mediaType="image"
          mediaUrl="/products/assets/01.png"
          mediaAlt="Asset Management Dashboard"
        />

        <ProductWhyChoose
          title="Why choose our Asset Management System?"
          items={whyChooseItems}
        />

        <ProductCustomerLogos
          title="Trusted by asset-intensive organizations"
          description="Join thousands of companies managing their assets efficiently"
          viewMoreText="View all customers"
          viewMoreHref="/customers"
          logos={customerLogos}
        />

        <ProductCTABanner
          title="Ready to optimize your asset management?"
          description="Join thousands of organizations using our ERP assets module to maximize asset value, reduce maintenance costs, and ensure compliance."
          image="/products/assets/02.png"
          buttonText="Access Assets Module"
          buttonHref="https://erp.augment.cfd/app/assets"
        />
      </main>
    </div>
  );
}
