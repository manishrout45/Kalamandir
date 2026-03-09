"use client";

import { useState, useEffect } from "react";

export default function ProfileForm() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      // future backend API
      // const res = await fetch("/api/profile");
      // const data = await res.json();

      const data = {
        name: "John Doe",
        email: "john@example.com",
        phone: "9876543210",
      };

      setProfile(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      // await fetch("/api/profile", {
      //   method: "PUT",
      //   body: JSON.stringify(profile)
      // });

      console.log("Profile Updated", profile);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-md bg-white p-6 shadow rounded-lg"
    >
      <input
        type="text"
        placeholder="Name"
        className="w-full border p-2 rounded"
        value={profile.name}
        onChange={(e) =>
          setProfile({ ...profile, name: e.target.value })
        }
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full border p-2 rounded"
        value={profile.email}
        onChange={(e) =>
          setProfile({ ...profile, email: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Phone"
        className="w-full border p-2 rounded"
        value={profile.phone}
        onChange={(e) =>
          setProfile({ ...profile, phone: e.target.value })
        }
      />

      <button
        type="submit"
        className="bg-black text-white px-6 py-2 rounded"
      >
        {loading ? "Saving..." : "Update Profile"}
      </button>
    </form>
  );
}