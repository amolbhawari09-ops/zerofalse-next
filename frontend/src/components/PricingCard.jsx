"use client";

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

export function PricingCard({ 
  name, 
  price, 
  period = "/mo",
  description,
  features, 
  popular = false,
  ctaText = "Start Free",
  href = "#install"
}) {
  return (
    <div
      className={cn(
        "relative rounded-2xl p-8 transition-all duration-300 hover:scale-105",
        popular
          ? "bg-gradient-to-b from-green-500/20 to-gray-900 border-2 border-green-500/50"
          : "bg-gray-900/50 border border-white/10 hover:border-white/20"
      )}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1 text-xs font-bold bg-green-500 text-black rounded-full">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-bold text-white">${price}</span>
          <span className="text-gray-400">{period}</span>
        </div>
        {description && (
          <p className="mt-2 text-sm text-gray-400">{description}</p>
        )}
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-gray-300">
            <Check className={cn(
              "w-5 h-5 flex-shrink-0",
              popular ? "text-green-400" : "text-gray-500"
            )} />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={href}
        className={cn(
          "block w-full py-3 px-4 text-center font-medium rounded-lg transition-colors",
          popular
            ? "bg-green-500 hover:bg-green-600 text-black"
            : "bg-white/10 hover:bg-white/20 text-white"
        )}
      >
        {ctaText}
      </a>
    </div>
  );
}