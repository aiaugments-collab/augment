'use client';
import { useState } from 'react';
import { getAllRouteMappings, type RouteMapping } from '@/lib/routeMapping';

export default function RouteAdminPage() {
  const [mappings] = useState<RouteMapping[]>(getAllRouteMappings());
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPriority, setSelectedPriority] = useState<string>('all');

  const filteredMappings = mappings.filter(mapping => {
    const matchesSearch = searchTerm === '' || 
      mapping.pattern.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mapping.target.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mapping.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesPriority = selectedPriority === 'all' || 
      mapping.priority.toString() === selectedPriority;
    
    return matchesSearch && matchesPriority;
  });

  const priorityColors: Record<number, string> = {
    10: 'bg-red-100 text-red-800',
    9: 'bg-orange-100 text-orange-800',
    8: 'bg-yellow-100 text-yellow-800',
    7: 'bg-green-100 text-green-800',
    6: 'bg-blue-100 text-blue-800',
    5: 'bg-indigo-100 text-indigo-800',
  };

  const getPriorityColor = (priority: number): string => {
    return priorityColors[priority] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Route Mappings Admin</h1>
            <p className="text-gray-600">
              Manage and view all route mappings for intelligent 404 handling. 
              Total mappings: <span className="font-semibold">{mappings.length}</span>
            </p>
          </div>

          {/* Filters */}
          <div className="mb-6 flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Search mappings
              </label>
              <input
                type="text"
                id="search"
                placeholder="Search by pattern, target, or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="sm:w-48">
              <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1">
                Priority
              </label>
              <select
                id="priority"
                value={selectedPriority}
                onChange={(e) => setSelectedPriority(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Priorities</option>
                <option value="10">High (10)</option>
                <option value="9">High (9)</option>
                <option value="8">Medium (8)</option>
                <option value="7">Medium (7)</option>
                <option value="6">Low (6)</option>
                <option value="5">Low (5)</option>
              </select>
            </div>
          </div>

          {/* Results count */}
          <div className="mb-4">
            <p className="text-sm text-gray-600">
              Showing {filteredMappings.length} of {mappings.length} mappings
            </p>
          </div>

          {/* Mappings table */}
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Pattern
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Target
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Priority
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredMappings.map((mapping, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <code className="text-sm font-mono bg-gray-100 px-2 py-1 rounded">
                        {mapping.pattern}
                      </code>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <a
                        href={mapping.target}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline text-sm font-mono"
                      >
                        {mapping.target}
                      </a>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(mapping.priority)}`}>
                        {mapping.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-gray-900 max-w-xs">
                        {mapping.description}
                      </p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => {
                          const testUrl = `${window.location.origin}${mapping.pattern}`;
                          window.open(testUrl, '_blank');
                        }}
                        className="text-indigo-600 hover:text-indigo-900 mr-3"
                      >
                        Test
                      </button>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(mapping.pattern);
                        }}
                        className="text-gray-600 hover:text-gray-900"
                      >
                        Copy
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredMappings.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No mappings found matching your criteria.</p>
            </div>
          )}

          {/* Statistics */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">
                {mappings.filter(m => m.priority >= 9).length}
              </div>
              <div className="text-sm text-blue-800">High Priority</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-600">
                {mappings.filter(m => m.priority >= 7 && m.priority < 9).length}
              </div>
              <div className="text-sm text-green-800">Medium Priority</div>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">
                {mappings.filter(m => m.priority < 7).length}
              </div>
              <div className="text-sm text-yellow-800">Low Priority</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">
                {new Set(mappings.map(m => m.target)).size}
              </div>
              <div className="text-sm text-purple-800">Unique Targets</div>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">How it works</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Higher priority mappings (10) take precedence over lower priority ones</li>
              <li>• When a user visits a non-existent URL, the middleware checks these mappings</li>
              <li>• If a match is found, the user is redirected with a 301 status</li>
              <li>• If no match is found, the custom 404 page is shown with intelligent suggestions</li>
              <li>• Use the "Test" button to see how a mapping behaves</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
