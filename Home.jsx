import React from 'react';
import './Home.css'; // Include the CSS file for styles

// Home Component
const Home = () => {
  return (
    <div className="home-container">
      {/* Text Section */}
      <div className="text-section">
        <h1>FRESH GROCERIES AT YOUR DOORSTEPS</h1>
      </div>

      {/* Image Section */}
      <div className="image-section">
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/hungryroot-1658507018.png"
          alt="Fresh Groceries"
          className="groceries-image"
        />
      </div>
    </div>
  );
};

export default Home;
