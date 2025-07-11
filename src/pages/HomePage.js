import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SlowScroll from "../components/SlowScroll";
import reactLogo from "../content/images/react-logo.jpg";
import desktop from "../content/images/desktop7.jpg";

const HomePage = () => {
  SlowScroll();

  return (
    <div className="page-container">
      <div className="home-page">
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
              Your business is unique — your website should be too. I build fast, responsive, and
              accessible React-based websites that showcase what makes you special. Whether you need
              a simple landing page or a full portfolio site, I’ll craft a solution that fits your
              brand, goals, and audience.
            </p>
          </div>
        </div>
        <div className="home-row row-b">
          <div className="blur">
            <div className="home-info">
              <h2>What I Offer</h2>
              <p>
                From first sketch to final deployment, I help you bring your ideas online with
                modern tools and thoughtful design:
              </p>
              <ul>
                <li>⚛️ Custom React Websites</li>
                <li>📱 Responsive Design for All Devices</li>
                <li>🔌 Third-Party Integrations (Mailchimp, Calendly, etc.)</li>
                <li>🎥 Media-Rich Features (videos, carousels, galleries)</li>
                <li>🔍 SEO-Friendly Code & Structure</li>
                <li>🤝 One-on-One Client Collaboration</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="home-row">
          <div className="home-info left">
            <h2>My Approach</h2>
            <p>
              A great website shouldn’t just look good — it should *do* good work. That means fast
              load times, smooth interactions, and thoughtful design that guides your users where
              they need to go.
            </p>
            <p>
              I prioritize clean code, mobile-first responsiveness, and accessibility to make sure
              your site performs well for everyone. Every project starts with clear communication
              and a shared goal: helping your audience connect with your brand.
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
                I'm Nathan Potter — a freelance web developer with a background in craftsmanship and
                client-first service. Before code, I spent 8 years building custom surfboards — so I
                understand how to blend precision with creativity. Now I bring that same mindset to
                the web, helping small businesses and creatives launch beautiful, functional sites
                that grow with them.
              </p>
            </div>
          </div>
        </div>
        <div className="home-row">
          <div className="home-info">
            <h2>Ready to Launch Your Site?</h2>
            <p>
              Let’s build something great together. Reach out for a free consultation or to learn
              more about how I can help your project.
            </p>
            <Link to="/contact" className="button1">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
