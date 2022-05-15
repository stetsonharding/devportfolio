import React from "react";

import "../css/Footer.css";

import SelfPortrait from "../assets/Self_portrait.webp";

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
    </div>
  );
}

export default Footer;
