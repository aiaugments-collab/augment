import { DropdownSection } from "./Dropdown";
import { PRODUCT_CATEGORIES, getProductsByCategory } from "@/lib/productRegistry";

// Generate products dropdown data from the product registry
export const productsDropdownData: DropdownSection[] = [
  // AI Agent Products
  {
    title: PRODUCT_CATEGORIES['ai-agent'].name,
    items: getProductsByCategory('ai-agent').map(product => ({
      label: product.name,
      href: product.href,
      status: product.status === 'coming-soon' ? 'Coming Soon' : product.status === 'beta' ? 'Beta' : undefined
    }))
  },
  
  // Cloud Applications
  {
    title: PRODUCT_CATEGORIES['cloud-applications'].name,
    items: getProductsByCategory('cloud-applications').map(product => ({
      label: product.name,
      href: product.href,
      status: product.status === 'coming-soon' ? 'Coming Soon' : product.status === 'beta' ? 'Beta' : undefined
    }))
  }
];

export const industriesDropdownData: DropdownSection[] = [
  {
    title: "Industry Solutions and Resources",
    items: [
      { label: "Oracle Industry Lab", href: "#industry-lab" },
      { label: "Customer success", href: "#customer-success" },
    ]
  },
  {
    title: "Industries",
    items: [
      { label: "All industries", href: "#all-industries" },
      { label: "Automotive", href: "#automotive" },
      { label: "Communications", href: "#communications" },
      { label: "Construction and Engineering", href: "#construction" },
      { label: "Consumer Packaged Goods", href: "#cpg" },
      { label: "Defense and Intelligence", href: "#defense" },
    ]
  },
  {
    title: "More Industries",
    items: [
      { label: "Education", href: "#education" },
      { label: "Financial Services", href: "#financial" },
      { label: "Government", href: "#government" },
      { label: "Healthcare", href: "#healthcare" },
      { label: "High Technology", href: "#high-tech" },
      { label: "Hospitality", href: "#hospitality" },
    ]
  },
  {
    title: "Additional Industries",
    items: [
      { label: "Industrial Manufacturing", href: "#manufacturing" },
      { label: "Life Sciences", href: "#life-sciences" },
      { label: "Media and Entertainment", href: "#media" },
      { label: "Oil and Gas", href: "#oil-gas" },
      { label: "Professional Services", href: "#professional" },
      { label: "Public Safety", href: "#public-safety" },
      { label: "Restaurants", href: "#restaurants" },
      { label: "Retail", href: "#retail" },
      { label: "Travel and Logistics", href: "#travel" },
      { label: "Utilities", href: "#utilities" },
      { label: "Wholesale Distribution", href: "#wholesale" },
    ]
  }
];

export const resourcesDropdownData: DropdownSection[] = [
  {
    title: "Learn",
    items: [
      { label: "Documentation", href: "#documentation" },
      { label: "Training and Certification", href: "#training" },
      { label: "Oracle University", href: "#university" },
      { label: "Blogs", href: "#blogs" },
    ]
  },
  {
    title: "Community",
    items: [
      { label: "Join the community", href: "#community" },
      { label: "Product documentation", href: "#product-docs" },
      { label: "Forums", href: "#forums" },
      { label: "Events", href: "#events" },
    ]
  },
  {
    title: "Support",
    items: [
      { label: "Contact Support", href: "#support" },
      { label: "Knowledge Base", href: "#knowledge" },
      { label: "Support Portal", href: "#portal" },
    ]
  }
];

export const customersDropdownData: DropdownSection[] = [
  {
    title: "Customer Stories",
    items: [
      { label: "All Customers", href: "#all-customers" },
      { label: "Case Studies", href: "#case-studies" },
      { label: "Success Stories", href: "#success-stories" },
    ]
  },
  {
    title: "Programs",
    items: [
      { label: "Customer Advisory Board", href: "#advisory" },
      { label: "Oracle PartnerNetwork", href: "#partner-network" },
      { label: "Startup Program", href: "#startup" },
    ]
  }
];

export const partnersDropdownData: DropdownSection[] = [
  {
    title: "Partner Programs",
    items: [
      { label: "Oracle PartnerNetwork", href: "#opn" },
      { label: "Find a Partner", href: "#find-partner" },
      { label: "Become a Partner", href: "#become-partner" },
    ]
  },
  {
    title: "Partner Types",
    items: [
      { label: "Technology Partners", href: "#tech-partners" },
      { label: "Consulting Partners", href: "#consulting" },
      { label: "Implementation Partners", href: "#implementation" },
    ]
  }
];

export const developersDropdownData: DropdownSection[] = [
  {
    title: "Developer Resources",
    items: [
      { label: "Developer Portal", href: "#dev-portal" },
      { label: "Documentation", href: "#dev-docs" },
      { label: "APIs and SDKs", href: "#apis" },
      { label: "Code Samples", href: "#samples" },
    ]
  },
  {
    title: "Community",
    items: [
      { label: "Developer Community", href: "#dev-community" },
      { label: "GitHub", href: "#github" },
      { label: "Forums", href: "#dev-forums" },
      { label: "Blogs", href: "#dev-blogs" },
    ]
  },
  {
    title: "Tools",
    items: [
      { label: "Oracle Cloud Free Tier", href: "#free-tier" },
      { label: "Developer Tools", href: "#dev-tools" },
      { label: "Cloud Shell", href: "#cloud-shell" },
    ]
  }
];

export const companyDropdownData: DropdownSection[] = [
  {
    title: "About Oracle",
    items: [
      { label: "Company Overview", href: "#overview" },
      { label: "Leadership", href: "#leadership" },
      { label: "News and Announcements", href: "#news" },
      { label: "Investor Relations", href: "#investors" },
    ]
  },
  {
    title: "Careers",
    items: [
      { label: "Work at Oracle", href: "#careers" },
      { label: "Job Search", href: "#jobs" },
      { label: "University Recruiting", href: "#university" },
    ]
  },
  {
    title: "Corporate",
    items: [
      { label: "Corporate Responsibility", href: "#responsibility" },
      { label: "Diversity and Inclusion", href: "#diversity" },
      { label: "Privacy", href: "#privacy" },
      { label: "Security Practices", href: "#security" },
    ]
  }
];
