import { Metadata } from 'next';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection,
  ContentTabs,
  Testimonials
} from '../../../components/sections';
import { FileText, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Augment Careers | Job Search | Augment',
  description: 'Imagine being part of an innovative global environment where you can enhance your expertise, develop your knowledge, and take your career as far as you want.',
  keywords: 'Careers, jobs, Working at Augment, Diversity and Inclusion, Internships, Job Search, Augment Careers, College recruiting',
};

export default function CareersPage() {
  // Content Navigation Tabs
  const contentTabs = [
    {
      id: 'overview',
      title: 'Overview',
      href: '/careers/',
      isActive: true
    },
    {
      id: 'life-at-augment',
      title: 'Life at Augment',
      href: '/careers/culture/',
      hasDropdown: true,
      dropdownItems: [
        { title: 'Who We Are', href: '/careers/culture/who-we-are/' },
        { title: 'Benefits', href: '/careers/culture/benefits/' },
        { title: 'Career Development', href: '/careers/culture/training/' },
        { title: 'Social Impact', href: '/careers/culture/social-impact/' }
      ]
    },
    {
      id: 'work-we-do',
      title: 'Work We Do',
      href: '/careers/work-we-do/'
    },
    {
      id: 'career-opportunities',
      title: 'Career Opportunities',
      href: '/careers/opportunities/',
      hasDropdown: true,
      dropdownItems: [
        { title: 'Sales', href: '/careers/opportunities/sales/' },
        { title: 'Engineering and Development', href: '/careers/opportunities/engineering-development/' },
        { title: 'Consulting', href: '/careers/opportunities/consulting/' },
        { title: 'Corporate Functions', href: '/careers/opportunities/corporate-functions/' },
        { title: 'Security Clearance Jobs', href: '/careers/opportunities/security-clearance-jobs/' },
        { title: 'Support', href: '/careers/opportunities/support/' },
        { title: 'Getting Hired', href: '/careers/opportunities/getting-hired/' }
      ]
    },
    {
      id: 'students-graduates',
      title: 'Students and Graduates',
      href: '/careers/students-grads/',
      hasDropdown: true,
      dropdownItems: [
        { title: 'Overview', href: '/careers/students-grads/' },
        { title: 'Sales', href: '/careers/students-grads/sales-consulting/' },
        { title: 'Development and Engineering', href: '/careers/students-grads/development-engineering/' },
        { title: 'Implementation Consulting', href: '/careers/students-grads/implementation-consulting/' },
        { title: 'Internships', href: '/careers/students-grads/internships/' },
        { title: 'Campus Recruiting by Region', href: '/careers/campus-recruiting/' }
      ]
    }
  ];

  // Hero Section Data
  const heroButtons = [
    {
      text: 'Search Jobs',
      href: '/careers',
      variant: 'primary' as const,
      target: '_blank' as const
    }
  ];

  // Growth Opportunities Data
  const growthOpportunities = [
    {
      id: 'jumpstart',
      title: 'Jumpstart your future',
      description: 'Student or recent graduate—we have programs to help you build your skills and launch your career ready to succeed.',
      ctaText: 'Learn more',
      ctaLink: '/careers/students-grads/',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'fuel-career',
      title: 'Fuel your career',
      description: 'Explore self-directed training, mentoring, and on-the-job learning. Have a goal? We\'ll help you reach it. Need direction? Let\'s make a plan.',
      ctaText: 'Learn more',
      ctaLink: '/careers/culture/training/',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'live-well',
      title: 'Live well, do good',
      description: 'From flexible benefits to work-life balance, our people are free to find their own way, bring their best selves to work, and impact the world with their ideas.',
      ctaText: 'Learn more',
      ctaLink: '/careers/culture/benefits/',
      image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  // Featured Opportunities Data
  const featuredOpportunities = [
    {
      id: 'ai-platform',
      title: 'Augment AI Platform',
      description: 'Innovate as part our intrepid team of engineers and help us build a new class of AI automation platform.',
      ctaText: 'Apply now',
      ctaLink: '/careers/opportunities/ai-platform/',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'automation-suite',
      title: 'Augment Automation Suite',
      description: 'Transform your career and the way the world does business by helping us deliver the #1 intelligent automation solution.',
      ctaText: 'Apply now',
      ctaLink: '/careers/opportunities/automation-suite/',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'data-scientists',
      title: 'Data Science Jobs',
      description: 'Support the advanced AI models that are making the automation revolution possible.',
      ctaText: 'Apply now',
      ctaLink: '/careers/opportunities/data-science-jobs/',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'security-clearance',
      title: 'Security Clearance Jobs',
      description: 'Lead the way to a more secure, scalable platform for our customers and our country with people who are passionate about safeguarding the future.',
      ctaText: 'Apply now',
      ctaLink: '/careers/opportunities/security-clearance-jobs/',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  // Career Blog Stories
  const careerStories = [
    {
      id: 'ai-revolution',
      title: 'Growing with the future of technology',
      description: 'Alexandra is learning every day and taking her career to new heights overseeing the crucial AI systems driving the automation revolution.',
      ctaText: 'Read Alexandra\'s story',
      ctaLink: '/careers/stories/alexandra-ai-engineer/',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c0763c2e?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'developer-success',
      title: 'How Augment opportunity led to professional success',
      description: 'Software engineer and team lead, Marcus shares his story of being in the right place at the right time to thrive.',
      ctaText: 'Read Marcus\'s story',
      ctaLink: '/careers/stories/marcus-developer/',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'engineering-community',
      title: 'Creating connections: How Augment\'s Engineering Community inspires career growth',
      description: 'Sarah joined Augment when it was a small startup. She shares how the Engineering Community grew and inspired her own career along the way.',
      ctaText: 'Read Sarah\'s story',
      ctaLink: '/careers/stories/sarah-engineering-community/',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  // CTA Actions
  const ctaActions = [
    {
      title: 'Apply today',
      description: 'Explore open roles and find the future of your career.',
      href: '/careers',
      buttonText: 'Search jobs',
      icon: <FileText className="w-6 h-6" />,
      target: '_blank' as const
    },
    {
      title: 'Augment Talent Network',
      description: 'Get career insights and job opportunities.',
      href: 'https://careers.augment.com/talent-network',
      buttonText: 'Join our network',
      icon: <Users className="w-6 h-6" />,
      target: '_blank' as const
    }
  ];

  // Employee Testimonials
  const testimonials = [
    {
      id: 'testimonial-1',
      quote: 'Working at Augment has been transformative. The company truly invests in your growth and gives you the autonomy to make meaningful contributions to cutting-edge AI technology.',
      author: 'Jennifer Chen',
      title: 'Senior AI Engineer',
      company: 'Augment',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616c0763c2e?w=100&h=100&fit=crop&crop=faces'
    },
    {
      id: 'testimonial-2',
      quote: 'The collaborative culture here is incredible. Every day I work with brilliant minds who challenge me to think differently and push the boundaries of what\'s possible.',
      author: 'David Rodriguez',
      title: 'Product Manager',
      company: 'Augment',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        {/* SEO and Accessibility */}
        <h1 className="sr-only">Augment Careers | Job Search | Augment</h1>
        
        {/* Content Navigation Tabs */}
        <ContentTabs tabs={contentTabs} />

        {/* Hero Section */}
        <SectionHero
          title="Careers"
          subtitle="Create the future with us"
          description="Realize your potential and empower others to realize theirs as part of a company that's innovating solutions to global challenges that affect billions of lives."
          ctaButtons={heroButtons}
          backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop&crop=faces"
          mediaType="video"
          mediaUrl="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&crop=faces"
          videoThumbnail="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Transform the world for the better"
        />

        {/* Growth Opportunities Section */}
        <InfoColumns
          title="Grow as a person and a professional"
          columns={growthOpportunities}
          columnsCount={3}
          backgroundColor="bg-gray-50"
        />

        {/* Featured Opportunities Section */}
        <FeaturedCards
          title="Featured opportunities"
          cards={featuredOpportunities}
          columns={2}
          backgroundColor="bg-white"
        />

        {/* Career Stories Section */}
        <FeaturedCards
          title="Career Stories"
          description="Read more stories from our team"
          cards={careerStories}
          columns={3}
          backgroundColor="bg-gray-50"
        />

        {/* Employee Testimonials */}
        <Testimonials
          title="What our team says"
          testimonials={testimonials}
          columns={2}
          backgroundColor="bg-white"
        />

        {/* CTA Section */}
        <CTASection
          title="Ready to start your journey?"
          actions={ctaActions}
          columns={2}
          backgroundColor="bg-gray-50"
        />

        {/* Social Connect Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-8" style={{ fontFamily: 'var(--oracleserif)' }}>
              Connect with us
            </h2>
            <div className="flex justify-center space-x-8">
              <a 
                href="https://www.facebook.com/Augment/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                aria-label="Follow Augment Careers on Facebook"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com/AugmentCareers" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                aria-label="Follow Augment Careers on Twitter"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/augmentcareers/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                aria-label="Follow Augment Careers on Instagram"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.608c-.384 0-.735-.157-.989-.411-.254-.254-.411-.605-.411-.989 0-.384.157-.735.411-.989.254-.254.605-.411.989-.411.384 0 .735.157.989.411.254.254.411.605.411.989 0 .384-.157.735-.411.989-.254.254-.605.411-.989.411z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/augment/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                aria-label="Follow Augment on LinkedIn"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://www.youtube.com/AugmentCareers/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                aria-label="Watch Augment Careers on YouTube"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
