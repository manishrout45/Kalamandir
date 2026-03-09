"use client";

import { MapPin } from "lucide-react";
import { useState } from "react";

export default function AddressForm({ address, setAddress }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    pincode: "",
    addressLine: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    setAddress(form);

    // Future backend API
    // await fetch("/api/address")

    console.log("Address saved", form);
  };

  return (
    <div className="bg-white rounded-xl shadow p-6">

      <div className="flex items-center gap-2 mb-5">
        <MapPin size={20} />
        <h2 className="text-lg font-semibold">
          Shipping Address
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-4">

        <input
          placeholder="Full Name"
          className="border rounded-lg p-3"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          placeholder="Phone Number"
          className="border rounded-lg p-3"
          onChange={(e) =>
            setForm({ ...form, phone: e.target.value })
          }
        />

        <div className="grid grid-cols-2 gap-3">
          <input
            placeholder="City"
            className="border rounded-lg p-3"
            onChange={(e) =>
              setForm({ ...form, city: e.target.value })
            }
          />

          <input
            placeholder="Pincode"
            className="border rounded-lg p-3"
            onChange={(e) =>
              setForm({ ...form, pincode: e.target.value })
            }
          />
        </div>

        <textarea
          placeholder="Full Address"
          className="border rounded-lg p-3"
          rows="3"
          onChange={(e) =>
            setForm({ ...form, addressLine: e.target.value })
          }
        />

        <button className="bg-black text-white py-3 rounded-lg hover:opacity-90">
          Save Address
        </button>

      </form>
    </div>
  );
}