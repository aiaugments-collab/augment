import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {ProductCustomerLogos} from '@/components/product/ProductCustomerLogos'

export const metadata: Metadata = {
  title: 'AI Resume & Career Assistant - Create AI-Powered Resumes That Get You Hired | Augment',
  description: 'Transform any job description into a perfectly tailored, ATS-optimized resume in seconds. Our AI analyzes job requirements and crafts compelling content that gets you noticed.',
}

export default function ResumeAIPage() {
  const productUrl = 'https://resumeai.augment.cfd/'
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  Powered by Advanced AI Technology
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Create AI-Powered Resumes That Get You Hired
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform any job description into a perfectly tailored, ATS-optimized resume in seconds. Our AI analyzes job requirements and crafts compelling content that gets you noticed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href={productUrl}
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Create Resume with AI Resume & Career Assistant
                </Link>
                <Link
                  href={productUrl}
                  className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  See How It Works
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">10K+</div>
                  <div className="text-sm text-gray-600">Resumes Created</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">95%</div>
                  <div className="text-sm text-gray-600">ATS Pass Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">30s</div>
                  <div className="text-sm text-gray-600">Average Generation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">4.9</div>
                  <div className="text-sm text-gray-600">User Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/products/resume-ai/01.png"
                alt="AI Resume & Career Assistant Dashboard Screenshot"
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
              Everything you need to create the perfect resume
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powered by cutting-edge AI technology, AI Resume & Career Assistant provides all the tools you need to create professional, ATS-optimized resumes that get results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI-Powered Content Generation */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Content Generation</h3>
                <div className="text-xs text-blue-600 font-medium mb-2">Core Feature</div>
                <p className="text-gray-600">Our advanced AI analyzes job descriptions and creates tailored resume content that matches exactly what employers are looking for.</p>
              </div>
            </div>

            {/* ATS Optimization */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">ATS Optimization</h3>
                <div className="text-xs text-green-600 font-medium mb-2">Essential</div>
                <p className="text-gray-600">Automatically optimized for Applicant Tracking Systems with proper keywords, formatting, and structure to pass initial screenings.</p>
              </div>
            </div>

            {/* Instant Generation */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Generation</h3>
                <div className="text-xs text-purple-600 font-medium mb-2">Fast</div>
                <p className="text-gray-600">Generate a complete, professional resume in under 30 seconds. Simply paste the job description and let AI do the work.</p>
              </div>
            </div>

            {/* Professional Templates */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-indigo-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Templates</h3>
                <div className="text-xs text-indigo-600 font-medium mb-2">Design</div>
                <p className="text-gray-600">Choose from multiple professionally designed templates that are proven to get results across different industries.</p>
              </div>
            </div>

            {/* Real-time Preview */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-time Preview</h3>
                <div className="text-xs text-orange-600 font-medium mb-2">Preview</div>
                <p className="text-gray-600">See your resume come to life with live preview as you make changes. What you see is exactly what you get.</p>
              </div>
            </div>

            {/* Success Analytics */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Success Analytics</h3>
                <div className="text-xs text-pink-600 font-medium mb-2">Analytics</div>
                <p className="text-gray-600">Get insights on how your resume performs and suggestions for improvements based on industry standards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              From job posting to perfect resume in 4 simple steps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered process makes creating tailored resumes effortless. No more guessing what employers want to see.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Create Your Profile</h3>
              <p className="text-gray-600 mb-4">Add your personal information, work experience, education, and skills. This forms the foundation of your AI-powered resume.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Personal & contact information</li>
                <li>• Work experience & achievements</li>
                <li>• Education & certifications</li>
                <li>• Skills & competencies</li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Paste Job Description</h3>
              <p className="text-gray-600 mb-4">Simply copy and paste the job description from any job posting. Our AI will analyze the requirements and keywords.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Job title & company</li>
                <li>• Required qualifications</li>
                <li>• Key responsibilities</li>
                <li>• Preferred skills</li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Magic Happens</h3>
              <p className="text-gray-600 mb-4">Our advanced AI analyzes the job requirements and tailors your resume content to match perfectly with ATS optimization.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Keyword optimization</li>
                <li>• Content tailoring</li>
                <li>• ATS formatting</li>
                <li>• Professional summary generation</li>
              </ul>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Download & Apply</h3>
              <p className="text-gray-600 mb-4">Review your AI-generated resume, make any final adjustments, and download as a professional PDF ready for applications.</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Live preview & editing</li>
                <li>• Multiple template options</li>
                <li>• High-quality PDF export</li>
                <li>• Ready to submit</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href={productUrl}
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Start Creating Your Resume
            </Link>
            <p className="text-sm text-gray-500 mt-2">No credit card required • Free to start • Takes less than 2 minutes</p>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              See AI Resume & Career Assistant In Action
            </h2>
            <p className="text-xl text-gray-600">
              Discover how easy it is to create professional resumes with AI
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="relative">
              <Image
                src="/products/resume-ai/02.png"
                alt="Resume Builder Interface"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
            <div className="relative">
              <Image
                src="/products/resume-ai/03.png"
                alt="AI Content Generation"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative">
              <Image
                src="/products/resume-ai/04.png"
                alt="Professional Templates"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
            <div className="relative">
              <Image
                src="/products/resume-ai/05.png"
                alt="Export and Download"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Loved by job seekers worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join thousands of professionals who have transformed their careers with AI Resume & Career Assistant
            </p>
            
            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">3x</div>
                <div className="text-gray-600">More Interviews</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
                <div className="text-gray-600">Happy Users</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">4.9</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-semibold">
                  SC
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-gray-900">Sarah Chen</div>
                  <div className="text-sm text-gray-600">Software Engineer at Google</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;AI Resume & Career Assistant completely transformed my job search. The AI-generated content was so much better than what I could write myself. I got 3x more interviews and landed my dream job at Google!&rdquo;
              </p>
              <div className="text-sm text-blue-600 font-medium">Landed dream job at Google</div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-green-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-semibold">
                  MJ
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-gray-900">Marcus Johnson</div>
                  <div className="text-sm text-gray-600">Marketing Manager at Microsoft</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;I was struggling to tailor my resume for different positions. AI Resume & Career Assistant made it effortless - just paste the job description and get a perfectly optimized resume. Saved me hours of work.&rdquo;
              </p>
              <div className="text-sm text-green-600 font-medium">Saved hours of work</div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-purple-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-semibold">
                  ER
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-gray-900">Emily Rodriguez</div>
                  <div className="text-sm text-gray-600">Data Scientist at Netflix</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;The ATS optimization is incredible. My resume started getting past the initial screening every time. The AI really understands what recruiters are looking for.&rdquo;
              </p>
              <div className="text-sm text-purple-600 font-medium">Passes ATS every time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Logos */}
      <ProductCustomerLogos title="Trusted by" description="Millions of job seekers" viewMoreText="View all customers" viewMoreHref="/customers" logos={[]} />

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to transform your career with AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of professionals who have already landed their dream jobs using AI Resume & Career Assistant. Start creating your perfect resume today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-2 items-center justify-center mb-6">
            <span className="flex items-center text-blue-100">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Generate in 30 seconds
            </span>
            <span className="flex items-center text-blue-100">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              ATS-optimized
            </span>
            <span className="flex items-center text-blue-100">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              AI-powered content
            </span>
          </div>
          
          <Link
            href={productUrl}
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
          >
            Start Free Trial
          </Link>
          <p className="text-sm text-blue-100 mt-4">
             No credit card required •  7-day free trial •  Cancel anytime
          </p>
        </div>
      </section>
    </div>
  )
}
