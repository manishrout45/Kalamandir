"use client";

import { useState, useEffect } from "react";

export default function AddressManager() {
  const [addresses, setAddresses] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    city: "",
    phone: "",
  });

  useEffect(() => {
    loadAddresses();
  }, []);

  const loadAddresses = async () => {
    try {
      // future backend
      // const res = await fetch("/api/address");
      // const data = await res.json();

      const data = [
        {
          id: 1,
          name: "Home",
          city: "Delhi",
          phone: "9876543210",
        },
      ];

      setAddresses(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // await fetch("/api/address",{
      //   method:"POST",
      //   body:JSON.stringify(formData)
      // })

      console.log("Address saved", formData);

      setShowForm(false);

    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdateClick = (addr) => {
    setFormData(addr);
    setShowForm(true);
  };

  return (
    <div className="space-y-6">

      <h2 className="text-xl font-semibold">
        Address Manager
      </h2>

      {/* No Address */}
      {addresses.length === 0 && !showForm && (
        <button
          onClick={() => setShowForm(true)}
          className="bg-black text-white px-5 py-2 rounded-lg"
        >
          Add New Address
        </button>
      )}

      {/* Address List */}
      {addresses.map((addr) => (
        <div
          key={addr.id}
          className="border p-4 rounded-lg flex justify-between items-center"
        >
          <div>
            <p className="font-semibold">{addr.name}</p>
            <p>{addr.city}</p>
            <p>{addr.phone}</p>
          </div>

          <button
            onClick={() => handleUpdateClick(addr)}
            className="bg-gray-900 text-white px-4 py-2 rounded"
          >
            Update Address
          </button>
        </div>
      ))}

      {/* Add / Update Form */}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="space-y-4 border p-5 rounded-lg max-w-md bg-gray-50"
        >
          <input
            type="text"
            placeholder="Address Name (Home / Office)"
            className="w-full border p-2 rounded"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="City"
            className="w-full border p-2 rounded"
            value={formData.city}
            onChange={(e) =>
              setFormData({ ...formData, city: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border p-2 rounded"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />

          <div className="flex gap-3">
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded"
            >
              Save Address
            </button>

            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="border px-6 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
}