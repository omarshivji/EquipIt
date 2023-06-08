import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from '../components/CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomerNavbar from '../components/CustomerNavbar';
import Footer from '../components/Footer';
import './Checkout.css'

const Checkout = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [houseroadname, setHouseroadname] = useState('');
  const [postcode, setPostcode] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  


  
  const handleCheckout = async () => {
    if (firstName === '' || lastName === '' || email === '' || houseroadname === '' || postcode === '' || city === '' || country === '') {
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
      customer_addressline: houseroadname,
      customer_postcode: postcode,
      customer_city: city,
      customer_country: country,
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
  <div className="checkout-container">
    <CustomerNavbar />
    <div className="checkout-content">
      <h1 className="checkout-heading">Checkout</h1>
      {cartItems.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
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
          <p className="checkout-total">Total price: £{totalPrice}</p>
          <div className="checkout-form">
            <div className="form-row">

              <label htmlFor="firstName" className="label-right">First Name:</label>
              <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className="form-row">
              <label htmlFor="lastName" className="label-right">Last Name:</label>
              <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className="form-row">
              <label htmlFor="email" className="label-right">Email:</label>
              <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-row">
              <label htmlFor="address" className="label-right">Address Line:</label>
              <input type="text" id="address" value={houseroadname} onChange={(e) => setHouseroadname(e.target.value)} />
            </div>
            <div className="form-row">
              <label htmlFor="postcode" className="label-right">Postcode:</label>
              <input type="text" id="postcode" value={postcode} onChange={(e) => setPostcode(e.target.value)} />
            </div>
            <div className="form-row">
              <label htmlFor="city" className="label-right">City:</label>
              <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} />
            </div>
            <div className="form-row">
              <label htmlFor="country" className="label-right">Country:</label>
              <input type="text" id="country" value={country} onChange={(e) => setCountry(e.target.value)} />
            </div>
            <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
          </div>
        </div>
      )}
    </div>
    <ToastContainer />
    <Footer />
  </div>
);
};

export default Checkout;
