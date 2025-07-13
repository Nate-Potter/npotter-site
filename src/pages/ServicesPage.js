import React from "react";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  return (
    <div className="page services-page">
      <div className="blur">
        <div className="glass-container">
          <h1>Let’s Build Your Website</h1>
          <div className="services-main">
            <h4>Custom Website Development with React</h4>
            <p>
              Modern, high-performance websites built from the ground up — right here in the USA.
              Every project is crafted using React, tailored to your business goals and brand
              identity. No templates, no outsourcing — just clean, scalable code built with
              precision and care.
            </p>

            <h4>Responsive Design for All Devices</h4>
            <p>
              Your site will look sharp and function seamlessly on every screen. From phones to
              tablets to desktops — the site is designed to ensure the best experience for your
              users wherever they are.
            </p>
            <h4>Seamless Third-Party Integrations</h4>
            <p>
              Need to connect with tools like Mailchimp, Calendly, Stripe, or Shopify? I’ll
              integrate them into your site smoothly and style them to match your brand — no clunky
              plug-ins, no distractions.
            </p>
            <h4>Media-Rich & Engaging Features</h4>
            <p>
              Bring your content to life with interactive galleries, embedded videos, custom
              calendars, and more. I help you showcase your work in ways that feel modern and
              memorable.
            </p>
            <h4>Clean Code & SEO Optimization</h4>
            <p>
              Behind every beautiful site I build is clean, accessible code optimized for search
              engines. That means better visibility, faster load times, and long-term site health.
            </p>
            <h4>One-on-One Collaboration</h4>
            <p>
              I work directly with you throughout the process — from initial planning to final
              launch — to make sure your site reflects your goals, fits your brand, and is built to
              grow with your business.
            </p>
          </div>
          <h3>Ready to bring your project to life?</h3>
          <Link to="/contact" className="button1">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
