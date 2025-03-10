import { AlertTriangle, BarChart, CheckCircle, Clock, LayoutDashboard } from "lucide-react";
import SideBar from "../components/dashboard/SideBar";
import { SidebarProvider } from "../components/ui/sidebar";

import ComplaintsSection from "../components/dashboard/ComplaintsSection";
import InsightsAndAnalyticsSection from "../components/dashboard/InsightsAndAnalyticsSection";
import OverviewSection from "../components/dashboard/OverviewSection";
import VerifiedInstitutionsSection from "../components/dashboard/VerifiedInstitutionsSection";
import WaitlistSection from "../components/dashboard/WaitlistSection";

export default function AdminDashboardPage() {
  const items = [
    {
      id: 1,
      title: "Overview",
      section: OverviewSection,
      icon: LayoutDashboard,
    },
    {
      id: 2,
      title: "Verified Institutions",
      section: VerifiedInstitutionsSection,
      icon: CheckCircle,
    },
    {
      id: 3,
      title: "Waitlist",
      section: WaitlistSection,
      icon: Clock,
    },
    {
      id: 4,
      title: "Insights & Analytics",
      section: InsightsAndAnalyticsSection,
      icon: BarChart,
    },
    {
      id: 5,
      title: "Complaints",
      section: ComplaintsSection,
      icon: AlertTriangle,
    },
  ];

  return (
    <div className="bg-gray-50">
      <SidebarProvider>
        <SideBar items={items} />
      </SidebarProvider>
    </div>
  );
}
