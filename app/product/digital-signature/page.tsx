import { ProductHero } from "@/components/product/ProductHero";
import { ProductPromo } from "@/components/product/ProductPromo";
import { ProductExplorer } from "@/components/product/ProductExplorer";
import { ProductWhyChoose } from "@/components/product/ProductWhyChoose";
import { ProductCustomerLogos } from "@/components/product/ProductCustomerLogos";
import { ProductResources } from "@/components/product/ProductResources";
import { ProductCTABanner } from "@/components/product/ProductCTABanner";
import { ProductGetStarted } from "@/components/product/ProductGetStarted";
import { Breadcrumb } from "@/components/ui/Breadcrumb";


export default function DigitalSignaturePage() {
  const ctaButtons = [
    {
      text: "Book a Demo",
      href: "/book-demo",
      variant: "primary" as const
    },
    {
      text: "Contact Sales",
      href: "/corporate/contact",
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "webinar-esign",
      image: "/products/digital-signature/02.png",
      title: "Webinar: Securing Business with Digital Signatures",
      description: "Discover how our digital signature platform can transform your document workflows and ensure legal compliance with electronic signatures.",
      ctaText: "Register today",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "forrester-esign",
      image: "/products/digital-signature/03.png",
      title: "Augment named a Leader in The Forrester Wave™: Digital Signature Solutions, Q1 2025",
      description: "Find out why Augment was recognized for excellence in electronic signature technology and document security.",
      ctaText: "Access the Forrester report",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "esign-efficiency-guide",
      image: "/products/digital-signature/04.png",
      title: "Accelerate business processes with digital signatures",
      description: "Discover how to eliminate paper workflows and improve document turnaround times with secure electronic signature automation.",
      ctaText: "Read the solution brochure (PDF)",
      ctaLink: "/book-demo",
      target: "_self" as const
    },
    {
      id: "legal-guide",
      image: "/products/digital-signature/05.png",
      title: "Legal guide to digital signature compliance",
      description: "Learn the regulatory requirements and best practices for implementing legally binding electronic signatures in your organization.",
      ctaText: "Access the guide",
      ctaLink: "/book-demo",
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "document-signing",
      title: "Document Signing",
      content: {
        title: "Secure electronic document signing",
        description: "Enable fast, secure, and legally binding electronic signatures with an intuitive signing experience that works on any device and supports multiple signature types and authentication methods.",
        buttons: [
          { text: "Book a Demo", href: "/book-demo", variant: "primary" as const },
          { text: "See signing demo", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "Multiple signature types (drawn, typed, uploaded)",
            "Biometric signature capture",
            "Multi-party signing workflows",
            "Sequential and parallel signing",
            "Mobile-optimized signing experience",
            "Signature authentication",
            "Tamper-evident technology",
            "Legal compliance validation"
          ]
        },
        image: "/products/digital-signature/02.png",
        imageAlt: "Document signing interface"
      }
    },
    {
      id: "workflow-automation",
      title: "Workflow Automation",
      content: {
        title: "Automated signature workflows and routing",
        description: "Streamline document approval processes with intelligent workflow automation that routes documents to the right signers in the correct order with automated reminders and notifications.",
        buttons: [
          { text: "Book a Demo", href: "/book-demo", variant: "primary" as const },
          { text: "See workflow features", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "Visual workflow builder",
            "Conditional routing logic",
            "Automated reminder system",
            "Deadline management",
            "Approval chain automation",
            "Bulk sending capabilities",
            "Template-based workflows",
            "Integration with business systems"
          ]
        },
        image: "/products/digital-signature/03.png",
        imageAlt: "Workflow automation dashboard"
      }
    },
    {
      id: "document-management",
      title: "Document Management",
      content: {
        title: "Comprehensive document lifecycle management",
        description: "Manage the complete document lifecycle from creation to archival with secure storage, version control, and advanced search capabilities that ensure document integrity and accessibility.",
        buttons: [
          { text: "Book a Demo", href: "/book-demo", variant: "primary" as const },
          { text: "See document features", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "Secure cloud document storage",
            "Version control and history",
            "Advanced search and filtering",
            "Document templates library",
            "Folder organization system",
            "Access control and permissions",
            "Document expiration management",
            "Bulk document operations"
          ]
        },
        image: "/products/digital-signature/04.png",
        imageAlt: "Document management interface"
      }
    },
    {
      id: "compliance-security",
      title: "Compliance & Security",
      content: {
        title: "Enterprise-grade security and compliance",
        description: "Ensure legal validity and regulatory compliance with advanced security features, audit trails, and compliance certifications that meet global electronic signature standards.",
        buttons: [
          { text: "Book a Demo", href: "/book-demo", variant: "primary" as const },
          { text: "See security features", href: "/book-demo", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "eIDAS and ESIGN Act compliance",
            "Advanced encryption (AES-256)",
            "Complete audit trails",
            "Identity verification options",
            "Certificate-based signatures",
            "Tamper detection technology",
            "Compliance reporting",
            "Legal admissibility support"
          ]
        },
        image: "/products/digital-signature/05.png",
        imageAlt: "Security and compliance dashboard"
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Legally Binding",
      description: "Create legally binding electronic signatures that comply with global regulations including eIDAS, ESIGN Act, and UETA.",
      link: {
        text: "See compliance features",
        href: "/book-demo"
      }
    },
    {
      number: "02",
      title: "Bank-Level Security",
      description: "Protect documents with enterprise-grade security including AES-256 encryption, tamper detection, and secure audit trails.",
      link: {
        text: "View security details",
        href: "/book-demo"
      }
    },
    {
      number: "03",
      title: "Universal Compatibility",
      description: "Sign documents on any device, browser, or platform without requiring software downloads or special hardware.",
      link: {
        text: "Test compatibility",
        href: "/book-demo"
      }
    }
  ];

  const resources = [
    {
      title: "Digital Signature Implementation Guide",
      description: "Step-by-step guide to implementing electronic signatures in your organization",
      type: "Guide",
      href: "/book-demo"
    },
    {
      title: "Electronic Signature Legal Compliance",
      description: "Understanding legal requirements for digital signatures worldwide",
      type: "Whitepaper",
      href: "/book-demo"
    },
    {
      title: "Document Workflow Success Stories",
      description: "See how companies reduced document processing time by 80%",
      type: "Case Study",
      href: "/book-demo"
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
          title="Digital Signature App for Business"
          description="Secure digital signature platform with document management, electronic signing workflows, compliance tracking, and legal document authentication. Secure digital signature and document management for modern businesses."
          ctaButtons={ctaButtons}
          mediaType="image"
          mediaUrl="/products/digital-signature/01.png"
          mediaAlt="Digital Signature Platform Interface"
        />

        <ProductPromo cards={promoCards} />

        <ProductExplorer
          title="Explore digital signature capabilities"
          tabs={explorerTabs}
        />

        <ProductWhyChoose
          title="Why choose our digital signature platform?"
          items={whyChooseItems}
        />





        <ProductCTABanner
          title="Ready to go paperless with digital signatures?"
          description="Join thousands of businesses using our platform to accelerate document processes, reduce costs, and ensure compliance."
          image="/products/digital-signature/03.png"
          buttonText="Book a Demo"
          buttonHref="/book-demo"
        />

        <ProductGetStarted 
          title="Get Started"
          actions={[
            { title: "Book a Demo", href: "/book-demo", icon: "demo" },
            { title: "Contact Sales", href: "/corporate/contact", icon: "contact" }
          ]}
        />
      </main>
    </div>
  );
}
