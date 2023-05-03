import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminNavbar from '../components/AdminNavbar';
import Footer from '../components/Footer';

const AdminCustomers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const response = await axios.get('http://localhost:8000/customers');
      if (Array.isArray(response.data)) {
        setCustomers(response.data);
      } else {
        console.error('Unexpected API response format. Expected an array of customers.');
      }
    } catch (error) {
      console.error('Error fetching customers:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditCustomer = async (customerId) => {
    try {
      
      const response = await axios.get(`http://localhost:8000/customers/${customerId}`);
      const customerData = response.data;
  
      
      const newCustomerData = { ...customerData }; 
      const newFirstName = prompt('Enter new first name:', customerData.firstName);
      if (newFirstName) {
        newCustomerData.firstName = newFirstName;
      }
  
      const newLastName = prompt('Enter new last name:', customerData.lastName);
      if (newLastName) {
        newCustomerData.lastName = newLastName;
      }

      const newUsername = prompt('Enter new username:', customerData.username);
      if (newUsername) {
        newCustomerData.username = newUsername;
      }

      const newEmail = prompt('Enter new email:', customerData.email);
      if (newEmail) {
        newCustomerData.email = newEmail;
      }

      const newAddress = prompt('Enter new address:', customerData.address);
      if (newAddress) {
        newCustomerData.address = newAddress;
      }

      const newPhone = prompt('Enter new phone number:', customerData.phone);
      if (newPhone) {
        newCustomerData.phone = newPhone;
      }

      const newDOB = prompt('Enter new date of birth (YYYY-MM-DD):', customerData.DOB);
      if (newDOB) {
        newCustomerData.DOB = newDOB;
      }

      const newPassword = prompt('Enter new password:', customerData.password);
      if (newPassword) {
        newCustomerData.password = newPassword;
      }

      const newPasswordConfirm = prompt('Confirm new password:', customerData.passwordConfirm);
      if (newPasswordConfirm) {
        newCustomerData.passwordConfirm = newPasswordConfirm;
      }
  
      
      await axios.put(`http://localhost:8000/customers/${customerId}`, newCustomerData);
      toast.success('Customer has been updated');
  
      
      fetchCustomers();
    } catch (error) {
      console.error('Error editing customer:', error);
    }
  };
  
  const handleDeleteCustomer = async (customerId) => {
    try {
      await axios.delete(`http://localhost:8000/customers/${customerId}`);
      setCustomers(customers.filter((customer) => customer.customers_id !== customerId));
      console.log('Customer deleted successfully.');
      toast.success('Customer has been deleted from database.')
    } catch (error) {
      console.error('Error deleting customer:', error);
    }
  };

  return (
    <div className="container">
      <AdminNavbar/>
      <h1 className="text-center">Customers List</h1>
      {loading ? (
        <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    ) : (
      <>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
              <th scope="col">DOB</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.customers_id}>
                <td>{customer.customers_id}</td>
                <td>{customer.firstName}</td>
                <td>{customer.lastName}</td>
                <td>{customer.username}</td>
                <td>{customer.email}</td>
                <td>{customer.address}</td>
                <td>{customer.phone}</td>
                <td>{customer.DOB}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEditCustomer(customer.customers_id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger ms-2"
                    onClick={() => handleDeleteCustomer(customer.customers_id)}
                    >
                    Delete
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ToastContainer />
        <Footer />
      </>
    )}
  </div>
);
};
export default AdminCustomers;
