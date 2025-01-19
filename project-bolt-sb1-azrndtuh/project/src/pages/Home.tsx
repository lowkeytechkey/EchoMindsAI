import React from 'react';
import { ArrowRight, Bot, BarChart, Users, Send, Brain, MessageCircle, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';
import FadeInWhenVisible from '../components/FadeInWhenVisible';

export default function Home() {
  const services = [
    {
      icon: <Users className="h-8 w-8 text-cyan-400" />,
      title: "AI Customer Service Agent",
      description: "Smart AI virtual assistants that work 24/7 to answer customer queries instantly and provide a personal touch.",
      feature: "24/7 customer support",
      bg: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-cyan-400" />,
      title: "AI Chatbots for Sales and Support",
      description: "AI chatbots that handle customer questions, guide buyers, and ensure no lead goes cold.",
      feature: "Real-time engagement",
      bg: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <BarChart className="h-8 w-8 text-cyan-400" />,
      title: "Process Automation for Workflow Efficiency",
      description: "Automate time-consuming, repetitive tasks to free up your team for strategic growth.",
      feature: "Data entry automation",
      bg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Target className="h-8 w-8 text-cyan-400" />,
      title: "AI-Powered Marketing and Automation",
      description: "Automate ads, emails, and campaigns to connect with the right audience effortlessly.",
      feature: "Email campaigns personalization",
      bg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Zap className="h-8 w-8 text-cyan-400" />,
      title: "SEO Optimization with AI",
      description: "Boost your website's rankings with AI-driven keyword optimization and content analysis.",
      feature: "Keyword research rankings",
      bg: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Brain className="h-8 w-8 text-cyan-400" />,
      title: "Real-Time Data Analytics",
      description: "Stay ahead with live insights to make better decisions and predict trends.",
      feature: "Actionable performance tracking",
      bg: "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cyan-950"
          >
            {/* Animated Grid Background */}
            <motion.div 
              className="absolute inset-0"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
                backgroundSize: ['100% 100%', '120% 120%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                backgroundImage: 'radial-gradient(circle at center, rgba(103, 232, 249, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)',
                backgroundSize: "50px 50px"
              }}
            />
            
            {/* Floating Particles */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
                  initial={{
                    x: Math.random() * 100 + "%",
                    y: Math.random() * 100 + "%",
                    scale: Math.random() * 0.5 + 0.5
                  }}
                  animate={{
                    y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
                    x: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
                    scale: [Math.random() * 0.5 + 0.5, Math.random() * 1 + 0.5]
                  }}
                  transition={{
                    duration: Math.random() * 10 + 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear"
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
        
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <AnimatedText
              text="Struggling with inefficiency, wasted resources & rising costs?"
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-2xl md:text-3xl text-gray-300 mb-4 max-w-4xl mx-auto font-semibold"
            >
              Your competitors are leveraging AI to scale while you're left behind.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-xl text-gray-300 mb-4 max-w-2xl mx-auto"
            >
              <strong>With EchoMinds AI, you can automate key processes, reduce costs, boost efficiency, and accelerate growth.</strong>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Book your FREE consultation today.
            </motion.p>
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="max-w-md mx-auto bg-cyan-950/30 backdrop-blur-sm p-6 rounded-lg border border-cyan-500/10"
            >
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-2 rounded-lg bg-cyan-950/20 border border-cyan-500/10 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Mobile"
                    className="w-full px-4 py-2 rounded-lg bg-cyan-950/20 border border-cyan-500/10 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 rounded-lg bg-cyan-950/20 border border-cyan-500/10 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
                >
                  I want my Free Consultation
                  <Send className="ml-2 h-4 w-4" />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rest of the component remains unchanged */}
      {/* Services Section */}
      <section className="py-20 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(103, 232, 249, 0.05) 0%, transparent 70%)',
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeInWhenVisible>
              <h2 className="text-3xl font-bold text-white mb-4">Our Services</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Discover how our AI-powered solutions can transform your business operations and drive growth
              </p>
            </FadeInWhenVisible>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeInWhenVisible key={index} delay={index * 0.2}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative group overflow-hidden rounded-lg h-full"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${service.bg})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/90 to-black/90 backdrop-blur-[2px]" />
                  </div>
                  <div className="relative p-8">
                    <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="flex items-center text-cyan-400 mb-4">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                      {service.feature}
                    </div>
                    <motion.div
                      initial={{ opacity: 1, y: 20 }}
                      whileHover={{ opacity: 1, y: 20 }}
                      className="mt-4"
                    >
                      <Link
                        to="/services"
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300"
                      >
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <FadeInWhenVisible>
              <h2 className="text-3xl font-bold text-white mb-4">Why Choose Us?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We combine cutting-edge AI technology with marketing expertise to deliver exceptional results for your business.
              </p>
            </FadeInWhenVisible>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Bot className="h-8 w-8 text-cyan-400" />,
                title: "AI-Powered Insights",
                description: "Leverage machine learning algorithms to understand your market and customers better.",
                bg: "https://images.unsplash.com/photo-1589254065878-42c9da997008?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                icon: <BarChart className="h-8 w-8 text-cyan-400" />,
                title: "Data-Driven Strategy",
                description: "Make informed decisions based on real-time analytics and predictive modeling.",
                bg: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              },
              {
                icon: <Users className="h-8 w-8 text-cyan-400" />,
                title: "Personalized Campaigns",
                description: "Create targeted marketing campaigns that resonate with your audience.",
                bg: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              }
            ].map((feature, index) => (
              <FadeInWhenVisible key={index} delay={index}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="relative overflow-hidden rounded-lg"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${feature.bg})` }}
                  >
                    <div className="absolute inset-0 bg-cyan-950/70 backdrop-blur-sm"></div>
                  </div>
                  <div className="relative p-6">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-cyan-950"
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
            backgroundImage: 'radial-gradient(circle at center, rgba(103, 232, 249, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInWhenVisible>
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have already revolutionized their approach with our AI-powered solutions.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 rounded-lg bg-cyan-600 text-white font-medium hover:bg-cyan-700 transition-colors"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </Link>
          </FadeInWhenVisible>
        </div>
      </section>
    </div>
  );
}