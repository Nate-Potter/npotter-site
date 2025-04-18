import React, { useEffect } from "react";
import SlowScroll from "../components/SlowScroll";

const HomePage = () => {
  SlowScroll();

  return (
    <div className="page-container">
      <div className="home-page">
        <div className="home-row row-a">
          <div className="home-main">
            <div className="home-header">
              <h1 className="home-title">Nathan Potter Web Development</h1>
              <h2 className="home-subtitle">Design. Develop. Deploy.</h2>
            </div>
          </div>
        </div>

        <div className="home-row">
          <p>Helping small businesses build a big web presence.</p>
        </div>
        <div className="home-row row-b">
          <p>Custom websites with clean code and purpose-driven design.</p>
        </div>
        <div className="home-row">
          <p>Turning ideas into interactive experiences.</p>
        </div>
        <div className="home-row row-c">
          <p>
            I'm Nathan Potter — a freelance web developer passionate about building fast,
            responsive, and purpose-driven websites. Whether you're a small business owner, a
            creative professional, or a startup ready to launch, I create digital experiences that
            not only look great but work beautifully under the hood. Let’s bring your vision online
            — with clean code, thoughtful design, and zero fuss.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
