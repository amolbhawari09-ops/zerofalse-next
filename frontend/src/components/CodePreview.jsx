"use client";

import { useState, useEffect } from "react";

const codeLines = [
  { num: 1, content: "// File: auth.js:42", type: "comment" },
  { num: 2, content: "const query = `SELECT * FROM users WHERE id = ${userId}`;", type: "code" },
  { num: 3, content: "// ❌ Why it looks clean: Modern template literal syntax", type: "error" },
  { num: 4, content: "// ❌ Why it's dangerous: SQL injection — passed code review", type: "error" },
  { num: 5, content: "// ✅ Zerofalse caught this in 0.3s before merge", type: "success" },
];

export function CodePreview() {
  const [visibleLines, setVisibleLines] = useState([]);
  const [scanning, setScanning] = useState(true);

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine <= codeLines.length) {
        setVisibleLines(codeLines.slice(0, currentLine));
        currentLine++;
      } else {
        setScanning(false);
        clearInterval(interval);
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto mt-12 rounded-xl overflow-hidden border border-white/10 bg-gray-900/50 backdrop-blur-sm shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-800/50 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span className="text-yellow-500">⚠️</span>
          <span>ZEROFALSE ALERT — "Looks Clean" Detection</span>
        </div>
        <div className="w-16" />
      </div>

      {/* Code Body */}
      <div className="p-6 font-mono text-sm">
        {codeLines.map((line, index) => (
          <div
            key={line.num}
            className={`flex items-start gap-4 transition-all duration-500 ${
              visibleLines.includes(line) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <span className="text-gray-600 w-8 text-right select-none">{line.num}</span>
            <span
              className={`flex-1 ${
                line.type === "comment"
                  ? "text-gray-500"
                  : line.type === "error"
                  ? "text-red-400 bg-red-500/10 px-2 py-0.5 rounded"
                  : line.type === "success"
                  ? "text-green-400 bg-green-500/10 px-2 py-0.5 rounded"
                  : "text-blue-300"
              }`}
            >
              {line.type === "code" ? (
                <>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-300">query</span>{" "}
                  <span className="text-gray-400">=</span>{" "}
                  <span className="text-green-300">{`\`SELECT * FROM users WHERE id = \${userId}\``}</span>
                  <span className="text-gray-400">;</span>
                </>
              ) : (
                line.content
              )}
            </span>
          </div>
        ))}
        
        {/* Scanning indicator */}
        {scanning && (
          <div className="mt-4 flex items-center gap-2 text-green-400 animate-pulse">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <span className="text-xs font-medium">Scanning for vulnerabilities...</span>
          </div>
        )}
      </div>
    </div>
  );
}