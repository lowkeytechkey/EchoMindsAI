import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';

// Static blog posts data
const posts = {
  'future-of-ai-in-business': {
    title: 'The Future of AI in Business',
    content: `
# The Future of AI in Business

Artificial Intelligence is revolutionizing how businesses operate, make decisions, and interact with customers. This transformation is not just about automation; it's about augmenting human capabilities and creating new possibilities for growth and innovation.

## Key Areas of Impact

### 1. Decision Making
AI-powered analytics tools are helping businesses make more informed decisions by processing vast amounts of data and identifying patterns that humans might miss.

### 2. Customer Service
Chatbots and virtual assistants are providing 24/7 customer support, handling routine queries efficiently while allowing human agents to focus on more complex issues.

### 3. Process Automation
Repetitive tasks are being automated, freeing up employees to focus on strategic initiatives and creative problem-solving.

## Looking Ahead

The future of AI in business looks promising, with new applications and use cases emerging regularly. Companies that embrace AI today will be better positioned to compete in tomorrow's market.
    `,
    image_url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'John Doe'
    },
    created_at: '2024-01-15T10:00:00Z'
  },
  'maximizing-roi-with-ai-marketing': {
    title: 'Maximizing ROI with AI Marketing',
    content: `
# Maximizing ROI with AI Marketing

AI-powered marketing tools are transforming how businesses reach and engage their audiences. By leveraging machine learning and data analytics, companies can optimize their marketing efforts and achieve better returns on their investments.

## Key Strategies

### 1. Personalization at Scale
AI enables businesses to deliver personalized content and recommendations to thousands of customers simultaneously.

### 2. Predictive Analytics
Machine learning models can predict customer behavior and identify high-value opportunities.

### 3. Automated Campaign Optimization
AI systems can automatically adjust campaign parameters to maximize performance and reduce waste.

## Best Practices

To get the most out of AI marketing tools, businesses should:
- Start with clear objectives
- Ensure data quality
- Continuously test and optimize
- Monitor and measure results
    `,
    image_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Jane Smith'
    },
    created_at: '2024-01-10T10:00:00Z'
  },
  'ai-driven-customer-experience': {
    title: 'AI-Driven Customer Experience',
    content: `
# AI-Driven Customer Experience

Modern customers expect personalized, responsive, and seamless experiences across all touchpoints. AI is making this possible by enabling businesses to understand and respond to customer needs in real-time.

## Key Benefits

### 1. Personalization
AI analyzes customer data to deliver tailored experiences and recommendations.

### 2. 24/7 Availability
AI-powered chatbots and virtual assistants provide round-the-clock support.

### 3. Proactive Service
Predictive analytics help identify and address potential issues before they become problems.

## Implementation Strategies

To successfully implement AI-driven customer experience:
- Start with a clear customer journey map
- Identify key touchpoints for AI integration
- Ensure seamless handoffs between AI and human agents
- Continuously gather and act on customer feedback
    `,
    image_url: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Mike Johnson'
    },
    created_at: '2024-01-05T10:00:00Z'
  }
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? posts[slug as keyof typeof posts] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">
            Post Not Found
          </h1>
          <Link to="/blog" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/blog" className="text-cyan-400 hover:text-cyan-300 inline-flex items-center mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>

        {post.image_url && (
          <img
            src={post.image_url}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />
        )}

        <article className="prose prose-invert prose-cyan max-w-none">
          <h1 className="text-4xl font-bold text-white mb-6">{post.title}</h1>
          
          <div className="flex items-center space-x-6 text-gray-400 mb-8">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              {post.author.name}
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {format(new Date(post.created_at), 'MMMM d, yyyy')}
            </div>
          </div>

          <div className="bg-black/20 backdrop-blur-lg rounded-lg p-8">
            <ReactMarkdown className="text-gray-300 leading-relaxed">
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
}