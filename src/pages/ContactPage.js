import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import social from "../data/socialMedia";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import "../utils/icons/fontawesome";
import CopyEmail from "../utils/CopyEmail";

const ContactPage = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
      await fetch("https://formsubmit.co/ndpotter805@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      form.reset();
      navigate("/thank-you");
    } catch (error) {
      console.error("Form submission error:", error);
      setMessage("Oops! Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="page contact-page">
      <div className="blur">
        <div className="glass-container">
          <div className="contact-title">
            <h1>Let’s Bring Your Vision to Life!</h1>
            <h3>
              Whether you need a website, app, or just want to bounce ideas — I’d love to hear from
              you.
            </h3>
          </div>
          <div className="form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />

              <div className="input-row">
                <input type="text" name="FNAME" placeholder="First Name*" required />
                <input type="text" name="LNAME" placeholder="Last Name" />
              </div>
              <div className="input-row">
                <input type="email" name="EMAIL" placeholder="Email*" required />
                <input type="tel" name="PHONE" placeholder="Phone" />
              </div>
              <textarea name="MESSAGE" placeholder="How can I help you?" className="message-box" />
              <button className="button1" type="submit">
                Submit
              </button>
              {message && <p className="error-message">{message}</p>}
            </form>
          </div>
          <ul className="social-buttons">
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
