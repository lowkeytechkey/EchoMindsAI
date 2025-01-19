import React from 'react';
import { Brain, MessageCircle, BarChart, Target, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';
import FadeInWhenVisible from '../components/FadeInWhenVisible';

export default function Services() {
  const services = [
    {
      icon: <Users className="h-12 w-12 text-cyan-400" />,
      title: "AI Customer Service Agent",
      description: "Smart AI virtual assistants that work 24/7 to answer customer queries instantly and provide a personal touch.",
      features: ["24/7 customer support", "Instant responses ", "Satisfying Personalized interactions", "Scalable solutions for all businesses"],
      bg: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <MessageCircle className="h-12 w-12 text-cyan-400" />,
      title: "AI Chatbots for Sales and Support",
      description: "AI chatbots that handle customer questions, guide buyers, and ensure no lead goes cold.",
      features: ["Real-time engagement", "Lead qualification", "FAQ support", "Sales funnel integration"],
      bg: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <BarChart className="h-12 w-12 text-cyan-400" />,
      title: "Process Automation for Workflow Efficiency",
      description: "Automate time-consuming, repetitive tasks to free up your team for strategic growth.",
      features: ["Data entry automation", "Task scheduling efficiency", "Workflow tracking tools", "Productivity improvement solutions"],
      bg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Target className="h-12 w-12 text-cyan-400" />,
      title: "AI-Powered Marketing and Automation",
      description: "Automate ads, emails, and campaigns to connect with the right audience effortlessly.",
      features: ["Email campaigns personalization", "Social ads optimizer", "Personalized customer segmentation", "Advanced campaign insights"],
      bg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Zap className="h-12 w-12 text-cyan-400" />,
      title: "SEO Optimization with AI",
      description: "Boost your website’s rankings with AI-driven keyword optimization and content analysis.",
      features: ["Keyword research rankings", "AI content optimization", "Competitor market insights", "On-page SEO tips"],
      bg: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Brain className="h-12 w-12 text-cyan-400" />,
      title: "Real-Time Data Analytics",
      description: "Stay ahead with live insights to make better decisions and predict trends.",
      features: ["Actionable performance tracking", "ROI success analysis", "Audience behavior insights", "Market trend forecasting"],
      bg: "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <AnimatedText
            text="Our Services"
            className="text-4xl font-bold text-white mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Comprehensive AI-powered marketing solutions designed to elevate your business and drive growth.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeInWhenVisible key={index} delay={index}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative overflow-hidden rounded-lg h-full"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.bg})` }}
                >
                  <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
                </div>
                <div className="relative p-6">
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    className="mb-6"
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                        className="text-gray-300 flex items-center"
                      >
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </FadeInWhenVisible>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 relative overflow-hidden rounded-lg">
          <motion.div 
            className="absolute inset-0 bg-black"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
              backgroundSize: ['100% 100%', '120% 120%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              backgroundImage: 'radial-gradient(circle at center, rgba(124, 58, 237, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)',
            }}
          />
          <div className="relative p-12 text-center">
            <FadeInWhenVisible>
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Transform your marketing strategy with our AI-powered solutions. Contact us today for a free consultation.
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-cyan-600 text-white font-medium hover:bg-cyan-700 transition-colors"
                >
                  Schedule a Consultation
                </motion.button>
              </Link>
            </FadeInWhenVisible>
          </div>
        </div>
      </div>
    </div>
  );
}