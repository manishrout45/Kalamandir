export const dynamic = "force-dynamic";

import OTPVerification from "@/components/auth/OTPVerification";

export default function OTPVerifyPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <OTPVerification />
    </div>
  );
}