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
            ${category} Excellence
          </h2>
          <p className="text-base text-gray-700 max-w-3xl mx-auto mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
            Discover how our comprehensive ${category.toLowerCase()} solutions can help you achieve your goals and drive success.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oracleserif)' }}>
                Expert Guidance
              </h3>
              <p className="text-base text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                Get expert guidance and support from our experienced team of professionals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oracleserif)' }}>
                Proven Results
              </h3>
              <p className="text-base text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                Benefit from proven methodologies and best practices that deliver results.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-[#161513] mb-3" style={{ fontFamily: 'var(--oracleserif)' }}>
                Ongoing Support
              </h3>
              <p className="text-base text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                Receive continuous support and resources to ensure your long-term success.
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
            Contact our team to learn more about how we can help you achieve your objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/corporate/contact/sales"
              className="inline-flex items-center px-6 py-3 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-200"
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
}
`;

// All missing pages identified from resource and support pages
const pagesToCreate = [
  // Training page 404s
  { path: 'app/training/ai-fundamentals', title: 'AI Fundamentals Certification', description: 'Master the basics of artificial intelligence, machine learning, and AI implementation strategies for business applications.', category: 'Training' },
  { path: 'app/training/developer-certification', title: 'Augment Developer Certification', description: 'Comprehensive technical training for developers building AI applications with Augment platform and APIs.', category: 'Training' },
  { path: 'app/training/business-leaders', title: 'AI for Business Leaders', description: 'Strategic AI training for executives and business leaders focused on AI adoption, ROI, and organizational transformation.', category: 'Training' },
  { path: 'app/training/industry-specialist', title: 'Industry Specialist Programs', description: 'Specialized training programs for healthcare, finance, manufacturing, and other industry-specific AI applications.', category: 'Training' },
  { path: 'app/training/data-science-bootcamp', title: 'AI Data Science Bootcamp', description: 'Intensive hands-on training in data science, machine learning model development, and AI system deployment.', category: 'Training' },
  { path: 'app/training/ai-ethics', title: 'AI Ethics & Governance', description: 'Learn responsible AI development, ethical considerations, bias mitigation, and AI governance frameworks.', category: 'Training' },
  { path: 'app/training/paths/beginner', title: 'Beginner Learning Path', description: 'Start your AI journey with foundational concepts, basic implementations, and hands-on projects.', category: 'Training' },
  { path: 'app/training/paths/developer', title: 'Developer Learning Path', description: 'Advanced technical training for developers building production-ready AI applications and systems.', category: 'Training' },
  { path: 'app/training/paths/architect', title: 'AI Architect Path', description: 'Enterprise-level training for designing and implementing large-scale AI architectures and solutions.', category: 'Training' },
  { path: 'app/training/paths/consultant', title: 'AI Consultant Path', description: 'Business-focused training for consultants helping organizations adopt and implement AI strategies.', category: 'Training' },
  { path: 'app/training/paths/researcher', title: 'AI Researcher Path', description: 'Advanced research methodologies, cutting-edge AI techniques, and contribution to AI innovation.', category: 'Training' },
  { path: 'app/training/paths/manager', title: 'AI Manager Path', description: 'Leadership training for managing AI teams, projects, and organizational AI transformation initiatives.', category: 'Training' },
  { path: 'app/training/certifications', title: 'Training Certifications', description: 'Industry-recognized certifications that validate your AI expertise and advance your career.', category: 'Training' },
  { path: 'app/training/hands-on', title: 'Hands-On Learning Experience', description: 'Learn through practical projects, real-world case studies, and interactive coding exercises.', category: 'Training' },
  { path: 'app/training/instructors', title: 'Expert Instructor Network', description: 'Learn from industry experts, AI researchers, and practitioners with real-world experience.', category: 'Training' },
  { path: 'app/training/formats', title: 'Flexible Learning Options', description: 'Choose from self-paced online courses, live virtual sessions, or in-person workshops.', category: 'Training' },
  { path: 'app/training/catalog', title: 'Browse Course Catalog', description: 'Explore our comprehensive catalog of AI training courses and certification programs.', category: 'Training' },
  { path: 'app/training/corporate', title: 'Corporate Training', description: 'Customized AI training programs designed for organizations and enterprise teams.', category: 'Training' },
  { path: 'app/training/product-training', title: 'Live Training Sessions', description: 'Join live training sessions and webinars to learn about product features and best practices.', category: 'Training' },

  // University page 404s
  { path: 'app/university/masters-ai', title: 'Master of AI & Machine Learning', description: 'Comprehensive graduate program covering advanced AI concepts, machine learning algorithms, and real-world applications.', category: 'Education' },
  { path: 'app/university/data-science', title: 'Data Science & Analytics Program', description: 'Intensive program focusing on data analysis, statistical modeling, and AI-driven insights for business applications.', category: 'Education' },
  { path: 'app/university/ai-ethics', title: 'AI Ethics & Governance Certificate', description: 'Specialized program addressing ethical AI development, bias mitigation, and responsible AI governance frameworks.', category: 'Education' },
  { path: 'app/university/executive-ai', title: 'Executive AI Leadership Program', description: 'Strategic program for executives and senior leaders on AI transformation, digital strategy, and organizational change.', category: 'Education' },
  { path: 'app/university/research-fellowship', title: 'AI Research Fellowship', description: 'Advanced research program for PhD candidates and researchers working on cutting-edge AI innovations and breakthroughs.', category: 'Education' },
  { path: 'app/university/industry-collaboration', title: 'Industry Collaboration Program', description: 'Partnership program connecting students with industry projects, internships, and real-world AI implementation experience.', category: 'Education' },
  { path: 'app/university/library', title: 'Digital AI Library', description: 'Comprehensive collection of AI research papers, case studies, and academic resources from leading institutions.', category: 'Education' },
  { path: 'app/university/virtual-labs', title: 'Virtual AI Labs', description: 'State-of-the-art virtual laboratories with access to advanced AI tools, datasets, and computing resources.', category: 'Education' },
  { path: 'app/university/faculty', title: 'Expert Faculty Network', description: 'Learn from world-renowned AI researchers, industry experts, and thought leaders in artificial intelligence.', category: 'Education' },
  { path: 'app/university/student-community', title: 'Global Student Community', description: 'Connect with AI students worldwide, collaborate on projects, and participate in academic competitions.', category: 'Education' },
  { path: 'app/university/career-services', title: 'AI Career Services', description: 'Dedicated career support including job placement, internship opportunities, and industry networking events.', category: 'Education' },
  { path: 'app/university/publications', title: 'Research Publications', description: 'Publish your research in our peer-reviewed journals and contribute to the advancement of AI knowledge.', category: 'Education' },
  { path: 'app/university/education', title: 'World-Class Education', description: 'Learn from leading AI researchers and industry experts with cutting-edge curriculum and hands-on experience.', category: 'Education' },
  { path: 'app/university/partnerships', title: 'Industry Partnerships', description: 'Access exclusive internships and job opportunities through our partnerships with leading technology companies.', category: 'Education' },
  { path: 'app/university/research', title: 'Research Opportunities', description: 'Participate in groundbreaking AI research projects and contribute to the future of artificial intelligence.', category: 'Education' },
  { path: 'app/university/accreditation', title: 'Global Recognition', description: 'Earn degrees and certificates recognized worldwide by leading academic institutions and employers.', category: 'Education' },
  { path: 'app/university/programs', title: 'Explore All Programs', description: 'Discover all academic programs and degree options available at Augment University.', category: 'Education' },
  { path: 'app/university/virtual-tour', title: 'Take Virtual Tour', description: 'Experience Augment University through our comprehensive virtual campus tour.', category: 'Education' },

  // Blogs page 404s
  { path: 'app/learn/what-are-ai-agents', title: 'What are AI Agents? Complete Guide', description: 'Comprehensive guide to understanding AI agents, their capabilities, and how they are transforming business operations across industries.', category: 'Learning' },
  { path: 'app/learn/what-is-intelligent-automation', title: 'What is Intelligent Automation?', description: 'Explore how intelligent automation combines AI, machine learning, and RPA to revolutionize business processes.', category: 'Learning' },
  { path: 'app/learn/how-ai-is-transforming-finance', title: 'How AI is Transforming Finance', description: 'Discover the latest AI applications in finance, from fraud detection to algorithmic trading and risk management.', category: 'Learning' },
  { path: 'app/learn/what-is-a-vector-database', title: 'What is a Vector Database?', description: 'Understanding vector databases and their crucial role in AI applications, similarity search, and machine learning.', category: 'Learning' },
  { path: 'app/learn/what-is-multicloud', title: 'What is Multicloud?', description: 'Learn about multicloud strategies, benefits, challenges, and best practices for enterprise cloud adoption.', category: 'Learning' },
  { path: 'app/learn/what-is-machine-learning', title: 'What is Machine Learning?', description: 'Complete introduction to machine learning concepts, algorithms, and real-world applications across industries.', category: 'Learning' },
  { path: 'app/blogs/category/ai-fundamentals', title: 'AI Fundamentals', description: 'Essential concepts and principles of artificial intelligence, machine learning, and automation technologies.', category: 'Learning' },
  { path: 'app/blogs/category/industry-insights', title: 'Industry Insights', description: 'Deep dives into how AI is transforming specific industries including healthcare, finance, manufacturing, and more.', category: 'Learning' },
  { path: 'app/blogs/category/technical-tutorials', title: 'Technical Tutorials', description: 'Step-by-step guides, code examples, and hands-on tutorials for developers and technical practitioners.', category: 'Learning' },
  { path: 'app/blogs/category/business-strategy', title: 'Business Strategy', description: 'Strategic insights on AI adoption, digital transformation, and building AI-driven business capabilities.', category: 'Learning' },
  { path: 'app/blogs/category/research-innovation', title: 'Research & Innovation', description: 'Latest research findings, breakthrough innovations, and emerging trends in artificial intelligence.', category: 'Learning' },
  { path: 'app/blogs/category/case-studies', title: 'Case Studies', description: 'Real-world success stories, implementation examples, and lessons learned from AI deployments.', category: 'Learning' },
  { path: 'app/learn', title: 'AI Learning Resources', description: 'Access curated learning materials, courses, and resources to advance your AI knowledge and skills.', category: 'Learning' },
  { path: 'app/events/webinars', title: 'Expert Webinars', description: 'Join live webinars and discussions with AI experts, researchers, and industry practitioners.', category: 'Learning' },
  { path: 'app/blogs/contribute', title: 'Become a Contributor', description: 'Share your AI expertise and insights with our global community. We welcome guest contributors and thought leaders.', category: 'Learning' },
  { path: 'app/blogs/guidelines', title: 'Submission Guidelines', description: 'Guidelines for contributing articles and content to our AI insights blog and knowledge base.', category: 'Learning' },

  // Community page 404s
  { path: 'app/community/network', title: 'Connect with AI Professionals', description: 'Network with AI researchers, developers, business leaders, and innovators from around the world.', category: 'Community' },
  { path: 'app/community/projects', title: 'Collaborate on AI Projects', description: 'Find collaborators for research projects, open-source contributions, and innovative AI initiatives.', category: 'Community' },
  { path: 'app/community/mentorship', title: 'Mentorship and Career Growth', description: 'Connect with mentors, advance your AI career, and help others grow in the field of artificial intelligence.', category: 'Community' },
  { path: 'app/community/early-access', title: 'Early Access to AI Innovations', description: 'Get exclusive access to new features, research findings, and beta programs from Augment and partners.', category: 'Community' },
  { path: 'app/community/groups/developers', title: 'AI Developers & Engineers', description: 'Technical discussions, code sharing, and collaboration for developers building AI applications and systems.', category: 'Community' },
  { path: 'app/community/groups/researchers', title: 'AI Researchers & Scientists', description: 'Academic discussions, research collaboration, and sharing of latest findings in artificial intelligence research.', category: 'Community' },
  { path: 'app/community/groups/business-leaders', title: 'Business Leaders & Executives', description: 'Strategic discussions on AI adoption, transformation, and business impact of artificial intelligence.', category: 'Community' },
  { path: 'app/community/groups/data-scientists', title: 'Data Scientists & Analysts', description: 'Data science methodologies, machine learning techniques, and analytics best practices.', category: 'Community' },
  { path: 'app/community/groups/students', title: 'Students & Learners', description: 'Learning resources, study groups, and support for students and newcomers to artificial intelligence.', category: 'Community' },
  { path: 'app/community/groups/entrepreneurs', title: 'AI Entrepreneurs & Startups', description: 'Startup discussions, funding opportunities, and entrepreneurial support for AI-focused ventures.', category: 'Community' },
  { path: 'app/community/resources', title: 'Exclusive Learning Resources', description: 'Access premium content, webinars, and educational materials available only to community members.', category: 'Community' },
  { path: 'app/community/jobs', title: 'Job Opportunities', description: 'Discover AI job opportunities, internships, and career advancement opportunities from our network.', category: 'Community' },
  { path: 'app/community/research', title: 'Research Collaboration', description: 'Participate in collaborative research projects and contribute to advancing AI knowledge.', category: 'Community' },
  { path: 'app/community/recognition', title: 'Industry Recognition', description: 'Gain recognition for your contributions and expertise within the global AI community.', category: 'Community' },

  // Product Documentation page 404s
  { path: 'app/product-docs/aihr', title: 'AI HR Documentation', description: 'Complete user guide for AI HR solutions including setup, configuration, and advanced features for human resources automation.', category: 'Documentation' },
  { path: 'app/product-docs/finance-ai', title: 'Finance AI Documentation', description: 'Comprehensive documentation for Finance AI platform covering financial analysis, reporting, and automation features.', category: 'Documentation' },
  { path: 'app/product-docs/flow', title: 'Flow Documentation', description: 'User guide for Flow workflow automation platform including process design, deployment, and monitoring.', category: 'Documentation' },
  { path: 'app/product-docs/health-ai', title: 'Health AI Documentation', description: 'Complete documentation for Health AI solutions including clinical workflows, compliance, and integration guides.', category: 'Documentation' },
  { path: 'app/product-docs/resume-ai', title: 'Resume AI Documentation', description: 'User guide for Resume AI platform covering resume analysis, candidate matching, and recruitment automation.', category: 'Documentation' },
  { path: 'app/product-docs/search-ai', title: 'Search AI Documentation', description: 'Comprehensive guide for Search AI platform including search optimization, analytics, and advanced search features.', category: 'Documentation' },
  { path: 'app/product-docs/getting-started', title: 'Getting Started Guides', description: 'Quick start guides and initial setup instructions for all Augment AI products and solutions.', category: 'Documentation' },
  { path: 'app/product-docs/user-guides', title: 'User Guides', description: 'Detailed user manuals and step-by-step instructions for using product features and capabilities.', category: 'Documentation' },
  { path: 'app/product-docs/admin-guides', title: 'Administrator Guides', description: 'Administrative documentation for system setup, user management, and configuration options.', category: 'Documentation' },
  { path: 'app/product-docs/integrations', title: 'Integration Documentation', description: 'Integration guides for connecting Augment products with third-party systems and platforms.', category: 'Documentation' },
  { path: 'app/product-docs/troubleshooting', title: 'Troubleshooting & FAQ', description: 'Common issues, troubleshooting steps, and frequently asked questions for all products.', category: 'Documentation' },
  { path: 'app/product-docs/release-notes', title: 'Release Notes', description: 'Latest product updates, new features, bug fixes, and version history for all Augment products.', category: 'Documentation' },
  { path: 'app/product-docs/videos', title: 'Video Tutorials', description: 'Watch step-by-step video tutorials covering product features and common use cases.', category: 'Documentation' },

  // Forums page 404s
  { path: 'app/forums/general-ai', title: 'General AI Discussions', description: 'Open discussions about artificial intelligence trends, news, and general AI topics. Share insights and learn from the community.', category: 'Community' },
  { path: 'app/forums/technical-help', title: 'Technical Help & Support', description: 'Get help with technical issues, implementation questions, and troubleshooting from experienced developers and users.', category: 'Community' },
  { path: 'app/forums/product-feedback', title: 'Product Feedback & Ideas', description: 'Share feedback on Augment products, suggest new features, and discuss product roadmaps with the community.', category: 'Community' },
  { path: 'app/forums/industry-specific', title: 'Industry-Specific Discussions', description: 'Focused discussions on AI applications in healthcare, finance, manufacturing, retail, and other industries.', category: 'Community' },
  { path: 'app/forums/research', title: 'Research & Collaboration', description: 'Connect with researchers, discuss latest papers, and find collaborators for AI research projects.', category: 'Community' },
  { path: 'app/forums/career', title: 'Career & Networking', description: 'Career advice, job opportunities, networking, and professional development in the AI field.', category: 'Community' },
  { path: 'app/forums/topic/ai-ethics-healthcare', title: 'AI Ethics in Healthcare Applications', description: 'Discussion about ethical considerations when implementing AI in healthcare settings, including bias, privacy, and decision transparency.', category: 'Community' },
  { path: 'app/forums/topic/llm-fine-tuning', title: 'Best Practices for LLM Fine-tuning', description: 'Community sharing experiences and best practices for fine-tuning large language models for specific use cases.', category: 'Community' },
  { path: 'app/forums/topic/vector-db-optimization', title: 'Vector Database Performance Optimization', description: 'Technical discussion about optimizing vector database performance for large-scale AI applications.', category: 'Community' },
  { path: 'app/forums/topic/ai-regulations', title: 'Upcoming AI Regulations and Compliance', description: 'Discussion about emerging AI regulations worldwide and how they impact AI development and deployment.', category: 'Community' },
  { path: 'app/forums/topic/multimodal-ai', title: 'Multimodal AI Implementation Challenges', description: 'Sharing experiences and solutions for implementing multimodal AI systems that process text, images, and audio.', category: 'Community' },
  { path: 'app/forums/topic/ai-job-market-2025', title: 'AI Job Market Trends 2025', description: 'Discussion about current trends in the AI job market, in-demand skills, and career opportunities.', category: 'Community' },
  { path: 'app/forums/experts', title: 'Expert Community', description: 'Connect with AI experts, researchers, and practitioners from leading organizations worldwide.', category: 'Community' },
  { path: 'app/forums/knowledge-base', title: 'Knowledge Sharing', description: 'Share your expertise, learn from others, and contribute to the collective AI knowledge base.', category: 'Community' },
  { path: 'app/forums/networking', title: 'Networking Opportunities', description: 'Build professional relationships, find collaborators, and discover career opportunities.', category: 'Community' },
  { path: 'app/forums/guidelines', title: 'Community Guidelines', description: 'Guidelines and rules for participating in our community forums and discussions.', category: 'Community' },

  // Events page 404s
  { path: 'app/events/ai-world-2025', title: 'Augment AI World 2025 Conference', description: 'Join 10,000+ AI professionals at the premier AI conference. Three days of keynotes, workshops, and networking in Las Vegas.', category: 'Events' },
  { path: 'app/events/healthcare-ai-summit', title: 'Healthcare AI Summit', description: 'Explore the latest in healthcare AI applications, regulatory compliance, and clinical implementation strategies.', category: 'Events' },
  { path: 'app/events/developer-workshops', title: 'AI Developer Workshop Series', description: 'Hands-on technical workshops for developers building AI applications. Weekly sessions covering different topics.', category: 'Events' },
  { path: 'app/events/finance-ai-webinar', title: 'Finance AI Transformation Webinar', description: 'Learn how leading financial institutions are implementing AI for fraud detection, risk management, and customer service.', category: 'Events' },
  { path: 'app/events/research-symposium', title: 'AI Research Symposium', description: 'Academic symposium featuring latest research in machine learning, neural networks, and AI applications.', category: 'Events' },
  { path: 'app/events/startup-pitch', title: 'AI Startup Pitch Competition', description: 'Pitch your AI startup to investors and industry experts. $100K in prizes and funding opportunities.', category: 'Events' },
  { path: 'app/events/conferences', title: 'Conferences & Summits', description: 'Large-scale conferences bringing together AI leaders, researchers, and practitioners from around the world.', category: 'Events' },
  { path: 'app/events/workshops', title: 'Workshops & Training', description: 'Hands-on workshops and training sessions for practical AI skills and implementation.', category: 'Events' },
  { path: 'app/events/meetups', title: 'Local Meetups', description: 'Local AI meetups and networking events in cities worldwide. Connect with your local AI community.', category: 'Events' },
  { path: 'app/events/hackathons', title: 'Hackathons & Competitions', description: 'AI hackathons, coding competitions, and innovation challenges with prizes and recognition.', category: 'Events' },
  { path: 'app/events/networking', title: 'Networking Events', description: 'Professional networking events, career fairs, and industry mixer events for AI professionals.', category: 'Events' },
  { path: 'app/events/speakers', title: 'Meet Speakers', description: 'Learn from leading AI researchers, practitioners, and industry experts at our events.', category: 'Events' },
  { path: 'app/events/careers', title: 'Find Opportunities', description: 'Discover job opportunities, meet recruiters, and advance your AI career at our events.', category: 'Events' },
  { path: 'app/events/host', title: 'Host an Event', description: 'Partner with us to host AI events, workshops, or conferences. Reach our global community of AI professionals.', category: 'Events' },
  { path: 'app/events/sponsorship', title: 'Sponsorship Opportunities', description: 'Sponsorship opportunities for companies looking to connect with the AI community.', category: 'Events' },

  // Support page 404s
  { path: 'app/support/live-chat', title: 'Live Chat Support', description: 'Connect instantly with support agents through our live chat system for quick answers and real-time assistance.', category: 'Support' },
  { path: 'app/support/phone', title: 'Phone Support', description: 'Speak directly with our support specialists for complex issues and personalized assistance.', category: 'Support' },
  { path: 'app/support/enterprise', title: 'Enterprise Support', description: 'Dedicated support for enterprise customers with priority handling, dedicated account managers, and SLA guarantees.', category: 'Support' },
  { path: 'app/support/videos', title: 'Video Tutorials', description: 'Step-by-step video guides for product features, integrations, and troubleshooting.', category: 'Support' },
  { path: 'app/support/status', title: 'System Status', description: 'Real-time status updates and maintenance schedules for all Augment AI services.', category: 'Support' },
  { path: 'app/support/releases', title: 'Release Notes', description: 'Latest product updates, new features, and important announcements.', category: 'Support' },
  { path: 'app/support/best-practices', title: 'Best Practices', description: 'Implementation guides and best practices from successful customer deployments.', category: 'Support' },
  { path: 'app/support/standard', title: 'Standard Support', description: 'Email support with 24-hour response time for all customers. Access to knowledge base and community forums.', category: 'Support' },
  { path: 'app/support/premium', title: 'Premium Support', description: 'Priority support with 4-hour response time, live chat, and phone support during business hours.', category: 'Support' },
  { path: 'app/support/developer', title: 'Developer Support', description: 'Technical support for developers with code reviews, architecture guidance, and implementation assistance.', category: 'Support' },

  // Knowledge Base page 404s
  { path: 'app/knowledge/getting-started', title: 'Getting Started with Augment AI Platform', description: 'Complete guide to setting up your account, configuring your first AI agent, and understanding the platform basics.', category: 'Support' },
  { path: 'app/knowledge/api-authentication', title: 'API Authentication and Security', description: 'Learn how to securely authenticate with Augment APIs, manage API keys, and implement security best practices.', category: 'Support' },
  { path: 'app/knowledge/troubleshooting', title: 'Troubleshooting Common Issues', description: 'Solutions to the most frequently encountered issues and error messages in Augment AI products.', category: 'Support' },
  { path: 'app/knowledge/integrations', title: 'Third-Party Integration Guide', description: 'Step-by-step instructions for integrating Augment AI with popular platforms and enterprise systems.', category: 'Support' },
  { path: 'app/knowledge/billing', title: 'Billing and Account Management', description: 'Manage your subscription, understand billing cycles, and configure account settings and permissions.', category: 'Support' },
  { path: 'app/knowledge/performance', title: 'Performance Optimization Tips', description: 'Best practices for optimizing AI model performance, reducing latency, and scaling your implementations.', category: 'Support' },
  { path: 'app/knowledge/category/getting-started', title: 'Getting Started', description: 'Essential guides for new users including account setup, first steps, and basic concepts.', category: 'Support' },
  { path: 'app/knowledge/category/product-guides', title: 'Product Guides', description: 'Detailed documentation and user guides for all Augment AI products and features.', category: 'Support' },
  { path: 'app/knowledge/category/api-development', title: 'API & Development', description: 'Technical documentation, API references, and developer resources for integration.', category: 'Support' },
  { path: 'app/knowledge/category/troubleshooting', title: 'Troubleshooting', description: 'Common issues, error messages, and step-by-step solutions to resolve problems.', category: 'Support' },
  { path: 'app/knowledge/category/integrations', title: 'Integrations', description: 'Integration guides for connecting Augment AI with third-party platforms and systems.', category: 'Support' },
  { path: 'app/knowledge/category/billing-account', title: 'Billing & Account', description: 'Account management, billing information, subscription details, and payment methods.', category: 'Support' },
  { path: 'app/knowledge/videos', title: 'Video Tutorials', description: 'Watch step-by-step video tutorials covering product features and common workflows.', category: 'Support' },
  { path: 'app/knowledge/contribute', title: 'Contribute Article', description: 'Help other users by sharing your expertise and contributing articles to our knowledge base.', category: 'Support' },
  { path: 'app/knowledge/feedback', title: 'Provide Feedback', description: 'Share your feedback on our knowledge base articles and help us improve our documentation.', category: 'Support' }
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
console.log(`Creating ${pagesToCreate.length} resource and support pages...`);

pagesToCreate.forEach(createPageFile);

console.log('All resource and support pages created successfully!');
