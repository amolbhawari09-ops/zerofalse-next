import { DashboardSidebar } from '@/components/dashboard/Sidebar'

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-navy-950 flex">
      <DashboardSidebar />
      <main className="flex-1 ml-64">
        {children}
      </main>
    </div>
  )
}