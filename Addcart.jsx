import React from 'react';
import './addcart.css';

const Addcart = ({ cart, onRemove }) => {
  return (
    <div className="Addcart" style={{marginTop:"160px"}}>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.img} alt={item.name} style={{ height: '50px', width: '50px' }} />
              <div className="cart-item-details">
                <span>{item.name}</span>
                <span>₨.{item.price}</span>
              </div>
              <button className="remove-button" onClick={() => onRemove(index)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Addcart;
