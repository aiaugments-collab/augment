import { Breadcrumb } from "@/components/ui/Breadcrumb"
import { CodeBlock } from "@/components/docs/CodeBlock"
import { FeatureCard } from "@/components/docs/FeatureCard"
import { DocsSidebar } from "@/components/docs/DocsSidebar"

const navigationItems = [
  { title: 'Overview', href: '/docs/ai-policy-advisor#overview' },
  { title: 'Installation', href: '/docs/ai-policy-advisor#installation' },
  { title: 'Quick Start', href: '/docs/ai-policy-advisor#quick-start' },
  { title: 'Configuration', href: '/docs/ai-policy-advisor#configuration' },
  { title: 'Policy Templates', href: '/docs/ai-policy-advisor#policy-templates' },
  { title: 'Environment Variables', href: '/docs/ai-policy-advisor#environment-variables' },
  { title: 'Basic Usage', href: '/docs/ai-policy-advisor#usage' },
  { title: 'CLI Commands', href: '/docs/ai-policy-advisor#cli-commands' },
  { title: 'Best Practices', href: '/docs/ai-policy-advisor#best-practices' },
  { title: 'Auto-Remediation', href: '/docs/ai-policy-advisor#auto-remediation' },
  { title: 'Compliance Frameworks', href: '/docs/ai-policy-advisor#compliance-frameworks' },
  { title: 'API Integration', href: '/docs/ai-policy-advisor#api-integration' },
  { title: 'API Reference', href: '/docs/ai-policy-advisor#api-reference' },
  { title: 'Troubleshooting', href: '/docs/ai-policy-advisor#troubleshooting' }
]

export default function AIPolicyAdvisorDocsPage() {
  return (
    <>
      <DocsSidebar 
        appName="AI PolicyAdvisor"
        appLogo="/policy-guard.svg"
        navigationItems={navigationItems}
      />
      
      <main className="flex-1 min-w-0 max-w-none md:max-w-4xl md:mx-auto px-4 sm:px-6 py-4 sm:py-8 overflow-hidden">
        <div className="docs-content">
          <div className="mb-6">
            <Breadcrumb className="mb-4" />
          </div>

          <div id="overview" className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8">
            <img src="/policy-guard.svg" alt="AI PolicyAdvisor" className="w-12 h-12" />
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">AI PolicyAdvisor</h1>
              <p className="text-base sm:text-lg text-gray-600">Smart policy recommendations and auto-remediation</p>
            </div>
          </div>

          {/* Key Capabilities Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <FeatureCard
              title="Intelligent Policy Generation"
              description="AI analyzes your infrastructure and automatically generates security policies and compliance rules"
              icon=""
            />
            <FeatureCard
              title="Auto-Remediation"
              description="Automatically fix policy violations and misconfigurations with intelligent remediation actions"
              icon=""
            />
            <FeatureCard
              title="Compliance Frameworks"
              description="Built-in support for SOC2, PCI-DSS, HIPAA, GDPR, and other major compliance standards"
              icon=""
            />
            <FeatureCard
              title="Governance Best Practices"
              description="Implement industry best practices for cloud governance and infrastructure management"
              icon=""
            />
          </div>

          {/* Policy Dashboard Mockup */}
          <div className="my-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-gray-200">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-gray-900 px-4 py-2 flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300 text-sm ml-4">AI PolicyAdvisor Dashboard</span>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6">
                    <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border border-blue-200">
                      <div className="text-xl sm:text-2xl font-bold text-blue-600">847</div>
                      <div className="text-xs sm:text-sm text-blue-700">Active Policies</div>
                    </div>
                    <div className="bg-green-50 p-3 sm:p-4 rounded-lg border border-green-200">
                      <div className="text-xl sm:text-2xl font-bold text-green-600">156</div>
                      <div className="text-xs sm:text-sm text-green-700">Auto-Remediated</div>
                    </div>
                    <div className="bg-orange-50 p-3 sm:p-4 rounded-lg border border-orange-200">
                      <div className="text-xl sm:text-2xl font-bold text-orange-600">23</div>
                      <div className="text-xs sm:text-sm text-orange-700">Policy Violations</div>
                    </div>
                    <div className="bg-purple-50 p-3 sm:p-4 rounded-lg border border-purple-200">
                      <div className="text-xl sm:text-2xl font-bold text-purple-600">94%</div>
                      <div className="text-xs sm:text-sm text-purple-700">Compliance Score</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 text-center">
                    AI-powered policy management and automated governance
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-gray max-w-none">
            <h2 id="installation" className="text-2xl font-bold text-gray-900 mb-4">Installation</h2>
            <p className="text-gray-700 mb-6">
              Deploy AI PolicyAdvisor to start intelligent policy management and automated governance across your infrastructure.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">System Requirements</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Python 3.9 or higher</li>
              <li>Terraform 1.0+ (for infrastructure policy enforcement)</li>
              <li>Docker 20.0+ (for containerized deployment)</li>
              <li>Minimum 8GB RAM (16GB recommended for large environments)</li>
              <li>Network access to cloud providers and policy repositories</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Install via Package Manager</h3>
            <CodeBlock language="bash" title="Installation">
{`# Install via pip
pip install augment-policy-advisor

# Install via Docker
docker pull augment/policy-advisor:latest

# Install from source
git clone https://github.com/augment-ai/policy-advisor
cd policy-advisor
pip install -e .

# Install policy engines
pip install opa-python checkov terraform-compliance

# Verify installation
policy-advisor --version`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Authentication and Setup</h3>
            <p className="text-gray-700 mb-4">
              Configure API access and policy repositories:
            </p>

            <CodeBlock language="bash" title="Setup">
{`# Set Augment API key
export AUGMENT_API_KEY=your_api_key_here

# Configure cloud provider access
export AWS_ACCESS_KEY_ID=your_aws_key
export AWS_SECRET_ACCESS_KEY=your_aws_secret
export AZURE_CLIENT_ID=your_azure_client_id
export AZURE_CLIENT_SECRET=your_azure_secret

# Initialize policy repository
policy-advisor init --org "your-company"

# Verify setup and permissions
policy-advisor health-check`}
            </CodeBlock>

            <h2 id="quick-start" className="text-2xl font-bold text-gray-900 mb-4">Quick Start</h2>
            <p className="text-gray-700 mb-6">
              Generate intelligent policy recommendations and start automated governance in minutes.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Scan Infrastructure</h3>
            <CodeBlock language="bash" title="Infrastructure Scan">
{`# Scan current infrastructure configuration
policy-advisor scan --provider aws --regions us-east-1,us-west-2

# Scan Terraform configurations
policy-advisor scan --terraform ./infrastructure/

# Scan Kubernetes manifests
policy-advisor scan --kubernetes ./k8s-manifests/

# Generate baseline policy recommendations
policy-advisor generate-baseline --compliance soc2,pci-dss`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Generate Policy Recommendations</h3>
            <CodeBlock language="bash" title="Policy Generation">
{`# Generate security policies based on current infrastructure
policy-advisor generate --type security --framework cis-benchmark

# Generate compliance policies
policy-advisor generate --type compliance --standard soc2 --output policies/

# Generate custom policies for specific resources
policy-advisor generate --resource-type s3 --focus data-protection

# Review and approve generated policies
policy-advisor review --interactive`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Enable Auto-Remediation</h3>
            <CodeBlock language="bash" title="Auto-Remediation Setup">
{`# Enable auto-remediation for low-risk violations
policy-advisor auto-remediation enable --risk-level low

# Configure approval workflows for medium/high risk changes
policy-advisor auto-remediation configure --approval-required medium,high

# Set up notification channels
policy-advisor notifications add --type slack --webhook "https://hooks.slack.com/..."

# Start continuous policy monitoring
policy-advisor monitor --daemon --interval 300`}
            </CodeBlock>

            <h2 id="configuration" className="text-2xl font-bold text-gray-900 mb-4">Configuration</h2>
            <p className="text-gray-700 mb-6">
              Configure AI PolicyAdvisor to align with your organization's governance requirements and compliance standards.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Basic Configuration</h3>
            <CodeBlock language="yaml" title=".policy-advisor.yaml">
{`version: "1.0"
organization: "your-company"
environment: "production"

policy_sources:
  - name: "security-baseline"
    type: "git"
    url: "https://github.com/your-org/security-policies"
    branch: "main"
  - name: "compliance-templates"
    type: "built-in"
    frameworks: ["soc2", "pci-dss", "hipaa"]

scanning:
  providers:
    - aws
    - azure
    - gcp
  scope:
    regions: ["us-east-1", "us-west-2", "eu-west-1"]
    accounts: ["123456789012", "987654321098"]
  exclude_resources:
    - "test-*"
    - "*-sandbox"

policy_generation:
  ai_confidence_threshold: 0.8
  include_best_practices: true
  custom_rules_path: "./custom-rules/"
  output_formats: ["opa", "terraform", "yaml"]

auto_remediation:
  enabled: true
  risk_tolerance: "medium"
  require_approval:
    - "high_risk"
    - "cost_impact_high"
  notification_channels:
    - "slack"
    - "email"
  rollback_on_failure: true

compliance:
  frameworks:
    - name: "SOC2"
      controls: ["CC6.1", "CC6.6", "CC6.7"]
    - name: "PCI-DSS"
      requirements: ["3.4", "4.1", "8.2"]`}
            </CodeBlock>

            <h2 id="policy-templates" className="text-2xl font-bold text-gray-900 mb-4">Policy Templates</h2>
            <p className="text-gray-700 mb-6">
              AI PolicyAdvisor includes comprehensive policy templates for common security and compliance scenarios.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">Security Policies</h4>
                <ul className="text-blue-800 space-y-2 text-sm">
                  <li>• IAM access controls and permissions</li>
                  <li>• Network security and firewall rules</li>
                  <li>• Data encryption and protection</li>
                  <li>• Resource tagging and classification</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-green-900 mb-3">Compliance Policies</h4>
                <ul className="text-green-800 space-y-2 text-sm">
                  <li>• SOC2 Type II controls</li>
                  <li>• PCI-DSS requirements</li>
                  <li>• HIPAA safeguards</li>
                  <li>• GDPR data protection</li>
                </ul>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-purple-900 mb-3">Operational Policies</h4>
                <ul className="text-purple-800 space-y-2 text-sm">
                  <li>• Cost optimization rules</li>
                  <li>• Resource lifecycle management</li>
                  <li>• Backup and disaster recovery</li>
                  <li>• Performance monitoring</li>
                </ul>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-orange-900 mb-3">Governance Policies</h4>
                <ul className="text-orange-800 space-y-2 text-sm">
                  <li>• Change management processes</li>
                  <li>• Approval workflows</li>
                  <li>• Audit and logging requirements</li>
                  <li>• Risk assessment frameworks</li>
                </ul>
              </div>
            </div>

            <h2 id="environment-variables" className="text-2xl font-bold text-gray-900 mb-4">Environment Variables</h2>
            <p className="text-gray-700 mb-6">
              Configure AI PolicyAdvisor behavior using environment variables for different deployment scenarios.
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
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">POLICY_ADVISOR_CONFIG</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Path to configuration file</td>
                    <td className="px-6 py-4 text-sm text-gray-500">.policy-advisor.yaml</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">POLICY_ADVISOR_DRY_RUN</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Enable dry-run mode by default</td>
                    <td className="px-6 py-4 text-sm text-gray-500">false</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">POLICY_ADVISOR_LOG_LEVEL</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Logging level (debug/info/warn/error)</td>
                    <td className="px-6 py-4 text-sm text-gray-500">info</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="usage" className="text-2xl font-bold text-gray-900 mb-4">Basic Usage</h2>
            <p className="text-gray-700 mb-6">
              Learn the fundamental policy management patterns and governance workflows.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Policy Commands</h3>
            <CodeBlock language="bash" title="Policy Management">
{`# Scan and analyze current infrastructure
policy-advisor scan --provider aws --output scan-results.json

# Generate policies based on scan results
policy-advisor generate --input scan-results.json --framework cis

# Validate existing policies
policy-advisor validate --policies ./policies/ --format opa

# Apply policies to infrastructure
policy-advisor apply --policies ./policies/ --dry-run`}
            </CodeBlock>

            <h2 id="cli-commands" className="text-2xl font-bold text-gray-900 mb-4">CLI Commands Reference</h2>
            <p className="text-gray-700 mb-6">
              Complete reference for all policy management and governance commands.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">generate</h4>
              <p className="text-gray-700 mb-3">Generate intelligent policy recommendations based on infrastructure analysis</p>
              <CodeBlock language="bash">
{`policy-advisor generate [options]

Options:
  --type <type>            Policy type (security|compliance|operational|governance)
  --framework <framework>  Compliance framework (soc2|pci-dss|hipaa|gdpr|cis)
  --provider <provider>    Cloud provider (aws|azure|gcp)
  --resource-type <type>   Specific resource type to focus on
  --output <path>          Output directory for generated policies
  --format <format>        Output format (opa|terraform|yaml|json)
  --confidence <level>     Minimum AI confidence threshold
  --include-remediation    Include auto-remediation actions
  --custom-rules <path>    Include custom rule templates`}
              </CodeBlock>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">remediate</h4>
              <p className="text-gray-700 mb-3">Execute automated remediation for policy violations</p>
              <CodeBlock language="bash">
{`policy-advisor remediate [options]

Options:
  --violation-id <id>      Specific violation to remediate
  --policy <policy>        Policy name to enforce
  --resource <resource>    Target resource for remediation
  --risk-level <level>     Maximum risk level to auto-remediate
  --dry-run                Preview changes without executing
  --force                  Skip approval workflows
  --rollback-plan          Generate rollback instructions
  --notify                 Send notifications after remediation`}
              </CodeBlock>
            </div>

            <h2 id="best-practices" className="text-2xl font-bold text-gray-900 mb-4">Best Practices</h2>
            <p className="text-gray-700 mb-6">
              Policy management best practices to maintain secure and compliant infrastructure.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">Policy Management Strategy</h4>
              <ol className="list-decimal list-inside text-blue-800 space-y-2">
                <li>Start with infrastructure scanning to understand current state</li>
                <li>Generate baseline policies using industry frameworks</li>
                <li>Implement policies incrementally to avoid disruption</li>
                <li>Use dry-run mode to validate policy changes before applying</li>
                <li>Monitor policy violations and adjust thresholds as needed</li>
                <li>Regularly review and update policies based on new requirements</li>
              </ol>
            </div>

            <h2 id="auto-remediation" className="text-2xl font-bold text-gray-900 mb-4">Auto-Remediation</h2>
            <p className="text-gray-700 mb-6">
              Intelligent auto-remediation capabilities to automatically fix policy violations and misconfigurations.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Remediation Types</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-green-50 p-3 sm:p-4 rounded-lg border border-green-200">
                <h5 className="font-semibold text-green-900 mb-2">Low Risk</h5>
                <p className="text-xs sm:text-sm text-green-800">Automatic remediation without approval required</p>
                <ul className="text-xs text-green-700 mt-2">
                  <li>• Tag missing resources</li>
                  <li>• Enable logging</li>
                  <li>• Update security groups</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-3 sm:p-4 rounded-lg border border-yellow-200">
                <h5 className="font-semibold text-yellow-900 mb-2">Medium Risk</h5>
                <p className="text-xs sm:text-sm text-yellow-800">Requires approval before remediation</p>
                <ul className="text-xs text-yellow-700 mt-2">
                  <li>• Modify IAM permissions</li>
                  <li>• Change network settings</li>
                  <li>• Update resource configs</li>
                </ul>
              </div>
              <div className="bg-red-50 p-3 sm:p-4 rounded-lg border border-red-200">
                <h5 className="font-semibold text-red-900 mb-2">High Risk</h5>
                <p className="text-xs sm:text-sm text-red-800">Manual review and approval required</p>
                <ul className="text-xs text-red-700 mt-2">
                  <li>• Delete resources</li>
                  <li>• Major config changes</li>
                  <li>• Security modifications</li>
                </ul>
              </div>
            </div>

            <h2 id="compliance-frameworks" className="text-2xl font-bold text-gray-900 mb-4">Compliance Frameworks</h2>
            <p className="text-gray-700 mb-6">
              Built-in support for major compliance frameworks with automated policy generation and monitoring.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Supported Frameworks</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 text-center">
                <div className="font-semibold text-blue-900">SOC 2</div>
                <div className="text-sm text-blue-700 mt-1">Type I & II</div>
              </div>
              <div className="bg-green-50 p-3 rounded-lg border border-green-200 text-center">
                <div className="font-semibold text-green-900">PCI DSS</div>
                <div className="text-sm text-green-700 mt-1">v4.0</div>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg border border-purple-200 text-center">
                <div className="font-semibold text-purple-900">HIPAA</div>
                <div className="text-sm text-purple-700 mt-1">Security Rule</div>
              </div>
              <div className="bg-orange-50 p-3 rounded-lg border border-orange-200 text-center">
                <div className="font-semibold text-orange-900">GDPR</div>
                <div className="text-sm text-orange-700 mt-1">Articles 25, 32</div>
              </div>
              <div className="bg-red-50 p-3 rounded-lg border border-red-200 text-center">
                <div className="font-semibold text-red-900">CIS</div>
                <div className="text-sm text-red-700 mt-1">Benchmarks</div>
              </div>
              <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200 text-center">
                <div className="font-semibold text-yellow-900">NIST</div>
                <div className="text-sm text-yellow-700 mt-1">CSF 2.0</div>
              </div>
              <div className="bg-indigo-50 p-3 rounded-lg border border-indigo-200 text-center">
                <div className="font-semibold text-indigo-900">ISO 27001</div>
                <div className="text-sm text-indigo-700 mt-1">2022 Edition</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-center">
                <div className="font-semibold text-gray-900">Custom</div>
                <div className="text-sm text-gray-700 mt-1">Your Framework</div>
              </div>
            </div>

            <h2 id="api-integration" className="text-2xl font-bold text-gray-900 mb-4">API Integration</h2>
            <p className="text-gray-700 mb-6">
              Integrate AI PolicyAdvisor into your governance workflows and compliance management systems.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">REST API</h3>
            <CodeBlock language="bash" title="API Usage">
{`# Generate policies via API
curl -X POST https://api.augment.cfd/v1/policies/generate \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "infrastructure_scan": "scan-results.json",
    "framework": "soc2",
    "policy_types": ["security", "compliance"],
    "auto_remediation": true
  }'`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Python SDK</h3>
            <CodeBlock language="python" title="Python Integration">
{`from augment_policy_advisor import PolicyAdvisor

# Initialize policy advisor
advisor = PolicyAdvisor(api_key=os.environ['AUGMENT_API_KEY'])

# Scan infrastructure
scan_result = await advisor.scan_infrastructure(
    provider='aws',
    regions=['us-east-1', 'us-west-2'],
    compliance_frameworks=['soc2', 'pci-dss']
)

# Generate policy recommendations
policies = await advisor.generate_policies(
    scan_result=scan_result,
    policy_types=['security', 'compliance'],
    confidence_threshold=0.8
)

print(f"Generated {len(policies)} policy recommendations")

# Enable auto-remediation
remediation_config = await advisor.configure_auto_remediation(
    risk_tolerance='medium',
    require_approval=['high_risk'],
    notification_channels=['slack', 'email']
)

# Monitor policy violations
violations = await advisor.get_policy_violations(
    severity='high',
    timeframe='24h'
)`}
            </CodeBlock>

            <h2 id="api-reference" className="text-2xl font-bold text-gray-900 mb-4">API Reference</h2>
            <p className="text-gray-700 mb-6">
              Complete API documentation for integrating policy management into your applications.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Policy Generation Endpoint</h3>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">POST /v1/policies/generate</h4>
              <p className="text-gray-700 mb-4">Generate intelligent policy recommendations based on infrastructure analysis.</p>
              
              <h5 className="font-medium text-gray-900 mb-2">Request Body:</h5>
              <CodeBlock language="json">
{`{
  "infrastructure_scan": {
    "provider": "aws",
    "regions": ["us-east-1", "us-west-2"],
    "resources": ["s3", "ec2", "iam", "vpc"]
  },
  "policy_requirements": {
    "frameworks": ["soc2", "pci-dss"],
    "policy_types": ["security", "compliance", "governance"],
    "risk_tolerance": "medium"
  },
  "generation_options": {
    "include_remediation": true,
    "confidence_threshold": 0.8,
    "output_format": "opa",
    "custom_rules": true
  }
}`}
              </CodeBlock>

              <h5 className="font-medium text-gray-900 mb-2 mt-4">Response:</h5>
              <CodeBlock language="json">
{`{
  "generation_id": "gen-123456",
  "status": "completed",
  "summary": {
    "total_policies": 47,
    "security_policies": 23,
    "compliance_policies": 18,
    "governance_policies": 6
  },
  "policies": [
    {
      "id": "policy-001",
      "name": "S3 Bucket Encryption Enforcement",
      "type": "security",
      "framework": "soc2",
      "confidence": 0.95,
      "description": "Ensure all S3 buckets have encryption enabled",
      "opa_rule": "package s3_encryption...",
      "terraform_code": "resource aws_s3_bucket_encryption...",
      "remediation": {
        "auto_fix": true,
        "risk_level": "low",
        "steps": [
          "Enable default encryption on S3 bucket",
          "Apply bucket policy to enforce encryption"
        ]
      },
      "compliance_mapping": {
        "soc2": ["CC6.1", "CC6.7"],
        "pci_dss": ["3.4"]
      }
    }
  ],
  "remediation_summary": {
    "auto_fixable": 32,
    "requires_approval": 12,
    "manual_review": 3
  }
}`}
              </CodeBlock>
            </div>

            <h2 id="troubleshooting" className="text-2xl font-bold text-gray-900 mb-4">Troubleshooting</h2>
            <p className="text-gray-700 mb-6">
              Common issues and solutions when implementing policy management and governance.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Common Issues</h3>

            <div className="space-y-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-red-900 mb-2">Policy Conflicts</h4>
                <p className="text-red-800 mb-3">Generated policies conflict with existing organizational policies</p>
                <div className="text-red-800">
                  <strong>Solutions:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Review and merge conflicting policies manually</li>
                    <li>Use custom rule templates for organization-specific requirements</li>
                    <li>Adjust AI confidence thresholds to reduce aggressive recommendations</li>
                    <li>Implement gradual policy rollout with testing periods</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-yellow-900 mb-2">Auto-Remediation Failures</h4>
                <p className="text-yellow-800 mb-3">Automated remediation actions failing or causing issues</p>
                <div className="text-yellow-800">
                  <strong>Solutions:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Check IAM permissions for remediation service accounts</li>
                    <li>Verify resource dependencies before remediation</li>
                    <li>Use dry-run mode to test remediation actions</li>
                    <li>Implement proper rollback procedures for failed changes</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">High False Positive Rate</h4>
                <p className="text-blue-800 mb-3">Too many false positive policy violations reported</p>
                <div className="text-blue-800">
                  <strong>Solutions:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Fine-tune policy rules for your specific environment</li>
                    <li>Add exceptions for known compliant configurations</li>
                    <li>Adjust violation severity thresholds</li>
                    <li>Use environment-specific policy configurations</li>
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
                  <h3 className="text-sm font-medium text-green-900">Policy Management Documentation Complete!</h3>
                  <p className="mt-1 text-sm text-green-700">
                    You now have comprehensive knowledge to implement AI PolicyAdvisor in your governance framework. From intelligent policy generation to automated remediation, you're equipped to maintain secure and compliant infrastructure with AI-powered governance.
                  </p>
                </div>
              </div>
            </div>

            <hr className="my-8 border-gray-200" />

            <p className="text-gray-600 text-center">
              <strong>Ready to transform your governance strategy?</strong> Start your free policy assessment today and discover how AI can automate compliance and strengthen your security posture.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
