import React, { useState } from "react";
import { Logo } from "./Logo";
import { NavLink } from "react-router-dom";
import { ShoppingCart } from "./ShoppingCart";
import "./NavBar.css"

export const NavBar: React.FC = () => {
  const navItems = {
    "": "Home",
    "about": "About Us",
    "suppliers": "Our Suppliers",
    "products": "Products",
    "contact": "Contact Us",
  };

  const [displayNavMenuClass, setDisplayNavMenuClass] = useState("")

  return (
    <div>
      <nav className="d-flex align-items-center w-100">
        <Logo />

        <ul id="nav-menu" className={`${displayNavMenuClass} d-flex nav-items-list`}>
          {Object.entries(navItems).map(([k, v]) => (
            <li key={k}>
              <NavLink exact className="nav-bar-link" to={k} onClick={() => setDisplayNavMenuClass("")}>{v}</NavLink>
            </li>
          ))}
        </ul>

        <ShoppingCart />

        <img
          src="assets/images/profile Image (1).png"
          alt="Profile"
          className="profile-icon"
        />

        <div className="burger-icon" onClick={() => setDisplayNavMenuClass(displayNavMenuClass? "": "nav-items-list-display")}>
          <div></div>
          <div></div>
          <div></div>
        </div>

      </nav>
    </div>
  );
};
