import React from "react";

import "../css/Footer.css";

import SelfPortrait from "../assets/Self_portrait.webp";
import ContactForm from "./ContactForm";

function Footer() {
  return (
    <div className="footer-container">
      <div className="self-portrait-container">
        <img
          className="self-portrait"
          src={SelfPortrait}
          alt="Self Portrait of Stetson"
        />
        <pre>&copy; Designed and developed by Stetson Harding</pre>
      </div>
      <div className="footer-contact-form">
        <ContactForm />
      </div>
    </div>
  );
}

export default Footer;
