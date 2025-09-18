import { Breadcrumb } from "@/components/ui/Breadcrumb"
import { CodeBlock } from "@/components/docs/CodeBlock"
import { FeatureCard } from "@/components/docs/FeatureCard"
import { DocsSidebar } from "@/components/docs/DocsSidebar"

const navigationItems = [
  { title: 'Overview', href: '/docs/ai-log-analyzer#overview' },
  { title: 'Installation', href: '/docs/ai-log-analyzer#installation' },
  { title: 'Quick Start', href: '/docs/ai-log-analyzer#quick-start' },
  { title: 'Configuration', href: '/docs/ai-log-analyzer#configuration' },
  { title: 'Anomaly Detection', href: '/docs/ai-log-analyzer#anomaly-detection' },
  { title: 'Environment Variables', href: '/docs/ai-log-analyzer#environment-variables' },
  { title: 'Basic Usage', href: '/docs/ai-log-analyzer#usage' },
  { title: 'CLI Commands', href: '/docs/ai-log-analyzer#cli-commands' },
  { title: 'Best Practices', href: '/docs/ai-log-analyzer#best-practices' },
  { title: 'Log Sources', href: '/docs/ai-log-analyzer#log-sources' },
  { title: 'Alerting', href: '/docs/ai-log-analyzer#alerting' },
  { title: 'API Integration', href: '/docs/ai-log-analyzer#api-integration' },
  { title: 'API Reference', href: '/docs/ai-log-analyzer#api-reference' },
  { title: 'Troubleshooting', href: '/docs/ai-log-analyzer#troubleshooting' }
]

export default function AILogAnalyzerDocsPage() {
  return (
    <>
      <DocsSidebar 
        appName="AI LogAnalyzer"
        appLogo="/log-insight.svg"
        navigationItems={navigationItems}
      />
      
      <main className="flex-1 max-w-4xl mx-auto px-6 py-8">
        <div className="docs-content">
          <div className="mb-6">
            <Breadcrumb className="mb-4" />
          </div>

          <div id="overview" className="flex items-center space-x-4 mb-8">
            <img src="/log-insight.svg" alt="AI LogAnalyzer" className="w-12 h-12" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">AI LogAnalyzer</h1>
              <p className="text-lg text-gray-600">Intelligent log analysis with anomaly detection</p>
            </div>
          </div>

          {/* Key Capabilities Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <FeatureCard
              title="AI-Powered Analysis"
              description="Advanced machine learning algorithms automatically detect anomalies and patterns in log data"
              icon=""
            />
            <FeatureCard
              title="Real-time Processing"
              description="Process millions of log entries in real-time with intelligent filtering and correlation"
              icon=""
            />
            <FeatureCard
              title="Behavioral Learning"
              description="Learn normal system behavior and flag unusual activities with high accuracy"
              icon=""
            />
            <FeatureCard
              title="Smart Alerting"
              description="Intelligent alerting system that reduces noise and focuses on actionable insights"
              icon=""
            />
          </div>

          {/* Log Analysis Dashboard Mockup */}
          <div className="my-8">
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border border-gray-200">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-gray-900 px-4 py-2 flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300 text-sm ml-4">AI LogAnalyzer Dashboard</span>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <div className="text-2xl font-bold text-blue-600">2.4M</div>
                      <div className="text-sm text-blue-700">Logs Processed/Hour</div>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <div className="text-2xl font-bold text-red-600">23</div>
                      <div className="text-sm text-red-700">Anomalies Detected</div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <div className="text-2xl font-bold text-green-600">99.2%</div>
                      <div className="text-sm text-green-700">Accuracy Rate</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <div className="text-2xl font-bold text-purple-600">156</div>
                      <div className="text-sm text-purple-700">Log Sources</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 text-center">
                    AI-powered log analysis with real-time anomaly detection
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-gray max-w-none">
            <h2 id="installation" className="text-2xl font-bold text-gray-900 mb-4">Installation</h2>
            <p className="text-gray-700 mb-6">
              Deploy AI LogAnalyzer to start intelligent log monitoring and anomaly detection across your infrastructure.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">System Requirements</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Python 3.9 or higher</li>
              <li>Elasticsearch 7.0+ (for log storage and indexing)</li>
              <li>Redis 6.0+ (for real-time processing)</li>
              <li>Minimum 16GB RAM (32GB recommended for high volume)</li>
              <li>Network access to log sources and notification systems</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Install via Package Manager</h3>
            <CodeBlock language="bash" title="Installation">
{`# Install via pip
pip install augment-log-analyzer

# Install via Docker Compose
curl -O https://raw.githubusercontent.com/augment-ai/log-analyzer/main/docker-compose.yml
docker-compose up -d

# Install from source
git clone https://github.com/augment-ai/log-analyzer
cd log-analyzer
pip install -e .

# Install dependencies
pip install elasticsearch redis numpy pandas scikit-learn

# Verify installation
log-analyzer --version`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Service Configuration</h3>
            <p className="text-gray-700 mb-4">
              Configure required services and API access:
            </p>

            <CodeBlock language="bash" title="Service Setup">
{`# Set Augment API key
export AUGMENT_API_KEY=your_api_key_here

# Configure Elasticsearch connection
export ELASTICSEARCH_URL=http://localhost:9200
export ELASTICSEARCH_USERNAME=elastic
export ELASTICSEARCH_PASSWORD=your_password

# Configure Redis connection
export REDIS_URL=redis://localhost:6379

# Initialize log analyzer
log-analyzer init --create-indices

# Verify services
log-analyzer health-check`}
            </CodeBlock>

            <h2 id="quick-start" className="text-2xl font-bold text-gray-900 mb-4">Quick Start</h2>
            <p className="text-gray-700 mb-6">
              Start analyzing logs and detecting anomalies in minutes with intelligent pattern recognition.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Configure Log Sources</h3>
            <CodeBlock language="bash" title="Log Source Setup">
{`# Add application log source
log-analyzer add-source --type application \\
  --path "/var/log/app/*.log" \\
  --format json \\
  --name "web-application"

# Add system log source
log-analyzer add-source --type syslog \\
  --host syslog-server \\
  --port 514 \\
  --name "system-logs"

# Add cloud service logs
log-analyzer add-source --type aws-cloudwatch \\
  --log-group "/aws/lambda/my-function" \\
  --region us-east-1 \\
  --name "lambda-logs"

# This creates .log-analyzer.yaml config file`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Start Log Processing</h3>
            <CodeBlock language="bash" title="Log Processing">
{`# Start real-time log analysis
log-analyzer start --daemon

# Process historical logs
log-analyzer process --historical --days 7

# Train anomaly detection models
log-analyzer train --source web-application --baseline-days 30

# Monitor processing status
log-analyzer status --verbose`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Generate Analysis Reports</h3>
            <CodeBlock language="bash" title="Analysis Reports">
{`# Generate anomaly report
log-analyzer report --type anomalies --output anomalies.html

# Export insights as JSON
log-analyzer export --format json --output insights.json

# Create dashboard summary
log-analyzer dashboard --timeframe 24h --output dashboard.html

# Generate security analysis
log-analyzer security-report --output security-analysis.pdf`}
            </CodeBlock>

            <h2 id="configuration" className="text-2xl font-bold text-gray-900 mb-4">Configuration</h2>
            <p className="text-gray-700 mb-6">
              Configure AI LogAnalyzer to match your logging infrastructure and analysis requirements.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Basic Configuration</h3>
            <CodeBlock language="yaml" title=".log-analyzer.yaml">
{`version: "1.0"
organization: "your-company"
environment: "production"

data_sources:
  - name: "web-application"
    type: "file"
    path: "/var/log/app/*.log"
    format: "json"
    fields:
      timestamp: "timestamp"
      level: "level"
      message: "message"
      user_id: "user_id"
  
  - name: "system-logs"
    type: "syslog"
    host: "syslog-server"
    port: 514
    facility: ["kern", "mail", "auth"]

elasticsearch:
  url: "http://localhost:9200"
  index_prefix: "logs-"
  retention_days: 90
  shards: 3
  replicas: 1

redis:
  url: "redis://localhost:6379"
  db: 0
  key_prefix: "log-analyzer:"

anomaly_detection:
  algorithms: ["isolation_forest", "one_class_svm", "lstm"]
  sensitivity: "medium"
  baseline_days: 30
  update_frequency: "daily"
  confidence_threshold: 0.8

alerts:
  enabled: true
  channels:
    - type: "slack"
      webhook: "{SLACK_WEBHOOK}"
      channel: "#alerts"
    - type: "email"
      smtp_server: "smtp.company.com"
      recipients: ["ops@company.com"]

processing:
  batch_size: 1000
  workers: 4
  buffer_size: 10000
  real_time: true`}
            </CodeBlock>

            <h2 id="anomaly-detection" className="text-2xl font-bold text-gray-900 mb-4">Anomaly Detection</h2>
            <p className="text-gray-700 mb-6">
              AI LogAnalyzer uses multiple machine learning algorithms to detect anomalies and unusual patterns in log data.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">Statistical Anomalies</h4>
                <ul className="text-blue-800 space-y-2 text-sm">
                  <li>• Unusual volume spikes or drops</li>
                  <li>• Response time outliers</li>
                  <li>• Error rate deviations</li>
                  <li>• Traffic pattern changes</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-green-900 mb-3">Behavioral Anomalies</h4>
                <ul className="text-green-800 space-y-2 text-sm">
                  <li>• Unusual user access patterns</li>
                  <li>• Abnormal system behavior</li>
                  <li>• Unexpected application flows</li>
                  <li>• Security-related activities</li>
                </ul>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-purple-900 mb-3">Temporal Anomalies</h4>
                <ul className="text-purple-800 space-y-2 text-sm">
                  <li>• Off-hours activity detection</li>
                  <li>• Seasonal pattern deviations</li>
                  <li>• Burst activity detection</li>
                  <li>• Time-series outliers</li>
                </ul>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-orange-900 mb-3">Content Anomalies</h4>
                <ul className="text-orange-800 space-y-2 text-sm">
                  <li>• New error message patterns</li>
                  <li>• Unusual log message content</li>
                  <li>• Malformed log entries</li>
                  <li>• Suspicious text patterns</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Anomaly Configuration</h3>
            <CodeBlock language="bash" title="Anomaly Detection Setup">
{`# Configure anomaly detection models
log-analyzer anomaly config --algorithm isolation_forest \\
  --sensitivity high \\
  --features timestamp,level,response_time

# Set custom thresholds
log-analyzer anomaly threshold --metric error_rate --threshold 0.05
log-analyzer anomaly threshold --metric response_time --threshold 2000

# Train models on historical data
log-analyzer anomaly train --source web-application \\
  --start-date 2025-08-01 \\
  --end-date 2025-09-01

# Enable real-time anomaly detection
log-analyzer anomaly enable --real-time --alert-on-detection`}
            </CodeBlock>

            <h2 id="environment-variables" className="text-2xl font-bold text-gray-900 mb-4">Environment Variables</h2>
            <p className="text-gray-700 mb-6">
              Configure AI LogAnalyzer behavior using environment variables for different deployment scenarios.
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
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">LOG_ANALYZER_CONFIG</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Path to configuration file</td>
                    <td className="px-6 py-4 text-sm text-gray-500">.log-analyzer.yaml</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">ELASTICSEARCH_URL</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Elasticsearch connection URL</td>
                    <td className="px-6 py-4 text-sm text-gray-500">http://localhost:9200</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">REDIS_URL</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Redis connection URL</td>
                    <td className="px-6 py-4 text-sm text-gray-500">redis://localhost:6379</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">LOG_ANALYZER_WORKERS</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Number of processing workers</td>
                    <td className="px-6 py-4 text-sm text-gray-500">4</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="usage" className="text-2xl font-bold text-gray-900 mb-4">Basic Usage</h2>
            <p className="text-gray-700 mb-6">
              Learn the fundamental log analysis patterns and anomaly detection workflows.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Analysis Commands</h3>
            <CodeBlock language="bash" title="Log Analysis">
{`# Search logs with intelligent filtering
log-analyzer search --query "error OR exception" --timeframe 1h

# Analyze log patterns
log-analyzer patterns --source web-application --timeframe 24h

# Detect anomalies in real-time
log-analyzer detect --live --sensitivity medium

# Generate insights from log data
log-analyzer insights --source system-logs --focus security`}
            </CodeBlock>

            <h2 id="cli-commands" className="text-2xl font-bold text-gray-900 mb-4">CLI Commands Reference</h2>
            <p className="text-gray-700 mb-6">
              Complete reference for all log analysis and anomaly detection commands.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">analyze</h4>
              <p className="text-gray-700 mb-3">Run comprehensive log analysis with AI-powered insights</p>
              <CodeBlock language="bash">
{`log-analyzer analyze [options]

Options:
  --source <source>        Log source to analyze
  --timeframe <period>     Analysis timeframe (1h|24h|7d|30d)
  --start-time <datetime>  Start time for analysis
  --end-time <datetime>    End time for analysis
  --focus <area>          Focus area (security|performance|errors|all)
  --anomalies             Include anomaly detection
  --patterns              Extract log patterns
  --output <file>         Output file path
  --format <format>       Output format (json|html|csv)
  --real-time             Enable real-time analysis
  --alert-threshold <num> Alert threshold for anomalies`}
              </CodeBlock>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">search</h4>
              <p className="text-gray-700 mb-3">Intelligent log search with natural language queries</p>
              <CodeBlock language="bash">
{`log-analyzer search [options]

Options:
  --query <query>         Search query (supports natural language)
  --source <source>       Specific log source to search
  --timeframe <period>    Time period for search
  --fields <fields>       Fields to include in results
  --limit <number>        Maximum number of results
  --sort <field>          Sort by field (timestamp|relevance)
  --export <file>         Export results to file
  --correlate             Enable log correlation`}
              </CodeBlock>
            </div>

            <h2 id="best-practices" className="text-2xl font-bold text-gray-900 mb-4">Best Practices</h2>
            <p className="text-gray-700 mb-6">
              Log analysis best practices to maximize detection accuracy and operational insights.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">Log Analysis Strategy</h4>
              <ol className="list-decimal list-inside text-blue-800 space-y-2">
                <li>Standardize log formats across applications and systems</li>
                <li>Include sufficient context in log messages for analysis</li>
                <li>Train anomaly detection models on representative baseline data</li>
                <li>Set appropriate sensitivity levels to balance detection and noise</li>
                <li>Regularly update models with new normal behavior patterns</li>
                <li>Implement proper log retention and archival policies</li>
              </ol>
            </div>

            <h2 id="log-sources" className="text-2xl font-bold text-gray-900 mb-4">Log Sources</h2>
            <p className="text-gray-700 mb-6">
              AI LogAnalyzer supports a wide variety of log sources and formats for comprehensive analysis.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Supported Log Sources</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-200 text-center">
                <div className="font-semibold text-blue-900">System Logs</div>
                <div className="text-sm text-blue-700 mt-1">Syslog, EventLog</div>
              </div>
              <div className="bg-green-50 p-3 rounded-lg border border-green-200 text-center">
                <div className="font-semibold text-green-900">Application</div>
                <div className="text-sm text-green-700 mt-1">JSON, Plain Text</div>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg border border-purple-200 text-center">
                <div className="font-semibold text-purple-900">Web Servers</div>
                <div className="text-sm text-purple-700 mt-1">Apache, Nginx</div>
              </div>
              <div className="bg-orange-50 p-3 rounded-lg border border-orange-200 text-center">
                <div className="font-semibold text-orange-900">Cloud Services</div>
                <div className="text-sm text-orange-700 mt-1">AWS, Azure, GCP</div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Log Source Configuration</h3>
            <CodeBlock language="bash" title="Custom Log Sources">
{`# Add custom application log source
log-analyzer add-source --type custom \\
  --name "my-app" \\
  --path "/var/log/myapp/*.log" \\
  --format "custom" \\
  --pattern "%{TIMESTAMP:timestamp} %{LOGLEVEL:level} %{GREEDYDATA:message}"

# Add database log source
log-analyzer add-source --type database \\
  --name "postgres-logs" \\
  --host "db-server" \\
  --port 5432 \\
  --query "SELECT * FROM pg_log"

# Add cloud service logs
log-analyzer add-source --type azure-logs \\
  --name "app-service" \\
  --subscription-id "sub-123" \\
  --resource-group "production"`}
            </CodeBlock>

            <h2 id="alerting" className="text-2xl font-bold text-gray-900 mb-4">Alerting</h2>
            <p className="text-gray-700 mb-6">
              Intelligent alerting system that reduces noise and provides actionable notifications.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Alert Configuration</h3>
            <CodeBlock language="bash" title="Alert Setup">
{`# Configure Slack alerts
log-analyzer alert config --channel slack \\
  --webhook "https://hooks.slack.com/..." \\
  --channel "#alerts" \\
  --severity critical,high

# Configure email alerts
log-analyzer alert config --channel email \\
  --smtp-server "smtp.company.com" \\
  --recipients "ops@company.com,security@company.com" \\
  --template "security-alert"

# Configure PagerDuty integration
log-analyzer alert config --channel pagerduty \\
  --service-key "your-service-key" \\
  --escalation-policy "critical-issues"

# Set alert thresholds
log-analyzer alert threshold --metric anomaly_score --threshold 0.8
log-analyzer alert threshold --metric error_rate --threshold 0.05`}
            </CodeBlock>

            <h2 id="api-integration" className="text-2xl font-bold text-gray-900 mb-4">API Integration</h2>
            <p className="text-gray-700 mb-6">
              Integrate AI LogAnalyzer into your monitoring and observability stack.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">REST API</h3>
            <CodeBlock language="bash" title="API Usage">
{`# Submit logs for analysis via API
curl -X POST https://api.augment.cfd/v1/logs/analyze \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "source": "web-application",
    "logs": [
      {
        "timestamp": "2025-09-18T10:30:00Z",
        "level": "ERROR",
        "message": "Database connection failed",
        "user_id": "user123"
      }
    ],
    "detect_anomalies": true
  }'`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Python SDK</h3>
            <CodeBlock language="python" title="Python Integration">
{`from augment_log_analyzer import LogAnalyzer

# Initialize log analyzer
analyzer = LogAnalyzer(api_key=os.environ['AUGMENT_API_KEY'])

# Submit logs for analysis
analysis_result = await analyzer.analyze_logs(
    source='web-application',
    logs=log_entries,
    detect_anomalies=True,
    timeframe='1h'
)

# Get detected anomalies
anomalies = analysis_result.get_anomalies()
print(f"Detected {len(anomalies)} anomalies")

# Set up real-time monitoring
async def on_anomaly(anomaly):
    print(f"Anomaly detected: {anomaly.description}")
    await send_alert(anomaly)

monitor = analyzer.start_monitoring(
    source='web-application',
    on_anomaly=on_anomaly,
    sensitivity='medium'
)

# Search logs with natural language
search_results = await analyzer.search(
    query="database errors in the last hour",
    source='web-application'
)`}
            </CodeBlock>

            <h2 id="api-reference" className="text-2xl font-bold text-gray-900 mb-4">API Reference</h2>
            <p className="text-gray-700 mb-6">
              Complete API documentation for integrating log analysis into your applications.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Log Analysis Endpoint</h3>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">POST /v1/logs/analyze</h4>
              <p className="text-gray-700 mb-4">Analyze log entries and detect anomalies using AI.</p>
              
              <h5 className="font-medium text-gray-900 mb-2">Request Body:</h5>
              <CodeBlock language="json">
{`{
  "source": "web-application",
  "logs": [
    {
      "timestamp": "2025-09-18T10:30:00Z",
      "level": "ERROR",
      "message": "Database connection failed",
      "user_id": "user123",
      "request_id": "req-456",
      "response_time": 5000
    }
  ],
  "options": {
    "detect_anomalies": true,
    "extract_patterns": true,
    "correlate_events": true,
    "generate_insights": true
  },
  "analysis_type": "real_time|batch|historical",
  "timeframe": "1h|24h|7d",
  "sensitivity": "low|medium|high"
}`}
              </CodeBlock>

              <h5 className="font-medium text-gray-900 mb-2 mt-4">Response:</h5>
              <CodeBlock language="json">
{`{
  "analysis_id": "analysis-789",
  "status": "completed",
  "summary": {
    "total_logs": 1000,
    "anomalies_detected": 5,
    "patterns_found": 12,
    "severity_distribution": {
      "critical": 1,
      "high": 2,
      "medium": 2
    }
  },
  "anomalies": [
    {
      "id": "anomaly-001",
      "timestamp": "2025-09-18T10:30:00Z",
      "type": "statistical",
      "severity": "high",
      "confidence": 0.92,
      "description": "Unusual spike in database connection errors",
      "affected_logs": 15,
      "baseline_value": 2.1,
      "detected_value": 47.3,
      "context": {
        "time_window": "5m",
        "related_events": ["deployment-start", "config-change"]
      },
      "suggested_actions": [
        "Check database server health",
        "Review recent configuration changes",
        "Scale database connections"
      ]
    }
  ],
  "patterns": [
    {
      "id": "pattern-001",
      "type": "temporal",
      "description": "High error rate during deployment windows",
      "frequency": "weekly",
      "confidence": 0.87,
      "examples": [
        "2025-09-18T10:30:00Z: Deploy started, errors increased 300%",
        "2025-09-11T10:30:00Z: Deploy started, errors increased 250%"
      ]
    }
  ],
  "insights": [
    {
      "type": "recommendation",
      "title": "Implement circuit breaker pattern",
      "description": "High database error rates suggest need for resilience patterns",
      "priority": "high",
      "estimated_impact": "Reduce error propagation by 60%"
    }
  ]
}`}
              </CodeBlock>
            </div>

            <h2 id="troubleshooting" className="text-2xl font-bold text-gray-900 mb-4">Troubleshooting</h2>
            <p className="text-gray-700 mb-6">
              Common issues and solutions when running log analysis and anomaly detection.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Common Issues</h3>

            <div className="space-y-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-red-900 mb-2">High Memory Usage</h4>
                <p className="text-red-800 mb-3">Log analyzer consuming excessive memory during processing</p>
                <div className="text-red-800">
                  <strong>Solutions:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Reduce batch size for log processing</li>
                    <li>Increase number of workers for parallel processing</li>
                    <li>Implement log sampling for high-volume sources</li>
                    <li>Optimize Elasticsearch index settings</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-yellow-900 mb-2">False Positive Anomalies</h4>
                <p className="text-yellow-800 mb-3">Too many false positive anomaly alerts</p>
                <div className="text-yellow-800">
                  <strong>Solutions:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Adjust anomaly detection sensitivity settings</li>
                    <li>Extend baseline training period for models</li>
                    <li>Add known patterns to whitelist</li>
                    <li>Fine-tune confidence thresholds</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">Log Processing Lag</h4>
                <p className="text-blue-800 mb-3">Delay between log generation and analysis</p>
                <div className="text-blue-800">
                  <strong>Solutions:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Optimize log shipper configuration</li>
                    <li>Increase Redis buffer size</li>
                    <li>Scale Elasticsearch cluster horizontally</li>
                    <li>Implement log preprocessing pipelines</li>
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
                  <h3 className="text-sm font-medium text-green-900">Log Analysis Documentation Complete!</h3>
                  <p className="mt-1 text-sm text-green-700">
                    You now have comprehensive knowledge to implement AI LogAnalyzer in your observability stack. From basic log processing to advanced anomaly detection, you're equipped to gain intelligent insights from your log data with AI-powered analysis.
                  </p>
                </div>
              </div>
            </div>

            <hr className="my-8 border-gray-200" />

            <p className="text-gray-600 text-center">
              <strong>Ready to revolutionize your log analysis?</strong> Start your free trial today and discover how AI can transform your log data into actionable insights and proactive monitoring.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
