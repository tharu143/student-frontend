import React, { useState } from "react";

import { searchInterns } from "../api/internApi"; // Update the import path as necessary

const ViewInterns = () => {
  // States for search functionality
  const [name, setName] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedIntern, setSelectedIntern] = useState(null);

  // Search intern functionality
  const handleSearch = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await searchInterns(name);
      setResults(data);
    } catch (err) {
      setError(err.message || "An error occurred while searching.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow-md max-w-full md:max-w-lg mx-auto">
      {/* Search Interns Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Search Interns by Name</h2>
        <div className="mb-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
            className="border p-2 rounded w-full"
          />
        </div>
        <div className="mb-4 text-center">
          <button
            onClick={handleSearch}
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300 disabled:opacity-50"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {results.length > 0 && (
          <ul className="list-disc pl-5">
            {results.map((intern) => (
              <li
                key={intern._id}
                className="border-b py-2 cursor-pointer"
                onClick={() => setSelectedIntern(intern)}
              >
                <div className="font-semibold">{intern.name}</div>
                <div className="text-gray-600">{intern.collegeName}</div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Intern Details Section */}
      {selectedIntern && (
        <div>
          <h1 className="text-2xl font-bold mb-6 text-center">Intern Details</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-2 font-semibold">Name</label>
              <p>{selectedIntern.name}</p>
            </div>
            <div>
              <label className="block mb-2 font-semibold">Address</label>
              <p>{selectedIntern.address}</p>
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">College Name</label>
            <p>{selectedIntern.collegeName}</p>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Intern Type</label>
            <p>{selectedIntern.internType}</p>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Payment Status</label>
            <p>{selectedIntern.paymentStatus ? "Paid" : "Not Paid"}</p>
          </div>
          {selectedIntern.paymentStatus && (
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Payment Amount</label>
              <p>{selectedIntern.paymentAmount}</p>
            </div>
          )}
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Start Date</label>
            <p>{selectedIntern.startDate}</p>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">End Date</label>
            <p>{selectedIntern.endDate}</p>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Report File</label>
            <p>{selectedIntern.reportFile ? "Uploaded" : "Not Uploaded"}</p>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Date of Birth</label>
            <p>{selectedIntern.dob}</p>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Phone Number</label>
            <p>{selectedIntern.phoneNo}</p>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Email ID</label>
            <p>{selectedIntern.mailId}</p>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">GitHub ID</label>
            <p>{selectedIntern.githubId}</p>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">LinkedIn ID</label>
            <p>{selectedIntern.linkedinId}</p>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Work Details</label>
            <p>{selectedIntern.workDetails}</p>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Certificate Provided</label>
            <p>{selectedIntern.certificateProvided}</p>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Aadhaar Picture</label>
            <p>{selectedIntern.aadhaarPic ? "Uploaded" : "Not Uploaded"}</p>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Student Picture</label>
            <p>{selectedIntern.studentPic ? "Uploaded" : "Not Uploaded"}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewInterns;
