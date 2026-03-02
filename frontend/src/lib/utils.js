import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}

export function formatRelativeTime(date) {
  const now = new Date()
  const diff = now - new Date(date)
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  const days = Math.floor(diff / 86400000)

  if (minutes < 1) return 'Just now'
  if (minutes < 60) return `${minutes}m ago`
  if (hours < 24) return `${hours}h ago`
  if (days < 7) return `${days}d ago`
  return new Date(date).toLocaleDateString()
}

export function getSeverityColor(severity) {
  const colors = {
    Critical: 'text-danger bg-danger/20 border-danger/30',
    High: 'text-warning bg-warning/20 border-warning/30',
    Medium: 'text-warning/80 bg-warning/10 border-warning/20',
    Low: 'text-success bg-success/20 border-success/30',
    Info: 'text-info bg-info/20 border-info/30'
  }
  return colors[severity] || colors.Info
}