"use client";

import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-100 to-gray-200 text-gray-800">
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          
          {/* Logo + Newsletter */}
          <div className="lg:col-span-2 space-y-6">
            <Image
              src="/Images/Logo.png"
              alt="Anwitha Elegance Logo"
              width={220}
              height={70}
              className="object-contain h-14 w-auto"
              priority
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
                <button className="bg-red-600 text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* SHOP */}
          <div>
            <h3 className="font-semibold mb-5 text-gray-900 tracking-wide">
              SHOP
            </h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              {["Sarees", "Lehengas", "Salwar Suits", "Jewelry", "Sale"].map(
                (item) => (
                  <li
                    key={item}
                    className="hover:text-red-600 transition duration-200 cursor-pointer"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* ABOUT */}
          <div>
            <h3 className="font-semibold mb-5 text-gray-900 tracking-wide">
              ABOUT
            </h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              {[
                "About Us",
                "Blog",
                "Privacy Policy",
                "Terms & Conditions",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-red-600 transition duration-200 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="font-semibold mb-5 text-gray-900 tracking-wide">
              CONTACT
            </h3>

            <ul className="space-y-4 text-gray-600 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-red-600" />
                +91 82499 03638
              </li>

              <li className="flex items-center gap-3">
                <Mail size={16} className="text-red-600" />
                sales.kalamandir@gmail.com
              </li>

              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-red-600 mt-1" />
                <span>
                  NH 16, Patrapada, Bhubaneswar,
                  <br />
                  Odisha 751019
                </span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <div
                  key={i}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow hover:bg-red-600 hover:text-white transition duration-300 cursor-pointer"
                >
                  <Icon size={16} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          
          <p className="text-center md:text-left">
            © 2024 <span className="font-semibold">KalamandirBerhampur</span>. 
            All Rights Reserved. Powered by{" "}
            <span className="font-semibold">MercSphere</span>.
          </p>

          {/* Payment Badges */}
          <div className="flex gap-3">
            {["VISA", "MASTERCARD", "PAYPAL", "AMEX"].map((item) => (
              <div
                key={item}
                className="bg-white px-4 py-1 rounded-md shadow text-xs font-medium tracking-wide"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}