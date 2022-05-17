import React, { useState } from "react";

import "../css/ContactForm.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState();
  const [message, setMessage] = useState("");

  const handleInputs = (e) => {};

  return (
    <div className="contact-form-container">
      <form style={{ display: "flex", flexDirection: "column" }}>
        <h1 className="contact-me-heading">Let's Talk</h1>
        <input
          className="contact-input"
          type="text"
          placeholder="Name or Company"
          required
        />
        <input
          className="contact-input"
          type="email"
          placeholder="Email"
          required
        />
        <textarea
          id="contacts-message"
          placeholder="Message.."
          required
        ></textarea>
        <input className="form-btn" type="submit" value="Submit"></input>
      </form>
    </div>
  );
}

export default ContactForm;
