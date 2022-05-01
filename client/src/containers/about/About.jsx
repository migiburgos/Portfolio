import React from "react";
import "./about.css";
import mypic1 from "../../assets/mypic1.png";
import axios from "axios";

const About = () => {
  const downloadCV = (e) => {
    console.log("download");
    // fetch("http://localhost:25565/cv");
    window.open("http://localhost:25565/cv", "_blank", "noopener,noreferrer");
    // const fileName = "CV Jose Miguel Burgos.pdf";
    // axios({
    //   method: "get",
    //   url: "http://localhost:25565/cv/",
    //   responseType: "blob",
    //   headers: {},
    // })
    //   .then((res) => {
    //     const url = window.URL.createObjectURL(new Blob([res.data]));
    //     const link = document.createElement("a");
    //     link.href = url;
    //     link.setAttribute("download", fileName);
    //     document.body.appendChild(link);
    //     link.click();
    //   })
    //   .catch((error) => {
    //     alert(error);
    //   });
    console.log("hello");
  };

  const openInNewTab = () => {
    const url = "http://localhost:25565/downloadcv";
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

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
        <div className="about__button">
          <button type="button" onClick={() => openInNewTab()}>
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
