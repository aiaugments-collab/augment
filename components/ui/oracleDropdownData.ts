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
      { label: "Applications Overview", href: "/product/" },
      ...getProductsByCategory('cloud-applications').map(product => ({
        label: product.name,
        href: product.href
      })),
      { label: "Augment Marketplace", href: "/marketplace/" }
    ]
  }
];

// Industries dropdown data
export const oracleIndustriesDropdownData: DropdownSection[] = [
  {
    title: "Industry Solutions and Resources",
    hasDivider: true,
    items: [
      { label: "Augment Industry Lab", href: "/industries/lab/" },
      { label: "Customer success", href: "/industries/customer-success/" },
      { label: "Join the community", href: "/industries/community/" },
      { label: "Product documentation", href: "/industries/documentation/" }
    ]
  },
  {
    title: "Industries",
    hasDivider: false,
    items: [
      { label: "All industries", href: "/industries/" },
      { label: "Financial Services", href: "/industries/financial-services/" },
      { label: "Healthcare", href: "/industries/healthcare/" },
      { label: "High Technology", href: "/industries/high-tech/" },
      { label: "Education", href: "/industries/education/" },
      { label: "Professional Services", href: "/industries/professional/" },
      { label: "Retail", href: "/industries/retail/" },
      { label: "Manufacturing", href: "/industries/manufacturing/" },
      { label: "Government", href: "/industries/government/" }
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