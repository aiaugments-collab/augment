import { ProductHero } from "@/components/product/ProductHero";
import { ProductWhyChoose } from "@/components/product/ProductWhyChoose";
import { ProductCustomerLogos } from "@/components/product/ProductCustomerLogos";
import { ProductCTABanner } from "@/components/product/ProductCTABanner";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { AugmentDBFeatures } from "@/components/product/AugmentDBFeatures";
import { AugmentDBSupported } from "@/components/product/AugmentDBSupported";


export default function AugmentDBPage() {
  const ctaButtons = [
    {
      text: "View Documentation",
      href: "/documentation/augmentdb",
      variant: "primary" as const
    },
    {
      text: "Installation Guide",
      href: "/documentation/augmentdb#installation",
      variant: "secondary" as const
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Universal Database Support",
      description: "Connect to any database - MySQL, PostgreSQL, Oracle, SQL Server, MongoDB, and 200+ more database systems."
    },
    {
      number: "02",
      title: "Advanced SQL Editor",
      description: "Powerful SQL editor with syntax highlighting, auto-completion, formatting, and intelligent query assistance."
    },
    {
      number: "03",
      title: "Visual Data Management",
      description: "Intuitive data viewer and editor with filtering, sorting, and advanced data manipulation capabilities."
    },
    {
      number: "04",
      title: "ER Diagrams & Modeling",
      description: "Create and visualize database relationships with comprehensive entity-relationship diagrams and schema modeling."
    },
    {
      number: "05",
      title: "Cross-Platform",
      description: "Available on Windows, macOS, and Linux with consistent experience across all platforms."
    },
    {
      number: "06",
      title: "Enterprise Security",
      description: "Advanced security features including SSL connections, SSH tunneling, and comprehensive access control."
    }
  ];

  const customerLogos = [
    {
      name: "Microsoft",
      image: "https://logo.clearbit.com/microsoft.com",
      href: "/documentation/augmentdb",
      alt: "Microsoft logo"
    },
    {
      name: "Google",
      image: "/google.svg",
      href: "/documentation/augmentdb",
      alt: "Google logo"
    },
    {
      name: "Amazon",
      image: "https://logo.clearbit.com/amazon.com",
      href: "/documentation/augmentdb",
      alt: "Amazon logo"
    },
    {
      name: "Oracle",
      image: "https://logo.clearbit.com/oracle.com",
      href: "/documentation/augmentdb",
      alt: "Oracle logo"
    },
    {
      name: "MongoDB",
      image: "https://logo.clearbit.com/mongodb.com",
      href: "/documentation/augmentdb",
      alt: "MongoDB logo"
    },
    {
      name: "PostgreSQL",
      image: "https://logo.clearbit.com/postgresql.org",
      href: "/documentation/augmentdb",
      alt: "PostgreSQL logo"
    },
    {
      name: "MySQL",
      image: "https://logo.clearbit.com/mysql.com",
      href: "/documentation/augmentdb",
      alt: "MySQL logo"
    },
    {
      name: "Redis",
      image: "https://logo.clearbit.com/redis.io",
      href: "/documentation/augmentdb",
      alt: "Redis logo"
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
          title="AugmentDB"
          description="Universal database management tool that supports all major databases. Advanced SQL editing, data visualization, ER diagrams, and comprehensive database administration capabilities for developers, DBAs, and data analysts."
          ctaButtons={ctaButtons}
          mediaType="image"
          mediaUrl="/products/augmentdb/01.png"
          mediaAlt="AugmentDB Database Management Interface"
        />

        <AugmentDBFeatures />

        <AugmentDBSupported />

        <ProductWhyChoose
          title="Why choose AugmentDB?"
          items={whyChooseItems}
        />

        <ProductCustomerLogos
          title="Trusted by developers worldwide"
          description="Join millions of developers and database professionals"
          viewMoreText="View all customers"
          viewMoreHref="/customers"
          logos={customerLogos}
        />

        <ProductCTABanner
          title="Ready to streamline your database management?"
          description="Join millions of developers using AugmentDB for efficient database administration and development."
          image="/products/augmentdb/02.png"
          buttonText="Get Started"
          buttonHref="/documentation/augmentdb"
        />
      </main>
    </div>
  );
}
