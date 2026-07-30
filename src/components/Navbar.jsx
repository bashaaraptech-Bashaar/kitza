import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiUser,
  FiShoppingCart,
} from "react-icons/fi";

function Navbar() {
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

          <div>

            <img src={logo} alt="Elite XI Logo" className="h-30 w-auto" />

          </div>

          {/* Links */}

          <ul className="hidden lg:flex gap-10 font-medium">

            <li className="text-green-600 cursor-pointer">
              Home
            </li>

            <Link
  to="/shop"
  className="hover:text-[#4CAF50] duration-300"
>
  Shop
</Link>

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

          <div className="flex gap-6 text-2xl">

            <FiUser className="cursor-pointer hover:text-green-600" />

            <FiShoppingCart className="cursor-pointer hover:text-green-600" />

          </div>

        </div>

      </nav>
    </>
  );
}

export default Navbar;