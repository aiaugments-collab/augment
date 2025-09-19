import { Breadcrumb } from "@/components/ui/Breadcrumb"
import { CodeBlock } from "@/components/docs/CodeBlock"
import { FeatureCard } from "@/components/docs/FeatureCard"
import { DocsSidebar } from "@/components/docs/DocsSidebar"

const navigationItems = [
  { title: 'Overview', href: '/docs/ai-workflow-builder#overview' },
  { title: 'Installation', href: '/docs/ai-workflow-builder#installation' },
  { title: 'Quick Start', href: '/docs/ai-workflow-builder#quick-start' },
  { title: 'Configuration', href: '/docs/ai-workflow-builder#configuration' },
  { title: 'Natural Language Processing', href: '/docs/ai-workflow-builder#nlp' },
  { title: 'Environment Variables', href: '/docs/ai-workflow-builder#environment-variables' },
  { title: 'Basic Usage', href: '/docs/ai-workflow-builder#usage' },
  { title: 'CLI Commands', href: '/docs/ai-workflow-builder#cli-commands' },
  { title: 'Best Practices', href: '/docs/ai-workflow-builder#best-practices' },
  { title: 'Integrations', href: '/docs/ai-workflow-builder#integrations' },
  { title: 'Workflow Templates', href: '/docs/ai-workflow-builder#workflow-templates' },
  { title: 'API Integration', href: '/docs/ai-workflow-builder#api-integration' },
  { title: 'API Reference', href: '/docs/ai-workflow-builder#api-reference' },
  { title: 'Troubleshooting', href: '/docs/ai-workflow-builder#troubleshooting' }
]

export default function AIWorkflowBuilderDocsPage() {
  return (
    <>
      <DocsSidebar 
        appName="AI WorkflowBuilder"
        appLogo="/ai-workflow-builder.svg"
        navigationItems={navigationItems}
      />
      
      <main className="flex-1 min-w-0 max-w-none md:max-w-4xl md:mx-auto px-4 sm:px-6 py-4 sm:py-8 overflow-hidden">
        <div className="docs-content">
          <div className="mb-6">
            <Breadcrumb className="mb-4" />
          </div>

          <div id="overview" className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8">
            <img src="/ai-workflow-builder.svg" alt="AI WorkflowBuilder" className="w-12 h-12" />
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">AI WorkflowBuilder</h1>
              <p className="text-base sm:text-lg text-gray-600">Natural language to intelligent automation workflows</p>
            </div>
          </div>

          {/* Key Capabilities Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <FeatureCard
              title="Natural Language Processing"
              description="Convert plain English descriptions into executable automation workflows"
              icon=""
            />
            <FeatureCard
              title="Smart API Connections"
              description="Intelligently connect APIs, services, and tools to create complex automation pipelines"
              icon=""
            />
            <FeatureCard
              title="Visual Workflow Designer"
              description="Intuitive drag-and-drop interface with AI-powered workflow suggestions"
              icon=""
            />
            <FeatureCard
              title="Enterprise Integration"
              description="Seamless integration with popular business tools and enterprise systems"
              icon=""
            />
          </div>

          {/* Workflow Dashboard Mockup */}
          <div className="my-8">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-gray-200">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-gray-900 px-4 py-2 flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300 text-sm ml-4">AI WorkflowBuilder Dashboard</span>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6">
                    <div className="bg-purple-50 p-3 sm:p-4 rounded-lg border border-purple-200">
                      <div className="text-xl sm:text-2xl font-bold text-purple-600">127</div>
                      <div className="text-xs sm:text-sm text-purple-700">Active Workflows</div>
                    </div>
                    <div className="bg-green-50 p-3 sm:p-4 rounded-lg border border-green-200">
                      <div className="text-xl sm:text-2xl font-bold text-green-600">98.7%</div>
                      <div className="text-xs sm:text-sm text-green-700">Success Rate</div>
                    </div>
                    <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border border-blue-200">
                      <div className="text-xl sm:text-2xl font-bold text-blue-600">45.2K</div>
                      <div className="text-xs sm:text-sm text-blue-700">Executions Today</div>
                    </div>
                    <div className="bg-orange-50 p-3 sm:p-4 rounded-lg border border-orange-200">
                      <div className="text-xl sm:text-2xl font-bold text-orange-600">3.2s</div>
                      <div className="text-xs sm:text-sm text-orange-700">Avg Execution Time</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 text-center">
                    AI-powered workflow automation with natural language processing
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-gray max-w-none">
            <h2 id="installation" className="text-2xl font-bold text-gray-900 mb-4">Installation</h2>
            <p className="text-gray-700 mb-6">
              Deploy AI WorkflowBuilder to start creating intelligent automation workflows from natural language descriptions.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">System Requirements</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Node.js 18 or higher</li>
              <li>Python 3.9+ (for AI processing)</li>
              <li>Docker 20.0+ (for workflow execution)</li>
              <li>Minimum 8GB RAM (16GB recommended for complex workflows)</li>
              <li>Network access for API integrations</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Install via Package Manager</h3>
            <CodeBlock language="bash" title="Installation">
{`# Install via npm
npm install -g @augment/workflow-builder

# Install via pip for Python components
pip install augment-workflow-builder

# Install from source
git clone https://github.com/augment-ai/workflow-builder
cd workflow-builder
npm install && npm run build

# Verify installation
workflow-builder --version`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Authentication Setup</h3>
            <p className="text-gray-700 mb-4">
              Configure your API keys and service connections:
            </p>

            <CodeBlock language="bash" title="Authentication">
{`# Set Augment API key
export AUGMENT_API_KEY=your_api_key_here

# Initialize workflow builder
workflow-builder auth login

# Verify authentication
workflow-builder auth status

# Connect external services (optional)
workflow-builder connect slack
workflow-builder connect github
workflow-builder connect aws`}
            </CodeBlock>

            <h2 id="quick-start" className="text-2xl font-bold text-gray-900 mb-4">Quick Start</h2>
            <p className="text-gray-700 mb-6">
              Create your first AI-powered workflow in minutes using natural language descriptions.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Create Your First Workflow</h3>
            <CodeBlock language="bash" title="Natural Language Workflow">
{`# Create workflow from natural language
workflow-builder create "When a new issue is created in GitHub, send a message to Slack and create a task in Jira"

# Or use interactive mode
workflow-builder create --interactive

# Initialize project with templates
workflow-builder init --template "ci-cd-pipeline"`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Test Your Workflow</h3>
            <CodeBlock language="bash" title="Workflow Testing">
{`# Test workflow with sample data
workflow-builder test my-workflow --sample-data

# Run workflow manually
workflow-builder run my-workflow --input '{"issue_title": "Bug fix needed"}'

# Debug workflow execution
workflow-builder debug my-workflow --verbose`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Deploy and Monitor</h3>
            <CodeBlock language="bash" title="Deployment">
{`# Deploy workflow to production
workflow-builder deploy my-workflow --environment production

# Monitor workflow execution
workflow-builder monitor my-workflow --live

# View execution logs
workflow-builder logs my-workflow --tail 100`}
            </CodeBlock>

            <h2 id="configuration" className="text-2xl font-bold text-gray-900 mb-4">Configuration</h2>
            <p className="text-gray-700 mb-6">
              Configure AI WorkflowBuilder to integrate with your tools and match your automation requirements.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Basic Configuration</h3>
            <CodeBlock language="yaml" title=".workflow-builder.yaml">
{`version: "1.0"
organization: "your-company"
environment: "production"

ai_settings:
  model: "gpt-4"
  confidence_threshold: 0.85
  language: "en"
  custom_instructions: |
    Generate workflows for enterprise software development team.
    Focus on security and compliance requirements.

integrations:
  slack:
    webhook_url: "https://hooks.slack.com/..."
    default_channel: "#automation"
  github:
    api_token: "GITHUB_TOKEN"
    default_repo: "my-org/my-repo"
  jira:
    server_url: "https://company.atlassian.net"
    api_token: "JIRA_TOKEN"
    default_project: "DEV"

workflow_settings:
  default_timeout: 300
  retry_attempts: 3
  error_notifications: true
  execution_history: 30
  
security:
  secret_encryption: true
  audit_logging: true
  rbac_enabled: true`}
            </CodeBlock>

            <h2 id="nlp" className="text-2xl font-bold text-gray-900 mb-4">Natural Language Processing</h2>
            <p className="text-gray-700 mb-6">
              AI WorkflowBuilder understands natural language and converts it into executable workflows automatically.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Supported Language Patterns</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">Event-Driven Patterns</h4>
                <ul className="text-blue-800 space-y-2 text-sm">
                  <li>• "When [event] happens, do [action]"</li>
                  <li>• "If [condition] is true, then [action]"</li>
                  <li>• "Every [time period], [action]"</li>
                  <li>• "On [schedule], [action]"</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-green-900 mb-3">Action Sequences</h4>
                <ul className="text-green-800 space-y-2 text-sm">
                  <li>• "First [action], then [action]"</li>
                  <li>• "[Action] and then [action]"</li>
                  <li>• "After [action], [action]"</li>
                  <li>• "Simultaneously [action] and [action]"</li>
                </ul>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-purple-900 mb-3">Conditional Logic</h4>
                <ul className="text-purple-800 space-y-2 text-sm">
                  <li>• "If [condition], otherwise [action]"</li>
                  <li>• "Unless [condition], [action]"</li>
                  <li>• "When [condition] and [condition]"</li>
                  <li>• "Either [action] or [action]"</li>
                </ul>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-orange-900 mb-3">Data Processing</h4>
                <ul className="text-orange-800 space-y-2 text-sm">
                  <li>• "Extract [data] from [source]"</li>
                  <li>• "Transform [data] to [format]"</li>
                  <li>• "Filter [data] where [condition]"</li>
                  <li>• "Aggregate [data] by [field]"</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Example Natural Language Workflows</h3>
            <CodeBlock language="text" title="Example Descriptions">
{`# Customer Support Automation
"When a new support ticket is created with high priority, 
immediately notify the on-call engineer via SMS and create 
a calendar meeting for the next hour"

# CI/CD Pipeline
"When code is pushed to main branch, run tests, build Docker image, 
deploy to staging, run smoke tests, and if all pass, deploy to production"

# Data Processing
"Every morning at 8 AM, extract sales data from the database, 
generate a summary report, and email it to the sales team"

# Incident Response
"If server CPU usage exceeds 90% for more than 5 minutes, 
scale up the infrastructure, notify DevOps team, and create 
an incident ticket in Jira"`}
            </CodeBlock>

            <h2 id="environment-variables" className="text-2xl font-bold text-gray-900 mb-4">Environment Variables</h2>
            <p className="text-gray-700 mb-6">
              Configure AI WorkflowBuilder behavior using environment variables for different deployment scenarios.
            </p>

            <div className="overflow-x-auto mb-6 -mx-4 sm:mx-0">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Variable</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Default</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">AUGMENT_API_KEY</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Your Augment API key</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Required</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">WORKFLOW_BUILDER_CONFIG</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Path to configuration file</td>
                    <td className="px-6 py-4 text-sm text-gray-500">.workflow-builder.yaml</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">WORKFLOW_EXECUTION_TIMEOUT</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Default workflow timeout in seconds</td>
                    <td className="px-6 py-4 text-sm text-gray-500">300</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">WORKFLOW_BUILDER_DEBUG</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Enable debug logging</td>
                    <td className="px-6 py-4 text-sm text-gray-500">false</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="usage" className="text-2xl font-bold text-gray-900 mb-4">Basic Usage</h2>
            <p className="text-gray-700 mb-6">
              Learn the fundamental workflow creation and management patterns.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Workflow Commands</h3>
            <CodeBlock language="bash" title="Workflow Management">
{`# Create workflow from natural language
workflow-builder create "Send email when form is submitted"

# List all workflows
workflow-builder list

# Edit workflow visually
workflow-builder edit my-workflow --visual

# Validate workflow syntax
workflow-builder validate my-workflow

# Export workflow definition
workflow-builder export my-workflow --format yaml`}
            </CodeBlock>

            <h2 id="cli-commands" className="text-2xl font-bold text-gray-900 mb-4">CLI Commands Reference</h2>
            <p className="text-gray-700 mb-6">
              Complete reference for all workflow creation and management commands.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">create</h4>
              <p className="text-gray-700 mb-3">Create a new workflow from natural language description</p>
              <CodeBlock language="bash">
{`workflow-builder create [description] [options]

Options:
  --name <name>             Workflow name
  --description <desc>      Detailed description
  --template <template>     Use predefined template
  --interactive            Interactive creation mode
  --output <file>          Save workflow definition to file
  --format <format>        Output format (yaml|json)
  --dry-run                Preview workflow without creating
  --validate               Validate workflow before creation`}
              </CodeBlock>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">run</h4>
              <p className="text-gray-700 mb-3">Execute a workflow with optional input data</p>
              <CodeBlock language="bash">
{`workflow-builder run <workflow-name> [options]

Options:
  --input <data>           Input data as JSON string
  --input-file <file>      Input data from file
  --environment <env>      Target environment
  --async                  Run asynchronously
  --timeout <seconds>      Execution timeout
  --no-retry               Disable retry on failure
  --output <file>          Save execution results`}
              </CodeBlock>
            </div>

            <h2 id="best-practices" className="text-2xl font-bold text-gray-900 mb-4">Best Practices</h2>
            <p className="text-gray-700 mb-6">
              Workflow automation best practices to create reliable and maintainable automation pipelines.
            </p>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-purple-900 mb-3">Workflow Design Principles</h4>
              <ol className="list-decimal list-inside text-purple-800 space-y-2">
                <li>Start with simple workflows and gradually add complexity</li>
                <li>Use clear, descriptive names for workflows and steps</li>
                <li>Implement proper error handling and retry logic</li>
                <li>Test workflows in staging before production deployment</li>
                <li>Monitor workflow performance and optimize bottlenecks</li>
                <li>Document workflow purpose and business logic</li>
              </ol>
            </div>

            <h2 id="integrations" className="text-2xl font-bold text-gray-900 mb-4">Integrations</h2>
            <p className="text-gray-700 mb-6">
              AI WorkflowBuilder integrates with hundreds of popular services and tools.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Popular Integrations</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 text-center">
                <div className="font-semibold text-blue-900">Communication</div>
                <div className="text-sm text-blue-700 mt-1">Slack, Teams, Discord</div>
              </div>
              <div className="bg-green-50 p-3 rounded-lg border border-green-200 text-center">
                <div className="font-semibold text-green-900">Development</div>
                <div className="text-sm text-green-700 mt-1">GitHub, GitLab, Jira</div>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg border border-purple-200 text-center">
                <div className="font-semibold text-purple-900">Cloud</div>
                <div className="text-sm text-purple-700 mt-1">AWS, Azure, GCP</div>
              </div>
              <div className="bg-orange-50 p-3 rounded-lg border border-orange-200 text-center">
                <div className="font-semibold text-orange-900">Productivity</div>
                <div className="text-sm text-orange-700 mt-1">Notion, Airtable, Zapier</div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Integrations</h3>
            <CodeBlock language="bash" title="Custom Integration">
{`# Create custom integration
workflow-builder integration create --name "my-api" \\
  --base-url "https://api.myservice.com" \\
  --auth-type "bearer" \\
  --auth-token "MY_API_TOKEN"

# Test custom integration
workflow-builder integration test my-api

# Use custom integration in workflow
workflow-builder create "When webhook received, call my-api with the data"`}
            </CodeBlock>

            <h2 id="workflow-templates" className="text-2xl font-bold text-gray-900 mb-4">Workflow Templates</h2>
            <p className="text-gray-700 mb-6">
              Pre-built workflow templates for common automation scenarios.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Available Templates</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">CI/CD Pipeline</h4>
                <p className="text-blue-800 text-sm mb-3">Automated testing, building, and deployment workflow</p>
                <CodeBlock language="bash">
{`workflow-builder create --template ci-cd-pipeline \\
  --repo "my-org/my-app" \\
  --deploy-target "production"`}
                </CodeBlock>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-green-900 mb-3">Incident Response</h4>
                <p className="text-green-800 text-sm mb-3">Automated incident detection and escalation</p>
                <CodeBlock language="bash">
{`workflow-builder create --template incident-response \\
  --alerting-tool "pagerduty" \\
  --chat-channel "#incidents"`}
                </CodeBlock>
              </div>
            </div>

            <h2 id="api-integration" className="text-2xl font-bold text-gray-900 mb-4">API Integration</h2>
            <p className="text-gray-700 mb-6">
              Integrate AI WorkflowBuilder into your applications and automation platforms.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">REST API</h3>
            <CodeBlock language="bash" title="API Usage">
{`# Create workflow via API
curl -X POST https://api.augment.cfd/v1/workflows \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "email-automation",
    "description": "Send welcome email when user signs up",
    "trigger": {
      "type": "webhook",
      "path": "/user-signup"
    }
  }'`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">JavaScript SDK</h3>
            <CodeBlock language="javascript" title="JavaScript Integration">
{`const { WorkflowBuilder } = require('@augment/workflow-builder-sdk');

// Initialize workflow builder
const builder = new WorkflowBuilder({
  apiKey: process.env.AUGMENT_API_KEY
});

// Create workflow from natural language
const workflow = await builder.createFromDescription(
  "When a new customer signs up, send a welcome email and create a CRM record"
);

// Execute workflow
const result = await builder.executeWorkflow(workflow.id, {
  customer_email: "user@example.com",
  customer_name: "John Doe"
});

console.log(\`Workflow executed: \${result.status}\`);`}
            </CodeBlock>

            <h2 id="api-reference" className="text-2xl font-bold text-gray-900 mb-4">API Reference</h2>
            <p className="text-gray-700 mb-6">
              Complete API documentation for integrating workflow automation into your applications.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Workflow Creation Endpoint</h3>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">POST /v1/workflows</h4>
              <p className="text-gray-700 mb-4">Create a new workflow from natural language or structured definition.</p>
              
              <h5 className="font-medium text-gray-900 mb-2">Request Body:</h5>
              <CodeBlock language="json">
{`{
  "name": "customer-onboarding",
  "description": "When a new customer signs up, send welcome email and create CRM record",
  "natural_language": true,
  "trigger": {
    "type": "webhook|schedule|event",
    "config": {
      "path": "/webhook/customer-signup",
      "method": "POST"
    }
  },
  "actions": [
    {
      "type": "email",
      "config": {
        "to": "{{customer.email}}",
        "template": "welcome-email"
      }
    }
  ],
  "settings": {
    "timeout": 300,
    "retry_attempts": 3,
    "error_handling": "notify"
  }
}`}
              </CodeBlock>

              <h5 className="font-medium text-gray-900 mb-2 mt-4">Response:</h5>
              <CodeBlock language="json">
{`{
  "workflow_id": "wf-123456",
  "name": "customer-onboarding",
  "status": "active",
  "created_at": "2025-09-18T10:30:00Z",
  "trigger_url": "https://api.augment.cfd/webhooks/wf-123456",
  "actions": [
    {
      "id": "action-001",
      "type": "email",
      "status": "configured"
    },
    {
      "id": "action-002", 
      "type": "crm_create",
      "status": "configured"
    }
  ],
  "execution_stats": {
    "total_runs": 0,
    "success_rate": null,
    "avg_duration": null
  }
}`}
              </CodeBlock>
            </div>

            <h2 id="troubleshooting" className="text-2xl font-bold text-gray-900 mb-4">Troubleshooting</h2>
            <p className="text-gray-700 mb-6">
              Common issues and solutions when creating and executing workflows.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Common Issues</h3>

            <div className="space-y-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-red-900 mb-2">Workflow Creation Failed</h4>
                <p className="text-red-800 mb-3">Error: Unable to parse natural language description</p>
                <div className="text-red-800">
                  <strong>Solutions:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Use more specific and clear language</li>
                    <li>Break complex workflows into smaller steps</li>
                    <li>Check for supported integrations and actions</li>
                    <li>Review example patterns in documentation</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-yellow-900 mb-2">Workflow Execution Timeout</h4>
                <p className="text-yellow-800 mb-3">Workflows timing out during execution</p>
                <div className="text-yellow-800">
                  <strong>Solutions:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Increase timeout values in workflow settings</li>
                    <li>Optimize API calls and data processing</li>
                    <li>Use async execution for long-running workflows</li>
                    <li>Split complex workflows into smaller parts</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">Integration Authentication Failed</h4>
                <p className="text-blue-800 mb-3">Unable to connect to external services</p>
                <div className="text-blue-800">
                  <strong>Solutions:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Verify API keys and credentials are current</li>
                    <li>Check if service requires OAuth re-authorization</li>
                    <li>Ensure proper permissions for service accounts</li>
                    <li>Test connection with integration test command</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-900">Workflow Documentation Complete!</h3>
                  <p className="mt-1 text-sm text-green-700">
                    You now have comprehensive knowledge to implement AI WorkflowBuilder in your automation strategy. From natural language workflow creation to advanced API integrations, you're equipped to transform business processes with intelligent automation.
                  </p>
                </div>
              </div>
            </div>

            <hr className="my-8 border-gray-200" />

            <p className="text-gray-600 text-center">
              <strong>Ready to automate your workflows?</strong> Start your free trial today and discover how natural language can transform your business processes into intelligent automation.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
