import axios from 'axios';

const API_URL = 'http://localhost:8000';

// Helper function for handling errors
const handleError = (error) => {
  console.error('API request failed:', error);
  throw error;
};

// Delivery Drivers
export const fetchDeliveryDrivers = () =>
  axios.get(`${API_URL}/delivery_drivers`).then((response) => response.data).catch(handleError);

export const fetchDeliveryDriver = (id) =>
  axios.get(`${API_URL}/delivery_drivers/${id}`).then((response) => response.data).catch(handleError);

export const createDeliveryDriver = (data) =>
  axios.post(`${API_URL}/delivery_drivers`, data).then((response) => response.data).catch(handleError);

export const updateDeliveryDriver = (id, data) =>
  axios.put(`${API_URL}/delivery_drivers/${id}`, data).catch(handleError);

export const deleteDeliveryDriver = (id) =>
  axios.delete(`${API_URL}/delivery_drivers/${id}`).catch(handleError);
  
export default {
fetchDeliveryDriver,
fetchDeliveryDrivers,
createDeliveryDriver,
updateDeliveryDriver,
deleteDeliveryDriver
};

