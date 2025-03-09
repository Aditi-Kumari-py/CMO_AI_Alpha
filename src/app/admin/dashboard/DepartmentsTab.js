"use client"; // ✅ Ensures this component runs on the client

import React, { useState } from "react";

export default function DepartmentsTab() {
  const [departmentName, setDepartmentName] = useState(""); // Store input value
  const [departments, setDepartments] = useState([
    "HR",
    "Finance",
    "Marketing",
    "IT",
    "Operations",
    "Sales",
    "Support",
  ]); // Initial departments

  const [editIndex, setEditIndex] = useState(null); // Track the department being edited
  const [editedName, setEditedName] = useState(""); // Store the edited name

  // Function to handle adding a department
  const handleAddDepartment = () => {
    if (departmentName.trim() !== "") {
      setDepartments([...departments, departmentName]); // Add new department
      setDepartmentName(""); // Clear input field
    }
  };

  // Function to enable editing mode
  const handleEdit = (index) => {
    setEditIndex(index); // Set the index of the department being edited
    setEditedName(departments[index]); // Set the current name in the input field
  };

  // Function to save the edited department name
  const handleSaveEdit = (index) => {
    if (editedName.trim() !== "") {
      const updatedDepartments = [...departments];
      updatedDepartments[index] = editedName; // Update the department name
      setDepartments(updatedDepartments);
      setEditIndex(null); // Exit editing mode
    }
  };

  // Function to cancel editing
  const handleCancelEdit = () => {
    setEditIndex(null); // Exit editing mode without saving
  };

  return (
    <div className="p-4 sm:p-6">
      {/* Department Name Input and Add Button */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <input
          type="text"
          placeholder="Enter Department Name"
          className="flex-[8] p-3 border border-gray-300 rounded-full text-[#170645] focus:outline-[#170645] placeholder-[#170645]"
          value={departmentName}
          onChange={(e) => setDepartmentName(e.target.value)}
        />
        <button
          className="flex-[2] bg-[#170645] text-[#FFE100] px-6 py-3 rounded-full font-semibold shadow-lg"
          onClick={handleAddDepartment}
        >
          Add
        </button>
      </div>

      {/* Total Departments Count */}
      <div className="mt-4 font-semibold text-[#170645]">
        Total Tags | <span className="font-bold">{departments.length}</span>
      </div>

      {/* Table of Departments */}
      <div className="mt-4 overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#D9D9D9] text-center text-[#170645]">
              <th className="p-2 border">No.</th>
              <th className="p-2 border">Department Name</th>
              <th className="p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((department, index) => (
              <tr key={index} className="text-[#170645] text-center border-b">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">
                  {editIndex === index ? (
                    <input
                      type="text"
                      className="p-1 border border-gray-300 rounded"
                      value={editedName}
                      onChange={(e) => setEditedName(e.target.value)}
                    />
                  ) : (
                    department
                  )}
                </td>
                <td className="p-2 flex justify-center items-center gap-2">
                  {editIndex === index ? (
                    <>
                      <button
                        className="text-green-600 font-semibold"
                        onClick={() => handleSaveEdit(index)}
                      >
                        Save
                      </button>
                      <button
                        className="text-red-600 font-semibold"
                        onClick={handleCancelEdit}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button
                      className="flex items-center text-green-600"
                      onClick={() => handleEdit(index)}
                    >
                      <img src="/edit-icon.png" alt="Edit" className="w-4 h-4 mr-1" />
                      Edit
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
