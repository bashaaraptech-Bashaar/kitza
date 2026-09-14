import { useState } from "react";
import {
  FaLock,
  FaUser,
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaFacebookF,
  FaMapMarkerAlt,
  FaGlobe,
  FaPhone,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // USER INFORMATION
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // ADDRESS INFORMATION
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");

  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setSuccess(false);

    // SIGNUP VALIDATION
    if (!isLogin) {
      if (password !== confirmPassword) {
        setMessage("Passwords do not match");
        return;
      }

      if (!name.trim()) {
        setMessage("Please enter your full name");
        return;
      }

      if (!address.trim()) {
        setMessage("Please enter your address");
        return;
      }

      if (!country) {
        setMessage("Please select your country");
        return;
      }

      if (!phone.trim()) {
        setMessage("Please enter your phone number");
        return;
      }
    }

    setLoading(true);

    try {
      
     const endpoint = isLogin
  ? "https://kitza-backend.vercel.app/auth/login"
  : "https://kitza-backend.vercel.app/auth/signup";

      const body = isLogin
        ? {
            email,
            password,
          }
        : {
            name,
            email,
            password,
            address,
            country,
            phone,
          };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      console.log("LOGIN RESPONSE:", data);

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      // LOGIN
      if (isLogin) {
        if (data.message === "login successful") {
          setSuccess(true);
          setMessage("Login successful!");

          // Save logged-in user
       if (data.user) {
  localStorage.setItem(
    "kitzaUser",
    JSON.stringify(data.user)
  );
}

if (data.token) {
  localStorage.setItem(
    "kitzaToken",
    data.token
  );
}
          // Go to home
          setTimeout(() => {
            navigate("/");
          }, 700);
        } else {
          setSuccess(false);
          setMessage(data.message);
        }
      }

      // SIGNUP
      else {
        setSuccess(true);
        setMessage("Account created successfully!");

        // Clear form
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setAddress("");
        setCountry("");
        setPhone("");

        // Switch to login
        setTimeout(() => {
          setIsLogin(true);
          setMessage("");
        }, 1500);
      }
    } catch (error) {
      console.error("Auth error:", error);

      setSuccess(false);
      setMessage(error.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">

      <div className="bg-white border border-gray-200 rounded-3xl w-full max-w-md p-8 shadow-xl text-gray-800">

        {/* LOCK ICON */}
        <div className="flex justify-center mb-4">
          <div className="bg-green-50 p-3.5 rounded-full border border-green-100">
            <FaLock className="w-5 h-5 text-green-600" />
          </div>
        </div>

        {/* HEADING */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            Welcome to KITZA
          </h2>

          <p className="text-sm text-gray-500">
            Sign in to your account or create a new one
          </p>
        </div>

        {/* LOGIN / SIGNUP */}
        <div className="bg-gray-100 p-1 rounded-2xl flex mb-6">

          <button
            type="button"
            onClick={() => {
              setIsLogin(true);
              setMessage("");
            }}
            className={`w-full py-2.5 text-sm font-medium rounded-xl transition-all ${
              isLogin
                ? "bg-green-600 text-white shadow-md"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            Login
          </button>

          <button
            type="button"
            onClick={() => {
              setIsLogin(false);
              setMessage("");
            }}
            className={`w-full py-2.5 text-sm font-medium rounded-xl transition-all ${
              !isLogin
                ? "bg-green-600 text-white shadow-md"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            Sign Up
          </button>

        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* FULL NAME */}
          {!isLogin && (
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                Full Name
              </label>

              <div className="relative">

                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <FaUser className="w-4 h-4" />
                </span>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-600 focus:bg-white transition-colors"
                />

              </div>
            </div>
          )}

          {/* EMAIL */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
              Email
            </label>

            <div className="relative">

              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <FaEnvelope className="w-4 h-4" />
              </span>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-600 focus:bg-white transition-colors"
              />

            </div>
          </div>

          {/* ADDRESS */}
          {!isLogin && (
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                Address
              </label>

              <div className="relative">

                <span className="absolute top-3.5 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <FaMapMarkerAlt className="w-4 h-4" />
                </span>

                <textarea
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your address"
                  required
                  rows="2"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-600 focus:bg-white transition-colors resize-none"
                />

              </div>
            </div>
          )}

          {/* COUNTRY */}
          {!isLogin && (
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                Country
              </label>

              <div className="relative">

                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <FaGlobe className="w-4 h-4" />
                </span>

                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-green-600 focus:bg-white transition-colors appearance-none"
                >
                  <option value="">
                    Select your country
                  </option>

                  <option value="Pakistan">
                    Pakistan
                  </option>

                  <option value="India">
                    India
                  </option>

                  <option value="United Arab Emirates">
                    United Arab Emirates
                  </option>

                  <option value="Saudi Arabia">
                    Saudi Arabia
                  </option>

                  <option value="United Kingdom">
                    United Kingdom
                  </option>

                  <option value="United States">
                    United States
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>

              </div>
            </div>
          )}

          {/* PHONE */}
          {!isLogin && (
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                Phone Number
              </label>

              <div className="relative">

                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <FaPhone className="w-4 h-4" />
                </span>

                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-600 focus:bg-white transition-colors"
                />

              </div>
            </div>
          )}

          {/* PASSWORD */}
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
              Password
            </label>

            <div className="relative">

              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <FaLock className="w-4 h-4" />
              </span>

              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={
                  isLogin
                    ? "Enter your password"
                    : "Create a password"
                }
                required
                className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-10 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-600 focus:bg-white transition-colors"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600"
              >
                {showPassword ? (
                  <FaEyeSlash className="w-4 h-4" />
                ) : (
                  <FaEye className="w-4 h-4" />
                )}
              </button>

            </div>
          </div>

          {/* CONFIRM PASSWORD */}
          {!isLogin && (
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
                Confirm Password
              </label>

              <div className="relative">

                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <FaLock className="w-4 h-4" />
                </span>

                <input
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
                  }
                  placeholder="Confirm your password"
                  required
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-10 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-green-600 focus:bg-white transition-colors"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                  aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? (
                    <FaEyeSlash className="w-4 h-4" />
                  ) : (
                    <FaEye className="w-4 h-4" />
                  )}
                </button>

              </div>
            </div>
          )}

          {/* MESSAGE */}
          {message && (
            <p
              className={`text-sm text-center font-medium ${
                success
                  ? "text-green-600"
                  : "text-red-500"
              }`}
            >
              {message}
            </p>
          )}

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-60 text-white font-medium py-3 rounded-xl transition-colors shadow-md mt-2 cursor-pointer"
          >
            {loading
              ? "Please wait..."
              : isLogin
              ? "Sign In"
              : "Create Account"}
          </button>

        </form>

        {/* DIVIDER */}
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-200"></div>

          <span className="flex-shrink mx-4 text-[10px] tracking-widest text-gray-400 uppercase font-semibold">
            Or continue with
          </span>

          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* SOCIAL BUTTONS */}
        <div className="grid grid-cols-2 gap-3">

          <button
            type="button"
            className="flex items-center justify-center bg-gray-50 hover:bg-gray-100 border border-gray-200 py-2.5 rounded-xl text-sm font-medium text-gray-700 transition-colors cursor-pointer"
          >
            <FaGoogle className="mr-2 text-red-500" />
            Google
          </button>

          <button
            type="button"
            className="flex items-center justify-center bg-gray-50 hover:bg-gray-100 border border-gray-200 py-2.5 rounded-xl text-sm font-medium text-gray-700 transition-colors cursor-pointer"
          >
            <FaFacebookF className="mr-2 text-blue-600" />
            Facebook
          </button>

        </div>

      </div>
    </div>
  );
}