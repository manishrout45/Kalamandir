"use client";

import { useState, useEffect } from "react";
import { Menu, X, Heart, ShoppingCart, User, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    if (loginStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleProfileClick = () => {
    if (isLoggedIn) {
      router.push("/profile");
    } else {
      router.push("/login");
    }
  };

  const goToWishlist = () => {
    router.push("/wishlist");
    setIsOpen(false);
  };

  const goToCart = () => {
    router.push("/cart");
    setIsOpen(false);
  };

  const menuItems = [
    {
      name: "Men",
      href: "/men",
      categories: ["Shirts", "T-Shirts", "Jeans", "Ethnic Wear"],
    },
    {
      name: "Women",
      href: "/women",
      categories: ["Sarees", "Kurtis", "Tops", "Lehengas"],
    },
    {
      name: "Kids",
      href: "/kids",
      categories: ["Boys Wear", "Girls Wear", "Infant Wear"],
    },
    {
      name: "Other",
      href: "/other",
      categories: ["Accessories", "Bags", "Footwear"],
    },
    {
      name: "SALE",
      href: "/sale",
      categories: ["Men Sale", "Women Sale", "Kids Sale"],
    },
  ];

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4">

          <div className="flex items-center justify-between h-20">

            {/* Mobile / Tablet Menu Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden text-red-600"
            >
              <Menu size={28} />
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/Images/Logo.png"
                alt="Kalamandir Logo"
                width={160}
                height={50}
                className="object-contain w-32 lg:w-40"
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-8 font-medium text-gray-800">

              {menuItems.map((item) => (
                <div key={item.name} className="relative group">

                  <Link
                    href={item.href}
                    className={`pb-2 transition ${
                      pathname === item.href
                        ? "text-red-600 border-b-2 border-red-600"
                        : "hover:text-red-500"
                    }`}
                  >
                    {item.name}
                  </Link>

                  {/* Dropdown */}
                  <div className="absolute left-0 top-full mt-3 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">

                    {item.categories.map((cat) => (
                      <Link
                        key={cat}
                        href={`${item.href}/${cat
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600"
                      >
                        {cat}
                      </Link>
                    ))}

                  </div>
                </div>
              ))}

            </div>

            {/* Desktop Right Section */}
            <div className="hidden lg:flex items-center space-x-5">

              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products"
                  className="w-72 pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:outline-none"
                />
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                />
              </div>

              {/* Profile */}
              <User
                onClick={handleProfileClick}
                className="cursor-pointer text-red-600 hover:scale-110 transition"
              />

              {/* Wishlist */}
              <Heart
                onClick={goToWishlist}
                className="cursor-pointer text-red-600 hover:scale-110 transition"
              />

              {/* Cart */}
              <ShoppingCart
                onClick={goToCart}
                className="cursor-pointer text-red-600 hover:scale-110 transition"
              />
            </div>

            {/* Mobile / Tablet Icons */}
            <div className="flex lg:hidden items-center space-x-4 text-red-600">
              <Heart onClick={goToWishlist} size={22} />
              <ShoppingCart onClick={goToCart} size={22} />
            </div>

          </div>

          {/* Mobile / Tablet Search */}
          <div className="lg:hidden pb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products"
                className="w-full pl-10 pr-4 py-3 rounded-full bg-gray-100 focus:outline-none"
              />
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />
            </div>
          </div>

        </div>
      </nav>

      <div className="h-20"></div>

      {/* ===== MOBILE / TABLET DRAWER ===== */}
      <div
        className={`fixed inset-0 z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Drawer */}
        <div className="relative w-80 sm:w-96 h-full bg-white shadow-lg p-6 space-y-6">

          <div className="flex justify-between items-center">
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 text-gray-700"
            >
              <X size={22} />
              <span className="font-medium">Close</span>
            </button>
          </div>

          {/* Menu Links */}
          <div className="space-y-5 font-medium text-gray-800">

            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block ${
                  pathname === item.href ? "text-red-600" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}

          </div>

          <hr />

          {/* Drawer Links */}
          <div className="space-y-5 font-medium text-gray-800">

            <button onClick={goToWishlist} className="flex items-center gap-2">
              <Heart size={18} />
              WISHLIST
            </button>

            <button onClick={goToCart} className="flex items-center gap-2">
              <ShoppingCart size={18} />
              CART
            </button>

            <button
              onClick={handleProfileClick}
              className="flex items-center gap-2"
            >
              <User size={18} />
              {isLoggedIn ? "MY PROFILE" : "LOGIN / REGISTER"}
            </button>

          </div>
        </div>
      </div>
    </>
  );
}