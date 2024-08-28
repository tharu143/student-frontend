import axios from 'axios';

const API_URL = 'http://localhost:5000/api/staff';

// Function to create a new staff entry
export const createStaff = async (staffData) => {
  try {
    const formData = new FormData();

    for (const key in staffData) {
      if (staffData[key]) {
        formData.append(key, staffData[key]);
      }
    }

    const response = await axios.post(`${API_URL}/staff-details`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error creating staff:', error);
    throw error.response ? error.response.data : error;
  }
};

// Other API functions can be added here as needed
