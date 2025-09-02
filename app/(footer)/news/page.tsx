import { Metadata } from 'next';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection
} from '../../../components/sections';

export const metadata: Metadata = {
  title: 'News | Augment Press Releases and Company News',
  description: 'Latest news, press releases, and company announcements from Augment. Stay updated on AI automation innovations and business developments.',
  keywords: 'news, press releases, company news, announcements, AI automation news, business updates',
};

export default function NewsPage() {
  // Hero Section Data
  const heroButtons = [
    {
      text: 'Subscribe to News',
      href: '/news/subscribe/',
      variant: 'primary' as const
    },
    {
      text: 'Media Kit',
      href: '/news/media-kit/',
      variant: 'secondary' as const
    }
  ];

  // Latest News Data
  const latestNews = [
    {
      id: 'q4-2024-earnings',
      title: 'Augment Reports Record Q4 2024 Results',
      description: 'Company achieves $2.1B in annual revenue, up 28% year-over-year, driven by strong AI automation platform adoption across enterprises.',
      ctaText: 'Read full release',
      ctaLink: '/news/2024/q4-earnings-results/',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'ai-partnership-microsoft',
      title: 'Augment Announces Strategic Partnership with Microsoft',
      description: 'New collaboration will accelerate AI automation deployment on Azure, bringing advanced automation capabilities to millions of users.',
      ctaText: 'Learn more',
      ctaLink: '/news/2024/microsoft-partnership/',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'gartner-leader-2024',
      title: 'Augment Named Leader in Gartner Magic Quadrant',
      description: 'Third consecutive year as Leader in Gartner Magic Quadrant for Intelligent Process Automation platforms.',
      ctaText: 'View recognition',
      ctaLink: '/news/2024/gartner-magic-quadrant-leader/',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'new-ai-features',
      title: 'Augment Launches Advanced AI Features',
      description: 'New generative AI capabilities and enhanced machine learning models now available across the automation platform.',
      ctaText: 'Explore features',
      ctaLink: '/news/2024/new-ai-features-launch/',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  // News Categories Data
  const newsCategories = [
    {
      id: 'product-updates',
      title: 'Product Updates',
      description: 'Latest product releases, feature announcements, and platform enhancements.',
      ctaText: 'View product news',
      ctaLink: '/news/category/product-updates/'
    },
    {
      id: 'partnerships',
      title: 'Partnerships & Alliances',
      description: 'Strategic partnerships, integrations, and collaboration announcements.',
      ctaText: 'Partnership news',
      ctaLink: '/news/category/partnerships/'
    },
    {
      id: 'awards-recognition',
      title: 'Awards & Recognition',
      description: 'Industry awards, analyst recognition, and customer success stories.',
      ctaText: 'Awards & recognition',
      ctaLink: '/news/category/awards/'
    },
    {
      id: 'company-milestones',
      title: 'Company Milestones',
      description: 'Funding announcements, expansion news, and significant company achievements.',
      ctaText: 'Company milestones',
      ctaLink: '/news/category/milestones/'
    },
    {
      id: 'thought-leadership',
      title: 'Thought Leadership',
      description: 'Executive insights, industry trends, and expert commentary on AI automation.',
      ctaText: 'Thought leadership',
      ctaLink: '/news/category/thought-leadership/'
    },
    {
      id: 'events-webinars',
      title: 'Events & Webinars',
      description: 'Conference participation, webinar announcements, and event highlights.',
      ctaText: 'Events & webinars',
      ctaLink: '/news/category/events/'
    }
  ];

  // Recent Press Coverage Data
  const pressCoverage = [
    {
      id: 'techcrunch-feature',
      title: 'TechCrunch: "Augment\'s AI Platform Revolutionizes Enterprise Automation"',
      description: 'In-depth feature on how Augment\'s AI automation platform is transforming enterprise operations across industries.',
      ctaText: 'Read article',
      ctaLink: '/news/press-coverage/techcrunch-ai-platform-feature/',
      image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'forbes-ceo-interview',
      title: 'Forbes: CEO Interview on the Future of AI Automation',
      description: 'Exclusive interview with Augment\'s CEO discussing the company\'s vision and the future of intelligent automation.',
      ctaText: 'Watch interview',
      ctaLink: '/news/press-coverage/forbes-ceo-interview/',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'wsj-market-analysis',
      title: 'Wall Street Journal: AI Automation Market Analysis',
      description: 'Market analysis featuring Augment\'s position in the rapidly growing AI automation industry.',
      ctaText: 'Read analysis',
      ctaLink: '/news/press-coverage/wsj-market-analysis/',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  // Media Resources Data
  const mediaResources = [
    {
      title: 'Press Kit',
      description: 'Download logos, executive photos, company fact sheet, and brand guidelines.',
      href: '/news/media-kit/',
      buttonText: 'Download kit',
      icon: '📦'
    },
    {
      title: 'Executive Bios',
      description: 'Leadership team biographies and high-resolution executive photos.',
      href: '/news/executive-bios/',
      buttonText: 'View bios',
      icon: '👥'
    },
    {
      title: 'Media Contacts',
      description: 'Contact information for press inquiries and interview requests.',
      href: '/news/media-contacts/',
      buttonText: 'Contact media team',
      icon: '📞'
    },
    {
      title: 'Newsletter Signup',
      description: 'Subscribe to receive the latest news and announcements from Augment.',
      href: '/news/subscribe/',
      buttonText: 'Subscribe now',
      icon: '📧'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        {/* SEO and Accessibility */}
        <h1 className="sr-only">News | Augment Press Releases and Company News</h1>

        {/* Hero Section */}
        <SectionHero
          title="News"
          subtitle="Latest updates from Augment"
          description="Stay informed with the latest news, press releases, and company announcements from Augment. Discover our latest innovations, partnerships, and milestones in AI automation."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="News and media coverage"
        />

        {/* Latest News */}
        <FeaturedCards
          title="Latest News"
          description="Recent announcements and developments from Augment"
          cards={latestNews}
          columns={2}
          backgroundColor="bg-white"
        />

        {/* News Categories */}
        <InfoColumns
          title="News Categories"
          description="Explore news by category to find what interests you most"
          columns={newsCategories}
          columnsCount={3}
          backgroundColor="bg-gray-50"
        />

        {/* Press Coverage */}
        <FeaturedCards
          title="In the Media"
          description="Recent press coverage and media mentions"
          cards={pressCoverage}
          columns={3}
          backgroundColor="bg-white"
        />

        {/* News Timeline */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                2024 Highlights
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Key milestones and achievements from this year
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">Q1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Series C Funding
                    </h3>
                    <p className="text-gray-300 text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Raised $150M in Series C funding to accelerate AI automation innovation and global expansion.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">Q2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      European Expansion
                    </h3>
                    <p className="text-gray-300 text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Opened new offices in London, Berlin, and Paris to serve growing European customer base.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">Q3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      AI Platform 3.0
                    </h3>
                    <p className="text-gray-300 text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Launched major platform update with advanced generative AI capabilities and enhanced security.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-[#C74634] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">Q4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Record Revenue
                    </h3>
                    <p className="text-gray-300 text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Achieved record $2.1B annual revenue with 28% year-over-year growth and 15,000+ customers.
                    </p>
                  </div>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                    Looking Ahead to 2025
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                    <li>• Launch of Augment AI World conference</li>
                    <li>• New AI automation capabilities</li>
                    <li>• Expansion into Asia-Pacific markets</li>
                    <li>• Strategic acquisitions and partnerships</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Media Resources */}
        <CTASection
          title="Media Resources"
          description="Everything you need for press coverage and media inquiries"
          actions={mediaResources}
          columns={2}
          backgroundColor="bg-gray-50"
        />

        {/* Press Contact */}
        <section className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Media Inquiries
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              For press inquiries, interview requests, or additional information, please contact our media relations team.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Press Contact
                </h3>
                <div className="space-y-2 text-red-100">
                  <div>Sarah Johnson</div>
                  <div>Director of Communications</div>
                  <a href="mailto:press@augment.com" className="hover:text-white transition-colors">
                    press@augment.com
                  </a>
                  <div>+1 (555) 123-4567</div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Investor Relations
                </h3>
                <div className="space-y-2 text-red-100">
                  <div>Michael Chen</div>
                  <div>VP of Investor Relations</div>
                  <a href="mailto:investor_relations@augment.com" className="hover:text-white transition-colors">
                    investor_relations@augment.com
                  </a>
                  <div>+1 (555) 987-6543</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
