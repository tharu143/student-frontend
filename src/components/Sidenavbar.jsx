import React, { useState } from "react";

const Sidenavbar = ({ setActiveSection }) => {
  const [showStudentDropdown, setShowStudentDropdown] = useState(false);
  const [showStaffDropdown, setShowStaffDropdown] = useState(false);
  const [showInternDropdown, setShowInternDropdown] = useState(false);

  const handleClick = (section) => {
    setActiveSection(section);
  };

  const toggleDropdown = (dropdown) => {
    if (dropdown === "student") {
      setShowStudentDropdown(!showStudentDropdown);
    } else if (dropdown === "staff") {
      setShowStaffDropdown(!showStaffDropdown);
    } else if (dropdown === "intern") {
      setShowInternDropdown(!showInternDropdown);
    }
  };

  return (
    <nav className="bg-gray-800 text-white w-64 p-4">
      <ul>
        <li className="mb-2">
          <button
            onClick={() => handleClick("overview")}
            className="block py-3 px-4 w-full text-left hover:bg-gray-700 rounded"
          >
            Dashboard
          </button>
        </li>
        <li className="mb-2">
          <button
            onClick={() => toggleDropdown("student")}
            className="block py-3 px-4 w-full text-left hover:bg-gray-700 rounded"
          >
            Student
          </button>
          {showStudentDropdown && (
            <ul className="pl-4 mt-2">
              <li className="mb-2">
                <button
                  onClick={() => handleClick("studentDetails")}
                  className="block py-3 px-4 hover:bg-gray-600 rounded"
                >
                  Student Details
                </button>
              </li>
              <li className="mb-2">
                <button
                  onClick={() => handleClick("personalDetails")}
                  className="block py-3 px-4 hover:bg-gray-600 rounded"
                >
                  Personal Details
                </button>
              </li>
              <li className="mb-2">
                <button
                  onClick={() => handleClick("certificateVerification")}
                  className="block py-3 px-4 hover:bg-gray-600 rounded"
                >
                  Certificate Verification
                </button>
              </li>
              <li className="mb-2">
                <button
                  onClick={() => handleClick("studentReportSheet")}
                  className="block py-3 px-4 hover:bg-gray-600 rounded"
                >
                  Student Report Sheet
                </Link>
              </li>
              <li className="mb-2">
                <button
                  onClick={() => handleClick("studentAttendance")}
                  className="block py-3 px-4 hover:bg-gray-600 rounded"
                >
                  Student Attendance
                </button>
              </li>
              <li className="mb-2">
                <button
                  onClick={() => handleClick("fees")}
                  className="block py-3 px-4 hover:bg-gray-600 rounded"
                >
                  Fees
                </button>
              </li>
            </ul>
          )}
        </li>
        <li className="mb-2">
          <button
            onClick={() => toggleDropdown("staff")}
            className="block py-3 px-4 w-full text-left hover:bg-gray-700 rounded"
          >
            Staff
          </button>
          {showStaffDropdown && (
            <ul className="pl-4 mt-2">
              <li className="mb-2">
                <button
                  onClick={() => handleClick("staffPersonalDetails")}
                  className="block py-3 px-4 hover:bg-gray-600 rounded"
                >
                  Staff Personal Details
                </button>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  onClick={() => handleClick("staffReportSheet")}
                  className="block py-3 px-4 hover:bg-gray-600 rounded"
                >
                  Staff Report Sheet
                </button>
              </li>
              <li className="mb-2">
                <Link
                  to="#"
                  onClick={() => handleClick("viewStaff")}
                  className="block py-3 px-4 hover:bg-gray-600 rounded"
                >
                  View Staff
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Sidenavbar;
