'use client';
import { Metadata } from 'next';
import { useState } from 'react';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection
} from '../../components/sections';

export default function ForumsPage() {
  const [newTopicForm, setNewTopicForm] = useState({
    title: '',
    category: '',
    content: '',
    tags: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setNewTopicForm({
        title: '',
        category: '',
        content: '',
        tags: ''
      });
    }, 3000);
  };

  const heroButtons = [
    {
      text: 'Browse Discussions',
      href: '#discussions',
      variant: 'primary' as const
    },
    {
      text: 'Start New Topic',
      href: '#new-topic',
      variant: 'secondary' as const
    }
  ];

  const forumCategories = [
    {
      id: 'general-ai',
      title: 'General AI Discussions',
      description: 'Open discussions about artificial intelligence trends, news, and general AI topics. Share insights and learn from the community.',
      ctaText: 'Join discussions',
      ctaLink: '/forums/general-ai/',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'technical-help',
      title: 'Technical Help & Support',
      description: 'Get help with technical issues, implementation questions, and troubleshooting from experienced developers and users.',
      ctaText: 'Get help',
      ctaLink: '/forums/technical-help/',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'product-feedback',
      title: 'Product Feedback & Ideas',
      description: 'Share feedback on Augment products, suggest new features, and discuss product roadmaps with the community.',
      ctaText: 'Share feedback',
      ctaLink: '/forums/product-feedback/',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'industry-specific',
      title: 'Industry-Specific Discussions',
      description: 'Focused discussions on AI applications in healthcare, finance, manufacturing, retail, and other industries.',
      ctaText: 'Explore industries',
      ctaLink: '/forums/industry-specific/',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'research-collaboration',
      title: 'Research & Collaboration',
      description: 'Connect with researchers, discuss latest papers, and find collaborators for AI research projects.',
      ctaText: 'Join research',
      ctaLink: '/forums/research/',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'career-networking',
      title: 'Career & Networking',
      description: 'Career advice, job opportunities, networking, and professional development in the AI field.',
      ctaText: 'Network now',
      ctaLink: '/forums/career/',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  const recentTopics = [
    {
      id: 'ai-ethics-discussion',
      title: 'AI Ethics in Healthcare Applications',
      description: 'Discussion about ethical considerations when implementing AI in healthcare settings, including bias, privacy, and decision transparency.',
      ctaText: 'Join discussion',
      ctaLink: '/forums/topic/ai-ethics-healthcare/'
    },
    {
      id: 'llm-fine-tuning',
      title: 'Best Practices for LLM Fine-tuning',
      description: 'Community sharing experiences and best practices for fine-tuning large language models for specific use cases.',
      ctaText: 'Read more',
      ctaLink: '/forums/topic/llm-fine-tuning/'
    },
    {
      id: 'vector-databases',
      title: 'Vector Database Performance Optimization',
      description: 'Technical discussion about optimizing vector database performance for large-scale AI applications.',
      ctaText: 'View topic',
      ctaLink: '/forums/topic/vector-db-optimization/'
    },
    {
      id: 'ai-regulation',
      title: 'Upcoming AI Regulations and Compliance',
      description: 'Discussion about emerging AI regulations worldwide and how they impact AI development and deployment.',
      ctaText: 'Join conversation',
      ctaLink: '/forums/topic/ai-regulations/'
    },
    {
      id: 'multimodal-ai',
      title: 'Multimodal AI Implementation Challenges',
      description: 'Sharing experiences and solutions for implementing multimodal AI systems that process text, images, and audio.',
      ctaText: 'Contribute',
      ctaLink: '/forums/topic/multimodal-ai/'
    },
    {
      id: 'ai-job-market',
      title: 'AI Job Market Trends 2025',
      description: 'Discussion about current trends in the AI job market, in-demand skills, and career opportunities.',
      ctaText: 'Discuss careers',
      ctaLink: '/forums/topic/ai-job-market-2025/'
    }
  ];

  const forumBenefits = [
    {
      title: 'Expert Community',
      description: 'Connect with AI experts, researchers, and practitioners from leading organizations worldwide.',
      href: '/forums/experts/',
      buttonText: 'Meet experts',
      icon: '👥'
    },
    {
      title: 'Real-time Help',
      description: 'Get quick answers to technical questions and implementation challenges from experienced users.',
      href: '/forums/technical-help/',
      buttonText: 'Get help',
      icon: '⚡'
    },
    {
      title: 'Knowledge Sharing',
      description: 'Share your expertise, learn from others, and contribute to the collective AI knowledge base.',
      href: '/forums/knowledge-base/',
      buttonText: 'Share knowledge',
      icon: '📚'
    },
    {
      title: 'Networking Opportunities',
      description: 'Build professional relationships, find collaborators, and discover career opportunities.',
      href: '/forums/networking/',
      buttonText: 'Start networking',
      icon: '🤝'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        <h1 className="sr-only">Forums | Augment AI Community</h1>

        <SectionHero
          title="Community Forums"
          subtitle="Connect, discuss, and learn together"
          description="Join vibrant discussions with AI professionals, researchers, and enthusiasts. Get help, share knowledge, collaborate on projects, and stay updated with the latest in artificial intelligence and machine learning."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="AI community members engaged in discussion and knowledge sharing"
        />

        <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto py-4">
              <a href="#discussions" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Forum Categories
              </a>
              <a href="#recent" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Recent Topics
              </a>
              <a href="#benefits" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Community Benefits
              </a>
              <a href="#new-topic" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Start Discussion
              </a>
            </div>
          </div>
        </nav>

        <section id="discussions">
          <FeaturedCards
            title="Explore forum categories"
            description="Find the right community for your interests and expertise level"
            cards={forumCategories}
            columns={3}
            backgroundColor="bg-white"
          />
        </section>

        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Active Community Forums
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Vibrant discussions and knowledge sharing across the AI community
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  25K+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Active Members
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  50K+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Discussion Topics
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  200K+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Posts & Replies
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  95%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Questions Answered
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="recent">
          <InfoColumns
            title="Recent popular discussions"
            description="Join the latest conversations and trending topics in the AI community"
            columns={recentTopics}
            columnsCount={3}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section id="benefits">
          <CTASection
            title="Why join our forums?"
            description="Discover the benefits of participating in our active AI community"
            actions={forumBenefits}
            columns={2}
            backgroundColor="bg-white"
          />
        </section>

        <section id="new-topic" className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Start a New Discussion
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Have a question, idea, or insight to share? Start a new discussion and engage with the AI community.
              </p>
            </div>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <div className="text-green-600 text-4xl mb-4">✓</div>
                <h3 className="text-xl font-semibold text-green-800 mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Discussion Topic Created!
                </h3>
                <p className="text-green-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Your discussion topic has been posted successfully. The community will be notified and you can expect responses soon.
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Discussion Title *
                    </label>
                    <input
                      type="text"
                      id="title"
                      required
                      value={newTopicForm.title}
                      onChange={(e) => setNewTopicForm({...newTopicForm, title: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                      placeholder="Enter a clear, descriptive title for your discussion"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Category *
                    </label>
                    <select
                      id="category"
                      required
                      value={newTopicForm.category}
                      onChange={(e) => setNewTopicForm({...newTopicForm, category: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                    >
                      <option value="">Select a category</option>
                      <option value="general-ai">General AI Discussions</option>
                      <option value="technical-help">Technical Help & Support</option>
                      <option value="product-feedback">Product Feedback & Ideas</option>
                      <option value="industry-specific">Industry-Specific Discussions</option>
                      <option value="research-collaboration">Research & Collaboration</option>
                      <option value="career-networking">Career & Networking</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Discussion Content *
                    </label>
                    <textarea
                      id="content"
                      rows={6}
                      required
                      value={newTopicForm.content}
                      onChange={(e) => setNewTopicForm({...newTopicForm, content: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                      placeholder="Provide details about your question, idea, or topic. Be specific and include relevant context..."
                    />
                  </div>

                  <div>
                    <label htmlFor="tags" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Tags (Optional)
                    </label>
                    <input
                      type="text"
                      id="tags"
                      value={newTopicForm.tags}
                      onChange={(e) => setNewTopicForm({...newTopicForm, tags: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                      placeholder="Add relevant tags separated by commas (e.g., machine learning, healthcare, python)"
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="inline-flex items-center px-8 py-3 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-200"
                      style={{ fontFamily: 'var(--oraclesans)' }}
                    >
                      Create Discussion Topic
                    </button>
                  </div>

                  <p className="text-xs text-gray-500 text-center" style={{ fontFamily: 'var(--oraclesans)' }}>
                    By posting, you agree to our community guidelines and terms of service.
                  </p>
                </form>
              </div>
            )}
          </div>
        </section>

        <section className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Join the conversation
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Connect with 25,000+ AI professionals in our active community forums. Share knowledge, get help, and advance your AI journey together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/community/"
                className="inline-flex items-center px-6 py-3 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Join Community
              </a>
              <a
                href="/forums/guidelines/"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Community Guidelines
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
