import React from "react";
import "./header.css";
import mypic1 from "../../assets/mypic1.png";
import mypic2 from "../../assets/mypic2.png";
import { BsFillPersonFill, BsFillEyeFill } from "react-icons/bs";

const Header = () => {
  return (
    <div className="header">
      <div className="header__content">
        <h2>Hello, I'm</h2>
        <h1>Jose Miguel C. Burgos</h1>
        <p className="header__description">
          Freelance UI designer, Fullstack developer, & Data Miner. I create
          seamless web experiences for end-users.
        </p>
        <div className="header__buttons-container">
          <div className="header__buttons-button">
            <p>About me</p>
            <BsFillPersonFill size={16} />
          </div>
          <div className="header__buttons-button">
            <p>Projects</p>
            <BsFillEyeFill size={16} />
          </div>
        </div>
      </div>

      <div className="header__pic">
        <img src={mypic2} alt="mypic1" />
      </div>
    </div>
  );
};

export default Header;
