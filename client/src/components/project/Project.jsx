import React from "react";
import "./project.css";
import project1 from "../../assets/project1.png";
import { AiOutlineArrowRight } from "react-icons/ai";

const Project = ({ title, description, image }) => {
  return (
    <div className="project">
      <div className="project__photo">
        <img src={image} alt="project1" />
      </div>
      <div className="project__content">
        <h1 className="paragraph">{title}</h1>
        <p className="project__description paragraph">{description}</p>
        <a href="http://localhost:8000/">
          <div className="project__button">
            <p>Demo</p>
            <AiOutlineArrowRight size={18} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Project;
