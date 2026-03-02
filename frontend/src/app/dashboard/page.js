"use client";

import { MetricsCard } from "@/components/dashboard/MetricsCard";
import { SecurityChart } from "@/components/dashboard/Chart";
import { ThreatTable } from "@/components/dashboard/ThreatTable";
import { 
  Shield, 
  Code2, 
  Activity, 
  AlertTriangle,
  Zap,
  Users,
  GitBranch
} from "lucide-react";

const metrics = [
  {
    title: "Security Score",
    value: "94/100",
    subtitle: "Overall health",
    trend: "up",
    trendValue: "+3 pts",
    icon: Shield,
    color: "green"
  },
  {
    title: "Code Today",
    value: "2,847",
    subtitle: "Lines analyzed",
    trend: "up",
    trendValue: "+23%",
    icon: Code2,
    color: "blue"
  },
  {
    title: "Active Sessions",
    value: "2",
    subtitle: "AI coding agents",
    trend: "neutral",
    trendValue: "Stable",
    icon: Activity,
    color: "yellow"
  },
  {
    title: "Threats Blocked",
    value: "127",
    subtitle: "This month",
    trend: "down",
    trendValue: "-12%",
    icon: AlertTriangle,
    color: "red"
  }
];

const activeSessions = [
  {
    id: 1,
    agent: "Claude Code",
    duration: "45 min",
    lines: 234,
    warnings: 2,
    status: "healthy"
  },
  {
    id: 2,
    agent: "Cursor IDE",
    duration: "12 min",
    lines: 89,
    warnings: 1,
    status: "warning"
  }
];

const modelBreakdown = [
  { name: "GPT-5.3", percentage: 45, color: "bg-blue-500" },
  { name: "Claude 4.6", percentage: 25, color: "bg-purple-500" },
  { name: "Copilot", percentage: 10, color: "bg-green-500" },
  { name: "Human", percentage: 20, color: "bg-gray-500" },
];

export default function DashboardPage() {
  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-gray-400 mt-1">Real-time security monitoring for AI-generated code</p>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors border border-white/10">
            <GitBranch className="w-4 h-4" />
            <span className="text-sm">Connect Repo</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-black font-medium rounded-lg transition-colors">
            <Zap className="w-4 h-4" />
            <span className="text-sm">Run Scan</span>
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <MetricsCard key={metric.title} {...metric} />
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart */}
        <div className="lg:col-span-2">
          <SecurityChart />
        </div>

        {/* Side Panel */}
        <div className="space-y-6">
          {/* Active Sessions */}
          <div className="p-6 rounded-xl bg-gray-900/50 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Activity className="w-5 h-5 text-green-400" />
                Active Sessions
              </h3>
              <span className="text-xs text-gray-500">Live</span>
            </div>
            
            <div className="space-y-4">
              {activeSessions.map((session) => (
                <div key={session.id} className="flex items-center justify-between p-4 rounded-lg bg-gray-800/50 border border-white/5">
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-2 h-2 rounded-full animate-pulse",
                      session.status === "healthy" ? "bg-green-500" : "bg-yellow-500"
                    )} />
                    <div>
                      <div className="text-sm font-medium text-white">{session.agent}</div>
                      <div className="text-xs text-gray-500">{session.duration} • {session.lines} lines</div>
                    </div>
                  </div>
                  {session.warnings > 0 && (
                    <div className="flex items-center gap-1 text-xs text-yellow-400">
                      <AlertTriangle className="w-3 h-3" />
                      {session.warnings}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Model Breakdown */}
          <div className="p-6 rounded-xl bg-gray-900/50 border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-400" />
              Code Composition
            </h3>
            
            <div className="space-y-3">
              {modelBreakdown.map((model) => (
                <div key={model.name} className="space-y-1">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">{model.name}</span>
                    <span className="text-white font-medium">{model.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className={cn("h-full rounded-full transition-all duration-500", model.color)}
                      style={{ width: `${model.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">AI-generated</span>
                <span className="text-green-400 font-medium">80%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Threats Table */}
      <div>
        <ThreatTable />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/20">
          <h4 className="text-lg font-semibold text-white mb-2">Install IDE Extension</h4>
          <p className="text-sm text-gray-400 mb-4">Get real-time feedback in VS Code, Cursor, and more.</p>
          <button className="text-sm text-green-400 hover:text-green-300 font-medium flex items-center gap-1">
            Install Now →
          </button>
        </div>
        
        <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
          <h4 className="text-lg font-semibold text-white mb-2">Configure MCP Server</h4>
          <p className="text-sm text-gray-400 mb-4">Connect Zerofalse to Claude Code and other AI agents.</p>
          <button className="text-sm text-purple-400 hover:text-purple-300 font-medium flex items-center gap-1">
            View Docs →
          </button>
        </div>
        
        <div className="p-6 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20">
          <h4 className="text-lg font-semibold text-white mb-2">Team Settings</h4>
          <p className="text-sm text-gray-400 mb-4">Manage members, permissions, and security policies.</p>
          <button className="text-sm text-orange-400 hover:text-orange-300 font-medium flex items-center gap-1">
            Manage Team →
          </button>
        </div>
      </div>
    </div>
  );
}

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}