import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SlowScroll from "../components/SlowScroll";
import reactLogo from "../content/images/react-logo.jpg";
import desktop from "../content/images/desktop7.jpg";

const HomePage = () => {
  SlowScroll();

  return (
    <div className="page home-page">
      <div className="home-row row-a">
        <div className="row-filter">
          <div className="blur">
            <div className="home-title">
              <h1>
                Nathan Potter
                <br />
                Web Development
              </h1>
              <h2>Design. Develop. Deploy.</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="home-row">
        <div className="row-image left">
          <img src={reactLogo} />
        </div>
        <div className="home-info right">
          <h2>Custom Websites Built for You</h2>
          <p>
            No two businesses are the same, so I don't believe in one-size-fits-all websites. I
            build custom React websites that are fast, responsive, and designed to match your brand.
            Whether you're starting from scratch or updating an existing site, I'll create something
            that works for you and your audience.
          </p>
        </div>
      </div>
      <div className="home-row row-b">
        <div className="blur">
          <div className="home-info">
            <h2>What I Offer</h2>
            <p>
              From first sketch to final deployment, I help you bring your ideas online with modern
              tools and thoughtful design:
            </p>
            <ul>
              <li>⚛️ Custom React Websites</li>
              <li>📱 Responsive Design for All Devices</li>
              <li>🔌 Third-Party Integrations (Mailchimp, Calendly, etc.)</li>
              <li>🎥 Media-Rich Features (videos, carousels, galleries)</li>
              <li>🔍 SEO-Friendly Code & Structure</li>
              <li>🤝 One-on-One Client Collaboration</li>
            </ul>
            <Link to="/services" className="button1">
              Services
            </Link>
          </div>
        </div>
      </div>
      <div className="home-row">
        <div className="home-info left">
          <h2>My Approach</h2>
          <p>
            A website should do more than just look good. It should load quickly, work smoothly on
            any device, and make it easy for visitors to find what they're looking for.
          </p>
          <p>
            I build websites with clean code, responsive layouts, and accessibility in mind so they
            work well for everyone. From the first conversation to the finished site, my goal is to
            create something that represents your business and gives your visitors a great
            experience.
          </p>
        </div>
        <div className="row-image right">
          <img src={desktop} />
        </div>
      </div>
      <div className="home-row row-c">
        <div className="blur">
          <div className="home-info">
            <h2>Meet the Developer</h2>
            <p>
              I'm Nathan Potter, a freelance web developer who builds clean, responsive websites
              with a focus on your business and your customers. I specialize in custom React
              websites designed to fit your brand and goals.
            </p>
            <Link to="/about" className="button1">
              About
            </Link>
          </div>
        </div>
      </div>
      <div className="home-row">
        <div className="home-info">
          <h2>Ready to Launch Your Site?</h2>
          <p>
            Whether you're starting from scratch or ready for a redesign, I’d love to hear about
            your project.
          </p>
          <Link to="/contact" className="button1">
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
