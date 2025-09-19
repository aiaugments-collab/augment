import { Breadcrumb } from "@/components/ui/Breadcrumb"
import { CodeBlock } from "@/components/docs/CodeBlock"
import { FeatureCard } from "@/components/docs/FeatureCard"
import { DocsSidebar } from "@/components/docs/DocsSidebar"

const navigationItems = [
  { title: 'Overview', href: '/docs/ai-threat-hunter#overview' },
  { title: 'Installation', href: '/docs/ai-threat-hunter#installation' },
  { title: 'Quick Start', href: '/docs/ai-threat-hunter#quick-start' },
  { title: 'Configuration', href: '/docs/ai-threat-hunter#configuration' },
  { title: 'Threat Intelligence', href: '/docs/ai-threat-hunter#threat-intelligence' },
  { title: 'Environment Variables', href: '/docs/ai-threat-hunter#environment-variables' },
  { title: 'Basic Usage', href: '/docs/ai-threat-hunter#usage' },
  { title: 'CLI Commands', href: '/docs/ai-threat-hunter#cli-commands' },
  { title: 'Best Practices', href: '/docs/ai-threat-hunter#best-practices' },
  { title: 'Incident Response', href: '/docs/ai-threat-hunter#incident-response' },
  { title: 'Behavioral Analysis', href: '/docs/ai-threat-hunter#behavioral-analysis' },
  { title: 'API Integration', href: '/docs/ai-threat-hunter#api-integration' },
  { title: 'API Reference', href: '/docs/ai-threat-hunter#api-reference' },
  { title: 'Troubleshooting', href: '/docs/ai-threat-hunter#troubleshooting' }
]

export default function AIThreatHunterDocsPage() {
  return (
    <>
      <DocsSidebar 
        appName="AI ThreatHunter"
        appLogo="/guard-collector.svg"
        navigationItems={navigationItems}
      />
      
      <main className="flex-1 min-w-0 max-w-none md:max-w-4xl md:mx-auto px-4 sm:px-6 py-4 sm:py-8 overflow-hidden">
        <div className="docs-content">
          <div className="mb-6">
            <Breadcrumb className="mb-4" />
          </div>

          <div id="overview" className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6 sm:mb-8">
            <img src="/guard-collector.svg" alt="AI ThreatHunter" className="w-12 h-12" />
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">AI ThreatHunter</h1>
              <p className="text-base sm:text-lg text-gray-600">Intelligent threat detection and response</p>
            </div>
          </div>

          {/* Key Capabilities Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <FeatureCard
              title="Proactive Threat Hunting"
              description="AI-powered proactive search for security threats and advanced persistent threats across your environment"
              icon=""
            />
            <FeatureCard
              title="Behavioral Analysis"
              description="Advanced behavioral analysis to identify suspicious activities and attack patterns in real-time"
              icon=""
            />
            <FeatureCard
              title="Threat Intelligence"
              description="Integrated threat intelligence feeds and correlation with global threat landscape data"
              icon=""
            />
            <FeatureCard
              title="Automated Response"
              description="Intelligent automated response recommendations and incident management workflows"
              icon=""
            />
          </div>

          {/* Threat Hunter Dashboard Mockup */}
          <div className="my-8">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-gray-200">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-gray-900 px-4 py-2 flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300 text-sm ml-4">AI ThreatHunter Dashboard</span>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6">
                    <div className="bg-red-50 p-3 sm:p-4 rounded-lg border border-red-200">
                      <div className="text-xl sm:text-2xl font-bold text-red-600">8</div>
                      <div className="text-xs sm:text-sm text-red-700">Active Threats</div>
                    </div>
                    <div className="bg-orange-50 p-3 sm:p-4 rounded-lg border border-orange-200">
                      <div className="text-xl sm:text-2xl font-bold text-orange-600">34</div>
                      <div className="text-xs sm:text-sm text-orange-700">Suspicious Activities</div>
                    </div>
                    <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border border-blue-200">
                      <div className="text-xl sm:text-2xl font-bold text-blue-600">2.4M</div>
                      <div className="text-xs sm:text-sm text-blue-700">Events Analyzed</div>
                    </div>
                    <div className="bg-green-50 p-3 sm:p-4 rounded-lg border border-green-200">
                      <div className="text-xl sm:text-2xl font-bold text-green-600">96%</div>
                      <div className="text-xs sm:text-sm text-green-700">Detection Accuracy</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 text-center">
                    AI-powered threat hunting and behavioral analysis
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-gray max-w-none">
            <h2 id="installation" className="text-2xl font-bold text-gray-900 mb-4">Installation</h2>
            <p className="text-gray-700 mb-6">
              Deploy AI ThreatHunter to start proactive threat detection and behavioral analysis across your security infrastructure.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">System Requirements</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Python 3.9 or higher</li>
              <li>Elasticsearch 7.0+ (for threat data storage)</li>
              <li>Splunk or similar SIEM (optional integration)</li>
              <li>Minimum 16GB RAM (32GB recommended for large environments)</li>
              <li>Network access to security tools and threat intelligence feeds</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Install via Package Manager</h3>
            <CodeBlock language="bash" title="Installation">
{`# Install via pip
pip install augment-threat-hunter

# Install via Docker
docker pull augment/threat-hunter:latest

# Install from source
git clone https://github.com/augment-ai/threat-hunter
cd threat-hunter
pip install -e .

# Install threat intelligence tools
pip install yara-python misp-python stix2

# Verify installation
threat-hunter --version`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Security Tools Integration</h3>
            <p className="text-gray-700 mb-4">
              Configure integration with your existing security infrastructure:
            </p>

            <CodeBlock language="bash" title="Security Integration">
{`# Set Augment API key
export AUGMENT_API_KEY=your_api_key_here

# Configure SIEM integration
export SIEM_TYPE=splunk
export SPLUNK_HOST=splunk.company.com
export SPLUNK_TOKEN=your_splunk_token

# Configure threat intelligence feeds
export MISP_URL=https://misp.company.com
export MISP_KEY=your_misp_key

# Initialize threat hunter
threat-hunter init --siem splunk --threat-feeds misp,otx

# Verify integrations
threat-hunter health-check`}
            </CodeBlock>

            <h2 id="quick-start" className="text-2xl font-bold text-gray-900 mb-4">Quick Start</h2>
            <p className="text-gray-700 mb-6">
              Start hunting for advanced threats and analyzing suspicious behaviors in your environment.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Configure Hunting Scope</h3>
            <CodeBlock language="bash" title="Hunting Configuration">
{`# Define hunting scope and targets
threat-hunter scope --networks 192.168.1.0/24,10.0.0.0/16
threat-hunter scope --endpoints workstations,servers
threat-hunter scope --timeframe 24h

# Configure threat models
threat-hunter models --enable apt,insider-threat,malware
threat-hunter models --sensitivity high

# Set up data sources
threat-hunter sources --logs /var/log/security/
threat-hunter sources --network-traffic eth0
threat-hunter sources --endpoint-agents carbon-black`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Start Threat Hunting</h3>
            <CodeBlock language="bash" title="Threat Hunting">
{`# Start continuous threat hunting
threat-hunter hunt --continuous --daemon

# Run targeted hunt for specific threats
threat-hunter hunt --threat-type apt --target-group executives

# Hunt for indicators of compromise
threat-hunter hunt --iocs malicious-ips.txt --correlate

# Behavioral analysis hunt
threat-hunter hunt --behavioral --baseline 30d`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Analyze and Respond</h3>
            <CodeBlock language="bash" title="Threat Analysis">
{`# Generate threat analysis report
threat-hunter analyze --output threat-report.html

# Get active threat summary
threat-hunter status --active-threats --severity high

# Create incident response playbook
threat-hunter respond --threat-id THR-001 --generate-playbook

# Execute automated response
threat-hunter respond --threat-id THR-001 --isolate-host --notify-team`}
            </CodeBlock>

            <h2 id="configuration" className="text-2xl font-bold text-gray-900 mb-4">Configuration</h2>
            <p className="text-gray-700 mb-6">
              Configure AI ThreatHunter to align with your security operations and threat landscape.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Basic Configuration</h3>
            <CodeBlock language="yaml" title=".threat-hunter.yaml">
{`version: "1.0"
organization: "your-company"
environment: "production"

hunting_scope:
  networks:
    - "192.168.1.0/24"
    - "10.0.0.0/16"
  endpoints:
    - "workstations"
    - "servers"
    - "cloud-instances"
  time_windows:
    continuous: true
    historical: "90d"

threat_models:
  apt:
    enabled: true
    sensitivity: "high"
    indicators: ["lateral-movement", "persistence", "exfiltration"]
  insider_threat:
    enabled: true
    behavioral_baseline: "30d"
    anomaly_threshold: 2.5
  malware:
    enabled: true
    yara_rules: "./rules/malware/"
    sandbox_analysis: true

data_sources:
  siem:
    type: "splunk"
    host: "splunk.company.com"
    index: "security"
  logs:
    paths: ["/var/log/security/", "/var/log/auth.log"]
    formats: ["json", "syslog"]
  network:
    interfaces: ["eth0", "eth1"]
    pcap_storage: "/data/pcap/"
  endpoints:
    agent_type: "carbon_black"
    api_endpoint: "https://defense.conferdeploy.net"

threat_intelligence:
  feeds:
    - name: "misp"
      url: "https://misp.company.com"
      api_key: "{MISP_KEY}"
    - name: "otx"
      url: "https://otx.alienvault.com"
      api_key: "{OTX_KEY}"
  update_frequency: "hourly"
  correlation_rules: "./rules/correlation/"

response_automation:
  enabled: true
  actions:
    - type: "isolate_host"
      approval_required: false
      max_severity: "medium"
    - type: "block_ip"
      approval_required: false
      auto_expire: "24h"
    - type: "quarantine_file"
      approval_required: true
      preserve_evidence: true`}
            </CodeBlock>

            <h2 id="threat-intelligence" className="text-2xl font-bold text-gray-900 mb-4">Threat Intelligence</h2>
            <p className="text-gray-700 mb-6">
              AI ThreatHunter integrates with multiple threat intelligence sources for comprehensive threat context.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-red-900 mb-3">External Feeds</h4>
                <ul className="text-red-800 space-y-2 text-sm">
                  <li>• MISP threat sharing platforms</li>
                  <li>• AlienVault OTX indicators</li>
                  <li>• Commercial threat intelligence</li>
                  <li>• Government threat bulletins</li>
                  <li>• Industry-specific feeds</li>
                </ul>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-orange-900 mb-3">Internal Intelligence</h4>
                <ul className="text-orange-800 space-y-2 text-sm">
                  <li>• Historical incident data</li>
                  <li>• Custom IOC repositories</li>
                  <li>• Behavioral baselines</li>
                  <li>• Asset vulnerability context</li>
                  <li>• Business impact metrics</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Threat Intelligence Configuration</h3>
            <CodeBlock language="bash" title="Threat Intelligence Setup">
{`# Add threat intelligence feed
threat-hunter intel add --type misp \\
  --url "https://misp.company.com" \\
  --key "your-misp-key" \\
  --tags "company,apt,malware"

# Configure IOC correlation
threat-hunter intel correlate --enable \\
  --sources "misp,otx,internal" \\
  --confidence-threshold 0.7

# Update threat intelligence
threat-hunter intel update --all --force

# Query threat intelligence
threat-hunter intel query --ioc "1.2.3.4" --type "ip"`}
            </CodeBlock>

            <h2 id="environment-variables" className="text-2xl font-bold text-gray-900 mb-4">Environment Variables</h2>
            <p className="text-gray-700 mb-6">
              Configure AI ThreatHunter behavior using environment variables for different deployment scenarios.
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
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">THREAT_HUNTER_CONFIG</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Path to configuration file</td>
                    <td className="px-6 py-4 text-sm text-gray-500">.threat-hunter.yaml</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">THREAT_HUNTER_LOG_LEVEL</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Logging level (debug/info/warn/error)</td>
                    <td className="px-6 py-4 text-sm text-gray-500">info</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">THREAT_HUNTER_WORKERS</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Number of hunting worker processes</td>
                    <td className="px-6 py-4 text-sm text-gray-500">4</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="usage" className="text-2xl font-bold text-gray-900 mb-4">Basic Usage</h2>
            <p className="text-gray-700 mb-6">
              Learn the fundamental threat hunting patterns and security analysis workflows.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Hunting Commands</h3>
            <CodeBlock language="bash" title="Threat Hunting">
{`# Start proactive threat hunt
threat-hunter hunt --proactive --timeframe 24h

# Hunt for specific threat indicators
threat-hunter hunt --iocs indicators.txt --correlate-events

# Behavioral anomaly hunting
threat-hunter hunt --behavioral --users executives --baseline 30d

# Network-based threat hunting
threat-hunter hunt --network --protocols http,dns --suspicious-domains`}
            </CodeBlock>

            <h2 id="cli-commands" className="text-2xl font-bold text-gray-900 mb-4">CLI Commands Reference</h2>
            <p className="text-gray-700 mb-6">
              Complete reference for all threat hunting and incident response commands.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">hunt</h4>
              <p className="text-gray-700 mb-3">Execute proactive threat hunting campaigns with AI-powered analysis</p>
              <CodeBlock language="bash">
{`threat-hunter hunt [options]

Options:
  --type <type>            Hunt type (proactive|reactive|behavioral|network)
  --threat-model <model>   Threat model (apt|insider|malware|all)
  --timeframe <period>     Time period for hunting (1h|24h|7d|30d)
  --targets <targets>      Specific targets (users|hosts|networks)
  --iocs <file>            Indicators of compromise file
  --sensitivity <level>    Detection sensitivity (low|medium|high)
  --correlate              Enable event correlation
  --continuous             Run continuous hunting
  --output <file>          Output file path
  --format <format>        Output format (json|html|csv)`}
              </CodeBlock>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">analyze</h4>
              <p className="text-gray-700 mb-3">Analyze threats and generate intelligence reports</p>
              <CodeBlock language="bash">
{`threat-hunter analyze [options]

Options:
  --threat-id <id>         Specific threat to analyze
  --attack-chain           Generate attack chain analysis
  --attribution            Perform threat actor attribution
  --timeline               Create attack timeline
  --impact-assessment      Calculate business impact
  --indicators             Extract indicators of compromise
  --recommendations        Generate response recommendations
  --executive-summary      Create executive summary report`}
              </CodeBlock>
            </div>

            <h2 id="best-practices" className="text-2xl font-bold text-gray-900 mb-4">Best Practices</h2>
            <p className="text-gray-700 mb-6">
              Threat hunting best practices to maximize detection effectiveness and minimize false positives.
            </p>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-red-900 mb-3">Threat Hunting Strategy</h4>
              <ol className="list-decimal list-inside text-red-800 space-y-2">
                <li>Establish baseline behavioral patterns before hunting</li>
                <li>Focus hunting efforts on high-value assets and users</li>
                <li>Use hypothesis-driven hunting approaches</li>
                <li>Correlate multiple data sources for higher confidence</li>
                <li>Document and share hunting methodologies with team</li>
                <li>Continuously update threat models based on new intelligence</li>
              </ol>
            </div>

            <h2 id="incident-response" className="text-2xl font-bold text-gray-900 mb-4">Incident Response</h2>
            <p className="text-gray-700 mb-6">
              Automated incident response capabilities to quickly contain and remediate identified threats.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Response Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-red-50 p-3 sm:p-4 rounded-lg border border-red-200">
                <h5 className="font-semibold text-red-900 mb-2">Containment</h5>
                <p className="text-xs sm:text-sm text-red-800">Immediate threat containment actions</p>
                <ul className="text-xs text-red-700 mt-2">
                  <li>• Isolate compromised hosts</li>
                  <li>• Block malicious IPs</li>
                  <li>• Quarantine files</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-3 sm:p-4 rounded-lg border border-orange-200">
                <h5 className="font-semibold text-orange-900 mb-2">Investigation</h5>
                <p className="text-xs sm:text-sm text-orange-800">Automated evidence collection</p>
                <ul className="text-xs text-orange-700 mt-2">
                  <li>• Collect forensic artifacts</li>
                  <li>• Timeline reconstruction</li>
                  <li>• Impact assessment</li>
                </ul>
              </div>
              <div className="bg-green-50 p-3 sm:p-4 rounded-lg border border-green-200">
                <h5 className="font-semibold text-green-900 mb-2">Recovery</h5>
                <p className="text-xs sm:text-sm text-green-800">System restoration and hardening</p>
                <ul className="text-xs text-green-700 mt-2">
                  <li>• Clean infected systems</li>
                  <li>• Restore from backups</li>
                  <li>• Implement countermeasures</li>
                </ul>
              </div>
            </div>

            <h2 id="behavioral-analysis" className="text-2xl font-bold text-gray-900 mb-4">Behavioral Analysis</h2>
            <p className="text-gray-700 mb-6">
              Advanced behavioral analysis to detect sophisticated threats that evade traditional security controls.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Analysis Types</h3>
            <CodeBlock language="bash" title="Behavioral Analysis">
{`# User behavior analysis
threat-hunter behavioral --type user --baseline 30d --anomaly-threshold 2.5

# Network behavior analysis
threat-hunter behavioral --type network --protocols all --detect-tunneling

# Application behavior analysis
threat-hunter behavioral --type application --monitor-processes --detect-injection

# System behavior analysis
threat-hunter behavioral --type system --file-activity --registry-changes`}
            </CodeBlock>

            <h2 id="api-integration" className="text-2xl font-bold text-gray-900 mb-4">API Integration</h2>
            <p className="text-gray-700 mb-6">
              Integrate AI ThreatHunter into your security operations center and incident response workflows.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">REST API</h3>
            <CodeBlock language="bash" title="API Usage">
{`# Submit threat hunting request via API
curl -X POST https://api.augment.cfd/v1/threat/hunt \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "hunt_type": "proactive",
    "threat_models": ["apt", "insider"],
    "timeframe": "24h",
    "targets": ["executives", "servers"],
    "sensitivity": "high"
  }'`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Python SDK</h3>
            <CodeBlock language="python" title="Python Integration">
{`from augment_threat_hunter import ThreatHunter

# Initialize threat hunter
hunter = ThreatHunter(api_key=os.environ['AUGMENT_API_KEY'])

# Start threat hunting campaign
hunt_result = await hunter.start_hunt(
    hunt_type='proactive',
    threat_models=['apt', 'malware'],
    timeframe='24h',
    sensitivity='high'
)

# Get active threats
threats = await hunter.get_active_threats(severity='high')
print(f"Found {len(threats)} active threats")

# Analyze specific threat
threat_analysis = await hunter.analyze_threat(
    threat_id='THR-001',
    include_attribution=True,
    generate_timeline=True
)

# Execute automated response
response_result = await hunter.execute_response(
    threat_id='THR-001',
    actions=['isolate_host', 'block_ip'],
    notify_team=True
)`}
            </CodeBlock>

            <h2 id="api-reference" className="text-2xl font-bold text-gray-900 mb-4">API Reference</h2>
            <p className="text-gray-700 mb-6">
              Complete API documentation for integrating threat hunting into your security applications.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Threat Hunt Endpoint</h3>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">POST /v1/threat/hunt</h4>
              <p className="text-gray-700 mb-4">Initiate a comprehensive threat hunting campaign with AI analysis.</p>
              
              <h5 className="font-medium text-gray-900 mb-2">Request Body:</h5>
              <CodeBlock language="json">
{`{
  "hunt_type": "proactive|reactive|behavioral|network",
  "threat_models": ["apt", "insider", "malware"],
  "scope": {
    "networks": ["192.168.1.0/24", "10.0.0.0/16"],
    "endpoints": ["workstations", "servers"],
    "users": ["executives", "administrators"]
  },
  "timeframe": "1h|24h|7d|30d",
  "options": {
    "sensitivity": "low|medium|high",
    "correlate_events": true,
    "include_attribution": true,
    "behavioral_baseline": "30d"
  },
  "threat_intelligence": {
    "feeds": ["misp", "otx", "internal"],
    "confidence_threshold": 0.7
  }
}`}
              </CodeBlock>

              <h5 className="font-medium text-gray-900 mb-2 mt-4">Response:</h5>
              <CodeBlock language="json">
{`{
  "hunt_id": "hunt-789012",
  "status": "completed",
  "summary": {
    "threats_found": 8,
    "high_severity": 3,
    "medium_severity": 5,
    "events_analyzed": 2400000,
    "indicators_matched": 156
  },
  "threats": [
    {
      "id": "THR-001",
      "severity": "high",
      "threat_type": "apt",
      "confidence": 0.94,
      "title": "Advanced Persistent Threat - Lateral Movement Detected",
      "description": "Suspicious lateral movement pattern detected across multiple hosts",
      "affected_assets": ["host-001", "host-002", "host-003"],
      "attack_chain": [
        {
          "stage": "initial_access",
          "technique": "T1566.001",
          "description": "Spearphishing attachment",
          "timestamp": "2025-09-18T10:30:00Z"
        },
        {
          "stage": "lateral_movement",
          "technique": "T1021.001",
          "description": "Remote desktop protocol",
          "timestamp": "2025-09-18T11:15:00Z"
        }
      ],
      "indicators": [
        {
          "type": "ip",
          "value": "192.168.1.100",
          "confidence": 0.89
        },
        {
          "type": "file_hash",
          "value": "a1b2c3d4e5f6...",
          "confidence": 0.95
        }
      ],
      "attribution": {
        "threat_actor": "APT28",
        "confidence": 0.78,
        "campaign": "Operation Ghost"
      },
      "recommended_actions": [
        "Isolate affected hosts immediately",
        "Reset credentials for compromised accounts",
        "Deploy additional monitoring on critical assets"
      ]
    }
  ],
  "intelligence_summary": {
    "iocs_matched": 23,
    "new_indicators": 12,
    "threat_actor_ttps": ["T1566.001", "T1021.001", "T1055"]
  }
}`}
              </CodeBlock>
            </div>

            <h2 id="troubleshooting" className="text-2xl font-bold text-gray-900 mb-4">Troubleshooting</h2>
            <p className="text-gray-700 mb-6">
              Common issues and solutions when running threat hunting and incident response operations.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Common Issues</h3>

            <div className="space-y-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-red-900 mb-2">High False Positive Rate</h4>
                <p className="text-red-800 mb-3">Too many false positive threat detections affecting operations</p>
                <div className="text-red-800">
                  <strong>Solutions:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Adjust sensitivity thresholds for specific threat models</li>
                    <li>Extend behavioral baseline period for better accuracy</li>
                    <li>Add known-good patterns to whitelist</li>
                    <li>Fine-tune correlation rules for your environment</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-yellow-900 mb-2">Data Source Connectivity</h4>
                <p className="text-yellow-800 mb-3">Issues connecting to SIEM or security tools for data collection</p>
                <div className="text-yellow-800">
                  <strong>Solutions:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Verify network connectivity and firewall rules</li>
                    <li>Check API credentials and permissions</li>
                    <li>Validate data source configuration settings</li>
                    <li>Test connectivity with health-check command</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">Performance Degradation</h4>
                <p className="text-blue-800 mb-3">Threat hunting operations impacting system performance</p>
                <div className="text-blue-800">
                  <strong>Solutions:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Reduce hunting scope or timeframe</li>
                    <li>Increase system resources (CPU, memory)</li>
                    <li>Schedule intensive hunts during off-peak hours</li>
                    <li>Use incremental hunting approaches</li>
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
                  <h3 className="text-sm font-medium text-green-900">Threat Hunting Documentation Complete!</h3>
                  <p className="mt-1 text-sm text-green-700">
                    You now have comprehensive knowledge to implement AI ThreatHunter in your security operations. From proactive threat hunting to automated incident response, you're equipped to detect and respond to advanced threats with AI-powered intelligence.
                  </p>
                </div>
              </div>
            </div>

            <hr className="my-8 border-gray-200" />

            <p className="text-gray-600 text-center">
              <strong>Ready to hunt advanced threats?</strong> Start your free threat assessment today and discover how AI can proactively identify sophisticated attacks before they cause damage.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
