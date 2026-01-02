import React, { useEffect, useRef } from 'react';

export function AmbientOrbs() {
  const orbsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!orbsRef.current) return;
      
      const orbs = orbsRef.current.querySelectorAll('.glow-orb');
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;

      orbs.forEach((orb, index) => {
        const speed = (index + 1) * 20;
        (orb as HTMLElement).style.transform = `translate(${x * speed}px, ${y * speed}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={orbsRef}>
      <div className="glow-orb w-[500px] h-[500px] bg-cyan-900 top-[-10%] left-[-10%] animate-pulse" />
      <div className="glow-orb w-[600px] h-[600px] bg-purple-900 bottom-[-10%] right-[-10%]" />
      <div className="glow-orb w-[300px] h-[300px] bg-blue-800 top-[40%] left-[60%] opacity-20" />
    </div>
  );
}
