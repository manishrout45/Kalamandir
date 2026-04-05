import React, { useState, useEffect } from "react";
import { Menu, X, Heart, ShoppingCart, User, Search } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const loginStatus = localStorage.getItem("isLoggedIn");
    if (loginStatus === "true") setIsLoggedIn(true);
  }, []);

  const handleProfileClick = () => {
    if (isLoggedIn) navigate("/profile");
    else navigate("/login");
  };

  const goToWishlist = () => {
    navigate("/wishlist");
    setIsOpen(false);
  };

  const goToCart = () => {
    navigate("/cart");
    setIsOpen(false);
  };

  const menuItems = [
    {
      name: "Women",
      href: "/women",
      groups: [
        {
          title: "Saree",
          items: [
            "Silk Saree","Cotton Saree","Designer Saree",
            "Fancy Saree","Embroidered Saree","Baluchari","Banarasi","Bomkai"
          ]
        },
        {
          title: "Saree",
          items: [
            "Patola","Ikkat Silk","Sambalpuri","Khandua","Chanderi",
            "Kanjeevaram","Handloom","Patto"
          ]
        },
        {
          title: "Lehenga",
          items: ["Bridal Lehenga","Party Wear Lehenga","Designer Lehenga"]
        },
        {
          title: "Western Wear",
          items: ["Tops","Dresses","Jeans","Skirts"]
        },
        {
          title: "Salwar Suit",
          items: ["Churidar Suit","Anarkali Suit","Palazzo Suit"]
        },
        {
          title: "Accessories",
          items: [
            "Blouse","Petticoat","Saree Fall","Saree Lace","Saree Pin",
            "Dupatta Chiffon","Dupatta Net","Dupatta Silk","Dupatta Bridal",
            "Bottom","Inner Wear","Simmer Leggings"
          ]
        }
      ]
    },
    {
      name: "Kids",
      href: "/kids",
      groups: [
        {
          title: "Kids Wear",
          items: [
            "Baby Wear","Girls Wear","Boys Wear","Kids Ethnic Wear",
            "Kids Winter Wear","Kids Nightwear","Kids Accessories"
          ]
        }
      ]
    },
    {
      name: "Home Decor",
      href: "/home-decor",
      groups: [
        {
          title: "Home Decor",
          items: [
            "Blanket","Mattress","Bed Sheet","Pillow","Pillow Cover",
            "Bed Cover","AC Comforter","Dohar","Turkish Towel",
            "Cushion Cover","Sofa Cover","Bath Towel"
          ]
        }
      ]
    }
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">

            {/* Mobile Menu */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden text-red-600"
            >
              <Menu size={28} />
            </button>

            {/* LOGO (Next Image → React img ONLY CHANGE HERE) */}
            <Link to="/" className="flex items-center">
              <img
                src="/Images/Logo.png"
                alt="Logo"
                width={160}
                height={50}
                className="w-32 lg:w-40"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-10 font-medium text-gray-800">

              {menuItems.map((item) => {
                const cols = item.groups.length;

                return (
                  <div key={item.name} className="group relative">

                    {/* MAIN LINK */}
                    <Link
                      to={item.href}
                      className={`pb-2 transition ${
                        location.pathname === item.href
                          ? "text-red-600 border-b-2 border-red-600"
                          : "hover:text-red-500"
                      }`}
                    >
                      {item.name}
                    </Link>

                    {/* MEGA MENU (UNCHANGED) */}
                    <div
                      className={`absolute top-full mt-3 bg-white shadow-xl rounded-lg
                      opacity-0 invisible group-hover:opacity-100 group-hover:visible
                      transition-all duration-200
                      ${
                        item.name === "Women"
                          ? "left-1/2 -translate-x-[26%]"
                          : "left-1/2 -translate-x-1/2"
                      }`}
                    >
                      <div className="px-8 py-8">

                        <div
                          className={`grid gap-y-8 w-max ${
                            item.name === "Women"
                              ? "gap-x-4 lg:gap-x-6 xl:gap-x-8"
                              : "gap-x-12"
                          } ${
                            cols === 1
                              ? "grid-cols-1"
                              : cols === 2
                              ? "grid-cols-2"
                              : cols === 3
                              ? "grid-cols-3"
                              : cols === 4
                              ? "grid-cols-4"
                              : cols === 5
                              ? "grid-cols-5"
                              : "grid-cols-6"
                          }`}
                        >

                          {item.groups.map((group) => (
                            <div
                              key={group.title}
                              className={`${
                                item.name === "Women"
                                  ? "min-w-[120px] lg:min-w-[130px] xl:min-w-[140px]"
                                  : "min-w-[180px]"
                              }`}
                            >

                              <h4 className="text-red-600 text-sm font-semibold uppercase mb-3">
                                {group.title}
                              </h4>

                              <ul className="space-y-2 text-sm text-gray-700">
                                {group.items.map((sub) => (
                                  <li key={sub}>
                                    <Link
                                      to={`/shop/${sub
                                        .toLowerCase()
                                        .replace(/\s+/g, "-")}`}
                                      className="hover:text-red-600 transition"
                                    >
                                      {sub}
                                    </Link>
                                  </li>
                                ))}
                              </ul>

                            </div>
                          ))}

                        </div>

                      </div>
                    </div>

                  </div>
                );
              })}

            </div>

            {/* RIGHT ICONS (UNCHANGED) */}
            <div className="hidden lg:flex items-center space-x-5">

              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products"
                  className="w-72 pl-10 pr-4 py-2 rounded-full bg-gray-100"
                />
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
                />
              </div>

              <User
                onClick={handleProfileClick}
                className="cursor-pointer text-red-600 hover:scale-110 transition"
              />

              <Heart
                onClick={goToWishlist}
                className="cursor-pointer text-red-600 hover:scale-110 transition"
              />

              <ShoppingCart
                onClick={goToCart}
                className="cursor-pointer text-red-600 hover:scale-110 transition"
              />

            </div>

            {/* MOBILE ICONS (UNCHANGED) */}
            <div className="flex lg:hidden items-center space-x-4 text-red-600">
              <Heart onClick={goToWishlist} size={22} />
              <ShoppingCart onClick={goToCart} size={22} />
            </div>

          </div>

          {/* MOBILE SEARCH (UNCHANGED) */}
          <div className="lg:hidden pb-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products"
                className="w-full pl-10 pr-4 py-3 rounded-full bg-gray-100"
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

      {/* MOBILE DRAWER (UNCHANGED) */}
      <div
        className={`fixed inset-0 z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >

        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setIsOpen(false)}
        ></div>

        <div className="relative w-80 sm:w-96 h-full bg-white shadow-lg p-6 space-y-6">

          <div className="flex justify-between items-center">
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 text-gray-700"
            >
              <X size={22} />
              Close
            </button>
          </div>

          <div className="space-y-5 font-medium text-gray-800">

            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="block hover:text-red-600"
              >
                {item.name}
              </Link>
            ))}

          </div>

          <hr />

          <div className="space-y-5 font-medium text-gray-800">

            <button onClick={goToWishlist} className="flex items-center gap-2">
              <Heart size={18} /> WISHLIST
            </button>

            <button onClick={goToCart} className="flex items-center gap-2">
              <ShoppingCart size={18} /> CART
            </button>

            <button onClick={handleProfileClick} className="flex items-center gap-2">
              <User size={18} />
              {isLoggedIn ? "MY PROFILE" : "LOGIN / REGISTER"}
            </button>

          </div>

        </div>

      </div>
    </>
  );
}