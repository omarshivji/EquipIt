import axios from 'axios';

const API_URL = 'https://8000-omarshivji-equipit-fjpjc4oo06g.ws-eu93.gitpod.io/products';

// Helper function for handling errors
const handleError = (error) => {
  console.error('API request failed:', error);
  throw error;
};

// Products
export const fetchProducts = () =>
  axios.get(`${API_URL}/products`).then((response) => response.data).catch(handleError);

export const fetchProduct = (id) =>
  axios.get(`${API_URL}/products/${id}`).then((response) => response.data).catch(handleError);

export const createProduct = (data) =>
  axios.post(`${API_URL}/products`, data).then((response) => response.data).catch(handleError);

export const updateProduct = (id, data) =>
  axios.put(`${API_URL}/products/${id}`, data).catch(handleError);

export const deleteProduct = (id) =>
  axios.delete(`${API_URL}/products/${id}`).catch(handleError);

export default {
  fetchProduct,
  fetchProducts,
  createProduct,
  updateProduct,
  deleteProduct
};

