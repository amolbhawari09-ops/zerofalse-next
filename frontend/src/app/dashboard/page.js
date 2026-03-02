'use client'

import { motion } from 'framer-motion'
import { 
  Shield, 
  Activity, 
  Code2, 
  AlertTriangle, 
  CheckCircle2, 
  Clock,
  MoreHorizontal,
  Filter,
  Download,
  RefreshCw,
  Search,
  Bell,
  Settings,
  LogOut,
  ChevronRight
} from 'lucide-react'
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts'
import { useState } from 'react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const securityData = [
  { name: 'Mon', score: 85, threats: 12 },
  { name: 'Tue', score: 87, threats: 8 },
  { name: 'Wed', score: 86, threats: 15 },
  { name: 'Thu', score: 89, threats: 6 },
  { name: 'Fri', score: 92, threats: 4 },
  { name: 'Sat', score: 94, threats: 2 },
  { name: 'Sun', score: 94, threats: 3 },
]

const modelData = [
  { name: 'GPT-4', value: 45, color: '#06b6d4' },
  { name: 'Claude', value: 30, color: '#3b82f6' },
  { name: 'Copilot', value: 20, color: '#8b5cf6' },
  { name: 'Other', value: 5, color: '#64748b' },
]

const threats = [
  {
    id: 1,
    severity: 'Critical',
    type: 'SQL Injection',
    description: 'Template literal SQL injection that looks parameterized',
    file: 'auth.js:42',
    model: 'GPT-4',
    status: 'Blocked',
    time: '2 min ago',
    icon: AlertTriangle,
    color: 'danger'
  },
  {
    id: 2,
    severity: 'High',
    type: 'Hardcoded Secret',
    description: 'API key detected in configuration file',
    file: 'config.js:15',
    model: 'Copilot',
    status: 'Blocked',
    time: '5 min ago',
    icon: Shield,
    color: 'warning'
  },
  {
    id: 3,
    severity: 'Medium',
    type: 'Insecure Dependency',
    description: 'Outdated package with known vulnerability',
    file: 'package.json',
    model: 'Claude',
    status: 'Warning',
    time: '12 min ago',
    icon: Clock,
    color: 'warning'
  },
  {
    id: 4,
    severity: 'Low',
    type: 'Weak Crypto',
    description: 'MD5 hash used instead of SHA-256',
    file: 'utils.js:89',
    model: 'GPT-4',
    status: 'Resolved',
    time: '1 hour ago',
    icon: CheckCircle2,
    color: 'success'
  }
]

const sessions = [
  { agent: 'Claude Code', duration: '45 min', lines: 234, status: 'active', warnings: 0 },
  { agent: 'Cursor IDE', duration: '12 min', lines: 89, status: 'active', warnings: 2 },
  { agent: 'VS Code + Copilot', duration: '2 hours', lines: 567, status: 'idle', warnings: 0 },
]

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState('7d')

  return (
    <div className="min-h-screen bg-navy-950">
      {/* Header */}
      <header className="sticky top-0 z-30 glass-strong border-b border-navy-800">
        <div className="flex items-center justify-between px-8 py-4">
          <div>
            <h1 className="text-2xl font-bold text-white">Security Dashboard</h1>
            <p className="text-navy-400 text-sm">Real-time monitoring for AI-generated code</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-navy-400" />
              <input 
                type="text" 
                placeholder="Search threats..."
                className="pl-10 pr-4 py-2 bg-navy-900/50 border border-navy-700 rounded-lg text-white text-sm placeholder-navy-500 focus:outline-none focus:border-cyan-500/50 w-64"
              />
            </div>
            <button className="p-2 text-navy-400 hover:text-white transition-colors relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-cyan-400 rounded-full" />
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-navy-800">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600" />
              <div className="hidden md:block">
                <div className="text-white text-sm font-medium">Alex Chen</div>
                <div className="text-navy-400 text-xs">Security Lead</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="p-8 space-y-8">
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div 
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            className="glass rounded-2xl p-6 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Shield className="h-16 w-16 text-cyan-400" />
            </div>
            <div className="relative">
              <div className="text-navy-400 text-sm font-medium mb-2">Security Score</div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-white">94</span>
                <span className="text-cyan-400 text-lg">/100</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-success text-sm font-medium">↑ +3pts</span>
                <span className="text-navy-500 text-sm">vs last week</span>
              </div>
              <div className="mt-4 h-2 bg-navy-800 rounded-full overflow-hidden">
                <div className="h-full w-[94%] bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ delay: 0.1 }}
            className="glass rounded-2xl p-6 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Activity className="h-16 w-16 text-cyan-400" />
            </div>
            <div className="relative">
              <div className="text-navy-400 text-sm font-medium mb-2">Threats Blocked</div>
              <div className="text-4xl font-bold text-white">1,247</div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-success text-sm font-medium">↑ 12%</span>
                <span className="text-navy-500 text-sm">this month</span>
              </div>
              <div className="mt-4 flex gap-2">
                <span className="px-2 py-1 bg-danger/20 text-danger text-xs rounded">24 Critical</span>
                <span className="px-2 py-1 bg-warning/20 text-warning text-xs rounded">89 High</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-6 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Code2 className="h-16 w-16 text-cyan-400" />
            </div>
            <div className="relative">
              <div className="text-navy-400 text-sm font-medium mb-2">Code Analyzed</div>
              <div className="text-4xl font-bold text-white">2.4M</div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-success text-sm font-medium">↑ 23%</span>
                <span className="text-navy-500 text-sm">lines today</span>
              </div>
              <div className="mt-4 text-navy-400 text-sm">
                Across <span className="text-white font-medium">12</span> repositories
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            transition={{ delay: 0.3 }}
            className="glass rounded-2xl p-6 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <CheckCircle2 className="h-16 w-16 text-cyan-400" />
            </div>
            <div className="relative">
              <div className="text-navy-400 text-sm font-medium mb-2">Active Sessions</div>
              <div className="text-4xl font-bold text-white">8</div>
              <div className="flex items-center gap-2 mt-2">
                <span className="flex items-center gap-1 text-success text-sm">
                  <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  6 Active
                </span>
                <span className="text-navy-500 text-sm">2 Idle</span>
              </div>
              <div className="mt-4 flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-navy-700 border-2 border-navy-800 flex items-center justify-center text-xs text-white">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 border-2 border-navy-800 flex items-center justify-center text-xs text-cyan-400">
                  +4
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Chart Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2 glass rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-white">Security Score Trend</h3>
                <p className="text-navy-400 text-sm">Last 7 days performance</p>
              </div>
              <div className="flex items-center gap-2">
                <select 
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                  className="bg-navy-900/50 border border-navy-700 rounded-lg px-3 py-1.5 text-white text-sm focus:outline-none focus:border-cyan-500/50"
                >
                  <option value="24h">Last 24 hours</option>
                  <option value="7d">Last 7 days</option>
                  <option value="30d">Last 30 days</option>
                </select>
                <button className="p-2 text-navy-400 hover:text-white transition-colors">
                  <RefreshCw className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={securityData}>
                  <defs>
                    <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} domain={[80, 100]} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#0f172a', 
                      border: '1px solid #1e293b',
                      borderRadius: '8px',
                      color: '#fff'
                    }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="score" 
                    stroke="#06b6d4" 
                    strokeWidth={2}
                    fillOpacity={1} 
                    fill="url(#colorScore)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Side Panel */}
          <div className="space-y-6">
            {/* Model Breakdown */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-white mb-4">Code Composition</h3>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={modelData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {modelData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#0f172a', 
                        border: '1px solid #1e293b',
                        borderRadius: '8px',
                        color: '#fff'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-4">
                {modelData.map((model) => (
                  <div key={model.name} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: model.color }} />
                    <span className="text-navy-300 text-sm">{model.name}</span>
                    <span className="text-white text-sm font-medium ml-auto">{model.value}%</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Active Sessions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Active Sessions</h3>
                <span className="text-cyan-400 text-sm cursor-pointer hover:underline">View all</span>
              </div>
              <div className="space-y-4">
                {sessions.map((session, index) => (
                  <div key={index} className="flex items-center gap-4 p-3 rounded-lg bg-navy-900/30 hover:bg-navy-800/30 transition-colors">
                    <div className={`w-2 h-2 rounded-full ${session.status === 'active' ? 'bg-success animate-pulse' : 'bg-navy-500'}`} />
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-sm font-medium truncate">{session.agent}</div>
                      <div className="text-navy-400 text-xs">{session.duration} • {session.lines} lines</div>
                    </div>
                    {session.warnings > 0 && (
                      <span className="px-2 py-1 bg-warning/20 text-warning text-xs rounded-full">
                        {session.warnings}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Threats Table */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="glass rounded-2xl overflow-hidden"
        >
          <div className="p-6 border-b border-navy-800 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">Recent Threats</h3>
              <p className="text-navy-400 text-sm">Detected in the last 24 hours</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 text-navy-300 hover:text-white transition-colors text-sm">
                <Filter className="h-4 w-4" />
                Filter
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-navy-300 hover:text-white transition-colors text-sm">
                <Download className="h-4 w-4" />
                Export
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-navy-800/50">
                  <th className="text-left py-4 px-6 text-navy-400 text-sm font-medium">Severity</th>
                  <th className="text-left py-4 px-6 text-navy-400 text-sm font-medium">Type</th>
                  <th className="text-left py-4 px-6 text-navy-400 text-sm font-medium">File</th>
                  <th className="text-left py-4 px-6 text-navy-400 text-sm font-medium">AI Model</th>
                  <th className="text-left py-4 px-6 text-navy-400 text-sm font-medium">Status</th>
                  <th className="text-left py-4 px-6 text-navy-400 text-sm font-medium">Time</th>
                  <th className="py-4 px-6"></th>
                </tr>
              </thead>
              <tbody>
                {threats.map((threat) => (
                  <tr key={threat.id} className="border-b border-navy-800/30 hover:bg-navy-900/30 transition-colors">
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${
                        threat.severity === 'Critical' ? 'bg-danger/20 text-danger' :
                        threat.severity === 'High' ? 'bg-warning/20 text-warning' :
                        threat.severity === 'Medium' ? 'bg-warning/10 text-warning' :
                        'bg-success/20 text-success'
                      }`}>
                        <threat.icon className="h-3 w-3" />
                        {threat.severity}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-white text-sm font-medium">{threat.type}</div>
                      <div className="text-navy-400 text-xs mt-0.5">{threat.description}</div>
                    </td>
                    <td className="py-4 px-6">
                      <code className="text-cyan-400 text-sm font-mono">{threat.file}</code>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-navy-300 text-sm">{threat.model}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center gap-1.5 text-sm ${
                        threat.status === 'Blocked' ? 'text-success' :
                        threat.status === 'Warning' ? 'text-warning' :
                        'text-navy-400'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          threat.status === 'Blocked' ? 'bg-success' :
                          threat.status === 'Warning' ? 'bg-warning' :
                          'bg-navy-500'
                        }`} />
                        {threat.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-navy-400 text-sm">
                      {threat.time}
                    </td>
                    <td className="py-4 px-6">
                      <button className="text-navy-400 hover:text-white transition-colors">
                        <MoreHorizontal className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t border-navy-800 flex items-center justify-between">
            <span className="text-navy-400 text-sm">Showing 4 of 127 threats</span>
            <div className="flex items-center gap-2">
              <button className="px-3 py-1 text-navy-400 hover:text-white text-sm transition-colors">Previous</button>
              <button className="px-3 py-1 text-navy-400 hover:text-white text-sm transition-colors">Next</button>
            </div>
          </div>
        </motion.div>

{/* Quick Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <div className="glass rounded-xl p-6 hover:bg-white/5 transition-colors cursor-pointer group">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Code2 className="h-5 w-5 text-cyan-400" />
            </div>
            <h4 className="text-white font-semibold mb-2">Install IDE Extension</h4>
            <p className="text-navy-400 text-sm mb-4">Get real-time feedback in VS Code, Cursor, and more.</p>
            <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:gap-2 transition-all">
              Install now <ChevronRight className="h-4 w-4" />
            </div>
          </div>

          <div className="glass rounded-xl p-6 hover:bg-white/5 transition-colors cursor-pointer group">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Settings className="h-5 w-5 text-purple-400" />
            </div>
            <h4 className="text-white font-semibold mb-2">Configure MCP Server</h4>
            <p className="text-navy-400 text-sm mb-4">Connect ZeroFalse to Claude Code and other AI agents.</p>
            <div className="flex items-center text-purple-400 text-sm font-medium group-hover:gap-2 transition-all">
              Configure <ChevronRight className="h-4 w-4" />
            </div>
          </div>

          <div className="glass rounded-xl p-6 hover:bg-white/5 transition-colors cursor-pointer group">
            <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Shield className="h-5 w-5 text-success" />
            </div>
            <h4 className="text-white font-semibold mb-2">Team Settings</h4>
            <p className="text-navy-400 text-sm mb-4">Manage members, permissions, and security policies.</p>
            <div className="flex items-center text-success text-sm font-medium group-hover:gap-2 transition-all">
              Manage <ChevronRight className="h-4 w-4" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

 