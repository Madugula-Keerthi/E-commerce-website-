import React, { useState, useEffect } from "react";
import axios from "axios";
import './update.css';  // You can add your own styling

const UpdateContent = ({ match }) => {
  const [contentType, setContentType] = useState("fruits"); // Default category
  const [item, setItem] = useState({ name: "", price: "", img: "" }); // State to hold item data
  const [error, setError] = useState(null);

  // Fetch the item to be updated when the component mounts
  useEffect(() => {
    const { id } = match.params;  // Retrieve the id from URL params (using react-router)
    axios
      .get(`http://localhost:3000/${contentType}/${id}`)
      .then((res) => {
        setItem(res.data);  // Pre-fill the form with the current item data
        setError(null);
      })
      .catch((err) => {
        console.error(`Error fetching item:`, err);
        setError("Failed to fetch the item to update.");
      });
  }, [contentType, match.params]); // Dependencies

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const { id } = match.params;
    
    // Send the updated data to the server
    axios
      .put(`http://localhost:3000/${contentType}/${id}`, item)
      .then(() => {
        alert("Item updated successfully!");
      })
      .catch((err) => {
        console.error("Error updating item:", err);
        setError("Failed to update item. Please try again.");
      });
  };

  return (
    <div className="update-page">
      <div className="conttt">
        <h2>Update {contentType === "fruits" ? "Fruits" : "Other Items"}</h2>

        {/* Category Selection */}
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

        {/* Error Message */}
        {error && <p className="error">{error}</p>}

        {/* Update Form */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={item.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              id="price"
              name="price"
              value={item.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="img">Image URL</label>
            <input
              type="text"
              id="img"
              name="img"
              value={item.img}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="update-button">
            Update Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateContent;
