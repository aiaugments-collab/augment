import { Breadcrumb } from "@/components/ui/Breadcrumb"
import { CodeBlock } from "@/components/docs/CodeBlock"
import { FeatureCard } from "@/components/docs/FeatureCard"
import { DocsSidebar } from "@/components/docs/DocsSidebar"

const navigationItems = [
  { title: 'Overview', href: '/docs/ai-cloud-architect#overview' },
  { title: 'Installation', href: '/docs/ai-cloud-architect#installation' },
  { title: 'Quick Start', href: '/docs/ai-cloud-architect#quick-start' },
  { title: 'Configuration', href: '/docs/ai-cloud-architect#configuration' },
  { title: 'Architecture Patterns', href: '/docs/ai-cloud-architect#architecture-patterns' },
  { title: 'Environment Variables', href: '/docs/ai-cloud-architect#environment-variables' },
  { title: 'Basic Usage', href: '/docs/ai-cloud-architect#usage' },
  { title: 'CLI Commands', href: '/docs/ai-cloud-architect#cli-commands' },
  { title: 'Best Practices', href: '/docs/ai-cloud-architect#best-practices' },
  { title: 'Multi-Cloud Support', href: '/docs/ai-cloud-architect#multi-cloud-support' },
  { title: 'Cost Optimization', href: '/docs/ai-cloud-architect#cost-optimization' },
  { title: 'API Integration', href: '/docs/ai-cloud-architect#api-integration' },
  { title: 'API Reference', href: '/docs/ai-cloud-architect#api-reference' },
  { title: 'Troubleshooting', href: '/docs/ai-cloud-architect#troubleshooting' }
]

export default function AICloudArchitectDocsPage() {
  return (
    <>
      <DocsSidebar 
        appName="AI CloudArchitect"
        appLogo="/ai-cloud-architect.svg"
        navigationItems={navigationItems}
      />
      
      <main className="flex-1 min-w-0 max-w-none md:max-w-4xl md:mx-auto px-4 sm:px-6 py-4 sm:py-8 overflow-hidden">
        <div className="docs-content">
          <div className="mb-6">
            <Breadcrumb className="mb-4" />
          </div>

          <div id="overview" className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8">
            <img src="/ai-cloud-architect.svg" alt="AI CloudArchitect" className="w-12 h-12" />
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">AI CloudArchitect</h1>
              <p className="text-base sm:text-lg text-gray-600">Intelligent multi-cloud architecture optimization</p>
            </div>
          </div>

          {/* Key Capabilities Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <FeatureCard
              title="AI-Powered Architecture"
              description="Advanced AI analyzes your infrastructure and provides intelligent recommendations for optimization"
              icon=""
            />
            <FeatureCard
              title="Multi-Cloud Optimization"
              description="Optimize infrastructure across AWS, Azure, GCP, and hybrid environments simultaneously"
              icon=""
            />
            <FeatureCard
              title="Cost Reduction"
              description="Identify cost-saving opportunities and right-size resources automatically"
              icon=""
            />
            <FeatureCard
              title="Performance Tuning"
              description="Boost application performance with AI-driven architecture recommendations"
              icon=""
            />
          </div>

          {/* Architecture Dashboard Mockup */}
          <div className="my-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 border border-gray-200">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-gray-900 px-4 py-2 flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300 text-sm ml-4">AI CloudArchitect Dashboard</span>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6">
                    <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border border-blue-200">
                      <div className="text-xl sm:text-2xl font-bold text-blue-600">87%</div>
                      <div className="text-xs sm:text-sm text-blue-700">Optimization Score</div>
                    </div>
                    <div className="bg-green-50 p-3 sm:p-4 rounded-lg border border-green-200">
                      <div className="text-xl sm:text-2xl font-bold text-green-600">$12.4K</div>
                      <div className="text-xs sm:text-sm text-green-700">Monthly Savings</div>
                    </div>
                    <div className="bg-purple-50 p-3 sm:p-4 rounded-lg border border-purple-200">
                      <div className="text-xl sm:text-2xl font-bold text-purple-600">234</div>
                      <div className="text-xs sm:text-sm text-purple-700">Resources Analyzed</div>
                    </div>
                    <div className="bg-orange-50 p-3 sm:p-4 rounded-lg border border-orange-200">
                      <div className="text-xl sm:text-2xl font-bold text-orange-600">15</div>
                      <div className="text-xs sm:text-sm text-orange-700">Recommendations</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 text-center">
                    AI-driven infrastructure optimization and cost analysis
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-gray max-w-none">
            <h2 id="installation" className="text-2xl font-bold text-gray-900 mb-4">Installation</h2>
            <p className="text-gray-700 mb-6">
              Deploy AI CloudArchitect to start optimizing your multi-cloud infrastructure with intelligent recommendations.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">System Requirements</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Python 3.9 or higher</li>
              <li>Terraform 1.0+ (for infrastructure analysis)</li>
              <li>Docker 20.0+ (for containerized deployments)</li>
              <li>Minimum 8GB RAM (16GB recommended for large infrastructures)</li>
              <li>Network access to cloud provider APIs</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Install via Package Manager</h3>
            <CodeBlock language="bash" title="Installation">
{`# Install via pip
pip install augment-cloud-architect

# Install via conda
conda install -c augment cloud-architect

# Install from source
git clone https://github.com/augment-ai/cloud-architect
cd cloud-architect
pip install -e .

# Verify installation
cloud-architect --version`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Multi-Cloud Authentication</h3>
            <p className="text-gray-700 mb-4">
              Configure access to your cloud providers and Augment API:
            </p>

            <CodeBlock language="bash" title="Authentication Setup">
{`# Set Augment API key
export AUGMENT_API_KEY=your_api_key_here

# Configure AWS credentials
aws configure
# or
export AWS_ACCESS_KEY_ID=your_aws_key
export AWS_SECRET_ACCESS_KEY=your_aws_secret

# Configure Azure CLI
az login

# Configure GCP credentials
gcloud auth application-default login

# Verify multi-cloud access
cloud-architect auth verify --all-providers`}
            </CodeBlock>

            <h2 id="quick-start" className="text-2xl font-bold text-gray-900 mb-4">Quick Start</h2>
            <p className="text-gray-700 mb-6">
              Get intelligent architecture recommendations for your infrastructure in minutes.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Initialize Architecture Profile</h3>
            <CodeBlock language="bash" title="Profile Setup">
{`# Create architecture profile
cloud-architect init --environment production

# Configure analysis scope
cloud-architect config --providers aws,azure,gcp
cloud-architect config --regions us-east-1,us-west-2,eu-west-1

# This creates .cloud-architect.yaml config file`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Run Infrastructure Analysis</h3>
            <CodeBlock language="bash" title="Architecture Analysis">
{`# Analyze entire infrastructure
cloud-architect analyze

# Analyze specific cloud provider
cloud-architect analyze --provider aws

# Focus on cost optimization
cloud-architect analyze --focus cost-optimization

# Quick architecture assessment
cloud-architect analyze --quick`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Generate Architecture Report</h3>
            <CodeBlock language="bash" title="Architecture Reports">
{`# Generate comprehensive architecture report
cloud-architect report --format html --output architecture-report.html

# Export recommendations as JSON
cloud-architect report --format json --output recommendations.json

# Generate executive summary
cloud-architect report --summary --format pdf --output executive-summary.pdf`}
            </CodeBlock>

            <h2 id="configuration" className="text-2xl font-bold text-gray-900 mb-4">Configuration</h2>
            <p className="text-gray-700 mb-6">
              Configure AI CloudArchitect to align with your organization's architecture standards and optimization goals.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Basic Configuration</h3>
            <CodeBlock language="yaml" title=".cloud-architect.yaml">
{`version: "1.0"
organization: "your-company"
environment: "production"

providers:
  aws:
    regions: ["us-east-1", "us-west-2"]
    accounts: ["123456789012"]
  azure:
    regions: ["eastus", "westus2"]
    subscriptions: ["sub-123-456"]
  gcp:
    regions: ["us-central1", "us-west1"]
    projects: ["my-project-123"]

optimization_goals:
  cost_reduction:
    target_percentage: 20
    priority: high
  performance:
    latency_target: "100ms"
    throughput_increase: "50%"
  reliability:
    uptime_target: "99.99%"
    disaster_recovery: true

architecture_patterns:
  - microservices
  - serverless
  - event_driven
  - multi_region`}
            </CodeBlock>

            <h2 id="architecture-patterns" className="text-2xl font-bold text-gray-900 mb-4">Architecture Patterns</h2>
            <p className="text-gray-700 mb-6">
              AI CloudArchitect recognizes and optimizes various architecture patterns for maximum efficiency and performance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">Microservices Architecture</h4>
                <ul className="text-blue-800 space-y-2 text-sm">
                  <li>• Service mesh optimization</li>
                  <li>• Container right-sizing</li>
                  <li>• Load balancer configuration</li>
                  <li>• Inter-service communication optimization</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-green-900 mb-3">Serverless Architecture</h4>
                <ul className="text-green-800 space-y-2 text-sm">
                  <li>• Function memory optimization</li>
                  <li>• Cold start reduction</li>
                  <li>• Event source configuration</li>
                  <li>• Cost-effective trigger patterns</li>
                </ul>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-purple-900 mb-3">Event-Driven Architecture</h4>
                <ul className="text-purple-800 space-y-2 text-sm">
                  <li>• Event streaming optimization</li>
                  <li>• Message queue tuning</li>
                  <li>• Event sourcing patterns</li>
                  <li>• Pub/sub configuration</li>
                </ul>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-orange-900 mb-3">Multi-Region Architecture</h4>
                <ul className="text-orange-800 space-y-2 text-sm">
                  <li>• Global load balancing</li>
                  <li>• Data replication strategies</li>
                  <li>• Disaster recovery planning</li>
                  <li>• Cross-region networking</li>
                </ul>
              </div>
            </div>

            <h2 id="environment-variables" className="text-2xl font-bold text-gray-900 mb-4">Environment Variables</h2>
            <p className="text-gray-700 mb-6">
              Configure AI CloudArchitect behavior using environment variables for different deployment scenarios.
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
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">CLOUD_ARCHITECT_CONFIG</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Path to configuration file</td>
                    <td className="px-6 py-4 text-sm text-gray-500">.cloud-architect.yaml</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">CLOUD_ARCHITECT_PARALLEL</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Number of parallel analysis threads</td>
                    <td className="px-6 py-4 text-sm text-gray-500">4</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="usage" className="text-2xl font-bold text-gray-900 mb-4">Basic Usage</h2>
            <p className="text-gray-700 mb-6">
              Learn the fundamental analysis patterns and optimization workflows for cloud architecture.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Analysis Commands</h3>
            <CodeBlock language="bash" title="Architecture Analysis">
{`# Full multi-cloud analysis
cloud-architect analyze --all-providers

# Cost optimization focus
cloud-architect analyze --focus cost --threshold 15%

# Performance optimization
cloud-architect analyze --focus performance --target-latency 50ms

# Security architecture review
cloud-architect analyze --focus security --compliance soc2`}
            </CodeBlock>

            <h2 id="cli-commands" className="text-2xl font-bold text-gray-900 mb-4">CLI Commands Reference</h2>
            <p className="text-gray-700 mb-6">
              Complete reference for all architecture analysis and optimization commands.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">analyze</h4>
              <p className="text-gray-700 mb-3">Run comprehensive architecture analysis and optimization</p>
              <CodeBlock language="bash">
{`cloud-architect analyze [options]

Options:
  --provider <provider>   Cloud provider (aws|azure|gcp|all)
  --region <region>       Target region for analysis
  --focus <area>          Focus area (cost|performance|security|reliability)
  --threshold <percent>   Minimum improvement threshold
  --output <file>         Output file path
  --format <format>       Output format (json|html|pdf|yaml)
  --recommendations       Include detailed recommendations
  --quick                 Fast analysis mode
  --detailed              Comprehensive analysis mode`}
              </CodeBlock>
            </div>

            <h2 id="best-practices" className="text-2xl font-bold text-gray-900 mb-4">Best Practices</h2>
            <p className="text-gray-700 mb-6">
              Architecture optimization best practices to maximize the value of AI-driven recommendations.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">Architecture Optimization Strategy</h4>
              <ol className="list-decimal list-inside text-blue-800 space-y-2">
                <li>Run comprehensive analysis monthly for production environments</li>
                <li>Implement high-impact, low-risk recommendations first</li>
                <li>Monitor performance after implementing changes</li>
                <li>Use staging environments to validate recommendations</li>
                <li>Establish baseline metrics before optimization</li>
              </ol>
            </div>

            <h2 id="multi-cloud-support" className="text-2xl font-bold text-gray-900 mb-4">Multi-Cloud Support</h2>
            <p className="text-gray-700 mb-6">
              AI CloudArchitect provides comprehensive support for multi-cloud and hybrid cloud architectures.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Cross-Cloud Optimization</h3>
            <CodeBlock language="bash" title="Multi-Cloud Analysis">
{`# Compare costs across cloud providers
cloud-architect compare --metric cost --providers aws,azure,gcp

# Analyze workload placement optimization
cloud-architect optimize --workload web-tier --target-cost 1000

# Generate migration recommendations
cloud-architect migrate --from aws --to azure --workload database

# Multi-cloud disaster recovery planning
cloud-architect dr-plan --primary aws --secondary azure`}
            </CodeBlock>

            <h2 id="cost-optimization" className="text-2xl font-bold text-gray-900 mb-4">Cost Optimization</h2>
            <p className="text-gray-700 mb-6">
              Advanced cost optimization features to reduce cloud spending while maintaining performance.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Cost Analysis Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-green-50 p-3 sm:p-4 rounded-lg border border-green-200">
                <h5 className="font-semibold text-green-900 mb-2">Right-Sizing</h5>
                <p className="text-xs sm:text-sm text-green-800">Optimize instance sizes based on actual usage patterns</p>
              </div>
              <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border border-blue-200">
                <h5 className="font-semibold text-blue-900 mb-2">Reserved Instances</h5>
                <p className="text-xs sm:text-sm text-blue-800">Identify opportunities for reserved capacity savings</p>
              </div>
              <div className="bg-purple-50 p-3 sm:p-4 rounded-lg border border-purple-200">
                <h5 className="font-semibold text-purple-900 mb-2">Spot Instances</h5>
                <p className="text-xs sm:text-sm text-purple-800">Recommend spot instance usage for fault-tolerant workloads</p>
              </div>
            </div>

            <h2 id="api-integration" className="text-2xl font-bold text-gray-900 mb-4">API Integration</h2>
            <p className="text-gray-700 mb-6">
              Integrate AI CloudArchitect into your infrastructure automation and DevOps pipelines.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">REST API</h3>
            <CodeBlock language="bash" title="API Usage">
{`# Trigger architecture analysis via API
curl -X POST https://api.augment.cfd/v1/architecture/analyze \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "providers": ["aws", "azure"],
    "regions": ["us-east-1", "eastus"],
    "focus": "cost_optimization",
    "threshold": 10
  }'`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Python SDK</h3>
            <CodeBlock language="python" title="Python Integration">
{`from augment_cloud_architect import CloudArchitect

# Initialize cloud architect
architect = CloudArchitect(api_key=os.environ['AUGMENT_API_KEY'])

# Run multi-cloud analysis
analysis_result = await architect.analyze_infrastructure(
    providers=['aws', 'azure', 'gcp'],
    focus='cost_optimization',
    threshold=15
)

# Get high-impact recommendations
recommendations = analysis_result.get_recommendations(impact='high')
print(f"Found {len(recommendations)} high-impact optimization opportunities")

# Generate cost savings report
savings_report = await architect.generate_savings_report(
    format='pdf',
    include_timeline=True
)`}
            </CodeBlock>

            <h2 id="api-reference" className="text-2xl font-bold text-gray-900 mb-4">API Reference</h2>
            <p className="text-gray-700 mb-6">
              Complete API documentation for integrating architecture analysis into your applications.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Architecture Analysis Endpoint</h3>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">POST /v1/architecture/analyze</h4>
              <p className="text-gray-700 mb-4">Analyze cloud infrastructure and provide optimization recommendations.</p>
              
              <h5 className="font-medium text-gray-900 mb-2">Request Body:</h5>
              <CodeBlock language="json">
{`{
  "providers": ["aws", "azure", "gcp"],
  "regions": ["us-east-1", "eastus", "us-central1"],
  "focus": "cost_optimization|performance|security|reliability",
  "threshold": 10,
  "architecture_patterns": ["microservices", "serverless"],
  "optimization_goals": {
    "cost_reduction": 20,
    "performance_improvement": 30
  }
}`}
              </CodeBlock>

              <h5 className="font-medium text-gray-900 mb-2 mt-4">Response:</h5>
              <CodeBlock language="json">
{`{
  "analysis_id": "arch-analysis-123",
  "status": "completed",
  "summary": {
    "total_resources": 234,
    "optimization_score": 87,
    "potential_monthly_savings": 12400,
    "performance_improvement": 45
  },
  "recommendations": [
    {
      "id": "rec-001",
      "category": "cost_optimization",
      "priority": "high",
      "title": "Right-size EC2 instances",
      "description": "15 EC2 instances are over-provisioned",
      "estimated_savings": 3200,
      "implementation_effort": "low",
      "impact": "high",
      "resources": ["i-123456", "i-789012"]
    }
  ],
  "cost_analysis": {
    "current_monthly_cost": 45600,
    "optimized_monthly_cost": 33200,
    "savings_percentage": 27.2
  }
}`}
              </CodeBlock>
            </div>

            <h2 id="troubleshooting" className="text-2xl font-bold text-gray-900 mb-4">Troubleshooting</h2>
            <p className="text-gray-700 mb-6">
              Common issues and solutions when running architecture analysis and optimization.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Common Issues</h3>

            <div className="space-y-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-red-900 mb-2">API Rate Limits</h4>
                <p className="text-red-800 mb-3">Error: Cloud provider API rate limits exceeded</p>
                <div className="text-red-800">
                  <strong>Solutions:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Reduce analysis parallelism with --parallel flag</li>
                    <li>Implement exponential backoff in automation</li>
                    <li>Use provider-specific rate limit configurations</li>
                    <li>Schedule analysis during off-peak hours</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-yellow-900 mb-2">Large Infrastructure Analysis</h4>
                <p className="text-yellow-800 mb-3">Analysis taking too long on large infrastructures</p>
                <div className="text-yellow-800">
                  <strong>Solutions:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Use regional analysis to break down scope</li>
                    <li>Filter by resource types or tags</li>
                    <li>Use quick analysis mode for initial assessment</li>
                    <li>Increase memory allocation for analysis process</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">Inconsistent Recommendations</h4>
                <p className="text-blue-800 mb-3">Recommendations vary between analysis runs</p>
                <div className="text-blue-800">
                  <strong>Solutions:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Use consistent time windows for usage analysis</li>
                    <li>Account for workload seasonality patterns</li>
                    <li>Set stable baseline metrics</li>
                    <li>Use deterministic analysis modes</li>
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
                  <h3 className="text-sm font-medium text-green-900">Architecture Documentation Complete!</h3>
                  <p className="mt-1 text-sm text-green-700">
                    You now have comprehensive knowledge to implement AI CloudArchitect in your multi-cloud environment. From basic infrastructure analysis to advanced cost optimization, you're equipped to transform your cloud architecture with AI-powered insights.
                  </p>
                </div>
              </div>
            </div>

            <hr className="my-8 border-gray-200" />

            <p className="text-gray-600 text-center">
              <strong>Ready to optimize your cloud architecture?</strong> Start your free analysis today and discover how AI can reduce costs and improve performance across your multi-cloud infrastructure.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
