# Product Development Guide - Augment Platform

This guide walks you through the complete process of adding a new AI or cloud product to the Augment platform.

## 📋 Prerequisites

Before adding a new product, ensure you have:
- The product's live URL (e.g., `https://newproduct.augment.cfd/`)
- Product screenshots (5 images: 01.png through 05.png)
- Product description and details
- Company logos for customer testimonials

## 🚀 Step-by-Step Process

### 1. Prepare Product Assets

#### 1.1 Create Product Directory
```bash
mkdir -p public/products/[product-slug]
```

#### 1.2 Add Product Screenshots
Place 5 high-quality screenshots in the product directory:
- `01.png` - Main hero/dashboard image (will be used as thumbnail)
- `02.png` - Feature showcase image
- `03.png` - Secondary feature image
- `04.png` - Additional feature or workflow image
- `05.png` - Final feature or results image

**Image Requirements:**
- Format: PNG or JPG
- Recommended size: 1200x800px or similar aspect ratio
- High quality, professional screenshots
- Clear, readable text and UI elements

### 2. Register the Product

#### 2.1 Add to Product Registry
Edit `lib/productRegistry.ts` and add your product to the `products` array:

```typescript
{
  id: 'product-slug',
  name: 'Product Full Name',
  shortName: 'Short Name', // Optional, for display in cards
  description: 'Detailed description of what the product does...',
  shortDescription: 'Brief one-line description for cards', // Optional
  category: 'ai-agents', // or 'cloud-applications'
  status: 'live', // 'live', 'beta', 'coming-soon'
  href: '/product/product-slug',
  productUrl: 'https://productslug.augment.cfd/',
  image: '/products/product-slug/01.png',
  icon: 'icon-name', // See available icons below
  tags: ['AI', 'Automation', 'Relevant Tag'],
  featured: true, // Set to true if this should appear in Featured Products
}
```

#### 2.2 Available Professional Icons
Choose from these professional icon names:
- `users` - For HR, team management, people-focused products
- `workflow` - For automation, process management
- `search` - For search, discovery, research tools
- `banknote` - For finance, payment, money-related products
- `bot` - For AI assistants, chatbots
- `building` - For enterprise, business solutions
- `brain` - For AI, machine learning, intelligence
- `shield` - For security, protection, compliance
- `chart` - For analytics, reporting, data visualization

### 3. Create Product Page

#### 3.1 Create Product Page File
```bash
mkdir -p app/product/[product-slug]
touch app/product/[product-slug]/page.tsx
```

#### 3.2 Product Page Template
Use this template for the product page (`app/product/[product-slug]/page.tsx`):

```typescript
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ProductCustomerLogos from '@/components/product/ProductCustomerLogos'

export const metadata: Metadata = {
  title: 'Product Name - Augment',
  description: 'Product description for SEO',
}

export default function ProductPage() {
  const productUrl = 'https://productslug.augment.cfd/'
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Product Name
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Product description and value proposition
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={productUrl}
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  href={productUrl}
                  className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/products/product-slug/01.png"
                alt="Product Screenshot"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes Product Name the perfect solution
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Feature Name</h3>
              <p className="text-gray-600">Feature description</p>
            </div>
            
            {/* Add more features as needed */}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              See It In Action
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Image
              src="/products/product-slug/02.png"
              alt="Feature Screenshot"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <Image
              src="/products/product-slug/03.png"
              alt="Feature Screenshot"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Customer Logos */}
      <ProductCustomerLogos />

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of companies using Product Name
          </p>
          <Link
            href={productUrl}
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
          >
            Start Free Trial
          </Link>
        </div>
      </section>
    </div>
  )
}
```

### 4. Update Navigation (Optional)

If you want the product to appear in the header dropdown, edit `components/header-dropdown.tsx` and add it to the appropriate section.

### 5. Testing Checklist

Before deploying, verify:

- [ ] Product appears in the main `/product` page
- [ ] Product page loads correctly at `/product/[product-slug]`
- [ ] All images load properly
- [ ] All links point to the correct product URL
- [ ] Icons display as SVGs, not text
- [ ] Product appears in Featured Products (if `featured: true`)
- [ ] Responsive design works on mobile/tablet
- [ ] SEO metadata is properly set

### 6. File Structure Summary

After adding a new product, your file structure should include:

```
augment/
├── public/products/[product-slug]/
│   ├── 01.png
│   ├── 02.png
│   ├── 03.png
│   ├── 04.png
│   └── 05.png
├── app/product/[product-slug]/
│   └── page.tsx
└── lib/productRegistry.ts (updated)
```

## 🎨 Design Guidelines

### Visual Consistency
- Use the Oracle-inspired design system
- Maintain consistent spacing and typography
- Use the established color palette (blues, grays, Oracle red accents)
- Follow the same layout patterns as existing products

### Content Guidelines
- Keep descriptions clear and benefit-focused
- Use professional, business-appropriate language
- Highlight key differentiators and value propositions
- Include relevant customer logos and testimonials

### Technical Standards
- All images should be optimized for web
- Use semantic HTML and proper accessibility attributes
- Ensure fast loading times
- Test across different devices and browsers

## 🔧 Advanced Customization

### Custom Sections
You can add custom sections to your product page by following the existing patterns:

```typescript
// Custom pricing section
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    {/* Your custom content */}
  </div>
</section>
```

### Custom Styling
Use Tailwind CSS classes and maintain consistency with:
- Font families: `var(--oraclesans)` and `var(--oracleserif)`
- Color scheme: Blues, grays, and Oracle red (`#C74634`)
- Spacing: Consistent padding and margins

## 📞 Support

If you encounter issues or need help:
1. Check existing product pages for reference
2. Ensure all file paths are correct
3. Verify image formats and sizes
4. Test the product registry syntax

---

**Happy coding! 🚀**
