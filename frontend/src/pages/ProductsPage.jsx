import React, { useEffect, useState } from 'react';
import axios from "axios";
//import Card from 'react-bootstrap/Card';

const ProductsPage = () => {
  const [listProducts, setListProducts] = useState([]);
  //const [loading, setLoading] = useState(true);
  //const [error, setError] = useState(null);

  // const getAllProducts = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:8000/products");
  //     console.log("Response data:", response.data); // Check the response data
  //     if (Array.isArray(response.data)) { // Make sure response data is an array
  //       setProducts(response.data);
  //     } else {
  //       console.error("Response data is not an array:", response.data);
  //       setError("Unexpected response data format");
  //     }
  //     setLoading(false);
  //   } catch (error) {
  //     setError(error.message);
  //     setLoading(false);
  //   }
  // };
  

  useEffect(() => {
    axios.get("http://localhost:8000/products").then((response) => {
      // Check if the response data is an array before setting the state
      if (Array.isArray(response.data)) {
        setListProducts(response.data);
      } else {
        console.error("Response data is not an array:", response.data);
      }
    });
  }, []);

  
  // useEffect(() => {
  //   axios.get("http://localhost:8000/products").then((response) => {
  //     setListProducts(response.data);
  //   });
  // }, []);
  return (
    <div className="App">
      {listProducts.map((value, key) => {
        return (
          <div className="post">
            <div className="title"> {value.name} </div>
            <div className="body">{value.description}</div>
            <div className="footer">{value.price}</div>
          </div>
        );
      })}
    </div>
  );
}

  

  // if (loading) {
  //   return <div><h1>Loading...</h1></div>;
  // }

  // if (error) {
  //   return <div>{error}</div>;
  // }

  // return <div className="container"> {listProducts.map((value, key ) => {
  //   return <Card style={{ width: '18rem' }}>
  //   <Card.Img variant="top" src={value.product_image} />
  //   <Card.Body>
  //     <Card.Title>{value.name}</Card.Title>
  //     <Card.Text>
  //       {value.description}
  //     </Card.Text>
  //   </Card.Body>
  //   <Card.Footer>
  //     <small className="text-muted">Price: {value.price}</small>
  //   </Card.Footer>
  // </Card>
  // })} </div>;

  

export default ProductsPage;