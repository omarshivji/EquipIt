import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from '../components/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomerNavbar from '../components/CustomerNavbar';
import Footer from '../components/Footer';
// import './Checkout.css'

const Checkout = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  


  
  const handleCheckout = async () => {
    if (firstName === '' || lastName === '' || email === '' || address === '') {
    toast.error('Please fill in all the required fields.');
    return;
  }
    const products = cartItems.map((item) => ({
      product_id: item.product_id.toString(),
      product_name: item.name,
      quantity: 1,
      price: item.price.toString(),
      store_name: item.store_name,
    })
    
    );
  
    const order = {
      customer_firstname: firstName,
      customer_lastname: lastName,
      customer_email: email,
      customer_address: address,
      product_id: products.map((p) => p.product_id).join(','),
      product_name: products.map((p) => p.product_name).join(','),
      quantity: products.map((p) => p.quantity).join(','),
      price: totalPrice.toString(),
      store_name: products.map((p) => p.store_name).join(','),
    };
  
    try {
      const response = await fetch('http://localhost:8000/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
      });
      if (response.ok) {
        console.log('Order successfully placed');
        clearCart();
        toast.success('Order succesfully placed.')
      } else {
        console.error('Failed to place order');
        toast.error('Failed to place order, please try again later')
        window.location.href = '/*';
        
      }
    } catch (error) {
      console.error('Failed to connect to server', error);
      window.location.href = '/*';
    }
  };
  
  
  
  return (
    <div>
      <CustomerNavbar />
      <h1>Checkout</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
             <div key={item.product_id} className="col-sm-12 col-md-6 col-lg-4">
               <div className="card mb-4">
                 <img src={item.product_image} alt={item.name} className="card-img-top" />
                 <div className="card-body">
                   <h3 className="card-title">{item.name}</h3>
                   <p className="card-text">{item.description}</p>
                   <p>Price: £{item.price}</p>
                   <p>Store: {item.store_name}</p>
                 </div>
               </div>
             </div>
          ))}
          <p>Total price: £{totalPrice}</p>
          <div>
            <label htmlFor="firstName" className="label-right">First Name:</label>
            <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div>
            <label htmlFor="lastName" className="label-right">Last Name:</label>
            <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div>
            <label htmlFor="email" className="label-right">Email:</label>
            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor="address" className="label-right">Address:</label>
            <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <button onClick={handleCheckout}>Checkout</button>
        </div>
      )}
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default Checkout;
