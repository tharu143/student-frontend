import React, { useState } from 'react';
import StudentDetails from './StudentDetails';
import PersonalDetails from './PersonalDetails';
import CertificateVerification from './CertificateVerification';
import StudentReportSheet from './StudentReportSheet';
import StudentAttendance from './StudentAttendance';
import Fees from './Fees';
import Footer from './Footer';
import logo from './assets/logo.png';

const StudentProfile = () => {
  const [activeSection, setActiveSection] = useState('studentDetails');

  const renderSection = () => {
    switch (activeSection) {
      case 'studentDetails':
        return <StudentDetails />;
      case 'personalDetails':
        return <PersonalDetails />;
      case 'certificateVerification':
        return <CertificateVerification />;
      case 'studentReportSheet':
        return <StudentReportSheet />;
      case 'studentAttendance':
        return <StudentAttendance />;
      case 'Fees':
        return <Fees />;
      default:
        return <StudentDetails />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gradient-to-r from-teal-100 to-purple-400 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 mr-4" />
          <h1 className="text-2xl font-bold">Student Profile</h1>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => localStorage.removeItem('token')}
            className="bg-red-500 px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </header>
      <div className="flex flex-grow">
        <nav className="bg-gray-100 w-1/4 p-4">
          <ul>
            <li>
              <button
                onClick={() => setActiveSection('studentDetails')}
                className="block w-full text-left px-4 py-2 hover:bg-gray-200"
              >
                Student Details
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection('personalDetails')}
                className="block w-full text-left px-4 py-2 hover:bg-gray-200"
              >
                Personal Details
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection('certificateVerification')}
                className="block w-full text-left px-4 py-2 hover:bg-gray-200"
              >
                Certificate Verification
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection('studentReportSheet')}
                className="block w-full text-left px-4 py-2 hover:bg-gray-200"
              >
                Student Report Sheet
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection('studentAttendance')}
                className="block w-full text-left px-4 py-2 hover:bg-gray-200"
              >
                Student Attendance 
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection('Fees')}
                className="block w-full text-left px-4 py-2 hover:bg-gray-200"
              >
                Fees
              </button>
            </li>
          </ul>
        </nav>
        <main className="flex-grow p-4">
          {renderSection()}
        </main>
      </div>
      <Footer />
    </div>
  );
};
// tharunmanoj
export default StudentProfile;
