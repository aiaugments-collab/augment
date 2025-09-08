'use client';
import { Metadata } from 'next';
import { useState } from 'react';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection
} from '../../../components/sections';

export default function BlogsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [subscribeForm, setSubscribeForm] = useState({
    email: '',
    interests: []
  });
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
      setSubscribeForm({ email: '', interests: [] });
    }, 3000);
  };

  const heroButtons = [
    {
      text: 'Browse Articles',
      href: '#articles',
      variant: 'primary' as const
    },
    {
      text: 'Subscribe to Blog',
      href: '#subscribe',
      variant: 'secondary' as const
    }
  ];

  const featuredArticles = [
    {
      id: 'ai-agents-guide',
      title: 'What are AI Agents? Complete Guide to Intelligent Automation',
      description: 'Comprehensive guide to understanding AI agents, their capabilities, and how they\'re transforming business operations across industries.',
      ctaText: 'Read article',
      ctaLink: '/learn/what-are-ai-agents/',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'intelligent-automation',
      title: 'What is Intelligent Automation? Benefits and Implementation',
      description: 'Explore how intelligent automation combines AI, machine learning, and RPA to revolutionize business processes.',
      ctaText: 'Learn more',
      ctaLink: '/learn/what-is-intelligent-automation/',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'ai-finance-transformation',
      title: 'How AI is Transforming Finance: Trends and Applications',
      description: 'Discover the latest AI applications in finance, from fraud detection to algorithmic trading and risk management.',
      ctaText: 'Explore finance AI',
      ctaLink: '/learn/how-ai-is-transforming-finance/',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'vector-database-guide',
      title: 'What is a Vector Database? AI Data Storage Explained',
      description: 'Understanding vector databases and their crucial role in AI applications, similarity search, and machine learning.',
      ctaText: 'Read guide',
      ctaLink: '/learn/what-is-a-vector-database/',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'multicloud-strategy',
      title: 'What is Multicloud? Strategy for Modern Enterprises',
      description: 'Learn about multicloud strategies, benefits, challenges, and best practices for enterprise cloud adoption.',
      ctaText: 'Discover multicloud',
      ctaLink: '/learn/what-is-multicloud/',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'machine-learning-basics',
      title: 'What is Machine Learning? Fundamentals and Applications',
      description: 'Complete introduction to machine learning concepts, algorithms, and real-world applications across industries.',
      ctaText: 'Start learning',
      ctaLink: '/learn/what-is-machine-learning/',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  const blogCategories = [
    {
      id: 'ai-fundamentals',
      title: 'AI Fundamentals',
      description: 'Essential concepts and principles of artificial intelligence, machine learning, and automation technologies.',
      ctaText: 'Explore fundamentals',
      ctaLink: '/blogs/category/ai-fundamentals/'
    },
    {
      id: 'industry-insights',
      title: 'Industry Insights',
      description: 'Deep dives into how AI is transforming specific industries including healthcare, finance, manufacturing, and more.',
      ctaText: 'Read insights',
      ctaLink: '/blogs/category/industry-insights/'
    },
    {
      id: 'technical-tutorials',
      title: 'Technical Tutorials',
      description: 'Step-by-step guides, code examples, and hands-on tutorials for developers and technical practitioners.',
      ctaText: 'View tutorials',
      ctaLink: '/blogs/category/technical-tutorials/'
    },
    {
      id: 'business-strategy',
      title: 'Business Strategy',
      description: 'Strategic insights on AI adoption, digital transformation, and building AI-driven business capabilities.',
      ctaText: 'Strategic insights',
      ctaLink: '/blogs/category/business-strategy/'
    },
    {
      id: 'research-innovation',
      title: 'Research & Innovation',
      description: 'Latest research findings, breakthrough innovations, and emerging trends in artificial intelligence.',
      ctaText: 'Explore research',
      ctaLink: '/blogs/category/research-innovation/'
    },
    {
      id: 'case-studies',
      title: 'Case Studies',
      description: 'Real-world success stories, implementation examples, and lessons learned from AI deployments.',
      ctaText: 'Read case studies',
      ctaLink: '/blogs/category/case-studies/'
    }
  ];

  const blogResources = [
    {
      title: 'Weekly AI Newsletter',
      description: 'Stay updated with the latest AI trends, research breakthroughs, and industry news delivered to your inbox.',
      href: '#subscribe',
      buttonText: 'Subscribe now',
      icon: '📧'
    },
    {
      title: 'AI Learning Resources',
      description: 'Access curated learning materials, courses, and resources to advance your AI knowledge and skills.',
      href: '/learn/',
      buttonText: 'Start learning',
      icon: '📚'
    },
    {
      title: 'Expert Webinars',
      description: 'Join live webinars and discussions with AI experts, researchers, and industry practitioners.',
      href: '/events/webinars/',
      buttonText: 'View webinars',
      icon: '🎥'
    },
    {
      title: 'Community Discussions',
      description: 'Engage with the AI community, share insights, and participate in discussions about AI topics.',
      href: '/forums/',
      buttonText: 'Join discussions',
      icon: '💬'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        <h1 className="sr-only">Blogs | Augment AI Insights</h1>

        <SectionHero
          title="AI Insights & Learning"
          subtitle="Explore the latest in artificial intelligence"
          description="Stay informed with expert insights, technical tutorials, industry analysis, and thought leadership on artificial intelligence, machine learning, and intelligent automation. Learn from practitioners and researchers shaping the future of AI."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="AI researchers and practitioners sharing knowledge and insights through digital content"
        />

        <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto py-4">
              <a href="#articles" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Featured Articles
              </a>
              <a href="#categories" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Categories
              </a>
              <a href="#resources" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Resources
              </a>
              <a href="#subscribe" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Subscribe
              </a>
            </div>
          </div>
        </nav>

        {/* Search and Filter Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Find AI Content That Matters
              </h2>
              <p className="text-base text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                Search our comprehensive library of AI articles, tutorials, and insights
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search articles, topics, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                />
              </div>
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                >
                  <option value="all">All Categories</option>
                  <option value="ai-fundamentals">AI Fundamentals</option>
                  <option value="industry-insights">Industry Insights</option>
                  <option value="technical-tutorials">Technical Tutorials</option>
                  <option value="business-strategy">Business Strategy</option>
                  <option value="research-innovation">Research & Innovation</option>
                  <option value="case-studies">Case Studies</option>
                </select>
              </div>
              <button className="px-6 py-3 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-200">
                Search
              </button>
            </div>
          </div>
        </section>

        <section id="articles">
          <FeaturedCards
            title="Featured AI articles and insights"
            description="Explore our most popular and impactful content on artificial intelligence and automation"
            cards={featuredArticles}
            columns={3}
            backgroundColor="bg-white"
          />
        </section>

        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                AI Content Engagement
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Trusted source for AI knowledge and insights across the global community
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  500+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Published Articles
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  2M+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Monthly Readers
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  100+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Expert Contributors
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  50K+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Newsletter Subscribers
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="categories">
          <InfoColumns
            title="Explore content by category"
            description="Discover AI content organized by topics and areas of interest"
            columns={blogCategories}
            columnsCount={3}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section id="resources">
          <CTASection
            title="Enhance your AI learning journey"
            description="Access additional resources to deepen your understanding of artificial intelligence"
            actions={blogResources}
            columns={2}
            backgroundColor="bg-white"
          />
        </section>

        <section id="subscribe" className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Stay Updated with AI Insights
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Subscribe to our newsletter and never miss the latest AI trends, research breakthroughs, and expert insights.
              </p>
            </div>
            
            {isSubscribed ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <div className="text-green-600 text-4xl mb-4">✓</div>
                <h3 className="text-xl font-semibold text-green-800 mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Successfully Subscribed!
                </h3>
                <p className="text-green-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Thank you for subscribing to our AI insights newsletter. You'll receive the latest content and updates directly in your inbox.
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-8">
                <form onSubmit={handleSubscribe} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={subscribeForm.email}
                      onChange={(e) => setSubscribeForm({...subscribeForm, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Content Interests (Optional)
                    </label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {[
                        'AI Fundamentals',
                        'Industry Insights',
                        'Technical Tutorials',
                        'Business Strategy',
                        'Research & Innovation',
                        'Case Studies'
                      ].map((interest) => (
                        <label key={interest} className="flex items-center">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300 text-[#C74634] focus:ring-[#C74634]"
                          />
                          <span className="ml-2 text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                            {interest}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="inline-flex items-center px-8 py-3 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-200"
                      style={{ fontFamily: 'var(--oraclesans)' }}
                    >
                      Subscribe to Newsletter
                    </button>
                  </div>

                  <p className="text-xs text-gray-500 text-center" style={{ fontFamily: 'var(--oraclesans)' }}>
                    By subscribing, you agree to receive our newsletter and can unsubscribe at any time. We respect your privacy.
                  </p>
                </form>
              </div>
            )}
          </div>
        </section>

        <section className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Contribute to the AI community
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Share your AI expertise and insights with our global community. We welcome guest contributors and thought leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/blogs/contribute/"
                className="inline-flex items-center px-6 py-3 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Become a Contributor
              </a>
              <a
                href="/blogs/guidelines/"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Submission Guidelines
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
