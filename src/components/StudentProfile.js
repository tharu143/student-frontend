import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StudentDetails from './StudentDetails';
import PersonalDetails from './PersonalDetails';
import CertificateVerification from './CertificateVerification';
import ProjectSheet from './ProjectSheet';
import StudentAttendance from './StudentAttendance';
import Footer from "./Footer";
import logo from './assets/logo.png';

const StudentProfile = () => {
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeSection, setActiveSection] = useState('studentDetails'); 

  // useEffect(() => {
  //   const fetchStudentData = async () => {
  //     setLoading(true);
  //     try {
  //       const response = await axios.get('/api/student-profile', {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem('token')}`
  //         }
  //       });
  //       setStudentData(response.data);
  //     } catch (error) {
  //       console.error('Error fetching student data:', error);
  //       setError('Error fetching student data');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchStudentData();
  // }, []);

  const renderSection = () => {
    switch (activeSection) {
      case 'studentDetails':
        return <StudentDetails />;
      case 'personalDetails':
        return <PersonalDetails />;
      case 'certificateVerification':
        return <CertificateVerification />;
      case 'projectSheet':
        return <ProjectSheet />;
      case 'studentAttendance':
        return <StudentAttendance />;
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
                onClick={() => setActiveSection('projectSheet')}
                className="block w-full text-left px-4 py-2 hover:bg-gray-200"
              >
                Project Sheet
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
          </ul>
        </nav>
        <main className="flex-grow p-4">
          {loading && <p>Loading student data...</p>}
          {error && <p className="text-red-500">{error}</p>}
          {studentData && (
            <div className="bg-white p-4 rounded shadow">
              <div><strong>Name:</strong> {studentData.name}</div>
              <div><strong>Email:</strong> {studentData.email}</div>
              {/* Add more fields as needed */}
            </div>
          )}
          {renderSection()}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default StudentProfile;
