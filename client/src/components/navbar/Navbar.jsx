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

      <div className="navbar__contact">
        <a href="#contact">
          <button type="button">Contact me</button>
        </a>
      </div>

      <div className="navbar__menu">
        {toggleMenu ? (
          <RiCloseLine size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line size={27} onClick={() => setToggleMenu(true)} />
        )}

        {toggleMenu && (
          <div className="navbar__menu-container scale-up-center">
            <div className="navbar__list">
              <Menu />
              <a href="#contact">
                <button type="button">Contact me</button>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
