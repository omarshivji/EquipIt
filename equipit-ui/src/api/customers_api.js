import axios from 'axios';


const API_URL = 'https://8000-omarshivji-equipit-fjpjc4oo06g.ws-eu93.gitpod.io';

// Helper function for handling errors
const handleError = (error) => {
  console.error('API request failed:', error);
  throw error;
};

// Customers
export const getCustomers = () =>
  axios.get(`${API_URL}/customers`).then((response) => response.data).catch(handleError);

export const getCustomerId = (id) =>
  axios.get(`${API_URL}/customers/${id}`).then((response) => response.data).catch(handleError);

export const createCustomer = (data) =>
  axios.post(`${API_URL}/customers`, data).then((response) => response.data).catch(handleError);

export const updateCustomer = (id, data) =>
  axios.put(`${API_URL}/customers/${id}`, data).catch(handleError);

export const deleteCustomer = (id) =>
  axios.delete(`${API_URL}/customers/${id}`).catch(handleError);

export const login = () =>
axios.get(`${API_URL}/login`).then((response) => response.data).catch(handleError);

const customersAPI = {
   getCustomers,
   getCustomerId, 
   createCustomer, 
   updateCustomer, 
   deleteCustomer, 
   login
  };

   export default customersAPI;
