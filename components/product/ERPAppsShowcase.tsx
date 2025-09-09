"use client";

interface ERPApp {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
  category: 'core' | 'hr' | 'finance';
}

interface ERPAppsShowcaseProps {
  title?: string;
  description?: string;
}

const erpApps: ERPApp[] = [
  // Core ERPNext Modules
  {
    id: "accounting",
    name: "Accounting",
    description: "Complete financial management with automated workflows and real-time reporting",
    icon: "/products/erp/icons/accounting.svg",
    features: ["General Ledger", "Accounts Payable/Receivable", "Financial Reports", "Multi-currency"],
    category: "core"
  },
  {
    id: "inventory",
    name: "Inventory Management",
    description: "Real-time stock tracking, warehouse management, and automated reorder points",
    icon: "/products/erp/icons/inventory.svg",
    features: ["Stock Tracking", "Warehouse Management", "Barcode Support", "Inventory Valuation"],
    category: "core"
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    description: "End-to-end production planning, scheduling, and quality control",
    icon: "/products/erp/icons/manufacturing.svg",
    features: ["Production Planning", "BOM Management", "Work Orders", "Quality Control"],
    category: "core"
  },
  {
    id: "sales",
    name: "Sales Management",
    description: "Complete sales pipeline from lead generation to order fulfillment",
    icon: "/products/erp/icons/sales.svg",
    features: ["Lead Management", "Quotations", "Sales Orders", "Customer Portal"],
    category: "core"
  },
  {
    id: "purchasing",
    name: "Purchasing",
    description: "Streamlined procurement process with supplier management and purchase analytics",
    icon: "/products/erp/icons/purchasing.svg",
    features: ["Purchase Orders", "Supplier Management", "RFQ Process", "Purchase Analytics"],
    category: "core"
  },
  {
    id: "projects",
    name: "Project Management",
    description: "Track projects, manage tasks, and monitor progress with integrated time tracking",
    icon: "/products/erp/icons/projects.svg",
    features: ["Project Planning", "Task Management", "Time Tracking", "Resource Allocation"],
    category: "core"
  },
  {
    id: "crm",
    name: "Customer Relationship",
    description: "Manage customer relationships with integrated sales and support tools",
    icon: "/products/erp/icons/crm.svg",
    features: ["Contact Management", "Opportunity Tracking", "Support Tickets", "Communication"],
    category: "core"
  },
  {
    id: "assets",
    name: "Asset Management",
    description: "Track and manage company assets with depreciation and maintenance scheduling",
    icon: "/products/erp/icons/assets.svg",
    features: ["Asset Tracking", "Depreciation", "Maintenance", "Asset Reports"],
    category: "core"
  },
  // HR & Payroll Apps
  {
    id: "hr-core",
    name: "Human Resources",
    description: "Complete HR management from employee onboarding to performance reviews",
    icon: "/products/erp/icons/hr.svg",
    features: ["Employee Management", "Attendance", "Leave Management", "Performance Reviews"],
    category: "hr"
  },
  {
    id: "payroll",
    name: "Payroll Management",
    description: "Automated payroll processing with tax calculations and compliance",
    icon: "/products/erp/icons/payroll.svg",
    features: ["Salary Processing", "Tax Calculations", "Payslips", "Compliance Reports"],
    category: "hr"
  },
  {
    id: "recruitment",
    name: "Recruitment",
    description: "Streamline hiring process from job posting to candidate onboarding",
    icon: "/products/erp/icons/recruitment.svg",
    features: ["Job Postings", "Candidate Tracking", "Interview Scheduling", "Offer Management"],
    category: "hr"
  },
  {
    id: "training",
    name: "Training & Development",
    description: "Manage employee training programs and track skill development",
    icon: "/products/erp/icons/training.svg",
    features: ["Training Programs", "Skill Tracking", "Certifications", "Learning Paths"],
    category: "hr"
  }
];

export function ERPAppsShowcase({ 
  title = "Complete AugmentERP", 
  description = "Everything you need to run your business in one integrated platform" 
}: ERPAppsShowcaseProps) {
  const coreApps = erpApps.filter(app => app.category === 'core');
  const hrApps = erpApps.filter(app => app.category === 'hr');

  return (
    <section className="py-16 bg-gray-50">
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

        {/* Core ERP Applications */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-[#161513] mb-8 text-center" style={{ fontFamily: 'var(--oracleserif)' }}>
            Core ERP Applications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreApps.map((app) => (
              <div key={app.id} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
                    <img
                      src={app.icon}
                      alt={`${app.name} icon`}
                      className="w-6 h-6 relative z-10"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-[#161513]" style={{ fontFamily: 'var(--oracleserif)' }}>
                    {app.name}
                  </h4>
                </div>
                <p className="text-gray-600 mb-4 text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {app.description}
                </p>
                <ul className="space-y-1">
                  {app.features.map((feature, index) => (
                    <li key={index} className="text-xs text-gray-500 flex items-center" style={{ fontFamily: 'var(--oraclesans)' }}>
                      <svg className="w-3 h-3 text-[#C74634] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* HR & Payroll Applications */}
        <div>
          <h3 className="text-2xl font-semibold text-[#161513] mb-8 text-center" style={{ fontFamily: 'var(--oracleserif)' }}>
            HR & Payroll Applications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hrApps.map((app) => (
              <div key={app.id} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-opacity-10 rounded-lg flex items-center justify-center mr-4">
                    <img
                      src={app.icon}
                      alt={`${app.name} icon`}
                      className="w-6 h-6 relative z-10"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-[#161513]" style={{ fontFamily: 'var(--oracleserif)' }}>
                    {app.name}
                  </h4>
                </div>
                <p className="text-gray-600 mb-4 text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                  {app.description}
                </p>
                <ul className="space-y-1">
                  {app.features.map((feature, index) => (
                    <li key={index} className="text-xs text-gray-500 flex items-center" style={{ fontFamily: 'var(--oraclesans)' }}>
                      <svg className="w-3 h-3 text-[#577346] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Ready to explore all applications?
            </h3>
            <p className="text-gray-600 mb-6" style={{ fontFamily: 'var(--oraclesans)' }}>
              Access your complete AugmentERP and start managing your business operations efficiently.
            </p>
            <a
              href="https://erp.augment.cfd/"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-300 shadow-md hover:shadow-lg"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              Access AugmentERP
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
