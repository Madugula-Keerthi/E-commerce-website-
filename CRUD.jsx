import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./crud.css";

const CreateItem = () => {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemImage, setItemImage] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('fruits');
  const [nextId, setNextId] = useState(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch the current items to calculate the next ID
  useEffect(() => {
    const fetchNextId = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/${selectedCategory}`);
        const items = response.data;
        const maxId = items.length
          ? Math.max(...items.map((item) => parseInt(item.id, 10)))
          : 0;
        setNextId((maxId + 1).toString());
      } catch (err) {
        console.error('Error fetching items:', err);
        setError('Error fetching items. Please try again later.');
      }
    };

    fetchNextId();
  }, [selectedCategory]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!itemName || !itemPrice || !itemImage || nextId === null) {
      alert('Please fill all fields and wait for ID generation!');
      return;
    }

    const newItem = {
      id: nextId,
      name: itemName,
      price: itemPrice,
      img: itemImage,
    };

    try {
      const response = await axios.post(`http://localhost:3000/${selectedCategory}`, newItem);
      console.log('Item added:', response.data);
      setSuccess(true);
      setError(null);
      setItemName('');
      setItemPrice('');
      setItemImage('');
      setNextId(null); // Reset nextId to trigger recalculation
      navigate(`/${selectedCategory}`);
    } catch (err) {
      console.error('Error adding item:', err);
      setError('Error adding item. Check your server connection.');
    }
  };

  return (
    <div className="full">
      <div className="contt">
        <h2>Create New Item</h2>
        <form onSubmit={handleSubmit}>
          <div className="fg">
            <label>Item Name:</label>
            <input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              required
            />
          </div>
          <div className="fg">
            <label>Item Price:</label>
            <input
              type="text"
              value={itemPrice}
              onChange={(e) => setItemPrice(e.target.value)}
              required
            />
          </div>
          <div className="fg">
            <label>Item Image URL:</label>
            <input
              type="url"
              value={itemImage}
              onChange={(e) => setItemImage(e.target.value)}
              required
            />
          </div>
          <div className="fg">
            <label>Category:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="fruits">Fruits</option>
              <option value="dairyAndEggs">Dairy & Eggs</option>
              <option value="vegetables">Vegetables</option>
              <option value="snacks">Snacks</option>
              <option value="drinks">Drinks</option>
            </select>
          </div>
          <button className="btna" type="submit">Create Item</button>
        </form>
        {success && <p className="message success">Item added successfully!</p>}
        {error && <p className="message error">{error}</p>}
      </div>
    </div>
  );
};

export default CreateItem;
