import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomerNavbar from '../components/CustomerNavbar';
import Footer from '../components/Footer';



const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const handleRemove = (productId) => {
    removeFromCart(productId);
    toast.success('Product has been removed from cart')
  };
  
  return (
    <div className="container">
      <CustomerNavbar />
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="row">
          {cartItems.map((item) => (
            <div key={item.product_id} className="col-sm-12 col-md-6 col-lg-4">
              <div className="card mb-4">
                <img src={item.product_image} alt={item.name} className="card-img-top" />
                <div className="card-body">
                  <h3 className="card-title">{item.name}</h3>
                  <p className="card-text">{item.description}</p>
                  <p>Price: £{item.price}</p>
                  <p>Store: {item.store_name}</p>
                  <button className="btn btn-danger" onClick={() => handleRemove(item.product_id)}>Remove from cart</button>
                </div>
              </div>
            </div>
          ))}
            <div className="col-12">
            <Link to="/checkout" className="btn btn-primary">Continue to checkout</Link>
          </div>
        </div>
      )}
      <ToastContainer/>
      <Footer/>
    </div>
  );
};

export default Cart;
