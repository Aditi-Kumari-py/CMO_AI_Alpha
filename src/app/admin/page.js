"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Handle Login
  const handleAdminLogin = (e) => {
    e.preventDefault();

    // Dummy authentication (Replace this with real authentication logic if needed)
    if (username === "admin" && password === "password123") {
      localStorage.setItem("isAdmin", "true"); // Store login status
      router.push("/admin/dashboard"); // Redirect to Admin Dashboard
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="flex h-screen bg-blue-900 items-center justify-center">
      {/* Login Card  don t not work in this part this page is only for dependcies purpose don't delete this page also*/}
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <div className="flex justify-center mb-4">
          <img src="/logo.png" alt="CG Logo" className="h-12" />
        </div>
        <h2 className="text-center text-xl font-bold text-blue-800">Admin Login</h2>

        <div className="mt-4">
          <label className="block font-medium">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded mt-1"
            placeholder="Enter Username"
          />
        </div>

        <div className="mt-3">
          <label className="block font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded mt-1"
            placeholder="Enter Password"
          />
        </div>

        {/* Forgot Password Link */}
        <div className="mt-2 text-center">
          <a href="/forgot-password" className="text-blue-600 hover:underline">Forgot Password?</a>
        </div>

        {/* Sign In Button with Proper Click Handler */}
        <button
          onClick={handleAdminLogin}
          className="w-full mt-4 bg-green-600 text-white p-2 rounded hover:bg-green-700"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
