import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menu = () => (
  <>
    <p>
      <a href="#home">Home</a>
    </p>
    <p>
      <a href="#about">About Me</a>
    </p>
    <p>
      <a href="#projects">Projects</a>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar__links">
        <div className="navbar__logo">
          <p>LOGO</p>
        </div>
        <div className="navbar__links-container">
          <Menu />
        </div>
      </div>

      <a href="#contact">
        <div className="navbar__contact">
          <button type="button">Contact me</button>
        </div>
      </a>
    </div>
  );
};

export default Navbar;
