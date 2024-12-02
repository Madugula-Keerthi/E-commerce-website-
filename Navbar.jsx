import React, { useState } from 'react';
import './Navbar.css'; // Include a CSS file for styling if needed
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false); // State to toggle search input visibility

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    // Add your search logic here (e.g., API call, filtering list)
  };

  const toggleSearchInput = () => {
    setIsSearchVisible(!isSearchVisible); // Toggle search input visibility
  };

  return (
    <div className="navbar">
      <div className="navbar-brand">
        <img
          src="https://cdn-icons-png.flaticon.com/128/9716/9716575.png"
          alt="Groceries Logo"
          className="groceries-logo"
          style={{height:'70px', width:'100px'}}
        />
      </div>
      <div className="navbar-menu">
        <Link to="/">Home</Link>
        <Link to="/category">Categories</Link>
        <Link to="/cart">Cart ({cartCount})</Link> 
        <Link to="/crud">CRUD</Link>
        <Link to="/delete">DELETE</Link>
        <Link to="/update">UPDATE</Link>
      </div>
      <div className="navbar-search">
        <button onClick={toggleSearchInput} className="search-button" style={{ margin: '5px' }}>
          Search
        </button>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
          className={`search-input ${isSearchVisible ? 'show' : ''}`} // Toggle 'show' class based on state
        />
      </div>
    </div>
  );
};

export default Navbar;
