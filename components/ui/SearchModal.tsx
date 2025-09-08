"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { PRODUCTS, searchProducts } from '@/lib/productRegistry';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'product' | 'page' | 'customer' | 'resource';
  category?: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Static search data for pages and resources
const STATIC_SEARCH_DATA: SearchResult[] = [
  // Main pages
  { id: 'home', title: 'Home', description: 'Augment AI Platform - Transform your business with AI automation', url: '/', type: 'page' },
  { id: 'products', title: 'Products', description: 'Browse all AI-powered business solutions', url: '/product', type: 'page' },
  { id: 'industries', title: 'Industries', description: 'Industry-specific AI solutions and use cases', url: '/industries', type: 'page' },
  { id: 'customers', title: 'Customers', description: 'Customer success stories and case studies', url: '/customers', type: 'page' },
  { id: 'partners', title: 'Partners', description: 'Partner network and collaboration opportunities', url: '/partners', type: 'page' },
  { id: 'developers', title: 'Developers', description: 'APIs, documentation, and developer resources', url: '/developers', type: 'page' },
  { id: 'support', title: 'Support', description: 'Get help and technical support', url: '/support', type: 'page' },
  { id: 'contact-sales', title: 'Contact Sales', description: 'Get in touch with our sales team', url: '/corporate/contact/sales', type: 'page' },
  { id: 'book-demo', title: 'Book Demo', description: 'Schedule a personalized product demonstration', url: '/book-demo', type: 'page' },
  
  // Customer stories
  { id: 'google-story', title: 'Google Success Story', description: 'How Google uses Augment AI for business insights', url: '/customers/google', type: 'customer' },
  { id: 'microsoft-story', title: 'Microsoft Success Story', description: 'Microsoft\'s transformation with Augment AI', url: '/customers/microsoft', type: 'customer' },
  { id: 'amazon-story', title: 'Amazon Success Story', description: 'Amazon\'s AI automation journey', url: '/customers/amazon', type: 'customer' },
  
  // Resources
  { id: 'ai-agents-news', title: 'AI Agents Announcement', description: 'Latest news about AI agents and automation', url: '/news/ai-agents-announcement', type: 'resource' },
  { id: 'certification', title: 'Certification Program', description: 'Get certified in Augment AI platform', url: '/certification', type: 'resource' },
  { id: 'training', title: 'Training', description: 'Training programs and educational resources', url: '/training', type: 'resource' },
  { id: 'community', title: 'Community', description: 'Join the Augment AI community', url: '/community', type: 'resource' },
];

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Handle search
  useEffect(() => {
    if (!query.trim()) {
      // Show popular/recent items when no query
      setResults(STATIC_SEARCH_DATA.slice(0, 8));
      setSelectedIndex(0);
      return;
    }

    const lowercaseQuery = query.toLowerCase();
    const searchResults: SearchResult[] = [];

    // Search products
    const productResults = searchProducts(query).slice(0, 6);
    productResults.forEach(product => {
      searchResults.push({
        id: product.id,
        title: product.shortName || product.name,
        description: product.shortDescription || product.description,
        url: product.href,
        type: 'product',
        category: product.tags?.[0]
      });
    });

    // Search static pages and resources
    const pageResults = STATIC_SEARCH_DATA.filter(item => 
      item.title.toLowerCase().includes(lowercaseQuery) ||
      item.description.toLowerCase().includes(lowercaseQuery)
    ).slice(0, 6);

    searchResults.push(...pageResults);

    setResults(searchResults.slice(0, 10));
    setSelectedIndex(0);
  }, [query]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => (prev + 1) % results.length);
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => (prev - 1 + results.length) % results.length);
          break;
        case 'Enter':
          e.preventDefault();
          if (results[selectedIndex]) {
            window.location.href = results[selectedIndex].url;
            onClose();
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex, onClose]);

  // Scroll selected item into view
  useEffect(() => {
    if (resultsRef.current) {
      const selectedElement = resultsRef.current.children[selectedIndex] as HTMLElement;
      if (selectedElement) {
        selectedElement.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  if (!isOpen) return null;

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'product':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        );
      case 'customer':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case 'resource':
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      default:
        return (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'product': return 'Product';
      case 'customer': return 'Customer';
      case 'resource': return 'Resource';
      default: return 'Page';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl mx-4 max-h-[80vh] flex flex-col">
        {/* Search Input */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              placeholder="Search products, pages, and resources..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 text-lg border-0 focus:outline-none focus:ring-0"
              style={{ fontFamily: 'var(--oraclesans)' }}
            />
          </div>
        </div>

        {/* Search Results */}
        <div ref={resultsRef} className="flex-1 overflow-y-auto">
          {results.length > 0 ? (
            <div className="py-2">
              {!query && (
                <div className="px-4 py-2 text-sm text-gray-500 font-medium" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Popular searches
                </div>
              )}
              {results.map((result, index) => (
                <Link
                  key={result.id}
                  href={result.url}
                  onClick={onClose}
                  className={`block px-4 py-3 hover:bg-gray-50 transition-colors ${
                    index === selectedIndex ? 'bg-blue-50 border-r-2 border-blue-500' : ''
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`mt-1 ${index === selectedIndex ? 'text-blue-600' : 'text-gray-400'}`}>
                      {getTypeIcon(result.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-sm font-medium text-gray-900 truncate" style={{ fontFamily: 'var(--oraclesans)' }}>
                          {result.title}
                        </h3>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          result.type === 'product' ? 'bg-blue-100 text-blue-700' :
                          result.type === 'customer' ? 'bg-green-100 text-green-700' :
                          result.type === 'resource' ? 'bg-purple-100 text-purple-700' :
                          'bg-gray-100 text-gray-700'
                        }`}>
                          {getTypeLabel(result.type)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                        {result.description}
                      </p>
                      {result.category && (
                        <p className="text-xs text-gray-500 mt-1">
                          {result.category}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : query ? (
            <div className="p-8 text-center">
              <svg className="w-12 h-12 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <h3 className="text-lg font-medium text-gray-900 mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                No results found
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
                Try searching for products, pages, or resources with different keywords.
              </p>
            </div>
          ) : null}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded text-xs">↑↓</kbd>
                <span>Navigate</span>
              </div>
              <div className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded text-xs">Enter</kbd>
                <span>Select</span>
              </div>
              <div className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-white border border-gray-300 rounded text-xs">Esc</kbd>
                <span>Close</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
