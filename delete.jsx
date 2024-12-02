import React, { useState, useEffect } from "react";
import axios from "axios";
import './delete.css';

const DeleteContent = ({ searchQuery }) => {
  const [contentType, setContentType] = useState("fruits"); // Default to "fruits"
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  // Fetch items (fruits or dairyAndEggs) from the JSON server
  useEffect(() => {
    axios
      .get(`http://localhost:3000/${contentType}`)
      .then((res) => {
        console.log(res.data); // Log response to inspect the data
        setItems(res.data);
        setError(null);
      })
      .catch((err) => {
        console.error(`Error fetching ${contentType}:`, err);
        setError(`Failed to fetch ${contentType}.`);
      });
  }, [contentType]);

  // Function to delete an item by ID
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/${contentType}/${id}`)
      .then(() => {
        setItems(items.filter((item) => item.id !== id)); // Update UI after deletion
        setError(null);
      })
      .catch((err) => {
        console.error(`Error deleting ${contentType}:`, err);
        setError(`Failed to delete ${contentType}. Please try again.`);
      });
  };

  return (
    <div className="mainp">
      
      <div className="cont" style={{marginTop:"160px",maxWidth:"1000px"}}>
        <h2>Delete {contentType === "fruits" ? "Fruits" : "Other Items"}</h2>

        <div className="togg">
          <button
            className={contentType === "fruits" ? "active" : ""}
            onClick={() => setContentType("fruits")}
          >
            Fruits
          </button>

          <button
            className={contentType === "dairyAndEggs" ? "active" : ""}
            onClick={() => setContentType("dairyAndEggs")}
          >
            Dairy & Eggs
          </button>

          <button
            className={contentType === "vegetables" ? "active" : ""}
            onClick={() => setContentType("vegetables")}
          >
            Vegetables
          </button>

          <button
            className={contentType === "meat" ? "active" : ""}
            onClick={() => setContentType("meat")}
          >
            Meat
          </button>

          <button
            className={contentType === "grains" ? "active" : ""}
            onClick={() => setContentType("grains")}
          >
            Grains
          </button>

          <button
            className={contentType === "snacks" ? "active" : ""}
            onClick={() => setContentType("snacks")}
          >
            Snacks
          </button>

          <button
            className={contentType === "drinks" ? "active" : ""}
            onClick={() => setContentType("drinks")}
          >
            Drinks
          </button>
        </div>

        {error && <p className="error">{error}</p>}

        <ul className="cont-list">

          {items.map((item) => (
            <li key={item.id} className="cont-item">
              <div className="cont-info">
                <img
                  src={item.img}
                  alt={item.name}
                  className="cont-image"
                />
                <div>
                  <h4 style={{ color: "white" }}>{item.name}</h4>
                  <p>{item.price}</p>
                </div>
              </div>
              <button className="delete-button" onClick={() => handleDelete(item.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>

        {items.length === 0 && <p>No {contentType} found!</p>}
      </div>
    </div>
  );
};

export default DeleteContent;
