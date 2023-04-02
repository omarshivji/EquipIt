import React, { useState, useEffect } from 'react';
import axios from "axios";
import Card from 'react-bootstrap/Card';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getAllProducts = async () => {
    try {
      const response = await axios.get("localhost:8000/products");
      console.log("Response data:", response.data);
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  if (loading) {
    return <div><h1>Loading...</h1></div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      {products.map(product => (
        <Card key={product.product_id}>
          <Card.Img variant="top" src={product.product_image} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>{product.price}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ProductsPage;
