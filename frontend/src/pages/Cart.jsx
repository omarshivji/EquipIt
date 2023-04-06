import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div>
      <h1>Cart</h1>
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
              <button onClick={() => handleRemove(item.product_id)}>Remove from cart</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
