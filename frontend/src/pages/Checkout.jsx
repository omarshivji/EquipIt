import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h1>Checkout</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.product_id}>
              <h3>{item.name}</h3>
              <img src={item.product_image} alt={item.name} />
              <p>{item.description}</p>
              <p>Price: £{item.price}</p>
            </div>
          ))}
          <p>Total price: £{totalPrice}</p>
          <button>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
