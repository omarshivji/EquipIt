import axios from 'axios';

const API_URL = 'http://localhost:8000';

// Helper function for handling errors
const handleError = (error) => {
  console.error('API request failed:', error);
  throw error;
};

// Stores
export const fetchStores = () =>
  axios.get(`${API_URL}/stores`).then((response) => response.data).catch(handleError);

export const fetchStore = (id) =>
  axios.get(`${API_URL}/stores/${id}`).then((response) => response.data).catch(handleError);

export const createStore = (data) =>
  axios.post(`${API_URL}/stores`, data).then((response) => response.data).catch(handleError);

export const updateStore = (id, data) =>
  axios.put(`${API_URL}/stores/${id}`, data).catch(handleError);

export const deleteStore = (id) =>
  axios.delete(`${API_URL}/stores/${id}`).catch(handleError);

export default {
  fetchStore,
  fetchStores,
  createStore,
  updateStore,
  deleteStore
};

