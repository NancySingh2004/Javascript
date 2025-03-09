import logo from "../assets/logo.png";
import { useState,useEffect } from "react";
import './Navbar.css';

export const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode class on body element
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo-image" />
        <span>CODERS & DEVELOPERS CLUB</span>
      </div>
      <ul className="navbar-links">
        <li><a href="">HOME</a></li>
        <li><a href="">CONTACT</a></li>
        <li><a href="">TEAM</a></li>
        <li><a href="">EVENT</a></li>
        <li><a href="">VERIFY</a></li>
      </ul>
      <div className="navbar-right">
        <span className="login-button"><a href="">LOGIN</a></span>
        <input type="checkbox" className="toggle-switch"    checked={isDarkMode} 
          onChange={handleToggle}  />
      </div>
    </nav>
  );
};    