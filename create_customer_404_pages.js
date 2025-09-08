const fs = require('fs');
const path = require('path');

// Template for creating pages
const createPageTemplate = (title, description, category) => `import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '${title} | Augment AI',
  description: '${description}',
};

export default function ${title.replace(/[^a-zA-Z0-9]/g, '')}Page() {
  return (
    <main className="min-h-screen bg-white">
      <h1 className="sr-only">${title}</h1>
      
      <section className="bg-[#312a2a] text-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
            ${title}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
            ${description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-demo"
              className="inline-flex items-center px-6 py-3 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-200"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              Book a Demo
            </Link>
            <Link
              href="/corporate/contact/sales"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#312a2a] transition-colors duration-200"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
            Key Features
          </h2>
          <p className="text-base text-gray-700 max-w-3xl mx-auto mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
            Discover the comprehensive capabilities and benefits designed to drive your success.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oracleserif)' }}>
                Comprehensive Solution
              </h3>
              <p className="text-base text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                End-to-end capabilities designed to meet your specific needs and requirements.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oracleserif)' }}>
                Expert Support
              </h3>
              <p className="text-base text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                Dedicated support from our team of experts to ensure your success.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oracleserif)' }}>
                Proven Results
              </h3>
              <p className="text-base text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                Track record of delivering measurable results and business value.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#161513] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
            Ready to get started?
          </h2>
          <p className="text-base text-gray-300 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
            Take the next step and discover how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/corporate/contact/sales"
              className="inline-flex items-center px-6 py-3 bg-white text-[#161513] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              Contact Sales
            </Link>
            <Link
              href="/book-demo"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#161513] transition-colors duration-200"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}`;

// All the missing pages to create
const pagesToCreate = [
  // Customer Segments
  { path: 'app/customers/enterprise', title: 'Enterprise Customers', description: 'Discover how Fortune 500 companies and large enterprises are leveraging Augment AI for digital transformation and competitive advantage.', category: 'customer-segment' },
  { path: 'app/customers/mid-market', title: 'Mid-Market Companies', description: 'Learn how growing companies are using Augment AI to scale operations, improve efficiency, and accelerate growth.', category: 'customer-segment' },
  { path: 'app/customers/startups', title: 'Startups & Scale-ups', description: 'Explore how innovative startups are building AI-first products and services with the Augment AI platform.', category: 'customer-segment' },
  { path: 'app/customers/government', title: 'Government & Public Sector', description: 'See how government agencies and public organizations are improving citizen services with AI-powered solutions.', category: 'customer-segment' },
  { path: 'app/customers/education', title: 'Educational Institutions', description: 'Discover how universities, schools, and educational organizations are enhancing learning experiences with AI.', category: 'customer-segment' },
  
  // Customer Programs
  { path: 'app/customers/reference-program', title: 'Customer Reference Program', description: 'Become a reference customer and help prospects understand the value of Augment AI solutions while gaining recognition.', category: 'customer-program' },
  
  // Case Studies - Featured
  { path: 'app/customers/case-studies/healthcare-network-ai', title: 'Healthcare Network AI Case Study', description: 'How a leading healthcare provider reduced patient wait times by 40% and improved diagnostic accuracy by 25% with Augment Health AI.', category: 'case-study' },
  { path: 'app/customers/case-studies/fortune-500-fraud-prevention', title: 'Fortune 500 Fraud Prevention', description: 'Major financial institution prevented $50M in fraud losses using Augment Finance AI for real-time transaction monitoring.', category: 'case-study' },
  { path: 'app/customers/case-studies/manufacturing-efficiency', title: 'Manufacturing Efficiency Case Study', description: 'Global manufacturer increased production efficiency by 30% and reduced equipment downtime by 45% with Augment Flow.', category: 'case-study' },
  { path: 'app/customers/case-studies/retail-personalization', title: 'Retail Personalization Success', description: 'International retailer boosted online sales by 25% using Augment Search AI for personalized recommendations.', category: 'case-study' },
  { path: 'app/customers/case-studies/government-citizen-services', title: 'Government Citizen Services', description: 'Federal agency improved citizen service delivery by 50% using Augment AI for document processing and workflow automation.', category: 'case-study' },
  { path: 'app/customers/case-studies/startup-scaling-hr', title: 'Startup HR Scaling Success', description: 'Fast-growing startup scaled hiring process 10x faster using Augment Resume AI for automated screening.', category: 'case-study' },
  
  // Case Studies - Main Page Links
  { path: 'app/customers/case-studies/global-healthcare', title: 'Global Healthcare Case Study', description: 'Leading healthcare provider transformed patient care and operational efficiency with Augment Health AI solutions.', category: 'case-study' },
  { path: 'app/customers/case-studies/fortune-500-bank', title: 'Fortune 500 Bank Case Study', description: 'Major financial institution achieved breakthrough results in fraud prevention and customer satisfaction with Augment Finance AI.', category: 'case-study' },
  { path: 'app/customers/case-studies/manufacturing-giant', title: 'Manufacturing Giant Case Study', description: 'Multinational manufacturer revolutionized production efficiency and quality control with Augment Flow solutions.', category: 'case-study' },
  { path: 'app/customers/case-studies/retail-chain', title: 'Retail Chain Case Study', description: 'Global retailer transformed customer experience and sales performance with Augment Search AI technology.', category: 'case-study' },
  { path: 'app/customers/case-studies/government-agency', title: 'Government Agency Case Study', description: 'Government department dramatically improved citizen services and operational efficiency with Augment AI solutions.', category: 'case-study' },
  
  // Case Studies - Industry Categories
  { path: 'app/customers/case-studies/industry/healthcare', title: 'Healthcare Case Studies', description: 'Explore detailed case studies from hospitals, clinics, and pharmaceutical companies transforming patient care with AI.', category: 'industry-cases' },
  { path: 'app/customers/case-studies/industry/financial-services', title: 'Financial Services Case Studies', description: 'Discover how banks, insurance companies, and fintech firms are leveraging AI for fraud detection and customer service.', category: 'industry-cases' },
  { path: 'app/customers/case-studies/industry/manufacturing', title: 'Manufacturing Case Studies', description: 'Learn how manufacturers are optimizing operations and supply chain management with intelligent automation.', category: 'industry-cases' },
  { path: 'app/customers/case-studies/industry/retail-ecommerce', title: 'Retail & E-commerce Case Studies', description: 'See how retailers are enhancing customer experience and inventory management through AI-driven insights.', category: 'industry-cases' },
  { path: 'app/customers/case-studies/industry/government', title: 'Government Case Studies', description: 'Explore how government agencies are improving citizen services and operational efficiency with AI solutions.', category: 'industry-cases' },
  { path: 'app/customers/case-studies/industry/technology', title: 'Technology Case Studies', description: 'Discover how tech companies are accelerating development and scaling operations with AI-first approaches.', category: 'industry-cases' },
  
  // Case Studies - Resources
  { path: 'app/customers/case-studies/roi', title: 'Case Study ROI Analysis', description: 'Access detailed financial impact and return on investment metrics from real customer implementations.', category: 'case-study-resource' },
  { path: 'app/customers/case-studies/implementation', title: 'Implementation Insights', description: 'Learn about deployment strategies, challenges overcome, and best practices from successful projects.', category: 'case-study-resource' },
  { path: 'app/customers/case-studies/benchmarks', title: 'Industry Benchmarks', description: 'Compare performance metrics and outcomes against industry standards and peer organizations.', category: 'case-study-resource' },
  { path: 'app/customers/case-studies/technical', title: 'Technical Deep Dives', description: 'Explore technical architecture, integration approaches, and solution design from customer deployments.', category: 'case-study-resource' },
  { path: 'app/customers/case-studies/submit', title: 'Submit Case Study', description: 'Share your success story and collaborate with us to create a compelling case study for the community.', category: 'case-study-resource' },
  
  // Success Stories - Featured
  { path: 'app/customers/success-stories/healthcare-transformation', title: 'Healthcare Transformation Story', description: 'How a 15-hospital network reduced emergency room wait times by 45% and improved patient satisfaction with Augment Health AI.', category: 'success-story' },
  { path: 'app/customers/success-stories/fintech-scaling', title: 'FinTech Scaling Success', description: 'A fintech startup scaled from 10K to 10M users in 18 months using Augment Finance AI for fraud detection.', category: 'success-story' },
  { path: 'app/customers/success-stories/manufacturing-revolution', title: 'Manufacturing Revolution', description: 'Global automotive manufacturer achieved 35% cost reduction and 50% quality improvement with Augment Flow.', category: 'success-story' },
  { path: 'app/customers/success-stories/retail-personalization', title: 'Retail Personalization Success', description: 'International fashion brand increased conversion rates by 40% through AI-powered personalization.', category: 'success-story' },
  { path: 'app/customers/success-stories/government-efficiency', title: 'Government Efficiency Story', description: 'Metropolitan city government improved citizen service delivery by 55% with Augment AI process automation.', category: 'success-story' },
  { path: 'app/customers/success-stories/hr-transformation', title: 'HR Transformation Success', description: 'Tech company reduced time-to-hire by 65% and improved retention by 32% using Augment Resume AI.', category: 'success-story' },
  
  // Success Stories - Categories
  { path: 'app/customers/success-stories/category/transformation', title: 'Digital Transformation Stories', description: 'Complete organizational transformations enabled by AI, showcasing cultural change and business model evolution.', category: 'story-category' },
  { path: 'app/customers/success-stories/category/efficiency', title: 'Operational Efficiency Stories', description: 'Stories focused on process optimization, cost reduction, and productivity improvements through AI automation.', category: 'story-category' },
  { path: 'app/customers/success-stories/category/innovation', title: 'Innovation Breakthrough Stories', description: 'Groundbreaking innovations and new business opportunities created through creative AI implementations.', category: 'story-category' },
  { path: 'app/customers/success-stories/category/customer-experience', title: 'Customer Experience Stories', description: 'Stories highlighting dramatic improvements in customer satisfaction, engagement, and service delivery.', category: 'story-category' },
  { path: 'app/customers/success-stories/category/scaling', title: 'Scaling Success Stories', description: 'How organizations successfully scaled AI implementations from pilot projects to enterprise-wide deployments.', category: 'story-category' },
  { path: 'app/customers/success-stories/category/industry-firsts', title: 'Industry-First Stories', description: 'Pioneering implementations that set new industry standards and created competitive advantages.', category: 'story-category' },
  
  // Success Stories - Benefits
  { path: 'app/customers/success-stories/inspire', title: 'Inspire Others', description: 'Share your success to inspire other organizations and contribute to the AI community knowledge base.', category: 'story-benefit' },
  { path: 'app/customers/success-stories/recognition', title: 'Gain Recognition', description: 'Receive industry recognition for your innovative AI implementation and thought leadership.', category: 'story-benefit' },
  { path: 'app/customers/success-stories/credibility', title: 'Build Credibility', description: 'Establish your organization as an AI leader and attract top talent, partners, and customers.', category: 'story-benefit' },
  { path: 'app/customers/success-stories/network', title: 'Network & Connect', description: 'Connect with other AI leaders and join an exclusive community of successful implementers.', category: 'story-benefit' },
  
  // Advisory Board - Benefits
  { path: 'app/customers/advisory/product-influence', title: 'Product Roadmap Influence', description: 'Directly influence the future of Augment AI products and features based on your real-world experience.', category: 'advisory-benefit' },
  { path: 'app/customers/advisory/early-access', title: 'Exclusive Early Access', description: 'Get first access to new features, beta programs, and cutting-edge AI innovations before public release.', category: 'advisory-benefit' },
  { path: 'app/customers/advisory/networking', title: 'Executive Networking', description: 'Connect with fellow AI leaders and executives from top organizations worldwide in exclusive events.', category: 'advisory-benefit' },
  { path: 'app/customers/advisory/thought-leadership', title: 'Thought Leadership Platform', description: 'Establish yourself as an AI thought leader through speaking opportunities and industry recognition.', category: 'advisory-benefit' },
  { path: 'app/customers/advisory/insights', title: 'Strategic Market Insights', description: 'Access exclusive market research, industry trends, and strategic insights to inform your AI strategy.', category: 'advisory-benefit' },
  { path: 'app/customers/advisory/premium-support', title: 'Premium Support Access', description: 'Receive priority support, dedicated account management, and direct access to our engineering teams.', category: 'advisory-benefit' },
  
  // Advisory Board - Committees
  { path: 'app/customers/advisory/committees/product-strategy', title: 'Product Strategy Committee', description: 'Guide overall product direction, feature prioritization, and long-term strategic planning for Augment AI.', category: 'advisory-committee' },
  { path: 'app/customers/advisory/committees/technical-advisory', title: 'Technical Advisory Committee', description: 'Provide technical guidance on architecture, integrations, and emerging technology adoption.', category: 'advisory-committee' },
  { path: 'app/customers/advisory/committees/industry-vertical', title: 'Industry Vertical Committees', description: 'Specialized committees for healthcare, finance, manufacturing, and other industries.', category: 'advisory-committee' },
  { path: 'app/customers/advisory/committees/user-experience', title: 'User Experience Committee', description: 'Shape user interfaces, workflows, and overall user experience across all Augment AI products.', category: 'advisory-committee' },
  { path: 'app/customers/advisory/committees/ethics-governance', title: 'AI Ethics & Governance Committee', description: 'Guide responsible AI development, ethical considerations, and governance frameworks.', category: 'advisory-committee' },
  { path: 'app/customers/advisory/committees/market-expansion', title: 'Market Expansion Committee', description: 'Advise on new market opportunities, geographic expansion, and go-to-market strategies.', category: 'advisory-committee' },
  
  // Advisory Board - Member Benefits
  { path: 'app/customers/advisory/sessions', title: 'Quarterly Executive Sessions', description: 'Participate in exclusive quarterly sessions with Augment leadership to discuss strategy and roadmap.', category: 'advisory-member' },
  { path: 'app/customers/advisory/summit', title: 'Annual Advisory Summit', description: 'Attend our annual summit with keynotes, workshops, and networking with fellow advisory board members.', category: 'advisory-member' },
  { path: 'app/customers/advisory/ceo-access', title: 'Direct CEO Access', description: 'Regular touchpoints with our CEO and executive team to share feedback and strategic insights.', category: 'advisory-member' },
  { path: 'app/customers/advisory/innovation-labs', title: 'Innovation Labs Preview', description: 'Exclusive previews of our innovation labs and research projects before public announcement.', category: 'advisory-member' },
  
  // Partner Network - Types
  { path: 'app/partners/network/technology', title: 'Technology Integration Partners', description: 'Technology companies that integrate Augment AI into their platforms, creating powerful combined solutions.', category: 'partner-type' },
  { path: 'app/partners/network/solution', title: 'Solution Implementation Partners', description: 'Consulting firms and system integrators that help customers implement and optimize Augment AI solutions.', category: 'partner-type' },
  { path: 'app/partners/network/channel', title: 'Channel & Reseller Partners', description: 'Authorized resellers and distributors that sell Augment AI solutions to their customer base and markets.', category: 'partner-type' },
  { path: 'app/partners/network/industry', title: 'Industry Specialist Partners', description: 'Domain experts and industry specialists that provide vertical-specific expertise and solutions.', category: 'partner-type' },
  { path: 'app/partners/network/strategic', title: 'Strategic Alliance Partners', description: 'Strategic partnerships with major technology companies for joint go-to-market initiatives.', category: 'partner-type' },
  { path: 'app/partners/network/startup', title: 'Startup & Innovation Partners', description: 'Emerging companies building innovative solutions on top of the Augment AI platform.', category: 'partner-type' },
  
  // Partner Network - Benefits
  { path: 'app/partners/network/benefits/revenue', title: 'Revenue Growth Opportunities', description: 'Access new markets, customers, and revenue streams through our extensive partner ecosystem.', category: 'partner-benefit' },
  { path: 'app/partners/network/benefits/technical', title: 'Technical Resources & Support', description: 'Comprehensive technical documentation, APIs, SDKs, and dedicated partner engineering support.', category: 'partner-benefit' },
  { path: 'app/partners/network/benefits/marketing', title: 'Co-Marketing & Sales Support', description: 'Joint marketing programs, sales enablement, lead sharing, and co-branded marketing materials.', category: 'partner-benefit' },
  { path: 'app/partners/network/benefits/training', title: 'Training & Certification Programs', description: 'Comprehensive partner training, certification programs, and ongoing education to ensure success.', category: 'partner-benefit' },
  { path: 'app/partners/network/benefits/exclusive', title: 'Exclusive Partner Access', description: 'Early access to new products, beta programs, roadmap insights, and exclusive partner events.', category: 'partner-benefit' },
  { path: 'app/partners/network/benefits/portal', title: 'Dedicated Partner Portal', description: 'Access to partner-only resources, deal registration, lead management, and performance analytics.', category: 'partner-benefit' },
  
  // Partner Network - Programs
  { path: 'app/partners/network/certification', title: 'Partner Certification Program', description: 'Comprehensive certification program to validate partner expertise and ensure customer success.', category: 'partner-program' },
  { path: 'app/partners/network/go-to-market', title: 'Joint Go-to-Market Program', description: 'Collaborative sales and marketing programs to accelerate mutual growth and market expansion.', category: 'partner-program' },
  { path: 'app/partners/network/innovation-lab', title: 'Innovation Lab Partnership', description: 'Collaborate on cutting-edge AI research and development in our innovation labs.', category: 'partner-program' },
  { path: 'app/partners/network/advisory', title: 'Partner Advisory Council', description: 'Join our partner advisory council to influence product roadmap and partnership strategy.', category: 'partner-program' },
  
  // Partner Directory
  { path: 'app/partners/directory', title: 'Partner Directory', description: 'Browse our directory of certified partners to find the right expertise for your AI implementation needs.', category: 'partner-directory' },
  
  // Startup Program - Benefits
  { path: 'app/startup/benefits/credits', title: 'Free AI Platform Credits', description: 'Up to $100,000 in free Augment AI platform credits to accelerate your development and reduce costs.', category: 'startup-benefit' },
  { path: 'app/startup/benefits/technical-support', title: 'Dedicated Technical Support', description: 'Priority technical support, architecture reviews, and direct access to our engineering team.', category: 'startup-benefit' },
  { path: 'app/startup/benefits/mentorship', title: 'Expert Mentorship Program', description: 'Connect with successful entrepreneurs, AI experts, and industry leaders for strategic guidance.', category: 'startup-benefit' },
  { path: 'app/startup/benefits/investors', title: 'Investor Network Access', description: 'Exclusive access to our network of VCs, angel investors, and strategic partners for funding opportunities.', category: 'startup-benefit' },
  { path: 'app/startup/benefits/go-to-market', title: 'Go-to-Market Support', description: 'Marketing resources, co-marketing opportunities, and access to our customer base for validation.', category: 'startup-benefit' },
  { path: 'app/startup/benefits/community', title: 'Startup Community Network', description: 'Join a vibrant community of AI startups for collaboration, knowledge sharing, and peer learning.', category: 'startup-benefit' },
  
  // Startup Program - Tracks
  { path: 'app/startup/tracks/early-stage', title: 'Early Stage Track', description: 'For pre-seed and seed stage startups building AI-first products and solutions with our platform.', category: 'startup-track' },
  { path: 'app/startup/tracks/growth-stage', title: 'Growth Stage Track', description: 'For Series A+ startups scaling AI solutions and looking for strategic partnerships.', category: 'startup-track' },
  { path: 'app/startup/tracks/ai-native', title: 'AI-Native Track', description: 'Specialized track for startups building core AI technologies, models, or infrastructure solutions.', category: 'startup-track' },
  { path: 'app/startup/tracks/vertical-ai', title: 'Vertical AI Track', description: 'Industry-specific track for startups building AI solutions for healthcare, finance, and other verticals.', category: 'startup-track' },
  { path: 'app/startup/tracks/enterprise-ai', title: 'Enterprise AI Track', description: 'For B2B startups building enterprise AI solutions with focus on enterprise sales and partnerships.', category: 'startup-track' },
  { path: 'app/startup/tracks/international', title: 'International Track', description: 'Support for international startups looking to expand to new markets or establish global presence.', category: 'startup-track' },
  
  // Startup Program - Success Stories
  { path: 'app/startup/success-stories', title: 'Startup Success Stories', description: 'Inspiring stories from startups that have achieved remarkable success through our program.', category: 'startup-stories' },
  { path: 'app/startup/success-stories/healthtech-unicorn', title: 'HealthTech Unicorn Success', description: 'From startup program to $1B valuation - how one healthtech startup scaled with Augment AI support.', category: 'startup-story' },
  { path: 'app/startup/success-stories/fintech-ipo', title: 'FinTech IPO Journey', description: 'A fintech startup that went from program participant to successful IPO in just 4 years.', category: 'startup-story' },
  { path: 'app/startup/success-stories/ai-research', title: 'AI Research Breakthrough', description: 'How an AI research startup achieved breakthrough results and secured major enterprise partnerships.', category: 'startup-story' },
  { path: 'app/startup/success-stories/global-expansion', title: 'Global Expansion Success', description: 'International startup that successfully expanded to 15 countries with program support.', category: 'startup-story' }
];

// Function to create directory and file
function createPageFile(pageInfo) {
  const fullPath = path.join(__dirname, pageInfo.path);
  
  // Create directory if it doesn't exist
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
  
  // Create page.tsx file
  const filePath = path.join(fullPath, 'page.tsx');
  const content = createPageTemplate(pageInfo.title, pageInfo.description, pageInfo.category);
  
  fs.writeFileSync(filePath, content);
  console.log(`Created: ${filePath}`);
}

// Create all pages
console.log('Creating customer success and partner 404 pages...');
pagesToCreate.forEach(createPageFile);
console.log(`\n✅ Successfully created ${pagesToCreate.length} customer and partner pages!`);
