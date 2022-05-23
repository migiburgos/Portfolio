import React, { useEffect, useState } from "react";
import "./contact.css";
import { AiFillLinkedin } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";

import { Loading } from "../../components";

const axios = require("axios").default;

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const sendEmail = async () => {
    setLoading(true);
    if (name === "" || email === "" || message === "") {
      alert("Please enter a name, email, and message");
      setLoading(false);
      return;
    }

    if (!verifyEmail(email)) {
      alert("Please enter a valid email");
      setLoading(false);
      return;
    }

    try {
      await axios.post("http://89.211.208.143:25565/sendEmail", {
        name,
        email,
        message,
      });
      setLoading(false);
    } catch (err) {
      alert("Failed to send email");
      setLoading(false);
    }
  };

  const verifyEmail = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    // section__padding
    <div className="contact section__padding" id="contact">
      <h1 className="title">Contact Me</h1>
      <p className="subtitle">Get in touch</p>

      <div className="contact__content">
        <div className="contact__sideA">
          <h2>Drop me a line.</h2>
          <h2>I would like to hear from you.</h2>
          <div className="contact__icons">
            <AiFillLinkedin size={25} />
          </div>
        </div>

        <div className="contact__sideB">
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="contact__button-container">
            <div
              className={`contact__button${
                loading ? " contact__button--loading" : ""
              }`}
              onClick={sendEmail}
              disa
            >
              <p>{loading ? "Loading" : "Send Message"}</p>
              <IoMdSend size={18} />
            </div>
          </div>
        </div>
      </div>
      {/* {loading && <Loading />} */}
    </div>
  );
};

export default Contact;
