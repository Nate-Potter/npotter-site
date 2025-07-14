import React from "react";
import { Link } from "react-router-dom";

const ThankYouPage = () => {
  return (
    <div className="page contact-page">
      <div className="blur">
        <div className="glass-container">
          <div className="contact-title">
            <h1>Thank You for Reaching Out!</h1>
            <h3>
              Your message is in! I’ll get back to you shortly. Looking forward to collaborating and
              bringing your vision to life!
            </h3>
          </div>
          <Link to="/" className="button1">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
