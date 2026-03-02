"use client";

import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

export function FeatureCard({ number, title, description, features, visual, reverse = false }) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={cn(
        "grid lg:grid-cols-2 gap-12 items-center py-24 transition-all duration-700",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        reverse ? "lg:flex-row-reverse" : ""
      )}
    >
      <div className={cn("space-y-6", reverse ? "lg:order-2" : "")}>
        <div className="flex items-center gap-4">
          <span className="text-6xl font-bold text-gray-800">{number}</span>
          <div className="h-px flex-1 bg-gradient-to-r from-green-500/50 to-transparent" />
        </div>
        
        <h3 className="text-3xl font-bold text-white">{title}</h3>
        <p className="text-lg text-gray-400 leading-relaxed">{description}</p>
        
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-300">
              <span className="text-green-400 mt-1">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={cn("relative", reverse ? "lg:order-1" : "")}>
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-3xl blur-3xl" />
        <div className="relative bg-gray-900/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
          {visual}
        </div>
      </div>
    </div>
  );
}