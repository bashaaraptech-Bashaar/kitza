import { useEffect, useState } from "react";

import {
  FiSearch,
  FiShoppingCart,
  FiUser,
} from "react-icons/fi";

import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import CartDrawer from "../pages/CartDrawer";

function Navbar() {
  const [cartOpen, setCartOpen] = useState(false);
  const [user, setUser] = useState(null);

  // Check logged-in user
  useEffect(() => {
    const savedUser = localStorage.getItem("kitzaUser");

    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error("Invalid user data:", error);
        localStorage.removeItem("kitzaUser");
      }
    }
  }, []);

  // Listen for "openCart" event from ProductDetails
  useEffect(() => {
    const handleOpenCart = () => {
      setCartOpen(true);
    };

    window.addEventListener("openCart", handleOpenCart);

    return () => {
      window.removeEventListener("openCart", handleOpenCart);
    };
  }, []);

  return (
    <>
      {/* Top Bar */}

      <div className="bg-black text-white text-sm py-2 px-8 flex justify-center gap-3">
        <p>
          Free Worldwide Shipping on orders over $99
        </p>

        <span className="text-gray-500">|</span>

        <p className="text-green-500 font-semibold">
          10% OFF your first order.
        </p>
      </div>


      {/* Navbar */}

      <nav className="sticky top-0 z-50 bg-white shadow-sm">

        <div className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between">

          {/* Logo */}

          <Link to="/">
            <img
              src={logo}
              alt="Kitza Logo"
              className="h-30 w-auto"
            />
          </Link>


          {/* Links */}

          <ul className="hidden lg:flex gap-10 font-medium">

            <li>
              <Link
                to="/"
                className="text-green-600"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/shop"
                className="hover:text-[#4CAF50] duration-300"
              >
                Shop
              </Link>
            </li>

            <li className="cursor-pointer hover:text-green-600">
              Contact Us
            </li>

            <li className="cursor-pointer hover:text-green-600">
              New Arrivals
            </li>

            <li className="cursor-pointer hover:text-green-600">
              Sale
            </li>

          </ul>


          {/* Search */}

          <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-5 py-3 w-80">

            <input
              type="text"
              placeholder="Search jerseys..."
              className="bg-transparent outline-none flex-1"
            />

            <FiSearch />

          </div>


          {/* Icons */}

          <div className="flex items-center gap-6 text-2xl">

            {/* USER */}

            {user ? (

              <Link
                to="/account"
                className="w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center text-base font-bold cursor-pointer hover:bg-green-700 transition"
              >
                {user.name?.charAt(0).toUpperCase()}
              </Link>

            ) : (

              <Link to="/auth">
                <FiUser className="cursor-pointer hover:text-green-600" />
              </Link>

            )}


            {/* CART */}

            <button
              onClick={() => setCartOpen(true)}
              className="cursor-pointer"
            >
              <FiShoppingCart className="hover:text-green-600 transition" />
            </button>

          </div>

        </div>

      </nav>


      {/* CART DRAWER */}

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
      />

    </>
  );
}

export default Navbar;