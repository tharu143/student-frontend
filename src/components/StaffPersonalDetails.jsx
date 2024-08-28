import React, { useState } from 'react';
import { createStaff } from '../api/staffApi'; // Import the API function

const StaffPersonalDetails = () => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    dateOfJoining: '',
    bankAccountNumber: '',
    branch: '',
    ifscCode: '',
    offerLetter: null,
    aadharXerox: null,
    passportPhoto: null,
    passbook: null,
  });

  const handleChange = (e) => {
    const { name, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData object to handle file uploads and form data
    const form = new FormData();
    for (const key in formData) {
      if (formData[key]) {
        form.append(key, formData[key]);
      }
    }

    try {
      const result = await createStaff(form); // Use the createStaff API function
      alert('Staff details submitted successfully!');
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      alert('Submission failed.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Staff Personal Details</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="mb-4">
          <label className="block text-gray-700">Name</label>
          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Role</label>
          <input
            name="role"
            type="text"
            value={formData.role}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Date of Joining</label>
          <input
            name="dateOfJoining"
            type="date"
            value={formData.dateOfJoining}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Bank Account Number</label>
          <input
            name="bankAccountNumber"
            type="text"
            value={formData.bankAccountNumber}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Branch</label>
          <input
            name="branch"
            type="text"
            value={formData.branch}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">IFSC Code</label>
          <input
            name="ifscCode"
            type="text"
            value={formData.ifscCode}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700">Offer Letter</label>
          <input
            name="offerLetter"
            type="file"
            accept=".pdf,.png,.jpg"
            onChange={handleChange}
            className="mt-1 block w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Aadhar Xerox</label>
          <input
            name="aadharXerox"
            type="file"
            accept=".pdf,.png,.jpg"
            onChange={handleChange}
            className="mt-1 block w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Passport Photo</label>
          <input
            name="passportPhoto"
            type="file"
            accept=".png,.jpg"
            onChange={handleChange}
            className="mt-1 block w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Passbook</label>
          <input
            name="passbook"
            type="file"
            accept=".pdf,.png,.jpg"
            onChange={handleChange}
            className="mt-1 block w-full"
          />
        </div>
        <div className="md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded w-full md:w-auto"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default StaffPersonalDetails;
