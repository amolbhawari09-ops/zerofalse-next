"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

export function StatsCounter({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const { ref, isInView } = useInView();

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const startValue = 0;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (end - startValue) + startValue);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}