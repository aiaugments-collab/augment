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

export default function IdentityFabricPage() {
  const { productUrl, docsUrl } = getAppUrls("identity-fabric");
  
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
      id: "single-sign-on",
      image: "/identity-fabric.svg",
      title: "Enterprise Single Sign-On",
      description: "Streamline user access with enterprise-grade SSO supporting SAML, OAuth, OpenID Connect, and seamless integration with existing applications.",
      ctaText: "Explore SSO features",
      ctaLink: productUrl,
      target: "_blank" as const
    },
    {
      id: "multi-factor-authentication",
      image: "/identity-fabric.svg",
      title: "Advanced Multi-Factor Authentication",
      description: "Secure your applications with comprehensive MFA options including TOTP, SMS, email, and hardware tokens for enhanced security.",
      ctaText: "Learn about MFA",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "identity-management",
      image: "/identity-fabric.svg",
      title: "Centralized Identity Management",
      description: "Manage user identities, roles, and permissions from a single platform with automated provisioning and deprovisioning capabilities.",
      ctaText: "View identity features",
      ctaLink: docsUrl,
      target: "_self" as const
    },
    {
      id: "enterprise-integration",
      image: "/identity-fabric.svg",
      title: "Enterprise System Integration",
      description: "Seamlessly integrate with LDAP, Active Directory, and enterprise applications with pre-built connectors and custom integration options.",
      ctaText: "See integrations",
      ctaLink: docsUrl,
      target: "_self" as const
    }
  ];

  const explorerTabs = [
    {
      id: "sso-authentication",
      title: "SSO & Authentication",
      content: {
        title: "Enterprise single sign-on and authentication platform",
        description: "Streamline user access with comprehensive SSO supporting multiple protocols, seamless application integration, and enterprise-grade security features.",
        buttons: [
          { text: "Setup SSO", href: productUrl, variant: "primary" as const },
          { text: "Authentication guides", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "SSO & Authentication Features",
          items: [
            "SAML 2.0 support",
            "OAuth 2.0 & OpenID Connect",
            "Application integration",
            "Session management",
            "Conditional access",
            "Risk-based authentication",
            "Password policies",
            "Audit logging"
          ]
        },
        mockup: {
          type: "dashboard" as const,
          title: "Identity Management Dashboard",
          description: "Centralized authentication and single sign-on management"
        }
      }
    },
    {
      id: "multi-factor-auth",
      title: "Multi-Factor Authentication",
      content: {
        title: "Advanced multi-factor authentication and security",
        description: "Enhance security with comprehensive MFA options, adaptive authentication, and risk-based access controls for maximum protection.",
        buttons: [
          { text: "Configure MFA", href: productUrl, variant: "primary" as const },
          { text: "Security policies", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Multi-Factor Authentication Features",
          items: [
            "TOTP authenticator apps",
            "SMS & email verification",
            "Hardware token support",
            "Biometric authentication",
            "Adaptive MFA policies",
            "Risk assessment engine",
            "Device registration",
            "Backup codes"
          ]
        },
        mockup: {
          type: "form" as const,
          title: "MFA Configuration Interface",
          description: "Multi-factor authentication setup and policy management"
        }
      }
    },
    {
      id: "user-management",
      title: "User Management",
      content: {
        title: "Comprehensive user lifecycle and access management",
        description: "Manage user identities, roles, and permissions with automated provisioning, self-service capabilities, and comprehensive access controls.",
        buttons: [
          { text: "Manage Users", href: productUrl, variant: "primary" as const },
          { text: "User guides", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "User Management Features",
          items: [
            "Automated user provisioning",
            "Role-based access control",
            "Self-service portal",
            "Group management",
            "Access reviews",
            "Lifecycle automation",
            "Custom attributes",
            "Delegation controls"
          ]
        },
        mockup: {
          type: "table" as const,
          title: "User Management Console",
          description: "Comprehensive user identity and access management interface"
        }
      }
    },
    {
      id: "enterprise-integration",
      title: "Enterprise Integration",
      content: {
        title: "Seamless integration with enterprise systems",
        description: "Connect with existing enterprise infrastructure including LDAP, Active Directory, and business applications with pre-built and custom integrations.",
        buttons: [
          { text: "Setup Integrations", href: productUrl, variant: "primary" as const },
          { text: "Integration docs", href: docsUrl, variant: "secondary" as const }
        ],
        features: {
          title: "Enterprise Integration Features",
          items: [
            "LDAP & Active Directory sync",
            "API-first architecture",
            "Pre-built connectors",
            "Custom integrations",
            "Real-time synchronization",
            "Data mapping tools",
            "Webhook support",
            "Migration utilities"
          ]
        },
        mockup: {
          type: "chat" as const,
          title: "Integration Management Console",
          description: "Enterprise system integration and synchronization interface"
        }
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Enterprise-grade SSO with comprehensive protocol support",
      description: "Streamline user access with robust single sign-on supporting SAML, OAuth, OpenID Connect, and seamless integration with existing enterprise applications.",
      link: {
        text: "Learn about SSO capabilities",
        href: productUrl
      }
    },
    {
      number: "02", 
      title: "Advanced multi-factor authentication and security",
      description: "Enhance security with comprehensive MFA options, adaptive authentication policies, and risk-based access controls for maximum protection."
    },
    {
      number: "03",
      title: "Centralized identity and access management", 
      description: "Manage user identities, roles, and permissions from a unified platform with automated provisioning and comprehensive lifecycle management."
    },
    {
      number: "04",
      title: "Seamless enterprise system integration",
      description: "Connect effortlessly with LDAP, Active Directory, and business applications using pre-built connectors and flexible integration options."
    }
  ];

  const customerReference = {
    title: "Identity Management Transformation",
    company: "Enterprise reduces login time by 80% with unified SSO",
    description: "A global enterprise transformed their identity management using Identity Fabric, achieving significant improvements in user experience while enhancing security across all applications.",
    image: "/identity-fabric.svg",
    linkText: "Read the identity transformation story",
    linkHref: docsUrl
  };

  const customerLogos = [
    {
      name: "Authentik",
      image: "https://logo.clearbit.com/goauthentik.io",
      href: docsUrl,
      alt: "Authentik logo"
    },
    {
      name: "Okta",
      image: "https://logo.clearbit.com/okta.com",
      href: docsUrl,
      alt: "Okta logo"
    },
    {
      name: "Auth0",
      image: "https://logo.clearbit.com/auth0.com",
      href: docsUrl, 
      alt: "Auth0 logo"
    },
    {
      name: "Microsoft Azure AD",
      image: "https://logo.clearbit.com/microsoft.com",
      href: docsUrl,
      alt: "Microsoft Azure AD logo"
    },
    {
      name: "Keycloak", 
      image: "https://logo.clearbit.com/keycloak.org",
      href: docsUrl,
      alt: "Keycloak logo"
    },
    {
      name: "Ping Identity",
      image: "https://logo.clearbit.com/pingidentity.com",
      href: docsUrl,
      alt: "Ping Identity logo"
    }
  ];

  const resourceTabs = [
    {
      id: "whats-new",
      title: "What's new in Identity Fabric",
      content: {
        title: "Latest identity and authentication features",
        description: "Stay updated with the newest capabilities in enterprise identity management, single sign-on, and multi-factor authentication for modern security.",
        image: "/identity-fabric.svg",
        links: [
          { text: "New SSO features", href: docsUrl },
          { text: "MFA enhancements", href: docsUrl },
          { text: "Integration updates", href: docsUrl },
          { text: "Security improvements", href: docsUrl }
        ]
      }
    },
    {
      id: "compare",
      title: "Compare identity solutions",
      content: {
        title: "Why choose Identity Fabric",
        description: "Compare our enterprise identity management capabilities with other solutions and see why organizations choose us for comprehensive authentication and access control.",
        image: "/identity-fabric.svg",
        links: [
          { text: "Identity solution comparison", href: docsUrl },
          { text: "Feature comparison matrix", href: docsUrl },
          { text: "Implementation guide", href: docsUrl },
          { text: "Migration assistance", href: docsUrl }
        ]
      }
    },
    {
      id: "learning",
      title: "Master Identity Fabric",
      content: {
        title: "Learn identity management best practices",
        description: "Master enterprise identity and access management with comprehensive guides, best practices, and training materials for security professionals and IT administrators.",
        image: "/identity-fabric.svg",
        links: [
          { text: "Identity management guide", href: docsUrl },
          { text: "SSO implementation best practices", href: docsUrl },
          { text: "Security configuration strategies", href: docsUrl },
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
      title: "Contact security team",
      href: productUrl,
      icon: "contact"
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="sr-only">Identity Fabric | Authentication, SSO & MFA Platform</h1>
        
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="Identity Fabric"
          description="Enterprise identity management platform offering comprehensive SSO, MFA, OAuth, and LDAP integrations. Streamline user access while enhancing security with advanced authentication and centralized identity management for enterprise applications."
          ctaButtons={ctaButtons}
          mediaType="mockup"
          mockup={{
            type: "dashboard",
            title: "Identity Management Console",
            description: "Enterprise authentication and single sign-on management"
          }}
        />

        <ProductPromo cards={promoCards} />
        <ProductExplorer title="Identity Fabric" tabs={explorerTabs} />
        <ProductWhyChoose 
          title="Why choose Identity Fabric?" 
          items={whyChooseItems}
          customerReference={customerReference}
        />
        <ProductCustomerLogos
          title="Identity management success stories"
          description="Learn why security professionals and IT administrators choose Identity Fabric for enterprise authentication and comprehensive access management."
          viewMoreText="View more success stories"
          viewMoreHref={docsUrl}
          logos={customerLogos}
        />
        <ProductResources 
          title="Resources"
          tabs={resourceTabs}
        />
        <ProductCTABanner
          title="The Enterprise Identity Guide"
          description="We've compiled identity management strategies, authentication best practices, and security implementation techniques for modern enterprise identity and access management."
          image="/identity-fabric.svg"
          buttonText="Get the identity guide"
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
