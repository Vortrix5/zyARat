import { Waitlist } from "@clerk/clerk-react";

export default function WaitlistPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Waitlist signInUrl="/sign-in" />
    </div>
  );
}
