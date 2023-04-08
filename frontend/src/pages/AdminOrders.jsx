import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:8000/orders');
      if (Array.isArray(response.data)) {
        setOrders(response.data);
      } else {
        console.error('Unexpected API response format. Expected an array of orders.');
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditOrder = async (orderId) => {
    try {
      
      const response = await axios.get(`http://localhost:8000/orders/${orderId}`);
      const orderData = response.data;
  
      
      const newOrderData = { ...orderData }; 
      const newProductName = prompt('Enter new product name:', orderData.product_name);
      if (newProductName) {
        newOrderData.product_name = newProductName;
      }
  
      const newQuantity = parseInt(prompt('Enter new quantity:', orderData.quantity));
      if (!isNaN(newQuantity)) {
        newOrderData.quantity = newQuantity;
      }
  
      const newPrice = parseFloat(prompt('Enter new price:', orderData.price));
      if (!isNaN(newPrice)) {
        newOrderData.price = newPrice;
      }
  
      
      await axios.put(`http://localhost:8000/orders/${orderId}`, newOrderData);
  
      
      fetchOrders();
    } catch (error) {
      console.error('Error editing order:', error);
    }
  };
  

  const handleDeleteOrder = async (orderId) => {
    try {
      await axios.delete(`http://localhost:8000/orders/${orderId}`);
      setOrders(orders.filter((order) => order.order_id !== orderId));
      console.log('Order deleted successfully.');
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-5">Orders</h1>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer First Name</th>
                <th>Customer Last Name</th>
                <th>Customer Email</th>
                <th>Customer Address</th>
                <th>Store Name</th>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
            {orders.map((order) => (
                <tr key={order.order_id}>
                <td>{order.order_id}</td>
                <td>{order.customer_firstname}</td>
                <td>{order.customer_lastname}</td>
                <td>{order.customer_email}</td>
                <td>{order.customer_address}</td>
                <td>{order.store_name}</td>
                <td>{order.product_id}</td>
                <td>{order.product_name}</td>
                <td>{order.quantity}</td>
                <td>£{order.price}</td>
                <td>
                    <button
                    className="btn btn-primary"
                    onClick={() => handleEditOrder(order.order_id)}
                    >
                    Edit
                    </button>
                    <button
                    className="btn btn-danger ms-2"
                    onClick={() => handleDeleteOrder(order.order_id)}
                    >
                    Delete
                    </button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
)}
</div>
);
};


export default AdminOrders;