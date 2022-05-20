import React from "react";

import "../css/Contact.css";

import SelfPortrait from "../assets/Self_portrait.webp";
import ContactForm from "./ContactForm";

function Contact({ contactRef }) {
  return (
    <div className="contact-container" ref={contactRef}>
      <div className="self-portrait-container">
        <img
          className="self-portrait"
          src={SelfPortrait}
          alt="Self Portrait of Stetson"
        />
        <div className="contact-socials">
          <a
            href="https://www.linkedin.com/in/stetson-harding-796095171/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/stetsonharding"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
      <div className="contact-form">
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
