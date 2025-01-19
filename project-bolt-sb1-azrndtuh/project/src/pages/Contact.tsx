import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">Stop that Financial Bleed Now!
</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ditch that outdated processes.</p>
<p className="text-xl text-gray-300 max-w-3xl mx-auto"> Embrace EchoMinds AI - Your AI Transformation Partner
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="bg-black/20 backdrop-blur-lg p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-cyan-400 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white">Email</h3>
                    <p className="text-gray-400">contact@EchoMindsAI.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-cyan-400 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white">Phone</h3>
                    <p className="text-gray-400">+971 55 862 5047</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-cyan-400 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white">Office</h3>
                    <p className="text-gray-400">
                      TCA <br />
                      Abu Dhabi<br />
                      United Arab Emirates
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-white mb-4">Business Hours ?</h3>
                <div className="space-y-2 text-gray-400">
                  <p>We hustle & Excute 24/7</p>
                  <p>Let's Talk Now!</p>
              
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black/20 backdrop-blur-lg p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-6">Still not sure ?</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-2 rounded-lg bg-black/20 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-gray-300 mb-2">
                  Mobile
                  </label>
                  <input
                    type="text"
                    id="mobile"
                    className="w-full px-4 py-2 rounded-lg bg-black/20 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                    placeholder="1234567890"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg bg-black/20 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                  placeholder="john@example.com"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
