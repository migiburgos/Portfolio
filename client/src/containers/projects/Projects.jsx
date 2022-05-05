import React from "react";
import "./projects.css";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";

import { Project } from "../../components";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";

const items = [
  {
    title: "Modern Website",
    description:
      "Website adaptable to all devices, with ui components and animated interactions.",
    image: project1,
    link: "",
  },
  {
    title: "NASA Mission Scheduler",
    description:
      "Website scheduler and history viewer for NASA launch missions.",
    image: project2,
    link: "",
  },
  {
    title: "Pong Multiplayer",
    description: "Play pong multiplayer online with anyone.",
    image: project3,
    link: "",
  },
];

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h1 className="projects__title">Portfolio</h1>
      <p className="projects__subtitle">Most Recent Work</p>
      <Swiper
        // cssMode={true}
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <Project
              title={item.title}
              description={item.description}
              image={item.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
