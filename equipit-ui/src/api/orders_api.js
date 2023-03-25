import axios from 'axios';
const express = require('express');

const API_URL = 'http://localhost:8000';

// Helper function for handling errors
const handleError = (error) => {
  console.error('API request failed:', error);
  throw error;
};

// Orders
export const fetchOrders = () =>
  axios.get(`${API_URL}/orders`).then((response) => response.data).catch(handleError);

export const fetchOrder = (id) =>
  axios.get(`${API_URL}/orders/${id}`).then((response) => response.data).catch(handleError);

export const createOrder = (data) =>
  axios.post(`${API_URL}/orders`, data).then((response) => response.data).catch(handleError);

export const updateOrder = (id, data) =>
  axios.put(`${API_URL}/orders/${id}`, data).catch(handleError);

export const deleteOrder = (id) =>
  axios.delete(`${API_URL}/orders/${id}`).catch(handleError);

