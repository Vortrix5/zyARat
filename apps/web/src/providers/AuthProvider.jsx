import { ClerkProvider } from "@clerk/clerk-react";

export default function AuthProvider({ children }) {
  const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
  if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
  }

  return (
    <ClerkProvider 
        publishableKey={PUBLISHABLE_KEY} 
        afterSignOutUrl="/" 
        appearance={{
            layout: {
                unsafe_disableDevelopmentModeWarnings: true,
            },
        }}>
      {children}
    </ClerkProvider>
  );
}
