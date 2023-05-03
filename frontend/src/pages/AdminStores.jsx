import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminNavbar from '../components/AdminNavbar';
import Footer from '../components/Footer';
import './AdminStores.css'

const AdminStores = () => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStores();
  }, []);

  const fetchStores = async () => {
    try {
      const response = await axios.get('http://localhost:8000/stores');
      if (Array.isArray(response.data)) {
        setStores(response.data);
      } else {
        console.error('Unexpected API response format. Expected an array of stores.');
      }
    } catch (error) {
      console.error('Error fetching stores:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditStore = async (storeId) => {
    try {
      const response = await axios.get(`http://localhost:8000/stores/${storeId}`);
      const storeData = response.data;

      const newStoreData = { ...storeData };
      const newName = prompt('Enter new store name:', storeData.name);
      if (newName) {
        newStoreData.name = newName;
      }

      const newLocation = prompt('Enter new store location:', storeData.location);
      if (newLocation) {
        newStoreData.location = newLocation;
      }

      await axios.put(`http://localhost:8000/stores/${storeId}`, newStoreData);
      toast.success('Store has been updated');

      fetchStores();
    } catch (error) {
      console.error('Error editing store:', error);
    }
  };

  const handleDeleteStore = async (storeId) => {
    try {
      await axios.delete(`http://localhost:8000/stores/${storeId}`);
      setStores(stores.filter((store) => store.store_id !== storeId));
      console.log('Store deleted successfully.');
      toast.success('Store has been deleted from database.');
    } catch (error) {
      console.error('Error deleting store:', error);
    }
  };

  return (
    <div className="container">
      <AdminNavbar/>
      <h1 className="text-center">Store List</h1>
      {loading ? (
        <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {stores.map((store) => (
              <tr key={store.store_id}>
                <td>{store.store_id}</td>
                <td>{store.name}</td>
                <td>{store.location}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleEditStore(store.store_id)}
                  >
                    Edit
                  </button>{' '}
                  <button
                    className="btn btn-danger ms-2"
                    onClick={() => handleDeleteStore(store.store_id)}
                    >
                    Delete
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default AdminStores;
