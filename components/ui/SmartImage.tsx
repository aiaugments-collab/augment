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
  const mockups = {
    dashboard: (
      <div className="w-full h-full bg-gradient-to-br from-slate-100 via-gray-50 to-zinc-100 rounded-lg shadow-inner" />
    ),
    analytics: (
      <div className="w-full h-full bg-gradient-to-br from-blue-50 via-slate-50 to-gray-100 rounded-lg shadow-inner" />
    ),
    interface: (
      <div className="w-full h-full bg-gradient-to-br from-gray-50 via-neutral-50 to-stone-100 rounded-lg shadow-inner" />
    ),
    workflow: (
      <div className="w-full h-full bg-gradient-to-br from-zinc-50 via-gray-50 to-slate-100 rounded-lg shadow-inner" />
    ),
    default: (
      <div className="w-full h-full bg-gradient-to-br from-gray-100 via-slate-50 to-zinc-100 rounded-lg shadow-inner" />
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
