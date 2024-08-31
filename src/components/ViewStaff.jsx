import React, { useState, useEffect } from "react";
import { searchStaffByName, searchStaffByEmployeeId } from "../api/staffApi";

const StaffDetails = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [staffDetails, setStaffDetails] = useState(null);
  const [error, setError] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  useEffect(() => {
    if (staffDetails) {
      // Set other states or perform actions when staff details change
    }
  }, [staffDetails]);

  const handleSearch = async () => {
    try {
      if (!searchTerm) {
        setError("Please enter a search term.");
        return;
      }

      if (searchTerm.startsWith("zhahisf")) { // Example condition for employeeId search
        const staff = await searchStaffByEmployeeId(searchTerm);
        if (staff.length > 0) {
          setStaffDetails(staff[0]);
          setError(null);
        } else {
          setError("No staff found with the given employee ID.");
          setStaffDetails(null);
        }
      } else {
        const staffByName = await searchStaffByName(searchTerm);
        if (staffByName.length > 0) {
          setStaffDetails(staffByName[0]);
          setError(null);
        } else {
          setError("No staff found with the given name.");
          setStaffDetails(null);
        }
      }
    } catch (error) {
      setError("Failed to search staff.");
      console.error("Error searching staff:", error);
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow-md max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Staff Details</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name or employee ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        >
          Search
        </button>
      </div>

      {error && <div className="text-red-500 text-center mb-4">{error}</div>}

      {staffDetails && !showUpdateForm && (
        <div className="bg-gray-100 p-4 rounded shadow-md text-center">
          <div className="mb-4">
            <img
              src={staffDetails.profilePicPath}
              alt="Profile"
              className="w-32 h-32 object-cover rounded-full mx-auto"
            />
          </div>
          <div className="mb-2">
            <strong>ID:</strong> {staffDetails.employeeId}
          </div>
          <div className="mb-2">
            <strong>Name:</strong> {staffDetails.name}
          </div>
          <div className="mb-2">
            <strong>Role:</strong> {staffDetails.role}
          </div>
          <div className="mb-2">
            <strong>Date of Joining:</strong> {new Date(staffDetails.dateOfJoining).toLocaleDateString()}
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffDetails;
