import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { findBestRoute } from './lib/routeMapping';

// List of existing routes (you can expand this based on your actual routes)
const existingRoutes = new Set([
  '/',
  '/product',
  '/product/aihr',
  '/product/finance-ai',
  '/product/flow',
  '/product/health-ai',
  '/product/resume-ai',
  '/product/searchai',
  '/developers',
  '/developers/docs',
  '/developers/apis',
  '/developers/samples',
  '/developers/community',
  '/developers/forums',
  '/developers/blogs',
  '/developers/tools',
  '/industries',
  '/industries/healthcare',
  '/industries/financial-services',
  '/industries/government',
  '/industries/education',
  '/industries/manufacturing',
  '/industries/retail',
  '/industries/high-tech',
  '/industries/professional',
  '/customers',
  '/customers/success-stories',
  '/customers/case-studies',
  '/customers/advisory',
  '/partners',
  '/partners/find',
  '/partners/join',
  '/partners/technology',
  '/partners/consulting',
  '/partners/implementation',
  '/company',
  '/company/leadership',
  '/careers',
  '/careers/jobs',
  '/careers/university',
  '/investor',
  '/support',
  '/training',
  '/university',
  '/startup',
  '/portal',
  '/community',
  '/forums',
  '/events',
  '/blogs',
  '/news',
  '/learn/what-are-ai-agents',
  '/learn/what-is-intelligent-automation',
  '/learn/how-ai-is-transforming-finance',
  '/learn/what-is-a-vector-database',
  '/learn/what-is-multicloud',
  '/learn/what-is-machine-learning',
  '/ai-agent/free',
  '/cloud/shell',
  '/corporate/responsibility',
  '/corporate/diversity',
  '/corporate/contact',
  '/corporate/accessibility',
  '/corporate/integrity-helpline',
  '/corporate/analyst-reports',
  '/corporate/security-practices',
  '/legal/privacy',
  '/legal/privacy/privacy-choices',
  '/legal/privacy/privacy-policy',
  '/security/practices',
  '/careers/diversity-inclusion',
  '/automation/automation-summit',
  '/developer/dev-tour',
  // Authentication routes
  '/auth/login',
  '/auth/register',
  '/dashboard',
  '/profile',
]);

// Routes that require authentication
const protectedRoutes = new Set([
  '/dashboard',
  '/profile',
]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Skip middleware for static files, API routes, and Next.js internals
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.includes('.') ||
    pathname.startsWith('/favicon')
  ) {
    return NextResponse.next();
  }

  // Handle authentication protection
  // Note: In a real app, you'd check for auth tokens/cookies here
  // For now, we'll let the client-side handle auth protection
  if (protectedRoutes.has(pathname)) {
    // In production, you might want to check for auth tokens here
    // For now, we'll let the client-side ProtectedRoute component handle this
    return NextResponse.next();
  }
  
  // If the route exists, let it through
  if (existingRoutes.has(pathname)) {
    return NextResponse.next();
  }
  
  // TEMPORARILY DISABLED: Smart redirect functionality
  // Try to find a matching route
  // const matchedRoute = findBestRoute(pathname);
  
  // if (matchedRoute) {
  //   // Redirect to the matched route with a 301 (permanent redirect)
  //   const url = request.nextUrl.clone();
  //   url.pathname = matchedRoute;
  //   
  //   // Preserve query parameters
  //   return NextResponse.redirect(url, 301);
  // }
  
  // If no match found, let Next.js handle it (will show 404 page)
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)',
  ],
};
