import { Breadcrumb } from "@/components/ui/Breadcrumb"
import { CodeBlock } from "@/components/docs/CodeBlock"
import { FeatureCard } from "@/components/docs/FeatureCard"
import { DocsSidebar } from "@/components/docs/DocsSidebar"

const navigationItems = [
  { title: 'Overview', href: '/docs/aether-cli#overview' },
  { title: 'Installation', href: '/docs/aether-cli#installation' },
  { title: 'Quick Start', href: '/docs/aether-cli#quick-start' },
  { title: 'Configuration', href: '/docs/aether-cli#configuration' },
  { title: 'AI Commands', href: '/docs/aether-cli#ai-commands' },
  { title: 'Environment Variables', href: '/docs/aether-cli#environment-variables' },
  { title: 'Basic Usage', href: '/docs/aether-cli#usage' },
  { title: 'CLI Commands', href: '/docs/aether-cli#cli-commands' },
  { title: 'Best Practices', href: '/docs/aether-cli#best-practices' },
  { title: 'Smart Automation', href: '/docs/aether-cli#smart-automation' },
  { title: 'Context Learning', href: '/docs/aether-cli#context-learning' },
  { title: 'API Integration', href: '/docs/aether-cli#api-integration' },
  { title: 'API Reference', href: '/docs/aether-cli#api-reference' },
  { title: 'Troubleshooting', href: '/docs/aether-cli#troubleshooting' }
]

export default function AetherCLIDocsPage() {
  return (
    <>
      <DocsSidebar 
        appName="Aether CLI"
        appLogo="/aether-cli.svg"
        navigationItems={navigationItems}
      />
      
      <main className="flex-1 max-w-4xl mx-auto px-6 py-8">
        <div className="docs-content">
          <div className="mb-6">
            <Breadcrumb className="mb-4" />
          </div>

          <div id="overview" className="flex items-center space-x-4 mb-8">
            <img src="/aether-cli.svg" alt="Aether CLI" className="w-12 h-12" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Aether CLI</h1>
              <p className="text-lg text-gray-600">Intelligent command-line automation</p>
            </div>
          </div>

          {/* Key Capabilities Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <FeatureCard
              title="Natural Language Commands"
              description="Execute complex operations using natural language that gets translated to precise command sequences"
              icon=""
            />
            <FeatureCard
              title="Context-Aware Automation"
              description="AI learns your environment and preferences to suggest optimal commands and automate repetitive tasks"
              icon=""
            />
            <FeatureCard
              title="Smart Command Completion"
              description="Intelligent autocomplete that understands context, command history, and system state"
              icon=""
            />
            <FeatureCard
              title="Predictive Assistance"
              description="Proactive suggestions and error prevention based on command patterns and system analysis"
              icon=""
            />
          </div>

          {/* CLI Interface Mockup */}
          <div className="my-8">
            <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-6 border border-gray-200">
              <div className="bg-gray-900 rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300 text-sm ml-4">Aether CLI - Intelligent Terminal</span>
                </div>
                <div className="p-6 font-mono text-sm">
                  <div className="text-green-400">$ aether "deploy my app to production with zero downtime"</div>
                  <div className="text-blue-400 mt-2">AI: Analyzing deployment requirements...</div>
                  <div className="text-yellow-400 mt-1">AI: Found Docker configuration, Kubernetes manifests</div>
                  <div className="text-white mt-2">Executing: kubectl apply -f k8s/ --strategy=rolling-update</div>
                  <div className="text-white mt-1">Executing: kubectl rollout status deployment/app-deployment</div>
                  <div className="text-green-400 mt-2">✓ Deployment completed successfully with zero downtime</div>
                  <div className="text-gray-400 mt-4">$ aether suggest</div>
                  <div className="text-blue-400 mt-1">AI: Based on your patterns, you might want to:</div>
                  <div className="text-white mt-1">  • Set up monitoring alerts for the new deployment</div>
                  <div className="text-white mt-1">  • Run performance tests on the updated service</div>
                  <div className="text-white mt-1">  • Update documentation with deployment notes</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-gray max-w-none">
            <h2 id="installation" className="text-2xl font-bold text-gray-900 mb-4">Installation</h2>
            <p className="text-gray-700 mb-6">
              Install Aether CLI to start intelligent command-line automation with AI-powered assistance and natural language processing.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">System Requirements</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Linux, macOS, or Windows with WSL2</li>
              <li>Python 3.8+ or Node.js 16+ (depending on installation method)</li>
              <li>Terminal with ANSI color support</li>
              <li>Internet connection for AI model access</li>
              <li>Minimum 2GB RAM for local AI processing</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Install via Package Manager</h3>
            <CodeBlock language="bash" title="Installation">
{`# Install via npm (recommended)
npm install -g @augment/aether-cli

# Install via pip
pip install augment-aether-cli

# Install via Homebrew (macOS)
brew install augment-ai/tap/aether-cli

# Install from source
git clone https://github.com/augment-ai/aether-cli
cd aether-cli
npm install && npm run build && npm link

# Verify installation
aether --version`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Initial Setup and Configuration</h3>
            <p className="text-gray-700 mb-4">
              Configure Aether CLI with your API key and personalize the AI assistant:
            </p>

            <CodeBlock language="bash" title="Initial Setup">
{`# Set up Aether CLI with your API key
aether setup --api-key your_api_key_here

# Configure AI preferences and learning mode
aether config --learning-mode adaptive --context-awareness high

# Initialize shell integration for smart completion
aether shell-init --shell bash  # or zsh, fish, powershell

# Enable natural language processing
aether enable --natural-language --smart-suggestions --predictive-assistance

# Test the setup
aether "show me system information"

# Verify AI integration
aether health-check --test-ai --validate-context`}
            </CodeBlock>

            <h2 id="quick-start" className="text-2xl font-bold text-gray-900 mb-4">Quick Start</h2>
            <p className="text-gray-700 mb-6">
              Get intelligent command-line automation running in minutes with natural language processing and context-aware assistance.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Basic Natural Language Commands</h3>
            <CodeBlock language="bash" title="Natural Language Usage">
{`# Use natural language for complex operations
aether "find all large files over 100MB in my home directory"

# Deploy applications with intelligent assistance
aether "deploy my node app to production safely"

# System administration with AI guidance
aether "check system health and suggest optimizations"

# Git operations with smart context
aether "commit my changes with a meaningful message"`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Enable Smart Automation</h3>
            <CodeBlock language="bash" title="Automation Setup">
{`# Enable intelligent command suggestions
aether enable suggestions --context-aware --learning-enabled

# Set up automated workflows
aether workflow create --name "daily-backup" --trigger "schedule:daily"

# Configure predictive assistance
aether config --predictive-mode enabled --error-prevention high

# Enable smart command completion
aether completion install --intelligent --context-sensitive`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Personalize AI Assistant</h3>
            <CodeBlock language="bash" title="Personalization">
{`# Train AI on your command patterns
aether learn --analyze-history --personalize-suggestions

# Set up custom aliases and shortcuts
aether alias create --name "deploy-prod" --command "deploy to production with checks"

# Configure context preferences
aether context --prefer-verbose --include-explanations --safety-first

# Enable proactive assistance
aether assistant --proactive-suggestions --error-prediction --optimization-hints`}
            </CodeBlock>

            <h2 id="configuration" className="text-2xl font-bold text-gray-900 mb-4">Configuration</h2>
            <p className="text-gray-700 mb-6">
              Configure Aether CLI to align with your workflow preferences and AI assistance requirements.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Basic Configuration</h3>
            <CodeBlock language="yaml" title="~/.aether/config.yaml">
{`version: "1.0"
user_profile:
  name: "developer"
  experience_level: "intermediate"
  preferred_shell: "zsh"
  working_directory: "/home/user/projects"

ai_settings:
  natural_language:
    enabled: true
    confidence_threshold: 0.8
    context_window: 50
    learning_mode: "adaptive"
  smart_completion:
    enabled: true
    prediction_depth: 3
    context_aware: true
    history_weight: 0.7
  suggestions:
    proactive: true
    error_prevention: true
    optimization_hints: true
    safety_checks: true

automation:
  workflows:
    enabled: true
    auto_execute_safe: true
    confirmation_required: ["delete", "deploy", "system"]
  command_chaining:
    enabled: true
    intelligent_sequencing: true
    error_handling: "graceful"
  predictive_assistance:
    enabled: true
    pattern_recognition: true
    context_learning: true

personalization:
  command_history:
    retention_days: 90
    pattern_analysis: true
    privacy_mode: false
  preferences:
    verbosity: "medium"
    explanations: true
    confirmations: "smart"
    color_scheme: "auto"
  learning:
    adaptive_suggestions: true
    pattern_recognition: true
    context_awareness: true
    feedback_integration: true

integrations:
  shell:
    type: "zsh"
    completion_enabled: true
    prompt_integration: true
    history_sync: true
  tools:
    git:
      enabled: true
      smart_commits: true
      branch_suggestions: true
    docker:
      enabled: true
      intelligent_builds: true
      optimization_suggestions: true
    kubernetes:
      enabled: true
      context_awareness: true
      safety_checks: true

security:
  api_key_storage: "encrypted"
  command_validation: true
  dangerous_command_protection: true
  audit_logging: true
  privacy_mode: false

display:
  colors:
    enabled: true
    scheme: "dark"
  formatting:
    tables: true
    progress_bars: true
    icons: true
  output:
    verbosity: "medium"
    explanations: true
    suggestions: true`}
            </CodeBlock>

            <h2 id="ai-commands" className="text-2xl font-bold text-gray-900 mb-4">AI Commands</h2>
            <p className="text-gray-700 mb-6">
              Aether CLI provides comprehensive AI-powered command assistance and intelligent automation capabilities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">Natural Language Processing</h4>
                <ul className="text-blue-800 space-y-2 text-sm">
                  <li>• Convert natural language to commands</li>
                  <li>• Context-aware command interpretation</li>
                  <li>• Multi-step operation planning</li>
                  <li>• Intelligent parameter inference</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-green-900 mb-3">Smart Automation</h4>
                <ul className="text-green-800 space-y-2 text-sm">
                  <li>• Automated workflow execution</li>
                  <li>• Intelligent command chaining</li>
                  <li>• Error handling and recovery</li>
                  <li>• Predictive task scheduling</li>
                </ul>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-purple-900 mb-3">Context Learning</h4>
                <ul className="text-purple-800 space-y-2 text-sm">
                  <li>• Environment and project awareness</li>
                  <li>• Command history analysis</li>
                  <li>• Pattern recognition and learning</li>
                  <li>• Personalized suggestions</li>
                </ul>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-orange-900 mb-3">Predictive Assistance</h4>
                <ul className="text-orange-800 space-y-2 text-sm">
                  <li>• Proactive error prevention</li>
                  <li>• Performance optimization hints</li>
                  <li>• Resource usage predictions</li>
                  <li>• Security vulnerability warnings</li>
                </ul>
              </div>
            </div>

            <h2 id="environment-variables" className="text-2xl font-bold text-gray-900 mb-4">Environment Variables</h2>
            <p className="text-gray-700 mb-6">
              Configure Aether CLI behavior using environment variables for different usage scenarios.
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
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">AETHER_CONFIG_PATH</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Path to configuration file</td>
                    <td className="px-6 py-4 text-sm text-gray-500">~/.aether/config.yaml</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">AETHER_LEARNING_MODE</td>
                    <td className="px-6 py-4 text-sm text-gray-500">AI learning mode (adaptive/conservative/aggressive)</td>
                    <td className="px-6 py-4 text-sm text-gray-500">adaptive</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">AETHER_VERBOSITY</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Output verbosity (quiet/normal/verbose/debug)</td>
                    <td className="px-6 py-4 text-sm text-gray-500">normal</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="usage" className="text-2xl font-bold text-gray-900 mb-4">Basic Usage</h2>
            <p className="text-gray-700 mb-6">
              Learn the fundamental intelligent command-line patterns and AI-powered automation workflows.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Natural Language Commands</h3>
            <CodeBlock language="bash" title="Natural Language Usage">
{`# File and directory operations
aether "find all Python files modified in the last week"
aether "compress all log files older than 30 days"
aether "backup my project to cloud storage"

# Development workflow automation
aether "run tests and deploy if they pass"
aether "create a new feature branch for user authentication"
aether "review my code changes and suggest improvements"

# System administration
aether "check disk usage and clean up if needed"
aether "monitor system performance and alert if issues"
aether "update all packages and restart services safely"`}
            </CodeBlock>

            <h2 id="cli-commands" className="text-2xl font-bold text-gray-900 mb-4">CLI Commands Reference</h2>
            <p className="text-gray-700 mb-6">
              Complete reference for all intelligent command-line automation and AI assistance commands.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">ask</h4>
              <p className="text-gray-700 mb-3">Ask AI for command suggestions and explanations</p>
              <CodeBlock language="bash">
{`aether ask [options] "question"

Options:
  --explain              Provide detailed explanations
  --suggest-alternatives Suggest alternative approaches
  --context <path>       Use specific directory context
  --safe-mode           Only suggest safe operations
  --interactive         Enable interactive Q&A mode
  --history             Include command history in context
  --verbose             Provide verbose explanations
  --format <type>       Output format (text|json|markdown)`}
              </CodeBlock>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">learn</h4>
              <p className="text-gray-700 mb-3">Train AI on your command patterns and preferences</p>
              <CodeBlock language="bash">
{`aether learn [options]

Options:
  --analyze-history      Analyze command history for patterns
  --personalize          Personalize suggestions based on usage
  --context-aware        Enable context-aware learning
  --feedback <rating>    Provide feedback on suggestions (1-5)
  --reset-learning       Reset learned patterns
  --export-patterns      Export learned patterns to file
  --import-patterns      Import patterns from file
  --privacy-mode         Enable privacy-preserving learning`}
              </CodeBlock>
            </div>

            <h2 id="best-practices" className="text-2xl font-bold text-gray-900 mb-4">Best Practices</h2>
            <p className="text-gray-700 mb-6">
              Intelligent command-line automation best practices to maximize AI assistance effectiveness and safety.
            </p>

            <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-cyan-900 mb-3">AI-Powered CLI Strategy</h4>
              <ol className="list-decimal list-inside text-cyan-800 space-y-2">
                <li>Start with simple natural language commands to build AI understanding</li>
                <li>Provide feedback on AI suggestions to improve accuracy over time</li>
                <li>Use context-aware features by working in consistent project directories</li>
                <li>Enable safety checks for destructive operations and deployments</li>
                <li>Leverage predictive assistance to prevent errors before they occur</li>
                <li>Regularly review and update AI learning preferences and patterns</li>
              </ol>
            </div>

            <h2 id="smart-automation" className="text-2xl font-bold text-gray-900 mb-4">Smart Automation</h2>
            <p className="text-gray-700 mb-6">
              Advanced automation using AI to create intelligent workflows and predictive command assistance.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Automation Workflows</h3>
            <CodeBlock language="bash" title="Smart Automation">
{`# Create intelligent workflows
aether workflow create --name "ci-cd-pipeline" --trigger "git-push" --ai-optimized

# Enable predictive automation
aether automate --predictive-scheduling --context-aware --safety-first

# Configure smart command chaining
aether chain --intelligent-sequencing --error-recovery --optimization

# Set up proactive monitoring and suggestions
aether monitor --proactive-suggestions --performance-optimization --error-prevention`}
            </CodeBlock>

            <h2 id="context-learning" className="text-2xl font-bold text-gray-900 mb-4">Context Learning</h2>
            <p className="text-gray-700 mb-6">
              Advanced context learning capabilities that help AI understand your environment and preferences.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Learning Configuration</h3>
            <CodeBlock language="bash" title="Context Learning">
{`# Enable comprehensive context learning
aether context learn --environment --projects --preferences --patterns

# Analyze and improve command suggestions
aether analyze --command-patterns --success-rates --optimization-opportunities

# Configure personalized AI assistance
aether personalize --learning-style adaptive --suggestion-frequency medium --safety-level high

# Export and share learned patterns (privacy-safe)
aether export --patterns --anonymized --team-sharing`}
            </CodeBlock>

            <h2 id="api-integration" className="text-2xl font-bold text-gray-900 mb-4">API Integration</h2>
            <p className="text-gray-700 mb-6">
              Integrate Aether CLI into your development tools and automation workflows.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">REST API</h3>
            <CodeBlock language="bash" title="API Usage">
{`# Execute natural language command via API
curl -X POST https://api.augment.cfd/v1/aether/execute \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "command": "deploy my app to production safely",
    "context": {
      "working_directory": "/home/user/myapp",
      "environment": "production"
    }
  }'`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Node.js SDK</h3>
            <CodeBlock language="javascript" title="Node.js Integration">
{`const { AetherCLI } = require('@augment/aether-cli');

// Initialize Aether CLI
const aether = new AetherCLI({
  apiKey: process.env.AUGMENT_API_KEY,
  learningMode: 'adaptive',
  contextAware: true
});

// Execute natural language command
const result = await aether.execute(
  "find all large files and suggest cleanup",
  {
    context: process.cwd(),
    safeMode: true,
    interactive: false
  }
);

console.log('Command executed:', result.command);
console.log('Output:', result.output);

// Get AI suggestions
const suggestions = await aether.suggest({
  context: 'deployment',
  includeExplanations: true,
  safetyFirst: true
});

console.log('AI Suggestions:', suggestions);

// Learn from user feedback
await aether.learn({
  command: result.command,
  success: true,
  feedback: 'Very helpful suggestion',
  rating: 5
});`}
            </CodeBlock>

            <h2 id="api-reference" className="text-2xl font-bold text-gray-900 mb-4">API Reference</h2>
            <p className="text-gray-700 mb-6">
              Complete API documentation for integrating intelligent command-line automation into your applications.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Command Execution Endpoint</h3>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">POST /v1/aether/execute</h4>
              <p className="text-gray-700 mb-4">Execute natural language commands with AI-powered interpretation.</p>
              
              <h5 className="font-medium text-gray-900 mb-2">Request Body:</h5>
              <CodeBlock language="json">
{`{
  "command": "deploy my node.js app to production with zero downtime",
  "context": {
    "working_directory": "/home/user/myapp",
    "environment": "production",
    "project_type": "nodejs",
    "deployment_target": "kubernetes"
  },
  "options": {
    "safe_mode": true,
    "interactive": false,
    "explain_steps": true,
    "dry_run": false,
    "confirmation_required": true
  },
  "user_preferences": {
    "verbosity": "medium",
    "learning_mode": "adaptive",
    "safety_level": "high",
    "auto_execute_safe": false
  }
}`}
              </CodeBlock>

              <h5 className="font-medium text-gray-900 mb-2 mt-4">Response:</h5>
              <CodeBlock language="json">
{`{
  "execution_id": "exec-aether-12345",
  "status": "completed",
  "original_command": "deploy my node.js app to production with zero downtime",
  "interpreted_intent": {
    "action": "deployment",
    "target": "production",
    "requirements": ["zero_downtime", "nodejs_app"],
    "confidence": 0.94
  },
  "executed_commands": [
    {
      "command": "docker build -t myapp:latest .",
      "description": "Build Docker image for the application",
      "status": "completed",
      "duration": "45s",
      "output": "Successfully built and tagged myapp:latest"
    },
    {
      "command": "kubectl apply -f k8s/deployment.yaml --strategy=rolling-update",
      "description": "Deploy to Kubernetes with rolling update strategy",
      "status": "completed",
      "duration": "2m 15s",
      "output": "deployment.apps/myapp configured"
    }
  ],
  "ai_insights": {
    "optimization_suggestions": [
      "Consider implementing health checks for faster rollout validation",
      "Enable horizontal pod autoscaling for better resource utilization"
    ],
    "security_recommendations": [
      "Scan Docker image for vulnerabilities before deployment",
      "Implement network policies for pod-to-pod communication"
    ],
    "performance_tips": [
      "Use multi-stage Docker builds to reduce image size",
      "Configure resource limits and requests for optimal scheduling"
    ]
  },
  "learning_data": {
    "pattern_recognized": "nodejs_kubernetes_deployment",
    "success_probability": 0.91,
    "similar_commands_count": 23,
    "user_satisfaction_predicted": 0.88
  },
  "next_suggestions": [
    {
      "suggestion": "Set up monitoring and alerting for the deployed application",
      "confidence": 0.87,
      "command_preview": "aether 'set up monitoring for my production app'"
    },
    {
      "suggestion": "Run smoke tests to validate the deployment",
      "confidence": 0.82,
      "command_preview": "aether 'run smoke tests on production deployment'"
    }
  ]
}`}
              </CodeBlock>
            </div>

            <h2 id="troubleshooting" className="text-2xl font-bold text-gray-900 mb-4">Troubleshooting</h2>
            <p className="text-gray-700 mb-6">
              Common issues and solutions when using intelligent command-line automation.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Common Issues</h3>

            <div className="space-y-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-red-900 mb-2">AI Command Interpretation Issues</h4>
                <p className="text-red-800 mb-3">Natural language commands not being interpreted correctly</p>
                <div className="text-red-800">
                  <strong>Solutions:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Provide more specific context in your natural language commands</li>
                    <li>Use the --explain flag to understand how commands are interpreted</li>
                    <li>Train the AI with feedback on successful and unsuccessful interpretations</li>
                    <li>Check that your working directory context is correctly detected</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-yellow-900 mb-2">Shell Integration Problems</h4>
                <p className="text-yellow-800 mb-3">Smart completion or shell integration not working properly</p>
                <div className="text-yellow-800">
                  <strong>Solutions:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Reinstall shell integration with: aether shell-init --shell your_shell</li>
                    <li>Restart your terminal or source your shell configuration file</li>
                    <li>Check that your shell is supported (bash, zsh, fish, powershell)</li>
                    <li>Verify that completion scripts have proper permissions</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">Learning and Context Issues</h4>
                <p className="text-blue-800 mb-3">AI not learning from usage patterns or providing poor suggestions</p>
                <div className="text-blue-800">
                  <strong>Solutions:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Enable learning mode and provide regular feedback on suggestions</li>
                    <li>Ensure sufficient command history for pattern recognition</li>
                    <li>Use consistent working directories for better context awareness</li>
                    <li>Adjust learning sensitivity in configuration settings</li>
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
                  <h3 className="text-sm font-medium text-green-900">Intelligent CLI Documentation Complete!</h3>
                  <p className="mt-1 text-sm text-green-700">
                    You now have comprehensive knowledge to implement Aether CLI in your development workflow. From natural language command processing to intelligent automation, you're equipped to revolutionize your command-line experience with AI-powered assistance.
                  </p>
                </div>
              </div>
            </div>

            <hr className="my-8 border-gray-200" />

            <p className="text-gray-600 text-center">
              <strong>Ready to transform your command-line experience with AI?</strong> Start your free intelligent CLI trial today and discover how natural language processing can revolutionize your development workflow.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
