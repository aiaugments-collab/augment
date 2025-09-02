import { Metadata } from 'next';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  Testimonials, 
  CTASection
} from '../../../../components/sections';

export const metadata: Metadata = {
  title: 'Diversity & Inclusion | Augment Careers',
  description: 'Learn about Augment\'s commitment to diversity, inclusion, and creating an equitable workplace where everyone can thrive.',
  keywords: 'diversity, inclusion, equity, workplace culture, Augment careers, equal opportunity',
};

export default function DiversityInclusionPage() {
  // Hero Section Data
  const heroButtons = [
    {
      text: 'Join Our Team',
      href: 'https://careers.augment.com/jobs',
      variant: 'primary' as const,
      target: '_blank' as const
    },
    {
      text: 'Learn About Our Culture',
      href: '/careers/culture/',
      variant: 'secondary' as const
    }
  ];

  // Our Commitment Data
  const commitmentAreas = [
    {
      id: 'inclusive-hiring',
      title: 'Inclusive Hiring',
      description: 'We actively work to eliminate bias in our hiring process and ensure equal opportunities for all candidates.',
      ctaText: 'Learn more',
      ctaLink: '/careers/diversity-inclusion/hiring/'
    },
    {
      id: 'employee-resource-groups',
      title: 'Employee Resource Groups',
      description: 'Our ERGs provide community, professional development, and advocacy for underrepresented groups.',
      ctaText: 'Explore ERGs',
      ctaLink: '/careers/diversity-inclusion/ergs/'
    },
    {
      id: 'leadership-development',
      title: 'Leadership Development',
      description: 'Programs designed to develop diverse leaders and create pathways to advancement for all employees.',
      ctaText: 'View programs',
      ctaLink: '/careers/diversity-inclusion/leadership/'
    }
  ];

  // Diversity Metrics Data
  const diversityMetrics = [
    {
      id: 'workforce-diversity',
      title: 'Workforce Diversity',
      description: 'Our commitment to building a diverse workforce across all levels and functions.',
      ctaText: 'View diversity report',
      ctaLink: '/careers/diversity-inclusion/report/',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'pay-equity',
      title: 'Pay Equity',
      description: 'Regular audits and adjustments to ensure fair compensation across all demographics.',
      ctaText: 'Learn about equity',
      ctaLink: '/careers/diversity-inclusion/pay-equity/',
      image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'inclusive-culture',
      title: 'Inclusive Culture',
      description: 'Creating an environment where everyone feels valued, respected, and empowered to contribute.',
      ctaText: 'Explore culture',
      ctaLink: '/careers/culture/',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&faces'
    }
  ];

  // Employee Testimonials
  const testimonials = [
    {
      id: 'testimonial-1',
      quote: 'Augment\'s commitment to diversity isn\'t just words on a page. I\'ve seen real change and feel genuinely supported in my career growth here.',
      author: 'Maria Rodriguez',
      title: 'Senior Software Engineer',
      company: 'Augment',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616c0763c2e?w=100&h=100&fit=crop&crop=faces'
    },
    {
      id: 'testimonial-2',
      quote: 'The Employee Resource Groups have been instrumental in my professional development and helping me build meaningful connections across the company.',
      author: 'James Chen',
      title: 'Product Manager',
      company: 'Augment',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces'
    }
  ];

  // CTA Actions
  const ctaActions = [
    {
      title: 'Join Our Inclusive Team',
      description: 'Explore career opportunities and be part of building the future of AI.',
      href: 'https://careers.augment.com/jobs',
      buttonText: 'View open positions',
      icon: '🚀',
      target: '_blank' as const
    },
    {
      title: 'Learn More About Our Culture',
      description: 'Discover what makes Augment a great place to work for everyone.',
      href: '/careers/culture/',
      buttonText: 'Explore culture',
      icon: '🌟'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        {/* SEO and Accessibility */}
        <h1 className="sr-only">Diversity & Inclusion | Augment Careers</h1>

        {/* Hero Section */}
        <SectionHero
          title="Diversity & Inclusion"
          subtitle="Building an inclusive future together"
          description="At Augment, we believe that diverse perspectives drive innovation. We're committed to creating an inclusive workplace where everyone can thrive and contribute to shaping the future of AI."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Diverse team collaborating at Augment"
        />

        {/* Our Commitment Section */}
        <InfoColumns
          title="Our Commitment to Inclusion"
          description="We're taking concrete actions to build a more diverse and inclusive workplace"
          columns={commitmentAreas}
          columnsCount={3}
          backgroundColor="bg-gray-50"
        />

        {/* Diversity Metrics */}
        <FeaturedCards
          title="Measuring Our Progress"
          description="Transparency and accountability in our diversity and inclusion efforts"
          cards={diversityMetrics}
          columns={3}
          backgroundColor="bg-white"
        />

        {/* Employee Voices */}
        <Testimonials
          title="Employee Voices"
          description="Hear from our team members about their experiences at Augment"
          testimonials={testimonials}
          backgroundColor="bg-gray-50"
        />

        {/* Diversity Stats Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Our Progress
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Key metrics showing our commitment to building a diverse and inclusive workforce
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  45%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Women in Leadership
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  60%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Underrepresented Groups
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  8
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Employee Resource Groups
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  95%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Inclusion Survey Score
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Ready to join our inclusive team?"
          actions={ctaActions}
          columns={2}
          backgroundColor="bg-white"
        />
      </div>
    </main>
  );
}
