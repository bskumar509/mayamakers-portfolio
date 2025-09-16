import { useState, useEffect } from 'react';

const roles = [
  'Digital Marketing Strategist',
  'Social Media Expert', 
  'Content Creator',
  'Campaign Manager'
];

export const AnimatedRole = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsAnimating(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span 
      className={`inline-block transition-all duration-300 transform ${
        isAnimating ? 'opacity-0 scale-95 rotate-3' : 'opacity-100 scale-100 rotate-0'
      }`}
    >
      {roles[currentRole]}
    </span>
  );
};