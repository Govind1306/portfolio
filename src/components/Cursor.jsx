import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('button') ||
        e.target.closest('a')
      ) {
        setIsPointer(true);
      }
    };

    const handleMouseOut = (e) => {
        if (
            e.target.tagName === 'A' ||
            e.target.tagName === 'BUTTON' ||
            e.target.closest('button') ||
            e.target.closest('a')
        ) {
            setIsPointer(false);
        }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full bg-white/50 dark:bg-white/30 backdrop-blur-sm pointer-events-none z-50 hidden md:block"
      animate={{ 
        x: position.x - 16, 
        y: position.y - 16,
        scale: isPointer ? 1.5 : 1,
        opacity: isPointer ? 0.6 : 1,
      }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
    />
  );
};

export default Cursor;