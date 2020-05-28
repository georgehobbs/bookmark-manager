import React from "react";

function Download() {
  return (
    <div className="container-fluid" id="download-section">
      <div className="row">
        <div className="section-header">
          <h2>Download the extension</h2>
          <p className="section-header-text">
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="card chrome-card">
          <img src="./images/logo-chrome.svg" className="browser-logo" />
          <div class="card-body">
            <h5 class="card-title">Add to Chrome</h5>
            <p class="card-text">Minimum version 62</p>
            <div class="row">
              <img className="dots" src="./images/bg-dots.svg" />
            </div>
            <button className="btn dl-button">Add & Install Extension</button>
          </div>
        </div>
        <div class="card firefox-card">
          <img src="./images/logo-firefox.svg" className="browser-logo" />
          <div class="card-body">
            <h5 class="card-title">Add to Firefox</h5>
            <p class="card-text">Minimum version 55</p>
            <div class="row">
              <img className="dots" src="./images/bg-dots.svg" />
            </div>
            <button className="btn dl-button">Add & Install Extension</button>
          </div>
        </div>
        <div class="card opera-card">
          <img src="./images/logo-opera.svg" className="browser-logo" />
          <div class="card-body">
            <h5 class="card-title">Add to Opera</h5>
            <p class="card-text">Minimum version 46</p>
            <div class="row">
              <img className="dots" src="./images/bg-dots.svg" />
            </div>
            <button className="btn dl-button">Add & Install Extension</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Download;
