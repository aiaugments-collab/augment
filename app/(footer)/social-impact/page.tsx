import { Metadata } from 'next';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection,
  Testimonials
} from '../../../components/sections';

export const metadata: Metadata = {
  title: 'Social Impact | Augment Corporate Responsibility',
  description: 'Discover Augment\'s commitment to social responsibility, sustainability, and positive global impact through AI automation technology.',
  keywords: 'social impact, corporate responsibility, sustainability, AI for good, community impact, environmental responsibility',
};

export default function SocialImpactPage() {
  // Hero Section Data
  const heroButtons = [
    {
      text: 'Our Initiatives',
      href: '/social-impact/initiatives/',
      variant: 'primary' as const
    },
    {
      text: 'Impact Report',
      href: '/social-impact/annual-report/',
      variant: 'secondary' as const
    }
  ];

  // Impact Areas Data
  const impactAreas = [
    {
      id: 'education-access',
      title: 'Education & Digital Equity',
      description: 'Providing AI education and technology access to underserved communities, bridging the digital divide through skills training and resources.',
      ctaText: 'Learn more',
      ctaLink: '/social-impact/education/',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'environmental-sustainability',
      title: 'Environmental Sustainability',
      description: 'Reducing carbon footprint through efficient AI systems and helping organizations optimize resource usage for environmental benefits.',
      ctaText: 'See sustainability',
      ctaLink: '/social-impact/environment/',
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'healthcare-access',
      title: 'Healthcare Innovation',
      description: 'Democratizing healthcare through AI-powered solutions that improve access, reduce costs, and enhance patient outcomes globally.',
      ctaText: 'Explore healthcare',
      ctaLink: '/social-impact/healthcare/',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'economic-opportunity',
      title: 'Economic Opportunity',
      description: 'Creating jobs, supporting small businesses, and fostering economic growth through AI automation and technology innovation.',
      ctaText: 'View opportunities',
      ctaLink: '/social-impact/economic-opportunity/',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  // Sustainability Initiatives Data
  const sustainabilityInitiatives = [
    {
      id: 'carbon-neutral',
      title: 'Carbon Neutral Operations',
      description: 'Achieved carbon neutrality across all operations and committed to net-zero emissions by 2030.',
      ctaText: 'View commitment',
      ctaLink: '/social-impact/carbon-neutral/'
    },
    {
      id: 'green-ai',
      title: 'Green AI Technology',
      description: 'Developing energy-efficient AI algorithms that reduce computational costs and environmental impact.',
      ctaText: 'Learn about Green AI',
      ctaLink: '/social-impact/green-ai/'
    },
    {
      id: 'circular-economy',
      title: 'Circular Economy',
      description: 'Promoting sustainable business practices through AI-optimized resource management and waste reduction.',
      ctaText: 'Explore solutions',
      ctaLink: '/social-impact/circular-economy/'
    },
    {
      id: 'renewable-energy',
      title: 'Renewable Energy',
      description: '100% renewable energy for all data centers and offices, with smart grid optimization through AI.',
      ctaText: 'See energy use',
      ctaLink: '/social-impact/renewable-energy/'
    },
    {
      id: 'sustainable-supply-chain',
      title: 'Sustainable Supply Chain',
      description: 'Working with suppliers to reduce environmental impact and promote ethical business practices.',
      ctaText: 'Supply chain impact',
      ctaLink: '/social-impact/supply-chain/'
    },
    {
      id: 'biodiversity',
      title: 'Biodiversity Protection',
      description: 'Supporting conservation efforts and using AI to monitor and protect endangered ecosystems.',
      ctaText: 'Conservation efforts',
      ctaLink: '/social-impact/biodiversity/'
    }
  ];

  // Community Programs Data
  const communityPrograms = [
    {
      id: 'ai-for-nonprofits',
      title: 'AI for Nonprofits Program',
      description: 'Free AI automation tools and consulting services for qualifying nonprofit organizations to amplify their impact.',
      ctaText: 'Apply for program',
      ctaLink: '/social-impact/nonprofits/',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'stem-education',
      title: 'STEM Education Initiative',
      description: 'Supporting K-12 STEM education through AI curriculum, teacher training, and technology donations to schools.',
      ctaText: 'Support STEM',
      ctaLink: '/social-impact/stem-education/',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'disaster-response',
      title: 'Disaster Response Technology',
      description: 'Providing AI-powered disaster response and recovery tools to emergency services and humanitarian organizations.',
      ctaText: 'Emergency response',
      ctaLink: '/social-impact/disaster-response/',
      image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  // Impact Testimonials
  const impactTestimonials = [
    {
      id: 'nonprofit-testimonial',
      quote: 'Augment\'s AI for Nonprofits program helped us automate our donor management, increasing our efficiency by 300% and allowing us to focus more resources on our mission.',
      author: 'Maria Rodriguez',
      title: 'Executive Director',
      company: 'Global Education Foundation',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616c0763c2e?w=100&h=100&fit=crop&crop=faces'
    },
    {
      id: 'school-testimonial',
      quote: 'The STEM education resources and AI curriculum from Augment transformed how we teach technology. Our students are now prepared for the future job market.',
      author: 'Dr. James Wilson',
      title: 'Principal',
      company: 'Lincoln High School',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces'
    }
  ];

  // Get Involved Actions
  const getInvolvedActions = [
    {
      title: 'Volunteer Opportunities',
      description: 'Join our employee volunteer programs and make a difference in your local community.',
      href: '/social-impact/volunteer/',
      buttonText: 'Get involved',
      icon: ''
    },
    {
      title: 'Partnership Applications',
      description: 'Partner with us on social impact initiatives and community programs.',
      href: '/social-impact/partnerships/',
      buttonText: 'Apply to partner',
      icon: ''
    },
    {
      title: 'Grant Applications',
      description: 'Apply for grants and funding for qualifying social impact projects.',
      href: '/social-impact/grants/',
      buttonText: 'Apply for grants',
      icon: ''
    },
    {
      title: 'Impact Measurement',
      description: 'Learn how we measure and report on our social and environmental impact.',
      href: '/social-impact/measurement/',
      buttonText: 'View metrics',
      icon: ''
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        {/* SEO and Accessibility */}
        <h1 className="sr-only">Social Impact | Augment Corporate Responsibility</h1>

        {/* Hero Section */}
        <SectionHero
          title="Social Impact"
          subtitle="Technology for good, impact for all"
          description="At Augment, we believe technology should benefit everyone. Discover how we're using AI automation to create positive social and environmental impact, while building a more equitable and sustainable future."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Community volunteers working together"
        />

        {/* Impact by Numbers */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Our Impact by the Numbers
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Measurable progress toward our social and environmental commitments
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  500+
                </div>
                <div className="text-base text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Nonprofits Supported
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  100K+
                </div>
                <div className="text-base text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Students Reached
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Carbon
                </div>
                <div className="text-base text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Neutral Since 2023
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  $10M+
                </div>
                <div className="text-base text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Community Investment
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Areas */}
        <FeaturedCards
          title="Areas of Impact"
          description="Our commitment to creating positive change across multiple dimensions"
          cards={impactAreas}
          columns={2}
          backgroundColor="bg-white"
        />

        {/* Sustainability Initiatives */}
        <InfoColumns
          title="Sustainability Initiatives"
          description="Leading the way in environmental responsibility and sustainable technology"
          columns={sustainabilityInitiatives}
          columnsCount={3}
          backgroundColor="bg-gray-50"
        />

        {/* Community Programs */}
        <FeaturedCards
          title="Community Programs"
          description="Empowering communities through technology and education"
          cards={communityPrograms}
          columns={3}
          backgroundColor="bg-white"
        />

        {/* UN SDGs Alignment */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                UN Sustainable Development Goals
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Our initiatives directly support multiple UN Sustainable Development Goals
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-4xl mb-4"></div>
                <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Quality Education
                </h3>
                <p className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  SDG 4: Ensuring inclusive and equitable quality education
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-4xl mb-4"></div>
                <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Clean Energy
                </h3>
                <p className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  SDG 7: Affordable and clean energy for all
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-4xl mb-4"></div>
                <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Decent Work
                </h3>
                <p className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  SDG 8: Decent work and economic growth
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-4xl mb-4"></div>
                <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Innovation
                </h3>
                <p className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  SDG 9: Industry, innovation, and infrastructure
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-4xl mb-4"></div>
                <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Climate Action
                </h3>
                <p className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  SDG 13: Climate action and environmental protection
                </p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg text-center">
                <div className="text-4xl mb-4"></div>
                <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Partnerships
                </h3>
                <p className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  SDG 17: Partnerships for the goals
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Testimonials */}
        <Testimonials
          title="Community Impact Stories"
          testimonials={impactTestimonials}
          columns={2}
          backgroundColor="bg-gray-50"
        />

        {/* Get Involved */}
        <CTASection
          title="Get Involved"
          description="Join us in creating positive impact through technology and community engagement"
          actions={getInvolvedActions}
          columns={2}
          backgroundColor="bg-white"
        />

        {/* Call to Action */}
        <section className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Partner with Us for Impact
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Whether you're a nonprofit, educational institution, or community organization, we'd love to explore how we can work together to create positive change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/partners"
                className="inline-flex items-center px-8 py-4 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Partner With Us
              </a>
              <a
                href="/corporate/contact/sales"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200 text-lg"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Contact Our Team
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
