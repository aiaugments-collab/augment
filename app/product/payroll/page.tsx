import { ProductHero } from "@/components/product/ProductHero";
import { ProductWhyChoose } from "@/components/product/ProductWhyChoose";
import { ProductCustomerLogos } from "@/components/product/ProductCustomerLogos";
import { ProductCTABanner } from "@/components/product/ProductCTABanner";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export default function PayrollPage() {
  const ctaButtons = [
    {
      text: "Access Payroll Module",
      href: "https://erp.augment.cfd/app/payroll",
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
      title: "Automated Processing",
      description: "Automate payroll calculations, deductions, and payments with configurable pay schedules and rules."
    },
    {
      number: "02",
      title: "Tax Compliance",
      description: "Ensure tax compliance with automatic tax calculations, reporting, and filing for multiple jurisdictions."
    },
    {
      number: "03",
      title: "Benefits Administration",
      description: "Manage employee benefits, deductions, and contributions with automated enrollment and tracking."
    },
    {
      number: "04",
      title: "Employee Self-Service",
      description: "Provide employees with self-service access to pay stubs, tax documents, and personal information."
    },
    {
      number: "05",
      title: "Compliance Management",
      description: "Stay compliant with labor laws, tax regulations, and reporting requirements with automated updates."
    },
    {
      number: "06",
      title: "Payroll Analytics",
      description: "Analyze payroll costs, trends, and metrics with detailed reporting and cost center analysis."
    }
  ];

  const customerLogos = [
    {
      name: "ADP",
      image: "https://logo.clearbit.com/adp.com",
      href: "https://erp.augment.cfd/app/payroll",
      alt: "ADP logo"
    },
    {
      name: "Paychex",
      image: "https://logo.clearbit.com/paychex.com",
      href: "https://erp.augment.cfd/app/payroll",
      alt: "Paychex logo"
    },
    {
      name: "Workday",
      image: "https://logo.clearbit.com/workday.com",
      href: "https://erp.augment.cfd/app/payroll",
      alt: "Workday logo"
    },
    {
      name: "Gusto",
      image: "https://logo.clearbit.com/gusto.com",
      href: "https://erp.augment.cfd/app/payroll",
      alt: "Gusto logo"
    },
    {
      name: "QuickBooks",
      image: "https://logo.clearbit.com/intuit.com",
      href: "https://erp.augment.cfd/app/payroll",
      alt: "QuickBooks logo"
    },
    {
      name: "BambooHR",
      image: "https://logo.clearbit.com/bamboohr.com",
      href: "https://erp.augment.cfd/app/payroll",
      alt: "BambooHR logo"
    },
    {
      name: "Zenefits",
      image: "https://logo.clearbit.com/zenefits.com",
      href: "https://erp.augment.cfd/app/payroll",
      alt: "Zenefits logo"
    },
    {
      name: "Paylocity",
      image: "https://logo.clearbit.com/paylocity.com",
      href: "https://erp.augment.cfd/app/payroll",
      alt: "Paylocity logo"
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
          title="Payroll Management System"
          description="Automated payroll processing, tax calculations, benefits administration, and compliance management. Complete payroll solution with employee self-service portal and comprehensive reporting for accurate, compliant payroll operations."
          ctaButtons={ctaButtons}
          mediaType="image"
          mediaUrl="/products/payroll/01.png"
          mediaAlt="Payroll Management Dashboard"
        />

        <ProductWhyChoose
          title="Why choose our Payroll Management System?"
          items={whyChooseItems}
        />

        <ProductCustomerLogos
          title="Trusted by HR professionals worldwide"
          description="Join thousands of organizations streamlining their payroll processes"
          viewMoreText="View all customers"
          viewMoreHref="/customers"
          logos={customerLogos}
        />

        <ProductCTABanner
          title="Ready to simplify your payroll processing?"
          description="Join thousands of HR teams using our ERP payroll module to ensure accurate, compliant, and efficient payroll operations."
          image="/products/payroll/02.png"
          buttonText="Access Payroll Module"
          buttonHref="https://erp.augment.cfd/app/payroll"
        />
      </main>
    </div>
  );
}
