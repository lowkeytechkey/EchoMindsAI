import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { motion } from 'framer-motion';

export default function LoadingPage() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      const animation = lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/loadingpage.json'
      });

      return () => animation.destroy();
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 flex items-center justify-center z-50 bg-gradient-to-br from-cyan-950 via-cyan-900 to-blue-900"
    >
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
      <div className="relative text-center">
        <div ref={container} className="w-100 h-100 mx-auto" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-white text-xl font-semibold mt-4"
        >
          Welcome To Your Future.
        </motion.div>
      </div>
    </motion.div>
  );
}