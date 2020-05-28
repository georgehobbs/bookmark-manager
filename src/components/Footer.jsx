import React from "react";

function Footer() {
  return (
    <div className="container-fluid" id="footer-section">
      <nav className="navbar navbar-expand-sm main-nav">
        <img className="logo-dark" src="./images/bookmark-dark.png" />
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav navbar-nav">
            <li className="nav-item bottom-nav-item">Features</li>
            <li className="nav-item bottom-nav-item">Pricing</li>
            <li className="nav-item bottom-nav-item">Contact</li>
          </ul>
          <div className="social-icons">
            <img className="social-icon" src="./images/icon-facebook.svg" />
            <img className="social-icon" src="./images/icon-twitter.svg" />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
