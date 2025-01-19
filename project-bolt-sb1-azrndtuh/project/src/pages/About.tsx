import React from 'react';
import { Award, Target, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">About EchoMinds AI</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're a team of AI specialists, marketing experts, and data scientists dedicated to revolutionizing how businesses connect with their audience.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-black/20 backdrop-blur-lg p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300">
              To empower businesses with AI-driven marketing solutions that deliver measurable results and sustainable growth.
            </p>
          </div>
          <div className="bg-black/20 backdrop-blur-lg p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-300">
              To be the global leader in AI-powered marketing solutions, setting new standards for innovation and effectiveness.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="h-8 w-8 text-cyan-400" />,
                title: "Excellence",
                description: "We strive for excellence in everything we do, from strategy to execution."
              },
              {
                icon: <Target className="h-8 w-8 text-cyan-400" />,
                title: "Innovation",
                description: "We continuously push the boundaries of what's possible with AI and marketing."
              },
              {
                icon: <Users className="h-8 w-8 text-cyan-400" />,
                title: "Client Success",
                description: "Your success is our success. We're committed to delivering results that matter."
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Who We Are</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Arjun Francis",
                role: "Founder & CEO"
              },
              {
                name: "Allan Francis",
                role: "Co-Founder & CTO"
              }
            ].map((member, index) => (
              <div key={index} className="bg-black/20 backdrop-blur-lg p-6 rounded-lg text-center">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 flex items-center justify-center">
                  <Users className="w-16 h-16 text-cyan-400/50" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
