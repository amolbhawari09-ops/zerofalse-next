"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { 
  AlertTriangle, 
  AlertCircle, 
  Info, 
  CheckCircle,
  ExternalLink,
  Filter
} from "lucide-react";

const threats = [
  {
    id: 1,
    severity: "critical",
    type: "SQL Injection",
    file: "auth.js:42",
    model: "GPT-5.3",
    status: "blocked",
    time: "2 min ago",
    description: "Template literal SQL injection that looks parameterized",
  },
  {
    id: 2,
    severity: "high",
    type: "Hardcoded Secret",
    file: "config.js:15",
    model: "Copilot",
    status: "blocked",
    time: "5 min ago",
    description: "API key detected in configuration file",
  },
  {
    id: 3,
    severity: "medium",
    type: "Insecure Dependency",
    file: "package.json",
    model: "Claude 4.6",
    status: "warning",
    time: "12 min ago",
    description: "Outdated package with known vulnerability",
  },
  {
    id: 4,
    severity: "low",
    type: "Weak Crypto",
    file: "utils.js:89",
    model: "GPT-5.3",
    status: "resolved",
    time: "1 hour ago",
    description: "MD5 hash used instead of SHA-256",
  },
];

const severityConfig = {
  critical: { icon: AlertTriangle, color: "text-red-400 bg-red-500/10", label: "Critical" },
  high: { icon: AlertCircle, color: "text-orange-400 bg-orange-500/10", label: "High" },
  medium: { icon: AlertCircle, color: "text-yellow-400 bg-yellow-500/10", label: "Medium" },
  low: { icon: Info, color: "text-blue-400 bg-blue-500/10", label: "Low" },
};

const statusConfig = {
  blocked: { color: "text-red-400", label: "Blocked" },
  warning: { color: "text-yellow-400", label: "Warning" },
  resolved: { color: "text-green-400", label: "Resolved" },
};

export function ThreatTable() {
  const [filter, setFilter] = useState("all");

  const filteredThreats = filter === "all" 
    ? threats 
    : threats.filter(t => t.status === filter);

  return (
    <div className="rounded-xl bg-gray-900/50 border border-white/10 overflow-hidden">
      <div className="flex items-center justify-between p-6 border-b border-white/10">
        <h3 className="text-lg font-semibold text-white">Recent Threats</h3>
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-gray-400" />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-gray-800 border border-white/10 rounded-lg px-3 py-1 text-sm text-white focus:outline-none focus:border-green-500"
          >
            <option value="all">All Status</option>
            <option value="blocked">Blocked</option>
            <option value="warning">Warning</option>
            <option value="resolved">Resolved</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/5">
              <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">Severity</th>
              <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">Type</th>
              <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">File</th>
              <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">AI Model</th>
              <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">Status</th>
              <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3">Time</th>
              <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {filteredThreats.map((threat) => {
              const severity = severityConfig[threat.severity];
              const SeverityIcon = severity.icon;
              const status = statusConfig[threat.status];

              return (
                <tr key={threat.id} className="hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4">
                    <div className={cn("inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs font-medium", severity.color)}>
                      <SeverityIcon className="w-3 h-3" />
                      {severity.label}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-white">{threat.type}</div>
                    <div className="text-xs text-gray-500">{threat.description}</div>
                  </td>
                  <td className="px-6 py-4">
                    <code className="text-xs text-green-400 font-mono">{threat.file}</code>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-300">
                      {threat.model}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={cn("text-xs font-medium", status.color)}>
                      {status.label}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {threat.time}
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {filteredThreats.length === 0 && (
        <div className="p-12 text-center">
          <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-white mb-2">No threats found</h3>
          <p className="text-sm text-gray-400">Great job! Your codebase is secure.</p>
        </div>
      )}
    </div>
  );
}