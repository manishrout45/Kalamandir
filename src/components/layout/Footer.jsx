import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800">

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">

          {/* LOGO + TEXT */}
          <div className="lg:col-span-2 space-y-6">

            <img
              src="/Images/Logo.png"
              alt="Logo"
              className="h-14 w-auto object-contain"
            />

            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              Discover timeless elegance with our exclusive collection of
              sarees, lehengas, and ethnic wear crafted to celebrate tradition
              with modern grace.
            </p>

            {/* Newsletter */}
            <div>
              <h3 className="font-semibold mb-3 text-gray-900">
                Subscribe to our Newsletter
              </h3>

              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button className="bg-red-600 text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* SHOP */}
          <div>
            <h3 className="font-semibold mb-5">SHOP</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              {["Sarees", "Lehengas", "Salwar Suits", "Jewelry", "Sale"].map(
                (item) => (
                  <li key={item} className="hover:text-red-600 cursor-pointer">
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* ABOUT */}
          <div>
            <h3 className="font-semibold mb-5">ABOUT</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              {["About Us", "Blog", "Privacy Policy", "Terms & Conditions"].map(
                (item) => (
                  <li key={item} className="hover:text-red-600 cursor-pointer">
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold mb-5">CONTACT</h3>

            <ul className="space-y-4 text-sm text-gray-600">

              <li className="flex items-center gap-3">
                <Phone size={16} className="text-red-600" />
                +91 90401 15954
              </li>

              <li className="flex items-center gap-3">
                <Mail size={16} className="text-red-600" />
                sales.kalamandir@gmail.com
              </li>

              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-red-600 mt-1" />
                <span>
                  Fire station road Berhampur,
                  <br />
                  Odisha 760001
                </span>
              </li>
            </ul>

            {/* SOCIAL ICONS (UPDATED) */}
            <div className="flex gap-4 mt-6">

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow hover:bg-red-600 hover:text-white transition"
              >
                <FaFacebookF size={14} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow hover:bg-red-600 hover:text-white transition"
              >
                <FaInstagram size={14} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow hover:bg-red-600 hover:text-white transition"
              >
                <FaLinkedinIn size={14} />
              </a>

            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">

          <p>
            © 2024 <span className="font-semibold">KalamandirBerhampur</span>.
            All Rights Reserved. Powered by{" "}
            <span className="font-semibold">MercSphere</span>.
          </p>

          <div className="flex gap-3 text-xs font-medium flex-wrap">

            <span className="border px-3 py-1 rounded-full">
              Secure Checkout
            </span>

            <span className="border px-3 py-1 rounded-full">
              Free Shipping
            </span>

            <span className="border px-3 py-1 rounded-full">
              Handcrafted Quality
            </span>

          </div>

        </div>
      </div>

    </footer>
  );
}