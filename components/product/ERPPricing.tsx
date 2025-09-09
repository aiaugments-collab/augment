"use client";

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  highlighted?: boolean;
  ctaText: string;
  ctaHref: string;
}

interface ERPPricingProps {
  title?: string;
  description?: string;
}

const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for small businesses getting started with ERP",
    price: "$29",
    period: "per user/month",
    features: [
      "Core ERP modules (Accounting, Sales, Purchasing)",
      "Up to 5 users",
      "Basic reporting and analytics",
      "Email support",
      "Mobile app access",
      "Data backup and security"
    ],
    ctaText: "Start Free Trial",
    ctaHref: "https://erp.augment.cfd/"
  },
  {
    id: "professional",
    name: "Professional",
    description: "Comprehensive solution for growing businesses",
    price: "$49",
    period: "per user/month",
    features: [
      "All Starter features",
      "Manufacturing and inventory management",
      "Advanced reporting and dashboards",
      "HR and payroll modules",
      "Priority support",
      "Custom fields and workflows",
      "API access",
      "Multi-company support"
    ],
    highlighted: true,
    ctaText: "Get Started",
    ctaHref: "https://erp.augment.cfd/"
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Advanced features for large organizations",
    price: "$89",
    period: "per user/month",
    features: [
      "All Professional features",
      "Advanced manufacturing (MRP, capacity planning)",
      "Project management and time tracking",
      "Asset management",
      "Advanced HR features",
      "Dedicated account manager",
      "Custom integrations",
      "On-premise deployment option",
      "24/7 phone support"
    ],
    ctaText: "Contact Sales",
    ctaHref: "/corporate/contact"
  }
];

export function ERPPricing({ 
  title = "Choose Your ERP Plan", 
  description = "Flexible pricing that scales with your business needs" 
}: ERPPricingProps) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
            {title}
          </h2>
          <div className="w-16 h-0.5 bg-[#C74634] mx-auto mb-6" />
          <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
            {description}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id} 
              className={`
                relative bg-white rounded-lg shadow-lg border-2 transition-all duration-300 hover:shadow-xl
                ${plan.highlighted 
                  ? 'border-[#C74634] scale-105' 
                  : 'border-gray-200 hover:border-[#C74634]'
                }
              `}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#C74634] text-white px-4 py-1 rounded-full text-sm font-semibold" style={{ fontFamily: 'var(--oraclesans)' }}>
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                    {plan.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-[#161513]" style={{ fontFamily: 'var(--oracleserif)' }}>
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start" style={{ fontFamily: 'var(--oraclesans)' }}>
                      <svg className="w-5 h-5 text-[#C74634] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href={plan.ctaHref}
                  className={`
                    w-full inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300
                    ${plan.highlighted
                      ? 'bg-[#C74634] text-white hover:bg-[#A63429] shadow-md hover:shadow-lg'
                      : 'border-2 border-[#C74634] text-[#C74634] hover:bg-[#C74634] hover:text-white'
                    }
                  `}
                  style={{ fontFamily: 'var(--oraclesans)' }}
                >
                  {plan.ctaText}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-gray-50 rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                What's Included in All Plans
              </h3>
              <ul className="space-y-2" style={{ fontFamily: 'var(--oraclesans)' }}>
                <li className="flex items-center text-gray-700">
                  <svg className="w-4 h-4 text-[#C74634] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  30-day free trial
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-4 h-4 text-[#C74634] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  No setup fees
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-4 h-4 text-[#C74634] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Regular updates and new features
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-4 h-4 text-[#C74634] mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  99.9% uptime guarantee
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Need Help Choosing?
              </h3>
              <p className="text-gray-700 mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                Our team can help you select the right plan based on your business needs and requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/book-demo"
                  className="inline-flex items-center justify-center px-4 py-2 border-2 border-[#C74634] text-[#C74634] font-semibold rounded-lg hover:bg-[#C74634] hover:text-white transition-colors duration-300"
                  style={{ fontFamily: 'var(--oraclesans)' }}
                >
                  Book a Demo
                </a>
                <a
                  href="/corporate/contact"
                  className="inline-flex items-center justify-center px-4 py-2 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-300"
                  style={{ fontFamily: 'var(--oraclesans)' }}
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
