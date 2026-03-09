"use client";

import AddressManager from "@/components/profile/AddressManager";

export default function AddressPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-6">My Addresses</h1>

      <AddressManager />
    </div>
  );
}