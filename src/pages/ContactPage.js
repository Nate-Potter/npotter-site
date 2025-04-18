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
            <h1>We'd Love to See You Soon!</h1>
            <p className="address">996 Lawrence Drive #103</p>
            <p>Newbury Park, CA 91320</p>
            <p>Monday - Friday : 6:30am - 2:00pm</p>
            <p>Saturday & Sunday : 7:00am - 2:00pm</p>
            <p>SideStreetCafe805@gmail.com</p>
            <p>(805) 499-9323</p>
            <ul className="social-buttons">
              <li>
                <a href={social.yelp} target="_blank" rel="noopener noreferrer">
                  <Icon icon="fa-brands fa-yelp" className="social-icons yelp" />
                </a>
              </li>
              <li>
                <a href={social.google} target="_blank" rel="noopener noreferrer">
                  <Icon icon="fa-brands fa-google" className="social-icons google" />
                </a>
              </li>
              <li>
                <a href={social.facebook} target="_blank" rel="noopener noreferrer">
                  <Icon icon="fa-brands fa-facebook-f" className="social-icons facebook" />
                </a>
              </li>
              <li>
                <a href={social.instagram} target="_blank" rel="noopener noreferrer">
                  <Icon icon="fa-brands fa-instagram" className="social-icons instagram" />
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
