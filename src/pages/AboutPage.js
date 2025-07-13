import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="page about-page">
      <div className="blur">
        <div className="glass-container">
          <h1>About Me</h1>
          <div className="about-main">
            <p>
              I’m Nathan Potter — a freelance web developer who brings a hands-on, detail-oriented
              approach to every project.
            </p>
            <p>
              Before transitioning to web development, I spent 8 years crafting custom surfboards at
              a high-end shop, learning the value of precision and tailoring work to each client’s
              needs.
            </p>
            <p>
              I also worked in the restaurant industry, gaining strong communication and
              problem-solving skills through roles in serving and supervising.
            </p>
            <p>
              When I’m not working, I’m a family man who loves spending quality time with my wife,
              daughter, and our two dogs. Whether it’s exploring the outdoors or just relaxing at
              home, family keeps me grounded and inspired.
            </p>
          </div>
          <h4>Ready to bring your project to life?</h4>
          <Link to="/contact" className="button1">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
