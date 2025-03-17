"use client";

import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";


const Profile = () => {
  const router = useRouter();
  const userId = Cookies.get("userId"); // Assume user ID is stored in cookies
  const defaultImage = "/pro.png"; // Default blank image
  
  const [profileImage, setProfileImage] = useState(defaultImage);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [district, setDistrict] = useState("");
  const [namePlaceholder, setNamePlaceholder] = useState("Enter Name");
  const [mobilePlaceholder, setMobilePlaceholder] = useState("Contact");
  const [districtPlaceholder, setDistrictPlaceholder] = useState("Select District");

  const handleLogout = () => {
    Cookies.remove("adminLoggedIn", { path: "/admin" });
  
    // ✅ Completely prevent Back/Forward navigation after logout
    window.history.replaceState(null, null, "/admin");
    window.history.pushState(null, null, "/admin");
  
    // ✅ Reload the page to fully reset session state
    setTimeout(() => {
      window.location.href = "/admin"; // Full reload ensures session is cleared
    }, 100);
  };
 

  // Handle Image Upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("profile")) || {};
    if (savedProfile) {
      setName(savedProfile.name || "");
      setMobile(savedProfile.mobile || "");
      setDistrict(savedProfile.district || "");
    }
  }, []);

  const handleUpdate = async () => {
    try {
      // Simulate API call (Replace with actual API request)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Save updated profile details in local storage
      const updatedProfile = { name, mobile, district };
      localStorage.setItem("profile", JSON.stringify(updatedProfile));

      alert("Profile details updated successfully!");
    } catch (error) {
      alert("Failed to update profile. Please try again.");
    }
  };
  
  

  return (
    <div className="mt-4 p-6 rounded-lg max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold text-[#170645]">Profile Update</h2>
      <p className="text-[#170645] mb-4">Update Below Detail</p>
      <div className="relative w-20 h-20 mx-auto mb-4">
        <img
          src={profileImage}
          alt="Profile"
          className="w-20 h-20 rounded-full border"
        />
        <label
  htmlFor="file-upload"
  className="absolute bottom-0 right-0 bg-white p-1 rounded-full border shadow cursor-pointer"
>
  <input
    id="file-upload"
    type="file"
    accept="image/*"
    className="hidden"
    onChange={handleImageUpload}
  />
  <img src="/Group 737.png" alt="Edit" className="w-5 h-5" />
</label>

      </div>
      <div className="space-y-4">
        <input
           type="text" placeholder={namePlaceholder} value={name} onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border rounded-full text-[#170645] focus:outline-none"
        />
        <input
          type="text" placeholder={mobilePlaceholder} value={mobile} onChange={(e) => setMobile(e.target.value)}
          className="w-full p-3 border rounded-full focus:outline-none text-[#170645]"
        />
        <select  value={district} onChange={(e) => setDistrict(e.target.value)}  className="w-full p-3 border text-[#170645] rounded-full focus:outline-none">
          <option>Balod</option>
      <option>Baloda Bazar</option>
      <option>Balrampur</option>
      <option>Bastar</option>
      <option>Bemetara</option>
      <option>Bijapur</option>
      <option>Bilaspur</option>
      <option>Dantewada (South Bastar)</option>
      <option>Dhamtari</option>
      <option>Durg</option>
      <option>Gariaband</option>
      <option>Gaurela-Pendra-Marwahi</option>
      <option>Janjgir-Champa</option>
      <option>Jashpur</option>
      <option>Kabirdham (Kawardha)</option>
      <option>Kanker (North Bastar)</option>
      <option>Kondagaon</option>
      <option>Korba</option>
      <option>Koriya</option>
      <option>Mahasamund</option>
      <option>Mungeli</option>
      <option>Narayanpur</option>
      <option>Raigarh</option>
      <option>Raipur</option>
      <option>Rajnandgaon</option>
      <option>Sukma</option>
      <option>Surajpur</option>
      <option>Surguja</option>
        </select>
        <button onClick={handleUpdate}  className="w-full p-3 bg-[#170645] text-[#FFE100] rounded-full font-semibold">
          Update
        </button>
        <button
          className="w-full p-3 text-red-600 font-normal mt-2"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};


export default Profile;

