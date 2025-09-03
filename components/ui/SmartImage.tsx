"use client";

import { useState } from "react";
import Image from "next/image";

interface SmartImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
  mockupType?: 'dashboard' | 'analytics' | 'interface' | 'workflow' | 'default';
  priority?: boolean;
  fill?: boolean;
}

const generateMockup = (type: string, alt: string) => {
  const baseClasses = "w-full h-full flex items-center justify-center text-gray-500 border-2 border-dashed border-gray-300 rounded-lg";
  
  const mockups = {
    dashboard: (
      <div className={`${baseClasses} bg-gradient-to-br from-blue-50 to-indigo-50`}>
        <div className="text-center p-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-lg flex items-center justify-center">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Dashboard Preview</h3>
          <p className="text-sm text-gray-500">{alt}</p>
        </div>
      </div>
    ),
    analytics: (
      <div className={`${baseClasses} bg-gradient-to-br from-green-50 to-emerald-50`}>
        <div className="text-center p-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-lg flex items-center justify-center">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Analytics View</h3>
          <p className="text-sm text-gray-500">{alt}</p>
        </div>
      </div>
    ),
    interface: (
      <div className={`${baseClasses} bg-gradient-to-br from-purple-50 to-violet-50`}>
        <div className="text-center p-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-lg flex items-center justify-center">
            <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Interface Preview</h3>
          <p className="text-sm text-gray-500">{alt}</p>
        </div>
      </div>
    ),
    workflow: (
      <div className={`${baseClasses} bg-gradient-to-br from-orange-50 to-amber-50`}>
        <div className="text-center p-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-lg flex items-center justify-center">
            <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Workflow View</h3>
          <p className="text-sm text-gray-500">{alt}</p>
        </div>
      </div>
    ),
    default: (
      <div className={`${baseClasses} bg-gradient-to-br from-gray-50 to-slate-50`}>
        <div className="text-center p-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Preview Coming Soon</h3>
          <p className="text-sm text-gray-500">{alt}</p>
        </div>
      </div>
    )
  };

  return mockups[type as keyof typeof mockups] || mockups.default;
};

export function SmartImage({ 
  src, 
  alt, 
  width, 
  height, 
  className = "", 
  style,
  mockupType = 'default',
  priority = false,
  fill = false 
}: SmartImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Auto-detect mockup type from alt text if not specified
  const detectedType = mockupType === 'default' ? (
    alt.toLowerCase().includes('dashboard') ? 'dashboard' :
    alt.toLowerCase().includes('analytics') ? 'analytics' :
    alt.toLowerCase().includes('interface') ? 'interface' :
    alt.toLowerCase().includes('workflow') ? 'workflow' :
    'default'
  ) : mockupType;

  if (hasError) {
    return (
      <div className={className} style={{ width, height, ...style }}>
        {generateMockup(detectedType, alt)}
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} style={{ width, height, ...style }}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        priority={priority}
        className="object-cover"
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
        onLoad={() => setIsLoading(false)}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse rounded" />
      )}
    </div>
  );
}
