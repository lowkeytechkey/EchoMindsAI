import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';

// Static blog posts data
const posts = [
  {
    id: '1',
    title: 'The Future of AI in Business',
    slug: 'future-of-ai-in-business',
    excerpt: 'Discover how artificial intelligence is transforming the business landscape and what it means for your company.',
    content: 'Full article content here...',
    image_url: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'John Doe',
      avatar_url: null
    },
    created_at: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    title: 'Maximizing ROI with AI Marketing',
    slug: 'maximizing-roi-with-ai-marketing',
    excerpt: 'Learn how to leverage AI-powered marketing tools to maximize your return on investment.',
    content: 'Full article content here...',
    image_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Jane Smith',
      avatar_url: null
    },
    created_at: '2024-01-10T10:00:00Z'
  },
  {
    id: '3',
    title: 'AI-Driven Customer Experience',
    slug: 'ai-driven-customer-experience',
    excerpt: 'Explore how AI is revolutionizing customer experience and service delivery.',
    content: 'Full article content here...',
    image_url: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    author: {
      name: 'Mike Johnson',
      avatar_url: null
    },
    created_at: '2024-01-05T10:00:00Z'
  }
];

export default function Blog() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">Latest Insights</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest trends and insights in AI marketing technology.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-black/20 backdrop-blur-lg rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              {post.image_url && (
                <img
                  src={post.image_url}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <Link to={`/blog/${post.slug}`} className="block">
                  <h2 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-gray-400 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author.name}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {format(new Date(post.created_at), 'MMM d, yyyy')}
                  </div>
                </div>
                <Link
                  to={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center text-cyan-400 hover:text-cyan-300"
                >
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-20 bg-black/30 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-300 mb-6">
            Get the latest insights and updates delivered directly to your inbox.
          </p>
          <form className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-black/20 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}