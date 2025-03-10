import { LayoutDashboard, LineChart, Megaphone, Ticket } from "lucide-react";
import SideBar from "../components/dashboard/SideBar";
import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";


import InsightsAndAnalyticsSection from "../components/dashboard/InsightsAndAnalyticsSection";
import OverviewSection from "../components/dashboard/OverviewSection";
import VerifiedInstitutionsSection from "../components/dashboard/VerifiedInstitutionsSection";
import WaitlistSection from "../components/dashboard/WaitlistSection";

export default function InstitutionDashboardPage() {

  const items = [
    {
      id: 1,
      title: "Overview",
      section: OverviewSection,
      icon: LayoutDashboard,
    },
    {
      id: 2,
      title: "Information",
      section: VerifiedInstitutionsSection,
      icon: Megaphone,
    },
    {
      id: 3,
      title: "Sales",
      section: WaitlistSection,
      icon: LineChart,
    },
    {
      id: 4,
      title: "Tickets Management",
      section: InsightsAndAnalyticsSection,
      icon: Ticket,
    },
  ];
  return (
    <SidebarProvider>
      <SideBar items={items} />
      <main>
        <SidebarTrigger />
      </main>
    </SidebarProvider>
  )
}
