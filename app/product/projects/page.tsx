import { ProductHero } from "@/components/product/ProductHero";
import { ProductWhyChoose } from "@/components/product/ProductWhyChoose";
import { ProductCustomerLogos } from "@/components/product/ProductCustomerLogos";
import { ProductCTABanner } from "@/components/product/ProductCTABanner";
import { Breadcrumb } from "@/components/ui/Breadcrumb";

export default function ProjectsPage() {
  const ctaButtons = [
    {
      text: "Access Projects Module",
      href: "https://erp.augment.cfd/app/projects",
      variant: "primary" as const
    },
    {
      text: "View ERP Dashboard",
      href: "https://erp.augment.cfd/app/dashboard",
      variant: "secondary" as const
    }
  ];

  const whyChooseItems = [
    {
      number: "01",
      title: "Project Planning",
      description: "Create detailed project plans with milestones, dependencies, and resource allocation for successful project delivery."
    },
    {
      number: "02",
      title: "Task Management",
      description: "Break down projects into manageable tasks with assignment, tracking, and progress monitoring capabilities."
    },
    {
      number: "03",
      title: "Time Tracking",
      description: "Track time spent on projects and tasks with detailed timesheets and productivity analysis."
    },
    {
      number: "04",
      title: "Resource Allocation",
      description: "Optimize resource utilization with capacity planning, availability tracking, and workload management."
    },
    {
      number: "05",
      title: "Team Collaboration",
      description: "Enable seamless team collaboration with shared workspaces, communication tools, and document management."
    },
    {
      number: "06",
      title: "Project Analytics",
      description: "Monitor project performance with detailed reports on progress, budgets, and team productivity."
    }
  ];

  const customerLogos = [
    {
      name: "Atlassian",
      image: "https://logo.clearbit.com/atlassian.com",
      href: "https://erp.augment.cfd/app/projects",
      alt: "Atlassian logo"
    },
    {
      name: "Monday.com",
      image: "https://logo.clearbit.com/monday.com",
      href: "https://erp.augment.cfd/app/projects",
      alt: "Monday.com logo"
    },
    {
      name: "Asana",
      image: "https://logo.clearbit.com/asana.com",
      href: "https://erp.augment.cfd/app/projects",
      alt: "Asana logo"
    },
    {
      name: "Trello",
      image: "https://logo.clearbit.com/trello.com",
      href: "https://erp.augment.cfd/app/projects",
      alt: "Trello logo"
    },
    {
      name: "Slack",
      image: "https://logo.clearbit.com/slack.com",
      href: "https://erp.augment.cfd/app/projects",
      alt: "Slack logo"
    },
    {
      name: "Notion",
      image: "https://logo.clearbit.com/notion.so",
      href: "https://erp.augment.cfd/app/projects",
      alt: "Notion logo"
    },
    {
      name: "GitHub",
      image: "https://logo.clearbit.com/github.com",
      href: "https://erp.augment.cfd/app/projects",
      alt: "GitHub logo"
    },
    {
      name: "GitLab",
      image: "https://logo.clearbit.com/gitlab.com",
      href: "https://erp.augment.cfd/app/projects",
      alt: "GitLab logo"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* Breadcrumbs */}
        <div className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Breadcrumb className="pt-6 pb-4" />
          </div>
        </div>

        <ProductHero
          title="Project Management Software"
          description="Track projects, manage tasks, and monitor progress with integrated time tracking, resource allocation, project planning, and team collaboration tools for successful project delivery and team productivity."
          ctaButtons={ctaButtons}
          mediaType="image"
          mediaUrl="/products/projects/01.png"
          mediaAlt="Project Management Dashboard"
        />

        <ProductWhyChoose
          title="Why choose our Project Management System?"
          items={whyChooseItems}
        />

        <ProductCustomerLogos
          title="Trusted by project managers worldwide"
          description="Join thousands of teams delivering projects successfully"
          viewMoreText="View all customers"
          viewMoreHref="/customers"
          logos={customerLogos}
        />

        <ProductCTABanner
          title="Ready to streamline your project management?"
          description="Join thousands of project teams using our ERP projects module to deliver projects on time, within budget, and with maximum efficiency."
          image="/products/projects/02.png"
          buttonText="Access Projects Module"
          buttonHref="https://erp.augment.cfd/app/projects"
        />
      </main>
    </div>
  );
}
