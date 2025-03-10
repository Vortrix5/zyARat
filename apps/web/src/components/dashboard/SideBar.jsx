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
} from "../ui/sidebar";

import logo from '../../assets/images/logo.png';

export default function SideBar({ items }) {
  const [activeSection, setActiveSection] = useState(1);

  return (
    <div className="flex h-screen">
      <Sidebar collapsible="none" className="border-r border-gray-200 bg-white">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel className="text-lg font-semibold text-center text-gray-900 mb-6 mt-6 p-2">
              <img src={logo} alt="zyARat Logo" className="w-20 h-20 mx-auto mb-2" />
              <span className="block">zyARat Administration</span>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.id} className="mb-4">
                    <SidebarMenuButton asChild>
                      <button
                        type="button"
                        onClick={() => setActiveSection(item.id)}
                        className={`flex items-center space-x-3 px-4 py-3 w-full text-left transition-all duration-300 rounded-md ${activeSection === item.id
                          ? "bg-blue-500 text-white hover:bg-blue-600"
                          : "text-gray-700 hover:bg-gray-100"
                          }`}
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="text-base font-medium">{item.title}</span>
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>

      {/* Content area - modified to ensure full width display */}
      <div className="flex-1 bg-gray-50 overflow-auto">
        <div className="flex justify-center w-full">
          <div className="w-full min-w- px-4">
            {React.createElement(
              items.find((item) => item.id === activeSection).section
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
