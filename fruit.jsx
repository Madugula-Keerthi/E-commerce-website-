import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios
import './fruit.css'; 

const Fruit = ({ addToCart }) => {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    axios.get('/db.json') // Fetching data from db.json located in public folder
      .then(response => setFruits(response.data.fruits))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

 

  return (
    <div className="Fruit">
      <br /><br /><br /><br /><br />
      <div className="orange" style={{backgroundColor:"rgb(140, 217, 125)"}}>
      <img src="https://cdn-icons-png.flaticon.com/128/1625/1625048.png" alt="Fruits" style={{height:"70px",width:"70px",margin:"10px", marginTop:"0px"}}/> 
        <span className="orange-text" >Fruits</span>
      </div>

      <div className="fruit-container">
        {fruits.map((fruit) => (
          <div key={fruit.id} className="fruit">
            <img src={fruit.img} alt={fruit.name} style={{height:"100px",width:"100px"}}/> {/* Image dynamically loaded */}
            <div className="fruit-name">{fruit.name}</div>
            <div className="price">₨.{fruit.price}</div>
            <button onClick={() => addToCart(fruit)} style={{backgroundColor:"rgb(93,196,79)"}}>Add to Cart</button> {/* Use addToCart */}          </div>
        ))}
      </div>
    </div>
  );
};

export default Fruit;


