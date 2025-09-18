import { Breadcrumb } from "@/components/ui/Breadcrumb"
import { CodeBlock } from "@/components/docs/CodeBlock"
import { FeatureCard } from "@/components/docs/FeatureCard"
import { DocsSidebar } from "@/components/docs/DocsSidebar"

const navigationItems = [
  { title: 'Overview', href: '/docs/ai-cost-optimizer#overview' },
  { title: 'Installation', href: '/docs/ai-cost-optimizer#installation' },
  { title: 'Quick Start', href: '/docs/ai-cost-optimizer#quick-start' },
  { title: 'Configuration', href: '/docs/ai-cost-optimizer#configuration' },
  { title: 'Cost Models', href: '/docs/ai-cost-optimizer#cost-models' },
  { title: 'Environment Variables', href: '/docs/ai-cost-optimizer#environment-variables' },
  { title: 'Basic Usage', href: '/docs/ai-cost-optimizer#usage' },
  { title: 'CLI Commands', href: '/docs/ai-cost-optimizer#cli-commands' },
  { title: 'Best Practices', href: '/docs/ai-cost-optimizer#best-practices' },
  { title: 'Automation', href: '/docs/ai-cost-optimizer#automation' },
  { title: 'Reporting', href: '/docs/ai-cost-optimizer#reporting' },
  { title: 'API Integration', href: '/docs/ai-cost-optimizer#api-integration' },
  { title: 'API Reference', href: '/docs/ai-cost-optimizer#api-reference' },
  { title: 'Troubleshooting', href: '/docs/ai-cost-optimizer#troubleshooting' }
]

export default function AICostOptimizerDocsPage() {
  return (
    <>
      <DocsSidebar 
        appName="AI CostOptimizer"
        appLogo="/ai-cost-optimizer.svg"
        navigationItems={navigationItems}
      />
      
      <main className="flex-1 max-w-4xl mx-auto px-6 py-8">
        <div className="docs-content">
          <div className="mb-6">
            <Breadcrumb className="mb-4" />
          </div>

          <div id="overview" className="flex items-center space-x-4 mb-8">
            <img src="/ai-cost-optimizer.svg" alt="AI CostOptimizer" className="w-12 h-12" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">AI CostOptimizer</h1>
              <p className="text-lg text-gray-600">Intelligent cloud cost analysis and optimization</p>
            </div>
          </div>

          {/* Key Capabilities Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <FeatureCard
              title="AI-Driven Cost Analysis"
              description="Advanced machine learning algorithms analyze cloud spending patterns and identify waste"
              icon=""
            />
            <FeatureCard
              title="Predictive Cost Modeling"
              description="Forecast future costs and budget requirements with high accuracy"
              icon=""
            />
            <FeatureCard
              title="Automated Optimization"
              description="Implement cost-saving recommendations automatically with approval workflows"
              icon=""
            />
            <FeatureCard
              title="Multi-Cloud FinOps"
              description="Comprehensive cost management across AWS, Azure, GCP, and hybrid environments"
              icon=""
            />
          </div>

          {/* Cost Dashboard Mockup */}
          <div className="my-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-gray-200">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-gray-900 px-4 py-2 flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300 text-sm ml-4">AI CostOptimizer Dashboard</span>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <div className="text-2xl font-bold text-green-600">$47.2K</div>
                      <div className="text-sm text-green-700">Monthly Savings</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <div className="text-2xl font-bold text-blue-600">34%</div>
                      <div className="text-sm text-blue-700">Cost Reduction</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <div className="text-2xl font-bold text-purple-600">1,247</div>
                      <div className="text-sm text-purple-700">Resources Analyzed</div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                      <div className="text-2xl font-bold text-orange-600">$156K</div>
                      <div className="text-sm text-orange-700">Predicted Next Month</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 text-center">
                    AI-powered cost analysis and predictive spending forecasts
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-gray max-w-none">
            <h2 id="installation" className="text-2xl font-bold text-gray-900 mb-4">Installation</h2>
            <p className="text-gray-700 mb-6">
              Deploy AI CostOptimizer to start reducing cloud costs with intelligent analysis and automated optimization.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">System Requirements</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Python 3.9 or higher</li>
              <li>Docker 20.0+ (for containerized deployment)</li>
              <li>Node.js 16+ (for dashboard components)</li>
              <li>Minimum 4GB RAM (8GB recommended for large accounts)</li>
              <li>Access to cloud provider billing APIs</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Install via Package Manager</h3>
            <CodeBlock language="bash" title="Installation">
{`# Install via pip
pip install augment-cost-optimizer

# Install via npm for Node.js projects
npm install -g @augment/cost-optimizer

# Install from source
git clone https://github.com/augment-ai/cost-optimizer
cd cost-optimizer
pip install -e .

# Verify installation
cost-optimizer --version`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Billing API Access Setup</h3>
            <p className="text-gray-700 mb-4">
              Configure access to your cloud provider billing APIs and Augment platform:
            </p>

            <CodeBlock language="bash" title="Billing API Setup">
{`# Set Augment API key
export AUGMENT_API_KEY=your_api_key_here

# Configure AWS Cost Explorer access
aws configure
# Ensure billing access permissions are enabled

# Configure Azure Cost Management
az login
az account set --subscription your-subscription-id

# Configure GCP Billing API
gcloud auth application-default login
gcloud config set project your-project-id

# Verify billing access
cost-optimizer auth verify --all-providers`}
            </CodeBlock>

            <h2 id="quick-start" className="text-2xl font-bold text-gray-900 mb-4">Quick Start</h2>
            <p className="text-gray-700 mb-6">
              Get your first cost analysis and optimization recommendations in minutes.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Initialize Cost Profile</h3>
            <CodeBlock language="bash" title="Profile Setup">
{`# Create cost optimization profile
cost-optimizer init --organization "your-company"

# Configure billing scope
cost-optimizer config --providers aws,azure,gcp
cost-optimizer config --accounts account1,account2,account3

# Set optimization targets
cost-optimizer config --target-reduction 25%
cost-optimizer config --budget-threshold 10000

# This creates .cost-optimizer.yaml config file`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Run Cost Analysis</h3>
            <CodeBlock language="bash" title="Cost Analysis">
{`# Analyze current month spending
cost-optimizer analyze --period current-month

# Analyze last 90 days for trends
cost-optimizer analyze --period 90-days --include-trends

# Quick cost assessment
cost-optimizer analyze --quick --high-impact-only`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Generate Cost Reports</h3>
            <CodeBlock language="bash" title="Cost Reports">
{`# Generate comprehensive cost report
cost-optimizer report --format html --output cost-report.html

# Export optimization recommendations
cost-optimizer report --format json --output recommendations.json

# Generate executive summary
cost-optimizer report --executive-summary --format pdf --output exec-summary.pdf

# Create budget forecast
cost-optimizer forecast --months 6 --output forecast.csv`}
            </CodeBlock>

            <h2 id="configuration" className="text-2xl font-bold text-gray-900 mb-4">Configuration</h2>
            <p className="text-gray-700 mb-6">
              Configure AI CostOptimizer to align with your organization's financial policies and optimization goals.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Basic Configuration</h3>
            <CodeBlock language="yaml" title=".cost-optimizer.yaml">
{`version: "1.0"
organization: "your-company"
currency: "USD"

providers:
  aws:
    accounts: ["123456789012", "987654321098"]
    regions: ["us-east-1", "us-west-2", "eu-west-1"]
    linked_accounts: true
  azure:
    subscriptions: ["sub-123-456", "sub-789-012"]
    resource_groups: ["production", "staging"]
  gcp:
    projects: ["project-123", "project-456"]
    billing_accounts: ["billing-account-123"]

optimization_settings:
  target_reduction: 25
  min_savings_threshold: 100
  risk_tolerance: "medium"
  auto_implement: false
  approval_workflow: true

cost_policies:
  budget_alerts:
    - threshold: 80
      type: "percentage"
      notify: ["finance@company.com"]
  spending_limits:
    monthly_cap: 50000
    emergency_shutdown: true
  reserved_instances:
    recommendation_threshold: 0.7
    auto_purchase: false`}
            </CodeBlock>

            <h2 id="cost-models" className="text-2xl font-bold text-gray-900 mb-4">Cost Models</h2>
            <p className="text-gray-700 mb-6">
              AI CostOptimizer uses advanced machine learning models to analyze spending patterns and predict future costs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">Predictive Cost Modeling</h4>
                <ul className="text-blue-800 space-y-2 text-sm">
                  <li>• Time-series forecasting for resource usage</li>
                  <li>• Seasonal pattern recognition</li>
                  <li>• Growth trend analysis</li>
                  <li>• Budget variance prediction</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-green-900 mb-3">Waste Detection Algorithms</h4>
                <ul className="text-green-800 space-y-2 text-sm">
                  <li>• Idle resource identification</li>
                  <li>• Over-provisioned instance detection</li>
                  <li>• Unused storage analysis</li>
                  <li>• Zombie resource cleanup</li>
                </ul>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-purple-900 mb-3">Right-Sizing Intelligence</h4>
                <ul className="text-purple-800 space-y-2 text-sm">
                  <li>• Performance-based sizing recommendations</li>
                  <li>• Workload pattern analysis</li>
                  <li>• Cost-performance optimization</li>
                  <li>• Migration cost calculations</li>
                </ul>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-orange-900 mb-3">Commitment Analysis</h4>
                <ul className="text-orange-800 space-y-2 text-sm">
                  <li>• Reserved instance optimization</li>
                  <li>• Savings plan recommendations</li>
                  <li>• Spot instance opportunities</li>
                  <li>• Contract negotiation insights</li>
                </ul>
              </div>
            </div>

            <h2 id="environment-variables" className="text-2xl font-bold text-gray-900 mb-4">Environment Variables</h2>
            <p className="text-gray-700 mb-6">
              Configure AI CostOptimizer behavior using environment variables for different deployment scenarios.
            </p>

            <div className="overflow-x-auto mb-6">
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
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">COST_OPTIMIZER_CONFIG</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Path to configuration file</td>
                    <td className="px-6 py-4 text-sm text-gray-500">.cost-optimizer.yaml</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">COST_OPTIMIZER_CURRENCY</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Default currency for reports</td>
                    <td className="px-6 py-4 text-sm text-gray-500">USD</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">COST_OPTIMIZER_CACHE_TTL</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Cache time-to-live in seconds</td>
                    <td className="px-6 py-4 text-sm text-gray-500">3600</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="usage" className="text-2xl font-bold text-gray-900 mb-4">Basic Usage</h2>
            <p className="text-gray-700 mb-6">
              Learn the fundamental cost analysis patterns and optimization workflows.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Analysis Commands</h3>
            <CodeBlock language="bash" title="Cost Analysis">
{`# Full cost analysis across all providers
cost-optimizer analyze --all-providers

# Focus on specific cost categories
cost-optimizer analyze --categories compute,storage,network

# Analyze specific time periods
cost-optimizer analyze --start-date 2025-01-01 --end-date 2025-01-31

# High-impact optimization opportunities only
cost-optimizer analyze --min-savings 1000 --high-impact-only`}
            </CodeBlock>

            <h2 id="cli-commands" className="text-2xl font-bold text-gray-900 mb-4">CLI Commands Reference</h2>
            <p className="text-gray-700 mb-6">
              Complete reference for all cost analysis and optimization commands.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">analyze</h4>
              <p className="text-gray-700 mb-3">Run comprehensive cost analysis and generate optimization recommendations</p>
              <CodeBlock language="bash">
{`cost-optimizer analyze [options]

Options:
  --provider <provider>     Cloud provider (aws|azure|gcp|all)
  --account <account>       Specific account to analyze
  --period <period>         Analysis period (current-month|last-month|90-days|custom)
  --start-date <date>       Start date for custom period (YYYY-MM-DD)
  --end-date <date>         End date for custom period (YYYY-MM-DD)
  --categories <list>       Cost categories to analyze (compute,storage,network)
  --min-savings <amount>    Minimum savings threshold
  --output <file>           Output file path
  --format <format>         Output format (json|html|csv|pdf)
  --quick                   Fast analysis mode
  --detailed                Comprehensive analysis with trends`}
              </CodeBlock>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">optimize</h4>
              <p className="text-gray-700 mb-3">Implement cost optimization recommendations</p>
              <CodeBlock language="bash">
{`cost-optimizer optimize [options]

Options:
  --recommendation-id <id>  Specific recommendation to implement
  --category <category>     Optimize specific category
  --auto-approve           Auto-approve low-risk changes
  --dry-run                Preview changes without implementing
  --schedule <time>         Schedule optimization for later
  --rollback-plan          Generate rollback plan`}
              </CodeBlock>
            </div>

            <h2 id="best-practices" className="text-2xl font-bold text-gray-900 mb-4">Best Practices</h2>
            <p className="text-gray-700 mb-6">
              Cost optimization best practices to maximize savings while maintaining performance and reliability.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-green-900 mb-3">Cost Optimization Strategy</h4>
              <ol className="list-decimal list-inside text-green-800 space-y-2">
                <li>Run cost analysis weekly to identify trends early</li>
                <li>Start with low-risk, high-impact optimizations</li>
                <li>Implement budget alerts and spending thresholds</li>
                <li>Monitor performance after cost optimizations</li>
                <li>Use staging environments to test optimization changes</li>
                <li>Review and adjust reserved instance commitments quarterly</li>
              </ol>
            </div>

            <h2 id="automation" className="text-2xl font-bold text-gray-900 mb-4">Automation</h2>
            <p className="text-gray-700 mb-6">
              Automate cost optimization with intelligent workflows and approval processes.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Automated Optimization Rules</h3>
            <CodeBlock language="yaml" title="Automation Rules">
{`automation_rules:
  - name: "Auto-shutdown idle instances"
    trigger:
      condition: "idle_time > 24h AND cpu_utilization < 5%"
      cost_impact: "> 50"
    action: "shutdown"
    approval_required: false
    
  - name: "Right-size over-provisioned instances"
    trigger:
      condition: "cpu_utilization < 20% AND memory_utilization < 30%"
      duration: "7_days"
    action: "resize"
    approval_required: true
    
  - name: "Delete unused storage volumes"
    trigger:
      condition: "unattached_days > 30"
      cost_impact: "> 10"
    action: "delete"
    approval_required: true
    backup_required: true`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Scheduled Optimization</h3>
            <CodeBlock language="bash" title="Scheduled Analysis">
{`# Schedule daily cost analysis
cost-optimizer schedule --analysis daily --time "02:00"

# Schedule weekly optimization review
cost-optimizer schedule --optimization weekly --day monday --time "09:00"

# Schedule monthly budget forecast
cost-optimizer schedule --forecast monthly --day 1 --time "08:00"`}
            </CodeBlock>

            <h2 id="reporting" className="text-2xl font-bold text-gray-900 mb-4">Reporting</h2>
            <p className="text-gray-700 mb-6">
              Generate comprehensive cost reports for stakeholders and financial planning.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Report Types</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h5 className="font-semibold text-blue-900 mb-2">Executive Dashboard</h5>
                <p className="text-sm text-blue-800">High-level cost trends and optimization ROI</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h5 className="font-semibold text-green-900 mb-2">Detailed Analysis</h5>
                <p className="text-sm text-green-800">Resource-level cost breakdown and recommendations</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h5 className="font-semibold text-purple-900 mb-2">Budget Forecast</h5>
                <p className="text-sm text-purple-800">Predictive cost modeling and budget planning</p>
              </div>
            </div>

            <h2 id="api-integration" className="text-2xl font-bold text-gray-900 mb-4">API Integration</h2>
            <p className="text-gray-700 mb-6">
              Integrate AI CostOptimizer into your financial systems and FinOps workflows.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">REST API</h3>
            <CodeBlock language="bash" title="API Usage">
{`# Trigger cost analysis via API
curl -X POST https://api.augment.cfd/v1/cost/analyze \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "providers": ["aws", "azure"],
    "period": "current-month",
    "min_savings": 500,
    "categories": ["compute", "storage"]
  }'`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Python SDK</h3>
            <CodeBlock language="python" title="Python Integration">
{`from augment_cost_optimizer import CostOptimizer

# Initialize cost optimizer
optimizer = CostOptimizer(api_key=os.environ['AUGMENT_API_KEY'])

# Run cost analysis
analysis_result = await optimizer.analyze_costs(
    providers=['aws', 'azure', 'gcp'],
    period='last-30-days',
    min_savings=1000
)

# Get high-impact recommendations
recommendations = analysis_result.get_recommendations(impact='high')
print(f"Found {len(recommendations)} high-impact cost optimization opportunities")

# Generate cost forecast
forecast = await optimizer.generate_forecast(
    months=6,
    include_trends=True,
    scenario='current_growth'
)

# Implement approved recommendations
for rec in recommendations:
    if rec.approved and rec.risk_level == 'low':
        await optimizer.implement_recommendation(rec.id)`}
            </CodeBlock>

            <h2 id="api-reference" className="text-2xl font-bold text-gray-900 mb-4">API Reference</h2>
            <p className="text-gray-700 mb-6">
              Complete API documentation for integrating cost optimization into your applications.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost Analysis Endpoint</h3>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">POST /v1/cost/analyze</h4>
              <p className="text-gray-700 mb-4">Analyze cloud costs and provide optimization recommendations.</p>
              
              <h5 className="font-medium text-gray-900 mb-2">Request Body:</h5>
              <CodeBlock language="json">
{`{
  "providers": ["aws", "azure", "gcp"],
  "accounts": ["account1", "account2"],
  "period": "current-month|last-month|90-days|custom",
  "start_date": "2025-01-01",
  "end_date": "2025-01-31",
  "categories": ["compute", "storage", "network", "database"],
  "min_savings": 500,
  "optimization_goals": {
    "target_reduction": 25,
    "risk_tolerance": "medium"
  }
}`}
              </CodeBlock>

              <h5 className="font-medium text-gray-900 mb-2 mt-4">Response:</h5>
              <CodeBlock language="json">
{`{
  "analysis_id": "cost-analysis-123",
  "status": "completed",
  "summary": {
    "total_cost": 89450.67,
    "potential_savings": 23120.45,
    "savings_percentage": 25.85,
    "optimization_score": 82
  },
  "breakdown": {
    "aws": {
      "current_cost": 45230.12,
      "potential_savings": 12450.30
    },
    "azure": {
      "current_cost": 28940.33,
      "potential_savings": 7820.15
    },
    "gcp": {
      "current_cost": 15280.22,
      "potential_savings": 2850.00
    }
  },
  "recommendations": [
    {
      "id": "rec-001",
      "category": "compute",
      "priority": "high",
      "title": "Right-size EC2 instances",
      "description": "25 EC2 instances are over-provisioned by 40% on average",
      "estimated_savings": 4200.00,
      "implementation_effort": "low",
      "risk_level": "low",
      "affected_resources": 25
    }
  ],
  "forecast": {
    "next_month": 87230.45,
    "next_quarter": 261450.20,
    "confidence_level": 0.89
  }
}`}
              </CodeBlock>
            </div>

            <h2 id="troubleshooting" className="text-2xl font-bold text-gray-900 mb-4">Troubleshooting</h2>
            <p className="text-gray-700 mb-6">
              Common issues and solutions when running cost analysis and optimization.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Common Issues</h3>

            <div className="space-y-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-red-900 mb-2">Billing API Access Denied</h4>
                <p className="text-red-800 mb-3">Error: Unable to access billing data from cloud provider</p>
                <div className="text-red-800">
                  <strong>Solutions:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Verify billing API permissions are enabled</li>
                    <li>Check if MFA is required for billing access</li>
                    <li>Ensure service account has Cost Explorer/Billing permissions</li>
                    <li>Validate API credentials are current</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-yellow-900 mb-2">Incomplete Cost Data</h4>
                <p className="text-yellow-800 mb-3">Missing or delayed cost data affecting analysis accuracy</p>
                <div className="text-yellow-800">
                  <strong>Solutions:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Wait 24-48 hours for complete billing data</li>
                    <li>Use longer analysis periods for more accurate trends</li>
                    <li>Check if linked accounts are properly configured</li>
                    <li>Verify timezone settings match billing periods</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">Optimization Conflicts</h4>
                <p className="text-blue-800 mb-3">Conflicting recommendations or failed optimizations</p>
                <div className="text-blue-800">
                  <strong>Solutions:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Review resource dependencies before optimization</li>
                    <li>Use staging environments to test changes</li>
                    <li>Implement changes gradually with rollback plans</li>
                    <li>Check for resource locks or policies blocking changes</li>
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
                  <h3 className="text-sm font-medium text-green-900">Cost Optimization Documentation Complete!</h3>
                  <p className="mt-1 text-sm text-green-700">
                    You now have comprehensive knowledge to implement AI CostOptimizer in your FinOps workflow. From basic cost analysis to advanced predictive modeling, you're equipped to reduce cloud spending with AI-powered insights and automation.
                  </p>
                </div>
              </div>
            </div>

            <hr className="my-8 border-gray-200" />

            <p className="text-gray-600 text-center">
              <strong>Ready to optimize your cloud costs?</strong> Start your free cost analysis today and discover how AI can reduce your cloud spending by 25% or more.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
