'use client';

import { usePathname } from 'next/navigation';
import Header from "@/components/ui/Header";
import { Footer } from "@/components/landing-page/footer";

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  
  // Routes that should not show header and footer (full-screen app routes)
  const isFullScreenRoute = pathname?.startsWith('/dashboard') || 
                           pathname?.startsWith('/auth/') ||
                           pathname?.startsWith('/handler/') ||  // Stack Auth routes
                           pathname?.startsWith('/profile') ||
                           pathname?.startsWith('/admin') ||
                           pathname?.startsWith('/docs');

  if (isFullScreenRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
