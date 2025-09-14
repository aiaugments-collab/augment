import { Metadata } from 'next';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection,
  Testimonials
} from '../../../components/sections';
import { Rocket } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Augment Education | Students and Educators',
  description: 'Educational resources, training programs, and learning opportunities for students and educators in AI and automation.',
  keywords: 'education, students, educators, AI training, automation learning, academic programs, certifications',
};

export default function EducationPage() {
  // Hero Section Data
  const heroButtons = [
    {
      text: 'Browse Courses',
      href: '/education/courses/',
      variant: 'primary' as const
    },
    {
      text: 'Academic Programs',
      href: '/education/academic-programs/',
      variant: 'secondary' as const
    }
  ];

  // Learning Paths Data
  const learningPaths = [
    {
      id: 'ai-fundamentals',
      title: 'AI Fundamentals',
      description: 'Learn the basics of artificial intelligence, machine learning, and automation technologies.',
      ctaText: 'Start learning',
      ctaLink: '/education/courses/ai-fundamentals/',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'automation-engineering',
      title: 'Automation Engineering',
      description: 'Master process automation, workflow design, and intelligent automation implementation.',
      ctaText: 'Explore path',
      ctaLink: '/education/courses/automation-engineering/',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'data-science',
      title: 'Data Science & Analytics',
      description: 'Develop skills in data analysis, statistical modeling, and business intelligence.',
      ctaText: 'Begin journey',
      ctaLink: '/education/courses/data-science/',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'developer-tools',
      title: 'Developer Tools & APIs',
      description: 'Learn to build applications using Augment\'s developer tools and APIs.',
      ctaText: 'Start coding',
      ctaLink: '/education/courses/developer-tools/',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  // Educational Programs Data
  const educationalPrograms = [
    {
      id: 'student-programs',
      title: 'Student Programs',
      description: 'Scholarships, internships, and hands-on learning opportunities for students pursuing AI and automation studies.',
      ctaText: 'Apply now',
      ctaLink: '/education/student-programs/'
    },
    {
      id: 'educator-resources',
      title: 'Educator Resources',
      description: 'Curriculum materials, teaching tools, and professional development for educators teaching AI and automation.',
      ctaText: 'Access resources',
      ctaLink: '/education/educator-resources/'
    },
    {
      id: 'certification-programs',
      title: 'Certification Programs',
      description: 'Industry-recognized certifications in AI, automation, and related technologies to advance your career.',
      ctaText: 'Get certified',
      ctaLink: '/education/certifications/'
    },
    {
      id: 'research-partnerships',
      title: 'Research Partnerships',
      description: 'Collaborative research opportunities with universities and academic institutions worldwide.',
      ctaText: 'Partner with us',
      ctaLink: '/education/research-partnerships/'
    },
    {
      id: 'campus-programs',
      title: 'Campus Programs',
      description: 'On-campus workshops, seminars, and technology demonstrations for educational institutions.',
      ctaText: 'Schedule visit',
      ctaLink: '/education/campus-programs/'
    },
    {
      id: 'online-learning',
      title: 'Online Learning Platform',
      description: 'Comprehensive online courses, tutorials, and interactive labs accessible from anywhere.',
      ctaText: 'Start online',
      ctaLink: '/education/online-learning/'
    }
  ];

  // Learning Resources Data
  const learningResources = [
    {
      id: 'free-courses',
      title: 'Free Courses',
      description: 'Access hundreds of free courses covering AI, automation, and technology fundamentals.',
      buttonText: 'Browse courses',
      href: '/education/free-courses/',
      icon: ''
    },
    {
      id: 'hands-on-labs',
      title: 'Hands-on Labs',
      description: 'Interactive labs and practical exercises to apply your knowledge in real-world scenarios.',
      buttonText: 'Try labs',
      href: '/education/labs/',
      icon: ''
    },
    {
      id: 'certification-prep',
      title: 'Certification Prep',
      description: 'Preparation materials and practice exams for industry certifications.',
      buttonText: 'Prepare now',
      href: '/education/certification-prep/',
      icon: ''
    },
    {
      id: 'community-forums',
      title: 'Community Forums',
      description: 'Connect with peers, ask questions, and share knowledge in our learning community.',
      buttonText: 'Join community',
      href: '/education/community/',
      icon: ''
    }
  ];

  // Success Stories Data
  const successStories = [
    {
      id: 'student-success',
      title: 'From Student to AI Engineer',
      description: 'Sarah completed our AI fundamentals program and landed her dream job as an AI engineer at a Fortune 500 company.',
      ctaText: 'Read story',
      ctaLink: '/education/success-stories/sarah-ai-engineer/',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c0763c2e?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'educator-transformation',
      title: 'Transforming Computer Science Education',
      description: 'Professor Johnson integrated our curriculum into his university program, increasing student engagement by 40%.',
      ctaText: 'Learn more',
      ctaLink: '/education/success-stories/professor-johnson/',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'career-change',
      title: 'Career Transition Success',
      description: 'Mark transitioned from finance to automation engineering through our professional development program.',
      ctaText: 'See journey',
      ctaLink: '/education/success-stories/mark-career-change/',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  // Student Testimonials
  const testimonials = [
    {
      id: 'testimonial-1',
      quote: 'The AI fundamentals course gave me the foundation I needed to pursue a career in machine learning. The hands-on projects were incredibly valuable.',
      author: 'Emily Chen',
      title: 'Computer Science Student',
      company: 'Stanford University',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616c0763c2e?w=100&h=100&fit=crop&crop=faces'
    },
    {
      id: 'testimonial-2',
      quote: 'As an educator, the curriculum resources and teaching materials have transformed how I teach automation concepts to my students.',
      author: 'Dr. Michael Rodriguez',
      title: 'Professor of Engineering',
      company: 'MIT',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces'
    }
  ];

  // CTA Actions
  const ctaActions = [
    {
      title: 'Get Started Today',
      description: 'Begin your learning journey with free courses and hands-on labs.',
      href: '/education/get-started/',
      buttonText: 'Start learning',
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: 'Educator Partnership',
      description: 'Partner with us to bring cutting-edge AI education to your institution.',
      href: '/education/partnerships/',
      buttonText: 'Partner with us',
      icon: ''
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        {/* SEO and Accessibility */}
        <h1 className="sr-only">Augment Education | Students and Educators</h1>

        {/* Hero Section */}
        <SectionHero
          title="Education"
          subtitle="Empowering the next generation of AI innovators"
          description="Comprehensive educational resources, training programs, and learning opportunities for students and educators in artificial intelligence and automation technologies."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="Students learning AI and automation"
        />

        {/* Learning Paths */}
        <FeaturedCards
          title="Learning Paths"
          description="Structured learning journeys to master AI and automation technologies"
          cards={learningPaths}
          columns={2}
          backgroundColor="bg-white"
        />

        {/* Educational Programs */}
        <InfoColumns
          title="Educational Programs"
          description="Comprehensive programs designed for students, educators, and professionals"
          columns={educationalPrograms}
          columnsCount={3}
          backgroundColor="bg-gray-50"
        />

        {/* Learning Impact Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Learning Impact
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Empowering learners worldwide with cutting-edge AI and automation education
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  100K+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Students Enrolled
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  1,200+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Educational Institutions
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  500+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Courses Available
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  95%
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Course Completion Rate
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Resources */}
        <CTASection
          title="Learning Resources"
          description="Everything you need to succeed in your AI and automation learning journey"
          actions={learningResources}
          columns={2}
          backgroundColor="bg-white"
        />

        {/* Success Stories */}
        <FeaturedCards
          title="Success Stories"
          description="Real stories from students and educators who transformed their careers"
          cards={successStories}
          columns={3}
          backgroundColor="bg-gray-50"
        />

        {/* Student Testimonials */}
        <Testimonials
          title="What our learners say"
          testimonials={testimonials}
          columns={2}
          backgroundColor="bg-white"
        />

        {/* Special Programs Section */}
        <section className="py-16 bg-[#C74634] text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl lg:text-3xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Special Programs
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-white pl-6">
                    <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Student Scholarships
                    </h3>
                    <p className="text-red-100 text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Merit-based scholarships for outstanding students pursuing AI and automation studies.
                    </p>
                  </div>
                  <div className="border-l-4 border-white pl-6">
                    <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Educator Grants
                    </h3>
                    <p className="text-red-100 text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Funding opportunities for educators to integrate AI curriculum into their programs.
                    </p>
                  </div>
                  <div className="border-l-4 border-white pl-6">
                    <h3 className="text-lg font-semibold text-white mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Research Collaborations
                    </h3>
                    <p className="text-red-100 text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Joint research projects with leading universities and research institutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-red-800 bg-opacity-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-6" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Upcoming Events
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-white pl-4">
                    <div className="text-sm text-red-200" style={{ fontFamily: 'var(--oraclesans)' }}>
                      March 20, 2025
                    </div>
                    <div className="text-white font-medium" style={{ fontFamily: 'var(--oraclesans)' }}>
                      AI in Education Summit
                    </div>
                  </div>
                  <div className="border-l-4 border-white pl-4">
                    <div className="text-sm text-red-200" style={{ fontFamily: 'var(--oraclesans)' }}>
                      April 15, 2025
                    </div>
                    <div className="text-white font-medium" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Student Innovation Challenge
                    </div>
                  </div>
                  <div className="border-l-4 border-white pl-4">
                    <div className="text-sm text-red-200" style={{ fontFamily: 'var(--oraclesans)' }}>
                      May 10, 2025
                    </div>
                    <div className="text-white font-medium" style={{ fontFamily: 'var(--oraclesans)' }}>
                      Educator Workshop Series
                    </div>
                  </div>
                </div>
                <a
                  href="/education/events/"
                  className="inline-block mt-6 text-white hover:text-red-200 font-medium transition-colors duration-200"
                  style={{ fontFamily: 'var(--oraclesans)' }}
                >
                  View all events →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection
          title="Ready to start your learning journey?"
          actions={ctaActions}
          columns={2}
          backgroundColor="bg-gray-50"
        />
      </div>
    </main>
  );
}
