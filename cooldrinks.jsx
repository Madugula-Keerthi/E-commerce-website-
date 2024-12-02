import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios

const Drinks = ({ addToCart }) => {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    axios.get('/db.json') // Fetching data from db.json located in public folder
      .then(response => setDrinks(response.data.drinks))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="Fruit">
      <br /><br /><br /><br /><br />
      <div className="orange" style={{backgroundColor:"rgb(223,170,170)"}}>
      <img src="https://cdn-icons-png.flaticon.com/128/2934/2934932.png" alt="Fruits" style={{height:"70px",width:"70px",margin:"10px", marginTop:"0px"}}/> 
        <span className="orange-text">Drinks</span>
      </div>

      <div className="fruit-container">
        {drinks.map((item) => (
          <div key={item.id} className="fruit">
            <img src={item.img} alt={item.name} style={{height:"100px",width:"100px"}} />
            <div className="fruit-name">{item.name}</div>
            <div className="price">₨.{item.price}</div>
            <button onClick={() => addToCart(item)} style={{backgroundColor:"rgb(204,138,138)"}}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Drinks;
