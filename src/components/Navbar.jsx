import { useEffect, useState } from "react";

import {
  FiSearch,
  FiShoppingCart,
  FiUser,
} from "react-icons/fi";

import { Link, NavLink } from "react-router-dom";
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

      <div className="bg-black text-white text-xs sm:text-sm py-2 px-4 sm:px-8 flex flex-wrap justify-center gap-x-3 gap-y-1 text-center">
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between gap-4">

          {/* Logo */}

          <Link to="/">
            <img
              src={logo}
              alt="Kitza Logo"
              className="h-16 sm:h-20 lg:h-24 w-auto"
            />
          </Link>


          {/* Links */}

          <ul className="hidden lg:flex gap-10 font-medium">

            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `${isActive ? "text-green-600" : "text-gray-900"} hover:text-green-600 duration-300`
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  `${isActive ? "text-green-600" : "text-gray-900"} hover:text-green-600 duration-300`
                }
              >
                Shop
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${isActive ? "text-green-600" : "text-gray-900"} hover:text-green-600 duration-300`
                }
              >
                Contact Us
              </NavLink>
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

          <div className="flex items-center gap-4 sm:gap-6 text-xl sm:text-2xl shrink-0">

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