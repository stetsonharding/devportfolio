import React from "react";

import "../css/Contact.css";

import SelfPortrait from "../assets/Self_portrait.webp";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="contact-container">
      <div className="self-portrait-container">
        <img
          className="self-portrait"
          src={SelfPortrait}
          alt="Self Portrait of Stetson"
        />
        {/* <pre>&copy; Designed and developed by Stetson Harding</pre> */}
      </div>
      <div className="contact-form">
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
