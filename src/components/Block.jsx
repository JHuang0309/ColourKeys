import { useState, useEffect } from 'react';

const Block = ({ color, size = 60, isRemoving = false, onRemoveComplete }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  const isWhite = color === '#FFFFFF' || color.toLowerCase() === '#fff' || color === 'white';
  
  // Trigger entrance animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Trigger exit animation when isRemoving becomes true
  useEffect(() => {
    if (isRemoving) {
      setIsVisible(false);
      
      // Call onRemoveComplete after animation finishes
      const timer = setTimeout(() => {
        if (onRemoveComplete) {
          onRemoveComplete();
        }
      }, 200); // Match animation duration
      
      return () => clearTimeout(timer);
    }
  }, [isRemoving, onRemoveComplete]);
  
  return (
    <div
      className={`rounded-xl transition-all duration-200 ease-out ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
      }`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        border: isWhite ? '1px solid #E5E7EB' : 'none',
      }}
    />
  );
};

export default Block;