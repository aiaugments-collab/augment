'use client';

import { useState } from 'react';
import { Download, Database, Shield, Zap, Monitor, Code, Book, ExternalLink } from 'lucide-react';

export default function AugmentDBDocsPage() {
  const [activeSection, setActiveSection] = useState('overview');

  const docSections = [
    { id: 'overview', title: 'Overview', icon: '📋' },
    { id: 'installation', title: 'Installation', icon: '⚡' },
    { id: 'getting-started', title: 'Getting Started', icon: '🚀' },
    { id: 'features', title: 'Features', icon: '✨' },
    { id: 'supported-databases', title: 'Supported Databases', icon: '🗄️' },
    { id: 'configuration', title: 'Configuration', icon: '⚙️' },
    { id: 'troubleshooting', title: 'Troubleshooting', icon: '🔧' },
    { id: 'faq', title: 'FAQ', icon: '❓' }
  ];

  const installationMethods = [
    {
      title: 'Windows Installation',
      description: 'Using Windows Package Manager',
      icon: Monitor,
      command: 'winget install AugmentDB',
      steps: [
        'Open Command Prompt or PowerShell as Administrator',
        'Run the installation command',
        'Follow any prompts that appear',
        'Launch AugmentDB from Start Menu or run "augmentdb" in terminal'
      ]
    },
    {
      title: 'macOS Installation',
      description: 'Using Homebrew package manager',
      icon: Monitor,
      command: 'brew install --cask augmentdb',
      steps: [
        'Install Homebrew if not already installed: /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"',
        'Run the installation command',
        'Launch from Applications or run "augmentdb" in terminal'
      ]
    },
    {
      title: 'Linux Installation',
      description: 'Using package managers',
      icon: Code,
      command: {
        ubuntu: 'sudo apt install augmentdb',
        fedora: 'sudo dnf install augmentdb',
        arch: 'sudo pacman -S augmentdb'
      },
      steps: [
        'Update your package manager: sudo apt update (Ubuntu/Debian)',
        'Install AugmentDB using your distribution\'s package manager',
        'Run "augmentdb" in terminal to launch'
      ]
    }
  ];

  const supportedDatabases = [
    {
      category: 'Relational Databases',
      databases: ['MySQL', 'PostgreSQL', 'Oracle Database', 'Microsoft SQL Server', 'MariaDB', 'SQLite', 'IBM Db2', 'Teradata']
    },
    {
      category: 'NoSQL Databases',
      databases: ['MongoDB', 'Apache Cassandra', 'Redis', 'CouchDB', 'Neo4j', 'InfluxDB', 'Elasticsearch']
    },
    {
      category: 'Cloud Databases',
      databases: ['Amazon RDS', 'Azure SQL Database', 'Google Cloud SQL', 'Snowflake', 'BigQuery', 'Amazon Redshift']
    },
    {
      category: 'Big Data & Analytics',
      databases: ['Apache Hive', 'Apache Spark', 'Presto', 'ClickHouse', 'Greenplum', 'Vertica']
    }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">AugmentDB Overview</h2>
              <p className="text-lg text-gray-600 mb-6">
                AugmentDB is a universal database management tool that supports all major database systems. 
                It provides advanced SQL editing, data visualization, ER diagrams, and comprehensive database 
                administration capabilities for developers, DBAs, and data analysts.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <Database className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Universal Connectivity</h3>
                <p className="text-gray-600">Connect to 200+ database systems with native drivers and optimized performance.</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <Code className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced SQL Editor</h3>
                <p className="text-gray-600">Professional SQL editor with syntax highlighting and intelligent auto-completion.</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <Zap className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Performance Tools</h3>
                <p className="text-gray-600">Query optimization, execution plans, and performance monitoring capabilities.</p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg">
                <Shield className="w-8 h-8 text-red-600 mb-3" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
                <p className="text-gray-600">SSL/TLS encryption, SSH tunneling, and role-based access control.</p>
              </div>
            </div>
          </div>
        );

      case 'installation':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Installation Guide</h2>
              <p className="text-lg text-gray-600 mb-6">
                AugmentDB supports Windows 10+, macOS 11+, and most modern Linux distributions. 
                Install using your system's package manager for the best experience.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">System Requirements</h3>
                  <p className="text-sm text-yellow-700 mt-1">
                    AugmentDB includes OpenJDK, so you don't need to install Java separately. 
                    Minimum 4GB RAM recommended for optimal performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {installationMethods.map((method, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <method.icon className="w-6 h-6 text-blue-600 mr-3" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{method.title}</h3>
                      <p className="text-gray-600">{method.description}</p>
                    </div>
                  </div>
                  
                  {/* Command Display */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Installation Command:</h4>
                    {typeof method.command === 'string' ? (
                      <div className="bg-gray-900 rounded-lg p-4">
                        <code className="text-green-400 text-sm font-mono">{method.command}</code>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {Object.entries(method.command).map(([distro, cmd]) => (
                          <div key={distro} className="bg-gray-900 rounded-lg p-4">
                            <div className="text-gray-400 text-xs mb-1">{distro.charAt(0).toUpperCase() + distro.slice(1)}:</div>
                            <code className="text-green-400 text-sm font-mono">{cmd}</code>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <ol className="space-y-2">
                    {method.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium mr-3">
                          {stepIndex + 1}
                        </span>
                        <span className="text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Alternative Installation</h3>
              <p className="text-gray-600 mb-4">
                If package managers are not available, you can also install AugmentDB using our universal installer script:
              </p>
              <div className="bg-gray-900 rounded-lg p-4">
                <code className="text-green-400 text-sm font-mono">curl -fsSL https://install.augmentdb.com | bash</code>
              </div>
            </div>
          </div>
        );

      case 'supported-databases':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Supported Database Systems</h2>
              <p className="text-lg text-gray-600 mb-6">
                AugmentDB supports over 200 database systems with native drivers and optimized performance.
              </p>
            </div>

            <div className="space-y-8">
              {supportedDatabases.map((category, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.category}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {category.databases.map((db, dbIndex) => (
                      <div key={dbIndex} className="flex items-center p-3 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                          <Database className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-900">{db}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">JDBC & ODBC Support</h3>
              <p className="text-gray-600 mb-4">
                Don't see your database? AugmentDB supports any database with JDBC or ODBC drivers, 
                making it compatible with virtually any database system.
              </p>
              <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                Learn about custom drivers
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        );

      case 'getting-started':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Getting Started</h2>
              <p className="text-lg text-gray-600 mb-6">
                Follow these steps to get up and running with AugmentDB in minutes.
              </p>
            </div>

            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Create Your First Connection</h3>
                <p className="text-gray-600 mb-4">
                  After installation, create a connection to your database by clicking "New Connection" 
                  and selecting your database type.
                </p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <code className="text-green-400 text-sm">
                    File → New → Database Connection → Select Database Type
                  </code>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Configure Connection Settings</h3>
                <p className="text-gray-600 mb-4">
                  Enter your database connection details including host, port, database name, and credentials.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-900 mb-2">Required Settings:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>Host:</strong> Database server address (e.g., localhost, 192.168.1.100)</li>
                    <li>• <strong>Port:</strong> Database port (e.g., 3306 for MySQL, 5432 for PostgreSQL)</li>
                    <li>• <strong>Database:</strong> Database name to connect to</li>
                    <li>• <strong>Username/Password:</strong> Authentication credentials</li>
                  </ul>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Test Your Connection</h3>
                <p className="text-gray-600 mb-4">
                  Click "Test Connection" to verify your settings before saving the connection.
                </p>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Start Managing Your Data</h3>
                <p className="text-gray-600 mb-4">
                  Once connected, you can browse tables, write SQL queries, and manage your database schema.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-medium text-gray-900 mb-2">Database Navigator</h5>
                    <p className="text-sm text-gray-600">Browse tables, views, procedures, and other database objects</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-medium text-gray-900 mb-2">SQL Editor</h5>
                    <p className="text-sm text-gray-600">Write and execute SQL queries with syntax highlighting</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'features':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
              <p className="text-lg text-gray-600 mb-6">
                AugmentDB provides comprehensive database management capabilities for developers and DBAs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Database className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Universal Database Support</h3>
                </div>
                <p className="text-gray-600 mb-4">Connect to 200+ database systems including:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Relational: MySQL, PostgreSQL, Oracle, SQL Server</li>
                  <li>• NoSQL: MongoDB, Cassandra, Redis</li>
                  <li>• Cloud: AWS RDS, Azure SQL, Google Cloud SQL</li>
                  <li>• Big Data: Hive, Spark, ClickHouse</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Code className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Advanced SQL Editor</h3>
                </div>
                <p className="text-gray-600 mb-4">Professional SQL development features:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Syntax highlighting and auto-completion</li>
                  <li>• Query formatting and validation</li>
                  <li>• Multiple query execution</li>
                  <li>• Query history and bookmarks</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Zap className="w-8 h-8 text-yellow-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Performance Tools</h3>
                </div>
                <p className="text-gray-600 mb-4">Optimize your database performance:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Query execution plans</li>
                  <li>• Performance monitoring</li>
                  <li>• Index analysis</li>
                  <li>• Query optimization suggestions</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-red-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Enterprise Security</h3>
                </div>
                <p className="text-gray-600 mb-4">Secure database connections:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• SSL/TLS encryption</li>
                  <li>• SSH tunneling</li>
                  <li>• Role-based access control</li>
                  <li>• Audit logging</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'configuration':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Configuration</h2>
              <p className="text-lg text-gray-600 mb-6">
                Customize AugmentDB settings to match your workflow and preferences.
              </p>
            </div>

            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Connection Settings</h3>
                <p className="text-gray-600 mb-4">Configure database connection parameters:</p>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm">{`# Connection timeout (seconds)
connection.timeout=30

# Maximum connections per pool
connection.pool.max=20

# Connection validation query
connection.validation.query=SELECT 1`}</pre>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">SQL Editor Preferences</h3>
                <p className="text-gray-600 mb-4">Customize the SQL editor behavior:</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• <strong>Auto-completion:</strong> Enable/disable intelligent code completion</li>
                  <li>• <strong>Syntax highlighting:</strong> Choose color themes</li>
                  <li>• <strong>Query formatting:</strong> Set indentation and formatting rules</li>
                  <li>• <strong>Result limits:</strong> Configure default row limits for queries</li>
                </ul>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Security Configuration</h3>
                <p className="text-gray-600 mb-4">Configure security settings:</p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h4 className="font-medium text-yellow-800 mb-2">Important Security Settings:</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Enable SSL for all connections</li>
                    <li>• Use SSH tunneling for remote connections</li>
                    <li>• Set up master password for credential storage</li>
                    <li>• Configure session timeout</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'troubleshooting':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Troubleshooting</h2>
              <p className="text-lg text-gray-600 mb-6">
                Common issues and solutions for AugmentDB.
              </p>
            </div>

            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Connection Issues</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Cannot connect to database</h4>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• Verify host and port settings</li>
                      <li>• Check firewall and network connectivity</li>
                      <li>• Ensure database service is running</li>
                      <li>• Validate username and password</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">SSL connection errors</h4>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• Check SSL certificate validity</li>
                      <li>• Verify SSL is enabled on database server</li>
                      <li>• Update certificate trust store</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Issues</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Slow query execution</h4>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• Check query execution plan</li>
                      <li>• Add appropriate indexes</li>
                      <li>• Limit result set size</li>
                      <li>• Optimize query structure</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">High memory usage</h4>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>• Increase JVM heap size: -Xmx4g</li>
                      <li>• Close unused connections</li>
                      <li>• Limit concurrent queries</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Getting Help</h3>
                <p className="text-gray-600 mb-4">If you need additional support:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <a href="#" className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <Book className="w-6 h-6 text-blue-600 mr-3" />
                    <div>
                      <h4 className="font-medium text-gray-900">Documentation</h4>
                      <p className="text-sm text-gray-600">Browse complete documentation</p>
                    </div>
                  </a>
                  <a href="#" className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                    <ExternalLink className="w-6 h-6 text-green-600 mr-3" />
                    <div>
                      <h4 className="font-medium text-gray-900">Community Forum</h4>
                      <p className="text-sm text-gray-600">Get help from the community</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );

      case 'faq':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 mb-6">
                Common questions about AugmentDB and their answers.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: "Do I need to install Java to run AugmentDB?",
                  answer: "No, AugmentDB includes OpenJDK, so you don't need to install Java separately. The included JDK is only accessible to AugmentDB and won't affect your system."
                },
                {
                  question: "Can AugmentDB connect to cloud databases?",
                  answer: "Yes, AugmentDB supports all major cloud database services including AWS RDS, Azure SQL Database, Google Cloud SQL, and many others through standard connection protocols."
                },
                {
                  question: "Is AugmentDB free to use?",
                  answer: "AugmentDB offers both free and premium versions. The free version includes core database management features, while premium versions offer advanced features like team collaboration and enterprise security."
                },
                {
                  question: "How do I backup my AugmentDB settings?",
                  answer: "Your settings are stored in the workspace directory. You can backup the entire workspace folder to preserve connections, preferences, and other configurations."
                },
                {
                  question: "Can I use AugmentDB with multiple databases simultaneously?",
                  answer: "Yes, AugmentDB supports multiple database connections simultaneously. You can connect to different database types and switch between them easily."
                },
                {
                  question: "Does AugmentDB support database schema migration?",
                  answer: "Yes, AugmentDB includes tools for schema comparison, migration scripts generation, and data transfer between different database systems."
                },
                {
                  question: "How do I update AugmentDB to the latest version?",
                  answer: "Use your package manager to update: 'winget upgrade AugmentDB' on Windows, 'brew upgrade augmentdb' on macOS, or your Linux distribution's package manager."
                },
                {
                  question: "Can I customize the SQL editor theme?",
                  answer: "Yes, AugmentDB offers multiple color themes for the SQL editor. You can also customize syntax highlighting colors and editor preferences in the settings."
                }
              ].map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Still have questions?</h3>
              <p className="text-gray-600 mb-4">
                Can't find what you're looking for? Our community and support team are here to help.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Join Community Forum
                </a>
                <a href="#" className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Getting Started</h2>
              <p className="text-lg text-gray-600 mb-6">
                Follow these steps to get up and running with AugmentDB in minutes.
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              AugmentDB Documentation
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Complete guide to installing, configuring, and using AugmentDB for database management and development.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#installation" 
                onClick={() => setActiveSection('installation')}
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Download className="w-4 h-4 mr-2" />
                Quick Install
              </a>
              <a 
                href="#getting-started"
                onClick={() => setActiveSection('getting-started')}
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
              >
                <Book className="w-4 h-4 mr-2" />
                Getting Started
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Documentation
              </h3>
              <nav className="space-y-1">
                {docSections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveSection(section.id);
                    }}
                    className={`flex items-center px-3 py-2 text-sm rounded-lg transition-colors ${
                      activeSection === section.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className="mr-3">{section.icon}</span>
                    {section.title}
                  </a>
                ))}
              </nav>
              
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Need Help?
                </h4>
                <p className="text-sm text-gray-600 mb-3">
                  Join our community for support and discussions.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  Join Community →
                </a>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {renderContent()}
          </div>
        </div>
      </div>
    </main>
  );
}
