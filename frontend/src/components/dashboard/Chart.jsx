"use client";

import { useState } from "react";

export function SecurityChart() {
  const [hoveredBar, setHoveredBar] = useState(null);
  
  const data = [
    { day: "Mon", score: 82, threats: 3 },
    { day: "Tue", score: 85, threats: 2 },
    { day: "Wed", score: 88, threats: 1 },
    { day: "Thu", score: 86, threats: 2 },
    { day: "Fri", score: 91, threats: 0 },
    { day: "Sat", score: 93, threats: 0 },
    { day: "Sun", score: 94, threats: 0 },
  ];

  return (
    <div className="p-6 rounded-xl bg-gray-900/50 border border-white/10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-white">Security Score Trend</h3>
          <p className="text-sm text-gray-400">Last 7 days</p>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-gray-400">Score</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <span className="text-gray-400">Threats</span>
          </div>
        </div>
      </div>

      <div className="h-64 flex items-end gap-4">
        {data.map((item, index) => (
          <div
            key={item.day}
            className="flex-1 flex flex-col items-center gap-2 group"
            onMouseEnter={() => setHoveredBar(index)}
            onMouseLeave={() => setHoveredBar(null)}
          >
            <div className="relative w-full flex-1 flex items-end">
              {/* Score bar */}
              <div
                className="w-full bg-green-500 rounded-t-lg transition-all duration-300 group-hover:opacity-80"
                style={{ height: `${item.score}%` }}
              />
              
              {/* Threat indicator */}
              {item.threats > 0 && (
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                  {item.threats}
                </div>
              )}
              
              {/* Tooltip */}
              {hoveredBar === index && (
                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-3 py-2 bg-gray-800 rounded-lg border border-white/10 text-sm whitespace-nowrap z-10">
                  <div className="text-white font-medium">Score: {item.score}</div>
                  <div className="text-gray-400">Threats: {item.threats}</div>
                </div>
              )}
            </div>
            <span className="text-xs text-gray-500">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}