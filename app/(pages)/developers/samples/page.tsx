'use client';
import { Metadata } from 'next';
import { useState } from 'react';

export default function CodeSamplesPage() {
  const [selectedCategory, setSelectedCategory] = useState('chat');
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');

  const categories = [
    { id: 'chat', name: 'Chat & Completions', icon: '', count: 12 },
    { id: 'embeddings', name: 'Embeddings', icon: '', count: 8 },
    { id: 'fine-tuning', name: 'Fine-tuning', icon: '️', count: 6 },
    { id: 'streaming', name: 'Streaming', icon: '', count: 5 },
    { id: 'integrations', name: 'Integrations', icon: '', count: 15 },
    { id: 'use-cases', name: 'Use Cases', icon: '', count: 20 }
  ];

  const languages = ['javascript', 'python', 'go', 'java', 'php', 'ruby'];

  const samples = {
    chat: [
      {
        title: 'Basic Chat Completion',
        description: 'Simple chat completion with system and user messages',
        difficulty: 'Beginner',
        tags: ['chat', 'basic'],
        code: {
          javascript: `import { AugmentAI } from '@augment/ai-sdk';

const client = new AugmentAI({
  apiKey: process.env.AUGMENT_API_KEY
});

async function basicChat() {
  const completion = await client.chat.completions.create({
    model: 'augment-gpt-4',
    messages: [
      {
        role: 'system',
        content: 'You are a helpful assistant.'
      },
      {
        role: 'user',
        content: 'What is the capital of France?'
      }
    ]
  });
  
  console.log(completion.choices[0].message.content);
}

basicChat();`,
          python: `from augment_ai import AugmentAI
import os

client = AugmentAI(api_key=os.environ.get("AUGMENT_API_KEY"))

def basic_chat():
    completion = client.chat.completions.create(
        model="augment-gpt-4",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": "What is the capital of France?"}
        ]
    )
    
    print(completion.choices[0].message.content)

basic_chat()`
        }
      },
      {
        title: 'Conversational Memory',
        description: 'Maintain conversation context across multiple turns',
        difficulty: 'Intermediate',
        tags: ['chat', 'memory', 'context'],
        code: {
          javascript: `class ConversationManager {
  constructor(apiKey) {
    this.client = new AugmentAI({ apiKey });
    this.messages = [
      { role: 'system', content: 'You are a helpful assistant.' }
    ];
  }
  
  async sendMessage(userMessage) {
    this.messages.push({ role: 'user', content: userMessage });
    
    const completion = await this.client.chat.completions.create({
      model: 'augment-gpt-4',
      messages: this.messages
    });
    
    const assistantMessage = completion.choices[0].message.content;
    this.messages.push({ role: 'assistant', content: assistantMessage });
    
    return assistantMessage;
  }
}

const conversation = new ConversationManager(process.env.AUGMENT_API_KEY);
const response = await conversation.sendMessage("Hello!");`,
          python: `class ConversationManager:
    def __init__(self, api_key):
        self.client = AugmentAI(api_key=api_key)
        self.messages = [
            {"role": "system", "content": "You are a helpful assistant."}
        ]
    
    def send_message(self, user_message):
        self.messages.append({"role": "user", "content": user_message})
        
        completion = self.client.chat.completions.create(
            model="augment-gpt-4",
            messages=self.messages
        )
        
        assistant_message = completion.choices[0].message.content
        self.messages.append({"role": "assistant", "content": assistant_message})
        
        return assistant_message

conversation = ConversationManager(os.environ.get("AUGMENT_API_KEY"))
response = conversation.send_message("Hello!")`
        }
      }
    ],
    embeddings: [
      {
        title: 'Text Embeddings',
        description: 'Generate vector embeddings for semantic search',
        difficulty: 'Beginner',
        tags: ['embeddings', 'vectors'],
        code: {
          javascript: `async function generateEmbeddings(texts) {
  const response = await client.embeddings.create({
    model: 'augment-embedding-v2',
    input: texts
  });
  
  return response.data.map(item => item.embedding);
}

const embeddings = await generateEmbeddings([
  "The weather is nice today",
  "It's a beautiful sunny day"
]);`,
          python: `def generate_embeddings(texts):
    response = client.embeddings.create(
        model="augment-embedding-v2",
        input=texts
    )
    
    return [item.embedding for item in response.data]

embeddings = generate_embeddings([
    "The weather is nice today",
    "It's a beautiful sunny day"
])`
        }
      }
    ]
  };

  const currentSamples = samples[selectedCategory as keyof typeof samples] || [];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-6xl font-normal text-white mb-6" style={{ fontFamily: 'var(--oracleserif)' }}>
              Code Samples
            </h1>
            <p className="text-xl text-gray-300 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
              Ready-to-use code examples and templates for common AI use cases. Copy, paste, and customize for your applications.
            </p>
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-green-300">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Production Ready
              </div>
              <div className="flex items-center text-blue-300">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Multiple Languages
              </div>
              <div className="flex items-center text-purple-300">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Well Documented
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h3 className="text-lg font-semibold text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left flex items-center justify-between px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-[#C74634] text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    style={{ fontFamily: 'var(--oraclesans)' }}
                  >
                    <div className="flex items-center">
                      <span className="mr-3">{category.icon}</span>
                      {category.name}
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      selectedCategory === category.id ? 'bg-white/20' : 'bg-gray-200'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              <div className="mt-8 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                   Pro Tip
                </h4>
                <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                  All code samples include error handling and best practices. Customize them for your specific use case.
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Language Selector */}
            <div className="flex flex-wrap gap-2 mb-8">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedLanguage === lang
                      ? 'bg-[#C74634] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  style={{ fontFamily: 'var(--oraclesans)' }}
                >
                  {lang.charAt(0).toUpperCase() + lang.slice(1)}
                </button>
              ))}
            </div>

            {/* Code Samples */}
            <div className="space-y-8">
              {currentSamples.map((sample, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                          {sample.title}
                        </h3>
                        <p className="text-gray-700" style={{ fontFamily: 'var(--oraclesans)' }}>
                          {sample.description}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        sample.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                        sample.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {sample.difficulty}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {sample.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                          style={{ fontFamily: 'var(--oraclesans)' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gray-900">
                    <div className="flex items-center justify-between px-6 py-3 border-b border-gray-700">
                      <span className="text-sm text-gray-300" style={{ fontFamily: 'var(--oraclesans)' }}>
                        {selectedLanguage}.{selectedLanguage === 'javascript' ? 'js' : selectedLanguage === 'python' ? 'py' : 'go'}
                      </span>
                      <button className="text-gray-400 hover:text-white text-sm" style={{ fontFamily: 'var(--oraclesans)' }}>
                        Copy Code
                      </button>
                    </div>
                    <div className="p-6">
                      <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
                        {sample.code[selectedLanguage as keyof typeof sample.code]}
                      </pre>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button
                className="px-6 py-3 bg-[#C74634] text-white font-semibold rounded-lg hover:bg-[#A63429] transition-colors duration-200"
                style={{ fontFamily: 'var(--oraclesans)' }}
              >
                Load More Examples
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Templates */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-normal text-[#161513] mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
              Featured Templates
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--oraclesans)' }}>
              Complete application templates to jumpstart your AI projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <a href="#" className="group bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-[#C74634] transition-all duration-200">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                
              </div>
              <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                Chatbot Template
              </h3>
              <p className="text-sm text-gray-700 mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                Complete chatbot with memory, streaming, and custom personality
              </p>
              <div className="flex items-center text-[#C74634] text-sm font-medium">
                View Template
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            <a href="#" className="group bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-[#C74634] transition-all duration-200">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 text-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                
              </div>
              <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                Semantic Search
              </h3>
              <p className="text-sm text-gray-700 mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                Vector-based search with embeddings and similarity matching
              </p>
              <div className="flex items-center text-[#C74634] text-sm font-medium">
                View Template
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>

            <a href="#" className="group bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-[#C74634] transition-all duration-200">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 text-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                
              </div>
              <h3 className="text-lg font-semibold text-[#161513] mb-2" style={{ fontFamily: 'var(--oracleserif)' }}>
                Content Generator
              </h3>
              <p className="text-sm text-gray-700 mb-4" style={{ fontFamily: 'var(--oraclesans)' }}>
                AI-powered content creation with templates and customization
              </p>
              <div className="flex items-center text-[#C74634] text-sm font-medium">
                View Template
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#C74634] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-normal text-white mb-4" style={{ fontFamily: 'var(--oracleserif)' }}>
            Ready to Start Coding?
          </h2>
          <p className="text-lg text-red-100 mb-8" style={{ fontFamily: 'var(--oraclesans)' }}>
            Get your free API key and start building with our code samples and templates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 bg-white text-[#C74634] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              Get Free API Key
            </a>
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#C74634] transition-colors duration-200"
              style={{ fontFamily: 'var(--oraclesans)' }}
            >
              Browse All Samples
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
