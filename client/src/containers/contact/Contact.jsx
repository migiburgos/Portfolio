import React from "react";
import "./contact.css";
import { AiFillLinkedin } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";

const Contact = () => {
  return (
    // section__padding
    <div className="contact" id="contact">
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
          <input placeholder="Name" />
          <input placeholder="Email" />
          <textarea placeholder="Message" />
          <div className="contact__button-container">
            <div className="contact__button">
              <p>Send Message</p>
              <IoMdSend size={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
