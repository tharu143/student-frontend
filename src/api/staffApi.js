import axios from 'axios';

const API_URL = 'http://localhost:5000/api/staff';

// Create a new staff record
export const createStaff = async (staffData) => {
  try {
    const response = await axios.post(API_URL, staffData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating staff:', error);
    throw error;
  }
};

// Search staff by name
export const searchStaffByName = async (name) => {
  try {
    const response = await axios.get(`${API_URL}/search`, { params: { name } });
    return response.data;
  } catch (error) {
    console.error('Error searching staff by name:', error);
    throw error;
  }
};

// Search staff by employeeId
export const searchStaffByEmployeeId = async (query) => {
  try {
    const response = await axios.get(`${API_URL}/searchById`, { params: { query } });
    return response.data;
  } catch (error) {
    console.error('Error searching staff by employeeId:', error);
    throw error;
  }
};
