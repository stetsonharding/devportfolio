import React, { useState } from "react";

import "../css/ContactForm.css";
import emailjs from "emailjs-com";

function ContactForm() {
  const [messageSuccess, setMessageSuccess] = useState("");
  const [messageError, setMessageError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bmclose",
        "template_9ycbt7l",
        e.target,
        "user_OcADP2ZtNbUvQnfGd1atQ"
        //Q
      )
      .then(
        () => {
          setMessageSuccess("Message Successfully Sent!");
        },
        () => {
          setMessageError("Error sending your message, please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <div className="contact-form-container">
      <form
        onSubmit={sendEmail}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h1 className="contact-me-heading">Let's Talk</h1>
        <h5 style={{ paddig: "0", margin: "0", textAlign: "center" }}>
          {messageSuccess ? messageSuccess : messageError}
        </h5>
        <input
          className="contact-input"
          type="text"
          placeholder="Name or Company"
          name="name"
          required
        />
        <input
          className="contact-input"
          type="email"
          placeholder="Email"
          required
          name="email"
        />
        <textarea
          id="contacts-message"
          placeholder="Message.."
          required
          name="message"
        ></textarea>
        <input className="form-btn" type="submit" value="Send"></input>
      </form>
    </div>
  );
}

export default ContactForm;
