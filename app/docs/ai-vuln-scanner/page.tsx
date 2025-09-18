import { Breadcrumb } from "@/components/ui/Breadcrumb"
import { CodeBlock } from "@/components/docs/CodeBlock"
import { FeatureCard } from "@/components/docs/FeatureCard"
import { DocsSidebar } from "@/components/docs/DocsSidebar"

const navigationItems = [
  { title: 'Overview', href: '/docs/ai-vuln-scanner#overview' },
  { title: 'Installation', href: '/docs/ai-vuln-scanner#installation' },
  { title: 'Quick Start', href: '/docs/ai-vuln-scanner#quick-start' },
  { title: 'Configuration', href: '/docs/ai-vuln-scanner#configuration' },
  { title: 'Threat Intelligence', href: '/docs/ai-vuln-scanner#threat-intelligence' },
  { title: 'Environment Variables', href: '/docs/ai-vuln-scanner#environment-variables' },
  { title: 'Basic Usage', href: '/docs/ai-vuln-scanner#usage' },
  { title: 'CLI Commands', href: '/docs/ai-vuln-scanner#cli-commands' },
  { title: 'Best Practices', href: '/docs/ai-vuln-scanner#best-practices' },
  { title: 'Attack Vector Analysis', href: '/docs/ai-vuln-scanner#attack-vectors' },
  { title: 'Remediation Strategies', href: '/docs/ai-vuln-scanner#remediation' },
  { title: 'API Integration', href: '/docs/ai-vuln-scanner#api-integration' },
  { title: 'API Reference', href: '/docs/ai-vuln-scanner#api-reference' },
  { title: 'Troubleshooting', href: '/docs/ai-vuln-scanner#troubleshooting' }
]

export default function AIVulnScannerDocsPage() {
  return (
    <>
      <DocsSidebar 
        appName="AI VulnScan"
        appLogo="/vuln-scan.svg"
        navigationItems={navigationItems}
      />
      
      <main className="flex-1 max-w-4xl mx-auto px-6 py-8">
        <div className="docs-content">
          <div className="mb-6">
            <Breadcrumb className="mb-4" />
          </div>

          <div id="overview" className="flex items-center space-x-4 mb-8">
            <img src="/vuln-scan.svg" alt="AI VulnScan" className="w-12 h-12" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">AI VulnScan</h1>
              <p className="text-lg text-gray-600">Intelligent vulnerability scanning with threat prediction</p>
            </div>
          </div>

          {/* Key Capabilities Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <FeatureCard
              title="AI-Enhanced Scanning"
              description="Advanced vulnerability detection using machine learning and threat intelligence"
              icon=""
            />
            <FeatureCard
              title="Threat Vector Prediction"
              description="Predict potential attack vectors and prioritize vulnerabilities by exploitability"
              icon=""
            />
            <FeatureCard
              title="Zero-Day Detection"
              description="Identify potential zero-day vulnerabilities using behavioral analysis"
              icon=""
            />
            <FeatureCard
              title="Automated Remediation"
              description="Get actionable remediation steps with automated patch suggestions"
              icon=""
            />
          </div>

          {/* Vulnerability Dashboard Mockup */}
          <div className="my-8">
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 border border-gray-200">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-gray-900 px-4 py-2 flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300 text-sm ml-4">AI VulnScan Dashboard</span>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <div className="text-2xl font-bold text-red-600">12</div>
                      <div className="text-sm text-red-700">Critical Vulns</div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                      <div className="text-2xl font-bold text-orange-600">34</div>
                      <div className="text-sm text-orange-700">High Risk</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <div className="text-2xl font-bold text-blue-600">1,247</div>
                      <div className="text-sm text-blue-700">Assets Scanned</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <div className="text-2xl font-bold text-green-600">89%</div>
                      <div className="text-sm text-green-700">Remediation Rate</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 text-center">
                    AI-powered vulnerability detection and threat prediction
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-gray max-w-none">
            <h2 id="installation" className="text-2xl font-bold text-gray-900 mb-4">Installation</h2>
            <p className="text-gray-700 mb-6">
              Deploy AI VulnScan to start identifying vulnerabilities and predicting attack vectors across your infrastructure.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">System Requirements</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Python 3.9 or higher</li>
              <li>Docker 20.0+ (for containerized scanning)</li>
              <li>Nmap 7.8+ (for network scanning)</li>
              <li>Minimum 8GB RAM (16GB recommended for large networks)</li>
              <li>Network access to target systems and threat intelligence feeds</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Install via Package Manager</h3>
            <CodeBlock language="bash" title="Installation">
{`# Install via pip
pip install augment-vuln-scanner

# Install via Docker
docker pull augment/vuln-scanner:latest

# Install from source
git clone https://github.com/augment-ai/vuln-scanner
cd vuln-scanner
pip install -e .

# Install additional scanning tools
sudo apt-get install nmap nikto sqlmap

# Verify installation
vuln-scanner --version`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Authentication and Setup</h3>
            <p className="text-gray-700 mb-4">
              Configure API access and threat intelligence feeds:
            </p>

            <CodeBlock language="bash" title="Setup">
{`# Set Augment API key
export AUGMENT_API_KEY=your_api_key_here

# Configure threat intelligence feeds
vuln-scanner config --threat-feeds nvd,mitre,cve

# Set up vulnerability databases
vuln-scanner update --databases all

# Verify setup
vuln-scanner health-check`}
            </CodeBlock>

            <h2 id="quick-start" className="text-2xl font-bold text-gray-900 mb-4">Quick Start</h2>
            <p className="text-gray-700 mb-6">
              Run your first vulnerability scan and get AI-powered threat predictions in minutes.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Initialize Scan Profile</h3>
            <CodeBlock language="bash" title="Profile Setup">
{`# Create scanning profile
vuln-scanner init --profile production-scan

# Configure scan targets
vuln-scanner config --targets 192.168.1.0/24,10.0.0.0/16
vuln-scanner config --web-apps https://app.company.com

# Set scan intensity
vuln-scanner config --intensity comprehensive
vuln-scanner config --stealth-mode false

# This creates .vuln-scanner.yaml config file`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Run Vulnerability Scan</h3>
            <CodeBlock language="bash" title="Vulnerability Scanning">
{`# Full network and application scan
vuln-scanner scan --type full

# Quick vulnerability assessment
vuln-scanner scan --type quick --critical-only

# Web application specific scan
vuln-scanner scan --type web-app --target https://app.company.com

# Infrastructure scan with threat prediction
vuln-scanner scan --type infrastructure --predict-threats`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Generate Security Reports</h3>
            <CodeBlock language="bash" title="Security Reports">
{`# Generate comprehensive vulnerability report
vuln-scanner report --format html --output vuln-report.html

# Export findings for SIEM integration
vuln-scanner report --format json --output findings.json

# Generate executive summary
vuln-scanner report --executive --format pdf --output executive-summary.pdf

# Create remediation playbook
vuln-scanner remediation --output remediation-plan.md`}
            </CodeBlock>

            <h2 id="configuration" className="text-2xl font-bold text-gray-900 mb-4">Configuration</h2>
            <p className="text-gray-700 mb-6">
              Configure AI VulnScan to match your security assessment requirements and threat landscape.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Basic Configuration</h3>
            <CodeBlock language="yaml" title=".vuln-scanner.yaml">
{`version: "1.0"
organization: "your-company"
environment: "production"

scan_targets:
  networks:
    - "192.168.1.0/24"
    - "10.0.0.0/16"
  web_applications:
    - "https://app.company.com"
    - "https://api.company.com"
  cloud_assets:
    - provider: "aws"
      regions: ["us-east-1", "us-west-2"]

scan_settings:
  intensity: "comprehensive"
  stealth_mode: false
  max_concurrent: 10
  timeout: 3600
  exclude_ports: [22, 3389]

ai_settings:
  threat_prediction: true
  attack_vector_analysis: true
  zero_day_detection: true
  confidence_threshold: 0.8

vulnerability_databases:
  - nvd
  - mitre
  - exploit-db
  - custom_feeds

reporting:
  auto_generate: true
  formats: ["html", "json", "pdf"]
  remediation_priority: "exploitability"`}
            </CodeBlock>

            <h2 id="threat-intelligence" className="text-2xl font-bold text-gray-900 mb-4">Threat Intelligence</h2>
            <p className="text-gray-700 mb-6">
              AI VulnScan integrates with multiple threat intelligence feeds to provide context-aware vulnerability assessment.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-red-900 mb-3">Active Threat Feeds</h4>
                <ul className="text-red-800 space-y-2 text-sm">
                  <li>• National Vulnerability Database (NVD)</li>
                  <li>• MITRE ATT&CK Framework</li>
                  <li>• Exploit Database</li>
                  <li>• CVE Details</li>
                  <li>• Custom threat feeds</li>
                </ul>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-orange-900 mb-3">Threat Correlation</h4>
                <ul className="text-orange-800 space-y-2 text-sm">
                  <li>• Real-time exploit availability</li>
                  <li>• Attack campaign tracking</li>
                  <li>• Weaponization timeline</li>
                  <li>• Threat actor attribution</li>
                  <li>• Geopolitical context</li>
                </ul>
              </div>
            </div>

            <h2 id="environment-variables" className="text-2xl font-bold text-gray-900 mb-4">Environment Variables</h2>
            <p className="text-gray-700 mb-6">
              Configure AI VulnScan behavior using environment variables for different scanning scenarios.
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
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">VULN_SCANNER_CONFIG</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Path to configuration file</td>
                    <td className="px-6 py-4 text-sm text-gray-500">.vuln-scanner.yaml</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">VULN_SCANNER_DB_PATH</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Vulnerability database location</td>
                    <td className="px-6 py-4 text-sm text-gray-500">./vuln_db</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">VULN_SCANNER_THREADS</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Maximum concurrent scan threads</td>
                    <td className="px-6 py-4 text-sm text-gray-500">10</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="usage" className="text-2xl font-bold text-gray-900 mb-4">Basic Usage</h2>
            <p className="text-gray-700 mb-6">
              Learn the fundamental vulnerability scanning patterns and threat analysis workflows.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Scanning Commands</h3>
            <CodeBlock language="bash" title="Vulnerability Scanning">
{`# Network vulnerability scan
vuln-scanner scan --type network --target 192.168.1.0/24

# Web application security testing
vuln-scanner scan --type web --target https://app.example.com

# Database vulnerability assessment
vuln-scanner scan --type database --host db.example.com --port 5432

# Container image scanning
vuln-scanner scan --type container --image nginx:latest`}
            </CodeBlock>

            <h2 id="cli-commands" className="text-2xl font-bold text-gray-900 mb-4">CLI Commands Reference</h2>
            <p className="text-gray-700 mb-6">
              Complete reference for all vulnerability scanning and analysis commands.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">scan</h4>
              <p className="text-gray-700 mb-3">Run comprehensive vulnerability scans with AI-powered threat analysis</p>
              <CodeBlock language="bash">
{`vuln-scanner scan [options]

Options:
  --type <type>            Scan type (network|web|database|container|cloud)
  --target <target>        Target specification (IP, URL, hostname)
  --intensity <level>      Scan intensity (quick|normal|comprehensive|stealth)
  --output <file>          Output file path
  --format <format>        Output format (json|html|xml|csv)
  --predict-threats        Enable AI threat prediction
  --exclude <patterns>     Exclude patterns or hosts
  --include <patterns>     Include only specified patterns
  --timeout <seconds>      Scan timeout per target
  --threads <number>       Number of concurrent threads`}
              </CodeBlock>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">analyze</h4>
              <p className="text-gray-700 mb-3">Analyze scan results and predict attack vectors</p>
              <CodeBlock language="bash">
{`vuln-scanner analyze [options]

Options:
  --scan-results <file>    Scan results file to analyze
  --threat-model <model>   Threat modeling approach
  --attack-vectors         Generate attack vector analysis
  --remediation-plan       Create prioritized remediation plan
  --risk-assessment        Calculate risk scores
  --exploit-prediction     Predict exploit likelihood`}
              </CodeBlock>
            </div>

            <h2 id="best-practices" className="text-2xl font-bold text-gray-900 mb-4">Best Practices</h2>
            <p className="text-gray-700 mb-6">
              Vulnerability scanning best practices to maximize detection accuracy and minimize false positives.
            </p>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-red-900 mb-3">Vulnerability Scanning Strategy</h4>
              <ol className="list-decimal list-inside text-red-800 space-y-2">
                <li>Schedule regular automated scans for continuous monitoring</li>
                <li>Use stealth mode in production environments to avoid detection</li>
                <li>Prioritize vulnerabilities by exploitability and business impact</li>
                <li>Correlate findings with threat intelligence for context</li>
                <li>Validate findings manually to reduce false positives</li>
                <li>Track remediation progress and re-scan after fixes</li>
              </ol>
            </div>

            <h2 id="attack-vectors" className="text-2xl font-bold text-gray-900 mb-4">Attack Vector Analysis</h2>
            <p className="text-gray-700 mb-6">
              AI VulnScan provides advanced attack vector analysis to understand how vulnerabilities can be chained together.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Attack Chain Prediction</h3>
            <CodeBlock language="bash" title="Attack Vector Analysis">
{`# Generate attack chains for critical vulnerabilities
vuln-scanner attack-chains --severity critical --target-asset web-server

# Analyze lateral movement possibilities
vuln-scanner lateral-movement --start-point dmz --target internal-network

# Privilege escalation analysis
vuln-scanner privilege-escalation --user-context low-privilege

# Data exfiltration path analysis
vuln-scanner exfiltration-paths --data-classification sensitive`}
            </CodeBlock>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h5 className="font-semibold text-red-900 mb-2">Initial Access</h5>
                <p className="text-sm text-red-800">Identify entry points and initial compromise vectors</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <h5 className="font-semibold text-orange-900 mb-2">Lateral Movement</h5>
                <p className="text-sm text-orange-800">Map potential paths for network traversal</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h5 className="font-semibold text-yellow-900 mb-2">Privilege Escalation</h5>
                <p className="text-sm text-yellow-800">Predict paths to elevated system access</p>
              </div>
            </div>

            <h2 id="remediation" className="text-2xl font-bold text-gray-900 mb-4">Remediation Strategies</h2>
            <p className="text-gray-700 mb-6">
              Get AI-powered remediation recommendations prioritized by risk and business impact.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Automated Remediation Planning</h3>
            <CodeBlock language="bash" title="Remediation Planning">
{`# Generate prioritized remediation plan
vuln-scanner remediation --input scan-results.json --priority risk-based

# Create patch management timeline
vuln-scanner patch-timeline --business-hours --maintenance-windows

# Generate compliance remediation report
vuln-scanner compliance-remediation --standard pci-dss --timeline 90-days

# Export remediation tickets for project management
vuln-scanner export-tickets --format jira --assignee security-team`}
            </CodeBlock>

            <h2 id="api-integration" className="text-2xl font-bold text-gray-900 mb-4">API Integration</h2>
            <p className="text-gray-700 mb-6">
              Integrate AI VulnScan into your security operations and vulnerability management workflows.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">REST API</h3>
            <CodeBlock language="bash" title="API Usage">
{`# Trigger vulnerability scan via API
curl -X POST https://api.augment.cfd/v1/vulnerability/scan \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "scan_type": "web_application",
    "target": "https://app.example.com",
    "intensity": "comprehensive",
    "threat_prediction": true
  }'`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Python SDK</h3>
            <CodeBlock language="python" title="Python Integration">
{`from augment_vuln_scanner import VulnerabilityScanner

# Initialize vulnerability scanner
scanner = VulnerabilityScanner(api_key=os.environ['AUGMENT_API_KEY'])

# Run comprehensive scan
scan_result = await scanner.scan_network(
    target='192.168.1.0/24',
    intensity='comprehensive',
    predict_threats=True
)

# Get critical vulnerabilities
critical_vulns = scan_result.get_vulnerabilities(severity='critical')
print(f"Found {len(critical_vulns)} critical vulnerabilities")

# Generate attack vector analysis
attack_vectors = await scanner.analyze_attack_vectors(
    vulnerabilities=critical_vulns,
    target_assets=['web-server', 'database']
)

# Create remediation plan
remediation_plan = await scanner.create_remediation_plan(
    vulnerabilities=critical_vulns,
    priority='exploitability',
    timeline=90
)`}
            </CodeBlock>

            <h2 id="api-reference" className="text-2xl font-bold text-gray-900 mb-4">API Reference</h2>
            <p className="text-gray-700 mb-6">
              Complete API documentation for integrating vulnerability scanning into your security tools.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Vulnerability Scan Endpoint</h3>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">POST /v1/vulnerability/scan</h4>
              <p className="text-gray-700 mb-4">Initiate a comprehensive vulnerability scan with AI threat prediction.</p>
              
              <h5 className="font-medium text-gray-900 mb-2">Request Body:</h5>
              <CodeBlock language="json">
{`{
  "scan_type": "network|web_application|database|container|cloud",
  "target": "192.168.1.0/24|https://app.example.com",
  "intensity": "quick|normal|comprehensive|stealth",
  "options": {
    "threat_prediction": true,
    "attack_vector_analysis": true,
    "zero_day_detection": true,
    "stealth_mode": false
  },
  "scope": {
    "include_ports": [80, 443, 22],
    "exclude_hosts": ["192.168.1.100"],
    "max_depth": 3
  },
  "ai_settings": {
    "confidence_threshold": 0.8,
    "threat_feeds": ["nvd", "mitre", "exploit-db"]
  }
}`}
              </CodeBlock>

              <h5 className="font-medium text-gray-900 mb-2 mt-4">Response:</h5>
              <CodeBlock language="json">
{`{
  "scan_id": "scan-789012",
  "status": "completed",
  "summary": {
    "total_hosts": 156,
    "vulnerabilities_found": 89,
    "critical_count": 12,
    "high_count": 34,
    "medium_count": 43
  },
  "threat_analysis": {
    "exploit_prediction": {
      "immediate_risk": 8,
      "weaponization_likely": 15,
      "active_exploits": 3
    },
    "attack_vectors": [
      {
        "vector_id": "av-001",
        "severity": "critical",
        "attack_chain": ["CVE-2024-1234", "CVE-2024-5678"],
        "target_assets": ["web-server", "database"],
        "likelihood": 0.92
      }
    ]
  },
  "vulnerabilities": [
    {
      "id": "vuln-001",
      "cve_id": "CVE-2024-1234",
      "severity": "critical",
      "cvss_score": 9.8,
      "title": "Remote Code Execution in Web Framework",
      "affected_hosts": ["192.168.1.10", "192.168.1.20"],
      "exploit_available": true,
      "threat_intel": {
        "active_campaigns": 2,
        "exploit_difficulty": "low",
        "weaponization_date": "2024-09-10"
      },
      "remediation": {
        "priority": "immediate",
        "steps": ["Update framework to version 2.1.5", "Apply security patch"],
        "estimated_effort": "2 hours"
      }
    }
  ]
}`}
              </CodeBlock>
            </div>

            <h2 id="troubleshooting" className="text-2xl font-bold text-gray-900 mb-4">Troubleshooting</h2>
            <p className="text-gray-700 mb-6">
              Common issues and solutions when running vulnerability scans and threat analysis.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Common Issues</h3>

            <div className="space-y-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-red-900 mb-2">Scan Blocked by Firewall</h4>
                <p className="text-red-800 mb-3">Error: Connection timeout or refused during scan</p>
                <div className="text-red-800">
                  <strong>Solutions:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Check firewall rules and scanning permissions</li>
                    <li>Use stealth mode to avoid intrusion detection</li>
                    <li>Scan from internal networks when possible</li>
                    <li>Coordinate with network team for scan windows</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-yellow-900 mb-2">High False Positive Rate</h4>
                <p className="text-yellow-800 mb-3">Too many false positive vulnerability findings</p>
                <div className="text-yellow-800">
                  <strong>Solutions:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Adjust AI confidence threshold settings</li>
                    <li>Enable manual validation for critical findings</li>
                    <li>Use asset-specific scanning profiles</li>
                    <li>Update vulnerability databases regularly</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">Slow Scan Performance</h4>
                <p className="text-blue-800 mb-3">Vulnerability scans taking too long to complete</p>
                <div className="text-blue-800">
                  <strong>Solutions:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Increase thread count for parallel scanning</li>
                    <li>Use targeted scans instead of comprehensive</li>
                    <li>Optimize network connectivity and bandwidth</li>
                    <li>Schedule scans during off-peak hours</li>
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
                  <h3 className="text-sm font-medium text-green-900">Vulnerability Scanning Documentation Complete!</h3>
                  <p className="mt-1 text-sm text-green-700">
                    You now have comprehensive knowledge to implement AI VulnScan in your security operations. From basic vulnerability detection to advanced threat prediction, you're equipped to proactively identify and remediate security risks with AI-powered intelligence.
                  </p>
                </div>
              </div>
            </div>

            <hr className="my-8 border-gray-200" />

            <p className="text-gray-600 text-center">
              <strong>Ready to enhance your vulnerability management?</strong> Start your free security assessment today and discover how AI can predict and prevent cyber attacks before they happen.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
