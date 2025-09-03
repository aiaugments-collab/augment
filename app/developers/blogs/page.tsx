'use client';
import { Metadata } from 'next';
import { useState } from 'react';

export default function DeveloperBlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const blogCategories = [
    { id: 'all', name: 'All Posts', count: 156 },
    { id: 'tutorials', name: 'Tutorials', count: 45 },
    { id: 'best-practices', name: 'Best Practices', count: 32 },
    { id: 'case-studies', name: 'Case Studies', count: 28 },
    { id: 'product-updates', name: 'Product Updates', count: 24 },
    { id: 'ai-research', name: 'AI Research', count: 18 },
    { id: 'community', name: 'Community', count: 9 }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: 'Building Production-Ready AI Applications: A Complete Guide',
      excerpt: 'Learn how to build, deploy, and scale AI applications in production environments with best practices and real-world examples.',
      author: 'Sarah Chen',
      authorRole: 'Senior AI Engineer',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=faces',
      publishDate: 'March 15, 2024',
      readTime: '12 min read',
      category: 'Tutorials',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=300&fit=crop',
      tags: ['production', 'deployment', 'scaling', 'best-practices'],
      isFeatured: true
    },
    {
      id: 2,
      title: 'The Future of AI: Trends and Predictions for 2024',
      excerpt: 'Explore the latest trends in artificial intelligence and what developers can expect in the coming year.',
      author: 'Dr. Michael Rodriguez',
      authorRole: 'AI Research Lead',
      authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=faces',
      publishDate: 'March 12, 2024',
      readTime: '8 min read',
      category: 'AI Research',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=300&fit=crop',
      tags: ['ai-trends', 'predictions', '2024', 'research'],
      isFeatured: true
    }
  ];

  const blogPosts = [
    {
      id: 3,
      title: 'Optimizing API Performance: Advanced Caching Strategies',
      excerpt: 'Discover advanced caching techniques to improve your API performance and reduce latency.',
      author: 'Emily Johnson',
      authorRole: 'Backend Engineer',
      authorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=faces',
      publishDate: 'March 10, 2024',
      readTime: '6 min read',
      category: 'Best Practices',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      tags: ['performance', 'caching', 'api', 'optimization']
    },
    {
      id: 4,
      title: 'Case Study: How Startup X Scaled to 1M Users with AI',
      excerpt: 'Learn how a small startup leveraged Augment AI to scale their platform to serve over 1 million users.',
      author: 'David Wilson',
      authorRole: 'Solutions Architect',
      authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=faces',
      publishDate: 'March 8, 2024',
      readTime: '10 min read',
      category: 'Case Studies',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
      tags: ['case-study', 'scaling', 'startup', 'success-story']
    },
    {
      id: 5,
      title: 'New SDK Features: Streaming and Real-time Processing',
      excerpt: 'Explore the latest SDK updates including streaming responses and real-time data processing capabilities.',
      author: 'Lisa Wang',
      authorRole: 'Product Manager',
      authorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=faces',
      publishDate: 'March 5, 2024',
      readTime: '5 min read',
      category: 'Product Updates',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop',
      tags: ['sdk', 'streaming', 'real-time', 'updates']
    },
    {
      id: 6,
      title: 'Building Conversational AI: From Prototype to Production',
      excerpt: 'A step-by-step guide to building and deploying conversational AI applications using Augment AI.',
      author: 'Alex Thompson',
      authorRole: 'Developer Advocate',
      authorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=faces',
      publishDate: 'March 3, 2024',
      readTime: '15 min read',
      category: 'Tutorials',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=250&fit=crop',
      tags: ['conversational-ai', 'chatbots', 'tutorial', 'production']
    }
  ];

  const popularTags = [
    'tutorials', 'best-practices', 'api', 'sdk', 'production', 'performance', 
    'ai-research', 'case-studies', 'scaling', 'deployment'
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
              Developer Blog
            </h1>
            <p className="text-xl text-gray-300 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Insights, tutorials, and best practices from the Augment AI team and developer community. Stay updated with the latest in AI development.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-600 rounded-lg bg-gray-800/50 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                style={{ fontFamily: 'var(--oraclesans)' }}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Categories */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Categories
                </h3>
                <div className="space-y-2">
                  {blogCategories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-[#C74634] text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      style={{ fontFamily: 'var(--oraclesans)' }}
                    >
                      <span>{category.name}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        selectedCategory === category.id ? 'bg-white/20' : 'bg-gray-200'
                      }`}>
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <a
                      key={index}
                      href="#"
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-[#C74634] hover:text-white transition-colors duration-200"
                      style={{ fontFamily: 'var(--oraclesans)' }}
                    >
                      #{tag}
                    </a>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-[#C74634] to-[#A63429] rounded-lg p-6 text-white">
                <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Stay Updated
                </h3>
                <p className="text-red-100 text-sm mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Get the latest blog posts and developer updates delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-red-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                    style={{ fontFamily: 'var(--oraclesans)' }}
                  />
                  <button
                    className="w-full px-4 py-2 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    style={{ fontFamily: 'var(--oraclesans)' }}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Posts */}
            <div className="mb-12">
              <h2 className="text-2xl font-normal text-[#161513] mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
                Featured Posts
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <a
                    key={post.id}
                    href="#"
                    className="group bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg hover:border-[#C74634] transition-all duration-200"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-[#C74634] text-white text-xs font-medium rounded-full">
                          Featured
                        </span>
                        <span className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-[#161513] mb-2 group-hover:text-[#C74634] transition-colors" style={{ fontFamily: 'var(--oracleserif)' }}>
                        {post.title}
                      </h3>
                      <p className="text-gray-700 text-sm mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <img
                            src={post.authorAvatar}
                            alt={post.author}
                            className="w-8 h-8 rounded-full mr-3"
                          />
                          <div>
                            <p className="text-sm font-medium text-[#161513]" style={{ fontFamily: 'var(--oraclesans)' }}>
                              {post.author}
                            </p>
                            <p className="text-xs text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                              {post.publishDate}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div>
              <h2 className="text-2xl font-normal text-[#161513] mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
                Recent Posts
              </h2>
              <div className="space-y-6">
                {blogPosts.map((post) => (
                  <a
                    key={post.id}
                    href="#"
                    className="group flex bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg hover:border-[#C74634] transition-all duration-200"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-48 h-32 object-cover flex-shrink-0 group-hover:scale-105 transition-transform duration-200"
                    />
                    <div className="p-6 flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                          {post.category}
                        </span>
                        <span className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-[#161513] mb-2 group-hover:text-[#C74634] transition-colors" style={{ fontFamily: 'var(--oracleserif)' }}>
                        {post.title}
                      </h3>
                      <p className="text-gray-700 text-sm mb-3" style={{ fontFamily: 'var(--oraclesans)' }}>
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <img
                            src={post.authorAvatar}
                            alt={post.author}
                            className="w-6 h-6 rounded-full mr-2"
                          />
                          <span className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                            {post.author} • {post.publishDate}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {post.tags.slice(0, 2).map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded"
                              style={{ fontFamily: 'var(--oraclesans)' }}
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <button
                  className="px-8 py-3 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-200"
                  style={{ fontFamily: 'var(--oraclesans)' }}
                >
                  Load More Posts
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
            Want to Contribute?
          </h2>
          <p className="text-lg text-gray-700 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
            Share your knowledge with the developer community. Write about your experiences, tutorials, and insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-200"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              Submit a Post
            </a>
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 border-2 border-[#C74634] text-[#C74634] font-semibold rounded-lg hover:bg-[#C74634] hover:text-white transition-colors duration-200"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              Writing Guidelines
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
