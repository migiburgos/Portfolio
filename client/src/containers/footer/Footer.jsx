import React from "react";
import "./footer.css";
import { AiFillLinkedin } from "react-icons/ai";

const Menu = () => (
  <>
    <p>
      <a href="#about">About Me</a>
    </p>
    <p>
      <a href="#projects">Portfolio</a>
    </p>
    <p>
      <a href="#contact">Contact Me</a>
    </p>
  </>
);

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="sideA">
          <div>
            <h1>Jose</h1>
            <p>Full-stack developer</p>
          </div>
        </div>
        <div className="sideB">
          <div className="footer_links-container">
            <Menu />
          </div>
        </div>
        <div className="sideC">
          <AiFillLinkedin size={25} />
        </div>
      </div>
      <p>@2022 Jose Miguel Burgos. All rights reserved.</p>
    </div>
  );
};

export default Footer;
