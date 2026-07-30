import logo from "../assets/logo.png";

import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#111111] text-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-12">

          {/* Brand */}

          <div className="lg:col-span-2">

            <img
              src={logo}
              alt="Kitza"
              className="h-50 "
            />

            <p className="text-gray-400 leading-8 max-w-md">

              Kitza delivers premium football jerseys from the
              world's biggest clubs and national teams.

            </p>

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#1d1d1d] hover:bg-[#4CAF50] duration-300 flex justify-center items-center"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#1d1d1d] hover:bg-[#4CAF50] duration-300 flex justify-center items-center"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#1d1d1d] hover:bg-[#4CAF50] duration-300 flex justify-center items-center"
              >
                <FaTiktok />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#1d1d1d] hover:bg-[#4CAF50] duration-300 flex justify-center items-center"
              >
                <FaYoutube />
              </a>

            </div>

          </div>

          {/* Shop */}

          <div>

            <h3 className="font-bold text-xl mb-6">

              SHOP

            </h3>

            <ul className="space-y-4 text-gray-400">

              <li className="hover:text-[#4CAF50] cursor-pointer">
                Club Jerseys
              </li>

              <li className="hover:text-[#4CAF50] cursor-pointer">
                National Teams
              </li>

              <li className="hover:text-[#4CAF50] cursor-pointer">
                Retro Jerseys
              </li>

              <li className="hover:text-[#4CAF50] cursor-pointer">
                Sale
              </li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="font-bold text-xl mb-6">

              COMPANY

            </h3>

            <ul className="space-y-4 text-gray-400">

              <li className="hover:text-[#4CAF50] cursor-pointer">
                About Us
              </li>

              <li className="hover:text-[#4CAF50] cursor-pointer">
                Contact
              </li>

              <li className="hover:text-[#4CAF50] cursor-pointer">
                Careers
              </li>

              <li className="hover:text-[#4CAF50] cursor-pointer">
                Blog
              </li>

            </ul>

          </div>

          {/* Help */}

          <div>

            <h3 className="font-bold text-xl mb-6">

              HELP

            </h3>

            <ul className="space-y-4 text-gray-400">

              <li className="hover:text-[#4CAF50] cursor-pointer">
                Shipping
              </li>

              <li className="hover:text-[#4CAF50] cursor-pointer">
                Returns
              </li>

              <li className="hover:text-[#4CAF50] cursor-pointer">
                FAQ
              </li>

              <li className="hover:text-[#4CAF50] cursor-pointer">
                Privacy Policy
              </li>

            </ul>

          </div>

        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500">

            © 2026 Kitza. All Rights Reserved.

          </p>

          <div className="flex gap-3 mt-5 md:mt-0">

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
              className="h-8"
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              className="h-8"
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              className="h-8"
            />

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;