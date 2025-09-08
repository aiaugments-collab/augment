"use client";

import Link from "next/link";

export default function AIAgentsAnnouncementPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <h1 className="sr-only">Augment to offer advanced AI Agents via Cloud Infrastructure</h1>
        
        {/* Article Header */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
            <div className="text-sm text-gray-600 mb-4">
              <span>News Release</span> • <span>March 15, 2024</span>
            </div>
            <h1 
              className="text-4xl lg:text-5xl font-normal text-gray-900 mb-6"
              style={{ fontFamily: "var(--oracleserif)" }}
            >
              Augment to offer advanced AI Agents via Cloud Infrastructure
            </h1>
            <div 
              style={{
                width: "60px",
                height: "3px",
                backgroundColor: "#C74634",
                marginBottom: "24px"
              }}
            />
            <p className="text-xl text-gray-700 leading-relaxed">
              Service includes cutting-edge AI agents for building intelligent automation for a wide range of use cases, including advanced sales and workflow optimization.
            </p>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              <strong>REDWOOD SHORES, Calif. – March 15, 2024</strong> – Augment today announced the expansion of its AI platform to include advanced AI agents delivered through its cloud infrastructure. This new service offering provides businesses with intelligent automation capabilities that can transform operations across sales, customer service, and workflow management.
            </p>

            <h2 
              className="text-2xl font-semibold text-gray-900 mt-12 mb-6"
              style={{ fontFamily: "var(--oracleserif)" }}
            >
              Revolutionary AI Agent Technology
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The new AI agents leverage Augment's proprietary machine learning algorithms to provide autonomous decision-making capabilities. These agents can handle complex business processes, from lead qualification and customer interactions to workflow optimization and data analysis.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              "We're entering a new era where AI agents don't just assist—they actively participate in business operations," said Sarah Chen, Chief Technology Officer at Augment. "Our cloud-based AI agents can work 24/7, learning from every interaction and continuously improving their performance."
            </p>

            <h2 
              className="text-2xl font-semibold text-gray-900 mt-12 mb-6"
              style={{ fontFamily: "var(--oracleserif)" }}
            >
              Key Capabilities
            </h2>

            <ul className="list-disc pl-6 text-gray-700 leading-relaxed mb-8 space-y-2">
              <li><strong>Intelligent Sales Automation:</strong> AI agents that can qualify leads, schedule meetings, and provide personalized product recommendations</li>
              <li><strong>Customer Service Excellence:</strong> 24/7 support agents capable of handling complex inquiries and escalating when necessary</li>
              <li><strong>Workflow Optimization:</strong> Agents that analyze business processes and suggest improvements in real-time</li>
              <li><strong>Data-Driven Insights:</strong> Continuous analysis of business metrics with actionable recommendations</li>
              <li><strong>Multi-Platform Integration:</strong> Seamless integration with existing business tools and platforms</li>
            </ul>

            <h2 
              className="text-2xl font-semibold text-gray-900 mt-12 mb-6"
              style={{ fontFamily: "var(--oracleserif)" }}
            >
              Industry Impact
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Early adopters of Augment's AI agent technology have reported significant improvements in operational efficiency. Beta customers have seen up to 40% reduction in manual tasks and 60% improvement in response times for customer inquiries.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              "The AI agents have transformed how we handle customer interactions," said Michael Rodriguez, Operations Director at TechFlow Solutions. "What used to take our team hours now happens automatically, and with better accuracy than we ever achieved manually."
            </p>

            <h2 
              className="text-2xl font-semibold text-gray-900 mt-12 mb-6"
              style={{ fontFamily: "var(--oracleserif)" }}
            >
              Availability and Pricing
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Augment's AI agent services are now available through the company's cloud platform. The service is offered on a subscription basis with flexible pricing tiers to accommodate businesses of all sizes.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Organizations interested in implementing AI agents can start with a free 30-day trial that includes full access to the platform's capabilities and dedicated support from Augment's AI specialists.
            </p>

            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <h3 
                className="text-xl font-semibold text-gray-900 mb-4"
                style={{ fontFamily: "var(--oracleserif)" }}
              >
                About Augment
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Augment is a leading provider of AI-powered business automation solutions. Founded in 2020, the company serves thousands of organizations worldwide, helping them transform their operations through intelligent automation. Augment's platform combines advanced machine learning, natural language processing, and cloud infrastructure to deliver scalable AI solutions.
              </p>
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div 
                style={{
                  width: "60px",
                  height: "3px",
                  backgroundColor: "#C74634",
                  margin: "0 auto 24px"
                }}
              />
              <h3 
                className="text-2xl font-semibold text-gray-900 mb-6"
                style={{ fontFamily: "var(--oracleserif)" }}
              >
                Ready to Experience AI Agents?
              </h3>
              <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
                Discover how Augment's AI agents can transform your business operations. Start your free trial today and see the difference intelligent automation can make.
              </p>
              <div className="space-x-4">
                <Link 
                  href="/book-demo"
                  className="inline-block px-8 py-3 text-white font-semibold rounded-md transition-colors duration-300"
                  style={{ 
                    backgroundColor: "#C74634",
                    fontFamily: "var(--oraclesans)"
                  }}
                  onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = "#A63429"}
                  onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = "#C74634"}
                >
                  Book a Demo
                </Link>
                <Link 
                  href="/ai-agent/free"
                  className="inline-block px-8 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-md hover:border-gray-400 transition-colors duration-300"
                  style={{ fontFamily: "var(--oraclesans)" }}
                >
                  Start Free Trial
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
