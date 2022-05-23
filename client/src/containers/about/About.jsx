import React from "react";
import "./about.css";
import mypic1 from "../../assets/mypic1.png";
import mypic_no_bg_2 from "../../assets/mypic no bg 2.png";
import axios from "axios";
import { FiDownload } from "react-icons/fi";

import { Experience } from "../../components";

const About = () => {
  const openInNewTab = () => {
    const url = "http://localhost:25565/downloadcv";
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  const experiences = [
    { number: "01", details: "Years experience" },
    { number: "05", details: "Completed projects" },
    { number: "02", details: "Companies worked" },
  ];

  return (
    // section__padding
    <div className="about section__padding" id="about">
      <h1 className="title">About Me</h1>
      <h3 className="subtitle">My introduction</h3>
      <div className="about__content">
        <div className="about__photo">
          <img src={mypic_no_bg_2} alt="mypic1" />
        </div>

        <div className="about__details">
          <p className="about__text paragraph">
            An inquisitive Computer Science Engineering student, skilled in
            leadership, seeking to leverage solid development skills with focus
            on collaboration, communication and passion.
          </p>

          <div className="about__experience-container">
            {experiences.map(({ number, details }, i) => (
              <Experience key={i} number={number} details={details} />
            ))}
          </div>

          <div className="about__button-container">
            <div className="about__button" onClick={() => openInNewTab()}>
              <p>Download CV</p>
              <FiDownload size={16} color="#ffffff" />
            </div>
            {/* <button type="button" onClick={() => openInNewTab()}>
              Download CV
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
