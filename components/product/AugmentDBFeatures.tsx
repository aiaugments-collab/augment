'use client';

import { Database, Code, BarChart3, Network, Shield, Zap } from 'lucide-react';

export function AugmentDBFeatures() {
  const features = [
    {
      icon: Database,
      title: "Universal Database Connectivity",
      description: "Connect to MySQL, PostgreSQL, Oracle, SQL Server, MongoDB, SQLite, and 200+ other database systems with native drivers and optimized performance."
    },
    {
      icon: Code,
      title: "Advanced SQL Editor",
      description: "Professional SQL editor with syntax highlighting, intelligent auto-completion, query formatting, and real-time error detection for enhanced productivity."
    },
    {
      icon: BarChart3,
      title: "Data Visualization & Analytics",
      description: "Create stunning charts, graphs, and dashboards from your data. Export results to various formats and generate comprehensive reports."
    },
    {
      icon: Network,
      title: "ER Diagrams & Schema Design",
      description: "Visualize database relationships with interactive ER diagrams. Design and modify database schemas with drag-and-drop interface."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Secure connections with SSL/TLS encryption, SSH tunneling, and comprehensive user access management with role-based permissions."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Query execution plans, performance monitoring, index analysis, and optimization suggestions to keep your databases running efficiently."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Powerful Database Management Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to manage, analyze, and optimize your databases in one comprehensive platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-900">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
