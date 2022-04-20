import React from "react";
import "./about.css";
import mypic1 from "../../assets/mypic1.png";

const About = () => {
  return (
    <div className="about section__padding" id="about">
      <div className="about__photo">
        <img src={mypic1} alt="mypic1" />
      </div>
      <div className="about__content">
        <h1>About Me</h1>
        <p>
          An inquisitive Computer Science Engineering student, skilled in
          leadership, seeking to leverage solid development skills with focus on
          collaboration, communication and passion.
        </p>
        <button type="button">Download CV</button>
      </div>
    </div>
  );
};

export default About;
