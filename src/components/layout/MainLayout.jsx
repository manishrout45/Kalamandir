import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AnnouncementBar from "./AnnouncementBar";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <AnnouncementBar />

      <main className="min-h-[70vh] pt-8">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}