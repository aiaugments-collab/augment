"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  customItems?: BreadcrumbItem[];
  className?: string;
}

// Route mapping for better labels
const ROUTE_LABELS: Record<string, string> = {
  '': 'Augment',
  'product': 'Products',
  'aihr': 'AI HR Assistant',
  'ai': 'AI Solutions',
  'sales': 'AI Sales Assistant',
  'marketing': 'AI Marketing',
  'finance': 'AI Finance',
  'customer-service': 'Customer Service AI',
  'demo': 'Demo',
  'tour': 'Product Tour',
  'pricing': 'Pricing',
  'about': 'About',
  'contact': 'Contact',
  'resources': 'Resources',
  'blog': 'Blog',
  'careers': 'Careers'
};

export function Breadcrumb({ customItems, className = "" }: BreadcrumbProps) {
  const pathname = usePathname();

  // If custom items provided, use those
  if (customItems) {
    return (
      <nav className={`${className}`} aria-label="Breadcrumb">
        <ol className="flex items-center space-x-2 text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
          {customItems.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <svg 
                  className="w-4 h-4 text-gray-400 mx-2" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                    clipRule="evenodd" 
                  />
                </svg>
              )}
              {index === customItems.length - 1 ? (
                <span className="text-gray-900 font-medium" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link 
                  href={item.href}
                  className="hover:text-[#C74634] transition-colors duration-200"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    );
  }

  // Auto-generate breadcrumbs from current path
  const pathSegments = pathname.split('/').filter(Boolean);
  
  // Build breadcrumb items
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Augment', href: '/' }
  ];

  let currentPath = '';
  pathSegments.forEach((segment, _index) => {
    currentPath += `/${segment}`;
    const label = ROUTE_LABELS[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
    
    breadcrumbs.push({
      label,
      href: currentPath
    });
  });

  // Don't show breadcrumbs if we're on home page
  if (pathSegments.length === 0) {
    return null;
  }

  return (
    <nav className={`${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm text-gray-600" style={{ fontFamily: 'var(--oraclesans)' }}>
        {breadcrumbs.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <svg 
                className="w-4 h-4 text-gray-400 mx-2" 
                fill="currentColor" 
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path 
                  fillRule="evenodd" 
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" 
                  clipRule="evenodd" 
                />
              </svg>
            )}
            {index === breadcrumbs.length - 1 ? (
              <span className="text-gray-900 font-medium" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link 
                href={item.href}
                className="hover:text-[#C74634] transition-colors duration-200"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
