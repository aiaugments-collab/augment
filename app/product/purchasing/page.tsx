import { ProductHero } from "@/components/product/ProductHero";
import { ProductWhyChoose } from "@/components/product/ProductWhyChoose";
import { ProductCustomerLogos } from "@/components/product/ProductCustomerLogos";
import { ProductCTABanner } from "@/components/product/ProductCTABanner";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export default function PurchasingPage() {
  const ctaButtons = [
    {
      text: "Access Purchasing Module",
      href: "https://erp.augment.cfd/app/buying",
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
      title: "Supplier Management",
      description: "Maintain comprehensive supplier databases with performance tracking, contracts, and qualification records."
    },
    {
      number: "02",
      title: "RFQ Process",
      description: "Streamline request for quotation processes with automated supplier communication and comparison tools."
    },
    {
      number: "03",
      title: "Purchase Analytics",
      description: "Track spending patterns, supplier performance, and cost savings with detailed procurement analytics."
    },
    {
      number: "04",
      title: "Automated Workflows",
      description: "Automate purchase approvals, order generation, and supplier notifications for efficient procurement."
    },
    {
      number: "05",
      title: "Contract Management",
      description: "Manage supplier contracts, terms, and conditions with automated renewal notifications and compliance tracking."
    },
    {
      number: "06",
      title: "Cost Control",
      description: "Monitor budgets, track spending against targets, and implement approval hierarchies for cost control."
    }
  ];

  const customerLogos = [
    {
      name: "General Electric",
      image: "https://logo.clearbit.com/ge.com",
      href: "https://erp.augment.cfd/app/buying",
      alt: "General Electric logo"
    },
    {
      name: "Boeing",
      image: "https://logo.clearbit.com/boeing.com",
      href: "https://erp.augment.cfd/app/buying",
      alt: "Boeing logo"
    },
    {
      name: "Caterpillar",
      image: "https://logo.clearbit.com/caterpillar.com",
      href: "https://erp.augment.cfd/app/buying",
      alt: "Caterpillar logo"
    },
    {
      name: "Ford",
      image: "https://logo.clearbit.com/ford.com",
      href: "https://erp.augment.cfd/app/buying",
      alt: "Ford logo"
    },
    {
      name: "3M",
      image: "https://logo.clearbit.com/3m.com",
      href: "https://erp.augment.cfd/app/buying",
      alt: "3M logo"
    },
    {
      name: "Honeywell",
      image: "https://logo.clearbit.com/honeywell.com",
      href: "https://erp.augment.cfd/app/buying",
      alt: "Honeywell logo"
    },
    {
      name: "Siemens",
      image: "https://logo.clearbit.com/siemens.com",
      href: "https://erp.augment.cfd/app/buying",
      alt: "Siemens logo"
    },
    {
      name: "Johnson & Johnson",
      image: "https://logo.clearbit.com/jnj.com",
      href: "https://erp.augment.cfd/app/buying",
      alt: "Johnson & Johnson logo"
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
          title="Purchasing Management System"
          description="Streamlined procurement process with supplier management, purchase analytics, RFQ process, and automated purchase workflows. Complete purchasing control and vendor management for cost-effective operations."
          ctaButtons={ctaButtons}
          mediaType="image"
          mediaUrl="/products/purchasing/01.png"
          mediaAlt="Purchasing Management Dashboard"
        />

        <ProductWhyChoose
          title="Why choose our Purchasing Management System?"
          items={whyChooseItems}
        />

        <ProductCustomerLogos
          title="Trusted by procurement professionals worldwide"
          description="Join thousands of organizations optimizing their procurement processes"
          viewMoreText="View all customers"
          viewMoreHref="/customers"
          logos={customerLogos}
        />

        <ProductCTABanner
          title="Ready to optimize your procurement process?"
          description="Join thousands of procurement teams using our ERP purchasing module to reduce costs, improve supplier relationships, and streamline operations."
          image="/products/purchasing/02.png"
          buttonText="Access Purchasing Module"
          buttonHref="https://erp.augment.cfd/app/buying"
        />
      </main>
    </div>
  );
}
