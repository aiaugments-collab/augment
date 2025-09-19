import { Breadcrumb } from "@/components/ui/Breadcrumb"
import { CodeBlock } from "@/components/docs/CodeBlock"
import { FeatureCard } from "@/components/docs/FeatureCard"
import { DocsSidebar } from "@/components/docs/DocsSidebar"

const navigationItems = [
  { title: 'Overview', href: '/docs/ai-security-auditor#overview' },
  { title: 'Installation', href: '/docs/ai-security-auditor#installation' },
  { title: 'Quick Start', href: '/docs/ai-security-auditor#quick-start' },
  { title: 'Configuration', href: '/docs/ai-security-auditor#configuration' },
  { title: 'Security Policies', href: '/docs/ai-security-auditor#security-policies' },
  { title: 'Environment Variables', href: '/docs/ai-security-auditor#environment-variables' },
  { title: 'Basic Usage', href: '/docs/ai-security-auditor#usage' },
  { title: 'CLI Commands', href: '/docs/ai-security-auditor#cli-commands' },
  { title: 'Best Practices', href: '/docs/ai-security-auditor#best-practices' },
  { title: 'CI/CD Integration', href: '/docs/ai-security-auditor#integration' },
  { title: 'Compliance Reports', href: '/docs/ai-security-auditor#compliance-reports' },
  { title: 'API Integration', href: '/docs/ai-security-auditor#api-integration' },
  { title: 'API Reference', href: '/docs/ai-security-auditor#api-reference' },
  { title: 'Troubleshooting', href: '/docs/ai-security-auditor#troubleshooting' }
]

export default function AISecurityAuditorDocsPage() {
  return (
    <>
      <DocsSidebar 
        appName="AI SecurityAuditor"
        appLogo="/ai-security-auditor.svg"
        navigationItems={navigationItems}
      />
      
      <main className="flex-1 min-w-0 max-w-none md:max-w-4xl md:mx-auto px-4 sm:px-6 py-4 sm:py-8 overflow-hidden">
        <div className="docs-content">
          <div className="mb-6">
            <Breadcrumb className="mb-4" />
          </div>

          <div id="overview" className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8">
            <img src="/ai-security-auditor.svg" alt="AI SecurityAuditor" className="w-12 h-12" />
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">AI SecurityAuditor</h1>
              <p className="text-base sm:text-lg text-gray-600">AI-powered comprehensive security analysis</p>
            </div>
          </div>

          {/* Key Capabilities Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <FeatureCard
              title="AI Threat Detection"
              description="Advanced AI models detect vulnerabilities, misconfigurations, and security threats across your infrastructure"
              icon=""
            />
            <FeatureCard
              title="Risk Scoring"
              description="Intelligent risk assessment with prioritized remediation guidance based on threat impact"
              icon=""
            />
            <FeatureCard
              title="Multi-Cloud Security"
              description="Comprehensive security analysis across AWS, Azure, GCP, and hybrid environments"
              icon=""
            />
            <FeatureCard
              title="Compliance Ready"
              description="Built-in compliance checks for SOC2, ISO27001, GDPR, HIPAA, and more standards"
              icon=""
            />
          </div>

          {/* Security Dashboard Mockup */}
          <div className="my-8">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-gray-200">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-gray-900 px-4 py-2 flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300 text-sm ml-4">AI SecurityAuditor Dashboard</span>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6">
                    <div className="bg-red-50 p-3 sm:p-4 rounded-lg border border-red-200">
                      <div className="text-xl sm:text-2xl font-bold text-red-600">7</div>
                      <div className="text-xs sm:text-sm text-red-700">Critical Risks</div>
                    </div>
                    <div className="bg-orange-50 p-3 sm:p-4 rounded-lg border border-orange-200">
                      <div className="text-xl sm:text-2xl font-bold text-orange-600">23</div>
                      <div className="text-xs sm:text-sm text-orange-700">High Risks</div>
                    </div>
                    <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border border-blue-200">
                      <div className="text-xl sm:text-2xl font-bold text-blue-600">456</div>
                      <div className="text-xs sm:text-sm text-blue-700">Assets Scanned</div>
                    </div>
                    <div className="bg-green-50 p-3 sm:p-4 rounded-lg border border-green-200">
                      <div className="text-xl sm:text-2xl font-bold text-green-600">94%</div>
                      <div className="text-xs sm:text-sm text-green-700">Compliance Score</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 text-center">
                    Real-time AI security analysis and threat detection
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-gray max-w-none">
            <h2 id="installation" className="text-2xl font-bold text-gray-900 mb-4">Installation</h2>
            <p className="text-gray-700 mb-6">
              Deploy AI SecurityAuditor in your environment quickly and start identifying security risks across your infrastructure.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">System Requirements</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Python 3.8 or higher</li>
              <li>Docker 20.0+ (for container scanning)</li>
              <li>Terraform 1.0+ (for infrastructure scanning)</li>
              <li>Minimum 8GB RAM (16GB recommended)</li>
              <li>Network access to cloud providers and target systems</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Install via Package Manager</h3>
            <CodeBlock language="bash" title="Installation">
{`# Install via pip
pip install augment-security-auditor

# Install via conda
conda install -c augment security-auditor

# Install from source
git clone https://github.com/augment-ai/security-auditor
cd security-auditor
pip install -e .

# Verify installation
security-auditor --version`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Authentication</h3>
            <p className="text-gray-700 mb-4">
              Configure your cloud provider credentials and Augment API key:
            </p>

            <CodeBlock language="bash" title="Authentication Setup">
{`# Set Augment API key
export AUGMENT_API_KEY=your_api_key_here

# Configure AWS credentials
aws configure

# Configure Azure CLI
az login

# Configure GCP credentials
gcloud auth application-default login

# Verify authentication
security-auditor auth verify`}
            </CodeBlock>

            <h2 id="quick-start" className="text-2xl font-bold text-gray-900 mb-4">Quick Start</h2>
            <p className="text-gray-700 mb-6">
              Run your first security audit in minutes and identify critical vulnerabilities across your infrastructure.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Initialize Security Profile</h3>
            <CodeBlock language="bash" title="Profile Setup">
{`# Create security profile for your organization
security-auditor init --profile production

# Configure scanning scope
security-auditor config --scope aws,azure,gcp
security-auditor config --compliance soc2,iso27001

# This creates .security-auditor.yaml config file`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Run Infrastructure Scan</h3>
            <CodeBlock language="bash" title="Infrastructure Audit">
{`# Scan all cloud resources
security-auditor scan --type infrastructure

# Scan specific cloud provider
security-auditor scan --provider aws --region us-east-1

# Quick security assessment
security-auditor scan --quick --critical-only`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Generate Security Report</h3>
            <CodeBlock language="bash" title="Security Reports">
{`# Generate comprehensive security report
security-auditor report --format html --output security-report.html

# Export findings as JSON
security-auditor report --format json --output findings.json

# Generate compliance report
security-auditor report --compliance soc2 --output compliance-report.pdf`}
            </CodeBlock>

            <h2 id="configuration" className="text-2xl font-bold text-gray-900 mb-4">Configuration</h2>
            <p className="text-gray-700 mb-6">
              Configure AI SecurityAuditor to match your organization's security policies and compliance requirements.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Basic Configuration</h3>
            <CodeBlock language="yaml" title=".security-auditor.yaml">
{`version: "1.0"
organization: "your-company"
environment: "production"

scanning:
  providers:
    - aws
    - azure
    - gcp
  regions:
    - us-east-1
    - us-west-2
    - eu-west-1
  
compliance:
  standards:
    - soc2
    - iso27001
    - gdpr
  
security_policies:
  encryption:
    enforce: true
    algorithms: ["AES-256", "RSA-2048"]
  access_control:
    mfa_required: true
    privileged_access_review: true
  network:
    public_access_restricted: true
    security_groups_strict: true`}
            </CodeBlock>

            <h2 id="security-policies" className="text-2xl font-bold text-gray-900 mb-4">Security Policies</h2>
            <p className="text-gray-700 mb-6">
              Define custom security policies and rules that align with your organization's security requirements.
            </p>

            <CodeBlock language="yaml" title="Custom Security Policies">
{`policies:
  - name: "Critical Asset Protection"
    description: "Ensure critical assets have proper protection"
    rules:
      - resource_type: "database"
        encryption: "required"
        backup: "daily"
        monitoring: "enabled"
      
  - name: "Network Security"
    description: "Network security best practices"
    rules:
      - resource_type: "load_balancer"
        ssl_termination: "required"
        security_headers: "enabled"
      
  - name: "Identity and Access"
    description: "IAM security requirements"
    rules:
      - resource_type: "user"
        mfa: "required"
        password_policy: "strict"
        inactive_days_max: 90`}
            </CodeBlock>

            <h2 id="environment-variables" className="text-2xl font-bold text-gray-900 mb-4">Environment Variables</h2>
            <p className="text-gray-700 mb-6">
              Configure AI SecurityAuditor behavior using environment variables for different deployment scenarios.
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
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">SECURITY_AUDITOR_CONFIG</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Path to configuration file</td>
                    <td className="px-6 py-4 text-sm text-gray-500">.security-auditor.yaml</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">SECURITY_AUDITOR_LOG_LEVEL</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Logging level (debug/info/warn/error)</td>
                    <td className="px-6 py-4 text-sm text-gray-500">info</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="usage" className="text-2xl font-bold text-gray-900 mb-4">Basic Usage</h2>
            <p className="text-gray-700 mb-6">
              Learn the fundamental scanning patterns and security assessment workflows.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Scanning Commands</h3>
            <CodeBlock language="bash" title="Security Scanning">
{`# Full infrastructure scan
security-auditor scan --type infrastructure

# Application security scan
security-auditor scan --type application --path ./src

# Container security scan
security-auditor scan --type container --image nginx:latest

# Network security assessment
security-auditor scan --type network --target 10.0.0.0/8`}
            </CodeBlock>

            <h2 id="cli-commands" className="text-2xl font-bold text-gray-900 mb-4">CLI Commands Reference</h2>
            <p className="text-gray-700 mb-6">
              Complete reference for all security auditing commands and options.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">scan</h4>
              <p className="text-gray-700 mb-3">Run security analysis on infrastructure, applications, or containers</p>
              <CodeBlock language="bash">
{`security-auditor scan [options]

Options:
  --type <type>           Scan type (infrastructure|application|container|network)
  --provider <provider>   Cloud provider (aws|azure|gcp)
  --region <region>       Target region for scanning
  --output <file>         Output file path
  --format <format>       Output format (json|html|csv|pdf)
  --compliance <std>      Compliance standard to check against
  --severity <levels>     Severity levels to report
  --critical-only         Show only critical findings
  --remediation           Include remediation suggestions`}
              </CodeBlock>
            </div>

            <h2 id="best-practices" className="text-2xl font-bold text-gray-900 mb-4">Best Practices</h2>
            <p className="text-gray-700 mb-6">
              Security scanning best practices to maximize threat detection and minimize false positives.
            </p>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-red-900 mb-3">Security Scanning Strategy</h4>
              <ol className="list-decimal list-inside text-red-800 space-y-2">
                <li>Schedule daily automated scans for critical infrastructure</li>
                <li>Run immediate scans after infrastructure changes</li>
                <li>Focus on high and critical severity findings first</li>
                <li>Implement security policies as code</li>
                <li>Track remediation progress with compliance reports</li>
              </ol>
            </div>

            <h2 id="integration" className="text-2xl font-bold text-gray-900 mb-4">CI/CD Integration</h2>
            <p className="text-gray-700 mb-6">
              Integrate security scanning into your DevOps pipeline for continuous security assessment.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">GitHub Actions</h3>
            <CodeBlock language="yaml" title=".github/workflows/security-audit.yml">
{`name: Security Audit

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]
  schedule:
    - cron: '0 2 * * *'  # Daily at 2 AM

jobs:
  security-audit:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Setup Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.9'
      
      - name: Install Security Auditor
        run: pip install augment-security-auditor
      
      - name: Run Security Scan
        env:
          AUGMENT_API_KEY: \${{ secrets.AUGMENT_API_KEY }}
          AWS_ACCESS_KEY_ID: \${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: \${{ secrets.AWS_SECRET_ACCESS_KEY }}
        run: |
          security-auditor scan --type infrastructure --critical-only
          security-auditor scan --type application --path .
      
      - name: Upload Security Report
        uses: actions/upload-artifact@v3
        with:
          name: security-report
          path: security-report.html`}
            </CodeBlock>

            <h2 id="compliance-reports" className="text-2xl font-bold text-gray-900 mb-4">Compliance Reports</h2>
            <p className="text-gray-700 mb-6">
              Generate comprehensive compliance reports for various security standards and regulations.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Supported Standards</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 text-center">
                <div className="font-semibold text-blue-900">SOC 2</div>
                <div className="text-xs sm:text-sm text-blue-700">Type I & II</div>
              </div>
              <div className="bg-green-50 p-3 rounded-lg border border-green-200 text-center">
                <div className="font-semibold text-green-900">ISO 27001</div>
                <div className="text-xs sm:text-sm text-green-700">Full Controls</div>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg border border-purple-200 text-center">
                <div className="font-semibold text-purple-900">GDPR</div>
                <div className="text-xs sm:text-sm text-purple-700">Privacy Controls</div>
              </div>
              <div className="bg-red-50 p-3 rounded-lg border border-red-200 text-center">
                <div className="font-semibold text-red-900">HIPAA</div>
                <div className="text-xs sm:text-sm text-red-700">Healthcare Security</div>
              </div>
              <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200 text-center">
                <div className="font-semibold text-yellow-900">PCI DSS</div>
                <div className="text-xs sm:text-sm text-yellow-700">Payment Security</div>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-center">
                <div className="font-semibold text-gray-900">NIST</div>
                <div className="text-xs sm:text-sm text-gray-700">Cybersecurity Framework</div>
              </div>
            </div>

            <h2 id="api-integration" className="text-2xl font-bold text-gray-900 mb-4">API Integration</h2>
            <p className="text-gray-700 mb-6">
              Integrate AI SecurityAuditor into your security operations center (SOC) and monitoring systems.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">REST API</h3>
            <CodeBlock language="bash" title="API Usage">
{`# Trigger security scan via API
curl -X POST https://api.augment.cfd/v1/security/scan \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "scan_type": "infrastructure",
    "target": {
      "provider": "aws",
      "region": "us-east-1"
    },
    "options": {
      "compliance": ["soc2", "iso27001"],
      "severity": "high"
    }
  }'`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Python SDK</h3>
            <CodeBlock language="python" title="Python Integration">
{`from augment_security import SecurityAuditor

# Initialize security auditor
auditor = SecurityAuditor(api_key=os.environ['AUGMENT_API_KEY'])

# Run infrastructure scan
scan_result = await auditor.scan_infrastructure(
    provider='aws',
    region='us-east-1',
    compliance=['soc2', 'iso27001']
)

# Get critical findings
critical_findings = scan_result.get_findings(severity='critical')
print(f"Found {len(critical_findings)} critical security issues")

# Generate compliance report
compliance_report = await auditor.generate_compliance_report(
    standard='soc2',
    format='pdf'
)`}
            </CodeBlock>

            <h2 id="api-reference" className="text-2xl font-bold text-gray-900 mb-4">API Reference</h2>
            <p className="text-gray-700 mb-6">
              Complete API documentation for integrating security scanning into your applications and workflows.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Security Scan Endpoint</h3>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">POST /v1/security/scan</h4>
              <p className="text-gray-700 mb-4">Initiate a comprehensive security scan of your infrastructure.</p>
              
              <h5 className="font-medium text-gray-900 mb-2">Request Body:</h5>
              <CodeBlock language="json">
{`{
  "scan_type": "infrastructure|application|container|network",
  "target": {
    "provider": "aws|azure|gcp",
    "region": "us-east-1",
    "resource_ids": ["resource-123", "resource-456"]
  },
  "options": {
    "compliance": ["soc2", "iso27001", "gdpr"],
    "severity": "low|medium|high|critical",
    "policies": ["custom-policy-1", "custom-policy-2"]
  }
}`}
              </CodeBlock>

              <h5 className="font-medium text-gray-900 mb-2 mt-4">Response:</h5>
              <CodeBlock language="json">
{`{
  "scan_id": "scan-789",
  "status": "completed",
  "summary": {
    "total_resources": 156,
    "total_findings": 23,
    "critical_findings": 3,
    "high_findings": 8,
    "medium_findings": 12
  },
  "compliance_score": {
    "soc2": 94.5,
    "iso27001": 91.2
  },
  "findings": [
    {
      "id": "finding-001",
      "severity": "critical",
      "category": "access_control",
      "resource_id": "sg-123456",
      "title": "Security group allows unrestricted access",
      "description": "Security group allows inbound traffic from 0.0.0.0/0",
      "remediation": "Restrict security group rules to specific IP ranges",
      "compliance_impact": ["soc2:CC6.1", "iso27001:A.13.1.3"]
    }
  ]
}`}
              </CodeBlock>
            </div>

            <h2 id="troubleshooting" className="text-2xl font-bold text-gray-900 mb-4">Troubleshooting</h2>
            <p className="text-gray-700 mb-6">
              Common issues and solutions when running security audits.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Common Issues</h3>

            <div className="space-y-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-red-900 mb-2">Permission Denied</h4>
                <p className="text-red-800 mb-3">Error: Insufficient permissions to scan cloud resources</p>
                <div className="text-red-800">
                  <strong>Solutions:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Verify cloud provider credentials are configured correctly</li>
                    <li>Ensure IAM roles have necessary read permissions</li>
                    <li>Check if MFA is required for your account</li>
                    <li>Review and update service account permissions</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-yellow-900 mb-2">Scan Timeout</h4>
                <p className="text-yellow-800 mb-3">Security scan taking too long or timing out</p>
                <div className="text-yellow-800">
                  <strong>Solutions:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Reduce scan scope by targeting specific regions</li>
                    <li>Use resource filters to limit scan scope</li>
                    <li>Increase timeout values in configuration</li>
                    <li>Run scans in smaller batches</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">False Positives</h4>
                <p className="text-blue-800 mb-3">Too many false positive security findings</p>
                <div className="text-blue-800">
                  <strong>Solutions:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Configure custom security policies</li>
                    <li>Use exemption rules for known safe configurations</li>
                    <li>Adjust severity thresholds</li>
                    <li>Provide context through resource tagging</li>
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
                  <h3 className="text-sm font-medium text-green-900">Security Documentation Complete!</h3>
                  <p className="mt-1 text-sm text-green-700">
                    You now have comprehensive knowledge to implement AI SecurityAuditor in your environment. From basic scanning to advanced compliance reporting, you're equipped to strengthen your organization's security posture with AI-powered threat detection.
                  </p>
                </div>
              </div>
            </div>

            <hr className="my-8 border-gray-200" />

            <p className="text-gray-600 text-center">
              <strong>Ready to enhance your security posture?</strong> Start your free security assessment today and discover vulnerabilities before attackers do.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
