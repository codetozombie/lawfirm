"use client";
import { useEffect, useState, useRef } from "react";

// Helper component to handle the counting animation
const AnimatedNumber = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const startTimeRef = useRef<number | null>(null);
  const hasAnimated = useRef(false); // To ensure it only animates once

  useEffect(() => {
    // Only start if we haven't animated yet
    if (hasAnimated.current) return;
    
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = timestamp - startTimeRef.current;
      const percentage = Math.min(progress / duration, 1);

      // Easing function for smooth stop (easeOutQuart)
      const easeOut = 1 - Math.pow(1 - percentage, 4);
      
      const currentCount = Math.floor(easeOut * end);
      setCount(currentCount);

      if (percentage < 1) {
        requestAnimationFrame(animate);
      } else {
        hasAnimated.current = true;
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count}</span>;
};

export default function Stats() {
  return (
    <div className="bg-navy border-t border-white/10 py-12 relative z-30 -mt-20 mx-6 md:mx-12 shadow-2xl">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
        
        {/* Stat 1 */}
        <div className="group">
          <h3 className="text-4xl md:text-5xl text-gold font-serif font-bold flex justify-center items-center gap-1">
            <AnimatedNumber end={50} />
            <span>+</span>
          </h3>
          <p className="text-gray-400 text-[10px] md:text-xs uppercase tracking-[0.2em] mt-3 group-hover:text-white transition-colors">
            Years Combined
          </p>
        </div>

        {/* Stat 2 */}
        <div className="group">
          <h3 className="text-4xl md:text-5xl text-gold font-serif font-bold flex justify-center items-center gap-1">
            <span>$</span>
            <AnimatedNumber end={2} duration={2500} />
            <span>B+</span>
          </h3>
          <p className="text-gray-400 text-[10px] md:text-xs uppercase tracking-[0.2em] mt-3 group-hover:text-white transition-colors">
            Value Secured
          </p>
        </div>

        {/* Stat 3 */}
        <div className="group">
          <h3 className="text-4xl md:text-5xl text-gold font-serif font-bold flex justify-center items-center gap-1">
            <AnimatedNumber end={500} duration={1500} />
            <span>+</span>
          </h3>
          <p className="text-gray-400 text-[10px] md:text-xs uppercase tracking-[0.2em] mt-3 group-hover:text-white transition-colors">
            Corporate Clients
          </p>
        </div>

        {/* Stat 4 */}
        <div className="group">
          <h3 className="text-4xl md:text-5xl text-gold font-serif font-bold flex justify-center items-center gap-1">
            <AnimatedNumber end={100} duration={1000} />
            <span>%</span>
          </h3>
          <p className="text-gray-400 text-[10px] md:text-xs uppercase tracking-[0.2em] mt-3 group-hover:text-white transition-colors">
            Discretion
          </p>
        </div>

      </div>
    </div>
  );
}