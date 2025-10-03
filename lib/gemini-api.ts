// Gemini API integration for chatbot
// This will be used to replace the basic response logic in the chatbot

interface GeminiResponse {
  text: string;
  confidence: number;
}

interface ChatContext {
  userMessage: string;
  conversationHistory: Array<{
    role: 'user' | 'assistant';
    content: string;
  }>;
}

// Gemini API configuration
const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY || 'AIzaSyCNavdb7Ws3EPwjDsy4j5P9VqxyKyW8wTY';
const GEMINI_MODEL = 'gemini-2.5-pro'; // Using the stable pro model name
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

// Debug logging
console.log('Gemini API URL:', GEMINI_API_URL);
console.log('Gemini API Key (first 10 chars):', GEMINI_API_KEY.substring(0, 10) + '...');

// System prompt for Augment AI chatbot
const SYSTEM_PROMPT = `You are a helpful customer support assistant for Augment, an enterprise AI platform company. 

About Augment:
- We provide comprehensive AI solutions including AI agents, workflow automation, ERP systems, and cloud infrastructure
- Our products help businesses automate operations, reduce costs, and improve efficiency
- We serve enterprises, startups, and developers
- We offer free trials, demos, and various pricing tiers

IMPORTANT: Always direct users to our contact sales page for any inquiries: https://augment.cfd/corporate/contact/sales

Guidelines:
- Be professional, helpful, and concise
- Focus on Augment's AI platform and services
- ALWAYS direct users to the contact sales page: https://augment.cfd/corporate/contact/sales
- For ANY question about pricing, demos, trials, features, or support - direct them to sales
- Keep responses under 100 words
- Use a friendly but professional tone
- End every response with the contact sales link

Response format:
1. Brief helpful answer
2. "Our sales team can help you with [specific need]"
3. "Please contact them here: https://augment.cfd/corporate/contact/sales"`;

export async function generateGeminiResponse(context: ChatContext): Promise<GeminiResponse> {
  try {
    // For now, return a placeholder response
    // TODO: Implement actual Gemini API call when API key is available
    
    if (!GEMINI_API_KEY) {
      console.warn('Gemini API key not configured, using fallback responses');
      return {
        text: getFallbackResponse(context.userMessage),
        confidence: 0.8
      };
    }

    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `${SYSTEM_PROMPT}\n\nConversation history:\n${formatConversationHistory(context.conversationHistory)}\n\nUser: ${context.userMessage}\n\nAssistant:`
              }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 200,
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH", 
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE"
          }
        ]
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API Error Response:', errorText);
      throw new Error(`Gemini API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

    return {
      text: generatedText || getFallbackResponse(context.userMessage),
      confidence: 0.9
    };

  } catch (error) {
    console.error('Error calling Gemini API:', error);
    return {
      text: getFallbackResponse(context.userMessage),
      confidence: 0.5
    };
  }
}

function formatConversationHistory(history: ChatContext['conversationHistory']): string {
  return history
    .slice(-6) // Keep last 6 messages for context
    .map(msg => `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`)
    .join('\n');
}

function getFallbackResponse(userMessage: string): string {
  const message = userMessage.toLowerCase();
  
  if (message.includes('pricing') || message.includes('cost') || message.includes('price')) {
    return "I'd be happy to help you with pricing information! Our sales team can provide you with a personalized quote based on your specific needs. Please visit our contact sales page to get started: https://augment.cfd/corporate/contact/sales";
  }
  
  if (message.includes('demo') || message.includes('trial') || message.includes('try')) {
    return "Excellent! Our sales team can arrange a personalized demo of our AI platform for you. They'll show you exactly how Augment can help your business. Please contact them here: https://augment.cfd/corporate/contact/sales";
  }
  
  if (message.includes('ai') || message.includes('artificial intelligence') || message.includes('automation')) {
    return "Augment offers a comprehensive AI platform with AI agents, workflow automation, and enterprise solutions. Our sales team can discuss which AI capabilities would be best for your specific use case. Contact them here: https://augment.cfd/corporate/contact/sales";
  }
  
  if (message.includes('support') || message.includes('help') || message.includes('problem')) {
    return "For any technical questions or support needs, our sales team can connect you with the right specialists and ensure you get the help you need. Please reach out to them: https://augment.cfd/corporate/contact/sales";
  }
  
  if (message.includes('contact') || message.includes('sales') || message.includes('call') || message.includes('yes') || message.includes('sure') || message.includes('okay')) {
    return "Perfect! Our sales team is ready to help you. Please visit our contact sales page to get in touch with a specialist who can assist with your specific needs: https://augment.cfd/corporate/contact/sales";
  }

  if (message.includes('integration') || message.includes('api') || message.includes('connect')) {
    return "Augment offers extensive integration capabilities through our APIs and SDKs. Our sales team can discuss integration options and connect you with our technical specialists. Contact them here: https://augment.cfd/corporate/contact/sales";
  }
  
  return "Thank you for your interest in Augment! Our sales team can provide detailed information about our AI platform, pricing, and how we can help your business. Please contact them directly: https://augment.cfd/corporate/contact/sales";
}

// Export types for use in components
export type { GeminiResponse, ChatContext };
