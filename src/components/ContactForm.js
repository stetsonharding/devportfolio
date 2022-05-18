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
      )
      .then(
        () => {
          setMessageSuccess("Message Successfully Sent!");
        },
        () => {
          setMessageError("Error sending message, please try again!");
        }
      );

    e.target.reset();
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={sendEmail}>
        <h1 className="contact-me-heading">Let's Talk</h1>
        <h4 className="contact-success-msg">
          {messageSuccess ? messageSuccess : messageError}
        </h4>
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
          className="contact-input"
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
