import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { 
  getProductsByCategory, 
  getHeaderProductsByCategory,
  HEADER_CATEGORIES 
} from "@/lib/productRegistry";

export const metadata: Metadata = {
  title: 'SaaS Products | Augment',
  description: 'Augment SaaS Applications allow your business to implement process changes faster and build and extend your applications better.',
  keywords: 'Applications, Cloud Applications, Product Applications, Resources, AI Agents, Enterprise Software',
};

export default function ProductsPage() {
  // Get AI Agent products
  const aiAgentProducts = getProductsByCategory('ai-agent');
  
  // Get Cloud Application products by header category
  const erpProducts = getHeaderProductsByCategory('erp');
  const scmProducts = getHeaderProductsByCategory('scm');
  const hcmProducts = getHeaderProductsByCategory('hcm');
  const cxProducts = getHeaderProductsByCategory('cx');
  const dataIntelligenceProducts = getHeaderProductsByCategory('data-intelligence');
  const marketplaceProducts = getHeaderProductsByCategory('marketplace');

  return (
    <div className="min-h-screen">
      <main>
        <h1 className="sr-only">Augment SaaS Products</h1>
        
        {/* Page Title Banner */}
        <section className="relative py-12 bg-[#312a2a] text-white overflow-hidden" 
          style={{
            backgroundImage: "url('/a/ocom/img/bgimg02-bgne-overlay-01.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Breadcrumbs */}
            <div className="mb-5">
              <Breadcrumb className="text-white/80" />
            </div>
            
            {/* Hero Content */}
            <div className="max-w-3xl">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                Augment SaaS Products
              </h2>
              <p className="text-base text-gray-200 mb-5 leading-relaxed max-w-2xl">
                SaaS provides a complete software as a service solution. As the only technology provider that offers both an integrated suite of cloud applications and the cloud infrastructure platform, Augment's SaaS products allow your business to implement process changes faster and build and extend your applications better.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/demo"
                  className="inline-flex items-center px-6 py-3 bg-[#C74634] text-white font-semibold rounded hover:bg-[#a63529] transition-colors"
                >
                  Request a free demo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* AI Agents Section */}
          <section className="py-12 border-b border-gray-200" id="ai-agents">
            <div className="mb-6">
              <p className="text-sm font-bold text-[#161513] mb-2" style={{ fontSize: '14.336px', lineHeight: '20.0704px', fontWeight: '700' }}>
                <strong>Augment AI Agents</strong>
              </p>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <li>
                <Link 
                  href="/ai-agent/" 
                  className="text-[#006B8F] hover:text-[#004d6b] hover:underline transition-colors"
                  style={{ fontSize: '14.336px', lineHeight: '20.0704px', fontWeight: '400' }}
                >
                  AI Agent Overview
                </Link>
              </li>
              {aiAgentProducts.map((product) => (
                <li key={product.id}>
                  <Link 
                    href={product.href} 
                    className="text-[#006B8F] hover:text-[#004d6b] hover:underline transition-colors"
                    style={{ fontSize: '14.336px', lineHeight: '20.0704px', fontWeight: '400' }}
                  >
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Enterprise Resource Planning (ERP) */}
          {erpProducts.length > 0 && (
            <section className="py-12 border-b border-gray-200" id="erp">
              <div className="mb-6">
                <p className="text-sm font-bold text-[#161513] mb-2" style={{ fontSize: '14.336px', lineHeight: '20.0704px', fontWeight: '700' }}>
                  <strong>{HEADER_CATEGORIES.erp.name}</strong>
                </p>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {erpProducts.map((product) => (
                  <li key={product.id}>
                    <Link 
                      href={product.href} 
                      className="text-[#006B8F] hover:text-[#004d6b] hover:underline transition-colors"
                      style={{ fontSize: '14.336px', lineHeight: '20.0704px', fontWeight: '400' }}
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Supply Chain & Manufacturing (SCM) */}
          {scmProducts.length > 0 && (
            <section className="py-12 border-b border-gray-200" id="scm">
              <div className="mb-6">
                <p className="text-sm font-bold text-[#161513] mb-2" style={{ fontSize: '14.336px', lineHeight: '20.0704px', fontWeight: '700' }}>
                  <strong>{HEADER_CATEGORIES.scm.name}</strong>
                </p>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {scmProducts.map((product) => (
                  <li key={product.id}>
                    <Link 
                      href={product.href} 
                      className="text-[#006B8F] hover:text-[#004d6b] hover:underline transition-colors"
                      style={{ fontSize: '14.336px', lineHeight: '20.0704px', fontWeight: '400' }}
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Human Capital Management (HCM) */}
          {hcmProducts.length > 0 && (
            <section className="py-12 border-b border-gray-200" id="hcm">
              <div className="mb-6">
                <p className="text-sm font-bold text-[#161513] mb-2" style={{ fontSize: '14.336px', lineHeight: '20.0704px', fontWeight: '700' }}>
                  <strong>{HEADER_CATEGORIES.hcm.name}</strong>
                </p>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {hcmProducts.map((product) => (
                  <li key={product.id}>
                    <Link 
                      href={product.href} 
                      className="text-[#006B8F] hover:text-[#004d6b] hover:underline transition-colors"
                      style={{ fontSize: '14.336px', lineHeight: '20.0704px', fontWeight: '400' }}
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Customer Experience (CX) */}
          {cxProducts.length > 0 && (
            <section className="py-12 border-b border-gray-200" id="cx">
              <div className="mb-6">
                <p className="text-sm font-bold text-[#161513] mb-2" style={{ fontSize: '14.336px', lineHeight: '20.0704px', fontWeight: '700' }}>
                  <strong>{HEADER_CATEGORIES.cx.name}</strong>
                </p>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cxProducts.map((product) => (
                  <li key={product.id}>
                    <Link 
                      href={product.href} 
                      className="text-[#006B8F] hover:text-[#004d6b] hover:underline transition-colors"
                      style={{ fontSize: '14.336px', lineHeight: '20.0704px', fontWeight: '400' }}
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Fusion Data Intelligence Platform */}
          {dataIntelligenceProducts.length > 0 && (
            <section className="py-12 border-b border-gray-200" id="data-intelligence">
              <div className="mb-6">
                <p className="text-sm font-bold text-[#161513] mb-2" style={{ fontSize: '14.336px', lineHeight: '20.0704px', fontWeight: '700' }}>
                  <strong>{HEADER_CATEGORIES['data-intelligence'].name}</strong>
                </p>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {dataIntelligenceProducts.map((product) => (
                  <li key={product.id}>
                    <Link 
                      href={product.href} 
                      className="text-[#006B8F] hover:text-[#004d6b] hover:underline transition-colors"
                      style={{ fontSize: '14.336px', lineHeight: '20.0704px', fontWeight: '400' }}
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Augment Marketplace */}
          {marketplaceProducts.length > 0 && (
            <section className="py-12 border-b border-gray-200" id="marketplace">
              <div className="mb-6">
                <p className="text-sm font-bold text-[#161513] mb-2" style={{ fontSize: '14.336px', lineHeight: '20.0704px', fontWeight: '700' }}>
                  <strong>{HEADER_CATEGORIES.marketplace.name}</strong>
                </p>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {marketplaceProducts.map((product) => (
                  <li key={product.id}>
                    <Link 
                      href={product.href} 
                      className="text-[#006B8F] hover:text-[#004d6b] hover:underline transition-colors"
                      style={{ fontSize: '14.336px', lineHeight: '20.0704px', fontWeight: '400' }}
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Additional Applications */}
          <section className="py-12" id="additional">
            <div className="mb-6">
              <p className="text-sm font-bold text-[#161513] mb-2" style={{ fontSize: '14.336px', lineHeight: '20.0704px', fontWeight: '700' }}>
                <strong>Additional Applications</strong>
              </p>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <li>
                <Link 
                  href="/product/social-media" 
                  className="text-[#006B8F] hover:text-[#004d6b] hover:underline transition-colors"
                  style={{ fontSize: '14.336px', lineHeight: '20.0704px', fontWeight: '400' }}
                >
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link 
                  href="/product/digital-signature" 
                  className="text-[#006B8F] hover:text-[#004d6b] hover:underline transition-colors"
                  style={{ fontSize: '14.336px', lineHeight: '20.0704px', fontWeight: '400' }}
                >
                  Digital Signature Platform
                </Link>
              </li>
              <li>
                <Link 
                  href="/product/customer-support" 
                  className="text-[#006B8F] hover:text-[#004d6b] hover:underline transition-colors"
                  style={{ fontSize: '14.336px', lineHeight: '20.0704px', fontWeight: '400' }}
                >
                  Customer Support Platform
                </Link>
              </li>
            </ul>
          </section>

        </div>
      </main>
    </div>
  );
}