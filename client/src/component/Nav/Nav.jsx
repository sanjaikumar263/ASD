import React, { useState } from "react";
import { asssts } from "../../assets/assets";
import "./Nav.css";

const Nav = () => {
  const [menu, setMenu] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="nav-bar bg-black py-3 d-flex justify-content-between align-items-center">
        <div className="logo">
          <img src={asssts.logo} alt="logo" />
        </div>
        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-list d-flex justify-content-around align-items-center">
            <li
              className="nav-item"
              onClick={() => setMenu("Home")}
              style={{
                color: menu === "Home" ? "orange" : "inherit",
                fontWeight: menu === "Home" ? 600 : 200,
              }}
            >
              {menu === "Home" ? "🪖 Home" : "Home"}
            </li>
            <li
              className="nav-item"
              onClick={() => setMenu("About")}
              style={{
                color: menu === "About" ? "orange" : "inherit",
                fontWeight: menu === "About" ? 600 : 200,
              }}
            >
              {menu === "About" ? "🪖 About" : "About"} 
            </li>
            <a href="#product"><li
              className="nav-item"
              onClick={() => setMenu("Product")}
              style={{
                color: menu === "Product" ? "orange" : "white",
                fontWeight: menu === "Product" ? 600 : 200,
                 
              }}
            >
              {menu === "Product" ? "🪖 Products" : "Products"}
            </li></a>
           <a href="">
           <button className="btn btn-warning px-4">Contact</button>            
            </a> 
          </ul>
        </div>
        <div className="contact">
        
        </div>
        <button className="menu" onClick={handleMenuClick}>
          ☰
        </button>
      </nav>
    </div>
  );
};

export default Nav;
