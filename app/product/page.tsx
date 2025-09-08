"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  PRODUCTS, 
  PRODUCT_CATEGORIES, 
  searchProducts,
  type Product 
} from "@/lib/productRegistry";

// Modal component for image expansion
function ImageModal({ 
  isOpen, 
  onClose, 
  product 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  product: Product | null; 
}) {
  if (!isOpen || !product) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-auto max-h-[80vh] object-contain"
        />
        <div className="p-6">
          <h3 
            className="text-2xl font-bold text-gray-900 mb-2"
            style={{ fontFamily: 'var(--oracleserif)' }}
          >
            {product.name}
          </h3>
          <p 
            className="text-gray-600 mb-4"
            style={{ fontFamily: 'var(--oraclesans)' }}
          >
            {product.description}
          </p>
          <div className="flex gap-3">
            <Link
              href={product.href}
              className="px-6 py-3 bg-[#4A90E2] text-white rounded-lg hover:bg-[#357ABD] transition-colors font-medium"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              View Product
            </Link>
            {product.status === 'live' && (
              <Link
                href={`${product.href}/demo`}
                className="px-6 py-3 border border-[#4A90E2] text-[#4A90E2] rounded-lg hover:bg-[#4A90E2] hover:text-white transition-colors font-medium"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Try Demo
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [modalProduct, setModalProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product: Product) => {
    setModalProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalProduct(null);
  };

  // Filter products based on selections
  const getFilteredProducts = (): Product[] => {
    let filtered = PRODUCTS;

    // Apply search filter
    if (searchQuery.trim()) {
      filtered = searchProducts(searchQuery);
    }

    // Apply category filter
    if (selectedCategory !== 'all') {
      if (selectedCategory === 'featured') {
        filtered = filtered.filter(p => p.featured);
      } else {
        filtered = filtered.filter(p => p.category === selectedCategory);
      }
    }

    // Apply status filter
    if (selectedStatus !== 'all') {
      filtered = filtered.filter(p => p.status === selectedStatus);
    }

    return filtered;
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO */}
      <h1 className="sr-only">Augment Products | AI-Powered Business Solutions</h1>
      
      {/* Image Modal */}
      <ImageModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        product={modalProduct} 
      />
      
      {/* Hero Section */}
      <section 
        className="relative py-20 bg-[#312a2a] text-white overflow-hidden"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"20\" cy=\"20\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 
              className="text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              style={{ fontFamily: 'var(--oracleserif)' }}
            >
              Augment Products
            </h2>
            <div className="w-20 h-1 bg-[#C74634] mx-auto mb-8"></div>
            <p 
              className="text-xl lg:text-2xl text-gray-200 mb-12 leading-relaxed"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              Discover our comprehensive suite of AI-powered business solutions designed to transform how you work, grow, and succeed.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 text-lg rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f0cc71] focus:border-transparent"
                  style={{ fontFamily: 'var(--oraclesans)' }}
                />
                <svg 
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-300"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        

        {/* Filters */}
        <section className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === 'all' 
                    ? 'bg-[#4A90E2] text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                All Products
              </button>
              <button
                onClick={() => setSelectedCategory('featured')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === 'featured' 
                    ? 'bg-[#4A90E2] text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Featured
              </button>
              {Object.entries(PRODUCT_CATEGORIES).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === key 
                      ? 'bg-[#4A90E2] text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                  }`}
                  style={{ fontFamily: 'var(--oraclesans)' }}
                >
                  <span className="mr-1">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>

            {/* Status Filter */}
            <div className="flex gap-2">
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-3 py-2 rounded-lg border border-gray-200 bg-white text-gray-700 text-sm"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                <option value="all">All Status</option>
                <option value="live">Live</option>
                <option value="beta">Beta</option>
                <option value="coming-soon">Coming Soon</option>
              </select>
            </div>

          </div>
        </section>

        {/* Results Summary */}
        <div className="mb-6">
          <p 
            className="text-gray-600 text-sm"
            style={{ fontFamily: 'var(--oraclesans)' }}
          >
            Showing <span className="font-semibold">{filteredProducts.length}</span> products
            {searchQuery && ` for "${searchQuery}"`}
            {selectedCategory !== 'all' && ` in ${selectedCategory === 'featured' ? 'Featured' : PRODUCT_CATEGORIES[selectedCategory as keyof typeof PRODUCT_CATEGORIES]?.name}`}
          </p>
        </div>

        {/* Products Grid */}
        <section>
          {filteredProducts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={product.href}
                  className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        openModal(product);
                      }}
                    />
                    {product.featured && (
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 text-xs bg-[#f0cc71] text-[#161513] rounded-full font-semibold">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      {product.icon === 'users' ? (
                        <svg className="w-6 h-6 text-[#4A90E2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m3 5.197v1a6 6 0 01-6-6v-1m6 6a6 6 0 00-6-6" />
                        </svg>
                      ) : product.icon === 'workflow' ? (
                        <svg className="w-6 h-6 text-[#4A90E2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                      ) : product.icon === 'search' ? (
                        <svg className="w-6 h-6 text-[#4A90E2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      ) : product.icon === 'banknote' ? (
                        <svg className="w-6 h-6 text-[#4A90E2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6 text-[#4A90E2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      )}
                      {product.status !== 'live' && (
                        <span 
                          className={`px-2 py-1 text-xs rounded-full capitalize font-medium ${
                            product.status === 'coming-soon' 
                              ? 'bg-orange-100 text-orange-800' 
                              : 'bg-blue-100 text-blue-800'
                          }`}
                        >
                          {product.status === 'coming-soon' ? 'Coming Soon' : product.status}
                        </span>
                      )}
                    </div>
                    <h4 
                      className="text-base font-bold text-[#161513] mb-2 group-hover:text-[#4A90E2] transition-colors leading-tight"
                      style={{ fontFamily: 'var(--oraclesans)' }}
                    >
                      {product.shortName || product.name}
                    </h4>
                    <p 
                      className="text-gray-600 text-xs leading-relaxed mb-3 line-clamp-2"
                      style={{ fontFamily: 'var(--oraclesans)' }}
                    >
                      {product.shortDescription || product.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {product.tags?.slice(0, 2).map((tag, idx) => (
                        <span key={idx} className="px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 
                className="text-xl font-semibold text-gray-900 mb-2"
                style={{ fontFamily: 'var(--oracleserif)' }}
              >
                No products found
              </h3>
              <p 
                className="text-gray-600 mb-6"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                {searchQuery 
                  ? `No products match "${searchQuery}". Try adjusting your search.`
                  : 'No products match your current filters. Try adjusting your filters.'
                }
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedStatus('all');
                }}
                className="px-6 py-3 bg-[#4A90E2] text-white rounded-lg hover:bg-[#357ABD] transition-colors font-medium"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Clear All Filters
              </button>
            </div>
          )}
        </section>

        {/* Call-to-Action */}
        <section className="mt-16 text-center">
          <div className="bg-[#f8f8f8] rounded-lg p-8 lg:p-12">
            <h3 
              className="text-2xl lg:text-3xl font-bold text-[#161513] mb-4"
              style={{ fontFamily: 'var(--oracleserif)' }}
            >
              Can&apos;t find what you&apos;re looking for?
            </h3>
            <p 
              className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              Our team can help you find the perfect solution for your business needs or create a custom solution tailored just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/corporate/contact/sales"
                className="inline-flex items-center px-6 py-3 bg-[#161513] text-white font-semibold rounded hover:bg-[#2a2a2a] transition-colors"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Contact Sales
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center px-6 py-3 border border-[#161513] text-[#161513] font-semibold rounded hover:bg-[#161513] hover:text-white transition-colors"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
