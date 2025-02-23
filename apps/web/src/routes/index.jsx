import { BrowserRouter, useRoutes } from "react-router-dom";
import RootLayout from "../layouts/RootLayout.jsx";
import App from "../App.jsx";
import SignInPage from "../pages/SignInPage.jsx";
import SignUpPage from "../pages/SignUpPage.jsx";
import WaitlistPage from "../pages/WaitlistPage.jsx";
import AdminDashboard from "../pages/AdminDashboard.jsx"

const routesConfig = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/sign-in", element: <SignInPage /> },
      { path: "/sign-up", element: <SignUpPage /> },
      { path: "/waitlist", element: <WaitlistPage />},
      { path: "/admin-dashboard", element: <AdminDashboard/>},
    ],
  },
];

function RoutesContent() {
  return useRoutes(routesConfig);
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <RoutesContent />
    </BrowserRouter>
  );
}
