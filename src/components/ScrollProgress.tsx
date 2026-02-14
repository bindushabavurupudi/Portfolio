import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[100]">
      <div
        className="h-full transition-all duration-150"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))',
          boxShadow: '0 0 10px hsl(var(--neon) / 0.5)',
        }}
      />
    </div>
  );
};

export default ScrollProgress;
