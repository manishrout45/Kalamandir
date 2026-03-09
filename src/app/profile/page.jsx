"use client";

import { useState } from "react";
import { User, Package, MapPin } from "lucide-react";

import ProfileForm from "@/components/profile/ProfileForm";
import OrderHistory from "@/components/profile/OrderHistory";
import AddressManager from "@/components/profile/AddressManager";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      <h1 className="text-2xl font-semibold mb-8">
        My Account
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Sidebar */}
        <div className="bg-white shadow rounded-xl p-5 h-fit">

          <div className="flex flex-col items-center border-b pb-5 mb-5">

            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
              <User size={36} />
            </div>

            <p className="mt-3 font-semibold">John Doe</p>
            <p className="text-sm text-gray-500">
              john@example.com
            </p>

          </div>

          <div className="space-y-2">

            <button
              onClick={() => setActiveTab("profile")}
              className={`flex items-center gap-2 w-full p-3 rounded-lg transition
              ${activeTab === "profile"
                ? "bg-black text-white"
                : "hover:bg-gray-100"}`}
            >
              <User size={18} />
              Profile
            </button>

            <button
              onClick={() => setActiveTab("orders")}
              className={`flex items-center gap-2 w-full p-3 rounded-lg transition
              ${activeTab === "orders"
                ? "bg-black text-white"
                : "hover:bg-gray-100"}`}
            >
              <Package size={18} />
              Orders
            </button>

            <button
              onClick={() => setActiveTab("address")}
              className={`flex items-center gap-2 w-full p-3 rounded-lg transition
              ${activeTab === "address"
                ? "bg-black text-white"
                : "hover:bg-gray-100"}`}
            >
              <MapPin size={18} />
              Addresses
            </button>

          </div>

        </div>

        {/* Content */}
        <div className="md:col-span-3 bg-white shadow rounded-xl p-6">

          {activeTab === "profile" && <ProfileForm />}
          {activeTab === "orders" && <OrderHistory />}
          {activeTab === "address" && <AddressManager />}

        </div>

      </div>

    </div>
  );
}