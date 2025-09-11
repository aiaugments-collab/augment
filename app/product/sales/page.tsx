import { ProductHero } from "@/components/product/ProductHero";
import { ProductWhyChoose } from "@/components/product/ProductWhyChoose";
import { ProductCustomerLogos } from "@/components/product/ProductCustomerLogos";
import { ProductCTABanner } from "@/components/product/ProductCTABanner";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export default function SalesPage() {
  const ctaButtons = [
    {
      text: "Access Sales Module",
      href: "https://erp.augment.cfd/app/selling",
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
      title: "Complete Sales Pipeline",
      description: "Manage your entire sales process from lead generation to order fulfillment with automated workflows."
    },
    {
      number: "02",
      title: "Quotation Management",
      description: "Create professional quotations quickly with templates, pricing rules, and automated approval processes."
    },
    {
      number: "03",
      title: "Order Processing",
      description: "Streamline order management with automated order processing, invoicing, and delivery tracking."
    },
    {
      number: "04",
      title: "Customer Portal",
      description: "Provide customers with self-service access to orders, invoices, and account information."
    },
    {
      number: "05",
      title: "Sales Analytics",
      description: "Track sales performance with detailed reports on revenue, conversion rates, and team productivity."
    },
    {
      number: "06",
      title: "Commission Tracking",
      description: "Automated commission calculations and tracking for sales teams with customizable commission structures."
    }
  ];

  const customerLogos = [
    {
      name: "Salesforce",
      image: "https://logo.clearbit.com/salesforce.com",
      href: "https://erp.augment.cfd/app/selling",
      alt: "Salesforce logo"
    },
    {
      name: "HubSpot",
      image: "https://logo.clearbit.com/hubspot.com",
      href: "https://erp.augment.cfd/app/selling",
      alt: "HubSpot logo"
    },
    {
      name: "Microsoft",
      image: "https://logo.clearbit.com/microsoft.com",
      href: "https://erp.augment.cfd/app/selling",
      alt: "Microsoft logo"
    },
    {
      name: "Oracle",
      image: "https://logo.clearbit.com/oracle.com",
      href: "https://erp.augment.cfd/app/selling",
      alt: "Oracle logo"
    },
    {
      name: "SAP",
      image: "https://logo.clearbit.com/sap.com",
      href: "https://erp.augment.cfd/app/selling",
      alt: "SAP logo"
    },
    {
      name: "Adobe",
      image: "https://logo.clearbit.com/adobe.com",
      href: "https://erp.augment.cfd/app/selling",
      alt: "Adobe logo"
    },
    {
      name: "Shopify",
      image: "https://logo.clearbit.com/shopify.com",
      href: "https://erp.augment.cfd/app/selling",
      alt: "Shopify logo"
    },
    {
      name: "Square",
      image: "https://logo.clearbit.com/squareup.com",
      href: "https://erp.augment.cfd/app/selling",
      alt: "Square logo"
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
          title="Sales Management Software"
          description="Complete sales pipeline from lead generation to order fulfillment. Manage quotations, sales orders, customer portal, and sales analytics with integrated commission tracking for maximum revenue growth."
          ctaButtons={ctaButtons}
          mediaType="image"
          mediaUrl="/products/sales/01.png"
          mediaAlt="Sales Management Dashboard"
        />

        <ProductWhyChoose
          title="Why choose our Sales Management System?"
          items={whyChooseItems}
        />

        <ProductCustomerLogos
          title="Trusted by sales teams worldwide"
          description="Join thousands of sales organizations driving revenue growth"
          viewMoreText="View all customers"
          viewMoreHref="/customers"
          logos={customerLogos}
        />

        <ProductCTABanner
          title="Ready to boost your sales performance?"
          description="Join thousands of sales teams using our ERP sales module to increase conversion rates, streamline processes, and drive revenue growth."
          image="/products/sales/02.png"
          buttonText="Access Sales Module"
          buttonHref="https://erp.augment.cfd/app/selling"
        />
      </main>
    </div>
  );
}
