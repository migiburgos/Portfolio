import React from "react";
import "./projects.css";
import mypic1 from "../../assets/mypic1.png";

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
    link: "",
  },
  {
    title: "Modern Website",
    description:
      "Website adaptable to all devices, with ui components and animated interactions.",
    link: "",
  },
  {
    title: "Modern Website",
    description:
      "Website adaptable to all devices, with ui components and animated interactions.",
    link: "",
  },
];

const Projects = () => {
  return (
    <div className="projects section__padding" id="projects">
      <h1 className="projects__title">Portfolio</h1>
      <p className="projects__subtitle">Most Recent Work</p>
      <Swiper
        // cssMode={true}
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {items.map((item) => (
          <SwiperSlide>
            <Project title={item.title} description={item.description} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
