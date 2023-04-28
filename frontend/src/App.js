import React from 'react';
import { useState, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/HomePage.jsx';
import About from './pages/AboutPage.jsx';
import LoginPage from './pages/LoginPage';
import Contact from './pages/Contact.jsx';
import ProductsPage from './pages/ProductsPage';
import RegisterPage from './pages/RegisterPage';
import Cart from './pages/Cart';
import CartProvider from './components/CartContext';
import AdminOrders from './pages/AdminOrders';
import { CartContext } from './components/CartContext';
import ProductContextProvider from './components/ProductContext';
import Checkout from './pages/Checkout';
import AdminCustomers from './pages/AdminCustomers';
import AdminStores from './pages/AdminStores';
import Error404 from './pages/Error404';




function App() {
  const { cartItems, addToCart } = useContext(CartContext);


  return (
    <CartProvider>
      <ProductContextProvider>
    <Router> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/orders" element={<AdminOrders/>} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/customers" element={<AdminCustomers />} />
          <Route path="/stores" element={<AdminStores />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
    </Router>
    </ProductContextProvider>
    </CartProvider>
    

  );
}

export default App;
