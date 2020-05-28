import React, { useState } from "react";

function Contact() {
  const [emailInput, setEmailInput] = useState("");
  const [emailValidation, setEmailValidation] = useState();

  function updateEmail(e) {
    setEmailInput(e.target.value);
  }

  function checkEmail(e) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)) {
      setEmailValidation(true);
      setEmailInput("");
    } else {
      setEmailValidation(false);
    }
    e.preventDefault();
  }

  return (
    <div className="container-fluid" id="contact-section">
      <div className="section-header">
        <h3 className="already-joined">35,000+ already joined</h3>
        <h2 className="stay-updated">Stay up-to-date with what we’re doing</h2>
        <div className="form">
          <form onSubmit={checkEmail} noValidate>
            <div className="input-div">
              <input
                className={
                  "email-input " +
                  (emailValidation
                    ? "success"
                    : emailValidation === false
                    ? "failure"
                    : null)
                }
                name="email"
                type="email"
                placeholder="Enter your email address"
                size="40"
                value={emailInput}
                onChange={updateEmail}
                required
              />
              {emailValidation === true && (
                <div className="email-feedback success">
                  <p className="validation-text">Thanks! We'll be in touch.</p>
                </div>
              )}
              {emailValidation === false && (
                <div className="email-feedback failure">
                  <p className="validation-text">
                    Whoops! That's not a valid email.
                  </p>
                </div>
              )}
            </div>
            <button className="btn contact-button" type="submit" value="Submit">
              Contact Us
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
