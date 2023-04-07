import './ProductsPage.css';
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProductsPage.css';
import { CartContext } from '../components/CartContext';




const ProductsPage = () => {

  const { cartItems, addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/products');
      if (Array.isArray(response.data)) {
        setProducts(response.data);
      } else {
        console.error('Unexpected API response format. Expected an array of products.');
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.product_id === product.product_id);
  
    if (existingItem) {
      const updatedCartItems = cartItems.map((item) =>
        item.product_id === product.product_id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      addToCart(updatedCartItems);
    } else {
      addToCart({ ...product, quantity: 1 });
    }
  };
  

  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-5">Products</h1>
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="row">
          {products.map((product) => (
            <div
              key={product.product_id}
              className="col-md-4 mb-4"
              onMouseEnter={() => setHoveredCard(product)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card h-100">
                <img
                  src={product.product_image}
                  alt={product.name}
                  className={`card-img-top ${hoveredCard === product ? 'expanded' : ''}`}
                />
                <div className="card-body">
                  <h3 className="card-title">{product.name}</h3>
                  <p className="card-text">{product.description}</p>
                  <p>Price: £{product.price}</p>
                  <p>Store: {product.store_name}</p>
                  <button onClick={() => handleAddToCart(product)} className="btn btn-primary mt-2">
                      Add to Cart
                 </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
