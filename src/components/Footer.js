import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import "../utils/icons/fontawesome";
import CopyEmail from "../utils/CopyEmail";
import social from "../data/socialMedia";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="site-footer">
        <h1>
          Nathan Potter
          <br />
          Web Development
        </h1>
        <div className="footer-top">
          <div className="footer-column col1">
            <p>Design.</p>
            <p>Develop.</p>
            <p>Deploy.</p>
          </div>
          <div className="footer-column col2">
            <ul className="footer-navigation">
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="link">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="link">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/about" className="link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/app" className="link">
                  App
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-column col3">
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
        <label className="copyright">
          © 2025 Nathan Potter Web Development · npotter.com · All rights reserved.
        </label>
      </div>
    </div>
  );
};
export default Footer;
