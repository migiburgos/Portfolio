import React from "react";
import "./navbar.css";

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
  return (
    <div className="navbar section__padding">
      <div className="navbar__links">
        <div className="navbar__logo">
          <p>LOGO</p>
        </div>
        <div className="navbar__links-container">
          <Menu />
        </div>
      </div>

      <button type="button">Contact me</button>
    </div>
  );
};

export default Navbar;
