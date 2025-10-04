'use client';
import { Metadata } from 'next';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection
} from '../../../../components/sections';

export default function CopyrightPage() {
  const heroButtons = [
    {
      text: 'Report Copyright Issue',
      href: '/corporate/contact/sales',
      variant: 'primary' as const
    },
    {
      text: 'View Legal Policies',
      href: '/legal/privacy',
      variant: 'secondary' as const
    }
  ];

  const copyrightInfo = [
    {
      id: 'dmca-policy',
      title: 'DMCA Policy',
      description: 'Our Digital Millennium Copyright Act policy and procedures for reporting copyright infringement.',
      ctaText: 'Learn more',
      ctaLink: '#dmca-policy',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'fair-use',
      title: 'Fair Use Guidelines',
      description: 'Understanding fair use principles and how they apply to content on our platform.',
      ctaText: 'Read guidelines',
      ctaLink: '#fair-use',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'attribution',
      title: 'Attribution Requirements',
      description: 'Proper attribution guidelines for using copyrighted materials in compliance with licensing terms.',
      ctaText: 'View requirements',
      ctaLink: '#attribution',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SectionHero
        title="Copyright Information"
        subtitle="Protecting intellectual property rights"
        description="Learn about copyright policies, DMCA procedures, and intellectual property rights related to Augment AI services and content."
        ctaButtons={heroButtons}
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&crop=faces"
      />

      {/* Copyright Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Copyright Protection
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We respect intellectual property rights and expect our users to do the same. Learn about our copyright policies and procedures.
            </p>
          </div> 
          <FeaturedCards cards={copyrightInfo} />
        </div>
      </section>

      {/* DMCA Policy */}
      <section id="dmca-policy" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            DMCA Policy
          </h2>
          <div className="prose prose-lg max-w-none">
            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Copyright Infringement Notification
              </h3>
              <p className="text-gray-700 mb-4">
                If you believe that content on our platform infringes your copyright, please provide us with the following information:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>A physical or electronic signature of the copyright owner or authorized agent</li>
                <li>Identification of the copyrighted work claimed to have been infringed</li>
                <li>Identification of the material that is claimed to be infringing</li>
                <li>Contact information including address, telephone number, and email</li>
                <li>A statement of good faith belief that the use is not authorized</li>
                <li>A statement that the information is accurate and you are authorized to act</li>
              </ul>
            </div>

            <div className="mb-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                How to Report
              </h3>
              <p className="text-gray-700 mb-4">
                Send your DMCA notice to our designated copyright agent:
              </p>
              <div className="bg-white p-4 rounded border">
                <p className="text-gray-700">
                  <strong>Copyright Agent</strong><br />
                  Augment AI Legal Department<br />
                  Email: legal@augment.com<br />
                  Subject: DMCA Copyright Notice
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fair Use */}
      <section id="fair-use" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Fair Use Guidelines
          </h2>
          <div className="prose prose-lg max-w-none">
            <div className="mb-8 p-6 bg-white rounded-lg shadow-sm">
              <p className="text-gray-700 mb-4">
                Fair use is a legal doctrine that allows limited use of copyrighted material without permission for purposes such as criticism, comment, news reporting, teaching, scholarship, or research.
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Fair Use Factors:
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Purpose and character of the use (commercial vs. educational)</li>
                <li>Nature of the copyrighted work</li>
                <li>Amount and substantiality of the portion used</li>
                <li>Effect of the use on the market for the original work</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Attribution */}
      <section id="attribution" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Attribution Requirements
          </h2>
          <div className="prose prose-lg max-w-none">
            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <p className="text-gray-700 mb-4">
                When using copyrighted materials under license or fair use, proper attribution is essential:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Include the creator's name and copyright notice</li>
                <li>Provide the title of the work when known</li>
                <li>Include the source or URL where applicable</li>
                <li>Specify the license under which the work is used</li>
                <li>Note any modifications made to the original work</li>
              </ul>
            </div>

            <div className="mb-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Augment AI Copyright Notice
              </h3>
              <div className="bg-white p-4 rounded border">
                <p className="text-gray-700 font-mono text-sm">
                  © 2025 Augment AI. All rights reserved.<br />
                  Augment AI and related logos are trademarks of Augment AI, Inc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <CTASection
        title="Copyright Questions?"
        description="Our legal team can help with copyright questions, licensing inquiries, and DMCA-related matters."
        actions={[
          {
            title: 'Contact Legal Team',
            href: '/corporate/contact/sales',
            buttonText: 'Contact Legal Team'
          },
          {
            title: 'View Privacy Policy',
            href: '/legal/privacy',
            buttonText: 'View Privacy Policy'
          }
        ]}
      />
    </div>
  );
}
