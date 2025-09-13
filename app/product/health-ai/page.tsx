import { ProductHero } from "@/components/product/ProductHero";
import { ProductPromo } from "@/components/product/ProductPromo";
import { ProductExplorer } from "@/components/product/ProductExplorer";
import { ProductWhyChoose } from "@/components/product/ProductWhyChoose";
import { ProductCustomerLogos } from "@/components/product/ProductCustomerLogos";
import { ProductResources } from "@/components/product/ProductResources";
import { ProductCTABanner } from "@/components/product/ProductCTABanner";
import { ProductGetStarted } from "@/components/product/ProductGetStarted";
import { Breadcrumb } from "@/components/ui/Breadcrumb";


export default function HealthAIPage() {
  const ctaButtons = [
    {
      text: "Start for Free",
      href: "https://healthai.augment.cfd/",
      variant: "primary" as const
    },
    {
      text: "Learn More",
      href: "https://healthai.augment.cfd/",
      variant: "secondary" as const
    }
  ];

  const promoCards = [
    {
      id: "webinar-ai-health",
      image: "/products/health-ai/02.png",
      title: "Webinar: Building AI-Driven Health Experiences",
      description: "Discover how AI can transform your health management and deliver personalized insights across every aspect of your wellness journey.",
      ctaText: "Register today",
      ctaLink: "https://healthai.augment.cfd/",
      target: "_blank" as const
    },
    {
      id: "forrester-health-ai",
      image: "/products/health-ai/03.png",
      title: "Augment named a Leader in The Forrester Wave™: AI-Powered Health Solutions, Q1 2025",
      description: "Find out why Augment was recognized for excellence in AI-driven health intelligence and patient care automation.",
      ctaText: "Access the Forrester report",
      ctaLink: "https://healthai.augment.cfd/",
      target: "_blank" as const
    },
    {
      id: "health-growth-guide",
      image: "/products/health-ai/04.png",
      title: "Accelerate sustainable health management with AI automation",
      description: "Discover how to optimize your health journey by implementing intelligent automation for symptom tracking, medication management, and wellness insights.",
      ctaText: "Read the solution brochure (PDF)",
      ctaLink: "https://healthai.augment.cfd/",
      target: "_blank" as const
    }
  ];

  const explorerTabs = [
    {
      id: "ai-health-assistant",
      title: "AI Health Assistant",
      content: {
        title: "Intelligent health insights powered by AI",
        description: "Get personalized health recommendations, symptom analysis, and wellness guidance powered by advanced AI technology that learns from your health patterns and provides actionable insights.",
        buttons: [
          { text: "Try AI Assistant", href: "https://healthai.augment.cfd/", variant: "primary" as const },
          { text: "See how it works", href: "https://healthai.augment.cfd/", variant: "secondary" as const }
        ],
        features: {
          title: "Key Features",
          items: [
            "Personalized health insights",
            "Symptom pattern analysis",
            "AI-powered recommendations",
            "Health goal tracking",
            "Wellness coaching",
            "Risk assessment alerts"
          ]
        },
        image: "/products/health-ai/02.png",
        imageAlt: "AI Health Assistant dashboard"
      }
    },
    {
      id: "smart-health-tracking",
      title: "Smart Health Tracking",
      content: {
        title: "Effortless health monitoring and tracking",
        description: "Monitor your vitals, symptoms, and wellness metrics with intelligent automation that captures data seamlessly and provides meaningful health insights over time.",
        buttons: [
          { text: "Start tracking", href: "https://healthai.augment.cfd/", variant: "primary" as const },
          { text: "View tracking demo", href: "https://healthai.augment.cfd/", variant: "secondary" as const }
        ],
        features: {
          title: "Tracking Features",
          items: [
            "Automated vital monitoring",
            "Symptom logging",
            "Activity tracking",
            "Sleep pattern analysis",
            "Nutrition monitoring",
            "Mood tracking"
          ]
        },
        image: "/products/health-ai/03.png",
        imageAlt: "Smart health tracking interface"
      }
    },
    {
      id: "medication-management",
      title: "Medication Management",
      content: {
        title: "Never miss a dose with intelligent reminders",
        description: "Comprehensive medication management with smart reminders, interaction checking, and adherence tracking to ensure you stay on top of your health regimen.",
        buttons: [
          { text: "Manage medications", href: "https://healthai.augment.cfd/", variant: "primary" as const },
          { text: "Learn more", href: "https://healthai.augment.cfd/", variant: "secondary" as const }
        ],
        features: {
          title: "Management Features",
          items: [
            "Smart reminder system",
            "Drug interaction alerts",
            "Adherence tracking",
            "Prescription management",
            "Refill reminders",
            "Side effect monitoring"
          ]
        },
        image: "/products/health-ai/04.png",
        imageAlt: "Medication management dashboard"
      }
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "AI-Powered Health Insights",
      description: "Advanced AI technology analyzes your health patterns and provides personalized recommendations for better wellness outcomes. Get intelligent insights that help you make informed decisions about your health.",
      link: {
        text: "Explore AI health insights",
        href: "https://healthai.augment.cfd/"
      }
    },
    {
      number: "02",
      title: "Comprehensive Health Tracking",
      description: "Monitor all aspects of your health from symptoms and vitals to medications and appointments in one unified platform. Track your wellness journey with precision and ease.",
      link: {
        text: "Learn about health tracking",
        href: "https://healthai.augment.cfd/"
      }
    },
    {
      number: "03",
      title: "Privacy & Security First",
      description: "Your health data is encrypted and completely secure. We prioritize your privacy with enterprise-grade security measures and HIPAA compliance.",
      link: {
        text: "View security features",
        href: "https://healthai.augment.cfd/"
      }
    },
    {
      number: "04",
      title: "Healthcare Professional Integration",
      description: "Share insights with your healthcare providers and collaborate on your health journey with data-driven decision making and seamless integration.",
      link: {
        text: "See integration options",
        href: "https://healthai.augment.cfd/"
      }
    }
  ];

  const customerLogos = [
    {
      name: "Mayo Clinic",
      image: "https://logo.clearbit.com/mayoclinic.org",
      href: "https://healthai.augment.cfd/",
      alt: "Mayo Clinic logo"
    },
    {
      name: "Johns Hopkins",
      image: "https://logo.clearbit.com/hopkinsmedicine.org",
      href: "https://healthai.augment.cfd/",
      alt: "Johns Hopkins logo"
    },
    {
      name: "Cleveland Clinic",
      image: "https://logo.clearbit.com/clevelandclinic.org",
      href: "https://healthai.augment.cfd/",
      alt: "Cleveland Clinic logo"
    },
    {
      name: "Kaiser Permanente",
      image: "https://logo.clearbit.com/kp.org",
      href: "https://healthai.augment.cfd/",
      alt: "Kaiser Permanente logo"
    },
    {
      name: "Teladoc",
      image: "https://logo.clearbit.com/teladoc.com",
      href: "https://healthai.augment.cfd/",
      alt: "Teladoc logo"
    },
    {
      name: "Philips Healthcare",
      image: "https://logo.clearbit.com/philips.com",
      href: "https://healthai.augment.cfd/",
      alt: "Philips Healthcare logo"
    }
  ];

  const resourceTabs = [
    {
      id: "guides",
      title: "Guides",
      content: {
        title: "AI Health & Wellness Platform Implementation Guides",
        description: "Comprehensive guides to help you maximize your health management with AI-powered insights and tracking.",
        image: "/products/health-ai/02.png",
        links: [
          {
            text: "Complete Guide to AI-Powered Health Management",
            href: "https://healthai.augment.cfd/",
            target: "_blank"
          },
          {
            text: "Getting Started with AI Health & Wellness Platform",
            href: "https://healthai.augment.cfd/",
            target: "_blank"
          },
          {
            text: "Privacy and Security Best Practices",
            href: "https://healthai.augment.cfd/",
            target: "_blank"
          }
        ]
      }
    },
    {
      id: "webinars",
      title: "Webinars",
      content: {
        title: "AI Health & Wellness Platform Webinars and Training",
        description: "Join our experts to discover how AI can transform your approach to health monitoring and wellness management.",
        image: "/products/health-ai/03.png",
        links: [
          {
            text: "Smart Health Tracking with AI",
            href: "https://healthai.augment.cfd/",
            target: "_blank"
          },
          {
            text: "Medication Management Best Practices",
            href: "https://healthai.augment.cfd/",
            target: "_blank"
          },
          {
            text: "AI-Powered Health Insights Workshop",
            href: "https://healthai.augment.cfd/",
            target: "_blank"
          }
        ]
      }
    },
    {
      id: "case-studies",
      title: "Case Studies",
      content: {
        title: "AI Health & Wellness Platform Success Stories",
        description: "See how our AI-powered health management system has helped users achieve better health outcomes.",
        image: "/products/health-ai/04.png",
        links: [
          {
            text: "Improving Medication Adherence with AI",
            href: "https://healthai.augment.cfd/",
            target: "_blank"
          },
          {
            text: "Chronic Disease Management Success",
            href: "https://healthai.augment.cfd/",
            target: "_blank"
          },
          {
            text: "Preventive Care with AI Insights",
            href: "https://healthai.augment.cfd/",
            target: "_blank"
          }
        ]
      }
    }
  ];

  return (
    <div>
      <Breadcrumb />
      
            <ProductHero
        title="AI-Powered Health Intelligence"
        description="AI Health & Wellness Platform is building agents that track symptoms, analyze patterns, and provide personalized health insights on autopilot for hours."
        ctaButtons={ctaButtons}
        mediaType="image"
        mediaUrl="/products/health-ai/01.png"
        mediaAlt="AI Health & Wellness Platform dashboard showing health tracking and AI insights"
      />

      <ProductPromo cards={promoCards} />

      <ProductExplorer
        title="Powerful Features"
        tabs={explorerTabs}
      />

      <ProductWhyChoose
        title="Why Choose AI Health & Wellness Platform?"
        items={whyChooseItems}
      />

      <ProductCustomerLogos
        title="Trusted by Healthcare Professionals"
        description="Leading healthcare organizations trust AI Health & Wellness Platform"
        viewMoreText="View all customers"
        viewMoreHref="https://healthai.augment.cfd/"
        logos={customerLogos}
      />

      <ProductResources
        title="AI Health & Wellness Platform Resources"
        tabs={resourceTabs}
      />

      <ProductCTABanner
        title="The AI Health & Wellness Platform Playbook series"
        description="We've compiled the secrets to our AI-powered health strategy, implementation best practices, and wellness transformation methodology. And we want to share them with you."
        image="/products/health-ai/05.png"
        buttonText="Get the details"
        buttonHref="https://healthai.augment.cfd/"
      />

      <ProductGetStarted
        title="Get started with AI Health & Wellness Platform"
        actions={[
          {
            title: "Start for Free",
            href: "https://healthai.augment.cfd/",
            icon: "demo",
            target: "_blank"
          },
          {
            title: "Schedule a Demo",
            href: "https://healthai.augment.cfd/",
            icon: "calendar",
            target: "_blank"
          },
          {
            title: "Contact Sales",
            href: "https://healthai.augment.cfd/",
            icon: "phone",
            target: "_blank"
          }
        ]}
      />
    </div>
  );
}
