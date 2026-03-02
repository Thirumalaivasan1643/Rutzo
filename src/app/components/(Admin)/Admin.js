"use client";
import Lottie from "lottie-react";
import loginAnimation from "@/app/Login.json";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FiMail, FiLock, FiEye, FiEyeOff, FiLogIn } from "react-icons/fi";

export default function Admin() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // If already logged in → redirect
  useEffect(() => {
    const user = localStorage.getItem("adminUser");
    if (user) {
      router.push("/dashboard");
    }
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      // Fixed Admin Credentials
      const adminEmail = "admin@rutzotech.com";
      const adminPassword = "123456";

      if (
        form.email === adminEmail &&
        form.password === adminPassword
      ) {
        // Store in localStorage
        localStorage.setItem(
          "adminUser",
          JSON.stringify({
            email: form.email,
            loginTime: new Date().toISOString(),
          })
        );

        router.push("/dashboard");
      } else {
        alert("Invalid Email or Password!");
      }

      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <div className="md:hidden sm:hidden hidden lg:block xl:block 2xl:block">
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br py-20 from-amber-50 via-white to-orange-50 px-4 relative overflow-hidden">

          <div className="w-full max-w-xs relative z-10">
            <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 transition-all duration-500">

              <div className="flex flex-col items-center">
                <Lottie
                  animationData={loginAnimation}
                  loop={true}
                  className="w-[120px] h-[120px]"
                />
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 ml-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <FiMail className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="admin@rutzotech.com"
                      className="w-full pl-10 py-2 border-2 border-gray-200 rounded-xl"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 ml-1">
                    Password
                  </label>
                  <div className="relative">
                    <FiLock className="absolute left-3 top-3 text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      required
                      value={form.password}
                      onChange={handleChange}
                      placeholder="Enter Password"
                      className="w-full pl-10 pr-10 py-2 border-2 border-gray-200 rounded-xl"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3"
                    >
                      {showPassword ? <FiEyeOff /> : <FiEye />}
                    </button>
                  </div>
                </div>

                {/* Remember */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="mr-2"
                  />
                  <span className="text-sm text-gray-600">
                    Remember me
                  </span>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl flex justify-center items-center gap-2"
                >
                  {loading ? "Authenticating..." : "Login to Dashboard"}
                </button>
              </form>

              {/* Show Credentials */}
              <div className="mt-6 text-xs text-gray-500 text-center">
                <p>Demo Login:</p>
                <p>Email: admin@rutzotech.com</p>
                <p>Password: 123456</p>
              </div>

            </div>
          </div>

        </main>
      </div>
    </div>
  );
}