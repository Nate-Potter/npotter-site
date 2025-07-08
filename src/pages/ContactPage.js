import React, { useEffect, useState } from "react";
import social from "../data/socialMedia";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import "../utils/icons/fontawesome";
import CopyEmail from "../utils/CopyEmail";

const ContactPage = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    // Prevent page from refreshing on the submission
    event.preventDefault();

    try {
      const response = await fetch("", {
        method: "POST",
        body: new FormData(event.target),
      });
    } catch (error) {
      console.error("Form submission error:", error);
      // Handle error, display error message, or log the error
    }
  };

  const thankYou = () => {
    setMessage("Thank you for your submission!");
  };

  return (
    <div className="page-container">
      <div className="contact-page">
        <div className="contact-main">
          <div className="contact-title">
            <h1>Let’s Bring Your Vision to Life!</h1>
            <h3>
              Whether you need a website, app, or just want to bounce ideas — I’d love to hear from
              you.
            </h3>
          </div>
          <div className="form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="input-row">
                <input type="text" name="FNAME" placeholder="First Name*" required />
                <input type="text" name="LNAME" placeholder="Last Name" />
              </div>
              <div className="input-row">
                <input type="email" name="EMAIL" placeholder="Email*" required />
                <input type="tel" name="PHONE" placeholder="Phone" />
              </div>
              <textarea name="MMERGE5" placeholder="How can I help you?" className="message-box" />
              <button onClick={thankYou} className="contact-submit" type="submit">
                Submit
              </button>
              {message}
            </form>
          </div>
          <ul className="social-buttons">
            <li>
              <a href={social.google} target="_blank" rel="noopener noreferrer">
                <Icon icon="fa-brands fa-google" className="social-icons google" />
              </a>
            </li>
            <li>
              <a href={social.github} target="_blank" rel="noopener noreferrer">
                <Icon icon="fa-brands fa-github" className="social-icons github" />
              </a>
            </li>
            <li>
              <a onClick={CopyEmail} target="_blank" rel="noopener noreferrer">
                <Icon icon="fa-regular fa-envelope" className="social-icons envelope" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
