import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Join Community | Augment AI',
  description: 'Join the Augment AI community of 10,000+ professionals. Connect with experts, share knowledge, and collaborate on AI innovation.',
  keywords: 'join community, AI professionals, networking, collaboration, AI experts',
};

export default function JoinCommunityAugmentAIPage() {
  return (
    <main className="min-h-screen bg-white">
      <h1 className="sr-only">Join Community | Augment AI</h1>
      
      <section className="bg-[#312a2a] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
            Join Community | Augment AI
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
            Join the Augment AI community of 10,000+ professionals. Connect with experts, share knowledge, and collaborate on AI innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-demo" className="inline-flex items-center px-6 py-3 bg-[#4A90E2] text-white font-semibold rounded-lg hover:bg-[#357ABD] transition-colors">
              Get Started
            </Link>
            <Link href="/corporate/contact/sales" className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#312a2a] transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#161513] mb-6">Join Our Community</h2>
          <p className="text-lg text-gray-700 mb-6">Connect with 10,000+ AI professionals, industry experts, and innovators from around the world.</p>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-6">Membership Benefits</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Access to exclusive AI insights and research</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Networking with industry leaders</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Early access to new features and beta programs</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Participation in collaborative projects</li>
              <li className="flex items-center"><span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>Exclusive events and workshops</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#4A90E2] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
            Ready to Join?
          </h2>
          <p className="text-base text-blue-100 mb-8">
            Become part of the largest AI professional community and accelerate your AI journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-demo" className="inline-flex items-center px-6 py-3 bg-white text-[#4A90E2] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Learn More
            </Link>
            <Link href="/corporate/contact/sales" className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#4A90E2] transition-colors">
              Contact Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}