// api.js
import axios from 'axios';

const API_URL = 'http://localhost:8000';

const login = async ({ email, password }) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data.token;
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

export { login };
