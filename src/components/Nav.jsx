import React, { useState } from "react";

function Header() {
  return (
    <div className="container-fluid" id="header-section">
      <nav className="navbar navbar-expand-sm main-nav">
        <img className="logo" src="./images/logo-bookmark.svg" />
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item">Features</li>
            <li className="nav-item">Pricing</li>
            <li className="nav-item">Contact</li>
          </ul>
          <button className="login-button btn btn-primary">Login</button>
        </div>
      </nav>
    </div>
  );
}

export default Header;
