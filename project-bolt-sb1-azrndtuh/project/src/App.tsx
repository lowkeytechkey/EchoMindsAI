import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import Logo from './components/Logo';
import LoadingPage from './components/LoadingPage';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Show loading screen for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Router>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingPage key="loading" />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen"
          >
            <nav className="bg-cyan-950/50 backdrop-blur-md fixed w-full z-50 md:border-b md:border-cyan-800/30">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                  {/* Logo Section */}
                  <div className="flex-shrink-0">
                    <Link to="/" onClick={closeMenu} className="flex items-center space-x-2">
                      <Logo />
                    </Link>
                  </div>

                  {/* Navigation Links - Desktop */}
                  <div className="hidden md:block flex-grow">
                    <div className="flex justify-center">
                      <div className="bg-cyan-900/30 backdrop-blur-sm rounded-full px-6 py-2 border border-cyan-800/30">
                        <div className="flex items-center space-x-8">
                          <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</Link>
                          <Link to="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">About</Link>
                          <Link to="/services" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Services</Link>
                          <Link to="/blog" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Blog</Link>
                          <Link to="/contact" className="bg-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-cyan-700 transition-colors">Contact</Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile menu button */}
                  <div className="md:hidden">
                    <button
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className="text-gray-300 hover:text-white p-2"
                    >
                      {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile menu */}
              {isMenuOpen && (
                <div className="md:hidden bg-cyan-950/95 backdrop-blur-lg">
                  <div className="px-4 pt-2 pb-3 space-y-1">
                    <Link to="/" onClick={closeMenu} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                    <Link to="/about" onClick={closeMenu} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</Link>
                    <Link to="/services" onClick={closeMenu} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</Link>
                    <Link to="/blog" onClick={closeMenu} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Blog</Link>
                    <Link to="/contact" onClick={closeMenu} className="bg-cyan-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-cyan-700">Contact</Link>
                  </div>
                </div>
              )}
            </nav>

            <main className="pt-0">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>

            <footer className="bg-cyan-950/20 backdrop-blur-lg mt-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-bold">EchoMinds AI</span>
                    </div>
                    <p className="mt-2 text-sm text-gray-400">
                      Empowering businesses through AI-driven marketing solutions.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-3">Quick Links</h3>
                    <div className="space-y-2">
                      <Link to="/" onClick={closeMenu} className="block text-gray-400 hover:text-white">Home</Link>
                      <Link to="/about" onClick={closeMenu} className="block text-gray-400 hover:text-white">About</Link>
                      <Link to="/services" onClick={closeMenu} className="block text-gray-400 hover:text-white">Services</Link>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-3">Services</h3>
                    <div className="space-y-2">
                      <Link to="/services" onClick={closeMenu} className="block text-gray-400 hover:text-white">AI Strategy</Link>
                      <Link to="/services" onClick={closeMenu} className="block text-gray-400 hover:text-white">Content Generation</Link>
                      <Link to="/services" onClick={closeMenu} className="block text-gray-400 hover:text-white">Market Analysis</Link>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-3">Contact</h3>
                    <div className="space-y-2 text-gray-400">
                      <p>contact@EchoMindsAI.com</p>
                      <p>+971 55 862 5047</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                  <p>&copy; {new Date().getFullYear()} EchoMinds AI. All rights reserved.</p>
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </Router>
  );
}

export default App;