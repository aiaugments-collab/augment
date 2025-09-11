import { ProductHero } from "@/components/product/ProductHero";
import { ProductWhyChoose } from "@/components/product/ProductWhyChoose";
import { ProductCustomerLogos } from "@/components/product/ProductCustomerLogos";
import { ProductCTABanner } from "@/components/product/ProductCTABanner";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export default function ManufacturingPage() {
  const ctaButtons = [
    {
      text: "Access Manufacturing Module",
      href: "https://erp.augment.cfd/app/manufacturing",
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
      title: "Production Planning",
      description: "Plan and schedule production runs with capacity planning, resource allocation, and delivery optimization."
    },
    {
      number: "02",
      title: "BOM Management",
      description: "Manage bill of materials with multi-level BOMs, component tracking, and cost analysis for accurate production costing."
    },
    {
      number: "03",
      title: "Work Order Tracking",
      description: "Track work orders from creation to completion with real-time status updates and progress monitoring."
    },
    {
      number: "04",
      title: "Quality Control",
      description: "Implement quality checkpoints, inspection procedures, and compliance tracking throughout the production process."
    },
    {
      number: "05",
      title: "Shop Floor Management",
      description: "Monitor shop floor activities with time tracking, machine utilization, and production efficiency metrics."
    },
    {
      number: "06",
      title: "Production Analytics",
      description: "Analyze production performance with detailed reports on efficiency, costs, and quality metrics."
    }
  ];

  const customerLogos = [
    {
      name: "Tesla",
      image: "https://logo.clearbit.com/tesla.com",
      href: "https://erp.augment.cfd/app/manufacturing",
      alt: "Tesla logo"
    },
    {
      name: "Toyota",
      image: "https://logo.clearbit.com/toyota.com",
      href: "https://erp.augment.cfd/app/manufacturing",
      alt: "Toyota logo"
    },
    {
      name: "General Motors",
      image: "https://logo.clearbit.com/gm.com",
      href: "https://erp.augment.cfd/app/manufacturing",
      alt: "General Motors logo"
    },
    {
      name: "Intel",
      image: "https://logo.clearbit.com/intel.com",
      href: "https://erp.augment.cfd/app/manufacturing",
      alt: "Intel logo"
    },
    {
      name: "Apple",
      image: "https://logo.clearbit.com/apple.com",
      href: "https://erp.augment.cfd/app/manufacturing",
      alt: "Apple logo"
    },
    {
      name: "Samsung",
      image: "https://logo.clearbit.com/samsung.com",
      href: "https://erp.augment.cfd/app/manufacturing",
      alt: "Samsung logo"
    },
    {
      name: "LG",
      image: "https://logo.clearbit.com/lg.com",
      href: "https://erp.augment.cfd/app/manufacturing",
      alt: "LG logo"
    },
    {
      name: "Foxconn",
      image: "https://logo.clearbit.com/foxconn.com",
      href: "https://erp.augment.cfd/app/manufacturing",
      alt: "Foxconn logo"
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
          title="Manufacturing Management System"
          description="End-to-end production planning, scheduling, and quality control. BOM management, work orders, production tracking, and quality assurance for efficient manufacturing operations and optimal productivity."
          ctaButtons={ctaButtons}
          mediaType="image"
          mediaUrl="/products/manufacturing/01.png"
          mediaAlt="Manufacturing Management Dashboard"
        />

        <ProductWhyChoose
          title="Why choose our Manufacturing Management System?"
          items={whyChooseItems}
        />

        <ProductCustomerLogos
          title="Trusted by leading manufacturers worldwide"
          description="Join thousands of manufacturing companies optimizing their production"
          viewMoreText="View all customers"
          viewMoreHref="/customers"
          logos={customerLogos}
        />

        <ProductCTABanner
          title="Ready to optimize your manufacturing operations?"
          description="Join thousands of manufacturers using our ERP manufacturing module to improve efficiency, reduce costs, and ensure quality production."
          image="/products/manufacturing/02.png"
          buttonText="Access Manufacturing Module"
          buttonHref="https://erp.augment.cfd/app/manufacturing"
        />
      </main>
    </div>
  );
}
