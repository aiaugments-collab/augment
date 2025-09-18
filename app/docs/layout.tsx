import { DocsHeader } from '@/components/docs/DocsHeader'
import './globals.css'

export const metadata = {
  title: 'Documentation | Augment AI Platform',
  description: 'Comprehensive documentation for AI-powered tools and services',
}

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white">
      <DocsHeader />
      <div className="flex">
        {children}
      </div>
    </div>
  )
}
