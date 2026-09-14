import { lazy, Suspense, useEffect, useState } from "react";

import {
  FiMenu,
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiX,
} from "react-icons/fi";

import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.webp";

const CartDrawer = lazy(() => import("../pages/CartDrawer"));

function Navbar() {
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [user] = useState(() => {
    const savedUser = localStorage.getItem("kitzaUser");

    if (!savedUser) {
      return null;
    }

    try {
      return JSON.parse(savedUser);
    } catch (error) {
      console.error("Invalid user data:", error);
      localStorage.removeItem("kitzaUser");
      return null;
    }
  });

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
              width="300"
              height="200"
              className="h-16 sm:h-20 lg:h-24 w-auto"
            />
          </Link>


          {/* Links */}

          <ul className="hidden lg:flex gap-20 font-medium">

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

            <button
              type="button"
              onClick={() => setMenuOpen((isOpen) => !isOpen)}
              className="lg:hidden text-2xl"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>

    {/* CART */}

            <button
              onClick={() => setCartOpen(true)}
              className="cursor-pointer"
              aria-label="Shopping cart"
            >
              <FiShoppingCart className="hover:text-green-600 transition" />
            </button>
            {/* USER */}

            {user ? (

              <Link
                to="/account"
                className="w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center text-base font-bold cursor-pointer hover:bg-green-700 transition"
              >
                {user.name?.charAt(0).toUpperCase()}
              </Link>

            ) : (

              <Link to="/auth" aria-label="Account login">
                <FiUser className="cursor-pointer hover:text-green-600" />
              </Link>

            )}


        

          </div>

        </div>

      </nav>

      <div
        className={`${menuOpen ? "block" : "hidden"} border-b bg-white px-4 py-4 shadow-sm lg:hidden`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-4 font-medium">
          <NavLink
            to="/"
            end
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `${isActive ? "text-green-600" : "text-gray-900"} hover:text-green-600 duration-300`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `${isActive ? "text-green-600" : "text-gray-900"} hover:text-green-600 duration-300`
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              `${isActive ? "text-green-600" : "text-gray-900"} hover:text-green-600 duration-300`
            }
          >
            Contact Us
          </NavLink>
        </nav>
      </div>


      {/* CART DRAWER */}

      <Suspense fallback={null}>
        {cartOpen && (
          <CartDrawer
            open={cartOpen}
            onClose={() => setCartOpen(false)}
          />
        )}
      </Suspense>

    </>
  );
}

export default Navbar;