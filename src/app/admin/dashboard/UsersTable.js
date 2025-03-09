"use client";

import React, { useState } from "react";
import Switch from "./Switch"; // Import your custom switch
import "./ToggleSwitch.css"; // Ensure styles are applied

export default function UsersTable({ users, toggleStatus }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editedUser, setEditedUser] = useState({});

  const handleEdit = (index, user) => {
    setEditIndex(index);
    setEditedUser({ ...user });
  };

  const handleInputChange = (e, field) => {
    setEditedUser({ ...editedUser, [field]: e.target.value });
  };

  const handleSave = (index) => {
    users[index] = { ...editedUser };
    setEditIndex(null);
  };

  const handleCancel = () => {
    setEditIndex(null);
  };

  return (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-[#D9D9D9] text-center text-[#170645]">
            <th className="p-2 border">No.</th>
            <th className="p-2 border">Full Name</th>
            <th className="p-2 border">District</th>
            <th className="p-2 border">Mobile No.</th>
            <th className="p-2 border">Email Id</th>
            <th className="p-2 border">Action</th> {/* New column for Edit button */}
            <th className="p-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id} className="text-[#170645] text-center border-b">
              <td className="p-2">{index + 1}</td>

              {/* Inline editing for Name */}
              <td className="p-2">
                {editIndex === index ? (
                  <input
                    type="text"
                    value={editedUser.name}
                    onChange={(e) => handleInputChange(e, "name")}
                    className="p-1 border border-gray-300 rounded"
                  />
                ) : (
                  user.name
                )}
              </td>

              {/* Inline editing for District */}
              <td className="p-2">
                {editIndex === index ? (
                  <input
                    type="text"
                    value={editedUser.district}
                    onChange={(e) => handleInputChange(e, "district")}
                    className="p-1 border border-gray-300 rounded"
                  />
                ) : (
                  user.district
                )}
              </td>

              {/* Inline editing for Mobile No */}
              <td className="p-2">
                {editIndex === index ? (
                  <input
                    type="text"
                    value={editedUser.mobile}
                    onChange={(e) => handleInputChange(e, "mobile")}
                    className="p-1 border border-gray-300 rounded"
                  />
                ) : (
                  user.mobile
                )}
              </td>

              {/* Inline editing for Email */}
              <td className="p-2 max-w-[150px] truncate">
                {editIndex === index ? (
                  <input
                    type="text"
                    value={editedUser.email}
                    onChange={(e) => handleInputChange(e, "email")}
                    className="p-1 border border-gray-300 rounded"
                  />
                ) : (
                  user.email
                )}
              </td>

              {/* Edit and Save/Cancel Buttons */}
              <td className="p-2 flex justify-center items-center gap-2">
                {editIndex === index ? (
                  <>
                    <button
                      className="text-green-600 font-semibold"
                      onClick={() => handleSave(index)}
                    >
                      Save
                    </button>
                    <button
                      className="text-red-600 font-semibold"
                      onClick={handleCancel}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    className="flex items-center text-blue-600"
                    onClick={() => handleEdit(index, user)}
                  >
                    <img src="/edit-icon.png" alt="Edit" className="w-4 h-4 mr-1" />
                    Edit
                  </button>
                )}
              </td>

              {/* Status Switch (Uses Custom Switch Component) */}
              <td className="p-2 text-center">
                <Switch checked={user.status} onChange={() => toggleStatus(user.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
