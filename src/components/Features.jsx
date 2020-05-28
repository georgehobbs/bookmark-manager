import React, { useState } from "react";
import FeatureItems from "./FeatureItems";

function Features() {
  const [activeTab, setActiveTab] = useState("tab1");

  function changeActiveTab(e) {
    setActiveTab(e.target.id);
  }

  return (
    <div className="container-fluid" id="features-section">
      <div className="row">
        <div className="section-header">
          <h2>Features</h2>
          <p className="section-header-text">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
      </div>
      <div className="row">
        <nav className="navbar navbar-expand-md features-nav">
          <ul className="nav justify-content-center">
            <li
              id="tab1"
              className={
                "nav-item feature-tab " + (activeTab === "tab1" && "active")
              }
              onClick={changeActiveTab}
            >
              Simple Bookmarking
            </li>
            <li
              id="tab2"
              className={
                "nav-item feature-tab " + (activeTab === "tab2" && "active")
              }
              onClick={changeActiveTab}
            >
              Speedy Searching
            </li>
            <li
              id="tab3"
              className={
                "nav-item feature-tab " + (activeTab === "tab3" && "active")
              }
              onClick={changeActiveTab}
            >
              Easy Sharing
            </li>
          </ul>
        </nav>
      </div>
      <FeatureItems currentActiveTab={activeTab} />
    </div>
  );
}

export default Features;
