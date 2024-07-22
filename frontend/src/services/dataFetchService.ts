import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/data/`);
    return response.data;
  } catch (error: any) {
    throw new Error("Error fetching data: " + error.message);
  }
};