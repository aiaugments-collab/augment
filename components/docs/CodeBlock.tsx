'use client'

import { useState } from 'react'

interface CodeBlockProps {
  children: string
  language?: string
  title?: string
}

export function CodeBlock({ children, language = 'text', title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(children.trim())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group my-6">
      {title && (
        <div className="bg-gray-900 text-gray-300 text-sm font-medium px-4 py-2 rounded-t-lg border-b border-gray-700 flex items-center justify-between">
          <span>{title}</span>
          <span className="text-xs text-gray-500 uppercase">{language}</span>
        </div>
      )}
      <div className="relative">
        <pre className={`bg-gray-900 text-gray-100 p-4 overflow-x-auto text-sm leading-relaxed ${title ? 'rounded-t-none rounded-b-lg' : 'rounded-lg'} border border-gray-700`}>
          <code className={`language-${language}`}>{children.trim()}</code>
        </pre>
        <button
          onClick={copyToClipboard}
          className="absolute top-3 right-3 p-2 bg-gray-800 hover:bg-gray-700 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-200 border border-gray-600"
          title={copied ? "Copied!" : "Copy to clipboard"}
        >
          {copied ? (
            <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}
