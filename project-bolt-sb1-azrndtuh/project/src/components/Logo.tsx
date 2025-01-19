import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

export default function Logo() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      const animation = lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/logo.json' // Files in public directory are served at root path
      });

      return () => animation.destroy();
    }
  }, []);

  return <div ref={container} className="w-40 h-40" />;
}