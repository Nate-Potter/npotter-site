import React, { useEffect } from "react";
import social from "../data/socialMedia";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import "../utils/icons/fontawesome";

const ContactPage = () => {
  // SlowScroll();

  return (
    <div className="page-container">
      <div className="contact-page">
        <div className="contact-row">
          <div className="contact-main">
            <h1>Start Growing Your Business Today!</h1>
            <p>Insert MailChimp contact form here.</p>
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
