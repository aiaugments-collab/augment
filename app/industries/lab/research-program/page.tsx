import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Research Program | Augment Industry Lab',
  description: 'Join the Augment Industry Lab research program. Collaborate on cutting-edge AI research projects and shape the future of intelligent automation.',
  keywords: 'AI research program, industry research, AI collaboration, research partnership, innovation lab',
};

export default function ResearchProgramPage() {
  return (
    <main className="min-h-screen bg-white">
      <h1 className="sr-only">Research Program | Augment Industry Lab</h1>
      
      <section className="bg-[#312a2a] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
            Join Our Research Program
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
            Collaborate with leading AI researchers on breakthrough projects that shape the future of intelligent automation across industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-demo" className="inline-flex items-center px-6 py-3 bg-[#4A90E2] text-white font-semibold rounded-lg hover:bg-[#357ABD] transition-colors">
              Apply to Program
            </Link>
            <Link href="/corporate/contact/sales" className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#312a2a] transition-colors">
              Contact Research Team
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
            Program Overview
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            The Augment Industry Lab Research Program brings together leading researchers, industry experts, and innovative organizations to advance the state of AI technology and its applications across industries.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-[#161513] mb-4">Research Areas</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Emerging AI Technologies</li>
                <li>• Ethical AI & Responsible Innovation</li>
                <li>• Human-AI Collaboration</li>
                <li>• AI Safety & Security</li>
                <li>• Industry-Specific Applications</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-[#161513] mb-4">Program Benefits</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Access to cutting-edge research facilities</li>
                <li>• Collaboration with leading experts</li>
                <li>• Publication opportunities</li>
                <li>• Industry networking</li>
                <li>• Early access to innovations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#4A90E2] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
            Ready to Join Our Research Program?
          </h2>
          <p className="text-base text-blue-100 mb-8">
            Apply now to collaborate on breakthrough AI research that shapes the future of industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book-demo" className="inline-flex items-center px-6 py-3 bg-white text-[#4A90E2] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Apply Now
            </Link>
            <Link href="/corporate/contact/sales" className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#4A90E2] transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
