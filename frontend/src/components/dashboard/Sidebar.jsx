'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  Shield, 
  FileCode, 
  Users, 
  Settings, 
  HelpCircle, 
  ChevronLeft,
  ChevronRight,
  LogOut
} from 'lucide-react'
import { motion } from 'framer-motion'

const menuItems = [
  { icon: LayoutDashboard, label: 'Overview', href: '/dashboard' },
  { icon: Shield, label: 'Threats', href: '/dashboard/threats', badge: '12' },
  { icon: FileCode, label: 'Code Analysis', href: '/dashboard/analysis' },
  { icon: Users, label: 'Team', href: '/dashboard/team' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
]

export function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className={`fixed left-0 top-0 h-screen bg-navy-900 border-r border-navy-800 z-40 transition-all duration-300 ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-navy-800">
          {!collapsed && (
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">ZeroFalse</span>
            </Link>
          )}
          {collapsed && (
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center mx-auto">
              <Shield className="h-5 w-5 text-white" />
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1.5 rounded-lg text-navy-400 hover:text-white hover:bg-navy-800 transition-colors"
          >
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-6 px-3 space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${
                  isActive 
                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' 
                    : 'text-navy-400 hover:text-white hover:bg-navy-800/50'
                }`}
              >
                <Icon className={`h-5 w-5 shrink-0 ${isActive ? 'text-cyan-400' : 'group-hover:text-white'}`} />
                {!collapsed && (
                  <>
                    <span className="flex-1 text-sm font-medium">{item.label}</span>
                    {item.badge && (
                      <span className="px-2 py-0.5 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </Link>
            )
          })}
        </nav>

        {/* Bottom Section */}
        <div className="p-4 border-t border-navy-800 space-y-2">
          <button className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-navy-400 hover:text-white hover:bg-navy-800/50 transition-all w-full ${collapsed ? 'justify-center' : ''}`}>
            <HelpCircle className="h-5 w-5 shrink-0" />
            {!collapsed && <span className="text-sm font-medium">Help & Support</span>}
          </button>
          <button className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-navy-400 hover:text-danger hover:bg-danger/10 transition-all w-full ${collapsed ? 'justify-center' : ''}`}>
            <LogOut className="h-5 w-5 shrink-0" />
            {!collapsed && <span className="text-sm font-medium">Sign Out</span>}
          </button>
        </div>
      </div>
    </motion.aside>
  )
}