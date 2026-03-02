"use client";

import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";
import { ArrowUp, ArrowDown, Minus } from "lucide-react";

export function MetricsCard({ 
  title, 
  value, 
  subtitle, 
  trend, 
  trendValue,
  icon: Icon,
  color = "green"
}) {
  const { ref, isInView } = useInView();

  const colors = {
    green: "text-green-400 bg-green-500/10 border-green-500/20",
    yellow: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
    red: "text-red-400 bg-red-500/10 border-red-500/20",
    blue: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  };

  const TrendIcon = trend === "up" ? ArrowUp : trend === "down" ? ArrowDown : Minus;

  return (
    <div
      ref={ref}
      className={cn(
        "p-6 rounded-xl border transition-all duration-500",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        colors[color]
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div className={cn("p-2 rounded-lg", colors[color])}>
          <Icon className="w-5 h-5" />
        </div>
        {trend && (
          <div className={cn(
            "flex items-center gap-1 text-xs font-medium",
            trend === "up" ? "text-green-400" : trend === "down" ? "text-red-400" : "text-gray-400"
          )}>
            <TrendIcon className="w-3 h-3" />
            {trendValue}
          </div>
        )}
      </div>
      
      <div className="space-y-1">
        <div className="text-2xl font-bold text-white">{value}</div>
        <div className="text-sm text-gray-400">{title}</div>
        {subtitle && <div className="text-xs text-gray-500">{subtitle}</div>}
      </div>
    </div>
  );
}