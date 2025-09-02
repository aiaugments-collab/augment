import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  TabbedContent, 
  Testimonials, 
  LogoGrid, 
  CTASection,
  ContentTabs 
} from "@/components/sections";

export default function PartnersPage() {
  // Content tabs similar to Oracle's CT12v0
  const contentTabs = [
    { id: 'cloud', title: 'Cloud', href: '#cloud', isActive: true },
    { id: 'healthcare', title: 'Industry Healthcare', href: '#healthcare' },
    { id: 'license', title: 'License & Hardware', href: '#license' }
  ];

  // Hero section CTA buttons
  const heroButtons = [
    {
      text: "Join Now",
      href: "/partners/join",
      variant: "primary" as const
    },
    {
      text: "Learn More",
      href: "/partners/program",
      variant: "secondary" as const
    }
  ];

  // Featured program levels
  const programLevels = [
    {
      id: "level-0",
      title: "Level 0",
      description: "Lead Generation Listings and certain Quick Deployment Listings in Augment Marketplace. No other program benefits or distribution agreements available.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=faces",
      ctaText: "Learn about Level 0",
      ctaLink: "/partners/level-0"
    },
    {
      id: "level-1", 
      title: "Level 1",
      description: "5 seats for advanced training, enabler for dev/test environments, private offer listing capability.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=faces",
      ctaText: "Explore Level 1 benefits",
      ctaLink: "/partners/level-1"
    },
    {
      id: "level-2",
      title: "Level 2", 
      description: "100 seats for advanced training, 125K Augment Partner Credits, managed regional collaboration, private offer listing.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop&crop=faces",
      ctaText: "See Level 2 features",
      ctaLink: "/partners/level-2"
    },
    {
      id: "level-3",
      title: "Level 3",
      description: "500 seats for advanced training, 750K Augment Partner Credits, managed global collaboration, private offer listening.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop&crop=faces",
      ctaText: "Discover Level 3 advantages",
      ctaLink: "/partners/level-3"
    }
  ];

  // Why partner benefits
  const partnerBenefits = [
    {
      id: "training",
      title: "Training and Enablement",
      description: "Increase your teams' productivity and performance, ensuring they are sales ready, delivery ready, and success ready.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop&crop=faces"
    },
    {
      id: "gtm",
      title: "Go-To-Market Collaboration", 
      description: "Leverage Augment expertise to position and sell joint solutions and services.",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop&crop=faces"
    },
    {
      id: "technical",
      title: "Technical Accelerators",
      description: "Shorten sales cycles with integration validations, development and testing environments, and other programs.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&crop=faces"
    },
    {
      id: "support",
      title: "Success Support",
      description: "Capitalize on a wide range of resources to enable customer success and, ultimately, your success.",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop&crop=faces"
    }
  ];

  // Partner testimonials
  const partnerTestimonials = [
    {
      id: "accenture",
      quote: "Together with Augment, we're delivering the enterprise-grade AI solutions organizations need to drive new value and completely reimagine business functions.",
      author: "Lan Guan",
      title: "Chief AI Officer",
      company: "Accenture",
      companyLogo: "https://logo.clearbit.com/accenture.com"
    },
    {
      id: "thomson-reuters", 
      quote: "Together with Augment we are delivering increased value to our mutual customers, providing world-class solutions to support them in doing business with confidence.",
      author: "Chris Carlstead",
      title: "Head of Partnerships & Alliances",
      company: "Thomson Reuters",
      companyLogo: "https://logo.clearbit.com/thomsonreuters.com"
    },
    {
      id: "deloitte",
      quote: "Our collaboration with Augment demonstrates a partnership that extends beyond technology, highlighting their support and commitment to our project's goals.",
      author: "Sarah Johnson",
      title: "SVP of Global Product Development",
      company: "Deloitte",
      companyLogo: "https://logo.clearbit.com/deloitte.com"
    },
    {
      id: "pwc",
      quote: "Our partnership with Augment goes beyond just utilizing AI solutions. It's a shared commitment for customer success.",
      author: "Michael Chen",
      title: "Regional Director",
      company: "PwC",
      companyLogo: "https://logo.clearbit.com/pwc.com"
    }
  ];

  // Customer success logos
  const customerLogos = [
    { id: "microsoft", name: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com", href: "/customers/microsoft" },
    { id: "google", name: "Google", logo: "https://logo.clearbit.com/google.com", href: "/customers/google" },
    { id: "amazon", name: "Amazon", logo: "https://logo.clearbit.com/amazon.com", href: "/customers/amazon" },
    { id: "apple", name: "Apple", logo: "https://logo.clearbit.com/apple.com", href: "/customers/apple" },
    { id: "netflix", name: "Netflix", logo: "https://logo.clearbit.com/netflix.com", href: "/customers/netflix" },
    { id: "salesforce", name: "Salesforce", logo: "https://logo.clearbit.com/salesforce.com", href: "/customers/salesforce" },
    { id: "adobe", name: "Adobe", logo: "https://logo.clearbit.com/adobe.com", href: "/customers/adobe" },
    { id: "shopify", name: "Shopify", logo: "https://logo.clearbit.com/shopify.com", href: "/customers/shopify" },
    { id: "slack", name: "Slack", logo: "https://logo.clearbit.com/slack.com", href: "/customers/slack" },
    { id: "zoom", name: "Zoom", logo: "https://logo.clearbit.com/zoom.us", href: "/customers/zoom" },
    { id: "atlassian", name: "Atlassian", logo: "https://logo.clearbit.com/atlassian.com", href: "/customers/atlassian" },
    { id: "spotify", name: "Spotify", logo: "https://logo.clearbit.com/spotify.com", href: "/customers/spotify" }
  ];

  // Get started actions
  const getStartedActions = [
    {
      title: "Request a demo",
      description: "See Augment's partner program in action and learn how we can help grow your business.",
      href: "/partners/demo",
      icon: "📊",
      buttonText: "Schedule Demo"
    },
    {
      title: "Join our network", 
      description: "Get partner insights and business opportunities delivered to your inbox.",
      href: "/partners/network",
      icon: "🌐",
      buttonText: "Join Network"
    }
  ];

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="sr-only">Augment Partner Network | Partner Program</h1>
        
        {/* Content Navigation Tabs */}
        <ContentTabs tabs={contentTabs} />

        {/* Hero Section */}
        <SectionHero
          title="Enhanced Partner Network Program"
          subtitle="Now open for enrollment"
          description="For more than 10 years, Augment has been working closely with partners to help drive joint customer success and business momentum. We are incredibly proud of our impact helping organizations automate their operations so they can achieve more with less, and we've enhanced our partner program to further improve our collaboration and the value we deliver to customers."
          ctaButtons={heroButtons}
          backgroundImage="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop&crop=faces"
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Partner collaboration dashboard"
        />

        {/* Why Partner Section */}
        <InfoColumns
          title="Why Partner with Augment?"
          description="Accelerate your business momentum and drive greater customer success through:"
          columns={partnerBenefits}
          columnsCount={4}
          backgroundColor="bg-white"
        />

        {/* Program Levels */}
        <FeaturedCards
          title="Enhanced Augment PartnerNetwork Overview"
          description="We put you in the driver's seat: select the level, benefits, and incentives that are best for you."
          cards={programLevels}
          columns={2}
          backgroundColor="bg-slate-100"
        />

        {/* Partner Testimonials */}
        <Testimonials
          title="What do Augment partners say about working with Augment?"
          testimonials={partnerTestimonials}
          columns={4}
          backgroundColor="bg-white"
        />

        {/* Customer Success Stories */}
        <LogoGrid
          title="Exceptional brands rely on Augment partners to unlock endless possibilities"
          description="Discover how partners provide solutions and services to Augment's customers."
          logos={customerLogos}
          columns={6}
          backgroundColor="bg-gray-50"
          viewMoreText="View more customer successes"
          viewMoreHref="/customers"
        />

        {/* Get Started Section */}
        <CTASection
          title="Get started"
          actions={getStartedActions}
          columns={2}
          backgroundColor="bg-gray-50"
        />
      </main>
    </div>
  );
}
