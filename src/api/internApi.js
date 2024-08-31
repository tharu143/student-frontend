import axios from "axios";

const API_URL = "http://localhost:5000/api/interns";

export const searchInterns = async (query) => {
  try {
    const response = await axios.get(`${API_URL}/search`, {
      params: { name: query },
    });
    return response.data;
  } catch (error) {
    console.error("Failed to search interns:", error);
    throw new Error("Failed to search interns");
  }
};

// Other API functions can remain the same


export const createIntern = (formData) =>
  axios
    .post(API_URL, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => response.data);

export const updateIntern = (id, formData) =>
  axios
    .put(`${API_URL}/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => response.data);

export const deleteIntern = (id) =>
  axios.delete(`${API_URL}/${id}`).then((response) => response.data);
