import React, { useState } from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const chevronDownStyle = {
  color: "#5265e2",
  position: "absolute",
  right: "0",
  top: "10px",
  fontSize: "40",
  marginBottom: "20px",
};

const chevronUpStyle = {
  color: "#f65858",
  position: "absolute",
  right: "0",
  top: "10px",
  fontSize: "40",
  marginBottom: "20px",
};

function FAQs() {
  const [faqActive, setFaqActive] = useState("");

  function faqClicked(e) {
    faqActive === e.target.id ? setFaqActive("") : setFaqActive(e.target.id);
  }

  return (
    <div className="container-fluid" id="faqs-section">
      <div className="row">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p className="section-header-text">
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
        </div>
      </div>
      <div className="accordion">
        <div className="faq-card">
          <div className="row faq-question" id="faq1" onClick={faqClicked}>
            <h4>What is Bookmark?</h4>
            {faqActive === "faq1" ? (
              <div>
                <KeyboardArrowUpIcon style={chevronUpStyle} />
                <div className="faq-answer">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce tincidunt justo eget ultricies fringilla. Phasellus
                    blandit ipsum quis quam ornare mattis.
                  </p>
                </div>
              </div>
            ) : (
              <KeyboardArrowDownIcon style={chevronDownStyle} />
            )}
          </div>
        </div>
        <div className="faq-card">
          <div className="row faq-question" id="faq2" onClick={faqClicked}>
            <h4>How can I request a new browser?</h4>
            {faqActive === "faq2" ? (
              <div>
                <KeyboardArrowUpIcon style={chevronUpStyle} />
                <div className="faq-answer">
                  <p>
                    Vivamus luctus eros aliquet convallis ultricies. Mauris
                    augue massa, ultricies non ligula. Suspendisse imperdiet.
                    Vivamus luctus eros aliquet convallis ultricies. Mauris
                    augue massa, ultricies non ligula. Suspendisse imperdie
                    tVivamus luctus eros aliquet convallis ultricies. Mauris
                    augue massa, ultricies non ligula. Suspendisse imperdiet.
                  </p>
                </div>
              </div>
            ) : (
              <KeyboardArrowDownIcon style={chevronDownStyle} />
            )}
          </div>
        </div>
        <div className="faq-card">
          <div className="row faq-question" id="faq3" onClick={faqClicked}>
            <h4>Is there a mobile app?</h4>
            {faqActive === "faq3" ? (
              <div>
                <KeyboardArrowUpIcon style={chevronUpStyle} />
                <div className="faq-answer">
                  <p>
                    Sed consectetur quam id neque fermentum accumsan. Praesent
                    luctus vestibulum dolor, ut condimentum urna vulputate eget.
                    Cras in ligula quis est pharetra mattis sit amet pharetra
                    purus. Sed sollicitudin ex et ultricies bibendum.
                  </p>
                </div>
              </div>
            ) : (
              <KeyboardArrowDownIcon style={chevronDownStyle} />
            )}
          </div>
        </div>
        <div className="faq-card">
          <div className="row faq-question" id="faq4" onClick={faqClicked}>
            <h4>What about other Chromium browsers?</h4>
            {faqActive === "faq4" ? (
              <div>
                <KeyboardArrowUpIcon style={chevronUpStyle} />
                <div className="faq-answer">
                  <p>
                    Integer condimentum ipsum id imperdiet finibus. Vivamus in
                    placerat mi, at euismod dui. Aliquam vitae neque eget nisl
                    gravida pellentesque non ut velit.
                  </p>
                </div>
              </div>
            ) : (
              <KeyboardArrowDownIcon style={chevronDownStyle} />
            )}
          </div>
        </div>
      </div>
      <button className="btn faq-more-info">More Info</button>
    </div>
  );
}

export default FAQs;
