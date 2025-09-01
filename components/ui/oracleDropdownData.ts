import { DropdownSection } from "./OracleDropdown";
import { getProductsByCategory } from "@/lib/productRegistry";

// Augment Products dropdown data matching your structure
export const oracleProductsDropdownData: DropdownSection[] = [
  {
    title: "Augment AI Agent",
    hasDivider: true,
    items: [
      { label: "AI Agent Overview", href: "/product/" },
      ...getProductsByCategory('ai-agent').map(product => ({
        label: product.name,
        href: product.href
      }))
    ]
  },
  {
    title: "Augment Cloud Applications",
    hasDivider: false,
    items: [
      { label: "Applications Overview", href: "/applications/" },
      { label: "Enterprise Resource Planning (ERP)", href: "/erp/", isBold: true },
      { label: "– Financial Management", href: "/erp/financials/", isSubItem: true },
      { label: "– Procurement", href: "/erp/procurement/", isSubItem: true },
      { label: "– Project Management", href: "/erp/project-portfolio-management-cloud/", isSubItem: true },
      { label: "– Risk Management and Compliance", href: "/erp/risk-management/", isSubItem: true },
      { label: "– Enterprise Performance Management", href: "/performance-management/", isSubItem: true },
      { label: "Supply Chain & Manufacturing (SCM)", href: "/scm/", isBold: true },
      { label: "– Supply Chain Planning", href: "/scm/supply-chain-planning/", isSubItem: true },
      { label: "– Inventory Management", href: "/scm/inventory-management/", isSubItem: true },
      { label: "– Manufacturing", href: "/scm/manufacturing/", isSubItem: true },
      { label: "– Maintenance", href: "/scm/maintenance/", isSubItem: true },
      { label: "– Product Lifecycle Management", href: "/scm/product-lifecycle-management/", isSubItem: true },
      { label: "– More SCM applications", href: "/scm/", isSubItem: true },
      { label: "Human Capital Management (HCM)", href: "/human-capital-management/", isBold: true },
      { label: "– Human Resources", href: "/human-capital-management/hr/", isSubItem: true },
      { label: "– Talent Management", href: "/human-capital-management/talent-management/", isSubItem: true },
      { label: "– Workforce Management", href: "/human-capital-management/workforce-management/", isSubItem: true },
      { label: "– Payroll", href: "/human-capital-management/payroll/", isSubItem: true },
      { label: "Fusion Data Intelligence Platform", href: "/business-analytics/fusion-data-intelligence-platform/" },
      { label: "AugmentSuite", href: "/augmentsuite/" },
      { label: "Customer Experience (CX)", href: "/cx/", isBold: true },
      { label: "– Marketing", href: "/cx/marketing/", isSubItem: true },
      { label: "– Sales", href: "/cx/sales/", isSubItem: true },
      { label: "– Service", href: "/cx/service/", isSubItem: true },
      { label: "Augment Marketplace", href: "/marketplace/" }
    ]
  }
];

// Industries dropdown data
export const oracleIndustriesDropdownData: DropdownSection[] = [
  {
    title: "Augment Industry Solutions",
    hasDivider: false,
    items: [
      { label: "All Industries", href: "/industries/" },
      { label: "Automotive", href: "/industries/automotive/" },
      { label: "Communications", href: "/industries/communications/" },
      { label: "Construction and Engineering", href: "/industries/construction/" },
      { label: "Consumer Packaged Goods", href: "/industries/cpg/" },
      { label: "Defense and Intelligence", href: "/industries/defense/" },
      { label: "Education", href: "/industries/education/" },
      { label: "Financial Services", href: "/industries/financial-services/" },
      { label: "Government", href: "/industries/government/" },
      { label: "Healthcare", href: "/industries/healthcare/" },
      { label: "High Technology", href: "/industries/high-tech/" },
      { label: "Hospitality", href: "/industries/hospitality/" },
      { label: "Industrial Manufacturing", href: "/industries/manufacturing/" },
      { label: "Life Sciences", href: "/industries/life-sciences/" },
      { label: "Media and Entertainment", href: "/industries/media/" },
      { label: "Oil and Gas", href: "/industries/oil-gas/" },
      { label: "Professional Services", href: "/industries/professional/" },
      { label: "Public Safety", href: "/industries/public-safety/" },
      { label: "Restaurants", href: "/industries/restaurants/" },
      { label: "Retail", href: "/industries/retail/" },
      { label: "Travel and Logistics", href: "/industries/travel/" },
      { label: "Utilities", href: "/industries/utilities/" },
      { label: "Wholesale Distribution", href: "/industries/wholesale/" }
    ]
  }
];

// Resources dropdown data
export const oracleResourcesDropdownData: DropdownSection[] = [
  {
    title: "Augment Learn and Support",
    hasDivider: false,
    items: [
      { label: "Documentation", href: "/documentation/" },
      { label: "Training and Certification", href: "/training/" },
      { label: "Augment University", href: "/university/" },
      { label: "Blogs", href: "/blogs/" },
      { label: "Join the community", href: "/community/" },
      { label: "Product documentation", href: "/product-docs/" },
      { label: "Forums", href: "/forums/" },
      { label: "Events", href: "/events/" },
      { label: "Contact Support", href: "/support/" },
      { label: "Knowledge Base", href: "/knowledge/" },
      { label: "Support Portal", href: "/portal/" }
    ]
  }
];

// Customers dropdown data
export const oracleCustomersDropdownData: DropdownSection[] = [
  {
    title: "Augment Customer Success",
    hasDivider: false,
    items: [
      { label: "All Customers", href: "/customers/" },
      { label: "Case Studies", href: "/customers/case-studies/" },
      { label: "Success Stories", href: "/customers/success-stories/" },
      { label: "Customer Advisory Board", href: "/customers/advisory/" },
      { label: "Augment PartnerNetwork", href: "/partners/network/" },
      { label: "Startup Program", href: "/startup/" }
    ]
  }
];

// Partners dropdown data
export const oraclePartnersDropdownData: DropdownSection[] = [
  {
    title: "Augment Partner Network",
    hasDivider: false,
    items: [
      { label: "Augment PartnerNetwork", href: "/partners/" },
      { label: "Find a Partner", href: "/partners/find/" },
      { label: "Become a Partner", href: "/partners/join/" },
      { label: "Technology Partners", href: "/partners/technology/" },
      { label: "Consulting Partners", href: "/partners/consulting/" },
      { label: "Implementation Partners", href: "/partners/implementation/" }
    ]
  }
];

// Developers dropdown data
export const oracleDevelopersDropdownData: DropdownSection[] = [
  {
    title: "Augment Developer Resources",
    hasDivider: false,
    items: [
      { label: "Developer Portal", href: "/developers/" },
      { label: "Documentation", href: "/developers/docs/" },
      { label: "APIs and SDKs", href: "/developers/apis/" },
      { label: "Code Samples", href: "/developers/samples/" },
      { label: "Developer Community", href: "/developers/community/" },
      { label: "GitHub", href: "https://github.com/augment" },
      { label: "Forums", href: "/developers/forums/" },
      { label: "Blogs", href: "/developers/blogs/" },
      { label: "Augment AI Free Tier", href: "/ai-agent/free/" },
      { label: "Developer Tools", href: "/developers/tools/" },
      { label: "Cloud Shell", href: "/cloud/shell/" }
    ]
  }
];

// Company dropdown data
export const oracleCompanyDropdownData: DropdownSection[] = [
  {
    title: "About Augment",
    hasDivider: false,
    items: [
      { label: "Company Overview", href: "/company/" },
      { label: "Leadership", href: "/company/leadership/" },
      { label: "News and Announcements", href: "/news/" },
      { label: "Investor Relations", href: "/investor/" },
      { label: "Work at Augment", href: "/careers/" },
      { label: "Job Search", href: "/careers/jobs/" },
      { label: "University Recruiting", href: "/careers/university/" },
      { label: "Corporate Responsibility", href: "/corporate/responsibility/" },
      { label: "Diversity and Inclusion", href: "/corporate/diversity/" },
      { label: "Privacy", href: "/legal/privacy/" },
      { label: "Security Practices", href: "/security/practices/" }
    ]
  }
];