import React , { useState }from 'react';
import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar"
import SideBar from "../layouts/SideBar";

import { LayoutDashboard, Megaphone, LineChart, Ticket } from "lucide-react";


import OverviewSection from "../layouts/OverviewSection";
import VerifiedInstitutionsSection from "../layouts/VerifiedInstitutionsSection";
import WaitlistSection from "../layouts/WaitlistSection";
import InsightsAndAnalyticsSection from "../layouts/InsightsAndAnalyticsSection";

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
      <SideBar items={items}/>
      <main>
        <SidebarTrigger />
      </main>
    </SidebarProvider>
  )
}
