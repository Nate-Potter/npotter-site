import React, { useEffect } from "react";
import SlowScroll from "../components/SlowScroll";

const HomePage = () => {
  SlowScroll();

  return (
    <div className="page-container">
      <div className="home-page">
        <div className="home-row row-a">
          <div className="row-filter">
            <div className="home-main">
              <div className="home-header">
                <h1 className="home-title">Nathan Potter Web Development</h1>
                <h2 className="home-subtitle">Design. Develop. Deploy.</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="home-row">
          <h2>Custom Websites for Small Businesses & Creatives</h2>
          <p>Build your online presence with clean, modern websites tailored to your vision.</p>
        </div>
        <div className="home-row row-b">
          <p>
            Websites that are fast, functional, and built to grow with you.
            <br />
            - Custom website development with React
            <br />
            - Responsive, mobile-friendly design
            <br />
            - Third-party integrations (mailing lists, eCommerce tools, scheduling calendars, etc.)
            <br />
            - Photo & video galleries, custom event calendars
            <br />
            - Clean, SEO-ready code
            <br />- Personalized support and collaboration
          </p>
        </div>
        <div className="home-row">
          <p>Turning ideas into interactive experiences.</p>
        </div>
        <div className="home-row row-c">
          <p>
            I'm Nathan Potter — a freelance web developer passionate about building fast,
            responsive, and purpose-driven websites. Whether you're a small business owner, a
            creative professional, or a startup ready to launch, I create digital experiences that
            are custom built to your needs. Let’s bring your vision online — with a site that is
            fast, functional, and designed to grow with your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
