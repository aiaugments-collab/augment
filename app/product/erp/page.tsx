import { ProductHero } from "@/components/product/ProductHero";
import { ERPAppsShowcase } from "@/components/product/ERPAppsShowcase";
import { ERPPricing } from "@/components/product/ERPPricing";
import { ERPAccess } from "@/components/product/ERPAccess";
import { ProductWhyChoose } from "@/components/product/ProductWhyChoose";
import { ProductCustomerLogos } from "@/components/product/ProductCustomerLogos";
import { ProductCTABanner } from "@/components/product/ProductCTABanner";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export default function AugmentERPPage() {
  const ctaButtons = [
    {
      text: "Access ERP System",
      href: "https://erp.augment.cfd/",
      variant: "primary" as const
    },
    {
      text: "Watch Demo",
      href: "/book-demo",
      variant: "secondary" as const
    }
  ];


  const whyChooseItems = [
    {
      number: "01",
      title: "All-in-One Platform",
      description: "Manage your entire business from a single, integrated platform that eliminates data silos and improves efficiency."
    },
    {
      number: "02",
      title: "Real-time Insights",
      description: "Get instant visibility into your business performance with comprehensive dashboards and automated reporting."
    },
    {
      number: "03",
      title: "Scalable Architecture",
      description: "Grow your business without limits with our cloud-native ERP that scales with your needs."
    },
    {
      number: "04",
      title: "Industry Expertise",
      description: "Built for modern businesses with industry-specific features and best practices built-in."
    },
    {
      number: "05",
      title: "Seamless Integration",
      description: "Connect with your existing tools and systems through our extensive API and integration capabilities."
    },
    {
      number: "06",
      title: "Enterprise Security",
      description: "Bank-grade security with role-based access control, audit trails, and compliance management."
    }
  ];

  const customerLogos = [
    {
      name: "Microsoft",
      image: "https://logo.clearbit.com/microsoft.com",
      href: "https://erp.augment.cfd/",
      alt: "Microsoft logo"
    },
    {
      name: "Google",
      image: "/google.svg",
      href: "https://erp.augment.cfd/",
      alt: "Google logo"
    },
    {
      name: "Amazon",
      image: "https://logo.clearbit.com/amazon.com",
      href: "https://erp.augment.cfd/",
      alt: "Amazon logo"
    },
    {
      name: "Salesforce",
      image: "https://logo.clearbit.com/salesforce.com",
      href: "https://erp.augment.cfd/",
      alt: "Salesforce logo"
    },
    {
      name: "Oracle",
      image: "https://logo.clearbit.com/oracle.com",
      href: "https://erp.augment.cfd/",
      alt: "Oracle logo"
    },
    {
      name: "SAP",
      image: "https://logo.clearbit.com/sap.com",
      href: "https://erp.augment.cfd/",
      alt: "SAP logo"
    },
    {
      name: "Workday",
      image: "https://logo.clearbit.com/workday.com",
      href: "https://erp.augment.cfd/",
      alt: "Workday logo"
    },
    {
      name: "NetSuite",
      image: "https://logo.clearbit.com/netsuite.com",
      href: "https://erp.augment.cfd/",
      alt: "NetSuite logo"
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
          title="ERP"
          description="Complete Enterprise Resource Planning solution for modern businesses. Manage accounting, inventory, sales, manufacturing, HR, and more in one integrated platform with real-time insights and powerful automation."
          ctaButtons={ctaButtons}
          mediaType="image"
          mediaUrl="/products/erp/01.png"
          mediaAlt="Augment ERP Dashboard Interface"
        />

        <ERPAppsShowcase />

        <ERPPricing />

        <ERPAccess />

        <ProductWhyChoose
          title="Why choose Augment ERP?"
          items={whyChooseItems}
        />

        <ProductCustomerLogos
          title="Trusted by leading organizations"
          description="Join thousands of businesses worldwide"
          viewMoreText="View all customers"
          viewMoreHref="/customers"
          logos={customerLogos}
        />

        <ProductCTABanner
          title="Ready to transform your business operations?"
          description="Join thousands of businesses using Augment ERP to streamline operations and drive growth."
          image="/products/erp/03.png"
          buttonText="Access ERP System"
          buttonHref="https://erp.augment.cfd/"
        />
      </main>
    </div>
  );
}
