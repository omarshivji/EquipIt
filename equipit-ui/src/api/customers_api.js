import axios from 'axios';
const express = require('express');

const API_URL = 'http://localhost:8000';

// Helper function for handling errors
const handleError = (error) => {
  console.error('API request failed:', error);
  throw error;
};

// Customers
export const fetchCustomers = () =>
  axios.get(`${API_URL}/customers`).then((response) => response.data).catch(handleError);

export const fetchCustomer = (id) =>
  axios.get(`${API_URL}/customers/${id}`).then((response) => response.data).catch(handleError);

export const createCustomer = (data) =>
  axios.post(`${API_URL}/customers`, data).then((response) => response.data).catch(handleError);

export const updateCustomer = (id, data) =>
  axios.put(`${API_URL}/customers/${id}`, data).catch(handleError);

export const deleteCustomer = (id) =>
  axios.delete(`${API_URL}/customers/${id}`).catch(handleError);

