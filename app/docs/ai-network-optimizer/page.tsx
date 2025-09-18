import { Breadcrumb } from "@/components/ui/Breadcrumb"
import { CodeBlock } from "@/components/docs/CodeBlock"
import { FeatureCard } from "@/components/docs/FeatureCard"
import { DocsSidebar } from "@/components/docs/DocsSidebar"

const navigationItems = [
  { title: 'Overview', href: '/docs/ai-network-optimizer#overview' },
  { title: 'Installation', href: '/docs/ai-network-optimizer#installation' },
  { title: 'Quick Start', href: '/docs/ai-network-optimizer#quick-start' },
  { title: 'Configuration', href: '/docs/ai-network-optimizer#configuration' },
  { title: 'Traffic Analysis', href: '/docs/ai-network-optimizer#traffic-analysis' },
  { title: 'Environment Variables', href: '/docs/ai-network-optimizer#environment-variables' },
  { title: 'Basic Usage', href: '/docs/ai-network-optimizer#usage' },
  { title: 'CLI Commands', href: '/docs/ai-network-optimizer#cli-commands' },
  { title: 'Best Practices', href: '/docs/ai-network-optimizer#best-practices' },
  { title: 'Route Optimization', href: '/docs/ai-network-optimizer#route-optimization' },
  { title: 'Performance Tuning', href: '/docs/ai-network-optimizer#performance-tuning' },
  { title: 'API Integration', href: '/docs/ai-network-optimizer#api-integration' },
  { title: 'API Reference', href: '/docs/ai-network-optimizer#api-reference' },
  { title: 'Troubleshooting', href: '/docs/ai-network-optimizer#troubleshooting' }
]

export default function AINetworkOptimizerDocsPage() {
  return (
    <>
      <DocsSidebar 
        appName="AI NetworkOptimizer"
        appLogo="/net-router.svg"
        navigationItems={navigationItems}
      />
      
      <main className="flex-1 max-w-4xl mx-auto px-6 py-8">
        <div className="docs-content">
          <div className="mb-6">
            <Breadcrumb className="mb-4" />
          </div>

          <div id="overview" className="flex items-center space-x-4 mb-8">
            <img src="/net-router.svg" alt="AI NetworkOptimizer" className="w-12 h-12" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">AI NetworkOptimizer</h1>
              <p className="text-lg text-gray-600">Self-optimizing network routing with machine learning</p>
            </div>
          </div>

          {/* Key Capabilities Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <FeatureCard
              title="Smart Routing"
              description="AI analyzes traffic patterns and automatically optimizes routing decisions for maximum performance and reliability"
              icon=""
            />
            <FeatureCard
              title="Congestion Prediction"
              description="Machine learning models predict network congestion before it occurs and proactively reroute traffic"
              icon=""
            />
            <FeatureCard
              title="Performance Analytics"
              description="Deep traffic analysis provides insights into network performance, bottlenecks, and optimization opportunities"
              icon=""
            />
            <FeatureCard
              title="Auto-Configuration"
              description="Intelligent network configuration that adapts to changing conditions and optimizes for current workloads"
              icon=""
            />
          </div>

          {/* Network Dashboard Mockup */}
          <div className="my-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-gray-200">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-gray-900 px-4 py-2 flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300 text-sm ml-4">AI NetworkOptimizer Dashboard</span>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <div className="text-2xl font-bold text-green-600">156</div>
                      <div className="text-sm text-green-700">Active Routes</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <div className="text-2xl font-bold text-blue-600">89%</div>
                      <div className="text-sm text-blue-700">Route Efficiency</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <div className="text-2xl font-bold text-purple-600">12ms</div>
                      <div className="text-sm text-purple-700">Avg Latency</div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                      <div className="text-2xl font-bold text-orange-600">23</div>
                      <div className="text-sm text-orange-700">Optimizations Today</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 text-center">
                    AI-powered network routing optimization with predictive traffic management
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-gray max-w-none">
            <h2 id="installation" className="text-2xl font-bold text-gray-900 mb-4">Installation</h2>
            <p className="text-gray-700 mb-6">
              Deploy AI NetworkOptimizer to start intelligent network routing optimization with machine learning.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">System Requirements</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Linux kernel 4.9+ with eBPF support</li>
              <li>Python 3.8+ and Node.js 16+ for AI models</li>
              <li>Network admin privileges for routing table access</li>
              <li>Minimum 2GB RAM (4GB recommended for large networks)</li>
              <li>Access to network infrastructure and routing devices</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Install via Package Manager</h3>
            <CodeBlock language="bash" title="Installation">
{`# Install via pip
pip install augment-network-optimizer

# Install via npm for monitoring dashboard
npm install -g @augment/network-optimizer-cli

# Install from source
git clone https://github.com/augment-ai/network-optimizer
cd network-optimizer
pip install -e .

# Install network dependencies
sudo apt-get install iproute2 iptables tcpdump

# Verify installation
net-optimizer --version`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Network Infrastructure Integration</h3>
            <p className="text-gray-700 mb-4">
              Configure integration with your network infrastructure and monitoring systems:
            </p>

            <CodeBlock language="bash" title="Network Integration">
{`# Set Augment API key
export AUGMENT_API_KEY=your_api_key_here

# Configure network device access
export NETWORK_DEVICES="router1.company.com,switch1.company.com"
export SNMP_COMMUNITY=public
export SSH_KEY_PATH=/path/to/network-key

# Configure monitoring integration
export PROMETHEUS_URL=http://prometheus:9090
export INFLUXDB_URL=http://influxdb:8086

# Initialize network optimizer
net-optimizer init --discover-topology

# Verify network access
net-optimizer health-check --test-connectivity`}
            </CodeBlock>

            <h2 id="quick-start" className="text-2xl font-bold text-gray-900 mb-4">Quick Start</h2>
            <p className="text-gray-700 mb-6">
              Get intelligent network optimization running in minutes with automated discovery and AI-powered routing.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Discover Network Topology</h3>
            <CodeBlock language="bash" title="Network Discovery">
{`# Auto-discover network topology
net-optimizer discover --scan-range 192.168.0.0/16 --protocols bgp,ospf

# Analyze current routing configuration
net-optimizer analyze --baseline --performance-metrics

# Generate network map
net-optimizer topology --visualize --output network-map.html

# Identify optimization opportunities
net-optimizer assess --bottlenecks --inefficient-routes`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Enable AI Optimization</h3>
            <CodeBlock language="bash" title="AI Optimization Setup">
{`# Enable AI-powered route optimization
net-optimizer optimize --enable-ai --learning-mode supervised

# Configure traffic analysis
net-optimizer traffic --enable-monitoring --sampling-rate 1000

# Set optimization goals
net-optimizer goals --minimize-latency --maximize-throughput --load-balance

# Start predictive optimization
net-optimizer predict --enable-congestion-prediction --forecast-window 30m`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Monitor and Tune</h3>
            <CodeBlock language="bash" title="Monitoring Operations">
{`# Start real-time monitoring
net-optimizer monitor --real-time --dashboard

# View optimization results
net-optimizer status --show-improvements --compare-baseline

# Generate performance report
net-optimizer report --type performance --output optimization-report.pdf

# Fine-tune AI models
net-optimizer tune --retrain-models --performance-feedback`}
            </CodeBlock>

            <h2 id="configuration" className="text-2xl font-bold text-gray-900 mb-4">Configuration</h2>
            <p className="text-gray-700 mb-6">
              Configure AI NetworkOptimizer to align with your network architecture and optimization objectives.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Basic Configuration</h3>
            <CodeBlock language="yaml" title=".net-optimizer.yaml">
{`version: "1.0"
organization: "your-company"
environment: "production"

network_topology:
  discovery:
    auto_discover: true
    scan_interval: "1h"
    protocols: ["bgp", "ospf", "isis"]
  devices:
    - name: "core-router-1"
      type: "router"
      management_ip: "10.0.1.1"
      protocol: "ssh"
      credentials: "{SSH_KEY_PATH}"
    - name: "core-switch-1"
      type: "switch"
      management_ip: "10.0.1.2"
      protocol: "snmp"
      community: "{SNMP_COMMUNITY}"

ai_optimization:
  machine_learning:
    enabled: true
    models: ["traffic_prediction", "congestion_avoidance", "route_optimization"]
    training_data_retention: "30d"
    retrain_interval: "24h"
  optimization_goals:
    primary: "minimize_latency"
    secondary: ["maximize_throughput", "load_balance", "minimize_cost"]
    weights:
      latency: 0.4
      throughput: 0.3
      reliability: 0.2
      cost: 0.1

traffic_analysis:
  monitoring:
    enabled: true
    sampling_rate: 1000
    flow_timeout: "60s"
    analysis_window: "5m"
  collection_methods:
    - "netflow"
    - "sflow"
    - "ebpf"
  metrics:
    - "bandwidth_utilization"
    - "packet_loss"
    - "latency"
    - "jitter"

routing_optimization:
  protocols:
    bgp:
      enabled: true
      communities: ["65001:100", "65001:200"]
      route_maps: ["OPTIMIZE_IN", "OPTIMIZE_OUT"]
    ospf:
      enabled: true
      areas: ["0.0.0.0", "0.0.0.1"]
      cost_optimization: true
  policies:
    load_balancing:
      enabled: true
      algorithm: "weighted_ecmp"
      max_paths: 4
    failover:
      enabled: true
      detection_time: "3s"
      recovery_time: "10s"

prediction_models:
  congestion_prediction:
    enabled: true
    prediction_window: "30m"
    confidence_threshold: 0.8
  traffic_forecasting:
    enabled: true
    forecast_horizon: "2h"
    seasonal_patterns: true
  failure_prediction:
    enabled: true
    predict_link_failures: true
    predict_device_failures: true

automation:
  auto_optimization:
    enabled: true
    safe_mode: true
    rollback_time: "5m"
  notifications:
    channels: ["slack", "email", "webhook"]
    events: ["optimization_applied", "congestion_predicted", "failure_detected"]

monitoring:
  dashboards:
    enabled: true
    refresh_interval: "30s"
    metrics_retention: "90d"
  alerting:
    enabled: true
    thresholds:
      latency_increase: 20
      throughput_decrease: 15
      packet_loss: 1`}
            </CodeBlock>

            <h2 id="traffic-analysis" className="text-2xl font-bold text-gray-900 mb-4">Traffic Analysis</h2>
            <p className="text-gray-700 mb-6">
              AI NetworkOptimizer provides comprehensive traffic analysis using multiple collection methods and machine learning.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">Flow Analysis</h4>
                <ul className="text-blue-800 space-y-2 text-sm">
                  <li>• NetFlow/sFlow collection</li>
                  <li>• Real-time flow analysis</li>
                  <li>• Application-aware routing</li>
                  <li>• QoS optimization</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-green-900 mb-3">Performance Metrics</h4>
                <ul className="text-green-800 space-y-2 text-sm">
                  <li>• Latency measurement</li>
                  <li>• Bandwidth utilization</li>
                  <li>• Packet loss detection</li>
                  <li>• Jitter analysis</li>
                </ul>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-purple-900 mb-3">Pattern Recognition</h4>
                <ul className="text-purple-800 space-y-2 text-sm">
                  <li>• Traffic pattern learning</li>
                  <li>• Anomaly detection</li>
                  <li>• Seasonal pattern analysis</li>
                  <li>• Predictive modeling</li>
                </ul>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-orange-900 mb-3">Optimization Insights</h4>
                <ul className="text-orange-800 space-y-2 text-sm">
                  <li>• Route efficiency analysis</li>
                  <li>• Bottleneck identification</li>
                  <li>• Capacity planning</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>
            </div>

            <h2 id="environment-variables" className="text-2xl font-bold text-gray-900 mb-4">Environment Variables</h2>
            <p className="text-gray-700 mb-6">
              Configure AI NetworkOptimizer behavior using environment variables for different deployment scenarios.
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
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">NET_OPTIMIZER_CONFIG</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Path to configuration file</td>
                    <td className="px-6 py-4 text-sm text-gray-500">.net-optimizer.yaml</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">NETWORK_DEVICES</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Comma-separated list of network devices</td>
                    <td className="px-6 py-4 text-sm text-gray-500">auto-discover</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">NET_OPTIMIZER_LOG_LEVEL</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Logging level (debug/info/warn/error)</td>
                    <td className="px-6 py-4 text-sm text-gray-500">info</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="usage" className="text-2xl font-bold text-gray-900 mb-4">Basic Usage</h2>
            <p className="text-gray-700 mb-6">
              Learn the fundamental network optimization patterns and intelligent routing workflows.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Network Commands</h3>
            <CodeBlock language="bash" title="Network Optimization">
{`# Analyze network performance and identify optimization opportunities
net-optimizer analyze --full-topology --performance-baseline

# Enable AI-powered route optimization
net-optimizer optimize --enable-ai --learning-mode --safe-rollback

# Monitor network traffic and predict congestion
net-optimizer monitor --traffic-analysis --congestion-prediction

# Generate network optimization report
net-optimizer report --performance-improvements --recommendations`}
            </CodeBlock>

            <h2 id="cli-commands" className="text-2xl font-bold text-gray-900 mb-4">CLI Commands Reference</h2>
            <p className="text-gray-700 mb-6">
              Complete reference for all network optimization and intelligent routing commands.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">optimize</h4>
              <p className="text-gray-700 mb-3">Enable AI-powered network route optimization with machine learning</p>
              <CodeBlock language="bash">
{`net-optimizer optimize [options]

Options:
  --enable-ai              Enable AI-powered optimization
  --learning-mode <mode>   Learning mode (supervised|unsupervised|reinforcement)
  --goals <goals>          Optimization goals (latency|throughput|reliability|cost)
  --protocols <protocols>  Routing protocols to optimize (bgp|ospf|isis)
  --safe-rollback         Enable automatic rollback on performance degradation
  --dry-run               Preview optimizations without applying
  --continuous            Enable continuous optimization
  --constraints <file>    Load optimization constraints from file`}
              </CodeBlock>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">traffic</h4>
              <p className="text-gray-700 mb-3">Analyze network traffic patterns and predict congestion</p>
              <CodeBlock language="bash">
{`net-optimizer traffic [options]

Options:
  --enable-monitoring      Enable real-time traffic monitoring
  --sampling-rate <rate>   Traffic sampling rate (packets per second)
  --analysis-window <time> Analysis time window (5m|15m|1h)
  --flow-export <format>   Export flow data (netflow|sflow|json)
  --anomaly-detection      Enable traffic anomaly detection
  --baseline <duration>    Establish traffic baseline over duration
  --predict-congestion     Enable congestion prediction
  --export-data <file>     Export traffic analysis data`}
              </CodeBlock>
            </div>

            <h2 id="best-practices" className="text-2xl font-bold text-gray-900 mb-4">Best Practices</h2>
            <p className="text-gray-700 mb-6">
              Network optimization best practices to maximize performance while maintaining stability.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">AI-Powered Network Optimization Strategy</h4>
              <ol className="list-decimal list-inside text-blue-800 space-y-2">
                <li>Start with comprehensive network discovery and baseline analysis</li>
                <li>Enable safe mode for initial AI optimizations to prevent disruptions</li>
                <li>Use gradual learning to train AI models on your specific network patterns</li>
                <li>Monitor optimization impact and adjust goals based on performance</li>
                <li>Implement automated rollback mechanisms for failed optimizations</li>
                <li>Regularly retrain models with fresh traffic data and patterns</li>
              </ol>
            </div>

            <h2 id="route-optimization" className="text-2xl font-bold text-gray-900 mb-4">Route Optimization</h2>
            <p className="text-gray-700 mb-6">
              Advanced route optimization using machine learning to automatically improve network performance.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Optimization Algorithms</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h5 className="font-semibold text-green-900 mb-2">Shortest Path</h5>
                <p className="text-sm text-green-800">AI-enhanced shortest path algorithms with real-time cost updates</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h5 className="font-semibold text-blue-900 mb-2">Load Balancing</h5>
                <p className="text-sm text-blue-800">Intelligent traffic distribution across multiple paths</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h5 className="font-semibold text-purple-900 mb-2">Congestion Avoidance</h5>
                <p className="text-sm text-purple-800">Predictive routing to avoid congested network segments</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Route Configuration</h3>
            <CodeBlock language="bash" title="Route Optimization">
{`# Configure intelligent route optimization
net-optimizer routes --optimize-algorithm hybrid --consider-congestion

# Set up multi-path routing with AI load balancing
net-optimizer multipath --enable-ecmp --ai-load-balance --max-paths 4

# Configure traffic engineering with ML predictions
net-optimizer traffic-engineering --enable-rsvp-te --ai-bandwidth-allocation

# Optimize BGP route selection with machine learning
net-optimizer bgp --optimize-selection --ai-path-attributes --communities`}
            </CodeBlock>

            <h2 id="performance-tuning" className="text-2xl font-bold text-gray-900 mb-4">Performance Tuning</h2>
            <p className="text-gray-700 mb-6">
              Fine-tune network performance using AI insights and automated optimization techniques.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Optimization</h3>
            <CodeBlock language="bash" title="Performance Tuning">
{`# Tune network performance parameters with AI optimization
net-optimizer tune --buffer-sizes --congestion-windows --qos-policies

# Optimize bandwidth allocation based on traffic patterns
net-optimizer bandwidth --ai-allocation --dynamic-adjustment --priority-classes

# Configure adaptive QoS with machine learning
net-optimizer qos --adaptive-policies --ai-classification --auto-marking

# Optimize network protocols for performance
net-optimizer protocols --tcp-optimization --udp-tuning --routing-convergence`}
            </CodeBlock>

            <h2 id="api-integration" className="text-2xl font-bold text-gray-900 mb-4">API Integration</h2>
            <p className="text-gray-700 mb-6">
              Integrate AI NetworkOptimizer into your network management and orchestration systems.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">REST API</h3>
            <CodeBlock language="bash" title="API Usage">
{`# Trigger network optimization via API
curl -X POST https://api.augment.cfd/v1/network/optimize \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "network_id": "prod-network-01",
    "optimization_goals": ["minimize_latency", "maximize_throughput"],
    "enable_ai": true,
    "safe_mode": true
  }'`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Python SDK</h3>
            <CodeBlock language="python" title="Python Integration">
{`from augment_network_optimizer import NetworkOptimizer

# Initialize network optimizer
optimizer = NetworkOptimizer(api_key=os.environ['AUGMENT_API_KEY'])

# Discover network topology
topology = await optimizer.discover_topology(
    scan_range='10.0.0.0/8',
    protocols=['bgp', 'ospf'],
    include_metrics=True
)

# Enable AI optimization
optimization = await optimizer.enable_ai_optimization(
    goals=['minimize_latency', 'load_balance'],
    learning_mode='supervised',
    safe_mode=True
)

print(f"Optimization enabled for {len(topology.devices)} devices")

# Monitor traffic and get predictions
traffic_analysis = await optimizer.analyze_traffic(
    duration='1h',
    enable_prediction=True,
    congestion_threshold=0.8
)

# Get optimization recommendations
recommendations = await optimizer.get_recommendations(
    network_id='prod-network-01',
    priority='high',
    include_impact_analysis=True
)`}
            </CodeBlock>

            <h2 id="api-reference" className="text-2xl font-bold text-gray-900 mb-4">API Reference</h2>
            <p className="text-gray-700 mb-6">
              Complete API documentation for integrating network optimization into your applications.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Network Optimization Endpoint</h3>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">POST /v1/network/optimize</h4>
              <p className="text-gray-700 mb-4">Enable AI-powered network optimization with intelligent routing.</p>
              
              <h5 className="font-medium text-gray-900 mb-2">Request Body:</h5>
              <CodeBlock language="json">
{`{
  "network_config": {
    "network_id": "prod-network-01",
    "topology_discovery": {
      "auto_discover": true,
      "scan_ranges": ["10.0.0.0/8", "192.168.0.0/16"],
      "protocols": ["bgp", "ospf", "isis"]
    },
    "devices": [
      {
        "hostname": "core-router-1",
        "management_ip": "10.0.1.1",
        "device_type": "router",
        "vendor": "cisco"
      }
    ]
  },
  "optimization_settings": {
    "ai_enabled": true,
    "learning_mode": "supervised",
    "optimization_goals": [
      {
        "goal": "minimize_latency",
        "weight": 0.4
      },
      {
        "goal": "maximize_throughput",
        "weight": 0.3
      },
      {
        "goal": "load_balance",
        "weight": 0.3
      }
    ],
    "constraints": {
      "max_latency_increase": "10%",
      "min_reliability": 99.9,
      "cost_budget": 10000
    }
  },
  "traffic_analysis": {
    "enable_monitoring": true,
    "sampling_rate": 1000,
    "analysis_window": "5m",
    "prediction_enabled": true,
    "congestion_threshold": 0.8
  },
  "safety_settings": {
    "safe_mode": true,
    "rollback_timeout": "5m",
    "validation_tests": true,
    "approval_required": false
  }
}`}
              </CodeBlock>

              <h5 className="font-medium text-gray-900 mb-2 mt-4">Response:</h5>
              <CodeBlock language="json">
{`{
  "optimization_id": "opt-12345",
  "status": "completed",
  "network_id": "prod-network-01",
  "summary": {
    "devices_optimized": 12,
    "routes_optimized": 156,
    "optimization_time": "2m 34s",
    "ai_models_applied": 3
  },
  "performance_improvements": {
    "latency_reduction": {
      "average": "23%",
      "max": "45%",
      "baseline_ms": 28.5,
      "optimized_ms": 21.9
    },
    "throughput_increase": {
      "average": "18%",
      "max": "32%",
      "baseline_mbps": 850.2,
      "optimized_mbps": 1003.7
    },
    "load_distribution": {
      "variance_reduction": "34%",
      "utilization_balance": 0.89
    }
  },
  "route_changes": [
    {
      "destination": "192.168.1.0/24",
      "old_path": ["10.0.1.1", "10.0.2.1", "10.0.3.1"],
      "new_path": ["10.0.1.1", "10.0.4.1", "10.0.3.1"],
      "improvement": {
        "latency_reduction": "15ms",
        "reason": "congestion_avoidance"
      }
    }
  ],
  "ai_insights": [
    {
      "type": "traffic_pattern",
      "insight": "High bandwidth utilization detected on link 10.0.1.1->10.0.2.1 during business hours",
      "recommendation": "Consider implementing time-based load balancing",
      "confidence": 0.92
    }
  ],
  "predictions": {
    "congestion_forecast": [
      {
        "link": "10.0.1.1->10.0.2.1",
        "predicted_congestion": "14:30-16:00",
        "probability": 0.87,
        "mitigation": "traffic_rerouting_enabled"
      }
    ]
  }
}`}
              </CodeBlock>
            </div>

            <h2 id="troubleshooting" className="text-2xl font-bold text-gray-900 mb-4">Troubleshooting</h2>
            <p className="text-gray-700 mb-6">
              Common issues and solutions when implementing AI-powered network optimization.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Common Issues</h3>

            <div className="space-y-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-red-900 mb-2">Optimization Causing Performance Degradation</h4>
                <p className="text-red-800 mb-3">AI optimizations resulting in worse network performance</p>
                <div className="text-red-800">
                  <strong>Solutions:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Enable safe mode with automatic rollback on performance degradation</li>
                    <li>Increase AI model training data collection period</li>
                    <li>Adjust optimization goals and constraint weights</li>
                    <li>Use gradual optimization approach instead of aggressive changes</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-yellow-900 mb-2">Inaccurate Traffic Predictions</h4>
                <p className="text-yellow-800 mb-3">Machine learning models not accurately predicting traffic patterns</p>
                <div className="text-yellow-800">
                  <strong>Solutions:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Increase traffic sampling rate for better data quality</li>
                    <li>Extend baseline period to capture seasonal patterns</li>
                    <li>Include more diverse traffic scenarios in training data</li>
                    <li>Tune prediction confidence thresholds based on accuracy metrics</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">Network Device Integration Issues</h4>
                <p className="text-blue-800 mb-3">Problems connecting to or configuring network devices</p>
                <div className="text-blue-800">
                  <strong>Solutions:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Verify device credentials and network connectivity</li>
                    <li>Check device API versions and compatibility</li>
                    <li>Ensure required privileges for configuration changes</li>
                    <li>Test device integration with health-check command</li>
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
                  <h3 className="text-sm font-medium text-green-900">Network Optimization Documentation Complete!</h3>
                  <p className="mt-1 text-sm text-green-700">
                    You now have comprehensive knowledge to implement AI NetworkOptimizer in your network infrastructure. From intelligent routing to predictive traffic management, you're equipped to enhance network performance with AI-powered optimization.
                  </p>
                </div>
              </div>
            </div>

            <hr className="my-8 border-gray-200" />

            <p className="text-gray-600 text-center">
              <strong>Ready to optimize your network with AI?</strong> Start your free network analysis today and discover how machine learning can transform your routing performance.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
