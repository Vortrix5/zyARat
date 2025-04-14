import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar";
import SideBar from "../layouts/SideBar";

import { LayoutDashboard, Megaphone, LineChart, Ticket } from "lucide-react";

import OverviewSection from "../layouts/OverviewSection";
import InformationSection from "../layouts/InstitutionDashboard/InformationSection";
import AnnouncementsSection from "../layouts/InstitutionDashboard/AnnouncementsSection";
import TicketsSection from "../layouts/InstitutionDashboard/TicketsSection";

import { useEffect, useState } from "react";
import Loading from "../components/loading";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";

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
      section: InformationSection,
      icon: Megaphone,
    },
    {
      id: 3,
      title: "Announcements",
      section: AnnouncementsSection,
      icon: LineChart,
    },
    {
      id: 4,
      title: "Tickets Management",
      section: TicketsSection,
      icon: Ticket,
    },
  ];

  const { user, isLoaded } = useUser();
  const [isLoading, setIsLoading] = useState(true); // Loading state for fetching backend data
  const [institutionInfo, setInstitutionInfo] = useState(null); // Store backend info

  // Fetch institution data from backend after the user is signed in and loaded
  useEffect(() => {
    if (isLoaded && user) {
      // Proceed with the request once user data is available
      setIsLoading(true); // Set loading true before the request
      axios
        .post("http://localhost:5000/api/institution/register", {
          id: user.id, // Pass the Clerk user ID
          name: user.fullName,
        })
        .then((response) => {
          setInstitutionInfo(response.data.institution); // Set the data if the request is successful
          console.log(JSON.stringify(response.data))
          localStorage.setItem("institutionData", JSON.stringify(response.data.institution));
          localStorage.setItem("token", response.data.token)
          setIsLoading(false); // Set loading to false
        })
        .catch((error) => {
          console.error("Error fetching institution data:", error);
          setIsLoading(true); // Set loading to false in case of error
        });
    }
  }, [isLoaded, user]); // Trigger effect when user data is loaded

  return (
    <div>
      {!isLoading ? (
        <SidebarProvider>
          <SideBar items={items} title={institutionInfo && institutionInfo.name} />
          <main>
            <SidebarTrigger />
          </main>
        </SidebarProvider>
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </div>
  );
}
