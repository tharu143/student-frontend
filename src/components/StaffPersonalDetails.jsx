import React, { useState } from 'react';
import { createStaff } from '../api/staffApi';

const StaffPersonalDetails = () => {
  const [staff, setStaff] = useState({
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
    const { name, value, files } = e.target;
    setStaff({
      ...staff,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createStaff(staff);
      alert('Staff created successfully');
      setStaff({
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
    } catch (error) {
      console.error('Error submitting staff details:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="block mb-2">
          Name:
          <input
            type="text"
            name="name"
            value={staff.name}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </label>

        <label className="block mb-2">
          Role:
          <input
            type="text"
            name="role"
            value={staff.role}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </label>

        <label className="block mb-2">
          Date of Joining:
          <input
            type="date"
            name="dateOfJoining"
            value={staff.dateOfJoining}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </label>

        <label className="block mb-2">
          Bank Account Number:
          <input
            type="text"
            name="bankAccountNumber"
            value={staff.bankAccountNumber}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </label>

        <label className="block mb-2">
          Branch:
          <input
            type="text"
            name="branch"
            value={staff.branch}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </label>

        <label className="block mb-2">
          IFSC Code:
          <input
            type="text"
            name="ifscCode"
            value={staff.ifscCode}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </label>

        {/* File inputs with file name display */}
        <label className="block mb-2">
          Offer Letter:
          <input
            type="file"
            name="offerLetter"
            onChange={handleChange}
            accept="application/pdf,image/*"
            className="border p-2 rounded w-full"
          />
          <span className="text-sm text-gray-600">
            {staff.offerLetter ? staff.offerLetter.name : 'No file selected'}
          </span>
        </label>

        <label className="block mb-2">
          Aadhar Xerox:
          <input
            type="file"
            name="aadharXerox"
            onChange={handleChange}
            accept="application/pdf,image/*"
            className="border p-2 rounded w-full"
          />
          <span className="text-sm text-gray-600">
            {staff.aadharXerox ? staff.aadharXerox.name : 'No file selected'}
          </span>
        </label>

        <label className="block mb-2">
          Passport Photo:
          <input
            type="file"
            name="passportPhoto"
            onChange={handleChange}
            accept="image/*"
            className="border p-2 rounded w-full"
          />
          <span className="text-sm text-gray-600">
            {staff.passportPhoto ? staff.passportPhoto.name : 'No file selected'}
          </span>
        </label>

        <label className="block mb-2">
          Passbook:
          <input
            type="file"
            name="passbook"
            onChange={handleChange}
            accept="application/pdf,image/*"
            className="border p-2 rounded w-full"
          />
          <span className="text-sm text-gray-600">
            {staff.passbook ? staff.passbook.name : 'No file selected'}
          </span>
        </label>
      </div>

      <div className="flex justify-center mt-4">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Create Staff
        </button>
      </div>
    </form>
  );
};

export default StaffPersonalDetails;
