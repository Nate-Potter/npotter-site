import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import "../utils/icons/fontawesome";
import social from "../data/socialMedia";
import logo from "../content/images/npotter-logo.jpg";
import CopyEmail from "../utils/CopyEmail";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="site-header">
      {/* Mobile Menu Button */}
      <div className="mobile-menu-button" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <p></p> // "x" icon when mobile menu is open -- 9932 for the X icon, currently squished sandwich
        ) : (
          <p>&#8801;</p> // bars icon when mobile menu is closed     &#8942;   ⋮  &#8801;
        )}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="mobile-menu">
          <div className="mobile-menu-close-button" onClick={toggleMobileMenu}>
            <p>&#9932;</p> {/* "x" icon to close the mobile menu */}
          </div>
          <ul className="navbar-options">
            <li>
              <Link to="/" className="link" onClick={toggleMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="link" onClick={toggleMobileMenu}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link" onClick={toggleMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}

      {/* Desktop Navigation */}
      <nav className="header-bar">
        <div className="site-logo">
          <p>{">NPotter"}</p>
        </div>
        <div className="navigation">
          <ul className="navbar-links">
            <li>
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="link">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link">
                Contact
              </Link>
            </li>
          </ul>
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
      </nav>
    </div>
  );
};

export default Header;
