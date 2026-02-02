"use client";
import { useEffect, useState, useRef } from "react";

const AnimatedNumber = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    
    let startTime: number | null = null;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      const easeOut = 1 - Math.pow(1 - percentage, 4);
      const currentCount = Math.floor(easeOut * end);
      
      setCount(currentCount);

      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return <span ref={elementRef}>{count}</span>;
};

export default function Stats() {
  return (
    <div className="bg-gradient-to-br from-navy via-navy-light to-navy border-t border-white/10 py-16 relative z-30 -mt-20 mx-6 md:mx-12 shadow-2xl">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
        
        <div className="group px-4">
          <h3 className="text-5xl md:text-6xl text-gold font-serif font-bold flex justify-center items-center gap-1 mb-2">
            <AnimatedNumber end={50} />
            <span className="text-gold/80">+</span>
          </h3>
          <p className="text-gray-400 text-[11px] md:text-xs uppercase tracking-[0.2em] group-hover:text-white transition-colors">
            Years Combined Experience
          </p>
        </div>

        <div className="group px-4">
          <h3 className="text-5xl md:text-6xl text-gold font-serif font-bold flex justify-center items-center gap-1 mb-2">
            <span className="text-3xl md:text-4xl">$</span>
            <AnimatedNumber end={2} duration={2500} />
            <span className="text-gold/80">B+</span>
          </h3>
          <p className="text-gray-400 text-[11px] md:text-xs uppercase tracking-[0.2em] group-hover:text-white transition-colors">
            Value Secured
          </p>
        </div>

        <div className="group px-4">
          <h3 className="text-5xl md:text-6xl text-gold font-serif font-bold flex justify-center items-center gap-1 mb-2">
            <AnimatedNumber end={500} duration={1500} />
            <span className="text-gold/80">+</span>
          </h3>
          <p className="text-gray-400 text-[11px] md:text-xs uppercase tracking-[0.2em] group-hover:text-white transition-colors">
            Corporate Clients
          </p>
        </div>

        <div className="group px-4">
          <h3 className="text-5xl md:text-6xl text-gold font-serif font-bold flex justify-center items-center gap-1 mb-2">
            <AnimatedNumber end={100} duration={1000} />
            <span className="text-gold/80">%</span>
          </h3>
          <p className="text-gray-400 text-[11px] md:text-xs uppercase tracking-[0.2em] group-hover:text-white transition-colors">
            Client Discretion
          </p>
        </div>

      </div>
    </div>
  );
}