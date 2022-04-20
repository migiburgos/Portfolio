import React from "react";
import "./contact.css";
import { AiFillLinkedin } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";

const Contact = () => {
  return (
    <div className="contact section__padding" id="contact">
      <h1>Contact Me</h1>
      <p className="contact__subtitle">Get in touch</p>

      <div className="contact__content">
        <div className="contact__sideA">
          <h2>Drop me a line.</h2>
          <h2>I would like to hear from you.</h2>
          <div className="contact__icons">
            <AiFillLinkedin size={25} />
          </div>
        </div>
        <div className="contact__sideB">
          <div className="contact__info-container">
            <input placeholder="Name" />
            <input placeholder="Email" />
          </div>
          <textarea placeholder="Message" />
          <div className="contact__button">
            <p>Send Message</p>
            <IoMdSend size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
