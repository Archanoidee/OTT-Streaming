import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa'; // FontAwesome icon for Watchlist
import './Navbar.css'; // CSS for Navbar
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
const handleLogout=()=>{
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  navigate('/login');
}
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="navbar-logo">
          <h2 style={{color:'red'}}>VTUBE FIX</h2>
        </div>

        {/* Hamburger Menu for small devices */}
        <div className="navbar-menu-icon" onClick={toggleMenu}>
          <i className="bi bi-list"></i> {/* Add proper icon from Bootstrap Icons */}
        </div>

        {/* Navigation Links */}
        <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link to="/movieList" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/WatchHistory" className="navbar-link">Watch History</Link>
          </li>
          <li className="navbar-item">
            <Link to="/watchlist" className="navbar-link">
              <FaHeart className="heart-icon" /> Watchlist
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/resetPswd" className="navbar-link">Profile</Link>
          </li>
          <li className="navbar-item">
            <Link onClick={handleLogout} className="navbar-link">Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
