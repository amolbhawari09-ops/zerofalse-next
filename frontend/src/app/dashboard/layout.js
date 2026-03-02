import { Inter } from "next/font/google";
import { DashboardSidebar } from "@/components/dashboard/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dashboard - Zerofalse",
  description: "Security dashboard for AI-generated code",
};

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex">
      <DashboardSidebar />
      <main className="flex-1 ml-64 overflow-auto">
        {children}
      </main>
    </div>
  );
}