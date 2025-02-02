import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";

export default function RootLayout() {
    const { isSignedIn, isLoaded } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
		if (isLoaded && isSignedIn) {
			navigate("/");
		}
    }, [isLoaded, isSignedIn, navigate]);

  return (
    <div>
      <Outlet />
    </div>
  );
}
