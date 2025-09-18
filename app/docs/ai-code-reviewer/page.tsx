import { Breadcrumb } from "@/components/ui/Breadcrumb"
import { CodeBlock } from "@/components/docs/CodeBlock"
import { FeatureCard } from "@/components/docs/FeatureCard"
import { DocsSidebar } from "@/components/docs/DocsSidebar"

const navigationItems = [
  { title: 'Overview', href: '/docs/ai-code-reviewer#overview' },
  { title: 'Installation', href: '/docs/ai-code-reviewer#installation' },
  { title: 'Quick Start', href: '/docs/ai-code-reviewer#quick-start' },
  { title: 'Configuration', href: '/docs/ai-code-reviewer#configuration' },
  { title: 'Advanced Config', href: '/docs/ai-code-reviewer#advanced-config' },
  { title: 'Environment Variables', href: '/docs/ai-code-reviewer#environment-variables' },
  { title: 'Basic Usage', href: '/docs/ai-code-reviewer#usage' },
  { title: 'CLI Commands', href: '/docs/ai-code-reviewer#cli-commands' },
  { title: 'Best Practices', href: '/docs/ai-code-reviewer#best-practices' },
  { title: 'CI/CD Integration', href: '/docs/ai-code-reviewer#integration' },
  { title: 'IDE Extensions', href: '/docs/ai-code-reviewer#ide-extensions' },
  { title: 'API Integration', href: '/docs/ai-code-reviewer#api-integration' },
  { title: 'API Reference', href: '/docs/ai-code-reviewer#api-reference' },
  { title: 'Troubleshooting', href: '/docs/ai-code-reviewer#troubleshooting' }
]

export default function AICodeReviewerDocsPage() {
  return (
    <>
      <DocsSidebar 
        appName="AI CodeReviewer"
        appLogo="/ai-code-reviewer.svg"
        navigationItems={navigationItems}
      />
      
      <main className="flex-1 max-w-4xl mx-auto px-6 py-8">
        <div className="docs-content">
          <div className="mb-6">
            <Breadcrumb className="mb-4" />
          </div>

          <div id="overview" className="flex items-center space-x-4 mb-8">
            <img src="/ai-code-reviewer.svg" alt="AI CodeReviewer" className="w-12 h-12" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">AI CodeReviewer</h1>
              <p className="text-lg text-gray-600">Intelligent code analysis with AI-powered insights</p>
            </div>
          </div>

          {/* Key Capabilities Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            <FeatureCard
              title="AI-Powered Analysis"
              description="Advanced machine learning models analyze your code for quality, security, and performance issues"
              icon="🧠"
            />
            <FeatureCard
              title="Real-time Feedback"
              description="Get instant suggestions and improvements as you write code"
              icon="⚡"
            />
            <FeatureCard
              title="Multi-Language Support"
              description="Supports JavaScript, TypeScript, Python, Java, Go, Rust, and more"
              icon="🌐"
            />
            <FeatureCard
              title="Enterprise Ready"
              description="Scalable solution with team management, reporting, and compliance features"
              icon="🏢"
            />
          </div>

          {/* AI Dashboard Mockup */}
          <div className="my-8">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-gray-900 px-4 py-2 flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-300 text-sm ml-4">AI CodeReviewer Dashboard</span>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <div className="text-2xl font-bold text-green-600">94</div>
                      <div className="text-sm text-green-700">Quality Score</div>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <div className="text-2xl font-bold text-red-600">3</div>
                      <div className="text-sm text-red-700">Critical Issues</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <div className="text-2xl font-bold text-blue-600">847</div>
                      <div className="text-sm text-blue-700">Files Analyzed</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <div className="text-2xl font-bold text-purple-600">15m</div>
                      <div className="text-sm text-purple-700">Analysis Time</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 text-center">
                    Real-time AI analysis results for your codebase
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-gray max-w-none">
            <h2 id="installation" className="text-2xl font-bold text-gray-900 mb-4">Installation</h2>
            <p className="text-gray-700 mb-6">
              Get started with AI CodeReviewer in minutes. Choose your preferred installation method based on your development environment and workflow.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">System Requirements</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Node.js 16.0 or higher</li>
              <li>npm 8.0 or yarn 1.22+</li>
              <li>Git 2.20+</li>
              <li>Minimum 4GB RAM (8GB recommended)</li>
              <li>Internet connection for AI analysis</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">NPM Installation</h3>
            <CodeBlock language="bash" title="Install via NPM">
{`# Install globally
npm install -g @augment/ai-code-reviewer

# Install locally in project
npm install --save-dev @augment/ai-code-reviewer

# Verify installation
ai-code-reviewer --version`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Authentication</h3>
            <p className="text-gray-700 mb-4">
              Get your API key from the Augment dashboard and authenticate:
            </p>

            <CodeBlock language="bash" title="Authentication">
{`# Set API key as environment variable
export AUGMENT_API_KEY=your_api_key_here

# Or authenticate interactively
ai-code-reviewer auth login

# Verify authentication
ai-code-reviewer auth status`}
            </CodeBlock>

            <h2 id="quick-start" className="text-2xl font-bold text-gray-900 mb-4">Quick Start</h2>
            <p className="text-gray-700 mb-6">
              Get your first analysis running in under 2 minutes with these simple steps.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Initialize Your Project</h3>
            <CodeBlock language="bash" title="Project Initialization">
{`# Navigate to your project
cd your-project

# Initialize AI CodeReviewer
ai-code-reviewer init

# This creates .ai-code-reviewer.json config file`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Run Your First Analysis</h3>
            <CodeBlock language="bash" title="First Analysis">
{`# Analyze your entire project
ai-code-reviewer analyze

# Or analyze specific files
ai-code-reviewer analyze --path src/components/

# Quick analysis (faster, less detailed)
ai-code-reviewer analyze --quick`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3. View Results</h3>
            <p className="text-gray-700 mb-4">
              Results are displayed in your terminal by default. Generate reports for sharing:
            </p>

            <CodeBlock language="bash" title="Generate Reports">
{`# Generate HTML report
ai-code-reviewer analyze --format html --output report.html

# Generate JSON for automation
ai-code-reviewer analyze --format json --output results.json`}
            </CodeBlock>

            <h2 id="configuration" className="text-2xl font-bold text-gray-900 mb-4">Configuration</h2>
            <p className="text-gray-700 mb-6">
              Customize AI CodeReviewer for your team and project needs with flexible configuration options.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Basic Configuration</h3>
            <CodeBlock language="json" title=".ai-code-reviewer.json">
{`{
  "version": "1.0",
  "language": "typescript",
  "framework": "react",
  "rules": {
    "security": {
      "enabled": true,
      "level": "strict"
    },
    "performance": {
      "enabled": true,
      "threshold": 0.8
    },
    "quality": {
      "enabled": true,
      "standards": "enterprise"
    }
  },
  "exclude": [
    "node_modules/**",
    "dist/**",
    "build/**"
  ]
}`}
            </CodeBlock>

            <h2 id="advanced-config" className="text-2xl font-bold text-gray-900 mb-4">Advanced Configuration</h2>
            <p className="text-gray-700 mb-6">
              Fine-tune AI analysis with advanced configuration options for enterprise teams.
            </p>

            <CodeBlock language="json" title="Advanced Configuration">
{`{
  "ai": {
    "model": "advanced-v2",
    "confidence_threshold": 0.85,
    "learning_mode": true,
    "custom_prompts": {
      "security": "Focus on OWASP Top 10 vulnerabilities",
      "performance": "Prioritize runtime performance"
    }
  },
  "rules": {
    "security": {
      "severity_override": {
        "xss": "critical",
        "sql_injection": "critical"
      }
    }
  }
}`}
            </CodeBlock>

            <h2 id="environment-variables" className="text-2xl font-bold text-gray-900 mb-4">Environment Variables</h2>
            <p className="text-gray-700 mb-6">
              Configure AI CodeReviewer using environment variables for CI/CD and deployment scenarios.
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
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">AI_REVIEWER_CONFIG</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Path to configuration file</td>
                    <td className="px-6 py-4 text-sm text-gray-500">.ai-code-reviewer.json</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-gray-900">AI_REVIEWER_OUTPUT</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Output format (json/html/markdown)</td>
                    <td className="px-6 py-4 text-sm text-gray-500">json</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="usage" className="text-2xl font-bold text-gray-900 mb-4">Basic Usage</h2>
            <p className="text-gray-700 mb-6">
              Master AI CodeReviewer with these essential usage patterns and workflows.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Analysis Commands</h3>
            <CodeBlock language="bash" title="Basic Commands">
{`# Analyze entire project
ai-code-reviewer analyze

# Analyze specific directory
ai-code-reviewer analyze --path ./src

# Security analysis only
ai-code-reviewer analyze --rules security

# Performance analysis with custom threshold
ai-code-reviewer analyze --rules performance --threshold 0.9`}
            </CodeBlock>

            <h2 id="cli-commands" className="text-2xl font-bold text-gray-900 mb-4">CLI Commands Reference</h2>
            <p className="text-gray-700 mb-6">
              Complete reference for all command-line options and features.
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">analyze</h4>
              <p className="text-gray-700 mb-3">Run code analysis on your project</p>
              <CodeBlock language="bash">
{`ai-code-reviewer analyze [options]

Options:
  --path <path>           Directory or file to analyze
  --config <file>         Configuration file to use
  --output <file>         Output file path
  --format <format>       Output format (json|html|markdown)
  --rules <rules>         Rule categories to run
  --severity <levels>     Severity levels to report
  --quick                 Fast analysis mode
  --fail-on-error         Exit with error code if issues found`}
              </CodeBlock>
            </div>

            <h2 id="best-practices" className="text-2xl font-bold text-gray-900 mb-4">Best Practices</h2>
            <p className="text-gray-700 mb-6">
              Learn how to get the most value from AI CodeReviewer in your development workflow.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">Daily Development Flow</h4>
              <ol className="list-decimal list-inside text-blue-800 space-y-2">
                <li>Run quick analysis before committing</li>
                <li>Focus on new/changed files</li>
                <li>Use watch mode during active development</li>
                <li>Run comprehensive analysis before pull requests</li>
              </ol>
            </div>

            <h2 id="integration" className="text-2xl font-bold text-gray-900 mb-4">CI/CD Integration</h2>
            <p className="text-gray-700 mb-6">
              Integrate AI CodeReviewer into your continuous integration pipeline.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">GitHub Actions</h3>
            <CodeBlock language="yaml" title=".github/workflows/ai-code-review.yml">
{`name: AI Code Review

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  ai-code-review:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
      
      - name: Install AI CodeReviewer
        run: npm install -g @augment/ai-code-reviewer
      
      - name: Run Analysis
        env:
          AUGMENT_API_KEY: \${{ secrets.AUGMENT_API_KEY }}
        run: ai-code-reviewer analyze --fail-on-error`}
            </CodeBlock>

            <h2 id="ide-extensions" className="text-2xl font-bold text-gray-900 mb-4">IDE Extensions</h2>
            <p className="text-gray-700 mb-6">
              Get real-time AI-powered code analysis directly in your development environment.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Visual Studio Code</h3>
            <CodeBlock language="bash" title="VS Code Extension">
{`# Install from command line
code --install-extension augment.ai-code-reviewer

# Or search "AI CodeReviewer" in Extensions panel`}
            </CodeBlock>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h4 className="text-lg font-semibold text-blue-900 mb-3">VS Code Features</h4>
              <ul className="text-blue-800 space-y-2">
                <li>• Real-time analysis as you type</li>
                <li>• Inline suggestions and quick fixes</li>
                <li>• Security alerts and performance hints</li>
                <li>• Integration with Git workflow</li>
              </ul>
            </div>

            <h2 id="api-integration" className="text-2xl font-bold text-gray-900 mb-4">API Integration</h2>
            <p className="text-gray-700 mb-6">
              Integrate AI CodeReviewer directly into your applications using our REST API.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">REST API</h3>
            <CodeBlock language="bash" title="API Usage">
{`# Analyze code via REST API
curl -X POST https://api.augment.cfd/v1/analyze \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "code": "function example() { return true; }",
    "language": "javascript",
    "options": {
      "rules": ["security", "performance"]
    }
  }'`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Node.js SDK</h3>
            <CodeBlock language="javascript" title="Node.js Integration">
{`const { AICodeReviewer } = require('@augment/ai-code-reviewer-sdk');

const reviewer = new AICodeReviewer({
  apiKey: process.env.AUGMENT_API_KEY
});

// Analyze a file
const result = await reviewer.analyzeFile({
  path: './src/components/App.tsx',
  language: 'typescript'
});

console.log(\`Quality Score: \${result.score}/10\`);`}
            </CodeBlock>

            <h2 id="api-reference" className="text-2xl font-bold text-gray-900 mb-4">API Reference</h2>
            <p className="text-gray-700 mb-6">
              Complete API documentation for integrating AI CodeReviewer into your applications.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Authentication</h3>
            <p className="text-gray-700 mb-4">
              All API requests require authentication using your API key:
            </p>

            <CodeBlock language="bash" title="Authentication Header">
{`Authorization: Bearer YOUR_API_KEY`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Analysis Endpoint</h3>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">POST /v1/analyze</h4>
              <p className="text-gray-700 mb-4">Analyze code for quality, security, and performance issues.</p>
              
              <h5 className="font-medium text-gray-900 mb-2">Request Body:</h5>
              <CodeBlock language="json">
{`{
  "code": "string",
  "language": "javascript|typescript|python|java|go|rust",
  "options": {
    "rules": ["security", "performance", "quality"],
    "severity": "low|medium|high|critical",
    "framework": "react|vue|angular|express"
  }
}`}
              </CodeBlock>

              <h5 className="font-medium text-gray-900 mb-2 mt-4">Response:</h5>
              <CodeBlock language="json">
{`{
  "score": 8.5,
  "summary": {
    "total_issues": 12,
    "security_issues": 2,
    "performance_issues": 5,
    "quality_issues": 5
  },
  "issues": [
    {
      "type": "security",
      "severity": "high",
      "message": "Potential XSS vulnerability",
      "line": 42,
      "column": 15,
      "suggestion": "Use proper input sanitization"
    }
  ]
}`}
              </CodeBlock>
            </div>

            <h2 id="troubleshooting" className="text-2xl font-bold text-gray-900 mb-4">Troubleshooting</h2>
            <p className="text-gray-700 mb-6">
              Common issues and solutions when using AI CodeReviewer.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Common Issues</h3>

            <div className="space-y-6">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-red-900 mb-2">Authentication Failed</h4>
                <p className="text-red-800 mb-3">Error: Invalid API key or authentication failed</p>
                <div className="text-red-800">
                  <strong>Solutions:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Verify your API key is correct</li>
                    <li>Check if your subscription is active</li>
                    <li>Ensure AUGMENT_API_KEY environment variable is set</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-yellow-900 mb-2">Analysis Taking Too Long</h4>
                <p className="text-yellow-800 mb-3">Analysis seems stuck or taking excessive time</p>
                <div className="text-yellow-800">
                  <strong>Solutions:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Use --quick flag for faster analysis</li>
                    <li>Exclude large directories (node_modules, dist)</li>
                    <li>Analyze smaller chunks of code</li>
                    <li>Check your internet connection</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">High Memory Usage</h4>
                <p className="text-blue-800 mb-3">AI CodeReviewer consuming too much memory</p>
                <div className="text-blue-800">
                  <strong>Solutions:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Increase system memory allocation</li>
                    <li>Use --max-memory flag to limit usage</li>
                    <li>Process files in smaller batches</li>
                    <li>Close other memory-intensive applications</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Debug Mode</h3>
            <p className="text-gray-700 mb-4">
              Enable debug mode for detailed troubleshooting information:
            </p>

            <CodeBlock language="bash" title="Debug Commands">
{`# Enable debug mode
AI_REVIEWER_DEBUG=true ai-code-reviewer analyze

# Check system information
ai-code-reviewer system-info

# Validate configuration
ai-code-reviewer config --validate

# Test API connection
ai-code-reviewer test-connection`}
            </CodeBlock>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Getting Help</h3>
            <p className="text-gray-700 mb-4">
              If you're still experiencing issues:
            </p>

            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Check our <a href="/docs" className="text-blue-600 hover:text-blue-500">documentation</a> for detailed guides</li>
              <li>Visit our <a href="/community" className="text-blue-600 hover:text-blue-500">community forum</a> for community support</li>
              <li>Contact our <a href="/contact" className="text-blue-600 hover:text-blue-500">support team</a> for direct assistance</li>
              <li>Report bugs on our <a href="/issues" className="text-blue-600 hover:text-blue-500">issue tracker</a></li>
            </ul>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-green-900">Documentation Complete!</h3>
                  <p className="mt-1 text-sm text-green-700">
                    You now have all the knowledge needed to use AI CodeReviewer effectively. From basic setup to advanced enterprise integrations, you're ready to improve your code quality with AI-powered insights.
                  </p>
                </div>
              </div>
            </div>

            <hr className="my-8 border-gray-200" />

            <p className="text-gray-600 text-center">
              <strong>Ready to transform your code quality?</strong> Start your free trial today and experience the power of AI-driven code analysis.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}