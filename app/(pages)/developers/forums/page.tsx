'use client';
import { Metadata } from 'next';
import { useState } from 'react';
import { Clipboard, MessageCircle, Wrench, BookOpen, Palette, AlertTriangle, Lightbulb, Megaphone } from 'lucide-react';

export default function DeveloperForumsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const forumCategories = [
    { id: 'all', name: 'All Topics', count: 2847, icon: <Clipboard className="w-5 h-5" /> },
    { id: 'general', name: 'General Discussion', count: 892, icon: <MessageCircle className="w-5 h-5" /> },
    { id: 'api', name: 'API & SDKs', count: 654, icon: <Wrench className="w-5 h-5" /> },
    { id: 'tutorials', name: 'Tutorials & Guides', count: 423, icon: <BookOpen className="w-5 h-5" /> },
    { id: 'showcase', name: 'Project Showcase', count: 312, icon: <Palette className="w-5 h-5" /> },
    { id: 'troubleshooting', name: 'Troubleshooting', count: 289, icon: <AlertTriangle className="w-5 h-5" /> },
    { id: 'feature-requests', name: 'Feature Requests', count: 167, icon: <Lightbulb className="w-5 h-5" /> },
    { id: 'announcements', name: 'Announcements', count: 110, icon: <Megaphone className="w-5 h-5" /> }
  ];

  const forumPosts = [
    {
      id: 1,
      title: 'Best practices for handling rate limits in production?',
      author: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=faces',
      category: 'API & SDKs',
      replies: 23,
      views: 1247,
      lastActivity: '2 hours ago',
      tags: ['rate-limits', 'production', 'best-practices'],
      isPinned: false,
      hasAcceptedAnswer: true
    },
    {
      id: 2,
      title: 'Announcing: New GPT-4 Turbo Model with 128K Context',
      author: 'Augment Team',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=faces',
      category: 'Announcements',
      replies: 156,
      views: 8934,
      lastActivity: '4 hours ago',
      tags: ['announcement', 'gpt-4-turbo', 'new-features'],
      isPinned: true,
      hasAcceptedAnswer: false
    },
    {
      id: 3,
      title: 'Building a RAG system with vector embeddings - Complete tutorial',
      author: 'Mike Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=faces',
      category: 'Tutorials & Guides',
      replies: 67,
      views: 3421,
      lastActivity: '6 hours ago',
      tags: ['rag', 'embeddings', 'tutorial', 'vector-search'],
      isPinned: false,
      hasAcceptedAnswer: false
    },
    {
      id: 4,
      title: 'Show off: AI-powered code review assistant',
      author: 'Emily Johnson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=faces',
      category: 'Project Showcase',
      replies: 34,
      views: 2156,
      lastActivity: '8 hours ago',
      tags: ['showcase', 'code-review', 'automation'],
      isPinned: false,
      hasAcceptedAnswer: false
    },
    {
      id: 5,
      title: 'Streaming responses getting cut off after 1000 tokens',
      author: 'David Wilson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=faces',
      category: 'Troubleshooting',
      replies: 12,
      views: 567,
      lastActivity: '12 hours ago',
      tags: ['streaming', 'tokens', 'bug'],
      isPinned: false,
      hasAcceptedAnswer: true
    }
  ];

  const topContributors = [
    { name: 'Alex Chen', posts: 234, reputation: 4567, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=faces' },
    { name: 'Sarah Martinez', posts: 189, reputation: 3892, avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=faces' },
    { name: 'Mike Johnson', posts: 156, reputation: 3234, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=faces' },
    { name: 'Lisa Wang', posts: 134, reputation: 2876, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=faces' }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                Developer Forums
              </h1>
              <p className="text-lg text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                Connect, learn, and share with the Augment AI developer community
              </p>
            </div>
            <a
              href="#"
              className="px-6 py-3 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-200"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              New Post
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Search */}
              <div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search forums..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                    style={{ fontFamily: 'var(--oraclesans)' }}
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                <h3 className="font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Categories
                </h3>
                <div className="space-y-2">
                  {forumCategories.map((category) => (
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
                      <div className="flex items-center">
                        <span className="mr-3">{category.icon}</span>
                        <span className="text-sm">{category.name}</span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        selectedCategory === category.id ? 'bg-white/20' : 'bg-gray-200'
                      }`}>
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Top Contributors */}
              <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
                <h3 className="font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Top Contributors
                </h3>
                <div className="space-y-3">
                  {topContributors.map((contributor, index) => (
                    <div key={index} className="flex items-center">
                      <img
                        src={contributor.avatar}
                        alt={contributor.name}
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-[#161513] truncate" style={{ fontFamily: 'var(--oraclesans)' }}>
                          {contributor.name}
                        </p>
                        <p className="text-xs text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                          {contributor.reputation} rep • {contributor.posts} posts
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Forum Stats */}
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 mb-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#C74634] mb-1" style={{ fontFamily: 'var(--oracleserif)' }}>
                    2,847
                  </div>
                  <div className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                    Total Posts
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#C74634] mb-1" style={{ fontFamily: 'var(--oracleserif)' }}>
                    1,234
                  </div>
                  <div className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                    Active Members
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#C74634] mb-1" style={{ fontFamily: 'var(--oracleserif)' }}>
                    89%
                  </div>
                  <div className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                    Questions Answered
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#C74634] mb-1" style={{ fontFamily: 'var(--oracleserif)' }}>
                    24h
                  </div>
                  <div className="text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                    Avg Response Time
                  </div>
                </div>
              </div>
            </div>

            {/* Forum Posts */}
            <div className="space-y-4">
              {forumPosts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
                  <div className="flex items-start space-x-4">
                    <img
                      src={post.avatar}
                      alt={post.author}
                      className="w-12 h-12 rounded-full flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-2">
                        {post.isPinned && (
                          <span className="inline-flex items-center px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                             Pinned
                          </span>
                        )}
                        {post.hasAcceptedAnswer && (
                          <span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                             Solved
                          </span>
                        )}
                        <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-[#161513] mb-2 hover:text-[#C74634] cursor-pointer" style={{ fontFamily: 'var(--oracleserif)' }}>
                        {post.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                            style={{ fontFamily: 'var(--oraclesans)' }}
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                        <div className="flex items-center space-x-4">
                          <span>by {post.author}</span>
                          <span>{post.replies} replies</span>
                          <span>{post.views} views</span>
                        </div>
                        <span>{post.lastActivity}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <button
                className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Load More Posts
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Forum Guidelines */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Forum Guidelines
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Help us maintain a helpful and respectful community for all developers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl">
                
              </div>
              <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                Search First
              </h3>
              <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                Check if your question has already been answered before posting
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl">
                
              </div>
              <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                Be Specific
              </h3>
              <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                Provide clear details, code examples, and error messages
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl">
                ️
              </div>
              <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                Use Tags
              </h3>
              <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                Tag your posts appropriately to help others find and answer them
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4 text-2xl">
                
              </div>
              <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                Be Helpful
              </h3>
              <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                Share your knowledge and help fellow developers succeed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#C74634] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
            Join the Discussion
          </h2>
          <p className="text-lg text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
            Have a question or want to share your knowledge? Start a new discussion in our developer forums.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              Start New Discussion
            </a>
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              Browse All Topics
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
