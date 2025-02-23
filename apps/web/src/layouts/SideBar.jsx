import { LayoutDashboard, CheckCircle, Clock, BarChart, AlertTriangle } from "lucide-react";
import React, { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../components/ui/sidebar";

import OverviewSection from "./OverviewSection";
import VerifiedInstitutionsSection from "./VerifiedInstitutionsSection";
import WaitlistSection from "./WaitlistSection";
import InsightsAndAnalyticsSection from "./InsightsAndAnalyticsSection";
import ComplaintsSection from "./ComplaintsSection";

import logo from '../../assets/logo.png'

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

export default function SideBar() {
  const [activeSection, setActiveSection] = useState(1); // Store the active section by its ID

  return (
    <div className="flex">
      <Sidebar collapsible="none"> {/* Ensure the sidebar is always visible */}
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="text-lg font-semibold text-center text-gray-900 dark:text-white mb-6 mt-6 p-2">
              <img src={logo} alt="zyARat Logo" className="w-20 h-20 mr-2"/>
              zyARat Administration
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.id} className="mb-4">
                    <SidebarMenuButton asChild>
                      <button
                        type="button"
                        onClick={() => setActiveSection(item.id)}
                        className={`flex items-center space-x-3 px-4 py-2 w-full text-left transition-all duration-300 rounded-md ${
                          activeSection === item.id
                            ? "bg-blue-500 text-white"
                            : "text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                        } ${
                          activeSection === item.id && "hover:bg-blue-500"
                        }`} // Fix the hover issue when active
                      >
                        <item.icon className="w-6 h-6" />
                        <span className="text-lg">{item.title}</span>
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      {/* Render the active section dynamically */}
      <div className="flex-1 p-4">
        {React.createElement(
          items.find((item) => item.id === activeSection).section
        )}
      </div>
    </div>
  );
}
