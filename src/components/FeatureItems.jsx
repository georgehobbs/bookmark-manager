import React from "react";

function FeatureItems(props) {

  const activeTab = props.currentActiveTab;

  return (
    <div className="features-tabs">
      {activeTab === "tab1" && (
        <div className="row">
          <div className="col col-6-md order-1">
            <div className="feature-image-div">
              <img src="./images/illustration-features-tab-1.svg"></img>
              <div className="blue-left"></div>
            </div>
          </div>
          <div className="col col-6-md order-12 feature-item-div">
            <h2 className="feature-item-title">Bookmark in one click</h2>
            <p className="feature-item-text">
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites.
            </p>
            <button className="btn more-info">More Info</button>
          </div>
        </div>
      )}
      {activeTab === "tab2" && (
        <div className="row">
          <div className="col col-6-md order-1">
            <div className="feature-image-div">
              <img className="shift-image" src="./images/illustration-features-tab-2.svg"></img>
              <div className="blue-left"></div>
            </div>
          </div>
          <div className="col col-6-md order-12 feature-item-div">
            <h2 className="feature-item-title">Intelligent search</h2>
            <p className="feature-item-text">
              Our powerful search feature will help you find saved sites in no
              time at all. No need to trawl through all of your bookmarks.
            </p>
            <button className="btn more-info">More Info</button>
          </div>
        </div>
      )}
      {activeTab === "tab3" && (
        <div className="row">
          <div className="col col-6-md order-1">
            <div className="feature-image-div">
              <img className="shift-image" src="./images/illustration-features-tab-3.svg"></img>
              <div className="blue-left"></div>
            </div>
          </div>
          <div className="col col-6-md order-12 feature-item-div">
            <h2 className="feature-item-title">Share your bookmarks</h2>
            <p className="feature-item-text">
              Easily share your bookmarks and collections with others. Create a
              shareable link that you can send at the click of a button.
            </p>
            <button className="btn more-info">More Info</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default FeatureItems;
