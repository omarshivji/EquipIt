import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products_api')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err));
  }, []);

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
}

export default ProductsPage;
