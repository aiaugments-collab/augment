"use client";


interface MockupInterfaceProps {
  type: 'dashboard' | 'form' | 'list' | 'chat' | 'analytics' | 'calendar' | 'table';
  title: string;
  description: string;
  className?: string;
}

export function MockupInterface({ type, title, description, className }: MockupInterfaceProps) {
  const renderMockup = () => {
    switch (type) {
      case 'dashboard':
        return (
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900">{title}</h3>
                <div className="flex space-x-1">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>
            </div>
            {/* Content */}
            <div className="p-4 space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-blue-50 p-3 rounded">
                  <div className="w-8 h-8 bg-blue-500 rounded mb-2"></div>
                  <div className="h-2 bg-blue-200 rounded mb-1"></div>
                  <div className="h-2 bg-blue-100 rounded w-2/3"></div>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <div className="w-8 h-8 bg-green-500 rounded mb-2"></div>
                  <div className="h-2 bg-green-200 rounded mb-1"></div>
                  <div className="h-2 bg-green-100 rounded w-2/3"></div>
                </div>
                <div className="bg-purple-50 p-3 rounded">
                  <div className="w-8 h-8 bg-purple-500 rounded mb-2"></div>
                  <div className="h-2 bg-purple-200 rounded mb-1"></div>
                  <div className="h-2 bg-purple-100 rounded w-2/3"></div>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <div className="h-3 bg-gray-300 rounded mb-2"></div>
                <div className="h-3 bg-gray-200 rounded mb-2 w-4/5"></div>
                <div className="h-3 bg-gray-200 rounded w-3/5"></div>
              </div>
            </div>
          </div>
        );
      
      case 'analytics':
        return (
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
              <h3 className="text-sm font-medium text-gray-900">{title}</h3>
            </div>
            <div className="p-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded">
                  <div className="flex items-center justify-between mb-3">
                    <div className="h-2 bg-blue-200 rounded w-1/3"></div>
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-end space-x-1 h-16">
                      <div className="bg-blue-400 w-3 h-8 rounded-sm"></div>
                      <div className="bg-blue-400 w-3 h-12 rounded-sm"></div>
                      <div className="bg-blue-400 w-3 h-6 rounded-sm"></div>
                      <div className="bg-blue-400 w-3 h-16 rounded-sm"></div>
                      <div className="bg-blue-400 w-3 h-10 rounded-sm"></div>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded">
                  <div className="h-2 bg-green-200 rounded w-1/2 mb-3"></div>
                  <div className="relative w-20 h-20 mx-auto">
                    <div className="w-20 h-20 bg-green-200 rounded-full"></div>
                    <div className="absolute inset-2 bg-green-500 rounded-full"></div>
                    <div className="absolute inset-6 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'form':
        return (
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
              <h3 className="text-sm font-medium text-gray-900">{title}</h3>
            </div>
            <div className="p-4 space-y-4">
              <div className="space-y-3">
                <div>
                  <div className="h-2 bg-gray-300 rounded w-1/4 mb-2"></div>
                  <div className="h-8 bg-gray-100 rounded border border-gray-200"></div>
                </div>
                <div>
                  <div className="h-2 bg-gray-300 rounded w-1/3 mb-2"></div>
                  <div className="h-8 bg-gray-100 rounded border border-gray-200"></div>
                </div>
                <div>
                  <div className="h-2 bg-gray-300 rounded w-1/5 mb-2"></div>
                  <div className="h-20 bg-gray-100 rounded border border-gray-200"></div>
                </div>
                <div className="flex justify-end space-x-2 pt-4">
                  <div className="h-8 w-16 bg-gray-200 rounded"></div>
                  <div className="h-8 w-16 bg-blue-500 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'table':
        return (
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
              <h3 className="text-sm font-medium text-gray-900">{title}</h3>
            </div>
            <div className="p-4">
              <div className="space-y-2">
                {/* Header */}
                <div className="grid grid-cols-4 gap-2 pb-2 border-b border-gray-200">
                  <div className="h-2 bg-gray-400 rounded"></div>
                  <div className="h-2 bg-gray-400 rounded"></div>
                  <div className="h-2 bg-gray-400 rounded"></div>
                  <div className="h-2 bg-gray-400 rounded"></div>
                </div>
                {/* Rows */}
                {[1,2,3,4].map(i => (
                  <div key={i} className="grid grid-cols-4 gap-2 py-2">
                    <div className="h-2 bg-gray-200 rounded"></div>
                    <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-2 bg-green-200 rounded w-1/3"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'list':
        return (
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
              <h3 className="text-sm font-medium text-gray-900">{title}</h3>
            </div>
            <div className="p-4">
              <div className="space-y-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
                    <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                    <div className="flex-1 space-y-1">
                      <div className="h-2 bg-gray-300 rounded w-1/2"></div>
                      <div className="h-2 bg-gray-200 rounded w-1/3"></div>
                    </div>
                    <div className="h-6 w-6 bg-gray-300 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'calendar':
        return (
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
              <h3 className="text-sm font-medium text-gray-900">{title}</h3>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-7 gap-1 mb-2">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                  <div key={day} className="text-center text-xs text-gray-500 py-1">{day}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {Array.from({length: 35}).map((_, i) => (
                  <div key={i} className={`
                    aspect-square text-xs flex items-center justify-center rounded
                    ${i % 7 === 0 || i % 7 === 6 ? 'bg-gray-50' : 'bg-white'}
                    ${i === 15 ? 'bg-blue-500 text-white' : ''}
                    ${i === 22 ? 'bg-green-500 text-white' : ''}
                  `}>
                    {i < 31 ? i + 1 : ''}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'chat':
        return (
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
              <h3 className="text-sm font-medium text-gray-900">{title}</h3>
            </div>
            <div className="p-4 space-y-3">
              <div className="flex justify-start">
                <div className="bg-gray-100 p-2 rounded-lg max-w-xs">
                  <div className="h-2 bg-gray-300 rounded mb-1"></div>
                  <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-blue-500 p-2 rounded-lg max-w-xs">
                  <div className="h-2 bg-blue-300 rounded mb-1"></div>
                  <div className="h-2 bg-blue-300 rounded w-2/3"></div>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-gray-100 p-2 rounded-lg max-w-xs">
                  <div className="h-2 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
              <h3 className="text-sm font-medium text-gray-900">{title}</h3>
            </div>
            <div className="p-4">
              <div className="h-20 bg-gray-100 rounded flex items-center justify-center">
                <span className="text-gray-400 text-sm">{description}</span>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={`w-full ${className || ""}`}>
      {renderMockup()}
      <p className="text-sm text-gray-600 mt-2 text-center">{description}</p>
    </div>
  );
}
