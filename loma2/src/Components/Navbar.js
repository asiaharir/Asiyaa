import React from "react";
import "./Navbar.css";
import logoImage from './assets/logo.png'; // Ensure you replace this with the correct path to your logo image

const Navbar = () => {
  return (
    <nav className="navbar fixed-top">
      <div className="logo">
        <img src={logoImage} alt="Loma HD" className="logo-image" />
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#cart">📷</a></li>
      </ul>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
    </nav>
  );
};

export default Navbar;
