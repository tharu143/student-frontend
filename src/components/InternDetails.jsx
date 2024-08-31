import React, { useState } from "react";
import axios from "axios";

// Adjust the import path based on where you place the API functions
const createIntern = async (formData) => {
  try {
    const response = await axios.post('http://localhost:5000/api/interns', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to create intern');
  }
};

const InternDetails = () => {
  const [formData, setFormData] = useState({
    collegeName: "",
    internType: "Intern Training", // Default value
    paymentStatus: false,
    paymentAmount: "",
    startDate: "",
    endDate: "",
    reportFile: null,
    dob: "",
    phoneNo: "",
    mailId: "",
    githubId: "",
    linkedinId: "",
    workDetails: "",
    certificateProvided: "No", // Default value
    aadhaarPic: null,
    studentPic: null,
    name: "", // New field
    address: "" // New field
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  const handleSubmit = async () => {
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key] instanceof File) {
        formDataToSend.append(key, formData[key]);
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });

    setLoading(true);
    try {
      await createIntern(formDataToSend); // Use the createIntern function
      alert("Intern details submitted successfully!");
      setFormData({
        collegeName: "",
        internType: "Intern Training",
        paymentStatus: false,
        paymentAmount: "",
        startDate: "",
        endDate: "",
        reportFile: null,
        dob: "",
        phoneNo: "",
        mailId: "",
        githubId: "",
        linkedinId: "",
        workDetails: "",
        certificateProvided: "No",
        aadhaarPic: null,
        studentPic: null,
        name: "", // Reset name field
        address: "" // Reset address field
      });
    } catch (error) {
      setError("Failed to submit intern details.");
      console.error("Error submitting intern details:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow-md max-w-full md:max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Intern Details</h1>
      {loading && <div className="text-center">Loading...</div>}
      {error && <div className="text-red-500 text-center mb-4">{error}</div>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            placeholder="Enter Name"
          />
        </div>
        <div>
          <label className="block mb-2">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            placeholder="Enter Address"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-2">College Name</label>
        <input
          type="text"
          name="collegeName"
          value={formData.collegeName}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          placeholder="Enter College Name"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Intern Type</label>
        <select
          name="internType"
          value={formData.internType}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        >
          <option value="Intern Training">Intern Training</option>
          <option value="Unpaid Intern">Unpaid Intern</option>
        </select>
      </div>
      {formData.internType === "Intern Training" && (
        <div className="mb-4">
          <label className="block mb-2">Payment Status</label>
          <input
            type="checkbox"
            name="paymentStatus"
            checked={formData.paymentStatus}
            onChange={handleChange}
            className="mr-2"
          />
          <span>Paid</span>
        </div>
      )}
      {formData.paymentStatus && (
        <div className="mb-4">
          <label className="block mb-2">Payment Amount</label>
          <input
            type="text"
            name="paymentAmount"
            value={formData.paymentAmount}
            onChange={handleChange}
            className="border p-2 rounded w-full"
            placeholder="Enter Payment Amount"
          />
        </div>
      )}
      <div className="mb-4">
        <label className="block mb-2">Start Date</label>
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">End Date</label>
        <input
          type="date"
          name="endDate"
          value={formData.endDate}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Report File</label>
        <input
          type="file"
          name="reportFile"
          onChange={handleFileChange}
          className="border p-2 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Date of Birth</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Phone Number</label>
        <input
          type="tel"
          name="phoneNo"
          value={formData.phoneNo}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          placeholder="Enter Phone Number"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Email ID</label>
        <input
          type="email"
          name="mailId"
          value={formData.mailId}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          placeholder="Enter Email ID"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">GitHub ID</label>
        <input
          type="text"
          name="githubId"
          value={formData.githubId}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          placeholder="Enter GitHub ID"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">LinkedIn ID</label>
        <input
          type="text"
          name="linkedinId"
          value={formData.linkedinId}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          placeholder="Enter LinkedIn ID"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Work Details</label>
        <textarea
          name="workDetails"
          value={formData.workDetails}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          placeholder="Enter Work Details"
        ></textarea>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Certificate Provided</label>
        <select
          name="certificateProvided"
          value={formData.certificateProvided}
          onChange={handleChange}
          className="border p-2 rounded w-full"
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Aadhaar Picture</label>
        <input
          type="file"
          name="aadhaarPic"
          onChange={handleFileChange}
          className="border p-2 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Student Picture</label>
        <input
          type="file"
          name="studentPic"
          onChange={handleFileChange}
          className="border p-2 rounded w-full"
        />
      </div>
      <div className="text-center">
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default InternDetails;
