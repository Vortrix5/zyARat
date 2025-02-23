import React , { useState }from 'react';
import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar"
import SideBar from "../layouts/SideBar";

export default function AdminDashboardPage() {
    return (
    <SidebarProvider>
      <SideBar />
      <main>
        <SidebarTrigger />
      </main>
    </SidebarProvider>
  )
}
