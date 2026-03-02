import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function formatNumber(num) {
  return new Intl.NumberFormat('en-US', {
    notation: "compact",
    maximumFractionDigits: 1
  }).format(num)
}

export function formatRelativeTime(date) {
  const dateObj = new Date(date)
  if (isNaN(dateObj.getTime())) return 'Invalid date'

  const now = new Date()
  const diff = now - dateObj
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  const days = Math.floor(diff / 86400000)

  if (minutes < 1) return 'Just now'
  if (minutes < 60) return `${minutes}m ago`
  if (hours < 24) return `${hours}h ago`
  if (days < 7) return `${days}d ago`
  
  return dateObj.toLocaleDateString()
}

export function getSeverityColor(severity) {
  // Ensure these keys match your tailwind.config.js colors
  const colors = {
    Critical: 'text-danger bg-danger/20 border-danger/30',
    High: 'text-warning bg-warning/20 border-warning/30',
    Medium: 'text-warning/80 bg-warning/10 border-warning/20',
    Low: 'text-success bg-success/20 border-success/30',
    Info: 'text-info bg-info/20 border-info/30'
  }
  return colors[severity] || colors.Info
}
