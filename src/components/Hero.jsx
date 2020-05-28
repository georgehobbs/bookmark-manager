import React from "react";

function Hero() {
  return (
    <div className="container-fluid" id="hero-section">
      <div className="row">
        <div className="col col-6-md order-12">
          <div className="hero-image-div">
            <img src="./images/illustration-hero.svg"></img>
            <div className="blue-right"></div>
          </div>
        </div>
        <div className="col col-6-md order-1">
          <div className="hero-text-div">
            <h1 className="hero-heading">A Simple Bookmark Manager </h1>
            <p className="hero-text">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
            <button className="btn btn-primary chrome-button">Get it on Chrome</button>
            <button className="btn btn-primary firefox-button">Get it on Firefox</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
