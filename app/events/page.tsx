'use client';
import { Metadata } from 'next';
import { useState } from 'react';
import { 
  SectionHero, 
  FeaturedCards, 
  InfoColumns, 
  CTASection
} from '../../components/sections';

export default function EventsPage() {
  const [filterType, setFilterType] = useState('all');
  const [registerForm, setRegisterForm] = useState({
    name: '',
    email: '',
    company: '',
    event: ''
  });
  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRegistered(true);
    setTimeout(() => {
      setIsRegistered(false);
      setRegisterForm({
        name: '',
        email: '',
        company: '',
        event: ''
      });
    }, 3000);
  };

  const heroButtons = [
    {
      text: 'Browse Events',
      href: '#events',
      variant: 'primary' as const
    },
    {
      text: 'Register Now',
      href: '#register',
      variant: 'secondary' as const
    }
  ];

  const upcomingEvents = [
    {
      id: 'ai-world-2025',
      title: 'Augment AI World 2025 Conference',
      description: 'Join 10,000+ AI professionals at the premier AI conference. Three days of keynotes, workshops, and networking in Las Vegas.',
      ctaText: 'Register now',
      ctaLink: '/events/ai-world-2025/',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'healthcare-ai-summit',
      title: 'Healthcare AI Summit',
      description: 'Explore the latest in healthcare AI applications, regulatory compliance, and clinical implementation strategies.',
      ctaText: 'Join summit',
      ctaLink: '/events/healthcare-ai-summit/',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'developer-workshop',
      title: 'AI Developer Workshop Series',
      description: 'Hands-on technical workshops for developers building AI applications. Weekly sessions covering different topics.',
      ctaText: 'Join workshops',
      ctaLink: '/events/developer-workshops/',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'finance-ai-webinar',
      title: 'Finance AI Transformation Webinar',
      description: 'Learn how leading financial institutions are implementing AI for fraud detection, risk management, and customer service.',
      ctaText: 'Register free',
      ctaLink: '/events/finance-ai-webinar/',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'research-symposium',
      title: 'AI Research Symposium',
      description: 'Academic symposium featuring latest research in machine learning, neural networks, and AI applications.',
      ctaText: 'Submit paper',
      ctaLink: '/events/research-symposium/',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop&crop=faces'
    },
    {
      id: 'startup-pitch',
      title: 'AI Startup Pitch Competition',
      description: 'Pitch your AI startup to investors and industry experts. $100K in prizes and funding opportunities.',
      ctaText: 'Apply now',
      ctaLink: '/events/startup-pitch/',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop&crop=faces'
    }
  ];

  const eventTypes = [
    {
      id: 'conferences',
      title: 'Conferences & Summits',
      description: 'Large-scale conferences bringing together AI leaders, researchers, and practitioners from around the world.',
      ctaText: 'View conferences',
      ctaLink: '/events/conferences/'
    },
    {
      id: 'webinars',
      title: 'Webinars & Online Events',
      description: 'Virtual events, webinars, and online workshops accessible from anywhere in the world.',
      ctaText: 'Join webinars',
      ctaLink: '/events/webinars/'
    },
    {
      id: 'workshops',
      title: 'Workshops & Training',
      description: 'Hands-on workshops and training sessions for practical AI skills and implementation.',
      ctaText: 'Find workshops',
      ctaLink: '/events/workshops/'
    },
    {
      id: 'meetups',
      title: 'Local Meetups',
      description: 'Local AI meetups and networking events in cities worldwide. Connect with your local AI community.',
      ctaText: 'Find meetups',
      ctaLink: '/events/meetups/'
    },
    {
      id: 'hackathons',
      title: 'Hackathons & Competitions',
      description: 'AI hackathons, coding competitions, and innovation challenges with prizes and recognition.',
      ctaText: 'Join competitions',
      ctaLink: '/events/hackathons/'
    },
    {
      id: 'networking',
      title: 'Networking Events',
      description: 'Professional networking events, career fairs, and industry mixer events for AI professionals.',
      ctaText: 'Network now',
      ctaLink: '/events/networking/'
    }
  ];

  const eventBenefits = [
    {
      title: 'Learn from Experts',
      description: 'Gain insights from leading AI researchers, practitioners, and industry experts.',
      href: '/events/speakers/',
      buttonText: 'Meet speakers',
      icon: '🎓'
    },
    {
      title: 'Network with Peers',
      description: 'Connect with AI professionals, potential collaborators, and industry leaders.',
      href: '/events/networking/',
      buttonText: 'Start networking',
      icon: '🤝'
    },
    {
      title: 'Hands-on Learning',
      description: 'Participate in workshops, demos, and hands-on sessions to build practical skills.',
      href: '/events/workshops/',
      buttonText: 'Join workshops',
      icon: '💻'
    },
    {
      title: 'Career Opportunities',
      description: 'Discover job opportunities, meet recruiters, and advance your AI career.',
      href: '/events/careers/',
      buttonText: 'Find opportunities',
      icon: '💼'
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative">
        <h1 className="sr-only">Events | Augment AI Community</h1>

        <SectionHero
          title="AI Events & Conferences"
          subtitle="Learn, network, and grow with the AI community"
          description="Join world-class AI events, conferences, workshops, and meetups. Connect with experts, learn cutting-edge techniques, and advance your career in artificial intelligence with our comprehensive event calendar."
          ctaButtons={heroButtons}
          mediaType="image"
          mediaUrl="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop&crop=faces"
          mediaAlt="AI professionals attending conference with presentations and networking"
        />

        <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto py-4">
              <a href="#events" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Upcoming Events
              </a>
              <a href="#types" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Event Types
              </a>
              <a href="#benefits" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Why Attend
              </a>
              <a href="#register" className="text-sm font-medium text-gray-700 hover:text-[#C74634] whitespace-nowrap py-2 border-b-2 border-transparent hover:border-[#C74634] transition-colors duration-200">
                Register
              </a>
            </div>
          </div>
        </nav>

        {/* Event Filter */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap gap-4 justify-center">
              {['all', 'conferences', 'webinars', 'workshops', 'meetups', 'hackathons'].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    filterType === type
                      ? 'bg-[#C74634] text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                  style={{ fontFamily: 'var(--oraclesans)' }}
                >
                  {type === 'all' ? 'All Events' : type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="events">
          <FeaturedCards
            title="Upcoming AI events and conferences"
            description="Join leading AI events to learn, network, and advance your career"
            cards={upcomingEvents}
            columns={3}
            backgroundColor="bg-white"
          />
        </section>

        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Global AI Events Network
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Connecting the AI community through world-class events and experiences
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  500+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Events Per Year
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  100K+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Annual Attendees
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  80+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Countries
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-[#C74634] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  1000+
                </div>
                <div className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Expert Speakers
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="types">
          <InfoColumns
            title="Find the right events for you"
            description="Explore different types of AI events designed for various interests and experience levels"
            columns={eventTypes}
            columnsCount={3}
            backgroundColor="bg-gray-50"
          />
        </section>

        <section id="benefits">
          <CTASection
            title="Why attend AI events?"
            description="Discover the benefits of participating in our AI events and community"
            actions={eventBenefits}
            columns={2}
            backgroundColor="bg-white"
          />
        </section>

        <section id="register" className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Register for Events
              </h2>
              <p className="text-base text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
                Register for upcoming AI events and never miss important announcements and opportunities.
              </p>
            </div>
            
            {isRegistered ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <div className="text-green-600 text-4xl mb-4">✓</div>
                <h3 className="text-xl font-semibold text-green-800 mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                  Registration Successful!
                </h3>
                <p className="text-green-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  Thank you for registering! You'll receive confirmation details and event updates via email.
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-8">
                <form onSubmit={handleRegister} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={registerForm.name}
                        onChange={(e) => setRegisterForm({...registerForm, name: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={registerForm.email}
                        onChange={(e) => setRegisterForm({...registerForm, email: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={registerForm.company}
                        onChange={(e) => setRegisterForm({...registerForm, company: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                        placeholder="Enter your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="event" className="block text-sm font-medium text-gray-700 mb-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Event of Interest *
                      </label>
                      <select
                        id="event"
                        required
                        value={registerForm.event}
                        onChange={(e) => setRegisterForm({...registerForm, event: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C74634] focus:border-transparent"
                      >
                        <option value="">Select an event</option>
                        <option value="ai-world-2025">Augment AI World 2025</option>
                        <option value="healthcare-summit">Healthcare AI Summit</option>
                        <option value="developer-workshops">Developer Workshop Series</option>
                        <option value="finance-webinar">Finance AI Webinar</option>
                        <option value="research-symposium">AI Research Symposium</option>
                        <option value="startup-pitch">Startup Pitch Competition</option>
                        <option value="all-events">All upcoming events</option>
                      </select>
                    </div>
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      className="inline-flex items-center px-8 py-3 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-200"
                      style={{ fontFamily: 'var(--oraclesans)' }}
                    >
                      Register for Events
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </section>

        <section className="py-16 bg-[#C74634] text-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Host an AI event with us
            </h2>
            <p className="text-base text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Partner with us to host AI events, workshops, or conferences. Reach our global community of AI professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/events/host/"
                className="inline-flex items-center px-6 py-3 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Host an Event
              </a>
              <a
                href="/events/sponsorship/"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Sponsorship Opportunities
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
