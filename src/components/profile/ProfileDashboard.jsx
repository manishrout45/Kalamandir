"use client";

import { useState } from "react";
import { User, MapPin, Package } from "lucide-react";

import ProfileForm from "./ProfileForm";
import OrderHistory from "./OrderHistory";
import AddressManager from "./AddressManager";

export default function ProfileDashboard() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* Sidebar */}
        <div className="bg-white rounded-xl shadow p-6 h-fit">

          {/* Profile icon */}
          <div className="flex flex-col items-center border-b pb-5 mb-5">

            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-3xl">
              <User size={40} />
            </div>

            <p className="mt-3 font-semibold text-lg">
              John Doe
            </p>

            <p className="text-sm text-gray-500">
              john@example.com
            </p>

          </div>

          {/* Navigation */}
          <div className="space-y-2">

            <button
              onClick={() => setActiveTab("profile")}
              className={`flex items-center gap-3 w-full p-3 rounded-lg transition 
              ${activeTab === "profile"
                  ? "bg-black text-white"
                  : "hover:bg-gray-100"}`}
            >
              <User size={18} />
              Profile
            </button>

            <button
              onClick={() => setActiveTab("orders")}
              className={`flex items-center gap-3 w-full p-3 rounded-lg transition 
              ${activeTab === "orders"
                  ? "bg-black text-white"
                  : "hover:bg-gray-100"}`}
            >
              <Package size={18} />
              Orders
            </button>

            <button
              onClick={() => setActiveTab("address")}
              className={`flex items-center gap-3 w-full p-3 rounded-lg transition 
              ${activeTab === "address"
                  ? "bg-black text-white"
                  : "hover:bg-gray-100"}`}
            >
              <MapPin size={18} />
              Addresses
            </button>

          </div>

        </div>

        {/* Content Area */}
        <div className="md:col-span-3 bg-white shadow rounded-xl p-6">

          {activeTab === "profile" && <ProfileForm />}

          {activeTab === "orders" && <OrderHistory />}

          {activeTab === "address" && <AddressManager />}

        </div>

      </div>

    </div>
  );
}