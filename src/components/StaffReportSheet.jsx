import React, { useState } from "react";
import { searchStaffByName, searchStaffByEmployeeId } from "../api/staffApi"; // Adjust imports based on your file structure

const StaffReportSheet = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [staffDetails, setStaffDetails] = useState(null);
  const [error, setError] = useState(null);
  const [reportLink, setReportLink] = useState("");

  const handleSearch = async () => {
    try {
      if (!searchTerm) {
        setError("Please enter a search term.");
        return;
      }

      let staff;
      if (searchTerm.includes("zhahi")) {
        staff = await searchStaffByEmployeeId(searchTerm);
      } else {
        const staffByName = await searchStaffByName(searchTerm);
        staff = staffByName.length > 0 ? staffByName[0] : null;
      }

      if (staff) {
        setStaffDetails(staff);
        setError(null);
      } else {
        setError("No staff found.");
        setStaffDetails(null);
      }
    } catch (error) {
      setError("Failed to search staff.");
      console.error("Error searching staff:", error);
    }
  };

  const handleSaveReportLink = async () => {
    try {
      if (staffDetails) {
        // Ensure this matches the endpoint in your backend
        await fetch('http://localhost:5000/api/report-sheets', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            staffId: staffDetails._id,
            reportLink: reportLink,
          }),
        });

        alert("Report link saved successfully.");
      }
    } catch (error) {
      setError("Failed to save report link.");
      console.error("Error saving report link:", error);
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow-md max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Staff Report Sheet</h1>
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

      {staffDetails && (
        <div className="bg-gray-100 p-4 rounded shadow-md text-center">
          <div className="mb-4">
            <img
              src={staffDetails.staffPicPath}
              alt="Profile"
              className="w-32 h-32 object-cover rounded-full mx-auto"
            />
          </div>
          <div className="mb-2">
            <strong>ID:</strong> {staffDetails._id}
          </div>
          <div className="mb-2">
            <strong>Name:</strong> {staffDetails.name}
          </div>
          <div className="mb-2">
            <strong>Role:</strong> {staffDetails.role}
          </div>
          <div className="mb-2">
            <strong>Date of Joining:</strong> {staffDetails.dateOfJoining}
          </div>
          <div className="mb-2">
            <strong>Bank Account Number:</strong> {staffDetails.bankAccountNumber}
          </div>
          <div className="mb-2">
            <strong>Branch:</strong> {staffDetails.branch}
          </div>
          <div className="mb-2">
            <strong>IFSC Code:</strong> {staffDetails.ifscCode}
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Enter report link"
              value={reportLink}
              onChange={(e) => setReportLink(e.target.value)}
              className="border p-2 rounded w-full"
            />
            <button
              onClick={handleSaveReportLink}
              className="bg-green-500 text-white px-4 py-2 rounded mt-2"
            >
              Save Report Link
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaffReportSheet;
