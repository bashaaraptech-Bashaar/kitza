import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Letter from "../components/NewsLetter";
import Footer from "../components/Footer";
import {
  FiUser,
  FiMail,
  FiMapPin,
  FiGlobe,
  FiPhone,
  FiLogOut,
} from "react-icons/fi";

function Account() {

  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {

    const savedUser = localStorage.getItem("kitzaUser");

    if (!savedUser) {
      navigate("/auth");
      return;
    }

    setUser(JSON.parse(savedUser));

  }, [navigate]);


  const handleLogout = () => {

    localStorage.removeItem("kitzaUser");

    navigate("/");

  };


  if (!user) {
    return null;
  }


  return (
    <>
      <Navbar />

      <section className="bg-gray-50 min-h-[65vh] py-12 px-5 md:px-10">

        <div className="max-w-4xl mx-auto">

          {/* HEADER */}

          <div className="mb-8">

            <h1 className="text-3xl md:text-4xl font-black text-slate-900">
              MY ACCOUNT
            </h1>

            <p className="text-gray-500 mt-2">
              Manage your KITZA account information.
            </p>

          </div>


          {/* PROFILE */}

          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">

            {/* TOP */}

            <div className="bg-slate-900 px-6 md:px-8 py-8 text-white">

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center text-2xl font-bold">

                  {user.name?.charAt(0).toUpperCase()}

                </div>

                <div>

                  <h2 className="text-2xl font-bold">
                    {user.name}
                  </h2>

                  <p className="text-gray-300 text-sm mt-1">
                    {user.email}
                  </p>

                </div>

              </div>

            </div>


            {/* ACCOUNT INFORMATION */}

            <div className="p-6 md:p-8">

              <h3 className="text-lg font-bold text-slate-900 mb-6">
                Account Information
              </h3>


              <div className="grid md:grid-cols-2 gap-5">


                {/* NAME */}

                <div className="flex items-center gap-4 border border-gray-200 rounded-2xl p-4">

                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">

                    <FiUser className="text-green-600" />

                  </div>

                  <div>

                    <p className="text-xs text-gray-400 uppercase font-semibold">
                      Full Name
                    </p>

                    <p className="font-semibold text-slate-900 mt-1">
                      {user.name}
                    </p>

                  </div>

                </div>


                {/* EMAIL */}

                <div className="flex items-center gap-4 border border-gray-200 rounded-2xl p-4">

                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">

                    <FiMail className="text-green-600" />

                  </div>

                  <div className="min-w-0">

                    <p className="text-xs text-gray-400 uppercase font-semibold">
                      Email
                    </p>

                    <p className="font-semibold text-slate-900 mt-1 truncate">
                      {user.email}
                    </p>

                  </div>

                </div>


                {/* ADDRESS */}

                <div className="flex items-center gap-4 border border-gray-200 rounded-2xl p-4">

                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">

                    <FiMapPin className="text-green-600" />

                  </div>

                  <div>

                    <p className="text-xs text-gray-400 uppercase font-semibold">
                      Address
                    </p>

                    <p className="font-semibold text-slate-900 mt-1">
                      {user.address || "Not provided"}
                    </p>

                  </div>

                </div>


                {/* COUNTRY */}

                <div className="flex items-center gap-4 border border-gray-200 rounded-2xl p-4">

                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">

                    <FiGlobe className="text-green-600" />

                  </div>

                  <div>

                    <p className="text-xs text-gray-400 uppercase font-semibold">
                      Country
                    </p>

                    <p className="font-semibold text-slate-900 mt-1">
                      {user.country || "Not provided"}
                    </p>

                  </div>

                </div>


                {/* PHONE */}

                <div className="flex items-center gap-4 border border-gray-200 rounded-2xl p-4 md:col-span-2">

                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">

                    <FiPhone className="text-green-600" />

                  </div>

                  <div>

                    <p className="text-xs text-gray-400 uppercase font-semibold">
                      Phone Number
                    </p>

                    <p className="font-semibold text-slate-900 mt-1">
                      {user.phone || "Not provided"}
                    </p>

                  </div>

                </div>

              </div>


              {/* LOGOUT */}

              <button
                onClick={handleLogout}
                className="mt-8 w-full md:w-auto flex items-center justify-center gap-2
                bg-red-500 hover:bg-red-600 text-white
                px-7 py-3 rounded-full font-semibold transition"
              >

                <FiLogOut size={18} />

                Log Out

              </button>

            </div>

          </div>

        </div>

      </section>

      <Letter />
      <Footer />

    </>
  );
}

export default Account;