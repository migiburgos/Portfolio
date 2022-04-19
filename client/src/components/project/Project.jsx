import React from "react";
import "./project.css";
import project1 from "../../assets/project1.png";
import { AiOutlineArrowRight } from "react-icons/ai";

const Project = ({ title, description }) => {
  return (
    <div className="project">
      <div className="project__photo">
        <img src={project1} alt="project1" />
      </div>
      <div className="project__content">
        <h1>{title}</h1>
        <p className="project__description">{description}</p>
        <div className="project__button">
          <p>Demo</p>
          <AiOutlineArrowRight size={18} />
        </div>
      </div>
    </div>
  );
};

export default Project;
